/* Reported Speech — configuration and lessons (B1–B2).
   Lesson format: see english/basics/data/lessons.js. Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "Reported (indirect) speech tells what someone said without quoting the exact words: ‘I'm tired’ → She said (that) she was tired. Tenses, pronouns and time words often change, and questions and orders have their own patterns. Each lesson shows the forms, the uses with examples and Italian translations, the typical mistakes of Italian speakers, and practice of increasing difficulty.",
  lessonsLead: "Each lesson covers one part of reported speech: form and structure, main uses, common mistakes, comparisons and a short writing task.",
  groups: [["statements", "Reporting statements"], ["questions", "Questions, orders and reporting verbs"]],
  levels: { 3: "Say and tell, tense changes, pronouns and time words", 4: "Reported questions, orders and requests, reporting verbs" },
  reviewTitle: "Mixed Reported Speech",
  instr: {
    gap: "Complete the reported sentences with the correct form.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    rewrite: "Rewrite the sentences in reported speech. Start as shown.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== REPORTING STATEMENTS ============================== */
L({ id: "say-tell", group: "statements", belt: 3, title: "Say and tell; pronouns, time and place", short: "She said (that)… · He told me (that)… · today → that day",
  intro: "To report what someone said we normally use [say] or [tell]. Pronouns, possessives and words of time and place change to fit the new point of view.",
  form: [
    "[say] (+ that) + clause: She [said] (that) she was tired. With a person: [say to] someone: He said [to me] that…",
    "[tell] + person (+ that) + clause: She [told me] (that) she was tired. Tell always needs the person: ~~She told that…~~",
    "That is optional, and very often left out in speaking.",
    "Pronouns and possessives change: ‘[I] love [my] job,’ said Anna. → Anna said [she] loved [her] job.",
    "Time and place words change when the report is made later or somewhere else: now → [then], today → [that day], tomorrow → [the next day], yesterday → [the day before], next week → [the following week], ago → [before], here → [there], this → [that]."
  ],
  table: [["Direct speech", "Reported speech"],
    ["now", "then, at that time"], ["today", "that day"], ["tonight", "that night"], ["tomorrow", "the next day, the following day"],
    ["yesterday", "the day before, the previous day"], ["next week", "the following week"], ["last week", "the week before, the previous week"],
    ["two days ago", "two days before"], ["here", "there"], ["this / these", "that / those"]],
  uses: [
    ["Say", "", [["‘I'm hungry.’ → He [said] (that) he was hungry.", "«Ho fame.» → Ha detto che aveva fame."], ["She [said to me] that she was sorry.", "Mi ha detto che le dispiaceva."]]],
    ["Tell", "", [["She [told me] (that) she was moving to Dublin.", "Mi ha detto che si trasferiva a Dublino."], ["He [told us] the truth.", "Ci ha detto la verità."]]],
    ["Pronouns and time words", "", [["‘I'll see you tomorrow.’ → She said she [would see me the next day].", "«Ci vediamo domani.» → Ha detto che ci saremmo visti il giorno dopo."], ["‘I bought this here.’ → He said he had bought [that there].", "«L'ho comprato qui.» → Ha detto che l'aveva comprato lì."]]]
  ],
  mistakes: [
    ["She said me that she was tired.", "She told me that she was tired.", "Say + clause; [tell] + person: she told me."],
    ["He told that he was hungry.", "He said that he was hungry.", "Tell needs a person; without a person use [say]."],
    ["She told to me the news.", "She told me the news.", "Tell + person, without to."],
    ["‘I love my job,’ Anna said. → Anna said I loved my job.", "Anna said she loved her job.", "Change the pronouns: I → [she], my → [her]."],
    ["He said he would call me tomorrow. (reported a week later)", "He said he would call me the next day.", "Later: tomorrow → [the next day]."]
  ],
  contrasts: [
    ["Say or tell?", "", [["say", "She [said] (that) she was late. · She said hello.", "Ha detto che era in ritardo.", "No person, or say to + person."], ["tell", "She [told me] (that) she was late. · Tell me a story.", "Mi ha detto che era in ritardo.", "Always + person (no to)."]]]
  ],
  task: ["Think of a conversation you had yesterday. Report five things that people said to you, using say and tell.",
    ["My mum said she would be home late.", "My best friend told me she had a new boyfriend.", "My teacher said the test would be the next week.", "My brother told me he had lost his keys.", "The bus driver said that the bus was full."]] });

