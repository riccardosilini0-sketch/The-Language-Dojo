/* =====================================================================
   Language Dojo — grammar sections engine (Modal Verbs, The Passive Voice …)
   Data: window.GL = { config, lessons, batteries }, filled by the section's data/*.js.
   Lessons: form and structure, main uses with examples, common mistakes, contrasts.
   Practice: batteries of 10–15 questions (or a text with many gaps), checked all
   together, with the correct answer and an explanation for each item.
   Every exercise header: TYPE · Title (topic – n, or the title of the text) · Instruction.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast } = window.Dojo;
  const B = window.DojoBelts, EX = window.DojoEx;
  const GL = window.GL, CFG = GL.config, LESSONS = GL.lessons, BATS = GL.batteries;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const lessonById = Object.fromEntries(LESSONS.map(l => [l.id, l]));
  const batById = Object.fromEntries(BATS.map(b => [b.id, b]));
  const BELTS = [...new Set(LESSONS.map(l => l.belt).concat(BATS.map(b => b.belt)))].sort();
  const CEFR = { 1: "A1", 2: "A2", 3: "B1", 4: "B2", 5: "C1", 6: "C2" };
  const beltChip = l => B.chip(l, `${B.get(l).name} · ${CEFR[l]}`);
  const bdot = l => `<i class="bdot" style="background:${B.get(l).color}" title="${B.get(l).name}"></i>`;
  // [text] marks the key words of an example; ~~text~~ marks a wrong form
  const hl = s => esc(s).replace(/\[([^\]]+)\]/g, '<b class="hl">$1</b>').replace(/~~([^~]+)~~/g, '<s class="no">$1</s>');
  const plain = s => String(s).replace(/[[\]]/g, "");

  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    check: I('<path d="M20 6 9 17l-5-5"/>'), restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    book: I('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>')
  };

  /* ---------------- exercise headers ---------------- */
  const KEY = { mc: "mc", gap: "gaps", correct: "errors", transform: "transform", rewrite: "transform", text: "gapText", dialogue: "gapDialogue", halves: "matching" };
  const TYPE_ORDER = ["mc", "gaps", "transform", "errors", "matching", "gapDialogue", "gapText"];
  const DEFAULT_INSTR = {
    mc: "Choose the correct option to complete each sentence.",
    gap: "Complete the sentences with the correct form.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    transform: "Complete the second sentence so that it has a similar meaning to the first. Use the word given, where there is one.",
    rewrite: "Rewrite each sentence as shown in the instruction.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps.",
    halves: "Match the beginnings of the sentences with the correct endings."
  };
  BATS.forEach(b => {
    if (b.type === "text" && b.parts.some(p => p[0] && p[0] !== "#")) b.type = "dialogue";
    b.typeKey = KEY[b.type];
    b.instr = b.instr || CFG.instr && CFG.instr[b.type] || DEFAULT_INSTR[b.type];
    b.n = b.type === "text" || b.type === "dialogue" ? b.gaps.length : b.type === "halves" ? b.left.length : b.items.length;
  });
  const topicOf = b => b.lesson === "review" ? CFG.reviewTitle : (lessonById[b.lesson] || {}).title;
  // the order of the batteries on each lesson page and in the practice list: by level, then as written
  const ORDERED = BELTS.flatMap(l => BATS.filter(b => b.belt === l));
  EX.numberAll(ORDERED.filter(b => !b.title), topicOf, (b, t) => { b.title = t; });
  BATS.forEach(b => { if (!b.title) b.title = topicOf(b); });
  const batsOf = id => ORDERED.filter(b => b.lesson === id);

  /* ---------------- answer checking ---------------- */
  function variants(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, "\"").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not").replace(/\bcan't\b/g, "cannot").replace(/\bcan not\b/g, "cannot").replace(/n't\b/g, " not")
      .replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
    let out = [s];
    if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
    if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
    return out.map(x => x.replace(/\s+/g, " ").trim());
  }
  const accepts = (list, given) => { if (!String(given || "").trim()) return false; const g = variants(given); return list.some(a => variants(a).some(v => g.includes(v))); };
  const sentNorm = x => variants(String(x || "").replace(/[.,!?;:–—"“”]/g, " ").replace(/\s-\s/g, " "));
  const sameSentence = (list, given) => { if (!String(given || "").trim()) return false; const g = sentNorm(given); return list.some(a => sentNorm(a).some(v => g.includes(v))); };

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["home", "Overview"], ["lessons", "Lessons"], ["practice", "Practice"]].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  const view = () => $("#view");
  let cur = null;
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "home";
    const bat = h.startsWith("b-") ? batById[h.slice(2)] : null;
    const les = h.startsWith("l-") ? lessonById[h.slice(2)] : null;
    const tab = bat ? "practice" : les ? "lessons" : ["lessons", "practice"].includes(h) ? h : "home";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    cur = null;
    if (bat) return renderBattery(bat);
    if (les) return renderLesson(les);
    if (tab === "lessons") return renderLessons();
    if (tab === "practice") return renderPractice();
    renderHome();
  }
  window.addEventListener("hashchange", route);

  /* ---------------- OVERVIEW ---------------- */
  const nQ = bs => bs.reduce((s, b) => s + b.n, 0);
  function renderHome() {
    view().innerHTML = `
      <div class="vhead"><p>${CFG.intro}</p></div>
      <div class="gl-grid">
        <a class="card card-link gl-card" href="#lessons"><span class="gl-ic">${ICON.book}</span><h3>Lessons</h3><p>${LESSONS.length} lessons: form and structure, main uses with examples and Italian translations, common mistakes and comparisons.</p>
          <div class="gl-stats">${CFG.groups.map(([g, l]) => `<span>${l} <b>${LESSONS.filter(x => x.group === g).length}</b></span>`).join("")}</div></a>
        <a class="card card-link gl-card" href="#practice"><span class="gl-ic">${ICON.target}</span><h3>Practice</h3><p>${BATS.length} batteries, ${nQ(BATS)} questions in all: multiple choice, gap filling, transformations, error correction and texts.</p>
          <div class="gl-stats">${BELTS.map(l => `<span><i style="background:${B.get(l).color}"></i>${B.get(l).short} <b>${BATS.filter(b => b.belt === l).length}</b></span>`).join("")}</div></a>
      </div>
      <div class="card gl-levels"><h3>Levels</h3><div class="gl-lv">${BELTS.map(l => `<div><i style="background:${B.get(l).color}"></i><b>${B.get(l).name} · ${CEFR[l]}</b><span>${CFG.levels[l] || ""}</span></div>`).join("")}</div></div>`;
  }

  /* ---------------- LESSONS list ---------------- */
  function renderLessons() {
    view().innerHTML = `<div class="vhead"><h2>Lessons</h2><p>${CFG.lessonsLead}</p></div>` +
      CFG.groups.map(([g, label]) => {
        const ls = LESSONS.filter(l => l.group === g);
        return ls.length ? `<div class="group-title"><h3>${label}</h3></div><div class="les-grid">${ls.map(l =>
          `<a class="card card-link les-card" href="#l-${l.id}"><h4>${esc(l.title)}</h4><p>${esc(l.short)}</p>
            <div class="les-meta"><span>${bdot(l.belt)} ${B.get(l.belt).short} · ${CEFR[l.belt]}</span><span>${batsOf(l.id).length} batteries</span></div></a>`).join("")}</div>` : "";
      }).join("");
  }

  /* ---------------- LESSON page ---------------- */
  const exList = exs => `<ul class="exs" translate="no">${exs.map(([en, it]) => `<li><span class="en">${hl(en)}</span>${it ? `<span class="it" lang="it">${esc(it)}</span>` : ""}</li>`).join("")}</ul>`;
  function renderLesson(l) {
    const secs = [["form", "Form and structure"], ["uses", "Main uses"], l.mistakes && l.mistakes.length ? ["mistakes", "Common mistakes"] : null, l.contrasts && l.contrasts.length ? ["contrasts", "Comparisons"] : null].filter(Boolean);
    const i = LESSONS.indexOf(l), prev = LESSONS[i - 1], next = LESSONS[i + 1];
    const bats = batsOf(l.id);
    view().innerHTML = `<a class="back" href="#lessons">${ICON.back} Lessons</a>
      <article class="lesson">
        <div class="les-head">${beltChip(l.belt)}</div>
        <h2>${esc(l.title)}</h2>
        <p class="les-intro">${hl(l.intro)}</p>
        <nav class="les-nav" aria-label="In this lesson">${secs.map(([k, t]) => `<a href="#" data-jump="${k}">${t}</a>`).join("")}${bats.length ? `<a href="#" data-jump="practice">Practice</a>` : ""}</nav>
        ${secs.map(([k, t], n) => `<section class="les-sec" id="sec-${k}"><h3><span class="n">${n + 1}</span>${t}</h3>${section(l, k)}</section>`).join("")}
        ${bats.length ? `<section class="les-practice les-sec" id="sec-practice"><h3>Practice</h3><div class="bat-grid">${bats.map(batCard).join("")}</div></section>` : ""}
        <div class="les-next">${prev ? `<a class="btn soft" href="#l-${prev.id}">${ICON.back} ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn soft" href="#l-${next.id}">${esc(next.title)} ${ICON.arrow}</a>` : ""}</div>
      </article>`;
  }
  function section(l, k) {
    if (k === "form") return `<ul class="form-list">${l.form.map(f => `<li>${hl(f)}</li>`).join("")}</ul>` +
      (l.table ? `<div class="gl-table-wrap"><table class="gl-table" translate="no"><thead><tr>${l.table[0].map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${l.table.slice(1).map(r => `<tr>${r.map(c => `<td>${hl(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "");
    if (k === "uses") return l.uses.map(([t, expl, exs, belt]) => `<div class="use"><h4>${hl(t)}${belt ? bdot(belt) : ""}</h4><p>${hl(expl)}</p>${exList(exs)}</div>`).join("");
    if (k === "mistakes") return `<div class="mist">${l.mistakes.map(([w, r, why]) => `<div class="mi"><span class="w" translate="no">${esc(w)}</span><span class="r" translate="no">${esc(r)}</span><p>${hl(why)}</p></div>`).join("")}</div>`;
    if (k === "contrasts") return l.contrasts.map(([t, expl, sides]) => `<div class="cmp"><h4>${hl(t)}</h4><p>${hl(expl)}</p>
      <div class="cmp-pair" translate="no">${sides.map(([lab, en, it, note]) => `<div><b class="lab">${esc(lab)}</b><span class="en">${hl(en)}</span>${it ? `<span class="it" lang="it">${esc(it)}</span>` : ""}${note ? `<span class="note">${hl(note)}</span>` : ""}</div>`).join("")}</div></div>`).join("");
    return "";
  }
  view().addEventListener("click", e => { const j = e.target.closest("[data-jump]"); if (!j) return; e.preventDefault(); const t = $("#sec-" + j.dataset.jump); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });

  /* ---------------- PRACTICE list ---------------- */
  const pf = { lesson: "all", belt: "all", type: "all" };
  function batCard(b) {
    return `<a class="card card-link bat-card" href="#b-${b.id}"><span class="bt-type">${EX.TYPE[b.typeKey]}</span><h4${b.type === "text" || b.type === "dialogue" ? ' translate="no"' : ""}>${esc(b.title)}</h4><p>${b.instr}</p>
      <div class="bt-meta"><span>${bdot(b.belt)} ${B.get(b.belt).short} · ${CEFR[b.belt]}</span><span>${b.n} ${b.type === "text" || b.type === "dialogue" ? "gaps" : "questions"}</span></div></a>`;
  }
  function renderPractice() {
    view().innerHTML = `<div class="vhead"><h2>Practice</h2><p>Every battery has 10–15 questions or a text with many gaps. Answer everything, then check: you will see your score, the correct answers and an explanation for each one.</p></div>
      <div class="pr-tools"><div class="seg types" id="plesson" role="group" aria-label="Topic"></div><div class="seg" id="pbelt" role="group" aria-label="Level"></div><div class="seg types" id="ptype" role="group" aria-label="Type"></div></div>
      <div id="plist"></div>`;
    ["plesson", "pbelt", "ptype"].forEach(id => $("#" + id).addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; pf[b.dataset.k] = b.dataset.v; drawPractice(); }));
    drawPractice();
  }
  function drawPractice() {
    const topics = [["all", "All topics"], ...LESSONS.filter(l => batsOf(l.id).length).map(l => [l.id, l.title]), ...(BATS.some(b => b.lesson === "review") ? [["review", CFG.reviewTitle]] : [])];
    const used = TYPE_ORDER.filter(k => BATS.some(b => b.typeKey === k));
    const btn = (k, v, label, on, extra = "") => `<button type="button" data-k="${k}" data-v="${v}" class="${on ? "on" : ""}">${extra}${label}</button>`;
    $("#plesson").innerHTML = topics.map(([v, l]) => btn("lesson", v, esc(l), pf.lesson === v)).join("");
    $("#pbelt").innerHTML = [["all", "All levels"], ...BELTS.map(l => [String(l), `${B.get(l).short} · ${CEFR[l]}`])].map(([v, l]) => btn("belt", v, l, pf.belt === v, v !== "all" ? bdot(+v) : "")).join("");
    $("#ptype").innerHTML = [["all", "All types"], ...used.map(k => [k, EX.TYPE[k]])].map(([v, l]) => btn("type", v, l, pf.type === v)).join("");
    const list = ORDERED.filter(b => (pf.lesson === "all" || b.lesson === pf.lesson) && (pf.belt === "all" || b.belt === +pf.belt) && (pf.type === "all" || b.typeKey === pf.type));
    $("#plist").innerHTML = BELTS.filter(l => list.some(b => b.belt === l)).map(l => `<div class="lv-head">${beltChip(l)}</div><div class="bat-grid">${list.filter(b => b.belt === l).map(batCard).join("")}</div>`).join("")
      || `<div class="card empty"><h3>No batteries with these settings</h3>Choose another topic, level or type.</div>`;
  }

  /* ---------------- BATTERY ---------------- */
  function renderBattery(b) {
    cur = { b, checked: false };
    const les = lessonById[b.lesson];
    view().innerHTML = `<a class="back" href="${les ? "#l-" + les.id : "#practice"}">${ICON.back} ${les ? esc(les.title) : "Practice"}</a>
      <div class="bt-head"><div class="bt-chips">${beltChip(b.belt)}<span class="bt-type">${EX.TYPE[b.typeKey]}</span><span class="bt-n">${b.n} ${b.type === "text" || b.type === "dialogue" ? "gaps" : "questions"}</span></div>
        <h2${b.type === "text" || b.type === "dialogue" ? ' translate="no"' : ""}>${esc(b.title)}</h2><p class="bt-goal">${b.instr}</p></div>
      <div id="btBody"></div><div class="bt-foot" id="btFoot"></div><div id="btResult" aria-live="polite"></div>`;
    ({ mc: buildMC, gap: buildGap, correct: buildCorrect, transform: buildTransform, rewrite: buildRewrite, text: buildText, dialogue: buildText, halves: buildHalves })[b.type](b, $("#btBody"));
    drawFoot();
  }
  const nextBat = b => { const i = ORDERED.indexOf(b); return ORDERED.slice(i + 1).find(x => x.lesson === b.lesson); };
  function drawFoot() {
    const b = cur.b, nx = nextBat(b);
    $("#btFoot").innerHTML = cur.checked
      ? `<button class="btn ink" type="button" data-act="retry">${ICON.restart} Try again</button>${nx ? `<a class="btn primary" href="#b-${nx.id}">Next battery ${ICON.arrow}</a>` : ""}<a class="btn soft" href="#practice">Choose another battery</a>`
      : `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check answers</button>`;
  }
  const fb = (ok, answer, why) => `<div class="fbk ${ok ? "good" : "bad"}"><b>${ok ? "Correct." : "Not quite."}</b>${answer ? ` <span class="ans" translate="no">${answer}</span>` : ""}${why ? ` <span class="why" translate="no">${hl(why)}</span>` : ""}</div>`;
  function showResult(ok, n) {
    const pct = Math.round(ok / n * 100);
    $("#btResult").innerHTML = `<div class="card bt-result"><div class="score">${ok}<span> / ${n}</span></div><p><b>${pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training."}</b> <span>Read the explanations under each answer, then try again or move on.</span></p>
      <div class="bar"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div></div>`;
    $("#btResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function incomplete() { if (cur.warned) return false; cur.warned = true; toast("Some answers are missing. Press Check answers again to check anyway."); return true; }
  const input = (attrs, size) => `<input type="text" ${attrs} size="${Math.min(size, 34)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">`;
  const qn = i => `<span class="qn">${i + 1}</span>`;
  const fillGaps = (s, gaps) => { let k = 0; return esc(s).replace(/___( \([^)]*\))?/g, () => `<b>${esc(gaps[k++][0])}</b>`); };

  function buildMC(b, box) {
    const orders = b.items.map(it => shuffle(it[1].map((_, j) => j)));
    box.innerHTML = `<ol class="qlist">${b.items.map(([s, opts], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${hl(s).split("___").join('<span class="blank">…</span>')}</p>
      <div class="opts-row" translate="no">${orders[i].map((j, pos) => `<button type="button" class="ob" data-o="${j}"><span class="k">${"abcd"[pos]}</span>${esc(opts[j])}</button>`).join("")}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    const sel = {};
    box.addEventListener("click", e => { const o = e.target.closest(".ob"); if (!o || cur.checked) return; const li = o.closest(".qi"); sel[li.dataset.q] = +o.dataset.o; $$(".ob", li).forEach(x => x.classList.toggle("on", x === o)); });
    cur.check = () => {
      if (Object.keys(sel).length < b.items.length && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, opts, ans, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".ob", li).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
        const bits = String(opts[ans]).split(/\s*…\s*/);
        let k = 0; $(".fbx", li).innerHTML = fb(good, esc(plain(s)).replace(/___/g, () => `<b>${esc(bits[k++] || bits[0])}</b>`), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }
  function buildGap(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([s, gaps], i) => { let k = 0; return `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s).replace(/___/g, () => { const g = gaps[k]; return input(`data-g="${k++}" aria-label="Answer ${i + 1}"`, Math.max(6, Math.max(...g.map(a => a.length)) + 2)); })}</p><div class="fbx"></div></li>`; }).join("")}</ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, gaps, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), ins = $$("input", li);
        const res = ins.map((x, k) => accepts(gaps[k], x.value)); const good = res.every(Boolean); if (good) ok++;
        ins.forEach((x, k) => { x.disabled = true; x.classList.add(res[k] ? "right" : "wrong"); });
        const also = gaps.some(g => g.length > 1) ? `<br><span class="why">Also accepted: ${gaps.filter(g => g.length > 1).map(g => g.slice(1).map(esc).join(" / ")).join(" · ")}</span>` : "";
        $(".fbx", li).innerHTML = fb(good, fillGaps(s, gaps) + also, why);
      });
      showResult(ok, b.items.length); return true;
    };
  }
  function buildCorrect(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([s], i) => `<li class="qi" data-q="${i}"><p class="qs wrongs" translate="no">${qn(i)}${esc(s)}</p><div class="row-in">${input(`class="sent" data-q="${i}" aria-label="Correct sentence ${i + 1}" placeholder="Write the correct sentence"`, 40)}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    $$("input.sent", box).forEach(x => x.addEventListener("focus", () => { if (!x.value && !cur.checked) x.value = b.items[+x.dataset.q][0]; }, { once: true }));
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim() || x.value === b.items[+x.dataset.q][0]) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, acc, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li), good = sameSentence(acc, x.value); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, esc(acc[0]), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }
  function buildTransform(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([first, key, start, end, acc], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(first)}</p>${key ? `<p class="tkey" translate="no">${esc(key)}</p>` : ""}
      <p class="t2" translate="no">${esc(start)} ${input(`data-q="${i}" aria-label="Answer ${i + 1}"`, Math.max(14, Math.max(...acc.map(a => a.length)) + 2))} ${esc(end)}</p><div class="fbx"></div></li>`).join("")}</ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([first, key, start, end, acc, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li);
        // the key word must be used (contractions are expanded: NEEDN'T = need not, CAN = can / cannot)
        const ans = " " + sentNorm(x.value)[0] + " ", k = sentNorm(key)[0];
        const keyOk = !key || ans.includes(" " + k + " ") || ans.split(" ").some(w => w && w.startsWith(k));
        const good = accepts(acc, x.value) && keyOk; if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, `${esc(start)} <b>${esc(acc[0])}</b> ${esc(end)}`, why);
      });
      showResult(ok, b.items.length); return true;
    };
  }
  // rewrite the whole sentence (e.g. from active to passive); a cue may say how to start
  function buildRewrite(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([s, acc, why, cue], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s)}</p><div class="row-in">${input(`class="sent" data-q="${i}" aria-label="Sentence ${i + 1}" placeholder="${cue ? esc(cue) + " …" : "Write the new sentence"}"`, 40)}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    $$("input.sent", box).forEach(x => x.addEventListener("focus", () => { const cue = b.items[+x.dataset.q][3]; if (cue && !x.value && !cur.checked) x.value = cue + " "; }, { once: true }));
    cur.check = () => {
      if ($$("input", box).some(x => { const cue = b.items[+x.dataset.q][3]; return !x.value.trim() || (cue && x.value.trim() === cue); }) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, acc, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li), good = sameSentence(acc, x.value); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, esc(acc[0]) + (acc.length > 1 ? `<br><span class="why">Also accepted: ${acc.slice(1).map(esc).join(" · ")}</span>` : ""), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }
  function buildText(b, box) {
    const sizeOf = n => Math.max(6, Math.max(...b.gaps[n - 1][0].map(a => a.length)) + 2);
    const fill = s => esc(s).replace(/\{(\d+)\}/g, (m, n) => `<span class="tg"><span class="gn">${n}</span>${input(`data-g="${n}" aria-label="Gap ${n}"`, sizeOf(+n))}</span>`);
    box.innerHTML = `<div class="card textbox" translate="no">${b.parts.map(([sp, line]) => sp === "#" ? `<h4 class="dh">${esc(line)}</h4>` : sp ? `<p class="dl"><b>${esc(sp)}:</b> ${fill(line)}</p>` : `<p class="pl">${fill(line)}</p>`).join("")}</div><ol class="gexp" id="gexp"></ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      $("#gexp").innerHTML = b.gaps.map(([acc, why], i) => {
        const x = $(`input[data-g="${i + 1}"]`, box), good = accepts(acc, x.value); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        return `<li>${fb(good, `${i + 1} · <b>${esc(acc.join(" / "))}</b>`, why)}</li>`;
      }).join("");
      showResult(ok, b.gaps.length); return true;
    };
  }
  function buildHalves(b, box) {
    const L = b.right.map((_, i) => "abcdefghijklmnop"[i]);
    box.innerHTML = `<div class="halves">
      <ol class="hl-left">${b.left.map((s, i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s)} …</p>
        <label class="sr-only" for="h${i}">Ending for ${i + 1}</label><select id="h${i}" data-q="${i}"><option value="">…</option>${L.map(l => `<option value="${l}">${l}</option>`).join("")}</select><div class="fbx"></div></li>`).join("")}</ol>
      <ul class="hl-right card" translate="no">${b.right.map((r, i) => `<li><span class="k">${L[i]}</span>${esc(r)}</li>`).join("")}</ul></div>`;
    cur.check = () => {
      if ($$("select", box).some(x => !x.value) && incomplete()) return false;
      let ok = 0;
      b.left.forEach((s, i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("select", li), good = x.value === b.answers[i]; if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, `${esc(s)} <b>${esc(b.right[L.indexOf(b.answers[i])])}</b>`, b.why ? b.why[i] : "");
      });
      showResult(ok, b.left.length); return true;
    };
  }

  /* ---------------- events ---------------- */
  view().addEventListener("click", e => {
    const a = e.target.closest("[data-act]"); if (!a || !cur) return;
    if (a.dataset.act === "check") { if (cur.check()) { cur.checked = true; drawFoot(); } }
    else if (a.dataset.act === "retry") { renderBattery(cur.b); window.Dojo.toView(true); }
  });
  view().addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches("#btBody input") && !cur?.checked) { e.preventDefault(); const ins = $$("#btBody input:not([disabled])"); const i = ins.indexOf(e.target); if (ins[i + 1]) ins[i + 1].focus(); } });

  route();
  window.__grammar = { variants, accepts, sameSentence, BATS, LESSONS, ORDERED }; // used by automated tests
})();
