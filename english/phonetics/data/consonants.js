/* Unit 3 — Consonant sounds (SSBE). Three labels: voicing, place, manner.
   img: cross-section of the vocal tract (red circle = constriction, dashed arrow = airflow, red vocal folds = voiced).
   pair: the consonant with the same place and manner and opposite voicing. */
Phon.addSounds([
  {
    id: "c-p", unit: "consonants", ipa: "p", voice: "voiceless", place: "bilabial", manner: "plosive", pair: "c-b", img: "p-b", keyword: "pen",
    intro: "A voiceless bilabial plosive, as in pen.",
    artic: ["Both lips close completely and air pressure builds up behind them.", "The lips open suddenly: the air is released with a small explosion.", "The vocal folds do not vibrate."],
    examples: [["pen", "/pen/"], ["pig", "/pɪɡ/"], ["pencil", "/ˈpensəl/"], ["happy", "/ˈhæpi/"], ["stop", "/stɒp/"]],
    allophones: ["At the start of a stressed syllable /p t k/ are aspirated (a puff of air): pen [pʰen], pig [pʰɪɡ].", "After /s/ there is no aspiration: spin [spɪn]. Both are realisations of the same phoneme /p/."],
    compare: [{ id: "c-b", note: "Same place and manner; /b/ is voiced.", pairs: [["pea", "bee"], ["pin", "bin"], ["pack", "back"], ["cap", "cab"], ["rope", "robe"]] }],
    mistakes: ["Italian /p/ is never aspirated. Without the puff of air, English listeners may hear pin as bin: add aspiration at the start of stressed syllables.", "Do not add a vowel after a final consonant: stop /stɒp/, not [ˈstɔppə]."]
  },
  {
    id: "c-b", unit: "consonants", ipa: "b", voice: "voiced", place: "bilabial", manner: "plosive", pair: "c-p", img: "p-b", keyword: "book",
    intro: "A voiced bilabial plosive, as in book.",
    artic: ["Both lips close completely, then open suddenly.", "The vocal folds vibrate."],
    examples: [["book", "/bʊk/"], ["bad", "/bæd/"], ["baby", "/ˈbeɪbi/"], ["job", "/dʒɒb/"], ["rubber", "/ˈrʌbə/"]],
    compare: [
      { id: "c-p", note: "Same place and manner; /p/ is voiceless.", pairs: [["bee", "pea"], ["bin", "pin"], ["back", "pack"], ["cab", "cap"], ["robe", "rope"]] },
      { id: "c-v", note: "/v/ is a labiodental fricative: lower lip and upper teeth, with friction.", pairs: [["berry", "very"], ["best", "vest"], ["ban", "van"], ["boat", "vote"], ["curb", "curve"]] }
    ],
    mistakes: ["Final /b/ must be pronounced without an extra vowel: job /dʒɒb/, rob /rɒb/.", "Keep /b/ and /v/ distinct: berry /ˈberi/ – very /ˈveri/."]
  },
  {
    id: "c-t", unit: "consonants", ipa: "t", voice: "voiceless", place: "alveolar", manner: "plosive", pair: "c-d", img: "t-d", keyword: "tea",
    intro: "A voiceless alveolar plosive, as in tea.",
    artic: ["The tongue tip presses against the alveolar ridge – the bump behind the upper teeth – not against the teeth.", "The tongue is released suddenly.", "The vocal folds do not vibrate; at the start of a stressed syllable it is aspirated: tea [tʰiː]."],
    examples: [["tea", "/tiː/"], ["taxi", "/ˈtæksi/"], ["table", "/ˈteɪbəl/"], ["water", "/ˈwɔːtə/"], ["cat", "/kæt/"]],
    ga: { rows: [["better", "/ˈbetə/ [ˈbetə]", "[ˈbɛɾɚ]"], ["city", "/ˈsɪti/ [ˈsɪti]", "[ˈsɪɾi]"]], note: "GA flap [ɾ]: between vowels, before an unstressed vowel, /t/ becomes a quick voiced tap." },
    compare: [
      { id: "c-d", note: "Same place and manner; /d/ is voiced.", pairs: [["tie", "die"], ["town", "down"], ["bet", "bed"], ["cart", "card"], ["write", "ride"]] },
      { id: "c-th", note: "/θ/ is a dental fricative: the tongue does not close completely.", pairs: [["tin", "thin"], ["tree", "three"], ["true", "through"], ["tank", "thank"], ["boat", "both"]] }
    ],
    mistakes: ["Italian t is dental (tongue against the teeth); English /t/ is alveolar (tongue on the ridge).", "Aspirate /t/ at the start of stressed syllables: time [tʰaɪm]."]
  },
  {
    id: "c-d", unit: "consonants", ipa: "d", voice: "voiced", place: "alveolar", manner: "plosive", pair: "c-t", img: "t-d", keyword: "dog",
    intro: "A voiced alveolar plosive, as in dog.",
    artic: ["The tongue tip presses against the alveolar ridge, then releases suddenly.", "The vocal folds vibrate."],
    examples: [["did", "/dɪd/"], ["dog", "/dɒɡ/"], ["depend", "/dɪˈpend/"], ["ladder", "/ˈlædə/"], ["bed", "/bed/"]],
    compare: [
      { id: "c-t", note: "Same place and manner; /t/ is voiceless.", pairs: [["die", "tie"], ["down", "town"], ["bed", "bet"], ["card", "cart"], ["ride", "write"]] },
      { id: "c-dh", note: "/ð/ is a dental fricative.", pairs: [["day", "they"], ["dare", "there"], ["doze", "those"], ["breed", "breathe"]] }
    ],
    mistakes: ["Use the alveolar ridge, not the teeth.", "Do not replace /ð/ with /d/: they /ðeɪ/ and day /deɪ/ are different words."]
  },
  {
    id: "c-k", unit: "consonants", ipa: "k", voice: "voiceless", place: "velar", manner: "plosive", pair: "c-g", img: "k-g", keyword: "kick",
    intro: "A voiceless velar plosive, as in kick.",
    artic: ["The back of the tongue presses against the velum (soft palate).", "The tongue is released suddenly; aspirated at the start of a stressed syllable: cat [kʰæt].", "The vocal folds do not vibrate."],
    examples: [["kick", "/kɪk/"], ["cake", "/keɪk/"], ["contact", "/ˈkɒntækt/"], ["school", "/skuːl/"], ["queen", "/kwiːn/"]],
    spell: ["k (kick)", "c (cake)", "ck (back)", "ch (school)", "q(u) (queen /kwiːn/)", "x = /ks/ (box)"],
    compare: [{ id: "c-g", note: "Same place and manner; /ɡ/ is voiced.", pairs: [["coat", "goat"], ["cap", "gap"], ["back", "bag"], ["lock", "log"], ["curl", "girl"]] }],
    mistakes: ["Aspirate /k/ at the start of stressed syllables.", "Silent k before n: know /nəʊ/, knee /niː/."]
  },
  {
    id: "c-g", unit: "consonants", ipa: "ɡ", voice: "voiced", place: "velar", manner: "plosive", pair: "c-k", img: "k-g", keyword: "get",
    intro: "A voiced velar plosive, as in get.",
    artic: ["The back of the tongue presses against the velum, then releases suddenly.", "The vocal folds vibrate."],
    examples: [["get", "/ɡet/"], ["great", "/ɡreɪt/"], ["glass", "/ɡlɑːs/"], ["give", "/ɡɪv/"], ["bag", "/bæɡ/"]],
    notes: ["/ɡ/ is always the ‘hard’ g of get, never the g of gem /dʒem/."],
    compare: [{ id: "c-k", note: "Same place and manner; /k/ is voiceless.", pairs: [["goat", "coat"], ["gap", "cap"], ["bag", "back"], ["log", "lock"], ["girl", "curl"]] }],
    mistakes: ["In Italian g before e and i is always /dʒ/. In English many common words have /ɡ/ there: get /ɡet/, give /ɡɪv/, girl /ɡɜːl/, begin /bɪˈɡɪn/."]
  },
  {
    id: "c-f", unit: "consonants", ipa: "f", voice: "voiceless", place: "labiodental", manner: "fricative", pair: "c-v", img: "f-v", keyword: "phone",
    intro: "A voiceless labiodental fricative, as in food.",
    artic: ["The lower lip touches the upper front teeth.", "Air escapes through the narrow gap with friction.", "The vocal folds do not vibrate."],
    examples: [["food", "/fuːd/"], ["laugh", "/lɑːf/"], ["phone", "/fəʊn/"], ["coffee", "/ˈkɒfi/"], ["enough", "/ɪˈnʌf/"]],
    spell: ["f, ff (food, coffee)", "ph (phone)", "gh (laugh, enough)"],
    compare: [{ id: "c-v", note: "Same place and manner; /v/ is voiced.", pairs: [["fan", "van"], ["fine", "vine"], ["few", "view"], ["leaf", "leave"], ["safe", "save"]] }],
    mistakes: ["Remember the spellings ph and gh: photo /ˈfəʊtəʊ/, rough /rʌf/."]
  },
  {
    id: "c-v", unit: "consonants", ipa: "v", voice: "voiced", place: "labiodental", manner: "fricative", pair: "c-f", img: "f-v", keyword: "voice",
    intro: "A voiced labiodental fricative, as in voice.",
    artic: ["The lower lip touches the upper front teeth; air escapes with friction.", "The vocal folds vibrate."],
    examples: [["voice", "/vɔɪs/"], ["very", "/ˈveri/"], ["receive", "/rɪˈsiːv/"], ["of", "/ɒv/"], ["live", "/lɪv/"]],
    notes: ["/v/ is almost always spelt v – but note of /ɒv/ (weak form /əv/)."],
    compare: [
      { id: "c-f", note: "Same place and manner; /f/ is voiceless.", pairs: [["van", "fan"], ["vine", "fine"], ["view", "few"], ["leave", "leaf"], ["save", "safe"]] },
      { id: "c-w", note: "/w/ uses rounded lips without touching the teeth.", pairs: [["vest", "west"], ["vine", "wine"], ["vet", "wet"], ["veil", "whale"]] },
      { id: "c-b", note: "/b/ is a plosive: complete closure of both lips.", pairs: [["very", "berry"], ["vest", "best"], ["van", "ban"], ["vote", "boat"]] }
    ],
    mistakes: ["Keep /v/ voiced at the end of words: leave /liːv/ is not leaf /liːf/.", "Do not confuse /v/ and /w/: vine – wine."]
  },
  {
    id: "c-th", unit: "consonants", ipa: "θ", voice: "voiceless", place: "dental", manner: "fricative", pair: "c-dh", img: "th", keyword: "thin",
    intro: "A voiceless dental fricative, as in thin. Italian has no such sound.",
    artic: ["The tongue tip touches the back of the upper front teeth (or sits lightly between the teeth).", "Air escapes over the tongue with soft friction.", "The vocal folds do not vibrate."],
    examples: [["thin", "/θɪn/"], ["throw", "/θrəʊ/"], ["thumb", "/θʌm/"], ["mouth", "/maʊθ/"], ["nothing", "/ˈnʌθɪŋ/"]],
    notes: ["One spelling (th), two phonemes: thigh /θaɪ/ – thy /ðaɪ/.", "Keep the tongue tip at the upper teeth – do not replace them with /t d/ or /f v/."],
    compare: [
      { id: "c-t", note: "/t/ is a plosive at the alveolar ridge.", pairs: [["thin", "tin"], ["three", "tree"], ["through", "true"], ["thank", "tank"], ["both", "boat"]] },
      { id: "c-s", note: "/s/ is alveolar, with a sharp hiss.", pairs: [["thing", "sing"], ["think", "sink"], ["thick", "sick"], ["mouth", "mouse"], ["path", "pass"]] },
      { id: "c-dh", note: "Same place and manner; /ð/ is voiced.", pairs: [["thigh", "thy"]] }
    ],
    mistakes: ["Replacing /θ/ with /t/ (tree for three) or /s/ (sink for think).", "Put the tongue tip against the teeth and blow gently: the sound must be continuous."]
  },
  {
    id: "c-dh", unit: "consonants", ipa: "ð", voice: "voiced", place: "dental", manner: "fricative", pair: "c-th", img: "th", keyword: "this",
    intro: "A voiced dental fricative, as in this. It begins very frequent words: the, this, that, they, there.",
    artic: ["The tongue tip touches the back of the upper front teeth.", "Air escapes with soft friction.", "The vocal folds vibrate."],
    examples: [["then", "/ðen/"], ["this", "/ðɪs/"], ["there", "/ðeə/"], ["mother", "/ˈmʌðə/"], ["breathe", "/briːð/"]],
    compare: [
      { id: "c-d", note: "/d/ is a plosive at the alveolar ridge.", pairs: [["they", "day"], ["there", "dare"], ["those", "doze"], ["breathe", "breed"]] },
      { id: "c-z", note: "/z/ is alveolar.", pairs: [["breathe", "breeze"], ["clothing", "closing"], ["then", "Zen"]] },
      { id: "c-th", note: "Same place and manner; /θ/ is voiceless.", pairs: [["thy", "thigh"]] }
    ],
    mistakes: ["Replacing /ð/ with /d/: the, this and they are among the most frequent words in English, so this mistake is very noticeable.", "Keep /ð/ voiced: there is a buzz you can feel in your throat."]
  },
  {
    id: "c-s", unit: "consonants", ipa: "s", voice: "voiceless", place: "alveolar", manner: "fricative", pair: "c-z", img: "s-z", keyword: "so",
    intro: "A voiceless alveolar fricative, as in so: a hissing (sibilant) sound.",
    artic: ["The blade of the tongue forms a narrow groove near the alveolar ridge.", "Air is forced through the groove: a strong hiss.", "The vocal folds do not vibrate."],
    examples: [["so", "/səʊ/"], ["swim", "/swɪm/"], ["sun", "/sʌn/"], ["city", "/ˈsɪti/"], ["bus", "/bʌs/"]],
    spell: ["s, ss (sun, kiss)", "c before e, i, y (city, centre)", "sc (science)"],
    compare: [
      { id: "c-z", note: "Same place and manner; /z/ is voiced.", pairs: [["sip", "zip"], ["sue", "zoo"], ["bus", "buzz"], ["rice", "rise"], ["place", "plays"], ["peace", "peas"]] },
      { id: "c-sh", note: "/ʃ/ is further back, with rounded lips.", pairs: [["sip", "ship"], ["sea", "she"], ["sort", "short"], ["save", "shave"], ["mess", "mesh"]] },
      { id: "c-th", note: "/θ/ is dental and much softer.", pairs: [["sing", "thing"], ["sink", "think"], ["sick", "thick"], ["mouse", "mouth"], ["pass", "path"]] }
    ],
    mistakes: ["In Italian, s before a voiced consonant becomes [z] (sbaglio, smettere). In English it stays voiceless: smile /smaɪl/, slow /sləʊ/, snow /snəʊ/.", "Final s can be /s/ or /z/: see the -s ending lesson."]
  },
  {
    id: "c-z", unit: "consonants", ipa: "z", voice: "voiced", place: "alveolar", manner: "fricative", pair: "c-s", img: "s-z", keyword: "zoo",
    intro: "A voiced alveolar fricative, as in zoo.",
    artic: ["The blade of the tongue forms a narrow groove near the alveolar ridge.", "The vocal folds vibrate: a buzzing sound."],
    examples: [["zoo", "/zuː/"], ["zero", "/ˈzɪərəʊ/"], ["zebra", "/ˈzebrə/"], ["is", "/ɪz/"], ["music", "/ˈmjuːzɪk/"]],
    notes: ["The letter s is often /z/: is /ɪz/, rose /rəʊz/, music /ˈmjuːzɪk/."],
    compare: [
      { id: "c-s", note: "Same place and manner; /s/ is voiceless.", pairs: [["zip", "sip"], ["zoo", "sue"], ["buzz", "bus"], ["rise", "rice"], ["plays", "place"], ["peas", "peace"]] },
      { id: "c-dh", note: "/ð/ is dental.", pairs: [["breeze", "breathe"], ["closing", "clothing"]] }
    ],
    mistakes: ["The Italian letter z is [ts] or [dz]. English z is /z/: zoo is /zuː/, not [dzuː].", "Do not devoice final /z/: dogs /dɒɡz/, plays /pleɪz/."]
  },
  {
    id: "c-sh", unit: "consonants", ipa: "ʃ", voice: "voiceless", place: "postalveolar", manner: "fricative", pair: "c-zh", img: "sh-zh", keyword: "sheep",
    intro: "A voiceless postalveolar fricative, as in sheep.",
    artic: ["The blade of the tongue is raised towards the area just behind the alveolar ridge.", "The lips are slightly rounded.", "The vocal folds do not vibrate."],
    examples: [["sheep", "/ʃiːp/"], ["shine", "/ʃaɪn/"], ["station", "/ˈsteɪʃən/"], ["sugar", "/ˈʃʊɡə/"], ["machine", "/məˈʃiːn/"]],
    spell: ["sh (sheep)", "-tion, -ssion (station, mission)", "s (sugar, sure)", "ch (machine)"],
    compare: [
      { id: "c-ch", note: "/tʃ/ starts with a complete closure.", pairs: [["ship", "chip"], ["share", "chair"], ["wash", "watch"], ["sheep", "cheap"], ["shoes", "choose"], ["cash", "catch"]] },
      { id: "c-s", note: "/s/ is further forward, with spread lips.", pairs: [["ship", "sip"], ["she", "sea"], ["short", "sort"], ["shave", "save"], ["mesh", "mess"]] }
    ],
    mistakes: ["Reading -tion the Italian way: station is /ˈsteɪʃən/, not [ˈstatsjon].", "Keep /ʃ/ and /tʃ/ apart: ship – chip."]
  },
  {
    id: "c-zh", unit: "consonants", ipa: "ʒ", voice: "voiced", place: "postalveolar", manner: "fricative", pair: "c-sh", img: "sh-zh", keyword: "vision",
    intro: "A voiced postalveolar fricative, as in vision. It is the rarest English consonant.",
    artic: ["The tongue is in the same position as for /ʃ/; the lips are slightly rounded.", "The vocal folds vibrate."],
    examples: [["pleasure", "/ˈpleʒə/"], ["vision", "/ˈvɪʒən/"], ["leisure", "/ˈleʒə/"], ["usual", "/ˈjuːʒuəl/"], ["beige", "/beɪʒ/"]],
    ga: { rows: [["leisure", "/ˈleʒə/", "[ˈliʒɚ]"]], note: "/ʒ/ is rare: mostly mid-word (-sure, -sion) and in loans (beige /beɪʒ/). Lips are slightly rounded for /ʃ ʒ/." },
    notes: ["/ʒ/ never begins a common English word."],
    compare: [{ id: "c-sh", note: "Same place and manner; /ʃ/ is voiceless. Compare the middle consonants of pressure /ˈpreʃə/ and pleasure /ˈpleʒə/." }],
    mistakes: ["/ʒ/ does not exist in standard Italian. Do not replace it with /ʃ/ or /dʒ/: pleasure is /ˈpleʒə/, not [ˈpleʃə] or [ˈpledʒə]."]
  },
  {
    id: "c-ch", unit: "consonants", ipa: "tʃ", voice: "voiceless", place: "postalveolar", manner: "affricate", pair: "c-j", img: "ch-dzh", keyword: "chin",
    intro: "A voiceless postalveolar affricate, as in church.",
    artic: ["A complete closure (like /t/) just behind the alveolar ridge…", "…released slowly as a fricative (like /ʃ/).", "The vocal folds do not vibrate. Each affricate is one phoneme, although it is written with two symbols."],
    examples: [["church", "/tʃɜːtʃ/"], ["chin", "/tʃɪn/"], ["chat", "/tʃæt/"], ["watch", "/wɒtʃ/"], ["picture", "/ˈpɪktʃə/"]],
    spell: ["ch (chin)", "tch (watch)", "t before -ure (picture, future)"],
    compare: [
      { id: "c-sh", note: "/ʃ/ has no closure.", pairs: [["chip", "ship"], ["chair", "share"], ["watch", "wash"], ["cheap", "sheep"], ["choose", "shoes"], ["catch", "cash"]] },
      { id: "c-j", note: "Same place and manner; /dʒ/ is voiced.", pairs: [["cheap", "jeep"], ["chin", "gin"], ["choke", "joke"], ["rich", "ridge"], ["batch", "badge"]] }
    ],
    mistakes: ["In Italian ch is /k/. In English ch is usually /tʃ/: cheap /tʃiːp/, chair /tʃeə/. It can also be /k/ (school, character) or /ʃ/ (machine)."]
  },
  {
    id: "c-j", unit: "consonants", ipa: "dʒ", voice: "voiced", place: "postalveolar", manner: "affricate", pair: "c-ch", img: "ch-dzh", keyword: "June",
    intro: "A voiced postalveolar affricate, as in June.",
    artic: ["A complete closure just behind the alveolar ridge, released slowly as a fricative.", "The vocal folds vibrate."],
    examples: [["June", "/dʒuːn/"], ["judge", "/dʒʌdʒ/"], ["journey", "/ˈdʒɜːni/"], ["giant", "/ˈdʒaɪənt/"], ["age", "/eɪdʒ/"]],
    spell: ["j (just)", "g before e, i, y (gem, giant)", "dge (judge)"],
    compare: [
      { id: "c-ch", note: "Same place and manner; /tʃ/ is voiceless.", pairs: [["jeep", "cheap"], ["gin", "chin"], ["joke", "choke"], ["ridge", "rich"], ["badge", "batch"]] },
      { id: "c-y", note: "/j/ is the first sound of yet – a semi-vowel, not an affricate.", pairs: [["jet", "yet"], ["jam", "yam"], ["joke", "yolk"], ["jeer", "year"], ["Jess", "yes"]] }
    ],
    mistakes: ["The letter j in English is /dʒ/: just /dʒʌst/, not [jʌst].", "IPA /j/ is a different sound: the y of yes."]
  },
  {
    id: "c-m", unit: "consonants", ipa: "m", voice: "voiced", place: "bilabial", manner: "nasal", img: "m", keyword: "man",
    intro: "A voiced bilabial nasal, as in man.",
    artic: ["Both lips close.", "The velum is lowered, so air escapes through the nose.", "The vocal folds vibrate."],
    examples: [["man", "/mæn/"], ["among", "/əˈmʌŋ/"], ["calm", "/kɑːm/"], ["summer", "/ˈsʌmə/"], ["come", "/kʌm/"]],
    compare: [{ id: "c-n", note: "/n/ is made with the tongue tip on the alveolar ridge.", pairs: [["mice", "nice"], ["me", "knee"], ["some", "sun"], ["warm", "warn"], ["map", "nap"]] }],
    mistakes: ["Pronounce final /m/ clearly, without adding a vowel: come /kʌm/."]
  },
  {
    id: "c-n", unit: "consonants", ipa: "n", voice: "voiced", place: "alveolar", manner: "nasal", img: "n", keyword: "no",
    intro: "A voiced alveolar nasal, as in no.",
    artic: ["The tongue tip closes against the alveolar ridge.", "The velum is lowered: air escapes through the nose.", "The vocal folds vibrate."],
    examples: [["no", "/nəʊ/"], ["not", "/nɒt/"], ["annoy", "/əˈnɔɪ/"], ["sun", "/sʌn/"], ["know", "/nəʊ/"]],
    notes: ["/n/ can form a syllable on its own, without a vowel, after /t d/: button [ˈbʌtn̩], sudden [ˈsʌdn̩]."],
    compare: [
      { id: "c-m", note: "/m/ is made with both lips.", pairs: [["nice", "mice"], ["knee", "me"], ["sun", "some"], ["warn", "warm"]] },
      { id: "c-ng", note: "/ŋ/ is made with the back of the tongue against the velum.", pairs: [["sin", "sing"], ["thin", "thing"], ["ran", "rang"], ["ban", "bang"], ["win", "wing"], ["kin", "king"]] }
    ],
    mistakes: ["Do not replace /ŋ/ with /n/ at the end of words: sing /sɪŋ/, not [sin]."]
  },
  {
    id: "c-ng", unit: "consonants", ipa: "ŋ", voice: "voiced", place: "velar", manner: "nasal", img: "ng", keyword: "sing",
    intro: "A voiced velar nasal, as in sing. It never begins an English word.",
    artic: ["The back of the tongue closes against the velum.", "The velum is lowered: air escapes through the nose.", "The vocal folds vibrate."],
    examples: [["bring", "/brɪŋ/"], ["banged", "/bæŋd/"], ["singing", "/ˈsɪŋɪŋ/"], ["think", "/θɪŋk/"], ["finger", "/ˈfɪŋɡə/"]],
    notes: ["/ŋ/ never begins a word: sing /sɪŋ/, finger /ˈfɪŋɡə/, think /θɪŋk/.", "ng is /ŋ/ alone in sing, singer /ˈsɪŋə/ and singing, but /ŋɡ/ in finger, longer /ˈlɒŋɡə/ and hungry /ˈhʌŋɡri/."],
    compare: [{ id: "c-n", note: "/n/ is alveolar.", pairs: [["sing", "sin"], ["thing", "thin"], ["rang", "ran"], ["bang", "ban"], ["wing", "win"], ["king", "kin"]] }],
    mistakes: ["Adding a [ɡ] after /ŋ/: sing is /sɪŋ/, not [siŋɡ]; singing is /ˈsɪŋɪŋ/.", "Replacing /ŋ/ with /n/ in -ing: going /ˈɡəʊɪŋ/, not [ˈɡəʊin]."]
  },
  {
    id: "c-l", unit: "consonants", ipa: "l", voice: "voiced", place: "alveolar", manner: "lateral approximant", img: "l", keyword: "leg",
    intro: "A voiced alveolar lateral approximant, as in leg. It has two main allophones: clear [l] and dark [ɫ].",
    artic: ["The tongue tip touches the alveolar ridge.", "Air flows over the sides of the tongue (lateral).", "The vocal folds vibrate."],
    examples: [["leg", "/leɡ/"], ["hello", "/həˈləʊ/"], ["always", "/ˈɔːlweɪz/"], ["feel", "/fiːl/"], ["milk", "/mɪlk/"]],
    allophones: ["Clear [l] before a vowel: leaf, light.", "Dark [ɫ], with the back of the tongue raised, before a consonant or a pause: feel [fiːɫ], milk [mɪɫk].", "Clear and dark l are allophones of /l/: they never distinguish words."],
    ga: { rows: [["leaf (before a vowel)", "clear [l]", "dark [ɫ]"], ["feel, milk", "dark [ɫ]", "dark [ɫ]"]], note: "Air flows over the sides of the tongue. Clear and dark l are allophones of /l/." },
    compare: [{ id: "c-r", note: "/r/ has no contact between tongue and ridge.", pairs: [["light", "right"], ["long", "wrong"], ["lead", "read"], ["glass", "grass"], ["fly", "fry"], ["collect", "correct"]] }],
    mistakes: ["Italian l is always clear. At the end of a word and before a consonant, use dark [ɫ]: feel, milk, people.", "Silent l in some common words: talk, walk, half, calm, could, should, would."]
  },
  {
    id: "c-r", unit: "consonants", ipa: "r", voice: "voiced", place: "postalveolar", manner: "approximant", img: "r", keyword: "red",
    intro: "A voiced postalveolar approximant, as in red. In SSBE it is pronounced only before a vowel.",
    artic: ["The tongue tip is raised towards the area behind the alveolar ridge, without touching it.", "There is no friction, no tap and no trill.", "The lips are often slightly rounded; the vocal folds vibrate."],
    examples: [["red", "/red/"], ["around", "/əˈraʊnd/"], ["proud", "/praʊd/"], ["very", "/ˈveri/"], ["sorry", "/ˈsɒri/"]],
    notes: ["Dictionaries write the phoneme as /r/, but its phonetic realisation is the approximant [ɹ]: red /red/ [ɹed]. The IPA symbol [r] on its own stands for a trill, as in Italian.", "Linking r: a written final r is pronounced when the next word begins with a vowel: far away /fɑːr əˈweɪ/."],
    ga: { rows: [["car, hard", "/kɑː/, /hɑːd/", "[kɑr], [hɑrd]"], ["red, very", "/red/, /ˈveri/", "[rɛd], [ˈvɛri]"]], note: "Rhoticity: SSBE pronounces /r/ only before a vowel; GA pronounces every written r." },
    compare: [{ id: "c-l", note: "/l/ touches the ridge and is lateral.", pairs: [["right", "light"], ["wrong", "long"], ["read", "lead"], ["grass", "glass"], ["fry", "fly"], ["correct", "collect"]] }],
    mistakes: ["Using the Italian trill or tap: English /r/ is an approximant – the tongue does not touch the roof of the mouth.", "Pronouncing r after a vowel in SSBE: car /kɑː/, hard /hɑːd/, teacher /ˈtiːtʃə/."]
  },
  {
    id: "c-w", unit: "consonants", ipa: "w", voice: "voiced", place: "labial-velar", manner: "approximant", img: "w", keyword: "wet",
    intro: "A voiced labial-velar approximant, as in wet: rounded lips plus the back of the tongue raised.",
    artic: ["The lips are rounded and the back of the tongue is raised towards the velum – two places at once.", "There is no friction: it is like a very short /uː/ (a semi-vowel).", "The vocal folds vibrate."],
    examples: [["wet", "/wet/"], ["away", "/əˈweɪ/"], ["swim", "/swɪm/"], ["one", "/wʌn/"], ["quick", "/kwɪk/"]],
    notes: ["/w/ belongs in two columns of the chart: bilabial (lips) and velar (tongue).", "Silent w: write, wrong, who, two, answer, sword."],
    compare: [{ id: "c-v", note: "/v/ uses the lower lip and upper teeth, with friction.", pairs: [["west", "vest"], ["wine", "vine"], ["wet", "vet"], ["whale", "veil"]] }],
    mistakes: ["Do not read the letter w as /v/: wine /waɪn/, west /west/.", "Remember the hidden /w/ in one /wʌn/ and qu = /kw/ (queen, quick)."]
  },
  {
    id: "c-y", unit: "consonants", ipa: "j", voice: "voiced", place: "palatal", manner: "approximant", img: "j", keyword: "yes",
    intro: "A voiced palatal approximant, as in yes. IPA /j/ is the y of yes – not the j of June.",
    artic: ["The front of the tongue is raised towards the hard palate.", "There is no friction: it is like a very short /iː/ (a semi-vowel).", "The vocal folds vibrate."],
    examples: [["yes", "/jes/"], ["yellow", "/ˈjeləʊ/"], ["usual", "/ˈjuːʒuəl/"], ["few", "/fjuː/"], ["university", "/ˌjuːnɪˈvɜːsəti/"]],
    spell: ["y (yes, yet)", "the hidden /j/ in u, ew: university /ˌjuːnɪˈvɜːsəti/, few /fjuː/"],
    compare: [{ id: "c-j", note: "/dʒ/ is an affricate.", pairs: [["yet", "jet"], ["yam", "jam"], ["yolk", "joke"], ["year", "jeer"], ["yes", "Jess"]] }],
    mistakes: ["Confusing the symbol with the letter: /j/ is yes, while the letter j is /dʒ/.", "Dropping the hidden /j/: music /ˈmjuːzɪk/, not [ˈmuːzɪk]; use /juːz/."]
  },
  {
    id: "c-h", unit: "consonants", ipa: "h", voice: "voiceless", place: "glottal", manner: "fricative", img: "h", keyword: "how",
    intro: "A voiceless glottal fricative, as in how.",
    artic: ["Air passes with slight friction through the open glottis (between the vocal folds).", "The mouth is already shaped for the following vowel.", "/h/ only occurs before a vowel."],
    examples: [["how", "/haʊ/"], ["height", "/haɪt/"], ["hero", "/ˈhɪərəʊ/"], ["behind", "/bɪˈhaɪnd/"], ["hello", "/həˈləʊ/"]],
    notes: ["/h/ only occurs before a vowel: it is silent in hour, honest, honour, heir and in vehicle /ˈviːɪkəl/."],
    compare: [{ id: "", note: "/h/ against no consonant at all: these pairs differ only in /h/.", pairs: [["hair", "air"], ["heat", "eat"], ["hill", "ill"], ["hold", "old"], ["hand", "and"], ["harm", "arm"]] }],
    mistakes: ["In Italian the letter h is always silent; in English it is usually pronounced: house /haʊs/, happy /ˈhæpi/.", "The opposite mistake – adding /h/ before a vowel – is just as confusing: I ate /aɪ eɪt/ vs I hate /aɪ heɪt/."]
  }
]);
