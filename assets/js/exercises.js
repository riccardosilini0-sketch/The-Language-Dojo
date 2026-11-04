/* =====================================================================
   Language Dojo — exercise headers (shared by every section)
   Every exercise is introduced by three levels:
     1. TYPE         what kind of activity it is (shown in capitals)
     2. Title        the topic, numbered when there are several exercises on it
                     (or the title of the text, when the exercise is built on a text)
     3. Instruction  what the student has to do, in one or two short sentences
   The same activity always has the same name, in every section of the site.
   ===================================================================== */
window.DojoEx = (function () {
  const TYPE = {
    mc: "Multiple choice",
    gaps: "Fill in the gaps",
    gapText: "Gap fill – text",
    gapDialogue: "Gap fill – dialogue",
    errors: "Error correction",
    transform: "Sentence transformation",
    translation: "Translation",
    building: "Sentence building",
    matching: "Matching",
    trueFalse: "True or false",
    sorting: "Sorting",
    oddOne: "Odd one out",
    soundId: "Sound identification",
    stress: "Word stress",
    transcription: "Transcription",
    listening: "Listening",
    flashcards: "Flashcards",
    strokes: "Stroke order",
    charWriting: "Character writing",
    mixed: "Mixed practice",
    test: "Level test",
    readingMC: "Reading – multiple choice",
    readingGapped: "Reading – gapped text",
    readingMatch: "Reading – multiple matching",
    useMCC: "Use of English – multiple-choice cloze",
    useOpen: "Use of English – open cloze",
    useWF: "Use of English – word formation",
    useKWT: "Use of English – key word transformation",
    listeningMC: "Listening – multiple choice",
    listeningTF: "Listening – true or false",
    listeningMatch: "Listening – matching",
    listeningNotes: "Listening – note completion",
    listeningSentences: "Listening – sentence completion",
    writing: g => "Writing – " + String(g).toLowerCase()
  };
  // default instructions; a section may give a more specific one for its own exercises
  const INSTR = {
    mc: "Choose the correct option for each question.",
    gaps: "Complete the sentences with the missing words.",
    gapText: "Read the whole text first, then complete it with the missing words.",
    gapDialogue: "Complete the dialogues with the missing words.",
    errors: "Identify and correct the mistakes in the following sentences.",
    transform: "Complete the second sentence so that it has a similar meaning to the first.",
    translation: "Translate the sentences into English.",
    building: "Write complete sentences using the words given.",
    matching: "Match each item on the left with the correct item on the right.",
    trueFalse: "Decide whether each statement is true or false.",
    mixed: "Follow the instruction for each question, then check your answers.",
    test: "Answer all the questions, then check your answers."
  };
  // "Present Simple – 2"; no number when there is only one exercise on the topic
  const numbered = (topic, n, total) => total > 1 ? `${topic} – ${n}` : topic;
  // numbers the exercises of each topic in the order in which they are shown
  function numberAll(list, topicOf, setTitle) {
    const tot = {}, seen = {};
    list.forEach(x => { const t = topicOf(x); if (t) tot[t] = (tot[t] || 0) + 1; });
    list.forEach(x => { const t = topicOf(x); if (!t) return; seen[t] = (seen[t] || 0) + 1; setTitle(x, numbered(t, seen[t], tot[t])); });
  }
  return { TYPE, INSTR, numbered, numberAll };
})();
