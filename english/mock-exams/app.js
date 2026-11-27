/* =====================================================================
   Language Dojo — Mock Exams
   One page per class test (english/mock-exams/<id>/), built from its data.js:
     MockExam.load({ id, title, cls, when, book, level, intro, test, can, links, grades, stations, mock })
   Three tabs:
     The test   – structure of the real test, "Can you…?" self-check, links to other sections
     Training   – one station per part of the test (grammar, vocabulary…), each with short batteries
     Mock test  – a complete test with the same structure and points, a timer and the mark
   Nothing is saved: scores are kept only while the page is open.

   Exercise formats (training batteries and mock exercises; the shared fields are
   id, topic, title, instr, img: [src, alt], box: [words shown in a box]):
     mc        items: [sentence with ___, [options], index of the answer, explanation]
     tf        items: [statement, true | false, explanation]
     gap       items: [sentence with ___ (hint), [[accepted answers for gap 1], …], explanation]
               scoreBy: "gap" counts every gap as one point (default: one point per sentence)
     text      parts: [[speaker or "", "text with {1}…"]], gaps: [[[accepted], explanation]]
     rewrite   items: [sentence, [accepted sentences], explanation, beginning given to the student]
     paradigm  items: [[infinitive, past simple, past participle], index of the form given]
               ("got / gotten": every form separated by " / " is accepted)
     sort      cats: [groups], items: [word, index of the group, explanation]
     stress    items: ["syl|la|bles", index of the stressed syllable, explanation]
     open      items: [question, model answer]  — the student compares and assesses the answer
     reading   title, text: [paragraphs], tasks: [exercises of the types above]
     write     title, img, words, prompt: [lines], checklist?: [..], criteria?: [[name, points, [bands]]], model: [paragraphs]
     phrases   groups: [[title, [expressions]]]  — language to study, nothing to check
   Mock exercises add pts (points per item; a write task gives its total).
   Answers are compared as in the grammar sections: case, final punctuation and contractions don't matter.
   ===================================================================== */
