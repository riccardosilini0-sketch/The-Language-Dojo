#!/usr/bin/env python3
"""Generate the audio prototype for Sounds of English with Azure AI Speech (neural voices).

Runs in GitHub Actions (see .github/workflows/audio.yml). Never put a key in this file:
the key and region are read from the repository secrets AZURE_SPEECH_KEY and AZURE_SPEECH_REGION.

- One British voice for all British English audio, one American voice for GA comparisons.
- Words are sent as plain text; an entry can force a pronunciation with "ipa_tts" (SSML <phoneme>).
Output: english/phonetics/audio/proto/*.mp3 and english/phonetics/data/audio-proto.js
Standard library only (plus ffmpeg on the runner).
"""
import json, os, subprocess, sys, tempfile, time, urllib.request, urllib.error
from xml.sax.saxutils import escape, quoteattr

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SPEC = json.load(open(os.path.join(ROOT, "tools/audio/prototype.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "english/phonetics/audio/proto")
MANIFEST = os.path.join(ROOT, "english/phonetics/data/audio-proto.js")
KEY = os.environ.get("AZURE_SPEECH_KEY", "").strip()
REGION = os.environ.get("AZURE_SPEECH_REGION", "").strip().lower().replace(" ", "")
VOICES = {"bre": ["en-GB-SoniaNeural", "en-GB-LibbyNeural"], "ga": ["en-US-AvaNeural", "en-US-JennyNeural"]}
LANG = {"bre": "en-GB", "ga": "en-US"}
RATE = os.environ.get("TTS_RATE", "-8%")
os.makedirs(OUT, exist_ok=True)


def ffmpeg_clean(src, dst):
    """Mono, loudness-normalised, silence trimmed, 48 kbps MP3 (a few KB per word)."""
    af = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,"
          "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,"
          "loudnorm=I=-18:TP=-2:LRA=7")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", src, "-ac", "1", "-ar", "24000", "-af", af,
                    "-codec:a", "libmp3lame", "-b:a", "48k", dst], check=True)


def ssml(voice, lang, text, ipa=None):
    inner = f"<phoneme alphabet=\"ipa\" ph={quoteattr(ipa)}>{escape(text)}</phoneme>" if ipa else escape(text)
    return (f"<speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"{lang}\">"
            f"<voice name=\"{voice}\"><prosody rate=\"{RATE}\">{inner}</prosody></voice></speak>").encode("utf-8")


def tts(acc, text, path, ipa=None):
    last = None
    for voice in VOICES[acc]:
        req = urllib.request.Request(f"https://{REGION}.tts.speech.microsoft.com/cognitiveservices/v1",
                                     data=ssml(voice, LANG[acc], text, ipa), method="POST",
                                     headers={"Ocp-Apim-Subscription-Key": KEY, "Content-Type": "application/ssml+xml",
                                              "X-Microsoft-OutputFormat": "audio-48khz-96kbitrate-mono-mp3",
                                              "User-Agent": "LanguageDojoAudio"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                raw = r.read()
        except urllib.error.HTTPError as e:
            last = f"{voice}: HTTP {e.code}"; continue
        with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as f:
            f.write(raw)
        ffmpeg_clean(f.name, path); os.unlink(f.name); time.sleep(0.3)
        return voice
    raise RuntimeError(f"Azure TTS failed for '{text}': {last}")


def main():
    manifest = {"provider": "Azure AI Speech", "voices": {}, "phonemes": [], "words": [], "pairs": [], "model": "neural", "generated": time.strftime("%Y-%m-%d")}
    problems = []
    if not KEY or not REGION:
        problems.append("AZURE_SPEECH_KEY / AZURE_SPEECH_REGION are not set: nothing was generated.")
    else:
        try:
            for w in SPEC["words"]:
                files = {}
                for acc in w["accents"]:
                    fn = f"w-{w['id']}-{acc}.mp3"
                    manifest["voices"][acc] = {"name": tts(acc, w["text"], os.path.join(OUT, fn), w.get("ipa_tts") if acc == "bre" else None)}
                    files[acc] = [fn]
                manifest["words"].append(dict(w, files=files))
            for pr in SPEC["pairs"]:
                item = dict(pr)
                for side in ("a", "b"):
                    fn = f"p-{pr['id']}-{side}.mp3"
                    tts("bre", pr[side]["text"], os.path.join(OUT, fn), pr[side].get("ipa_tts"))
                    item[side] = dict(pr[side], files=[fn])
                manifest["pairs"].append(item)
        except RuntimeError as e:
            problems.append(str(e))
    # remove files from earlier runs that are no longer referenced
    used = {f for w in manifest["words"] for fs in w["files"].values() for f in fs} | {f for p in manifest["pairs"] for s in ("a", "b") for f in p[s]["files"]}
    if used:
        for f in os.listdir(OUT):
            if f not in used:
                os.remove(os.path.join(OUT, f))
    manifest["problems"] = problems
    with open(MANIFEST, "w", encoding="utf-8") as f:
        f.write("/* Generated by tools/audio/generate.py – do not edit by hand. */\nwindow.PHON_AUDIO_PROTO = "
                + json.dumps(manifest, ensure_ascii=False, indent=1) + ";\n")
    print(json.dumps({"words": len(manifest["words"]), "pairs": len(manifest["pairs"]), "problems": problems}, ensure_ascii=False, indent=1))
    if problems and KEY:
        sys.exit(1)


if __name__ == "__main__":
    main()
