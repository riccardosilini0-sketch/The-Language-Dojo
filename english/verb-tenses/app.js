/* =====================================================================
   Verb Tenses — interface (battery model)
   Reads exercises from window.TenseDojo (data/*.js). No grammar content here.
   Every activity is a battery: 10–15 questions, or a text with many gaps.
   The student answers everything, presses "Check answers", then sees the score,
   the correct answers and an explanation for each item, and can try again.
   Belts label the difficulty (CEFR level) of the materials; they are not a reward system.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast } = window.Dojo;
  const B = window.DojoBelts;
  const TD = window.TenseDojo, TOPICS = TD.topics;
  const QUESTIONS = TOPICS.flatMap(t => t.q);
  const byId = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // deterministic shuffle: fixed batteries (belt tests) are the same for every visit
  const seeded = (a, seed) => { let s = seed >>> 0 || 1; const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'), back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>')
  };

  const AREAS = [
    { id: "tenses", title: "Tenses", lead: "One tense at a time: form, uses and several batteries of exercises for each tense.", groups: [["present", "Present"], ["past", "Past"], ["future", "Future"]] },
    { id: "contrasts", title: "Contrasts", lead: "Two or more tenses side by side: decide which one fits the situation, not the time expression.", groups: [["present", "Present"], ["past", "Past"], ["future", "Future"], ["other", "Across time"]] },
    { id: "mixed", title: "Mixed Tenses", lead: "Any tense can appear: you don't know in advance which one you need. Groups of tenses, long texts and challenges of increasing difficulty.", groups: [["groups", "Groups of tenses"], ["texts", "Texts and situations"], ["challenges", "Challenges"]] },
    { id: "exam", title: "Tests" }
  ];
  const areaOf = id => AREAS.find(a => a.id === (id === "challenges" ? "mixed" : id));
  const areaKey = t => t.area === "challenges" ? "mixed" : t.area;
  const groupKey = t => t.area === "challenges" ? "challenges" : t.group;

  // Belts follow the Common European Framework of Reference (CEFR)
  const CEFR = { 1: "A1", 2: "A2", 3: "B1", 4: "B2", 5: "C1", 6: "C2" };
  const BELT_LEVEL = { 1: "A1 · Beginner", 2: "A2 · Elementary", 3: "B1 · Intermediate", 4: "B2 · Upper intermediate", 5: "C1 · Advanced", 6: "C2 · Proficiency" };
  const beltChip = l => B.chip(l, `${B.get(l).name} · ${CEFR[l]}`);
  const bdot = l => `<i class="bdot" style="background:${B.get(l).color}"></i>`;

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
  // q.text = text up to the gap ("___"); the student may also type the subject before the verb
  function checkText(q, input) {
    if (!String(input || "").trim()) return false;
    const before = (q.text || "").split("___")[0].trim().split(/\s+/).pop() || "";
    const subject = before.toLowerCase().replace(/[^a-z']/g, "");
    const ins = variants(input);
    return q.answers.some(a => {
      const av = variants(a);
      if (av.some(x => ins.includes(x))) return true;
      if (!subject) return false;
      return variants(subject + " " + a).some(x => ins.includes(x));
    });
  }
  // whole sentences: commas and quotes are ignored, contractions expanded, case ignored
  const sentV = x => variants(String(x || "").replace(/[,"“”]/g, " "));
  const checkSentence = (answers, given) => { const g = sentV(given); return answers.some(a => sentV(a).some(v => g.includes(v))); };
  const segs = q => { const out = []; q.raw.replace(/\[([^\]]+)\]/g, (_, t) => out.push(t)); return out; };
  const plainError = q => q.raw.replace(/\[([^\]]+)\]/g, "$1");

  /* ---------------- solutions ---------------- */
  const fill = (q, ans) => {
    if (q.type === "build" || q.type === "order") return `<b>${esc(q.answers[0])}</b>`;
    if (q.type === "judge") return q.correct ? `<b>The sentence is correct.</b>` : `<b>${esc(q.answers[0])}</b>`;
    if (q.type === "halves") return q.pairs.map(p => `${esc(p[0])} <b>${esc(p[1])}</b>`).join("<br>");
    if (q.type === "dialogue") { let k = 0; return q.lines.map(([sp, line]) => `${sp ? `<span class="who">${esc(sp)}:</span> ` : ""}${esc(line).replace(/___( \([^)]*\))?/g, () => `<b>${esc(q.answers[k++][0])}</b>`)}`).join("<br>"); }
    if (q.type === "error") { let k = 0; return esc(q.raw).replace(/\[([^\]]+)\]/g, (m, t) => (k++ === q.wrong ? `<b>${esc(ans)}</b>` : t)); }
    if (q.type === "tense") return `<b>${esc(q.answers[0])}</b>`;
    const parts = q.text.split("___"), bits = parts.length > 2 ? String(ans).split(/\s*…\s*/) : [ans];
    return parts.map((p, i) => esc(i ? p.replace(/^ \([^)]*\)/, "") : p) + (i < parts.length - 1 ? `<b>${esc(bits[i] || bits[0])}</b>` : "")).join("");
  };

  /* ---------------- batteries ---------------- */
  const FAM = { mc: "choice", tense: "choice", gap: "gaps", comp: "gaps", context: "gaps", ita: "write", trans: "write", build: "write", order: "write", error: "errors", judge: "errors", dialogue: "dialogue", halves: "dialogue", passage: "passage" };
  const FAM_ORDER = ["choice", "gaps", "write", "errors", "dialogue", "mixed", "passage"];
  /* Exercise headers (shared vocabulary in assets/js/exercises.js): TYPE · Title · Instruction */
  const EX = window.DojoEx;
  const ITEM_TYPE = { mc: "mc", tense: "mc", gap: "gaps", comp: "gaps", context: "gaps", trans: "transform", ita: "translation", build: "building", order: "building", error: "errors", judge: "errors", dialogue: "gapDialogue", halves: "matching", passage: "gapText" };
  const TYPE_ORDER = ["mc", "gaps", "transform", "translation", "building", "errors", "gapDialogue", "matching", "mixed", "gapText", "test"];
  const VT_INSTR = {
    mc: "Choose the correct option to complete each sentence.",
    gaps: "Complete the sentences with the correct form of the verbs in brackets.",
    gapText: "Read the whole text first, then complete it with the correct form of the verbs in brackets.",
    gapDialogue: "Complete the dialogues with the correct form of the verbs in brackets.",
    matching: "Match the beginnings of the sentences with the correct endings."
  };
  const typeKey = b => {
    if (b.fam === "test" || b.custom) return "test";
    const ks = [...new Set(b.items.map(q => ITEM_TYPE[q.type]))];
    return ks.length === 1 ? ks[0] : "mixed";
  };
  const typeLabel = b => EX.TYPE[b.typeKey];
  const instruction = b => b.typeKey === "errors" && b.items.some(q => q.type === "judge") ? "Identify and correct the mistakes. Some sentences may already be correct." : VT_INSTR[b.typeKey] || EX.INSTR[b.typeKey];
  const weight = q => q.type === "dialogue" || q.type === "passage" ? q.answers.length : q.type === "halves" ? q.pairs.length : 1;
  const wsum = a => a.reduce((s, q) => s + weight(q), 0);
  const median = a => { const s = a.map(q => q.belt).sort((x, y) => x - y); return s[Math.floor((s.length - 1) / 2)]; };

  // split into contiguous chunks of 10–15 points; what does not fit is returned as rest
  function partition(items) {
    const W = wsum(items);
    if (W < 10) return { chunks: [], rest: items };
    let k = Math.ceil(W / 15); if (W / k < 10) k = Math.floor(W / 10);
    const target = Math.min(15, W / k), chunks = [], rest = [];
    let i = 0;
    for (let c = 0; c < k; c++) {
      const ch = []; let w = 0;
      while (i < items.length && w < target - 0.01 && w + weight(items[i]) <= 15) { w += weight(items[i]); ch.push(items[i++]); }
      if (w >= 10) chunks.push(ch); else rest.push(...ch);
    }
    rest.push(...items.slice(i));
    return { chunks, rest };
  }
  const BATS = [], BAT = {};
  const addBat = b => { b.typeKey = typeKey(b); b.points = wsum(b.items); b.belt = b.belt || median(b.items); b.lo = Math.min(...b.items.map(q => q.belt)); b.hi = Math.max(...b.items.map(q => q.belt)); BATS.push(b); BAT[b.id] = b; return b; };
  function buildTopicBatteries(t) {
    const out = [];
    const byBelt = (a, b) => a.belt - b.belt;
    let pool = [];
    FAM_ORDER.filter(f => f !== "mixed" && f !== "passage").forEach(f => {
      const items = t.q.filter(q => FAM[q.type] === f).sort(byBelt);
      const { chunks, rest } = partition(items);
      chunks.forEach(ch => out.push({ fam: f, items: ch }));
      pool = pool.concat(rest);
    });
    pool.sort(byBelt);
    const { chunks, rest } = partition(pool);
    chunks.forEach(ch => out.push({ fam: "mixed", items: ch }));
    if (rest.length) {
      // the last few items join the smallest battery that still has room, otherwise they form a short review
      let left = [];
      rest.forEach(q => { const cand = out.filter(b => (b.fam === "mixed" || b.fam === FAM[q.type]) && wsum(b.items) + weight(q) <= 15).sort((a, b) => wsum(a.items) - wsum(b.items))[0]; if (cand) cand.items.push(q); else left.push(q); });
      if (left.length) {
        // borrow the hardest item from the largest batteries until the review reaches 10 questions
        while (wsum(left) < 10) {
          const donor = out.filter(b => b.fam !== "passage" && wsum(b.items) - weight(b.items[b.items.length - 1]) >= 10).sort((a, b) => wsum(b.items) - wsum(a.items))[0];
          if (!donor) break;
          left.push(donor.items.pop());
        }
        if (wsum(left) >= 10) out.push({ fam: "mixed", items: left });
        else left.forEach(q => {
          // last resort: spread the items over the batteries that still have room
          const host = out.filter(b => b.fam !== "passage").sort((a, b) => wsum(a.items) - wsum(b.items))[0];
          host.items.push(q); if (FAM[q.type] !== host.fam) host.fam = "mixed";
        });
      }
    }
    t.q.filter(q => q.type === "passage").sort(byBelt).forEach(q => out.push({ fam: "passage", items: [q], title: q.title }));
    const count = {};
    out.sort((a, b) => FAM_ORDER.indexOf(a.fam) - FAM_ORDER.indexOf(b.fam) || median(a.items) - median(b.items));
    t.bats = out.map(b => {
      count[b.fam] = (count[b.fam] || 0) + 1;
      if (b.fam !== "passage") b.items.sort(byBelt);
      return addBat({ id: `${t.id}--${b.fam}-${count[b.fam]}`, topic: t.id, fam: b.fam, items: b.items, title: b.title || "", back: "#t-" + t.id, backLabel: t.title });
    });
    // in the order shown on the page (grouped by type), numbered per topic: "Present Simple – 1", "Present Simple – 2"…
    t.bats.sort((a, b) => TYPE_ORDER.indexOf(a.typeKey) - TYPE_ORDER.indexOf(b.typeKey));
    EX.numberAll(t.bats.filter(b => b.fam !== "passage"), () => t.title, (b, title) => { b.title = title; });
  }
  TOPICS.forEach(buildTopicBatteries);

  /* Belt tests: fixed, progressive batteries for each level, drawn from every area.
     Items come from as many different topics and exercise types as possible. */
  const TESTS = [];
  function buildBeltTests() {
    B.list.forEach(({ level: L }) => {
      const pool = QUESTIONS.filter(q => q.belt === L && q.type !== "passage" && weight(q) <= 3);
      const byTopic = {};
      seeded(pool, 97 * L + 13).forEach(q => (byTopic[q.topic] = byTopic[q.topic] || []).push(q));
      const order = []; let more = true;
      const keys = seeded(Object.keys(byTopic), L * 31);
      while (more) { more = false; keys.forEach(k => { const q = byTopic[k].shift(); if (q) { order.push(q); more = true; } }); }
      const n = Math.min(3, Math.floor(wsum(order) / 15));
      let i = 0;
      for (let c = 1; c <= n; c++) {
        const items = []; let w = 0;
        while (i < order.length && w < 15) { if (w + weight(order[i]) <= 15) { items.push(order[i]); w += weight(order[i]); } i++; }
        TESTS.push(addBat({ id: `test-${L}-${c}`, fam: "test", belt: L, items: seeded(items, c * 7 + L), title: EX.numbered(`${B.get(L).name} (${CEFR[L]})`, c, n), back: "#exam", backLabel: "Tests", test: true }));
      }
      // text tests: the passages written for the mixed area at this level
      QUESTIONS.filter(q => q.type === "passage" && q.belt === L && areaKey(byId[q.topic]) === "mixed").forEach((q, k) =>
        TESTS.push(addBat({ id: `test-${L}-text-${k + 1}`, fam: "textTest", belt: L, items: [q], title: q.title, back: "#exam", backLabel: "Tests", test: true })));
    });
  }
  buildBeltTests();

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["dojo", "Overview"], ...AREAS.map(a => [a.id, a.title])].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  let cur = null, custom = null;
  const view = () => $("#view");
  function route() {
    let h = location.hash.replace(/^#\/?/, "") || "dojo";
    if (h === "challenges") h = "mixed";
    cur = null;
    let tab = h;
    if (h.startsWith("t-")) tab = byId[h.slice(2)] ? areaKey(byId[h.slice(2)]) : "dojo";
    else if (h.startsWith("b-")) { const b = BAT[h.slice(2)]; tab = !b ? "dojo" : b.test ? "exam" : areaKey(byId[b.topic]); }
    else if (h === "custom") tab = "exam";
    if (!["dojo", "tenses", "contrasts", "mixed", "exam"].includes(tab)) tab = "dojo";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    if (h.startsWith("t-") && byId[h.slice(2)]) return renderTopic(byId[h.slice(2)]);
    if (h.startsWith("b-") && BAT[h.slice(2)]) return renderBattery(BAT[h.slice(2)]);
    if (h === "custom" && custom) return renderBattery(custom);
    if (tab === "exam") return renderExam();
    if (tab === "dojo") return renderDojo();
    return renderArea(areaOf(tab));
  }
  window.addEventListener("hashchange", route);
  $("#tabs").addEventListener("click", e => { const a = e.target.closest(".tab"); if (a && a.getAttribute("href") === (location.hash || "#dojo")) { e.preventDefault(); route(); } });

  /* ---------------- OVERVIEW ---------------- */
  const areaBats = id => BATS.filter(b => id === "exam" ? b.test : !b.test && areaKey(byId[b.topic]) === id);
  function renderDojo() {
    view().innerHTML = `
      <div class="vhead"><p>Every activity is a battery of 10–15 questions or a text with many gaps. Answer everything, then check: you get your score, the correct answers and an explanation for each one.</p></div>
      <div class="areas">${AREAS.map(a => { const bs = areaBats(a.id); return `<a class="card card-link area ${a.id === "exam" ? "exam" : ""}" href="#${a.id}"><h3>${a.title}</h3><span class="c">${bs.length} batteries · ${wsum(bs.flatMap(b => b.items))} questions</span></a>`; }).join("")}</div>
      <div class="card belt-legend">
        <h3>Levels (CEFR)</h3>
        <div class="legend-grid">${B.list.map(b => `<div class="lg"><i style="background:${b.color}"></i><b>${b.name}</b><span>${BELT_LEVEL[b.level]}</span></div>`).join("")}</div>
      </div>`;
  }

  /* ---------------- AREA pages ---------------- */
  const beltRange = bs => { const ls = [...new Set(bs.map(b => b.belt))].sort(); return `<span class="belt-range" title="${ls.map(l => B.get(l).short).join(", ")}">${ls.map(l => `<i style="background:${B.get(l).color}"></i>`).join("")}</span>`; };
  function renderArea(a) {
    view().innerHTML = `<div class="vhead"><h2>${a.title}</h2><p>${a.lead}</p></div>` +
      a.groups.map(([g, label]) => {
        const ts = TOPICS.filter(t => areaKey(t) === a.id && groupKey(t) === g);
        if (!ts.length) return "";
        return `${label ? `<div class="group-title"><h3>${label}</h3></div>` : ""}<div class="topics">${ts.map(t =>
          `<a class="card card-link topic" href="#t-${t.id}"><h4>${esc(t.title)}</h4><p>${esc(t.short || "")}</p>
            <div class="meta"><span>${t.bats.length} batteries · ${((n) => `${n} text${n === 1 ? "" : "s"}`)(t.bats.filter(b => b.fam === "passage").length)}</span>${beltRange(t.bats)}</div></a>`).join("")}</div>`;
      }).join("");
  }

  /* ---------------- TOPIC page: explanation + batteries ---------------- */
  const tf = { belt: "all", fam: "all" };
  function batCard(b) {
    return `<a class="card card-link bat-card" href="#b-${b.id}"><span class="bt-type">${typeLabel(b)}</span><h4${b.fam === "passage" || b.fam === "textTest" ? ' translate="no"' : ""}>${esc(b.title)}</h4>
      <div class="bt-meta"><span>${bdot(b.belt)} ${B.get(b.belt).short} · ${CEFR[b.belt]}</span><span>${b.points} ${b.fam === "passage" || b.fam === "textTest" ? "gaps" : "questions"}</span></div></a>`;
  }
  function renderTopic(t) {
    const a = areaOf(t.area);
    view().innerHTML = `<a class="back" href="#${a.id}">${ICON.back} ${a.title}</a>
      <div class="topic-page">
        <div>
          <h2>${esc(t.title)}</h2>
          <p class="intro">${esc(t.intro)}</p>
          ${t.form ? `<div class="form"><b>Form</b>${esc(t.form)}</div>` : ""}
          <div class="uses">${t.uses.map(u => `<div class="use"><b>${esc(u[0])}</b><span>${esc(u[1])}</span></div>`).join("")}</div>
        </div>
        <aside class="card train">
          <h3>Practice</h3>
          <p>${t.bats.length} batteries · ${t.bats.reduce((s, b) => s + b.points, 0)} questions in all.</p>
          <div class="tp-sum">${TYPE_ORDER.filter(k => t.bats.some(b => b.typeKey === k)).map(k => `<div><span>${EX.TYPE[k]}</span><b>${t.bats.filter(b => b.typeKey === k).length}</b></div>`).join("")}</div>
          <a class="btn primary lg start" href="#b-${t.bats[0].id}">Start the first battery ${ICON.arrow}</a>
          <a class="btn soft start2" href="#batteries">See all the batteries</a>
        </aside>
      </div>
      <section class="bat-sec" id="batteries">
        <div class="bat-head"><h3>Batteries</h3></div>
        <div class="pr-tools"><div class="seg" id="tbelt" role="group" aria-label="Level"></div><div class="seg types" id="tfam" role="group" aria-label="Type"></div></div>
        <div id="tlist"></div>
      </section>`;
    const levels = [...new Set(t.bats.map(b => b.belt))].sort();
    const fams = TYPE_ORDER.filter(k => t.bats.some(b => b.typeKey === k));
    if (tf.belt !== "all" && !levels.includes(+tf.belt)) tf.belt = "all";
    if (tf.fam !== "all" && !fams.includes(tf.fam)) tf.fam = "all";
    const draw = () => {
      $("#tbelt").innerHTML = [["all", "All levels"], ...levels.map(l => [String(l), `${B.get(l).short} · ${CEFR[l]}`])].map(([k, l]) => `<button type="button" data-belt="${k}" class="${tf.belt === k ? "on" : ""}">${k !== "all" ? bdot(+k) : ""}${l}</button>`).join("");
      $("#tfam").innerHTML = [["all", "All types"], ...fams.map(f => [f, EX.TYPE[f]])].map(([k, l]) => `<button type="button" data-fam="${k}" class="${tf.fam === k ? "on" : ""}">${l}</button>`).join("");
      const list = t.bats.filter(b => (tf.belt === "all" || b.belt === +tf.belt) && (tf.fam === "all" || b.typeKey === tf.fam));
      $("#tlist").innerHTML = fams.filter(f => list.some(b => b.typeKey === f)).map(f => `<h4 class="fam-h">${EX.TYPE[f]}</h4><div class="bat-grid">${list.filter(b => b.typeKey === f).map(batCard).join("")}</div>`).join("")
        || `<div class="card empty"><h3>No batteries with these settings</h3>Choose another level or type.</div>`;
    };
    draw();
    $("#tbelt").addEventListener("click", e => { const b = e.target.closest("[data-belt]"); if (b) { tf.belt = b.dataset.belt; draw(); } });
    $("#tfam").addEventListener("click", e => { const b = e.target.closest("[data-fam]"); if (b) { tf.fam = b.dataset.fam; draw(); } });
    $(".start2").addEventListener("click", e => { e.preventDefault(); $("#batteries").scrollIntoView({ behavior: "smooth" }); });
  }

  /* ---------------- TESTS: belt tests + custom test ---------------- */
  const ex = { n: 15, level: "all", scope: "all" };
  function customPool() {
    const inScope = QUESTIONS.filter(q => q.type !== "passage" && weight(q) <= 3 && (ex.scope === "all" || areaKey(byId[q.topic]) === ex.scope));
    let cand = ex.level === "all" ? shuffle(inScope) : shuffle(inScope.filter(q => q.belt === +ex.level));
    for (let d = 1; ex.level !== "all" && wsum(cand) < ex.n && d < 6; d++) cand = cand.concat(shuffle(inScope.filter(q => Math.abs(q.belt - ex.level) === d)));
    const items = []; let w = 0;
    for (const q of cand) { if (w >= ex.n) break; if (w + weight(q) <= ex.n) { items.push(q); w += weight(q); } }
    return items.sort((a, b) => a.belt - b.belt);
  }
  function renderExam() {
    view().innerHTML = `<div class="vhead"><h2>Tests</h2><p>Comprehensive tests for each level, from White belt (A1) upwards. Each one mixes tenses and exercise types: you never know in advance which tense you need.</p></div>
      ${B.list.map(({ level: L }) => { const ts = TESTS.filter(b => b.belt === L); return ts.length ? `<div class="lv-head">${beltChip(L)}</div><div class="bat-grid">${ts.map(batCard).join("")}</div>` : ""; }).join("")}
      <div class="group-title"><h3>Custom test</h3><span>A new random selection every time</span></div>
      <div class="exam-setup"><div class="card" id="examBox"></div></div>`;
    const draw = () => {
      $("#examBox").innerHTML = `
        <label class="l">Questions</label>
        <div class="seg">${[10, 15].map(n => `<button type="button" data-n="${n}" class="${ex.n === n ? "on" : ""}">${n}</button>`).join("")}</div>
        <label class="l">Level</label>
        <div class="belt-pick">${[["all", "All levels", ""], ...B.list.map(b => [String(b.level), b.name, b.level])].map(([k, label, l]) => `<button type="button" data-level="${k}" class="${String(ex.level) === k ? "on" : ""}">${l ? bdot(l) : ""}<span>${label}${l ? ` · ${CEFR[l]}` : ""}</span></button>`).join("")}</div>
        <label class="l">From</label>
        <div class="seg">${[["all", "Everything"], ...AREAS.filter(a => a.id !== "exam").map(a => [a.id, a.title])].map(([k, l]) => `<button type="button" data-scope="${k}" class="${ex.scope === k ? "on" : ""}">${l}</button>`).join("")}</div>
        <button class="btn primary lg" type="button" data-act="custom" style="margin-top:24px">Start the test ${ICON.arrow}</button>`;
    };
    draw();
    $("#examBox").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.n) ex.n = +b.dataset.n; else if (b.dataset.level) ex.level = b.dataset.level; else if (b.dataset.scope) ex.scope = b.dataset.scope;
      else if (b.dataset.act === "custom") { startCustom(); return; }
      draw();
    });
  }
  function startCustom() {
    const items = customPool();
    if (!items.length) { toast("No exercises available with these settings."); return; }
    custom = { id: "custom", fam: "custom", typeKey: "test", items, points: wsum(items), belt: ex.level === "all" ? median(items) : +ex.level, title: ex.level === "all" ? "Custom test" : `Custom test · ${B.get(+ex.level).name}`, back: "#exam", backLabel: "Tests", custom: true };
    if (location.hash === "#custom") route(); else location.hash = "custom";
  }

  /* ---------------- BATTERY page ---------------- */
  const inputHTML = (attrs, size) => `<input type="text" ${attrs} size="${size}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">`;
  const sizeFor = arr => Math.max(6, Math.min(26, Math.max(...arr.map(a => String(a).length)) + 2));
  const qn = i => `<span class="qn">${i + 1}</span>`;
  const sub = s => `<p class="q-sub">${s}</p>`;

  function renderBattery(b) {
    cur = { b, checked: false, st: [], warned: false };
    const single = b.items.length === 1 && b.items[0].type === "passage";
    const q0 = b.items[0];
    view().innerHTML = `<a class="back" href="${b.back}">${ICON.back} ${esc(b.backLabel)}</a>
      <div class="bt-head"><div class="bt-chips">${beltChip(b.belt)}<span class="bt-type">${typeLabel(b)}</span><span class="bt-n">${b.points} ${single ? "gaps" : "questions"}</span></div>
        <h2${single ? ' translate="no"' : ""}>${esc(b.title)}</h2><p class="bt-goal">${instruction(b)}</p></div>
      <div id="btBody">${single ? passageHTML(q0, 0) : `<ol class="qlist">${b.items.map((q, i) => itemHTML(q, i)).join("")}</ol>`}</div>
      <div class="bt-foot" id="btFoot"></div><div id="btResult" aria-live="polite"></div>`;
    drawFoot();
  }
  function drawFoot() {
    const b = cur.b;
    $("#btFoot").innerHTML = cur.checked
      ? `<button class="btn ink" type="button" data-act="retry">${ICON.restart} Try again</button>${b.custom ? `<button class="btn primary" type="button" data-act="newcustom">New test</button>` : nextBat(b) ? `<a class="btn primary" href="#b-${nextBat(b).id}">Next battery ${ICON.arrow}</a>` : ""}<a class="btn soft" href="${b.back}">${b.test || b.custom ? "Back to the tests" : "Choose another battery"}</a>`
      : `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check answers</button>`;
  }
  function nextBat(b) {
    const list = b.test ? TESTS : b.topic ? byId[b.topic].bats : [];
    const i = list.indexOf(b); return i >= 0 ? list[i + 1] : null;
  }

  /* item renderers: every item is one <li class="qi" data-i> with its own state cur.st[i] */
  function itemHTML(q, i) {
    const st = cur.st[i] = { sel: null };
    const gapIn = `${inputHTML(`class="gi" data-i="${i}" aria-label="Answer ${i + 1}"`, sizeFor(q.answers))}`;
    const sentence = t => esc(t).replace("___", gapIn);
    let body = "";
    switch (q.type) {
      case "mc": case "tense":
        st.opts = shuffle(q.answers);
        body = `${q.type === "tense" ? sub(q.text.includes("___") ? "Which tense fits the gap?" : "Which tense is used?") : ""}<p class="qs" translate="no">${qn(i)}${esc(q.text).split("___").join('<span class="blank">…</span>')}</p>
          <div class="opts-row" translate="no">${st.opts.map((o, j) => `<button type="button" class="ob" data-i="${i}" data-o="${j}"><span class="k">${"abcd"[j]}</span>${esc(o)}</button>`).join("")}</div>`;
        break;
      case "gap": case "comp":
        body = `<p class="qs" translate="no">${qn(i)}${sentence(q.text)}</p>`; break;
      case "context":
        body = `<p class="qs" translate="no">${qn(i)}<span class="ctx">${esc(q.context)}</span><br>${sentence(q.text)}</p>`; break;
      case "trans":
        body = `${sub(esc(q.instr))}<p class="qs" translate="no">${qn(i)}<span class="src">${esc(q.source)}</span><br>${sentence(q.text)}</p>`; break;
      case "ita":
        body = `${sub("Translate into English.")}<p class="qs" translate="no">${qn(i)}<span class="src it" lang="it">${esc(q.it)}</span><br>${sentence(q.text)}</p>`; break;
      case "build":
        body = `${sub(esc(q.instr))}<p class="qs" translate="no">${qn(i)}<span class="prompt">${esc(q.text)}</span></p><div class="row-in">${inputHTML(`class="si" data-i="${i}" aria-label="Sentence ${i + 1}" placeholder="Write the full sentence"`, 40)}</div>`; break;
      case "order": {
        const w = q.answers[0].replace(/[.?!]+$/, "").split(/\s+/);
        if (!/^I(\b|')/.test(w[0])) w[0] = w[0].charAt(0).toLowerCase() + w[0].slice(1);
        let t; do { t = shuffle(w.map((x, k) => ({ x, k }))); } while (w.length > 2 && t.every((o, k) => o.k === k));
        st.tiles = t.map(o => o.x); st.end = (q.answers[0].match(/[.?!]+$/) || ["."])[0]; st.built = [];
        body = `${sub("Put the words in the correct order.")}<div class="qs">${qn(i)}<div class="built" data-i="${i}" aria-live="polite" translate="no"><span class="ph">Tap the words below…</span></div></div>
          <div class="tiles" translate="no">${st.tiles.map((x, k) => `<button type="button" class="tile" data-i="${i}" data-t="${k}">${esc(x)}</button>`).join("")}</div>
          <div class="tile-tools"><button type="button" class="btn soft sm" data-act="undo" data-i="${i}">Undo</button><button type="button" class="btn soft sm" data-act="clear" data-i="${i}">Clear</button></div>`;
        break;
      }
      case "error": {
        let k = 0;
        body = `${sub("Tap the part that contains a mistake, then write the correct form.")}<p class="qs err" translate="no">${qn(i)}${esc(q.raw).replace(/\[([^\]]+)\]/g, (m, t) => `<button type="button" class="seg-btn" data-i="${i}" data-seg="${k++}">${t}</button>`)}</p>
          <div class="row-in fix" hidden><label>Correct form: ${inputHTML(`class="fi" data-i="${i}" aria-label="Correct form ${i + 1}"`, sizeFor(q.answers))}</label></div>`;
        break;
      }
      case "judge":
        body = `${sub("Is this sentence right or wrong? If it is wrong, correct it.")}<p class="qs" translate="no">${qn(i)}${esc(q.text)}</p>
          <div class="opts-row"><button type="button" class="ob jb" data-i="${i}" data-j="1">${ICON.check} Right</button><button type="button" class="ob jb" data-i="${i}" data-j="0">${ICON.x} Wrong</button></div>
          <div class="row-in fix" hidden>${inputHTML(`class="si ji" data-i="${i}" aria-label="Correct sentence ${i + 1}"`, 40)}</div>`;
        break;
      case "dialogue": {
        let k = 0;
        body = `${q.context ? `<p class="qs ctx-line" translate="no">${qn(i)}<span class="ctx">${esc(q.context)}</span></p>` : `<p class="qs">${qn(i)}</p>`}
          <div class="dlg2" translate="no">${q.lines.map(([sp, line]) => `<p>${sp ? `<span class="who">${esc(sp)}</span>` : ""}<span>${esc(line).replace(/___/g, () => { const a = q.answers[k]; return inputHTML(`class="dg" data-i="${i}" data-k="${k++}" aria-label="Gap ${k}"`, sizeFor(a)); })}</span></p>`).join("")}</div>`;
        break;
      }
      case "halves": {
        st.right = shuffle(q.pairs.map(p => p[1]));
        const L = st.right.map((_, k) => "abcdefghijklmnop"[k]);
        body = `${sub(esc(q.instr))}<div class="hv">${qn(i)}<ol class="hv-left" translate="no">${q.pairs.map((p, k) => `<li><span>${esc(p[0])} …</span><select class="hs" data-i="${i}" data-k="${k}" aria-label="Ending for ${esc(p[0])}"><option value="">…</option>${L.map(l => `<option value="${l}">${l}</option>`).join("")}</select></li>`).join("")}</ol>
          <ul class="hv-right" translate="no">${st.right.map((r, k) => `<li><span class="k">${L[k]}</span>${esc(r)}</li>`).join("")}</ul></div>`;
        break;
      }
      case "passage":
        return `<li class="qi qi-passage" data-i="${i}">${passageHTML(q, i, true)}</li>`;
    }
    return `<li class="qi" data-i="${i}">${body}<div class="fbx"></div></li>`;
  }
  function passageHTML(q, i, inList) {
    cur.st[i] = cur.st[i] || {};
    let k = 0;
    const paras = q.paras.map(p => `<p>${esc(p).replace(/___/g, () => { const n = ++k; return `<span class="tg"><span class="gn">${n}</span>${inputHTML(`class="pg" data-i="${i}" data-k="${n - 1}" aria-label="Gap ${n}"`, sizeFor(q.answers[n - 1]))}</span>`; })}</p>`).join("");
    return `${inList ? `<h4 class="ps-title">${esc(q.title)}</h4>` : ""}<div class="card textbox" data-i="${i}" translate="no">${paras}</div><ol class="gexp" data-i="${i}"></ol>`;
  }

  const drawBuilt = i => {
    const st = cur.st[i], box = $(`.built[data-i="${i}"]`);
    box.innerHTML = st.built.length ? st.built.map((t, k) => `<span class="bw">${esc(k ? st.tiles[t] : st.tiles[t].charAt(0).toUpperCase() + st.tiles[t].slice(1))}</span>`).join(" ") + `<span class="bw end">${esc(st.end)}</span>` : `<span class="ph">Tap the words below…</span>`;
  };

  // gap-level text before each gap (used to accept answers that repeat the subject)
  const beforeGaps = lines => { const out = []; lines.forEach(l => { const parts = l.split("___"); for (let k = 0; k < parts.length - 1; k++) out.push(parts[k] + "___"); }); return out; };

  function missingCount() {
    let miss = 0;
    cur.b.items.forEach((q, i) => {
      const li = $(`.qi[data-i="${i}"]`) || document, st = cur.st[i];
      switch (q.type) {
        case "mc": case "tense": if (st.sel == null) miss++; break;
        case "order": if (!st.built.length) miss++; break;
        case "error": if (st.sel == null || !$(`.fi[data-i="${i}"]`).value.trim()) miss++; break;
        case "judge": if (st.sel == null || (st.sel === 0 && !$(`.ji[data-i="${i}"]`).value.trim())) miss++; break;
        case "halves": miss += $$(`.hs[data-i="${i}"]`).filter(x => !x.value).length; break;
        case "dialogue": miss += $$(`.dg[data-i="${i}"]`).filter(x => !x.value.trim()).length; break;
        case "passage": miss += $$(`.pg[data-i="${i}"]`).filter(x => !x.value.trim()).length; break;
        default: { const x = $(`.gi[data-i="${i}"], .si[data-i="${i}"]`, li); if (x && !x.value.trim()) miss++; }
      }
    });
    return miss;
  }

  const fbHTML = (ok, sol, why, extra) => `<div class="fbk ${ok ? "good" : "bad"}"><b>${ok ? "Correct." : "Not quite."}</b>${sol ? ` <span class="ans" translate="no">${sol}</span>` : ""}${extra ? ` <span class="you">${extra}</span>` : ""}${why ? ` <span class="why" translate="no">${esc(why)}</span>` : ""}</div>`;
  const mark = (el, ok) => { if (!el) return; el.disabled = true; el.classList.add(ok ? "right" : "wrong"); };
  const alsoAccepted = q => q.answers.length > 1 && ["gap", "comp", "context", "trans", "ita", "build", "order", "error"].includes(q.type) ? `<br><span class="also">Also accepted: ${q.answers.slice(1).map(esc).join(" · ")}</span>` : "";

  // returns [points, max]
  function checkItem(q, i) {
    const st = cur.st[i], li = $(`.qi[data-i="${i}"]`), fbx = li ? $(".fbx", li) : null;
    let ok = false, pts = 0, max = weight(q), extra = "";
    switch (q.type) {
      case "mc": case "tense": {
        ok = st.sel != null && st.opts[st.sel] === q.answers[0];
        $$(`.ob[data-i="${i}"]`).forEach(b => { b.disabled = true; const o = st.opts[+b.dataset.o]; if (o === q.answers[0]) b.classList.add("right"); else if (+b.dataset.o === st.sel) b.classList.add("wrong"); });
        break;
      }
      case "gap": case "comp": case "context": case "trans": case "ita": {
        const x = $(`.gi[data-i="${i}"]`); ok = checkText(q, x.value); mark(x, ok); break;
      }
      case "build": { const x = $(`.si[data-i="${i}"]`); ok = checkSentence(q.answers, x.value); mark(x, ok); break; }
      case "order": {
        const given = st.built.map(t => st.tiles[t]).join(" ") + (st.built.length ? st.end : "");
        ok = checkSentence(q.answers, given);
        $$(`.tile[data-i="${i}"], .tile-tools [data-i="${i}"]`).forEach(b => b.disabled = true);
        $(`.built[data-i="${i}"]`).classList.add(ok ? "right" : "wrong"); break;
      }
      case "error": {
        const x = $(`.fi[data-i="${i}"]`), corr = x.value;
        ok = st.sel === q.wrong && q.answers.some(a => variants(a).some(v => variants(corr).includes(v)));
        $$(`.seg-btn[data-i="${i}"]`).forEach((b, k) => { b.disabled = true; if (k === q.wrong) b.classList.add("bad-seg"); else if (k === st.sel) b.classList.add("miss"); });
        mark(x, ok);
        if (st.sel != null && st.sel !== q.wrong) extra = `The mistake is in “${esc(segs(q)[q.wrong])}”, not in “${esc(segs(q)[st.sel])}”.`;
        break;
      }
      case "judge": {
        const x = $(`.ji[data-i="${i}"]`);
        if (st.sel === 1) ok = q.correct; else if (st.sel === 0) ok = !q.correct && checkSentence(q.answers, x.value);
        $$(`.jb[data-i="${i}"]`).forEach(b => { b.disabled = true; if ((b.dataset.j === "1") === q.correct) b.classList.add("right"); else if (+b.dataset.j === st.sel) b.classList.add("wrong"); });
        if (st.sel === 0) mark(x, ok);
        if (st.sel === 0 && q.correct) extra = "This sentence was already correct.";
        break;
      }
      case "dialogue": {
        const bf = beforeGaps(q.lines.map(l => l[1]));
        const res = $$(`.dg[data-i="${i}"]`).map(x => { const k = +x.dataset.k, good = checkText({ text: bf[k], answers: q.answers[k] }, x.value); mark(x, good); return good; });
        pts = res.filter(Boolean).length; ok = pts === res.length;
        if (!ok) extra = `${pts} of ${res.length} gaps correct.`;
        break;
      }
      case "halves": {
        const L = "abcdefghijklmnop";
        const res = $$(`.hs[data-i="${i}"]`).map(x => { const k = +x.dataset.k, good = !!x.value && st.right[L.indexOf(x.value)] === q.pairs[k][1]; mark(x, good); return good; });
        pts = res.filter(Boolean).length; ok = pts === res.length;
        if (!ok) extra = `${pts} of ${res.length} matches correct.`;
        break;
      }
      case "passage": {
        const bf = beforeGaps(q.paras);
        const list = $(`.gexp[data-i="${i}"]`);
        const html = $$(`.pg[data-i="${i}"]`).map(x => {
          const k = +x.dataset.k, good = checkText({ text: bf[k], answers: q.answers[k] }, x.value); mark(x, good); if (good) pts++;
          return `<li>${fbHTML(good, `${k + 1} · <b>${esc(q.answers[k].join(" / "))}</b>`, q.expls[k])}</li>`;
        });
        list.innerHTML = html.join("");
        return [pts, max];
      }
    }
    if (!["dialogue", "halves"].includes(q.type)) pts = ok ? 1 : 0;
    if (fbx) fbx.innerHTML = fbHTML(ok, fill(q, q.answers[0]) + alsoAccepted(q), q.expl, extra);
    return [pts, max];
  }

  function checkAll() {
    const miss = missingCount();
    if (miss && !cur.warned) { cur.warned = true; toast(`${miss} answer${miss > 1 ? "s are" : " is"} missing. Press Check answers again to check anyway.`); return; }
    let pts = 0, max = 0;
    cur.b.items.forEach((q, i) => { const [p, m] = checkItem(q, i); pts += p; max += m; });
    cur.checked = true; drawFoot();
    const pct = Math.round(pts / max * 100);
    $("#btResult").innerHTML = `<div class="card bt-result"><div class="score">${pts}<span> / ${max}</span></div><p><b>${pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training."}</b> <span>Read the explanations under each answer, then try again or move on.</span></p>
      <div class="bar"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div></div>`;
    $("#btResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------------- events ---------------- */
  view().addEventListener("click", e => {
    if (!cur) return;
    const t = e.target;
    const act = t.closest("[data-act]");
    if (act && act.dataset.act === "check") return checkAll();
    if (act && act.dataset.act === "retry") { renderBattery(cur.b); window.Dojo.toView(true); return; }
    if (act && act.dataset.act === "newcustom") { startCustom(); return; }
    if (cur.checked) return;
    const ob = t.closest(".ob:not(.jb)");
    if (ob && !ob.disabled) { const i = +ob.dataset.i; cur.st[i].sel = +ob.dataset.o; $$(`.ob[data-i="${i}"]`).forEach(x => x.classList.toggle("on", x === ob)); return; }
    const jb = t.closest(".jb");
    if (jb && !jb.disabled) {
      const i = +jb.dataset.i, q = cur.b.items[i]; cur.st[i].sel = +jb.dataset.j;
      $$(`.jb[data-i="${i}"]`).forEach(x => x.classList.toggle("on", x === jb));
      const fix = $(`.qi[data-i="${i}"] .fix`); fix.hidden = jb.dataset.j === "1";
      const x = $(`.ji[data-i="${i}"]`); if (!fix.hidden && !x.value) { x.value = q.text; x.focus(); }
      return;
    }
    const sb = t.closest(".seg-btn");
    if (sb && !sb.disabled) {
      const i = +sb.dataset.i; cur.st[i].sel = +sb.dataset.seg;
      $$(`.seg-btn[data-i="${i}"]`).forEach(x => x.classList.toggle("sel", x === sb));
      $(`.qi[data-i="${i}"] .fix`).hidden = false; const x = $(`.fi[data-i="${i}"]`); x.placeholder = sb.textContent; x.focus(); return;
    }
    const tile = t.closest(".tile");
    if (tile && !tile.disabled) { const i = +tile.dataset.i; cur.st[i].built.push(+tile.dataset.t); tile.disabled = true; drawBuilt(i); return; }
    if (act && (act.dataset.act === "undo" || act.dataset.act === "clear")) {
      const i = +act.dataset.i, st = cur.st[i];
      const back = act.dataset.act === "undo" ? st.built.splice(-1) : st.built.splice(0);
      back.forEach(k => { const b = $(`.tile[data-i="${i}"][data-t="${k}"]`); if (b) b.disabled = false; });
      drawBuilt(i);
    }
  });
  // Enter moves to the next empty field
  view().addEventListener("keydown", e => {
    if (e.key !== "Enter" || !e.target.matches("#btBody input") || !cur || cur.checked) return;
    e.preventDefault();
    const ins = $$("#btBody input:not([disabled])").filter(x => !x.closest("[hidden]"));
    const i = ins.indexOf(e.target); if (ins[i + 1]) ins[i + 1].focus(); else $('[data-act="check"]').focus();
  });

  route();
  // used by automated tests
  window.__tenseDojo = { instruction, typeLabel, byId, areaKey, AREAS, FAM_LABELS: null, checkText, checkSentence, variants, QUESTIONS, TOPICS, BATS, TESTS, segs, plainError, weight, get current() { return cur; } };
})();
