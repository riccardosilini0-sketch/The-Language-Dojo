/* =====================================================================
   Sounds of English (phonetics & phonology) — interface
   Content lives in data/*.js (window.Phon). This file renders units, lessons,
   sound cards and charts, generates extra exercises from the sound cards and
   runs practice sessions. Progress is saved on the device
   (localStorage "language-dojo:en-phonetics").
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast, dialog } = window.Dojo;
  const B = window.DojoBelts, P = window.Phon;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const uniq = a => [...new Set(a)];

  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    sound: I('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
    play: I('<path d="M7 5v14l11-7z"/>'), book: I('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>'), done: I('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>')
  };

  /* ---------------- data ---------------- */
  const SOUNDS = P.sounds, byId = Object.fromEntries(SOUNDS.map(s => [s.id, s]));
  const LESSONS = P.lessons, lessonById = Object.fromEntries(LESSONS.map(l => [l.id, l]));
  const UNITS = [
    { id: "intro", title: "Start here", short: "Start here", sub: "Phonetics, phonology and the IPA" },
    { id: "vowels", n: 1, title: "Vowel Sounds", short: "Vowels", sub: "12 pure vowels" },
    { id: "diphthongs", n: 2, title: "Diphthongs", short: "Diphthongs", sub: "8 glides" },
    { id: "consonants", n: 3, title: "Consonant Sounds", short: "Consonants", sub: "24 consonants · sound and spelling" },
    { id: "stress", n: 4, title: "Word Stress", short: "Word Stress", sub: "Stress, patterns and reduction" },
    { id: "revision", n: 5, title: "Revision & Practice", short: "Revision", sub: "Mixed practice and the final test" }
  ];
  const unitById = Object.fromEntries(UNITS.map(u => [u.id, u]));
  const SOUND_UNITS = ["vowels", "diphthongs", "consonants"];
  const VOWEL_GROUPS = [["short", "Short vowels"], ["long", "Long vowels"], ["central", "Central vowels"]];
  const unitOfTopic = id => (byId[id] || lessonById[id] || {}).unit;
  const titleOf = id => byId[id] ? `/${byId[id].ipa}/` : (lessonById[id] || {}).title || id;

  /* ---------------- storage ---------------- */
  const Store = {
    key: "language-dojo:en-phonetics", data: null,
    fresh: () => ({ seen: {}, best: {}, last: "" }),
    load() { let d = null; try { d = JSON.parse(localStorage.getItem(this.key) || "null"); } catch (e) {} this.data = Object.assign(this.fresh(), d || {}); },
    save() { try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) {} },
    reset() { this.data = this.fresh(); this.save(); }
  };

  /* ---------------- IPA, text and audio helpers ---------------- */
  // Wraps /…/ and […] in the IPA font. Plain text is escaped first.
  const ipaText = t => esc(t).replace(/(\/[^\/\s][^\/]*?\/|\[[^\]\s][^\]]*?\])/g, m => `<span class="ipa">${m}</span>`);
  const hl = t => esc(t).replace(/\{([^}]+)\}/g, '<u class="hl">$1</u>');
  const hlIpa = t => ipaText(t).replace(/\{([^}]+)\}/g, '<u class="hl">$1</u>');
  const ipaBare = s => `<span class="ipa">${esc(s)}</span>`;
  const slash = s => `<span class="ipa">/${esc(s)}/</span>`;
  const AUDIO = window.PHON_AUDIO || {};
  let audioEl = null;
  // Pre-recorded MP3s (Azure neural voices, see tools/audio). "ga:word" = American voice.
  // Several keys separated by | are played one after another. The browser voice is only a last resort.
  let sayToken = 0;
  function say(spec) {
    const keys = String(spec || "").split("|").map(k => k.trim()).filter(Boolean); if (!keys.length) return;
    const my = ++sayToken; if (audioEl) audioEl.pause(); if ("speechSynthesis" in window) speechSynthesis.cancel();
    const next = i => {
      if (my !== sayToken || i >= keys.length) return;
      const k = keys[i], f = AUDIO[k.toLowerCase()];
      const go = () => setTimeout(() => next(i + 1), 350);
      if (f) { audioEl = new Audio("audio/" + f); audioEl.onended = go; audioEl.play().catch(() => tts(k, go)); }
      else tts(k, go);
    };
    next(0);
  }
  function tts(k, done) {
    if (!("speechSynthesis" in window)) return done && done();
    const ga = k.startsWith("ga:"), u = new SpeechSynthesisUtterance(k.replace(/^ga:/, "")); u.lang = ga ? "en-US" : "en-GB"; u.rate = .85;
    const v = speechSynthesis.getVoices().find(v => (ga ? /en[-_]US/i : /en[-_]GB/i).test(v.lang)); if (v) u.voice = v;
    u.onend = done; speechSynthesis.speak(u);
  }
  const spk = w => `<button class="spk" type="button" data-say="${esc(w)}" aria-label="Listen: ${esc(w)}">${ICON.sound}</button>`;

  /* ---------------- answer normalisation ---------------- */
  const HOMO = [["sea", "see"], ["no", "know"], ["eye", "i"], ["buy", "by", "bye"], ["four", "for", "fore"], ["hear", "here"], ["where", "wear"], ["there", "their", "they're"], ["son", "sun"], ["wood", "would"], ["not", "knot"], ["new", "knew"], ["one", "won"], ["great", "grate"], ["eight", "ate"], ["hair", "hare"], ["bear", "bare"], ["tea", "tee"], ["pea", "pee"], ["bee", "be"], ["him", "hymn"], ["whale", "wail"], ["sale", "sail"], ["too", "two", "to"], ["find", "fined"], ["right", "write"], ["night", "knight"], ["meet", "meat"], ["peace", "piece"], ["weight", "wait"], ["red", "read"], ["some", "sum"], ["so", "sew"], ["made", "maid"], ["road", "rode"], ["cell", "sell"], ["flower", "flour"], ["mail", "male"], ["tale", "tail"], ["plain", "plane"], ["steal", "steel"], ["week", "weak"], ["dear", "deer"], ["die", "dye"], ["hole", "whole"], ["blue", "blew"], ["high", "hi"], ["time", "thyme"], ["beer", "bier"], ["bread", "bred"], ["what", "watt"], ["saw", "sore", "soar"], ["caught", "court"], ["crude", "crewed"], ["shoe", "shoo"], ["heard", "herd"], ["father", "farther"], ["rain", "reign", "rein"], ["wet", "whet"], ["talk", "torque"], ["so", "sew", "sow"]];
  const normW = s => String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,;:!?"“”()]/g, " ").replace(/-/g, " ").replace(/\s+/g, " ").trim();
  function accepts(answers, given) {
    const g = normW(given); if (!g) return false;
    const set = new Set(answers.map(normW));
    answers.forEach(a => HOMO.forEach(grp => { if (grp.includes(normW(a))) grp.forEach(x => set.add(x)); }));
    return set.has(g);
  }

  /* ---------------- exercise building ---------------- */
  // Every exercise becomes a question object {type, belt, topic, ...}.
  function fromRow(topic, r) {
    const q = { topic, belt: r[1] };
    switch (r[0]) {
      case "m": return Object.assign(q, { type: "mc", prompt: r[2], opts: r[3], answer: r[3][0], expl: r[4] });
      case "choice": return Object.assign(q, { type: "choice", prompt: r[2], opts: r[3], answer: r[3][r[4]], expl: r[5] });
      case "sort": return Object.assign(q, { type: "sort", prompt: r[2], cols: r[3], items: r[4], expl: r[5] });
      case "multi": return Object.assign(q, { type: "multi", word: r[2], opts: r[3], correct: r[4], expl: r[5] });
      case "seg": return Object.assign(q, { type: "seg", prompt: r[2], word: r[3], parts: r[4], correct: r[5], ipa: r[6], expl: r[7] });
      case "write": return Object.assign(q, { type: "write", ipa: r[2], answers: r[3], expl: r[4] });
      case "stress": return Object.assign(q, { type: "stress", word: r[2], syl: r[3], idx: r[4], ipa: r[5], expl: r[6], context: r[7] });
      case "odd": return Object.assign(q, { type: "odd", opts: r[2], answer: r[2][r[3]], expl: r[4] });
      case "gap": return Object.assign(q, { type: "gap", text: r[2], answers: r[3], expl: r[4], bank: r[5] });
      case "text": return Object.assign(q, { type: "text", ipa: r[2], answer: r[3], expl: r[4] });
      case "match": return Object.assign(q, { type: "match", prompt: r[2], pairs: r[3], expl: r[4] });
    }
    throw new Error("Unknown exercise format " + r[0]);
  }

  const kind = s => s.unit === "consonants" ? "consonant" : s.unit === "diphthongs" ? "diphthong" : "vowel";
  const descOf = s => s.unit === "consonants" ? `${s.voice} ${s.place} ${s.manner}` : s.unit === "diphthongs" ? `${s.type}: from ${s.startDesc} to ${s.endDesc}` : `${s.length}, ${s.height}, ${s.front}, ${s.lips}`;
  const tokens = ipa => P.split(ipa);
  const without = (word, syms) => syms.filter(x => !tokens(word).includes(x));
  // candidate distractor sounds for s: compared sounds first, then the rest of the unit
  const neighbours = s => uniq([...(s.compare || []).map(c => c.id).filter(id => byId[id] && byId[id].unit === s.unit), ...shuffle(SOUNDS.filter(x => x.unit === s.unit && x.id !== s.id).map(x => x.id))]).map(id => byId[id]);

  function generated(s) {
    const out = [], K = kind(s), ex = s.examples, nb = neighbours(s);
    ex.forEach(([w, ipa]) => {
      // 1. which sound do you hear in the word?
      const dis = nb.filter(o => !tokens(ipa).includes(o.ipa)).slice(0, 3);
      if (dis.length === 3) out.push({ type: "mc", belt: 1, prompt: `Which of these sounds do you hear in “${w}”?`, opts: [`/${s.ipa}/`, ...dis.map(o => `/${o.ipa}/`)], answer: `/${s.ipa}/`, expl: `${w} ${ipa}`, say: w });
      // 3. which transcription is correct?
      const tk = tokens(ipa), pos = tk.indexOf(s.ipa);
      if (pos >= 0) {
        const wrong = nb.slice(0, 6).map(o => { const t = [...tk]; t[pos] = o.ipa; return "/" + t.join("") + "/"; }).filter(x => x !== ipa);
        const opts = uniq([ipa, ...wrong]).slice(0, 4);
        if (opts.length === 4) out.push({ type: "mc", belt: 3, prompt: `Which is the correct transcription of “${w}”?`, opts, answer: ipa, expl: `${w} ${ipa}`, say: w });
        // 4. error correction
        const o = nb[0];
        if (o) { const t = [...tk]; t[pos] = o.ipa; const syms = uniq([s.ipa, o.ipa, ...nb.slice(1, 3).map(x => x.ipa)]); if (syms.length >= 3) out.push({ type: "fix", belt: 4, word: w, segs: t, wrong: pos, correct: s.ipa, opts: syms, ipa, expl: `${w} is ${ipa}: the transcription had /${o.ipa}/ instead of /${s.ipa}/.` }); }
      }
      // 5. transcription → word
      out.push({ type: "write", belt: 3, ipa, answers: [w], expl: `${ipa} = ${w}`, say: w });
    });
    // 2. which word contains the sound?
    for (let k = 0; k < Math.min(3, ex.length); k++) {
      const [w, ipa] = ex[k];
      const others = shuffle(SOUNDS.filter(o => o.unit === s.unit && o.id !== s.id).flatMap(o => o.examples)).filter(([, i]) => !tokens(i).includes(s.ipa));
      const ws = uniq(others.map(o => o[0])).slice(0, 3);
      if (ws.length === 3) out.push({ type: "mc", belt: 2, prompt: `Which word contains /${s.ipa}/?`, opts: [w, ...ws], answer: w, expl: `${w} ${ipa}; ${ws.map(x => `${x} ${(others.find(o => o[0] === x) || [])[1]}`).join("; ")}`, say: w });
    }
    // 6. minimal-pair listening
    (s.compare || []).forEach(c => (c.pairs || []).forEach(([a, b]) => {
      const target = Math.random() < .5 ? a : b;
      out.push({ type: "listen", belt: c.id && byId[c.id] && byId[c.id].unit === s.unit ? 2 : 3, word: target, opts: [a, b], answer: target, expl: `${a} – ${b}: ${c.note || ""}`, pair: [s.id, c.id] });
    }));
    // 7. description
    const dd = nb.slice(0, 3);
    if (dd.length === 3) out.push({ type: "mc", belt: 3, prompt: `Which description matches /${s.ipa}/?`, opts: [descOf(s), ...dd.map(descOf)], answer: descOf(s), expl: `/${s.ipa}/ (${s.keyword}): ${descOf(s)}.` });
    const symPrompt = K === "diphthong" ? `Which diphthong is ${s.type}, starting ${s.startDesc} and gliding to ${s.endDesc}?` : K === "consonant" ? `Which symbol represents a ${descOf(s)}?` : `Which vowel is ${descOf(s)}?`;
    if (dd.length === 3) out.push({ type: "mc", belt: 3, prompt: symPrompt, opts: [`/${s.ipa}/`, ...dd.map(o => `/${o.ipa}/`)], answer: `/${s.ipa}/`, expl: `/${s.ipa}/ as in ${s.keyword}.` });
    if (K === "consonant") {
      out.push({ type: "choice", belt: 1, prompt: `Is /${s.ipa}/ voiced or voiceless?`, opts: ["voiced", "voiceless"], answer: s.voice, expl: `/${s.ipa}/ is a ${descOf(s)}.` });
      const places = uniq(SOUNDS.filter(o => o.unit === "consonants").map(o => o.place)), manners = uniq(SOUNDS.filter(o => o.unit === "consonants").map(o => o.manner));
      out.push({ type: "mc", belt: 2, prompt: `What is the place of articulation of /${s.ipa}/?`, opts: [s.place, ...shuffle(places.filter(p => p !== s.place)).slice(0, 3)], answer: s.place, expl: `/${s.ipa}/ is a ${descOf(s)}.` });
      out.push({ type: "mc", belt: 2, prompt: `What is the manner of articulation of /${s.ipa}/?`, opts: [s.manner, ...shuffle(manners.filter(p => p !== s.manner)).slice(0, 3)], answer: s.manner, expl: `/${s.ipa}/ is a ${descOf(s)}.` });
    }
    if (K === "vowel") out.push({ type: "choice", belt: 1, prompt: `Is /${s.ipa}/ a short or a long vowel?`, opts: ["short", "long"], answer: s.length, expl: `/${s.ipa}/ (${s.keyword}) is ${s.length}.` });
    if (K === "diphthong") out.push({ type: "choice", belt: 2, prompt: `Is /${s.ipa}/ a centring or a closing diphthong?`, opts: ["centring", "closing"], answer: s.type, expl: `/${s.ipa}/ glides to ${s.endDesc}: ${s.type}.` });
    return out.map(q => Object.assign(q, { topic: s.id, gen: true }));
  }
  // lesson-level generated exercises
  function lessonGenerated(id) {
    const out = [], take = (u, n) => shuffle(SOUNDS.filter(s => s.unit === u)).slice(0, n);
    const keyMatch = (u, b) => ({ type: "match", belt: b, prompt: "Match each symbol with a word that contains it.", pairs: take(u, 5).map(s => [`/${s.ipa}/`, s.keyword]), expl: "" });
    const descMatch = (u, b) => ({ type: "match", belt: b, prompt: "Match each symbol with its description.", pairs: take(u, 4).map(s => [`/${s.ipa}/`, descOf(s)]), expl: "" });
    if (id === "l-44") for (let i = 0; i < 4; i++) out.push(keyMatch(pick(SOUND_UNITS), 2));
    if (id === "l-v-describe" || id === "l-v-short-long") for (let i = 0; i < 3; i++) { out.push(keyMatch("vowels", 2)); out.push(descMatch("vowels", 4)); }
    if (id === "l-d-classify") for (let i = 0; i < 3; i++) { out.push(keyMatch("diphthongs", 2)); out.push(descMatch("diphthongs", 3)); }
    if (["l-c-chart", "l-c-place", "l-c-manner", "l-c-describe"].includes(id)) {
      for (let i = 0; i < 3; i++) { out.push(keyMatch("consonants", 2)); out.push(descMatch("consonants", 4)); }
      const want = { "l-c-describe": q => q.type === "choice", "l-c-place": q => /place of articulation/.test(q.prompt || ""), "l-c-manner": q => /manner of articulation/.test(q.prompt || ""), "l-c-chart": q => /description matches|symbol represents/.test(q.prompt || "") }[id];
      SOUNDS.filter(s => s.unit === "consonants").forEach(s => generated(s).filter(want).forEach(q => out.push(Object.assign({}, q))));
    }
    return out.map(q => Object.assign(q, { topic: id, gen: true }));
  }
  const handwritten = id => P.exercises.filter(e => e.topic === id).map(e => fromRow(id, e.row));
  const poolFor = id => [...handwritten(id), ...(byId[id] ? generated(byId[id]) : lessonGenerated(id))];
  const unitPool = u => [
    ...LESSONS.filter(l => l.unit === u).flatMap(l => poolFor(l.id)),
    ...SOUNDS.filter(s => s.unit === u).flatMap(s => poolFor(s.id))
  ];
  // a balanced random selection, easier questions first
  const qKey = q => [q.type, q.prompt || "", q.word || "", q.ipa || "", (q.opts || []).slice().sort().join("|"), (q.pairs || []).map(p => p.join("=")).join("|")].join("#");
  function selectQs(pool, n) {
    const seen = new Set(); pool = shuffle(pool).filter(q => { const k = qKey(q); if (seen.has(k)) return false; seen.add(k); return true; });
    const byType = {}; pool.forEach(q => (byType[q.type] = byType[q.type] || []).push(q));
    const out = []; let added = true;
    while (out.length < n && added) { added = false; for (const t of shuffle(Object.keys(byType))) { if (byType[t].length && out.length < n) { out.push(byType[t].shift()); added = true; } } }
    return out.sort((a, b) => a.belt - b.belt);
  }
  const hasExercises = id => handwritten(id).length > 0 || !!byId[id] || lessonGenerated(id).length > 0;

  /* ---------------- charts ---------------- */
  const CH = { x0: 46, x1: 384, y0: 28, y1: 262, xo: 176 };
  const cp = ([x, y]) => { const left = CH.x0 + (CH.xo - CH.x0) * y / 100; return [left + (CH.x1 - left) * x / 100, CH.y0 + (CH.y1 - CH.y0) * y / 100]; };
  function chartFrame(inner, labels = true) {
    const [a, b, c, d] = [cp([0, 0]), cp([100, 0]), cp([100, 100]), cp([0, 100])];
    const hline = y => { const [l] = cp([0, y]), [r] = cp([100, y]); return `<line x1="${l}" y1="${cp([0, y])[1]}" x2="${r}" y2="${cp([0, y])[1]}"/>`; };
    const [m0] = cp([50, 0]), [m1] = cp([50, 100]);
    return `<svg class="vchart" viewBox="0 0 430 290" role="img" aria-label="Vowel chart">
      <g class="vframe"><polygon points="${a} ${b} ${c} ${d}"/>${hline(33.3)}${hline(66.6)}<line x1="${m0}" y1="${CH.y0}" x2="${m1}" y2="${CH.y1}"/></g>
      ${labels ? `<g class="vlab"><text x="${a[0]}" y="16" text-anchor="middle">front</text><text x="${m0}" y="16" text-anchor="middle">central</text><text x="${b[0]}" y="16" text-anchor="middle">back</text>
      <text x="${a[0] - 8}" y="${a[1] + 4}" text-anchor="end">close</text><text x="${cp([0, 33.3])[0] - 8}" y="${cp([0, 33.3])[1] + 4}" text-anchor="end">close-mid</text><text x="${cp([0, 66.6])[0] - 8}" y="${cp([0, 66.6])[1] + 4}" text-anchor="end">open-mid</text><text x="${d[0] - 8}" y="${d[1] + 4}" text-anchor="end">open</text></g>` : ""}
      ${inner}</svg>`;
  }
  function vowelChart(highlight, filter) {
    const vs = SOUNDS.filter(s => s.unit === "vowels" && (!filter || filter(s)));
    return chartFrame(vs.map(s => { const [x, y] = cp(s.chart), on = !highlight || highlight.includes(s.id), rx = x > 330 ? -14 : 10;
      return `<a href="#${s.id}" class="vdot ${on ? "on" : "off"}" aria-label="/${s.ipa}/ ${s.keyword}"><circle cx="${x}" cy="${y}" r="${on ? 7 : 5}"/><text x="${x + rx}" y="${y + 6}" text-anchor="${x > 330 ? "end" : "start"}" class="ipa">${esc(s.ipa)}</text></a>`; }).join(""));
  }
  function diphChart(ids) {
    const ds = SOUNDS.filter(s => s.unit === "diphthongs" && (!ids || ids.includes(s.id)));
    return chartFrame(`<defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="currentColor"/></marker></defs>` +
      ds.map(s => { const [x1, y1] = cp(s.from), [x2, y2] = cp(s.to); return `<a href="#${s.id}" class="dglide" aria-label="/${s.ipa}/"><circle cx="${x1}" cy="${y1}" r="5"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#arr)"/><text x="${x1 + (x1 > 300 ? -10 : 8)}" y="${y1 + (y1 > 240 ? -8 : 16)}" text-anchor="${x1 > 300 ? "end" : "start"}" class="ipa">${esc(s.ipa)}</text></a>`; }).join(""), !ids || ids.length > 1);
  }
  function phonemeChart() {
    const g = (title, ids) => `<div class="pc-group"><h4>${title}</h4><div class="pc-row">${ids.map(id => { const s = byId[id]; return `<a class="pc" href="#${id}"><span class="ipa">${esc(s.ipa)}</span><small>${esc(s.keyword)}</small></a>`; }).join("")}</div></div>`;
    return `<div class="pchart"><div class="pc-col"><h3>Vowels (20)</h3>
      ${g("Short vowels", ["v-i", "v-e", "v-ae", "v-uh", "v-o", "v-u", "v-schwa"])}${g("Long vowels", ["v-ii", "v-aa", "v-oo", "v-uu", "v-er"])}${g("Diphthongs", ["d-ei", "d-ai", "d-oi", "d-ou", "d-au", "d-ia", "d-ea", "d-ua"])}</div>
      <div class="pc-col"><h3>Consonants (24)</h3>
      ${g("Voiceless", ["c-p", "c-t", "c-k", "c-f", "c-th", "c-s", "c-sh", "c-ch"])}${g("Voiced", ["c-b", "c-d", "c-g", "c-v", "c-dh", "c-z", "c-zh", "c-j"])}${g("Nasals · approximants · /h/ (voiceless)", ["c-m", "c-n", "c-ng", "c-l", "c-r", "c-w", "c-y", "c-h"])}</div></div>`;
  }
  function consonantChart(hi) {
    const places = ["bilabial", "labiodental", "dental", "alveolar", "postalveolar", "palatal", "velar", "glottal"];
    const manners = ["plosive", "fricative", "affricate", "nasal", "lateral approximant", "approximant"];
    const cs = SOUNDS.filter(s => s.unit === "consonants");
    const cell = (m, p) => {
      let list = cs.filter(s => s.manner === m && s.place === p);
      if (m === "approximant" && (p === "bilabial" || p === "velar")) list = cs.filter(s => s.id === "c-w");
      list.sort((a, b) => (a.voice === "voiceless" ? 0 : 1) - (b.voice === "voiceless" ? 0 : 1));
      return list.map(s => `<a href="#${s.id}" class="cc ${hi && hi === s.id ? "on" : ""} ${s.voice}" title="${esc(descOf(s))}">${s.id === "c-w" ? "(w)" : esc(s.ipa)}</a>`).join("");
    };
    return `<div class="cchart-wrap"><table class="cchart"><thead><tr><th></th>${places.map(p => `<th>${p.replace("labiodental", "labio-dental").replace("postalveolar", "post-alveolar")}</th>`).join("")}</tr></thead>
      <tbody>${manners.map(m => `<tr><th>${m}</th>${places.map(p => `<td>${cell(m, p)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <p class="chart-key"><span class="cc voiceless sample">p</span> voiceless · <span class="cc voiced sample">b</span> voiced</p>`;
  }

  /* ---------------- blocks ---------------- */
  function block(b) {
    switch (b[0]) {
      case "p": return `<p class="lp">${ipaText(b[1])}</p>`;
      case "note": return `<div class="lnote">${ipaText(b[1])}</div>`;
      case "list": return `<ul class="llist">${b[1].map(x => `<li>${ipaText(x)}</li>`).join("")}</ul>`;
      case "cards": return `<div class="lcards">${b[1].map(([t, x]) => `<div class="card lcard"><h4>${ipaText(t)}</h4><p>${ipaText(x)}</p></div>`).join("")}</div>`;
      case "table": return `<div class="ltable-wrap"><table class="ltable"><thead><tr>${b[1].map(h => `<th>${ipaText(h)}</th>`).join("")}</tr></thead><tbody>${b[2].map(r => `<tr>${r.map(c => `<td>${ipaText(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "ga": return gaPanel(b[1], b[2]);
      case "sentences": return `<div class="ltable-wrap"><table class="ltable"><thead><tr>${b[1].map(h => `<th>${ipaText(h)}</th>`).join("")}<th></th></tr></thead><tbody>${b[2].map(r => `<tr>${r.map(c => `<td>${ipaText(c)}</td>`).join("")}<td class="sp-cell">${spk(r[r.length - 1])}</td></tr>`).join("")}</tbody></table></div>`;
      case "img": return `<figure class="lfig"><img src="img/${b[1]}.webp" alt="${esc(b[2])}" loading="lazy"><figcaption>${ipaText(b[2])}</figcaption></figure>`;
      case "imgs": return `<div class="lfigs">${b[1].map(([f, c]) => `<figure class="lfig sm"><img src="img/${f}.webp" alt="${esc(c)}" loading="lazy"><figcaption>${ipaText(c)}</figcaption></figure>`).join("")}</div>`;
      case "chart": return b[1] === "phonemes" ? phonemeChart() : b[1] === "consonants" ? consonantChart() : b[1] === "diphthongs" ? `<div class="chart-box">${diphChart()}</div>` :
        b[1] === "vowels-short-long" ? `<div class="chart-pair"><div><h4>Short vowels <span class="ipa">/ɪ e æ ʌ ɒ ʊ ə/</span></h4>${vowelChart(null, s => s.length === "short")}</div><div><h4>Long vowels <span class="ipa">/iː ɑː ɔː uː ɜː/</span></h4>${vowelChart(null, s => s.length === "long")}</div></div>` : `<div class="chart-box">${vowelChart()}</div>`;
      case "stress": return `<div class="spat">${b[1].map(([w, syl, i]) => `<div class="sp-row"><span class="sp-w">${esc(w)} ${spk(w)}</span><span class="sp-dots">${syl.map((s, k) => `<span class="sp ${k === i ? "on" : ""}"><i></i><small>${esc(s)}</small></span>`).join("")}</span></div>`).join("")}</div>`;
    }
    return "";
  }
    const gaWords = cell => cell.replace(/\(.*?\)/g, "").split(/[,–-]/).map(x => x.trim()).filter(w => /^[a-z]+$/i.test(w));
  const accBtn = (keys, label, cls) => keys.length ? `<button class="accb ${cls}" type="button" data-say="${esc(keys.join("|"))}" aria-label="Listen: ${label}">${ICON.sound}<span>${label}</span></button>` : "";
  const gaPanel = (rows, note) => `<div class="ga"><div class="ga-h">British–American contrast</div><table><thead><tr><th></th><th>BrE (SSBE)</th><th>GA</th></tr></thead><tbody>${rows.map(r => { const ws = gaWords(r[0]); return `<tr><td>${esc(r[0])}</td><td>${ipaText(r[1])} ${accBtn(ws, "BrE", "bre")}</td><td>${ipaText(r[2])} ${accBtn(ws.map(w => "ga:" + w), "GA", "gaa")}</td></tr>`; }).join("")}</tbody></table>${note ? `<p>${ipaText(note)}</p>` : ""}</div>`;

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["home", "Overview"], ...UNITS.filter(u => u.n).map(u => [u.id, u.short])].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  let session = null;
  const view = () => $("#view");
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, "")) || "home";
    session = null;
    const unit = unitById[h] ? h : unitOfTopic(h) || (h.startsWith("test-") ? h.slice(5) : "") || "home";
    const tab = unit === "intro" ? "home" : unit;
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    const top = $(".tabs").getBoundingClientRect().top + window.scrollY - (window.innerWidth <= 820 ? 66 : 76);
    if (window.scrollY > top) window.scrollTo(0, top);
    if (h !== "home") { Store.data.last = h; Store.data.seen[h] = 1; Store.save(); }
    if (byId[h]) return renderSound(byId[h]);
    if (lessonById[h]) return renderLesson(lessonById[h]);
    if (unitById[h]) return renderUnit(unitById[h]);
    return renderHome();
  }
  window.addEventListener("hashchange", route);
  $("#tabs").addEventListener("click", e => { const a = e.target.closest(".tab"); if (a && a.getAttribute("href") === (location.hash || "#home")) { e.preventDefault(); route(); } });

  /* ---------------- progress helpers ---------------- */
  const topicsOf = u => [...LESSONS.filter(l => l.unit === u).map(l => l.id), ...SOUNDS.filter(s => s.unit === u).map(s => s.id)];
  const doneMark = id => Store.data.best[id] >= 80 ? `<span class="tick" title="Practice: best ${Store.data.best[id]}%">${ICON.done}</span>` : Store.data.seen[id] ? `<span class="seen-dot" title="Visited"></span>` : "";
  const unitProgress = u => { const ts = topicsOf(u); return ts.length ? Math.round(ts.filter(id => Store.data.seen[id]).length / ts.length * 100) : 0; };

  /* ---------------- HOME ---------------- */
  function renderHome() {
    const last = Store.data.last, lastTitle = last ? (byId[last] ? `Sound ${titleOf(last)}` : lessonById[last] ? lessonById[last].title : unitById[last] ? unitById[last].title : "") : "";
    view().innerHTML = `
      ${lastTitle ? `<div class="continue card"><div><small>Continue where you left off</small><b>${ipaText(lastTitle)}</b></div><a class="btn ink" href="#${last}">Continue ${ICON.arrow}</a></div>` : ""}
      <div class="intro-block">
        <h2>Start here</h2>
        <div class="lesson-list">${LESSONS.filter(l => l.unit === "intro").map(l => lessonLink(l)).join("")}</div>
      </div>
      <div class="units">${UNITS.filter(u => u.n).map(u => `<a class="card card-link unit-card" href="#${u.id}">
        <span class="un">Unit ${u.n}</span><h3>${u.title}</h3><p>${u.sub}</p>
        <div class="bar" title="${unitProgress(u.id)}% visited"><span style="width:${unitProgress(u.id)}%;background:var(--app)"></span></div></a>`).join("")}</div>
      <div class="tools-row"><span>Your progress is saved on this device.</span><button class="btn soft sm" type="button" data-act="reset">${ICON.restart} Reset progress</button></div>`;
  }
  const lessonLink = l => `<a class="lesson-link" href="#${l.id}"><span class="ll-ic">${ICON.book}</span><span class="ll-t">${ipaText(l.title)}</span>${doneMark(l.id)}<span class="ll-go">${ICON.arrow}</span></a>`;
  const soundTile = s => `<a class="card card-link stile" href="#${s.id}"><span class="ipa big">${esc(s.ipa)}</span><small>${esc(s.keyword)}</small>${doneMark(s.id)}</a>`;

  /* ---------------- UNIT pages ---------------- */
  function renderUnit(u) {
    const ls = LESSONS.filter(l => l.unit === u.id);
    let body = "";
    if (u.id === "vowels") body = `<div class="ublock"><h3>Lessons</h3><div class="lesson-list">${ls.map(lessonLink).join("")}</div></div>` +
      VOWEL_GROUPS.map(([g, t]) => `<div class="ublock"><h3>${t}</h3><div class="stiles">${SOUNDS.filter(s => s.unit === "vowels" && s.groups.includes(g)).map(soundTile).join("")}</div></div>`).join("");
    else if (u.id === "diphthongs") body = `<div class="ublock"><h3>Lessons</h3><div class="lesson-list">${ls.map(lessonLink).join("")}</div></div>` +
      [["centring", "Centring diphthongs"], ["closing", "Closing diphthongs"]].map(([t, h]) => `<div class="ublock"><h3>${h}</h3><div class="stiles">${SOUNDS.filter(s => s.unit === "diphthongs" && s.type === t).map(soundTile).join("")}</div></div>`).join("");
    else if (u.id === "consonants") body = `<div class="ublock"><h3>Classification</h3><div class="lesson-list">${ls.filter(l => !l.group).map(lessonLink).join("")}</div></div>` +
      [["plosive", "Plosives"], ["fricative", "Fricatives"], ["affricate", "Affricates"], ["nasal", "Nasals"], ["approximant", "Approximants"]].map(([m, h]) => `<div class="ublock"><h3>${h}</h3><div class="stiles">${SOUNDS.filter(s => s.unit === "consonants" && s.manner.endsWith(m)).map(soundTile).join("")}</div></div>`).join("") +
      `<div class="ublock"><h3>Sound and spelling</h3><div class="lesson-list">${ls.filter(l => l.group === "spelling").map(lessonLink).join("")}</div></div>`;
    else if (u.id === "stress") body = `<div class="ublock"><div class="lesson-list">${ls.map(lessonLink).join("")}</div></div>`;
    else if (u.id === "revision") body = `<div class="ublock"><h3>Revision by unit</h3><div class="rev-grid">${SOUND_UNITS.concat("stress").map(id => `<button class="card card-link rev" type="button" data-act="revise" data-unit="${id}"><b>${unitById[id].title}</b><span>15 mixed questions</span></button>`).join("")}</div></div>
      <div class="ublock"><h3>Transcription and accents</h3><div class="lesson-list">${ls.map(lessonLink).join("")}</div></div>
      <div class="ublock"><h3>Mixed practice</h3><div class="rev-grid"><button class="card card-link rev" type="button" data-act="mixed"><b>Mixed exercises</b><span>20 questions from every unit</span></button>
      <button class="card card-link rev final" type="button" data-act="final"><b>Final test</b><span>30 questions · all units</span>${Store.data.best.final != null ? `<small>Best score: ${Store.data.best.final}%</small>` : ""}</button></div></div>`;
    view().innerHTML = `<div class="vhead"><h2>${u.n ? `<span class="un">Unit ${u.n}</span> ` : ""}${u.title}</h2></div>${body}
      ${u.id !== "revision" && u.id !== "intro" ? `<div class="unit-test card"><div><b>Unit test</b><span>20 questions on the whole unit, from easier to harder.</span>${Store.data.best["test-" + u.id] != null ? `<small>Best score: ${Store.data.best["test-" + u.id]}%</small>` : ""}</div><button class="btn primary" type="button" data-act="unit-test" data-unit="${u.id}">Start the test ${ICON.arrow}</button></div>` : ""}`;
  }

  /* ---------------- LESSON page ---------------- */
  function renderLesson(l) {
    const u = unitById[l.unit], ls = LESSONS.filter(x => x.unit === l.unit), i = ls.indexOf(l);
    const n = hasExercises(l.id) ? poolFor(l.id).length : 0;
    view().innerHTML = `<a class="back" href="#${u.id === "intro" ? "home" : u.id}">${ICON.back} ${u.title}</a>
      <article class="lesson"><h2>${ipaText(l.title)}</h2>${l.blocks.map(block).join("")}</article>
      ${n ? practiceBox(l.id, n) : ""}
      <nav class="pager">${i > 0 ? `<a class="btn soft" href="#${ls[i - 1].id}">${ICON.back} <span>${ipaText(ls[i - 1].title)}</span></a>` : "<span></span>"}${i < ls.length - 1 ? `<a class="btn soft" href="#${ls[i + 1].id}"><span>${ipaText(ls[i + 1].title)}</span> ${ICON.arrow}</a>` : ""}</nav>`;
  }
  const practiceBox = (id, n) => `<section class="practice card" id="practice"><div><h3>Practice</h3><p>${n} exercise${n === 1 ? "" : "s"} · a different selection every time${Store.data.best[id] != null ? ` · best score ${Store.data.best[id]}%` : ""}</p></div>
    <div class="pr-actions"><button class="btn primary" type="button" data-act="practice" data-topic="${id}" data-n="10">Start ${ICON.arrow}</button>${n > 12 ? `<button class="btn soft" type="button" data-act="practice" data-topic="${id}" data-n="${Math.min(n, 25)}">Longer session</button>` : ""}</div></section>`;

  /* ---------------- SOUND card ---------------- */
  function renderSound(s) {
    const u = unitById[s.unit], same = SOUNDS.filter(x => x.unit === s.unit), i = same.indexOf(s);
    const K = kind(s);
    const facts = K === "consonant" ? [["Voicing", s.voice], ["Place", s.place], ["Manner", s.manner], ["Label", descOf(s)]] :
      K === "diphthong" ? [["Type", s.typeLabel], ["Starts", s.startDesc], ["Glides to", s.endDesc], ["Length", "long"]] :
      [["Length", s.length], ["Height", s.height], ["Frontness", s.front], ["Lips", s.lips]];
    const visual = K === "vowel" ? `<div class="chart-box sm">${vowelChart([s.id])}</div>` : K === "diphthong" ? `<div class="chart-box sm">${diphChart([s.id])}</div>` :
      `<figure class="tract"><img src="img/${s.img}.webp" alt="Cross-section of the vocal tract for /${esc(s.ipa)}/" loading="lazy"><figcaption>red circle = constriction · dashed arrow = airflow · red vocal folds = voiced</figcaption></figure>`;
    const pairLink = s.pair ? `<p class="pairlink">Voicing partner: <a href="#${s.pair}">${slash(byId[s.pair].ipa)} ${esc(byId[s.pair].keyword)}</a></p>` : "";
    view().innerHTML = `<a class="back" href="#${u.id}">${ICON.back} ${u.title}</a>
      <article class="scard">
        <header class="sc-head">
          <div class="sc-sym" data-say="${esc(s.keyword)}" role="button" tabindex="0" title="Listen: ${esc(s.keyword)}"><span class="ipa">${esc(s.ipa)}</span><button class="spk lg" type="button" data-say="${esc(s.keyword)}" aria-label="Listen: ${esc(s.keyword)}">${ICON.sound}</button></div>
          <div><span class="un">${K === "consonant" ? "Consonant" : K === "diphthong" ? "Diphthong" : (s.length === "short" ? "Short vowel" : "Long vowel")}</span><h2>${slash(s.ipa)} <span class="kw">as in ${esc(s.keyword)}</span></h2><p class="sc-intro">${ipaText(s.intro)}</p></div>
        </header>
        <nav class="sc-nav" aria-label="Sections">${[["sc1", "Description"], ["sc2", "Examples"], ["sc3", "Comparison"], ["sc4", "Common mistakes"], ["practice", "Practice"]].map(([a, t]) => `<a href="#${s.id}" data-jump="${a}">${t}</a>`).join("")}</nav>
        <section class="sc-sec" id="sc1"><h3>Phonetic description</h3>
          <div class="sc-desc"><div>
            <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${ipaText(v)}</dd></div>`).join("")}</dl>
            <ul class="llist">${s.artic.map(x => `<li>${ipaText(x)}</li>`).join("")}</ul>${pairLink}
            ${(s.allophones || []).length ? `<div class="lnote"><b>Phoneme and allophones</b><ul>${s.allophones.map(x => `<li>${ipaText(x)}</li>`).join("")}</ul></div>` : ""}
          </div>${visual}</div>
        </section>
        <section class="sc-sec" id="sc2"><h3>Examples</h3>
          <table class="extable"><thead><tr><th>Example</th><th>Transcription (BrE)</th><th></th></tr></thead><tbody>${s.examples.map(([w, ipa]) => `<tr><td>${esc(w)}</td><td>${ipaBare(ipa)}</td><td>${spk(w)}</td></tr>`).join("")}</tbody></table>
          ${s.spell ? `<div class="spell"><b>Common spellings</b><div class="chips">${s.spell.map(x => `<span class="chip-s">${ipaText(x)}</span>`).join("")}</div></div>` : ""}
          ${(s.notes || []).length ? `<div class="lnote"><b>Note</b><ul>${s.notes.map(x => `<li>${ipaText(x)}</li>`).join("")}</ul></div>` : ""}
          ${s.ga ? gaPanel(s.ga.rows, s.ga.note) : ""}
          ${s.videos ? `<p class="videos">Watch and listen: ${s.videos.map(([t, u2]) => `<a href="${esc(u2)}" target="_blank" rel="noopener">▶ ${esc(t)}</a>`).join(" · ")}</p>` : ""}
        </section>
        <section class="sc-sec" id="sc3"><h3>Sound comparison</h3>
          ${(s.compare || []).map(c => { const o = byId[c.id]; return `<div class="cmp card"><div class="cmp-h">${slash(s.ipa)} <span>vs</span> ${o ? `<a href="#${o.id}">${slash(o.ipa)}</a>` : `<span class="nosnd">no consonant</span>`}<p>${ipaText(c.note || "")}</p></div>
            ${c.pairs ? `<div class="mp">${c.pairs.map(([a, b]) => `<div class="mp-row"><button type="button" class="mpw" data-say="${esc(a)}">${esc(a)}</button><span class="mp-sep">–</span><button type="button" class="mpw" data-say="${esc(b)}">${esc(b)}</button></div>`).join("")}</div>` : ""}</div>`; }).join("")}
          ${(s.compare || []).some(c => c.pairs) ? `<p class="hint">Minimal pairs: tap a word to hear it.</p>` : ""}
        </section>
        <section class="sc-sec" id="sc4"><h3>Common mistakes for Italian speakers</h3><ul class="mistakes">${s.mistakes.map(x => `<li>${ipaText(x)}</li>`).join("")}</ul></section>
        ${practiceBox(s.id, poolFor(s.id).length)}
      </article>
      <nav class="pager">${i > 0 ? `<a class="btn soft" href="#${same[i - 1].id}">${ICON.back} ${slash(same[i - 1].ipa)}</a>` : "<span></span>"}${i < same.length - 1 ? `<a class="btn soft" href="#${same[i + 1].id}">${slash(same[i + 1].ipa)} ${ICON.arrow}</a>` : ""}</nav>`;
  }

  /* ---------------- SESSION ---------------- */
  function startSession(opts) {
    if (!opts.qs.length) { toast("No exercises available here yet."); return; }
    session = Object.assign({ i: 0, results: [], answered: false }, opts);
    session.qs = session.qs.map(q => {
      const c = Object.assign({}, q);
      if (c.type === "mc") c.opts = shuffle(c.opts);
      if (c.type === "match") c.right = shuffle(c.pairs.map(p => p[1]));
      return c;
    });
    renderQ();
  }
  const KIND_LABEL = { mc: "Multiple choice", choice: "Choose", sort: "Classification", multi: "Sound identification", seg: "Find the sound", write: "Transcription", stress: "Word stress", odd: "Odd one out", gap: "Complete", text: "Transcription", match: "Matching", listen: "Listening", fix: "Error correction" };
  function renderQ() {
    const s = session, q = s.qs[s.i], n = s.qs.length, ok = s.results.filter(r => r.ok).length;
    s.state = {};
    let body = "", needCheck = false;
    switch (q.type) {
      case "mc": case "choice":
        body = `<p class="qp">${q.type === "choice" ? hlIpa(q.prompt) : ipaText(q.prompt)}${q.say ? " " + spk(q.say) : ""}</p><div class="opts ${q.opts.length === 2 ? "two" : ""}">${q.opts.map((o, i) => `<button type="button" class="opt" data-i="${i}">${ipaText(o)}</button>`).join("")}</div>`; break;
      case "odd":
        body = `<p class="qp">${unitOfTopic(q.topic) === "consonants" ? "Three of these words share the same consonant sound or the same silent letter. Which word is different?" : "Three of these words share the same vowel sound (SSBE). Which word is different?"}</p><div class="opts">${q.opts.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`; break;
      case "listen":
        body = `<p class="qp">Listen. Which word do you hear?</p><div class="listen-row"><button class="btn ink lg" type="button" data-say="${esc(q.word)}">${ICON.play} Play</button></div><div class="opts two">${q.opts.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`; break;
      case "write":
        body = `<p class="qp">Write the word (or words) in ordinary spelling.</p><p class="qipa">${ipaText(q.ipa)}</p><div class="write-row"><input type="text" id="wIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Your answer"></div>`; needCheck = true; break;
      case "text":
        body = `<p class="qp">Write the sentence in ordinary spelling.</p><p class="qipa long">${ipaText(q.ipa)}</p><textarea id="tIn" rows="3" spellcheck="false" aria-label="Your answer"></textarea>`; needCheck = true; break;
      case "stress":
        body = `${q.context ? `<p class="qctx">${esc(q.context).replace(new RegExp(`\\b(${q.word})\\b`, "i"), "<b>$1</b>")}</p>` : ""}<p class="qp">Tap the stressed syllable of <b>${esc(q.word)}</b>.</p><div class="syls">${q.syl.map((x, i) => `<button type="button" class="syl" data-i="${i}">${esc(x)}</button>`).join("")}</div>`; break;
      case "sort":
        body = `<p class="qp">${ipaText(q.prompt)}</p><div class="sort">${q.items.map(([w], i) => `<div class="srow" data-i="${i}"><span class="sw">${hl(w)}</span><span class="sbtns">${q.cols.map((c, k) => `<button type="button" class="sb" data-k="${k}">${ipaText(c)}</button>`).join("")}</span></div>`).join("")}</div>`; needCheck = true; break;
      case "multi":
        body = `<p class="qp">Tick every vowel phoneme you hear in <b>${esc(q.word)}</b>. ${spk(q.word)}</p><div class="mopts">${q.opts.map((o, i) => `<button type="button" class="mo" data-i="${i}" aria-pressed="false">${ipaText(o)}</button>`).join("")}</div>`; needCheck = true; break;
      case "seg":
        body = `<p class="qp">${ipaText(q.prompt)}</p><div class="segw">${q.parts.map((p, i) => `<button type="button" class="sg" data-i="${i}" aria-pressed="false">${esc(p)}</button>`).join("")}</div><p class="hint">If there is no schwa, press Check without selecting anything.</p>`; needCheck = true; break;
      case "gap": {
        let k = 0; const txt = esc(q.text).replace(/___/g, () => `<input type="text" class="gin" data-k="${k++}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Gap ${k}">`);
        body = `<p class="qp gapq">${txt}</p>${q.bank ? `<div class="bank">${q.bank.map(w => `<button type="button" class="bk">${esc(w)}</button>`).join("")}</div>` : ""}`; needCheck = true; break;
      }
      case "match":
        body = `<p class="qp">${ipaText(q.prompt)}</p><div class="match"><div class="mcol">${q.pairs.map((p, i) => `<button type="button" class="ml" data-i="${i}">${ipaText(p[0])}</button>`).join("")}</div><div class="mcol">${q.right.map((r, i) => `<button type="button" class="mr" data-i="${i}">${ipaText(r)}</button>`).join("")}</div></div><p class="hint">Tap an item on the left, then its partner on the right.</p>`; break;
      case "fix":
        body = `<p class="qp">This transcription of <b>${esc(q.word)}</b> contains one wrong symbol. Tap it, then choose the correct symbol.</p><p class="fixline ipa">/${q.segs.map((t, i) => /^[ˈˌ ]$/.test(t) ? esc(t) : `<button type="button" class="fx" data-i="${i}">${esc(t)}</button>`).join("")}/</p><div class="fixopts" hidden>${shuffle(q.opts).map(o => `<button type="button" class="fo" data-v="${esc(o)}">/${esc(o)}/</button>`).join("")}</div>`; break;
    }
    view().innerHTML = `<div class="q">
      <div class="q-top"><span class="sc">${s.i + 1} / ${n}</span><div class="bar"><span style="width:${s.i / n * 100}%;background:var(--shu)"></span></div><span class="sc"><b style="color:var(--ok)">${ok}</b> ✓ · <b style="color:var(--bad)">${s.results.length - ok}</b> ✗</span></div>
      <div class="card q-card">
        <div class="q-meta"><span class="q-kind">${esc(s.title)} · ${KIND_LABEL[q.type]}</span>${B.chip(q.belt)}</div>
        ${body}
        <div id="fb" aria-live="polite"></div>
        <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-act="quit">Quit</button>${needCheck ? `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check</button>` : ""}</div>
      </div></div>`;
    const vt = view().getBoundingClientRect().top; if (vt < 60) window.scrollTo(0, Math.max(0, window.scrollY + vt - 150));
    if (q.type === "listen") setTimeout(() => say(q.word), 250);
    const inp = $("#wIn") || $("#tIn") || $(".gin");
    if (inp && matchMedia("(hover:hover)").matches) inp.focus({ preventScroll: true });
    if ($("#wIn")) $("#wIn").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); s.answered ? next() : check(); } });
    $$(".gin").forEach(g => g.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); s.answered ? next() : check(); } }));
  }

  function check() {
    const s = session, q = s.qs[s.i]; if (!s || s.answered) return;
    let ok = false, given = "", solution = "", extra = "";
    switch (q.type) {
      case "write": {
        given = $("#wIn").value; ok = accepts(q.answers, given); $("#wIn").disabled = true; $("#wIn").classList.add(ok ? "right" : "wrong");
        solution = `${ipaText(q.ipa)} = <b>${esc(q.answers.join(" / "))}</b>`; break;
      }
      case "text": {
        given = $("#tIn").value; const a = normW(q.answer).split(" "), g = normW(given).split(" ");
        ok = a.join(" ") === g.join(" "); $("#tIn").disabled = true; $("#tIn").classList.add(ok ? "right" : "wrong");
        solution = esc(q.answer);
        if (!ok) extra = `<p class="you">Words to check: ${a.map((w, i) => g[i] === w ? esc(w) : `<mark>${esc(w)}</mark>`).join(" ")}</p>`;
        given = ""; break;
      }
      case "sort": {
        let right = 0;
        $$(".srow").forEach(r => { const i = +r.dataset.i, sel = r.querySelector(".sb.on"), want = q.items[i][1]; const good = sel && +sel.dataset.k === want; if (good) right++;
          r.classList.add(good ? "ok" : "no"); r.querySelectorAll(".sb").forEach(b => { b.disabled = true; if (+b.dataset.k === want) b.classList.add("want"); }); });
        ok = right === q.items.length; solution = `${right} of ${q.items.length} correct.`; given = ok ? "" : `${right}/${q.items.length}`; break;
      }
      case "multi": {
        const sel = $$(".mo.on").map(b => q.opts[+b.dataset.i]); ok = sel.length === q.correct.length && q.correct.every(c => sel.includes(c));
        $$(".mo").forEach(b => { b.disabled = true; const o = q.opts[+b.dataset.i]; if (q.correct.includes(o)) b.classList.add("want"); else if (b.classList.contains("on")) b.classList.add("bad"); });
        solution = `${esc(q.word)}: ${q.correct.map(slashTrim).join(" ")}`; given = sel.join(" ") || "—"; break;
      }
      case "seg": {
        const sel = $$(".sg.on").map(b => +b.dataset.i).sort(); ok = sel.length === q.correct.length && q.correct.every(c => sel.includes(c));
        $$(".sg").forEach(b => { b.disabled = true; const i = +b.dataset.i; if (q.correct.includes(i)) b.classList.add("want"); else if (b.classList.contains("on")) b.classList.add("bad"); });
        solution = `${esc(q.word)} ${ipaText(q.ipa)}${q.correct.length ? "" : " – no schwa"}`; given = sel.map(i => q.parts[i]).join(", ") || "no schwa"; break;
      }
      case "gap": {
        const ins = $$(".gin"); let all = true;
        ins.forEach(g => { const k = +g.dataset.k, good = accepts(q.answers[k], g.value); if (!good) all = false; g.disabled = true; g.classList.add(good ? "right" : "wrong"); });
        ok = all; let k = 0; solution = esc(q.text).replace(/___/g, () => `<b>${esc(q.answers[k++][0])}</b>`); given = ins.map(g => g.value).join(" … "); break;
      }
    }
    finishQ(ok, given, solution, extra);
  }
  const slashTrim = s => `<span class="ipa">${esc(s)}</span>`;

  function finishQ(ok, given, solution, extra) {
    const s = session, q = s.qs[s.i];
    s.answered = true; s.results.push({ q, ok, given });
    const sayW = q.type === "stress" && q.context ? "" : (q.say || q.word), sayBtn = sayW ? spk(sayW) : "";
    $("#fb").innerHTML = `<div class="fb ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div>
      <h3>${ok ? pick(["Correct.", "Well done.", "Exactly right."]) : "Not quite."}</h3>
      <div class="ans">${solution} ${sayBtn}</div>
      ${!ok && given ? `<p class="you">Your answer: ${ipaText(given)}</p>` : ""}${extra || ""}
      ${q.expl ? `<p class="why">${ipaText(q.expl)}</p>` : ""}</div></div>`;
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><button class="btn ink lg" type="button" data-act="next" id="nextBtn">${s.i < s.qs.length - 1 ? "Next question" : "See results"} ${ICON.arrow}</button>`;
    $("#nextBtn").focus({ preventScroll: true });
  }
  function choose(i) {
    const s = session, q = s.qs[s.i]; if (!s || s.answered) return;
    const given = q.opts[i], ok = given === q.answer;
    $$(".opt").forEach((b, j) => { b.disabled = true; if (q.opts[j] === q.answer) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); });
    let solution = ipaText(q.answer);
    if (q.type === "listen") solution = `You heard <b>${esc(q.answer)}</b>. Compare: ${spk(q.opts[0])} ${esc(q.opts[0])} · ${spk(q.opts[1])} ${esc(q.opts[1])}`;
    if (q.type === "choice" && /\{/.test(q.prompt)) solution = `${hlIpa(q.prompt)} → ${ipaText(q.answer)}`;
    finishQ(ok, ok ? "" : given, solution, "");
  }
  function next() { const s = session; if (!s || !s.answered) return; if (s.i < s.qs.length - 1) { s.i++; s.answered = false; renderQ(); } else finish(); }
  function finish() {
    const s = session, n = s.results.length, ok = s.results.filter(r => r.ok).length, pct = Math.round(ok / n * 100);
    if (s.key) { Store.data.best[s.key] = Math.max(Store.data.best[s.key] || 0, pct); Store.save(); }
    const wrong = s.results.filter(r => !r.ok);
    view().innerHTML = `<div class="q"><div class="card results">
      <div class="score">${ok}<span> / ${n}</span></div>
      <p class="meta">${esc(s.title)} · ${pct}% correct</p>
      <div class="bar" style="max-width:360px;margin:18px auto 0;height:10px"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
      <div class="nums"><span style="background:var(--ok-bg);color:var(--ok)">${ok} correct</span><span style="background:var(--bad-bg);color:var(--bad)">${n - ok} wrong</span></div>
      <div class="actions"><button class="btn ink" type="button" data-act="repeat">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-act="retry">Retry my mistakes</button>` : ""}<a class="btn soft" href="${s.back}">Back</a></div>
      ${wrong.length ? `<div class="review"><h4>Review your mistakes</h4>${wrong.map(r => `<div class="rv"><div class="s">${reviewLine(r.q)}</div>${r.q.expl ? `<div class="e">${ipaText(r.q.expl)}</div>` : ""}</div>`).join("")}</div>` : ""}
    </div></div>`;
  }
  function reviewLine(q) {
    switch (q.type) {
      case "mc": case "choice": case "odd": return `${q.type === "odd" ? "Odd one out: " + esc(q.opts.join(", ")) : (q.type === "choice" ? hlIpa(q.prompt) : ipaText(q.prompt))} → <b>${ipaText(q.answer)}</b>`;
      case "listen": return `Listening: ${esc(q.opts.join(" – "))} → <b>${esc(q.answer)}</b>`;
      case "write": return `${ipaText(q.ipa)} → <b>${esc(q.answers[0])}</b>`;
      case "text": return `${ipaText(q.ipa)}<br><b>${esc(q.answer)}</b>`;
      case "stress": return `${esc(q.word)} ${ipaText(q.ipa)} → <b>${esc(q.syl[q.idx])}</b>`;
      case "sort": return `${ipaText(q.prompt)}<br>${q.cols.map((c, k) => `<b>${ipaText(c)}</b>: ${q.items.filter(it => it[1] === k).map(it => hl(it[0])).join(", ")}`).join(" · ")}`;
      case "multi": return `${esc(q.word)} → <b>${q.correct.map(slashTrim).join(" ")}</b>`;
      case "seg": return `${esc(q.word)} ${ipaText(q.ipa)}`;
      case "gap": { let k = 0; return esc(q.text).replace(/___/g, () => `<b>${esc(q.answers[k++][0])}</b>`); }
      case "match": return q.pairs.map(p => `${ipaText(p[0])} – ${ipaText(p[1])}`).join(" · ");
      case "fix": return `${esc(q.word)} ${ipaText(q.ipa)}`;
    }
    return "";
  }

  /* ---------------- events ---------------- */
  view().addEventListener("click", e => {
    const sp = e.target.closest("[data-say]"); if (sp) { say(sp.dataset.say); if (!sp.classList.contains("opt")) return; }
    const jump = e.target.closest("[data-jump]"); if (jump) { e.preventDefault(); const el = document.getElementById(jump.dataset.jump); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" }); return; }
    if (session && !session.answered) {
      const q = session.qs[session.i];
      const opt = e.target.closest(".opt"); if (opt) return choose(+opt.dataset.i);
      const syl = e.target.closest(".syl"); if (syl) { const i = +syl.dataset.i, ok = i === q.idx; $$(".syl").forEach((b, j) => { b.disabled = true; if (j === q.idx) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); }); return finishQ(ok, ok ? "" : q.syl[i], `${q.syl.map((x, j) => j === q.idx ? `<b>${esc(x.toUpperCase())}</b>` : esc(x)).join("·")} ${ipaText(q.ipa)}`, ""); }
      const sb = e.target.closest(".sb"); if (sb) { sb.parentElement.querySelectorAll(".sb").forEach(b => b.classList.toggle("on", b === sb)); return; }
      const mo = e.target.closest(".mo, .sg"); if (mo) { mo.classList.toggle("on"); mo.setAttribute("aria-pressed", mo.classList.contains("on")); return; }
      const bk = e.target.closest(".bk"); if (bk) { const g = $$(".gin").find(x => x === document.activeElement) || session.state.lastGap || $$(".gin").find(x => !x.value) || $(".gin"); if (g) { g.value = bk.textContent; const nx = $$(".gin").find(x => !x.value); if (nx) nx.focus(); } return; }
      const fx = e.target.closest(".fx"); if (fx) { $$(".fx").forEach(b => b.classList.toggle("on", b === fx)); session.state.fx = +fx.dataset.i; $(".fixopts").hidden = false; return; }
      const fo = e.target.closest(".fo"); if (fo) {
        const okSeg = session.state.fx === q.wrong, okSym = fo.dataset.v === q.correct, ok = okSeg && okSym;
        $$(".fx").forEach(b => { b.disabled = true; if (+b.dataset.i === q.wrong) b.classList.add("want"); }); $$(".fo").forEach(b => { b.disabled = true; if (b.dataset.v === q.correct) b.classList.add("want"); else if (b === fo) b.classList.add("bad"); });
        return finishQ(ok, ok ? "" : `/${q.segs[session.state.fx]}/ → /${fo.dataset.v}/`, `${esc(q.word)} ${ipaText(q.ipa)}`, "");
      }
      const ml = e.target.closest(".ml"), mr = e.target.closest(".mr");
      if (ml && !ml.classList.contains("done")) { $$(".ml").forEach(b => b.classList.toggle("sel", b === ml)); session.state.ml = +ml.dataset.i; return; }
      if (mr && !mr.classList.contains("done")) {
        if (session.state.ml == null) { toast("First tap an item on the left."); return; }
        const L = q.pairs[session.state.ml], good = q.right[+mr.dataset.i] === L[1];
        session.state.err = (session.state.err || 0) + (good ? 0 : 1);
        if (good) { const lb = $(`.ml[data-i="${session.state.ml}"]`); lb.classList.remove("sel"); lb.classList.add("done"); mr.classList.add("done"); session.state.ml = null; }
        else { mr.classList.add("bad"); setTimeout(() => mr.classList.remove("bad"), 500); }
        if ($$(".ml.done").length === q.pairs.length) { const ok = !session.state.err; $$(".ml,.mr").forEach(b => b.disabled = true); finishQ(ok, ok ? "" : `${session.state.err} wrong attempt${session.state.err > 1 ? "s" : ""}`, q.pairs.map(p => `${ipaText(p[0])} – ${ipaText(p[1])}`).join(" · "), ""); }
        return;
      }
    }
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act;
    if (a === "check") check();
    else if (a === "next") next();
    else if (a === "quit") dialog({ title: "Leave this session?", text: "Your answers in this session will not be counted.", ok: "Leave", cancel: "Keep going" }).then(y => { if (y) route(); });
    else if (a === "practice") { const id = b.dataset.topic, n = +b.dataset.n, make = () => selectQs(poolFor(id), n); startSession({ title: titleOf(id), qs: make(), back: "#" + id, key: id, redo: make }); }
    else if (a === "unit-test") { const u = b.dataset.unit, make = () => selectQs(unitPool(u), 20); startSession({ title: `Unit test · ${unitById[u].title}`, qs: make(), back: "#" + u, key: "test-" + u, redo: make }); }
    else if (a === "revise") { const u = b.dataset.unit, make = () => selectQs(unitPool(u), 15); startSession({ title: `Revision · ${unitById[u].title}`, qs: make(), back: "#revision", key: "rev-" + u, redo: make }); }
    else if (a === "mixed") { const make = () => selectQs(["intro", ...SOUND_UNITS, "stress", "revision"].flatMap(unitPool), 20); startSession({ title: "Mixed exercises", qs: make(), back: "#revision", key: "mixed", redo: make }); }
    else if (a === "final") { const make = () => selectQs([...selectQs(unitPool("vowels"), 7), ...selectQs(unitPool("diphthongs"), 5), ...selectQs(unitPool("consonants"), 8), ...selectQs(unitPool("stress"), 6), ...selectQs(unitPool("revision"), 4)], 30); startSession({ title: "Final test", qs: make(), back: "#revision", key: "final", redo: make }); }
    else if (a === "repeat") startSession(Object.assign({}, session, { qs: session.redo ? session.redo() : shuffle(session.qs) }));
    else if (a === "retry") { const w = session.results.filter(r => !r.ok).map(r => r.q); startSession({ title: "Your mistakes", qs: shuffle(w), back: session.back }); }
    else if (a === "reset") dialog({ title: "Reset your progress?", text: "This deletes your saved progress for Sounds of English on this device.", ok: "Reset", danger: true }).then(y => { if (y) { Store.reset(); renderHome(); toast("Progress reset"); } });
  });
  view().addEventListener("focusin", e => { if (session && e.target.classList.contains("gin")) session.state.lastGap = e.target; });
  document.addEventListener("keydown", e => {
    if (!session || document.querySelector(".modal")) return;
    if (session.answered && e.key === "Enter" && !e.target.matches("input,textarea,button,a")) { e.preventDefault(); next(); }
  });

  Store.load(); route();
  window.__phon = { P, SOUNDS, LESSONS, poolFor, unitPool, generated, accepts, normW, current: () => session && session.qs[session.i] }; // used by automated tests
})();
