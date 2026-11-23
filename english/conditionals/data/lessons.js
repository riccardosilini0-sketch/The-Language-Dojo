/* Conditionals — configuration and lessons (A2–B2).
   Lesson format: see english/basics/data/lessons.js. Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "Conditional sentences talk about real and imaginary situations and their results: if it rains, we'll stay at home · if I won the lottery, I'd travel · if I had studied, I would have passed. Each lesson shows the forms, the uses with examples and Italian translations, the typical mistakes of Italian speakers, and practice of increasing difficulty.",
  lessonsLead: "Each lesson covers one type of conditional or a group of related forms: form and structure, main uses, common mistakes, comparisons and a short writing task.",
  groups: [["real", "Real situations"], ["unreal", "Imaginary situations"], ["beyond", "Beyond if"]],
  levels: { 2: "Zero and first conditional, if and when", 3: "Second conditional, if I were you", 4: "Third and mixed conditionals, unless, in case, I wish, if only" },
  reviewTitle: "Mixed Conditionals",
  instr: {
    gap: "Complete the sentences with the correct form of the verbs in brackets.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== REAL SITUATIONS ============================== */
L({ id: "zero-first", group: "real", belt: 2, title: "Zero and first conditional", short: "If you heat ice, it melts · If it rains, we'll stay at home",
  intro: "The zero conditional talks about things that are always true. The first conditional talks about a real possibility in the future and its result. In both, the verb after [if] is in the present simple.",
  form: [
    "Zero conditional: [if + present simple, present simple]: If you [heat] ice, it [melts].",
    "First conditional: [if + present simple, will + base form]: If it [rains], we['ll stay] at home.",
    "Instead of will: an imperative or a modal: If you [see] Tom, [tell] him to call me. If you [finish] early, you [can] go.",
    "Never will after if: If it [rains] (not ~~If it will rain~~) – Italian uses the future (se pioverà), English doesn't.",
    "The if-clause can come first or second. When it comes first, we use a comma: [If] it's sunny[,] we'll go to the beach. · We'll go to the beach [if] it's sunny.",
    "[when] instead of if: when we are sure that something will happen: [When] I get home, I'll call you."
  ],
  table: [["Type", "If-clause", "Main clause", "Use"],
    ["Zero", "if + present simple", "present simple", "always true: facts, rules, habits"],
    ["First", "if + present simple", "will / imperative / can + base form", "a real possibility in the future"]],
  uses: [
    ["Zero: facts and general truths", "If means ‘every time’: we could also say when.", [["If you [mix] red and white, you [get] pink.", "Se mescoli il rosso e il bianco, ottieni il rosa."], ["If I [drink] coffee in the evening, I [can't] sleep.", "Se bevo caffè la sera, non riesco a dormire."]]],
    ["First: a real possibility", "", [["If we [hurry], we['ll catch] the train.", "Se ci sbrighiamo, prenderemo il treno."], ["If you [don't study], you [won't pass] the test.", "Se non studi, non passerai la verifica."]]],
    ["First: promises, warnings, threats", "", [["If you [help] me, I['ll buy] you a pizza.", "Se mi aiuti, ti offro una pizza."], ["If you [touch] that, you['ll burn] yourself!", "Se lo tocchi, ti scotti!"]]],
    ["If or when?", "[if] = maybe; [when] = I'm sure it will happen.", [["[If] I see Anna, I'll give her the book.", "Se vedo Anna, le darò il libro. (forse)"], ["[When] I see Anna tomorrow, I'll give her the book.", "Quando vedrò Anna domani, le darò il libro. (sicuro)"]], 3]
  ],
  mistakes: [
    ["If it will rain, we'll stay at home.", "If it rains, we'll stay at home.", "After if: present simple, not will."],
    ["When I will arrive, I'll call you.", "When I arrive, I'll call you.", "After when (future): present simple."],
    ["If you will help me, I help you.", "If you help me, I'll help you.", "if + present, [will] in the main clause."],
    ["If you heat water at 100°C, it will boil always.", "If you heat water to 100°C, it boils.", "A general truth: zero conditional, present + present."],
    ["If you don't hurry you'll miss the bus.", "If you don't hurry, you'll miss the bus.", "If-clause first: a comma."]
  ],
  contrasts: [
    ["Italian future, English present", "After if and when, Italian often uses the future; English uses the present simple.", [["Italian", "Se domani pioverà, resteremo a casa.", "", "Future after se."], ["English", "If it [rains] tomorrow, we['ll stay] at home.", "", "Present after if, will in the main clause."]]]
  ],
  task: ["Write five first conditional sentences about your plans for the weekend: what will you do if the weather is good, if it rains, if you have time, if your friends are free?",
    ["If it's sunny on Saturday, we'll go to Lake Garda.", "If it rains, I'll stay at home and watch a film.", "If I finish my homework early, I'll go to the gym.", "If my friends are free, we'll have a pizza together.", "When I get home on Sunday, I'll prepare my bag for Monday."]] });