L({ id: "tenses", group: "statements", belt: 3, title: "Tense changes in reported speech", short: "‘I'm tired’ → She said she was tired",
  intro: "When the reporting verb is in the past (said, told), the tense of the reported verb usually moves one step back into the past: this is called [backshift]. Italian does something very similar (‘sono stanco’ → ha detto che era stanco).",
  form: [
    "present simple → [past simple]: ‘I [live] in Rome.’ → She said she [lived] in Rome.",
    "present continuous → [past continuous]: ‘I'm [working].’ → He said he [was working].",
    "past simple / present perfect → [past perfect]: ‘I [saw] it.’ / ‘I've [seen] it.’ → She said she [had seen] it.",
    "will → [would]; can → [could]; may → [might]; must → [had to] (or must).",
    "Past perfect, would, could, should, might don't change.",
    "No change is necessary when the reporting verb is in the present (She [says] she [is] tired), or when the situation is still true: He said he [lives / lived] in Milan (he still does)."
  ],
  table: [["Direct speech", "Reported speech", "Example"],
    ["present simple", "past simple", "‘I like it.’ → She said she liked it."],
    ["present continuous", "past continuous", "‘I'm leaving.’ → He said he was leaving."],
    ["past simple", "past perfect", "‘I lost it.’ → She said she had lost it."],
    ["present perfect", "past perfect", "‘I've finished.’ → He said he had finished."],
    ["will", "would", "‘I'll help.’ → She said she would help."],
    ["can", "could", "‘I can swim.’ → He said he could swim."],
    ["must", "had to (or must)", "‘I must go.’ → She said she had to go."]],
  uses: [
    ["Backshift", "", [["‘I don't like fish.’ → Tom said he [didn't like] fish.", "«Non mi piace il pesce.» → Tom ha detto che non gli piaceva il pesce."], ["‘We've finished.’ → They said they [had finished].", "«Abbiamo finito.» → Hanno detto che avevano finito."], ["‘I'll call you.’ → She said she [would call] me.", "«Ti chiamo io.» → Ha detto che mi avrebbe chiamato."]]],
    ["No change", "", [["Maria [says] she [is] coming. (present reporting verb)", "Maria dice che viene."], ["Our teacher said the Earth [goes] round the Sun. (always true)", "L'insegnante ha detto che la Terra gira intorno al Sole."]]]
  ],
  mistakes: [
    ["She said she is tired. (she isn't tired now)", "She said she was tired.", "Past reporting verb: [backshift]."],
    ["He said he will come.", "He said he would come.", "will → [would]."],
    ["They said they have finished.", "They said they had finished.", "present perfect → [past perfect]."],
    ["She said she can't come.", "She said she couldn't come.", "can → [could]."],
    ["He told he lost his phone.", "He said he had lost his phone.", "Say (no person); past simple → past perfect."]
  ],
  contrasts: [
    ["Would in reported speech", "Italian uses the condizionale passato for a future seen from the past; English uses [would] + base form.", [["Italian", "Ha detto che sarebbe venuto.", "", "condizionale passato"], ["English", "He said he [would come].", "", "would + base form"]]]
  ],
  task: ["Report five things that a famous person or a character in a film said. Use backshift.",
    ["In the interview, the singer said she was working on a new album.", "She said she had written most of the songs during the summer.", "She told the journalist that she would go on tour the following year.", "She said she couldn't wait to perform in Italy.", "She also said that she had never been so happy."]] });

