/* Hand-written exercises. More exercises are generated automatically from the sound cards
   (symbol recognition, transcriptions, features, minimal-pair listening, error correction).
   Belt = difficulty: 1 White … 6 Black. Letters in {braces} are highlighted (the "underlined letters").

   ["m", belt, prompt, [correct, wrong, wrong…], expl]                     multiple choice (options shuffled)
   ["choice", belt, prompt, [choices in fixed order], correctIndex, expl]    fixed choices (e.g. /s/ /z/ /ɪz/)
   ["sort", belt, instruction, [column labels], [[item, columnIndex]…], expl] classification
   ["multi", belt, word, [options], [correct options], expl]                tick every correct option
   ["seg", belt, instruction, word, [parts], [correct part indexes], ipa, expl]  tap the parts (empty = none)
   ["write", belt, ipa, [accepted words], expl]                              transcription → word
   ["stress", belt, word, [syllables], stressedIndex, ipa, expl, context?]   tap the stressed syllable
   ["odd", belt, [four words], oddIndex, expl]                               odd one out
   ["gap", belt, "text with ___", [[answers gap 1], [answers gap 2]…], expl, [word bank]?]
   ["text", belt, "/transcription/", "Answer in ordinary spelling.", expl]   transcription → sentence
   ["match", belt, instruction, [[left, right]…], expl]                      matching */
