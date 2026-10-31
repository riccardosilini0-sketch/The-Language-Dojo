/* =====================================================================
   Verb Tenses — content registry
   Content files call TenseDojo.add() (a new topic) or TenseDojo.extend()
   (more exercises for an existing topic). The interface (app.js) only
   reads from this registry: grammar content and interface logic stay separate.

   Topic: { id, area, group, title, short, intro, form?, uses: [[label, example]], q: [...] }
     area: "tenses" | "contrasts" | "mixed" | "challenges"

   Belt = difficulty of the exercise (it classifies materials, not students):
     1 White (basic) · 2 Yellow (elementary–intermediate) · 3 Orange (intermediate)
     4 Green (intermediate–advanced) · 5 Blue (advanced) · 6 Black (expert)

   Exercise formats (compact arrays). Write answers in full: contractions typed by
   students (I'm, she's, won't, hadn't…) are accepted automatically.
     ["g", belt, "Sentence with ___ (verb).", ["answer", "other accepted answer"], "Explanation"]          fill in the gap
     ["m", belt, "Sentence with ___ .", ["correct", "wrong", "wrong", "wrong"], "Explanation"]              multiple choice (first = correct)
     ["c", belt, "Sentence with ___ (subject / verb).", ["answer"], "Explanation"]                          sentence completion
     ["t", belt, "Instruction", "Original sentence.", "New sentence with ___ .", ["answer"], "Explanation"]  sentence transformation
     ["e", belt, "Sentence with [segment] [segment] [segment].", wrongIndex, ["correction"], "Explanation"] error correction (segments in [ ], index from 0)
     ["k", belt, "Sentence (with ___ or complete).", ["Correct tense", "Tense", "Tense", "Tense"], "Explanation"] choose the correct tense
     ["i", belt, "Frase italiana.", "English sentence with ___ .", ["answer"], "Explanation"]               translation from Italian
     ["x", belt, "Short context.", "Sentence with ___ (verb).", ["answer"], "Explanation"]                  context-based gap
   ===================================================================== */
window.TenseDojo = {
  topics: [],
  TYPES: {
    gap: "Fill in the gaps", mc: "Multiple choice", comp: "Sentence completion", trans: "Sentence transformation",
    error: "Error correction", tense: "Choose the correct tense", ita: "Translation", context: "In context"
  },
  parse(topicId, r, i) {
    const q = { id: topicId + "-" + i, topic: topicId, belt: r[1] };
    switch (r[0]) {
      case "g": return Object.assign(q, { type: "gap", text: r[2], answers: r[3], expl: r[4] });
      case "m": return Object.assign(q, { type: "mc", text: r[2], answers: r[3], expl: r[4] });
      case "c": return Object.assign(q, { type: "comp", text: r[2], answers: r[3], expl: r[4] });
      case "t": return Object.assign(q, { type: "trans", instr: r[2], source: r[3], text: r[4], answers: r[5], expl: r[6] });
      case "e": return Object.assign(q, { type: "error", raw: r[2], wrong: r[3], answers: r[4], expl: r[5] });
      case "k": return Object.assign(q, { type: "tense", text: r[2], answers: r[3], expl: r[4] });
      case "i": return Object.assign(q, { type: "ita", it: r[2], text: r[3], answers: r[4], expl: r[5] });
      case "x": return Object.assign(q, { type: "context", context: r[2], text: r[3], answers: r[4], expl: r[5] });
    }
    throw new Error("Unknown exercise format in " + topicId + ": " + r[0]);
  },
  add(topic) {
    const raw = topic.q; topic.q = [];
    this.topics.push(topic);
    this.extend(topic.id, raw);
  },
  extend(topicId, rows) {
    const t = this.topics.find(x => x.id === topicId);
    if (!t) throw new Error("Unknown topic " + topicId);
    rows.forEach(r => t.q.push(this.parse(topicId, r, t.q.length + 1)));
  }
};
