/* Mock Exam — Verifica 2N, novembre 2026 (English File B1+/B2, Units 3–4).
   Original practice material: no item repeats the real test. Formats: see english/mock-exams/app.js. */
MockExam.load({
  id: "2n-2026-11",
  title: "Verifica 2N · Novembre 2026",
  cls: "2N", when: "November 2026", book: "English File B1+/B2 · Units 3–4", level: "B1",
  intro: "Everything you need to prepare for the test on Units 3 and 4: short batteries to train each part of the test, and a complete mock test with the same structure as the real one.",
  // the real test: sections, points and what each part checks
  test: {
    time: 55,
    sections: [
      ["Grammar", 50, "Past simple, past continuous and used to · present and past tenses · irregular verbs · dependent prepositions · will, shall and be going to · first and second conditionals, unless"],
      ["Vocabulary", 20, "Rubbish and recycling · study and work · photography and stages of life"],
      ["Pronunciation", 10, "-ed endings: /t/, /d/, /ɪd/ · word stress"],
      ["Reading", 10, "A text of about 250 words: true or false and short answers"],
      ["Writing", 10, "Describe a picture in 60–80 words: where things are, what people are doing, what happened before and what will happen next"]
    ]
  },
  // "Can you…?" self-check
  can: [
    "tell a story in the past with the past simple and the past continuous (when / while)",
    "talk about past habits and states with used to, and know when you can't use it",
    "choose between present simple and present continuous",
    "write the past simple and past participle of the irregular verbs in the list",
    "use the right preposition after verbs and adjectives (proud of, good at, depend on…)",
    "choose between will, shall and be going to (decisions, offers, promises, plans, predictions)",
    "form the first and second conditional and use unless",
    "use the vocabulary of rubbish and recycling, study and work, photography and age",
    "pronounce -ed endings and stress words like photographer, qualifications, recycle",
    "describe a picture with in the foreground, in the background, on the left, behind, next to…"
  ],
  // more practice elsewhere in Language Dojo
  links: [
    ["Irregular Verbs", "english/irregular-verbs/index.html", "The verb list with audio, flashcards and practice by belt."],
    ["Verb Tenses", "english/verb-tenses/index.html", "Past simple, past continuous, used to, present simple and continuous."],
    ["Dependent Prepositions", "english/dependent-prepositions/index.html", "Verbs and adjectives + prepositions, with practice tests."],
    ["Conditionals", "english/conditionals/index.html", "Lessons on the first and second conditional and unless."],
    ["Sounds of English", "english/phonetics/index.html", "-ed endings and word stress."]
  ],
  // the school's grade scale: [minimum %, mark]
  grades: [[0, "1"], [6, "1½"], [11, "2"], [21, "2½"], [30, "3"], [39, "3½"], [47, "4"], [55, "4½"], [62, "5"], [69, "5½"], [75, "6"], [78, "6½"], [81, "7"], [84, "7½"], [87, "8"], [90, "8½"], [93, "9"], [96, "9½"], [99, "10"]],

  /* =========================================================================================
     TRAINING: one station per part of the test
     ========================================================================================= */
  stations: [
    { id: "grammar", name: "Grammar", intro: "One battery per structure, from the easiest to the most demanding. Finish with the mixed review: it puts all the structures together, as the test does.",
      batteries: [
        { id: "g-past", topic: "Past simple and past continuous", type: "gap", instr: "Complete the sentences with the past simple or the past continuous of the verbs in brackets.", items: [
          ["I ___ (walk) home when it ___ (start) to rain.", [["was walking"], ["started"]], "A longer action in progress ([was walking]) interrupted by a short one ([started])."],
          ["While Anna ___ (cook) dinner, the lights ___ (go) out.", [["was cooking"], ["went"]], "[While] + past continuous; the interruption is in the past simple."],
          ["What ___ you ___ (do) at nine o'clock yesterday evening?", [["were"], ["doing"]], "An action in progress at a precise time in the past: past continuous."],
          ["We ___ (not watch) TV when you called – we were playing cards.", [["weren't watching", "were not watching"]], "In progress when you called: past continuous."],
          ["He ___ (fall) off his bike while he ___ (ride) to school.", [["fell"], ["was riding"]], "Short action [fell], longer background action [was riding]."],
          ["I ___ (see) Marco at the station this morning.", [["saw"]], "A finished action at a finished time: past simple. see – saw – seen."],
          ["When we woke up, the sun ___ (shine) and the birds were singing.", [["was shining"]], "Background description: past continuous."],
          ["She ___ (break) her arm last summer.", [["broke"]], "A finished event: past simple. break – broke – broken."],
          ["When the teacher came in, the students ___ (talk) loudly.", [["were talking"]], "They were already talking when she came in."],
          ["___ you ___ (enjoy) the concert last night?", [["Did"], ["enjoy"]], "Past simple question: [Did] + subject + base form."]
        ] },
        { id: "g-usedto", topic: "Used to", type: "mc", instr: "Choose the correct option.", items: [
          ["When I was a child, I ___ afraid of dogs.", ["used to be", "use to be", "was used to be"], 0, "[used to] + base form for a past state that is no longer true."],
          ["Did you ___ play with dolls when you were little?", ["use to", "used to", "using to"], 0, "In questions and negatives with did: [use to], without -d."],
          ["My dad ___ smoke, but he stopped ten years ago.", ["used to", "uses to", "was used to"], 0, "A past habit that has finished: [used to] + base form."],
          ["We ___ have a car when I was little – we went everywhere by bus.", ["didn't use to", "didn't used to", "usedn't to"], 0, "Negative: [didn't use to]."],
          ["I ___ to Paris three times in 2023.", ["went", "used to go", "was going"], 0, "We don't use used to when we say how many times: past simple."],
          ["My grandparents ___ in that house for forty years.", ["lived", "used to live", "were living"], 0, "With a precise length of time (for forty years) we use the past simple, not used to."],
          ["She ___ long hair, but now it's very short.", ["used to have", "was having", "uses to have"], 0, "A past state: [used to have]."],
          ["Where ___ go on holiday when you were young?", ["did you use to", "did you used to", "used you to"], 0, "Question: [did you use to] + base form."],
          ["I ___ like vegetables, but now I love them.", ["didn't use to", "wasn't used to", "didn't used to"], 0, "Negative past state: [didn't use to like]."],
          ["Yesterday I ___ my old primary school teacher in town.", ["met", "used to meet", "was meeting"], 0, "One single event yesterday: past simple."]
        ] },
        { id: "g-pasttext", topic: "Past tenses in a text", type: "text", title: "A childhood in the mountains", instr: "Read the whole text first. Then complete it with the past simple, the past continuous or used to and the verb in brackets.", parts: [
          ["", "When I was a child, I {1} (live) in a small village in the mountains. There {2} (not be) a school in the village, so every morning my brother and I {3} (take) the bus to the next town. In winter it {4} (snow) a lot, and sometimes the bus {5} (not arrive) at all!"],
          ["", "One morning in January, while we {6} (wait) at the bus stop, a deer {7} (walk) out of the forest and {8} (stop) right in front of us. We {9} (not move) – we just looked at it. When the bus finally {10} (come), the deer ran back into the trees."]
        ], gaps: [
          [["used to live", "lived"], "A past state: [used to live] (the past simple is also possible)."],
          [["wasn't", "was not", "didn't use to be", "did not use to be"], "A past state: there [wasn't] / there [didn't use to be]."],
          [["used to take", "took"], "A daily habit in the past: [used to take]."],
          [["used to snow", "snowed"], "A past habit: [used to snow]."],
          [["didn't arrive", "did not arrive", "didn't use to arrive", "did not use to arrive"], "Negative past simple: [didn't arrive]."],
          [["were waiting"], "[while] + past continuous: an action in progress."],
          [["walked"], "The short action that interrupts: past simple."],
          [["stopped"], "Past simple: stop → stopped (double p)."],
          [["didn't move", "did not move"], "A finished action: past simple."],
          [["came"], "come – came – come."]
        ] },
        { id: "g-pres", topic: "Present simple or present continuous", type: "mc", instr: "Choose the correct form.", items: [
          ["Water ___ at 100°C.", ["boils", "is boiling"], 0, "A scientific fact: present simple."],
          ["Listen! The baby ___.", ["is crying", "cries"], 0, "Listen! – something happening now: present continuous."],
          ["I ___ to school by bus every day.", ["go", "am going"], 0, "A routine (every day): present simple."],
          ["‘What ___?’ ‘I'm a nurse.’", ["do you do", "are you doing"], 0, "What do you do? = What's your job?"],
          ["Be quiet – I ___ to concentrate.", ["am trying", "try"], 0, "Happening now: present continuous."],
          ["She ___ this word. Can you explain it?", ["doesn't understand", "isn't understanding"], 0, "Understand is a state verb: no continuous form."],
          ["This week my parents ___ in Rome, so I'm staying with my aunt.", ["are working", "work"], 0, "A temporary situation (this week): present continuous."],
          ["How often ___ to the gym?", ["do you go", "are you going"], 0, "How often…? asks about a habit: present simple."],
          ["I ___ you're right.", ["think", "am thinking"], 0, "Think = believe (an opinion): present simple."],
          ["Look at Tom! He ___ a really strange hat today.", ["is wearing", "wears"], 0, "Today, right now: present continuous."]
        ] },
        { id: "g-mixed-tenses", topic: "Present and past tenses", type: "gap", instr: "Complete the sentences with the present simple, present continuous, past simple, past continuous or used to.", items: [
          ["My sister ___ (study) medicine at the moment.", [["is studying", "'s studying"]], "At the moment: present continuous."],
          ["Columbus ___ (reach) America in 1492.", [["reached"]], "A historical fact with a date: past simple."],
          ["I ___ (not drink) coffee – I prefer tea.", [["don't drink", "do not drink"]], "A general habit or preference: present simple."],
          ["While I ___ (wait) for the bus, I met an old friend.", [["was waiting"]], "[While] + past continuous."],
          ["When I was little, my grandmother ___ (tell) me a story every night.", [["used to tell", "told"]], "A past habit: [used to tell] (also told)."],
          ["Shh! The children ___ (sleep).", [["are sleeping", "'re sleeping"]], "Now: present continuous."],
          ["It usually ___ (rain) a lot here in November.", [["rains"]], "Usually: present simple."],
          ["What ___ you ___ (do) when the earthquake started?", [["were"], ["doing"]], "An action in progress when something happened: past continuous."],
          ["We ___ (not have) a dishwasher when I was a child.", [["didn't use to have", "did not use to have", "didn't have", "did not have"]], "A past state: [didn't use to have] (also didn't have)."],
          ["Why ___ you ___ (laugh)? What's so funny?", [["are"], ["laughing"]], "Happening now: present continuous."],
          ["I ___ (lose) my keys yesterday, but I found them this morning.", [["lost"]], "Yesterday: past simple. lose – lost – lost."],
          ["My brother ___ (play) football every Saturday.", [["plays"]], "Every Saturday: present simple, -s with he / she / it."]
        ] },
        { id: "g-irr-forms", topic: "Irregular verbs", type: "paradigm", instr: "Complete the missing forms: infinitive, past simple and past participle.", items: [
          [["begin", "began", "begun"], 0], [["break", "broke", "broken"], 1], [["choose", "chose", "chosen"], 2], [["drive", "drove", "driven"], 0],
          [["fly", "flew", "flown"], 1], [["forget", "forgot", "forgotten"], 2], [["lose", "lost", "lost"], 0], [["steal", "stole", "stolen"], 1],
          [["teach", "taught", "taught"], 0], [["think", "thought", "thought"], 1], [["wear", "wore", "worn"], 2], [["write", "wrote", "written"], 0]
        ] },
        { id: "g-irr-sent", topic: "Irregular verbs", type: "gap", instr: "Complete the sentences with the past simple of the verbs in brackets.", items: [
          ["We ___ (fly) to Lisbon last summer.", [["flew"]], "fly – [flew] – flown."],
          ["Somebody ___ (steal) my bike yesterday!", [["stole"]], "steal – [stole] – stolen."],
          ["I ___ (lose) my phone at the party.", [["lost"]], "lose – [lost] – lost."],
          ["My dad ___ (teach) me to swim when I was six.", [["taught"]], "teach – [taught] – taught."],
          ["Who ___ (write) this song?", [["wrote"]], "write – [wrote] – written. Subject question: no did."],
          ["The film ___ (begin) at eight, but we arrived late.", [["began"]], "begin – [began] – begun."],
          ["He ___ (break) his leg when he was skiing.", [["broke"]], "break – [broke] – broken."],
          ["In the end we ___ (choose) the red sofa.", [["chose"]], "choose – [chose] – chosen."],
          ["I ___ (bring) some biscuits for everybody.", [["brought"]], "bring – [brought] – brought."],
          ["They ___ (throw) a big party for her birthday.", [["threw"]], "throw – [threw] – thrown."]
        ] },
        { id: "g-prep-gap", topic: "Dependent prepositions", type: "gap", instr: "Complete the sentences with the correct preposition. Write – if no preposition is needed.", items: [
          ["I'm not very good ___ maths.", [["at"]], "good [at]."],
          ["She's very proud ___ her son.", [["of"]], "proud [of]."],
          ["Can you wait ___ me after school?", [["for"]], "wait [for] somebody."],
          ["Don't laugh ___ me!", [["at"]], "laugh [at]."],
          ["This phone belongs ___ my sister.", [["to"]], "belong [to]."],
          ["I'm really interested ___ photography.", [["in"]], "interested [in]."],
          ["My little brother is afraid ___ the dark.", [["of"]], "afraid [of]."],
          ["It depends ___ the weather.", [["on"]], "depend [on]."],
          ["He apologised ___ breaking the window.", [["for"]], "apologise [for] + -ing."],
          ["Are you worried ___ the test?", [["about"]], "worried [about]."],
          ["We discussed ___ the plan for the school trip.", [["–", "-", "no preposition"]], "discuss has no preposition: we discussed the plan (not ~~discussed about~~)."],
          ["I'm tired ___ waiting. Let's go!", [["of"]], "tired [of] + -ing."]
        ] },
        { id: "g-prep-mc", topic: "Dependent prepositions", type: "mc", instr: "Choose the correct option.", items: [
          ["I'm fed up ___ this rainy weather.", ["with", "of", "at"], 0, "fed up [with]."],
          ["She married ___ her best friend.", ["– (no preposition)", "with", "to"], 0, "marry somebody: no preposition (but get married [to])."],
          ["We arrived ___ the airport at six.", ["at", "in", "to"], 0, "arrive [at] a building or place (station, airport)."],
          ["They arrived ___ London late at night.", ["in", "at", "to"], 0, "arrive [in] a city or country. Never arrive to."],
          ["Oxford is famous ___ its university.", ["for", "of", "about"], 0, "famous [for]."],
          ["I'm looking forward ___ the holidays.", ["to", "for", "at"], 0, "look forward [to]."],
          ["He's always very kind ___ animals.", ["to", "with", "at"], 0, "kind [to] somebody."],
          ["Can you rely ___ him?", ["on", "of", "at"], 0, "rely [on]."],
          ["I can't choose ___ these two jackets.", ["between", "from", "among"], 0, "choose [between] two things."],
          ["He reminds me ___ my grandfather.", ["of", "about", "to"], 0, "remind somebody [of] = be similar to."]
        ] },
        { id: "g-future-mc", topic: "Will, shall or be going to", type: "mc", instr: "Choose the correct option.", items: [
          ["‘I'm thirsty.’ ‘I ___ you a glass of water.’", ["'ll get", "'m going to get", "get"], 0, "An offer or instant decision: [will]."],
          ["Look at that car! It ___ crash!", ["'s going to", "will", "shall"], 0, "A prediction with evidence you can see: [be going to]."],
          ["___ I carry your bag?", ["Shall", "Will", "Am I going to"], 0, "An offer as a question: [Shall I…?]"],
          ["We ___ visit my aunt on Sunday – it's all organised.", ["'re going to", "'ll", "shall"], 0, "A plan already made: [be going to]."],
          ["Don't worry, I ___ be late again, I promise.", ["won't", "'m not being", "don't"], 0, "A promise: [won't]."],
          ["I think it ___ be sunny tomorrow.", ["will", "shall", "is"], 0, "A prediction with I think: [will]."],
          ["‘The phone's ringing.’ ‘OK, I ___ it.’", ["'ll answer", "'m going to answer", "answer"], 0, "A decision made now: [will]."],
          ["What ___ we do tonight? Any ideas?", ["shall", "are", "did"], 0, "Asking for suggestions: [shall we…?]"],
          ["She's bought some paint – she ___ paint her bedroom.", ["'s going to", "will", "shall"], 0, "An intention (she has already bought the paint): [be going to]."],
          ["In 2050 people ___ live on Mars. Do you agree?", ["will", "are going", "shall"], 0, "An opinion about the future: [will]."]
        ] },
        { id: "g-future-dia", topic: "Will, shall or be going to", type: "text", title: "Plans for the weekend", instr: "Read the whole dialogue first. Then complete it with will / won't, shall or be going to and the verb in brackets.", parts: [
          ["Giulia", "Have you got any plans for the weekend?"],
          ["Matteo", "Yes, I {1} (visit) my cousins in Verona – I've already bought the train ticket."],
          ["Giulia", "Lucky you! What's the weather like there?"],
          ["Matteo", "Look at those black clouds – it {2} (rain) tonight. But they say that Saturday {3} (be) sunny."],
          ["Giulia", "I'm free on Sunday. {4} I come with you?"],
          ["Matteo", "Great idea! I {5} (buy) you a ticket too, if you like."],
          ["Giulia", "No, it's OK, I {6} (get) it myself. Thanks!"],
          ["Matteo", "Don't forget your umbrella this time!"],
          ["Giulia", "Don't worry, I {7} (not forget). I promise."]
        ], gaps: [
          [["'m going to visit", "am going to visit"], "A plan: the ticket is already bought."],
          [["'s going to rain", "is going to rain"], "A prediction based on what you can see (black clouds)."],
          [["will be", "'ll be", "is going to be"], "A prediction about the future: [will be]."],
          [["Shall"], "An offer or suggestion: [Shall I…?]"],
          [["'ll buy", "will buy"], "An offer: [will]."],
          [["'ll get", "will get"], "A decision made at the moment of speaking: [will]."],
          [["won't forget", "will not forget"], "A promise: [won't]."]
        ] },
        { id: "g-cond1", topic: "First conditional", type: "gap", instr: "Complete the first conditional sentences with the present simple or will / won't and the verb in brackets.", items: [
          ["If it ___ (rain) tomorrow, we ___ (stay) at home.", [["rains"], ["'ll stay", "will stay"]], "if + present simple, [will] + verb."],
          ["If you ___ (not hurry), you ___ (miss) the bus.", [["don't hurry", "do not hurry"], ["'ll miss", "will miss"]], "Negative present after if."],
          ["I ___ (call) you if I ___ (need) help.", [["'ll call", "will call"], ["need"]], "The main clause can come first: no comma."],
          ["If she ___ (pass) her exams, her parents ___ (buy) her a laptop.", [["passes"], ["'ll buy", "will buy"]], "she → [passes] (-es)."],
          ["We ___ (not go) out unless the weather ___ (get) better.", [["won't go", "will not go"], ["gets"]], "[unless] = if … not; after unless: present simple."],
          ["If you ___ (see) Luca, ___ (tell) him to call me.", [["see"], ["tell"]], "An imperative can replace will."],
          ["What ___ you ___ (do) if they don't give you the job?", [["will"], ["do"]], "Question: What [will] you do…?"],
          ["If I ___ (finish) early, I ___ (come) to the cinema with you.", [["finish"], ["'ll come", "will come"]], "if + present, will + verb."],
          ["You ___ (not get) better unless you ___ (take) your medicine.", [["won't get", "will not get"], ["take"]], "won't … unless + present."],
          ["If we ___ (leave) now, we ___ (be) on time.", [["leave"], ["'ll be", "will be"]], "Never will after if: If we [leave]…"]
        ] },
        { id: "g-cond2", topic: "Second conditional", type: "gap", instr: "Complete the second conditional sentences with the past simple or would / wouldn't and the verb in brackets.", items: [
          ["If I ___ (have) more money, I ___ (buy) a new bike.", [["had"], ["'d buy", "would buy"]], "if + past simple, [would] + verb: an imaginary situation."],
          ["If I ___ (be) you, I ___ (talk) to the teacher.", [["were", "was"], ["'d talk", "would talk"]], "Advice: [If I were you], I'd…"],
          ["She ___ (be) happier if she ___ (live) near the sea.", [["'d be", "would be"], ["lived"]], "Main clause first: would + verb … if + past."],
          ["If we ___ (not have) so much homework, we ___ (go) out more.", [["didn't have", "did not have"], ["'d go", "would go"]], "Negative past simple after if."],
          ["What ___ you ___ (do) if you ___ (win) the lottery?", [["would"], ["do"], ["won"]], "Question: What [would] you do if you [won]…?"],
          ["If my brother ___ (study) more, he ___ (get) better marks.", [["studied"], ["'d get", "would get"]], "study → [studied] (y → ied)."],
          ["I ___ (not live) in a big city if I ___ (can) choose.", [["wouldn't live", "would not live"], ["could"]], "can → [could] in the if-clause."],
          ["If you ___ (can) speak any language, which one ___ you ___ (choose)?", [["could"], ["would"], ["choose"]], "[could] after if; question with [would]."],
          ["If Sara ___ (know) the answer, she ___ (tell) us.", [["knew"], ["'d tell", "would tell"]], "know – [knew] – known."],
          ["If it ___ (not be) so cold, we ___ (have) lunch outside.", [["weren't", "were not", "wasn't", "was not"], ["'d have", "would have"]], "be → [weren't] (or wasn't) in the if-clause."]
        ] },
        { id: "g-cond-mc", topic: "First or second conditional", type: "mc", instr: "Choose the correct option.", items: [
          ["If it ___ sunny tomorrow, we'll go to the beach.", ["is", "was", "will be"], 0, "First conditional: if + present simple."],
          ["If I ___ a bird, I'd fly over the mountains.", ["were", "am", "will be"], 0, "Imaginary: second conditional, if + past."],
          ["If you ___ hard, you'll pass.", ["study", "studied", "will study"], 0, "Real possibility: if + present, will."],
          ["I'd travel round the world if I ___ rich.", ["were", "am", "will be"], 0, "Imaginary: would … if + past ([were])."],
          ["If she calls, I ___ you.", ["'ll tell", "'d tell", "told"], 0, "if + present → [will]."],
          ["If I had a car, I ___ you to the station.", ["'d drive", "'ll drive", "drive"], 0, "if + past → [would]."],
          ["You won't get there on time ___ you leave now.", ["unless", "if", "when"], 0, "[unless] = if you don't leave now."],
          ["If I ___ you, I wouldn't do that.", ["were", "am", "would be"], 0, "Advice: If I [were] you…"],
          ["We ___ the match if Marco doesn't play.", ["'ll lose", "'d lose", "lost"], 0, "if + present (doesn't play) → [will]."],
          ["If people ___ less plastic, the oceans would be cleaner.", ["used", "use", "will use"], 0, "would in the main clause → if + past ([used])."]
        ] },
        { id: "g-cond-rw", topic: "Conditionals: rewriting", type: "rewrite", instr: "Rewrite each sentence with the first or second conditional. Begin with the words given.", items: [
          ["I don't have a dog because my flat is too small.", ["If my flat weren't so small, I would have a dog.", "If my flat wasn't so small, I would have a dog.", "If my flat weren't too small, I would have a dog.", "If my flat wasn't too small, I would have a dog.", "If my flat were bigger, I would have a dog.", "If my flat was bigger, I would have a dog.", "If my flat weren't so small, I could have a dog.", "If my flat wasn't so small, I could have a dog.", "If my flat were bigger, I could have a dog.", "If my flat was bigger, I could have a dog."], "An imaginary present situation: if + past simple, would + verb.", "If my flat"],
          ["Study harder or you won't pass.", ["You won't pass unless you study harder."], "[unless] = if … not: You won't pass [unless] you study harder.", "You won't pass unless"],
          ["Maybe it will snow. Then the school will close.", ["If it snows, the school will close.", "If it snows, school will close."], "A real possibility: if + present simple, will.", "If"],
          ["She can't come because she's ill.", ["If she weren't ill, she could come.", "If she wasn't ill, she could come.", "If she weren't ill, she would come.", "If she wasn't ill, she would come."], "Imaginary: if + past (weren't / wasn't), could / would + verb.", "If she"],
          ["Hurry up or we'll be late.", ["We'll be late unless we hurry up.", "We'll be late unless we hurry."], "[unless] + present simple.", "We'll be late unless"],
          ["I don't know her number, so I can't call her.", ["If I knew her number, I could call her.", "If I knew her number, I would call her."], "know → [knew]; can → [could].", "If I knew"],
          ["Maybe I'll see Paolo. Then I'll give him the book.", ["If I see Paolo, I'll give him the book."], "Never will after if: If I [see] Paolo…", "If I see"],
          ["He doesn't speak English, so he doesn't understand the film.", ["If he spoke English, he would understand the film.", "If he spoke English, he could understand the film."], "speak → [spoke]; would + verb.", "If he spoke"]
        ] },
        { id: "g-review", topic: "Mixed review", type: "mc", review: true, instr: "All the grammar of the test together. Choose the correct option.", items: [
          ["While I ___ TV, the phone rang.", ["was watching", "watched", "used to watch"], 0, "[While] + past continuous."],
          ["I ___ wear glasses, but now I wear contact lenses.", ["used to", "was used to", "use to"], 0, "A past state that has changed: [used to]."],
          ["Do you know who ___ this book?", ["wrote", "written", "was writing"], 0, "Past simple of write: [wrote]."],
          ["She's very good ___ languages.", ["at", "in", "on"], 0, "good [at]."],
          ["Don't worry, I ___ help you with your homework.", ["'ll", "'m going", "shall"], 0, "An offer: [will]."],
          ["If I ___ more time, I'd learn the guitar.", ["had", "have", "will have"], 0, "Second conditional: if + past."],
          ["Look! Those boys ___ football in the street.", ["are playing", "play", "played"], 0, "Look! – happening now."],
          ["We ___ to the cinema last Saturday.", ["went", "were going", "used to go"], 0, "One finished event: past simple."],
          ["If you ___ the bus, call me and I'll pick you up.", ["miss", "missed", "will miss"], 0, "First conditional: if + present."],
          ["My parents ___ in a small flat before I was born.", ["lived", "were living", "are living"], 0, "A finished past situation: past simple (also used to live)."],
          ["We discussed ___ the problem for an hour.", ["– (no preposition)", "about", "on"], 0, "discuss + object, without about."],
          ["___ I open the window? It's hot.", ["Shall", "Will", "Do"], 0, "An offer: [Shall I…?]"]
        ] }
      ] },

    { id: "vocabulary", name: "Vocabulary", intro: "The words of Units 3 and 4: rubbish and recycling, packaging, study and work, photography and the stages of life.",
      batteries: [
        { id: "v-rubbish", topic: "Rubbish and recycling", type: "gap", instr: "Complete the sentences. The first letters of each word are given.", items: [
          ["Please put the empty bottles in the ___ (r…) bin, not with the general rubbish.", [["recycling"]], "[recycling] bin: a bin for things that can be recycled."],
          ["A large area of land where waste is buried is a ___ (l…) site.", [["landfill"]], "[landfill] site."],
          ["In the UK the ___ (r… c…) empties the bins every Tuesday.", [["refuse collector", "rubbish collector"]], "[refuse collector] (informal: bin man, dustman)."],
          ["Don't throw that jar away – you can ___ (r…) it as a pencil holder.", [["reuse"]], "[reuse] = use again."],
          ["Supermarkets often throw away ___ (s…) food that they can't sell.", [["surplus"]], "[surplus] = more than is needed."],
          ["Check the ___ (s…)-by date before you buy yoghurt.", [["sell"]], "[sell]-by date."],
          ["I've put a new ___ (b…) bag in the kitchen bin.", [["bin"]], "[bin] bag: a plastic bag for rubbish."],
          ["Paper and cardboard can be ___ (r…) to make new boxes.", [["recycled"]], "Passive: can be [recycled]."],
          ["Too much food ___ (g…) to waste in rich countries.", [["goes"]], "[go to waste] = be wasted."],
          ["Every year we produce millions of tonnes of plastic ___ (w…).", [["waste"]], "[waste]: materials that are not needed and are thrown away."]
        ] },
        { id: "v-pack", topic: "Packaging", type: "mc", instr: "Choose the correct word.", items: [
          ["a ___ of milk", ["carton", "tube", "jar"], 0, "a [carton] of milk / juice."],
          ["a ___ of toothpaste", ["tube", "jar", "carton"], 0, "a [tube] of toothpaste."],
          ["a ___ of honey", ["jar", "carton", "tube"], 0, "a glass [jar] of honey / jam."],
          ["a ___ of crisps", ["packet", "jar", "tube"], 0, "a [packet] of crisps / biscuits."],
          ["a ___ of water", ["bottle", "packet", "tube"], 0, "a [bottle] of water."],
          ["a ___ of beans", ["tin", "carton", "jar"], 0, "a [tin] (or can) of beans."],
          ["a ___ of cereal", ["box", "tube", "jar"], 0, "a [box] of cereal."],
          ["a ___ of cola", ["can", "jar", "carton"], 0, "a [can] of cola."],
          ["Put the ___ back on the jar, please.", ["lid", "tray", "wrapper"], 0, "the [lid] of a jar."],
          ["a plastic ___ for a ready meal", ["tray", "tube", "pouch"], 0, "ready meals often come in a [tray]."]
        ] },
        { id: "v-study-text", topic: "Study and work", type: "text", title: "From student to engineer", box: ["apply", "campus", "CV", "degree", "experience", "graduate", "interview", "lectures", "qualifications", "scholarship", "seminars", "tutor"], instr: "Read the text and complete it with the words in the box. There are two extra words.", parts: [
          ["", "After school, Marta wanted to study Engineering, but the fees were high, so she decided to {1} for a {2}. She got it, and moved into a hall of residence on the university {3}."],
          ["", "In her first year she went to {4} with hundreds of other students, but she preferred {5}, where a small group discusses a topic with a teacher. Her {6} helped her with her essays."],
          ["", "Three years later she was a {7} with a {8} in Engineering. Finding a job wasn't easy, because companies wanted people with work {9}, but in the end one company invited her to an {10} – and she got the job!"]
        ], gaps: [
          [["apply"], "[apply] for something."], [["scholarship"], "Money to pay for your studies."], [["campus"], "The area with the university buildings."],
          [["lectures"], "Big classes where a teacher speaks to many students."], [["seminars"], "Small groups that discuss a topic."], [["tutor"], "A teacher who follows a student or a small group."],
          [["graduate"], "A person who has finished a university degree."], [["degree"], "a [degree] in Engineering."], [["experience"], "work [experience]."], [["interview"], "an [interview]: a meeting to decide who gets the job."]
        ] },
        { id: "v-study-mc", topic: "Study and work", type: "mc", instr: "Choose the correct word.", items: [
          ["A student who is studying for a first degree is an ___.", ["undergraduate", "postgraduate", "graduate"], 0, "[undergraduate]: first degree; postgraduate: after the first degree."],
          ["A long piece of writing at the end of a degree is a ___.", ["dissertation", "lecture", "reference"], 0, "[dissertation] (for a PhD: a thesis)."],
          ["A letter from a teacher or employer that says you are good is a ___.", ["reference", "CV", "covering letter"], 0, "[reference]."],
          ["A course after the first degree, usually one year long, is a ___.", ["Master's", "PhD", "seminar"], 0, "[Master's] degree; a PhD takes three years or more."],
          ["A period of work in a company, often unpaid, to get experience is an ___.", ["internship", "apprenticeship", "vacancy"], 0, "[internship]; an apprenticeship is paid training for a specific job."],
          ["A job that is free for someone to do is a ___.", ["vacancy", "qualification", "career"], 0, "[vacancy]."],
          ["To be present at a lesson: to ___ a lecture.", ["attend", "assist", "follow"], 0, "[attend] (assist = help: a false friend)."],
          ["Money from a university that pays for your studies is a ___.", ["scholarship", "salary", "fee"], 0, "[scholarship] (or grant)."],
          ["A class that you follow on the internet is a ___.", ["webinar", "seminar", "tutorial"], 0, "[webinar] = web + seminar."],
          ["A document with your education and work experience is a ___.", ["CV", "covering letter", "degree"], 0, "[CV] (curriculum vitae)."]
        ] },
        { id: "v-photo", topic: "Photography", type: "mc", instr: "Choose the correct word or phrase.", items: [
          ["It's dark in here – use the ___.", ["flash", "zoom", "lens"], 0, "[flash]: light for dark places."],
          ["I want a close-up of that bird, so I'll ___.", ["zoom in", "use flash", "edit"], 0, "[zoom in] when you are far away."],
          ["This photo is ___: everything is blurred.", ["out of focus", "overexposed", "in the foreground"], 0, "[out of focus] = not sharp."],
          ["There was too much light, so the photo is ___.", ["overexposed", "out of focus", "edited"], 0, "[overexposed] = too much light."],
          ["For a photo of a person, use the ___ setting.", ["portrait", "landscape", "panoramic"], 0, "[portrait] setting."],
          ["A photo of the countryside or the mountains is a ___.", ["landscape", "portrait", "selfie"], 0, "[landscape]."],
          ["I always ___ my photos to change the colours.", ["edit", "zoom", "focus"], 0, "[edit] = change size, colour or brightness."],
          ["A photo that you take of yourself is a ___.", ["selfie", "portrait setting", "close-up lens"], 0, "[selfie]."],
          ["With a ___ lens you can get a big landscape in one photo.", ["wide-angle", "close-up", "flash"], 0, "[wide-angle] lens."],
          ["You can always ___ a photo if you don't like it.", ["delete", "develop", "expose"], 0, "[delete] = remove."]
        ] },
        { id: "v-place", topic: "Describing a picture", type: "text", title: "A living room", img: ["../../basics/img/room.svg", "A living room with a door, a clock, a plant, two chairs with a ball between them, a table with a lamp and a box of books, a cat under the table, an armchair with a bag behind it and a dog in front of it, and a picture above the armchair."],
          box: ["above", "behind", "between", "in front of", "next to", "on", "on the left", "on the right", "under"], instr: "Look at the picture and complete the description with the expressions in the box. You need one expression twice.", parts: [
          ["", "{1} of the picture there's a brown door, and there's a clock {2} it. There's a plant {3} the door. In the middle of the room there are two chairs with a red ball {4} them."],
          ["", "{5} of the picture there's a purple armchair, with a blue bag {6} it and a dog {7} it. There's a picture of some mountains {8} the armchair. There's also a small table with a lamp and a box of books {9} it, and a black cat is lying {10} the table."]
        ], gaps: [
          [["On the left"], "[On the left] of the picture."], [["above"], "The clock is higher than the door: [above]."], [["next to"], "Beside: [next to]."],
          [["between"], "In the middle of two things: [between]."], [["On the right"], "[On the right] of the picture."], [["behind"], "At the back of the armchair: [behind]."],
          [["in front of"], "The dog is [in front of] the armchair."], [["above"], "Higher than the armchair, on the wall: [above]."], [["on"], "On the surface of the table: [on]."], [["under"], "Below the table: [under]."]
        ] },
        { id: "v-age", topic: "Stages of life", type: "mc", instr: "Choose the correct word or phrase.", items: [
          ["A child of about one to three is a ___.", ["toddler", "baby", "pre-teen"], 0, "[toddler]: a small child who is learning to walk."],
          ["Someone of eleven or twelve is a ___.", ["pre-teen", "teenager", "toddler"], 0, "[pre-teen]."],
          ["Someone of fifteen is a ___.", ["teenager", "pre-teen", "grown-up"], 0, "[teenager]: 13–19."],
          ["She's 22 – she's in her ___ twenties.", ["early", "mid-", "late"], 0, "20–23: [early] twenties."],
          ["He's 35 – he's in his ___ thirties.", ["mid-", "early", "late"], 0, "34–36: [mid]-thirties."],
          ["My uncle is 48 – he's in his ___ forties.", ["late", "early", "mid-"], 0, "47–49: [late] forties."],
          ["Someone who has stopped working because of their age is ___.", ["retired", "elderly", "middle-aged"], 0, "[retired]."],
          ["A more polite word for old is ___.", ["elderly", "grown-up", "middle-aged"], 0, "[elderly] is more polite than old."],
          ["People in their forties or fifties are usually called ___.", ["middle-aged", "elderly", "retired"], 0, "[middle-aged]."],
          ["An informal word for an adult, often used by children, is a ___.", ["grown-up", "teenager", "toddler"], 0, "[grown-up]."]
        ] }
      ] },

    { id: "pronunciation", name: "Pronunciation", intro: "The rule for -ed endings: after /t/ and /d/ → /ɪd/; after the voiceless sounds /p/, /k/, /f/, /s/, /ʃ/, /tʃ/ → /t/; after all other sounds → /d/. For word stress, say the word aloud and listen for the strongest syllable.",
      batteries: [
        { id: "p-ed1", topic: "-ed endings", type: "sort", cats: ["/t/", "/d/", "/ɪd/"], instr: "How is the -ed ending pronounced? Choose /t/, /d/ or /ɪd/.", items: [
          ["worked", 0, "After /k/ (voiceless): /t/."], ["played", 1, "After a vowel sound: /d/."], ["wanted", 2, "After /t/: /ɪd/."],
          ["watched", 0, "After /tʃ/: /t/."], ["opened", 1, "After /n/: /d/."], ["needed", 2, "After /d/: /ɪd/."],
          ["laughed", 0, "laugh ends in the sound /f/: /t/."], ["lived", 1, "After /v/ (voiced): /d/."], ["started", 2, "After /t/: /ɪd/."],
          ["finished", 0, "After /ʃ/: /t/."], ["cleaned", 1, "After /n/: /d/."], ["decided", 2, "After /d/: /ɪd/."],
          ["stopped", 0, "After /p/: /t/."], ["travelled", 1, "After /l/: /d/."], ["visited", 2, "After /t/: /ɪd/."]
        ] },
        { id: "p-ed2", topic: "-ed endings", type: "sort", cats: ["/t/", "/d/", "/ɪd/"], instr: "How is the -ed ending pronounced? Choose /t/, /d/ or /ɪd/.", items: [
          ["asked", 0, "After /k/: /t/."], ["changed", 1, "After /dʒ/ (voiced): /d/."], ["waited", 2, "After /t/: /ɪd/."],
          ["kissed", 0, "After /s/: /t/."], ["tried", 1, "After a vowel sound: /d/."], ["hated", 2, "After /t/: /ɪd/."],
          ["washed", 0, "After /ʃ/: /t/."], ["enjoyed", 1, "After a vowel sound: /d/."], ["collected", 2, "After /t/: /ɪd/."],
          ["helped", 0, "After /p/: /t/."], ["moved", 1, "After /v/: /d/."], ["ended", 2, "After /d/: /ɪd/."]
        ] },
        { id: "p-stress1", topic: "Word stress", type: "stress", instr: "Click the stressed syllable.", items: [
          ["pho|to|graph", 0, "PHOtograph."], ["pho|to|gra|pher", 1, "phoTOgrapher: the stress moves with -er."], ["pho|to|gra|phy", 1, "phoTOgraphy."],
          ["pho|to|gra|phic", 2, "photoGRAphic: words ending in -ic stress the syllable before -ic."], ["re|cy|cle", 1, "reCYcle."], ["en|vi|ron|ment", 1, "enVIronment."],
          ["pro|fes|sor", 1, "proFESsor."], ["qua|li|fi|ca|tions", 3, "qualifiCAtions: words ending in -tion stress the syllable before -tion."],
          ["dis|ser|ta|tion", 2, "disserTAtion (-tion rule)."], ["un|der|gra|du|ate", 2, "underGRAduate."], ["re|tired", 1, "reTIRED."], ["back|ground", 0, "BACKground: compound nouns usually stress the first part."]
        ] },
        { id: "p-stress2", topic: "Word stress", type: "stress", instr: "Click the stressed syllable.", items: [
          ["fore|ground", 0, "FOREground (compound noun)."], ["o|ppo|site", 0, "OPposite."], ["se|mi|nar", 0, "SEminar."], ["a|ttend", 1, "atTEND."],
          ["va|can|cy", 0, "VAcancy."], ["re|fe|rence", 0, "REFerence."], ["re|si|dence", 0, "RESidence."], ["scho|lar|ship", 0, "SCHOlarship."],
          ["tu|to|ri|al", 1, "tuTOrial."], ["post|gra|du|ate", 1, "postGRAduate."], ["ex|pe|ri|ence", 1, "exPErience."], ["in|ter|view", 0, "INterview."]
        ] }
      ] },

    { id: "reading", name: "Reading", intro: "Read the text twice: once quickly for the general idea, then carefully for the details. In the test, the answers to the questions are in the text, but you should write them in your own words where you can.",
      batteries: [
        { id: "r-repair", topic: "Reading", type: "reading", title: "Repair, don't replace",
          text: [
            "Every second Saturday of the month, the old library in Abbey Road becomes a very unusual café. People arrive with broken toasters, lamps, bikes and jeans, and volunteers help them to repair them for free.",
            "The Repair Café started in 2019. Its founder, Jenny Moore, used to work as an engineer for a big electronics company. ‘I was tired of seeing perfectly good things in the bin,’ she says. ‘A lot of people throw away a radio just because a wire is loose. If they knew how easy it is to fix, they wouldn't buy a new one.’",
            "On the morning I visited, about forty people were waiting in the queue. While I was talking to Jenny, a teenager came in with a laptop that didn't turn on. Twenty minutes later it was working again, and he was smiling. ‘I'm going to tell all my friends about this place,’ he said.",
            "The café doesn't only save people money. Last year the volunteers repaired more than 1,200 objects, and Jenny calculates that this kept about three tonnes of waste out of landfill sites. Visitors also learn to do simple repairs themselves, so the next time something breaks, they will try to fix it before they replace it.",
            "Not all repairs are successful, of course. ‘Sometimes we need a part that the manufacturer doesn't sell any more,’ Jenny explains. ‘That really annoys me. Things should be made to last.’"
          ],
          tasks: [
            { type: "tf", instr: "Are the sentences true or false?", items: [
              ["The Repair Café is open every Saturday.", false, "It is open every second Saturday of the month."],
              ["Jenny Moore used to work as an engineer.", true, "‘used to work as an engineer for a big electronics company’."],
              ["The volunteers couldn't repair the teenager's laptop.", false, "Twenty minutes later it was working again."],
              ["Last year the volunteers repaired more than a thousand objects.", true, "More than 1,200 objects."],
              ["Jenny is happy with the way manufacturers make things.", false, "It annoys her that parts are not sold any more: things should be made to last."]
            ] },
            { type: "mc", instr: "Choose the correct answer.", items: [
              ["Why did Jenny start the café?", ["She didn't like seeing good things thrown away.", "She wanted to earn some extra money.", "She had lost her job as an engineer."], 0, "‘I was tired of seeing perfectly good things in the bin.’"],
              ["How many people were waiting when the writer visited?", ["about forty", "about twenty", "more than a thousand"], 0, "‘about forty people were waiting in the queue’."],
              ["What do visitors learn at the café?", ["how to do simple repairs", "how to sell old objects", "how to recycle plastic"], 0, "‘Visitors also learn to do simple repairs themselves.’"]
            ] },
            { type: "open", instr: "Answer the questions. Use your own words where you can.", items: [
              ["Why do people often throw things away, according to Jenny?", "Because something small is broken (for example a wire is loose) and they don't know that it is easy to fix."],
              ["How does the café help the environment?", "The objects that are repaired don't end up in landfill sites: last year about three tonnes of waste were saved."]
            ] }
          ] },
        { id: "r-apprentice", topic: "Reading", type: "reading", title: "From the classroom to the workshop",
          text: [
            "When Davide finished school in Brescia, everybody expected him to go to university. His sister was studying law, and his parents were both teachers. ‘I used to feel that university was the only option,’ he says. ‘But I hated sitting in a classroom all day.’",
            "Instead, Davide applied for an apprenticeship with a company that builds bicycles. For three years he worked four days a week in the workshop and spent one day a week at a training college. He earned a small salary from the first month, which meant that he didn't need to ask his parents for money.",
            "The first months were hard. ‘One day, while I was fixing a wheel, I made a stupid mistake and the whole wheel broke. I was sure they would send me home,’ he laughs. Instead, his manager calmly showed him how to do it properly.",
            "Now Davide is 22 and has a full-time job in the same company. Some of his school friends are still at university, and a few of them are worried about finding work when they graduate. ‘If I could choose again, I would do exactly the same thing,’ Davide says. ‘But it isn't right for everyone. If you love studying, university is a great choice.’",
            "Next year he is going to start a part-time course in engineering, which the company will pay for."
          ],
          tasks: [
            { type: "tf", instr: "Are the sentences true or false?", items: [
              ["Davide's parents are teachers.", true, "‘his parents were both teachers’."],
              ["Davide enjoyed studying in a classroom.", false, "‘I hated sitting in a classroom all day.’"],
              ["During the apprenticeship he didn't receive any money.", false, "He earned a small salary from the first month."],
              ["His manager was angry when the wheel broke.", false, "His manager calmly showed him how to do it properly."],
              ["The company is going to pay for his engineering course.", true, "‘a part-time course in engineering, which the company will pay for’."]
            ] },
            { type: "mc", instr: "Choose the correct answer.", items: [
              ["How did Davide divide his week during the apprenticeship?", ["four days in the workshop, one day at college", "three days at college, two days in the workshop", "five days in the workshop"], 0, "‘four days a week in the workshop and one day a week at a training college’."],
              ["What does Davide think about university now?", ["It's a good choice for people who love studying.", "It's a waste of time for everybody.", "It's the only way to find a good job."], 0, "‘If you love studying, university is a great choice.’"],
              ["How old is Davide now?", ["22", "19", "25"], 0, "‘Now Davide is 22’."]
            ] },
            { type: "open", instr: "Answer the questions. Use your own words where you can.", items: [
              ["Why didn't Davide go to university?", "Because he hated sitting in a classroom all day: he preferred practical work."],
              ["Why didn't Davide need to ask his parents for money?", "Because he earned a salary from the first month of his apprenticeship."]
            ] }
          ] }
      ] },

    { id: "writing", name: "Writing", intro: "In the test you describe a photo in 60–80 words. Start with the language of position, then describe the three photos and compare your texts with the models.",
      batteries: [
        { id: "w-lang", topic: "Describing a picture", type: "phrases", title: "Useful language",
          instr: "Read the expressions and learn them: you will need them in the test.",
          groups: [
            ["Where in the picture?", ["in the foreground (the front of the picture)", "in the background (the back of the picture)", "in the distance (far away)", "in the centre / in the middle", "on the left / on the right", "in the top left-hand corner", "in the bottom right-hand corner"]],
            ["Where are things?", ["behind the tree", "in front of the bench", "next to the bin", "between the chairs", "opposite the café", "on top of the hill", "above the door / under the table"]],
            ["What's happening now? (present continuous)", ["A boy is taking a photo.", "Two people are running in the park.", "The sun is shining."]],
            ["Before and after", ["I think they have just arrived.", "It was raining before, because the ground is wet.", "In a few minutes they're going to have lunch.", "I think the dog will run after the ball."]],
            ["Linking your ideas", ["There is / There are…", "It looks like… / It seems that…", "Maybe… / I think… / Probably…", "First… Then… Finally…"]]
          ] },
        { id: "w-camera", topic: "Describing a picture", type: "write", title: "The young photographer", img: ["img/camera.jpg", "Two small children in a field of yellow flowers: a boy is taking a photo with an old camera on a tripod and a girl in a red dress is watching."],
          words: "60–80 words",
          prompt: ["Look at the photo and describe it in 60–80 words.", "Say where the people and things are (use at least five expressions of place).", "Say what the people are doing and wearing.", "Say what you think happened before and what is going to happen next."],
          checklist: [
            "I used at least five expressions of place (in the foreground, on the left, behind, next to…).",
            "I used the present continuous for what the people are doing.",
            "I used the past (or be going to / will) for what happened before and what will happen next.",
            "I described the photo in a logical order (e.g. from left to right, or from the foreground to the background).",
            "I wrote between 60 and 80 words.",
            "I checked my spelling, -s / -ing endings and capital letters."
          ],
          model: [
            "Two small children are in a field. On the right a little boy in a light blue shirt is taking a photo with an old camera on a tripod. On the left a girl in a red dress is standing and looking at the camera. In the foreground there are lots of yellow flowers, and in the background you can see some trees and a hill. I think the boy is going to take a photo of the girl."
          ] },
        { id: "w-office", topic: "Describing a picture", type: "write", title: "A meeting at work", img: ["img/office.jpg", "Six young people in a meeting in a modern office: a woman in the centre is talking, the others are listening."],
          words: "60–80 words",
          prompt: ["Look at the photo and describe it in 60–80 words.", "Say where the people and things are (use at least five expressions of place).", "Say what the people are doing and wearing.", "Say what you think happened before and what is going to happen next."],
          checklist: [
            "I used at least five expressions of place (in the foreground, on the left, behind, next to…).",
            "I used the present continuous for what the people are doing.",
            "I used the past (or be going to / will) for what happened before and what will happen next.",
            "I described the photo in a logical order (e.g. from left to right, or from the foreground to the background).",
            "I wrote between 60 and 80 words.",
            "I checked my spelling, -s / -ing endings and capital letters."
          ],
          model: [
            "Six young people are having a meeting in a modern office. In the centre a woman with long blond hair is sitting on a grey sofa and explaining something. On the left a man with glasses is sitting in front of a laptop. In the foreground, on the right, another woman is listening and holding a notebook. In the background a man in a red jumper is writing. I think they are planning a new project."
          ] },
        { id: "w-jogging", topic: "Describing a picture", type: "write", title: "A run in the park", img: ["img/jogging.jpg", "A young man and a young woman are running along a stone path in a green park."],
          words: "60–80 words",
          prompt: ["Look at the photo and describe it in 60–80 words.", "Say where the people and things are (use at least five expressions of place).", "Say what the people are doing and wearing.", "Say what you think happened before and what is going to happen next."],
          checklist: [
            "I used at least five expressions of place (in the foreground, on the left, behind, next to…).",
            "I used the present continuous for what the people are doing.",
            "I used the past (or be going to / will) for what happened before and what will happen next.",
            "I described the photo in a logical order (e.g. from left to right, or from the foreground to the background).",
            "I wrote between 60 and 80 words.",
            "I checked my spelling, -s / -ing endings and capital letters."
          ],
          model: [
            "A young man and a young woman are running along a stone path in a park. On the left the man is wearing a yellow T-shirt and grey shorts, and he has a white towel round his neck. Next to him, on the right, the woman is smiling at him. She's wearing a green T-shirt and white shorts. Behind them there are lots of trees. I think they're going to stop for a drink soon."
          ] }
      ] }
  ],

  /* =========================================================================================
     MOCK TEST: same structure and points as the real test, new content
     ========================================================================================= */
  mock: {
    time: 55,
    sections: [
      { name: "Grammar", exercises: [
        { type: "text", pts: 1, instr: "Complete the text with the past simple, the past continuous or used to and the verb in brackets. Use used to for past habits and states where possible.", example: "When I was eleven, we [used to spend] (spend) every August at the seaside.", parts: [
          ["", "My parents {1} (not like) hotels, so we {2} (sleep) in a tent. One night, while we {3} (have) dinner outside, a terrible storm {4} (start). The wind {5} (blow) our tent away! We {6} (run) to the car and {7} (spend) the night there. My little brother {8} (cry) all night, but now we all laugh about it."]
        ], gaps: [
          [["didn't use to like", "did not use to like", "didn't like", "did not like"], "A past state: [didn't use to like] (the past simple is also correct)."],
          [["used to sleep", "slept"], "A past habit: [used to sleep]."],
          [["were having"], "[while] + past continuous."],
          [["started"], "The event that interrupts: past simple."],
          [["blew"], "blow – blew – blown."],
          [["ran"], "run – ran – run."],
          [["spent"], "spend – spent – spent."],
          [["cried", "was crying"], "cry → cried (y → ied)."]
        ] },
        { type: "gap", pts: 1, instr: "Complete the sentences with the present simple, present continuous, past simple, past continuous or used to.", items: [
          ["My dad ___ (cook) dinner right now.", [["is cooking", "'s cooking"]], "Right now: present continuous."],
          ["Bees ___ (make) honey.", [["make"]], "A general fact: present simple."],
          ["Shh! I ___ (listen) to the news.", [["am listening", "'m listening"]], "Happening now: present continuous."],
          ["While she ___ (sleep), somebody knocked at the door.", [["was sleeping"]], "[While] + past continuous."],
          ["We ___ (buy) this house in 2015.", [["bought"]], "A date in the past: past simple. buy – bought."],
          ["How often ___ you ___ (play) tennis these days?", [["do"], ["play"]], "A present habit: present simple."],
          ["‘What ___ you ___ (do) when I called?’ ‘I was in the shower.’", [["were"], ["doing"]], "In progress when I called: past continuous."],
          ["When I was younger, I ___ (go) skating every winter, but I don't any more.", [["used to go", "went"]], "A past habit that has finished: [used to go]."]
        ] },
        { type: "paradigm", pts: 1, instr: "Complete the missing forms of the irregular verbs.", items: [
          [["give", "gave", "given"], 0], [["find", "found", "found"], 1], [["know", "knew", "known"], 2], [["tell", "told", "told"], 0],
          [["wear", "wore", "worn"], 1], [["meet", "met", "met"], 0], [["sleep", "slept", "slept"], 1], [["get", "got", "got / gotten"], 0]
        ] },
        { type: "gap", pts: 1, instr: "Complete the sentences with the correct preposition. Write – if no preposition is needed.", items: [
          ["I'm really bad ___ remembering names.", [["at"]], "bad [at]."],
          ["She's angry ___ her brother.", [["with"]], "angry [with] a person."],
          ["Who does this jacket belong ___?", [["to"]], "belong [to]."],
          ["They succeeded ___ finding a flat.", [["in"]], "succeed [in] + -ing."],
          ["He's very close ___ his grandmother.", [["to"]], "close [to] somebody."],
          ["We entered ___ the museum through a side door.", [["–", "-", "no preposition"]], "enter + place, without a preposition."]
        ] },
        { type: "text", pts: 1, instr: "Complete the dialogues with will / won't, shall or be going to and the verb in brackets.", parts: [
          ["A", "It's cold in here."], ["B", "I {1} (close) the window."],
          ["A", "Why have you got all that wood?"], ["B", "I {2} (build) a treehouse for my kids."],
          ["A", "{3} we go for a walk? It's a lovely day."],
          ["A", "Watch out! You {4} (drop) those plates!"],
          ["A", "I'm sorry I'm late. I promise I {5} (not be) late again."],
          ["A", "Who do you think {6} (win) the election?"]
        ], gaps: [
          [["'ll close", "will close"], "A decision made now / an offer: [will]."],
          [["'m going to build", "am going to build"], "A plan: [be going to]."],
          [["Shall"], "A suggestion: [Shall we…?]"],
          [["'re going to drop", "are going to drop"], "A prediction from what you can see: [be going to]."],
          [["won't be", "will not be"], "A promise: [won't]."],
          [["will win", "is going to win"], "An opinion about the future: [will]."]
        ] },
        { type: "gap", pts: 1, scoreBy: "gap", instr: "Complete the sentences with the correct form of the verbs in brackets. Use the first or the second conditional.", items: [
          ["If you ___ (not wear) a coat, you ___ (be) cold.", [["don't wear", "do not wear"], ["'ll be", "will be"]], "First conditional: if + present, will."],
          ["I live far from school. If I ___ (live) nearer, I ___ (walk) there every day.", [["lived"], ["'d walk", "would walk"]], "Imaginary: if + past, would."],
          ["My phone is broken. If it ___ (work), I ___ (send) you a photo.", [["worked"], ["'d send", "would send"]], "Imaginary: if + past, would."],
          ["We ___ (not finish) on time unless everybody ___ (help).", [["won't finish", "will not finish"], ["helps"]], "won't … unless + present."]
        ] },
        { type: "rewrite", pts: 2, instr: "Rewrite each sentence with the first or second conditional. Begin with the words given.", items: [
          ["I can't drive, so I take the bus to work.", ["If I could drive, I wouldn't take the bus to work.", "If I could drive, I would drive to work.", "If I could drive, I wouldn't take the bus.", "If I could drive, I'd drive to work."], "Imaginary: if + past (could), would + verb.", "If I could drive,"],
          ["Hurry or you'll miss the train.", ["You'll miss the train unless you hurry.", "You'll miss the train unless you hurry up."], "[unless] + present simple.", "You'll miss the train unless"],
          ["Maybe Anna will call. Then I'll tell her the news.", ["If Anna calls, I'll tell her the news."], "if + present simple, will.", "If"]
        ] }
      ] },
      { name: "Vocabulary", exercises: [
        { type: "gap", pts: 1, instr: "Write the word for each definition. The first letters are given.", items: [
          ["a small plastic container for ice cream or margarine → ___ (t…)", [["tub"]], "[tub]."],
          ["a box made of thick, strong paper → ___ (c… b…)", [["cardboard box"]], "[cardboard box]."],
          ["to carry the rubbish bags out of the house → ___ (t… o…)", [["take out"]], "[take out] the rubbish."],
          ["to heat food again → ___ (r…)", [["reheat"]], "[reheat] = heat again."],
          ["to use something again instead of throwing it away → ___ (r…)", [["reuse"]], "[reuse]."],
          ["a paper container for milk or juice → ___ (c…)", [["carton"]], "[carton]."]
        ] },
        { type: "text", pts: 1, box: ["apprenticeship", "campus", "covering letter", "hall of residence", "PhD", "postgraduate", "professor", "skills", "thesis", "undergraduate"], instr: "Complete the text with the words in the box. There are two extra words.", parts: [
          ["", "After his first degree, Leo became a {1} student and did a Master's in History. Now he's doing a {2}: he has to write a {3} of about 100,000 words. His {4}, who is an expert on medieval Italy, reads every chapter. Leo lives in a {5} with other students, a few minutes from the {6}. He also teaches some first-year students, and this has improved his communication {7}. Next year he'll start looking for a job, so he's already preparing his CV and a {8}."]
        ], gaps: [
          [["postgraduate"], "After the first degree: [postgraduate]."], [["PhD"], "a [PhD] (doctorate)."], [["thesis"], "The long piece of writing for a PhD: [thesis]."],
          [["professor"], "[professor]: the highest-ranking university teacher."], [["hall of residence"], "Where students live: [hall of residence]."],
          [["campus"], "The university buildings: [campus]."], [["skills"], "communication [skills]."], [["covering letter"], "a CV and a [covering letter]."]
        ] },
        { type: "mc", pts: 1, instr: "Choose the correct word or phrase.", items: [
          ["The picture is blurred – it's ___.", ["out of focus", "overexposed"], 0, "[out of focus]."],
          ["I'm too far away – I'll ___.", ["zoom in", "use flash"], 0, "[zoom in] for a close-up."],
          ["___, far behind the people, there are some mountains.", ["In the background", "In the foreground"], 0, "Far behind: [in the background]."],
          ["My niece is two – she's a ___.", ["toddler", "teenager"], 0, "[toddler]."],
          ["My dad is 57 – he's in his ___ fifties.", ["late", "early"], 0, "57 → [late] fifties."],
          ["‘___’ is an informal word for an adult.", ["Grown-up", "Pre-teen"], 0, "[grown-up]."]
        ] }
      ] },
      { name: "Pronunciation", exercises: [
        { type: "sort", pts: 1, cats: ["/t/", "/d/", "/ɪd/"], instr: "How is the -ed ending pronounced?", items: [
          ["jumped", 0, "After /p/: /t/."], ["smiled", 1, "After /l/: /d/."], ["landed", 2, "After /d/: /ɪd/."], ["cooked", 0, "After /k/: /t/."], ["added", 2, "After /d/: /ɪd/."]
        ] },
        { type: "stress", pts: 1, instr: "Click the stressed syllable.", items: [
          ["em|ploy|er", 1, "emPLOYer."], ["ca|reer", 1, "caREER."], ["en|vi|ron|ment", 1, "enVIronment."], ["sa|la|ry", 0, "SAlary."], ["ap|pren|tice|ship", 1, "apPRENticeship."]
        ] }
      ] },
      { name: "Reading", exercises: [
        { type: "reading", title: "The selfie that went wrong",
          text: [
            "Last August, nineteen-year-old Tom Baker was on holiday in Cornwall with some friends. They were walking along the cliffs when Tom decided to take a selfie with the sea in the background. ‘I wanted the perfect photo for social media,’ he says. While he was moving back to get a better angle, he slipped and fell nearly three metres onto a rock below.",
            "Luckily, his friends called the emergency services immediately, and a helicopter took him to hospital. He broke his arm and two ribs, but the doctors say that he will make a full recovery.",
            "Tom isn't the only one. Every year people get hurt while they are taking photos in dangerous places, and some local councils have put up signs that say ‘No selfies’. ‘People used to look at the view,’ says coastguard Rachel Green. ‘Now they look at their phones.’",
            "Tom has changed his habits. ‘I still love photography, but now I think before I take a photo,’ he says. ‘If I saw someone near the edge of a cliff with a phone, I would tell them to stop.’ Next summer he is going to do a first-aid course."
          ],
          tasks: [
            { type: "tf", pts: 1, instr: "Are the sentences true or false?", items: [
              ["Tom was on holiday on his own.", false, "He was on holiday with some friends."],
              ["He fell while he was trying to get a better photo.", true, "‘While he was moving back to get a better angle, he slipped.’"],
              ["The doctors think that Tom will recover completely.", true, "‘he will make a full recovery’."],
              ["Rachel Green thinks people look at the view more today.", false, "People used to look at the view; now they look at their phones."]
            ] },
            { type: "open", pts: 2, instr: "Answer the questions. Use your own words where you can.", items: [
              ["How did Tom get to hospital?", "By helicopter: his friends called the emergency services immediately."],
              ["What have some local councils done?", "They have put up signs that say ‘No selfies’."],
              ["What would Tom do if he saw someone near the edge of a cliff with a phone?", "He would tell them to stop."]
            ] }
          ] }
      ] },
      { name: "Writing", exercises: [
        { type: "write", pts: 10, title: "Lunch with friends", img: ["img/pizza.jpg", "Three young women having pizza and drinks at a table: one is taking a selfie, one is eating a slice of pizza and one is drinking juice."],
          words: "60–80 words",
          prompt: ["Look at the photo and describe it in 60–80 words.", "Say where the people and things are (use at least five expressions of place).", "Say what the people are doing and wearing.", "Say what you think happened before and what is going to happen next."],
          criteria: [
            ["Task and content", 3, ["3 · all three points, with precise detail", "2 · all points, but general", "1 · one point missing", "0 · off task"]],
            ["Expressions of place and vocabulary", 3, ["3 · five or more, used correctly", "2 · three or four", "1 · one or two, often wrong", "0 · none"]],
            ["Grammar", 2, ["2 · present continuous, past and future forms mostly correct", "1 · frequent errors, meaning clear", "0 · hard to understand"]],
            ["Organisation", 2, ["2 · logical order (picture → before → next) with linkers", "1 · a list of details", "0 · fragmentary"]]
          ],
          model: [
            "Three friends are having lunch in a pizzeria. On the left a girl in a denim jacket is taking a selfie with her phone. Next to her, in the centre, a girl in a yellow shirt is eating a slice of pizza. On the right a woman in a white T-shirt is drinking juice through a straw. In the foreground there are two big pizzas and some glasses of juice. I think they are going to post the photo online."
          ] }
      ] }
    ]
  }
});
