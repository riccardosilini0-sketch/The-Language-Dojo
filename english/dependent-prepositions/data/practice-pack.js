/* =====================================================================
   Dependent Prepositions — practice batteries from the teacher's exercise pack
   (“Dependent Prepositions · B1–B2 Exercise Pack”). Sentences, options and order
   are reproduced as in the original; answers and explanations added for the site.

   HOW TO ADD A BATTERY: copy one of the objects below and change it. Formats:
     gap        items: [sentence with ___ (one or more), [[accepted for gap 1], [gap 2]…], explanation]
     mc         items: [sentence with ___, [options], index of the correct option, explanation]
     correct    items: [wrong sentence, [accepted corrected sentences], explanation]
     transform  items: [first sentence, KEY WORD, start, end, [accepted], explanation]
     translate  items: [Italian sentence, hint, [required expressions], model answer, explanation]
     text       parts: [[speaker or "" , line with {1}, {2}…]], gaps: [[[accepted], explanation]…], heading?
     halves     left: [...], right: [...], answers: [letter for each left item], why: [...]
   belt: 1 White · 2 Yellow · 3 Orange (classification of the material)
   ===================================================================== */
window.DepPrep = window.DepPrep || {};
window.DepPrep.batteries = (window.DepPrep.batteries || []).concat([
  { id: "pack-gap", source: "pack", type: "gap", belt: 2,
    title: "Gap-fill: choose the correct preposition", goal: "Verbs and adjectives followed by a preposition in everyday sentences.",
    items: [
      ["Have you applied ___ that job at the bank yet?", [["for"]], "apply for a job"],
      ["Mia's flight was delayed, so she didn't arrive ___ Heathrow Airport until after midnight.", [["at"]], "arrive at a specific place (an airport, a station)"],
      ["I don't really believe ___ horoscopes, but I still read mine every morning.", [["in"]], "believe in sth"],
      ["The price of the tickets depends ___ how early you book.", [["on"]], "depend on"],
      ["Who does this phone belong ___? I found it under the table.", [["to"]], "belong to sb – the preposition stays at the end of the question"],
      ["My brother is really good ___ fixing bikes.", [["at"]], "good at + -ing (an ability)"],
      ["Too much sugar isn't good ___ your teeth.", [["for"]], "good for = beneficial (here: not beneficial)"],
      ["Lucas has always been very close ___ his grandmother.", [["to"]], "close to sb"],
      ["She's been married ___ a Scottish architect for ten years.", [["to"]], "married to sb (never ‘with’)"],
      ["I can't choose ___ the blue sofa and the green one – they're both lovely.", [["between"]], "choose between A and B"],
      ["Please don't laugh ___ him! He's doing his best.", [["at"]], "laugh at sb"],
      ["Our class teacher is responsible ___ organising this year's school trip.", [["for"]], "responsible for + -ing"]
    ] },
  { id: "pack-mc", source: "pack", type: "mc", belt: 2,
    title: "Multiple choice", goal: "Choose the preposition that completes each sentence.",
    items: [
      ["I'm not really interested ___ politics.", ["on", "at", "in", "of"], 2, "interested in"],
      ["Our success will depend ___ how well we work as a team.", ["of", "from", "on", "by"], 2, "depend on"],
      ["My cousin is married ___ a doctor from Naples.", ["with", "to", "at", "by"], 1, "married to sb"],
      ["When we finally arrived ___ Rome, it was already dark.", ["to", "at", "in", "on"], 2, "arrive in + city or country"],
      ["We'd been waiting ___ the bus for forty minutes when it finally came.", ["–", "to", "for", "at"], 2, "wait for sb / sth"],
      ["Can I pay ___ the concert tickets by card?", ["–", "for", "to", "on"], 1, "pay for sth you buy"],
      ["The new version of the app is completely different ___ the old one.", ["of", "from", "with", "by"], 1, "different from"],
      ["I'm so proud ___ you for passing your driving test!", ["for", "on", "of", "with"], 2, "proud of sb"],
      ["Sorry I'm late – I'd like to apologise ___ keeping you waiting.", ["for", "of", "on", "to"], 0, "apologise for + -ing"],
      ["Thomas is very keen ___ photography – he takes his camera everywhere.", ["of", "in", "on", "for"], 2, "keen on"],
      ["Are you scared ___ spiders?", ["from", "of", "with", "for"], 1, "scared of"],
      ["She's very fond ___ her nephews and sees them every weekend.", ["of", "to", "with", "about"], 0, "fond of"]
    ] },
  { id: "pack-combo", source: "pack", type: "gap", belt: 3,
    title: "Complete the combination", goal: "Use the words in brackets: verb or adjective + preposition + the right form of the next word.",
    items: [
      ["We're really ___ (look forward / meet) your parents on Saturday.", [["looking forward to meeting"]], "look forward to + -ing"],
      ["The climbers finally ___ (succeed / reach) the summit on their third attempt.", [["succeeded in reaching"]], "succeed in + -ing"],
      ["I'm ___ (fed up / do) all the housework on my own!", [["fed up with doing", "fed up of doing"]], "fed up with + -ing (informal BrE also ‘fed up of’)"],
      ["Did he ___ (apologise / break) your laptop?", [["apologise for breaking", "apologize for breaking", "apologise to you for breaking", "apologize to you for breaking"]], "apologise for + -ing"],
      ["This song always ___ (remind / I) our holiday in Greece.", [["reminds me of"]], "remind sb of sth – object pronoun ‘me’"],
      ["My sister is ___ (afraid / fly), so she always takes the train.", [["afraid of flying"]], "afraid of + -ing"],
      ["You shouldn't ___ (spend / so much money) video games.", [["spend so much money on"]], "spend money on sth"],
      ["Last year Paolo ___ (share / a flat) two students from Valencia.", [["shared a flat with"]], "share sth with sb – past simple: shared"],
      ["I need to ___ (talk / my manager) a pay rise.", [["talk to my manager about", "talk with my manager about"]], "talk to sb about sth"],
      ["Most of my colleagues prefer ___ (work) from home ___ (commute) to the office.", [["working"], ["to commuting"]], "prefer + -ing … to + -ing"],
      ["Are you ___ (interested / join) the drama club this term?", [["interested in joining"]], "interested in + -ing"],
      ["Local residents are ___ (tired / wait) for the council to repair the road.", [["tired of waiting"]], "tired of + -ing"]
    ] },
  { id: "pack-errors", source: "pack", type: "correct", belt: 3,
    title: "Error correction", goal: "Each sentence contains one mistake with a preposition. Write the correct sentence.",
    items: [
      ["I've never been very good in remembering people's birthdays.", ["I've never been very good at remembering people's birthdays."], "good at (not ‘in’)"],
      ["At 25, you shouldn't still depend of your parents for money.", ["At 25, you shouldn't still depend on your parents for money."], "depend on (not ‘of’)"],
      ["She got married with her childhood sweetheart last summer.", ["She got married to her childhood sweetheart last summer."], "get married to sb (not ‘with’)"],
      ["We arrived to the hotel just before reception closed.", ["We arrived at the hotel just before reception closed."], "arrive at a building (never ‘arrive to’)"],
      ["I'm really looking forward to see you at the wedding.", ["I'm really looking forward to seeing you at the wedding."], "look forward to + -ing: ‘to’ is a preposition here"],
      ["My dad was very angry about me when I scratched his car.", ["My dad was very angry with me when I scratched his car."], "angry with a person, angry about a thing"],
      ["That smell reminds me with my grandmother's kitchen.", ["That smell reminds me of my grandmother's kitchen."], "remind sb of sth"],
      ["Why were you so rude with the waiter? He was only trying to help.", ["Why were you so rude to the waiter? He was only trying to help."], "rude to sb"],
      ["Florence is famous of its Renaissance art and architecture.", ["Florence is famous for its Renaissance art and architecture."], "famous for"],
      ["Don't worry for me – I'll be absolutely fine.", ["Don't worry about me – I'll be absolutely fine."], "worry about sb"],
      ["Excuse me, who does this umbrella belong?", ["Excuse me, who does this umbrella belong to?", "Excuse me, to whom does this umbrella belong?"], "belong to – the preposition is needed, usually at the end of the question"],
      ["The children succeeded to build a raft from old wooden boxes.", ["The children succeeded in building a raft from old wooden boxes."], "succeed in + -ing (never ‘succeed to do’)"]
    ] },
  { id: "pack-transform", source: "pack", type: "transform", belt: 3,
    title: "Sentence transformation", goal: "Complete the second sentence so that it means the same as the first, using the word given.",
    items: [
      ["I can't wait for my holiday in Sicily.", "FORWARD", "I'm really", "my holiday in Sicily.", ["looking forward to"], "look forward to sth"],
      ["Tom is the owner of that red bike.", "BELONGS", "That red bike", "Tom.", ["belongs to"], "belong to sb"],
      ["Spiders frighten my little brother.", "SCARED", "My little brother", "spiders.", ["is scared of", "gets scared of"], "be scared of"],
      ["Managing the IT department is Mario's job.", "RESPONSIBLE", "Mario", "managing the IT department.", ["is responsible for"], "be responsible for + -ing"],
      ["I've had enough of eating pasta every day.", "FED", "I'm", "pasta every day.", ["fed up with eating", "fed up of eating"], "be fed up with + -ing"],
      ["She never said sorry for losing my book.", "APOLOGISED", "She never", "my book.", ["apologised for losing", "apologised to me for losing"], "apologise for + -ing"],
      ["The film and the novel are not the same.", "DIFFERENT", "The film", "the novel.", ["is different from", "is different to"], "be different from"],
      ["Whenever I see Luca, I think of his father.", "REMINDS", "Luca", "his father.", ["reminds me of"], "remind sb of sb"],
      ["Mountain climbing doesn't interest me much.", "INTERESTED", "I'm not very", "mountain climbing.", ["interested in"], "be interested in"],
      ["They managed to find a cheaper flat in the end.", "SUCCEEDED", "In the end, they", "a cheaper flat.", ["succeeded in finding"], "succeed in + -ing"],
      ["My grandparents got married in 1965 and are still together.", "MARRIED", "My grandparents", "each other since 1965.", ["have been married to"], "have been married to sb since… (present perfect for a situation that continues)"],
      ["You can trust Elena completely – she always keeps her promises.", "RELY", "You", "Elena completely – she always keeps her promises.", ["can rely on", "can always rely on"], "rely on sb"]
    ] },
  { id: "pack-translate", source: "pack", type: "translate", belt: 3,
    title: "Translation: Italian → English", goal: "Translate each sentence using the word in brackets and the right preposition.",
    items: [
      ["Mi dispiace molto per quello che è successo ieri sera.", "sorry", ["sorry about", "sorry for"], "I'm really sorry about what happened last night.", "sorry about sth"],
      ["Stiamo ancora aspettando una risposta dall'università.", "wait", ["waiting for"], "We're still waiting for an answer from the university.", "wait for sth – present continuous"],
      ["Non vedo l'ora di iniziare il nuovo lavoro.", "look forward", ["looking forward to starting", "looking forward to beginning"], "I'm really looking forward to starting my new job.", "look forward to + -ing"],
      ["Mia madre è sempre stata molto gentile con i miei amici.", "kind", ["kind to"], "My mother has always been very kind to my friends.", "kind to sb – present perfect (è sempre stata)"],
      ["Il direttore era arrabbiato con noi perché eravamo arrivati in ritardo alla riunione.", "angry", ["angry with us"], "The director was angry with us because we had arrived late for the meeting.", "angry with a person; arrive late for a meeting"],
      ["Quando siamo arrivati a Londra, pioveva a dirotto.", "arrive", ["arrived in london"], "When we arrived in London, it was pouring with rain.", "arrive in + city"],
      ["Sei d'accordo con me su questo punto?", "agree", ["agree with me"], "Do you agree with me on this point?", "agree with sb on/about sth"],
      ["Molti studenti si preoccupano per gli esami di fine anno.", "worry", ["worry about", "are worried about", "get worried about"], "Many students worry about their end-of-year exams.", "worry about sth"],
      ["Ho fatto domanda per una borsa di studio all'Università di Edimburgo.", "apply", ["applied for"], "I've applied for a scholarship at the University of Edinburgh.", "apply for sth"],
      ["Non vado matto per la musica classica.", "keen", ["keen on classical music"], "I'm not keen on classical music.", "keen on sth"],
      ["Il successo del progetto dipende dalla collaborazione di tutti.", "depend", ["depends on"], "The success of the project depends on everyone's cooperation.", "depend on sth"],
      ["L'allenatrice era molto soddisfatta dei progressi della squadra.", "pleased", ["pleased with"], "The coach was very pleased with the team's progress.", "pleased with sth"]
    ] },
  { id: "pack-dialogues", source: "pack", type: "text", belt: 2,
    title: "Complete the dialogues", goal: "Three short conversations with fourteen gaps.",
    parts: [
      ["#", "Dialogue A – At the office"],
      ["Anna", "You look stressed. Is everything OK?"],
      ["Ben", "Not really. I'm a bit worried {1} tomorrow's presentation. The boss is relying {2} me to impress the new clients."],
      ["Anna", "Relax! You're brilliant {3} presentations."],
      ["Ben", "Thanks. I just hope the clients are pleased {4} our proposal."],
      ["#", "Dialogue B – Planning a weekend away"],
      ["Chiara", "So, what time do we arrive {5} Madrid on Friday?"],
      ["Dan", "The plane lands at six, so we should arrive {6} the hotel by seven."],
      ["Chiara", "Perfect. I'm so excited {7} this trip!"],
      ["Dan", "Me too. But I'm not paying {8} dinner again – it's your turn!"],
      ["Chiara", "Fine. But you can choose {9} the tapas bar and the seafood restaurant."],
      ["#", "Dialogue C – Family problems"],
      ["Ella", "Did you argue {10} your sister again last night?"],
      ["Fred", "Yes. This time we argued {11} who should walk the dog. Honestly, I'm tired {12} having the same fight every week."],
      ["Ella", "Why don't you talk {13} her {14} it calmly when you're both in a good mood?"]
    ],
    gaps: [
      [["about"], "worried about sth"], [["on"], "rely on sb"], [["at"], "brilliant at (like good at)"], [["with"], "pleased with sth"],
      [["in"], "arrive in a city"], [["at"], "arrive at a building"], [["about"], "excited about sth"], [["for"], "pay for sth"],
      [["between"], "choose between A and B"], [["with"], "argue with a person"], [["about"], "argue about a topic"], [["of"], "tired of + -ing"],
      [["to", "with"], "talk to sb"], [["about"], "talk about sth"]
    ] },
  { id: "pack-cloze", source: "pack", type: "text", belt: 3,
    title: "Open cloze: A new life in Dublin", goal: "A short story with twelve gaps: write one preposition in each.",
    parts: [
      ["", "When Giulia applied {1} a marketing job in Dublin, she never really believed she would get it. But two months later, she arrived {2} Ireland with two suitcases and a head full of plans. At first, everything seemed different {3} her life in Bologna. She was frightened {4} speaking English on the phone, and she often worried {5} making mistakes in meetings. Luckily, her colleagues were very kind {6} her. Her manager, Siobhan, was responsible {7} training new staff, and every Friday she made time to talk {8} Giulia about her progress. Slowly, Giulia became more confident. She started sharing a flat {9} two Irish women who were keen {10} hiking, and at weekends they explored the wild west coast together. A year later, Giulia is good {11} her job, and she has become very fond {12} her new city. She still misses real Italian coffee, of course – but she no longer feels homesick."]
    ],
    gaps: [
      [["for"], "apply for"], [["in"], "arrive in a country"], [["from", "to"], "different from"], [["of"], "frightened of + -ing"],
      [["about"], "worry about + -ing"], [["to"], "kind to sb"], [["for"], "responsible for + -ing"], [["to", "with"], "talk to sb about sth"],
      [["with"], "share sth with sb"], [["on"], "keen on + -ing"], [["at"], "good at"], [["of"], "fond of"]
    ] },
  { id: "pack-halves", source: "pack", type: "halves", belt: 2,
    title: "Match the sentence halves", goal: "Each ending starts with the preposition that the beginning needs.",
    left: [
      "I've never been very interested", "You can't always rely", "Excuse me, does this umbrella belong", "Liverpool is famous", "I'm so fed up",
      "My parents are constantly worrying", "My little sister is terrified", "Everyone stopped and smiled", "It's really hard to choose", "The British version of the TV show is quite different"
    ],
    right: [
      "about my brother's health.", "at the baby in the pram.", "between two excellent universities.", "for its music scene.", "from the American one.",
      "in fashion, to be honest.", "of the dark.", "on the buses in this town.", "to you?", "with this rainy weather."
    ],
    answers: ["f", "h", "i", "d", "j", "a", "g", "b", "c", "e"],
    why: ["interested in", "rely on", "belong to", "famous for", "fed up with", "worry about", "terrified of", "smile at", "choose between", "different from"] },
  { id: "pack-confused", source: "pack", type: "mc", belt: 2,
    title: "Easily confused combinations", goal: "Choose between two prepositions that are often confused.",
    items: [
      ["I'm really angry ___ my landlord – he still hasn't fixed the heating.", ["about", "with"], 1, "angry with a person"],
      ["Everyone in the town is angry ___ the new parking charges.", ["about", "with"], 0, "angry about a thing or situation"],
      ["We arrived ___ Edinburgh late on Sunday night.", ["at", "in"], 1, "arrive in a city"],
      ["We arrived ___ the station just as the train was leaving.", ["at", "in"], 0, "arrive at a specific place"],
      ["I had a big argument this morning – I argued ___ my flatmate for an hour.", ["about", "with"], 1, "argue with a person"],
      ["You're so good ___ languages – have you ever thought of becoming a translator?", ["at", "for"], 0, "good at = skilled in"],
      ["Walking to work is good ___ your health.", ["at", "for"], 1, "good for = beneficial"],
      ["Could you share this pizza ___ your brother, please?", ["with", "to"], 0, "share sth with sb"],
      ["She talked ___ the doctor about her headaches.", ["to", "about"], 0, "talk to sb about sth"],
      ["I much prefer tea ___ coffee.", ["to", "than"], 0, "prefer A to B (never ‘than’)"]
    ] }
]);
