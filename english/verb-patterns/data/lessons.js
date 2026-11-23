/* Verb Patterns — configuration and lessons (A2–B2).
   Lesson format: see english/basics/data/lessons.js. Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "When one verb follows another, English needs the right form: the -ing form (I enjoy reading), the to-infinitive (I want to go) or the base form (Let me help). The choice depends on the first verb, and a few verbs change meaning with the form. Each lesson shows the patterns, the uses with examples and Italian translations, the typical mistakes of Italian speakers, and practice of increasing difficulty.",
  lessonsLead: "Each lesson covers a group of verb patterns: form and structure, main uses, common mistakes, comparisons and a short writing task.",
  groups: [["basics", "Gerund or infinitive"], ["objects", "Objects and changes of meaning"], ["more", "Prepositions, adjectives and used to"]],
  levels: { 2: "Verbs followed by -ing or by to + infinitive", 3: "Verb + object + infinitive, make and let, prepositions and adjectives", 4: "Remember, forget, stop, try, regret, go on; used to and be used to" },
  reviewTitle: "Mixed Verb Patterns",
  instr: {
    gap: "Complete the sentences with the correct form of the verbs in brackets: -ing, to + infinitive or the base form.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== GERUND OR INFINITIVE ============================== */
L({ id: "ing", group: "basics", belt: 2, title: "Verbs followed by -ing", short: "Enjoy doing, finish doing, can't stand doing",
  intro: "Some verbs are followed by the [-ing form] of another verb (the gerund). Italian usually uses the infinitive in these cases (mi piace leggere), so this is a frequent source of mistakes.",
  form: [
    "Verb + [-ing]: I enjoy [reading]. She finished [doing] her homework.",
    "Common verbs: [enjoy, finish, mind, avoid, suggest, imagine, practise, miss, keep, spend (time), can't stand, don't mind, feel like].",
    "[like, love, hate, prefer] + -ing for general preferences (British English): I love [swimming]. (+ to-infinitive is also correct.)",
    "[would like / would love / would prefer] + to-infinitive: I'd like [to go] (not ~~I'd like going~~).",
    "Negative: [not] + -ing: Try to avoid [not sleeping] enough.",
    "The -ing form can also be the subject of a sentence: [Swimming] is good for you. (Italian: Nuotare fa bene.)",
    "Spelling: make → mak[ing], swim → swi[mming], lie → l[ying]."
  ],
  table: [["Verb", "Example", "Italian"],
    ["enjoy", "I enjoy cooking.", "Mi piace cucinare."],
    ["finish", "Have you finished eating?", "Hai finito di mangiare?"],
    ["mind", "Do you mind waiting?", "Ti dispiace aspettare?"],
    ["avoid", "Avoid using your phone while driving.", "Evita di usare il telefono mentre guidi."],
    ["suggest", "He suggested going to the cinema.", "Ha proposto di andare al cinema."],
    ["can't stand", "I can't stand waiting.", "Non sopporto aspettare."],
    ["feel like", "I don't feel like going out.", "Non ho voglia di uscire."],
    ["spend time", "She spends hours reading.", "Passa ore a leggere."]],
  uses: [
    ["Likes and dislikes", "", [["I [enjoy] [playing] the guitar.", "Mi piace suonare la chitarra."], ["My dad [can't stand] [waiting] in queues.", "Mio papà non sopporta fare la fila."], ["Do you [like] [dancing]?", "Ti piace ballare?"]]],
    ["Finishing, avoiding, suggesting", "", [["Have you [finished] [reading] that book?", "Hai finito di leggere quel libro?"], ["Try to [avoid] [eating] too much sugar.", "Cerca di evitare di mangiare troppi zuccheri."], ["Luca [suggested] [meeting] at the station.", "Luca ha proposto di vederci in stazione."]]],
    ["The -ing form as subject", "", [["[Learning] a language takes time.", "Imparare una lingua richiede tempo."], ["[Getting] up early is hard for me.", "Alzarmi presto per me è difficile."]]],
    ["Spend time / waste time + -ing", "", [["I [spent] the afternoon [studying].", "Ho passato il pomeriggio a studiare."], ["Don't [waste] time [complaining]!", "Non perdere tempo a lamentarti!"]], 3]
  ],
  mistakes: [
    ["I enjoy to read.", "I enjoy reading.", "enjoy + [-ing]."],
    ["Have you finished to eat?", "Have you finished eating?", "finish + [-ing]."],
    ["He suggested to go to the cinema.", "He suggested going to the cinema.", "suggest + [-ing] (or suggest that we go)."],
    ["Do you mind to wait?", "Do you mind waiting?", "mind + [-ing]."],
    ["Swim is good for you.", "Swimming is good for you.", "As subject: the [-ing] form."],
    ["I'd like going to Paris.", "I'd like to go to Paris.", "would like + [to]-infinitive."],
    ["I don't feel like to go out.", "I don't feel like going out.", "feel like + [-ing]."]
  ],
  contrasts: [
    ["Like doing or would like to do?", "", [["like + -ing", "I [like] [swimming].", "Mi piace nuotare.", "In general."], ["would like + to", "I['d like] [to swim] now.", "Vorrei nuotare adesso.", "A wish for now or for a specific time."]]]
  ],
  task: ["Write five sentences about your free time: what you enjoy doing, what you can't stand doing, what you spend time doing and what you feel like doing this weekend.",
    ["I really enjoy playing volleyball with my friends.", "I can't stand getting up early on Sundays.", "I spend a lot of time listening to music.", "I don't mind doing the washing-up, but I hate ironing.", "This weekend I feel like going to the cinema."]] });