/* ============================== QUESTIONS, ORDERS AND REPORTING VERBS ============================== */
L({ id: "questions", group: "questions", belt: 4, title: "Reported questions", short: "He asked me where I lived · She asked if I was ready",
  intro: "In reported questions the word order is the same as in a statement (subject + verb), and there is no do, does or did and no question mark. Tenses change as in reported statements.",
  form: [
    "Wh- questions: [asked] + question word + subject + verb: ‘Where do you live?’ → He asked me [where I lived].",
    "Yes / no questions: [if] or [whether] + subject + verb: ‘Are you ready?’ → She asked [if I was ready].",
    "No do / does / did: ‘What did you buy?’ → She asked me [what I had bought] (not ~~what did I buy~~).",
    "No question mark at the end.",
    "Polite indirect questions in the present follow the same order: Can you tell me [where the station is]? Do you know [if the shop is open]?"
  ],
  table: [["Direct question", "Reported question"],
    ["‘Where do you live?’", "He asked me where I lived."],
    ["‘What are you doing?’", "She asked me what I was doing."],
    ["‘Have you seen Tom?’", "He asked if I had seen Tom."],
    ["‘Will you help me?’", "She asked whether I would help her."],
    ["‘Can you swim?’", "He asked if I could swim."]],
  uses: [
    ["Wh- questions", "", [["‘How old are you?’ → She asked me [how old I was].", "«Quanti anni hai?» → Mi ha chiesto quanti anni avevo."], ["‘Why did you leave?’ → He asked [why I had left].", "«Perché te ne sei andato?» → Mi ha chiesto perché me ne ero andato."]]],
    ["Yes / no questions", "", [["‘Do you like jazz?’ → He asked me [if I liked] jazz.", "«Ti piace il jazz?» → Mi ha chiesto se mi piaceva il jazz."], ["‘Is it raining?’ → She asked [whether it was] raining.", "«Piove?» → Ha chiesto se pioveva."]]],
    ["Polite indirect questions", "", [["Could you tell me [what time the museum opens]?", "Mi saprebbe dire a che ora apre il museo?"], ["I wonder [if she's coming].", "Mi chiedo se verrà."]]]
  ],
  mistakes: [
    ["He asked me where did I live.", "He asked me where I lived.", "Statement order, no did."],
    ["She asked me what was my name.", "She asked me what my name was.", "Subject + verb: [my name was]."],
    ["He asked me do I like football.", "He asked me if I liked football.", "Yes / no question: [if] + statement order."],
    ["She asked if I was ready?", "She asked if I was ready.", "No question mark."],
    ["Can you tell me where is the station?", "Can you tell me where the station is?", "Indirect question: statement order."]
  ],
  contrasts: [
    ["Direct or indirect question?", "", [["Direct", "[Where is] the station?", "Dov'è la stazione?", "Question order."], ["Indirect", "Do you know [where the station is]?", "Sai dov'è la stazione?", "Statement order."]]]
  ],
  task: ["Imagine you had a job interview or a meeting with a new teacher. Report five questions they asked you.",
    ["She asked me how old I was.", "She asked me why I wanted the job.", "She asked if I had any experience with children.", "She wanted to know whether I could work at weekends.", "Finally, she asked me when I could start."]] });

