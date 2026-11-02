#!/usr/bin/env python3
"""Generate the audio prototype for Sounds of English.

Runs in GitHub Actions (see .github/workflows/audio.yml). Never put an API key in this file:
the key is read from the ELEVENLABS_API_KEY environment variable (a GitHub repository secret).

- Words and minimal pairs: ElevenLabs text to speech, one British voice (and one American
  voice for General American comparisons). Each word is generated `TAKES` times; all takes are
  kept so the best one can be chosen by ear.
- Phonemes: authentic recordings from Wikimedia Commons (the sound files used by Wikipedia's
  IPA articles). Licence and author are read from the Commons API and saved with the audio.
Output: english/phonetics/audio/proto/*.mp3 and english/phonetics/data/audio-proto.js
Standard library only (plus ffmpeg on the runner).
"""
import json, os, re, subprocess, sys, tempfile, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SPEC = json.load(open(os.path.join(ROOT, "tools/audio/prototype.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "english/phonetics/audio/proto")
MANIFEST = os.path.join(ROOT, "english/phonetics/data/audio-proto.js")
KEY = os.environ.get("ELEVENLABS_API_KEY", "").strip()
MODEL = os.environ.get("ELEVEN_MODEL", "eleven_multilingual_v2")
TAKES = int(os.environ.get("TAKES", "2"))
UA = "LanguageDojoAudioBot/1.0 (educational site; https://the-language-dojo.netlify.app)"
OK_LICENCES = re.compile(r"^(public domain|pd|cc0|cc[- ]by(-sa)?[- ]?\d?(\.\d)?.*)$", re.I)
os.makedirs(OUT, exist_ok=True)


def http(url, data=None, headers=None, method=None):
    req = urllib.request.Request(url, data=data, headers=dict({"User-Agent": UA}, **(headers or {})), method=method)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def ffmpeg_clean(src, dst, trim=True):
    """Mono, loudness-normalised, silence trimmed, 64 kbps MP3 (a few KB per word)."""
    af = "loudnorm=I=-18:TP=-2:LRA=7"
    if trim:
        af = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05," \
             "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse," + af
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", src, "-ac", "1", "-ar", "44100", "-af", af,
                    "-codec:a", "libmp3lame", "-b:a", "64k", dst], check=True)


# ---------------- ElevenLabs ----------------
def eleven_voices():
    d = json.loads(http("https://api.elevenlabs.io/v1/voices", headers={"xi-api-key": KEY}))
    return d.get("voices", [])


def pick_voice(voices, accent, preferred):
    by = {v["name"].split(" ")[0].lower(): v for v in voices}
    for p in preferred:
        if p in by:
            return by[p]
    for v in voices:
        if accent in json.dumps(v.get("labels", {})).lower():
            return v
    raise SystemExit(f"No {accent} voice found among: {[v['name'] for v in voices]}")


def tts(voice_id, text, path):
    body = json.dumps({"text": text, "model_id": MODEL,
                       "voice_settings": {"stability": 0.7, "similarity_boost": 0.8, "style": 0.0, "use_speaker_boost": True}}).encode()
    raw = http(f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128", data=body,
               headers={"xi-api-key": KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"}, method="POST")
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as f:
        f.write(raw)
    ffmpeg_clean(f.name, path)
    os.unlink(f.name)


# ---------------- Wikimedia Commons ----------------
def commons_file(names):
    for name in names:
        q = urllib.parse.urlencode({"action": "query", "titles": "File:" + name, "prop": "imageinfo",
                                    "iiprop": "url|extmetadata", "format": "json"})
        d = json.loads(http("https://commons.wikimedia.org/w/api.php?" + q))
        page = next(iter(d["query"]["pages"].values()))
        if "imageinfo" not in page:
            continue
        ii = page["imageinfo"][0]; md = ii.get("extmetadata", {})
        strip = lambda s: re.sub(r"<[^>]+>", "", (md.get(s) or {}).get("value", "")).strip()
        return {"name": name, "url": ii["url"], "page": ii.get("descriptionurl", ""),
                "licence": strip("LicenseShortName"), "licence_url": strip("LicenseUrl"), "author": re.sub(r"^No machine-readable author provided\. (\S+) assumed.*$", r"\1", strip("Artist")) or "Wikimedia Commons contributor"}
    return None


def main():
    manifest = {"voices": {}, "phonemes": [], "words": [], "pairs": [], "model": MODEL, "generated": time.strftime("%Y-%m-%d")}
    problems = []

    # phonemes (free, no key needed)
    for p in SPEC["phonemes"]:
        info = commons_file(p["files"])
        if not info:
            problems.append(f"phoneme {p['ipa']}: none of {p['files']} found on Commons"); continue
        if not OK_LICENCES.match(info["licence"]):
            problems.append(f"phoneme {p['ipa']}: licence '{info['licence']}' not accepted"); continue
        src = os.path.join(tempfile.gettempdir(), "src_" + p["id"])
        open(src, "wb").write(http(info["url"]))
        ffmpeg_clean(src, os.path.join(OUT, f"ph-{p['id']}.mp3"), trim=False)
        manifest["phonemes"].append(dict(p, file=f"ph-{p['id']}.mp3", source=info))
        time.sleep(1)

    # words and pairs (ElevenLabs)
    if not KEY:
        problems.append("ELEVENLABS_API_KEY is not set: words and minimal pairs were not generated.")
    else:
        voices = eleven_voices()
        uk = pick_voice(voices, "british", ["alice", "george", "lily", "daniel"])
        us = pick_voice(voices, "american", ["sarah", "brian", "jessica", "chris"])
        manifest["voices"] = {"bre": {"name": uk["name"], "id": uk["voice_id"]}, "ga": {"name": us["name"], "id": us["voice_id"]}}
        vid = {"bre": uk["voice_id"], "ga": us["voice_id"]}
        for w in SPEC["words"]:
            files = {}
            for acc in w["accents"]:
                files[acc] = []
                for t in range(1, TAKES + 1):
                    fn = f"w-{w['id']}-{acc}-{t}.mp3"; tts(vid[acc], w["text"] + ".", os.path.join(OUT, fn)); files[acc].append(fn)
            manifest["words"].append(dict(w, files=files))
        for pr in SPEC["pairs"]:
            item = dict(pr)
            for side in ("a", "b"):
                takes = []
                for t in range(1, TAKES + 1):
                    fn = f"p-{pr['id']}-{side}-{t}.mp3"; tts(vid["bre"], pr[side]["text"] + ".", os.path.join(OUT, fn)); takes.append(fn)
                item[side] = dict(pr[side], files=takes)
            manifest["pairs"].append(item)

    manifest["problems"] = problems
    with open(MANIFEST, "w", encoding="utf-8") as f:
        f.write("/* Generated by tools/audio/generate.py – do not edit by hand. */\nwindow.PHON_AUDIO_PROTO = "
                + json.dumps(manifest, ensure_ascii=False, indent=1) + ";\n")
    print(json.dumps({"phonemes": len(manifest["phonemes"]), "words": len(manifest["words"]), "pairs": len(manifest["pairs"]), "problems": problems}, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
