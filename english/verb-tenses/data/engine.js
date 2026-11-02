/* =====================================================================
   Verb Tenses — content registry
   Content files call TenseDojo.add() (a new topic) or TenseDojo.extend()
   (more exercises for an existing topic). The interface (app.js) only
   reads from this registry: grammar content and interface logic stay separate.

   Topic: { id, area, group, title, short, intro, form?, uses: [[label, example]], q: [...] }
     area: "tenses" | "contrasts" | "mixed" | "challenges"

   Belt = CEFR level of the exercise (it classifies materials, not students):
     1 White A1 · 2 Yellow A2 · 3 Orange B1 · 4 Green B2 · 5 Blue C1 · 6 Black C2

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
  /* Lowest CEFR level at which each topic is normally taught (1 = A1 … 6 = C2).
     An exercise is never labelled below the level of its tense: belt = max(written belt, FLOOR). */
  FLOOR: {
    "present-simple": 1, "present-continuous": 1, "past-simple": 1, "be-going-to": 1,
    "present-perfect-simple": 2, "past-continuous": 2, "future-simple": 2, "present-continuous-future": 2, "present-simple-future": 2,
    "present-perfect-continuous": 3, "past-perfect-simple": 3, "future-continuous": 3,
    "past-perfect-continuous": 4, "future-perfect-simple": 4, "future-perfect-continuous": 5,
    "ps-vs-pc": 1, "pst-vs-pcont": 2, "will-vs-going-to": 2, "will-vs-pcont-future": 2, "will-vs-ps-timetable": 2, "pp-vs-ps": 2,
    "pps-vs-ppc": 3, "pst-vs-ppf": 3, "pcont-vs-ppf": 3, "will-vs-fcont": 3,
    "ppf-vs-ppfc": 4, "will-vs-fperf": 4, "fperf-vs-fperfc": 5,
    "all-present": 2, "all-past": 3, "all-future": 3, "present-past-mixed": 2,
    "challenge-intermediate": 3, "challenge-upper": 4, "challenge-advanced": 5
  },
  parse(topicId, r, i) {
    const q = { id: topicId + "-" + i, topic: topicId, belt: Math.min(6, Math.max(r[1], this.FLOOR[topicId] || 1)) };
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
