/* =====================================================================
   Language Dojo — PDF Worksheet Builder: section adapters
   Each section page is opened (hidden, with ?ws=1) and its own exercise data is
   read through the hook it already exposes. The adapter converts that data into
   the common worksheet format used by pdf.js:

   exercise = { uid, section, sectionTitle, area, group, topic, belt, type, title, instr, source?, parts: [part] }
   part     = { k: "q", items: [item] }                      numbered questions
              { k: "passage", paras, numbered?, answers?, whys?, keyed?, title? }   reading text / text with gaps {n}
              { k: "match", left, right, ans: [letters], whys? }
              { k: "grid", items: [{ q, key }], cols? }     short items in columns
              { k: "table", head, rows, keyRows, widths? }  table to complete
              { k: "sort", cols, items, ans: {item: column} }
              { k: "box", items }                           word box / options
              { k: "writing", prompt, points?, lines?, model? }
              { k: "media", label, detail }                 reference to audio / video
              { k: "p", text }                              plain paragraph
   item     = { t: "mc" | "gap" | "write" | "transform" | "tf" | "dialogue" | "order" | "choose", …, key, why }

   Because the adapters read the data the sections already use, new exercises added
   to a section appear in the builder automatically.
   ===================================================================== */
(function (root) {
  "use strict";
  const L = "abcdefghijklmnopqrstuvwxyz";
  const strip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\[([^\]]+)\]/g, "$1").replace(/~~/g, "").replace(/\s+/g, " ").trim();
  // deterministic shuffle, so that the same exercise always has the same option order
  function seeded(arr, seedStr) {
    let s = 0; for (const ch of String(seedStr)) s = (s * 31 + ch.charCodeAt(0)) >>> 0; s = s || 1;
    const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296), a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const mc = (text, opts, ans, why, uid) => {
    const order = uid ? seeded(opts.map((_, i) => i), uid) : opts.map((_, i) => i);
    const o = order.map(i => opts[i]), a = order.indexOf(ans);
    return { t: "mc", text, opts: o, ans: a, key: `${L[a]}  ${o[a]}`, why };
  };
  const beltName = (B, l) => l ? `${B.get(l).name} · ${({ 1: "A1", 2: "A2", 3: "B1", 4: "B2", 5: "C1", 6: "C2" })[l]}` : "";
  const chunk = (a, n) => { const out = []; for (let i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; };
  // ___ (verb) in passages → numbered gaps {1}, {2}…
  const numberGaps = (paras, start = 1) => { let n = start - 1; return paras.map(p => p.replace(/___/g, () => `{${++n}}`)); };

  /* ---------------- Verb Tenses ---------------- */
  function verbTenses(w) {
    const T = w.__tenseDojo, EX = w.DojoEx, B = w.DojoBelts;
    const all = T.BATS.concat(T.TESTS.filter(t => !T.BATS.includes(t)));
    return all.map(b => {
      const topic = b.topic ? T.byId[b.topic] : null, area = b.test ? "Tests" : (T.AREAS.find(a => a.id === T.areaKey(topic)) || {}).title;
      const parts = [], items = [];
      const flush = () => { if (items.length) { parts.push({ k: "q", items: items.splice(0) }); } };
      b.items.forEach((q, i) => {
        const uid = b.id + ":" + i;
        switch (q.type) {
          case "mc": items.push(mc(q.text, q.answers, 0, q.expl, uid)); break;
          case "tense": items.push(mc((q.text.includes("___") ? "Which tense fits the gap? " : "Which tense is used? ") + q.text, q.answers, 0, q.expl, uid)); break;
          case "gap": case "comp": items.push({ t: "gap", text: q.text, ans: [q.answers[0]], key: q.answers.join(" / "), why: q.expl }); break;
          case "context": items.push({ t: "gap", text: q.context + "  " + q.text, ans: [q.answers[0]], key: q.answers.join(" / "), why: q.expl }); break;
          case "trans": items.push({ t: "gap", text: `${q.instr}  ${q.source}  →  ${q.text}`, ans: [q.answers[0]], key: q.answers.join(" / "), why: q.expl }); break;
          case "ita": items.push({ t: "gap", text: `Translate: ${q.it}  →  ${q.text}`, ans: [q.answers[0]], key: q.answers.join(" / "), why: q.expl }); break;
          case "build": items.push({ t: "write", text: `${q.instr}  ${q.text}`, lines: 1, key: q.answers[0], why: q.expl }); break;
          case "order": { const words = q.answers[0].replace(/[.?!]+$/, "").split(/\s+/); items.push({ t: "order", words: seeded(words.map((x, k) => k ? x : (/^I(\b|')/.test(x) ? x : x.toLowerCase())), uid), key: q.answers[0], why: q.expl }); break; }
          case "error": items.push({ t: "write", text: `Find the mistake and correct it:  ${T.plainError(q)}`, lines: 1, key: `${T.segs(q)[q.wrong]} → ${q.answers[0]}`, why: q.expl }); break;
          case "judge": items.push({ t: "write", text: `Right or wrong? If it is wrong, correct it:  ${q.text}`, lines: 1, key: q.correct ? "Right" : `Wrong → ${q.answers[0]}`, why: q.expl }); break;
          case "dialogue": {
            const lines = (q.context ? [["", q.context]] : []).concat(q.lines);
            let k = 0; const ansByLine = lines.map(([, l]) => (l.match(/___/g) || []).map(() => (q.answers[k++] || [""])[0]));
            if (q.context) ansByLine[0] = [];
            items.push({ t: "dialogue", lines, ansByLine, key: q.answers.map(a => a[0]).join("  ·  "), why: q.expl }); break;
          }
          case "halves": flush(); { const right = seeded(q.pairs.map(p => p[1]), uid); parts.push({ k: "p", text: q.instr }); parts.push({ k: "match", left: q.pairs.map(p => p[0] + " …"), right, ans: q.pairs.map(p => L[right.indexOf(p[1])]) }); } break;
          case "passage": flush(); parts.push({ k: "passage", title: q.title, numbered: true, keyed: true, paras: numberGaps(q.paras), answers: q.answers.map(a => a.join(" / ")), whys: q.expls }); break;
        }
      });
      flush();
      return { uid: "vt:" + b.id, section: "verb-tenses", sectionTitle: "Verb Tenses", area: "English · Grammar", group: area || "", topic: topic ? topic.title : (b.test ? "Belt tests" : "Custom"),
        belt: b.belt, beltLabel: beltName(B, b.belt), type: EX.TYPE[b.typeKey], title: b.title, instr: strip(T.instruction(b)), parts };
    });
  }

  /* ---------------- shared by Dependent Prepositions and the grammar sections ---------------- */
  function battery(b, EX, B, meta) {
    const parts = [];
    const uid = meta.prefix + b.id;
    if (b.type === "mc") parts.push({ k: "q", items: b.items.map((it, i) => mc(it[0], it[1], it[2], it[3], meta.shuffle ? uid + i : null)) });
    if (b.type === "gap") parts.push({ k: "q", items: b.items.map(it => ({ t: "gap", text: strip(it[0]).replace(/_{3,}/g, "___"), ans: it[1].map(g => g[0]), key: it[1].map(g => g.join(" / ")).join("  ·  "), why: strip(it[2]) })) });
    if (b.type === "correct") parts.push({ k: "q", items: b.items.map(it => ({ t: "write", text: it[0], lines: 1, key: it[1][0], why: strip(it[2]) })) });
    if (b.type === "transform") parts.push({ k: "q", items: b.items.map(it => ({ t: "transform", first: it[0], kw: it[1], start: it[2], end: it[3], ans: it[4][0], key: `${it[2]} ${it[4][0]} ${it[3]}`.replace(/\s+/g, " ").trim(), why: strip(it[5]) })) });
    if (b.type === "rewrite") parts.push({ k: "q", items: b.items.map(it => ({ t: "write", text: it[0], cue: it[3] || "", lines: 1, key: it[1][0], why: strip(it[2]) })) });
    if (b.type === "translate") parts.push({ k: "q", items: b.items.map(it => ({ t: "write", text: `${it[0]}  (${it[1]})`, lines: 1, key: it[3], why: strip(it[4]) })) });
    if (b.type === "text" || b.type === "dialogue") {
      const paras = b.parts.filter(p => p[0] !== "#").map(([sp, line]) => (sp ? sp + ":  " : "") + line), heading = b.parts.find(p => p[0] === "#");
      parts.push({ k: "passage", title: heading ? heading[1] : "", numbered: true, keyed: true, paras, answers: b.gaps.map(g => g[0].join(" / ")), whys: b.gaps.map(g => strip(g[1])) });
    }
    if (b.type === "halves") parts.push({ k: "match", left: b.left.map(x => x + " …"), right: b.right, ans: b.answers, whys: (b.why || []).map(strip) });
    return { uid, section: meta.section, sectionTitle: meta.title, area: "English · Grammar", group: meta.groupOf(b), topic: meta.topicOf(b), belt: b.belt, beltLabel: beltName(B, b.belt), type: EX.TYPE[b.typeKey], title: b.title, instr: strip(b.instr), parts };
  }
  function depPrep(w) {
    const D = w.__depprep, EX = w.DojoEx, B = w.DojoBelts;
    const cat = b => /verbs/.test(b.title) ? "Verbs + Prepositions" : /Adjectives/.test(b.title) ? "Adjectives + Prepositions" : /Nouns/.test(b.title) ? "Nouns + Prepositions" : /Confused/.test(b.title) ? "Easily Confused Prepositions" : b.type === "text" || b.type === "dialogue" ? "Texts" : "Dependent Prepositions";
    return D.BATS.map(b => battery(b, EX, B, { prefix: "dp:", section: "dependent-prepositions", title: "Dependent Prepositions", shuffle: false, groupOf: () => "Practice", topicOf: b => cat(b) }));
  }
  function grammar(sectionId, title) {
    return w => {
      const G = w.__grammar, EX = w.DojoEx, B = w.DojoBelts, CFG = w.GL.config;
      const les = Object.fromEntries(G.LESSONS.map(l => [l.id, l])), grp = Object.fromEntries(CFG.groups);
      return G.ORDERED.map(b => battery(b, EX, B, { prefix: sectionId.slice(0, 2) + ":", section: sectionId, title, shuffle: true,
        groupOf: b => b.lesson === "review" ? "Review" : grp[les[b.lesson].group], topicOf: b => b.lesson === "review" ? CFG.reviewTitle : les[b.lesson].title }));
    };
  }

  /* ---------------- Skill Development ---------------- */
  const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  function skills(w) {
    const K = w.__skills, B = w.DojoBelts;
    const SK = { reading: "Reading", use: "Use of English", writing: "Writing", listening: "Listening" };
    return K.TASKS.map(t => {
      const parts = [];
      const media = () => {
        if (t.video) parts.push({ k: "media", label: `Video: ${t.video.speaker}, “${t.video.title}” (${t.video.source})`, detail: `Watch the segment ${mmss(t.video.start || 0)}–${mmss(t.video.end)} on Language Dojo (Skill Development › Listening) or at ${t.video.page}. ${t.video.credit || ""}`.trim() });
        else if (t.script) parts.push({ k: "media", label: "Audio recording", detail: "Listen to the recording of this task on Language Dojo (Skill Development › Listening)." });
      };
      if (t.intro && t.skill !== "reading") parts.push({ k: "p", text: t.intro, style: "instr" });
      switch (t.type) {
        case "rmc": parts.push({ k: "passage", paras: t.text }); parts.push({ k: "q", items: t.questions.map(([q, o, a, why]) => mc(q, o, a, why, null)) }); break;
        case "gapped": {
          const letters = t.sentences.map((_, i) => L[i].toUpperCase());
          parts.push({ k: "passage", numbered: true, paras: t.text.map(p => p.replace(/\[(\d+)\]/g, "{$1}")) });
          parts.push({ k: "p", text: "Sentences:", style: "bodyB" });
          t.sentences.forEach(([s], i) => parts.push({ k: "p", text: `${letters[i]}   ${s}` }));
          const gaps = Math.max(...t.sentences.map(s => s[1]));
          parts.push({ k: "grid", cols: 6, items: Array.from({ length: gaps }, (_, g) => { const i = t.sentences.findIndex(s => s[1] === g + 1); return { q: `Gap ${g + 1}`, key: `Gap ${g + 1}: ${letters[i]}` }; }) });
          break;
        }
        case "match":
          if (t.intro) parts.push({ k: "p", text: t.intro, style: "instr" });
          t.sections.forEach(([l, name, text]) => { parts.push({ k: "p", text: `${l}   ${name}`, style: "bodyB" }); parts.push({ k: "passage", paras: Array.isArray(text) ? text : [text] }); });
          parts.push({ k: "q", items: t.statements.map(([s, l, why]) => ({ t: "gap", text: `${s}   ___`, ans: ["A"], key: l, why })) });
          break;
        case "mcc": parts.push({ k: "passage", title: "", numbered: true, paras: [].concat(t.text) }); parts.push({ k: "q", items: t.gaps.map(([o, a, why], i) => Object.assign(mc(`(${i + 1})`, o, a, why, null), { text: `Gap ${i + 1}` })) }); break;
        case "open": parts.push({ k: "passage", numbered: true, keyed: true, paras: [].concat(t.text), answers: t.gaps.map(g => g[0].join(" / ")), whys: t.gaps.map(g => g[1]) }); break;
        case "wf": parts.push({ k: "passage", numbered: true, keyed: true, paras: [].concat(t.text).map(p => p.replace(/\{(\d+)\}/g, (m, n) => `{${n}} (${t.gaps[n - 1][0]})`)), answers: t.gaps.map(g => g[1].join(" / ")), whys: t.gaps.map(g => g[2]) }); break;
        case "kwt": parts.push({ k: "q", items: t.items.map(([f, kw, s, e, acc, why]) => ({ t: "transform", first: f, kw, start: s, end: e, ans: acc[0], key: `${s} ${acc[0]} ${e}`.replace(/\s+/g, " ").trim(), why })) }); break;
        case "write":
          parts.push({ k: "writing", prompt: [].concat(t.prompt).concat(t.input ? [t.input.title + ":"].concat(t.input.lines) : []), points: t.notes || [], lines: t.level >= 5 ? 22 : t.level >= 4 ? 18 : 14, model: (t.model || []).map(m => m[0]) });
          if (t.checklist) parts.push({ k: "p", text: "Checklist: " + t.checklist.join(" · "), style: "instr" });
          break;
        case "lmc": case "vmc": media(); parts.push({ k: "q", items: t.questions.map(([q, o, a, why]) => mc(q, o, a, why, null)) }); break;
        case "vtf": media(); parts.push({ k: "q", items: t.statements.map(([s, v, why]) => ({ t: "tf", text: s, key: v ? "True" : "False", why })) }); break;
        case "vmatch": media(); parts.push({ k: "p", text: t.ask }); parts.push({ k: "p", text: t.options.map(([k, d]) => `${k}  ${d}`).join("\n") }); parts.push({ k: "q", items: t.items.map(([it, l, why]) => ({ t: "gap", text: `${it}   ___`, ans: ["A"], key: l, why })) }); break;
        case "complete": case "vcomplete": media(); parts.push({ k: "q", items: t.sentences.map(([a, b, acc, why]) => ({ t: "gap", text: `${a} ___ ${b}`, ans: [acc[0]], key: acc.join(" / "), why })) }); break;
      }
      // options of vmatch: one per paragraph
      parts.forEach(p => { if (p.k === "p" && p.text.includes("\n")) { const lines = p.text.split("\n"); p.k = "box"; p.items = lines; } });
      return { uid: "sk:" + t.id, section: "skills", sectionTitle: "Skill Development", area: "English · " + SK[t.skill], group: SK[t.skill], topic: t.topic || SK[t.skill], belt: t.level, beltLabel: beltName(B, t.level),
        type: K.typeLabel(t), title: t.title, instr: strip(K.instruction(t)), parts };
    });
  }

  /* ---------------- Sounds of English ---------------- */
  function phonetics(w) {
    const Ph = w.__phon, EX = w.DojoEx, B = w.DojoBelts;
    const units = Object.fromEntries((Ph.UNITS || []).map(u => [u.id, u.title]));
    const KIND = { mc: "mc", choice: "mc", odd: "oddOne", multi: "soundId", seg: "soundId", write: "transcription", text: "transcription", stress: "stress", gap: "gaps", match: "matching", sort: "sorting", fix: "errors", listen: "listening" };
    const INSTR = { mc: "Choose the correct answer.", oddOne: "Three words share the same sound: find the word that is different.", soundId: "Look at each word and answer the question about its sounds.", transcription: "Read the phonemic transcription and write the word or sentence in ordinary spelling.", stress: "Underline the stressed syllable in each word.", gaps: "Complete the sentences with the missing words.", matching: "Match each item on the left with the correct item on the right.", sorting: "Write each word in the correct column.", errors: "Each transcription contains one wrong symbol. Circle it and write the correct symbol.", listening: "Your teacher (or the audio on Language Dojo) says one word from each pair. Tick the word you hear." };
    const topics = [...Ph.LESSONS.map(l => ({ id: l.id, title: l.title, unit: l.unit })), ...Ph.SOUNDS.map(s => ({ id: s.id, title: `The sound /${s.ipa}/ as in ${s.keyword}`, unit: s.unit }))];
    const out = [];
    topics.forEach(tp => {
      let pool; try { pool = Ph.poolFor(tp.id); } catch (e) { return; }
      const seen = new Set(); pool = pool.filter(q => { const k = JSON.stringify([q.type, q.prompt, q.word, q.ipa, q.text, q.opts, q.pairs, q.items]); if (seen.has(k)) return false; seen.add(k); return true; });
      const byKind = {}; pool.forEach(q => (byKind[KIND[q.type]] = byKind[KIND[q.type]] || []).push(q));
      Object.entries(byKind).forEach(([kind, qs]) => {
        const size = kind === "matching" || kind === "sorting" ? 1 : 12;
        chunk(qs, size).forEach((set, ci, arr) => {
          const parts = [], items = [];
          const flush = () => { if (items.length) parts.push({ k: "q", items: items.splice(0) }); };
          set.forEach((q, i) => {
            const uid = tp.id + kind + ci + i;
            switch (q.type) {
              case "mc": case "choice": case "odd": { const opts = q.opts, a = opts.indexOf(q.answer); items.push(mc(q.prompt || "", opts, a < 0 ? 0 : a, q.expl, uid)); break; }
              case "listen": items.push(mc("", q.opts, q.opts.indexOf(q.answer), q.expl, null)); break;
              case "multi": items.push({ t: "choose", text: `Tick every vowel sound you hear in “${q.word}”:   ${q.opts.join("    ")}`, key: q.correct.join("  "), why: q.expl }); break;
              case "seg": items.push({ t: "choose", text: q.prompt + "  (underline them)", display: q.parts.join(""), key: q.parts.filter((p, k) => q.correct.includes(k)).join(", ") + (q.ipa ? `   ${q.ipa}` : ""), why: q.expl }); break;
              case "write": items.push({ t: "write", text: q.ipa, textStyle: "text", lines: 1, key: q.answers.join(" / "), why: q.expl }); break;
              case "text": items.push({ t: "write", text: q.ipa, textStyle: "text", lines: 2, key: q.answer, why: q.expl }); break;
              case "stress": items.push({ t: "choose", text: q.context ? q.context : "", display: q.syl.join(" · "), key: q.syl.map((s, k) => k === q.idx ? s.toUpperCase() : s).join("·") + (q.ipa ? `   ${q.ipa}` : ""), why: q.expl }); break;
              case "fix": items.push({ t: "write", text: `${q.word}:   /${q.segs.join("")}/`, textStyle: "text", lines: 1, key: `${q.segs[q.wrong]} → ${q.correct}   ${q.ipa}`, why: q.expl }); break;
              case "gap": items.push({ t: "gap", text: q.text, ans: q.answers.map(a => [].concat(a)[0]), key: q.answers.map(a => [].concat(a).join(" / ")).join("  ·  "), why: q.expl }); break;
              case "match": flush(); { const right = seeded(q.pairs.map(p => p[1]), uid); parts.push({ k: "p", text: q.prompt }); parts.push({ k: "match", left: q.pairs.map(p => p[0]), right, ans: q.pairs.map(p => L[right.indexOf(p[1])]) }); } break;
              case "sort": flush(); { const ans = {}; q.items.forEach(([word, col]) => { ans[word] = q.cols[col]; }); parts.push({ k: "p", text: q.prompt }); parts.push({ k: "sort", cols: q.cols, items: seeded(q.items.map(x => x[0]), uid), ans }); } break;
            }
          });
          flush();
          if (kind === "gaps") { const bank = [...new Set(set.flatMap(q => q.bank || []))]; if (bank.length) parts.unshift({ k: "box", items: bank }); }
          if (kind === "listening") parts.unshift({ k: "media", label: "Audio", detail: "The words are recorded on the Language Dojo page of this sound (Sounds of English)." });
          const belt = Math.round(set.reduce((s, q) => s + (q.belt || 1), 0) / set.length);
          out.push({ uid: `ph:${tp.id}:${kind}:${ci}`, section: "phonetics", sectionTitle: "Sounds of English", area: "English · Pronunciation", group: units[tp.unit] || tp.unit || "", topic: tp.title, belt, beltLabel: beltName(B, belt),
            type: EX.TYPE[kind], title: arr.length > 1 ? `${tp.title} – ${ci + 1}` : tp.title, instr: INSTR[kind], parts });
        });
      });
    });
    return out;
  }

  /* ---------------- Irregular Verbs ---------------- */
  function irregular(w) {
    const V = w.VERB_DATA, EX = w.DojoEx;
    const out = [], groups = chunk(V, 15);
    groups.forEach((g, i) => {
      const range = `${g[0][0]} – ${g[g.length - 1][0]}`;
      // which form is given rotates through the verbs, so every form is practised
      const rows = g.map((v, k) => { const given = k % 3; return [given === 0 ? v[0] : null, given === 1 ? v[1] : null, given === 2 ? v[2] : null, v[3]]; });
      out.push({ uid: `iv:forms:${i}`, section: "irregular-verbs", sectionTitle: "Irregular Verbs", area: "English · Verbs", group: "Verb forms", topic: "Irregular Verbs", belt: 0, type: EX.TYPE.gaps, title: `Irregular Verbs – ${range}`,
        instr: "Complete the table: write the missing forms of each verb.", parts: [{ k: "table", head: ["Base form", "Past simple", "Past participle", "Italian"], widths: [1, 1, 1, 1.2], rows, keyRows: g.map(v => [v[0], v[1], v[2]]) }] });
      out.push({ uid: `iv:ita:${i}`, section: "irregular-verbs", sectionTitle: "Irregular Verbs", area: "English · Verbs", group: "Translation", topic: "Irregular Verbs", belt: 0, type: EX.TYPE.translation, title: `Irregular Verbs: translation – ${range}`,
        instr: "Translate each Italian verb into English and write its three forms.", parts: [{ k: "table", head: ["Italian", "Base form", "Past simple", "Past participle"], widths: [1.3, 1, 1, 1], rows: seeded(g, "ita" + i).map(v => [v[3], null, null, null]), keyRows: seeded(g, "ita" + i).map(v => [v[0], v[1], v[2]]) }] });
    });
    return out;
  }

  /* ---------------- Writing System (Japanese) ---------------- */
  function japanese(w) {
    const J = w.__jpDojo, EX = w.DojoEx, B = w.DojoBelts, KJ = w.DOJO_KANJI, KANA = w.DOJO_KANA;
    const out = [];
    ["hiragana", "katakana"].forEach(script => {
      const items = script === "hiragana" ? J.HIRA : J.KATA, S = script[0].toUpperCase() + script.slice(1);
      (KANA && KANA[script] ? KANA[script].sections : [{ id: "basic", title: "Gojūon" }, { id: "dakuten", title: "Dakuten and handakuten" }, { id: "yoon", title: "Yōon" }]).forEach(sec => {
        const set = items.filter(k => k.sect === sec.id); if (!set.length) return;
        const belt = Math.min(...set.map(k => k.belt || 1));
        chunk(set, 30).forEach((part, ci, arr) => {
          const tag = arr.length > 1 ? ` – ${ci + 1}` : "";
          out.push({ uid: `jp:${script}:${sec.id}:r:${ci}`, section: "japanese-dojo", sectionTitle: "Writing System", area: "Japanese · Writing", group: S, topic: `${S}: ${sec.title}`, belt, beltLabel: beltName(B, belt),
            type: "Writing – rōmaji", title: `${S}: ${sec.title}${tag}`, instr: `Write the rōmaji for each ${script} character.`, parts: [{ k: "grid", cols: 5, big: true, items: seeded(part, script + sec.id + ci).map(k => ({ q: k.ch, key: `${k.ch} ${k.rom}` })) }] });
          out.push({ uid: `jp:${script}:${sec.id}:k:${ci}`, section: "japanese-dojo", sectionTitle: "Writing System", area: "Japanese · Writing", group: S, topic: `${S}: ${sec.title}`, belt, beltLabel: beltName(B, belt),
            type: EX.TYPE.charWriting, title: `${S}: ${sec.title} – from rōmaji${tag}`, instr: `Write the ${script} character for each sound.`, parts: [{ k: "grid", cols: 5, items: seeded(part, "k" + script + sec.id + ci).map(k => ({ q: k.rom, key: `${k.rom} ${k.ch}` })) }] });
        });
      });
    });
    if (J.WORDS && J.WORDS.length) chunk(J.WORDS, 16).forEach((set, ci, arr) => out.push({ uid: `jp:words:${ci}`, section: "japanese-dojo", sectionTitle: "Writing System", area: "Japanese · Writing", group: "Katakana", topic: "Katakana loanwords", belt: 3, beltLabel: beltName(B, 3),
      type: EX.TYPE.translation, title: `Katakana loanwords${arr.length > 1 ? ` – ${ci + 1}` : ""}`, instr: "Read each loanword, write it in rōmaji and give its meaning.", parts: [{ k: "table", head: ["Katakana", "Rōmaji", "Meaning"], widths: [1, 1, 1.4], rows: set.map(x => [x.ch, null, null]), keyRows: set.map(x => [x.ch, x.rom, x.en]) }] }));
    (KJ ? KJ.groups : []).forEach(g => {
      const set = J.KANJI.filter(k => k.g === g.id); if (!set.length) return;
      const rd = r => (r || []).map(x => x[0]).join("、");
      out.push({ uid: `jp:kanji:${g.id}:m`, section: "japanese-dojo", sectionTitle: "Writing System", area: "Japanese · Kanji", group: "Kanji", topic: `Kanji: ${g.title}`, belt: g.belt, beltLabel: beltName(B, g.belt),
        type: EX.TYPE.translation, title: `Kanji: ${g.title} (${g.jp}) – meanings and readings`, instr: "Write the meaning, the on'yomi and the kun'yomi of each kanji.", parts: [{ k: "table", head: ["Kanji", "Meaning", "On'yomi", "Kun'yomi"], widths: [0.6, 1.3, 1, 1.1], rows: set.map(k => [k.k, null, null, null]), keyRows: set.map(k => [k.k, k.mean, rd(k.on) || "–", rd(k.kun) || "–"]) }] });
      const words = set.flatMap(k => (k.words || []).slice(0, 2)).slice(0, 16);
      if (words.length) out.push({ uid: `jp:kanji:${g.id}:w`, section: "japanese-dojo", sectionTitle: "Writing System", area: "Japanese · Kanji", group: "Kanji", topic: `Kanji: ${g.title}`, belt: g.belt, beltLabel: beltName(B, g.belt),
        type: "Writing – readings", title: `Kanji: ${g.title} (${g.jp}) – vocabulary`, instr: "Write the reading of each word in hiragana.", parts: [{ k: "grid", cols: 4, big: true, items: words.map(x => ({ q: x[0], key: `${x[0]} ${x[1]} (${x[2]})` })) }] });
    });
    return out;
  }

  /* ---------------- registry ---------------- */
  const SECTIONS = [
    { id: "verb-tenses", title: "Verb Tenses", area: "Grammar", url: "english/verb-tenses/index.html", ready: w => w.__tenseDojo, extract: verbTenses },
    { id: "dependent-prepositions", title: "Dependent Prepositions", area: "Grammar", url: "english/dependent-prepositions/index.html", ready: w => w.__depprep, extract: depPrep },
    { id: "modal-verbs", title: "Modal Verbs", area: "Grammar", url: "english/modal-verbs/index.html", ready: w => w.__grammar, extract: grammar("modal-verbs", "Modal Verbs") },
    { id: "passive-voice", title: "The Passive Voice", area: "Grammar", url: "english/passive-voice/index.html", ready: w => w.__grammar, extract: grammar("passive-voice", "The Passive Voice") },
    { id: "irregular-verbs", title: "Irregular Verbs", area: "Verbs", url: "english/irregular-verbs/index.html", ready: w => w.VERB_DATA && w.DojoEx, extract: irregular },
    { id: "skills", title: "Skill Development", area: "Skills", url: "english/skills/index.html", ready: w => w.__skills, extract: skills },
    { id: "phonetics", title: "Sounds of English", area: "Pronunciation", url: "english/phonetics/index.html", ready: w => w.__phon, extract: phonetics },
    { id: "japanese-dojo", title: "Writing System", area: "Japanese", url: "japanese/writing-system/index.html", ready: w => w.__jpDojo, extract: japanese }
  ];
  root.DojoWorksheetAdapters = { SECTIONS, strip, seeded };
})(typeof window !== "undefined" ? window : globalThis);