(function () {
  "use strict";
  const ready = f => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", f) : f();
  window.MockExam = { load(exam) { ready(() => start(exam)); } };

  function start(X) {
    const { esc, toast, dialog, icon } = window.Dojo;
    const EX = window.DojoEx;
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const hl = s => esc(s).replace(/\[([^\]]+)\]/g, '<b class="hl">$1</b>').replace(/~~([^~]+)~~/g, '<s class="no">$1</s>');
    const plain = s => String(s).replace(/[[\]]/g, "");
    const I = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
    const ICON = {
      back: I('<path d="M19 12H5M11 18l-6-6 6-6"/>'), arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
      check: I('<path d="M20 6 9 17l-5-5"/>'), restart: I('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
      clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), flag: I('<path d="M5 21V4h12l-2 4 2 4H5"/>'),
      test: I('<path d="M9 4h6v3H9z"/><path d="M8 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2"/><path d="m9 14 2 2 4-4"/>')
    };
    const STATION_ICON = { grammar: "grammar", vocabulary: "vocabulary", pronunciation: "pronunciation", reading: "reading", writing: "writing" };

    /* ---------------- answer checking (as in assets/js/grammar-lab.js) ---------------- */
    function variants(s) {
      s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, "\"").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/g, "").trim();
      s = s.replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not").replace(/\bcan't\b/g, "cannot").replace(/\bcan not\b/g, "cannot").replace(/n't\b/g, " not")
        .replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will");
      let out = [s];
      if (/'s\b/.test(s)) out = out.flatMap(x => [x.replace(/'s\b/g, " is"), x.replace(/'s\b/g, " has")]);
      if (/'d\b/.test(s)) out = out.flatMap(x => [x.replace(/'d\b/g, " had"), x.replace(/'d\b/g, " would")]);
      return out.map(x => x.replace(/\s+/g, " ").trim().replace(/^[–—]$/, "-"));
    }
    const accepts = (list, given) => { if (!String(given || "").trim()) return false; const g = variants(given); return list.some(a => variants(a).some(v => g.includes(v))); };
    const sentNorm = x => variants(String(x || "").replace(/[.,!?;:–—"“”]/g, " ").replace(/\s-\s/g, " "));
    const sameSentence = (list, given) => { if (!String(given || "").trim()) return false; const g = sentNorm(given); return list.some(a => sentNorm(a).some(v => g.includes(v))); };
    const forms = f => String(f).split(/\s*\/\s*/);
    // the answer shown in the feedback: the full form first (would buy rather than 'd buy), then the others
    const byFull = g => { const i = g.findIndex(x => !/^'/.test(x)); return i > 0 ? [g[i], ...g.filter((_, k) => k !== i)] : g; };

    /* ---------------- exercise types ---------------- */
    const TYPE = t => ({ mc: EX.TYPE.mc, tf: EX.TYPE.trueFalse, gap: EX.TYPE.gaps, text: t.parts && t.parts.some(p => p[0]) ? EX.TYPE.gapDialogue : EX.TYPE.gapText, rewrite: EX.TYPE.transform,
      paradigm: "Irregular verbs", sort: EX.TYPE.sorting, stress: EX.TYPE.stress, open: "Short answers", reading: "Reading", write: EX.TYPE.writing("description of a photo"), phrases: "Useful language" })[t.type];
    const countOf = t => t.type === "text" ? t.gaps.length : t.type === "gap" && t.scoreBy === "gap" ? t.items.reduce((s, it) => s + it[1].length, 0)
      : t.type === "reading" ? t.tasks.reduce((s, x) => s + countOf(x), 0) : t.type === "write" || t.type === "phrases" ? 0 : t.items.length;
    const unit = t => t.type === "text" ? "gaps" : t.type === "write" ? "" : t.type === "paradigm" ? "verbs" : t.type === "sort" || t.type === "stress" ? "words" : "questions";
    // points of a mock exercise
    const maxPts = t => t.type === "write" ? t.pts : t.type === "reading" ? t.tasks.reduce((s, x) => s + maxPts(x), 0) : countOf(t) * (t.pts || 1);

    const input = (attrs, size) => `<input type="text" ${attrs} size="${Math.min(size, 34)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">`;
    const qn = i => `<span class="qn">${i + 1}</span>`;
    const fb = (ok, answer, why) => `<div class="fbk ${ok ? "good" : "bad"}"><b>${ok ? "Correct." : "Not quite."}</b>${answer ? ` <span class="ans" translate="no">${answer}</span>` : ""}${why ? ` <span class="why" translate="no">${hl(why)}</span>` : ""}</div>`;
    const also = acc => acc.length > 1 ? `<br><span class="why">Also accepted: ${acc.slice(1).map(esc).join(" / ")}</span>` : "";
    const boxHTML = t => t.box ? `<div class="me-box" translate="no">${t.box.map(w => `<span>${esc(w)}</span>`).join("")}</div>` : "";
    const imgHTML = t => t.img ? `<figure class="me-img card"><img src="${esc(t.img[0])}" alt="${esc(t.img[1])}" loading="lazy"></figure>` : "";
    let uid = 0;

    /* Each builder fills box and returns { check(): number of correct units, self?: {max, get()} }.
       mode: "train" (feedback and explanations) or "test" (the same, plus self-assessed points). */
    const B = {
      mc(t, box) {
        const fixed = t.type === "tf";
        const items = fixed ? t.items.map(([s, v, why]) => [s, ["True", "False"], v ? 0 : 1, why]) : t.items;
        const orders = items.map(it => fixed ? [0, 1] : shuffle(it[1].map((_, j) => j)));
        box.innerHTML = `<ol class="qlist">${items.map(([s, opts], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${hl(s).split("___").join('<span class="blank">…</span>')}</p>
          <div class="opts-row"${fixed ? "" : ' translate="no"'}>${orders[i].map((j, pos) => `<button type="button" class="ob" data-o="${j}">${fixed ? "" : `<span class="k">${"abcd"[pos]}</span>`}${esc(opts[j])}</button>`).join("")}</div><div class="fbx"></div></li>`).join("")}</ol>`;
        const sel = {};
        box.addEventListener("click", e => { const o = e.target.closest(".ob"); if (!o || o.disabled) return; const li = o.closest(".qi"); sel[li.dataset.q] = +o.dataset.o; $$(".ob", li).forEach(x => x.classList.toggle("on", x === o)); });
        return {
          missing: () => items.length - Object.keys(sel).length,
          check() {
            let ok = 0;
            items.forEach(([s, opts, ans, why], i) => {
              const li = $(`.qi[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
              $$(".ob", li).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
              $(".fbx", li).innerHTML = fixed ? fb(good, `<b>${opts[ans]}</b>`, why) : fb(good, esc(plain(s)).replace(/___/g, `<b>${esc(String(opts[ans]).replace(/ \(no preposition\)$/, ""))}</b>`), why);
            });
            return ok;
          }
        };
      },
      gap(t, box) {
        box.innerHTML = boxHTML(t) + `<ol class="qlist">${t.items.map(([s, gaps], i) => { let k = 0; return `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s).replace(/___/g, () => { const g = gaps[k]; return input(`data-g="${k++}" aria-label="Answer ${i + 1}"`, Math.max(6, Math.max(...g.map(a => a.length)) + 2)); })}</p><div class="fbx"></div></li>`; }).join("")}</ol>`;
        return {
          missing: () => $$("input", box).filter(x => !x.value.trim()).length,
          check() {
            let ok = 0;
            t.items.forEach(([s, gaps, why], i) => {
              const li = $(`.qi[data-q="${i}"]`, box), ins = $$("input", li);
              const res = ins.map((x, k) => accepts(gaps[k], x.value)), good = res.every(Boolean);
              ok += t.scoreBy === "gap" ? res.filter(Boolean).length : good ? 1 : 0;
              ins.forEach((x, k) => { x.disabled = true; x.classList.add(res[k] ? "right" : "wrong"); });
              const gs = gaps.map(byFull); let k = 0; const full = esc(s).replace(/___/g, () => `<b>${esc(gs[k++][0])}</b>`);
              const alt = gs.some(g => g.length > 1) ? `<br><span class="why">Also accepted: ${gs.filter(g => g.length > 1).map(g => g.slice(1).map(esc).join(" / ")).join(" · ")}</span>` : "";
              $(".fbx", li).innerHTML = fb(good, full + alt, why);
            });
            return ok;
          }
        };
      },
      text(t, box) {
        const sizeOf = n => Math.max(6, Math.max(...t.gaps[n - 1][0].map(a => a.length)) + 2);
        const fill = s => esc(s).replace(/\{(\d+)\}/g, (m, n) => `<span class="tg"><span class="gn">${n}</span>${input(`data-g="${n}" aria-label="Gap ${n}"`, sizeOf(+n))}</span>`);
        box.innerHTML = imgHTML(t) + boxHTML(t) + `<div class="card textbox" translate="no">${t.example ? `<p class="me-example"><b>0</b> ${hl(t.example).replace(/<b class="hl">/g, '<b class="hl me-ex0">')}</p>` : ""}${t.parts.map(([sp, line]) => sp ? `<p class="dl"><b>${esc(sp)}:</b> ${fill(line)}</p>` : `<p class="pl">${fill(line)}</p>`).join("")}</div><ol class="gexp"></ol>`;
        return {
          missing: () => $$("input", box).filter(x => !x.value.trim()).length,
          check() {
            let ok = 0;
            $(".gexp", box).innerHTML = t.gaps.map(([acc, why], i) => {
              const x = $(`input[data-g="${i + 1}"]`, box), good = accepts(acc, x.value); if (good) ok++;
              x.disabled = true; x.classList.add(good ? "right" : "wrong");
              return `<li>${fb(good, `${i + 1} · <b>${esc(byFull(acc).join(" / "))}</b>`, why)}</li>`;
            }).join("");
            return ok;
          }
        };
      },
      rewrite(t, box) {
        box.innerHTML = `<ol class="qlist">${t.items.map(([s, acc, why, cue], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(s)}</p><div class="row-in">${input(`class="sent" data-q="${i}" aria-label="Sentence ${i + 1}" placeholder="${cue ? esc(cue) + " …" : "Write the new sentence"}"`, 40)}</div><div class="fbx"></div></li>`).join("")}</ol>`;
        $$("input.sent", box).forEach(x => x.addEventListener("focus", () => { const cue = t.items[+x.dataset.q][3]; if (cue && !x.value && !x.disabled) x.value = cue + " "; }, { once: true }));
        return {
          missing: () => $$("input", box).filter(x => { const cue = t.items[+x.dataset.q][3]; return !x.value.trim() || (cue && x.value.trim() === cue); }).length,
          check() {
            let ok = 0;
            t.items.forEach(([s, acc, why], i) => {
              const li = $(`.qi[data-q="${i}"]`, box), x = $("input", li), good = sameSentence(acc, x.value); if (good) ok++;
              x.disabled = true; x.classList.add(good ? "right" : "wrong");
              $(".fbx", li).innerHTML = fb(good, esc(acc[0]) + (acc.length > 1 ? `<br><span class="why">Also accepted: ${acc.slice(1, 4).map(esc).join(" · ")}${acc.length > 4 ? " …" : ""}</span>` : ""), why);
            });
            return ok;
          }
        };
      },
      paradigm(t, box) {
        const H = ["Infinitive", "Past simple", "Past participle"];
        box.innerHTML = `<div class="gl-table-wrap"><table class="gl-table me-verbs"><thead><tr><th></th>${H.map(h => `<th>${h}</th>`).join("")}<th></th></tr></thead><tbody translate="no">${t.items.map(([f, given], i) =>
          `<tr data-q="${i}"><td class="qn-cell">${i + 1}</td>${f.map((x, k) => `<td>${k === given ? `<b>${esc(forms(x)[0])}</b>` : input(`data-k="${k}" aria-label="${H[k]} of verb ${i + 1}"`, 12)}</td>`).join("")}<td class="mark"></td></tr>`).join("")}</tbody></table></div>`;
        return {
          missing: () => $$("input", box).filter(x => !x.value.trim()).length,
          check() {
            let ok = 0;
            t.items.forEach(([f, given], i) => {
              const tr = $(`tr[data-q="${i}"]`, box), ins = $$("input", tr);
              const res = ins.map(x => accepts(forms(f[+x.dataset.k]), x.value)), good = res.every(Boolean); if (good) ok++;
              ins.forEach((x, k) => { x.disabled = true; x.classList.add(res[k] ? "right" : "wrong"); if (!res[k]) x.title = f[+x.dataset.k]; });
              $(".mark", tr).innerHTML = good ? `<span class="me-ok">✓</span>` : `<span class="me-no" translate="no">${f.map(esc).join(" – ")}</span>`;
            });
            return ok;
          }
        };
      },
      sort(t, box) {
        box.innerHTML = `<ol class="qlist sort-list">${t.items.map(([w], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}<b>${esc(w)}</b></p>
          <div class="opts-row" translate="no">${t.cats.map((c, j) => `<button type="button" class="ob" data-o="${j}">${esc(c)}</button>`).join("")}</div><div class="fbx"></div></li>`).join("")}</ol>`;
        const sel = {};
        box.addEventListener("click", e => { const o = e.target.closest(".ob"); if (!o || o.disabled) return; const li = o.closest(".qi"); sel[li.dataset.q] = +o.dataset.o; $$(".ob", li).forEach(x => x.classList.toggle("on", x === o)); });
        return {
          missing: () => t.items.length - Object.keys(sel).length,
          check() {
            let ok = 0;
            t.items.forEach(([w, ans, why], i) => {
              const li = $(`.qi[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
              $$(".ob", li).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
              $(".fbx", li).innerHTML = fb(good, `${esc(w)} → <b>${esc(t.cats[ans])}</b>`, why);
            });
            return ok;
          }
        };
      },
      stress(t, box) {
        box.innerHTML = `<ol class="qlist me-stress">${t.items.map(([w], i) => `<li class="qi" data-q="${i}"><div class="me-syl" translate="no">${qn(i)}${w.split("|").map((s, j) => `<button type="button" class="ob" data-o="${j}">${esc(s)}</button>`).join("")}</div><div class="fbx"></div></li>`).join("")}</ol>`;
        const sel = {};
        box.addEventListener("click", e => { const o = e.target.closest(".ob"); if (!o || o.disabled) return; const li = o.closest(".qi"); sel[li.dataset.q] = +o.dataset.o; $$(".ob", li).forEach(x => x.classList.toggle("on", x === o)); });
        return {
          missing: () => t.items.length - Object.keys(sel).length,
          check() {
            let ok = 0;
            t.items.forEach(([w, ans, why], i) => {
              const li = $(`.qi[data-q="${i}"]`, box), good = sel[i] === ans; if (good) ok++;
              $$(".ob", li).forEach(x => { x.disabled = true; const o = +x.dataset.o; if (o === ans) x.classList.add("right"); else if (o === sel[i]) x.classList.add("wrong"); });
              $(".fbx", li).innerHTML = fb(good, w.split("|").map((s, j) => j === ans ? `<b>${esc(s.toUpperCase())}</b>` : esc(s)).join(""), why);
            });
            return ok;
          }
        };
      },
      // open answers: the student compares with the model; in the mock test they give themselves the points
      open(t, box, mode) {
        const pts = t.pts || 2;
        box.innerHTML = `<ol class="qlist">${t.items.map(([q], i) => `<li class="qi" data-q="${i}"><p class="qs" translate="no">${qn(i)}${esc(q)}</p><div class="row-in"><textarea rows="2" data-q="${i}" aria-label="Answer ${i + 1}" placeholder="Write your answer" translate="no" spellcheck="false"></textarea></div><div class="fbx"></div></li>`).join("")}</ol>`;
        const self = {};
        box.addEventListener("click", e => { const b = e.target.closest("[data-self]"); if (!b) return; const li = b.closest(".qi"); self[li.dataset.q] = +b.dataset.self; $$("[data-self]", li).forEach(x => x.classList.toggle("on", x === b)); box.dispatchEvent(new Event("selfchange", { bubbles: true })); });
        return {
          missing: () => $$("textarea", box).filter(x => !x.value.trim()).length,
          check() {
            t.items.forEach(([q, model], i) => {
              const li = $(`.qi[data-q="${i}"]`, box); $("textarea", li).disabled = true;
              $(".fbx", li).innerHTML = `<div class="fbk me-model"><b>Model answer.</b> <span class="ans" translate="no">${esc(model)}</span>` +
                (mode === "test" ? `<div class="me-self"><span>Compare your answer with the model. Your points:</span>${Array.from({ length: pts + 1 }, (_, p) => `<button type="button" class="ob" data-self="${pts - p}">${pts - p}</button>`).join("")}</div>`
                  : `<span class="why">Same meaning in your own words? Then your answer is right.</span>`) + `</div>`;
            });
            return 0;
          },
          self: { max: t.items.length * pts, get: () => Object.values(self).reduce((a, b) => a + b, 0), done: () => Object.keys(self).length === t.items.length }
        };
      },
      reading(t, box, mode, num) {
        box.innerHTML = `<div class="card textbox me-reading" translate="no"><h3>${esc(t.title)}</h3>${t.text.map(p => `<p>${esc(p)}</p>`).join("")}</div>` +
          t.tasks.map((x, k) => `<section class="me-sub">${mode === "test" ? exHead(x, num + k) : `<h4 class="me-subh"><span class="bt-type">${TYPE(x)}</span> ${esc(x.instr)}</h4>`}<div data-sub="${k}"></div></section>`).join("");
        const subs = t.tasks.map((x, k) => build(x, $(`[data-sub="${k}"]`, box), mode));
        return {
          subs,
          missing: () => subs.reduce((s, x) => s + x.missing(), 0),
          check: () => subs.reduce((s, x) => s + x.check(), 0)
        };
      },
      write(t, box, mode) {
        const count = v => (String(v).trim().match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length;
        box.innerHTML = `<div class="me-write">${imgHTML(t)}<div class="card me-task"><ul>${t.prompt.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
          <div class="me-area"><textarea rows="9" placeholder="Write your description here…" translate="no" spellcheck="false" aria-label="Your text"></textarea><div class="me-wc"><span data-wc>0 words</span> · ${esc(t.words)}</div></div>
          ${t.checklist ? `<div class="card me-check"><h4>Checklist</h4><ul translate="no">${t.checklist.map((c, i) => `<li><label><input type="checkbox"><span>${esc(c)}</span></label></li>`).join("")}</ul></div>` : ""}
          <div class="me-after"></div></div>`;
        const ta = $("textarea", box);
        ta.addEventListener("input", () => { const n = count(ta.value); $("[data-wc]", box).textContent = n === 1 ? "1 word" : `${n} words`; });
        const crit = {};
        box.addEventListener("click", e => { const b = e.target.closest("[data-crit]"); if (!b) return; crit[b.dataset.crit] = +b.dataset.v; $$(`[data-crit="${b.dataset.crit}"]`, box).forEach(x => x.classList.toggle("on", x === b)); box.dispatchEvent(new Event("selfchange", { bubbles: true })); });
        const model = `<div class="card me-modelbox"><h4>Model answer</h4>${t.model.map(p => `<p translate="no">${esc(p)}</p>`).join("")}<p class="me-wcm">${count(t.model.join(" "))} words</p></div>`;
        const grid = t.criteria ? `<div class="card me-crit"><h4>Assess your text</h4><p>Compare your text with the model and give yourself the points for each criterion.</p>${t.criteria.map(([name, max, bands], c) =>
          `<div class="me-cr"><b>${esc(name)}</b><div class="me-bands">${bands.map(bd => { const v = parseFloat(bd); return `<button type="button" class="ob" data-crit="${c}" data-v="${v}">${esc(bd)}</button>`; }).join("")}</div></div>`).join("")}</div>` : "";
        const api = {
          missing: () => ta.value.trim() ? 0 : 1,
          check() { ta.disabled = !!t.criteria; $(".me-after", box).innerHTML = model + grid; return 0; },
          showModel() { $(".me-after", box).innerHTML = model; }
        };
        if (t.criteria) api.self = { max: t.criteria.reduce((s, c) => s + c[1], 0), get: () => Object.values(crit).reduce((a, b) => a + b, 0), done: () => Object.keys(crit).length === t.criteria.length };
        return api;
      },
      phrases(t, box) {
        box.innerHTML = `<div class="me-phr">${t.groups.map(([h, list]) => `<div class="card"><h4>${esc(h)}</h4><ul translate="no">${list.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>`;
        return { missing: () => 0, check: () => 0 };
      }
    };
    B.tf = B.mc;
    function build(t, box, mode = "train", num) { return B[t.type](t, box, mode, num); }

    /* ---------------- headers, router ---------------- */
    const exHead = (t, n) => `<div class="me-exh"><span class="me-n">${n}</span><p>${esc(t.instr)} <i>(${t.type === "write" ? `${t.pts} points` : `${t.pts || 1} ${(t.pts || 1) === 1 ? "point" : "points"} each`})</i></p><span class="me-pts">___ / ${maxPts(t)}</span></div>`;
    const STATIONS = X.stations, ALL = STATIONS.flatMap(s => s.batteries.map(b => (b.station = s, b)));
    // titles: the title of the text, or the topic numbered when a station has several batteries on it
    STATIONS.forEach(s => EX.numberAll(s.batteries.filter(b => !b.title), b => b.topic, (b, t) => { b.title = t; }));
    ALL.forEach(b => { if (!b.instr) b.instr = b.type === "reading" ? "Read the text, then do the exercises below it." : ""; });
    const byId = Object.fromEntries(ALL.map(b => [b.id, b]));
    const scores = {}; // this visit only

    document.title = `${X.title} · Mock Exams · Language Dojo`;
    $("#examTitle").textContent = X.title;
    $("#crumbExam").textContent = X.title;
    $("#tabs").innerHTML = [["home", "The test"], ["train", "Training"], ["mock", "Mock test"]].map(([k, l]) => `<a class="tab" href="#${k}" data-tab="${k}">${l}</a>`).join("");
    const view = () => $("#view");
    let cur = null, timer = null;

    function route() {
      const h = location.hash.replace(/^#\/?/, "") || "home";
      const bat = h.startsWith("b-") ? byId[h.slice(2)] : null;
      const st = h.startsWith("s-") ? STATIONS.find(s => s.id === h.slice(2)) : null;
      const tab = bat || st || h === "train" ? "train" : h.startsWith("mock") ? "mock" : "home";
      if (cur && cur.running && h !== "mock-run") { stopTimer(); cur = null; }
      $$(".tab").forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
      window.Dojo.toView();
      if (bat) return renderBattery(bat);
      if (st) return renderStation(st);
      if (h === "train") return renderTraining();
      if (h === "mock-run") return renderMockRun();
      if (h === "mock") return renderMockIntro();
      renderHome();
    }
    window.addEventListener("hashchange", route);
    window.addEventListener("beforeunload", e => { if (cur && cur.running && !cur.done) { e.preventDefault(); e.returnValue = ""; } });

    /* ---------------- THE TEST ---------------- */
    function renderHome() {
      const total = X.test.sections.reduce((s, x) => s + x[1], 0);
      view().innerHTML = `
        <div class="vhead"><p>${esc(X.intro)}</p><p class="me-meta"><span>${esc(X.book)}</span><span>Class ${esc(X.cls)}</span><span>${esc(X.when)}</span><span>Level ${esc(X.level)}</span></p></div>
        <div class="me-cols">
          <div class="card me-structure"><h3>How the test works</h3><p>${X.test.time} minutes · ${total} points · ${X.test.sections.length} parts</p>
            <table class="gl-table"><thead><tr><th>Part</th><th>Points</th><th>What it checks</th></tr></thead><tbody>${X.test.sections.map(([n, p, w]) => `<tr><td>${esc(n)}</td><td class="me-pcol">${p}</td><td translate="no">${esc(w)}</td></tr>`).join("")}</tbody></table>
            <h4>From points to marks</h4><div class="me-grades" translate="no">${X.grades.map(([p, m]) => `<span class="${m === "6" ? "pass" : ""}"><b>${m}</b>${p}%</span>`).join("")}</div>
            <p class="me-note">The pass mark (6) is 75 points out of 100.</p></div>
          <div class="card me-plan"><h3>How to prepare</h3><ol>
            <li><b>Check what you know.</b> Go through the list below and tick what you can already do.</li>
            <li><b>Train part by part.</b> In Training, do the batteries of each part. Read the explanation of every mistake and try again.</li>
            <li><b>Finish with the mixed review</b> of each part: in the test the structures are all together.</li>
            <li><b>Take the mock test</b> in ${X.test.time} minutes, without notes, a day or two before the test. It gives you your mark.</li></ol>
            <a class="btn primary" href="#train">Start training ${ICON.arrow}</a></div>
        </div>
        <div class="card me-can"><h3>Can you…?</h3><ul>${X.can.map((c, i) => `<li><label><input type="checkbox"><span>${esc(c)}</span></label></li>`).join("")}</ul><p class="me-note">Nothing is saved: the list is only for you, now.</p></div>
        ${X.links.length ? `<h3 class="me-h3">More practice in Language Dojo</h3><div class="me-links">${X.links.map(([t, u, d]) => `<a class="card card-link" href="${window.Dojo.url(u)}"><b>${esc(t)}</b><span>${esc(d)}</span></a>`).join("")}</div>` : ""}`;
    }

    /* ---------------- TRAINING ---------------- */
    const nQ = bs => bs.reduce((s, b) => s + countOf(b), 0);
    function renderTraining() {
      view().innerHTML = `<div class="vhead"><h2>Training</h2><p>One station for each part of the test. Each battery is short and focused on one structure or skill: answer, check, read the explanations, and try again until it feels easy.</p></div>
        <div class="me-stations">${STATIONS.map((s, i) => `<a class="card card-link me-st" href="#s-${s.id}"><span class="me-ic">${icon(STATION_ICON[s.id] || "grammar")}</span><span class="me-stn">Part ${i + 1}</span><h3>${esc(s.name)}</h3><p>${esc(s.intro)}</p>
          <div class="gl-stats"><span>Batteries <b>${s.batteries.length}</b></span>${nQ(s.batteries) ? `<span>Questions <b>${nQ(s.batteries)}</b></span>` : ""}<span>Done <b>${s.batteries.filter(b => scores[b.id]).length}</b></span></div></a>`).join("")}</div>
        <div class="card me-cta"><div><h3>Ready for the real thing?</h3><p>When you have trained every part, take the mock test.</p></div><a class="btn ink" href="#mock">${ICON.test} Mock test</a></div>`;
    }
    function batCard(b, n) {
      const sc = scores[b.id];
      return `<a class="card card-link bat-card" href="#b-${b.id}"><span class="bt-type">${TYPE(b)}</span><h4 translate="no">${esc(b.title)}</h4><p>${esc(b.instr)}</p>
        <div class="bt-meta"><span>Step ${n}</span><span>${countOf(b) ? `${countOf(b)} ${unit(b)}` : ""}${sc ? ` · <b class="me-sc">Last score ${sc}</b>` : ""}</span></div></a>`;
    }
    function renderStation(s) {
      view().innerHTML = `<a class="back" href="#train">${ICON.back} Training</a><div class="vhead"><h2>${esc(s.name)}</h2><p>${esc(s.intro)}</p></div>
        <div class="bat-grid">${s.batteries.map((b, i) => batCard(b, i + 1)).join("")}</div>`;
    }
    function renderBattery(b) {
      const s = b.station, i = s.batteries.indexOf(b), next = s.batteries[i + 1];
      cur = { b };
      view().innerHTML = `<a class="back" href="#s-${s.id}">${ICON.back} ${esc(s.name)}</a>
        <div class="bt-head"><div class="bt-chips"><span class="bt-type">${TYPE(b)}</span>${countOf(b) ? `<span class="bt-n">${countOf(b)} ${unit(b)}</span>` : ""}<span class="bt-n">Step ${i + 1} of ${s.batteries.length}</span></div>
          <h2 translate="no">${esc(b.title)}</h2><p class="bt-goal">${esc(b.instr)}</p></div>
        <div id="btBody"></div><div class="bt-foot" id="btFoot"></div><div id="btResult" aria-live="polite"></div>`;
      const body = $("#btBody");
      cur.api = build(b, body, "train");
      const foot = checked => {
        const nav = `${next ? `<a class="btn primary" href="#b-${next.id}">Next: ${esc(next.title)} ${ICON.arrow}</a>` : `<a class="btn primary" href="#train">Back to Training ${ICON.arrow}</a>`}`;
        if (b.type === "phrases") return `${nav}`;
        if (b.type === "write") return checked ? `${nav}` : `<button class="btn ink lg" type="button" data-act="model">${ICON.check} Show the model answer</button>`;
        return checked ? `<button class="btn ink" type="button" data-act="retry">${ICON.restart} Try again</button>${nav}` : `<button class="btn ink lg" type="button" data-act="check">${ICON.check} Check answers</button>`;
      };
      $("#btFoot").innerHTML = foot(false);
      cur.foot = foot;
    }
    function showResult(ok, n) {
      const pct = Math.round(ok / n * 100);
      $("#btResult").innerHTML = `<div class="card bt-result"><div class="score">${ok}<span> / ${n}</span></div><p><b>${pct >= 80 ? "Excellent work." : pct >= 60 ? "Good progress." : "Keep training."}</b> <span>Read the explanations under each answer, then try again or move on.</span></p>
        <div class="bar"><span style="width:${pct}%;background:${pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--kincha)" : "var(--shu)"}"></span></div></div>`;
      $("#btResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    /* ---------------- MOCK TEST ---------------- */
    const M = X.mock;
    // number the exercises 1, 2, 3… across the whole test (a reading text has one number per task)
    const mockList = []; let mn = 1;
    M.sections.forEach(sec => { sec.max = 0; sec.exercises.forEach(t => { t.num = mn; mn += t.type === "reading" ? t.tasks.length : 1; sec.max += maxPts(t); mockList.push([sec, t]); }); });
    const mockTotal = M.sections.reduce((s, x) => s + x.max, 0);
    const markOf = pct => { let m = X.grades[0][1]; X.grades.forEach(([p, g]) => { if (pct >= p) m = g; }); return m; };

    function renderMockIntro() {
      view().innerHTML = `<div class="vhead"><h2>Mock test</h2><p>A complete test with the same structure, the same kind of exercises and the same points as the real one – but with different questions. Do it in one go, without notes.</p></div>
        <div class="me-cols"><div class="card me-structure"><h3>The mock test</h3><table class="gl-table"><thead><tr><th>Part</th><th>Points</th><th>Exercises</th></tr></thead><tbody>${M.sections.map(s => `<tr><td>${esc(s.name)}</td><td class="me-pcol">${s.max}</td><td>${s.exercises.map(t => t.type === "reading" ? `${t.num}–${t.num + t.tasks.length - 1}` : t.num).join(", ")}</td></tr>`).join("")}<tr><td><b>Total</b></td><td class="me-pcol"><b>${mockTotal}</b></td><td></td></tr></tbody></table></div>
          <div class="card me-plan"><h3>Before you start</h3><ol>
            <li>You have <b>${M.time} minutes</b>, like in the real test. The timer is a guide: when the time is up you can still finish.</li>
            <li>When you have finished, press <b>Finish and check</b>. Every answer is corrected with an explanation.</li>
            <li>For the short answers and the writing, compare your text with the model and give yourself the points with the criteria your teacher uses.</li>
            <li>You get your score out of ${mockTotal} and your mark.</li></ol>
            <label class="me-tm"><input type="checkbox" id="useTimer" checked> <span>Use the ${M.time}-minute timer</span></label>
            <a class="btn primary lg" href="#mock-run" id="startMock">${ICON.clock} Start the mock test</a></div></div>`;
      $("#startMock").addEventListener("click", () => { startTimerWanted = $("#useTimer").checked; });
    }
    let startTimerWanted = true;
    function stopTimer() { clearInterval(timer); timer = null; const t = $("#meTimer"); if (t) t.remove(); }
    function renderMockRun() {
      stopTimer();
      cur = { running: true, done: false, apis: [] };
      view().innerHTML = `<a class="back" href="#mock">${ICON.back} Mock test</a><div class="bt-head"><h2>${esc(X.title)} – mock test</h2><p class="bt-goal">Answer all the questions. Then press Finish and check at the bottom of the page.</p></div>
        ${M.sections.map((sec, si) => `<section class="me-sec"><div class="me-bar"><h3>${esc(sec.name)}</h3><span>___ / ${sec.max}</span></div>${sec.exercises.map((t, ti) =>
          t.type === "reading" ? `<div class="me-ex" data-ex="${si}-${ti}"></div>` : `<div class="me-ex">${exHead(t, t.num)}<div data-ex="${si}-${ti}"></div></div>`).join("")}</section>`).join("")}
        <div class="bt-foot" id="mockFoot"><button class="btn ink lg" type="button" data-act="finish">${ICON.flag} Finish and check</button></div><div id="mockResult" aria-live="polite"></div>`;
      M.sections.forEach((sec, si) => sec.exercises.forEach((t, ti) => cur.apis.push([sec, t, build(t, $(`[data-ex="${si}-${ti}"]`), "test", t.num)])));
      if (startTimerWanted) {
        const end = Date.now() + M.time * 60000, el = document.createElement("div");
        el.id = "meTimer"; el.className = "me-timer"; el.setAttribute("role", "timer"); document.body.appendChild(el);
        const tick = () => { const s = Math.max(0, Math.round((end - Date.now()) / 1000)); el.innerHTML = `${ICON.clock}<span>${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}</span>`; el.classList.toggle("low", s <= 300);
          if (s === 0) { clearInterval(timer); timer = null; el.classList.add("over"); toast("Time is up. Finish the exercise you are doing, then press Finish and check."); } };
        tick(); timer = setInterval(tick, 1000);
      }
    }
    // points of each exercise after checking: automatic part + self-assessed part
    function mockScore() {
      const per = M.sections.map(s => ({ s, auto: 0, self: 0, selfMax: 0, done: true }));
      cur.apis.forEach(([sec, t, api]) => {
        const p = per[M.sections.indexOf(sec)];
        const parts = t.type === "reading" ? t.tasks.map((x, k) => [x, api.subs[k]]) : [[t, api]];
        parts.forEach(([x, a]) => {
          if (a.self) { p.self += a.self.get(); p.selfMax += a.self.max; if (!a.self.done()) p.done = false; }
          else p.auto += (a.ok || 0) * (x.pts || 1);
        });
      });
      return per;
    }
    function drawMockResult() {
      const per = mockScore(), tot = per.reduce((s, p) => s + p.auto + p.self, 0), pending = per.some(p => !p.done);
      const pct = Math.round(tot / mockTotal * 100), mark = markOf(pct);
      $("#mockResult").innerHTML = `<div class="card me-result"><h3>Your result</h3>
        <table class="gl-table"><thead><tr><th>Part</th><th>Points</th></tr></thead><tbody>${per.map(p => `<tr><td>${esc(p.s.name)}${p.selfMax ? ` <span class="me-small">(${p.done ? "includes your self-assessment" : "self-assessment to complete"})</span>` : ""}</td><td class="me-pcol">${+(p.auto + p.self).toFixed(1)} / ${p.s.max}</td></tr>`).join("")}</tbody></table>
        <div class="me-final"><div class="score">${+tot.toFixed(1)}<span> / ${mockTotal}</span></div><div class="me-mark"><span>Mark</span><b>${mark}</b></div></div>
        <p>${pending ? "<b>Not finished yet:</b> give yourself the points for the short answers and the writing (scroll up), and the result will update." : pct >= 75 ? "<b>Well done – you are ready.</b> Go back to the batteries where you lost points and do them once more." : "<b>Keep training.</b> Look at the parts where you lost most points and do those batteries again in Training."}</p>
        <div class="bt-foot"><a class="btn soft" href="#train">Training</a><button class="btn ink" type="button" data-act="again">${ICON.restart} Take the mock test again</button></div></div>`;
    }

    /* ---------------- events ---------------- */
    view().addEventListener("click", async e => {
      const a = e.target.closest("[data-act]"); if (!a || !cur) return;
      const act = a.dataset.act;
      if (act === "check") {
        const miss = cur.api.missing();
        if (miss && !cur.warned) { cur.warned = true; toast("Some answers are missing. Press Check answers again to check anyway."); return; }
        // open answers are compared with the model, not counted in the score
        const ok = cur.api.check(), opens = cur.b.type === "reading" ? cur.b.tasks.filter(x => x.type === "open").reduce((s, x) => s + x.items.length, 0) : 0, n = countOf(cur.b) - opens;
        scores[cur.b.id] = `${ok}/${n}`;
        $("#btFoot").innerHTML = cur.foot(true);
        showResult(ok, n);
      } else if (act === "retry") { renderBattery(cur.b); window.Dojo.toView(true); }
      else if (act === "model") { cur.api.check(); scores[cur.b.id] = "done"; $("#btFoot").innerHTML = cur.foot(true); }
      else if (act === "finish") {
        const miss = cur.apis.reduce((s, x) => s + x[2].missing(), 0);
        if (!cur.done) {
          const go = await dialog({ title: "Finish the mock test?", text: miss ? `${miss} answers are still empty. Do you want to finish and check anyway?` : "Your answers will be checked and you will see your result.", ok: "Finish and check", cancel: "Go back" });
          if (!go) return;
          stopTimer(); cur.done = true;
          cur.apis.forEach(([sec, t, api]) => { if (t.type === "reading") api.subs.forEach(s => { s.ok = s.check(); }); else api.ok = api.check(); });
          $("#mockFoot").innerHTML = "";
          drawMockResult();
          $("#mockResult").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (act === "again") { cur = null; renderMockRun(); window.Dojo.toView(true); }
    });
    view().addEventListener("selfchange", () => { if (cur && cur.done) drawMockResult(); });
    view().addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches("input[type=text]")) { e.preventDefault(); const ins = $$("#view input[type=text]:not([disabled])"); const i = ins.indexOf(e.target); if (ins[i + 1]) ins[i + 1].focus(); } });

    route();
    window.__mockExam = { X, ALL, byId, mockList, mockTotal, maxPts, countOf, accepts, sameSentence, markOf, cur: () => cur }; // used by automated tests
  }
})();