L({ id: "to-inf", group: "basics", belt: 2, title: "Verbs followed by to + infinitive", short: "Want to go, decide to stay, hope to see you",
  intro: "Many verbs are followed by [to] + the base form of another verb. To + infinitive is also used to say why we do something (purpose).",
  form: [
    "Verb + [to] + infinitive: I want [to go]. We decided [to stay].",
    "Common verbs: [want, would like, need, decide, hope, plan, learn, promise, agree, refuse, offer, manage, afford, seem, expect, forget, try].",
    "Negative: [not to] + infinitive: She decided [not to] come.",
    "Purpose (why): [to] + infinitive: I went to the shop [to buy] some bread. Not: ~~for buy~~.",
    "Question word + to: I don't know [what to] say. Can you show me [how to] do it?"
  ],
  table: [["Verb", "Example", "Italian"],
    ["want", "I want to learn Spanish.", "Voglio imparare lo spagnolo."],
    ["decide", "We decided to leave early.", "Abbiamo deciso di partire presto."],
    ["hope", "I hope to see you soon.", "Spero di vederti presto."],
    ["promise", "He promised to help me.", "Ha promesso di aiutarmi."],
    ["refuse", "She refused to answer.", "Si è rifiutata di rispondere."],
    ["manage", "I managed to finish on time.", "Sono riuscito a finire in tempo."],
    ["can't afford", "We can't afford to buy a car.", "Non possiamo permetterci di comprare una macchina."]],
  uses: [
    ["Wishes, plans and decisions", "", [["I [want] [to study] medicine.", "Voglio studiare medicina."], ["We['re planning] [to visit] Scotland next summer.", "Abbiamo in programma di visitare la Scozia l'estate prossima."], ["She [decided] [not to] go to the party.", "Ha deciso di non andare alla festa."]]],
    ["Promises, refusals and offers", "", [["He [promised] [to call] me.", "Ha promesso di chiamarmi."], ["My brother [refused] [to help] me.", "Mio fratello si è rifiutato di aiutarmi."], ["Paolo [offered] [to drive] us home.", "Paolo si è offerto di accompagnarci a casa."]]],
    ["Purpose: why", "", [["I'm saving money [to buy] a new bike.", "Sto risparmiando per comprare una bici nuova."], ["She went to London [to learn] English.", "È andata a Londra per imparare l'inglese."]]],
    ["Question word + to", "", [["I don't know [what to] do.", "Non so che cosa fare."], ["Can you tell me [how to] get to the station?", "Mi sa dire come arrivare alla stazione?"]], 3]
  ],
  mistakes: [
    ["I want go home.", "I want to go home.", "want + [to]."],
    ["We decided going by train.", "We decided to go by train.", "decide + [to]."],
    ["I went to the shop for buy some milk.", "I went to the shop to buy some milk.", "Purpose: [to] + infinitive, not for."],
    ["She promised calling me.", "She promised to call me.", "promise + [to]."],
    ["I hope seeing you soon.", "I hope to see you soon.", "hope + [to]."],
    ["He decided to not come.", "He decided not to come.", "Negative: [not to] + infinitive."],
    ["I don't know what say.", "I don't know what to say.", "Question word + [to]."]
  ],
  contrasts: [
    ["To or for?", "To say why someone does something, use [to] + verb; use [for] + noun.", [["to + verb", "I came here [to study].", "Sono venuto qui per studiare.", "Purpose with a verb."], ["for + noun", "I came here [for] the course.", "Sono venuto qui per il corso.", "Purpose with a noun."]]]
  ],
  task: ["Write five sentences about your plans for the future. Use want, hope, decide, plan and need + to.",
    ["After school I want to study engineering.", "I hope to spend a year abroad, maybe in Ireland.", "I've decided to learn to drive next year.", "My friends and I are planning to go camping in the summer.", "First, I need to pass my exams!"]] });

