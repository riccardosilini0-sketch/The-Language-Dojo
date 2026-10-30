/* =====================================================================
   The Language Dojo — shared site shell
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

  const url = p => ROOT + p;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* logo mark: a brush-drawn ensō whose stroke ends in a speech-bubble tail */
  function mark(cls = "mark", label) {
    const id = "ldBrush" + (++markCount);
    return `<svg class="${cls}" viewBox="0 0 100 100" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}>${(window.DOJO_MARK_SVG || "").replace(/ldBrush/g, id)}</svg>`;
  }
  function lockup(href) {
    return `<a class="lockup" href="${href}" aria-label="The Language Dojo — home">${mark()}<span><span class="name">The Language Dojo</span><span class="tagline">Learn. Train. Master.</span></span></a>`;
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
    { k: "languages", label: "Languages", href: "index.html#languages", menu: C.languages.map(l => l.status === "available" ? [l.name, l.native && l.native !== l.name ? l.native : "Available", l.url] : [l.name, "Coming soon", null]) },
    ...liveLangs.map(l => ({ k: l.id, label: l.name, href: l.url, menu: langMenu(l) })),
    { k: "about", label: "About", href: "index.html#method", menu: [["Our method", "Practice, form and improvement", "index.html#method"], ["Training areas", "Skills you can train", "index.html#training"], ["News", "What's new in the dojo", "index.html#news"]] }
  ];
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    const item = n => {
      const active = n.k === PAGE ? ' active" aria-current="page' : "";
      if (!n.menu) return `<div class="nav-item"><a class="nl${active}" href="${url(n.href)}">${n.label}</a></div>`;
      return `<div class="nav-item has-menu"><a class="nl${active}" href="${url(n.href)}">${n.label}</a><button class="sub-toggle" type="button" aria-label="Show ${n.label} menu" aria-expanded="false">${caret}</button>
        <div class="dropdown">${n.menu.map(([t, sub, h]) => h ? `<a href="${url(h)}"><b>${esc(t)}</b>${sub ? `<span>${esc(sub)}</span>` : ""}</a>` : `<span class="dd-off"><b>${esc(t)}</b><span>${esc(sub)}</span></span>`).join("")}</div></div>`;
    };
    header.innerHTML = `<div class="wrap">${lockup(url("index.html"))}
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">${icon("menu")}</button>
      <nav class="site-nav" id="site-nav" aria-label="Main">
        ${navItems.map(item).join("")}
        ${firstAvailable ? `<a class="btn primary sm" href="${url(firstAvailable.url)}">Start training</a>` : ""}
      </nav></div>`;
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
        <div><h4>Languages</h4><ul>${C.languages.map(l => l.status === "available" ? `<li><a href="${url(l.url)}">${esc(l.name)}</a></li>` : `<li class="soon">${esc(l.name)} · soon</li>`).join("")}</ul></div>
        <div><h4>Resources</h4><ul>${C.resources.filter(r => r.status === "available").map(r => `<li><a href="${url(r.url)}">${esc(r.title)}</a></li>`).join("")}<li class="soon">More coming soon</li></ul></div>
        <div><h4>The Language Dojo</h4><ul><li><a href="${url("index.html#method")}">Our method</a></li><li><a href="${url("index.html#training")}">Training areas</a></li><li><a href="${url("index.html#news")}">News</a></li></ul></div>
      </div>
      <div class="bottom"><span>© ${year} The Language Dojo · Created by Riccardo Silini Nedrotti. All rights reserved.</span><span>Learn. Train. Master.</span></div>
      <div class="credits">Stroke-order data: <a href="https://kanjivg.tagaini.net" rel="noopener">KanjiVG</a> by Ulrich Apel, CC BY-SA 3.0.</div></div>`;
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

  window.Dojo = { ROOT, url, esc, mark, icon, status, STATUS, catalog: C, toast, dialog, reveal };
  document.addEventListener("DOMContentLoaded", reveal);
})();
