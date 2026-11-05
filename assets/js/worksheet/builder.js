/* =====================================================================
   Language Dojo — PDF Worksheet Builder (interface)
   1. Choose exercises (from one or more sections)  2. Customise  3. Preview and download
   The selection and the settings are kept in this browser (localStorage) until cleared.
   ===================================================================== */
(function () {
  "use strict";
  const { esc, toast } = window.Dojo;
  const B = window.DojoBelts, A = window.DojoWorksheetAdapters;
  const ROOT = window.Dojo.ROOT || "../";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const STORE = "language-dojo:worksheet";
  const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    grip: I('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>'),
    up: I('<path d="m18 15-6-6-6 6"/>'), down: I('<path d="m6 9 6 6 6-6"/>'), x: I('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'), back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
    file: I('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>'),
    dl: I('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>'), search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    eye: I('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>')
  };
  const CEFR = { 1: "A1", 2: "A2", 3: "B1", 4: "B2", 5: "C1", 6: "C2" };

  /* ---------------- state ---------------- */
  const st = { step: "choose", section: null, f: { topic: "all", belt: "all", type: "all", q: "" }, cache: {}, loading: {},
    items: [], meta: { title: "", name: "", klass: "", date: "", duration: "", version: "student", explanations: true }, pdf: null };
  try { const s = JSON.parse(localStorage.getItem(STORE) || "null"); if (s) { st.items = s.items || []; Object.assign(st.meta, s.meta || {}); } } catch (e) {}
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify({ items: st.items, meta: st.meta })); } catch (e) {} };
  const from = new URLSearchParams(location.search).get("from");
  st.section = A.SECTIONS.find(s => s.id === from) ? from : A.SECTIONS[0].id;

  /* ---------------- loading a section's exercises (hidden page, ?ws=1) ---------------- */
  function loadSection(id) {
    if (st.cache[id]) return Promise.resolve(st.cache[id]);
    if (st.loading[id]) return st.loading[id];
    const sec = A.SECTIONS.find(s => s.id === id);
    return (st.loading[id] = new Promise((res, rej) => {
      const fr = document.createElement("iframe");
      fr.className = "ws-frame"; fr.setAttribute("aria-hidden", "true"); fr.tabIndex = -1;
      fr.src = ROOT + sec.url + "?ws=1";
      let tries = 0;
      const poll = () => {
        let w = null; try { w = fr.contentWindow; } catch (e) {}
        try {
          if (w && w.document.readyState === "complete" && sec.ready(w)) {
            const list = sec.extract(w).filter(x => x.parts && x.parts.length);
            st.cache[id] = list; fr.remove(); res(list); return;
          }
        } catch (e) { fr.remove(); rej(e); return; }
        if (++tries > 150) { fr.remove(); rej(new Error("timeout")); return; }
        setTimeout(poll, 100);
      };
      fr.addEventListener("load", poll); $("#loader").appendChild(fr);
    }));
  }
  const nQ = ex => ex.parts.reduce((s, p) => s + (p.items ? p.items.length : p.left ? p.left.length : p.rows ? p.rows.length : p.answers ? p.answers.length : p.k === "writing" ? 1 : 0), 0);
  const bdot = l => l ? `<i class="bdot" style="background:${B.get(l).color}"></i>` : "";

  /* ---------------- steps ---------------- */
  const STEPS = [["choose", "1 · Choose exercises"], ["customise", "2 · Customise"], ["preview", "3 · Preview and download"]];
  function drawSteps() {
    $("#steps").innerHTML = STEPS.map(([k, l]) => `<a class="tab ${st.step === k ? "active" : ""}" href="#${k}" data-step="${k}" ${st.step === k ? 'aria-current="step"' : ""}>${l}</a>`).join("");
  }
  function go(step) {
    if (step !== "choose" && !st.items.length) { toast("Choose at least one exercise first."); step = "choose"; }
    st.step = step; if (location.hash.slice(1) !== step) history.replaceState(null, "", "#" + step);
    drawSteps(); window.Dojo.toView();
    ({ choose: renderChoose, customise: renderCustomise, preview: renderPreview })[step]();
  }
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (STEPS.some(s => s[0] === h) && h !== st.step) go(h); });

  /* ---------------- STEP 1: choose ---------------- */
  function renderChoose() {
    $("#view").innerHTML = `
      <div class="ws-layout">
        <div class="ws-cat">
          <div class="vhead"><h2>Exercises</h2><p>Choose a section, filter the exercises and tick the ones you want. You can combine exercises from different sections.</p></div>
          <div class="seg types ws-secs" role="group" aria-label="Section">${A.SECTIONS.map(s => `<button type="button" data-sec="${s.id}" class="${st.section === s.id ? "on" : ""}">${esc(s.title)}</button>`).join("")}</div>
          <div class="ws-filters" id="filters"></div>
          <div class="ws-bulk"><span id="shown"></span><span class="sp"></span><button type="button" class="btn soft sm" data-act="all">Select all shown</button><button type="button" class="btn soft sm" data-act="none">Clear selection</button></div>
          <div id="catList" class="ws-list"><div class="ws-loading">Loading the exercises…</div></div>
        </div>
        <aside class="ws-side card" id="side"></aside>
      </div>`;
    drawSide();
    $(".ws-secs").addEventListener("click", e => { const b = e.target.closest("[data-sec]"); if (!b) return; st.section = b.dataset.sec; st.f = { topic: "all", belt: "all", type: "all", q: "" }; $$(".ws-secs button").forEach(x => x.classList.toggle("on", x === b)); drawCatalogue(); });
    $(".ws-bulk").addEventListener("click", e => {
      const a = e.target.closest("[data-act]"); if (!a) return;
      if (a.dataset.act === "all") { visible().forEach(ex => { if (!has(ex)) st.items.push(ex); }); }
      else { st.items = []; }
      save(); drawList(); drawSide();
    });
    drawCatalogue();
  }
  const has = ex => st.items.some(x => x.uid === ex.uid);
  function visible() {
    const list = st.cache[st.section] || [], q = st.f.q.trim().toLowerCase();
    return list.filter(ex => (st.f.topic === "all" || ex.topic === st.f.topic) && (st.f.belt === "all" || String(ex.belt) === st.f.belt) && (st.f.type === "all" || ex.type === st.f.type)
      && (!q || (ex.title + " " + ex.topic + " " + ex.type + " " + ex.group).toLowerCase().includes(q)));
  }
  async function drawCatalogue() {
    const id = st.section;
    $("#catList").innerHTML = `<div class="ws-loading">Loading the exercises…</div>`; $("#filters").innerHTML = ""; $("#shown").textContent = "";
    try { await loadSection(id); } catch (e) { $("#catList").innerHTML = `<div class="card empty"><h3>This section could not be loaded</h3>Check your connection and try again.</div>`; delete st.loading[id]; return; }
    if (st.section !== id) return;
    const list = st.cache[id], uniq = a => [...new Set(a)];
    const topics = uniq(list.map(x => x.topic)), belts = uniq(list.map(x => x.belt).filter(Boolean)).sort(), types = uniq(list.map(x => x.type));
    $("#filters").innerHTML = `
      <label class="search">${ICON.search}<input id="fq" type="search" placeholder="Search by title or topic" value="${esc(st.f.q)}" autocomplete="off" aria-label="Search exercises"></label>
      <select id="ft" aria-label="Topic"><option value="all">All topics</option>${topics.map(t => `<option ${st.f.topic === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>
      ${belts.length ? `<select id="fb" aria-label="Level"><option value="all">All levels</option>${belts.map(l => `<option value="${l}" ${st.f.belt === String(l) ? "selected" : ""}>${B.get(l).name} · ${CEFR[l]}</option>`).join("")}</select>` : ""}
      <select id="fy" aria-label="Type"><option value="all">All types</option>${types.map(t => `<option ${st.f.type === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>`;
    $("#fq").addEventListener("input", e => { st.f.q = e.target.value; drawList(); });
    $("#ft").addEventListener("change", e => { st.f.topic = e.target.value; drawList(); });
    if ($("#fb")) $("#fb").addEventListener("change", e => { st.f.belt = e.target.value; drawList(); });
    $("#fy").addEventListener("change", e => { st.f.type = e.target.value; drawList(); });
    drawList();
  }
  function drawList() {
    const list = visible();
    $("#shown").textContent = `${list.length} exercise${list.length === 1 ? "" : "s"} shown`;
    if (!list.length) { $("#catList").innerHTML = `<div class="card empty"><h3>No exercises with these filters</h3>Change the topic, level or type.</div>`; return; }
    // grouped by area, then by topic
    const groups = [...new Set(list.map(x => x.group || ""))];
    $("#catList").innerHTML = groups.map(g => {
      const inG = list.filter(x => (x.group || "") === g), topics = [...new Set(inG.map(x => x.topic))];
      return `${g ? `<h3 class="ws-g">${esc(g)}</h3>` : ""}${topics.map(t => `<div class="ws-topic"><h4>${esc(t)}</h4>${inG.filter(x => x.topic === t).map(ex => `
        <label class="ws-row ${has(ex) ? "on" : ""}"><input type="checkbox" data-uid="${esc(ex.uid)}" ${has(ex) ? "checked" : ""}>
          <span class="ws-t"><span class="bt-type">${esc(ex.type)}</span><b translate="no">${esc(ex.title)}</b></span>
          <span class="ws-m">${bdot(ex.belt)}${ex.belt ? `${B.get(ex.belt).short} · ${CEFR[ex.belt]}` : ""}<span>${nQ(ex)} ${nQ(ex) === 1 ? "item" : "items"}</span></span></label>`).join("")}</div>`).join("")}`;
    }).join("");
    $("#catList").onchange = e => {
      const c = e.target.closest("input[data-uid]"); if (!c) return;
      const ex = st.cache[st.section].find(x => x.uid === c.dataset.uid);
      if (c.checked) { if (!has(ex)) st.items.push(ex); } else st.items = st.items.filter(x => x.uid !== ex.uid);
      c.closest(".ws-row").classList.toggle("on", c.checked); save(); drawSide();
    };
  }
  function drawSide() {
    const n = st.items.length;
    $("#side").innerHTML = `<div class="ws-side-h"><h3>Your worksheet</h3><span class="ws-count">${n} exercise${n === 1 ? "" : "s"}</span></div>
      ${n ? `<p class="ws-hint">Drag the exercises (or use the arrows) to change the order: the PDF follows this order.</p>
        <ol class="ws-sel" id="sel">${st.items.map((ex, i) => `<li draggable="true" data-i="${i}"><span class="grip" title="Drag to reorder">${ICON.grip}</span><span class="n">${i + 1}</span>
          <span class="ws-st"><span class="bt-type">${esc(ex.type)}</span><b translate="no">${esc(ex.title)}</b><small>${esc(ex.sectionTitle)}</small></span>
          <span class="ws-act"><button type="button" data-mv="-1" aria-label="Move up" ${i ? "" : "disabled"}>${ICON.up}</button><button type="button" data-mv="1" aria-label="Move down" ${i < n - 1 ? "" : "disabled"}>${ICON.down}</button><button type="button" data-rm aria-label="Remove">${ICON.x}</button></span></li>`).join("")}</ol>
        <div class="ws-side-f"><button type="button" class="btn soft sm" data-act="clear">Remove all</button><button type="button" class="btn primary" data-act="next">Customise ${ICON.arrow}</button></div>`
      : `<p class="ws-empty">No exercises yet. Tick the exercises you want in the list: they will appear here.</p>`}`;
    const sel = $("#sel"); if (!sel) { bindSideButtons(); return; }
    let drag = null;
    sel.addEventListener("dragstart", e => { const li = e.target.closest("li"); drag = +li.dataset.i; li.classList.add("drag"); e.dataTransfer.effectAllowed = "move"; try { e.dataTransfer.setData("text/plain", String(drag)); } catch (x) {} });
    sel.addEventListener("dragend", e => { const li = e.target.closest("li"); if (li) li.classList.remove("drag"); $$(".over", sel).forEach(x => x.classList.remove("over")); });
    sel.addEventListener("dragover", e => { e.preventDefault(); const li = e.target.closest("li"); $$(".over", sel).forEach(x => x.classList.remove("over")); if (li) li.classList.add("over"); });
    sel.addEventListener("drop", e => { e.preventDefault(); const li = e.target.closest("li"); if (!li || drag === null) return; const to = +li.dataset.i; const [m] = st.items.splice(drag, 1); st.items.splice(to, 0, m); drag = null; save(); drawSide(); });
    sel.addEventListener("click", e => {
      const li = e.target.closest("li"); if (!li) return; const i = +li.dataset.i;
      const mv = e.target.closest("[data-mv]"), rm = e.target.closest("[data-rm]");
      if (mv) { const j = i + +mv.dataset.mv; [st.items[i], st.items[j]] = [st.items[j], st.items[i]]; }
      else if (rm) st.items.splice(i, 1); else return;
      save(); drawSide(); if ($("#catList")) drawList();
    });
    bindSideButtons();
  }
  function bindSideButtons() {
    $("#side").onclick = e => {
      const a = e.target.closest("[data-act]"); if (!a) return;
      if (a.dataset.act === "clear") { st.items = []; save(); drawSide(); if ($("#catList") && st.cache[st.section]) drawList(); }
      if (a.dataset.act === "next") go("customise");
    };
  }

  /* ---------------- STEP 2: customise ---------------- */
  function suggestTitle() {
    const secs = [...new Set(st.items.map(x => x.sectionTitle))];
    return secs.length === 1 ? `Revision Worksheet – ${secs[0]}` : "English Revision Worksheet";
  }
  function renderCustomise() {
    const m = st.meta;
    $("#view").innerHTML = `
      <div class="ws-form card">
        <h2>Customise the worksheet</h2>
        <p class="ws-lead">All fields are optional. Empty fields are printed as blank lines for the students to fill in.</p>
        <label class="fl"><span>Worksheet title</span><input id="m-title" type="text" list="titles" value="${esc(m.title)}" placeholder="${esc(suggestTitle())}">
          <datalist id="titles"><option>English Grammar Test</option><option>Revision Worksheet – Verb Tenses</option><option>Reading Comprehension Practice</option><option>Vocabulary Revision</option><option>English Assessment – B1 Level</option></datalist></label>
        <div class="fl-row">
          <label class="fl"><span>Student's name</span><input id="m-name" type="text" value="${esc(m.name)}" placeholder="Blank line"></label>
          <label class="fl"><span>Class</span><input id="m-klass" type="text" value="${esc(m.klass)}" placeholder="Blank line"></label>
        </div>
        <div class="fl-row">
          <label class="fl"><span>Date</span><input id="m-date" type="text" value="${esc(m.date)}" placeholder="Blank line"></label>
          <label class="fl"><span>Duration</span><input id="m-duration" type="text" value="${esc(m.duration)}" placeholder="e.g. 45 minutes (optional)"></label>
        </div>
        <fieldset class="fl"><legend>Version</legend>
          <label class="radio"><input type="radio" name="ver" value="student" ${m.version !== "teacher" ? "checked" : ""}><span><b>Student worksheet</b><small>Texts, instructions, questions and space for the answers. No solutions.</small></span></label>
          <label class="radio"><input type="radio" name="ver" value="teacher" ${m.version === "teacher" ? "checked" : ""}><span><b>Teacher's version</b><small>The same worksheet, followed by a separate answer key.</small></span></label>
          <label class="check ${m.version === "teacher" ? "" : "dim"}" id="explRow"><input type="checkbox" id="m-expl" ${m.explanations ? "checked" : ""}> <span>Include the explanations in the answer key</span></label>
        </fieldset>
        <div class="ws-form-f"><button type="button" class="btn soft" data-go="choose">${ICON.back} Back to the exercises</button><button type="button" class="btn primary lg" data-go="preview">${ICON.eye} Preview</button></div>
      </div>`;
    const sync = () => {
      m.title = $("#m-title").value.trim(); m.name = $("#m-name").value.trim(); m.klass = $("#m-klass").value.trim(); m.date = $("#m-date").value.trim(); m.duration = $("#m-duration").value.trim();
      m.version = $("input[name=ver]:checked").value; m.explanations = $("#m-expl").checked; $("#explRow").classList.toggle("dim", m.version !== "teacher"); save();
    };
    $("#view").addEventListener("input", sync); $("#view").addEventListener("change", sync);
    $("#view").onclick = e => { const g = e.target.closest("[data-go]"); if (g) { sync(); go(g.dataset.go); } };
  }

  /* ---------------- STEP 3: preview and download ---------------- */
  const fontCache = {};
  const fetchFont = n => fontCache[n] || (fontCache[n] = fetch(ROOT + "assets/fonts/pdf/" + n + ".ttf").then(r => { if (!r.ok) throw new Error("font " + n); return r.arrayBuffer(); }).then(b => new Uint8Array(b)));
  async function makePDF() {
    const m = st.meta, title = m.title || suggestTitle();
    const areas = [...new Set(st.items.map(x => x.area))];
    const jp = window.DojoPDF.needsJapanese(st.items);
    const [sans, bold, serif, fallback, japanese, logo] = await Promise.all([fetchFont("sans"), fetchFont("sans-bold"), fetchFont("serif-bold"), fetchFont("fallback"), jp ? fetchFont("jp") : null,
      fetch(ROOT + "assets/img/logo-mark.png").then(r => r.arrayBuffer()).catch(() => null)]);
    const out = await window.DojoPDF.build({ exercises: st.items, meta: { title, name: m.name, klass: m.klass, date: m.date, duration: m.duration, version: m.version, explanations: m.explanations, area: areas.length === 1 ? areas[0] : "English" + (jp ? " · Japanese" : "") }, fonts: { sans, bold, serif, fallback, jp: japanese }, logo });
    const blob = new Blob([out.bytes], { type: "application/pdf" });
    return { url: URL.createObjectURL(blob), pages: out.pages, size: out.bytes.length, name: (title.toLowerCase().normalize("NFD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-") || "worksheet") + (m.version === "teacher" ? "-teacher" : "") + ".pdf", title };
  }
  async function renderPreview() {
    const m = st.meta, title = m.title || suggestTitle();
    $("#view").innerHTML = `
      <div class="ws-prev">
        <div class="card ws-sum">
          <span class="bt-type">${m.version === "teacher" ? "Teacher's version · with answer key" : "Student worksheet · no solutions"}</span>
          <h2 translate="no">${esc(title)}</h2>
          <dl class="ws-dl"><div><dt>Exercises</dt><dd>${st.items.length}</dd></div><div><dt>Pages</dt><dd id="pgs">…</dd></div><div><dt>Student fields</dt><dd>Name, class, date${m.duration ? " · duration " + esc(m.duration) : ""}</dd></div><div><dt>Answer key</dt><dd>${m.version === "teacher" ? (m.explanations ? "Yes, with explanations" : "Yes") : "No"}</dd></div></dl>
          <ol class="ws-order">${st.items.map(ex => `<li><span class="bt-type">${esc(ex.type)}</span> <b translate="no">${esc(ex.title)}</b> <small>${esc(ex.sectionTitle)}</small></li>`).join("")}</ol>
          <div class="ws-dl-btns"><a class="btn primary lg disabled" id="dl" aria-disabled="true">${ICON.dl} Generate PDF</a><a class="btn soft" id="open" target="_blank" rel="noopener" hidden>${ICON.file} Open in a new tab</a></div>
          <div class="ws-prev-f"><button type="button" class="btn soft sm" data-go="choose">${ICON.back} Change the exercises</button><button type="button" class="btn soft sm" data-go="customise">Change the settings</button></div>
        </div>
        <div class="ws-frame-box card" id="pv"><div class="ws-loading">Preparing the preview…</div></div>
      </div>`;
    $("#view").onclick = e => { const g = e.target.closest("[data-go]"); if (g) go(g.dataset.go); };
    try {
      if (st.pdf) URL.revokeObjectURL(st.pdf.url);
      const pdf = st.pdf = await makePDF();
      if (st.step !== "preview") return;
      $("#pgs").textContent = pdf.pages;
      const dl = $("#dl"); dl.href = pdf.url; dl.download = pdf.name; dl.classList.remove("disabled"); dl.removeAttribute("aria-disabled"); dl.innerHTML = `${ICON.dl} Generate PDF`;
      const op = $("#open"); op.href = pdf.url; op.hidden = false;
      const small = matchMedia("(max-width: 820px)").matches;
      $("#pv").innerHTML = small ? `<div class="ws-loading">The preview opens in your device's PDF viewer: use “Open in a new tab”.</div>` : `<iframe title="Worksheet preview" src="${pdf.url}#view=FitH"></iframe>`;
    } catch (e) {
      console.error(e);
      $("#pv").innerHTML = `<div class="card empty"><h3>The PDF could not be created</h3>${esc(e.message || "")}</div>`;
    }
  }

  drawSteps();
  go(STEPS.some(s => s[0] === location.hash.slice(1)) ? location.hash.slice(1) : "choose");
  window.__worksheet = { st, loadSection, makePDF, go }; // used by automated tests
})();
