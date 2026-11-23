/* Relative Clauses — configuration and lessons (A2–B2).
   Lesson format: see english/basics/data/lessons.js. Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "Relative clauses give more information about a person, a thing, a place or a time, without starting a new sentence: the girl who lives next door · the book that I'm reading · the town where I was born. Each lesson shows the forms, the uses with examples and Italian translations, the typical mistakes of Italian speakers, and practice of increasing difficulty.",
  lessonsLead: "Each lesson covers one group of relative words or one type of relative clause: form and structure, main uses, common mistakes, comparisons and a short writing task.",
  groups: [["defining", "Defining relative clauses"], ["more", "Non-defining clauses and more"]],
  levels: { 2: "Who, which and that", 3: "Leaving out the pronoun, whose, where, when", 4: "Non-defining clauses, prepositions, which for a whole sentence, what" },
  reviewTitle: "Mixed Relative Clauses",
  instr: {
    gap: "Complete the sentences with the correct relative word.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== DEFINING RELATIVE CLAUSES ============================== */
L({ id: "who-which", group: "defining", belt: 2, title: "Who, which, that", short: "The man who lives next door · The book which / that I bought",
  intro: "A defining relative clause says which person or thing we mean. Without it the sentence is incomplete or unclear. The relative pronoun is [who] for people, [which] for things and animals, and [that] for both.",
  form: [
    "People: [who] or [that]: The girl [who / that] sits next to me is from Spain.",
    "Things and animals: [which] or [that]: The bus [which / that] goes to the airport is the 52. That is more common in speaking.",
    "The relative pronoun replaces the subject or the object: do not repeat it: The film [that] I saw ~~it~~ was great.",
    "No commas in defining relative clauses.",
    "Italian ‘che’ = who / which / that; ‘il quale’ is not used in everyday English."
  ],
  table: [["For", "Relative pronoun", "Example"],
    ["people", "who, that", "The man who called you is my uncle."],
    ["things, animals", "which, that", "The phone which I bought is broken."],
    ["the subject of the clause", "who / which / that + verb", "The woman who works here is very kind."],
    ["the object of the clause", "who / which / that + subject + verb", "The cake that you made was delicious."]],
  uses: [
    ["People", "", [["The boy [who] won the race is my cousin.", "Il ragazzo che ha vinto la gara è mio cugino."], ["I've got a friend [who] speaks five languages.", "Ho un amico che parla cinque lingue."]]],
    ["Things and animals", "", [["This is the book [which] changed my life.", "Questo è il libro che mi ha cambiato la vita."], ["We've got a dog [that] loves water.", "Abbiamo un cane che adora l'acqua."]]],
    ["That for people and things", "", [["The man [that] I spoke to was very helpful.", "L'uomo con cui ho parlato è stato molto disponibile."], ["Is this the train [that] goes to Verona?", "È questo il treno che va a Verona?"]]],
    ["Defining people and things", "Without the clause we wouldn't know who or what.", [["A dentist is a person [who] looks after your teeth.", "Il dentista è una persona che si prende cura dei tuoi denti."], ["A fridge is a machine [which] keeps food cold.", "Il frigorifero è un apparecchio che tiene il cibo al fresco."]]]
  ],
  mistakes: [
    ["The girl which sits next to me is Spanish.", "The girl who sits next to me is Spanish.", "People: [who] (or that)."],
    ["The book who I'm reading is great.", "The book which I'm reading is great.", "Things: [which] (or that)."],
    ["The film that I saw it was boring.", "The film that I saw was boring.", "Don't repeat the object: the pronoun already replaces it."],
    ["The man what lives here is a doctor.", "The man who lives here is a doctor.", "What is not a relative pronoun after a noun: [who]."],
    ["She's the woman who she teaches us maths.", "She's the woman who teaches us maths.", "Who is already the subject."]
  ],
  contrasts: [
    ["Who or which?", "", [["who", "the friend [who] helped me", "l'amico che mi ha aiutato", "People."], ["which", "the app [which] helped me", "l'app che mi ha aiutato", "Things."]]]
  ],
  task: ["Write five definitions of people, places or things, like a dictionary, using who, which or that.",
    ["A pilot is a person who flies planes.", "A library is a place which has lots of books you can borrow.", "A teacher is someone who helps you learn.", "A charger is a thing that gives power to your phone.", "A neighbour is a person who lives near you."]] });

