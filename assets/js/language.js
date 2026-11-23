/* Language Dojo — language space.
   Reads <body data-lang="english"> and shows that language's resources from catalog.js,
To open a new language: copy english/index.html into a new
   folder, change data-lang, and add the language and its resources to catalog.js. */
(function () {
  "use strict";
  const { url, esc, mark, icon, catalog: C } = window.Dojo;
  const id = document.body.dataset.lang;
  const lang = C.languages.find(l => l.id === id) || { name: id };
  const res = C.resources.filter(r => r.lang === id && r.status === "available");
  document.title = `${lang.name} · Language Dojo`;
  document.getElementById("langName").textContent = lang.name;
  document.getElementById("crumbName").textContent = lang.name;

  // resources grouped by area (catalog order); inside an area each resource is a numbered step of the suggested path
  const card = (r, n, steps) => `
    <a class="card card-link res-card" href="${url(r.url)}">
      <div class="art" style="background:${r.accent || "var(--ai)"}" aria-hidden="true">${mark("")}<div class="lines" ${r.artJa ? 'lang="ja"' : ""}>${(r.art || []).map(x => `<span>${esc(x)}</span>`).join("")}</div></div>
      <div class="body"><div class="res-meta">${steps > 1 ? `<span class="res-step">Step ${n}</span>` : ""}${r.level ? `<span class="res-level">${esc(r.level)}</span>` : ""}</div><h3>${esc(r.title)}</h3>
        <ul>${(r.items || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <span class="link-arrow">Open ${icon("arrow")}</span></div>
    </a>`;
  const areas = (C.areas || []).filter(a => res.some(r => r.area === a.id));
  const loose = res.filter(r => !areas.some(a => a.id === r.area));
  document.getElementById("areas").innerHTML = areas.map(a => {
    const list = res.filter(r => r.area === a.id);
    return `<section class="area-block"><h2 class="area-title"><span class="si">${icon(a.icon)}</span>${esc(a.name)}</h2>${a.intro ? `<p class="area-intro">${esc(a.intro)}</p>` : ""}
      <div class="res-grid">${list.map((r, i) => card(r, i + 1, list.length)).join("")}</div></section>`;
  }).join("") + (loose.length ? `<div class="res-grid">${loose.map(r => card(r, 0, 0)).join("")}</div>` : "");
})();
