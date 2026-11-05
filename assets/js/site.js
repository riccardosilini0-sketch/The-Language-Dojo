/* =====================================================================
   Language Dojo — shared site shell
   Renders the header and footer on every page and provides small
   helpers (icons, logo, toast, dialog). Each page sets:
     <body data-root="../" data-page="english">
   data-root = path back to the site root, data-page = active nav item.
   ===================================================================== */
(function () {
  "use strict";
  const body = document.body;
  const ROOT = body.dataset.root || "";
  const PAGE = body.dataset.page || "home";
  const C = window.DOJO_CATALOG || { languages: [], skills: [], resources: [], news: [] };
  let markCount = 0;

  /* ---------- interface language (metalanguage) ----------
     English by default; the choice is remembered on this device. Only the interface
     is translated (assets/js/i18n.js): content in the target language never changes.
     ?lang=it or ?lang=en in the address also sets the language. */
  const LANG_KEY = "language-dojo-lang", LANGS = ["en", "it"];
  let LANG = "en";
  try {
    const qs = new URLSearchParams(location.search), q = qs.get("lang");
    // ?ws=1: the page is read by the PDF Worksheet Builder (content in English, preference untouched)
    if (qs.get("ws")) LANG = "en";
    else {
      if (LANGS.includes(q)) localStorage.setItem(LANG_KEY, q);
      if (LANGS.includes(localStorage.getItem(LANG_KEY))) LANG = localStorage.getItem(LANG_KEY);
    }
  } catch (e) {}
  const DICT = LANG !== "en" && window.DOJO_I18N ? window.DOJO_I18N[LANG] : null;
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  // translate one interface string; returns null when there is no translation
  function T(s) {
    if (!DICT || !s) return null;
    const E = DICT.exact;
    if (has(E, s)) return E[s];
    const vals = [];
    const tpl = s.replace(/“([^”]*)”|\d+/g, (m, q) => { vals.push(q !== undefined ? q : m); return q !== undefined ? `“{${vals.length - 1}}”` : `{${vals.length - 1}}`; });
    if (vals.length && has(E, tpl)) return E[tpl].replace(/\{(\d+)\}/g, (m, i) => vals[+i]);
    for (const p in DICT.prefixes || {}) if (s.startsWith(p) && s.length > p.length) return DICT.prefixes[p] + s.slice(p.length);
    for (const [re, rep] of DICT.patterns || []) {
      const m = s.match(re); if (!m) continue;
      const r = typeof rep === "function" ? rep(...m, T) : s.replace(re, rep);
      if (r) return r;
    }
    if (s.includes(" · ")) { let any = false; const out = s.split(" · ").map(p => { const t = T(p); if (t) any = true; return t || p; }); if (any) return out.join(" · "); }
    if (s.includes(", ")) { const out = s.split(", ").map(T); if (out.every(Boolean)) return out.join(", "); }
    return null;
  }
  const t = s => T(s) || s;
  // content in the target language is never translated (exercise sentences, answers, verb forms…)
  const SKIP = "script,style,textarea,[lang=ja],[translate=no],.sentence,.tiles,.built,.halves,.dlg,.q-prompt,.q-source,.q-context,.ans,.rv .s,.vtable tbody,.flashcard .word,.forms,.q-big,.given,.tchips,.extable td"
    + (/\/phonetics\//.test(location.pathname) ? "" : ",.opts:not(.judge)");
  const ATTRS = ["placeholder", "aria-label", "title", "alt"];
  const OUT = DICT ? new Set(Object.values(DICT.exact)) : null;
  function trText(n) {
    const p = n.parentElement; if (!p || p.closest(SKIP)) return;
    const v = n.nodeValue, k = v.replace(/\s+/g, " ").trim();
    if (!/[A-Za-z]/.test(k) || OUT.has(k)) return;
    const r = T(k);
    if (r != null && r !== k) n.nodeValue = v.match(/^\s*/)[0] + r + v.match(/\s*$/)[0];
  }
  function translate(root) {
    if (!DICT || !root) return;
    if (root.nodeType === 3) return trText(root);
    if (root.nodeType !== 1 || root.closest("script,style")) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n;
    while ((n = w.nextNode())) trText(n);
    [root, ...root.querySelectorAll("[placeholder],[aria-label],[title],[alt]")].forEach(el => ATTRS.forEach(a => trAttr(el, a)));
  }
  function trAttr(el, a) {
    const v = el.getAttribute(a); if (!v || !/[A-Za-z]/.test(v) || OUT.has(v)) return;
    const r = T(v.replace(/\s+/g, " ").trim()); if (r != null && r !== v) el.setAttribute(a, r);
  }
  function setLang(l) { try { localStorage.setItem(LANG_KEY, l); } catch (e) {} location.reload(); }
  if (DICT) document.documentElement.lang = LANG;

  const url = p => ROOT + p;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* logo mark: a brush-drawn ensō whose stroke ends in a speech-bubble tail */
  function mark(cls = "mark", label) {
    const id = "ldBrush" + (++markCount);
    return `<svg class="${cls}" viewBox="0 0 100 100" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}>${(window.DOJO_MARK_SVG || "").replace(/ldBrush/g, id)}</svg>`;
  }
  function lockup(href) {
    return `<a class="lockup" href="${href}" aria-label="Language Dojo — home">${mark()}<span><span class="name">Language Dojo</span><span class="tagline">Learn. Train. Master.</span></span></a>`;
  }

  /* icons (stroke icons, 24px grid) */
  const P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    verbs: '<path d="M4 7h7M4 12h11M4 17h7"/><path d="M15 5l4 2-4 2M17 15l3 2-3 2"/>',
    grammar: '<path d="M4 20 10 4h1l6 16M6.5 14h9"/><path d="M19 4v6"/>',
    vocabulary: '<rect x="4" y="3" width="14" height="18" rx="2"/><path d="M8 8h6M8 12h6M8 16h3"/><path d="M18 7h2v14H8"/>',
    pronunciation: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    listening: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>',
    reading: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    writing: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    speaking: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    device: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
    free: '<path d="M12 3v18M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6"/>',
    save: '<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v5h7V3M8 21v-7h8v7"/>',
    sound: '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'
  };
  const icon = (n, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;

  const STATUS = { available: "Available", development: "In development", planned: "Coming soon" };
  const status = s => `<span class="status ${s}">${STATUS[s] || s}</span>`;
  const firstAvailable = C.resources.find(r => r.status === "available" && r.featured) || C.resources.find(r => r.status === "available");

  /* ---------- header with dropdown menus ---------- */
  const caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const liveLangs = C.languages.filter(l => l.status === "available");
  const langMenu = l => l.menu || [
    ...C.resources.filter(r => r.lang === l.id && r.status === "available").map(r => [r.title, r.size || "", r.url]),
    [`All ${l.name} resources`, "Every resource for this language", l.url]
  ];
  const navItems = [
    { k: "home", label: "Home", href: "index.html" },
    { k: "about", label: "About", href: "index.html#about", menu: [["The concept", "Practice, form and improvement", "index.html#about"], ["For students and teachers", "How to use Language Dojo", "index.html#teachers"]] },
    // each language, with its topics underneath: choose the language or go straight to a topic
    { k: "languages", label: "Languages", href: "index.html#languages", groups: liveLangs.map(l => ({ l, items: C.resources.filter(r => r.lang === l.id && r.status === "available") })) }
  ];
  // language pages and their resources highlight "Languages"
  const ACTIVE = ["home", "about"].includes(PAGE) ? PAGE : "languages";
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    const item = n => {
      const active = n.k === ACTIVE ? ' active" aria-current="page' : "";
      if (n.groups) return `<div class="nav-item has-menu"><a class="nl${active}" href="${url(n.href)}">${n.label}</a><button class="sub-toggle" type="button" aria-label="Show ${n.label} menu" aria-expanded="false">${caret}</button>
        <div class="dropdown mega">${n.groups.map(({ l, items }) => `<div class="dd-group"><a class="dd-lang" href="${url(l.url)}"><b>${esc(l.name)}</b>${l.native && l.native !== l.name ? `<span lang="ja">${esc(l.native)}</span>` : ""}</a>
          <div class="dd-topics">${items.map(r => `<a href="${url(r.url)}"><b>${esc(r.title)}</b>${r.topic ? `<span>${esc(r.topic)}</span>` : ""}</a>`).join("")}</div></div>`).join("")}</div></div>`;
      if (!n.menu) return `<div class="nav-item"><a class="nl${active}" href="${url(n.href)}">${n.label}</a></div>`;
      return `<div class="nav-item has-menu"><a class="nl${active}" href="${url(n.href)}">${n.label}</a><button class="sub-toggle" type="button" aria-label="Show ${n.label} menu" aria-expanded="false">${caret}</button>
        <div class="dropdown">${n.menu.map(([t, sub, h]) => h ? `<a href="${url(h)}"><b>${esc(t)}</b>${sub ? `<span>${esc(sub)}</span>` : ""}</a>` : `<span class="dd-off"><b>${esc(t)}</b><span>${esc(sub)}</span></span>`).join("")}</div></div>`;
    };
    header.innerHTML = `<div class="wrap">${lockup(url("index.html"))}
      <div class="hd-tools">
      <nav class="site-nav" id="site-nav" aria-label="Main">
        ${navItems.map(item).join("")}
      </nav>
      <div class="lang-switch" role="group" aria-label="Interface language">${LANGS.map(l => `<button type="button" data-ui-lang="${l}" aria-pressed="${l === LANG}" lang="${l}">${l.toUpperCase()}</button>`).join("")}</div>
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">${icon("menu")}</button>
      </div></div>`;
    header.querySelector(".lang-switch").addEventListener("click", e => { const b = e.target.closest("[data-ui-lang]"); if (b && b.dataset.uiLang !== LANG) setLang(b.dataset.uiLang); });
    const btn = header.querySelector(".menu-btn"), nav = header.querySelector(".site-nav");
    btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); btn.innerHTML = icon(o ? "close" : "menu"); });
    nav.addEventListener("click", e => {
      const t = e.target.closest(".sub-toggle");
      if (t) { const it = t.parentElement, o = !it.classList.contains("open"); header.querySelectorAll(".nav-item.open").forEach(x => { x.classList.remove("open"); x.querySelector(".sub-toggle").setAttribute("aria-expanded", "false"); }); if (o) { it.classList.add("open"); t.setAttribute("aria-expanded", "true"); } return; }
      if (e.target.closest("a")) { nav.classList.remove("open"); btn.innerHTML = icon("menu"); btn.setAttribute("aria-expanded", "false"); header.querySelectorAll(".nav-item.open").forEach(x => x.classList.remove("open")); }
    });
    document.addEventListener("click", e => { if (!header.contains(e.target)) header.querySelectorAll(".nav-item.open").forEach(x => x.classList.remove("open")); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") header.querySelectorAll(".nav-item.open").forEach(x => x.classList.remove("open")); });
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    const year = Math.max(2026, new Date().getFullYear());
    footer.innerHTML = `<div class="wrap">
      <div class="top">
        <div>${lockup(url("index.html"))}<p>A training space for language learners. Short, focused practice that builds real skills over time.</p></div>
        <div><h4>Languages</h4><ul>${liveLangs.map(l => `<li><a href="${url(l.url)}">${esc(l.name)}</a></li>`).join("")}</ul></div>
        <div><h4>Resources</h4><ul>${C.resources.filter(r => r.status === "available").map(r => `<li><a href="${url(r.url)}">${esc(r.title)}</a></li>`).join("")}</ul></div>
        <div><h4>Language Dojo</h4><ul><li><a href="${url("index.html#about")}">The concept</a></li><li><a href="${url("index.html#teachers")}">For students and teachers</a></li></ul></div>
      </div>
      <div class="bottom"><span>© ${year} Language Dojo · Created by Riccardo Silini Nedrotti. All rights reserved.</span><span>Learn. Train. Master.</span></div>
      <div class="credits">Stroke-order data: <a href="https://kanjivg.tagaini.net" rel="noopener">KanjiVG</a> by Ulrich Apel, CC BY-SA 3.0.</div></div>`;
  }

  /* ---------- resource badge: the brush mark in white on the resource colour ---------- */
  const badge = document.getElementById("appBadge");
  if (badge) badge.innerHTML = mark("badge-mark");

  /* ---------- PDF Worksheet Builder: a discreet entry point in every section that supports it ---------- */
  const WS_SECTIONS = ["verb-tenses", "dependent-prepositions", "modal-verbs", "passive-voice", "irregular-verbs", "skills", "phonetics", "japanese-dojo"];
  const here = C.resources.find(r => r.url && location.pathname.endsWith(r.url.replace(/index\.html$/, "")) || location.pathname.endsWith(r.url));
  const titleRow = document.querySelector(".app-title");
  if (here && titleRow && WS_SECTIONS.includes(here.id) && !new URLSearchParams(location.search).get("ws")) {
    const a = document.createElement("a");
    a.className = "ws-link"; a.href = url("worksheet/index.html?from=" + here.id);
    a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M12 18v-6M9 15l3 3 3-3"/></svg><span>Create a PDF Worksheet</span>`;
    titleRow.appendChild(a);
  }

  /* ---------- toast & dialog ---------- */
  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }
  function dialog({ title, text, ok = "OK", cancel = "Cancel", danger = false }) {
    return new Promise(res => {
      const m = document.createElement("div"); m.className = "modal";
      m.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><h2>${title}</h2><p>${text}</p><div class="actions">${cancel ? `<button class="btn soft" data-a="0">${cancel}</button>` : ""}<button class="btn ${danger ? "primary" : "ink"}" data-a="1">${ok}</button></div></div>`;
      const close = v => { m.remove(); document.removeEventListener("keydown", onKey); res(v); };
      const onKey = e => { if (e.key === "Escape") close(false); };
      m.addEventListener("click", e => { if (e.target === m) close(false); const b = e.target.closest("[data-a]"); if (b) close(b.dataset.a === "1"); });
      document.addEventListener("keydown", onKey);
      document.body.appendChild(m); m.querySelector("[data-a]").focus();
    });
  }

  /* ---------- scroll reveal ---------- */
  function reveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
  }

  /* In-page navigation of the learning apps (#routes): the app re-renders the view itself, so the
     browser must not restore old scroll positions, and after a route change the page scrolls back to
     the top of the view (just under the sticky header and tabs) when the reader was further down. */
  // The site no longer saves anything: remove progress stored by earlier versions.
  try { Object.keys(localStorage).filter(k => k.startsWith("language-dojo:")).forEach(k => localStorage.removeItem(k)); } catch (e) {}
  if (document.querySelector(".app-hero") && "scrollRestoration" in history) history.scrollRestoration = "manual";
  // A link to the page you are already on (e.g. "Back" at the end of a practice session, which
  // runs without changing the address) would do nothing: re-run the app's router instead.
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href^='#']"); if (!a || e.defaultPrevented || !document.querySelector(".app-hero")) return;
    if (a.getAttribute("href") === (location.hash || "#") ) { e.preventDefault(); window.dispatchEvent(new HashChangeEvent("hashchange")); }
  });
  function toView(force) {
    const view = document.getElementById("view") || [...document.querySelectorAll(".view")].find(v => !v.hidden); if (!view) return;
    const header = document.getElementById("site-header"), tabs = document.querySelector(".tabs");
    const offset = (header ? header.getBoundingClientRect().height : 0) + (tabs ? tabs.getBoundingClientRect().height : 0);
    const target = Math.max(0, view.getBoundingClientRect().top + window.scrollY - offset);
    if (force || window.scrollY > target) window.scrollTo({ top: target, behavior: "instant" });
  }
  window.Dojo = { ROOT, url, esc, mark, icon, status, STATUS, catalog: C, toast, dialog, reveal, toView, lang: LANG, t };
  // translate the page now, and everything the apps draw later
  if (DICT) {
    translate(document.body); translate(document.querySelector("title"));
    new MutationObserver(ms => ms.forEach(m => m.type === "characterData" ? trText(m.target) : m.type === "attributes" ? trAttr(m.target, m.attributeName) : m.addedNodes.forEach(translate)))
      .observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  document.addEventListener("DOMContentLoaded", reveal);
})();
