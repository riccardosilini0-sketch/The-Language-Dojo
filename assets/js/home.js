/* Language Dojo — homepage sections, generated from catalog.js */
(function () {
  "use strict";
  const { url, esc, mark, icon, catalog: C } = window.Dojo;
  const $ = s => document.querySelector(s);

  $("#heroMark").outerHTML = mark("big-mark");
  $("#methodMark").outerHTML = mark("bg-mark");

  // languages: each opens its own space
  $("#langGrid").innerHTML = C.languages.filter(l => l.status === "available").map(l => `
    <a class="card card-link lang reveal" href="${url(l.url)}">
      <span class="code" ${/[^\x00-\x7F]/.test(l.code) ? 'lang="ja"' : ""}>${esc(l.code)}</span>
      <h3>${esc(l.name)}</h3>
      ${l.native && l.native !== l.name ? `<span class="native" lang="ja">${esc(l.native)}</span>` : ""}
      <span class="link-arrow">Enter ${icon("arrow")}</span>
    </a>`).join("");

  // for students and teachers
  const perks = [["free", "Free to use"], ["save", "No account needed"], ["device", "Phone, tablet and computer"], ["sound", "Native-quality audio"]];
  $("#perks").innerHTML = perks.map(p => `<div class="perk reveal">${icon(p[0])}<h3>${p[1]}</h3></div>`).join("");

  window.Dojo.reveal();
})();
