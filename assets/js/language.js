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

  document.getElementById("areas").innerHTML = `<div class="res-grid">${res.map(r => `
    <a class="card card-link res-card" href="${url(r.url)}">
      <div class="art" style="background:${r.accent || "var(--ai)"}" aria-hidden="true">${mark("")}<div class="lines" ${r.artJa ? 'lang="ja"' : ""}>${(r.art || []).map(x => `<span>${esc(x)}</span>`).join("")}</div></div>
      <div class="body"><h3>${esc(r.title)}</h3>
        <ul>${(r.items || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <span class="link-arrow">Open ${icon("arrow")}</span></div>
    </a>`).join("")}</div>`;
})();