L({ id: "orders-verbs", group: "questions", belt: 4, title: "Orders, requests and reporting verbs", short: "She told me to wait · He promised to call · She suggested going",
  intro: "Orders and requests are reported with [tell] / [ask] + person + [to]-infinitive. Many other reporting verbs (promise, offer, advise, suggest, apologise…) summarise what someone said, each with its own pattern.",
  form: [
    "Orders: [tell] + person + ([not]) [to] + verb: ‘Sit down!’ → She told me [to sit] down. ‘Don't shout!’ → He told us [not to shout].",
    "Requests: [ask] + person + ([not]) [to] + verb: ‘Please close the door.’ → He asked me [to close] the door.",
    "Verb + to: [agree, offer, promise, refuse, threaten]: He [promised to] call me.",
    "Verb + person + to: [advise, remind, warn, encourage, invite, persuade]: She [advised me to] rest.",
    "Verb + -ing: [suggest, admit, deny]: He [suggested going] by train. She [denied taking] the money.",
    "Verb + preposition + -ing: [apologise for], [insist on], [accuse someone of]: He [apologised for being] late."
  ],
  table: [["Pattern", "Verbs", "Example"],
    ["verb + to", "agree, offer, promise, refuse", "She offered to help."],
    ["verb + person + to", "tell, ask, advise, remind, warn, invite", "He reminded me to call."],
    ["verb + -ing", "suggest, admit, deny", "They suggested meeting at six."],
    ["verb + preposition + -ing", "apologise for, insist on, accuse of", "She apologised for being late."]],
  uses: [
    ["Orders and requests", "", [["‘Turn off your phones.’ → The teacher [told us to turn off] our phones.", "«Spegnete i telefoni.» → L'insegnante ci ha detto di spegnere i telefoni."], ["‘Could you help me?’ → She [asked me to help] her.", "«Mi aiuti?» → Mi ha chiesto di aiutarla."], ["‘Don't be late!’ → Mum [told me not to be] late.", "«Non fare tardi!» → La mamma mi ha detto di non fare tardi."]]],
    ["Promises, offers, refusals", "", [["‘I'll pay you back tomorrow.’ → He [promised to pay] me back.", "Ha promesso di restituirmi i soldi."], ["‘I'll carry your bag.’ → She [offered to carry] my bag.", "Si è offerta di portarmi la borsa."], ["‘I won't do it.’ → He [refused to do] it.", "Si è rifiutato di farlo."]]],
    ["Advice, reminders, warnings", "", [["‘You should see a doctor.’ → She [advised me to see] a doctor.", "Mi ha consigliato di andare dal medico."], ["‘Don't forget your keys.’ → He [reminded me to take] my keys.", "Mi ha ricordato di prendere le chiavi."]]],
    ["Suggestions, apologies, admissions", "", [["‘Let's take a taxi.’ → He [suggested taking] a taxi.", "Ha proposto di prendere un taxi."], ["‘I'm sorry I'm late.’ → She [apologised for being] late.", "Si è scusata per il ritardo."], ["‘Yes, I broke the window.’ → He [admitted breaking] the window.", "Ha ammesso di aver rotto la finestra."]]]
  ],
  mistakes: [
    ["She told me that I sit down.", "She told me to sit down.", "Orders: tell + person + [to]."],
    ["He said me to wait.", "He told me to wait.", "Say can't be followed by person + to: [told me to]."],
    ["She told me don't be late.", "She told me not to be late.", "Negative order: [not to]."],
    ["He suggested to go by train.", "He suggested going by train.", "suggest + [-ing] (or suggest that we went)."],
    ["She apologised to be late.", "She apologised for being late.", "apologise [for] + -ing."],
    ["He promised me calling.", "He promised to call me.", "promise + [to]."]
  ],
  contrasts: [
    ["Asked if or asked to?", "", [["ask if (a question)", "She [asked if] I could help.", "Mi ha chiesto se potevo aiutarla.", "A reported question."], ["ask … to (a request)", "She [asked me to] help her.", "Mi ha chiesto di aiutarla.", "A reported request."]]]
  ],
  task: ["Report five things that people told you to do, promised, suggested or apologised for this week, using a different reporting verb each time.",
    ["My coach told us to arrive at the gym ten minutes early.", "My sister promised to lend me her jacket for the party.", "My friend suggested going to the new pizzeria on Friday.", "My teacher reminded us to bring our dictionaries.", "My brother apologised for eating my chocolate."]] });