/* ============================== IMAGINARY SITUATIONS ============================== */
L({ id: "second", group: "unreal", belt: 3, title: "Second conditional", short: "If I had more time, I would travel · If I were you…",
  intro: "The second conditional talks about imaginary or unlikely situations in the present or the future, and their results. The past simple after [if] doesn't refer to the past: it shows that the situation is not real.",
  form: [
    "[if + past simple, would + base form]: If I [had] more money, I['d buy] a new bike.",
    "Instead of would: [could] (= would be able to) or [might] (= would perhaps): If I had a car, I [could] drive to school.",
    "Be: [were] for all persons, especially in formal English: If I [were] rich… (If I was rich… is common in speaking).",
    "Advice: [If I were you], I['d] …: If I were you, I'd talk to her.",
    "Never would after if: If I [had] (not ~~If I would have~~) – Italian uses the subjunctive (se avessi), English the past simple.",
    "Contractions: I'd = I would, you'd, he'd…; wouldn't = would not."
  ],
  table: [["If-clause", "Main clause", "Italian"],
    ["if + past simple", "would + base form", "se + congiuntivo imperfetto, condizionale presente"],
    ["If I had time,", "I'd help you.", "Se avessi tempo, ti aiuterei."],
    ["If I were you,", "I wouldn't go.", "Se fossi in te, non ci andrei."]],
  uses: [
    ["Imaginary situations in the present", "The situation is not true now.", [["If I [lived] by the sea, I['d swim] every day.", "Se abitassi al mare, nuoterei tutti i giorni."], ["If I [knew] his number, I['d call] him.", "Se sapessi il suo numero, lo chiamerei."]]],
    ["Unlikely situations in the future", "", [["If I [won] the lottery, I['d travel] round the world.", "Se vincessi alla lotteria, farei il giro del mondo."], ["What [would] you [do] if you [met] a famous actor?", "Che cosa faresti se incontrassi un attore famoso?"]]],
    ["Advice: if I were you", "", [["[If I were you], I['d apologise].", "Se fossi in te, chiederei scusa."], ["I [wouldn't buy] that phone [if I were you].", "Se fossi in te, non comprerei quel telefono."]]],
    ["Could and might", "", [["If I [had] a car, I [could] give you a lift.", "Se avessi la macchina, potrei darti un passaggio."], ["If you [asked] her, she [might] say yes.", "Se glielo chiedessi, forse direbbe di sì."]], 4]
  ],
  mistakes: [
    ["If I would have more time, I would read more.", "If I had more time, I would read more.", "After if: past simple, not would."],
    ["If I am you, I would go.", "If I were you, I would go.", "Advice: [If I were you]."],
    ["If I had a dog, I will walk it every day.", "If I had a dog, I would walk it every day.", "Second conditional: [would]."],
    ["If I knew the answer, I tell you.", "If I knew the answer, I would tell you.", "Main clause: [would] + base form."],
    ["If I won the lottery, I would to buy a house.", "If I won the lottery, I would buy a house.", "No to after would."]
  ],
  contrasts: [
    ["First or second conditional?", "The difference is how real the situation is for the speaker.", [["First (possible)", "If I [have] time tomorrow, I['ll help] you.", "Se domani ho tempo, ti aiuto.", "I think I'll have time."], ["Second (unlikely / imaginary)", "If I [had] time, I['d help] you.", "Se avessi tempo, ti aiuterei.", "I haven't got time."]]]
  ],
  task: ["Answer the question ‘What would you do if you could change one thing in your town?’ in five sentences.",
    ["If I could change one thing, I'd build a big skatepark.", "If there were more cycle lanes, more people would cycle to school.", "If the buses ran later, we could go out in the evening.", "If I were the mayor, I'd close the centre to cars on Sundays.", "If people had more green spaces, they'd be happier."]] });