L({ id: "omit", group: "defining", belt: 3, title: "Leaving out who, which and that", short: "The film (that) I saw · The man (who) I met",
  intro: "In defining relative clauses, we can leave out who, which or that when it is the [object] of the clause. When it is the [subject], we must keep it.",
  form: [
    "Object pronoun: it can be left out: The book [(that)] I'm reading is great. The people [(who)] we met were friendly.",
    "How to recognise it: after the pronoun there is a new subject (I, we, my sister…).",
    "Subject pronoun: it cannot be left out: The man [who] lives next door is a pilot (not ~~The man lives next door is a pilot~~).",
    "Leaving out the pronoun is very common in speaking and informal writing."
  ],
  table: [["Function", "Can you leave it out?", "Example"],
    ["subject (+ verb)", "no", "The girl who called is my sister."],
    ["object (+ subject + verb)", "yes", "The girl (who) I called is my sister."]],
  uses: [
    ["Object: optional", "", [["The pizza [(that)] we had last night was amazing.", "La pizza che abbiamo mangiato ieri sera era buonissima."], ["Who's the girl [(who)] you were talking to?", "Chi è la ragazza con cui stavi parlando?"]]],
    ["Subject: necessary", "", [["The bus [that] stops here goes to the hospital.", "L'autobus che ferma qui va all'ospedale."], ["I know someone [who] can help you.", "Conosco qualcuno che può aiutarti."]]]
  ],
  mistakes: [
    ["The man lives next door is a pilot.", "The man who lives next door is a pilot.", "Subject: the pronoun is necessary."],
    ["The film I saw it was great.", "The film I saw was great.", "Don't repeat the object."],
    ["Is this the bus goes to the station?", "Is this the bus that goes to the station?", "Subject: [that] is necessary."],
    ["The people who we met them were nice.", "The people we met were nice.", "Don't repeat the object."]
  ],
  contrasts: [
    ["Subject or object?", "", [["Subject: keep it", "The teacher [who] gave us the test is strict.", "L'insegnante che ci ha dato la verifica è severo.", "who + verb"], ["Object: leave it out", "The test [(that)] the teacher gave us was hard.", "La verifica che ci ha dato l'insegnante era difficile.", "that + subject + verb"]]]
  ],
  task: ["Write five sentences about your favourite things (a song, a film, a place, a person, a gift) leaving out the relative pronoun where you can.",
    ["The song I listen to most is by a band from Manchester.", "The best film I've seen this year is a Japanese cartoon.", "The place I like most in my town is the old bridge.", "The person I admire most is my grandmother.", "The best present I've ever received is my bike."]] });