/* ============================== OBJECTS AND CHANGES OF MEANING ============================== */
L({ id: "object-inf", group: "objects", belt: 3, title: "Verb + object + infinitive; make and let", short: "I want you to come · They made me wait · Let me help",
  intro: "Some verbs are followed by an object (a person) and then [to] + infinitive. [make] and [let] are followed by an object and the infinitive [without to].",
  form: [
    "Verb + object + [to] + infinitive: I want [you to come]. She asked [me to help] her.",
    "Common verbs: [want, would like, ask, tell, expect, allow, advise, remind, invite, teach, encourage].",
    "Not a that-clause after want: I want [you to come] (not ~~I want that you come~~).",
    "[make] + object + base form (obligation): My parents [make me tidy] my room.",
    "[let] + object + base form (permission): My parents [let me stay] out until ten.",
    "[help] + object + base form or to + infinitive: Can you [help me carry / to carry] this?",
    "Passive of make: be made [to] do: I [was made to] wait for an hour."
  ],
  table: [["Pattern", "Example", "Italian"],
    ["want + object + to", "I want you to listen.", "Voglio che tu ascolti."],
    ["ask / tell + object + to", "She told me to sit down.", "Mi ha detto di sedermi."],
    ["make + object + verb", "He made me laugh.", "Mi ha fatto ridere."],
    ["let + object + verb", "Let me explain.", "Lasciami spiegare."],
    ["help + object + (to) verb", "I helped her (to) move house.", "L'ho aiutata a traslocare."]],
  uses: [
    ["Wanting and asking", "", [["My mum [wants me to] become a doctor.", "Mia mamma vuole che io diventi medico."], ["The teacher [told us to] open our books.", "L'insegnante ci ha detto di aprire i libri."], ["Can I [ask you to] close the door?", "Posso chiederti di chiudere la porta?"]]],
    ["Allowing, advising, reminding", "", [["The school doesn't [allow students to] use phones.", "La scuola non permette agli studenti di usare il telefono."], ["The doctor [advised him to] rest.", "Il medico gli ha consigliato di riposare."], ["[Remind me to] buy some milk.", "Ricordami di comprare il latte."]]],
    ["Make and let", "", [["That film [made me cry].", "Quel film mi ha fatto piangere."], ["My dad [let me drive] his car.", "Mio papà mi ha lasciato guidare la sua macchina."], ["[Let's] go! (= let us go)", "Andiamo!"]]]
  ],
  mistakes: [
    ["I want that you come with me.", "I want you to come with me.", "want + object + [to]."],
    ["She told me sit down.", "She told me to sit down.", "tell + object + [to]."],
    ["My parents make me to study every day.", "My parents make me study every day.", "make + object + verb, without to."],
    ["Let me to help you.", "Let me help you.", "let + object + verb, without to."],
    ["He asked to me to wait.", "He asked me to wait.", "ask + object (no to before the person)."],
    ["They don't let us using our phones.", "They don't let us use our phones.", "let + object + base form."]
  ],
  contrasts: [
    ["Make or let?", "", [["make", "My mum [makes me] do my homework.", "Mia mamma mi fa fare i compiti.", "Obligation: I have to."], ["let", "My mum [lets me] watch TV after dinner.", "Mia mamma mi lascia guardare la TV dopo cena.", "Permission: I'm allowed to."]]]
  ],
  task: ["Write five sentences about the rules at home or at school. Use make, let, want … to, tell … to and allow … to.",
    ["My parents make me do the washing-up every evening.", "They let me go out with my friends on Saturday.", "My mum wants me to be home by eleven.", "Our teachers tell us to switch off our phones in class.", "The school doesn't allow us to leave during the break."]] });

