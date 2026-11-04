/* =====================================================================
   Dependent Prepositions — original practice batteries written for Language Dojo.
   Same formats as data/practice-pack.js (see the notes at the top of that file).
   belt: 1 White · 2 Yellow · 3 Orange
   ===================================================================== */
window.DepPrep = window.DepPrep || {};
window.DepPrep.batteries = (window.DepPrep.batteries || []).concat([
  /* ================= WHITE BELT ================= */
  { id: "w-verbs-mc", source: "dojo", type: "mc", belt: 1,
    title: "First steps: everyday verbs", goal: "The most frequent verbs that need a preposition.",
    items: [
      ["Can you look ___ my plants while I’m on holiday?", ["after", "at", "for", "to"], 0, "look after = take care of"],
      ["I’m looking ___ my glasses. Have you seen them?", ["for", "after", "at", "on"], 0, "look for = try to find"],
      ["Look ___ this photo – it’s me when I was five!", ["at", "for", "to", "on"], 0, "look at = direct your eyes towards"],
      ["Shh! I’m listening ___ the news.", ["to", "at", "–", "for"], 0, "listen to sth (never ‘listen the news’)"],
      ["We waited ___ Sara for twenty minutes, but she didn’t come.", ["for", "–", "to", "at"], 0, "wait for sb"],
      ["How much did you pay ___ those trainers?", ["for", "–", "to", "on"], 0, "pay for sth you buy"],
      ["Does this bag belong ___ you?", ["to", "of", "at", "with"], 0, "belong to sb"],
      ["Can I talk ___ you for a minute?", ["to", "at", "on", "for"], 0, "talk to sb"],
      ["If you don’t understand, ask ___ help.", ["for", "–", "to", "about"], 0, "ask for sth"],
      ["Why are you laughing ___ me? What’s funny?", ["at", "to", "of", "on"], 0, "laugh at sb"],
      ["Our plans for the weekend depend ___ the weather.", ["on", "of", "from", "to"], 0, "depend on"],
      ["What happened ___ your phone? The screen is broken!", ["to", "at", "with", "for"], 0, "happen to sb / sth"]
    ] },
  { id: "w-adjectives-gap", source: "dojo", type: "gap", belt: 1,
    title: "First steps: adjectives", goal: "Common adjectives and the preposition that follows them.",
    items: [
      ["My brother is very good ___ drawing.", [["at"]], "good at"],
      ["Are you afraid ___ dogs?", [["of"]], "afraid of"],
      ["I’m interested ___ history and art.", [["in"]], "interested in"],
      ["Naples is famous ___ pizza.", [["for"]], "famous for"],
      ["We’re very proud ___ our daughter.", [["of"]], "proud of"],
      ["I’m tired ___ waiting. Let’s go!", [["of"]], "tired of + -ing"],
      ["Be kind ___ your little brother.", [["to"]], "kind to sb"],
      ["My new school is very different ___ my old one.", [["from", "to"]], "different from (BrE also ‘to’)"],
      ["The fridge is full ___ food.", [["of"]], "full of"],
      ["Hurry up – we’re late ___ school!", [["for"]], "late for"],
      ["Are you ready ___ the test?", [["for"]], "ready for"],
      ["Mum is worried ___ Grandma because she’s ill.", [["about"]], "worried about sb"]
    ] },
  { id: "w-halves", source: "dojo", type: "halves", belt: 1,
    title: "Everyday combinations", goal: "Match each beginning with its ending.",
    left: ["Thank you", "My little brother is scared", "We arrived", "I share a bedroom", "This jacket belongs",
      "Sofia is very good", "Don’t worry", "I’m really excited", "Could you look", "Everyone smiled"],
    right: ["about the test – it’s easy.", "after the baby for an hour?", "at me when I walked in.", "at playing the piano.", "about the party tomorrow!",
      "for your help.", "in Paris at midnight.", "of thunderstorms.", "to my sister.", "with my brother."],
    answers: ["f", "h", "g", "j", "i", "d", "a", "e", "b", "c"],
    why: ["thank sb for sth", "scared of", "arrive in a city", "share sth with sb", "belong to", "good at + -ing", "worry about", "excited about", "look after", "smile at sb"] },
  { id: "w-which-one", source: "dojo", type: "mc", belt: 1,
    title: "Which one?", goal: "Two possible prepositions: only one is correct.",
    items: [
      ["Swimming is good ___ your back.", ["for", "at"], 0, "good for = beneficial"],
      ["She’s really good ___ tennis.", ["at", "for"], 0, "good at = skilled"],
      ["We arrived ___ the airport two hours early.", ["at", "in"], 0, "arrive at a building or place"],
      ["They arrived ___ Spain yesterday.", ["in", "at"], 0, "arrive in a country"],
      ["I’m angry ___ my brother – he took my headphones.", ["with", "about"], 0, "angry with a person"],
      ["I’m angry ___ the price of the tickets.", ["about", "with"], 0, "angry about a thing"],
      ["I argue ___ my sister every day.", ["with", "about"], 0, "argue with a person"],
      ["We often argue ___ what to watch on TV.", ["about", "with"], 0, "argue about a topic"],
      ["I’m thinking ___ buying a new bike.", ["about", "at"], 0, "think about + -ing"],
      ["Can you wait ___ me after school?", ["for", "–"], 0, "wait for sb"],
      ["Please listen ___ the teacher.", ["to", "–"], 0, "listen to sb"],
      ["Who paid ___ the pizza?", ["for", "–"], 0, "pay for sth"]
    ] },

  /* ================= YELLOW BELT ================= */
  { id: "y-feelings-mc", source: "dojo", type: "mc", belt: 2,
    title: "Feelings and relationships", goal: "Adjectives that describe feelings and relationships.",
    items: [
      ["I’m not very keen ___ spicy food.", ["on", "of", "in", "for"], 0, "keen on"],
      ["She’s very fond ___ her old teacher.", ["of", "to", "with", "for"], 0, "fond of"],
      ["I’m fed up ___ doing the washing-up every night!", ["with", "of", "on", "at"], 0, "fed up with (informal BrE also ‘of’)"],
      ["He has always been very close ___ his brother.", ["to", "with", "of", "at"], 0, "close to sb"],
      ["Your bag is very similar ___ mine.", ["to", "with", "as", "of"], 0, "similar to"],
      ["My aunt is married ___ an Australian.", ["to", "with", "at", "by"], 0, "married to sb"],
      ["Don’t be rude ___ your grandmother!", ["to", "with", "for", "at"], 0, "rude to sb"],
      ["He’s jealous ___ his sister’s new phone.", ["of", "on", "for", "about"], 0, "jealous of"],
      ["I’m a bit nervous ___ my driving test.", ["about", "of", "for", "on"], 0, "nervous about"],
      ["We were surprised ___ the result of the match.", ["by", "of", "for", "on"], 0, "surprised by / at"],
      ["The fans were disappointed ___ the team’s performance.", ["with", "of", "on", "for"], 0, "disappointed with sth"],
      ["The teacher was very pleased ___ our project.", ["with", "of", "on", "for"], 0, "pleased with sth"]
    ] },
  { id: "y-verbs-gap", source: "dojo", type: "gap", belt: 2,
    title: "Verbs in context", goal: "Verbs + prepositions in realistic everyday situations.",
    items: [
      ["You can always rely ___ me if you need help.", [["on"]], "rely on sb"],
      ["Your laugh reminds me ___ my mother.", [["of"]], "remind sb of sb"],
      ["I prefer summer ___ winter.", [["to"]], "prefer A to B"],
      ["He spends all his money ___ video games.", [["on"]], "spend money on sth"],
      ["I’ve applied ___ a place at the summer camp.", [["for"]], "apply for"],
      ["The guests complained ___ the noise from the street.", [["about"]], "complain about sth"],
      ["I can’t concentrate ___ my homework with the TV on.", [["on"]], "concentrate on sth"],
      ["Have you heard ___ Luca since he moved to London?", [["from"]], "hear from sb = have news from them"],
      ["More than thirty schools took part ___ the competition.", [["in"]], "take part in"],
      ["She shared her sandwiches ___ the new girl.", [["with"]], "share sth with sb"],
      ["Do you believe ___ ghosts?", [["in"]], "believe in"],
      ["I can’t choose ___ pizza and pasta – they both look amazing!", [["between"]], "choose between A and B"]
    ] },
  { id: "y-errors", source: "dojo", type: "correct", belt: 2,
    title: "Spot the mistake", goal: "Find the wrong preposition and write the correct sentence.",
    items: [
      ["I’m very interested on science fiction.", ["I'm very interested in science fiction."], "interested in"],
      ["She’s married with a famous actor.", ["She's married to a famous actor."], "married to"],
      ["We arrived to Milan at nine o’clock.", ["We arrived in Milan at nine o'clock."], "arrive in a city (never ‘arrive to’)"],
      ["I’m not very good in maths.", ["I'm not very good at maths."], "good at"],
      ["This book is different of the film.", ["This book is different from the film.", "This book is different to the film."], "different from"],
      ["Can you explain me the difference of these two words?", ["Can you explain the difference between these two words?", "Can you explain to me the difference between these two words?"], "the difference between A and B; explain sth to sb (never ‘explain me’)"],
      ["My parents are very proud for me.", ["My parents are very proud of me."], "proud of"],
      ["He’s always complaining for the food.", ["He's always complaining about the food."], "complain about"],
      ["Thank you about the lovely present.", ["Thank you for the lovely present."], "thank sb for sth"],
      ["I spend a lot of time in social media.", ["I spend a lot of time on social media."], "spend time on sth (here: on social media)"]
    ] },
  { id: "y-nouns-mc", source: "dojo", type: "mc", belt: 2,
    title: "Nouns: first steps", goal: "Common nouns that are followed by a preposition.",
    items: [
      ["What’s the reason ___ your decision?", ["for", "of", "to", "about"], 0, "reason for"],
      ["I don’t know the answer ___ this question.", ["to", "of", "for", "at"], 0, "answer to"],
      ["What’s the difference ___ a crocodile and an alligator?", ["between", "from", "of", "among"], 0, "difference between A and B"],
      ["Thanks for the invitation ___ your party!", ["to", "for", "of", "at"], 0, "invitation to"],
      ["There’s a problem ___ the printer – it isn’t working.", ["with", "of", "to", "at"], 0, "problem with"],
      ["He has a big interest ___ old cars.", ["in", "for", "on", "of"], 0, "interest in"],
      ["She has a good relationship ___ her boss.", ["with", "to", "between", "of"], 0, "relationship with sb"],
      ["One advantage ___ this phone is the long battery life.", ["of", "for", "on", "to"], 0, "advantage of"],
      ["There’s no need ___ you to come early.", ["for", "of", "to", "at"], 0, "need for"],
      ["My fear ___ heights started when I was a child.", ["of", "for", "from", "to"], 0, "fear of"],
      ["Our school trip ___ London was amazing.", ["to", "in", "at", "for"], 0, "trip to a place"],
      ["The price ___ petrol has gone up again.", ["of", "for", "on", "to"], 0, "price of"]
    ] },

  /* ================= ORANGE BELT ================= */
  { id: "o-nouns-gap", source: "dojo", type: "gap", belt: 3,
    title: "Nouns + prepositions", goal: "Nouns in more formal contexts: news, work and society.",
    items: [
      ["Scientists are still looking for a solution ___ the problem of plastic in the oceans.", [["to"]], "solution to"],
      ["Investigators are trying to find the cause ___ the fire.", [["of"]], "cause of"],
      ["There has been a sharp increase ___ the number of people working from home.", [["in"]], "increase in"],
      ["The demand ___ electric bikes has doubled in two years.", [["for"]], "demand for"],
      ["Lack of sleep can have a serious effect ___ your concentration.", [["on"]], "effect on"],
      ["Her grandfather had a big influence ___ her decision to become a doctor.", [["on"]], "influence on"],
      ["The earthquake caused serious damage ___ several historic buildings.", [["to"]], "damage to"],
      ["Every student should have access ___ a computer at home.", [["to"]], "access to"],
      ["The project was cancelled because of a lack ___ funding.", [["of"]], "lack of"],
      ["His attitude ___ his colleagues has improved a lot.", [["to", "towards"]], "attitude to / towards"],
      ["We should all show more respect ___ other people’s opinions.", [["for"]], "respect for"],
      ["Do you have any experience ___ working in a team?", [["of", "in"]], "experience of / in"]
    ] },
  { id: "o-cloze", source: "dojo", type: "text", belt: 3,
    title: "Open cloze: My first summer job", goal: "Verbs, adjectives and nouns mixed in a short story.",
    parts: [
      ["", "Last summer I applied {1} a job at a seaside hotel. I had no experience {2} working in tourism, so I was quite nervous {3} the interview. Luckily, the manager wasn’t interested {4} my CV – she just wanted to know if I could deal {5} stressful situations. I got the job, and I was responsible {6} welcoming guests at reception. Some of them complained {7} everything: the size of the rooms, the weather, even the colour of the towels! But most were very kind {8} me, and some even congratulated me {9} my English. The best part was my relationship {10} the other staff: we shared everything {11} each other, from meals to jokes. By September, I was really proud {12} what I had achieved."]
    ],
    gaps: [
      [["for"], "apply for"], [["of", "in"], "experience of / in + -ing"], [["about"], "nervous about"], [["in"], "interested in"],
      [["with"], "deal with"], [["for"], "responsible for + -ing"], [["about"], "complain about"], [["to"], "kind to sb"],
      [["on"], "congratulate sb on sth"], [["with"], "relationship with sb"], [["with"], "share sth with sb"], [["of"], "proud of"]
    ] },
  { id: "o-errors", source: "dojo", type: "correct", belt: 3,
    title: "Advanced error correction", goal: "Less frequent but very useful combinations: find and correct the mistake.",
    items: [
      ["My uncle insisted to pay for everyone’s dinner.", ["My uncle insisted on paying for everyone's dinner."], "insist on + -ing"],
      ["She has suffered of migraines since she was a teenager.", ["She has suffered from migraines since she was a teenager."], "suffer from"],
      ["The course consists in five modules and a final project.", ["The course consists of five modules and a final project."], "consist of"],
      ["Who is going to deal about the complaints?", ["Who is going to deal with the complaints?"], "deal with"],
      ["Most people aren’t aware about the risks.", ["Most people aren't aware of the risks."], "aware of"],
      ["I don’t think he’s capable to lie.", ["I don't think he's capable of lying."], "capable of + -ing"],
      ["The police accused him for stealing the car.", ["The police accused him of stealing the car."], "accuse sb of + -ing"],
      ["We congratulated them for their engagement.", ["We congratulated them on their engagement."], "congratulate sb on sth"],
      ["Many parents object against the new timetable.", ["Many parents object to the new timetable."], "object to"],
      ["The storm resulted to power cuts across the city.", ["The storm resulted in power cuts across the city."], "result in"],
      ["This shop specialises on handmade jewellery.", ["This shop specialises in handmade jewellery.", "This shop specializes in handmade jewelry.", "This shop specializes in handmade jewellery."], "specialise in"],
      ["It took her months to recover of the accident.", ["It took her months to recover from the accident."], "recover from"]
    ] },
  { id: "o-transform", source: "dojo", type: "transform", belt: 3,
    title: "Say it another way", goal: "Rewrite each sentence with a dependent preposition, using the word given.",
    items: [
      ["Paola is the person who looks after the finances.", "RESPONSIBLE", "Paola", "the finances.", ["is responsible for"], "be responsible for"],
      ["I know about the problem.", "AWARE", "I", "the problem.", ["am aware of", "'m aware of"], "be aware of"],
      ["He always wants to drive, whatever we say.", "INSISTS", "He always", "driving, whatever we say.", ["insists on"], "insist on + -ing"],
      ["My grandmother has back problems.", "SUFFERS", "My grandmother", "back problems.", ["suffers from"], "suffer from"],
      ["I really want to see you again soon.", "FORWARD", "I’m really", "you again soon.", ["looking forward to seeing"], "look forward to + -ing"],
      ["The team has twelve players.", "CONSISTS", "The team", "twelve players.", ["consists of"], "consist of"],
      ["Getting up early isn’t a problem for me any more.", "USED", "I’m", "up early now.", ["used to getting"], "be used to + -ing"],
      ["Why did the train stop?", "REASON", "What was the", "the train stopping?", ["reason for"], "reason for"],
      ["She managed to pass the exam at her first attempt.", "SUCCEEDED", "She", "the exam at her first attempt.", ["succeeded in passing"], "succeed in + -ing"],
      ["The people of the two towns don’t get on well.", "RELATIONSHIP", "The", "the two towns is not good.", ["relationship between"], "relationship between A and B"]
    ] }
]);