L({ id: "whose-where", group: "defining", belt: 3, title: "Whose, where, when, why", short: "The boy whose dad is a pilot · The town where I was born",
  intro: "[whose] shows possession; [where] refers to a place, [when] to a time and [why] to a reason.",
  form: [
    "[whose] + noun (possession), for people and things: The girl [whose] bike was stolen is very upset. (= her bike)",
    "[where] = in / at which (places): That's the café [where] we met.",
    "[when] = the time at which: I remember the day [when] I got my first phone.",
    "[the reason why]: That's [the reason why] I'm late.",
    "Whose is not who's: [whose] = di cui / il cui; [who's] = who is / who has."
  ],
  table: [["Word", "Refers to", "Example", "Italian"],
    ["whose", "possession", "the man whose car was stolen", "l'uomo la cui macchina…"],
    ["where", "a place", "the hotel where we stayed", "l'hotel dove siamo stati"],
    ["when", "a time", "the year when I was born", "l'anno in cui sono nato"],
    ["why", "a reason", "the reason why she left", "il motivo per cui se n'è andata"]],
  uses: [
    ["Whose", "", [["I have a friend [whose] mother is a famous singer.", "Ho un amico la cui madre è una cantante famosa."], ["That's the house [whose] roof was damaged in the storm.", "Quella è la casa il cui tetto è stato danneggiato dal temporale."]]],
    ["Where", "", [["This is the village [where] my grandparents live.", "Questo è il paese dove vivono i miei nonni."], ["Do you know a shop [where] I can buy cheap headphones?", "Conosci un negozio dove posso comprare delle cuffie economiche?"]]],
    ["When and why", "", [["Summer is the season [when] I'm happiest.", "L'estate è la stagione in cui sono più felice."], ["That's [the reason why] I don't eat meat.", "È per questo che non mangio carne."]]]
  ],
  mistakes: [
    ["The boy who's dad is a pilot is in my class.", "The boy whose dad is a pilot is in my class.", "Possession: [whose]."],
    ["That's the restaurant which we had dinner.", "That's the restaurant where we had dinner.", "A place: [where] (or which … in)."],
    ["This is the town where I was born in.", "This is the town where I was born.", "Where already means ‘in which’."],
    ["The man whose his car was stolen called the police.", "The man whose car was stolen called the police.", "Whose replaces his."]
  ],
  contrasts: [
    ["Where or which?", "[where] + subject + verb; [which] + verb, or which + subject + verb + preposition.", [["where", "the hotel [where] we stayed", "l'hotel dove siamo stati", "= in which"], ["which", "the hotel [which] has a pool · the hotel [which] we stayed in", "l'hotel che ha la piscina", "subject, or with a preposition"]]]
  ],
  task: ["Describe a place, a moment and a person that are important to you, using where, when and whose.",
    ["Lake Iseo is the place where I spend my summers.", "My grandparents have a house there whose garden goes down to the water.", "I'll never forget the day when I swam across the bay.", "My cousin, whose boat we use every summer, taught me to sail.", "That's the reason why I want to become a sailing instructor."]] });

/* ============================== NON-DEFINING CLAUSES AND MORE ============================== */
L({ id: "non-defining", group: "more", belt: 4, title: "Non-defining relative clauses", short: "My brother, who lives in Rome, is a chef",
  intro: "A non-defining relative clause adds extra information about someone or something we have already identified. The sentence is complete without it. It goes between commas.",
  form: [
    "Commas before (and after) the clause: My sister[,] who lives in London[,] is a nurse.",
    "Pronouns: [who] for people, [which] for things, [whose], [where], [when]. Never [that].",
    "The pronoun can never be left out, even when it is the object: The cake, [which] my mum made, was delicious.",
    "[which] can refer to a whole sentence: He passed all his exams, [which] surprised everyone.",
    "Non-defining clauses are typical of written English; in speaking we often use two sentences."
  ],
  table: [["", "Defining", "Non-defining"],
    ["meaning", "says which one", "adds extra information"],
    ["commas", "no", "yes"],
    ["that", "possible", "not possible"],
    ["leaving out the pronoun", "possible (object)", "never"]],
  uses: [
    ["Extra information about people", "", [["My grandmother, [who] is ninety, still drives.", "Mia nonna, che ha novant'anni, guida ancora."], ["Mr Riva, [whose] son is in my class, is a vet.", "Il signor Riva, il cui figlio è in classe mia, è veterinario."]]],
    ["Extra information about things and places", "", [["Venice, [where] my aunt lives, is full of tourists.", "Venezia, dove vive mia zia, è piena di turisti."], ["My phone, [which] I bought last year, is already broken.", "Il mio telefono, che ho comprato l'anno scorso, è già rotto."]]],
    ["Which for a whole sentence", "", [["The train was late, [which] meant we missed the start of the film.", "Il treno era in ritardo, il che ha voluto dire perdere l'inizio del film."], ["She didn't call me, [which] was strange.", "Non mi ha chiamato, il che era strano."]]]
  ],
  mistakes: [
    ["My brother, that lives in Rome, is a chef.", "My brother, who lives in Rome, is a chef.", "Non-defining: never that."],
    ["Paris, I visited last year, is beautiful.", "Paris, which I visited last year, is beautiful.", "Non-defining: the pronoun can't be left out."],
    ["He failed the test, what was a surprise.", "He failed the test, which was a surprise.", "A whole sentence: [which]."],
    ["My mother who is a doctor works at night.", "My mother, who is a doctor, works at night.", "Extra information about my mother (I've only got one): commas."]
  ],
  contrasts: [
    ["With or without commas?", "Commas change the meaning.", [["Defining", "My cousin [who] lives in Spain is a teacher.", "Mio cugino che vive in Spagna fa l'insegnante.", "I have several cousins: this one."], ["Non-defining", "My cousin[,] [who] lives in Spain[,] is a teacher.", "Mio cugino, che vive in Spagna, fa l'insegnante.", "I have one cousin; extra information."]]]
  ],
  task: ["Write a short paragraph (five sentences) about your town for a tourist website, with at least three non-defining relative clauses.",
    ["Brescia, which is about an hour from Milan, is a city with a long history.", "The Capitolium, which the Romans built in the first century, is in the old centre.", "Piazza della Loggia, where people meet in the evening, is the heart of the city.", "The castle, whose walls you can walk on, has a great view over the town.", "Lake Garda, which is only thirty minutes away, is perfect for a day trip."]] });

