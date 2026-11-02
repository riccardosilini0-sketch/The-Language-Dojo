/* =====================================================================
   Skill Development — interface
   Reading, Use of English, Writing and Listening tasks for B1–C1 (data/*.js).
   Students check their own answers; nothing is saved or sent anywhere.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast } = window.Dojo;
  const B = window.DojoBelts;
  const TASKS = window.Skills.tasks;
  const AUDIO = window.SKILLS_AUDIO || {};
  const byId = Object.fromEntries(TASKS.map(t => [t.id, t]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    reading: I('<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>'),
    use: I('<path d="M4 20 10 4h1l6 16M6.5 14h9"/><path d="M19 4v6"/>'),
    writing: I('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    listening: I('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>'),
    clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), copy: I('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>')
  };

  const SKILLS = [
    ["reading", "Reading", "Understand the main ideas, details, opinions and the structure of texts."],
    ["use", "Use of English", "Grammar and vocabulary in context: collocations, word formation and transformations."],
    ["writing", "Writing", "Exam-style writing tasks with self-assessment checklists and annotated model answers."],
    ["listening", "Listening", "Authentic videos – talks, interviews and more – with questions at every level."]
  ];
  const skillName = k => (SKILLS.find(s => s[0] === k) || [k, k])[1];
  const CEFR = { 3: "B1", 4: "B2", 5: "C1" };
  const LEVELS = [3, 4, 5];
  const TYPES = { rmc: "Multiple choice", gapped: "Gapped text", match: "Multiple matching", mcc: "Multiple-choice cloze", open: "Open cloze",
    wf: "Word formation", kwt: "Key word transformation", lmc: "Multiple choice", complete: "Sentence completion",
    vmc: "Multiple choice", vtf: "True or false", vmatch: "Matching", vcomplete: "Note completion" };
  const INSTR = {
    rmc: ["Read the text and the questions. For each question, choose the correct answer."],
    gapped: ["Some sentences have been removed from the article. Choose the sentence that fits each gap.", "There is one extra sentence that you do not need."],
    match: ["Read the texts. For each question, choose the correct person.", "Each person may be chosen more than once."],
    mcc: ["Read the text and choose the word that best fits each gap."],
    open: ["Read the text and write one word in each gap."],
    wf: ["Use the word in capitals to form a word that fits in each gap."],
    kwt: ["Complete the second sentence so that it has a similar meaning to the first sentence, using the word given.", "Do not change the word given."],
    lmc: ["Listen to the recording and choose the correct answer for each question.", "You can listen twice."],
    complete: ["Listen and complete the sentences with a word or a short phrase.", "You can listen twice."],
    vmc: ["Watch the video and choose the best answer for each question.", "You can watch it as many times as you need."],
    vtf: ["Watch the video and decide whether each statement is true or false.", "You can watch it as many times as you need."],
    vmatch: ["Watch the video and do the matching task.", "You can watch it as many times as you need."],
    vcomplete: ["Watch the video and complete the notes with a word or a short phrase.", "You can watch it as many times as you need."]
  };
  const chip = l => B.chip(l, `${B.get(l).name} · ${CEFR[l]}`);
  const typeLabel = t => t.type === "write" ? t.genre : TYPES[t.type];

  /* ---------------- answer checking ---------------- */
  // capital letters, extra spaces, final punctuation and curly apostrophes are ignored; contractions are expanded
  function variants(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/n't\b/g, " not")
      .replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
    let out = [s];
    if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
    if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
    return out.map(x => x.replace(/\s+/g, " ").trim());
  }
  const accepts = (list, given) => { const g = variants(given); return !!String(given || "").trim() && list.some(a => variants(a).some(v => g.includes(v))); };

  /* ---------------- audio ---------------- */
  const player = (id, label) => AUDIO[id]
    ? `<div class="audio-box"><span class="al">${ICON.listening}${label}</span><audio controls preload="none" src="audio/${esc(AUDIO[id])}"></audio></div>`
    : `<div class="audio-box off"><span class="al">${ICON.listening}${label}</span><span class="soon">The recording is being prepared.</span></div>`;

  /* ---------------- authentic video (official embedded player, privacy-enhanced mode) ---------------- */
  const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const videoSrc = v => `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?start=${v.start || 0}${v.end ? `&end=${v.end}` : ""}&rel=0&modestbranding=1&playsinline=1`;
  const videoPane = t => { const v = t.video; return `<div class="video-box">
    <div class="vframe"><iframe id="vid" src="${videoSrc(v)}" title="${esc(v.speaker + ": " + v.title)}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
    <div class="vmeta"><span>${ICON.listening}<span>Segment</span> <b translate="no">${mmss(v.start || 0)} – ${mmss(v.end)}</b></span><button class="btn soft sm" type="button" data-act="restart-video">${ICON.restart} Restart the segment</button></div>
    <p class="vcredit"><span translate="no">${esc(v.speaker)}, “${esc(v.title)}”, <a href="${esc(v.page)}" target="_blank" rel="noopener">${esc(v.source)}</a>. ${esc(v.credit)}</span></p>
    <a class="btn soft sm" id="trLink" href="${esc(v.transcript)}" target="_blank" rel="noopener" hidden>Official transcript ↗</a></div>`; };

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["home", "Overview"], ...SKILLS.map(s => [s[0], s[1]])].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  const view = () => $("#view");
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "home";
    const task = h.startsWith("t-") ? byId[h.slice(2)] : null;
    const tab = task ? task.skill : SKILLS.some(s => s[0] === h) ? h : "home";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    if (task) return renderTask(task);
    if (tab === "home") return renderHome();
    return renderSkill(tab);
  }
  window.addEventListener("hashchange", route);

  /* ---------------- OVERVIEW ---------------- */
  function renderHome() {
    view().innerHTML = `
      <div class="vhead"><p>Practise the four skills tested in international English exams at levels B1, B2 and C1. Every text and task is original, and every answer comes with an explanation.</p></div>
      <div class="sk-grid">${SKILLS.map(([k, name, desc]) => {
        const ts = TASKS.filter(t => t.skill === k);
        return `<a class="card card-link sk-card" href="#${k}"><span class="sk-ic">${ICON[k]}</span><h3>${name}</h3><p>${desc}</p>
          <div class="sk-levels">${LEVELS.map(l => `<span><i style="background:${B.get(l).color}"></i>${CEFR[l]} <b>${ts.filter(t => t.level === l).length}</b></span>`).join("")}</div></a>`;
      }).join("")}</div>
      <div class="card sk-note"><h3>How it works</h3><ul>
        <li>Choose a skill and a level, then a task.</li>
        <li>Do the task, then press “Check answers” to see what is right and why.</li>
        <li>In Writing you assess your own text with a checklist and compare it with a model answer.</li>
        <li>Nothing is saved: you can repeat every task as often as you like.</li></ul></div>`;
  }

  /* ---------------- SKILL page ---------------- */
  const filter = { level: "all" };
  function renderSkill(k) {
    const desc = (SKILLS.find(s => s[0] === k) || [])[2] || "";
    const draw = () => {
      const ts = TASKS.filter(t => t.skill === k && (filter.level === "all" || t.level === +filter.level));
      $("#skLevels").innerHTML = [["all", "All levels"], ...LEVELS.map(l => [String(l), CEFR[l]])].map(([v, l]) => `<button type="button" data-level="${v}" class="${filter.level === v ? "on" : ""}">${v !== "all" ? `<i class="bdot" style="background:${B.get(+v).color}"></i>` : ""}${l}</button>`).join("");
      $("#skList").innerHTML = LEVELS.filter(l => ts.some(t => t.level === l)).map(l => `
        <div class="lv-head">${chip(l)}</div>
        <div class="task-grid">${ts.filter(t => t.level === l).map(t => `<a class="card card-link task-card" href="#t-${t.id}">
          <span class="tk-type">${esc(typeLabel(t))}</span><h4>${esc(t.title)}</h4>
          <div class="tk-meta"><span>${esc(t.topic)}</span><span>${ICON.clock}${t.time} min</span></div></a>`).join("")}</div>`).join("")
        || `<div class="card empty"><h3>No tasks at this level yet</h3>New tasks are added regularly.</div>`;
    };
    view().innerHTML = `<div class="vhead"><h2>${skillName(k)}</h2><p>${desc}</p></div>
      <div class="seg lv-filter" id="skLevels" role="group" aria-label="Level"></div><div id="skList"></div>`;
    draw();
    $("#skLevels").addEventListener("click", e => { const b = e.target.closest("[data-level]"); if (b) { filter.level = b.dataset.level; draw(); } });
  }

  /* ---------------- TASK page ---------------- */
  let cur = null; // {t, checked, check(), reset(), reveal()}
  function renderTask(t) {
    cur = { t, checked: false };
    const head = `<a class="back" href="#${t.skill}">${ICON.back} ${skillName(t.skill)}</a>
      <div class="tk-head"><div class="tk-chips">${chip(t.level)}<span class="tk-type">${esc(typeLabel(t))}</span><span class="tk-time">${ICON.clock}${t.time} min</span></div>
      <h2>${esc(t.title)}</h2>${t.intro ? `<p class="tk-intro">${esc(t.intro)}</p>` : ""}
      ${INSTR[t.type] ? `<div class="instr">${INSTR[t.type].map(x => `<p>${x}</p>`).join("")}${t.type === "kwt" ? `<p>Use between ${t.words.split("–")[0]} and ${t.words.split("–")[1]} words, including the word given.</p>` : ""}</div>` : ""}</div>`;
    const foot = `<div class="tk-foot" id="tkFoot"></div><div id="tkResult" aria-live="polite"></div>`;
    const builders = { rmc: buildChoice, lmc: buildChoice, gapped: buildGapped, match: buildMatch, mcc: buildCloze, open: buildCloze, wf: buildCloze, kwt: buildKwt, complete: buildComplete, write: buildWriting,
      vmc: buildChoice, vtf: buildTrueFalse, vmatch: buildVideoMatch, vcomplete: buildComplete };
    view().innerHTML = head + `<div id="tkBody"></div>` + (t.type === "write" ? "" : foot);
    builders[t.type](t, $("#tkBody"));
    if (t.type !== "write") drawFoot();
  }
  function drawFoot() {
    $("#tkFoot").innerHTML = cur.checked
      ? `<button class="btn soft" type="button" data-act="reset">${ICON.restart} Try again</button><button class="btn" type="button" data-act="reveal">Show all answers</button>`
      : `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check answers</button>`;
  }
  function showResult(ok, n) {
    const pct = Math.round(ok / n * 100);
    $("#tkResult").innerHTML = `<div class="card tk-result"><div class="score">${ok}<span> / ${n}</span></div>
      <p><b>${pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training."}</b> <span>Read the explanations to see why each answer is right.</span></p>
      <div class="bar"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div></div>`;
  }
  const why = (text, ok, time) => `<div class="why ${ok ? "good" : "bad"}"><b>${ok ? "Correct." : "Not quite."}</b> <span translate="no">${esc(text)}</span>${time ? ` <span class="tchip" translate="no">${esc(time)}</span>` : ""}</div>`;
  const showTranscript = () => { const a = $("#trLink"); if (a) a.hidden = false; };

  /* ----- multiple choice (reading and listening) ----- */
  function buildChoice(t, box) {
    const listening = t.type === "lmc" || t.type === "vmc";
    const left = t.video ? videoPane(t) : listening
      ? `${player(t.id, "Recording")}<div class="transcript" id="tr" hidden translate="no">${t.script.map(([sp, l]) => `<p><b>${esc(sp)}:</b> ${esc(l)}</p>`).join("")}</div><button class="btn soft sm" type="button" data-act="transcript" id="trBtn" disabled>Show transcript</button>`
      : `${player(t.id, "Listen to the text")}<article class="passage" translate="no">${t.text.map(p => `<p>${esc(p)}</p>`).join("")}</article>`;
    box.innerHTML = `<div class="split${listening ? " lis" : ""}"><div class="pane">${left}</div><div class="pane qs">${t.questions.map(([q, opts], i) => `
      <div class="qitem" data-q="${i}"><p class="qq" translate="no"><span class="qn">${i + 1}</span>${esc(q)}</p>
      <div class="ch" translate="no">${opts.map((o, j) => `<button type="button" class="chb" data-o="${j}"><span class="k">${"ABCD"[j]}</span><span>${esc(o)}</span></button>`).join("")}</div><div class="exp"></div></div>`).join("")}</div></div>`;
    const sel = {};
    box.addEventListener("click", e => {
      const b = e.target.closest(".chb"); if (!b || cur.checked) return;
      const q = b.closest(".qitem"); sel[q.dataset.q] = +b.dataset.o; $$(".chb", q).forEach(x => x.classList.toggle("on", x === b));
    });
    cur.check = () => {
      if (Object.keys(sel).length < t.questions.length && !confirm1()) return false;
      let ok = 0;
      t.questions.forEach(([, , ans, w, time], i) => {
        const q = $(`.qitem[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".chb", q).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
        $(".exp", q).innerHTML = why(w, good, time);
      });
      if ($("#trBtn")) $("#trBtn").disabled = false; showTranscript();
      showResult(ok, t.questions.length); return true;
    };
    cur.reveal = () => {};
  }

  /* ----- gapped text ----- */
  function buildGapped(t, box) {
    const L = t.sentences.map((_, i) => "ABCDEFGH"[i]);
    const gapHtml = n => `<span class="gslot" data-g="${n}"><label class="sr-only" for="g${n}">Gap ${n}</label><select id="g${n}" data-g="${n}"><option value="">${n} …</option>${L.map(l => `<option value="${l}">${n} · ${l}</option>`).join("")}</select><span class="gtext"></span></span>`;
    box.innerHTML = `<div class="split"><div class="pane">${player(t.id, "Listen to the text")}<article class="passage" translate="no">${t.text.map(p => `<p>${esc(p).replace(/\[(\d+)\]/g, (m, n) => gapHtml(n))}</p>`).join("")}</article></div>
      <div class="pane qs"><div class="sents" translate="no">${t.sentences.map(([s], i) => `<div class="sent"><span class="k">${L[i]}</span><span>${esc(s)}</span></div>`).join("")}</div><div class="exp-list" id="gexp"></div></div></div>`;
    box.addEventListener("change", e => { const s = e.target.closest("select[data-g]"); if (!s) return; const i = L.indexOf(s.value); s.parentElement.querySelector(".gtext").textContent = i >= 0 ? t.sentences[i][0] : ""; });
    const gaps = [...new Set(t.text.join(" ").match(/\[(\d+)\]/g).map(x => +x.slice(1, -1)))];
    cur.check = () => {
      const val = n => $(`select[data-g="${n}"]`, box).value;
      if (gaps.some(n => !val(n)) && !confirm1()) return false;
      let ok = 0;
      const exp = gaps.map(n => {
        const i = t.sentences.findIndex(s => s[1] === n), good = val(n) === L[i]; if (good) ok++;
        const slot = $(`.gslot[data-g="${n}"]`, box); slot.classList.add(good ? "right" : "wrong"); $("select", slot).disabled = true;
        return `<div class="exp-i"><b>${n} → ${L[i]}</b>${why(t.sentences[i][2], good)}</div>`;
      });
      const extra = t.sentences.findIndex(s => !s[1]);
      if (extra >= 0) exp.push(`<div class="exp-i"><b>${L[extra]}</b><div class="why">${esc(t.sentences[extra][2])}</div></div>`);
      $("#gexp").innerHTML = exp.join(""); showResult(ok, gaps.length); return true;
    };
    cur.reveal = () => gaps.forEach(n => { const i = t.sentences.findIndex(s => s[1] === n); const s = $(`select[data-g="${n}"]`, box); s.value = L[i]; s.parentElement.querySelector(".gtext").textContent = t.sentences[i][0]; });
  }

  /* ----- multiple matching ----- */
  function buildMatch(t, box) {
    const letters = t.sections.map(s => s[0]);
    box.innerHTML = `<div class="split"><div class="pane">${player(t.id, "Listen to the texts")}<article class="passage" translate="no">${t.sections.map(([l, name, text]) => `<section class="msec"><h4><span class="k">${l}</span>${esc(name)}</h4><p>${esc(text)}</p></section>`).join("")}</article></div>
      <div class="pane qs"><p class="which">Which person…</p>${t.statements.map(([s], i) => `<div class="qitem" data-q="${i}"><p class="qq" translate="no"><span class="qn">${i + 1}</span>${esc(s)}</p>
        <div class="ml">${letters.map(l => `<button type="button" class="mlb" data-l="${l}">${l}</button>`).join("")}</div><div class="exp"></div></div>`).join("")}</div></div>`;
    const sel = {};
    box.addEventListener("click", e => { const b = e.target.closest(".mlb"); if (!b || cur.checked) return; const q = b.closest(".qitem"); sel[q.dataset.q] = b.dataset.l; $$(".mlb", q).forEach(x => x.classList.toggle("on", x === b)); });
    cur.check = () => {
      if (Object.keys(sel).length < t.statements.length && !confirm1()) return false;
      let ok = 0;
      t.statements.forEach(([, ans, w], i) => {
        const q = $(`.qitem[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".mlb", q).forEach(x => { x.disabled = true; if (x.dataset.l === ans) x.classList.add("right"); else if (x.dataset.l === sel[i]) x.classList.add("wrong"); });
        $(".exp", q).innerHTML = why(w, good);
      });
      showResult(ok, t.statements.length); return true;
    };
    cur.reveal = () => {};
  }

  /* ----- cloze texts: multiple choice, open, word formation ----- */
  function buildCloze(t, box) {
    const orders = t.type === "mcc" ? t.gaps.map(g => shuffle(g[0].map((_, i) => i))) : [];
    const gapHtml = n => {
      const g = t.gaps[n - 1];
      if (t.type === "mcc") return `<span class="cg" data-g="${n}"><span class="gn">${n}</span><select data-g="${n}" aria-label="Gap ${n}"><option value="">…</option>${orders[n - 1].map(i => `<option value="${i}">${esc(g[0][i])}</option>`).join("")}</select></span>`;
      const ans = t.type === "wf" ? g[1] : g[0];
      const size = Math.max(7, Math.max(...ans.map(a => a.length)) + 2);
      return `<span class="cg" data-g="${n}"><span class="gn">${n}</span><input type="text" data-g="${n}" size="${size}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Gap ${n}">${t.type === "wf" ? `<span class="stem">${esc(g[0])}</span>` : ""}</span>`;
    };
    box.innerHTML = `<article class="passage cloze" translate="no"><p>${esc(t.text).replace(/\{(\d+)\}/g, (m, n) => gapHtml(+n))}</p></article><div class="exp-list" id="cexp"></div>`;
    const val = n => $(`[data-g="${n}"]:is(select,input)`, box).value;
    const right = (g, n) => t.type === "mcc" ? val(n) === String(g[1]) : accepts(t.type === "wf" ? g[1] : g[0], val(n));
    cur.check = () => {
      if (t.gaps.some((g, i) => !val(i + 1).trim()) && !confirm1()) return false;
      let ok = 0;
      const exp = t.gaps.map((g, i) => {
        const n = i + 1, good = right(g, n); if (good) ok++;
        const el = $(`.cg[data-g="${n}"]`, box); el.classList.add(good ? "right" : "wrong"); $(":is(select,input)", el).disabled = true;
        const answer = t.type === "mcc" ? g[0][g[1]] : (t.type === "wf" ? g[1] : g[0]).join(" / ");
        return `<div class="exp-i"><b>${n} · ${esc(answer)}</b>${why(t.type === "mcc" ? g[2] : t.type === "wf" ? g[2] : g[1], good)}</div>`;
      });
      $("#cexp").innerHTML = exp.join(""); showResult(ok, t.gaps.length); return true;
    };
    cur.reveal = () => t.gaps.forEach((g, i) => { const el = $(`[data-g="${i + 1}"]:is(select,input)`, box); el.value = t.type === "mcc" ? String(g[1]) : (t.type === "wf" ? g[1] : g[0])[0]; });
  }

  /* ----- key word transformations ----- */
  function buildKwt(t, box) {
    box.innerHTML = `<div class="kwt">${t.items.map(([first, key, start, end, ans], i) => `<div class="kw card" data-q="${i}">
      <p class="kw1" translate="no"><span class="qn">${i + 1}</span>${esc(first)}</p><p class="kwkey" translate="no">${esc(key)}</p>
      <p class="kw2" translate="no">${esc(start)} <input type="text" data-q="${i}" size="${Math.max(16, Math.max(...ans.map(a => a.length)) + 2)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Answer ${i + 1}"> ${esc(end)}</p><div class="exp"></div></div>`).join("")}</div>`;
    cur.check = () => {
      const val = i => $(`input[data-q="${i}"]`, box).value;
      if (t.items.some((x, i) => !val(i).trim()) && !confirm1()) return false;
      let ok = 0;
      t.items.forEach(([, key, , , ans, w], i) => {
        const inp = $(`input[data-q="${i}"]`, box), given = val(i);
        const good = accepts(ans, given) && variants(given)[0].includes(key.toLowerCase()); if (good) ok++;
        inp.disabled = true; inp.classList.add(good ? "right" : "wrong");
        $(`.kw[data-q="${i}"] .exp`, box).innerHTML = `<p class="kwans" translate="no">${ans.slice(0, 1).map(esc).join("")}</p>` + why(w, good);
      });
      showResult(ok, t.items.length); return true;
    };
    cur.reveal = () => t.items.forEach((x, i) => { $(`input[data-q="${i}"]`, box).value = x[4][0]; });
  }

  /* ----- listening: sentence completion ----- */
  function buildComplete(t, box) {
    const left = t.video ? videoPane(t) : `${player(t.id, "Recording")}<div class="transcript" id="tr" hidden translate="no">${t.script.map(([sp, l]) => `<p><b>${esc(sp)}:</b> ${esc(l)}</p>`).join("")}</div><button class="btn soft sm" type="button" data-act="transcript" id="trBtn" disabled>Show transcript</button>`;
    box.innerHTML = `<div class="split lis"><div class="pane">${left}</div>
      <div class="pane qs">${t.sentences.map(([a, b, ans], i) => `<div class="qitem" data-q="${i}"><p class="cs" translate="no"><span class="qn">${i + 1}</span>${esc(a)} <input type="text" data-q="${i}" size="${Math.max(10, Math.max(...ans.map(x => x.length)) + 2)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Answer ${i + 1}">${esc(b)}</p><div class="exp"></div></div>`).join("")}</div></div>`;
    cur.check = () => {
      const val = i => $(`input[data-q="${i}"]`, box).value;
      if (t.sentences.some((x, i) => !val(i).trim()) && !confirm1()) return false;
      let ok = 0;
      t.sentences.forEach(([, , ans, w, time], i) => {
        const inp = $(`input[data-q="${i}"]`, box), good = accepts(ans, val(i)); if (good) ok++;
        inp.disabled = true; inp.classList.add(good ? "right" : "wrong");
        $(`.qitem[data-q="${i}"] .exp`, box).innerHTML = `<p class="kwans" translate="no">${esc(ans[0])}</p>` + why(w, good, time);
      });
      if ($("#trBtn")) $("#trBtn").disabled = false; showTranscript(); showResult(ok, t.sentences.length); return true;
    };
    cur.reveal = () => t.sentences.forEach((x, i) => { $(`input[data-q="${i}"]`, box).value = x[2][0]; });
  }

  /* ----- video: true or false ----- */
  function buildTrueFalse(t, box) {
    box.innerHTML = `<div class="split lis"><div class="pane">${videoPane(t)}</div><div class="pane qs">${t.statements.map(([st], i) => `
      <div class="qitem" data-q="${i}"><p class="qq" translate="no"><span class="qn">${i + 1}</span>${esc(st)}</p>
      <div class="tf"><button type="button" class="tfb" data-v="1">${ICON.check} True</button><button type="button" class="tfb" data-v="0">${ICON.x} False</button></div><div class="exp"></div></div>`).join("")}</div></div>`;
    const sel = {};
    box.addEventListener("click", e => { const b = e.target.closest(".tfb"); if (!b || cur.checked) return; const q = b.closest(".qitem"); sel[q.dataset.q] = b.dataset.v === "1"; $$(".tfb", q).forEach(x => x.classList.toggle("on", x === b)); });
    cur.check = () => {
      if (Object.keys(sel).length < t.statements.length && !confirm1()) return false;
      let ok = 0;
      t.statements.forEach(([, ans, w, time], i) => {
        const q = $(`.qitem[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".tfb", q).forEach(x => { x.disabled = true; const v = x.dataset.v === "1"; if (v === ans) x.classList.add("right"); else if (sel[i] === v) x.classList.add("wrong"); });
        $(".exp", q).innerHTML = why(w, good, time);
      });
      showTranscript(); showResult(ok, t.statements.length); return true;
    };
    cur.reveal = () => {};
  }

  /* ----- video: matching ----- */
  function buildVideoMatch(t, box) {
    const keys = t.options.map(o => o[0]);
    box.innerHTML = `<div class="split lis"><div class="pane">${videoPane(t)}</div><div class="pane qs">
      <p class="which">${esc(t.ask)}</p>
      <div class="sents" translate="no">${t.options.map(([k, d]) => `<div class="sent"><span class="k">${k}</span><span>${esc(d)}</span></div>`).join("")}</div>
      ${t.items.map(([it], i) => `<div class="qitem" data-q="${i}"><p class="qq" translate="no"><span class="qn">${i + 1}</span>${esc(it)}</p>
        <div class="ml">${keys.map(k => `<button type="button" class="mlb" data-l="${k}">${k}</button>`).join("")}</div><div class="exp"></div></div>`).join("")}</div></div>`;
    const sel = {};
    box.addEventListener("click", e => { const b = e.target.closest(".mlb"); if (!b || cur.checked) return; const q = b.closest(".qitem"); sel[q.dataset.q] = b.dataset.l; $$(".mlb", q).forEach(x => x.classList.toggle("on", x === b)); });
    cur.check = () => {
      if (Object.keys(sel).length < t.items.length && !confirm1()) return false;
      let ok = 0;
      t.items.forEach(([, ans, w, time], i) => {
        const q = $(`.qitem[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".mlb", q).forEach(x => { x.disabled = true; if (x.dataset.l === ans) x.classList.add("right"); else if (x.dataset.l === sel[i]) x.classList.add("wrong"); });
        $(".exp", q).innerHTML = why(w, good, time);
      });
      showTranscript(); showResult(ok, t.items.length); return true;
    };
    cur.reveal = () => {};
  }

  /* ----- writing ----- */
  const countWords = s => (s.trim().match(/[A-Za-zÀ-ÿ0-9’'-]+/g) || []).length;
  function buildWriting(t, box) {
    box.innerHTML = `
      <div class="wr-task card"><div translate="no">${t.prompt.map(p => `<p>${esc(p)}</p>`).join("")}</div>
        ${t.input ? `<div class="wr-input" translate="no"><span class="wl">${esc(t.input.title)}</span>${t.input.lines.map(l => `<p>${esc(l)}</p>`).join("")}</div>` : ""}
        ${t.notes ? `<div class="wr-notes"><b>Write about:</b><ol translate="no">${t.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ol></div>` : ""}
        <p class="wr-words">${ICON.writing}<span translate="no">${esc(t.words)}</span></p></div>
      <div class="wr-grid">
        <div class="wr-main">
          <label class="wl" for="wrText">Your text</label>
          <textarea id="wrText" rows="14" spellcheck="false" placeholder="Write your answer here…" translate="no"></textarea>
          <div class="wr-bar"><span id="wrCount">0 words</span><button class="btn soft sm" type="button" data-act="copy">${ICON.copy} Copy text</button></div>
          <p class="wr-warn">Your text is not saved: copy it before you leave the page.</p>
        </div>
        <aside class="wr-side">
          <div class="card wr-check"><h3>Check your writing</h3><p class="wr-sub" id="ckCount"></p>
            <ul translate="no">${t.checklist.map((c, i) => `<li><label><input type="checkbox" data-ck="${i}"><span>${esc(c)}</span></label></li>`).join("")}</ul></div>
          <details class="card wr-lang"><summary>Useful language</summary><div translate="no">${t.language.map(([f, ps]) => `<h4>${esc(f)}</h4><ul>${ps.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`).join("")}</div></details>
        </aside>
      </div>
      <div class="wr-model-box"><button class="btn ink" type="button" data-act="model" id="modelBtn">Show model answer</button>
        <div class="card wr-model" id="wrModel" hidden><h3>Model answer</h3><p class="wr-sub">Compare it with your text: the comments explain what each part does.</p>
          ${t.model.map(([p, c]) => `<div class="md-row"><div class="md-p" translate="no">${esc(p).replace(/\n/g, "<br>")}</div><div class="md-c" translate="no">${esc(c)}</div></div>`).join("")}</div></div>`;
    const ta = $("#wrText"), upd = () => { $("#wrCount").textContent = `${countWords(ta.value)} words`; };
    ta.addEventListener("input", upd); upd();
    const ck = () => { $("#ckCount").textContent = `${$$("[data-ck]:checked").length} of ${t.checklist.length} checked`; };
    box.addEventListener("change", e => { if (e.target.matches("[data-ck]")) ck(); }); ck();
  }

  function confirm1() { toast("Answer all the questions first, or press Check answers again to check anyway."); if (cur.warned) return true; cur.warned = true; return false; }

  /* ---------------- events ---------------- */
  view().addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b || !cur) return;
    const a = b.dataset.act;
    if (a === "check") { if (cur.check()) { cur.checked = true; drawFoot(); } }
    else if (a === "reset") renderTask(cur.t);
    else if (a === "reveal") { cur.reveal(); toast("All the correct answers are shown."); $$("#tkBody .exp, #tkBody .exp-list").forEach(x => x.classList.add("open")); }
    else if (a === "restart-video") { const f = $("#vid"); if (f) f.src = videoSrc(cur.t.video) + "&autoplay=1"; }
    else if (a === "transcript") { const tr = $("#tr"); tr.hidden = !tr.hidden; b.textContent = tr.hidden ? "Show transcript" : "Hide transcript"; }
    else if (a === "model") { const m = $("#wrModel"); m.hidden = !m.hidden; b.textContent = m.hidden ? "Show model answer" : "Hide model answer"; if (!m.hidden) m.scrollIntoView({ behavior: "smooth", block: "start" }); }
    else if (a === "copy") { const v = $("#wrText").value; if (!v.trim()) { toast("There is nothing to copy yet."); return; } (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).then(() => toast("Text copied."), () => { $("#wrText").select(); document.execCommand("copy"); toast("Text copied."); }); }
  });

  route();
  window.__skills = { variants, accepts, TASKS }; // used by automated tests
})();