(function (P) {
  "use strict";
  const SZ = ["/s/", "/z/", "/ɪz/"], ED = ["/t/", "/d/", "/ɪd/"];

  /* ---------------- START HERE ---------------- */
  P.addExercises("l-phonemes", [
    ["m", 1, "What is a phoneme?", ["The smallest unit of sound that can distinguish meaning", "A letter of the alphabet", "A predictable variant of a sound", "A syllable with stress"], "A phoneme distinguishes meaning: /p/ and /b/ are different phonemes because pin and bin are different words."],
    ["m", 1, "Which pair is a minimal pair?", ["ship – sheep", "ship – shop – shape", "ship – boat", "ships – ship"], "ship /ʃɪp/ and sheep /ʃiːp/ differ in only one sound."],
    ["m", 2, "Which brackets are used for phonetic (allophonic) transcription?", ["[ ]", "/ /", "( )", "{ }"], "Square brackets show phonetic detail: [pʰɪn]. Slashes show phonemes: /pɪn/."],
    ["m", 2, "The p in pin [pʰɪn] and the p in spin [spɪn] are…", ["two allophones of the phoneme /p/", "two different phonemes", "two graphemes", "a minimal pair"], "Aspiration is predictable (it depends on the position), so it never changes meaning: the two sounds are allophones of /p/."],
    ["m", 3, "Clear [l] in leaf and dark [ɫ] in feel are…", ["allophones of /l/", "different phonemes", "a minimal pair", "spellings of the same letter"], "Their distribution is predictable: clear before a vowel, dark before a consonant or a pause."],
    ["m", 2, "How many phonemes are there in ship?", ["3", "4", "2", "5"], "ship /ʃɪp/: /ʃ/ + /ɪ/ + /p/ – four letters, three phonemes."],
    ["m", 3, "How many phonemes are there in thought?", ["3", "7", "4", "5"], "thought /θɔːt/: /θ/ + /ɔː/ + /t/. The letters gh are silent."],
    ["m", 3, "How many phonemes are there in box?", ["4", "3", "2", "5"], "box /bɒks/: the letter x stands for two phonemes, /k/ + /s/."],
    ["m", 3, "How many graphemes are there in sheep?", ["3", "5", "4", "2"], "sh + ee + p: three graphemes for three phonemes /ʃ iː p/."],
    ["m", 4, "Which word shows that one grapheme can represent different phonemes?", ["ea in sea, head and great", "sh in ship and shop", "p in pen and pin", "m in man and map"], "ea is /iː/ in sea, /e/ in head and /eɪ/ in great."]
  ]);
  P.addExercises("l-ssbe", [
    ["text", 2, "/ðə wɜːld ɪz ˈbetə wɪð ˈpiːpəl huː kən riːd ðɪs/", "The world is better with people who can read this.", "Function words such as can are usually unstressed: /kən/."],
    ["text", 2, "/lɜːn fəˈnetɪks · meɪk ðə wɜːld ˈbetə/", "Learn phonetics. Make the world better.", "ˈ marks the stressed syllable; ː marks a long vowel."],
    ["m", 1, "What does ː mean in /siː/?", ["The vowel is long", "The syllable is stressed", "The sound is voiced", "The vowel is rounded"], "ː is the length mark."],
    ["m", 1, "What does ˈ mean in /ˈbetə/?", ["The next syllable has primary stress", "The vowel is long", "There is a pause", "The consonant is silent"], "ˈ is placed before the stressed syllable."],
    ["m", 2, "Which accent is the reference accent of this course?", ["Standard Southern British English (SSBE)", "General American", "Scottish English", "Australian English"], "SSBE, the modern form of RP, is used by British learners’ dictionaries."]
  ]);
  P.addExercises("l-44", [
    ["m", 1, "How many vowel phonemes does SSBE have (pure vowels and diphthongs)?", ["20", "5", "12", "24"], "12 pure vowels + 8 diphthongs = 20."],
    ["m", 1, "How many consonant phonemes does English have?", ["24", "21", "20", "26"], "24 consonant phonemes (the alphabet has 21 consonant letters)."],
    ["m", 2, "Which phoneme never begins an English word?", ["/ŋ/", "/ʃ/", "/j/", "/θ/"], "/ŋ/ appears only in the middle or at the end: sing, singer."],
    ["m", 3, "Which phoneme never begins a common English word?", ["/ʒ/", "/ʃ/", "/dʒ/", "/tʃ/"], "/ʒ/ appears mostly in the middle of words: pleasure, vision."]
  ]);

  /* ---------------- UNIT 1: VOWELS ---------------- */
  P.addExercises("l-v-describe", [
    ["multi", 2, "bring", ["/ɪ/", "/iː/", "/e/", "/ə/", "/æ/", "/ʌ/"], ["/ɪ/"], "bring /brɪŋ/."],
    ["multi", 2, "box", ["/ɒ/", "/ɔː/", "/ʌ/", "/əʊ/", "/ə/", "/æ/"], ["/ɒ/"], "box /bɒks/."],
    ["multi", 3, "artist", ["/ɑː/", "/ɪ/", "/æ/", "/ə/", "/e/", "/ʌ/"], ["/ɑː/", "/ɪ/"], "artist /ˈɑːtɪst/."],
    ["multi", 3, "mother", ["/ʌ/", "/ə/", "/ɒ/", "/ɜː/", "/æ/", "/ɔː/"], ["/ʌ/", "/ə/"], "mother /ˈmʌðə/."],
    ["multi", 2, "stamp", ["/æ/", "/ʌ/", "/ɑː/", "/e/", "/ə/", "/ɒ/"], ["/æ/"], "stamp /stæmp/."],
    ["multi", 3, "daughter", ["/ɔː/", "/ə/", "/ɒ/", "/ʌ/", "/ɜː/", "/ɑː/"], ["/ɔː/", "/ə/"], "daughter /ˈdɔːtə/."],
    ["multi", 3, "person", ["/ɜː/", "/ə/", "/e/", "/ɒ/", "/ɔː/", "/ʌ/"], ["/ɜː/", "/ə/"], "person /ˈpɜːsən/."],
    ["multi", 3, "sugar", ["/ʊ/", "/ə/", "/uː/", "/ʌ/", "/ɑː/", "/æ/"], ["/ʊ/", "/ə/"], "sugar /ˈʃʊɡə/."],
    ["multi", 3, "breakfast", ["/e/", "/ə/", "/eɪ/", "/ɑː/", "/æ/", "/iː/"], ["/e/", "/ə/"], "breakfast /ˈbrekfəst/."],
    ["multi", 2, "blue", ["/uː/", "/ʊ/", "/ʌ/", "/ə/", "/ɔː/", "/ɒ/"], ["/uː/"], "blue /bluː/."],
    ["multi", 3, "police", ["/ə/", "/iː/", "/ɒ/", "/ɪ/", "/e/", "/əʊ/"], ["/ə/", "/iː/"], "police /pəˈliːs/."],
    ["multi", 3, "woman", ["/ʊ/", "/ə/", "/uː/", "/æ/", "/ɒ/", "/ʌ/"], ["/ʊ/", "/ə/"], "woman /ˈwʊmən/."],
    ["m", 2, "Which vowel is close, front, spread and long?", ["/iː/", "/ɪ/", "/uː/", "/e/"], "/iː/ as in sea."],
    ["m", 2, "Which vowels have rounded lips?", ["/uː/ and /ɔː/", "/iː/ and /æ/", "/ə/ and /ʌ/", "/e/ and /ɪ/"], "/uː/ and /ɔː/ are rounded; /ʊ/ and /ɒ/ are slightly rounded."],
    ["m", 3, "On the vowel chart, which vowel is the most open and back?", ["/ɑː/", "/iː/", "/ʊ/", "/e/"], "/ɑː/ (car) is open and back."]
  ]);
  P.addExercises("l-v-short-long", [
    ["sort", 2, "Put each word in the column that matches the vowel of the highlighted letters.", ["/iː/", "/ɪ/", "/e/", "/æ/"], [["st{ea}m", 0], ["sl{ee}p", 0], ["b{u}sy", 1], ["s{y}stem", 1], ["br{ea}d", 2], ["s{ai}d", 2], ["fl{a}t", 3], ["st{a}mp", 3]], "Use a dictionary to check: busy /ˈbɪzi/, said /sed/."],
    ["sort", 3, "Put each word in the column that matches the vowel of the highlighted letters.", ["/ɑː/", "/ɜː/", "/ɒ/", "/ɔː/"], [["h{ea}rt", 0], ["p{a}th", 0], ["t{ur}n", 1], ["sh{ir}t", 1], ["c{ou}gh", 2], ["h{o}t", 2], ["s{aw}", 3], ["d{oor}", 3]], "heart /hɑːt/, path /pɑːθ/, cough /kɒf/, door /dɔː/."],
    ["sort", 3, "Put each word in the column that matches the vowel of the highlighted letters.", ["/ʊ/", "/uː/", "/ʌ/", "/ə/"], [["sh{ou}ld", 0], ["w{oo}d", 0], ["fl{ew}", 1], ["sh{oe}", 1], ["fl{oo}d", 2], ["d{oe}s", 2], ["{a}sleep", 3], ["teach{er}", 3]], "flood /flʌd/ and does /dʌz/ have /ʌ/ despite the spelling."],
    ["odd", 2, ["dead", "mean", "bread", "head"], 1, "mean has /iː/ – the others have /e/."],
    ["odd", 2, ["fruit", "suit", "juice", "built"], 3, "built has /ɪ/ – the others have /uː/."],
    ["odd", 3, ["half", "have", "has", "ham"], 0, "half has /ɑː/ – the others have /æ/ (in GA all four have [æ])."],
    ["odd", 2, ["horse", "history", "story", "cord"], 1, "history has /ɪ/ – the others have /ɔː/."],
    ["odd", 3, ["look", "good", "foot", "blood"], 3, "blood has /ʌ/ – the others have /ʊ/."],
    ["odd", 3, ["country", "young", "youth", "couple"], 2, "youth has /uː/ – the others have /ʌ/."],
    ["odd", 4, ["oven", "colour", "son", "gone"], 3, "gone has /ɒ/ – the others have /ʌ/."],
    ["odd", 4, ["talk", "chalk", "calm", "fall"], 2, "calm has /ɑː/ – the others have /ɔː/."],
    ["m", 3, "In which word is /iː/ shortest?", ["beat", "bead", "bee", "be"], "Long vowels are shortened before voiceless consonants: the /iː/ of beat is shortest."]
  ]);
  P.addExercises("l-v-central", [
    ["m", 2, "Which central vowel can never be stressed?", ["/ə/", "/ɜː/", "/ʌ/", "/ɑː/"], "Schwa occurs only in unstressed syllables."],
    ["m", 3, "Which word has two different central vowels?", ["further /ˈfɜːðə/", "father /ˈfɑːðə/", "feather /ˈfeðə/", "fever /ˈfiːvə/"], "further: /ɜː/ (long, stressed) and /ə/ (weak)."],
    ["m", 3, "Which word contains /ʌ/ and /ə/?", ["mother", "matter", "murder", "meter"], "mother /ˈmʌðə/; matter /ˈmætə/, murder /ˈmɜːdə/, meter /ˈmiːtə/."]
  ]);
  P.addExercises("v-ii", [
    ["sort", 1, "Say each word aloud. Put it in the column that matches the vowel of the highlighted letters.", ["/iː/", "/ɪ/"], [["th{i}nk", 1], ["sw{ee}ts", 0], ["m{i}lk", 1], ["w{i}th", 1], ["ice cr{ea}m", 0], ["b{ee}f", 0], ["p{eo}ple", 0], ["f{i}nish", 1], ["cr{i}sps", 1], ["thr{ee}", 0], ["b{ea}ns", 0], ["{i}t", 1]], "people /ˈpiːpəl/ has /iː/ despite the unusual spelling eo."],
    ["odd", 3, ["field", "police", "receive", "friend"], 3, "friend has /e/ – the others have /iː/."]
  ]);
  P.addExercises("v-i", [["odd", 3, ["women", "busy", "pretty", "bike"], 3, "bike has /aɪ/ – the others have /ɪ/ (women /ˈwɪmɪn/, busy /ˈbɪzi/, pretty /ˈprɪti/)."]]);
  P.addExercises("v-e", [["odd", 2, ["head", "bread", "bead", "said"], 2, "bead has /iː/ – the others have /e/."]]);
  P.addExercises("v-ae", [["odd", 3, ["cat", "hand", "glass", "bad"], 2, "glass has /ɑː/ in SSBE – the others have /æ/."]]);
  P.addExercises("v-uh", [["odd", 2, ["cup", "love", "money", "cough"], 3, "cough has /ɒ/ – the others have /ʌ/."]]);
  P.addExercises("v-o", [["odd", 3, ["want", "what", "watch", "wax"], 3, "wax has /æ/ – after w, a is often /ɒ/ (want, what, watch)."]]);
  P.addExercises("v-oo", [["odd", 2, ["bought", "caught", "saw", "cot"], 3, "cot has short /ɒ/ – the others have /ɔː/."]]);
  P.addExercises("v-u", [["odd", 2, ["blood", "flood", "good", "love"], 2, "good has /ʊ/ – the others have /ʌ/."]]);
  P.addExercises("v-uu", [["odd", 2, ["food", "blue", "book", "shoe"], 2, "book has /ʊ/ – the others have /uː/."]]);
  P.addExercises("v-er", [["odd", 3, ["word", "bird", "heard", "beard"], 3, "beard has /ɪə/ – the others have /ɜː/."]]);
  P.addExercises("v-aa", [["odd", 3, ["heart", "father", "calm", "warm"], 3, "warm has /ɔː/ – the others have /ɑː/."]]);
  P.addExercises("v-schwa", [
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "teacher", ["teach", "er"], [1], "/ˈtiːtʃə/", ""],
    ["seg", 3, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "cinema", ["ci", "ne", "ma"], [1, 2], "/ˈsɪnəmə/", ""],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "sister", ["sis", "ter"], [1], "/ˈsɪstə/", ""],
    ["seg", 3, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "surprised", ["sur", "prised"], [0], "/səˈpraɪzd/", ""],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "Emma", ["Em", "ma"], [1], "/ˈemə/", ""],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "brother", ["bro", "ther"], [1], "/ˈbrʌðə/", ""],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "after", ["af", "ter"], [1], "/ˈɑːftə/", ""],
    ["seg", 3, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "result", ["re", "sult"], [], "/rɪˈzʌlt/", "No schwa: the first vowel is /ɪ/ and the stressed vowel is /ʌ/."],
    ["seg", 3, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "lunch", ["lunch"], [], "/lʌntʃ/", "No schwa: a stressed /ʌ/."],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "banana", ["ba", "na", "na"], [0, 2], "/bəˈnɑːnə/", ""],
    ["seg", 3, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "problem", ["pro", "blem"], [1], "/ˈprɒbləm/", ""],
    ["seg", 2, "Tap the part(s) pronounced /ə/. Some words have no schwa.", "today", ["to", "day"], [0], "/təˈdeɪ/", ""],
    ["sort", 3, "Put each word in the column that matches the vowel of the highlighted letters.", ["/e/", "/iː/", "/ə/"], [["w{e}dding", 0], ["g{e}t", 0], ["t{e}rrifying", 0], ["unpl{ea}sant", 0], ["girlfr{ie}nd", 0], ["{e}mail", 1], ["f{ee}lings", 1], ["r{ea}son", 1], ["s{ee}", 1], ["th{e}se", 1], ["lott{e}ry", 2], ["answ{er}", 2], ["daught{er}", 2], ["partn{er}", 2], ["fall{e}n", 2]], "reason /ˈriːzən/ and unpleasant /ʌnˈplezənt/ also contain /ə/: the highlighted letters decide the column."]
  ]);

  /* ---------------- UNIT 2: DIPHTHONGS ---------------- */
  P.addExercises("l-d-classify", [
    ["m", 2, "Which diphthong do you hear in theatre?", ["/ɪə/", "/eə/", "/eɪ/", "/aɪ/"], "theatre /ˈθɪətə/."],
    ["m", 2, "Which diphthong do you hear in care?", ["/eə/", "/ɪə/", "/eɪ/", "/ɜː/"], "care /keə/."],
    ["m", 2, "Which diphthong do you hear in mountain?", ["/aʊ/", "/əʊ/", "/aɪ/", "/ɔɪ/"], "mountain /ˈmaʊntɪn/."],
    ["m", 1, "Which diphthong do you hear in lake?", ["/eɪ/", "/aɪ/", "/eə/", "/ɪə/"], "lake /leɪk/."],
    ["m", 1, "Which diphthong do you hear in nose?", ["/əʊ/", "/aʊ/", "/ɔɪ/", "/ʊə/"], "nose /nəʊz/."],
    ["m", 2, "Which diphthong do you hear in height?", ["/aɪ/", "/eɪ/", "/ɔɪ/", "/aʊ/"], "height /haɪt/."],
    ["m", 1, "Which diphthong do you hear in choice?", ["/ɔɪ/", "/aɪ/", "/əʊ/", "/eɪ/"], "choice /tʃɔɪs/."],
    ["sort", 2, "Group the words according to the sound of the highlighted letters.", ["/uː/", "/eɪ/", "/aɪ/"], [["bl{ue}", 0], ["J{u}ne", 0], ["s{ou}p", 0], ["tr{ay}", 1], ["{ei}ght", 1], ["t{a}le", 1], ["fl{igh}t", 2], ["qu{i}te", 2], ["b{i}cycle", 2]], "bicycle /ˈbaɪsɪkəl/: only the first i is /aɪ/."],
    ["sort", 3, "Group the words according to the sound of the highlighted letters.", ["/ʌ/", "/iː/", "/aʊ/"], [["w{o}rry", 0], ["j{u}st", 0], ["{u}gly", 0], ["{ea}ch", 1], ["fr{ee}", 1], ["b{ee}", 1], ["h{ou}se", 2], ["f{ou}nd", 2], ["m{ou}se", 2]], "worry /ˈwʌri/ has /ʌ/ despite the letter o."],
    ["sort", 3, "Group the words according to the sound of the highlighted letters.", ["/ɔː/", "/ɜː/", "/ɪ/"], [["str{aw}", 0], ["c{augh}t", 0], ["{ough}t", 0], ["t{ur}n", 1], ["l{ear}n", 1], ["sh{ir}t", 1], ["s{i}lly", 2], ["{i}ll", 2], ["s{i}xty", 2]], "caught /kɔːt/ and ought /ɔːt/: gh is silent."],
    ["m", 2, "Which group contains only centring diphthongs?", ["/ɪə eə ʊə/", "/eɪ aɪ ɔɪ/", "/əʊ aʊ/", "/eɪ əʊ ɪə/"], "Centring diphthongs glide towards /ə/."],
    ["m", 2, "Which diphthongs glide towards /ʊ/?", ["/əʊ/ and /aʊ/", "/eɪ/ and /aɪ/", "/ɪə/ and /ʊə/", "/ɔɪ/ and /eə/"], "Closing to /ʊ/: go, now."],
    ["m", 3, "In a diphthong, which part is longer and louder?", ["The first part", "The second part", "Both parts equally", "It depends on the spelling"], "The first element is longer and louder; the glide fades out."],
    ["m", 4, "How is /eə/ (hair) usually pronounced in current SSBE?", ["As a long pure vowel [ɛː]", "As [er] with a pronounced r", "As /eɪ/", "As /ɪə/"], "Dictionaries write /eə/, but the usual modern realisation is [ɛː]."],
    ["m", 4, "Many SSBE speakers pronounce pure and cure with which vowel instead of /ʊə/?", ["/ɔː/", "/uː/", "/ɜː/", "/əʊ/"], "pure /pjɔː/, cure /kjɔː/ – dictionaries list both."]
  ]);
  P.addExercises("d-au", [["odd", 2, ["now", "how", "know", "cow"], 2, "know has /əʊ/ – the others have /aʊ/."]]);
  P.addExercises("d-ou", [["odd", 2, ["go", "snow", "phone", "gone"], 3, "gone has short /ɒ/ – the others have /əʊ/."]]);
  P.addExercises("d-ia", [["odd", 2, ["near", "here", "beer", "bear"], 3, "bear has /eə/ – the others have /ɪə/."]]);
  P.addExercises("d-ea", [["odd", 2, ["hair", "care", "wear", "hear"], 3, "hear has /ɪə/ – the others have /eə/."]]);
  P.addExercises("d-ei", [["odd", 2, ["say", "rain", "eight", "said"], 3, "said has /e/ – the others have /eɪ/."]]);
  P.addExercises("d-ai", [["odd", 2, ["my", "high", "buy", "bit"], 3, "bit has /ɪ/ – the others have /aɪ/."]]);
  P.addExercises("d-oi", [["odd", 1, ["toy", "noise", "choice", "buy"], 3, "buy has /aɪ/ – the others have /ɔɪ/."]]);
  P.addExercises("d-ua", [["odd", 3, ["cure", "pure", "jury", "bury"], 3, "bury has /e/ (/ˈberi/) – the others have /ʊə/."]]);

  /* ---------------- UNIT 3: CONSONANTS ---------------- */
  P.addExercises("l-c-describe", [
    ["m", 1, "Which three labels describe a consonant?", ["Voicing, place, manner", "Height, frontness, lip shape", "Length, stress, spelling", "Pitch, volume, speed"], "/b/ = voiced bilabial plosive."],
    ["m", 2, "What happens to the vocal folds for a voiced sound?", ["They vibrate", "They are wide apart", "They close completely", "Nothing: voicing is in the lips"], "Hold your throat and say [zzzz]: you feel the vibration."],
    ["m", 2, "Which group contains only voiceless sounds?", ["/p f s/", "/b v z/", "/m n ŋ/", "/w r j/"], "/p f s/ are voiceless; nasals and approximants are voiced."]
  ]);
  P.addExercises("l-c-place", [
    ["match", 2, "Match each place of articulation with the articulators.", [["bilabial", "both lips"], ["labiodental", "lower lip + upper teeth"], ["dental", "tongue tip + upper teeth"], ["alveolar", "tongue tip + alveolar ridge"], ["velar", "back of tongue + velum"]], ""],
    ["m", 2, "Which articulator is passive (it does not move)?", ["The alveolar ridge", "The tongue tip", "The lower lip", "The back of the tongue"], "Passive articulators: upper lip, upper teeth, alveolar ridge, hard palate, velum."],
    ["m", 3, "What does the velum do for nasal consonants?", ["It lowers, letting air through the nose", "It rises, closing the nose", "It vibrates", "It touches the teeth"], "Nasals /m n ŋ/: the velum is lowered."],
    ["m", 3, "Why does /w/ appear in two columns of the consonant chart?", ["It uses both the lips and the back of the tongue", "It can be voiced or voiceless", "It has two spellings", "It is a vowel and a consonant"], "/w/ is labial-velar."]
  ]);
  P.addExercises("l-c-manner", [
    ["match", 3, "Match each manner of articulation with its description.", [["plosive", "complete closure, then sudden release"], ["fricative", "narrow gap, turbulent airflow"], ["affricate", "closure released as a fricative"], ["nasal", "air through the nose"], ["approximant", "no friction"]], ""],
    ["m", 2, "Which consonants are affricates?", ["/tʃ dʒ/", "/ʃ ʒ/", "/t d/", "/θ ð/"], "An affricate is a closure (like /t d/) released as a fricative (like /ʃ ʒ/)."],
    ["m", 3, "Which consonant is a lateral approximant?", ["/l/", "/r/", "/w/", "/n/"], "For /l/ air flows over the sides of the tongue."]
  ]);
  P.addExercises("c-th", [
    ["sort", 2, "Write each word in the correct column.", ["/ð/", "/θ/"], [["Maths", 1], ["then", 0], ["brother", 0], ["three", 1], ["Thursday", 1], ["the", 0], ["this", 0], ["think", 1], ["thirteen", 1], ["thirty", 1], ["father", 0], ["those", 0]], "Function words (the, this, those) and many words with th between vowels (brother, father) have /ð/."],
    ["odd", 2, ["think", "three", "this", "thank"], 2, "this has /ð/ – the others have /θ/."]
  ]);
  P.addExercises("c-sh", [["odd", 3, ["sugar", "sure", "machine", "choose"], 3, "choose has /tʃ/ – the others have /ʃ/."]]);
  P.addExercises("c-ch", [["odd", 2, ["cheap", "chair", "church", "school"], 3, "school has /k/ – the others have /tʃ/."]]);
  P.addExercises("c-j", [["odd", 2, ["gem", "giant", "judge", "get"], 3, "get has /ɡ/ – the others begin with /dʒ/."]]);
  P.addExercises("c-ng", [["odd", 4, ["sing", "singer", "singing", "finger"], 3, "finger has /ŋɡ/ (/ˈfɪŋɡə/) – the others have /ŋ/ alone."]]);
  P.addExercises("c-h", [["odd", 2, ["hour", "honest", "heir", "hotel"], 3, "hotel has /h/ – in the others h is silent."]]);
  P.addExercises("c-w", [["odd", 3, ["write", "wrong", "two", "win"], 3, "win has /w/ – in the others w is silent."]]);
  P.addExercises("c-y", [["odd", 2, ["yes", "year", "use", "jam"], 3, "jam has /dʒ/ – the others begin with /j/ (use /juːz/)."]]);
  P.addExercises("c-z", [["odd", 2, ["is", "rose", "music", "bus"], 3, "bus has /s/ – in the others the letter s is /z/."]]);
  P.addExercises("c-zh", [["odd", 3, ["pleasure", "vision", "usual", "pressure"], 3, "pressure has /ʃ/ – the others have /ʒ/."]]);
  P.addExercises("c-l", [["odd", 3, ["talk", "walk", "half", "help"], 3, "help has /l/ – in the others l is silent."]]);
  P.addExercises("c-r", [["odd", 3, ["car", "hard", "farm", "red"], 3, "In SSBE only red has /r/: in the others no vowel follows the r."]]);
  P.addExercises("c-k", [["odd", 1, ["know", "knee", "knife", "kick"], 3, "kick has /k/ – in the others k is silent."]]);
  P.addExercises("c-f", [["odd", 3, ["phone", "laugh", "enough", "though"], 3, "though /ðəʊ/: gh is silent – in the others ph or gh is /f/."]]);
  P.addExercises("c-v", [["odd", 3, ["of", "voice", "very", "off"], 3, "off has /f/ (/ɒf/) – of is /ɒv/."]]);
  P.addExercises("l-c-s", [
    ["choice", 2, "John {makes} the dinner every evening.", SZ, 0, "make ends in voiceless /k/ → /s/."],
    ["choice", 2, "Angela {teaches} French in a school.", SZ, 2, "teach ends in the sibilant /tʃ/ → /ɪz/."],
    ["choice", 2, "My dad {listens} to classical music.", SZ, 1, "listen ends in voiced /n/ → /z/."],
    ["choice", 1, "Sarah {goes} to the gym every day.", SZ, 1, "go ends in a vowel (voiced) → /z/."],
    ["choice", 2, "School {finishes} at 4 o’clock.", SZ, 2, "finish ends in /ʃ/ → /ɪz/."],
    ["choice", 1, "Johnny {talks} very fast.", SZ, 0, "talk ends in voiceless /k/ → /s/."],
    ["choice", 1, "{watches}", SZ, 2, "watch ends in /tʃ/ → /ɪz/."],
    ["choice", 3, "{houses}", SZ, 2, "houses /ˈhaʊzɪz/: the /s/ of house becomes /z/, then /ɪz/."],
    ["choice", 1, "{cars}", SZ, 1, "car ends in a vowel /ɑː/ → /z/."],
    ["choice", 1, "{looks}", SZ, 0, "look ends in /k/ → /s/."],
    ["choice", 3, "{knives}", SZ, 1, "knives: f → v, so the ending follows voiced /v/."],
    ["choice", 3, "{months}", SZ, 0, "month ends in voiceless /θ/ → /s/."],
    ["choice", 3, "{handkerchiefs}", SZ, 0, "handkerchief ends in /f/ → /s/."],
    ["choice", 1, "{boxes}", SZ, 2, "box ends in /s/ (x = /ks/) → /ɪz/."],
    ["choice", 1, "{keys}", SZ, 1, "key ends in a vowel → /z/."],
    ["choice", 2, "{envelopes}", SZ, 0, "envelope ends in /p/ → /s/."],
    ["choice", 1, "{boys}", SZ, 1, "boy ends in a vowel → /z/."],
    ["choice", 1, "{wishes}", SZ, 2, "wish ends in /ʃ/ → /ɪz/."],
    ["choice", 1, "{walks}", SZ, 0, "walk ends in /k/ → /s/."],
    ["choice", 1, "{glasses}", SZ, 2, "glass ends in /s/ → /ɪz/."],
    ["choice", 2, "{studies}", SZ, 1, "study ends in the vowel /i/ → /z/."],
    ["choice", 1, "{works}", SZ, 0, "work ends in /k/ → /s/."],
    ["choice", 2, "{jobs}", SZ, 1, "job ends in voiced /b/ → /z/."],
    ["choice", 2, "{practices}", SZ, 2, "practice ends in /s/ → /ɪz/."]
  ]);
  P.addExercises("l-c-ed", [
    ["sort", 2, "Write each verb in the correct column.", ["/ɪd/", "/t/", "/d/"], [["helped", 1], ["stayed", 2], ["excluded", 0], ["respected", 0], ["cooked", 1], ["arrived", 2], ["shared", 2], ["evicted", 0], ["shouted", 0], ["visited", 0], ["cleaned", 2], ["listened", 2], ["walked", 1], ["asked", 1], ["shocked", 1]], "/ɪd/ only after /t/ and /d/."],
    ["choice", 1, "{worked}", ED, 0, "work ends in voiceless /k/ → /t/."],
    ["choice", 1, "{lived}", ED, 1, "live ends in voiced /v/ → /d/."],
    ["choice", 1, "{stopped}", ED, 0, "stop ends in /p/ → /t/."],
    ["choice", 1, "{counted}", ED, 2, "count ends in /t/ → /ɪd/."],
    ["choice", 2, "{targeted}", ED, 2, "target ends in /t/ → /ɪd/."],
    ["choice", 2, "{paid}", ED, 1, "paid /peɪd/ ends in /d/ after a vowel."],
    ["choice", 1, "{listened}", ED, 1, "listen ends in /n/ → /d/."],
    ["choice", 2, "{watched}", ED, 0, "watch ends in /tʃ/ → /t/."],
    ["choice", 1, "{painted}", ED, 2, "paint ends in /t/ → /ɪd/."],
    ["choice", 2, "{performed}", ED, 1, "perform ends in /m/ → /d/."],
    ["choice", 1, "{repeated}", ED, 2, "repeat ends in /t/ → /ɪd/."],
    ["choice", 1, "{helped}", ED, 0, "help ends in /p/ → /t/."],
    ["choice", 1, "{asked}", ED, 0, "ask ends in /k/ → /t/."],
    ["choice", 1, "{printed}", ED, 2, "print ends in /t/ → /ɪd/."],
    ["choice", 2, "{warned}", ED, 1, "warn ends in /n/ → /d/."],
    ["choice", 3, "{fixed}", ED, 0, "fix ends in /s/ (x = /ks/) → /t/: /fɪkst/."],
    ["choice", 3, "{laughed}", ED, 0, "laugh ends in /f/ → /t/: /lɑːft/."]
  ]);
  P.addExercises("l-c-letters", [
    ["choice", 2, "They each made an important de{c}ision.", ["/k/", "/s/", "/tʃ/"], 1, "c before i is /s/: decision /dɪˈsɪʒən/."],
    ["choice", 1, "Each {c}ountry had a team.", ["/k/", "/s/", "/tʃ/"], 0, "c before o is /k/."],
    ["choice", 1, "That {ch}ild needs more exercise.", ["/k/", "/s/", "/tʃ/"], 2, "ch is usually /tʃ/."],
    ["choice", 1, "They {c}ame to protest against the war.", ["/k/", "/s/", "/tʃ/"], 0, "c before a is /k/."],
    ["choice", 2, "This {ch}arity works to help children.", ["/k/", "/s/", "/tʃ/"], 2, "charity /ˈtʃærəti/."],
    ["choice", 2, "I’d like to parti{c}ipate.", ["/k/", "/s/", "/tʃ/"], 1, "c before i is /s/."],
    ["choice", 3, "The {ch}aracter in the film is funny.", ["/k/", "/s/", "/tʃ/"], 0, "character /ˈkærəktə/: ch can be /k/."],
    ["choice", 3, "The ma{ch}ine is broken.", ["/k/", "/ʃ/", "/tʃ/"], 1, "machine /məˈʃiːn/: ch can be /ʃ/."],
    ["sort", 2, "Write each word in the correct column.", ["/dʒ/", "/j/"], [["join", 0], ["job", 0], ["jump", 0], ["yellow", 1], ["yesterday", 1], ["your", 1], ["joke", 0], ["useful", 1], ["genius", 0], ["year", 1], ["June", 0], ["usually", 1]], "useful /ˈjuːsfəl/ and usually /ˈjuːʒuəli/ begin with a hidden /j/."],
    ["choice", 1, "{H}ow old are you?", ["/h/", "silent"], 0, "h is usually pronounced at the start of English words."],
    ["choice", 2, "She’s got an {h}onest face.", ["/h/", "silent"], 1, "honest /ˈɒnɪst/ – note an, not a."],
    ["choice", 2, "We’ll be there in an {h}our.", ["/h/", "silent"], 1, "hour /aʊə/."],
    ["choice", 1, "{H}ave you got a pet?", ["/h/", "silent"], 0, "have /hæv/."]
  ]);
  P.addExercises("l-c-silent", [
    ["choice", 2, "I wish I could {design} posters for the government. Which letter is silent?", ["d", "s", "g", "n"], 2, "design /dɪˈzaɪn/."],
    ["choice", 2, "If I {listened} to every politician, I would never decide! Which letter is silent?", ["l", "s", "t", "n"], 2, "listen /ˈlɪsən/: t is silent."],
    ["choice", 1, "If you want to be an MP, you’ll need some {knowledge} of local problems. Which letter is silent?", ["k", "n", "l", "g"], 0, "knowledge /ˈnɒlɪdʒ/."],
    ["choice", 2, "If only politicians {talked} to the people more! Which letter is silent?", ["t", "l", "k", "d"], 1, "talked /tɔːkt/."],
    ["choice", 2, "The government are {doubtful} about when the economy will recover. Which letter is silent?", ["b", "t", "f", "l"], 0, "doubtful /ˈdaʊtfəl/."],
    ["choice", 3, "If the minister didn’t spend lots of time {answering} emails, people would complain! Which letter is silent?", ["n", "s", "r", "w"], 3, "answering /ˈɑːnsərɪŋ/: w is silent; the r is pronounced because a vowel follows."],
    ["sort", 2, "Write each word in the correct column.", ["gh = /f/", "gh silent"], [["daughter", 1], ["frighten", 1], ["high", 1], ["weigh", 1], ["through", 1], ["neighbour", 1], ["taught", 1], ["right", 1], ["cough", 0], ["might", 1], ["laughter", 0], ["laugh", 0], ["thought", 1], ["rough", 0], ["bought", 1]], "laughter is an exception to ‘gh before t is silent’."],
    ["m", 2, "In which word is b silent?", ["climb", "bubble", "about", "rubber"], "b is silent after m: climb /klaɪm/ (also comb, bomb) and before t: doubt, debt."]
  ]);
  P.addExercises("l-c-homophones", [
    ["gap", 2, "We usually ___ our bread in the shop ___ the bank.", [["buy"], ["by"]], "buy and by are both /baɪ/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 2, "Have you ___ the ___ sign on the door?", [["read"], ["red"]], "read (past) /red/ = red /red/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 2, "Please turn off ___ phone – ___ disturbing me.", [["your"], ["you're", "you’re", "you are"]], "your and you’re are both /jɔː/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 2, "___ house is over ___.", [["their"], ["there"]], "their and there are both /ðeə/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 2, "He ___ the race by ___ minute.", [["won"], ["one"]], "won and one are both /wʌn/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 2, "My ___ likes lying on the beach in the ___.", [["son"], ["sun"]], "son and sun are both /sʌn/.", ["there", "buy", "one", "son", "your", "by", "won", "red", "you’re", "read", "their", "sun"]],
    ["gap", 3, "Write a homophone of weather: ___", [["whether"]], "weather – whether /ˈweðə/."],
    ["gap", 2, "Write a homophone of here: ___", [["hear"]], "here – hear /hɪə/."],
    ["gap", 2, "Write a homophone of would: ___", [["wood"]], "would – wood /wʊd/."],
    ["gap", 2, "Write a homophone of flower: ___", [["flour"]], "flower – flour /ˈflaʊə/."],
    ["gap", 2, "Write a homophone of bear: ___", [["bare"]], "bear – bare /beə/."],
    ["gap", 2, "Write a homophone of dye: ___", [["die"]], "dye – die /daɪ/."],
    ["gap", 2, "Write a homophone of break: ___", [["brake"]], "break – brake /breɪk/."],
    ["gap", 3, "Write a homophone of allowed: ___", [["aloud"]], "allowed – aloud /əˈlaʊd/."],
    ["gap", 3, "Write a homophone of mind: ___", [["mined"]], "mind – mined /maɪnd/."],
    ["gap", 3, "Write a homophone of isle: ___", [["aisle", "I'll", "I’ll"]], "isle – aisle – I’ll /aɪl/."],
    ["gap", 1, "Write a homophone of sun: ___", [["son"]], "sun – son /sʌn/."],
    ["gap", 2, "Write a homophone of cell: ___", [["sell"]], "cell – sell /sel/."],
    ["gap", 2, "Write a homophone of nose: ___", [["knows"]], "nose – knows /nəʊz/."],
    ["gap", 2, "Write a homophone of past: ___", [["passed"]], "past – passed /pɑːst/."],
    ["gap", 2, "Write a homophone of deer: ___", [["dear"]], "deer – dear /dɪə/."],
    ["gap", 2, "Write a homophone of knight: ___", [["night"]], "knight – night /naɪt/."],
    ["m", 3, "Which pair are homophones in SSBE but not in GA?", ["sauce – source", "sea – see", "son – sun", "right – write"], "In SSBE (non-rhotic) both are /sɔːs/; in GA source has [r]."]
  ]);

  /* ---------------- UNIT 4: WORD STRESS ---------------- */
  const ST = (b, w, s, i, ipa, e, c) => ["stress", b, w, s, i, ipa, e || "", c];
  P.addExercises("l-s-basics", [
    ST(1, "water", ["wa", "ter"], 0, "/ˈwɔːtə/"), ST(1, "about", ["a", "bout"], 1, "/əˈbaʊt/"), ST(1, "teacher", ["tea", "cher"], 0, "/ˈtiːtʃə/"),
    ST(1, "begin", ["be", "gin"], 1, "/bɪˈɡɪn/"), ST(1, "hotel", ["ho", "tel"], 1, "/həʊˈtel/"), ST(2, "banana", ["ba", "na", "na"], 1, "/bəˈnɑːnə/"),
    ST(2, "computer", ["com", "pu", "ter"], 1, "/kəmˈpjuːtə/"), ST(2, "family", ["fa", "mi", "ly"], 0, "/ˈfæməli/"), ST(2, "tomorrow", ["to", "mor", "row"], 1, "/təˈmɒrəʊ/"),
    ST(2, "yesterday", ["yes", "ter", "day"], 0, "/ˈjestədeɪ/"), ST(2, "holiday", ["ho", "li", "day"], 0, "/ˈhɒlədeɪ/"), ST(2, "important", ["im", "por", "tant"], 1, "/ɪmˈpɔːtənt/"),
    ST(3, "understand", ["un", "der", "stand"], 2, "/ˌʌndəˈstænd/"), ST(3, "comfortable", ["com", "for", "ta", "ble"], 0, "/ˈkʌmftəbəl/", "Usually three syllables when spoken."),
    ["write", 2, "/sneɪl/", ["snail"], "One syllable: no stress mark."], ["write", 2, "/ə ˈhʌndrəd/", ["a hundred"], "Stress on HUN."], ["write", 3, "/ɔːlˈðəʊ/", ["although"], "Stress on the second syllable."],
    ["write", 3, "/ˈθʌrə/", ["thorough"], "Stress on THO-."], ["write", 2, "/skeəd/", ["scared"], "One syllable."], ["write", 2, "/ˈɪŋɡlɪʃ/", ["English"], "Stress on EN-."],
    ["write", 3, "/ˈkʌmftəbəl/", ["comfortable"], "Stress on COM-."], ["write", 3, "/ˈsɪzəz/", ["scissors"], "Stress on SCIS-."], ["write", 2, "/ˈɔːθə/", ["author"], "Stress on AU-."],
    ["write", 4, "/aʊtˈreɪdʒəs/", ["outrageous"], "Stress on -RA-."], ["write", 3, "/ˈfɔːtʃuːn/", ["fortune"], "Stress on FOR-."], ["write", 3, "/ˈwenzdeɪ/", ["Wednesday"], "Stress on WED-; the first d is silent."],
    ["write", 2, "/ˈθɜːzdeɪ/", ["Thursday"], "Stress on THURS-."]
  ]);
  P.addExercises("l-s-patterns", [
    ["sort", 2, "Put each word in the column that matches its stress pattern.", ["Oo", "Ooo", "oOo"], [["prodigy", 1], ["lawyer", 0], ["architect", 1], ["important", 2], ["opinion", 2], ["manage", 0], ["inherit", 2], ["article", 1], ["accountant", 2], ["ambitious", 2], ["doctor", 0], ["negative", 1], ["farmer", 0], ["difficult", 1], ["future", 0]], "LAWyer, PROdigy, imPORtant…"],
    ST(2, "development", ["de", "ve", "lop", "ment"], 1, "/dɪˈveləpmənt/"), ST(2, "management", ["ma", "nage", "ment"], 0, "/ˈmænɪdʒmənt/"),
    ST(2, "inclusive", ["in", "clu", "sive"], 1, "/ɪnˈkluːsɪv/"), ST(3, "sustainable", ["su", "stai", "na", "ble"], 1, "/səˈsteɪnəbəl/"),
    ST(2, "chocolate", ["cho", "co", "late"], 0, "/ˈtʃɒklət/", "Usually two syllables when spoken."), ST(3, "vegetable", ["ve", "ge", "ta", "ble"], 0, "/ˈvedʒtəbəl/", "Usually three syllables when spoken."),
    ["m", 2, "Which word has the pattern oOo?", ["opinion", "negative", "lawyer", "difficult"], "oPINion /əˈpɪnjən/."],
    ["m", 2, "Which word has the pattern Ooo?", ["architect", "accountant", "ambitious", "inherit"], "ARchitect /ˈɑːkɪtekt/."]
  ]);
  P.addExercises("l-s-rules", [
    ST(2, "decide", ["de", "cide"], 1, "/dɪˈsaɪd/", "Two-syllable verb: second syllable."), ST(2, "visit", ["vi", "sit"], 0, "/ˈvɪzɪt/", "An exception: a two-syllable verb stressed on the first syllable."),
    ST(2, "happen", ["hap", "pen"], 0, "/ˈhæpən/"), ST(2, "relax", ["re", "lax"], 1, "/rɪˈlæks/"), ST(2, "modern", ["mo", "dern"], 0, "/ˈmɒdən/"),
    ST(2, "machine", ["ma", "chine"], 1, "/məˈʃiːn/", "An exception: a two-syllable noun stressed on the second syllable."), ST(2, "bedroom", ["bed", "room"], 0, "/ˈbedruːm/", "Compound noun: first part."),
    ST(2, "toothbrush", ["tooth", "brush"], 0, "/ˈtuːθbrʌʃ/", "Compound noun: first part."),
    ST(3, "education", ["e", "du", "ca", "tion"], 2, "/ˌedʒuˈkeɪʃən/", "-tion: stress on the syllable just before."), ST(3, "decision", ["de", "ci", "sion"], 1, "/dɪˈsɪʒən/", "-sion: stress on the syllable just before."),
    ST(3, "economic", ["e", "co", "no", "mic"], 2, "/ˌiːkəˈnɒmɪk/", "-ic: stress on the syllable just before."), ST(3, "activity", ["ac", "ti", "vi", "ty"], 1, "/ækˈtɪvəti/", "-ity: stress on the syllable just before."),
    ST(3, "musician", ["mu", "si", "cian"], 1, "/mjuːˈzɪʃən/", "-ian: stress on the syllable just before."), ST(3, "political", ["po", "li", "ti", "cal"], 1, "/pəˈlɪtɪkəl/", "-ical: stress on the syllable just before."),
    ST(4, "politics", ["po", "li", "tics"], 0, "/ˈpɒlətɪks/", "An exception to the -ic tendency."), ST(3, "happiness", ["hap", "pi", "ness"], 0, "/ˈhæpinəs/", "-ness does not move the stress: HAPpy → HAPpiness."),
    ST(3, "beautiful", ["beau", "ti", "ful"], 0, "/ˈbjuːtɪfəl/", "-ful does not move the stress."), ST(3, "employee", ["em", "ploy", "ee"], 2, "/ɪmˌplɔɪˈiː/", "-ee is stressed."),
    ST(3, "engineer", ["en", "gi", "neer"], 2, "/ˌendʒɪˈnɪə/", "-eer is stressed."), ST(3, "Japanese", ["Ja", "pa", "nese"], 2, "/ˌdʒæpəˈniːz/", "-ese is stressed."),
    ST(3, "unique", ["u", "nique"], 1, "/juˈniːk/", "-ique is stressed."), ST(4, "photographer", ["pho", "to", "gra", "pher"], 1, "/fəˈtɒɡrəfə/", "PHOtograph → phoTOgrapher."),
    ST(4, "photographic", ["pho", "to", "gra", "phic"], 2, "/ˌfəʊtəˈɡræfɪk/", "-ic: stress on the syllable just before."), ST(4, "possibility", ["pos", "si", "bi", "li", "ty"], 3, "/ˌpɒsəˈbɪləti/", "-ity: stress on the syllable just before."),
    ST(4, "economy", ["e", "co", "no", "my"], 1, "/ɪˈkɒnəmi/"), ST(5, "politician", ["po", "li", "ti", "cian"], 2, "/ˌpɒləˈtɪʃən/", "-ian: stress on the syllable just before."),
    ["m", 3, "Which suffix is usually stressed itself?", ["-ee (employee)", "-ness (happiness)", "-ful (beautiful)", "-ment (development)"], "-ee, -eer, -ese, -ique and -ette usually take the stress."],
    ["m", 3, "Which suffix does not change the stress of the base word?", ["-ness", "-ity", "-tion", "-ic"], "HAPpy → HAPpiness."],
    ["m", 4, "Which sentence describes a house painted green?", ["a green ˈhouse", "a ˈgreenhouse"], "Compound noun ˈgreenhouse = a glass building for plants; adjective + noun green ˈhouse = a house that is green."]
  ]);
  P.addExercises("l-s-reduction", [
    ["choice", 3, "Shakespeare {was} alive from 1564 to 1616.", ["strong /wɒz/", "weak /wəz/"], 1, "Unstressed in the middle of a sentence: weak form."],
    ["choice", 3, "What {were} The Beatles famous for?", ["strong /wɜː/", "weak /wə/"], 1, "Unstressed auxiliary: weak form."],
    ["choice", 3, "Yes, they {were}.", ["strong /wɜː/", "weak /wə/"], 0, "At the end of a sentence the strong form is used."],
    ["choice", 3, "What {was} his father’s name?", ["strong /wɒz/", "weak /wəz/"], 1, "Unstressed: weak form."],
    ["choice", 3, "The boys {were} in town yesterday.", ["strong /wɜː/", "weak /wə/"], 1, "Unstressed: weak form."],
    ["choice", 3, "This present is {for} you.", ["strong /fɔː/", "weak /fə/"], 1, "Unstressed preposition: weak form."],
    ["choice", 4, "Who is this present {for}?", ["strong /fɔː/", "weak /fə/"], 0, "A preposition at the end of a sentence takes the strong form."],
    ["choice", 3, "I {can} swim.", ["strong /kæn/", "weak /kən/"], 1, "Unstressed: weak form."],
    ["choice", 3, "Yes, I {can}.", ["strong /kæn/", "weak /kən/"], 0, "At the end: strong form."],
    ["choice", 4, "What are you looking {at}?", ["strong /æt/", "weak /ət/"], 0, "At the end: strong form."],
    ["choice", 3, "Meet me {at} the station.", ["strong /æt/", "weak /ət/"], 1, "Unstressed: weak form."],
    ["choice", 3, "I’d like a cup {of} tea.", ["strong /ɒv/", "weak /əv/"], 1, "Unstressed: weak form."],
    ["choice", 4, "Where are you {from}?", ["strong /frɒm/", "weak /frəm/"], 0, "At the end: strong form."],
    ["choice", 3, "I’m {from} Italy.", ["strong /frɒm/", "weak /frəm/"], 1, "Unstressed: weak form."],
    ["m", 2, "Which vowel appears in most weak forms?", ["/ə/", "/iː/", "/æ/", "/ɔː/"], "a /ə/, to /tə/, of /əv/, for /fə/…"],
    ["m", 3, "In photographer /fəˈtɒɡrəfə/, why is the first vowel /ə/?", ["Because the first syllable is unstressed", "Because of the spelling ph", "Because it is a long vowel", "Because /ə/ is always the first vowel"], "In photograph /ˈfəʊtəɡrɑːf/ the first syllable is stressed and has /əʊ/; when the stress moves, it reduces to /ə/."]
  ]);
  P.addExercises("l-s-meaning", [
    ST(3, "record", ["re", "cord"], 0, "/ˈrekɔːd/", "Noun: first syllable.", "We need a written record of the meeting."),
    ST(3, "record", ["re", "cord"], 1, "/rɪˈkɔːd/", "Verb: second syllable.", "Can you record the lesson?"),
    ST(3, "present", ["pre", "sent"], 0, "/ˈprezənt/", "Noun: first syllable.", "She gave me a lovely present."),
    ST(3, "present", ["pre", "sent"], 1, "/prɪˈzent/", "Verb: second syllable.", "They will present their project tomorrow."),
    ST(4, "exports", ["ex", "ports"], 1, "/ɪkˈspɔːts/", "Verb: second syllable.", "Italy exports a lot of wine."),
    ST(4, "exports", ["ex", "ports"], 0, "/ˈekspɔːts/", "Noun: first syllable.", "Wine is one of Italy’s main exports."),
    ST(4, "increase", ["in", "crease"], 0, "/ˈɪnkriːs/", "Noun: first syllable.", "There has been an increase in prices."),
    ST(4, "increase", ["in", "crease"], 1, "/ɪnˈkriːs/", "Verb: second syllable.", "Prices will increase next year."),
    ST(4, "suspect", ["sus", "pect"], 0, "/ˈsʌspekt/", "Noun: first syllable.", "The police arrested a suspect."),
    ST(4, "suspect", ["sus", "pect"], 1, "/səˈspekt/", "Verb: second syllable.", "I suspect he’s lying."),
    ST(5, "object", ["ob", "ject"], 1, "/əbˈdʒekt/", "Verb: second syllable.", "Nobody will object to the plan."),
    ST(5, "object", ["ob", "ject"], 0, "/ˈɒbdʒɪkt/", "Noun: first syllable.", "What is that strange object?"),
    ST(5, "progress", ["pro", "gress"], 0, "/ˈprəʊɡres/", "Noun: first syllable.", "We have made good progress."),
    ST(5, "insult", ["in", "sult"], 1, "/ɪnˈsʌlt/", "Verb: second syllable.", "Please don’t insult him."),
    ["m", 4, "desert /ˈdezət/ or dessert /dɪˈzɜːt/? “I’d like ice cream for ___.”", ["dessert /dɪˈzɜːt/", "desert /ˈdezət/"], "dessert = sweet food at the end of a meal; desert = a dry region."]
  ]);
  P.addExercises("l-s-brega", [
    ["choice", 3, "garage: where is the stress in SSBE?", ["first syllable: GA-rage", "second syllable: ga-RAGE"], 0, "SSBE /ˈɡærɑːʒ/ or /ˈɡærɪdʒ/; GA [ɡəˈrɑʒ]."],
    ["choice", 3, "ballet: where is the stress in GA?", ["first syllable: BAL-let", "second syllable: bal-LET"], 1, "SSBE /ˈbæleɪ/; GA [bæˈleɪ]."],
    ["m", 4, "Which is the SSBE pronunciation of advertisement?", ["/ədˈvɜːtɪsmənt/", "[ˌædvɚˈtaɪzmənt]", "/ˈædvətaɪzmənt/", "/ədvəˈtaɪzmənt/"], "SSBE stresses the second syllable; GA stresses -tise-."],
    ["m", 4, "Which is the SSBE pronunciation of laboratory?", ["/ləˈbɒrətri/", "[ˈlæbrəˌtɔri]", "/ˈlæbərətəri/", "/læˈbɔːrətri/"], "SSBE /ləˈbɒrətri/; GA [ˈlæbrəˌtɔri]."]
  ]);

  /* ---------------- UNIT 5: REVISION ---------------- */
  const W = (b, ipa, w, e) => ["write", b, ipa, Array.isArray(w) ? w : [w], e || ""];
  P.addExercises("l-r-words", [
    W(2, "/ˈɔːlweɪz/", "always"), W(2, "/əˈmeɪzɪŋ/", "amazing"), W(2, "/ˈɔːfəl/", "awful"), W(2, "/bɔːt/", "bought"), W(1, "/kʌm/", "come"),
    W(3, "/ˈkʌzən/", "cousin"), W(2, "/ˈdraɪvɪŋ/", "driving"), W(4, "/ɪɡˈzɔːstɪd/", "exhausted"), W(1, "/aɪz/", ["eyes"]), W(3, "/ˈfeɪvərɪt/", "favourite"),
    W(2, "/faɪnd/", ["find", "fined"]), W(3, "/ˈfɒləʊd/", "followed"), W(2, "/frendz/", "friends"), W(1, "/aɪs/", "ice"), W(3, "/ˈɪntəvjuː/", "interview"),
    W(3, "/ˈɪntrəstɪŋ/", "interesting"), W(2, "/lɑːf/", "laugh"), W(1, "/lʌv/", "love"), W(2, "/ˈmʌni/", "money"), W(4, "/mjuːˈziːəm/", "museum"),
    W(3, "/ˈpeərənts/", "parents"), W(3, "/ˈsaɪəns/", "science"), W(2, "/sɪns/", "since"), W(2, "/sməʊk/", "smoke"), W(2, "/tɔːk/", "talk"), W(2, "/tɔːl/", "tall"),
    W(3, "/ˈvedʒtəbəl/", "vegetable"), W(1, "/krɪsps/", "crisps"), W(1, "/fruːt/", "fruit"), W(2, "/feə heə/", "fair hair"), W(2, "/ə həʊˈtel/", "a hotel"),
    W(4, "/ˈjuːʒuəli/", "usually"), W(4, "/ʌnˈjuːʒuəl/", "unusual"), W(2, "/ˈɜːli/", "early"), W(4, "/ɪˈkwɪpmənt/", "equipment"), W(3, "/kwaɪt ˈkwaɪət/", "quite quiet"),
    W(2, "/ˈrɪəli/", "really"), W(5, "/njuːˈməʊniə/", "pneumonia"), W(3, "/ˈmaʊntɪnz/", "mountains"), W(4, "/ˈaɪənɪŋ/", "ironing"), W(3, "/ˈθretən/", "threaten"), W(3, "/ˈwɪmɪn/", "women")
  ]);
  const T = (b, ipa, ans) => ["text", b, ipa, ans, "Grammatical words are in their weak forms."];
  P.addExercises("l-r-texts", [
    T(4, "/ɪn ˈbrɪtən ənd əˈraʊnd ðə wɜːld ði ˈɪmɪdʒ əv ðə ˈfæməli kənˈtɪnjuːz tə tʃeɪndʒ/", "In Britain and around the world, the image of the family continues to change."),
    T(6, "/ðə trəˈdɪʃənəl vɪkˈtɔːriən ˈfæməli ɪn wɪtʃ ðə mæn wəz ðə ˈbredwɪnə ðə ˈwʊmən ðə ˈhəʊmmeɪkə ənd ðə ˈtʃɪldrən ˈnjuːmərəs ənd əˈbiːdiənt ɪz ˈɡɪvɪŋ weɪ tə njuː aɪˈdɪəz əˈbaʊt wɒt ðə ˈmɒdən ˈfæməli ʃəd lʊk laɪk/", "The traditional Victorian family, in which the man was the breadwinner, the woman the homemaker and the children numerous and obedient, is giving way to new ideas about what the modern family should look like."),
    T(5, "/haʊˈevə ˈiːvən ɪn ˈfæməliz wɪð bəʊθ ˈpeərənts ˈprezənt ˈmeni ˈmʌðəz ə ˈɡɪvɪŋ ʌp ðə rəʊl əv ˈhəʊmmeɪkər ənd pəˈsjuːɪŋ ðeər əʊn kəˈrɪəz/", "However, even in families with both parents present, many mothers are giving up the role of homemaker and pursuing their own careers."),
    T(5, "/sʌm ɡəʊ ɒn məˈtɜːnəti liːv ˈɑːftə ðeə ˈtʃɪldrən ə bɔːn ənd ðen teɪk ʌp ˌpɑːt ˈtaɪm wɜːk wen ðə tʃaɪld ɪz əʊld ɪˈnʌf tə ɡəʊ tə skuːl/", "Some go on maternity leave after their children are born and then take up part-time work when the child is old enough to go to school."),
    T(5, "/ˈʌðəz fiːl ðət ðeə kəˈrɪəz kʌm fɜːst ənd weɪt ənˈtɪl ðeɪ həv ˈfʊli ɪˈstæblɪʃt ðeə kəˈrɪə bɪˈfɔː ˈhævɪŋ ˈtʃɪldrən/", "Others feel that their careers come first and wait until they have fully established their career before having children."),
    T(5, "/sɪns ˈmeni ˈnjuːzpeɪpəz ɪˈspeʃəli ðeə ˈhedlaɪnz hæv ˈlɪtəl speɪs tu ɪkˈspleɪn θɪŋz ɪn depθ ðeɪ həv dɪˈveləpt ə ˈspeʃəl vəˈkæbjələri əv ðeər əʊn/", "Since many newspapers, especially their headlines, have little space to explain things in depth, they have developed a special vocabulary of their own."),
    T(4, "/ɪt ˈfiːtʃəz ʃɔːt wɜːdz ənd tendz tə liːv aʊt ˈɑːtɪkəlz ənd ɔːɡˈzɪliəri vɜːbz/", "It features short words and tends to leave out articles and auxiliary verbs."),
    T(6, "/ðʌs ðeɪ juːz bæk fə səˈpɔːt diːl fər əˈɡriːmənt bæn fə prəˈhɪbɪt tɔːk fə dɪˈskʌʃən nɪˌɡəʊʃiˈeɪʃən prəʊb fər ɪnˈvestɪɡeɪt ənd səʊ ɒn/", "Thus, they use back for support, deal for agreement, ban for prohibit, talk for discussion, negotiation, probe for investigate, and so on."),
    T(4, "/ɪt ˈɔːlsəʊ ɪnˈkluːdz ˈkʌləfəl wɜːdz tə drɔː ði aɪ ənd æd ˈɪntrəst tu ə ˈstɔːri/", "It also includes colourful words to draw the eye and add interest to a story."),
    T(5, "/səʊ ˈpraɪsɪz dəʊnt ɡəʊ ʌp ˈkwɪkli ðeɪ ˈrɒkɪt pəˈliːs dəʊnt ˈhʌri tə ðə siːn əv ðə kraɪm ðeɪ reɪs ənd səʊ ɒn/", "So prices don't go up quickly, they rocket; police don't hurry to the scene of the crime, they race, and so on."),
    T(6, "/ə ˈhedlaɪn ðət riːdz drʌɡz prəʊb bæks sɪɡ bæn maɪt trænzˈleɪt əz ən ɪnˌvestɪˈɡeɪʃən ˈɪntə drʌɡ əˈbjuːs səˈpɔːts ðə ˌprəʊɪˈbɪʃən əv ˌsɪɡəˈret ˈsməʊkɪŋ/", "A headline that reads Drugs probe backs cig ban might translate as An investigation into drug abuse supports the prohibition of cigarette smoking."),
    T(3, "/ðə wɜːd ˈfɜːnɪʃt miːnz ˈdɪfrənt θɪŋz tə ˈdɪfrənt ˈpiːpəl/", "The word furnished means different things to different people."),
    T(4, "/juː wɪl ˈnɔːməli faɪnd ði ɪˈsenʃəlz stəʊv rɪˈfrɪdʒəreɪtə bedz tʃeəz ˈsəʊfə ˈteɪbəlz læmps/", "You will normally find the essentials: stove, refrigerator, beds, chairs, sofa, tables, lamps."),
    T(5, "/ˈmɪnɪməl ˈtʃaɪnə ənd ɡlɑːs ˈbeɪsɪk ˈkɪtʃən səˈplaɪz ˈkɜːtənz ənd səm ˈpɪktʃəz meɪ bi səˈplaɪd/", "Minimal china and glass, basic kitchen supplies, curtains and some pictures may be supplied."),
    T(5, "/ˈsʌmtaɪmz bət ˈveri ˈreəli ðər ɪz ə smɔːl səˈplaɪ əv bed bɑːθ ənd ˈteɪbəl ˈlɪnɪnz ənd ˈblæŋkɪts/", "Sometimes, but very rarely, there is a small supply of bed, bath and table linens and blankets."),
    T(6, "/juː wɪl niːd tə brɪŋ jɔː ˈfeɪvərɪt ˈkɪtʃən juːˈtensəlz səm ˈteɪbəl ˈlɪnɪnz ɔː mæts ˈekstrə læmps ˈkəʊt hæŋəz wɒtˈevər ɪˈlektrɪkəl əˈplaɪənsɪz juː wɒnt sʌtʃ əz ˈtəʊstəz ənd ˈaɪənz/", "You will need to bring your favourite kitchen utensils, some table linens or mats, extra lamps, coat-hangers, whatever electrical appliances you want, such as toasters and irons."),
    T(5, "/jɔːr əʊn ˈpɪktʃəz bʊks ˌdekəˈreɪʃənz ənd ðə laɪk wɪl meɪk ɪt siːm mɔː laɪk həʊm tə juː/", "Your own pictures, books, decorations and the like will make it seem more like home to you."),
    T(6, "/ðə wɜːd ʌnˈfɜːnɪʃt miːnz ˈdɪfrənt θɪŋz bət ˈdʒenərəli ə stəʊv ənd rɪˈfrɪdʒəreɪtər ər ɪnˈkluːdɪd ˈɔːlsəʊ ˈtaʊəl ræks laɪt ˈfɪkstʃəz ənd ˈʌðə ˌbɪlt ˈɪn ˈaɪtəmz/", "The word unfurnished means different things, but generally a stove and refrigerator are included, also towel racks, light fixtures and other built-in items.")
  ]);
  const BG = ["BrE (SSBE)", "GA"];
  P.addExercises("l-r-brega", [
    ["choice", 3, "[kɑr] – car", BG, 1, "GA: r pronounced before a pause (rhotic)."],
    ["choice", 3, "[ˈbetə] – better", BG, 0, "BrE: no flap, no r-coloured vowel."],
    ["choice", 3, "[ɡoʊ] – go", BG, 1, "GA: back rounded start of the diphthong."],
    ["choice", 3, "[pɑːθ] – path", BG, 0, "BrE: /ɑː/ in a BATH word (GA [æ])."],
    ["choice", 3, "[nɑt] – not", BG, 1, "GA: unrounded vowel (SSBE /ɒ/)."],
    ["choice", 3, "[tjuːn] – tune", BG, 0, "BrE: /j/ kept after /t/."],
    ["choice", 4, "[ɡəˈrɑʒ] – garage", BG, 1, "GA: stress on the final syllable."],
    ["choice", 4, "[hɛr] – hair", BG, 1, "GA: vowel + r (SSBE /eə/)."],
    ["choice", 4, "[ˈsɪɾi] – city", BG, 1, "GA: flap [ɾ] for /t/."],
    ["choice", 4, "[ˈleʒə] – leisure", BG, 0, "BrE: /e/ and final /ə/ without r (GA [ˈliʒɚ])."],
    ["write", 4, "[kɑr]", ["car"], "GA form: r pronounced."], ["write", 4, "[ˈsɪɾi]", ["city"], "GA form: flap [ɾ]."], ["write", 4, "[hɛr]", ["hair", "hare"], "GA form of hair (or hare)."]
  ]);
})(window.Phon);