L({ id: "prep-what", group: "more", belt: 4, title: "Prepositions in relative clauses; what", short: "The person I spoke to · the person to whom I spoke · what I need",
  intro: "When a relative pronoun is the object of a preposition, the preposition usually goes at the end of the clause in everyday English. In formal English it goes before [which] or [whom]. [what] means ‘the thing(s) that’.",
  form: [
    "Informal: preposition at the end: the girl [(who)] I was talking [to] · the town [(that)] I come [from].",
    "Formal: preposition + [which / whom]: the person [to whom] I spoke · the town [from which] I come. Never preposition + that or who.",
    "[what] = the thing that / the things that: [What] I need is a holiday. I don't understand [what] you mean.",
    "What is never used after a noun: the thing [that] I need (not ~~the thing what I need~~)."
  ],
  table: [["Style", "Example", "Italian"],
    ["informal", "the girl I was talking to", "la ragazza con cui stavo parlando"],
    ["formal", "the girl to whom I was talking", "la ragazza con la quale stavo parlando"],
    ["what", "What I like most is the food.", "Quello che mi piace di più è il cibo."]],
  uses: [
    ["Prepositions at the end", "", [["Is this the key [(that)] you were looking [for]?", "È questa la chiave che stavi cercando?"], ["She's the person [(who)] I can always rely [on].", "È la persona su cui posso sempre contare."]]],
    ["Formal style", "", [["The committee [to which] the report was sent has not replied.", "La commissione a cui è stata inviata la relazione non ha risposto."], ["The candidate [with whom] we spoke was excellent.", "Il candidato con cui abbiamo parlato era eccellente."]]],
    ["What = the thing that", "", [["[What] I love about Italy is the food.", "Quello che amo dell'Italia è il cibo."], ["Tell me [what] happened.", "Dimmi che cosa è successo."]]]
  ],
  mistakes: [
    ["The thing what I need is time.", "The thing that I need is time.", "After a noun: [that] / which."],
    ["That's the girl with who I went to Paris.", "That's the girl I went to Paris with.", "Informal: preposition at the end (formal: with whom)."],
    ["The house in that I live is old.", "The house in which I live is old.", "After a preposition: [which], never that."],
    ["I don't understand that you're saying.", "I don't understand what you're saying.", "‘Quello che’ = [what]."],
    ["Which I like most is the beach.", "What I like most is the beach.", "‘Quello che’ = [what]."]
  ],
  contrasts: [
    ["What or that / which?", "", [["what", "[What] he said was true.", "Quello che ha detto era vero.", "No noun before it."], ["that / which", "The thing [that] he said was true.", "La cosa che ha detto era vera.", "After a noun."]]]
  ],
  task: ["Write five sentences about what you like and dislike: start some with ‘What I like most…’ and use relative clauses with a preposition at the end.",
    ["What I like most about my school is the people.", "My best friend is the person I can talk to about anything.", "The subject I'm most interested in is biology.", "What I really can't stand is waiting for the bus in the rain.", "The town I come from is small but very friendly."]] });
