/* =====================================================================
   Writing System — interface
   Content: data/kana.js, data/kanji.js, data/strokes.js (KanjiVG).
   Nothing is saved: every visit starts fresh.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast, dialog } = window.Dojo;
  const B = window.DojoBelts;
  const KANA = window.DOJO_KANA, KJ = window.DOJO_KANJI, STROKES = window.DOJO_STROKES || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const hex = c => c.codePointAt(0).toString(16);
  const dot = t => /[.!?…]$/.test(t) ? t : t + ".";
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    sound: I('<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'),
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), play: I('<path d="M7 4v16l13-8z"/>'), restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    lock: '<svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
  };

  /* ---------------- content model ---------------- */
  function kanaItems(script) {
    const S = KANA[script], out = [];
    S.sections.forEach(sec => sec.rows.forEach(([row, label, cells]) => cells.forEach(c => { if (c) out.push({ key: script[0] + ":" + c[0], ch: c[0], rom: c[1], script, row, rowLabel: label, sect: sec.id, belt: S.belts[row] || 3 }); })));
    return out;
  }
  const HIRA = kanaItems("hiragana"), KATA = kanaItems("katakana");
  // loanword meaning in the interface language
  const WORDS = KANA.katakana.words.map(w => ({ key: "w:" + w[0], ch: w[0], rom: w[1], en: window.Dojo.lang === "it" ? w[3] : w[2], it: w[3], belt: 3 }));
  const GROUP_BELT = Object.fromEntries(KJ.groups.map(g => [g.id, g.belt]));
  const KANJI = KJ.list.map((k, i) => Object.assign({ key: "j:" + k.k, n: i + 1, belt: GROUP_BELT[k.g], strokes: (STROKES[k.k] || []).length }, k));
  const kanjiOf = c => KANJI.find(k => k.k === c);

  /* ---------------- storage ---------------- */
  const Store = {
    key: "language-dojo:japanese", data: null,
    fresh: () => ({ items: {}, answered: 0, correct: 0 }),
    load() { this.data = this.fresh(); },
    save() {},
    reset() { this.data = this.fresh(); this.save(); }
  };
  const unlocked = () => 6; // all content is always open; belts only label difficulty
  const stat = k => Store.data.items[k] || [0, 0, 0];
  const known = k => stat(k)[0] > 0;
  function record(key, ok) { const s = Store.data.items[key] || [0, 0, 0]; ok ? s[0]++ : s[1]++; s[2] = ok ? 1 : -1; Store.data.items[key] = s; Store.data.answered++; if (ok) Store.data.correct++; Store.save(); }
  const pct = list => list.length ? Math.round(list.filter(i => known(i.key)).length / list.length * 100) : 0;

  /* ---------------- Japanese speech (device voice, ja-JP) ---------------- */
  const TTS = {
    ok: typeof speechSynthesis !== "undefined", voice: null,
    load() { if (!this.ok) return; const v = speechSynthesis.getVoices().filter(v => /^ja/i.test(v.lang)); this.voice = v.find(x => /google|kyoko|o-ren|haruka|nanami|natural/i.test(x.name)) || v[0] || null; },
    say(text) {
      if (!this.ok) { toast("Audio is not available in this browser."); return; }
      if (!this.voice) this.load();
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.lang = "ja-JP"; if (this.voice) u.voice = this.voice; u.rate = .8;
      setTimeout(() => speechSynthesis.speak(u), 30);
      if (!this.voice && !this.warned) { this.warned = true; setTimeout(() => toast("Tip: install a Japanese voice on your device for clearer pronunciation."), 800); }
    }
  };
  if (TTS.ok) { TTS.load(); speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", () => TTS.load()); }
  const spk = (text, cls = "") => `<button type="button" class="spk ${cls}" data-say="${esc(text)}" aria-label="Listen" title="Listen">${ICON.sound}</button>`;
  document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) { e.preventDefault(); e.stopPropagation(); TTS.say(b.dataset.say); } }, true);

  /* ---------------- stroke order ---------------- */
  const startPt = d => { const m = d.match(/M\s*([\d.]+)[ ,]([\d.]+)/i); return m ? [+m[1], +m[2]] : [0, 0]; };
  function strokeSVG(ch, { nums = false, small = false } = {}) {
    const ps = STROKES[ch]; if (!ps) return `<div class="sv${small ? " small" : ""}" style="display:grid;place-items:center;font:500 ${small ? 60 : 120}px/1 var(--jp)">${esc(ch)}</div>`;
    return `<div class="sv${small ? " small" : ""}"><svg viewBox="0 0 109 109" role="img" aria-label="Stroke order of ${esc(ch)}">
      <g class="grid"><line x1="54.5" y1="0" x2="54.5" y2="109"/><line x1="0" y1="54.5" x2="109" y2="54.5"/></g>
      <g class="guide">${ps.map(d => `<path d="${d}"/>`).join("")}</g>
      <g class="ink">${ps.map((d, i) => `<path d="${d}" data-i="${i}"/>`).join("")}</g>
      ${nums ? `<g class="nums">${ps.map((d, i) => { const [x, y] = startPt(d); return `<text x="${Math.max(2, x - 6)}" y="${Math.max(8, y - 2)}">${i + 1}</text>`; }).join("")}</g>` : ""}
    </svg></div>`;
  }
  function animator(root) {
    const paths = $$(".ink path", root); let idx = 0, timer = null;
    paths.forEach(p => { const L = p.getTotalLength ? p.getTotalLength() : 100; p.dataset.len = L; });
    const hide = p => { p.style.transition = "none"; p.style.strokeDasharray = p.dataset.len; p.style.strokeDashoffset = p.dataset.len; p.classList.remove("cur"); };
    const show = (p, anim) => { paths.forEach(x => x.classList.remove("cur")); p.classList.add("cur"); const L = +p.dataset.len; p.style.strokeDasharray = L; if (anim) { p.getBoundingClientRect(); p.style.transition = `stroke-dashoffset ${Math.max(300, L * 11)}ms ease`; } p.style.strokeDashoffset = 0; };
    const api = {
      reset() { clearTimeout(timer); idx = 0; paths.forEach(hide); },
      all() { clearTimeout(timer); paths.forEach(p => { p.style.transition = "none"; p.style.strokeDashoffset = 0; p.classList.remove("cur"); }); idx = paths.length; },
      step() { clearTimeout(timer); if (idx >= paths.length) api.reset(); show(paths[idx], true); idx++; },
      play() { api.reset(); const go = () => { if (idx >= paths.length) { setTimeout(() => paths.forEach(p => p.classList.remove("cur")), 400); return; } const p = paths[idx]; show(p, true); idx++; timer = setTimeout(go, Math.max(300, +p.dataset.len * 11) + 160); }; timer = setTimeout(go, 200); }
    };
    api.reset(); return api;
  }
  function strokeViewer(chars) {
    const id = "sv" + Math.random().toString(36).slice(2, 7);
    const single = [...chars].length === 1 && STROKES[chars];
    return `<div class="stroke-box" id="${id}"><div class="strokes">${[...chars].map(c => strokeSVG(c, { nums: false, small: [...chars].length > 1 })).join("")}</div>
      <div class="stroke-ctrl"><button class="btn soft" type="button" data-sv="play">${ICON.play} Play</button><button class="btn soft" type="button" data-sv="step">Next stroke</button><button class="btn soft" type="button" data-sv="all">Show all</button>${single ? `<button class="btn soft" type="button" data-sv="diagram">Diagram</button>` : ""}</div>
      ${single ? `<div class="diagram" hidden>${STROKES[chars].map((_, i) => `<div class="step" title="Stroke ${i + 1}"><svg viewBox="0 0 109 109">${STROKES[chars].map((d, j) => `<g class="${j < i ? "done" : j === i ? "now" : "rest"}"><path d="${d}"/></g>`).join("")}</svg></div>`).join("")}</div>` : ""}</div>`;
  }
  function bindViewer(scope) {
    $$(".stroke-box", scope).forEach(box => {
      const a = animator(box);
      box.addEventListener("click", e => { const b = e.target.closest("[data-sv]"); if (!b) return; const m = b.dataset.sv; if (m === "diagram") { const d = $(".diagram", box); d.hidden = !d.hidden; } else a[m](); });
      setTimeout(() => a.play(), 250);
    });
  }

  /* ---------------- modal for a kana ---------------- */
  function openKana(item) {
    const m = document.createElement("div"); m.className = "cmodal";
    const n = [...item.ch].reduce((s, c) => s + (STROKES[c] || []).length, 0);
    m.innerHTML = `<div class="cbox" role="dialog" aria-modal="true" aria-label="${esc(item.ch)}"><button class="x" type="button" aria-label="Close">${ICON.x}</button>
      <div class="cdetail"><div class="cinfo"><div class="big" lang="ja">${esc(item.ch)}</div><div class="rom">${esc(item.rom)}</div>
        <div class="meta">${item.script === "hiragana" ? "Hiragana" : "Katakana"} · ${esc(item.rowLabel)} row · ${n} stroke${n === 1 ? "" : "s"}</div>${spk(item.ch, "lg")}</div>
        ${strokeViewer(item.ch)}</div></div>`;
    const close = () => { m.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = e => { if (e.key === "Escape") close(); };
    m.addEventListener("click", e => { if (e.target === m || e.target.closest(".x")) close(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(m); bindViewer(m); $(".x", m).focus();
    TTS.say(item.ch);
  }

  /* ---------------- router ---------------- */
  const TABS = [["dojo", "Overview", ""], ["hiragana", "Hiragana", "ひらがな"], ["katakana", "Katakana", "カタカナ"], ["kanji", "Kanji", "漢字"]];
  $("#tabs").innerHTML = TABS.map(([k, l, j]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}${j ? ` <span lang="ja" style="font-weight:500">${j}</span>` : ""}</a>`).join("");
  let session = null;
  const view = () => $("#view");
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "dojo";
    session = null; if (TTS.ok) speechSynthesis.cancel();
    const tab = h.startsWith("k-") ? "kanji" : (["dojo", "hiragana", "katakana", "kanji"].includes(h) ? h : "dojo");
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    if (h.startsWith("k-")) { const k = KANJI.find(x => hex(x.k) === h.slice(2)); return k ? renderKanjiCard(k) : renderKanjiList(); }
    if (tab === "hiragana" || tab === "katakana") return renderKana(tab);
    if (tab === "kanji") return renderKanjiList();
    renderDojo();
  }
  window.addEventListener("hashchange", route);
  // clicking the tab of the page you are on (e.g. during a session) goes back to that page
  $("#tabs").addEventListener("click", e => { const a = e.target.closest(".tab"); if (a && a.getAttribute("href") === (location.hash || "#dojo")) { e.preventDefault(); route(); } });

  /* ---------------- DOJO overview ---------------- */
  const BELT_INFO = { 1: "Vowels and the basic hiragana.", 2: "Complete hiragana and the first katakana.", 3: "Complete katakana and the first 18 kanji.", 4: "Kana consolidation and the first 27 kanji.", 5: "All 50 kanji and their main readings.", 6: "Mixed practice: words and sentences that combine everything." };
  function renderDojo() {
    const due = [...HIRA, ...KATA, ...KANJI].filter(i => stat(i.key)[2] === -1).length;
    view().innerHTML = `
      ${!TTS.voice && TTS.ok ? `<div class="notice-jp">Pronunciation uses your device's Japanese voice. If you hear no sound or the wrong accent, add a Japanese voice in your device's speech settings.</div>` : ""}
      <div class="jd-areas">
        <a class="card card-link jd-area" href="#hiragana" data-bg="あ"><span class="big" lang="ja">あ</span><h3>Hiragana <span lang="ja">ひらがな</span></h3><p>The basic Japanese syllabary: 46 characters plus voiced and contracted sounds.</p><div class="bar"><span style="width:${pct(HIRA)}%;background:var(--ok)"></span></div><span class="c">${HIRA.filter(i => known(i.key)).length} of ${HIRA.length} characters practised</span></a>
        <a class="card card-link jd-area" href="#katakana" data-bg="ア"><span class="big red" lang="ja">ア</span><h3>Katakana <span lang="ja">カタカナ</span></h3><p>The syllabary for foreign words, names and emphasis — with loanword practice.</p><div class="bar"><span style="width:${pct(KATA)}%;background:var(--ok)"></span></div><span class="c">${KATA.filter(i => known(i.key)).length} of ${KATA.length} characters practised</span></a>
        <a class="card card-link jd-area" href="#kanji" data-bg="字"><span class="big" lang="ja" style="font-family:var(--jp-serif)">字</span><h3>Kanji <span lang="ja">漢字</span></h3><p>Your first ${KANJI.length} kanji: meaning, stroke order, readings, words and sentences.</p><div class="bar"><span style="width:${pct(KANJI)}%;background:var(--ok)"></span></div><span class="c">${KANJI.filter(i => known(i.key)).length} of ${KANJI.length} kanji practised</span></a>
      </div>
      <div class="jd-row">
        <div class="card" style="padding:24px 26px"><h3 style="font-size:20px;margin-bottom:12px">Practise</h3>
          <div class="actions" style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" type="button" data-act="mixed">Mixed review ${ICON.arrow}</button>${due ? `<button class="btn" type="button" data-act="due">Review ${due} mistake${due > 1 ? "s" : ""}</button>` : ""}</div>
        </div>
        <div class="card" style="padding:24px 26px"><h3 style="font-size:20px;margin-bottom:10px">Tests by difficulty</h3>
          ${B.list.map(b => `<button class="bp bp-btn" type="button" data-act="exam" data-level="${b.level}"><i style="background:${b.color}"></i><div><b>${b.name}</b><span class="d">${BELT_INFO[b.level]}</span></div><span class="st">20 questions</span></button>`).join("")}
        </div>
      </div>`;
  }

  /* ---------------- KANA pages ---------------- */
  const kanaSel = { hiragana: null, katakana: null }, kanaMode = { hiragana: "romaji", katakana: "romaji" };
  function scopeChips(script) {
    const S = KANA[script], U = unlocked(), chips = [];
    S.sections.find(s => s.id === "basic").rows.forEach(([row, label]) => chips.push({ id: row, label: label === "Vowels" ? "Vowels" : label === "N (final)" ? "ん / ン" : label + " row", belt: S.belts[row] }));
    chips.push({ id: "dakuten", label: "Dakuten & handakuten", belt: S.belts.g });
    chips.push({ id: "yoon", label: "Yōon", belt: S.belts.ky });
    if (script === "katakana") { chips.push({ id: "extended", label: "Extended sounds", belt: S.belts.ex1 }); chips.push({ id: "words", label: "Loanwords", belt: 3 }); }
    if (!kanaSel[script]) kanaSel[script] = new Set(chips.filter(c => c.belt <= U && c.id !== "words").map(c => c.id).slice(0, 5));
    return chips.map(c => Object.assign(c, { locked: c.belt > U }));
  }
  function itemsFor(script) {
    const sel = kanaSel[script], list = script === "hiragana" ? HIRA : KATA;
    return list.filter(i => (i.sect === "basic" && sel.has(i.row)) || (i.sect !== "basic" && sel.has(i.sect))).filter(i => i.belt <= unlocked());
  }
  function renderKana(script) {
    const S = KANA[script], list = script === "hiragana" ? HIRA : KATA, isH = script === "hiragana";
    const chips = scopeChips(script);
    const sectHTML = S.sections.map(sec => `<div class="sect-head"><h3>${sec.title}</h3><span>${sec.subtitle}</span></div>
      <div class="kgrid" style="--cols:${sec.cols}">${sec.rows.map(([row, label, cells]) => `<div class="krow"><span class="lab">${label.length <= 3 ? label : ""}</span>${Array.from({ length: sec.cols }, (_, i) => cells[i]).map(c => c ? `<button type="button" class="kcell ${known(script[0] + ":" + c[0]) ? "got" : ""}" data-ch="${esc(c[0])}"><span class="c" lang="ja">${esc(c[0])}</span><span class="r">${esc(c[1])}</span></button>` : `<span class="kcell empty"></span>`).join("")}</div>`).join("")}</div>`).join("");
    const sp = S.special;
    view().innerHTML = `<div class="vhead"><h2>${isH ? "Hiragana" : "Katakana"} <span lang="ja" style="color:var(--shu)">${isH ? "ひらがな" : "カタカナ"}</span></h2><p>${isH ? "Hiragana is the first Japanese script to learn: it writes grammar endings, particles and native words." : "Katakana has the same sounds as hiragana, but is used mainly for foreign words, names and emphasis."} Tap any character to hear it and see its stroke order.</p></div>
      <div class="card launch" id="launch"></div>
      ${sectHTML}
      <div class="card special"><h3 style="font-size:22px;margin-bottom:12px">${sp.title}</h3>${sp.points.map(([t, ws]) => `<h4>${t}</h4><div class="wl">${ws.map(w => `<div class="w"><div><div class="j" lang="ja">${esc(w[0])}</div><div class="t">${esc(w[1])} · ${esc(w[2])}</div></div>${spk(w[0])}</div>`).join("")}</div>`).join("")}</div>
      ${!isH ? `<div class="sect-head"><h3>Loanwords</h3><span>Words borrowed from other languages</span></div><div class="wl">${WORDS.map(w => `<div class="w"><div><div class="j" lang="ja">${esc(w.ch)}</div><div class="t"><b>${esc(w.rom)}</b>${esc(w.en)}</div></div>${spk(w.ch)}</div>`).join("")}</div>` : ""}`;
    const drawLaunch = () => {
      const modes = [["romaji", "Choose the rōmaji"], ["char", "Recognise the character"], ["listen", "Listen and match"], ["write", "Write the character"], ["flash", "Flashcards"]];
      if (!isH) modes.push(["words", "Read loanwords"]);
      const n = kanaMode[script] === "words" ? WORDS.length : itemsFor(script).length;
      $("#launch").innerHTML = `<h3>Practise</h3><p>Choose the characters and the type of exercise.</p>
        ${kanaMode[script] !== "words" ? `<label class="l">Characters</label><div class="chips">${chips.filter(c => c.id !== "words").map(c => `<button type="button" class="chip ${kanaSel[script].has(c.id) ? "on" : ""}" data-scope="${c.id}" ${c.locked ? "disabled" : ""}>${c.label}${c.locked ? ICON.lock : ""}</button>`).join("")}<button type="button" class="chip" data-scope="__all">Select all open</button></div>` : ""}
        <label class="l">Exercise</label><div class="seg">${modes.map(([k, l]) => `<button type="button" data-mode="${k}" class="${kanaMode[script] === k ? "on" : ""}" ${k === "words" && unlocked() < 3 ? "disabled" : ""}>${l}</button>`).join("")}</div>
        <div class="go"><button class="btn primary lg" type="button" data-act="kana-start" ${n ? "" : "disabled"}>Start · ${Math.min(n, 20)} questions</button><span style="font-size:14px;color:var(--stone)">${list.filter(i => known(i.key)).length} of ${list.length} characters practised</span></div>`;
    };
    drawLaunch();
    $("#launch").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      if (b.dataset.scope === "__all") { kanaSel[script] = new Set(chips.filter(c => !c.locked && c.id !== "words").map(c => c.id)); }
      else if (b.dataset.scope) { const s = kanaSel[script]; s.has(b.dataset.scope) ? s.delete(b.dataset.scope) : s.add(b.dataset.scope); }
      else if (b.dataset.mode) kanaMode[script] = b.dataset.mode;
      else if (b.dataset.act === "kana-start") return startKana(script);
      drawLaunch();
    });
  }

  /* ---------------- question builders ---------------- */
  const opt = (label, ok, cls) => ({ label, ok });
  function kanaQ(mode, it, pool) {
    const others = shuffle(pool.filter(x => x.rom !== it.rom));
    const near = others.filter(x => x.row === it.row).concat(others.filter(x => x.row !== it.row));
    const ds = [], seen = new Set([it.rom]);
    for (const x of near) { if (seen.has(x.rom)) continue; seen.add(x.rom); ds.push(x); if (ds.length === 3) break; }
    const name = it.script === "hiragana" ? "hiragana" : "katakana";
    const ex = `<span class="jp">${esc(it.ch)}</span> is read <b>${esc(it.rom)}</b>${it.ch === "を" || it.ch === "ヲ" ? " (sometimes written “wo”; today it is used almost only as a particle)" : ""}.`;
    if (mode === "romaji") return { kind: "choice", key: it.key, prompt: `<div class="ch" lang="ja">${esc(it.ch)}</div>`, ask: `How do you read this ${name} character?`, options: shuffle([opt(it.rom, true), ...ds.map(d => opt(d.rom, false))]), explain: ex, say: it.ch };
    if (mode === "char") return { kind: "choice", key: it.key, cls: "big", prompt: `<div class="rom">${esc(it.rom)}</div>`, ask: `Which ${name} character is this?`, options: shuffle([opt(it.ch, true), ...ds.map(d => opt(d.ch, false))]), explain: ex, say: it.ch };
    if (mode === "listen") return { kind: "choice", key: it.key, cls: "big", prompt: `<div>${spk(it.ch, "lg")}</div><div class="hint">Tap to listen again</div>`, ask: "Which character do you hear?", options: shuffle([opt(it.ch, true), ...ds.map(d => opt(d.ch, false))]), explain: ex, autoSay: it.ch };
    if (mode === "write") return { kind: "write", key: it.key, ch: it.ch, rom: it.rom, name };
    return { kind: "flash", key: it.key, front: `<div class="ch" lang="ja">${esc(it.ch)}</div>`, back: `<div class="rom">${esc(it.rom)}</div><div class="sub">${esc(it.rowLabel)} row</div>${spk(it.ch)}`, say: it.ch };
  }
  function wordQ(w) {
    const ds = shuffle(WORDS.filter(x => x !== w)).slice(0, 3);
    return { kind: "choice", key: w.key, prompt: `<div class="word" lang="ja">${esc(w.ch)}</div>`, ask: "What does this loanword mean?", options: shuffle([opt(`${w.rom} · ${w.en}`, true), ...ds.map(d => opt(`${d.rom} · ${d.en}`, false))]), explain: `<span class="jp">${esc(w.ch)}</span> = <b>${esc(w.rom)}</b>: ${esc(w.en)}.`, say: w.ch };
  }
  const readingsText = k => `On'yomi: ${k.on.map(r => r[0] + " (" + r[1] + ")").join(", ") || "—"} · Kun'yomi: ${k.kun.map(r => r[0] + " (" + r[1] + ")").join(", ") || "—"}`;
  function kanjiQ(mode, k, pool) {
    const others = shuffle(KANJI.filter(x => x !== k));
    const same = shuffle(pool.filter(x => x !== k)).concat(others);
    const uniq = (arr, f, n, exclude) => { const out = [], s = new Set(exclude); for (const x of arr) { const v = f(x); if (!v || s.has(v)) continue; s.add(v); out.push(x); if (out.length === n) break; } return out; };
    if (mode === "meaning") return { kind: "choice", key: k.key, prompt: `<div class="ch serif" lang="ja">${esc(k.k)}</div>`, ask: "What does this kanji mean?", options: shuffle([opt(k.mean, true), ...uniq(same, x => x.mean, 3, [k.mean]).map(x => opt(x.mean, false))]), explain: `<span class="jp">${esc(k.k)}</span> means <b>${esc(k.mean)}</b>. ${esc(readingsText(k))}.` };
    if (mode === "reading") {
      const w = pick(k.words); const allW = KANJI.flatMap(x => x.words).filter(x => x[1] !== w[1]);
      const ds = uniq(shuffle(allW).sort((a, b) => Math.abs(a[1].length - w[1].length) - Math.abs(b[1].length - w[1].length)), x => x[1], 3, [w[1]]);
      return { kind: "choice", key: k.key, cls: "jpo", prompt: `<div class="word" lang="ja">${esc(w[0])}</div>`, ask: "How do you read this word?", options: shuffle([opt(w[1], true), ...ds.map(d => opt(d[1], false))]), explain: `<span class="jp">${esc(w[0])}</span> is read <span class="jp">${esc(w[1])}</span> (${esc(w[2])}) and means <b>${esc(w[3])}</b>.`, say: w[1] };
    }
    if (mode === "onkun") {
      const isOn = k.kun.length ? Math.random() < .5 : true; const r = pick(isOn ? k.on : k.kun);
      return { kind: "choice", key: k.key, prompt: `<div class="ch serif" lang="ja" style="font-size:96px">${esc(k.k)}</div><div class="word" lang="ja" style="font-size:40px;margin-top:6px">${esc(r[0])}</div><div class="hint">${esc(r[1])}</div>`, ask: "Is this reading on'yomi or kun'yomi?", options: [opt("On'yomi (音読み) · Chinese-derived reading", isOn), opt("Kun'yomi (訓読み) · native Japanese reading", !isOn)], explain: `${esc(r[0])} is a <b>${isOn ? "on'yomi" : "kun'yomi"}</b> of <span class="jp">${esc(k.k)}</span>. ${esc(readingsText(k))}.` };
    }
    if (mode === "vocab") {
      const w = pick(k.words); const pool2 = KANJI.flatMap(x => x.words).filter(x => !x[0].includes(k.k));
      const ds = uniq(shuffle(pool2), x => x[0], 3, [w[0]]);
      return { kind: "choice", key: k.key, cls: "jpo", prompt: `<div class="ch serif" lang="ja">${esc(k.k)}</div>`, ask: "Which word contains this kanji?", options: shuffle([opt(`${w[0]}（${w[1]}）`, true), ...ds.map(d => opt(`${d[0]}（${d[1]}）`, false))]), explain: `<span class="jp">${esc(w[0])}</span> (${esc(w[1])}, ${esc(w[2])}) means <b>${esc(w[3])}</b>.` };
    }
    if (mode === "gap") {
      const useSentence = Math.random() < .6; const src = useSentence ? pick(k.ex) : pick(k.words);
      const text = src[0], i = text.indexOf(k.k), gapped = esc(text.slice(0, i)) + `<span class="gap">？</span>` + esc(text.slice(i + 1));
      const ds = uniq(same.filter(x => !text.includes(x.k)), x => x.k, 3, [k.k]);
      return { kind: "choice", key: k.key, cls: "big", prompt: `<div class="sentence-jp" lang="ja">${gapped}</div><div class="hint" lang="ja">${esc(useSentence ? src[1] : src[1])}</div><div class="hint">${esc(useSentence ? src[2] : src[3])}</div>`, ask: "Complete with the correct kanji.", options: shuffle([opt(k.k, true), ...ds.map(d => opt(d.k, false))]), explain: `<span class="jp">${esc(text)}</span> — ${esc(dot(useSentence ? src[2] : src[3]))}`, say: src[1] };
    }
    if (mode === "strokes") return { kind: "strokes", key: k.key, ch: k.k, mean: k.mean };
    return { kind: "flash", key: k.key, front: `<div class="ch" lang="ja" style="font-family:var(--jp-serif)">${esc(k.k)}</div>`, back: `<div class="rom" style="font-size:30px">${esc(k.mean)}</div><div class="sub" lang="ja">${esc(k.on.map(r => r[0]).join("・"))}${k.kun.length ? " ｜ " + esc(k.kun.map(r => r[0]).join("・")) : ""}</div><div class="sub" lang="ja">${esc(k.words[0][0])}（${esc(k.words[0][1])}）${esc(k.words[0][3])}</div>`, say: k.words[0][1] };
  }

  /* ---------------- KANJI list & card ---------------- */
  const kjSel = { groups: null, mode: "meaning" };
  function renderKanjiList() {
    const U = unlocked();
    if (!kjSel.groups) kjSel.groups = new Set(KJ.groups.filter(g => g.belt <= U).map(g => g.id));
    view().innerHTML = `<div class="vhead"><h2>Kanji <span lang="ja" style="color:var(--shu)">漢字</span></h2><p>Your first ${KANJI.length} kanji, grouped by theme. Open a card to see the stroke order, readings, words and example sentences.</p></div>
      <div class="card launch" id="kjLaunch"></div>
      ${KJ.groups.map(g => `<div class="kj-group"><div class="head"><h3>${g.id}. ${g.title}</h3><span lang="ja">${g.jp}</span>${B.chip(g.belt, B.get(g.belt).short)}</div>
        <div class="kj-tiles">${KANJI.filter(k => k.g === g.id).map(k => `<a class="kj-tile ${known(k.key) ? "got" : ""}" href="#k-${hex(k.k)}"><span class="c" lang="ja">${esc(k.k)}</span><span class="m">${esc(k.mean)}</span></a>`).join("")}</div></div>`).join("")}`;
    const draw = () => {
      const modes = [["meaning", "Kanji recognition"], ["reading", "Reading quiz"], ["onkun", "On vs kun"], ["vocab", "Kanji to vocabulary"], ["gap", "Fill in the gaps"], ["strokes", "Stroke order challenge"], ["flash", "Flashcards"]];
      const n = KANJI.filter(k => kjSel.groups.has(k.g) && k.belt <= unlocked()).length;
      $("#kjLaunch").innerHTML = `<h3>Practise</h3><p>Choose the groups and the training mode.</p>
        <label class="l">Groups</label><div class="chips">${KJ.groups.map(g => { const lock = g.belt > unlocked(); return `<button type="button" class="chip ${kjSel.groups.has(g.id) ? "on" : ""}" data-g="${g.id}" ${lock ? "disabled" : ""}>${g.title} <span class="ja">${g.jp}</span>${lock ? ICON.lock : ""}</button>`; }).join("")}</div>
        <label class="l">Mode</label><div class="seg">${modes.map(([k, l]) => `<button type="button" data-mode="${k}" class="${kjSel.mode === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <div class="go"><button class="btn primary lg" type="button" data-act="kj-start" ${n ? "" : "disabled"}>Start · ${Math.min(n, kjSel.mode === "strokes" ? 8 : 15)} questions</button><span style="font-size:14px;color:var(--stone)">${KANJI.filter(k => known(k.key)).length} of ${KANJI.length} kanji practised</span></div>`;
    };
    draw();
    $("#kjLaunch").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      if (b.dataset.g) { const s = kjSel.groups; const g = +b.dataset.g; s.has(g) ? s.delete(g) : s.add(g); }
      else if (b.dataset.mode) kjSel.mode = b.dataset.mode;
      else if (b.dataset.act === "kj-start") {
        const pool = KANJI.filter(k => kjSel.groups.has(k.g) && k.belt <= unlocked());
        const n = kjSel.mode === "strokes" ? 8 : 15;
        return startSession({ title: "Kanji practice", qs: shuffle(pool).slice(0, n).map(k => kanjiQ(kjSel.mode, k, pool)), back: "#kanji", redo: () => shuffle(pool).slice(0, n).map(k => kanjiQ(kjSel.mode, k, pool)) });
      }
      draw();
    });
  }
  function renderKanjiCard(k) {
    const i = KANJI.indexOf(k), prev = KANJI[i - 1], next = KANJI[i + 1], g = KJ.groups.find(x => x.id === k.g);
    const rd = list => list.length ? list.map(r => `<div class="rd"><span class="k" lang="ja">${esc(r[0])}</span><span class="ro">${esc(r[1])}</span>${spk(r[0].replace(/[()]/g, ""))}</div>`).join("") : `<div class="rd"><span class="ro">No common reading at this level.</span></div>`;
    view().innerHTML = `<a class="back" href="#kanji" style="display:inline-flex;align-items:center;gap:6px;font-size:14px;color:var(--stone);text-decoration:none;margin-bottom:14px;white-space:nowrap">${ICON.back} All kanji</a>
      <div class="kcard">
        <div class="left card" style="padding:24px">
          <div class="huge" lang="ja">${esc(k.k)}</div>
          ${strokeViewer(k.k)}
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">${B.chip(k.belt)}<span style="font-size:14px;color:var(--stone)">Kanji ${k.n} of ${KANJI.length} · ${g.title} <span lang="ja">${g.jp}</span></span></div>
          <h2 style="margin-top:8px">${esc(k.mean)}</h2>
          <div class="kfacts"><span><b>${k.strokes}</b> ${k.strokes === 1 ? "stroke" : "strokes"}</span>${k.parts ? `<span>Parts: <b lang="ja">${esc(k.parts)}</b></span>` : ""}</div>
          <div class="readings"><div class="rbox on"><h4>On'yomi <span>音読み</span></h4>${rd(k.on)}</div><div class="rbox"><h4>Kun'yomi <span>訓読み</span></h4>${rd(k.kun)}</div></div>
          <h3 class="h4t">Vocabulary</h3>
          <div class="vocab">${k.words.map(w => `<div class="vrow"><span class="j" lang="ja">${esc(w[0])}</span><span class="t"><span class="kana" lang="ja">${esc(w[1])}</span> · <span class="ro">${esc(w[2])}</span><span class="it">${esc(w[3])}</span></span>${spk(w[1])}</div>`).join("")}</div>
          <h3 class="h4t">Example sentences</h3>
          ${k.ex.map(s => `<div class="sent"><div><div class="jp" lang="ja">${esc(s[0])}</div><div class="rd" lang="ja">${esc(s[1])}</div><div class="it">${esc(s[2])}</div></div>${spk(s[1])}</div>`).join("")}
          <div class="kcard-nav">${prev ? `<a class="btn soft" href="#k-${hex(prev.k)}">${ICON.back} <span lang="ja">${esc(prev.k)}</span></a>` : "<span></span>"}<button class="btn primary" type="button" data-act="kanji-one">Practise this kanji</button>${next ? `<a class="btn soft" href="#k-${hex(next.k)}"><span lang="ja">${esc(next.k)}</span> ${ICON.arrow}</a>` : "<span></span>"}</div>
        </div>
      </div>`;
    bindViewer(view());
    $('[data-act="kanji-one"]').addEventListener("click", () => {
      const pool = KANJI.filter(x => x.g === k.g);
      const make = () => shuffle([kanjiQ("meaning", k, pool), kanjiQ("reading", k, pool), kanjiQ("reading", k, pool), kanjiQ("onkun", k, pool), kanjiQ("vocab", k, pool), kanjiQ("gap", k, pool), kanjiQ("gap", k, pool), kanjiQ("strokes", k, pool)]);
      startSession({ title: `Kanji ${k.k}`, qs: make(), back: "#k-" + hex(k.k), redo: make });
    });
  }

  /* ---------------- starting sessions ---------------- */
  function startKana(script) {
    const mode = kanaMode[script];
    if (mode === "words") { const make = () => shuffle(WORDS).slice(0, 15).map(wordQ); return startSession({ title: "Loanwords", qs: make(), back: "#katakana", redo: make }); }
    const pool = itemsFor(script); const all = (script === "hiragana" ? HIRA : KATA).filter(i => i.belt <= unlocked());
    const make = () => shuffle(pool).slice(0, Math.min(20, pool.length)).map(it => kanaQ(mode, it, all.length >= 8 ? all : (script === "hiragana" ? HIRA : KATA)));
    startSession({ title: script === "hiragana" ? "Hiragana practice" : "Katakana practice", qs: make(), back: "#" + script, redo: make });
  }
  function beltQuestions(level, n = 20) {
    const kanjiAt = KANJI.filter(k => k.belt === level), kanjiUpTo = KANJI.filter(k => k.belt <= level);
    const kq = (list, modes) => list.map(k => kanjiQ(pick(modes), k, list));
    let qs = [];
    if (level === 1) qs = HIRA.filter(i => i.belt === 1).map(i => kanaQ(pick(["romaji", "char", "listen"]), i, HIRA));
    if (level === 2) qs = [...HIRA.filter(i => i.belt === 2), ...KATA.filter(i => i.belt === 2)].map(i => kanaQ(pick(["romaji", "char"]), i, i.script === "hiragana" ? HIRA : KATA));
    if (level === 3) qs = [...shuffle(KATA.filter(i => i.belt === 3)).slice(0, 10).map(i => kanaQ(pick(["romaji", "char"]), i, KATA)), ...kq(kanjiAt, ["meaning", "reading", "vocab"])];
    if (level === 4) qs = [...kq(kanjiAt, ["meaning", "reading", "gap"]), ...kq(kanjiAt, ["vocab", "onkun", "gap"]), ...shuffle([...HIRA, ...KATA]).slice(0, 8).map(i => kanaQ("romaji", i, i.script === "hiragana" ? HIRA : KATA))];
    if (level === 5) qs = kq(kanjiAt, ["meaning", "reading", "onkun", "gap", "vocab"]);
    if (level === 6) qs = [...kq(shuffle(kanjiUpTo).slice(0, 14), ["gap", "reading", "vocab"]), ...shuffle(WORDS).slice(0, 4).map(wordQ), ...shuffle(KATA).slice(0, 2).map(i => kanaQ("romaji", i, KATA))];
    return shuffle(qs).slice(0, n);
  }
  function mixedReview() {
    const U = unlocked(), qs = [];
    const h = HIRA.filter(i => i.belt <= U), k = KATA.filter(i => i.belt <= U), kj = KANJI.filter(x => x.belt <= U);
    for (let i = 0; i < 15; i++) {
      const r = Math.random();
      if (kj.length && r < .5) qs.push(kanjiQ(pick(["meaning", "reading", "gap", "vocab", "onkun"]), pick(kj), kj));
      else if (k.length && r < .7) qs.push(U >= 3 && Math.random() < .5 ? wordQ(pick(WORDS)) : kanaQ(pick(["romaji", "char"]), pick(k), KATA));
      else qs.push(kanaQ(pick(["romaji", "char", "listen"]), pick(h), HIRA));
    }
    return qs;
  }
  function dueQuestions() {
    const items = shuffle([...HIRA, ...KATA, ...KANJI].filter(i => stat(i.key)[2] === -1)).slice(0, 20);
    return items.map(i => i.key.startsWith("j:") ? kanjiQ(pick(["meaning", "reading", "gap"]), i, KANJI) : kanaQ(pick(["romaji", "char"]), i, i.script === "hiragana" ? HIRA : KATA));
  }

  /* ---------------- session engine ---------------- */
  function startSession(o) {
    if (!o.qs.length) { toast("Nothing to practise with these settings."); return; }
    session = Object.assign({ i: 0, results: [], answered: false }, o);
    renderQ();
  }
  function head(s) { const ok = s.results.filter(r => r.ok).length, n = s.qs.length; return `<div class="q-top"><span class="sc">${s.i + 1} / ${n}</span><div class="bar"><span style="width:${s.i / n * 100}%;background:var(--shu)"></span></div><span class="sc"><b style="color:var(--ok)">${ok}</b> ✓ · <b style="color:var(--bad)">${s.results.length - ok}</b> ✗</span></div>`; }
  function renderQ() {
    window.Dojo.toView();
    const s = session, q = s.qs[s.i];
    let body = "";
    if (q.kind === "choice") body = `<p class="q-ask">${q.ask}</p><div class="qprompt">${q.prompt}</div><div class="opts ${q.cls || ""}">${q.options.map((o, i) => `<button type="button" class="opt" data-i="${i}"><span lang="ja">${esc(o.label)}</span></button>`).join("")}</div>`;
    if (q.kind === "write") body = `<p class="q-ask">Write the ${q.name} character for this sound, then check.</p><div class="qprompt"><div class="rom">${esc(q.rom)}</div></div>
      <div class="pad-wrap"><div><div class="drawpad"><div class="gl"></div><canvas id="pad" width="520" height="520"></canvas></div><div class="pad-ctrl"><button class="btn soft sm" type="button" data-act="clear">Clear</button><button class="btn ink sm" type="button" data-act="reveal">Show the answer</button></div></div><div id="padAns"></div></div>`;
    if (q.kind === "strokes") body = `<p class="q-ask">Tap the strokes of <b>${esc(q.mean)}</b> in the correct order.</p><div class="sc-box" id="sc">${scSVG(q.ch)}<div class="sc-status" id="scStatus">Stroke 1 of ${(STROKES[q.ch] || []).length}</div></div>`;
    if (q.kind === "flash") body = `<p class="q-ask">Say the answer aloud, then flip the card.</p><div class="flip"><div class="card3" id="fc3" role="button" tabindex="0"><div class="face front">${q.front}</div><div class="face back">${q.back}</div></div></div>`;
    view().innerHTML = `<div class="q">${head(s)}<div class="card q-card"><div class="q-meta"><span class="q-kind">${esc(s.title)}</span></div>${body}<div id="fb" aria-live="polite"></div>
      <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-act="quit">Quit</button>${q.kind === "flash" ? `<button class="btn ink" type="button" data-act="flip">Flip the card</button>` : ""}</div></div></div>`;
    if (q.kind === "write") initPad();
    if (q.kind === "strokes") initSC(q);
    if (q.autoSay) setTimeout(() => TTS.say(q.autoSay), 300);
  }
  function feedback(ok, html) {
    const s = session; s.answered = true;
    $("#fb").innerHTML = `<div class="fbx ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div><h3>${ok ? pick(["Correct.", "Well done.", "Exactly.", "Correct — keep going."]) : "Not quite."}</h3>${html ? `<p>${html}</p>` : ""}</div></div>`;
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><button class="btn ink lg" type="button" data-act="next" id="nextBtn">${s.i < s.qs.length - 1 ? "Next" : "See results"} ${ICON.arrow}</button>`;
    $("#nextBtn").focus({ preventScroll: true });
  }
  function result(ok, given) { const s = session, q = s.qs[s.i]; s.results.push({ q, ok, given }); record(q.key, ok); }
  function answerChoice(i) {
    const s = session, q = s.qs[s.i]; if (s.answered || q.kind !== "choice") return;
    const o = q.options[i]; if (!o) return;
    $$(".opt").forEach((b, j) => { b.disabled = true; if (q.options[j].ok) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); });
    result(o.ok, o.label); feedback(o.ok, q.explain + (o.ok ? "" : ` You chose “${esc(o.label)}”.`));
    if (q.say) TTS.say(q.say);
  }
  // free drawing pad (self-check against the model)
  function initPad() {
    const c = $("#pad"), x = c.getContext("2d"); let down = false, last = null;
    x.lineWidth = 16; x.lineCap = "round"; x.lineJoin = "round"; x.strokeStyle = "#1d1b18";
    const pos = e => { const r = c.getBoundingClientRect(), t = e.touches ? e.touches[0] : e; return [(t.clientX - r.left) * c.width / r.width, (t.clientY - r.top) * c.height / r.height]; };
    const start = e => { e.preventDefault(); down = true; last = pos(e); };
    const move = e => { if (!down) return; e.preventDefault(); const p = pos(e); x.beginPath(); x.moveTo(last[0], last[1]); x.lineTo(p[0], p[1]); x.stroke(); last = p; };
    const end = () => { down = false; };
    c.addEventListener("pointerdown", start); c.addEventListener("pointermove", move); window.addEventListener("pointerup", end);
    c._clear = () => x.clearRect(0, 0, c.width, c.height);
  }
  function revealWrite() {
    const s = session, q = s.qs[s.i]; if (s.answered || q.revealed) return; q.revealed = true;
    $("#padAns").innerHTML = `<div style="text-align:center">${strokeViewer(q.ch)}<p style="margin:10px 0 0;color:var(--stone);font-size:14.5px">Compare your character with the model.</p></div>`;
    bindViewer($("#padAns")); TTS.say(q.ch);
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-act="self-no">Not yet</button><button class="btn ink" type="button" data-act="self-ok">${ICON.check} I wrote it correctly</button></div>`;
  }
  // stroke order challenge
  function scSVG(ch) {
    const ps = STROKES[ch] || [];
    return `<div class="sv"><svg viewBox="0 0 109 109" aria-label="Stroke order challenge"><g class="grid"><line x1="54.5" y1="0" x2="54.5" y2="109"/><line x1="0" y1="54.5" x2="109" y2="54.5"/></g>
      <g class="base">${ps.map((d, i) => `<path d="${d}" data-i="${i}"/>`).join("")}</g><g class="hit">${ps.map((d, i) => `<path d="${d}" data-i="${i}"/>`).join("")}</g></svg></div>`;
  }
  function initSC(q) {
    const n = (STROKES[q.ch] || []).length; let next = 0, errors = 0;
    $("#sc").addEventListener("click", e => {
      const p = e.target.closest(".hit path"); if (!p || session.answered) return;
      const i = +p.dataset.i, base = $(`.base path[data-i="${i}"]`);
      if (base.classList.contains("ok")) return;
      if (i === next) { base.classList.add("ok"); next++; $("#scStatus").textContent = next < n ? `Stroke ${next + 1} of ${n}` : "All strokes in order."; if (next === n) { const ok = errors === 0; result(ok, errors + " mistakes"); feedback(ok, ok ? `You wrote <span class="jp">${esc(q.ch)}</span> in the correct stroke order.` : `You completed <span class="jp">${esc(q.ch)}</span> with ${errors} wrong tap${errors > 1 ? "s" : ""}. Watch the order again in the kanji card.`); } }
      else { errors++; base.classList.add("bad"); setTimeout(() => base.classList.remove("bad"), 450); $("#scStatus").textContent = `Not that one — look for stroke ${next + 1} of ${n}.`; }
    });
  }
  function next() { const s = session; if (!s || !s.answered) return; if (s.i < s.qs.length - 1) { s.i++; s.answered = false; renderQ(); } else finish(); }
  function finish() {
    window.Dojo.toView();
    const s = session, n = s.results.length, ok = s.results.filter(r => r.ok).length, p = Math.round(ok / n * 100);
    const wrong = s.results.filter(r => !r.ok);
    view().innerHTML = `<div class="q"><div class="card results"><div class="score">${ok}<span> / ${n}</span></div>
      <p class="meta">${esc(s.title)} · ${p}% correct</p>
      <div class="bar" style="max-width:360px;margin:18px auto 0;height:10px"><span style="width:${p}%;background:${p >= 80 ? "var(--ok)" : p >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
      <div class="nums"><span style="background:var(--ok-bg);color:var(--ok)">${ok} correct</span><span style="background:var(--bad-bg);color:var(--bad)">${n - ok} wrong</span></div>
      <div class="actions"><button class="btn ink" type="button" data-act="repeat">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-act="retry">Retry my mistakes</button>` : ""}<a class="btn soft" href="${s.back}">Back</a></div>
      ${wrong.length ? `<div class="review"><h4>Review your mistakes</h4>${wrong.map(r => { const k = r.q.key.slice(2); const it = r.q.key.startsWith("j:") ? kanjiOf(k) : null; return `<div class="rv"><div class="s"><span lang="ja" style="font-size:26px">${esc(k)}</span> ${it ? `— ${esc(it.mean)} · <span lang="ja">${esc(it.words[0][0])}（${esc(it.words[0][1])}）</span>` : `— ${esc(([...HIRA, ...KATA, ...WORDS].find(x => x.ch === k) || {}).rom || "")}`}</div></div>`; }).join("")}</div>` : ""}
    </div></div>`;
  }

  /* ---------------- global events ---------------- */
  view().addEventListener("click", e => {
    if (session) {
      const o = e.target.closest(".opt"); if (o) return answerChoice(+o.dataset.i);
      if (e.target.closest("#fc3")) { const c = $("#fc3"); if (!c.classList.contains("on")) flipCard(); return; }
    }
    const kc = e.target.closest(".kcell[data-ch]");
    if (kc) { const list = location.hash.includes("katakana") ? KATA : HIRA; const it = list.find(i => i.ch === kc.dataset.ch); if (it) openKana(it); return; }
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act;
    if (a === "next") next();
    else if (a === "quit") dialog({ title: "Leave this session?", text: "Your answers in this session will not be counted.", ok: "Leave", cancel: "Keep going" }).then(y => { if (y) route(); });
    else if (a === "clear") $("#pad")._clear();
    else if (a === "reveal") revealWrite();
    else if (a === "self-ok" || a === "self-no") { const ok = a === "self-ok"; result(ok, ok ? "self-checked" : "not yet"); feedback(ok, ok ? "" : "Watch the stroke order again and try once more later."); }
    else if (a === "flip") flipCard();
    else if (a === "fc-ok" || a === "fc-no") { const ok = a === "fc-ok"; result(ok, ""); session.answered = true; next(); }
    else if (a === "repeat") startSession(Object.assign({}, session, { qs: session.redo ? session.redo() : session.qs }));
    else if (a === "retry") startSession({ title: "Your mistakes", qs: session.results.filter(r => !r.ok).map(r => Object.assign({}, r.q, { revealed: false })), back: session.back });
    else if (a === "exam") { const L = +b.dataset.level; const make = () => beltQuestions(L, 20); startSession({ title: `Test · ${B.get(L).name}`, qs: make(), exam: L, back: "#dojo", redo: make }); }
    else if (a === "mixed") startSession({ title: "Mixed review", qs: mixedReview(), back: "#dojo", redo: mixedReview });
    else if (a === "due") startSession({ title: "Review", qs: dueQuestions(), back: "#dojo", redo: dueQuestions });
    else if (a === "reset") dialog({ title: "Reset your progress?", text: "This deletes your belts and practice history for the Writing System on this device.", ok: "Reset", danger: true }).then(y => { if (y) { Store.reset(); renderDojo(); toast("Progress reset"); } });
  });
  function flipCard() {
    const s = session, q = s.qs[s.i]; const c = $("#fc3"); if (!c) return; c.classList.add("on"); if (q.say) TTS.say(q.say);
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-act="fc-no">Still learning</button><button class="btn ink" type="button" data-act="fc-ok">${ICON.check} I knew it</button></div>`;
  }
  document.addEventListener("keydown", e => {
    if (!session || document.querySelector(".modal,.cmodal")) return;
    const q = session.qs[session.i];
    if (!session.answered && q.kind === "choice" && /^[1-4]$/.test(e.key)) answerChoice(+e.key - 1);
    else if (session.answered && e.key === "Enter" && !e.target.matches("button,a,input")) { e.preventDefault(); next(); }
  });

  Store.load(); route();
  window.__jpDojo = { HIRA, KATA, KANJI, WORDS, kanaQ, kanjiQ, beltQuestions }; // for automated tests
})();
