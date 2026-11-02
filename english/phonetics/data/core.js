/* =====================================================================
   Sounds of English — content registry and IPA helpers
   Content files register sounds, lessons and exercises here; app.js only reads.

   Reference accent: Standard Southern British English (SSBE).
   Phonemic transcriptions use / /, phonetic (allophonic) detail uses [ ].
   Write IPA with the ordinary letter g if convenient: it is normalised to ɡ (U+0261).
   ===================================================================== */
window.Phon = {
  sounds: [],      // every phoneme card (vowels, diphthongs, consonants)
  lessons: [],     // overview and topic lessons
  exercises: [],   // hand-written exercises (see exercises.js for the formats)

  addSounds(list) { list.forEach(s => { s.ipa = this.norm(s.ipa); (s.examples || []).forEach(e => e[1] = this.norm(e[1])); this.sounds.push(s); }); },
  addLessons(list) { list.forEach(l => this.lessons.push(l)); },
  addExercises(topic, rows) { rows.forEach(r => this.exercises.push({ topic, row: r })); },

  norm(s) { return String(s || "").replace(/g/g, "ɡ").replace(/:/g, "ː").replace(/'/g, "ˈ"); },

  /* Phoneme inventory of SSBE, longest symbols first, for splitting transcriptions. */
  INVENTORY: ["tʃ", "dʒ", "eɪ", "aɪ", "ɔɪ", "əʊ", "aʊ", "ɪə", "eə", "ʊə", "iː", "ɑː", "ɔː", "uː", "ɜː",
    "ɪ", "e", "æ", "ʌ", "ɒ", "ʊ", "ə", "i", "u",
    "p", "b", "t", "d", "k", "ɡ", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", "m", "n", "ŋ", "l", "r", "w", "j"],
  /* Split "/ˈpensəl/" into ["ˈ","p","e","n","s","ə","l"] (stress marks and spaces kept as tokens). */
  split(ipa) {
    const s = this.norm(ipa).replace(/^\/|\/$/g, ""), out = [];
    for (let i = 0; i < s.length;) {
      const sym = this.INVENTORY.find(x => s.startsWith(x, i));
      if (sym) { out.push(sym); i += sym.length; } else { out.push(s[i]); i++; }
    }
    return out;
  },
  has(ipa, sym) { return this.split(ipa).includes(sym); }
};
