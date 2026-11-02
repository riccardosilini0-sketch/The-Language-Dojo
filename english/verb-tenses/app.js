/* =====================================================================
   Verb Tenses — interface
   Reads exercises from window.TenseDojo (data/*.js). No grammar content here.
   Belts label the difficulty of each exercise; they are not a reward system.
   Nothing is saved: every visit starts fresh. During the visit the app remembers
   which exercises were answered wrongly, to offer a review.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast, dialog } = window.Dojo;
  const B = window.DojoBelts;
  const TD = window.TenseDojo, TOPICS = TD.topics, TYPES = TD.TYPES;
  const QUESTIONS = TOPICS.flatMap(t => t.q);
  const byId = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'), back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>')
  };

  const AREAS = [
    { id: "tenses", title: "Tenses", groups: [["present", "Present"], ["past", "Past"], ["future", "Future"]] },
    { id: "contrasts", title: "Contrasts", groups: [["present", "Present"], ["past", "Past"], ["future", "Future"], ["other", "Other"]] },
    { id: "mixed", title: "Mixed Groups", groups: [["groups", ""]] },
    { id: "challenges", title: "Challenges", groups: [["challenges", ""]] },
    { id: "exam", title: "Test" }
  ];
  // Belts follow the Common European Framework of Reference (CEFR)
  const CEFR = { 1: "A1", 2: "A2", 3: "B1", 4: "B2", 5: "C1", 6: "C2" };
  const BELT_LEVEL = { 1: "A1 · Beginner", 2: "A2 · Elementary", 3: "B1 · Intermediate", 4: "B2 · Upper intermediate", 5: "C1 · Advanced", 6: "C2 · Proficiency" };

  /* ---------------- storage: per-exercise results only ---------------- */
  const Store = {
    key: "language-dojo:en-verb-tenses", data: null,
    fresh: () => ({ q: {} }),
    load() { this.data = this.fresh(); },
    save() {},
    reset() { this.data = this.fresh(); this.save(); }
  };
  const qStat = id => Store.data.q[id] || [0, 0, 0]; // correct, wrong, last result (1 ok / -1 wrong)
  const missed = () => QUESTIONS.filter(q => qStat(q.id)[2] === -1);

  /* ---------------- answer checking ---------------- */
  // Answers are stored in full. Contractions typed by the student are expanded before comparing.
  function variants(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not").replace(/\bcan't\b/g, "cannot")
      .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
    let out = [s];
    if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
    if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
    return out.map(x => x.replace(/\s+/g, " ").trim());
  }
  function checkText(q, input) {
    const before = (q.text || "").split("___")[0].trim().split(/\s+/).pop() || "";
    const subject = before.toLowerCase().replace(/[^a-z']/g, "");
    const ins = variants(input);
    return q.answers.some(a => {
      const av = variants(a);
      if (av.some(x => ins.includes(x))) return true;
      if (!subject) return false;
      const sv = variants(subject + " " + a);
      return sv.some(x => ins.includes(x));
    });
  }
  // whole sentences: commas and quotes are ignored, contractions expanded, case ignored
  const sentV = x => variants(String(x || "").replace(/[,"“”]/g, " "));
  const checkSentence = (answers, given) => { const g = sentV(given); return answers.some(a => sentV(a).some(v => g.includes(v))); };
  const segs = q => { const out = []; q.raw.replace(/\[([^\]]+)\]/g, (_, t) => out.push(t)); return out; };
  const plainError = q => q.raw.replace(/\[([^\]]+)\]/g, "$1");

  /* ---------------- helpers ---------------- */
  const beltRange = t => { const ls = [...new Set(t.q.map(q => q.belt))].sort(); return `<span class="belt-range" title="${ls.map(l => B.get(l).short).join(", ")}">${ls.map(l => `<i style="background:${B.get(l).color}"></i>`).join("")}</span>`; };
  const fill = (q, ans) => {
    if (q.type === "build" || q.type === "order") return `<b>${esc(q.answers[0])}</b>`;
    if (q.type === "judge") return q.correct ? `${esc(q.text)}<br><b>The sentence is correct.</b>` : `<s>${esc(q.text)}</s><br><b>${esc(q.answers[0])}</b>`;
    if (q.type === "halves") return q.pairs.map(p => `${esc(p[0])} <b>${esc(p[1])}</b>`).join("<br>");
    if (q.type === "dialogue") { let k = 0; return q.lines.map(([sp, line]) => `${sp ? `<span class="who">${esc(sp)}:</span> ` : ""}${esc(line).replace(/___( \([^)]*\))?/g, () => `<b>${esc(q.answers[k++][0])}</b>`)}`).join("<br>"); }
    if (q.type === "error") { let k = 0; return esc(q.raw).replace(/\[([^\]]+)\]/g, (m, t) => (k++ === q.wrong ? `<b>${esc(ans)}</b>` : t)); }
    const parts = q.text.split("___"), bits = parts.length > 2 ? ans.split(" … ") : [ans];
    return parts.map((p, i) => esc(p) + (i < parts.length - 1 ? `<b>${esc(bits[i] || bits[0])}</b>` : "")).join("");
  };
  const areaOf = id => AREAS.find(a => a.id === id);
  const chipBelt = l => `<i class="bdot" style="background:${B.get(l).color}"></i>`;

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["dojo", "Overview"], ...AREAS.map(a => [a.id, a.title])].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  let session = null;
  const view = () => $("#view");
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "dojo";
    session = null;
    let tab = h.startsWith("t-") ? (byId[h.slice(2)] || {}).area : h;
    if (!["dojo", "tenses", "contrasts", "mixed", "challenges", "exam"].includes(tab)) tab = "dojo";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    if (h.startsWith("t-") && byId[h.slice(2)]) return renderTopic(byId[h.slice(2)]);
    if (tab === "exam") return renderExam();
    if (tab === "dojo") return renderDojo();
    return renderArea(areaOf(tab));
  }
  window.addEventListener("hashchange", route);
  $("#tabs").addEventListener("click", e => { const a = e.target.closest(".tab"); if (a && a.getAttribute("href") === (location.hash || "#dojo")) { e.preventDefault(); route(); } });

  /* ---------------- OVERVIEW ---------------- */
  function renderDojo() {
    const miss = missed().length;
    const count = id => TOPICS.filter(t => t.area === id).reduce((s, t) => s + t.q.length, 0);
    view().innerHTML = `
      ${miss ? `<div class="review-card"><p><b>${miss}</b> exercise${miss > 1 ? "s" : ""} to review</p><button class="btn ink sm" type="button" data-act="review">Review ${ICON.arrow}</button></div>` : ""}
      <div class="areas">${AREAS.map(a => `<a class="card card-link area ${a.id === "exam" ? "exam" : ""}" href="#${a.id}"><h3>${a.title}</h3><span class="c">${a.id === "exam" ? "10, 20 or 30 questions" : `${count(a.id)} exercises`}</span></a>`).join("")}</div>
      <div class="card belt-legend">
        <h3>Levels (CEFR)</h3>
        <div class="legend-grid">${B.list.map(b => `<div class="lg"><i style="background:${b.color}"></i><b>${b.name}</b><span>${BELT_LEVEL[b.level]}</span></div>`).join("")}</div>
      </div>`;
  }

  /* ---------------- AREA pages ---------------- */
  function renderArea(a) {
    view().innerHTML = `<div class="vhead"><h2>${a.title}</h2></div>` +
      a.groups.map(([g, label]) => {
        const ts = TOPICS.filter(t => t.area === a.id && t.group === g);
        return `${label ? `<div class="group-title"><h3>${label}</h3></div>` : ""}<div class="topics">${ts.map(t => {
          const done = t.q.filter(q => qStat(q.id)[0] > 0).length;
          return `<a class="card card-link topic" href="#t-${t.id}"><h4>${esc(t.title)}</h4>
            <div class="bar" title="${done} of ${t.q.length} answered correctly"><span style="width:${done / t.q.length * 100}%;background:var(--ok)"></span></div>
            <div class="meta"><span>${t.q.length} exercises</span>${beltRange(t)}</div></a>`;
        }).join("")}</div>`;
      }).join("");
  }

  /* ---------------- TOPIC page: tense → belt → exercises ---------------- */
  const tp = { belt: "all", type: "all", n: 10 };
  function renderTopic(t) {
    const a = areaOf(t.area);
    const levels = [...new Set(t.q.map(q => q.belt))].sort();
    if (tp.belt !== "all" && !levels.includes(+tp.belt)) tp.belt = "all";
    const inBelt = () => t.q.filter(q => tp.belt === "all" || q.belt === +tp.belt);
    const types = () => [...new Set(inBelt().map(q => q.type))];
    const pool = () => inBelt().filter(q => tp.type === "all" || q.type === tp.type);
    const draw = () => {
      if (tp.type !== "all" && !types().includes(tp.type)) tp.type = "all";
      const n = pool().length, len = Math.min(n, tp.n);
      $("#trainBox").innerHTML = `
        <label class="l">Level</label>
        <div class="belt-pick">${[["all", "All levels", ""], ...levels.map(l => [String(l), B.get(l).name, l])].map(([k, label, l]) => `<button type="button" data-belt="${k}" class="${tp.belt === k ? "on" : ""}">${l ? chipBelt(l) : ""}<span>${label}${l ? ` · ${CEFR[l]}` : ""}</span><small>${k === "all" ? t.q.length : t.q.filter(q => q.belt === +k).length}</small></button>`).join("")}</div>
        <label class="l">Exercise type</label>
        <div class="seg types">${[["all", "All types"], ...types().map(k => [k, TYPES[k]])].map(([k, l]) => `<button type="button" data-type="${k}" class="${tp.type === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <label class="l">Questions</label>
        <div class="seg">${[10, 20, 40].map(k => `<button type="button" data-n="${k}" class="${tp.n === k ? "on" : ""}">${k}</button>`).join("")}</div>
        <button class="btn primary lg start" type="button" data-act="start" ${n ? "" : "disabled"}>Start · ${len} question${len === 1 ? "" : "s"}</button>
        <p class="pool-note">${n} exercise${n === 1 ? "" : "s"} available with these settings. A different selection every time.</p>`;
    };
    view().innerHTML = `<a class="back" href="#${a.id}">${ICON.back} ${a.title}</a>
      <div class="topic-page">
        <div>
          <h2>${esc(t.title)}</h2>
          <p class="intro">${esc(t.intro)}</p>
          ${t.form ? `<div class="form"><b>Form</b>${esc(t.form)}</div>` : ""}
          <div class="uses">${t.uses.map(u => `<div class="use"><b>${esc(u[0])}</b><span>${esc(u[1])}</span></div>`).join("")}</div>
        </div>
        <aside class="card train" id="trainBox"></aside>
      </div>`;
    draw();
    $("#trainBox").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      if (b.dataset.belt) tp.belt = b.dataset.belt;
      else if (b.dataset.type) tp.type = b.dataset.type;
      else if (b.dataset.n) tp.n = +b.dataset.n;
      else if (b.dataset.act === "start") { const make = () => shuffle(pool()).slice(0, tp.n); return startSession({ title: t.title, qs: make(), back: "#t-" + t.id, redo: make }); }
      draw();
    });
  }

  /* ---------------- TEST (random, chosen difficulty) ---------------- */
  const ex = { n: 20, level: "all", scope: "all" };
  function examPool() {
    const inScope = QUESTIONS.filter(q => ex.scope === "all" || byId[q.topic].area === ex.scope);
    if (ex.level === "all") return shuffle(inScope).slice(0, ex.n);
    const L = +ex.level; let picked = shuffle(inScope.filter(q => q.belt === L));
    for (let d = 1; picked.length < ex.n && d < 6; d++) picked = picked.concat(shuffle(inScope.filter(q => q.belt === L - d || q.belt === L + d)));
    return shuffle(picked.slice(0, ex.n));
  }
  function renderExam() {
    const draw = () => {
      $("#examBox").innerHTML = `
        <label class="l">Questions</label>
        <div class="seg">${[10, 20, 30].map(n => `<button type="button" data-n="${n}" class="${ex.n === n ? "on" : ""}">${n}</button>`).join("")}</div>
        <label class="l">Level</label>
        <div class="belt-pick">${[["all", "All levels", ""], ...B.list.map(b => [String(b.level), b.name, b.level])].map(([k, label, l]) => `<button type="button" data-level="${k}" class="${String(ex.level) === k ? "on" : ""}">${l ? chipBelt(l) : ""}<span>${label}${l ? ` · ${CEFR[l]}` : ""}</span></button>`).join("")}</div>
        <label class="l">From</label>
        <div class="seg">${[["all", "Everything"], ...AREAS.filter(a => a.id !== "exam").map(a => [a.id, a.title])].map(([k, l]) => `<button type="button" data-scope="${k}" class="${ex.scope === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <button class="btn primary lg" type="button" data-act="exam" style="margin-top:24px">Start the test ${ICON.arrow}</button>`;
    };
    view().innerHTML = `<div class="vhead"><h2>Test</h2></div><div class="exam-setup"><div class="card" id="examBox"></div></div>`;
    draw();
    $("#examBox").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      if (b.dataset.n) ex.n = +b.dataset.n; else if (b.dataset.level) ex.level = b.dataset.level; else if (b.dataset.scope) ex.scope = b.dataset.scope;
      else if (b.dataset.act === "exam") return startSession({ title: ex.level === "all" ? "Test" : `Test · ${B.get(+ex.level).name} (${CEFR[+ex.level]})`, qs: examPool(), back: "#exam", redo: examPool });
      draw();
    });
  }

  /* ---------------- SESSION ---------------- */
  function startSession(opts) {
    if (!opts.qs.length) { toast("No exercises available with these settings."); return; }
    session = Object.assign({ i: 0, results: [], answered: false }, opts);
    session.qs = session.qs.map(q => {
      const c = Object.assign({}, q);
      if (q.type === "mc" || q.type === "tense") c.opts = shuffle(q.answers);
      if (q.type === "order") { const w = q.answers[0].replace(/[.?!]+$/, "").split(/\s+/); if (!/^I(\b|')/.test(w[0])) w[0] = w[0].charAt(0).toLowerCase() + w[0].slice(1); let t; do { t = shuffle(w.map((x, i) => ({ x, i }))); } while (w.length > 2 && t.every((o, i) => o.i === i)); c.tiles = t.map(o => o.x); c.end = (q.answers[0].match(/[.?!]+$/) || ["."])[0]; }
      if (q.type === "halves") c.right = shuffle(q.pairs.map(p => p[1]));
      return c;
    });
    renderQuestion();
  }
  const isWritten = q => ["gap", "comp", "trans", "ita", "context"].includes(q.type);
  const needsCheck = q => isWritten(q) || ["error", "build", "order", "dialogue"].includes(q.type);
  function renderQuestion() {
    window.Dojo.toView();
    const s = session, q = s.qs[s.i], n = s.qs.length, ok = s.results.filter(r => r.ok).length;
    const size = Math.max(10, Math.max(...q.answers.map(a => String(a).length)) + 2);
    const input = `<input type="text" id="gapIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Your answer" size="${size}">`;
    let body = "";
    if (q.type === "trans") body = `<p class="q-instr">${esc(q.instr)}</p><p class="q-source">${esc(q.source)}</p><p class="sentence">${esc(q.text).replace("___", input)}</p>`;
    else if (q.type === "ita") body = `<p class="q-instr">Translate into English.</p><p class="q-source it">${esc(q.it)}</p><p class="sentence">${esc(q.text).replace("___", input)}</p>`;
    else if (q.type === "context") body = `<p class="q-context">${esc(q.context)}</p><p class="sentence">${esc(q.text).replace("___", input)}</p>`;
    else if (q.type === "gap" || q.type === "comp") body = `<p class="sentence">${esc(q.text).replace("___", input)}</p>`;
    else if (q.type === "error") { let k = 0; body = `<p class="q-instr">Tap the part that contains a mistake, then write the correct form.</p><p class="sentence err">${esc(q.raw).replace(/\[([^\]]+)\]/g, (m, t) => `<button type="button" class="seg-btn" data-seg="${k++}">${t}</button>`)}</p><div class="fix-row" id="fixRow" hidden><label for="gapIn">Correct form:</label>${input}</div>`; }
    else if (q.type === "build") body = `<p class="q-instr">${esc(q.instr)}</p><p class="q-prompt">${esc(q.text)}</p><div class="sent-row">${input.replace('id="gapIn"', 'id="gapIn" class="sent-in"')}</div>`;
    else if (q.type === "order") body = `<p class="q-instr">Put the words in the correct order.</p><div class="built" id="built" aria-live="polite"><span class="ph">Tap the words below…</span></div><div class="tiles">${q.tiles.map((t, i) => `<button type="button" class="tile" data-t="${i}">${esc(t)}</button>`).join("")}</div><div class="tile-tools"><button type="button" class="btn soft sm" data-act="undo">Undo</button><button type="button" class="btn soft sm" data-act="clear">Clear</button></div>`;
    else if (q.type === "judge") body = `<p class="q-instr">Is this sentence right or wrong?</p><p class="sentence">${esc(q.text)}</p><div class="opts two judge"><button type="button" class="opt" data-j="1">${ICON.check} Right</button><button type="button" class="opt" data-j="0">${ICON.x} Wrong</button></div><div class="fix-row" id="fixRow" hidden><label for="gapIn">Write it correctly:</label>${input.replace('id="gapIn"', 'id="gapIn" class="sent-in"')}<button class="btn ink" type="button" data-act="check">${ICON.check} Check</button></div>`;
    else if (q.type === "dialogue") { let k = 0; body = `${q.context ? `<p class="q-context">${esc(q.context)}</p>` : ""}<div class="dlg">${q.lines.map(([sp, line]) => `<p>${sp ? `<span class="who">${esc(sp)}</span>` : ""}<span>${esc(line).replace(/___/g, () => { const a = q.answers[k]; return `<input type="text" class="dgin" data-k="${k++}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Gap ${k}" size="${Math.max(8, Math.max(...a.map(x => x.length)) + 1)}">`; })}</span></p>`).join("")}</div>`; }
    else if (q.type === "halves") body = `<p class="q-instr">${esc(q.instr)}</p><div class="halves"><div class="hcol">${q.pairs.map((p, i) => `<button type="button" class="hl-l" data-i="${i}">${esc(p[0])}</button>`).join("")}</div><div class="hcol">${q.right.map((r, i) => `<button type="button" class="hl-r" data-i="${i}">${esc(r)}</button>`).join("")}</div></div><p class="pool-note">Tap a beginning, then its ending.</p>`;
    else body = `${q.type === "tense" ? `<p class="q-instr">Which tense ${q.text.includes("___") ? "fits the gap" : "is used"}?</p>` : ""}<p class="sentence">${esc(q.text).split("___").join('<span class="blank">&nbsp;</span>')}</p><div class="opts">${q.opts.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`;
    view().innerHTML = `<div class="q">
      <div class="q-top"><span class="sc">${s.i + 1} / ${n}</span><div class="bar"><span style="width:${s.i / n * 100}%;background:var(--shu)"></span></div><span class="sc"><b style="color:var(--ok)">${ok}</b> ✓ · <b style="color:var(--bad)">${s.results.length - ok}</b> ✗</span></div>
      <div class="card q-card">
        <div class="q-meta"><span class="q-kind">${esc(s.title)} · ${TYPES[q.type]}</span>${B.chip(q.belt, `${B.get(q.belt).name} · ${CEFR[q.belt]}`)}</div>
        ${body}
        <div id="fb" aria-live="polite"></div>
        <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-act="quit">Quit</button>${needsCheck(q) ? `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-act="skip">I don't know</button><button class="btn ink lg" type="button" data-act="check">${ICON.check} Check</button></div>` : ""}</div>
      </div></div>`;
    s.st = { built: [] };
    $$(".dgin").forEach(g => g.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); s.answered ? next() : answer(""); } }));
    if (q.type === "dialogue" && matchMedia("(hover:hover)").matches) { const g = $(".dgin"); if (g) g.focus({ preventScroll: true }); }
    const inp = $("#gapIn");
    if (inp) { if ((isWritten(q) || q.type === "build") && matchMedia("(hover:hover)").matches) inp.focus({ preventScroll: true }); inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); s.answered ? next() : answer(inp.value); } }); }
  }
  function answer(given, idx) {
    const s = session; if (!s || s.answered) return;
    const q = s.qs[s.i];
    let ok, note = "";
    if (q.type === "build") {
      ok = checkSentence(q.answers, given); const inp = $("#gapIn"); inp.disabled = true; inp.classList.add(ok ? "right" : "wrong");
    } else if (q.type === "order") {
      given = s.st.built.map(i => q.tiles[i]).join(" ") + (s.st.built.length ? q.end : "");
      ok = checkSentence(q.answers, given); $$(".tile").forEach(b => b.disabled = true); $("#built").classList.add(ok ? "right" : "wrong");
    } else if (q.type === "judge") {
      // given: "R" (said right), or the typed correction after saying wrong
      if (given === "R") { ok = q.correct; given = "Right"; }
      else { ok = !q.correct && checkSentence(q.answers, given); const inp = $("#gapIn"); if (inp) { inp.disabled = true; inp.classList.add(ok ? "right" : "wrong"); } given = q.correct ? "Wrong" : (given || "—"); }
      $$(".judge .opt").forEach(b => { b.disabled = true; if ((b.dataset.j === "1") === q.correct) b.classList.add("right"); });
      $$("#fixRow .btn").forEach(b => b.remove());
    } else if (q.type === "dialogue") {
      const befores = []; q.lines.forEach(([, l]) => { const parts = l.split("___"); for (let i = 0; i < parts.length - 1; i++) befores.push(parts[i]); });
      const res = $$(".dgin").map(g => { const k = +g.dataset.k; const good = checkText({ text: befores[k] + "___", answers: q.answers[k] }, g.value); g.disabled = true; g.classList.add(good ? "right" : "wrong"); return good; });
      ok = res.every(Boolean); given = $$(".dgin").map(g => g.value || "—").join(" · ");
      if (!ok) note = `${res.filter(Boolean).length} of ${res.length} gaps correct.`;
    } else if (q.type === "halves") {
      ok = !s.st.err; given = ok ? "" : `${s.st.err} wrong match${s.st.err > 1 ? "es" : ""}`;
    } else if (isWritten(q)) {
      ok = checkText(q, given);
      const inp = $("#gapIn"); inp.disabled = true; inp.classList.add(ok ? "right" : "wrong");
    } else if (q.type === "error") {
      const chosen = s.seg;
      const corrOk = q.answers.some(a => variants(a).some(v => variants(given).includes(v)));
      ok = chosen === q.wrong && corrOk;
      $$(".seg-btn").forEach((b, i) => { b.disabled = true; if (i === q.wrong) b.classList.add("bad-seg"); else if (i === chosen) b.classList.add("miss"); });
      const inp = $("#gapIn"); if (inp) { inp.disabled = true; inp.classList.add(ok ? "right" : "wrong"); }
      if (chosen !== undefined && chosen !== q.wrong) note = `The mistake is in “${esc(segs(q)[q.wrong])}”, not in “${esc(segs(q)[chosen])}”.`;
      given = chosen === undefined ? "" : `${segs(q)[chosen]} → ${given || "—"}`;
    } else {
      given = q.opts[idx]; ok = given === q.answers[0];
      $$(".opt").forEach((b, j) => { b.disabled = true; if (q.opts[j] === q.answers[0]) b.classList.add("right"); else if (j === idx) b.classList.add("wrong"); });
    }
    s.answered = true;
    s.results.push({ q, ok, given });
    const st = Store.data.q[q.id] || [0, 0, 0]; ok ? st[0]++ : st[1]++; st[2] = ok ? 1 : -1; Store.data.q[q.id] = st; Store.save();
    const solution = q.type === "tense" ? `${esc(q.text).split("___").join("<b>…</b>")}<br><b>${esc(q.answers[0])}</b>` : fill(q, q.answers[0]);
    const others = (isWritten(q) || ["error", "build", "order"].includes(q.type) || (q.type === "judge" && !q.correct)) && q.answers.length > 1 ? `<p class="you">Also accepted: ${q.answers.slice(1).map(esc).join(" · ")}</p>` : "";
    $("#fb").innerHTML = `<div class="fb ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div>
      <h3>${ok ? pick(["Correct.", "Well done.", "Exactly right.", "Correct — good reasoning."]) : "Not quite."}</h3>
      <div class="ans">${solution}</div>
      ${!ok && given ? `<p class="you">Your answer: “${esc(given)}”.</p>` : ""}${note ? `<p class="you">${note}</p>` : ""}
      <p class="why">${esc(q.expl)}</p>${others}</div></div>`;
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><button class="btn ink lg" type="button" data-act="next" id="nextBtn">${s.i < s.qs.length - 1 ? "Next question" : "See results"} ${ICON.arrow}</button>`;
    $("#nextBtn").focus({ preventScroll: true });
  }
  function drawBuilt(q) { const b = $("#built"), st = session.st; b.innerHTML = st.built.length ? st.built.map((i, k) => `<span class="bw">${esc(k ? q.tiles[i] : q.tiles[i].charAt(0).toUpperCase() + q.tiles[i].slice(1))}</span>`).join(" ") + `<span class="bw end">${esc(q.end)}</span>` : `<span class="ph">Tap the words below…</span>`; }
  function next() { const s = session; if (!s || !s.answered) return; if (s.i < s.qs.length - 1) { s.i++; s.answered = false; s.seg = undefined; renderQuestion(); } else finish(); }
  function finish() {
    window.Dojo.toView();
    const s = session, n = s.results.length, ok = s.results.filter(r => r.ok).length, pct = Math.round(ok / n * 100);
    const wrong = s.results.filter(r => !r.ok);
    view().innerHTML = `<div class="q"><div class="card results">
      <div class="score">${ok}<span> / ${n}</span></div>
      <p class="meta">${esc(s.title)} · ${pct}% correct</p>
      <div class="bar" style="max-width:360px;margin:18px auto 0;height:10px"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
      <div class="nums"><span style="background:var(--ok-bg);color:var(--ok)">${ok} correct</span><span style="background:var(--bad-bg);color:var(--bad)">${n - ok} wrong</span></div>
      <div class="actions"><button class="btn ink" type="button" data-act="repeat">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-act="retry">Retry my mistakes</button>` : ""}<a class="btn soft" href="${s.back}">Back</a></div>
      ${wrong.length ? `<div class="review"><h4>Review your mistakes</h4>${wrong.map(r => `<div class="rv"><div class="s">${r.q.type === "tense" ? `${esc(r.q.text)} — <b>${esc(r.q.answers[0])}</b>` : fill(r.q, r.q.answers[0])}</div><div class="y">Your answer: ${esc(r.given || "—")}</div><div class="e">${esc(r.q.expl)}</div></div>`).join("")}</div>` : ""}
    </div></div>`;
  }

  /* ---------------- events ---------------- */
  view().addEventListener("click", e => {
    const sb = e.target.closest(".seg-btn");
    if (sb && session && !session.answered) { session.seg = +sb.dataset.seg; $$(".seg-btn").forEach(b => b.classList.toggle("sel", b === sb)); $("#fixRow").hidden = false; const inp = $("#gapIn"); inp.value = ""; inp.placeholder = sb.textContent; inp.focus(); return; }
    if (session && !session.answered) {
      const q = session.qs[session.i], st = session.st;
      const tile = e.target.closest(".tile");
      if (tile && !tile.disabled) { st.built.push(+tile.dataset.t); tile.disabled = true; drawBuilt(q); return; }
      const jb = e.target.closest(".judge .opt");
      if (jb) { if (jb.dataset.j === "1") return answer("R"); $$(".judge .opt").forEach(x => x.classList.toggle("sel", x === jb)); $("#fixRow").hidden = false; const inp = $("#gapIn"); inp.value = q.text; inp.focus(); return; }
      const hl = e.target.closest(".hl-l"), hr = e.target.closest(".hl-r");
      if (hl && !hl.classList.contains("done")) { $$(".hl-l").forEach(x => x.classList.toggle("sel", x === hl)); st.left = +hl.dataset.i; return; }
      if (hr && !hr.classList.contains("done")) {
        if (st.left == null) { toast("First tap a beginning."); return; }
        const good = q.right[+hr.dataset.i] === q.pairs[st.left][1];
        if (good) { $(`.hl-l[data-i="${st.left}"]`).classList.add("done"); $(`.hl-l[data-i="${st.left}"]`).classList.remove("sel"); hr.classList.add("done"); st.left = null; }
        else { st.err = (st.err || 0) + 1; hr.classList.add("bad"); setTimeout(() => hr.classList.remove("bad"), 500); }
        if ($$(".hl-l.done").length === q.pairs.length) answer("");
        return;
      }
    }
    const b = e.target.closest("[data-act], .opt"); if (!b) return;
    if (b.classList.contains("opt")) { if (b.closest(".judge")) return; return answer(null, +b.dataset.i); }
    const a = b.dataset.act;
    if (a === "check") { const q = session.qs[session.i]; if (q.type === "error" && session.seg === undefined) { toast("First tap the part that contains the mistake."); return; } if (q.type === "order" && !session.st.built.length) { toast("Tap the words to build the sentence."); return; } answer($("#gapIn") ? $("#gapIn").value : ""); }
    else if (a === "undo" || a === "clear") { const st = session.st, q = session.qs[session.i]; const back = a === "undo" ? [st.built.pop()] : st.built.splice(0); back.forEach(i => { if (i != null) $(`.tile[data-t="${i}"]`).disabled = false; }); drawBuilt(q); }
    else if (a === "skip") { const q = session.qs[session.i]; answer(q.type === "judge" ? "" : ""); }
    else if (a === "next") next();
    else if (a === "quit") dialog({ title: "Leave this session?", text: "Your answers in this session will not be counted.", ok: "Leave", cancel: "Keep going" }).then(y => { if (y) route(); });
    else if (a === "repeat") startSession(Object.assign({}, session, { qs: session.redo ? session.redo() : shuffle(session.qs) }));
    else if (a === "retry") { const w = session.results.filter(r => !r.ok).map(r => QUESTIONS.find(q => q.id === r.q.id)); startSession({ title: "Your mistakes", qs: shuffle(w), back: session.back }); }
    else if (a === "review") { const make = () => shuffle(missed()).slice(0, 20); startSession({ title: "Review", qs: make(), back: "#dojo", redo: make }); }
    else if (a === "reset") dialog({ title: "Reset your results?", text: "This deletes your saved answers for Verb Tenses on this device.", ok: "Reset", danger: true }).then(y => { if (y) { Store.reset(); renderDojo(); toast("Results reset"); } });
  });
  document.addEventListener("keydown", e => {
    if (!session || document.querySelector(".modal")) return;
    const q = session.qs[session.i];
    if (!session.answered && (q.type === "mc" || q.type === "tense") && /^[1-4]$/.test(e.key) && !e.target.matches("input")) answer(null, +e.key - 1);
    else if (session.answered && e.key === "Enter" && !e.target.matches("input,button,a")) { e.preventDefault(); next(); }
  });

  Store.load(); route();
  window.__tenseDojo = { checkText, checkSentence, variants, QUESTIONS, TOPICS, segs, plainError, current: () => session && session.qs[session.i] }; // used by automated tests
})();