L({ id: "meaning-change", group: "objects", belt: 4, title: "Remember, forget, stop, try, regret, go on", short: "Verbs that change meaning with -ing or to",
  intro: "A few verbs can be followed by both the -ing form and the to-infinitive, but with a different meaning. The -ing form usually looks back at an action; the to-infinitive looks forward to it.",
  form: [
    "[remember / forget + -ing]: a memory of a past action: I remember [meeting] her. I'll never forget [seeing] the sea for the first time.",
    "[remember / forget + to]: an action we must do: Remember [to lock] the door. I forgot [to call] you.",
    "[stop + -ing]: no longer do something: I stopped [eating] meat. [stop + to]: stop one action in order to do another: We stopped [to eat].",
    "[try + -ing]: do something as an experiment: Try [drinking] some water. [try + to]: make an effort: I tried [to open] the door, but it was locked.",
    "[regret + -ing]: be sorry about the past: I regret [saying] that. [regret + to]: formal, for bad news: We regret [to inform] you…",
    "[go on + -ing]: continue the same action. [go on + to]: move on to something new: After school she went on [to study] law."
  ],
  table: [["Verb", "+ -ing", "+ to + infinitive"],
    ["remember", "a memory: I remember meeting her.", "a duty: Remember to call her."],
    ["forget", "a memory: I'll never forget meeting her.", "a duty not done: I forgot to call her."],
    ["stop", "end an action: He stopped smoking.", "a reason: He stopped to smoke."],
    ["try", "an experiment: Try restarting it.", "an effort: I tried to lift it."],
    ["regret", "sorry about the past: I regret leaving.", "bad news (formal): We regret to say…"],
    ["go on", "continue: She went on talking.", "next step: She went on to become a judge."]],
  uses: [
    ["Remember and forget", "", [["I [remember going] to the beach with my grandad.", "Mi ricordo di quando andavo al mare con il nonno."], ["[Remember to bring] your passport!", "Ricordati di portare il passaporto!"], ["Sorry, I [forgot to buy] the bread.", "Scusa, mi sono dimenticato di comprare il pane."]]],
    ["Stop", "", [["My dad [stopped smoking] two years ago.", "Mio papà ha smesso di fumare due anni fa."], ["On the way home we [stopped to buy] an ice cream.", "Tornando a casa ci siamo fermati a comprare un gelato."]]],
    ["Try", "", [["If you can't sleep, [try drinking] some warm milk.", "Se non riesci a dormire, prova a bere un po' di latte caldo."], ["I [tried to call] you, but your phone was off.", "Ho cercato di chiamarti, ma avevi il telefono spento."]]],
    ["Regret and go on", "", [["I [regret not studying] harder at school.", "Mi pento di non aver studiato di più a scuola."], ["She [went on talking] for an hour.", "Ha continuato a parlare per un'ora."], ["After university he [went on to become] a famous chef.", "Dopo l'università è poi diventato uno chef famoso."]]]
  ],
  mistakes: [
    ["Remember locking the door when you go out!", "Remember to lock the door when you go out!", "A duty: remember + [to]."],
    ["I forgot calling you yesterday. Sorry!", "I forgot to call you yesterday. Sorry!", "A duty not done: forgot + [to]."],
    ["My uncle stopped to smoke last year. He feels much better.", "My uncle stopped smoking last year. He feels much better.", "End a habit: stop + [-ing]."],
    ["I remember to go to Disneyland when I was six.", "I remember going to Disneyland when I was six.", "A memory: remember + [-ing]."],
    ["Have you tried to restart it? It often helps.", "Have you tried restarting it? It often helps.", "An experiment: try + [-ing]."]
  ],
  contrasts: [
    ["Looking back or looking forward?", "", [["-ing (back)", "I remember [locking] the door. (I did it, and I remember it.)", "Mi ricordo di aver chiuso la porta.", "The action came first."], ["to (forward)", "I remembered [to lock] the door. (I remembered, then I did it.)", "Mi sono ricordato di chiudere la porta.", "The remembering came first."]]]
  ],
  task: ["Write five sentences: a childhood memory (remember + -ing), something you must not forget (remember + to), a habit you have stopped, and two pieces of advice with try + -ing.",
    ["I remember playing in the snow with my cousins when I was five.", "I must remember to buy a present for my mum's birthday.", "I stopped drinking fizzy drinks last year.", "If you can't concentrate, try switching off your phone.", "If you're nervous before a test, try breathing slowly."]] });

