/* Builds tools/audio/jobs.json: every piece of audio the site needs.
   Run by the GitHub Action before generate.py (node tools/audio/build_jobs.js), so the audio
   always follows the content files. Each job: {set, key, text, accent, ipa?}
   set "phonetics" → english/phonetics/audio + data/audio.js
   set "verbs"     → english/irregular-verbs/audio + audio-data.js
   set "skills"    → english/skills/audio + data/audio.js: {set, key, parts: [[voice, text]…], rate} = one track */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "../..");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");

// homographs: force the intended pronunciation (SSBE IPA)
const IPA = { read: "riːd", lead: "liːd", live: "lɪv", does: "dʌz", wound: "wuːnd", tear: "teə", bow: "baʊ" };
const jobs = new Map();
const add = (set, text, accent = "bre") => {
  text = String(text || "").trim(); if (!text) return;
  const key = (accent === "ga" ? "ga:" : "") + text.toLowerCase();
  const id = set + "|" + key;
  if (!jobs.has(id)) jobs.set(id, { set, key, text, accent, ipa: accent === "bre" ? IPA[text.toLowerCase()] : undefined });
};

/* ---------- Sounds of English ---------- */
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext("var window = this.window;", ctx);
for (const f of ["core", "vowels", "diphthongs", "consonants", "lessons", "exercises"]) {
  let src = read(`english/phonetics/data/${f}.js`);
  if (f === "core") src = src.replace("window.Phon =", "window.Phon = this.Phon =");
  vm.runInContext(src.replace(/^Phon\./m, "window.Phon."), ctx);
}
const P = ctx.window.Phon;
const gaWords = cell => cell.replace(/\(.*?\)/g, "").split(/[,–-]/).map(s => s.trim()).filter(w => /^[a-z]+$/i.test(w));
P.sounds.forEach(s => {
  add("phonetics", s.keyword);
  s.examples.forEach(([w]) => add("phonetics", w));
  (s.compare || []).forEach(c => (c.pairs || []).forEach(([a, b]) => { add("phonetics", a); add("phonetics", b); }));
  if (s.ga) s.ga.rows.forEach(r => gaWords(r[0]).forEach(w => { add("phonetics", w); add("phonetics", w, "ga"); }));
});
P.lessons.forEach(l => l.blocks.forEach(b => {
  if (b[0] === "stress") b[1].forEach(x => add("phonetics", x[0]));
  if (b[0] === "ga") b[1].forEach(r => gaWords(r[0]).forEach(w => { add("phonetics", w); add("phonetics", w, "ga"); }));
  if (b[0] === "sentences") b[2].forEach(r => add("phonetics", r[r.length - 1]));
}));
P.exercises.forEach(({ row: r }) => {
  if (r[0] === "multi") add("phonetics", r[2]);
  if (r[0] === "seg") add("phonetics", r[3]);
  if (r[0] === "stress" && !r[7]) add("phonetics", r[2]);
});

/* ---------- Irregular verbs (same keys as english/irregular-verbs/app.js) ---------- */
const vctx = { window: {} }; vm.createContext(vctx);
vm.runInContext(read("english/irregular-verbs/verbs-data.js"), vctx);
const sayKey = (v, f) => (v.say && v.say[f]) || v[f].replace(/\s*[\/,]\s*/g, " or ");
vctx.window.VERB_DATA.forEach(r => {
  const v = { base: r[0], past: r[1], pp: r[2], say: r[5] || {} };
  ["base", "past", "pp"].forEach(f => add("verbs", sayKey(v, f)));
});

/* ---------- Skill Development: one recording per task (several voices in one track) ---------- */
const sctx = { window: {} }; vm.createContext(sctx);
vm.runInContext("var window = this.window;", sctx);
for (const f of ["core", "reading", "use", "writing", "listening"]) {
  let src = read(`english/skills/data/${f}.js`);
  if (f === "core") src = src.replace("window.Skills =", "window.Skills = this.Skills =");
  vm.runInContext(src.replace(/^Skills\./m, "window.Skills."), sctx);
}
sctx.window.Skills.tasks.forEach(t => {
  let parts = null;
  if (t.skill === "listening" && t.script) parts = t.script.map(([sp, line]) => [t.speakers[sp], line]);
  else if (t.skill === "reading" && t.voice) {
    if (t.text) parts = t.text.map(p => [t.voice, p.replace(/\s*\[\d+\]\s*/g, " ")]);
    if (t.sections) parts = t.sections.flatMap(([l, name, text]) => [[t.voice, `${l}. ${name}.`], [t.voice, text]]);
  }
  if (parts) jobs.set("skills|" + t.id, { set: "skills", key: t.id, parts, rate: t.skill === "listening" ? (t.level <= 3 ? "-6%" : "0%") : "-4%" });
});

const list = [...jobs.values()];
fs.writeFileSync(path.join(__dirname, "jobs.json"), JSON.stringify(list, null, 0));
console.log(`jobs: ${list.length} (phonetics ${list.filter(j => j.set === "phonetics").length}, verbs ${list.filter(j => j.set === "verbs").length}, skills ${list.filter(j => j.set === "skills").length})`);
