/* Language Dojo — homepage sections, generated from catalog.js */
(function () {
  "use strict";
  const { url, esc, mark, icon, status, catalog: C } = window.Dojo;
  const $ = s => document.querySelector(s);
  const live = C.resources.filter(r => r.status === "available");
  const liveLangs = C.languages.filter(l => l.status === "available");
  const langName = id => (C.languages.find(l => l.id === id) || {}).name || id;

  // hero
  $("#heroMark").outerHTML = mark("big-mark");
  $("#heroSound").innerHTML = icon("sound");
  $("#methodMark").outerHTML = mark("bg-mark");
  $("#matMark").innerHTML = mark("", "");
  $("#matMark svg").style.cssText = "width:100%;height:100%";
  $("#heroFacts").innerHTML = `<span><b>${liveLangs.length}</b> language${liveLangs.length === 1 ? "" : "s"} live</span><span><b>${live.length}</b> resource${live.length === 1 ? "" : "s"} available</span><span><b>Free</b> · no account needed</span>`;

  // languages
  $("#langGrid").innerHTML = C.languages.map(l => {
    const n = C.resources.filter(r => r.lang === l.id && r.status === "available").length;
    const inner = `<span class="code">${esc(l.code)}</span><h3>${esc(l.name)}</h3><p>${esc(l.blurb)}</p>
      <div class="foot">${status(l.status)}${l.status === "available" ? `<span class="link-arrow">${n} resource${n === 1 ? "" : "s"} ${icon("arrow")}</span>` : ""}</div>`;
    return l.status === "available"
      ? `<a class="card card-link lang is-available reveal" href="${url(l.url)}">${inner}</a>`
      : `<div class="card lang reveal">${inner}</div>`;
  }).join("");

  // training areas
  $("#skillGrid").innerHTML = C.skills.map(s => {
    const res = C.resources.filter(r => r.skill === s.id);
    const av = res.filter(r => r.status === "available");
    const count = av.length ? `${av.length} resource${av.length > 1 ? "s" : ""} available` : res.some(r => r.status === "development") ? "In development" : "Coming soon";
    const inner = `<span class="si">${icon(s.icon)}</span><h3>${esc(s.name)}</h3><p>${esc(s.blurb)}</p><span class="count">${count}</span>`;
    return av.length ? `<a class="skill live" href="${url(av[0].url)}">${inner}</a>` : `<div class="skill">${inner}</div>`;
  }).join("");

  // available resources
  $("#featured").innerHTML = `<div class="res-cards">${live.map(r => `
    <a class="card card-link rcard reveal" href="${url(r.url)}">
      <div class="rart" style="background:${r.accent || "var(--ai)"}" aria-hidden="true">${mark("ring")}<div class="lines" ${r.artJa ? 'lang="ja"' : ""}>${(r.art || []).map(x => `<span>${esc(x)}</span>`).join("")}</div></div>
      <div class="rtxt">
        <div class="meta">${status("available")}<span>${esc(langName(r.lang))}</span><span class="sep">·</span><span>${esc(r.size || "")}</span></div>
        <h3>${esc(r.title)}</h3><p>${esc(r.blurb)}</p>
        <ul>${(r.features || []).slice(0, 4).map(f => `<li>${icon("check")}${esc(f)}</li>`).join("")}</ul>
        <span class="link-arrow">Start training ${icon("arrow")}</span>
      </div>
    </a>`).join("")}</div>`;

  // path + news
  const upcoming = C.resources.filter(r => r.status !== "available").sort((a, b) => (a.status === "development" ? 0 : 1) - (b.status === "development" ? 0 : 1));
  $("#pathList").innerHTML = upcoming.map(r => {
    const sk = C.skills.find(s => s.id === r.skill) || {};
    return `<div class="path-item"><span class="si">${icon(sk.icon || "verbs")}</span><div><b>${esc(r.title)}</b><span class="sub">${esc(langName(r.lang))} · ${esc(sk.name || "")}</span></div>${status(r.status)}</div>`;
  }).join("");
  $("#newsList").innerHTML = C.news.map(n => `<div class="news-item"><div class="top"><span class="tag">${esc(n.tag)}</span><span>${new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span></div><b>${esc(n.title)}</b><p>${esc(n.text)}</p></div>`).join("");

  // perks
  const perks = [["free", "Free to use", "Every resource is free. Share the link with your class and start."], ["save", "No account needed", "Progress is saved on your device automatically."], ["device", "Any device", "Designed for phones, tablets and computers alike."], ["sound", "Real pronunciation", "Natural British English audio for every word."]];
  $("#perks").innerHTML = perks.map(p => `<div class="perk reveal">${icon(p[0])}<h3>${p[1]}</h3><p>${p[2]}</p></div>`).join("");

  window.Dojo.reveal();
})();