L({ id: "third", group: "unreal", belt: 4, title: "Third conditional", short: "If I had studied, I would have passed",
  intro: "The third conditional imagines a different past: something that did not happen, and its result. It is often used for regrets and criticism.",
  form: [
    "[if + past perfect, would have + past participle]: If I [had studied], I [would have passed].",
    "Instead of would have: [could have] or [might have]: If you had told me, I [could have helped] you.",
    "Contractions: If I['d known] (= had known), I['d have come] (= would have come). In the if-clause 'd = had; in the main clause 'd = would.",
    "Never would have after if: If I [had known] (not ~~If I would have known~~)."
  ],
  table: [["If-clause", "Main clause", "Italian"],
    ["if + past perfect", "would have + past participle", "se + congiuntivo trapassato, condizionale passato"],
    ["If I had left earlier,", "I wouldn't have missed the train.", "Se fossi partito prima, non avrei perso il treno."]],
  uses: [
    ["A different past", "", [["If we [had left] earlier, we [wouldn't have missed] the train.", "Se fossimo partiti prima, non avremmo perso il treno."], ["If it [hadn't rained], we [would have played] the match.", "Se non avesse piovuto, avremmo giocato la partita."]]],
    ["Regrets and criticism", "", [["If I['d listened] to you, I [wouldn't have made] that mistake.", "Se ti avessi ascoltato, non avrei fatto quell'errore."], ["If you [had told] me, I [would have helped] you!", "Se me l'avessi detto, ti avrei aiutato!"]]],
    ["Could have, might have", "", [["If you'd asked me, I [could have lent] you the money.", "Se me l'avessi chiesto, avrei potuto prestarti i soldi."], ["If we'd taken a taxi, we [might have arrived] on time.", "Se avessimo preso un taxi, forse saremmo arrivati in tempo."]]]
  ],
  mistakes: [
    ["If I would have known, I would have come.", "If I had known, I would have come.", "After if: past perfect."],
    ["If you had studied, you would pass.", "If you had studied, you would have passed.", "Past result: [would have] + past participle."],
    ["If I had saw him, I would have said hello.", "If I had seen him, I would have said hello.", "Past participle: [seen]."],
    ["If she had come, she would had enjoyed it.", "If she had come, she would have enjoyed it.", "[would have], not would had."],
    ["If we left earlier, we wouldn't have missed the bus.", "If we had left earlier, we wouldn't have missed the bus.", "A different past: [had left]."]
  ],
  contrasts: [
    ["Second or third?", "", [["Second (now)", "If I [had] a car, I['d drive] you home.", "Se avessi la macchina, ti accompagnerei a casa.", "Imaginary present."], ["Third (past)", "If I['d had] a car, I['d have driven] you home.", "Se avessi avuto la macchina, ti avrei accompagnato a casa.", "Imaginary past."]]]
  ],
  task: ["Think of something that went wrong in the past (a test, a trip, a match). Write five third conditional sentences about how it could have gone differently.",
    ["Last month I failed my history test.", "If I had started studying earlier, I would have remembered more dates.", "If I hadn't stayed up late watching a series, I wouldn't have been so tired.", "If I had asked my teacher for help, she would have explained the difficult parts.", "If I'd made a timetable, I could have revised everything."]] });

L({ id: "mixed", group: "unreal", belt: 4, title: "Mixed conditionals", short: "If I had studied medicine, I would be a doctor now",
  intro: "Mixed conditionals combine a second and a third conditional, because the condition and the result belong to different times.",
  form: [
    "Past condition → present result: [if + past perfect, would + base form]: If I [had taken] the job, I [would be] rich now.",
    "Present condition → past result: [if + past simple, would have + past participle]: If I [were] more organised, I [wouldn't have forgotten] your birthday.",
    "Time words often show the mix: [now], [today] in the result; [yesterday], [last year] in the condition."
  ],
  table: [["Condition", "Result", "Example"],
    ["past (had + participle)", "present (would + base form)", "If I'd slept more, I wouldn't be tired now."],
    ["present (past simple)", "past (would have + participle)", "If I spoke French, I'd have understood the film."]],
  uses: [
    ["A past event with a present result", "", [["If I [hadn't missed] the bus, I [would be] at school now.", "Se non avessi perso l'autobus, adesso sarei a scuola."], ["If she [had studied] medicine, she [would be] a doctor now.", "Se avesse studiato medicina, adesso sarebbe medico."]]],
    ["A present fact with a past result", "", [["If I [weren't] so shy, I [would have spoken] to her at the party.", "Se non fossi così timido, alla festa le avrei parlato."], ["If he [spoke] English, he [would have got] the job.", "Se parlasse inglese, avrebbe ottenuto il lavoro."]]]
  ],
  mistakes: [
    ["If I had slept more, I would have been less tired now.", "If I had slept more, I would be less tired now.", "Present result (now): [would be]."],
    ["If I would speak Spanish, I would have understood.", "If I spoke Spanish, I would have understood.", "After if: no would."],
    ["If she didn't miss the plane, she would be here now.", "If she hadn't missed the plane, she would be here now.", "Past condition: [hadn't missed]."]
  ],
  contrasts: [
    ["Third or mixed?", "Look at when the result is.", [["Third", "If I'd won, I['d have been] happy.", "Se avessi vinto, sarei stato felice.", "Result in the past."], ["Mixed", "If I'd won, I['d be] rich now.", "Se avessi vinto, adesso sarei ricco.", "Result now."]]]
  ],
  task: ["Write four mixed conditional sentences about choices in your life or in the life of someone you know.",
    ["If my parents hadn't moved to Brescia, I would live in Naples now.", "If I hadn't started playing the piano at six, I wouldn't be in the school orchestra.", "If I were more patient, I would have finished that puzzle.", "If my sister had chosen a different university, she would be closer to home."]] });

