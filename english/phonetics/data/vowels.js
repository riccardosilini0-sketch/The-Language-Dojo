/* Unit 1 — Vowel sounds (SSBE). One object per phoneme card.
   chart: [x, y] position on the vowel chart (0–100; x front→back, y close→open), approximate for SSBE.
   compare.pairs: minimal pairs [this sound, other sound]. */
Phon.addSounds([
  {
    id: "v-i", unit: "vowels", ipa: "ɪ", groups: ["short"], keyword: "sit",
    length: "short", height: "near-close", front: "near-front", lips: "spread", chart: [24, 22],
    intro: "A short, relaxed vowel, as in sit. It is one of the most frequent vowels of English and is also used in many unstressed syllables (begin, wanted).",
    artic: ["The front of the tongue is raised high, but less high and less far forward than for /iː/.", "The lips are loosely spread.", "The tongue and lips are relaxed: the sound is short and lax."],
    examples: [["sit", "/sɪt/"], ["him", "/hɪm/"], ["film", "/fɪlm/"], ["busy", "/ˈbɪzi/"], ["women", "/ˈwɪmɪn/"], ["gym", "/dʒɪm/"]],
    spell: ["i (sit)", "y (gym, system)", "e (pretty /ˈprɪti/)", "u (busy /ˈbɪzi/)", "o (women /ˈwɪmɪn/)"],
    notes: ["Do not confuse it with long /iː/: /ɪ/ is shorter, lower and more central."],
    compare: [
      { id: "v-ii", note: "/iː/ is longer, higher and further forward, with more spread lips.", pairs: [["bit", "beat"], ["chip", "cheap"], ["fill", "feel"], ["live", "leave"], ["sit", "seat"], ["slip", "sleep"], ["still", "steal"], ["rich", "reach"]] },
      { id: "v-e", note: "/e/ is lower (mid): the jaw opens a little more.", pairs: [["bit", "bet"], ["pin", "pen"], ["sit", "set"], ["lid", "led"], ["will", "well"]] }
    ],
    mistakes: ["Italian has only one i sound, a tense [i]. Using it for /ɪ/ makes ship sound like sheep and live like leave.", "Keep /ɪ/ short and relaxed, with the tongue slightly lower and further back than for Italian i."]
  },
  {
    id: "v-ii", unit: "vowels", ipa: "iː", groups: ["long"], keyword: "sea",
    length: "long", height: "close", front: "front", lips: "spread", chart: [6, 4],
    intro: "A long close front vowel, as in sea. It is the vowel closest to Italian i, but it is longer.",
    artic: ["The front of the tongue is raised very close to the hard palate.", "The lips are spread.", "The vowel is long (ː), but it is shortened before voiceless consonants: the /iː/ of beat is shorter than in bead or bee."],
    examples: [["sea", "/siː/"], ["me", "/miː/"], ["free", "/friː/"], ["field", "/fiːld/"], ["receive", "/rɪˈsiːv/"], ["police", "/pəˈliːs/"]],
    spell: ["ee (free)", "ea (sea)", "e (me)", "ie (field)", "ei (receive)", "i (police)"],
    notes: ["Weak /i/ (no length mark) is used at the end of words such as happy /ˈhæpi/ and before vowels: create /kriˈeɪt/."],
    compare: [
      { id: "v-i", note: "Minimal pairs prove that /iː/ and /ɪ/ are separate phonemes.", pairs: [["beat", "bit"], ["cheap", "chip"], ["cheek", "chick"], ["deal", "dill"], ["each", "itch"], ["feel", "fill"], ["gene", "gin"], ["green", "grin"], ["keen", "kin"], ["lead", "lid"], ["leak", "lick"], ["leave", "live"], ["meal", "mill"], ["peach", "pitch"], ["peak", "pick"], ["reach", "rich"], ["scene", "sin"], ["seat", "sit"], ["seek", "sick"], ["sleep", "slip"], ["steal", "still"], ["teen", "tin"], ["weep", "whip"]] }
    ],
    mistakes: ["Making /iː/ too short, so that it sounds like /ɪ/: keep the length, especially before voiced consonants and at the end of a word (bead, see).", "Reading the spelling ea always as /iː/: bread /bred/, great /ɡreɪt/ and heart /hɑːt/ have other vowels."]
  },
  {
    id: "v-e", unit: "vowels", ipa: "e", groups: ["short"], keyword: "head",
    length: "short", height: "mid", front: "front", lips: "spread", chart: [20, 48],
    intro: "A short front vowel between close and open, as in head.",
    artic: ["The front of the tongue is raised to a mid position.", "The lips are slightly spread.", "The vowel is short."],
    examples: [["head", "/hed/"], ["get", "/ɡet/"], ["said", "/sed/"], ["bread", "/bred/"], ["any", "/ˈeni/"], ["friend", "/frend/"]],
    spell: ["e (get)", "ea (head, bread)", "ai (said)", "a (any /ˈeni/)", "ie (friend)"],
    notes: ["British dictionaries write /e/; many phonetics books and American sources use /ɛ/ for the same vowel."],
    compare: [
      { id: "v-ae", note: "/æ/ is more open: the jaw drops further.", pairs: [["men", "man"], ["bed", "bad"], ["beg", "bag"], ["bet", "bat"], ["pen", "pan"], ["said", "sad"], ["send", "sand"], ["ten", "tan"]] },
      { id: "d-ei", note: "/eɪ/ is a diphthong: it glides towards /ɪ/.", pairs: [["get", "gate"], ["wet", "wait"], ["pen", "pain"], ["sell", "sale"], ["let", "late"]] },
      { id: "v-i", note: "/ɪ/ is higher.", pairs: [["bet", "bit"], ["pen", "pin"], ["set", "sit"], ["led", "lid"]] }
    ],
    mistakes: ["Italian distinguishes an open and a closed e; English /e/ lies between them. The real risk is confusing /e/ with /æ/: bed and bad must sound different.", "Spelling: ea is /e/ in common words such as head, bread, breakfast and weather."]
  },
  {
    id: "v-ae", unit: "vowels", ipa: "æ", groups: ["short"], keyword: "cat",
    length: "short", height: "open (near-open)", front: "front", lips: "neutral", chart: [38, 90],
    intro: "A short open front vowel, as in cat.",
    artic: ["The tongue is low in the mouth and towards the front; the jaw is quite open.", "The lips are neutral.", "The vowel is short."],
    examples: [["cat", "/kæt/"], ["stamp", "/stæmp/"], ["dad", "/dæd/"], ["hand", "/hænd/"], ["bad", "/bæd/"], ["happy", "/ˈhæpi/"]],
    spell: ["Almost always a (cat, hand, bad)"],
    notes: ["In current SSBE /æ/ is very open – close to [a] – so cat can sound like Italian ‘a’ to some listeners. The symbol /æ/ remains standard in dictionaries."],
    ga: { rows: [["marry – merry", "/ˈmæri/ – /ˈmeri/", "[ˈmɛri] – [ˈmɛri]"]], note: "For many American speakers marry and merry are pronounced the same; in SSBE they always contrast." },
    compare: [
      { id: "v-e", note: "Each pair is distinguished only by /æ/ vs /e/.", pairs: [["man", "men"], ["bad", "bed"], ["bag", "beg"], ["ban", "Ben"], ["band", "bend"], ["Barry", "bury"], ["bat", "bet"], ["batter", "better"], ["bland", "blend"], ["marry", "merry"], ["mass", "mess"], ["mat", "met"], ["pack", "peck"], ["paddle", "pedal"], ["pan", "pen"], ["parish", "perish"], ["sad", "said"], ["sand", "send"], ["sat", "set"], ["slapped", "slept"], ["tally", "telly"], ["tamper", "temper"], ["tan", "ten"], ["track", "trek"]] },
      { id: "v-uh", note: "/ʌ/ is central, not front.", pairs: [["cat", "cut"], ["bag", "bug"], ["hat", "hut"], ["cap", "cup"], ["match", "much"], ["ran", "run"]] },
      { id: "v-aa", note: "/ɑː/ is long and back.", pairs: [["hat", "heart"], ["cap", "carp"], ["pack", "park"], ["cat", "cart"], ["ham", "harm"]] }
    ],
    mistakes: ["Many learners say /e/ for /æ/ because they were told it is ‘between a and e’: then man sounds like men. In modern SSBE /æ/ is very open.", "Do not lengthen it or move it back: cat /kæt/, cut /kʌt/ and cart /kɑːt/ are three different words."]
  },
  {
    id: "v-uh", unit: "vowels", ipa: "ʌ", groups: ["short", "central"], keyword: "cup",
    length: "short", height: "open-mid to open", front: "central", lips: "neutral", chart: [62, 80],
    intro: "A short, open, central vowel, as in cup.",
    artic: ["The centre of the tongue is low; the jaw is fairly open.", "The lips are neutral – not rounded.", "The vowel is short."],
    examples: [["cup", "/kʌp/"], ["double", "/ˈdʌbəl/"], ["monk", "/mʌŋk/"], ["love", "/lʌv/"], ["son", "/sʌn/"], ["blood", "/blʌd/"]],
    spell: ["u (cup)", "o (monk, love, son)", "ou (double, country)", "oo (blood)"],
    notes: ["In SSBE /ʌ/ is a central vowel, much more open than the symbol suggests – close to [ɐ]."],
    compare: [
      { id: "v-ae", note: "/æ/ is front.", pairs: [["cut", "cat"], ["bug", "bag"], ["hut", "hat"], ["cup", "cap"], ["much", "match"], ["run", "ran"]] },
      { id: "v-aa", note: "/ɑː/ is long and further back.", pairs: [["cut", "cart"], ["hut", "heart"], ["much", "march"], ["bun", "barn"], ["duck", "dark"]] },
      { id: "v-o", note: "/ɒ/ is back and rounded.", pairs: [["cut", "cot"], ["luck", "lock"], ["cup", "cop"], ["nut", "not"], ["duck", "dock"]] }
    ],
    mistakes: ["Reading the letters u and o with their Italian values: love is /lʌv/, not [lov]; but is /bʌt/, not [but].", "A short, central Italian ‘a’ is a better starting point than Italian o or u."]
  },
  {
    id: "v-o", unit: "vowels", ipa: "ɒ", groups: ["short"], keyword: "not",
    length: "short", height: "open", front: "back", lips: "rounded", chart: [99, 90],
    intro: "A short, open, back, rounded vowel, as in not. General American has no /ɒ/.",
    artic: ["The back of the tongue is low; the jaw is open.", "The lips are slightly rounded.", "The vowel is short."],
    examples: [["not", "/nɒt/"], ["jog", "/dʒɒɡ/"], ["hop", "/hɒp/"], ["what", "/wɒt/"], ["want", "/wɒnt/"], ["cough", "/kɒf/"]],
    spell: ["o (not, hop)", "a after w (what, want, watch)", "ou (cough)"],
    ga: { rows: [["not", "/nɒt/ (rounded)", "[nɑt] (unrounded)"], ["hop", "/hɒp/", "[hɑp]"]], note: "GA has no /ɒ/: most such words have an unrounded open vowel [ɑ]." },
    compare: [
      { id: "v-oo", note: "/ɔː/ is long and higher.", pairs: [["cot", "caught"], ["pot", "port"], ["shot", "short"], ["fox", "forks"], ["don", "dawn"], ["spot", "sport"]] },
      { id: "d-ou", note: "/əʊ/ is a diphthong starting from the centre.", pairs: [["not", "note"], ["got", "goat"], ["rod", "road"], ["cost", "coast"], ["cock", "coke"]] },
      { id: "v-uh", note: "/ʌ/ is central and unrounded.", pairs: [["cot", "cut"], ["lock", "luck"], ["cop", "cup"], ["not", "nut"], ["dock", "duck"]] }
    ],
    mistakes: ["Using a closed Italian o: /ɒ/ is open, short and only slightly rounded.", "After w the letter a is often /ɒ/: want /wɒnt/, what /wɒt/, watch /wɒtʃ/ – not /æ/."]
  },
  {
    id: "v-oo", unit: "vowels", ipa: "ɔː", groups: ["long"], keyword: "saw",
    length: "long", height: "close-mid (SSBE)", front: "back", lips: "rounded", chart: [99, 38],
    intro: "A long, back, rounded vowel, as in saw.",
    artic: ["The back of the tongue is raised to about close-mid position in modern SSBE.", "The lips are clearly rounded.", "The vowel is long."],
    examples: [["saw", "/sɔː/"], ["score", "/skɔː/"], ["four", "/fɔː/"], ["talk", "/tɔːk/"], ["caught", "/kɔːt/"], ["daughter", "/ˈdɔːtə/"]],
    spell: ["aw (saw)", "or, ore (score)", "our (four)", "al (talk)", "augh, ough (caught, bought)"],
    ga: { rows: [["score", "/skɔː/", "[skɔr]"], ["four", "/fɔː/", "[fɔr]"]], note: "SSBE is non-rhotic: written r is silent unless a vowel follows. GA is rhotic: r is always pronounced." },
    compare: [
      { id: "v-o", note: "/ɒ/ is short and more open.", pairs: [["caught", "cot"], ["port", "pot"], ["short", "shot"], ["forks", "fox"], ["dawn", "don"], ["sport", "spot"]] },
      { id: "d-ou", note: "/əʊ/ is a diphthong.", pairs: [["law", "low"], ["saw", "so"], ["bought", "boat"], ["called", "cold"], ["caught", "coat"]] },
      { id: "v-er", note: "/ɜː/ is central and unrounded.", pairs: [["walk", "work"], ["born", "burn"], ["ward", "word"], ["short", "shirt"]] }
    ],
    mistakes: ["Pronouncing the written r in spellings such as or, ore and our: in SSBE four is /fɔː/.", "Making the vowel short like Italian o: keep it long and rounded."]
  },
  {
    id: "v-u", unit: "vowels", ipa: "ʊ", groups: ["short"], keyword: "good",
    length: "short", height: "near-close", front: "near-back", lips: "slightly rounded", chart: [74, 20],
    intro: "A short, relaxed back vowel, as in good.",
    artic: ["The back of the tongue is raised high, but less than for /uː/, and slightly towards the centre.", "The lips are only slightly rounded.", "The vowel is short and lax."],
    examples: [["good", "/ɡʊd/"], ["should", "/ʃʊd/"], ["wood", "/wʊd/"], ["book", "/bʊk/"], ["put", "/pʊt/"], ["woman", "/ˈwʊmən/"]],
    spell: ["oo (book)", "u (put, full)", "ou (could, should, would)", "o (woman)"],
    notes: ["Only a few spellings – but oo can also be /uː/ (food) or /ʌ/ (blood)."],
    compare: [
      { id: "v-uu", note: "/uː/ is longer, higher and more rounded.", pairs: [["full", "fool"], ["pull", "pool"], ["look", "Luke"], ["could", "cooed"], ["wood", "wooed"]] }
    ],
    mistakes: ["Using a long, tense Italian u: /ʊ/ is short and relaxed, with little lip rounding.", "The spelling oo is /ʊ/ in book, look, good, foot, but /uː/ in food, moon, school."]
  },
  {
    id: "v-uu", unit: "vowels", ipa: "uː", groups: ["long"], keyword: "food",
    length: "long", height: "close", front: "back (often fronted)", lips: "rounded", chart: [86, 4],
    intro: "A long close vowel with rounded lips, as in food.",
    artic: ["The tongue is raised high; in modern SSBE it is often fronted towards the centre.", "The lips are rounded.", "The vowel is long."],
    examples: [["food", "/fuːd/"], ["crude", "/kruːd/"], ["do", "/duː/"], ["blue", "/bluː/"], ["shoe", "/ʃuː/"], ["juice", "/dʒuːs/"]],
    spell: ["oo (food)", "u, u–e (crude)", "o (do)", "ue (blue)", "oe (shoe)", "ui (juice)", "ew (flew)"],
    ga: { rows: [["tune", "/tjuːn/", "[tun]"], ["new", "/njuː/", "[nu]"]], note: "After /t d n/ SSBE keeps /j/; GA usually drops it. Modern SSBE /uː/ is often fronted." },
    compare: [
      { id: "v-u", note: "/ʊ/ is shorter, lower and less rounded.", pairs: [["fool", "full"], ["pool", "pull"], ["Luke", "look"], ["cooed", "could"], ["wooed", "wood"]] }
    ],
    mistakes: ["Forgetting the hidden /j/ before /uː/: music /ˈmjuːzɪk/, use /juːz/, few /fjuː/.", "Reading every letter u as /uː/: in cut, bus and sun it is /ʌ/."]
  },
  {
    id: "v-schwa", unit: "vowels", ipa: "ə", groups: ["short", "central"], keyword: "about",
    length: "short", height: "mid", front: "central", lips: "neutral", chart: [56, 58],
    intro: "The schwa: a short, weak, central vowel. It is the most frequent vowel in English and occurs only in unstressed syllables.",
    artic: ["The tongue is in a neutral, central position – neither high nor low, neither front nor back.", "The lips are neutral and the muscles are relaxed.", "The vowel is short and weak."],
    examples: [["attack", "/əˈtæk/"], ["maker", "/ˈmeɪkə/"], ["doctor", "/ˈdɒktə/"], ["banana", "/bəˈnɑːnə/"], ["today", "/təˈdeɪ/"], ["picture", "/ˈpɪktʃə/"]],
    spell: ["Any vowel letter: about, taken /ˈteɪkən/, pencil /ˈpensəl/, today, autumn /ˈɔːtəm/", "-er, -or, -ure at the end of words (maker, doctor, picture)"],
    notes: ["Schwa occurs only in unstressed syllables: banana /bəˈnɑːnə/, today /təˈdeɪ/. Schwa is never stressed.", "Other weak vowels in unstressed syllables: /ɪ/ (begin /bɪˈɡɪn/), /i/ (happy) and /u/ (influence /ˈɪnfluəns/).", "Many short words (a, the, to, of, and…) normally have a weak form with /ə/."],
    ga: { rows: [["maker", "/ˈmeɪkə/", "[ˈmeɪkɚ]"], ["doctor", "/ˈdɒktə/", "[ˈdɑktɚ]"]], note: "In GA, schwa + written r is an r-coloured vowel [ɚ]." },
    videos: [["Video 1", "https://www.youtube.com/watch?v=m9q9dXxQjzA"], ["Video 2", "https://www.youtube.com/watch?v=b_XMthn4iUc"]],
    compare: [
      { id: "v-er", note: "/ɜː/ is also central, but long and it can be stressed: compare the two vowels of further /ˈfɜːðə/." },
      { id: "v-uh", note: "/ʌ/ appears in stressed syllables and is more open: compare the two vowels of mother /ˈmʌðə/." }
    ],
    mistakes: ["Reading every vowel letter with its full Italian value: doctor is /ˈdɒktə/, not [ˈdɔktor]; banana is /bəˈnɑːnə/.", "Pronouncing the final r in -er, -or, -ure: in SSBE teacher is /ˈtiːtʃə/.", "Using strong forms everywhere: in a sentence, to, for, of, and, can are normally weak (/tə fə əv ən kən/)."]
  },
  {
    id: "v-er", unit: "vowels", ipa: "ɜː", groups: ["long", "central"], keyword: "bird",
    length: "long", height: "mid", front: "central", lips: "neutral", chart: [58, 42],
    intro: "A long, mid, central vowel, as in bird. SSBE /ɜː/ has no r sound.",
    artic: ["The centre of the tongue is raised to a mid position.", "The lips are neutral – not rounded.", "The vowel is long; the tongue tip does not curl up for an r."],
    examples: [["bird", "/bɜːd/"], ["word", "/wɜːd/"], ["heard", "/hɜːd/"], ["learn", "/lɜːn/"], ["turn", "/tɜːn/"], ["person", "/ˈpɜːsən/"]],
    spell: ["ir (bird)", "or after w (word, work)", "ear (heard, learn)", "ur (turn)", "er (person)"],
    ga: { rows: [["bird", "/bɜːd/", "[bɝd]"], ["word", "/wɜːd/", "[wɝd]"]], note: "GA uses an r-coloured vowel [ɝ]; SSBE /ɜː/ has no r sound." },
    compare: [
      { id: "v-aa", note: "/ɑː/ is open and back.", pairs: [["hurt", "heart"], ["fur", "far"], ["curd", "card"], ["burn", "barn"]] },
      { id: "v-oo", note: "/ɔː/ is back and rounded.", pairs: [["work", "walk"], ["burn", "born"], ["word", "ward"], ["shirt", "short"]] },
      { id: "v-e", note: "/e/ is short and front.", pairs: [["heard", "head"], ["bird", "bed"], ["turn", "ten"], ["weren't", "went"]] }
    ],
    mistakes: ["Italian has no vowel like /ɜː/. Avoid [er] or [ɛr]: bird is /bɜːd/ with no r.", "Keep the lips neutral: work /wɜːk/ (unrounded) and walk /wɔːk/ (rounded) are different words."]
  },
  {
    id: "v-aa", unit: "vowels", ipa: "ɑː", groups: ["long"], keyword: "car",
    length: "long", height: "open", front: "back", lips: "neutral", chart: [92, 96],
    intro: "A long, open, back vowel, as in car.",
    artic: ["The tongue is low and pulled back; the jaw is wide open.", "The lips are neutral.", "The vowel is long."],
    examples: [["car", "/kɑː/"], ["art", "/ɑːt/"], ["hard", "/hɑːd/"], ["father", "/ˈfɑːðə/"], ["calm", "/kɑːm/"], ["glass", "/ɡlɑːs/"]],
    spell: ["ar (car, hard)", "a (father, glass, path)", "al (calm, half)", "ear (heart)"],
    ga: { rows: [["car, hard (rhoticity)", "/kɑː/, /hɑːd/", "[kɑr], [hɑrd]"], ["glass, path, half", "/ɡlɑːs/, /pɑːθ/, /hɑːf/", "[ɡlæs], [pæθ], [hæf]"]], note: "In ‘BATH’ words SSBE has /ɑː/ where GA (and northern England) has the vowel of cat." },
    compare: [
      { id: "v-ae", note: "/æ/ is short and front.", pairs: [["heart", "hat"], ["carp", "cap"], ["park", "pack"], ["cart", "cat"], ["harm", "ham"]] },
      { id: "v-uh", note: "/ʌ/ is short and central.", pairs: [["cart", "cut"], ["heart", "hut"], ["march", "much"], ["barn", "bun"], ["dark", "duck"]] }
    ],
    mistakes: ["Pronouncing the r in car, hard, farm: SSBE is non-rhotic.", "Using one short Italian a for /æ/, /ʌ/ and /ɑː/: /ɑː/ is long and back."]
  }
]);