/* ============================== PREPOSITIONS, ADJECTIVES AND USED TO ============================== */
L({ id: "prep-ing", group: "more", belt: 3, title: "Prepositions and adjectives + -ing or to", short: "Good at swimming · Easy to understand · Look forward to seeing you",
  intro: "After a preposition, a verb is always in the [-ing form]. Many adjectives are followed by [to] + infinitive.",
  form: [
    "Preposition + [-ing]: interested [in learning], good [at swimming], tired [of waiting], [before going], [after eating], [without saying], [instead of studying].",
    "[to] is sometimes a preposition: [look forward to seeing] you, [be used to getting up] early. Here to + -ing.",
    "Adjective + [to] + infinitive: It's [easy to] use. I'm [happy to] help. She was [surprised to] see me.",
    "[It's + adjective + to] for general comments: [It's important to] sleep well. [It's difficult to] find a job."
  ],
  table: [["Pattern", "Example", "Italian"],
    ["adjective + preposition + -ing", "I'm good at drawing.", "Sono bravo a disegnare."],
    ["before / after + -ing", "Wash your hands before eating.", "Lavati le mani prima di mangiare."],
    ["without + -ing", "He left without saying goodbye.", "È andato via senza salutare."],
    ["look forward to + -ing", "I look forward to hearing from you.", "Attendo una Sua risposta."],
    ["adjective + to", "It's nice to meet you.", "Piacere di conoscerti."]],
  uses: [
    ["Adjectives with prepositions", "", [["She's really good [at] [cooking].", "È bravissima a cucinare."], ["I'm interested [in] [studying] abroad.", "Mi interessa studiare all'estero."], ["I'm tired [of] [waiting].", "Sono stanco di aspettare."]]],
    ["Before, after, without, instead of", "", [["[Before] [going] to bed, I read for half an hour.", "Prima di andare a letto leggo per mezz'ora."], ["He left [without] [saying] goodbye.", "È andato via senza salutare."], ["[Instead of] [studying], he played video games.", "Invece di studiare, ha giocato ai videogiochi."]]],
    ["Look forward to", "Typical at the end of letters and emails.", [["I [look forward to] [seeing] you in July.", "Non vedo l'ora di vederti a luglio."], ["We [look forward to] [hearing] from you.", "Restiamo in attesa di una Sua risposta."]]],
    ["Adjective + to", "", [["This app is [easy to] use.", "Questa app è facile da usare."], ["[It's important to] drink a lot of water.", "È importante bere molta acqua."], ["I was [sorry to] hear the news.", "Mi è dispiaciuto sentire la notizia."]]]
  ],
  mistakes: [
    ["I'm good at swim.", "I'm good at swimming.", "After a preposition: [-ing]."],
    ["She left without to say goodbye.", "She left without saying goodbye.", "without + [-ing]."],
    ["I look forward to see you.", "I look forward to seeing you.", "look forward to + [-ing]."],
    ["Before to go out, close the windows.", "Before going out, close the windows.", "before + [-ing]."],
    ["I'm interested to learn Japanese.", "I'm interested in learning Japanese.", "interested [in] + -ing."],
    ["This book is easy for read.", "This book is easy to read.", "Adjective + [to]."]
  ],
  contrasts: [
    ["Preposition or to-infinitive?", "", [["preposition + -ing", "I'm good [at speaking] English.", "Sono bravo a parlare inglese.", "after at, in, of, before, without…"], ["adjective + to", "English is easy [to speak].", "L'inglese è facile da parlare.", "after easy, happy, nice, important…"]]]
  ],
  task: ["Write a short email (five sentences) to a friend you are going to visit. Use good at, interested in, before / after + -ing, look forward to and an adjective + to.",
    ["Hi Emma! I'm so happy to hear that you can host me in July.", "I'm interested in visiting the castle and the old town.", "I'm not very good at cooking, but I can make you a real Italian pasta!", "Before leaving, I'll send you my flight details.", "I really look forward to seeing you!"]] });

