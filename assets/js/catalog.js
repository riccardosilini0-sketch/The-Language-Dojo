/* =====================================================================
   The Language Dojo — content catalog
   This is the single place to add languages, training areas, resources
   and news. The homepage, the menus, the footer and every language page
   are built from this file, so new content appears everywhere automatically.

   status: "available" | "development" | "planned"
   url:    path from the site root (only for available items)
   ===================================================================== */
window.DOJO_CATALOG = {
  languages: [
    { id: "english", name: "English", native: "English", code: "EN", status: "available", url: "english/index.html",
      blurb: "Verbs, tenses, grammar and vocabulary, with resources for every stage of learning.",
      intro: "Train the English you need at school and beyond, step by step. Start with the irregular verbs and the verb tenses; more grammar, vocabulary and pronunciation resources are on the way." },
    { id: "japanese", name: "Japanese", native: "日本語", code: "日本", status: "available", url: "japanese/index.html",
      blurb: "Hiragana, katakana and your first 50 kanji, with stroke order, readings and practice.",
      menu: [["Japanese Dojo", "Overview, belts and tests", "japanese/index.html"], ["Hiragana · ひらがな", "The basic syllabary", "japanese/index.html#hiragana"], ["Katakana · カタカナ", "Foreign words and names", "japanese/index.html#katakana"], ["Kanji · 漢字", "Your first 50 kanji", "japanese/index.html#kanji"]] },
    { id: "spanish", name: "Spanish", native: "Español", code: "ES", status: "development",
      blurb: "Core verbs and everyday vocabulary." },
    { id: "french", name: "French", native: "Français", code: "FR", status: "planned",
      blurb: "Essential grammar and pronunciation training." },
    { id: "german", name: "German", native: "Deutsch", code: "DE", status: "planned",
      blurb: "Cases, articles and strong verbs, step by step." }
  ],

  skills: [
    { id: "verbs", name: "Verbs", icon: "verbs", blurb: "Forms, tenses and irregular patterns." },
    { id: "grammar", name: "Grammar", icon: "grammar", blurb: "Structures explained clearly, then practised." },
    { id: "vocabulary", name: "Vocabulary", icon: "vocabulary", blurb: "Words and expressions organised by topic." },
    { id: "pronunciation", name: "Pronunciation", icon: "pronunciation", blurb: "Sounds, stress and natural rhythm." },
    { id: "listening", name: "Listening", icon: "listening", blurb: "Real-life audio with guided tasks." },
    { id: "reading", name: "Reading", icon: "reading", blurb: "Texts with comprehension training." },
    { id: "writing", name: "Writing", icon: "writing", blurb: "Scripts, characters and written expression." },
    { id: "speaking", name: "Speaking", icon: "speaking", blurb: "Useful phrases and prompts to practise aloud." }
  ],

  // art: three short lines shown on resource cards · accent: card colour
  resources: [
    { id: "irregular-verbs", lang: "english", skill: "verbs", status: "available", featured: true,
      title: "Irregular Verbs", size: "104 verbs", accent: "#2b3a55", art: ["go", "went", "gone"],
      url: "english/irregular-verbs/index.html",
      blurb: "Master the base form, past simple and past participle of the most important English irregular verbs.",
      features: ["Verb list with natural British pronunciation", "Interactive flashcards", "Five practice modes with instant feedback", "Personal review list and progress"] },
    { id: "verb-tenses", lang: "english", skill: "grammar", status: "available", featured: true,
      title: "Verb Tenses Dojo", size: "400+ exercises", accent: "#2f5d50", art: ["has been", "was doing", "will have"],
      url: "english/verb-tenses/index.html",
      blurb: "Master English verb tenses, one belt at a time: individual tenses, contrasts, mixed practice, challenges and exams.",
      features: ["15 tenses explained and practised", "13 tense contrasts", "Fill-in-the-gap and multiple-choice exercises", "An explanation after every answer", "Belt exams that unlock new levels"] },
    { id: "japanese-dojo", lang: "japanese", skill: "writing", status: "available", featured: true,
      title: "Japanese Dojo", size: "Kana + 50 kanji", accent: "#8c2f39", art: ["あ", "ア", "字"], artJa: true,
      url: "japanese/index.html",
      blurb: "Master Japanese, one character at a time: hiragana, katakana and the first 50 kanji.",
      features: ["Animated stroke order for every character", "Complete hiragana and katakana charts", "50 kanji cards with readings, words and sentences", "Seven kanji training modes"] },
    { id: "phrasal-verbs", lang: "english", skill: "vocabulary", status: "planned",
      title: "Phrasal Verbs", blurb: "The most common phrasal verbs, grouped by particle and meaning." },
    { id: "sounds-of-english", lang: "english", skill: "pronunciation", status: "planned",
      title: "Sounds of English", blurb: "Minimal pairs, tricky vowels and the -ed ending." },
    { id: "everyday-listening", lang: "english", skill: "listening", status: "planned",
      title: "Everyday Listening", blurb: "Short dialogues from daily life with comprehension tasks." },
    { id: "graded-reading", lang: "english", skill: "reading", status: "planned",
      title: "Graded Reading", blurb: "Short stories and articles for every stage of learning." },
    { id: "japanese-words", lang: "japanese", skill: "vocabulary", status: "development",
      title: "First Japanese Words", blurb: "Everyday vocabulary built on the kana and kanji you know." },
    { id: "spanish-core-verbs", lang: "spanish", skill: "verbs", status: "development",
      title: "Core Verbs", blurb: "Regular and irregular verbs in the present tense." }
  ],

  news: [
    { date: "2026-10-30", tag: "New", title: "Japanese Dojo is open",
      text: "Learn hiragana, katakana and your first 50 kanji with animated stroke order and seven training modes." },
    { date: "2026-10-30", tag: "New", title: "Verb Tenses Dojo",
      text: "Over 400 exercises on English verb tenses, with explanations and belt exams." },
    { date: "2026-10-30", tag: "New", title: "The Language Dojo opens its doors",
      text: "Our first resource, English Irregular Verbs, is available for free." }
  ]
};
