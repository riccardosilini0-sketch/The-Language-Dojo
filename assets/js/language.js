/* The Language Dojo — language page.
   Reads <body data-lang="english"> and lists that language's resources from catalog.js.
   To open a new language: copy english/index.html into a new folder and change data-lang. */
(function () {
  "use strict";
  const { url, esc, mark, icon, status, catalog: C } = window.Dojo;
  const id = document.body.dataset.lang;
  const lang = C.languages.find(l => l.id === id) || { name: id, code: "?", blurb: "" };
  const all = C.resources.filter(r => r.lang === id).sort((a, b) => ["available", "development", "planned"].indexOf(a.status) - ["available", "development", "planned"].indexOf(b.status));
  const skillOf = r => C.skills.find(s => s.id === r.skill) || { name: r.skill, icon: "verbs" };
  let filter = "all";

  document.title = `${lang.name} · The Language Dojo`;
  document.getElementById("langName").textContent = lang.name;
  document.getElementById("crumbName").textContent = lang.name;
  document.getElementById("langBlurb").textContent = lang.intro || lang.blurb;
  document.getElementById("langCode").innerHTML = esc(lang.code) + mark("");
  const av = all.filter(r => r.status === "available").length;
  document.getElementById("langStats").innerHTML = `<div><b>${av}</b>available now</div><div><b>${all.length - av}</b>on the way</div><div><b>${new Set(all.map(r => r.skill)).size}</b>training areas</div>`;

  const skillsHere = C.skills.filter(s => all.some(r => r.skill === s.id));
  function render() {
    document.getElementById("filters").innerHTML = [["all", "All resources"], ...skillsHere.map(s => [s.id, s.name])]
      .map(([k, l]) => `<button type="button" class="filter ${filter === k ? "on" : ""}" data-f="${k}">${esc(l)}</button>`).join("");
    const list = all.filter(r => filter === "all" || r.skill === filter);
    document.getElementById("resGrid").innerHTML = list.length ? list.map(r => {
      const s = skillOf(r);
      if (r.status === "available" && r.featured && filter === "all") return `<a class="card card-link res big is-available" href="${url(r.url)}">
        <div class="body"><div class="top"><span class="si">${icon(s.icon)}</span>${status(r.status)}</div><div class="skill-name">${esc(s.name)}</div><h3>${esc(r.title)}</h3><p>${esc(r.blurb)}</p>
        <div class="foot"><span>${esc(r.size || "")}</span><span class="link-arrow">Start training ${icon("arrow")}</span></div></div>
        <div class="art" aria-hidden="true" style="background:${r.accent || "var(--ai)"}">${mark("")}<div class="forms" ${r.artJa ? 'lang="ja"' : ""}>${(r.art || []).map(esc).join("<br>")}</div></div></a>`;
      const inner = `<div class="top"><span class="si">${icon(s.icon)}</span>${status(r.status)}</div><div class="skill-name">${esc(s.name)}</div><h3>${esc(r.title)}</h3><p>${esc(r.blurb)}</p>
        <div class="foot"><span>${esc(r.size || "")}</span>${r.status === "available" ? `<span class="link-arrow">Open ${icon("arrow")}</span>` : ""}</div>`;
      return r.status === "available" ? `<a class="card card-link res is-available" href="${url(r.url)}">${inner}</a>` : `<div class="card res">${inner}</div>`;
    }).join("") : `<div class="empty-note">No resources here yet.</div>`;
  }
  document.getElementById("filters").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (b) { filter = b.dataset.f; render(); } });
  render();
})();