L({ id: "used-to", group: "more", belt: 4, title: "Used to, be used to, get used to", short: "I used to play · I'm used to getting up early",
  intro: "[used to] + base form talks about past habits and states that are no longer true. [be used to] + -ing means ‘be accustomed to’; [get used to] + -ing means ‘become accustomed to’.",
  form: [
    "[used to] + base form: I [used to play] the piano (but I don't now).",
    "Negative: [didn't use to] + base form: I [didn't use to like] vegetables. Question: [Did] you [use to] …?",
    "Used to exists only in the past: for the present we use usually + present simple: I [usually walk] to school (not ~~I use to walk~~).",
    "[be used to] + noun or [-ing]: I'm used to [getting up] early (it's normal for me).",
    "[get used to] + noun or [-ing]: You'll soon get used to [driving] on the left (it will become normal)."
  ],
  table: [["Form", "Meaning", "Example"],
    ["used to + verb", "a past habit or state, now finished", "I used to live in Rome."],
    ["didn't use to + verb", "negative", "I didn't use to like coffee."],
    ["be used to + -ing", "be accustomed to", "I'm used to working at night."],
    ["get used to + -ing", "become accustomed to", "I'm getting used to living alone."]],
  uses: [
    ["Past habits and states", "", [["When I was a child, I [used to spend] every summer at my grandparents'.", "Da bambino passavo tutte le estati dai nonni."], ["There [used to be] a cinema here.", "Qui una volta c'era un cinema."], ["[Did] you [use to] have long hair?", "Una volta avevi i capelli lunghi?"]]],
    ["Be used to", "", [["I'm [used to] [getting] up at six.", "Sono abituato ad alzarmi alle sei."], ["She isn't [used to] the cold.", "Non è abituata al freddo."]]],
    ["Get used to", "", [["It took me a month to [get used to] [living] in London.", "Ci ho messo un mese ad abituarmi a vivere a Londra."], ["You'll [get used to] it!", "Ti ci abituerai!"]]]
  ],
  mistakes: [
    ["I use to go to the gym every day.", "I usually go to the gym every day.", "Present habits: [usually] + present simple."],
    ["I used to playing tennis when I was young.", "I used to play tennis when I was young.", "used to + [base form]."],
    ["I didn't used to like fish.", "I didn't use to like fish.", "After did: [use to]."],
    ["I'm used to get up early.", "I'm used to getting up early.", "be used to + [-ing]."],
    ["I can't get used to live here.", "I can't get used to living here.", "get used to + [-ing]."]
  ],
  contrasts: [
    ["Used to or be used to?", "", [["used to + verb", "I [used to work] at night.", "Una volta lavoravo di notte.", "A past habit, now finished."], ["be used to + -ing", "I'm [used to working] at night.", "Sono abituato a lavorare di notte.", "It's normal for me."]]]
  ],
  task: ["Write five sentences about how your life has changed: what you used to do, what you didn't use to do, what you are used to now and what you are getting used to.",
    ["When I was little, I used to be afraid of the dark.", "I used to play with dolls, but now I prefer basketball.", "I didn't use to like reading, but now I love it.", "I'm used to getting up at 6.30 for school.", "I'm still getting used to the new timetable at my high school."]] });
