/* Unit 2 — Diphthongs (SSBE): three centring, five closing.
   from / to: chart positions of the start and end of the glide (same scale as vowels.js). */
Phon.addSounds([
  {
    id: "d-ei", unit: "diphthongs", ipa: "eɪ", type: "closing", typeLabel: "Closing to /ɪ/", keyword: "say",
    startDesc: "near /e/", endDesc: "/ɪ/", from: [20, 46], to: [26, 24],
    intro: "A closing diphthong, as in say: it starts at a front mid position and glides up towards /ɪ/.",
    artic: ["Start: the front of the tongue at about the position of /e/.", "Glide: the tongue rises towards /ɪ/; the lips stay spread.", "The first part is longer and louder than the second."],
    examples: [["say", "/seɪ/"], ["play", "/pleɪ/"], ["grey", "/ɡreɪ/"], ["rain", "/reɪn/"], ["eight", "/eɪt/"], ["great", "/ɡreɪt/"]],
    spell: ["ay (say)", "ai (rain)", "a–e (lake)", "ey (grey)", "ei (eight)", "ea (great)"],
    notes: ["Do not replace it with a pure vowel [e]: get /ɡet/ vs gate /ɡeɪt/."],
    compare: [
      { id: "v-e", note: "/e/ is a pure vowel: no glide.", pairs: [["gate", "get"], ["wait", "wet"], ["pain", "pen"], ["sale", "sell"], ["late", "let"]] },
      { id: "d-ai", note: "/aɪ/ starts from a much more open position.", pairs: [["may", "my"], ["lake", "like"], ["race", "rice"], ["bait", "bite"], ["Kate", "kite"]] }
    ],
    mistakes: ["Using a pure Italian e, so that late sounds like let: always complete the glide to /ɪ/.", "Reading a–e words with Italian a: lake is /leɪk/, name is /neɪm/."]
  },
  {
    id: "d-ai", unit: "diphthongs", ipa: "aɪ", type: "closing", typeLabel: "Closing to /ɪ/", keyword: "my",
    startDesc: "open [a]", endDesc: "/ɪ/", from: [46, 98], to: [28, 26],
    intro: "A wide closing diphthong, as in my: it starts with a very open vowel and glides up a long way towards /ɪ/.",
    artic: ["Start: the tongue is low, with the jaw open, as for an open [a].", "Glide: the tongue rises towards /ɪ/ and the jaw closes.", "The lips are neutral, becoming slightly spread."],
    examples: [["my", "/maɪ/"], ["eye", "/aɪ/"], ["bike", "/baɪk/"], ["high", "/haɪ/"], ["buy", "/baɪ/"], ["time", "/taɪm/"]],
    spell: ["i–e (bike)", "y (my)", "igh (high)", "ie (die)", "eye", "uy (buy)"],
    compare: [
      { id: "d-ei", note: "/eɪ/ starts from a mid position.", pairs: [["my", "may"], ["like", "lake"], ["rice", "race"], ["bite", "bait"], ["kite", "Kate"]] },
      { id: "d-oi", note: "/ɔɪ/ starts back and rounded.", pairs: [["buy", "boy"], ["tie", "toy"], ["file", "foil"], ["bile", "boil"]] }
    ],
    mistakes: ["Reading the letter i as Italian i in i–e words: bike is /baɪk/, not [bik]; time is /taɪm/.", "Be careful with pairs such as live /lɪv/ – life /laɪf/ and fill /fɪl/ – file /faɪl/."]
  },
  {
    id: "d-oi", unit: "diphthongs", ipa: "ɔɪ", type: "closing", typeLabel: "Closing to /ɪ/", keyword: "toy",
    startDesc: "near /ɔː/", endDesc: "/ɪ/", from: [94, 46], to: [30, 26],
    intro: "A closing diphthong, as in toy: it starts back and rounded and glides forward towards /ɪ/.",
    artic: ["Start: the back of the tongue at about the position of /ɔː/, with rounded lips.", "Glide: the tongue moves forward and up towards /ɪ/.", "The lips unround during the glide."],
    examples: [["toy", "/tɔɪ/"], ["boiler", "/ˈbɔɪlə/"], ["noise", "/nɔɪz/"], ["choice", "/tʃɔɪs/"], ["enjoy", "/ɪnˈdʒɔɪ/"], ["oil", "/ɔɪl/"]],
    spell: ["oy (toy, enjoy)", "oi (noise, choice)"],
    notes: ["Almost always spelt oy or oi: one of the most regular spellings in English."],
    compare: [
      { id: "d-ai", note: "/aɪ/ starts open and unrounded.", pairs: [["boy", "buy"], ["toy", "tie"], ["foil", "file"], ["boil", "bile"]] }
    ],
    mistakes: ["Few problems for Italian speakers, but start with an open, rounded back vowel and keep the glide smooth: one syllable, not two (choice /tʃɔɪs/)."]
  },
  {
    id: "d-au", unit: "diphthongs", ipa: "aʊ", type: "closing", typeLabel: "Closing to /ʊ/", keyword: "now",
    startDesc: "open [a]", endDesc: "/ʊ/", from: [52, 98], to: [72, 24],
    intro: "A wide closing diphthong, as in now: it starts open and glides up and back towards /ʊ/.",
    artic: ["Start: the tongue is low, with the jaw open, as for an open [a].", "Glide: the back of the tongue rises towards /ʊ/.", "The lips become slightly rounded at the end."],
    examples: [["now", "/naʊ/"], ["how", "/haʊ/"], ["found", "/faʊnd/"], ["house", "/haʊs/"], ["town", "/taʊn/"], ["mouth", "/maʊθ/"]],
    spell: ["ow (now, town)", "ou (found, house)"],
    notes: ["But ow can also be /əʊ/: snow, know. Check new words in a dictionary."],
    compare: [
      { id: "d-ou", note: "/əʊ/ starts in the centre.", pairs: [["now", "know"], ["town", "tone"], ["found", "phoned"], ["loud", "load"]] }
    ],
    mistakes: ["Reading ou as Italian u (house as [hus]) or ow as Italian o.", "Remember that ow has two pronunciations: cow /kaʊ/ but low /ləʊ/."]
  },
  {
    id: "d-ou", unit: "diphthongs", ipa: "əʊ", type: "closing", typeLabel: "Closing to /ʊ/", keyword: "go",
    startDesc: "near /ə/", endDesc: "/ʊ/", from: [56, 56], to: [74, 24],
    intro: "A closing diphthong, as in go: in SSBE it starts in the centre of the mouth and glides towards /ʊ/.",
    artic: ["Start: a central, schwa-like position with neutral lips.", "Glide: the back of the tongue rises towards /ʊ/.", "The lips round during the glide."],
    examples: [["snow", "/snəʊ/"], ["go", "/ɡəʊ/"], ["alone", "/əˈləʊn/"], ["phone", "/fəʊn/"], ["boat", "/bəʊt/"], ["know", "/nəʊ/"]],
    spell: ["o, o–e (go, phone)", "ow (snow, know)", "oa (boat)", "oe (toe)"],
    ga: { rows: [["go", "/ɡəʊ/ (central start)", "[ɡoʊ] (back, rounded start)"], ["snow", "/snəʊ/", "[snoʊ]"]], note: "Same phoneme, different realisation: SSBE starts in the centre, GA starts back and rounded." },
    compare: [
      { id: "v-o", note: "/ɒ/ is a short pure vowel.", pairs: [["note", "not"], ["goat", "got"], ["road", "rod"], ["coast", "cost"], ["coke", "cock"]] },
      { id: "v-oo", note: "/ɔː/ is a long pure vowel.", pairs: [["low", "law"], ["so", "saw"], ["boat", "bought"], ["cold", "called"], ["coat", "caught"]] },
      { id: "d-au", note: "/aʊ/ starts open.", pairs: [["know", "now"], ["tone", "town"], ["phoned", "found"], ["load", "loud"]] }
    ],
    mistakes: ["Using a pure Italian o: go is /ɡəʊ/, not [ɡo]. Start from schwa and glide.", "Confusing /əʊ/ with /ɒ/: note and not are different words."]
  },
  {
    id: "d-ia", unit: "diphthongs", ipa: "ɪə", type: "centring", typeLabel: "Centring", keyword: "near",
    startDesc: "near /ɪ/", endDesc: "/ə/", from: [24, 22], to: [54, 54],
    intro: "A centring diphthong, as in near: it starts at /ɪ/ and glides to the centre, towards /ə/.",
    artic: ["Start: the front of the tongue at about the position of /ɪ/.", "Glide: the tongue moves down and back to the centre.", "The lips are neutral."],
    examples: [["near", "/nɪə/"], ["beer", "/bɪə/"], ["idea", "/aɪˈdɪə/"], ["here", "/hɪə/"], ["clear", "/klɪə/"], ["year", "/jɪə/"]],
    spell: ["ear (near, clear)", "eer (beer)", "ere (here)", "ea (idea)"],
    ga: { rows: [["near", "/nɪə/", "[nɪr]"], ["beer", "/bɪə/", "[bɪr]"]], note: "Where SSBE has a centring diphthong before written r, GA (rhotic) has a vowel + [r]." },
    compare: [
      { id: "d-ea", note: "/eə/ starts lower, at /e/.", pairs: [["here", "hair"], ["beer", "bear"], ["fear", "fair"], ["cheer", "chair"], ["peer", "pair"]] }
    ],
    mistakes: ["Pronouncing the written r: near is /nɪə/ in SSBE.", "Saying [iːr] or [ir]: start with relaxed /ɪ/ and glide to schwa."]
  },
  {
    id: "d-ea", unit: "diphthongs", ipa: "eə", type: "centring", typeLabel: "Centring", keyword: "hair",
    startDesc: "near /e/", endDesc: "/ə/", from: [20, 48], to: [52, 58],
    intro: "A centring diphthong, as in hair. Dictionaries write /eə/, but in current SSBE it is usually a long pure vowel [ɛː].",
    artic: ["Start: the front of the tongue at about the position of /e/ (or a little lower).", "Glide (if present): a short movement towards the centre.", "Many speakers simply lengthen the first part: hair [hɛː]."],
    examples: [["hair", "/heə/"], ["care", "/keə/"], ["wear", "/weə/"], ["where", "/weə/"], ["there", "/ðeə/"], ["chair", "/tʃeə/"]],
    spell: ["air (hair, chair)", "are (care)", "ear (wear, bear)", "ere (where, there)"],
    notes: ["Phoneme vs realisation: dictionaries write /eə/, but in current SSBE it is usually a long pure vowel [ɛː] – hair [hɛː].", "GA has vowel + [r]: hair [hɛr], care [kɛr]."],
    compare: [
      { id: "d-ia", note: "/ɪə/ starts higher, at /ɪ/.", pairs: [["hair", "here"], ["bear", "beer"], ["fair", "fear"], ["chair", "cheer"], ["pair", "peer"]] },
      { id: "v-er", note: "/ɜː/ is central from the start.", pairs: [["hair", "her"], ["fair", "fur"], ["wear", "were"], ["stare", "stir"]] }
    ],
    mistakes: ["Pronouncing the written r or saying Italian [er]: SSBE hair is /heə/, often [hɛː].", "Note that where and wear are homophones: both /weə/."]
  },
  {
    id: "d-ua", unit: "diphthongs", ipa: "ʊə", type: "centring", typeLabel: "Centring", keyword: "cure",
    startDesc: "near /ʊ/", endDesc: "/ə/", from: [74, 22], to: [56, 54],
    intro: "A centring diphthong, as in cure. It is becoming rare: many SSBE speakers use /ɔː/ instead.",
    artic: ["Start: the back of the tongue at about the position of /ʊ/, with slightly rounded lips.", "Glide: the tongue moves to the centre and the lips unround."],
    examples: [["pure", "/pjʊə/"], ["cure", "/kjʊə/"], ["jury", "/ˈdʒʊəri/"], ["tourist", "/ˈtʊərɪst/"], ["plural", "/ˈplʊərəl/"], ["during", "/ˈdjʊərɪŋ/"]],
    spell: ["ure (pure, cure)", "ur (jury, plural)", "our (tourist)"],
    notes: ["/ʊə/ is becoming rare: many SSBE speakers say /ɔː/ instead – pure /pjɔː/, cure /kjɔː/. Dictionaries list both.", "GA has vowel + [r]: pure [pjʊr], cure [kjʊr]."],
    compare: [
      { id: "v-oo", note: "Many speakers replace /ʊə/ with /ɔː/, so that sure /ʃʊə/ and shore /ʃɔː/ can sound the same." }
    ],
    mistakes: ["Pronouncing the written r or saying Italian [ur].", "Both /pjʊə/ and /pjɔː/ are acceptable for pure: be consistent."]
  }
]);
