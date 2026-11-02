/* Language Dojo — homepage sections, generated from catalog.js */
(function () {
  "use strict";
  const { url, esc, mark, icon, catalog: C } = window.Dojo;
  const $ = s => document.querySelector(s);

  $("#heroMark").outerHTML = mark("big-mark");

  // languages: each opens its own space and lists what you can train there
  $("#langGrid").innerHTML = C.languages.filter(l => l.status === "available").map(l => {
    const res = C.resources.filter(r => r.lang === l.id && r.status === "available");
    const ja = /[^\x00-\x7F]/.test(l.code);
    return `
    <a class="card card-link lang lang-${esc(l.id)} reveal" href="${url(l.url)}">
      <div class="lang-top">
        <span class="code" ${ja ? 'lang="ja"' : ""}>${esc(l.code)}</span>
        <div><h3>${esc(l.name)}</h3>${l.native && l.native !== l.name ? `<span class="native" lang="ja">${esc(l.native)}</span>` : ""}</div>
      </div>
      <ul class="lang-res">${res.map(r => `<li><b>${esc(r.title)}</b><span>${esc(r.topic || "")}</span></li>`).join("")}</ul>
      <span class="link-arrow">Enter ${icon("arrow")}</span>
    </a>`;
  }).join("");

  // for students and teachers
  const perks = [["free", "Free to use"], ["save", "No account needed"], ["device", "Phone, tablet and computer"], ["sound", "Audio for listening and pronunciation"]];
  $("#perks").innerHTML = perks.map(p => `<div class="perk reveal">${icon(p[0])}<h3>${p[1]}</h3></div>`).join("");

  window.Dojo.reveal();
})();
