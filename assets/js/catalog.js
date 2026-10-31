/* =====================================================================
   Language Dojo — content catalog
   The single place to add languages and resources. The homepage, the
   menus, the footer and every language page are built from this file.

   languages: only languages with at least one resource are listed.
   resources: grouped on each language page by training area (skill).
   status: "available" (only available items are shown on the site)
   url:    path from the site root
   ===================================================================== */
window.DOJO_CATALOG = {
  languages: [
    { id: "english", name: "English", native: "English", code: "EN", status: "available", url: "english/index.html" },
    { id: "japanese", name: "Japanese", native: "日本語", code: "日本", status: "available", url: "japanese/index.html",
      menu: [["Japanese Dojo", "Overview", "japanese/index.html"], ["Hiragana · ひらがな", "", "japanese/index.html#hiragana"], ["Katakana · カタカナ", "", "japanese/index.html#katakana"], ["Kanji · 漢字", "", "japanese/index.html#kanji"]] }
  ],

  // training areas: shown inside each language space when that language has resources for them
  skills: [
    { id: "verbs", name: "Verbs", icon: "verbs" },
    { id: "grammar", name: "Grammar", icon: "grammar" },
    { id: "vocabulary", name: "Vocabulary", icon: "vocabulary" },
    { id: "pronunciation", name: "Pronunciation", icon: "pronunciation" },
    { id: "listening", name: "Listening", icon: "listening" },
    { id: "reading", name: "Reading", icon: "reading" },
    { id: "writing", name: "Writing", icon: "writing" },
    { id: "speaking", name: "Speaking", icon: "speaking" }
  ],

  // art: short lines shown on resource cards · accent: card colour
  resources: [
    { id: "irregular-verbs", lang: "english", skill: "verbs", status: "available",
      title: "Irregular Verbs", accent: "#2b3a55", art: ["go", "went", "gone"],
      url: "english/irregular-verbs/index.html",
      items: ["Verb list with audio", "Flashcards", "Practice"] },
    { id: "verb-tenses", lang: "english", skill: "grammar", status: "available",
      title: "Verb Tenses", accent: "#2f5d50", art: ["was", "has been", "will"],
      url: "english/verb-tenses/index.html",
      items: ["Tenses", "Contrasts", "Mixed Groups", "Challenges", "Test"] },
    { id: "japanese-dojo", lang: "japanese", skill: "writing", status: "available",
      title: "Japanese Dojo", accent: "#8c2f39", art: ["あ", "ア", "字"], artJa: true,
      url: "japanese/index.html",
      items: ["Hiragana", "Katakana", "First 50 kanji"] }
  ]
};
