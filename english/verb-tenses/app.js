/* =====================================================================
   Verb Tenses Dojo — interface
   Reads content from window.TenseDojo (data/*.js). No grammar content here.
   Progress: localStorage "language-dojo:en-verb-tenses".
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast, dialog } = window.Dojo;
  const B = window.DojoBelts;
  const TOPICS = window.TenseDojo.topics;
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
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    lock: '<svg class="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
  };

  const AREAS = [
    { id: "tenses", n: 1, title: "Individual Verb Tenses", short: "Fifteen tenses, one at a time: what they mean, how to form them and when to use them.", groups: [["present", "Present"], ["past", "Past"], ["future", "Future"]] },
    { id: "contrasts", n: 2, title: "Verb Tense Contrasts", short: "Learn to choose between two tenses according to the context.", groups: [["present", "Present contrasts"], ["past", "Past contrasts"], ["future", "Future contrasts"], ["other", "Other contrasts"]] },
    { id: "mixed", n: 3, title: "Mixed Tenses: Complete Groups", short: "All present, all past or all future forms together.", groups: [["groups", "Complete groups"]] },
    { id: "challenges", n: 4, title: "Complete Tense Challenges", short: "Every tense, no hints: reason about meaning and time.", groups: [["challenges", "Challenges"]] },
    { id: "exam", n: 5, title: "Dojo Exam", short: "Random tests from every category, at the difficulty you choose. Pass to earn your next belt." }
  ];
  const BELT_INFO = {
    1: "Simple sentences, one grammar point, clear time expressions.",
    2: "More contexts and the first distinctions between tenses.",
    3: "Tense contrasts in realistic, longer sentences.",
    4: "Combined tenses, implicit time and narrative contexts.",
    5: "All tenses, plausible distractors and nuances of meaning.",
    6: "Authentic, demanding contexts that need deep understanding."
  };

  /* ---------------- storage ---------------- */
  const Store = {
    key: "language-dojo:en-verb-tenses", data: null,
    fresh: () => ({ earned: 1, teacher: false, topics: {}, q: {}, exams: [], answered: 0, correct: 0 }),
    load() { let d = null; try { d = JSON.parse(localStorage.getItem(this.key) || "null"); } catch (e) {} this.data = Object.assign(this.fresh(), d && typeof d === "object" ? d : {}); },
    save() { try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) {} },
    reset() { this.data = this.fresh(); this.save(); }
  };
  const unlocked = () => 6; // every belt level is always open; belts track rank only
  const qStat = id => Store.data.q[id] || [0, 0, 0]; // correct, wrong, last result (1 ok / -1 wrong)
  const mastered = t => t.q.filter(q => qStat(q.id)[0] > 0).length;
  const missed = () => QUESTIONS.filter(q => qStat(q.id)[2] === -1);

  /* ---------------- answer checking ---------------- */
  // Answers are stored in full form. Contractions typed by the student are expanded before comparing.
  function variants(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not").replace(/\bcan't\b/g, "cannot")
      .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
    let out = [s];
    if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
    if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
    return out.map(x => x.replace(/\s+/g, " ").trim());
  }
  function checkGap(q, input) {
    const subject = (q.text.split("___")[0].trim().split(/\s+/).pop() || "").toLowerCase().replace(/[^a-z']/g, "");
    const ins = variants(input);
    const ok = q.answers.some(a => variants(a).some(av => ins.some(iv => iv === av || (subject && iv === variants(subject + " " + a)[0]) || (subject && variants(subject + " " + a).includes(iv)))));
    return ok;
  }

  /* ---------------- helpers ---------------- */
  const beltRange = t => { const ls = [...new Set(t.q.map(q => q.belt))].sort(); return `<span class="belt-range" title="${ls.map(l => B.get(l).short).join(", ")}">${ls.map(l => `<i style="background:${B.get(l).color}"></i>`).join("")}</span>`; };
  // put the answer into the blank(s); "drives … is taking" fills two blanks
  const fill = (q, ans) => { const parts = q.text.split("___"), bits = parts.length > 2 ? ans.split(" … ") : [ans]; return parts.map((p, i) => esc(p) + (i < parts.length - 1 ? `<b>${esc(bits[i] || bits[0])}</b>` : "")).join(""); };
  const areaOf = id => AREAS.find(a => a.id === id);

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["dojo", "Dojo", ""], ...AREAS.map(a => [a.id, a.title.replace("Mixed Tenses: ", "").replace("Individual ", "").replace("Verb Tense ", "").replace("Complete Tense ", ""), a.n])]
    .map(([k, l, n]) => `<a class="tab" href="#${k}" data-tab="${k}">${n ? `<span class="num">${n}</span>` : ""}${l}</a>`).join("");
  let session = null;
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "dojo";
    session = null;
    let tab = h.startsWith("t-") ? (byId[h.slice(2)] || {}).area : h;
    if (!["dojo", "tenses", "contrasts", "mixed", "challenges", "exam"].includes(tab)) tab = "dojo";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    const top = $(".tabs").getBoundingClientRect().top + window.scrollY - (window.innerWidth <= 820 ? 66 : 76);
    if (window.scrollY > top) window.scrollTo(0, top);
    if (h.startsWith("t-") && byId[h.slice(2)]) return renderTopic(byId[h.slice(2)]);
    if (tab === "exam") return renderExam();
    if (tab === "dojo") return renderDojo();
    return renderArea(areaOf(tab));
  }
  window.addEventListener("hashchange", route);
  // clicking the tab of the page you are on (e.g. during a session) goes back to that page
  $("#tabs").addEventListener("click", e => { const a = e.target.closest(".tab"); if (a && a.getAttribute("href") === (location.hash || "#dojo")) { e.preventDefault(); route(); } });
  const view = () => $("#view");

  /* ---------------- DOJO (home of the section) ---------------- */
  function renderDojo() {
    const e = Store.data.earned, nb = e < 6 ? B.get(e + 1) : null, miss = missed().length;
    const acc = Store.data.answered ? Math.round(Store.data.correct / Store.data.answered * 100) + "%" : "–";
    view().innerHTML = `
      ${miss ? `<div class="review-card"><p>You have <b>${miss}</b> question${miss > 1 ? "s" : ""} to review from your last attempts.</p><button class="btn ink sm" type="button" data-act="review">Review my mistakes ${ICON.arrow}</button></div>` : ""}
      <div class="dojo-hero">
        <div class="card rank">
          <div class="r1"><span class="belt-ic">${B.svg(e)}</span><div><small>Your rank</small><h3>${B.get(e).name}</h3></div></div>
          <p>${nb ? `All levels are open: train at any belt you like. To be promoted, pass a ${nb.name} exam (20 or 30 questions, 80% or more).` : "You have reached the highest rank. Keep your skills sharp with the challenges and exams."}</p>
          <div style="display:flex;gap:28px;font-size:14px;color:var(--stone)"><span><b style="display:block;font:700 24px/1.2 var(--serif);color:var(--sumi)">${QUESTIONS.length}</b>exercises</span><span><b style="display:block;font:700 24px/1.2 var(--serif);color:var(--sumi)">${Object.keys(Store.data.q).length}</b>attempted</span><span><b style="display:block;font:700 24px/1.2 var(--serif);color:var(--sumi)">${acc}</b>accuracy</span></div>
          <div class="actions"><a class="btn primary" href="#tenses">Start training ${ICON.arrow}</a>${nb ? `<a class="btn" href="#exam">Take the ${nb.short.toLowerCase()} belt exam</a>` : ""}</div>
        </div>
        <div class="card belt-path"><h3>The belt path</h3>
          ${B.list.map(b => `<div class="bp"><i style="background:${b.color}"></i><div><b>${b.name}</b><span class="d">${BELT_INFO[b.level]}</span></div><span class="st ${b.level <= e ? "ok" : b.level === e + 1 ? "next" : ""}">${b.level <= e ? "Earned" : b.level === e + 1 ? "Next" : ""}</span></div>`).join("")}
        </div>
      </div>
      <div class="areas">${AREAS.map(a => { const n = a.id === "exam" ? "" : TOPICS.filter(t => t.area === a.id); return `<a class="card card-link area ${a.id === "exam" ? "exam" : ""}" href="#${a.id}"><span class="n">${a.n}</span><h3>${a.title}</h3><p>${a.short}</p><span class="c">${a.id === "exam" ? "10, 20 or 30 questions" : `${n.length} topics · ${n.reduce((s, t) => s + t.q.length, 0)} exercises`}</span></a>`; }).join("")}</div>
      <div class="tools-row">
        <span>All belt levels are always open. Your rank grows as you pass the Dojo Exams.</span>
        <button class="btn soft sm" type="button" data-act="reset">${ICON.restart} Reset progress</button>
      </div>`;
  }

  /* ---------------- AREA pages ---------------- */
  function renderArea(a) {
    view().innerHTML = `<div class="vhead"><h2>${a.n}. ${a.title}</h2><p>${a.short}</p></div>` +
      a.groups.map(([g, label]) => {
        const ts = TOPICS.filter(t => t.area === a.id && t.group === g);
        return `${a.groups.length > 1 ? `<div class="group-title"><h3>${label}</h3><span>${ts.length} topics</span></div>` : ""}<div class="topics">${ts.map(t => {
          const st = Store.data.topics[t.id];
          return `<a class="card card-link topic" href="#t-${t.id}"><h4>${esc(t.title)}</h4><p>${esc(t.short)}</p>
            <div class="bar" title="${mastered(t)} of ${t.q.length} answered correctly"><span style="width:${mastered(t) / t.q.length * 100}%;background:var(--ok)"></span></div>
            <div class="meta"><span>${t.q.length} exercises ${beltRange(t)}</span>${st ? `<span class="best">Best ${st.best}%</span>` : ""}</div></a>`;
        }).join("")}</div>`;
      }).join("");
  }

  /* ---------------- TOPIC page ---------------- */
  const tp = { belt: "all", type: "all" };
  function renderTopic(t) {
    const a = areaOf(t.area), U = unlocked();
    const levels = [...new Set(t.q.map(q => q.belt))].sort();
    if (tp.belt !== "all" && (!levels.includes(+tp.belt) || +tp.belt > U)) tp.belt = "all";
    const pool = () => t.q.filter(q => q.belt <= U && (tp.belt === "all" || q.belt === +tp.belt) && (tp.type === "all" || q.type === tp.type));
    const st = Store.data.topics[t.id];
    const draw = () => {
      const n = pool().length;
      $("#trainBox").innerHTML = `<h3>Train</h3><p>Questions appear in a different order every time.</p>
        <label class="l">Belt level</label>
        <div class="seg">${[["all", "All levels"], ...levels.map(l => [String(l), B.get(l).short])].map(([k, l]) => { const lock = k !== "all" && +k > U; return `<button type="button" data-belt="${k}" class="${tp.belt === k ? "on" : ""}" ${lock ? "disabled" : ""}>${k !== "all" ? `<i style="width:14px;height:6px;border-radius:2px;background:${B.get(+k).color};box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)"></i>` : ""}${l}${lock ? ICON.lock : ""}</button>`; }).join("")}</div>
        ${levels.some(l => l > U) ? `<div class="locked-note">Higher levels unlock as you earn belts in the Dojo Exam.</div>` : ""}
        <label class="l">Exercise type</label>
        <div class="seg">${[["all", "Mixed"], ["gap", "Fill in the gaps"], ["mc", "Multiple choice"]].map(([k, l]) => `<button type="button" data-type="${k}" class="${tp.type === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <button class="btn primary lg start" type="button" data-act="start" ${n ? "" : "disabled"}>Start training · ${n} question${n === 1 ? "" : "s"}</button>
        <div class="stats"><span><b>${mastered(t)}/${t.q.length}</b>answered correctly</span><span style="text-align:right"><b>${st ? st.best + "%" : "–"}</b>best score</span></div>`;
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
      if (b.dataset.belt) { tp.belt = b.dataset.belt; draw(); }
      else if (b.dataset.type) { tp.type = b.dataset.type; draw(); }
      else if (b.dataset.act === "start") startSession({ title: t.title, qs: shuffle(pool()), topic: t.id, back: "#t-" + t.id, redo: () => shuffle(pool()) });
    });
  }

  /* ---------------- EXAM ---------------- */
  const ex = { n: 20, level: null, scope: "all" };
  function examPool(level, scope, n) {
    const inScope = QUESTIONS.filter(q => scope === "all" || byId[q.topic].area === scope);
    let picked = shuffle(inScope.filter(q => q.belt === level));
    for (let d = 1; picked.length < n && d < 6; d++) {
      picked = picked.concat(shuffle(inScope.filter(q => q.belt === level - d)));
      if (picked.length < n) picked = picked.concat(shuffle(inScope.filter(q => q.belt === level + d && q.belt <= unlocked())));
    }
    // avoid long runs from the same topic
    const out = picked.slice(0, n);
    return shuffle(out);
  }
  function renderExam() {
    const U = unlocked(), e = Store.data.earned;
    if (!ex.level || ex.level > U) ex.level = Math.min(6, e + 1);
    const hist = Store.data.exams.slice(0, 6);
    const draw = () => {
      $("#examBox").innerHTML = `
        <label class="l">Number of questions</label>
        <div class="seg">${[10, 20, 30].map(n => `<button type="button" data-n="${n}" class="${ex.n === n ? "on" : ""}">${n} questions</button>`).join("")}</div>
        <label class="l">Difficulty</label>
        <div class="seg">${B.list.map(b => `<button type="button" data-level="${b.level}" class="${ex.level === b.level ? "on" : ""}" ${b.level > U ? "disabled" : ""}><i style="width:14px;height:6px;border-radius:2px;background:${b.color};box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)"></i>${b.short}${b.level > U ? ICON.lock : ""}</button>`).join("")}</div>
        <label class="l">Questions from</label>
        <div class="seg">${[["all", "All categories"], ...AREAS.filter(a => a.id !== "exam").map(a => [a.id, a.title.split(":")[0].replace("Individual ", "").replace("Complete Tense ", "")])].map(([k, l]) => `<button type="button" data-scope="${k}" class="${ex.scope === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <p class="rule" style="margin:22px 0 0">${ex.level === e + 1 && e < 6 ? `<b>Belt exam.</b> Score 80% or more with 20 or 30 questions to earn the <b>${B.get(ex.level).name}</b>.` : ex.level <= e ? "Practice exam: you already hold this belt." : ""}</p>
        <button class="btn primary lg" type="button" data-act="exam" style="margin-top:20px">Start the exam ${ICON.arrow}</button>`;
    };
    view().innerHTML = `<div class="vhead"><h2>5. Dojo Exam</h2><p>A random test with questions from every category. Choose the length and the difficulty.</p></div>
      <div class="exam-setup"><div class="card" id="examBox"></div>
        <div class="card" style="padding:28px"><h3 style="font-size:22px;margin-bottom:10px">Recent exams</h3>
          ${hist.length ? `<table class="hist">${hist.map(h => `<tr><td>${B.chip(h.level, B.get(h.level).short)}</td><td>${h.n} questions</td><td style="text-align:right"><b>${h.s}/${h.n}</b> · ${Math.round(h.s / h.n * 100)}%${h.promo ? " · <b style='color:var(--ok)'>promoted</b>" : ""}</td></tr>`).join("")}</table>` : `<p style="color:var(--stone);margin:0">No exams yet.</p>`}
        </div></div>`;
    draw();
    $("#examBox").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      if (b.dataset.n) ex.n = +b.dataset.n; else if (b.dataset.level) ex.level = +b.dataset.level; else if (b.dataset.scope) ex.scope = b.dataset.scope;
      else if (b.dataset.act === "exam") { const make = () => examPool(ex.level, ex.scope, ex.n); return startSession({ title: `${B.get(ex.level).name} exam`, qs: make(), exam: { level: ex.level, n: ex.n }, back: "#exam", redo: make }); }
      draw();
    });
  }

  /* ---------------- SESSION (shared by topics, exams and reviews) ---------------- */
  function startSession(opts) {
    if (!opts.qs.length) { toast("No questions available with these settings."); return; }
    session = Object.assign({ i: 0, results: [], answered: false }, opts);
    session.qs = session.qs.map(q => q.type === "mc" ? Object.assign({}, q, { opts: shuffle(q.answers) }) : Object.assign({}, q));
    renderQuestion();
    window.scrollTo(0, Math.min(window.scrollY, $(".tabs").getBoundingClientRect().top + window.scrollY - 76));
  }
  function renderQuestion() {
    const s = session, q = s.qs[s.i], n = s.qs.length, ok = s.results.filter(r => r.ok).length;
    const body = q.type === "gap"
      ? `<p class="sentence">${esc(q.text).replace("___", `<input type="text" id="gapIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Your answer" size="${Math.max(10, Math.max(...q.answers.map(a => a.length)) + 2)}">`)}</p>`
      : `<p class="sentence">${esc(q.text).split("___").join('<span class="blank">&nbsp;</span>')}</p><div class="opts">${q.opts.map((o, i) => `<button type="button" class="opt" data-i="${i}"><span class="k">${"ABCD"[i]}</span>${esc(o)}</button>`).join("")}</div>`;
    view().innerHTML = `<div class="q">
      <div class="q-top"><span class="sc">${s.i + 1} / ${n}</span><div class="bar"><span style="width:${s.i / n * 100}%;background:var(--shu)"></span></div><span class="sc"><b style="color:var(--ok)">${ok}</b> ✓ · <b style="color:var(--bad)">${s.results.length - ok}</b> ✗</span></div>
      <div class="card q-card">
        <div class="q-meta"><span class="q-kind">${esc(s.title)} · ${q.type === "gap" ? "Fill in the gap" : "Multiple choice"}</span>${B.chip(q.belt)}</div>
        ${body}
        <div id="fb" aria-live="polite"></div>
        <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-act="quit">Quit</button>${q.type === "gap" ? `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-act="skip">I don't know</button><button class="btn ink lg" type="button" data-act="check">${ICON.check} Check</button></div>` : ""}</div>
      </div></div>`;
    const inp = $("#gapIn");
    if (inp) { if (matchMedia("(hover:hover)").matches) inp.focus({ preventScroll: true }); inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); s.answered ? next() : answer(inp.value); } }); }
  }
  function answer(given, idx) {
    const s = session; if (!s || s.answered) return;
    const q = s.qs[s.i]; s.answered = true;
    let ok;
    if (q.type === "gap") {
      ok = checkGap(q, given);
      const inp = $("#gapIn"); inp.disabled = true; inp.classList.add(ok ? "right" : "wrong");
    } else {
      given = q.opts[idx]; ok = given === q.answers[0];
      $$(".opt").forEach((b, j) => { b.disabled = true; if (q.opts[j] === q.answers[0]) b.classList.add("right"); else if (j === idx) b.classList.add("wrong"); });
    }
    s.results.push({ q, ok, given });
    const st = Store.data.q[q.id] || [0, 0, 0]; ok ? st[0]++ : st[1]++; st[2] = ok ? 1 : -1; Store.data.q[q.id] = st;
    Store.data.answered++; if (ok) Store.data.correct++; Store.save();
    const others = q.type === "gap" && q.answers.length > 1 ? `<p class="you">Also accepted: ${q.answers.filter((a, i) => i > 0).map(esc).join(" · ")}</p>` : "";
    $("#fb").innerHTML = `<div class="fb ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div>
      <h3>${ok ? pick(["Correct.", "Well done.", "Exactly right.", "Correct — good reasoning."]) : "Not quite."}</h3>
      <div class="ans">${fill(q, q.answers[0])}</div>
      ${!ok && given ? `<p class="you">Your answer: “${esc(given)}” does not fit this context.</p>` : ""}
      <p class="why">${esc(q.expl)}</p>${others}</div></div>`;
    $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-act="quit">Quit</button><button class="btn ink lg" type="button" data-act="next" id="nextBtn">${s.i < s.qs.length - 1 ? "Next question" : "See results"} ${ICON.arrow}</button>`;
    $("#nextBtn").focus({ preventScroll: true });
  }
  function next() { const s = session; if (!s || !s.answered) return; if (s.i < s.qs.length - 1) { s.i++; s.answered = false; renderQuestion(); } else finish(); }
  function finish() {
    const s = session, n = s.results.length, ok = s.results.filter(r => r.ok).length, pct = Math.round(ok / n * 100);
    const points = s.results.reduce((sum, r) => sum + (r.ok ? r.q.belt * 10 : 0), 0);
    if (s.topic) { const t = Store.data.topics[s.topic] || { best: 0, runs: 0 }; t.runs++; t.best = Math.max(t.best, pct); Store.data.topics[s.topic] = t; }
    let promo = false;
    if (s.exam) {
      const e = Store.data.earned;
      promo = s.exam.level === e + 1 && n >= 20 && pct >= 80 && e < 6;
      if (promo) Store.data.earned = s.exam.level;
      Store.data.exams.unshift({ d: Date.now(), level: s.exam.level, n, s: ok, promo }); Store.data.exams = Store.data.exams.slice(0, 30);
    }
    Store.save();
    const wrong = s.results.filter(r => !r.ok);
    const msg = pct === 100 ? "A flawless session." : pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training.";
    view().innerHTML = `<div class="q"><div class="card results">
      <div class="score">${ok}<span> / ${n}</span></div>
      <h3>${msg}</h3><p class="meta">${esc(s.title)} · ${pct}% correct · ${points} points</p>
      <div class="bar" style="max-width:360px;margin:18px auto 0;height:10px"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
      <div class="nums"><span style="background:var(--ok-bg);color:var(--ok)">${ok} correct</span><span style="background:var(--bad-bg);color:var(--bad)">${n - ok} wrong</span></div>
      <div class="actions"><button class="btn ink" type="button" data-act="repeat">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-act="retry">Retry my mistakes</button>` : ""}<a class="btn soft" href="${s.back}">Back</a></div>
      ${wrong.length ? `<div class="review"><h4>Review your mistakes</h4>${wrong.map(r => `<div class="rv"><div class="s">${fill(r.q, r.q.answers[0])}</div><div class="y">Your answer: ${esc(r.given || "—")}</div><div class="e">${esc(r.q.expl)}</div></div>`).join("")}</div>` : ""}
    </div></div>`;
    if (promo) setTimeout(() => dialog({ title: `${B.get(Store.data.earned).name} earned`, text: `You passed the exam with ${pct}%. Congratulations on your new rank!`, ok: "Continue", cancel: "" }), 300);
    else if (s.exam && s.exam.level === Store.data.earned + 1 && n >= 20) setTimeout(() => toast("You need 80% to earn the belt. Keep training and try again."), 400);
  }

  /* ---------------- global clicks ---------------- */
  view().addEventListener("click", e => {
    const b = e.target.closest("[data-act], .opt"); if (!b) return;
    if (b.classList.contains("opt")) return answer(null, +b.dataset.i);
    const a = b.dataset.act;
    if (a === "check") answer($("#gapIn").value);
    else if (a === "skip") answer("");
    else if (a === "next") next();
    else if (a === "quit") dialog({ title: "Leave this session?", text: "Your answers so far are saved in your progress.", ok: "Leave", cancel: "Keep going" }).then(y => { if (y) route(); });
    else if (a === "repeat") startSession(Object.assign({}, session, { qs: session.redo ? session.redo() : shuffle(session.qs) }));
    else if (a === "retry") { const w = session.results.filter(r => !r.ok).map(r => QUESTIONS.find(q => q.id === r.q.id)); startSession({ title: "Your mistakes", qs: shuffle(w), back: session.back }); }
    else if (a === "review") startSession({ title: "Review", qs: shuffle(missed()).slice(0, 20), back: "#dojo", redo: () => shuffle(missed()).slice(0, 20) });
    else if (a === "reset") dialog({ title: "Reset your progress?", text: "This deletes your belts, scores and history for the Verb Tenses Dojo on this device.", ok: "Reset", danger: true }).then(y => { if (y) { Store.reset(); renderDojo(); toast("Progress reset"); } });
  });
  document.addEventListener("keydown", e => {
    if (!session || document.querySelector(".modal")) return;
    const q = session.qs[session.i];
    if (!session.answered && q.type === "mc" && /^[1-4a-dA-D]$/.test(e.key) && !e.target.matches("input")) { const i = /\d/.test(e.key) ? +e.key - 1 : "abcd".indexOf(e.key.toLowerCase()); answer(null, i); }
    else if (session.answered && e.key === "Enter" && !e.target.matches("input,button,a")) { e.preventDefault(); next(); }
  });

  Store.load(); route();
  window.__tenseDojo = { checkGap, variants, QUESTIONS, TOPICS }; // used by automated tests
})();
