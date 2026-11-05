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
    { id: "japanese", name: "Japanese", native: "日本語", code: "日本", status: "available", url: "japanese/index.html" }
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
  // topic: the subject, shown under the title in the Languages menu and on the homepage
  // (the order here is the order on the site)
  resources: [
    { id: "phonetics", lang: "english", skill: "pronunciation", status: "available",
      title: "Sounds of English", topic: "Phonetics and phonology", accent: "#4a3f6b", art: ["/iː/", "/θ/", "/ə/"],
      url: "english/phonetics/index.html",
      items: ["Vowels", "Diphthongs", "Consonants", "Word Stress", "Revision"] },
    { id: "verb-tenses", lang: "english", skill: "grammar", status: "available",
      title: "Verb Tenses", topic: "Grammar", accent: "#2f5d50", art: ["was", "has been", "will"],
      url: "english/verb-tenses/index.html",
      items: ["Tenses", "Contrasts", "Mixed Tenses", "Belt tests"] },
    { id: "dependent-prepositions", lang: "english", skill: "grammar", status: "available",
      title: "Dependent Prepositions", topic: "Grammar", accent: "#7a3b5c", art: ["depend on", "good at", "reason for"],
      url: "english/dependent-prepositions/index.html",
      items: ["Verbs + prepositions", "Adjectives + prepositions", "Nouns + prepositions", "Practice tests"] },
    { id: "modal-verbs", lang: "english", skill: "grammar", status: "available",
      title: "Modal Verbs", topic: "Grammar", accent: "#6b4f1d", art: ["can", "must", "should have"],
      url: "english/modal-verbs/index.html",
      items: ["Can, could, may, might", "Must, have to, need", "Should, will, shall", "Modal verbs in the past"] },
    { id: "passive-voice", lang: "english", skill: "grammar", status: "available",
      title: "The Passive Voice", topic: "Grammar", accent: "#2c4f7c", art: ["is made", "was built", "be done"],
      url: "english/passive-voice/index.html",
      items: ["Active and passive", "Every tense", "Modals and infinitives", "Have something done, reporting verbs"] },
    { id: "irregular-verbs", lang: "english", skill: "verbs", status: "available",
      title: "Irregular Verbs", topic: "Verbs", accent: "#2b3a55", art: ["go", "went", "gone"],
      url: "english/irregular-verbs/index.html",
      items: ["Verb list with audio", "Flashcards", "Practice"] },
    { id: "skills", lang: "english", skill: "reading", status: "available",
      title: "Skill Development", topic: "Reading, use of English, writing and listening", accent: "#1f5f73", art: ["read", "write", "listen"],
      url: "english/skills/index.html",
      items: ["Reading", "Use of English", "Writing", "Listening"] },
    { id: "japanese-dojo", lang: "japanese", skill: "writing", status: "available",
      title: "Writing System", topic: "Hiragana, katakana and kanji", accent: "#8c2f39", art: ["あ", "ア", "字"], artJa: true,
      url: "japanese/writing-system/index.html",
      items: ["Hiragana", "Katakana", "First 50 kanji"] }
  ]
};
