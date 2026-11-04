/* =====================================================================
   Language Dojo · English Irregular Verbs
   Sections: Overview, Verb list, Flashcards, Practice, Progress.
   Data: verbs-data.js (verb list) and audio-data.js (recordings).
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
  const norm = s => String(s).toLowerCase().replace(/\s+/g, " ").trim();
  const deaccent = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  const alts = s => String(s).split(/\s*[\/,]\s*/).map(norm).filter(Boolean);
  const FORMS = ["base", "past", "pp"];
  const LABEL = { base: "Base form", past: "Past simple", pp: "Past participle" };
  const AUDIO = window.VERB_AUDIO || {};

  const VERBS = (window.VERB_DATA || []).map((r, i) => {
    const v = { id: i, base: r[0], past: r[1], pp: r[2], it: r[3], ipa: r[4] || null, say: r[5] || {} };
    v.alt = { base: alts(v.base), past: alts(v.past), pp: alts(v.pp) };
    v.meanings = r[3].split(",").map(norm);
    return v;
  });

  /* ---------- icons ---------- */
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    sound: I('<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'),
    overview: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
    list: I('<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),
    cards: I('<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V16"/>'),
    practice: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>'),
    progress: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    shuffle: I('<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>'),
    left: I('<path d="m15 18-6-6 6-6"/>'), right: I('<path d="m9 18 6-6-6-6"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    pen: I('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/>'),
    check: I('<path d="M20 6 9 17l-5-5"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>')
  };

  /* ---------- storage ---------- */
  const MASTER = 3; // correct answers in a row to move a tricky verb to "learnt"
  const Store = {
    key: "language-dojo:en-irregular-verbs", ok: true, data: null,
    fresh() { return { v: {}, quiz: { answered: 0, correct: 0, history: [] }, len: 10 }; },
    load() { this.data = this.fresh(); },
    save() {},
    reset() { this.data = this.fresh(); this.save(); }
  };
  const rec = v => Store.data.v[v.base] || (Store.data.v[v.base] = { s: "", c: 0, w: 0, st: 0, t: 0 });
  const statusOf = v => (Store.data.v[v.base] || {}).s || "";
  const tricky = () => VERBS.filter(v => statusOf(v) === "practise");
  const learnt = () => VERBS.filter(v => statusOf(v) === "known");

  const beltWatch = fn => fn(); // (no ranks: progress is tracked per verb only)
  function setStatus(v, s) { beltWatch(() => { const r = rec(v); r.s = s; r.st = 0; r.t = Date.now(); Store.save(); }); refreshCount(); }
  function recordAnswer(v, ok) {
    beltWatch(() => {
      const r = rec(v); r.t = Date.now();
      if (ok) { r.c++; r.st++; if (r.s === "practise" && r.st >= MASTER) { r.s = "known"; toast(`“${v.base}” moved to your learnt verbs`); } }
      else { r.w++; r.st = 0; r.s = "practise"; }
      Store.save();
    });
    refreshCount();
  }

  /* ---------- audio: recorded clips, browser voice only as a fallback ---------- */
  const player = new Audio(); player.preload = "auto";
  let token = 0, playingBtn = null;
  const sayKey = (v, f) => (v.say && v.say[f]) || v[f].replace(/\s*[\/,]\s*/g, " or ");
  function stopAudio() { token++; try { player.pause(); } catch (e) {} if (window.speechSynthesis) speechSynthesis.cancel(); if (playingBtn) playingBtn.classList.remove("playing"); playingBtn = null; }
  function play(keys, btn) {
    stopAudio(); const my = token; let i = 0;
    if (btn) { btn.classList.add("playing"); playingBtn = btn; }
    const done = () => { if (my === token && btn) { btn.classList.remove("playing"); playingBtn = null; } };
    const next = () => {
      if (my !== token) return;
      if (i >= keys.length) { done(); return; }
      const k = keys[i++];
      if (AUDIO[k]) {
        player.src = /\.mp3$/.test(AUDIO[k]) ? "audio/" + AUDIO[k] : "data:audio/mpeg;base64," + AUDIO[k];
        player.onended = () => setTimeout(next, 300);
        player.onerror = () => fallback(k, next);
        const p = player.play(); if (p && p.catch) p.catch(() => fallback(k, next));
      } else fallback(k, next);
    };
    next();
  }
  function fallback(text, next) {
    if (!window.speechSynthesis) { next(); return; }
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-GB"; u.rate = .9; u.onend = () => setTimeout(next, 200); u.onerror = next; speechSynthesis.speak(u);
  }
  const spkBtn = (keys, label, cls = "") => `<button type="button" class="spk ${cls}" data-say="${esc(keys.join("|"))}" aria-label="Listen: ${esc(label)}" title="Listen">${ICON.sound}</button>`;
  const spkForm = (v, f, cls) => spkBtn([sayKey(v, f)], v[f], cls);
  const spkAll = (v, cls) => spkBtn(FORMS.map(f => sayKey(v, f)), `${v.base}, ${v.past}, ${v.pp}`, cls);
  document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (!b) return; e.preventDefault(); e.stopPropagation(); play(b.dataset.say.split("|"), b); }, true);

  /* ---------- router (#overview, #list, #cards, #practice, #progress) ---------- */
  const TABS = [["overview", "Overview", ICON.overview], ["list", "Verb Lists", ICON.list], ["cards", "Flashcards", ICON.cards], ["practice", "Practice and Progress", ICON.practice]];
  $("#tabs").innerHTML = TABS.map(([k, l, ic]) => `<a class="tab" href="#${k}" data-tab="${k}">${ic}${l}${k === "practice" ? '<span class="n" id="trickyN"></span>' : ""}</a>`).join("");
  function refreshCount() { const n = tricky().length; const el = $("#trickyN"); if (el) { el.textContent = n ? String(n) : ""; el.title = n ? `${n} tricky verbs` : ""; } }
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
      const v = VERBS[(day * 37) % VERBS.length];
      const steps = [["list", ICON.list, "Verb Lists", `All ${VERBS.length} verbs with audio`], ["cards", ICON.cards, "Flashcards", "Flip, check, repeat"], ["practice", ICON.practice, "Practice and Progress", "Five exercise types"]];
      $("#view-overview").innerHTML = `
        <div class="ov">
          <div class="card steps">${steps.map(s => `<a class="step" href="#${s[0]}"><span class="num">${s[1]}</span><div><h3>${s[2]}</h3><p>${s[3]}</p></div><span class="go">${ICON.arrow}</span></a>`).join("")}</div>
          <div class="side">
            <a class="card rank" href="#progress" style="text-decoration:none">
              <div><small>Your progress</small><h3>${n} of ${VERBS.length} verbs learnt</h3></div>
              ${t ? `<p>${t} to review</p>` : ""}
              <div class="bar"><span style="width:${n / VERBS.length * 100}%;background:var(--ok)"></span><span style="width:${t / VERBS.length * 100}%;background:var(--kincha)"></span></div>
            </a>
            <div class="card votd"><small>Verb of the day</small><div class="forms">${esc(v.base)} <i>·</i> ${esc(v.past)} <i>·</i> ${esc(v.pp)} ${spkAll(v)}</div><div class="m">${esc(v.it)}</div></div>
        </div>`;
    }
  };

  /* ================= VERB LIST ================= */
  const vl = { q: "", filter: "all", key: "base", dir: 1 };
  views.list = {
    init() {
      const root = $("#view-list");
      root.innerHTML = `
        <div class="vhead"><h2>Verb Lists</h2></div>
        <div class="tools">
          <label class="search">${ICON.search}<input id="vq" type="search" placeholder="Search in English or Italian" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Search verbs"></label>
          <div class="seg" id="vf" role="group" aria-label="Show"></div>
          <label class="sort-m"><span class="sr-only">Sort</span><select id="vsort" class="sortsel" aria-label="Sort verbs">
            <option value="base:1">Base form A–Z</option><option value="base:-1">Base form Z–A</option><option value="past:1">Past simple A–Z</option><option value="pp:1">Past participle A–Z</option><option value="it:1">Italian A–Z</option></select></label>
        </div>
        <div class="count" id="vcount"></div>
        <div class="card" style="overflow:hidden"><table class="vtable"><thead><tr>
          <th data-k="base"><button type="button">Base form <span class="ar"></span></button></th>
          <th data-k="past"><button type="button">Past simple <span class="ar"></span></button></th>
          <th data-k="pp"><button type="button">Past participle <span class="ar"></span></button></th>
          <th data-k="it"><button type="button">Italian <span class="ar"></span></button></th>
        </tr></thead><tbody id="vbody"></tbody></table></div>`;
      $("#vq").addEventListener("input", e => { vl.q = e.target.value; this.render(); });
      $("#vsort").addEventListener("change", e => { const [k, d] = e.target.value.split(":"); vl.key = k; vl.dir = +d; this.render(); });
      $("#vf").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { vl.filter = b.dataset.f; this.render(); } });
      $$(".vtable th button", root).forEach(b => b.addEventListener("click", () => { const k = b.parentElement.dataset.k; if (vl.key === k) vl.dir *= -1; else { vl.key = k; vl.dir = 1; } this.render(); }));
    },
    show() { this.render(); },
    render() {
      $("#vf").innerHTML = [["all", "All"], ["known", `Learnt (${learnt().length})`], ["practise", `To review (${tricky().length})`]].map(([k, l]) => `<button type="button" data-f="${k}" class="${vl.filter === k ? "on" : ""}">${l}</button>`).join("");
      const q = deaccent(norm(vl.q));
      const val = (v, k) => k === "it" ? v.it : v.alt[k][0];
      const rows = VERBS.filter(v => (vl.filter === "all" || statusOf(v) === vl.filter) && (!q || deaccent(norm([v.base, v.past, v.pp, v.it].join(" "))).includes(q)))
        .sort((a, b) => val(a, vl.key).localeCompare(val(b, vl.key), "en") * vl.dir || a.base.localeCompare(b.base));
      $$(".vtable th").forEach(th => { const on = th.dataset.k === vl.key; th.querySelector(".ar").textContent = on ? (vl.dir === 1 ? "A–Z" : "Z–A") : ""; th.setAttribute("aria-sort", on ? (vl.dir === 1 ? "ascending" : "descending") : "none"); });
      const vs = $("#vsort"); if (vs) { const v = `${vl.key}:${vl.dir}`; if ([...vs.options].some(o => o.value === v)) vs.value = v; }
      $("#vcount").textContent = rows.length === VERBS.length ? `${VERBS.length} verbs` : `${rows.length} of ${VERBS.length} verbs`;
      const cell = f => v => `<td class="c-${f}" data-label="${LABEL[f]}"><div class="vcell">${f === "base" ? `<span class="sdot ${statusOf(v)}" title="${statusOf(v) === "known" ? "Learnt" : statusOf(v) === "practise" ? "To review" : ""}"></span>` : ""}<span class="w">${esc(v[f])}${v.ipa && v.ipa[f] ? `<span class="ipa">${esc(v.ipa[f])}</span>` : ""}</span>${spkForm(v, f, "sm")}</div></td>`;
      $("#vbody").innerHTML = rows.length ? rows.map(v => `<tr>${cell("base")(v)}${cell("past")(v)}${cell("pp")(v)}<td class="c-it" data-label="Italian">${esc(v.it)}</td></tr>`).join("")
        : `<tr><td colspan="4"><div class="empty"><h3>No verbs found</h3>Try a different word.</div></td></tr>`;
    }
  };

  /* ================= FLASHCARDS ================= */
  const fc = { deck: "all", order: [], i: 0, flipped: false, done: false, known: 0, learning: 0 };
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
    build(deck) { fc.deck = deck; fc.order = shuffle((deck === "practise" ? tricky() : VERBS).map(v => v.id)); fc.i = 0; fc.flipped = false; fc.done = false; fc.known = 0; fc.learning = 0; this.render(); },
    flip() {
      if (fc.done || !fc.order.length) return;
      fc.flipped = !fc.flipped; $(".flashcard").classList.toggle("flipped", fc.flipped); this.actions();
      if (fc.flipped) { const v = VERBS[fc.order[fc.i]]; setTimeout(() => { if (fc.flipped && current === "cards") play(FORMS.map(f => sayKey(v, f)), null); }, 380); } else stopAudio();
    },
    move(d) {
      if (!fc.order.length) return;
      if (fc.done) { if (d < 0) { fc.done = false; fc.i = fc.order.length - 1; fc.flipped = false; this.render(); } return; }
      const n = fc.i + d; if (n < 0) return; stopAudio();
      if (n >= fc.order.length) fc.done = true; else { fc.i = n; fc.flipped = false; }
      this.render();
    },
    rate(s) { if (!fc.flipped || fc.done) return; setStatus(VERBS[fc.order[fc.i]], s); s === "known" ? fc.known++ : fc.learning++; this.move(1); },
    actions() {
      const box = $("#fcActions"); if (!box) return;
      box.className = "fc-actions" + (fc.flipped ? " two" : "");
      box.innerHTML = fc.flipped
        ? `<button class="btn learning" type="button" data-fc="practise">Still learning</button><button class="btn knowit" type="button" data-fc="known">${ICON.check} I know it</button>`
        : `<button class="btn ink" type="button" data-fc="flip">Show answer</button>`;
    },
    render() {
      const root = $("#view-cards"), nt = tricky().length;
      const head = `<div class="vhead" style="text-align:center"><span class="q-kind">${EX.TYPE.flashcards}</span><h2 style="margin-top:8px">Irregular Verbs</h2><p style="margin:8px auto 0">Say the past simple and the past participle of each verb, then turn the card to check.</p></div>
        <div class="fc-head"><div class="seg"><button type="button" data-fc="deck" data-d="all" class="${fc.deck === "all" ? "on" : ""}">All verbs</button><button type="button" data-fc="deck" data-d="practise" class="${fc.deck === "practise" ? "on" : ""}">Tricky verbs (${nt})</button></div>
        <button class="icon-btn" type="button" data-fc="shuffle" title="Shuffle" aria-label="Shuffle cards">${ICON.shuffle}</button></div>`;
      if (!fc.order.length) {
        root.innerHTML = `<div class="fc">${head}<div class="card empty"><h3>No tricky verbs yet</h3><p>Verbs you mark as “Still learning” or get wrong in Practice will appear here.</p><div class="actions"><button class="btn ink" type="button" data-fc="deck" data-d="all">Train with all verbs</button></div></div></div>`;
        return;
      }
      if (fc.done) {
        root.innerHTML = `<div class="fc">${head}<div class="card finish">${mark("mk")}<h3>Session complete</h3><p>You went through ${fc.order.length} card${fc.order.length > 1 ? "s" : ""}.</p>
          <div class="sum"><span style="background:var(--ok-bg);color:var(--ok)">${fc.known} known</span><span style="background:var(--kincha-bg);color:var(--kincha)">${fc.learning} still learning</span></div>
          <div class="actions">${tricky().length ? `<button class="btn primary" type="button" data-fc="deck" data-d="practise">Train tricky verbs</button>` : ""}<button class="btn" type="button" data-fc="again">${ICON.restart} Start again</button></div></div></div>`;
        return;
      }
      const v = VERBS[fc.order[fc.i]], s = statusOf(v), n = fc.order.length;
      root.innerHTML = `<div class="fc">${head}
        <div class="fc-count"><span>${fc.i + 1} / ${n}</span><div class="bar"><span style="width:${fc.i / n * 100}%;background:var(--shu)"></span></div></div>
        <div class="stage">
          <button class="arrow-btn l" type="button" data-fc="prev" aria-label="Previous card" ${fc.i === 0 ? "disabled" : ""}>${ICON.left}</button>
          <button class="arrow-btn r" type="button" data-fc="next" aria-label="Skip to next card">${ICON.right}</button>
          <div class="flashcard ${fc.flipped ? "flipped" : ""}" role="button" tabindex="0" aria-label="Card: ${esc(v.base)}. Tap to flip.">
            <div class="face front">${mark("ring")}
              ${s ? `<span class="pill ${s}">${s === "known" ? "Learnt" : "Tricky"}</span>` : ""}
              <small>Base form</small><div class="word">${esc(v.base)}</div>
              ${v.ipa && v.ipa.base ? `<div class="ipa">${esc(v.ipa.base)}</div>` : ""}
              ${spkForm(v, "base", "lg")}
              <div class="hint">Tap the card to see the answer</div>
            </div>
            <div class="face back">
              <div class="forms">${FORMS.map(f => `<div class="f"><div><small>${LABEL[f]}</small><b>${esc(v[f])}</b>${v.ipa && v.ipa[f] ? `<span class="ipa">${esc(v.ipa[f])}</span>` : ""}</div>${spkForm(v, f)}</div>`).join("")}</div>
              <div class="m">Italian: ${esc(v.it)}</div>
            </div>
          </div>
        </div>
        <div id="fcActions"></div></div>`;
      this.actions();
    }
  };

  /* ================= PRACTICE ================= */
  /* Exercise headers (shared vocabulary in assets/js/exercises.js): TYPE (kind) · Title (name) · Instruction (desc) */
  const EX = window.DojoEx;
  const MODES = {
    mix: { letter: "E", kind: EX.TYPE.mixed, desc: "Answer questions of every type: choose, complete and translate the verb forms.", ex: "All question types" },
    mc: { letter: "A", kind: EX.TYPE.mc, desc: "Choose the correct past simple or past participle of each verb.", ex: "go → went · goed · gone · goes" },
    gap: { letter: "B", kind: EX.TYPE.gaps, desc: "Write the missing form of each verb.", ex: "go – ______ – gone" },
    three: { letter: "C", kind: EX.TYPE.gaps, desc: "Write the two missing forms of each verb.", ex: "______ – went – ______" },
    ita: { letter: "D", kind: EX.TYPE.translation, desc: "Translate each Italian verb into English and write its three forms.", ex: "andare → go – went – gone" }
  };
  // "Irregular Verbs – 1" … in the order in which the exercises are listed
  EX.numberAll(Object.values(MODES), () => "Irregular Verbs", (m, t) => { m.name = t; });
  const NO_REGULAR = new Set(["be", "burn", "dream", "learn", "smell", "broadcast", "hang", "kneel", "light", "quit", "bet", "shine", "forecast", "show", "dig"]);
  const regularize = b => /e$/.test(b) ? b + "d" : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + "ied" : /^[^aeiou]*[aeiou][bdgklmnprt]$/.test(b) ? b + b.slice(-1) + "ed" : b + "ed";
  function buildOptions(v, target) {
    const correct = new Set(v.alt[target]); const okD = s => alts(s).every(a => !correct.has(a));
    const other = target === "past" ? "pp" : "past";
    const prio = [v[other]]; if (!NO_REGULAR.has(v.alt.base[0])) prio.push(regularize(v.alt.base[0])); if (Math.random() < .5) prio.push(v.base);
    const sim = x => (x.base[0] === v.base[0] ? 2 : 0) + Math.random() * 1.5;
    const rest = shuffle(VERBS.filter(x => x !== v).map(x => [sim(x), x]).sort((a, b) => b[0] - a[0]).slice(0, 10).flatMap(p => [p[1][target], p[1][other]]));
    const out = [], seen = new Set();
    for (const c of [...shuffle(prio), ...rest]) { const k = norm(c); if (seen.has(k) || !okD(c)) continue; seen.add(k); out.push(c); if (out.length === 3) break; }
    return shuffle([v[target], ...out]);
  }
  // capital letters and extra spaces are ignored; "to go" is accepted; with two accepted forms either one (or both) is correct
  function matchesForm(input, formStr, isBase) {
    let s = norm(input || ""); if (isBase) s = s.replace(/^to\s+/, "");
    const toks = s.split(/\s*\/\s*|\s*,\s*|\s+or\s+/).map(t => t.trim()).filter(Boolean);
    if (!toks.length) return false; const a = alts(formStr); return toks.every(t => a.includes(t));
  }
  function makeQ(v, type) {
    if (type === "mc") { const target = pick(["past", "pp"]); return { type, v, target, options: buildOptions(v, target) }; }
    if (type === "gap") return { type, v, missing: pick(FORMS) };
    if (type === "three") return { type, v, given: pick(FORMS) };
    return { type: "ita", v };
  }
  function buildQs(mode, src, n) {
    if (!src.length) return [];
    const list = [];
    while (list.length < n) for (const v of shuffle(src)) { if (src.length > 1 && list.length && list[list.length - 1] === v) continue; list.push(v); if (list.length >= n) break; }
    return list.map(v => makeQ(v, mode === "mix" ? pick(["mc", "gap", "three", "ita"]) : mode));
  }
  const qz = { phase: "menu", mode: "mix", src: "all", ids: null, qs: [], i: 0, score: 0, answered: false, results: [] };
  views.practice = {
    init() {
      const root = $("#view-practice");
      root.addEventListener("click", e => {
        const b = e.target.closest("[data-q]"); if (!b) return;
        const a = b.dataset.q;
        if (a === "start") this.start(b.dataset.mode, qz.src === "practise" && tricky().length ? "practise" : "all");
        else if (a === "len") { Store.data.len = +b.dataset.n; Store.save(); this.render(); }
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
        e.preventDefault(); if (qz.answered) { this.next(); return; }
        const ins = $$(".slot input", root), i = ins.indexOf(e.target), nxt = ins.slice(i + 1).find(x => !x.value.trim());
        nxt ? nxt.focus() : this.answerWritten(false);
      });
      document.addEventListener("keydown", e => {
        if (current !== "practice" || qz.phase !== "q" || document.querySelector(".modal")) return;
        const q = qz.qs[qz.i];
        if (!qz.answered && q.type === "mc" && /^[1-4]$/.test(e.key)) this.answerMC(+e.key - 1);
        else if (qz.answered && e.key === "Enter" && !e.target.matches("input,button")) { e.preventDefault(); this.next(); }
      });
    },
    show(p) { if (p && p.mode) { this.start(p.mode, p.src || "all"); return; } this.render(); },
    start(mode, src, ids) {
      qz.mode = mode; qz.src = src; qz.ids = ids || null;
      const pool = src === "ids" ? ids.map(i => VERBS[i]) : src === "practise" ? tricky() : VERBS;
      const n = src === "all" ? Store.data.len : Math.min(Store.data.len, Math.max(pool.length * 2, 5));
      qz.qs = buildQs(mode, pool, n);
      if (!qz.qs.length) { toast("There are no tricky verbs to practise yet."); qz.phase = "menu"; qz.src = "all"; this.render(); return; }
      qz.i = 0; qz.score = 0; qz.answered = false; qz.results = []; qz.phase = "q"; this.render();
    },
    next() { if (!qz.answered) return; if (qz.i < qz.qs.length - 1) { qz.i++; qz.answered = false; this.render(); } else this.finish(); },
    finish() {
      qz.phase = "done";
      const h = Store.data.quiz.history; h.unshift({ d: Date.now(), m: qz.mode, s: qz.score, n: qz.qs.length }); Store.data.quiz.history = h.slice(0, 20); Store.save();
      this.render();
    },
    record(q, ok, verb, given) {
      qz.answered = true; if (ok) qz.score++;
      Store.data.quiz.answered++; if (ok) Store.data.quiz.correct++;
      qz.results.push({ q, ok, v: q.v, given }); recordAnswer(verb || q.v, ok);
    },
    answerMC(i) {
      if (qz.answered) return; const q = qz.qs[qz.i], c = q.options[i]; if (c === undefined) return;
      const right = norm(q.v[q.target]), ok = norm(c) === right;
      $$(".opt").forEach((b, j) => { b.disabled = true; if (norm(q.options[j]) === right) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); });
      this.record(q, ok, q.v, c); this.feedback(q, ok);
    },
    answerWritten(skip) {
      if (qz.answered) return; const q = qz.qs[qz.i], v = q.v, ins = {};
      $$(".slot input").forEach(el => ins[el.dataset.f] = skip ? "" : el.value);
      const fields = Object.keys(ins);
      // other verbs that fit the same clue are accepted too (e.g. "portare" → bring, take or wear)
      const cands = q.type === "gap" ? VERBS.filter(x => FORMS.filter(f => f !== q.missing).every(f => x[f] === v[f]))
        : q.type === "three" ? VERBS.filter(x => x[q.given] === v[q.given])
        : [v, ...VERBS.filter(x => x !== v && v.meanings.every(m => x.meanings.includes(m)))];
      if (!cands.includes(v)) cands.unshift(v);
      const ev = x => fields.map(f => matchesForm(ins[f], x[f], f === "base"));
      let best = cands.find(x => ev(x).every(Boolean)); const ok = !!best;
      if (!best) best = (q.type === "ita" && cands.find(x => matchesForm(ins.base, x.base, true))) || v;
      const res = ev(best);
      $$(".slot input").forEach(el => { const k = fields.indexOf(el.dataset.f); el.disabled = true; el.classList.add(res[k] ? "right" : "wrong"); if (!res[k]) { const d = document.createElement("div"); d.className = "fix"; d.innerHTML = ICON.check + esc(best[el.dataset.f]); el.after(d); } });
      this.record(q, ok, ok ? best : v, fields.map(f => ins[f].trim() || "—").join(" – "));
      this.feedback(q, ok, ok && best !== v ? best : null);
    },
    feedback(q, ok, alt) {
      const v = alt || q.v;
      $("#qfb").innerHTML = `<div class="fb ${ok ? "good" : "bad"}"><span class="ic">${ok ? ICON.check : ICON.x}</span><div>
        <h3>${ok ? pick(["Correct.", "Well done.", "Exactly right.", "Correct — keep going."]) : "Not quite. The correct answer is:"}</h3>
        <div class="ans">${esc(v.base)} – ${esc(v.past)} – ${esc(v.pp)} ${spkAll(v, "sm")}</div>
        ${alt ? `<div class="note">“${esc(alt.base)}” also fits this translation. The verb we had in mind was “${esc(q.v.base)} – ${esc(q.v.past)} – ${esc(q.v.pp)}”.</div>` : ""}</div></div>`;
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
          <div class="pset">
            <div>Questions <span class="seg">${[10, 20].map(n => `<button type="button" data-q="len" data-n="${n}" class="${L === n ? "on" : ""}">${n}</button>`).join("")}</span></div>
            <div>Verbs <span class="seg"><button type="button" data-q="src" data-s="all" class="${qz.src !== "practise" ? "on" : ""}">All verbs</button><button type="button" data-q="src" data-s="practise" class="${qz.src === "practise" ? "on" : ""}" ${nt ? "" : "disabled"}>Tricky verbs (${nt})</button></span></div>
          </div>
          <div class="modes">${Object.entries(MODES).map(([k, m]) => `<button type="button" class="mode ${k === "mix" ? "feat" : ""}" data-q="start" data-mode="${k}"><span><span class="kind">${m.kind}</span><b>${m.name}</b><p>${m.desc}</p><span class="ex">${m.ex}</span></span></button>`).join("")}</div>
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
          <h3>${msg}</h3><p>${pct}% correct · ${MODES[qz.mode].name}</p>
          <div class="bar" style="max-width:340px;margin:20px auto 0"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div>
          <div class="actions"><button class="btn ink" type="button" data-q="again">${ICON.restart} Repeat</button>${wrong.length ? `<button class="btn primary" type="button" data-q="mistakes">Practise my mistakes</button>` : ""}<button class="btn soft" type="button" data-q="menu">Choose another exercise</button></div>
          ${wrong.length ? `<div class="review"><h4>Verbs to remember</h4>${wrong.map(r => `<div class="rv"><div><b>${esc(r.v.base)} – ${esc(r.v.past)} – ${esc(r.v.pp)}</b><br><span class="you">${esc(r.given || "—")}</span></div>${spkAll(r.v, "sm")}</div>`).join("")}</div>` : ""}
        </div></div>`;
        return;
      }
      const q = qz.qs[qz.i], v = q.v, n = qz.qs.length, m = MODES[q.type];
      const inp = `autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"`;
      const slot = (f, given) => `<div class="slot"><small>${LABEL[f]}</small>${given ? `<div class="given">${esc(v[f])} ${spkForm(v, f, "sm")}</div>` : `<input type="text" data-f="${f}" ${inp} aria-label="${LABEL[f]}" placeholder="Type here">`}</div>`;
      let body;
      if (q.type === "mc") body = `<p class="q-ask">What is the <b>${LABEL[q.target].toLowerCase()}</b> of this verb?</p><div class="q-big">${esc(v.base)} ${spkForm(v, "base", "lg")}</div>
        <div class="opts">${q.options.map((o, i) => `<button type="button" class="opt" data-q="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>`;
      else if (q.type === "gap") body = `<p class="q-ask">Write the <b>missing form</b>.</p><div class="slots">${FORMS.map(f => slot(f, f !== q.missing)).join("")}</div>`;
      else if (q.type === "three") body = `<p class="q-ask">Here is the <b>${LABEL[q.given].toLowerCase()}</b>. Write the other two forms.</p><div class="slots">${FORMS.map(f => slot(f, f === q.given)).join("")}</div>`;
      else body = `<p class="q-ask">Write the <b>three English forms</b> of this verb.</p><div class="q-big it">${esc(v.it)}</div><div class="slots" style="margin-top:0">${FORMS.map(f => slot(f, false)).join("")}</div>`;
      root.innerHTML = `<div class="q">
        <div class="q-top"><span class="sc">${qz.i + 1} / ${n}</span><div class="bar"><span style="width:${qz.i / n * 100}%;background:var(--shu)"></span></div><span class="sc">Score <b id="qscore">${qz.score}</b></span></div>
        <div class="card q-card">
          <div class="ex-head"><span class="q-kind">${m.kind}</span><h3 class="ex-title">${MODES[qz.mode].name}</h3><p class="ex-instr">${m.desc}</p></div>
          ${body}
          <div id="qfb" aria-live="polite"></div>
          <div class="q-foot" id="qfoot"><button class="btn soft sm" type="button" data-q="menu">Quit</button>${q.type === "mc" ? "" : `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn soft" type="button" data-q="skip">I don't know</button><button class="btn ink lg" type="button" data-q="check">${ICON.check} Check</button></div>`}</div>
        </div></div>`;
      const f = $(".slot input", root); if (f && matchMedia("(hover:hover)").matches) f.focus({ preventScroll: true });
    }
  };

  /* ================= PROGRESS ================= */
  const progress = {
    init() {
      $("#view-practice").addEventListener("click", e => {
        if (e.target.closest("[data-reset]")) dialog({ title: "Reset your progress?", text: "This deletes your learnt verbs, tricky verbs and practice results on this device.", ok: "Reset", danger: true })
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
          <div class="card stat"><small>Total verbs</small><b>${VERBS.length}</b></div>
          <div class="card stat"><small>Learnt</small><b style="color:var(--ok)">${n}</b></div>
          <div class="card stat"><small>To review</small><b style="color:var(--kincha)">${t.length}</b></div>
          <div class="card stat"><small>Practice accuracy</small><b>${acc}</b></div>
        </div>
        <div class="card tricky">
          <h3>Your tricky verbs</h3>
          <p>Verbs you got wrong or marked “Still learning”. Answer one correctly ${MASTER} times in a row and it moves to Learnt.</p>
          ${t.length ? `<div class="tricky-acts">
            <button class="btn" type="button" data-go="cards" data-params='{"deck":"practise"}'>${ICON.cards} Flashcards</button>
            <button class="btn" type="button" data-go="practice" data-params='{"mode":"mc","src":"practise"}'>${ICON.practice} Multiple choice</button>
            <button class="btn" type="button" data-go="practice" data-params='{"mode":"gap","src":"practise"}'>${ICON.pen} Fill in the gaps</button></div>
            <div class="tchips">${t.map(v => { const r = rec(v); return `<span class="tchip" title="${esc(v.base + " – " + v.past + " – " + v.pp)} · ${r.st}/${MASTER} correct in a row">${esc(v.base)}<span class="dots">${Array.from({ length: MASTER }, (_, i) => `<i class="${i < r.st ? "on" : ""}"></i>`).join("")}</span>${spkAll(v)}</span>`; }).join("")}</div>`
          : `<div class="empty" style="padding:24px"><h3>Nothing to review</h3>Mistakes will appear here so you can train them.</div>`}
        </div>
        <div class="card" style="padding:28px">
          <h3 style="font-size:24px;margin-bottom:8px">Recent practice</h3>
          ${Q.history.length ? `<table class="hist">${Q.history.slice(0, 8).map(h => `<tr><td>${MODES[h.m] ? MODES[h.m].name : h.m}</td><td style="color:var(--stone)">${new Date(h.d).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td><td style="text-align:right"><b>${h.s}/${h.n}</b> · ${Math.round(h.s / h.n * 100)}%</td></tr>`).join("")}</table>` : `<p style="color:var(--stone);margin:0">No practice sessions yet. <a href="#practice" style="color:var(--shu);font-weight:600">Start your first one</a>.</p>`}
        </div>`;
    }
  };

  Store.load(); refreshCount(); route();
})();
