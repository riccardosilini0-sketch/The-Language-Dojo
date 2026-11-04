/* =====================================================================
   Dependent Prepositions — interface
   Reference (verbs, adjectives, nouns + prepositions, with examples and Italian
   translations) and Practice (batteries of 10–15 questions). Data: data/*.js.
   Nothing is saved: every visit starts fresh.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast } = window.Dojo;
  const B = window.DojoBelts;
  const REF = window.DepPrep.reference, BATS = window.DepPrep.batteries;
  const byId = Object.fromEntries(BATS.map(b => [b.id, b]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'), check: I('<path d="M20 6 9 17l-5-5"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'), search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    book: I('<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>')
  };

  const CATS = [["verbs", "Verbs + prepositions"], ["adjectives", "Adjectives + prepositions"], ["nouns", "Nouns + prepositions"]];
  const BELTS = [1, 2, 3];
  /* Exercise headers (shared vocabulary in assets/js/exercises.js): TYPE · Title · Instruction */
  const EX = window.DojoEx;
  const KEY = { mc: "mc", gap: "gaps", correct: "errors", transform: "transform", translate: "translation", halves: "matching" };
  const typeKey = b => b.type === "text" ? (b.parts.some(p => p[0] && p[0] !== "#") ? "gapDialogue" : "gapText") : KEY[b.type];
  const TYPE_ORDER = ["mc", "gaps", "errors", "transform", "translation", "matching", "gapDialogue", "gapText"];
  const INSTR = {
    mc: "Choose the correct preposition to complete each sentence.",
    gaps: "Complete the sentences with the correct preposition.",
    errors: "Each sentence contains one mistake with a preposition. Write the correct sentence.",
    transform: "Complete the second sentence so that it has a similar meaning to the first, using the word given.",
    translation: "Translate the sentences into English, using the word in brackets and the correct preposition. Then compare your sentence with the model answer.",
    matching: "Match the beginnings of the sentences with the correct endings.",
    gapDialogue: "Complete the dialogues with the correct preposition.",
    gapText: "Read the whole text first, then write one preposition in each gap."
  };
  // topic of each battery (title level 2); exercises built on a text keep the title of the text
  const TOPIC = {
    verbs: "Verbs + Prepositions", adjectives: "Adjectives + Prepositions", nouns: "Nouns + Prepositions",
    confused: "Easily Confused Prepositions", mixed: "Dependent Prepositions"
  };
  const TOPIC_OF = {
    "w-verbs-mc": "verbs", "y-verbs-gap": "verbs", "w-adjectives-gap": "adjectives", "y-feelings-mc": "adjectives",
    "y-nouns-mc": "nouns", "o-nouns-gap": "nouns", "w-which-one": "confused", "pack-confused": "confused"
  };
  const TEXT_TITLE = { "o-cloze": "My first summer job", "pack-cloze": "A new life in Dublin" };
  const SPECIFIC = { "pack-combo": "Complete the sentences with the words in brackets: add the correct preposition and use the right form of the second word." };
  BATS.forEach(b => { b.typeKey = typeKey(b); b.instr = SPECIFIC[b.id] || INSTR[b.typeKey]; });
  // numbered in the order in which the batteries are listed (by level)
  EX.numberAll([1, 2, 3].flatMap(l => BATS.filter(b => b.belt === l)), b => TEXT_TITLE[b.id] ? null : TOPIC[TOPIC_OF[b.id] || "mixed"], (b, t) => { b.title = t; });
  BATS.forEach(b => { if (TEXT_TITLE[b.id]) b.title = TEXT_TITLE[b.id]; });
  const beltChip = l => B.chip(l, B.get(l).name);
  const hl = s => esc(s).replace(/\[([^\]]+)\]/g, "<b class=\"pp\">$1</b>");
  const plain = s => s.replace(/[\[\]]/g, "");
  const nItems = b => b.items ? b.items.length : b.gaps ? b.gaps.length : b.left.length;

  /* ---------------- answer checking ---------------- */
  function variants(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, "\"").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/n't\b/g, " not")
      .replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
    let out = [s];
    if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
    if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
    return out.map(x => x.replace(/\s+/g, " ").trim());
  }
  const accepts = (list, given) => { if (!String(given || "").trim()) return false; const g = variants(given); return list.some(a => variants(a).some(v => g.includes(v))); };
  // whole sentences: punctuation and dashes are ignored
  const sentNorm = x => variants(String(x || "").replace(/[.,!?;:–—"“”]/g, " ").replace(/\s-\s/g, " "));
  const sameSentence = (list, given) => { if (!String(given || "").trim()) return false; const g = sentNorm(given); return list.some(a => sentNorm(a).some(v => g.includes(v))); };
  const containsAny = (list, given) => { const g = " " + sentNorm(given)[0] + " "; return list.some(a => g.includes(" " + sentNorm(a)[0] + " ")); };

  /* ---------------- router ---------------- */
  $("#tabs").innerHTML = [["home", "Overview"], ["reference", "Reference"], ["practice", "Practice"]].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
  const view = () => $("#view");
  let cur = null;
  function route() {
    const h = location.hash.replace(/^#\/?/, "") || "home";
    const bat = h.startsWith("b-") ? byId[h.slice(2)] : null;
    const tab = bat ? "practice" : ["reference", "practice"].includes(h) ? h : "home";
    $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.Dojo.toView();
    cur = null;
    if (bat) return renderBattery(bat);
    if (tab === "reference") return renderReference();
    if (tab === "practice") return renderPractice();
    renderHome();
  }
  window.addEventListener("hashchange", route);

  /* ---------------- OVERVIEW ---------------- */
  function renderHome() {
    const total = CATS.reduce((s, [k]) => s + REF[k].length, 0);
    view().innerHTML = `
      <div class="vhead"><p>Some verbs, adjectives and nouns are always followed by the same preposition: <i>depend <b class="pp">on</b></i>, <i>interested <b class="pp">in</b></i>, <i>reason <b class="pp">for</b></i>. Learn them in context, then test yourself.</p></div>
      <div class="dp-grid">
        <a class="card card-link dp-card" href="#reference"><span class="dp-ic">${ICON.book}</span><h3>Reference</h3><p>${total} expressions with examples and Italian translations, grouped by category and level.</p>
          <div class="dp-cats">${CATS.map(([k, l]) => `<span>${l.split(" ")[0]} <b>${REF[k].length}</b></span>`).join("")}</div></a>
        <a class="card card-link dp-card" href="#practice"><span class="dp-ic">${ICON.target}</span><h3>Practice</h3><p>${BATS.length} test batteries of 10–15 questions: multiple choice, gap filling, error correction, transformations and more.</p>
          <div class="dp-cats">${BELTS.map(l => `<span><i style="background:${B.get(l).color}"></i>${B.get(l).short} <b>${BATS.filter(b => b.belt === l).length}</b></span>`).join("")}</div></a>
      </div>
      <div class="card dp-levels"><h3>Levels</h3><div class="dp-lv">${BELTS.map(l => `<div><i style="background:${B.get(l).color}"></i><b>${B.get(l).name}</b><span>${["Fundamental, very frequent combinations", "Intermediate combinations", "More complex expressions, B1–B2"][l - 1]}</span></div>`).join("")}</div></div>`;
  }

  /* ---------------- REFERENCE ---------------- */
  const rf = { cat: "verbs", belt: "all", q: "" };
  function renderReference() {
    view().innerHTML = `<div class="vhead"><h2>Reference</h2><p>Tap an expression to see an example and its translation.</p></div>
      <div class="ref-tools">
        <label class="search">${ICON.search}<input id="rq" type="search" placeholder="Search in English or Italian" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Search expressions"></label>
        <div class="seg" id="rcat" role="group" aria-label="Category"></div>
        <div class="seg" id="rbelt" role="group" aria-label="Level"></div>
      </div>
      <div id="rcount" class="rcount"></div><div id="rlist" class="ref-list"></div>
      <p class="ref-cta"><a class="btn ink" href="#practice">Practise these expressions ${ICON.arrow}</a></p>`;
    const inp = $("#rq"); inp.value = rf.q;
    inp.addEventListener("input", () => { rf.q = inp.value; drawRef(); });
    $("#rcat").addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (b) { rf.cat = b.dataset.cat; drawRef(); } });
    $("#rbelt").addEventListener("click", e => { const b = e.target.closest("[data-belt]"); if (b) { rf.belt = b.dataset.belt; drawRef(); } });
    drawRef();
  }
  function drawRef() {
    const q = rf.q.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    $("#rcat").innerHTML = [...CATS, ["all", "All"]].map(([k, l]) => `<button type="button" data-cat="${k}" class="${rf.cat === k ? "on" : ""}">${k === "all" ? l : l.split(" ")[0]}</button>`).join("");
    $("#rbelt").innerHTML = [["all", "All levels"], ...BELTS.map(l => [String(l), B.get(l).short])].map(([k, l]) => `<button type="button" data-belt="${k}" class="${rf.belt === k ? "on" : ""}">${k !== "all" ? `<i class="bdot" style="background:${B.get(+k).color}"></i>` : ""}${l}</button>`).join("");
    const cats = rf.cat === "all" || q ? CATS : CATS.filter(c => c[0] === rf.cat);
    let n = 0;
    $("#rlist").innerHTML = cats.map(([k, label]) => {
      const rows = REF[k].filter(r => (rf.belt === "all" || r[4] === +rf.belt) && (!q || plain(r.slice(0, 4).join(" ") + " " + (r[5] || "")).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").includes(q)))
        .sort((a, b) => plain(a[0]).localeCompare(plain(b[0]), "en"));
      n += rows.length;
      if (!rows.length) return "";
      return `<section class="ref-cat"><h3>${label}</h3>${rows.map(([ex, it, en, enIt, belt, note]) => `
        <details class="ref-item">
          <summary><span class="re" translate="no">${hl(ex)}</span><span class="rm" lang="it" translate="no">${esc(it)}</span><i class="bdot" style="background:${B.get(belt).color}" title="${B.get(belt).name}"></i></summary>
          <div class="ref-body"><p class="rex" translate="no">${esc(en)}</p><p class="rit" lang="it" translate="no">${esc(enIt)}</p>${note ? `<p class="rnote" lang="it" translate="no">${esc(note)}</p>` : ""}</div>
        </details>`).join("")}</section>`;
    }).join("") || `<div class="card empty"><h3>No expressions found</h3>Try a different word.</div>`;
    $("#rcount").textContent = `${n} expressions`;
  }

  /* ---------------- PRACTICE list ---------------- */
  const pf = { belt: "all", type: "all" };
  function renderPractice() {
    view().innerHTML = `<div class="vhead"><h2>Practice</h2><p>Choose a level and a type of test. Each battery has 10–15 questions; the answers appear only after you check.</p></div>
      <div class="pr-tools"><div class="seg" id="pbelt" role="group" aria-label="Level"></div><div class="seg types" id="ptype" role="group" aria-label="Type"></div></div>
      <div id="plist"></div>`;
    $("#pbelt").addEventListener("click", e => { const b = e.target.closest("[data-belt]"); if (b) { pf.belt = b.dataset.belt; drawPractice(); } });
    $("#ptype").addEventListener("click", e => { const b = e.target.closest("[data-type]"); if (b) { pf.type = b.dataset.type; drawPractice(); } });
    drawPractice();
  }
  function drawPractice() {
    const used = TYPE_ORDER.filter(k => BATS.some(b => b.typeKey === k));
    $("#pbelt").innerHTML = [["all", "All levels"], ...BELTS.map(l => [String(l), B.get(l).short])].map(([k, l]) => `<button type="button" data-belt="${k}" class="${pf.belt === k ? "on" : ""}">${k !== "all" ? `<i class="bdot" style="background:${B.get(+k).color}"></i>` : ""}${l}</button>`).join("");
    $("#ptype").innerHTML = [["all", "All types"], ...used.map(k => [k, EX.TYPE[k]])].map(([k, l]) => `<button type="button" data-type="${k}" class="${pf.type === k ? "on" : ""}">${l}</button>`).join("");
    const list = BATS.filter(b => (pf.belt === "all" || b.belt === +pf.belt) && (pf.type === "all" || b.typeKey === pf.type));
    $("#plist").innerHTML = BELTS.filter(l => list.some(b => b.belt === l)).map(l => `<div class="lv-head">${beltChip(l)}</div>
      <div class="bat-grid">${list.filter(b => b.belt === l).map(b => `<a class="card card-link bat-card" href="#b-${b.id}">
        <span class="bt-type">${EX.TYPE[b.typeKey]}</span><h4>${esc(b.title)}</h4><p>${b.instr}</p>
        <div class="bt-meta"><span>${nItems(b)} questions</span><span>${b.source === "pack" ? "Exercise pack" : "Language Dojo"}</span></div></a>`).join("")}</div>`).join("")
      || `<div class="card empty"><h3>No tests with these settings</h3>Choose another level or type.</div>`;
  }

  /* ---------------- BATTERY ---------------- */
  function renderBattery(b) {
    cur = { b, checked: false };
    view().innerHTML = `<a class="back" href="#practice">${ICON.back} Practice</a>
      <div class="bt-head"><div class="bt-chips">${beltChip(b.belt)}<span class="bt-type">${EX.TYPE[b.typeKey]}</span><span class="bt-n">${nItems(b)} questions</span></div>
        <h2>${esc(b.title)}</h2><p class="bt-goal">${b.instr}</p></div>
      <div id="btBody"></div><div class="bt-foot" id="btFoot"></div><div id="btResult" aria-live="polite"></div>`;
    ({ mc: buildMC, gap: buildGap, correct: buildCorrect, transform: buildTransform, translate: buildTranslate, text: buildText, halves: buildHalves })[b.type](b, $("#btBody"));
    drawFoot();
  }
  function drawFoot() {
    $("#btFoot").innerHTML = cur.checked
      ? `<button class="btn ink" type="button" data-act="retry">${ICON.restart} Try again</button><a class="btn soft" href="#practice">Choose another test</a>`
      : `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check answers</button>`;
  }
  const fb = (ok, answer, why) => `<div class="fbk ${ok ? "good" : "bad"}"><b>${ok ? "Correct." : "Not quite."}</b>${answer ? ` <span class="ans" translate="no">${answer}</span>` : ""}${why ? ` <span class="why" translate="no">${esc(why)}</span>` : ""}</div>`;
  function showResult(ok, n) {
    const pct = Math.round(ok / n * 100);
    $("#btResult").innerHTML = `<div class="card bt-result"><div class="score">${ok}<span> / ${n}</span></div><p><b>${pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training."}</b> <span>Read the corrections, then try again or choose another test.</span></p>
      <div class="bar"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div></div>`;
    $("#btResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function incomplete() { if (cur.warned) return false; cur.warned = true; toast("Some answers are missing. Press Check answers again to check anyway."); return true; }
  const input = (attrs, size) => `<input type="text" ${attrs} size="${size}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">`;
  const qn = i => `<span class="qn">${i + 1}</span>`;

  function buildMC(b, box) {
    const orders = b.items.map(it => b.source === "pack" ? it[1].map((_, j) => j) : shuffle(it[1].map((_, j) => j)));
    box.innerHTML = `<ol class="qlist">${b.items.map(([s, opts], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s).replace("___", '<span class="blank">…</span>')}</p>
      <div class="opts-row" translate="no">${orders[i].map((j, pos) => `<button type="button" class="ob" data-o="${j}"><span class="k">${"abcd"[pos]}</span>${esc(opts[j])}</button>`).join("")}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    const sel = {};
    box.addEventListener("click", e => { const o = e.target.closest(".ob"); if (!o || cur.checked) return; const li = o.closest(".qi"); sel[li.dataset.q] = +o.dataset.o; $$(".ob", li).forEach(x => x.classList.toggle("on", x === o)); });
    cur.check = () => {
      if (Object.keys(sel).length < b.items.length && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, opts, ans, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
        $$(".ob", li).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
        $(".fbx", li).innerHTML = fb(good, good ? "" : esc(s).replace("___", `<b>${esc(opts[ans])}</b>`), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }

  function buildGap(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([s, gaps], i) => { let k = 0; return `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s).replace(/___/g, () => { const g = gaps[k]; return input(`data-g="${k++}" aria-label="Answer ${i + 1}"`, Math.max(5, Math.max(...g.map(a => a.length)) + 1)); })}</p><div class="fbx"></div></li>`; }).join("")}</ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, gaps, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), ins = $$("input", li);
        const res = ins.map((x, k) => accepts(gaps[k], x.value)); const good = res.every(Boolean); if (good) ok++;
        ins.forEach((x, k) => { x.disabled = true; x.classList.add(res[k] ? "right" : "wrong"); });
        let k = 0; $(".fbx", li).innerHTML = fb(good, good ? "" : esc(s).replace(/___/g, () => `<b>${esc(gaps[k++][0])}</b>`), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }

  function buildCorrect(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([s], i) => `<li class="qi" data-q="${i}"><p class="qs wrongs" translate="no">${qn(i)}${esc(s)}</p><div class="row-in">${input(`class="sent" data-q="${i}" aria-label="Correct sentence ${i + 1}" placeholder="Write the correct sentence"`, 40)}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    $$("input.sent", box).forEach(x => x.addEventListener("focus", () => { if (!x.value && !cur.checked) { x.value = b.items[+x.dataset.q][0]; } }, { once: true }));
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim() || x.value === b.items[+x.dataset.q][0]) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([s, acc, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li), good = sameSentence(acc, x.value); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, good ? "" : esc(acc[0]), why);
      });
      showResult(ok, b.items.length); return true;
    };
  }

  function buildTransform(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([first, key, start, end, acc], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(first)}</p><p class="tkey" translate="no">${esc(key)}</p>
      <p class="t2" translate="no">${esc(start)} ${input(`data-q="${i}" aria-label="Answer ${i + 1}"`, Math.max(14, Math.max(...acc.map(a => a.length)) + 2))} ${esc(end)}</p><div class="fbx"></div></li>`).join("")}</ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([first, key, start, end, acc, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li);
        const good = accepts(acc, x.value) && sentNorm(x.value)[0].split(" ").some(w => w.replace(/[^a-z]/g, "") === key.toLowerCase()); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = fb(good, good ? "" : `${esc(start)} <b>${esc(acc[0])}</b> ${esc(end)}`, why);
      });
      showResult(ok, b.items.length); return true;
    };
  }

  function buildTranslate(b, box) {
    box.innerHTML = `<ol class="qlist">${b.items.map(([it, hint], i) => `<li class="qi" data-q="${i}"><p class="qs" lang="it" translate="no">${qn(i)}${esc(it)} <span class="hint">(${esc(hint)})</span></p><div class="row-in">${input(`class="sent" data-q="${i}" aria-label="Translation ${i + 1}" placeholder="Write in English"`, 40)}</div><div class="fbx"></div></li>`).join("")}</ol>`;
    cur.check = () => {
      if ($$("input", box).some(x => !x.value.trim()) && incomplete()) return false;
      let ok = 0;
      b.items.forEach(([it, hint, req, model, why], i) => {
        const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li), good = !!x.value.trim() && containsAny(req, x.value); if (good) ok++;
        x.disabled = true; x.classList.add(good ? "right" : "wrong");
        $(".fbx", li).innerHTML = `<div class="fbk ${good ? "good" : "bad"}"><b>${good ? "You used the right expression." : "Check the expression."}</b> <span class="why" translate="no">${esc(why)}</span><div class="model"><span>Model answer:</span> <span translate="no">${esc(model)}</span></div><p class="selfcheck">Compare the rest of your sentence with the model: other translations can be correct too.</p></div>`;
      });
      showResult(ok, b.items.length); return true;
    };
  }

  function buildText(b, box) {
    const sizeOf = n => Math.max(5, Math.max(...b.gaps[n - 1][0].map(a => a.length)) + 1);
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
        $(".fbx", li).innerHTML = fb(good, good ? "" : `${esc(s)} <b>${esc(b.right[L.indexOf(b.answers[i])])}</b>`, b.why ? b.why[i] : "");
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
  view().addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches("input") && !cur?.checked) { e.preventDefault(); const ins = $$("#btBody input:not([disabled])"); const i = ins.indexOf(e.target); if (ins[i + 1]) ins[i + 1].focus(); } });

  route();
  window.__depprep = { variants, accepts, sameSentence, containsAny, BATS, REF }; // used by automated tests
})();
