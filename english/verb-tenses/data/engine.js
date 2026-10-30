/* =====================================================================
   Verb Tenses Dojo — content registry
   Content files (tenses.js, contrasts.js, mixed.js) call TenseDojo.add().
   The interface (app.js) only reads from this registry, so grammar content
   and interface logic stay separate.

   Topic:  { id, area, group, title, short, intro, form?, uses: [[label, example]], q: [...] }
     area:  "tenses" | "contrasts" | "mixed" | "challenges"
   Question (compact array):
     ["g", belt, "Sentence with ___ (verb).", ["accepted", "answers"], "Explanation."]   fill in the gap
     ["m", belt, "Sentence with ___ .", ["correct", "wrong", "wrong", "wrong"], "Explanation."]  multiple choice (first option is correct)
     belt: 1 White · 2 Yellow · 3 Orange · 4 Green · 5 Blue · 6 Black
   Answers are written in full; contractions (I'm, she's, won't, hadn't…) are accepted automatically.
   ===================================================================== */
window.TenseDojo = {
  topics: [],
  add(topic) {
    topic.q = topic.q.map((r, i) => ({
      id: topic.id + "-" + (i + 1), topic: topic.id, type: r[0] === "g" ? "gap" : "mc",
      belt: r[1], text: r[2], answers: r[3], expl: r[4]
    }));
    this.topics.push(topic);
  }
};
