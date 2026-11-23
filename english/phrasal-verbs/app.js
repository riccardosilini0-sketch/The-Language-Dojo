/* =====================================================================
   Language Dojo · English Phrasal Verbs
   Sections: Overview, Phrasal Verb List, Flashcards, Practice and Progress.
   Data: phrasal-data.js. Built on the same pattern as english/irregular-verbs/app.js
   (belt selector: all belts, up to a belt, only one belt; the choice is kept in the address).
   Nothing is saved: every visit starts fresh (progress lasts for the current visit only).
   ===================================================================== */
(function () {
  "use strict";
  const { mark, toast, dialog } = window.Dojo;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = window.Dojo.esc;
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").replace(/[.!?]+$/, "").trim();
  const deaccent = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  const TYPE = { s: "Separable", i: "Not separable", n: "No object" };
  const TYPE_HELP = { s: "The object can go between the verb and the particle; a pronoun must go between them: turn it off.", i: "The object always comes after the particle: look after her.", n: "No object: the verb and the particle stay together." };

  const PV = (window.PHRASAL_DATA || []).map((r, i) => {
    const x = r[2] || {}, w = r[0].split(" ");
    const v = { id: i, pv: r[0], verb: w[0], particle: w.slice(1).join(" "), it: r[1], belt: x.b || 1, t: x.t || "n", ex: x.ex || [] };
    v.meanings = r[1].split(/[;,]/).map(s => norm(s)).filter(Boolean);
    return v;
  });
  const PARTICLES = [...new Set(PV.map(v => v.particle))];
  const tr = s => (window.Dojo.t ? window.Dojo.t(s) : s) || s;
  const ptype = t => `<span class="ptype ${t}" title="${esc(tr(TYPE_HELP[t]))}">${esc(tr(TYPE[t]))}</span>`;

  /* ---------- levels: belts from White (1) to Black (6) ---------- */
  const BL = window.DojoBelts, BELTS = [1, 2, 3, 4, 5, 6].filter(b => PV.some(v => v.belt === b));
  const LV = { b: 0, only: false };
  (() => { const q = new URLSearchParams(location.search), b = +q.get("belt"); if (BELTS.includes(b)) { LV.b = b; LV.only = q.get("only") === "1"; } })();
  const inLevel = v => !LV.b || (LV.only ? v.belt === LV.b : v.belt <= LV.b);
  const POOL = () => PV.filter(inLevel);
  const byBelt = b => PV.filter(v => v.belt === b);
  const CEFR = { 1: "A1–A2", 2: "A2", 3: "B1", 4: "B1–B2", 5: "B2–C1", 6: "C1–C2" };
  const levelName = () => !LV.b ? "All phrasal verbs" : LV.only || LV.b === 1 ? BL.get(LV.b).name : `White to ${BL.get(LV.b).short} belt`;
  function setLevel(b, only) {
    LV.b = b; LV.only = !!only && b > 0;
    const q = new URLSearchParams(location.search); q.delete("belt"); q.delete("only");
    if (LV.b) { q.set("belt", LV.b); if (LV.only) q.set("only", "1"); }
    const qs = q.toString(); history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
    fc.order = []; fc.done = false;
    if (current && views[current]) views[current].show();
  }
  const bdot = b => `<i class="bdot" style="background:${BL.get(b).color}" title="${BL.get(b).name}"></i>`;
  function levelBar() {
    const n = POOL().length;
    return `<div class="lvbar card">
      <div class="lv-h"><b>Level</b><span>Study the phrasal verbs belt by belt: each belt adds new ones, from the most common to the most idiomatic.</span></div>
      <div class="lv-belts" role="group" aria-label="Level">
        <button type="button" data-lv="0" class="${!LV.b ? "on" : ""}">All <small>${PV.length}</small></button>
        ${BELTS.map(b => `<button type="button" data-lv="${b}" class="${LV.b === b ? "on" : ""}">${bdot(b)}${BL.get(b).short} <small>${byBelt(b).length}</small></button>`).join("")}
      </div>
      ${LV.b > 1 ? `<div class="lv-mode seg" role="group" aria-label="Which phrasal verbs"><button type="button" data-lvonly="0" class="${!LV.only ? "on" : ""}">Up to this belt</button><button type="button" data-lvonly="1" class="${LV.only ? "on" : ""}">Only this belt</button></div>` : ""}
      <p class="lv-note"><b>${levelName()}</b>${LV.b ? ` · ${LV.only || LV.b === 1 ? CEFR[LV.b] : "A1–" + CEFR[LV.b].split("–").pop()}` : ""} · ${n} phrasal verb${n === 1 ? "" : "s"}${LV.b > 1 && !LV.only ? ` (${BELTS.filter(b => b <= LV.b).map(b => BL.get(b).short).join(" + ")})` : ""}</p>
    </div>`;
  }
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-lv]"), o = e.target.closest("[data-lvonly]");
    if (a) { e.preventDefault(); setLevel(+a.dataset.lv, a.dataset.only !== undefined ? a.dataset.only === "1" : LV.only); if (a.dataset.goto) go(a.dataset.goto); }
    else if (o) { e.preventDefault(); setLevel(LV.b, o.dataset.lvonly === "1"); }
  });
  // example sentences: the phrasal verb is written in [square brackets]
  const exHTML = (en, it) => `<span class="exs-en">${esc(en).replace(/\[([^\]]+)\]/g, "<b>$1</b>")}</span>${it ? `<span class="exs-it">${esc(it)}</span>` : ""}`;
  const examples = (v, cls = "") => v.ex.length ? `<ul class="exs ${cls}">${v.ex.map(([en, it]) => `<li>${exHTML(en, it)}</li>`).join("")}</ul>` : "";
  const plainEx = en => en.replace(/[[\]]/g, "");
  // examples with one bracketed part (verb and particle together) can be used for the particle and context exercises
  const oneBlock = v => v.ex.map((e, k) => [e, k]).filter(([e]) => (e[0].match(/\[/g) || []).length === 1);

  /* ---------- icons ---------- */
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    sound: I('<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'),
    overview: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
    list: I('<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),
    cards: I('<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V16"/>'),
    practice: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>'),
    shuffle: I('<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>'),
    left: I('<path d="m15 18-6-6 6-6"/>'), right: I('<path d="m9 18 6-6-6-6"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    pen: I('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/>'),
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>')
  };

  /* ---------- progress for this visit ---------- */
  const MASTER = 3; // correct answers in a row to move a tricky phrasal verb to "learnt"
  const Store = {
    data: null,
    fresh() { return { v: {}, quiz: { answered: 0, correct: 0, history: [] }, len: 10 }; },
    load() { this.data = this.fresh(); }, save() {}, reset() { this.data = this.fresh(); }
  };
  const rec = v => Store.data.v[v.id] || (Store.data.v[v.id] = { s: "", c: 0, w: 0, st: 0, t: 0 });
  const statusOf = v => (Store.data.v[v.id] || {}).s || "";
  const tricky = () => PV.filter(v => statusOf(v) === "practise");
  const learnt = () => PV.filter(v => statusOf(v) === "known");
  function setStatus(v, s) { const r = rec(v); r.s = s; r.st = 0; r.t = Date.now(); refreshCount(); }
  function recordAnswer(v, ok) {
    const r = rec(v); r.t = Date.now();
    if (ok) { r.c++; r.st++; if (r.s === "practise" && r.st >= MASTER) { r.s = "known"; toast(`“${v.pv}” moved to your learnt phrasal verbs`); } }
    else { r.w++; r.st = 0; r.s = "practise"; }
    refreshCount();
  }

  /* ---------- pronunciation: the browser voice (British English) ---------- */
  let playingBtn = null;
  function stopAudio() { if (window.speechSynthesis) speechSynthesis.cancel(); if (playingBtn) playingBtn.classList.remove("playing"); playingBtn = null; }
  function say(text, btn) {
    stopAudio(); if (!window.speechSynthesis) { toast("Audio is not available in this browser."); return; }
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-GB"; u.rate = .9;
    if (btn) { btn.classList.add("playing"); playingBtn = btn; }
    u.onend = u.onerror = () => { if (btn) btn.classList.remove("playing"); playingBtn = null; };
    speechSynthesis.speak(u);
  }
  const spk = (text, cls = "") => `<button type="button" class="spk ${cls}" data-say="${esc(text)}" aria-label="Listen: ${esc(text)}" title="Listen">${ICON.sound}</button>`;
  document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (!b) return; e.preventDefault(); e.stopPropagation(); say(b.dataset.say, b); }, true);

  /* ---------- router (#overview, #list, #cards, #practice, #progress) ---------- */
  const TABS = [["overview", "Overview", ICON.overview], ["list", "Phrasal Verb List", ICON.list], ["cards", "Flashcards", ICON.cards], ["practice", "Practice and Progress", ICON.practice]];
  $("#tabs").innerHTML = TABS.map(([k, l, ic]) => `<a class="tab" href="#${k}" data-tab="${k}">${ic}${l}${k === "practice" ? '<span class="n" id="trickyN"></span>' : ""}</a>`).join("");
  function refreshCount() { const n = tricky().length; const el = $("#trickyN"); if (el) { el.textContent = n ? String(n) : ""; el.title = n ? `${n} tricky phrasal verbs` : ""; } }
  const views = {}; let current = null, pending = null;
  function go(name, params) { pending = params || null; if (location.hash === "#" + name) route(); else location.hash = name; }
  function route() {
    let name = location.hash.replace(/^#\/?/, "").split(/[?&]/)[0];
    const toProgress = name === "progress"; if (toProgress) name = "practice";
    if (!views[name]) name = "overview";
    stopAudio();
    $$(".view").forEach(s => s.hidden = s.id !== "view-" + name);
    $$(".tab").forEach(a => { const on = a.dataset.tab === name; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); if (on) a.scrollIntoView({ block: "nearest", inline: "nearest" }); });
    const prev = current; current = name;
    const v = views[name]; if (v.init && !v.ready) { v.init(); v.ready = true; }
    const p = pending; pending = null; v.show(p);
    if (toProgress) { const pb = $("#progressBox"); if (pb) setTimeout(() => pb.scrollIntoView({ block: "start" }), 50); }
    if (prev && prev !== name) window.Dojo.toView();
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("click", e => { const a = e.target.closest("[data-go]"); if (!a) return; e.preventDefault(); go(a.dataset.go, a.dataset.params ? JSON.parse(a.dataset.params) : null); });

  /* ================= OVERVIEW ================= */
  views.overview = {
    show() {
      const n = learnt().length, t = tricky().length;
      const day = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
      const v = PV[(day * 37) % PV.length];
      const steps = [["list", ICON.list, "Phrasal Verb List", `All ${PV.length} phrasal verbs with examples`], ["cards", ICON.cards, "Flashcards", "English → Italian and Italian → English"], ["practice", ICON.practice, "Practice and Progress", "Six exercise types"]];
      $("#view-overview").innerHTML = `
        <div class="ov">
          <div class="card steps">${steps.map(s => `<a class="step" href="#${s[0]}"><span class="num">${s[1]}</span><div><h3>${s[2]}</h3><p>${s[3]}</p></div><span class="go">${ICON.arrow}</span></a>`).join("")}</div>
          <div class="side">
            <a class="card rank" href="#progress" style="text-decoration:none">
              <div><small>Your progress</small><h3>${n} of ${PV.length} phrasal verbs learnt</h3></div>
              ${t ? `<p>${t} to review</p>` : ""}
              <div class="bar"><span style="width:${n / PV.length * 100}%;background:var(--ok)"></span><span style="width:${t / PV.length * 100}%;background:var(--kincha)"></span></div>
            </a>
            <div class="card votd"><small>Phrasal verb of the day</small><div class="forms">${esc(v.pv)} ${spk(v.pv)}</div><div class="m">${esc(v.it)}</div>${v.ex[0] ? `<div class="votd-ex">${exHTML(v.ex[0][0])}</div>` : ""}</div>
          </div>
        </div>
        <div class="card how">
          <h2>How phrasal verbs work</h2>
          <p>A phrasal verb is a verb + one or two particles (up, off, out, after, forward to…). Together they have a new meaning, often impossible to guess from the single words: give up = smettere, look after = prendersi cura di. The position of the object depends on the type of phrasal verb.</p>
          <div class="how-grid">
            <div>${ptype("s")}<h3>Separable</h3><p>A noun can go after the particle or between verb and particle. A pronoun must go between them.</p>
              <div class="eg" translate="no">Turn <b>off</b> the light. · Turn the light <b>off</b>.<br>Turn <b>it</b> off. · <s>Turn off it.</s></div></div>
            <div>${ptype("i")}<h3>Not separable</h3><p>The object always comes after the particle, also when it is a pronoun.</p>
              <div class="eg" translate="no">Look <b>after</b> the baby. · Look after <b>her</b>.<br><s>Look her after.</s></div></div>
            <div>${ptype("n")}<h3>No object</h3><p>The verb has no object: verb and particle stay together.</p>
              <div class="eg" translate="no">I <b>get up</b> at seven. · The car <b>broke down</b>.</div></div>
          </div>
          <p class="how-note">Phrasal verbs with two particles (look forward to, put up with, run out of) are never separated. After a preposition the verb takes -ing: I'm looking forward to seeing you.</p>
        </div>
        <div class="vhead" style="margin-top:40px"><h2>Study belt by belt</h2><p>The ${PV.length} phrasal verbs are divided into six belts, from the most common, used every day (White), to the most idiomatic (Black). Start with the White belt, then add one belt at a time.</p></div>
        <div class="belt-grid">${BELTS.map(b => { const L = byBelt(b), k = L.filter(x => statusOf(x) === "known").length, cum = PV.filter(x => x.belt <= b).length;
          return `<button type="button" class="card belt-card" data-lv="${b}" data-only="0" data-goto="list" style="--bc:${BL.get(b).stroke || BL.get(b).color}">
            <span class="bc-top">${bdot(b)}<b>${BL.get(b).name}</b><span class="bc-n">${L.length} · ${CEFR[b]}</span></span>
            <span class="bc-ex">${L.slice(0, 6).map(x => esc(x.pv)).join(", ")}…</span>
            <span class="bc-f">${b > 1 ? `With the previous belts: ${cum} phrasal verbs` : "The starting point"}${k ? ` · ${k} learnt` : ""}</span></button>`; }).join("")}</div>`;
    }
  };

  /* ================= LIST ================= */
  const vl = { q: "", filter: "all", key: "belt", dir: 1, ex: false, open: new Set() };
  views.list = {
    init() {
      const root = $("#view-list");
      root.innerHTML = `
        <div class="vhead"><h2>Phrasal Verb List</h2></div>
        <div id="lvList"></div>
        <div class="tools">
          <label class="search">${ICON.search}<input id="vq" type="search" placeholder="Search in English or Italian" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Search phrasal verbs"></label>
          <div class="seg" id="vf" role="group" aria-label="Show"></div>
          <label class="sort-m"><span class="sr-only">Sort</span><select id="vsort" class="sortsel" aria-label="Sort phrasal verbs">
            <option value="belt:1">Level: White → Black</option><option value="pv:1">Phrasal verb A–Z</option><option value="pv:-1">Phrasal verb Z–A</option><option value="particle:1">Particle A–Z</option><option value="it:1">Italian A–Z</option></select></label>
        </div>
        <div class="count-row"><div class="count" id="vcount"></div><label class="exs-tg"><input type="checkbox" id="vex"> Show the example sentences</label></div>
        <div class="card" style="overflow:hidden"><table class="vtable"><thead><tr>
          <th data-k="pv"><button type="button">Phrasal verb <span class="ar"></span></button></th>
          <th data-k="t"><button type="button">Type <span class="ar"></span></button></th>
          <th data-k="it"><button type="button">Italian <span class="ar"></span></button></th>
        </tr></thead><tbody id="vbody"></tbody></table></div>`;
      $("#vq").addEventListener("input", e => { vl.q = e.target.value; this.render(); });
      $("#vsort").addEventListener("change", e => { const [k, d] = e.target.value.split(":"); vl.key = k; vl.dir = +d; this.render(); });
      $("#vf").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { vl.filter = b.dataset.f; this.render(); } });
      $("#vex").addEventListener("change", e => { vl.ex = e.target.checked; vl.open = new Set(); this.render(); });
      $("#vbody").addEventListener("click", e => { const b = e.target.closest("[data-exv]"); if (!b) return; const id = +b.dataset.exv; vl.open.has(id) ? vl.open.delete(id) : vl.open.add(id); this.render(); });
      $$(".vtable th button", root).forEach(b => b.addEventListener("click", () => { const k = b.parentElement.dataset.k; if (vl.key === k) vl.dir *= -1; else { vl.key = k; vl.dir = 1; } this.render(); }));
    },
    show() { this.render(); },
    render() {
      $("#lvList").innerHTML = levelBar();
      $("#vf").innerHTML = [["all", "All"], ["known", `Learnt (${learnt().length})`], ["practise", `To review (${tricky().length})`]].map(([k, l]) => `<button type="button" data-f="${k}" class="${vl.filter === k ? "on" : ""}">${l}</button>`).join("");
      const q = deaccent(norm(vl.q));
      const val = (v, k) => k === "belt" ? String(v.belt) : k === "t" ? TYPE[v.t] : String(v[k]);
      const pool = POOL();
      const rows = pool.filter(v => (vl.filter === "all" || statusOf(v) === vl.filter) && (!q || deaccent(norm(v.pv + " " + v.it)).includes(q)))
        .sort((a, b) => val(a, vl.key).localeCompare(val(b, vl.key), "en") * vl.dir || a.pv.localeCompare(b.pv));
      $$(".vtable th").forEach(th => { const on = th.dataset.k === vl.key; th.querySelector(".ar").textContent = on ? (vl.dir === 1 ? "A–Z" : "Z–A") : ""; th.setAttribute("aria-sort", on ? (vl.dir === 1 ? "ascending" : "descending") : "none"); });
      const vs = $("#vsort"); if (vs) { const v = `${vl.key}:${vl.dir}`; if ([...vs.options].some(o => o.value === v)) vs.value = v; }
      $("#vcount").textContent = rows.length === pool.length ? `${pool.length} phrasal verbs` : `${rows.length} of ${pool.length} phrasal verbs`;
      const open = v => vl.ex || vl.open.has(v.id);
      $("#vbody").innerHTML = rows.length ? rows.map(v => `<tr class="${open(v) ? "has-ex" : ""}">
          <td class="c-base" data-label="Phrasal verb"><div class="vcell"><span class="sdot ${statusOf(v)}" title="${statusOf(v) === "known" ? "Learnt" : statusOf(v) === "practise" ? "To review" : ""}"></span>${bdot(v.belt)}<span class="w">${esc(v.pv)}</span>${spk(v.pv, "sm")}</div></td>
          <td class="c-past" data-label="Type">${ptype(v.t)}</td>
          <td class="c-it" data-label="Italian"><div class="it-cell"><span>${esc(v.it)}</span>${v.ex.length && !vl.ex ? `<button type="button" class="exv ${open(v) ? "on" : ""}" data-exv="${v.id}" aria-expanded="${open(v)}">${window.Dojo.t("Examples")}</button>` : ""}</div></td></tr>
          ${open(v) ? `<tr class="ex-row"><td colspan="3">${examples(v)}</td></tr>` : ""}`).join("")
        : `<tr><td colspan="3"><div class="empty"><h3>No phrasal verbs found</h3>Try a different word.</div></td></tr>`;
    }
  };

  /* ================= FLASHCARDS ================= */
  const fc = { deck: "all", dir: "en", order: [], i: 0, flipped: false, done: false, known: 0, learning: 0 };
  views.cards = {
    init() {
      const root = $("#view-cards");
      root.addEventListener("click", e => {
        const b = e.target.closest("[data-fc]");
        if (b) {
          const a = b.dataset.fc;
          if (a === "flip") this.flip(); else if (a === "prev") this.move(-1); else if (a === "next") this.move(1);
          else if (a === "known" || a === "practise") this.rate(a);
          else if (a === "shuffle") { fc.order = shuffle(fc.order); fc.i = 0; fc.flipped = false; fc.done = false; this.render(); toast("Cards shuffled"); }
          else if (a === "deck") this.build(b.dataset.d);
          else if (a === "dir") { fc.dir = b.dataset.d; fc.flipped = false; this.render(); }
          else if (a === "again") this.build(fc.deck);
          return;
        }
        if (e.target.closest(".flashcard")) this.flip();
      });
      document.addEventListener("keydown", e => {
        if (current !== "cards" || document.querySelector(".modal") || e.target.matches("input")) return;
        if (e.key === " " || e.key === "Enter") { if (e.target.matches("button, a")) return; e.preventDefault(); this.flip(); }
        else if (e.key === "ArrowRight") this.move(1); else if (e.key === "ArrowLeft") this.move(-1);
      });
    },
    show(p) { if (p && p.deck) { this.build(p.deck); return; } if (!fc.order.length && !fc.done) this.build(fc.deck); else this.render(); },
    build(deck) { fc.deck = deck; fc.order = shuffle((deck === "practise" ? tricky() : POOL()).map(v => v.id)); fc.i = 0; fc.flipped = false; fc.done = false; fc.known = 0; fc.learning = 0; this.render(); },
    flip() { if (fc.done || !fc.order.length) return; fc.flipped = !fc.flipped; $(".flashcard").classList.toggle("flipped", fc.flipped); this.actions(); if (!fc.flipped) stopAudio(); },
    move(d) {
      if (!fc.order.length) return;
      if (fc.done) { if (d < 0) { fc.done = false; fc.i = fc.order.length - 1; fc.flipped = false; this.render(); } return; }
      const n = fc.i + d; if (n < 0) return; stopAudio();
      if (n >= fc.order.length) fc.done = true; else { fc.i = n; fc.flipped = false; }
      this.render();
    },
    rate(s) { if (!fc.flipped || fc.done) return; setStatus(PV[fc.order[fc.i]], s); s === "known" ? fc.known++ : fc.learning++; this.move(1); },
    actions() {
      const box = $("#fcActions"); if (!box) return;
      box.className = "fc-actions" + (fc.flipped ? " two" : "");
      box.innerHTML = fc.flipped
        ? `<button class="btn learning" type="button" data-fc="practise">Still learning</button><button class="btn knowit" type="button" data-fc="known">${ICON.check} I know it</button>`
        : `<button class="btn ink" type="button" data-fc="flip">Show answer</button>`;
    },
    render() {
      const root = $("#view-cards"), nt = tricky().length;
      const head = `<div class="vhead" style="text-align:center"><span class="q-kind">${EX.TYPE.flashcards}</span><h2 style="margin-top:8px">Phrasal Verbs</h2><p style="margin:8px auto 0">${fc.dir === "en" ? "Say what each phrasal verb means, then turn the card to check." : "Say the English phrasal verb for each meaning, then turn the card to check."}</p></div>
        ${levelBar()}<div class="fc-head"><div class="seg"><button type="button" data-fc="deck" data-d="all" class="${fc.deck === "all" ? "on" : ""}">${levelName()} (${POOL().length})</button><button type="button" data-fc="deck" data-d="practise" class="${fc.deck === "practise" ? "on" : ""}">Tricky (${nt})</button></div>
        <div class="seg"><button type="button" data-fc="dir" data-d="en" class="${fc.dir === "en" ? "on" : ""}">English → Italian</button><button type="button" data-fc="dir" data-d="it" class="${fc.dir === "it" ? "on" : ""}">Italian → English</button></div>
        <button class="icon-btn" type="button" data-fc="shuffle" title="Shuffle" aria-label="Shuffle cards">${ICON.shuffle}</button></div>`;
      if (!fc.order.length) {
        root.innerHTML = `<div class="fc">${head}<div class="card empty"><h3>No tricky phrasal verbs yet</h3><p>Phrasal verbs you mark as “Still learning” or get wrong in Practice will appear here.</p><div class="actions"><button class="btn ink" type="button" data-fc="deck" data-d="all">Train with all phrasal verbs</button></div></div></div>`;
        return;
      }
      if (fc.done) {
        root.innerHTML = `<div class="fc">${head}<div class="card finish">${mark("mk")}<h3>Session complete</h3><p>You went through ${fc.order.length} card${fc.order.length > 1 ? "s" : ""}.</p>
          <div class="sum"><span style="background:var(--ok-bg);color:var(--ok)">${fc.known} known</span><span style="background:var(--kincha-bg);color:var(--kincha)">${fc.learning} still learning</span></div>
          <div class="actions">${tricky().length ? `<button class="btn primary" type="button" data-fc="deck" data-d="practise">Train tricky phrasal verbs</button>` : ""}<button class="btn" type="button" data-fc="again">${ICON.restart} Start again</button></div></div></div>`;
        return;
      }
      const v = PV[fc.order[fc.i]], s = statusOf(v), n = fc.order.length, en = fc.dir === "en";
      root.innerHTML = `<div class="fc">${head}
        <div class="fc-count"><span>${fc.i + 1} / ${n}</span><div class="bar"><span style="width:${fc.i / n * 100}%;background:var(--shu)"></span></div></div>
        <div class="stage">
          <button class="arrow-btn l" type="button" data-fc="prev" aria-label="Previous card" ${fc.i === 0 ? "disabled" : ""}>${ICON.left}</button>
          <button class="arrow-btn r" type="button" data-fc="next" aria-label="Skip to next card">${ICON.right}</button>
          <div class="flashcard ${fc.flipped ? "flipped" : ""}" role="button" tabindex="0" aria-label="Card: ${esc(en ? v.pv : v.it)}. Tap to flip.">
            <div class="face front">${mark("ring")}
              ${s ? `<span class="pill ${s}">${s === "known" ? "Learnt" : "Tricky"}</span>` : ""}
              <span class="fc-belt">${bdot(v.belt)}${BL.get(v.belt).name}</span>
              ${en ? `<small>Phrasal verb</small><div class="word">${esc(v.pv)}</div>${spk(v.pv, "lg")}` : `<small>Italian</small><div class="word it-word" style="font-size:clamp(24px,4vw,34px)">${esc(v.it)}</div>`}
              <div class="hint">Tap the card to see the answer</div>
            </div>
            <div class="face back">
              <div class="forms"><div class="f"><div><small>Phrasal verb</small><b>${esc(v.pv)}</b></div>${spk(v.pv)}</div></div>
              <div class="m">Italian: ${esc(v.it)}</div>
              <div style="margin-top:8px">${ptype(v.t)}</div>
              ${examples(v, "fc-ex")}
            </div>
          </div>
        </div>
        <div id="fcActions"></div></div>`;
      this.actions();
    }
  };

  /* ================= PRACTICE ================= */
  const EX = window.DojoEx;
  const MODES = {
    mix: { kind: EX.TYPE.mixed, desc: "Answer questions of every type: meanings, particles, sentences and translation.", ex: "All question types" },
    mean: { kind: EX.TYPE.mc, desc: "Choose the Italian meaning of each phrasal verb.", ex: "give up → smettere, rinunciare" },
    pv: { kind: EX.TYPE.mc, desc: "Choose the English phrasal verb for each Italian meaning.", ex: "prendersi cura di → look after" },
    part: { kind: EX.TYPE.mc, desc: "Choose the missing particle in each sentence.", ex: "My dad gave ___ smoking. → up" },
    ctx: { kind: EX.TYPE.gaps, desc: "Complete each sentence with the correct form of the phrasal verb in brackets.", ex: "We ______ (set off) at six in the morning." },
    ita: { kind: EX.TYPE.translation, desc: "Write the English phrasal verb for each Italian meaning.", ex: "sbrigarsi → hurry up" }
  };
  EX.numberAll(Object.values(MODES), () => "Phrasal Verbs", (m, t) => { m.name = t; });
  const sameMeaning = (a, b) => a.it === b.it || a.meanings.some(m => b.meanings.includes(m));
  function meaningOptions(v) {
    const others = shuffle(PV.filter(x => x !== v && !sameMeaning(x, v) && x.pv !== v.pv));
    const near = others.filter(x => x.verb === v.verb || x.particle === v.particle), rest = others.filter(x => !near.includes(x));
    return shuffle([v, ...[...near.slice(0, 2), ...rest].slice(0, 3)]);
  }
  function particleOptions(v) {
    const multi = v.particle.includes(" ");
    const bad = new Set(PV.filter(x => x.verb === v.verb).map(x => x.particle)); // particles that would make another real phrasal verb with this verb
    const pool = shuffle(PARTICLES.filter(p => !bad.has(p) && p.includes(" ") === multi));
    return shuffle([v.particle, ...pool.slice(0, 3)]);
  }
  function makeQ(v, type) {
    const blocks = oneBlock(v);
    if ((type === "part" || type === "ctx") && !blocks.length) type = "mean";
    if (type === "mean" || type === "pv") return { type, v, options: meaningOptions(v) };
    if (type === "part" || type === "ctx") {
      const [[en, it]] = [pick(blocks)[0]];
      const inside = en.match(/\[([^\]]+)\]/)[1];
      if (type === "part") { const verbPart = inside.slice(0, inside.length - v.particle.length).trim(); return { type, v, en, it, inside, verbPart, options: particleOptions(v) }; }
      return { type, v, en, it, inside };
    }
    return { type: "ita", v };
  }
  function buildQs(mode, src, n) {
    if (!src.length) return [];
    const list = [];
    while (list.length < n) for (const v of shuffle(src)) { if (src.length > 1 && list.length && list[list.length - 1] === v) continue; list.push(v); if (list.length >= n) break; }
    return list.map(v => makeQ(v, mode === "mix" ? pick(["mean", "pv", "part", "ctx", "ita"]) : mode));
  }
  const qz = { phase: "menu", mode: "mix", src: "all", ids: null, qs: [], i: 0, score: 0, answered: false, results: [] };
  views.practice = {
    init() {
      const root = $("#view-practice");
      root.addEventListener("click", e => {
        const b = e.target.closest("[data-q]"); if (!b) return;
        const a = b.dataset.q;
        if (a === "start") this.start(b.dataset.mode, qz.src === "practise" && tricky().length ? "practise" : "all");
        else if (a === "len") { Store.data.len = +b.dataset.n; this.render(); }
        else if (a === "src") { qz.src = b.dataset.s; this.render(); }
        else if (a === "opt") this.answerMC(+b.dataset.i);
        else if (a === "check") this.answerWritten(false);
        else if (a === "skip") this.answerWritten(true);
        else if (a === "next") this.next();
        else if (a === "again") this.start(qz.mode, qz.src, qz.ids);
        else if (a === "mistakes") this.start(qz.mode, "ids", [...new Set(qz.results.filter(r => !r.ok).map(r => r.v.id))]);
        else if (a === "menu") { qz.phase = "menu"; if (qz.src === "ids") qz.src = "all"; this.render(); }
      });
      root.addEventListener("keydown", e => {
        if (e.key !== "Enter" || !e.target.matches(".slot input")) return;
        e.preventDefault(); if (qz.answered) { this.next(); return; } this.answerWritten(false);
      });
      document.addEventListener("keydown", e => {
        if (current !== "practice" || qz.phase !== "q" || document.querySelector(".modal")) return;
        const q = qz.qs[qz.i];
        if (!qz.answered && q.options && /^[1-4]$/.test(e.key) && !e.target.matches("input")) this.answerMC(+e.key - 1);
        else if (qz.answered && e.key === "Enter" && !e.target.matches("input,button")) { e.preventDefault(); this.next(); }
      });
    },
    show(p) { if (p && p.mode) { this.start(p.mode, p.src || "all"); return; } this.render(); },
    start(mode, src, ids) {
      qz.mode = mode; qz.src = src; qz.ids = ids || null;
      const pool = src === "ids" ? ids.map(i => PV[i]) : src === "practise" ? tricky() : POOL();
      qz.qs = buildQs(mode, pool, Math.min(Store.data.len, Math.max(pool.length * 2, 5)));
      if (!qz.qs.length) { toast("There are no tricky phrasal verbs to practise yet."); qz.phase = "menu"; qz.src = "all"; this.render(); return; }
      qz.i = 0; qz.score = 0; qz.answered = false; qz.results = []; qz.phase = "q"; this.render();
    },
    next() { if (!qz.answered) return; if (qz.i < qz.qs.length - 1) { qz.i++; qz.answered = false; this.render(); } else this.finish(); },
    finish() { qz.phase = "done"; const h = Store.data.quiz.history; h.unshift({ d: Date.now(), m: qz.mode, s: qz.score, n: qz.qs.length }); Store.data.quiz.history = h.slice(0, 20); this.render(); },
    record(q, ok, given) { qz.answered = true; if (ok) qz.score++; Store.data.quiz.answered++; if (ok) Store.data.quiz.correct++; qz.results.push({ q, ok, v: q.v, given }); recordAnswer(q.v, ok); },
    answerMC(i) {
      if (qz.answered) return; const q = qz.qs[qz.i], c = q.options[i]; if (c === undefined) return;
      const right = q.type === "part" ? q.v.particle : q.v.id, val = o => q.type === "part" ? o : o.id, ok = val(c) === right;
      $$(".opt").forEach((b, j) => { b.disabled = true; if (val(q.options[j]) === right) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); });
      this.record(q, ok, q.type === "part" ? c : q.type === "mean" ? c.it : c.pv); this.feedback(q, ok);
    },
    answerWritten(skip) {
      if (qz.answered) return; const q = qz.qs[qz.i], v = q.v, el = $(".slot input"), given = skip ? "" : el.value;
      let ok, alt = null;
      if (q.type === "ctx") ok = norm(given) === norm(q.inside);
      else {
        const g = norm(given).replace(/^to /, "");
        const hit = PV.find(x => norm(x.pv) === g && (x === v || sameMeaning(x, v)));
        ok = !!hit; if (hit && hit !== v) alt = hit;
      }
      el.disabled = true; el.classList.add(ok ? "right" : "wrong");
      if (!ok) { const d = document.createElement("div"); d.className = "fix"; d.innerHTML = ICON.check + esc(q.type === "ctx" ? q.inside : v.pv); el.after(d); }
      this.record(q, ok, given.trim() || "—"); this.feedback(q, ok, alt);
    },
    feedback(q, ok, alt) {
      const v = q.v;
      const ex = q.en ? `<div class="fb-ex">${exHTML(q.en, q.it)}</div>` : v.ex[0] ? `<div class="fb-ex"><small>In context</small>${exHTML(v.ex[0][0], v.ex[0][1])}</div>` : "";
      $("#qfb").innerHTML = `<div class="fb ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div>
        <h3>${ok ? pick(["Correct.", "Well done.", "Exactly right.", "Correct — keep going."]) : "Not quite. The correct answer is:"}</h3>
        <div class="ans">${esc(v.pv)} = ${esc(v.it)} ${spk(v.pv, "sm")}</div>
        <div style="margin-top:6px">${ptype(v.t)}</div>
        ${ex}
        ${alt ? `<div class="note">“${esc(alt.pv)}” also has this meaning. The phrasal verb we had in mind was “${esc(v.pv)}”.</div>` : ""}</div></div>`;
      $("#qfoot").innerHTML = `<button class="btn soft sm" type="button" data-q="menu">Quit</button><button class="btn ink lg" type="button" data-q="next">${qz.i < qz.qs.length - 1 ? "Next question" : "See results"} ${ICON.arrow}</button>`;
      $("#qscore").textContent = qz.score;
      $('[data-q="next"]').focus({ preventScroll: true });
    },
    render() {
      const root = $("#view-practice");
      if (qz.phase !== "menu") window.Dojo.toView();
      if (qz.phase === "menu") {
        const L = Store.data.len, nt = tricky().length; if (!nt && qz.src === "practise") qz.src = "all";
        root.innerHTML = `<div class="vhead"><h2>Practice</h2></div>
          ${levelBar()}
          <div class="pset">
            <div>Questions <span class="seg">${[10, 20].map(n => `<button type="button" data-q="len" data-n="${n}" class="${L === n ? "on" : ""}">${n}</button>`).join("")}</span></div>
            <div>Phrasal verbs <span class="seg"><button type="button" data-q="src" data-s="all" class="${qz.src !== "practise" ? "on" : ""}">${levelName()} (${POOL().length})</button><button type="button" data-q="src" data-s="practise" class="${qz.src === "practise" ? "on" : ""}" ${nt ? "" : "disabled"}>Tricky (${nt})</button></span></div>
          </div>
          <div class="modes">${Object.entries(MODES).map(([k, m]) => `<button type="button" class="mode ${k === "mix" ? "feat" : ""}" data-q="start" data-mode="${k}"><span><span class="kind">${m.kind}</span><b>${m.name}</b><p>${m.desc}</p><span class="ex">${esc(m.ex)}</span></span></button>`).join("")}</div>
          <div id="progressBox"></div>`;
        if (!progress.ready) { progress.init(); progress.ready = true; }
        progress.show();
        return;
      }
      if (qz.phase === "done") {
        const n = qz.qs.length, pct = Math.round(qz.score / n * 100);
        const msg = pct === 100 ? "A perfect session." : pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training.";
        const wrong = qz.results.filter(r => !r.ok);
        root.innerHTML = `<div class="q"><div class="card results">
          <div class="score">${qz.score}<span> / ${n}</span></div>
          <h3>${msg}</h3><p>${pct}% correct · ${MODES[qz.mode].name}${qz.src === "all" && LV.b ? " · " + levelName() : ""}</p>
          <div class="bar" style="max-width:340px;margin:20px auto 0"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
          <div class="actions"><button class="btn ink" type="button" data-q="again">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-q="mistakes">Practise my mistakes</button>` : ""}<button class="btn soft" type="button" data-q="menu">Choose another exercise</button></div>
          ${wrong.length ? `<div class="review"><h4>Phrasal verbs to remember</h4>${wrong.map(r => `<div class="rv"><div><b>${esc(r.v.pv)}</b> = ${esc(r.v.it)}<br><span class="you">${esc(r.given || "—")}</span></div>${spk(r.v.pv, "sm")}</div>`).join("")}</div>` : ""}
        </div></div>`;
        return;
      }
      const q = qz.qs[qz.i], v = q.v, n = qz.qs.length, m = MODES[q.type];
      const inp = `autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"`;
      const opts = list => `<div class="opts">${list.map((o, i) => `<button type="button" class="opt" data-q="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`;
      let body;
      if (q.type === "mean") body = `<p class="q-ask">What does this phrasal verb mean?</p><div class="q-big pv">${esc(v.pv)} ${spk(v.pv, "lg")}</div>${opts(q.options.map(o => o.it))}`;
      else if (q.type === "pv") body = `<p class="q-ask">Which phrasal verb has this meaning?</p><div class="q-big it">${esc(v.it)}</div>${opts(q.options.map(o => o.pv))}`;
      else if (q.type === "part") {
        const [pre, post] = q.en.split(/\[[^\]]+\]/);
        body = `<p class="q-ask">Choose the missing particle.</p><div class="ctx-s" translate="no">${esc(pre)}${esc(q.verbPart)} <span class="blank">___</span>${esc(post)}</div><p class="ctx-it" translate="no">${esc(q.it)}</p>${opts(q.options)}`;
      }
      else if (q.type === "ctx") {
        const [pre, post] = q.en.split(/\[[^\]]+\]/);
        body = `<p class="q-ask">Write the correct form of the phrasal verb in brackets.</p>
          <div class="ctx-s" translate="no">${esc(pre)}<span class="slot inline"><input type="text" ${inp} aria-label="Missing phrasal verb" style="min-width:${Math.max(8, q.inside.length + 2)}ch"></span><span class="ctx-b">(${esc(v.pv)})</span>${esc(post)}</div>
          <p class="ctx-it">${esc(q.it)}</p>`;
      }
      else body = `<p class="q-ask">Write the English phrasal verb.</p><div class="q-big it">${esc(v.it)}</div><div class="slots" style="margin-top:0"><div class="slot"><small>Phrasal verb</small><input type="text" ${inp} aria-label="Phrasal verb" placeholder="Type here"></div></div>`;
      const written = q.type === "ctx" || q.type === "ita";
      root.innerHTML = `<div class="q">
        <div class="q-top"><span class="sc">${qz.i + 1} / ${n}</span><div class="bar"><span style="width:${qz.i / n * 100}%;background:var(--shu)"></span></div><span class="sc">Score <b id="qscore">${qz.score}</b></span></div>
        <div class="card q-card">
          <div class="ex-head"><span class="q-kind">${m.kind}</span><h3 class="ex-title">${MODES[qz.mode].name}</h3><p class="ex-instr">${m.desc}</p>${qz.src === "all" && LV.b ? `<span class="q-lv">${bdot(LV.b)}${levelName()}</span>` : ""}</div>
          ${body}
          <div id="qfb" aria-live="polite"></div>
          <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-q="menu">Quit</button>${written ? `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-q="skip">I don't know</button><button class="btn ink lg" type="button" data-q="check">${ICON.check} Check</button></div>` : ""}</div>
        </div></div>`;
      const f = $(".slot input", root); if (f && matchMedia("(hover:hover)").matches) f.focus({ preventScroll: true });
    }
  };

  /* ================= PROGRESS ================= */
  const progress = {
    init() {
      $("#view-practice").addEventListener("click", e => {
        if (e.target.closest("[data-reset]")) dialog({ title: "Reset your progress?", text: "This deletes your learnt phrasal verbs, tricky phrasal verbs and practice results.", ok: "Reset", danger: true })
          .then(y => { if (y) { Store.reset(); fc.order = []; fc.done = false; refreshCount(); progress.show(); toast("Progress reset"); } });
      });
    },
    show() {
      const n = learnt().length, t = tricky(), Q = Store.data.quiz;
      const acc = Q.answered ? Math.round(Q.correct / Q.answered * 100) + "%" : "–";
      t.sort((a, c) => rec(a).st - rec(c).st || rec(c).w - rec(a).w);
      const box = $("#progressBox"); if (!box) return;
      box.innerHTML = `
        <div class="vhead" style="margin-top:44px"><h2>Your progress</h2></div>
        <div class="stats">
          <div class="card stat"><small>Total phrasal verbs</small><b>${PV.length}</b></div>
          <div class="card stat"><small>Learnt</small><b style="color:var(--ok)">${n}</b></div>
          <div class="card stat"><small>To review</small><b style="color:var(--kincha)">${t.length}</b></div>
          <div class="card stat"><small>Practice accuracy</small><b>${acc}</b></div>
        </div>
        <div class="card bprog"><h3>Learnt phrasal verbs by belt</h3>
          ${BELTS.map(b => { const L = byBelt(b), k = L.filter(x => statusOf(x) === "known").length; return `<div class="bp-row"><span class="bp-l">${bdot(b)}${BL.get(b).short}</span><div class="bar"><span style="width:${k / L.length * 100}%;background:var(--ok)"></span></div><span class="bp-n">${k} / ${L.length}</span></div>`; }).join("")}
        </div>
        <div class="card tricky">
          <h3>Your tricky phrasal verbs</h3>
          <p>Phrasal verbs you got wrong or marked “Still learning”. Answer one correctly ${MASTER} times in a row and it moves to Learnt.</p>
          ${t.length ? `<div class="tricky-acts">
            <button class="btn" type="button" data-go="cards" data-params='{"deck":"practise"}'>${ICON.cards} Flashcards</button>
            <button class="btn" type="button" data-go="practice" data-params='{"mode":"mean","src":"practise"}'>${ICON.practice} Meanings</button>
            <button class="btn" type="button" data-go="practice" data-params='{"mode":"ctx","src":"practise"}'>${ICON.pen} In context</button></div>
            <div class="tchips">${t.map(v => { const r = rec(v); return `<span class="tchip" title="${esc(v.pv + " = " + v.it)} · ${r.st}/${MASTER} correct in a row">${esc(v.pv)}<span class="dots">${Array.from({ length: MASTER }, (_, i) => `<i class="${i < r.st ? "on" : ""}"></i>`).join("")}</span>${spk(v.pv)}</span>`; }).join("")}</div>`
          : `<div class="empty" style="padding:24px"><h3>Nothing to review</h3>Mistakes will appear here so you can train them.</div>`}
        </div>
        <div class="card" style="padding:28px">
          <h3 style="font-size:24px;margin-bottom:8px">Recent practice</h3>
          ${Q.history.length ? `<table class="hist">${Q.history.slice(0, 8).map(h => `<tr><td>${MODES[h.m] ? MODES[h.m].name : h.m}</td><td style="color:var(--stone)">${new Date(h.d).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td><td style="text-align:right"><b>${h.s}/${h.n}</b> · ${Math.round(h.s / h.n * 100)}%</td></tr>`).join("")}</table>` : `<p style="color:var(--stone);margin:0">No practice sessions yet. <a href="#practice" style="color:var(--shu);font-weight:600">Start your first one</a>.</p>`}
        </div>`;
    }
  };

  Store.load(); refreshCount(); route();
  window.__phrasal = { PV, makeQ, particleOptions, meaningOptions, oneBlock, state: () => qz }; // used by automated tests
})();
