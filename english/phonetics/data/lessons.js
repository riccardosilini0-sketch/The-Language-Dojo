/* Lessons (topic pages). Each lesson is a list of blocks:
   ["p", text] · ["list", [items]] · ["table", [head], [[row]...]] · ["cards", [[title, text]...]]
   ["note", text] · ["ga", [[word, BrE, GA]...], note] · ["img", file, caption] · ["chart", kind]
   ["pairs", title, [[a, b]...]] · ["stress", [[word, [syllables], stressedIndex]...]]
   ["sentences", [head], [[…, sentence]...]]: a table whose last column is played as audio
   chart kinds: phonemes · vowels · vowels-short-long · diphthongs · consonants
   Text is plain; /…/ and […] are shown in the IPA font automatically. */
Phon.addLessons([
  /* ---------------- START HERE ---------------- */
  { id: "l-areas", unit: "intro", title: "Phonetics and phonology", blocks: [
    ["p", "Language can be studied at several levels. This part of the course deals with the two innermost ones: phonetics and phonology."],
    ["cards", [["Phonetics", "Speech sounds: how they are produced, transmitted and perceived."], ["Phonology", "Phonemes: how sounds are organised and contrast in a language."], ["Morphology", "Words and their internal structure."], ["Syntax", "Phrases and sentences."], ["Semantics", "The literal meaning of words, phrases and sentences."], ["Pragmatics", "Meaning in the context of discourse."]]],
    ["note", "Phonetics describes the physical sounds (for example, exactly how /p/ is pronounced in different positions). Phonology describes the system: which differences of sound change meaning in a particular language."]
  ] },
  { id: "l-phonemes", unit: "intro", title: "Phonemes, allophones and graphemes", blocks: [
    ["cards", [["Phoneme / /", "The smallest unit of sound that can distinguish meaning in a language. Minimal pair: /pɪn/ pin – /bɪn/ bin → /p/ and /b/ are different phonemes. Phonemic transcription goes between slashes: /pɪn/."], ["Allophone [ ]", "A predictable variant of a phoneme that does not change meaning. /p/ is aspirated in pin [pʰɪn] but not in spin [spɪn]. Phonetic transcription (more detail) goes in square brackets: [pʰɪn]."], ["Grapheme", "A letter or group of letters that represents a phoneme in writing: sh, ee, igh, ck. English spelling is not phonemic: one phoneme can have many graphemes (/iː/: see, sea, field), and one grapheme can stand for several phonemes (ea: sea, head, great)."]]],
    ["table", ["Phoneme", "Allophone", "Where it occurs (BrE)"], [["/l/", "[l] ‘clear’ l", "before a vowel: leaf, light"], ["/l/", "[ɫ] ‘dark’ l", "before a consonant or pause: feel, milk"]]],
    ["note", "A minimal pair is a pair of words that differ in only one sound, such as pin – bin or ship – sheep. Minimal pairs prove that two sounds are separate phonemes."]
  ] },
  { id: "l-ssbe", unit: "intro", title: "Our reference accent", blocks: [
    ["p", "In this course we use Standard Southern British English (SSBE) – the modern form of the accent traditionally called RP – as our reference. It is the model used in British learners’ dictionaries, language exams and pronunciation guides, and the one you will meet when learning the IPA."],
    ["list", ["It offers a clear and consistent reference for learning pronunciation.", "It is widely used in educational materials and dictionaries.", "It helps us describe and practise sounds systematically."]],
    ["note", "It is only one way of speaking English: there are many British accents and countless international varieties. No accent is more ‘correct’ than another. You do not need to copy this accent: the goal is to speak clearly and confidently, whatever your own accent."],
    ["table", ["Symbol", "Meaning"], [["/ /", "BrE phonemic transcription, following British learners’ dictionaries (e.g. Cambridge, Oxford)"], ["ː", "long vowel"], ["ˈ", "primary stress (before the stressed syllable)"], ["ˌ", "secondary stress"], ["/i/ /u/", "weak vowels in unstressed syllables (no length mark): happy /ˈhæpi/, usual /ˈjuːʒuəl/"], ["[ ]", "General American (GA) forms, given as broad phonetic transcriptions because GA conventions vary between dictionaries"]]],
    ["ga", [["world", "/wɜːld/", "[wɝld]"], ["better", "/ˈbetə/", "[ˈbɛɾɚ]"]], "British–American contrasts appear in panels like this one (rhoticity, flapping and other differences)."]
  ] },
  { id: "l-44", unit: "intro", title: "The 44 phonemes of English", blocks: [
    ["p", "SSBE has 20 vowel phonemes (12 pure vowels and 8 diphthongs) and 24 consonant phonemes. Select any symbol to open its card."],
    ["chart", "phonemes"],
    ["note", "Key words show one typical spelling of each sound. /ʒ/ never begins a common English word; /ŋ/ never begins any English word."]
  ] },

  /* ---------------- UNIT 1: VOWELS ---------------- */
  { id: "l-v-describe", unit: "vowels", title: "Describing vowels", blocks: [
    ["p", "For vowels, air flows through the mouth without any closure or narrowing that causes friction. Vowels are described by tongue height, tongue frontness or backness, lip rounding and length."],
    ["cards", [["Height", "How close the tongue is to the roof of the mouth: close → open (also: high → low)."], ["Frontness", "Which part of the tongue is highest: front, central or back."], ["Lip shape", "Rounded (/uː/, /ɔː/) or unrounded – spread or neutral (/iː/, /æ/)."], ["Length", "Short (/ɪ/) or long (/iː/). Long–short pairs also differ in quality, not just length."]]],
    ["chart", "vowels"],
    ["note", "The chart is a stylised map of the tongue’s highest point (face to the left). Positions are approximate for SSBE."]
  ] },
  { id: "l-v-short-long", unit: "vowels", title: "Short and long vowels", blocks: [
    ["p", "SSBE has seven short vowels /ɪ e æ ʌ ɒ ʊ ə/ and five long vowels /iː ɑː ɔː uː ɜː/. The length mark ː is part of the symbol."],
    ["chart", "vowels-short-long"],
    ["note", "Long vowels are shortened before voiceless consonants: the /iː/ in beat is shorter than in bead or bee – but it is still the same phoneme."],
    ["p", "Long–short pairs such as /iː/–/ɪ/ and /uː/–/ʊ/ differ in quality too: the short vowel is lower and more central. Length alone is not enough to tell them apart."]
  ] },
  { id: "l-v-central", unit: "vowels", title: "Central vowels and the schwa", blocks: [
    ["p", "Three vowels are made with the centre of the tongue highest: /ɜː/ (long, mid), /ə/ (short, mid, weak) and /ʌ/ (short, open-mid to open)."],
    ["cards", [["/ɜː/", "Long, can be stressed: bird, word, learn."], ["/ə/", "Short and weak, only in unstressed syllables: about, doctor, banana."], ["/ʌ/", "Short, in stressed syllables, more open: cup, love, son."]]],
    ["list", ["Schwa occurs only in unstressed syllables: banana /bəˈnɑːnə/, today /təˈdeɪ/.", "It can be spelt with any vowel letter: about, taken /ˈteɪkən/, pencil /ˈpensəl/, today, autumn /ˈɔːtəm/, picture /ˈpɪktʃə/.", "Other weak vowels in unstressed syllables: /ɪ/ (begin /bɪˈɡɪn/), /i/ (happy) and /u/ (influence /ˈɪnfluəns/).", "Many short words (a, the, to, of, and…) normally have a weak form with /ə/."]],
    ["note", "Schwa is the most frequent vowel in English – and it is never stressed."]
  ] },

  /* ---------------- UNIT 2: DIPHTHONGS ---------------- */
  { id: "l-d-classify", unit: "diphthongs", title: "Classifying the eight diphthongs", blocks: [
    ["p", "A diphthong is a glide from one vowel quality to another within a single syllable. The first part is longer and louder than the second. SSBE has eight diphthongs: three centring and five closing."],
    ["cards", [["Centring", "Glide towards /ə/: /ɪə eə ʊə/."], ["Closing to /ɪ/", "Glide towards /ɪ/: /eɪ aɪ ɔɪ/."], ["Closing to /ʊ/", "Glide towards /ʊ/: /əʊ aʊ/."]]],
    ["chart", "diphthongs"],
    ["note", "All diphthongs count as long vowels. Two of the centring diphthongs are changing in modern SSBE: /eə/ is often a long pure vowel [ɛː], and /ʊə/ is often replaced by /ɔː/."]
  ] },

  /* ---------------- UNIT 3: CONSONANTS ---------------- */
  { id: "l-c-describe", unit: "consonants", title: "Voicing, place and manner", blocks: [
    ["p", "Consonants are produced with a closure or narrowing somewhere in the vocal tract. They are described by three labels: voicing, place of articulation and manner of articulation. Example: /b/ = voiced bilabial plosive."],
    ["imgs", [["folds-voiceless", "Voiceless: folds apart, no vibration – /p f s/"], ["folds-voiced", "Voiced: folds vibrate – /b v z/"]]],
    ["note", "Vocal folds seen from above. Try it: hold your throat and say [ssss], then [zzzz]. You feel vibration only for [zzzz]."],
    ["p", "Most English obstruents (plosives, fricatives and affricates) come in voiceless–voiced pairs. Nasals and approximants are voiced; /h/ is voiceless."]
  ] },
  { id: "l-c-place", unit: "consonants", title: "Place of articulation", blocks: [
    ["img", "vocal-tract", "The vocal tract."],
    ["list", ["Active articulators move: the lower lip and the parts of the tongue (tip, blade, front, back, root).", "Passive articulators stay still: upper lip, upper teeth, alveolar ridge, hard palate, velum.", "The velum can rise to close off the nasal cavity (oral sounds) or lower to let air through the nose (nasals)."]],
    ["table", ["Place", "Articulators", "English consonants"], [["bilabial", "both lips", "/p b m w/"], ["labiodental", "lower lip + upper teeth", "/f v/"], ["dental", "tongue tip + upper teeth", "/θ ð/"], ["alveolar", "tongue tip/blade + alveolar ridge", "/t d s z n l/"], ["postalveolar", "blade + area behind the ridge", "/ʃ ʒ tʃ dʒ r/"], ["palatal", "front of tongue + hard palate", "/j/"], ["velar", "back of tongue + velum", "/k ɡ ŋ w/"], ["glottal", "the glottis (vocal folds)", "/h/"]]],
    ["img", "places", "Where English consonants are made. /w/ appears twice: it uses both the lips and the velum."]
  ] },
  { id: "l-c-manner", unit: "consonants", title: "Manner of articulation", blocks: [
    ["table", ["Manner", "What happens", "English consonants"], [["plosive", "complete closure, then sudden release", "/p b t d k ɡ/"], ["fricative", "narrow gap, turbulent airflow", "/f v θ ð s z ʃ ʒ h/"], ["affricate", "closure released as a fricative", "/tʃ dʒ/"], ["nasal", "oral closure, velum lowered, air through the nose", "/m n ŋ/"], ["approximant", "articulators close, but no friction", "/w r j/"], ["lateral approximant", "air over the sides of the tongue", "/l/"]]],
    ["note", "/w/ and /j/ are also called semi-vowels: /w/ is like a very short /uː/, /j/ like a very short /iː/."]
  ] },
  { id: "l-c-chart", unit: "consonants", title: "The consonant chart", blocks: [
    ["p", "Rows: manner of articulation. Columns: place of articulation. In each pair the voiceless sound is on the left, the voiced sound on the right. Select a symbol to open its card."],
    ["chart", "consonants"],
    ["note", "/w/ is labial-velar: it is made with rounded lips and the back of the tongue raised towards the velum, so it belongs in two columns."]
  ] },
  { id: "l-c-s", unit: "consonants", group: "spelling", title: "The -s ending: /s/, /z/ or /ɪz/", blocks: [
    ["p", "The pronunciation depends on the last sound (not letter) of the base word. The same rule applies to plurals, the 3rd person singular -s and the possessive ’s."],
    ["table", ["Ending", "After", "Examples"], [["/ɪz/", "sibilants /s z ʃ ʒ tʃ dʒ/", "kisses, buzzes, washes, garages, watches, judges"], ["/s/", "other voiceless sounds /p t k f θ/", "stops, gets, likes, laughs, months"], ["/z/", "other voiced sounds /b d ɡ v ð m n ŋ l/ + all vowels", "rubs, reads, digs, lives, calls, runs, sings, sees, goes"]]],
    ["note", "houses /ˈhaʊzɪz/: the /s/ of house becomes /z/. knives: f → v, so the ending follows voiced /v/."]
  ] },
  { id: "l-c-ed", unit: "consonants", group: "spelling", title: "The -ed ending: /ɪd/, /t/ or /d/", blocks: [
    ["p", "Regular past tense and past participle -ed also depends on the last sound of the verb: fixed /fɪkst/ ends in /s/ (x = /ks/), so -ed is /t/."],
    ["table", ["Ending", "After", "Examples"], [["/ɪd/", "/t/ and /d/ only", "wanted, painted, recorded, needed"], ["/t/", "other voiceless sounds /p k f θ s ʃ tʃ/", "stopped, checked, laughed, missed, finished, watched"], ["/d/", "other voiced sounds /b ɡ v ð z ʒ dʒ m n ŋ l/ + all vowels", "robbed, lived, called, cleaned, enjoyed, argued"]]]
  ] },
  { id: "l-c-letters", unit: "consonants", group: "spelling", title: "The letters h, c, j and y", blocks: [
    ["cards", [["h", "Unlike Italian, English usually pronounces the letter h at the beginning of words: how, have, holiday. A few common exceptions: hour, honest, honour, heir."], ["c", "/k/ before a, o, u or a consonant (campaign, continue, practical); /s/ before e, i, y (decide, centre, exercises); ch is usually /tʃ/ (changes, children, choose)."], ["j and y", "/dʒ/: j (just), g before e, i, y (gem, giant), dge (judge). /j/: y (yes, yet), and the hidden /j/ in u, ew: university /ˌjuːnɪˈvɜːsəti/, few /fjuː/."]]],
    ["sentences", ["", "Sentence"], [["/h/", "Annie and Ben are hugging."], ["/h/", "How old are you?"], ["/h/", "He’s on holiday at the moment."], ["silent", "She’s got an honest face."], ["/dʒ/", "I’ve just had some good news."], ["/j/", "I haven’t finished yet."]]],
    ["note", "ch can also be /k/ (school, character) or /ʃ/ (machine). IPA /j/ is the first sound of yet – not the sound of the letter j."]
  ] },
  { id: "l-c-silent", unit: "consonants", group: "spelling", title: "Silent letters and gh", blocks: [
    ["p", "Many English words contain letters that are not pronounced. Some common patterns (there are exceptions – always note silent letters when you learn new words):"],
    ["table", ["Letter", "Pattern", "Example"], [["r", "In SSBE, r is silent unless a vowel sound follows: car, hard, farm (but red, very). GA pronounces it.", "car /kɑː/"], ["w", "Before r at the start of a word (write, wrong); also in who, whole, two, answer, sword.", "write /raɪt/"], ["k", "Before n at the start of a word: know, knee, knowledge.", "know /nəʊ/"], ["gh", "Before t (night, daughter) and in many word-final -igh, -eigh and -ough words: high, weigh, through.", "night /naɪt/"], ["l", "In some common words after a, o or ou: talk, walk, half, calm, could, should, would (but milk, help, film).", "talk /tɔːk/"], ["b", "After m or before t: climb, comb, doubt, debt.", "doubt /daʊt/"]]],
    ["note", "Strictly, the r of car is a matter of accent (rhoticity) rather than spelling: it is silent in SSBE but pronounced in GA."],
    ["table", ["gh", "Word", "Transcription"], [["/f/", "enough", "/ɪˈnʌf/"], ["/f/", "tough", "/tʌf/"], ["silent", "although", "/ɔːlˈðəʊ/"], ["silent", "tight", "/taɪt/"]]],
    ["p", "gh is usually silent, especially before t: night, daughter, bought. It is sometimes /f/, mainly at the end of a word: enough, tough, cough, laugh. Word-final gh can also be silent (high, weigh, through), so check new words in a dictionary."]
  ] },
  { id: "l-c-homophones", unit: "consonants", group: "spelling", title: "Homophones", blocks: [
    ["p", "Homophones are words with different spellings and meanings but exactly the same pronunciation: hear – here are both /hɪə/."],
    ["sentences", ["Transcription", "Sentence"], [["/hɪə/", "I hear you’ll be here tomorrow."], ["/njuː/", "He knew it was a new car."], ["/siː/", "I can see the sea from my hotel window."], ["/eɪt/", "We ate at about eight o’clock."], ["/nəʊ/", "No, sorry. I don’t know."]]],
    ["note", "Homophones can depend on the accent: in SSBE (non-rhotic) sauce and source are both /sɔːs/; in GA they differ."]
  ] },

  /* ---------------- UNIT 4: WORD STRESS ---------------- */
  { id: "l-s-basics", unit: "stress", title: "Syllables and word stress", blocks: [
    ["p", "Every word of two or more syllables has one syllable with primary stress. Stressed syllables are longer, louder and higher or more prominent in pitch, and they have a full vowel. Unstressed syllables often contain /ə/, /ɪ/ or /i/."],
    ["list", ["Dictionaries mark primary stress with ˈ before the stressed syllable: water /ˈwɔːtə/, about /əˈbaʊt/.", "ˌ marks secondary stress in long words: population /ˌpɒpjəˈleɪʃən/.", "One-syllable words have no stress mark in dictionary transcriptions: cat /kæt/."]],
    ["stress", [["doctor", ["doc", "tor"], 0], ["important", ["im", "por", "tant"], 1], ["negative", ["ne", "ga", "tive"], 0], ["sustainable", ["su", "stai", "na", "ble"], 1]]],
    ["note", "Stress patterns can be written with O for a stressed syllable and o for an unstressed one: doctor Oo, important oOo, negative Ooo."]
  ] },
  { id: "l-s-patterns", unit: "stress", title: "Stress patterns", blocks: [
    ["table", ["Word", "Stressed syllable", "Pattern (as spoken)", "Transcription"], [["sustainable", "su·STAI·na·ble", "oOoo", "/səˈsteɪnəbəl/"], ["development", "de·VE·lop·ment", "oOoo", "/dɪˈveləpmənt/"], ["management", "MA·nage·ment", "Ooo", "/ˈmænɪdʒmənt/"], ["comfortable", "COM·for·ta·ble", "Ooo", "/ˈkʌmftəbəl/"], ["vegetable", "VEG·e·ta·ble", "Ooo", "/ˈvedʒtəbəl/"], ["chocolate", "CHOC·o·late", "Oo", "/ˈtʃɒklət/"], ["inclusive", "in·CLU·sive", "oOo", "/ɪnˈkluːsɪv/"]]],
    ["note", "Comfortable, vegetable and chocolate are usually pronounced with one syllable fewer than their spelling suggests."]
  ] },
  { id: "l-s-rules", unit: "stress", title: "Stress tendencies", blocks: [
    ["p", "English word stress is not fully predictable, but there are strong tendencies. Treat them as guidelines: every one has exceptions, so check new words in a dictionary."],
    ["table", ["Tendency", "Examples", "Exceptions"], [["Two-syllable nouns and adjectives: usually stress on the first syllable.", "ˈtable, ˈdoctor, ˈhappy, ˈmodern", "hoˈtel, maˈchine, aˈlone"], ["Two-syllable verbs: often stress on the second syllable.", "beˈgin, deˈcide, reˈlax, preˈfer", "ˈanswer, ˈvisit, ˈhappen, ˈlisten"], ["Compound nouns: usually stress on the first part.", "ˈbedroom, ˈbookshop, ˈtoothbrush, ˈfootball", "Compare a ˈgreenhouse (for plants) and a green ˈhouse (a house painted green)."]]],
    ["p", "Suffixes affect stress in three ways:"],
    ["table", ["Type", "Suffixes", "Examples"], [["Stress moves to the syllable just before the suffix", "-tion, -sion, -ic, -ical, -ity, -ial, -ian", "eduˈcation, deˈcision, ecoˈnomic, poˈlitical, acˈtivity, ofˈficial, muˈsician"], ["The suffix itself is stressed", "-ee, -eer, -ese, -ique, -ette", "employˈee, engiˈneer, Japaˈnese, unˈique, cigaˈrette"], ["Stress does not move", "-ness, -ful, -less, -ment, -ly, -er, -ing", "ˈhappiness, ˈbeautiful, ˈcareless, deˈvelopment, ˈquickly, ˈteacher"]]],
    ["note", "Exceptions to -ic: ˈpolitics, ˈArabic, ˈCatholic, ˈlunatic, ˈrhetoric. Some speakers also say cigaˈrette or ˈcigarette."],
    ["table", ["Word family", "Transcriptions"], [["ˈphotograph – phoˈtographer – photoˈgraphic", "/ˈfəʊtəɡrɑːf/ – /fəˈtɒɡrəfə/ – /ˌfəʊtəˈɡræfɪk/"], ["ˈpolitics – poˈlitical – poliˈtician", "/ˈpɒlətɪks/ – /pəˈlɪtɪkəl/ – /ˌpɒləˈtɪʃən/"], ["eˈconomy – ecoˈnomic", "/ɪˈkɒnəmi/ – /ˌiːkəˈnɒmɪk/"]]]
  ] },
  { id: "l-s-reduction", unit: "stress", title: "Stress and vowel reduction", blocks: [
    ["p", "Stress and vowel quality are closely linked. A stressed syllable keeps a full vowel; an unstressed syllable is usually reduced to /ə/, /ɪ/, /i/ or /u/. When stress moves, the vowels change too."],
    ["table", ["Word", "Transcription", "What happens"], [["photograph", "/ˈfəʊtəɡrɑːf/", "first syllable stressed: full /əʊ/"], ["photographer", "/fəˈtɒɡrəfə/", "stress moves: /əʊ/ → /ə/, /ə/ → /ɒ/"], ["photographic", "/ˌfəʊtəˈɡræfɪk/", "main stress on -graph-: /ɑː/ → /æ/"]]],
    ["p", "Function words (articles, prepositions, auxiliaries, pronouns, conjunctions) usually have two forms: a strong form, used when the word is stressed or at the end of a sentence, and a weak form, used in normal unstressed positions."],
    ["table", ["Word", "Strong form", "Weak form", "Example (weak)"], [["a", "/eɪ/", "/ə/", "a book /ə ˈbʊk/"], ["the", "/ðiː/", "/ðə/ (/ði/ before a vowel)", "the end /ði ˈend/"], ["and", "/ænd/", "/ənd/, /ən/", "fish and chips"], ["to", "/tuː/", "/tə/", "go to bed"], ["of", "/ɒv/", "/əv/", "a cup of tea"], ["for", "/fɔː/", "/fə/", "for you"], ["at", "/æt/", "/ət/", "at home"], ["can", "/kæn/", "/kən/", "I can swim"], ["was", "/wɒz/", "/wəz/", "He was late"], ["were", "/wɜː/", "/wə/", "They were here"], ["are", "/ɑː/", "/ə/", "We are ready"], ["some", "/sʌm/", "/səm/", "some milk"]]],
    ["note", "Use the strong form when the word is stressed or comes at the end: Yes, they were /wɜː/. What are you looking at /æt/?"]
  ] },
  { id: "l-s-meaning", unit: "stress", title: "Stress that changes meaning", blocks: [
    ["p", "In many two-syllable words, the noun (or adjective) is stressed on the first syllable and the verb on the second. The unstressed vowel is usually reduced."],
    ["table", ["Word", "Noun / adjective", "Verb"], [["record", "/ˈrekɔːd/", "/rɪˈkɔːd/"], ["present", "/ˈprezənt/", "/prɪˈzent/"], ["object", "/ˈɒbdʒɪkt/", "/əbˈdʒekt/"], ["produce", "/ˈprɒdjuːs/", "/prəˈdjuːs/"], ["import", "/ˈɪmpɔːt/", "/ɪmˈpɔːt/"], ["export", "/ˈekspɔːt/", "/ɪkˈspɔːt/"], ["contract", "/ˈkɒntrækt/", "/kənˈtrækt/"], ["conflict", "/ˈkɒnflɪkt/", "/kənˈflɪkt/"], ["progress", "/ˈprəʊɡres/", "/prəˈɡres/"], ["increase", "/ˈɪnkriːs/", "/ɪnˈkriːs/"], ["insult", "/ˈɪnsʌlt/", "/ɪnˈsʌlt/"], ["suspect", "/ˈsʌspekt/", "/səˈspekt/"], ["rebel", "/ˈrebəl/", "/rɪˈbel/"]]],
    ["note", "Stress can also separate different words: desert /ˈdezət/ (a dry region) – dessert /dɪˈzɜːt/ (sweet food)."]
  ] },
  { id: "l-s-brega", unit: "stress", title: "Word stress in BrE and GA", blocks: [
    ["p", "Most words have the same stress in both varieties, but a few well-known words differ – often French loanwords."],
    ["ga", [["garage", "/ˈɡærɑːʒ/ or /ˈɡærɪdʒ/", "[ɡəˈrɑʒ]"], ["ballet", "/ˈbæleɪ/", "[bæˈleɪ]"], ["advertisement", "/ədˈvɜːtɪsmənt/", "[ˌædvɚˈtaɪzmənt]"], ["laboratory", "/ləˈbɒrətri/", "[ˈlæbrəˌtɔri]"]], "Stressed syllables are marked ˈ in both columns. Neither pattern is ‘more correct’."],
    ["note", "Be consistent: use the SSBE stress pattern when transcribing in this course, but be ready to recognise the GA pattern when listening."]
  ] },

  /* ---------------- UNIT 5: REVISION ---------------- */
  { id: "l-r-words", unit: "revision", title: "Transcription: words", blocks: [
    ["p", "Read each transcription and write the word in ordinary spelling. Remember: ˈ marks the stressed syllable and ː a long vowel."]
  ] },
  { id: "l-r-texts", unit: "revision", title: "Transcription: texts", blocks: [
    ["p", "Each text is written in phonemic transcription. Grammatical words appear in their usual weak forms (/ə/ a, /ðə/ the, /ənd/ and, /tə/ to); linking /r/ is shown before a vowel. Write each sentence in ordinary spelling."]
  ] },
  { id: "l-r-brega", unit: "revision", title: "BrE or GA?", blocks: [
    ["p", "All forms are in broad phonetic transcription. Decide whether each form is SSBE (BrE) or General American, and notice the clue."],
    ["table", ["Clue", "SSBE", "GA"], [["Rhoticity", "r only before a vowel: car /kɑː/", "every r: [kɑr]"], ["/t/ between vowels", "[t]: better", "flap [ɾ]: [ˈbɛɾɚ]"], ["Vowel of not, hop", "rounded /ɒ/", "unrounded [ɑ]"], ["BATH words", "/ɑː/: path /pɑːθ/", "[æ]: [pæθ]"], ["/j/ after /t d n/", "kept: tune /tjuːn/", "dropped: [tun]"], ["Start of go", "central: /ɡəʊ/", "back, rounded: [ɡoʊ]"]]]
  ] }
]);