/* ============================== BEYOND IF ============================== */
L({ id: "unless-wish", group: "beyond", belt: 4, title: "Unless, in case, I wish, if only", short: "Other ways to express conditions and wishes",
  intro: "Other words can introduce a condition ([unless], [as long as], [provided that], [in case]), and [I wish] / [if only] express wishes and regrets with the same tenses as the second and third conditionals.",
  form: [
    "[unless] = if … not: [Unless] you hurry, you'll miss the bus (= If you don't hurry…).",
    "[as long as] / [provided (that)] = only if: You can borrow my bike [as long as] you bring it back tonight.",
    "[in case] = as a precaution, because something might happen: Take an umbrella [in case] it rains. In case is not the same as if.",
    "Present wish (I'd like the present to be different): [I wish / If only] + past simple: I wish I [had] more time. I wish I [were] taller.",
    "Past regret: [I wish / If only] + past perfect: I wish I [had studied] more.",
    "Annoyance, or a wish that someone would change: [I wish] + someone + [would]: I wish you [would stop] talking!"
  ],
  table: [["Form", "Meaning", "Example"],
    ["unless + present", "if … not", "Unless it rains, we'll play outside."],
    ["as long as / provided that", "only if", "You can go as long as you're home by ten."],
    ["in case + present", "as a precaution", "Take a jacket in case it gets cold."],
    ["I wish + past simple", "a wish about now", "I wish I lived by the sea."],
    ["I wish + past perfect", "a regret about the past", "I wish I hadn't said that."],
    ["I wish + would", "annoyance; a wish for a change", "I wish it would stop raining."]],
  uses: [
    ["Unless", "", [["I won't go [unless] you come with me.", "Non ci vado se non vieni con me."], ["[Unless] we leave now, we'll be late.", "Se non partiamo adesso, faremo tardi."]]],
    ["As long as, provided that", "", [["You can use my laptop [as long as] you're careful.", "Puoi usare il mio portatile, purché tu faccia attenzione."]]],
    ["In case", "", [["I'll take some water [in case] I get thirsty.", "Porto dell'acqua nel caso mi venga sete."], ["Write down my number [in case] you need help.", "Segnati il mio numero, nel caso ti serva aiuto."]]],
    ["I wish, if only", "", [["[I wish] I [could] speak Japanese.", "Vorrei saper parlare giapponese."], ["[If only] I [hadn't lost] my keys!", "Se solo non avessi perso le chiavi!"], ["[I wish] you [would] listen to me.", "Vorrei che tu mi ascoltassi."]]]
  ],
  mistakes: [
    ["Unless you don't hurry, you'll be late.", "Unless you hurry, you'll be late.", "Unless already means if … not: no double negative."],
    ["I wish I have a dog.", "I wish I had a dog.", "A wish about now: [past simple]."],
    ["I wish I didn't say that yesterday.", "I wish I hadn't said that yesterday.", "A regret about the past: [past perfect]."],
    ["I wish I would be taller.", "I wish I were taller.", "Not would for your own situation: [were]."],
    ["Take an umbrella if it rains. (meaning: as a precaution)", "Take an umbrella in case it rains.", "A precaution: [in case]."],
    ["In case it will rain, we'll stay in.", "If it rains, we'll stay in.", "A real condition: [if], with the present."]
  ],
  contrasts: [
    ["If or in case?", "", [["if", "I'll call you [if] I'm late.", "Ti chiamo se faccio tardi.", "Only if it happens."], ["in case", "I'll take my phone [in case] I'm late.", "Porto il telefono nel caso faccia tardi.", "A precaution, before it happens."]]]
  ],
  task: ["Write five sentences: two wishes about your life now, one regret about the past, and two sentences with unless and in case.",
    ["I wish I lived closer to my school.", "I wish I had more free time during the week.", "I wish I had learnt to swim when I was younger.", "I won't get a good mark unless I start revising today.", "I always carry a charger in case my phone dies."]] });
