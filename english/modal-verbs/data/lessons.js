/* Modal Verbs — configuration and lessons.
   Lesson format (read by assets/js/grammar-lab.js):
     form: [lines]  ·  table: [[header…], [row…], …]  (optional)
     uses: [[title, explanation, [[example, Italian], …], belt?], …]
     mistakes: [[wrong, right, why], …]
     contrasts: [[title, explanation, [[label, example, Italian, note], …]], …]
   [words] in square brackets are highlighted. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "Modal verbs add meaning to the main verb: ability, permission, possibility, obligation, advice, deduction. Study them one at a time, compare the ones that look alike, then test yourself with batteries of increasing difficulty.",
  lessonsLead: "Each lesson covers one modal verb or a small group of closely related forms: form and structure, main uses with examples, common mistakes and comparisons.",
  groups: [["basics", "The basics"], ["ability", "Ability, permission and possibility"], ["obligation", "Obligation and necessity"], ["advice", "Advice, offers and the future"], ["deduction", "Deduction and the past"]],
  levels: { 1: "Form of modal verbs, can and could for ability and requests", 2: "Must, have to, should, shall, mustn't and don't have to", 3: "May and might, needn't, will and would, deduction in the present", 4: "Modal verbs in the past: must have, could have, should have", 5: "Fine distinctions: needn't have, was able to, be supposed to, formal uses" },
  reviewTitle: "Mixed Modal Verbs",
  instr: {
    gap: "Complete the sentences with the correct modal verb or modal form.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake with a modal verb. Write the correct sentence.",
    transform: "Complete the second sentence so that it has a similar meaning to the first. Use the word given, where there is one.",
    text: "Read the whole text first, then complete the gaps with a suitable modal verb.",
    dialogue: "Read the whole dialogue first, then complete the gaps with a suitable modal verb."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== THE BASICS ============================== */
L({ id: "basics", group: "basics", belt: 1, title: "What are modal verbs?", short: "The rules that all modal verbs share",
  intro: "Modal verbs (can, could, may, might, must, shall, should, will, would) are auxiliary verbs. They never stand alone with a meaning of their own: they combine with a main verb to show [how the speaker sees the action] – as possible, necessary, permitted, advisable or certain.",
  form: [
    "Modal + [base form] of the verb, without to: She [can swim]. You [should go]. Not: ~~She can to swim~~.",
    "No [-s] in the third person singular: He [can] drive. It [must] be true. Not: ~~He cans~~.",
    "Questions: [modal + subject + verb]: [Can you] help me? [Should I] call him?",
    "Negatives: [modal + not]: cannot / can't, could not / couldn't, must not / mustn't, should not / shouldn't, will not / [won't], shall not / shan't, might not / mightn't.",
    "No [do / does / did]: [Can you] swim? (not ~~Do you can swim?~~) · He [mustn't] smoke (not ~~He doesn't must~~).",
    "Modal verbs have no infinitive, no -ing form and no past participle: for the missing forms we use [semi-modals] such as [be able to], [have to], [be allowed to].",
    "[Semi-modals] (have to, need to, be able to, ought to, used to) behave partly like ordinary verbs: they take [to], and have to / need to use do in questions and negatives: [Do you have to] go?"
  ],
  table: [["Modal", "Negative", "Main meanings"], ["can", "can't / cannot", "ability, permission, requests, possibility"], ["could", "couldn't", "past ability, polite requests, possibility"], ["may", "may not", "formal permission, possibility"], ["might", "might not", "weaker possibility, suggestions"], ["must", "mustn't", "obligation, strong advice, deduction"], ["shall", "shan't", "offers and suggestions (I / we), formal rules"], ["should", "shouldn't", "advice, expectation"], ["will", "won't", "future, willingness, promises"], ["would", "wouldn't", "conditional, polite offers, past habits"]],
  uses: [
    ["Ability", "What someone is able or not able to do.", [["I [can] play the guitar, but I [can't] sing.", "So suonare la chitarra, ma non so cantare."]]],
    ["Permission and requests", "Asking for and giving permission, asking someone to do something.", [["[Can] I open the window?", "Posso aprire la finestra?"], ["[Could] you pass me the salt, please?", "Potresti passarmi il sale, per favore?"]]],
    ["Possibility", "How likely something is.", [["It [might] rain this afternoon.", "Potrebbe piovere oggi pomeriggio."]]],
    ["Obligation and advice", "What is necessary, forbidden or a good idea.", [["You [must] wear a helmet.", "Devi indossare il casco."], ["You [should] see a doctor.", "Dovresti andare dal medico."]]],
    ["Deduction", "A logical conclusion based on evidence.", [["The lights are off. They [must] be out.", "Le luci sono spente. Devono essere usciti."]]]
  ],
  mistakes: [
    ["She cans speak French.", "She can speak French.", "Modal verbs never take -s in the third person singular."],
    ["I must to go now.", "I must go now.", "After a modal we use the base form [without to]. Only ought to, have to, need to and be able to take to."],
    ["Do you can come tomorrow?", "Can you come tomorrow?", "Modal verbs form questions by inversion, never with do. Italian ‘Puoi venire?’ has no auxiliary either: just put can before the subject."],
    ["I will can help you next week.", "I will be able to help you next week.", "Two modals cannot go together. Use the semi-modal [be able to] after will."],
    ["He musts working late.", "He must work late.", "No -s and no -ing after a modal: [must work]."]
  ],
  contrasts: [
    ["Modal verbs and semi-modals", "Modals have one form only. When we need a future, a perfect or an infinitive, we use a semi-modal with the same meaning.", [["Modal", "I [can't] come today.", "Non posso venire oggi.", "Present: can."], ["Semi-modal", "I [won't be able to] come tomorrow. · I'd love [to be able to] fly.", "Domani non potrò venire. · Mi piacerebbe saper volare.", "Future and infinitive: be able to."]]]
  ] });

/* ============================== ABILITY, PERMISSION, POSSIBILITY ============================== */
L({ id: "can-could", group: "ability", belt: 1, title: "Can, Could and Be able to", short: "Ability, permission, requests and possibility",
  intro: "[Can] is the most frequent modal verb. It expresses ability, permission, requests and general possibility. [Could] is its past form for ability and a more polite or more tentative form for requests and possibility. [Be able to] replaces can where can has no form (future, perfect, infinitive) and for one specific success in the past.",
  form: [
    "[can / can't (cannot)] + base form: I [can] swim. She [can't] drive. [Can] you see it?",
    "[could / couldn't] + base form: I [could] read when I was four. [Could] you help me?",
    "[be able to] + base form, in every tense: I [have been able to] swim since I was six. You [will be able to] see the sea from your room.",
    "[cannot] is written as one word. Can't is the usual spoken form."
  ],
  table: [["Time", "Ability", "Example"], ["Present", "can / am able to", "She [can] speak four languages."], ["Past (general)", "could / was able to", "I [could] run fast when I was young."], ["Past (one success)", "was able to / managed to", "The fire spread, but everyone [was able to] escape."], ["Present perfect", "have been able to", "I [haven't been able to] sleep well lately."], ["Future", "will be able to", "You ['ll be able to] drive next year."]],
  uses: [
    ["General ability (can)", "Skills and abilities in the present.", [["My grandmother [can] use a smartphone better than me.", "Mia nonna sa usare lo smartphone meglio di me."], ["I [can't] see the board from here.", "Da qui non riesco a vedere la lavagna."]], 1],
    ["Permission (can / could)", "Can is the normal, informal way to ask for or give permission. Could is more polite when asking. To [give] permission we use can, not could.", [["[Can] I borrow your pen? – Yes, of course you [can].", "Posso prendere in prestito la tua penna? – Certo."], ["[Could] I leave a bit earlier today?", "Potrei uscire un po' prima oggi?"]], 1],
    ["Requests (can / could)", "Asking someone to do something. Could is more polite and more common with people we don't know well.", [["[Can] you turn the music down?", "Puoi abbassare la musica?"], ["[Could] you tell me the way to the station?", "Potrebbe indicarmi la strada per la stazione?"]], 1],
    ["Past ability (could / couldn't)", "General ability over a period in the past.", [["When I was a child I [could] climb any tree.", "Da bambino riuscivo ad arrampicarmi su qualsiasi albero."], ["I [couldn't] understand a word of the film.", "Non riuscivo a capire una parola del film."]], 1],
    ["One specific success in the past (was able to / managed to)", "For a single achievement on a particular occasion, especially after a difficulty, use [was able to] or [managed to], not could. In the negative, couldn't is fine.", [["The road was blocked, but we [were able to] find another way.", "La strada era bloccata, ma siamo riusciti a trovare un'altra strada."], ["I [managed to] finish the test just in time.", "Sono riuscito a finire il test appena in tempo."], ["I [couldn't] find my keys anywhere.", "Non riuscivo a trovare le chiavi da nessuna parte."]], 2],
    ["Possibility (can / could)", "Can expresses general, theoretical possibility (something that sometimes happens). Could expresses a specific possibility, now or in the future.", [["Winters here [can] be very cold.", "Qui gli inverni possono essere molto freddi."], ["Take an umbrella: it [could] rain later.", "Prendi l'ombrello: più tardi potrebbe piovere."]], 2],
    ["Impossibility (can't)", "Can't expresses a logical conclusion that something is impossible.", [["That [can't] be Tom: he's in Australia.", "Non può essere Tom: è in Australia."]], 3],
    ["Suggestions (could)", "Could offers a possible idea, without pressure.", [["We [could] go to the cinema tonight, if you like.", "Potremmo andare al cinema stasera, se ti va."]], 2]
  ],
  mistakes: [
    ["After hours of searching, I could find my passport.", "After hours of searching, I was able to (managed to) find my passport.", "For [one specific success] in the past use was able to or managed to. Could is for general ability (When I was young I could…)."],
    ["I will can come to the party.", "I will be able to come to the party.", "Can has no future form: use [will be able to]."],
    ["I can't to hear you.", "I can't hear you.", "No to after can."],
    ["Yes, you could use my car. (giving permission)", "Yes, you can use my car.", "Could is used to [ask] for permission politely, but to [give] permission we say can (or may)."],
    ["I can swimming.", "I can swim.", "After can, use the base form, not the -ing form. In Italian ‘so nuotare’ uses an infinitive: in English it's the base form [swim]."],
    ["I know to swim.", "I can swim.", "Italian ‘so nuotare’ is [I can swim], not ‘I know to swim’. Know how to swim is possible, but can is far more natural."]
  ],
  contrasts: [
    ["Could vs was able to", "Both describe ability in the past, but only was able to (or managed to) is used for one particular achievement. In the negative there is no difference.", [["General ability", "I [could] ski when I was ten.", "Sapevo sciare quando avevo dieci anni.", "A skill over a period: could or was able to."], ["One success", "The snow was terrible, but we [were able to] reach the hut.", "La neve era terribile, ma siamo riusciti a raggiungere il rifugio.", "One occasion: was able to / managed to, not could."]]],
    ["Can vs could in requests", "Both are correct. Could is more polite and is the safer choice with strangers, at work and in formal situations.", [["Informal", "[Can] you pass me the bread?", "Mi passi il pane?", "Friends and family."], ["More polite", "[Could] you send me the report by Friday?", "Potrebbe mandarmi la relazione entro venerdì?", "At work, with strangers."]]],
    ["Can vs could for possibility", "Can describes what is generally possible; could describes something that is possible in a particular situation.", [["General", "Learning a language [can] be frustrating.", "Imparare una lingua può essere frustrante.", "True in general."], ["Specific", "This [could] be the answer to our problem.", "Questa potrebbe essere la soluzione al nostro problema.", "A possibility now."]]]
  ] });

L({ id: "may-might", group: "ability", belt: 3, title: "May and Might", short: "Possibility, formal permission and polite suggestions",
  intro: "[May] and [might] both express possibility: something is perhaps true, or will perhaps happen. May also expresses formal permission. Might is often a little less certain, and it is also used for polite suggestions.",
  form: [
    "[may / might] + base form: It [may] rain. She [might] be at home.",
    "Negative: [may not] / [might not] (mightn't is possible in British English; mayn't is not used).",
    "Continuous: [may / might be + -ing] for an action perhaps in progress: He [might be sleeping].",
    "Questions with may: only for permission ([May I] come in?). For possibility in questions we normally use [Do you think…?] or might: [Might] they be lost? is formal."
  ],
  uses: [
    ["Possibility now or in the future", "May and might mean ‘perhaps’. In everyday speech they are often interchangeable; might can sound slightly less likely.", [["I [may] be late tonight: there's a train strike.", "Stasera potrei fare tardi: c'è uno sciopero dei treni."], ["Take a jacket. It [might] get cold later.", "Prendi una giacca. Più tardi potrebbe fare freddo."], ["Where's Anna? – She [might be] in the library.", "Dov'è Anna? – Potrebbe essere in biblioteca."]], 3],
    ["Negative possibility", "May not / might not = perhaps not. Not the same as can't (impossible).", [["He [might not] know about the meeting.", "Potrebbe non sapere della riunione."], ["We [may not] have enough time.", "Potremmo non avere abbastanza tempo."]], 3],
    ["Formal permission (may)", "May I…? is the most formal way to ask for permission. You may… gives permission in formal or official language.", [["[May] I ask you a personal question?", "Posso farle una domanda personale?"], ["Students [may] use a dictionary during the exam.", "Gli studenti possono usare un dizionario durante l'esame."], ["You [may not] take photographs in the museum.", "Non è consentito fare fotografie nel museo."]], 2],
    ["Polite suggestions (might)", "You might want to… / You might like to… gently suggest something.", [["You [might want to] check the address before you leave.", "Forse ti conviene controllare l'indirizzo prima di uscire."]], 4],
    ["Hypothesis (might)", "Might is used in second conditionals instead of would to show a possible result.", [["If we left now, we [might] catch the last bus.", "Se partissimo adesso, potremmo prendere l'ultimo autobus."]], 4]
  ],
  mistakes: [
    ["Maybe he may come.", "He may come. / Maybe he'll come.", "May already means ‘maybe’. Don't use both: choose [maybe + will] or [may]."],
    ["May it rain tomorrow?", "Do you think it will rain tomorrow?", "In questions may is only used for permission. For possibility, ask [Do you think…?]."],
    ["She mays be right.", "She may be right.", "No -s with modal verbs."],
    ["He might not come, so he can't come.", "He might not come. / He can't come.", "Might not = perhaps not; can't = it's impossible or not allowed. They are not the same."],
    ["Maybe is raining.", "It may be raining. / Maybe it's raining.", "Maybe is an adverb (forse) and needs a full verb; may is a modal verb (potrebbe)."]
  ],
  contrasts: [
    ["May vs might", "For possibility both are correct and very close. Might suggests a smaller chance and is more common in speech. Only may is used for formal permission; only might is used in polite suggestions and conditionals.", [["Possibility", "I [may] / [might] go to Rome next month.", "Il mese prossimo potrei andare a Roma.", "Both possible; might sounds a little less certain."], ["Permission", "[May] I sit here?", "Posso sedermi qui?", "Only may (or can / could)."]]],
    ["May (possibility) vs can (possibility)", "Can expresses general possibility; may expresses a particular possibility.", [["General", "Mushrooms [can] be poisonous.", "I funghi possono essere velenosi.", "Some mushrooms are, in general."], ["Particular", "These mushrooms [may] be poisonous.", "Questi funghi potrebbero essere velenosi.", "Perhaps these specific ones are."]]],
    ["Maybe vs may be", "Maybe (one word) is an adverb meaning perhaps. May be (two words) is modal + verb.", [["Adverb", "[Maybe] she's ill.", "Forse è malata.", "Maybe + full sentence."], ["Modal + be", "She [may be] ill.", "Potrebbe essere malata.", "May + be + adjective."]]]
  ] });

/* ============================== OBLIGATION AND NECESSITY ============================== */
L({ id: "must", group: "obligation", belt: 2, title: "Must", short: "Obligation, strong advice and rules",
  intro: "[Must] expresses strong obligation and necessity. It often shows the speaker's own authority or feeling (I think it is necessary). It is also used for written rules, for strong recommendations and, as you will see in another lesson, for logical deduction.",
  form: [
    "[must] + base form: You [must] be home by midnight.",
    "Negative: [mustn't (must not)] = prohibition (it is forbidden). See the lesson ‘Mustn't and Don't have to’.",
    "Questions with must are possible but rather formal: [Must] you leave so early? In everyday English we usually ask [Do I have to…?]",
    "Must has only a present / future form. For the past use [had to]; for the future you can use must or [will have to]."
  ],
  uses: [
    ["Personal obligation", "The speaker feels that something is necessary: the obligation comes from inside.", [["I [must] call my mother tonight. It's her birthday.", "Devo chiamare mia madre stasera. È il suo compleanno."], ["We really [must] start saving money.", "Dobbiamo proprio cominciare a risparmiare."]], 2],
    ["Rules and laws (written)", "In notices, instructions and regulations.", [["Passengers [must] wear a seat belt at all times.", "I passeggeri devono indossare la cintura in ogni momento."], ["All visitors [must] report to reception.", "Tutti i visitatori devono presentarsi alla reception."]], 2],
    ["Strong recommendation", "Something is so good that the speaker urges you to do it.", [["You [must] see this series – it's brilliant!", "Devi assolutamente vedere questa serie: è fantastica!"], ["You [must] come and visit us in Lisbon.", "Dovete assolutamente venirci a trovare a Lisbona."]], 2],
    ["Orders from the speaker", "A parent, teacher or boss tells someone what to do.", [["You [must] finish your homework before you go out.", "Devi finire i compiti prima di uscire."]], 2],
    ["Obligation in the past and future", "Must has no past: use [had to]. For a future obligation must is possible, but [will have to] is very common.", [["Yesterday I [had to] wait two hours at the doctor's.", "Ieri ho dovuto aspettare due ore dal medico."], ["You ['ll have to] book a table: it's always full.", "Dovrete prenotare un tavolo: è sempre pieno."]], 2]
  ],
  mistakes: [
    ["Yesterday I must work late.", "Yesterday I had to work late.", "Must has no past form. For obligation in the past use [had to]."],
    ["You must to show your passport.", "You must show your passport.", "No to after must."],
    ["Do I must pay now?", "Do I have to pay now? / Must I pay now?", "Must never uses do. In everyday questions [Do I have to…?] is more natural."],
    ["He musts leave early.", "He must leave early.", "No -s with modal verbs."],
    ["You don't must park here.", "You mustn't park here.", "The negative is [mustn't], without do. And remember: mustn't means it is forbidden."]
  ],
  contrasts: [
    ["Must for obligation vs must for deduction", "The same verb has two very different meanings. Look at the context: is someone being told what to do, or is the speaker drawing a conclusion?", [["Obligation", "You [must] be at the airport two hours before the flight.", "Devi essere in aeroporto due ore prima del volo.", "A rule: it is necessary."], ["Deduction", "You [must] be tired after such a long flight.", "Devi essere stanco dopo un volo così lungo.", "A conclusion: I'm sure you are."]]]
  ] });

L({ id: "have-to", group: "obligation", belt: 2, title: "Have to and Have got to", short: "External obligation in every tense",
  intro: "[Have to] expresses obligation that usually comes from outside the speaker: rules, laws, other people, circumstances. Unlike must, it is an ordinary verb, so it can be used in every tense. [Have got to] means the same as have to in the present and is very common in informal British English.",
  form: [
    "[have to / has to] + base form: I [have to] get up at six. She [has to] wear a uniform.",
    "Questions and negatives with do: [Do you have to] work on Saturdays? He [doesn't have to] pay.",
    "Every tense: [had to] (past), [will have to] (future), [have had to] (present perfect), [having to] (-ing), [to have to] (infinitive).",
    "[have got to / has got to] + base form, present only, informal: I['ve got to] go now. [Have you got to] work tomorrow?",
    "Pronunciation: have to is often /ˈhæftə/ and has to /ˈhæstə/."
  ],
  table: [["Time", "Form", "Example"], ["Present", "have / has to", "She [has to] take the bus to work."], ["Past", "had to", "We [had to] cancel the trip."], ["Present perfect", "have / has had to", "I've [had to] work overtime all week."], ["Future", "will have to", "You'll [have to] be patient."], ["-ing form", "having to", "I hate [having to] get up early."], ["After a modal", "might / may have to", "We [might have to] leave early."]],
  uses: [
    ["External obligation", "Rules, laws, timetables or other people make it necessary.", [["In Italy you [have to] be eighteen to drive a car.", "In Italia bisogna avere diciotto anni per guidare l'auto."], ["My sister [has to] wear a uniform at work.", "Mia sorella deve indossare una divisa al lavoro."]], 2],
    ["Obligation in other tenses", "Must has no past, perfect or -ing form: have to fills the gaps.", [["Lately I've [had to] work overtime every day.", "Ultimamente ho dovuto fare gli straordinari tutti i giorni."], ["I'm tired of [having to] explain everything twice.", "Sono stanco di dover spiegare tutto due volte."], ["We [might have to] postpone the meeting.", "Potremmo dover rimandare la riunione."]], 2],
    ["Questions about obligation", "To ask whether something is necessary, have to is the normal choice.", [["[Do I have to] fill in this form?", "Devo compilare questo modulo?"], ["What time [did you have to] leave?", "A che ora sei dovuto partire?"]], 2],
    ["Have got to (informal)", "Same meaning as have to, present only, very common in British speech.", [["Sorry, I['ve got to] go – my bus is here.", "Scusa, devo andare: è arrivato il mio autobus."], ["[Have you got to] work this weekend?", "Devi lavorare questo fine settimana?"]], 2]
  ],
  mistakes: [
    ["She have to work on Sundays.", "She has to work on Sundays.", "Have to is an ordinary verb: he / she / it [has to]."],
    ["I haven't to go to school today.", "I don't have to go to school today.", "Negatives of have to use do: [don't have to]. (Haven't got to is possible, but not haven't to.)"],
    ["Did you had to wait long?", "Did you have to wait long?", "After did use the base form: [did you have to]."],
    ["I will must work tomorrow.", "I will have to work tomorrow.", "Two modals cannot go together: [will have to]."],
    ["I had got to leave early yesterday.", "I had to leave early yesterday.", "Have got to is only used in the present. For the past use [had to]."]
  ],
  contrasts: [
    ["Must vs have to (affirmative)", "In the present both express obligation and are often interchangeable. The traditional difference: must shows the speaker's own feeling or authority; have to shows an external rule or circumstance. In the past only had to is possible.", [["Must – internal", "I [must] eat better: I feel awful.", "Devo mangiare meglio: mi sento malissimo.", "My own decision."], ["Have to – external", "I [have to] finish this project by Friday: it's the deadline.", "Devo finire questo progetto entro venerdì: è la scadenza.", "Imposed by someone else."]]],
    ["Must vs have to (past and future)", "Must cannot be used for the past. For the future, will have to is usual when the obligation depends on circumstances.", [["Past", "I [had to] stay at home because I was ill.", "Sono dovuto restare a casa perché ero malato.", "Never ‘I musted’."], ["Future", "If the train is late, we'll [have to] take a taxi.", "Se il treno è in ritardo, dovremo prendere un taxi.", "Will have to."]]]
  ] });

L({ id: "mustnt-dont-have-to", group: "obligation", belt: 2, title: "Mustn't and Don't have to", short: "Prohibition or no necessity?",
  intro: "In the affirmative, must and have to are very close. In the negative they have [completely different meanings]: [mustn't] means that something is forbidden; [don't have to] means that it is not necessary – you can do it if you want. This is one of the most frequent mistakes of Italian students, because Italian ‘non devi’ can mean both.",
  form: [
    "[mustn't (must not)] + base form = it is forbidden / don't do it: You [mustn't] touch that.",
    "[don't / doesn't have to] + base form = it isn't necessary: You [don't have to] come.",
    "Also with the same meaning as don't have to: [don't need to] and [needn't]: You [needn't] come.",
    "Past: there is no past of mustn't; use [wasn't allowed to] / [couldn't] for prohibition, and [didn't have to] for no necessity."
  ],
  table: [["Meaning", "Present", "Past"], ["Prohibition", "mustn't / can't / aren't allowed to", "couldn't / wasn't allowed to"], ["No necessity", "don't have to / don't need to / needn't", "didn't have to / didn't need to"]],
  uses: [
    ["Prohibition (mustn't)", "Something is not allowed, or it is very important not to do it.", [["You [mustn't] use your phone during the exam.", "Non devi usare il telefono durante l'esame."], ["We [mustn't] forget Grandma's birthday.", "Non dobbiamo dimenticare il compleanno della nonna."]], 2],
    ["No necessity (don't have to)", "It isn't necessary; you are free to choose.", [["You [don't have to] wake up early tomorrow: it's a bank holiday.", "Domani non devi svegliarti presto: è festa."], ["She [doesn't have to] work on Fridays.", "Il venerdì non deve lavorare."]], 2],
    ["No necessity in the past (didn't have to)", "It wasn't necessary.", [["You [didn't have to] go to all the trouble of cooking all this!", "Non dovevi darti tutto questo disturbo di cucinare!"], ["We [didn't have to] queue: we had tickets.", "Non abbiamo dovuto fare la fila: avevamo i biglietti."]], 3],
    ["Prohibition in the past", "Mustn't has no past form.", [["When I was a child, I [wasn't allowed to] stay up late.", "Da bambino non mi era permesso stare alzato fino a tardi."]], 3]
  ],
  mistakes: [
    ["You mustn't pay: the museum is free.", "You don't have to pay: the museum is free.", "If something is free or optional, it is [not necessary]: don't have to. Mustn't would mean that paying is forbidden."],
    ["You don't have to smoke in here. It's against the law.", "You mustn't smoke in here. It's against the law.", "Against the law = forbidden: [mustn't]."],
    ["I mustn't go to work yesterday.", "I didn't have to go to work yesterday.", "Mustn't has no past. For no necessity in the past use [didn't have to]."],
    ["You haven't to bring anything.", "You don't have to bring anything.", "Use do for the negative of have to."]
  ],
  contrasts: [
    ["Mustn't vs don't have to", "Italian ‘non devi’ translates both, so think about the meaning: is it forbidden, or simply not necessary?", [["Forbidden", "You [mustn't] tell anyone. It's a secret.", "Non devi dirlo a nessuno. È un segreto.", "Don't do it!"], ["Not necessary", "You [don't have to] tell me if you don't want to.", "Non devi dirmelo se non vuoi.", "You can choose."]]],
    ["Don't have to vs needn't", "Both express lack of necessity. Needn't is more common in British English and slightly more formal; don't have to is used everywhere.", [["don't have to", "You [don't have to] wait for me.", "Non devi aspettarmi.", "Very common."], ["needn't", "You [needn't] wait for me.", "Non c'è bisogno che mi aspetti.", "Same meaning, mainly British."]]]
  ] });

L({ id: "need", group: "obligation", belt: 3, title: "Need and Needn't", short: "Necessity: need to, needn't, don't need to",
  intro: "[Need] can be an ordinary verb (need to do, needs to, doesn't need to) or, in negatives and some questions, a modal verb ([needn't do]). Both express necessity or its absence. As an ordinary verb it is much more common, especially in American English.",
  form: [
    "Ordinary verb: [need to] + base form: I [need to] buy some milk. She [needs to] rest. Do you [need to] leave?",
    "Negative: [don't / doesn't need to] = it isn't necessary: You [don't need to] shout.",
    "Modal verb (negative only): [needn't] + base form, no -s, no to: He [needn't] worry.",
    "Questions with modal need are formal and rare: [Need I] say more?",
    "Past: [didn't need to] (it wasn't necessary, so probably nobody did it) and [needn't have] + past participle (it was done, but it wasn't necessary) – see the lesson on past modals.",
    "Need + -ing has a passive meaning: The car [needs washing] = the car needs to be washed."
  ],
  uses: [
    ["Necessity (need to)", "Something is necessary.", [["I [need to] finish this essay by tomorrow.", "Devo finire questo saggio entro domani."], ["The kids [need to] go to bed early tonight.", "Stasera i bambini devono andare a letto presto."]], 2],
    ["No necessity (needn't / don't need to)", "Same meaning as don't have to.", [["You [needn't] come to the station: I'll get a taxi.", "Non c'è bisogno che tu venga in stazione: prendo un taxi."], ["We [don't need to] book: it's never full.", "Non c'è bisogno di prenotare: non è mai pieno."]], 3],
    ["Need + -ing (passive meaning)", "Something needs to be done.", [["The windows [need cleaning].", "Le finestre hanno bisogno di essere pulite."], ["Your hair [needs cutting].", "Hai bisogno di tagliarti i capelli."]], 4],
    ["Didn't need to", "It wasn't necessary (we don't know, or it doesn't matter, whether the action happened; usually it didn't).", [["I [didn't need to] take a taxi: Paolo gave me a lift.", "Non ho avuto bisogno di prendere un taxi: Paolo mi ha dato un passaggio."]], 3]
  ],
  mistakes: [
    ["He needn't to come.", "He needn't come. / He doesn't need to come.", "Modal needn't is followed by the base form without to. With to, use the ordinary verb: [doesn't need to]."],
    ["She need to go.", "She needs to go.", "In the affirmative need is an ordinary verb: she [needs to]."],
    ["You don't need come.", "You don't need to come. / You needn't come.", "Don't need is followed by to."],
    ["The car needs to wash.", "The car needs washing. / The car needs to be washed.", "The car can't wash itself: use [need + -ing] or [need to be + past participle]."]
  ],
  contrasts: [
    ["Didn't need to vs needn't have", "Didn't need to: it wasn't necessary (and usually it wasn't done). Needn't have done: it was done, but it turned out to be unnecessary.", [["Not done", "I [didn't need to] cook: we ate out.", "Non ho dovuto cucinare: abbiamo mangiato fuori.", "I didn't cook."], ["Done, but unnecessary", "I [needn't have cooked]: they'd already eaten.", "Non c'era bisogno che cucinassi: avevano già mangiato.", "I cooked, for nothing."]]],
    ["Needn't vs mustn't", "Needn't = not necessary; mustn't = forbidden.", [["Not necessary", "You [needn't] take your shoes off.", "Non è necessario togliersi le scarpe.", "You can, but it isn't necessary."], ["Forbidden", "You [mustn't] take photos in here.", "Qui non si possono fare foto.", "It isn't allowed."]]]
  ] });

/* ============================== ADVICE, OFFERS, FUTURE ============================== */
L({ id: "should", group: "advice", belt: 2, title: "Should, Ought to and Had better", short: "Advice, recommendation and expectation",
  intro: "[Should] and [ought to] give advice and say what is right or a good idea. They are weaker than must. Should also expresses expectation (what is probable or planned). [Had better] gives strong advice about a particular situation, with an idea of warning: if you don't, something bad will happen.",
  form: [
    "[should / shouldn't] + base form: You [should] sleep more. You [shouldn't] work so hard.",
    "[ought to / ought not to (oughtn't to)] + base form: You [ought to] see a doctor. Questions with ought are rare and formal.",
    "[had better ('d better) / had better not] + base form: You['d better] hurry. You['d better not] be late. Had better refers to the present or future, not the past.",
    "Questions: [Should I] call her? [What should we] do?"
  ],
  uses: [
    ["Advice and opinion", "What we think is right or a good idea.", [["You [should] sleep more: you look exhausted.", "Dovresti dormire di più: sembri esausto."], ["People [shouldn't] drive after drinking alcohol.", "Non si dovrebbe guidare dopo aver bevuto alcolici."]], 2],
    ["Asking for advice", "Should I…? / What should I…?", [["[Should I] tell him the truth?", "Dovrei dirgli la verità?"], ["What [should] I wear for the interview?", "Cosa dovrei indossare per il colloquio?"]], 2],
    ["Ought to", "Same meaning as should, slightly more formal and less common, often for moral duty.", [["You [ought to] apologise to her.", "Dovresti scusarti con lei."], ["We [oughtn't to] waste so much food.", "Non dovremmo sprecare così tanto cibo."]], 3],
    ["Expectation (should)", "Something is probable or is expected to happen.", [["The train [should] arrive at about six.", "Il treno dovrebbe arrivare verso le sei."], ["It's an easy exam. You [shouldn't] have any problems.", "È un esame facile. Non dovresti avere problemi."]], 3],
    ["Strong advice with a warning (had better)", "For a specific situation, when there is a risk if the advice is not followed.", [["You['d better] take an umbrella, or you'll get soaked.", "Faresti meglio a prendere l'ombrello, altrimenti ti bagnerai."], ["We['d better not] make any noise: the baby's asleep.", "Faremmo meglio a non fare rumore: il bambino dorme."]], 3]
  ],
  mistakes: [
    ["You should to see a doctor.", "You should see a doctor.", "No to after should (but [ought to] has to)."],
    ["You had better to go.", "You had better go.", "Had better is followed by the base form without to."],
    ["You'd not better be late.", "You'd better not be late.", "The negative is [had better not] + base form."],
    ["You ought see a dentist.", "You ought to see a dentist.", "Ought is always followed by [to]."],
    ["You should went to bed earlier yesterday.", "You should have gone to bed earlier yesterday.", "For past advice or regret use [should have + past participle]."]
  ],
  contrasts: [
    ["Should vs ought to", "They mean the same thing. Should is far more common; ought to is a little more formal and suggests moral duty or an external rule. In questions and negatives should is much more natural.", [["should", "You [should] call your grandmother more often.", "Dovresti chiamare tua nonna più spesso.", "Everyday advice."], ["ought to", "We [ought to] respect other people's opinions.", "Dovremmo rispettare le opinioni altrui.", "Moral duty, slightly formal."]]],
    ["Should vs had better", "Should is general advice. Had better is stronger, refers to a specific situation now, and implies a negative consequence.", [["General", "You [should] eat more vegetables.", "Dovresti mangiare più verdura.", "A good idea in general."], ["Warning", "You['d better] leave now or you'll miss the train.", "Faresti meglio ad andare adesso o perderai il treno.", "Now, or there will be trouble."]]],
    ["Should vs must", "Should is advice (you can choose); must is a strong obligation.", [["Advice", "You [should] wear a helmet on a bike.", "Dovresti indossare il casco in bici.", "It's a good idea."], ["Obligation", "You [must] wear a helmet on a motorbike.", "Devi indossare il casco in moto.", "It's the law."]]]
  ] });

L({ id: "shall", group: "advice", belt: 2, title: "Shall", short: "Offers, suggestions and formal rules",
  intro: "In modern English [shall] is used mainly in questions with [I] and [we] to make offers and suggestions or to ask for advice. In formal and legal texts it expresses obligation. Its use as a simple future (I shall go) is now rare and old-fashioned outside formal British English.",
  form: [
    "[Shall I / Shall we] + base form? [Shall I] open the window? [Shall we] go?",
    "Negative: [shall not / shan't] (mainly British and formal).",
    "Formal / legal: [shall] + base form = must: The tenant [shall] pay the rent monthly.",
    "Question tag after Let's: Let's go, [shall we]?"
  ],
  uses: [
    ["Offers (Shall I…?)", "Offering to do something for someone.", [["It's cold in here. [Shall I] close the window?", "Fa freddo qui. Chiudo la finestra?"], ["[Shall I] carry that bag for you?", "Ti porto io la borsa?"]], 2],
    ["Suggestions (Shall we…?)", "Suggesting doing something together.", [["[Shall we] go for a walk?", "Facciamo una passeggiata?"], ["Let's order a pizza, [shall we]?", "Ordiniamo una pizza, che ne dici?"]], 2],
    ["Asking for advice or instructions", "What shall I…? / Where shall we…?", [["What [shall] I do? I've lost my passport.", "Cosa faccio? Ho perso il passaporto."], ["Where [shall] we meet?", "Dove ci incontriamo?"]], 2],
    ["Formal obligation (rules, contracts)", "In legal and official documents.", [["The tenant [shall] pay the rent on the first day of each month.", "L'inquilino è tenuto a pagare l'affitto il primo giorno di ogni mese."], ["No person [shall] enter without authorisation.", "È vietato l'ingresso ai non autorizzati."]], 5],
    ["Future with I / we (formal British)", "Old-fashioned or formal; will is normal today.", [["We [shall] never forget your kindness.", "Non dimenticheremo mai la vostra gentilezza."]], 4]
  ],
  mistakes: [
    ["Will I open the window?", "Shall I open the window?", "For offers with I, use [Shall I…?]. Will I…? asks about the future (Will I pass the exam?)."],
    ["Shall you help me?", "Will you help me? / Can you help me?", "To ask someone else to do something, use will / can / could you. Shall is used with I and we."],
    ["Shall we to go?", "Shall we go?", "No to after shall."]
  ],
  contrasts: [
    ["Shall I…? vs Will I…?", "Shall I…? is an offer or a request for advice; Will I…? asks about what is going to happen.", [["Offer", "[Shall I] help you with your homework?", "Ti aiuto con i compiti?", "Do you want me to?"], ["Future", "[Will I] need a visa for Canada?", "Avrò bisogno del visto per il Canada?", "A question about the future."]]],
    ["Shall we…? vs Let's…", "Both make suggestions. Shall we…? asks for the other person's opinion; Let's… is more direct.", [["Question", "[Shall we] eat out tonight?", "Mangiamo fuori stasera?", "Asking."], ["Proposal", "[Let's] eat out tonight.", "Mangiamo fuori stasera.", "Proposing."]]]
  ] });

L({ id: "will-would", group: "advice", belt: 3, title: "Will and Would", short: "Future, willingness, requests, conditional and past habits",
  intro: "[Will] is used for the future, but as a modal verb it also expresses willingness, promises, offers, requests and refusals. [Would] is the past and the conditional form of will: it expresses hypothetical situations, polite requests and offers, and repeated actions in the past.",
  form: [
    "[will / 'll / won't] + base form: I['ll] help you. The door [won't] open.",
    "[would / 'd / wouldn't] + base form: I['d] love to come. She [wouldn't] listen.",
    "[would like / would prefer / would rather] for polite wishes: [Would you like] some tea? I['d rather] stay at home.",
    "[would have] + past participle for hypothetical past situations: I [would have come], but I was ill."
  ],
  uses: [
    ["Future certainty and predictions (will)", "What we believe will happen. (For the other future forms see Verb Tenses.)", [["I['ll] call you later.", "Ti chiamo più tardi."], ["You['ll] love this film.", "Questo film ti piacerà tantissimo."]], 2],
    ["Willingness, offers and promises (will)", "Deciding or agreeing to do something; promising.", [["I['ll] help you with the boxes.", "Ti aiuto io con gli scatoloni."], ["I [will] always love you.", "Ti amerò per sempre."], ["I [won't] tell anyone, I promise.", "Non lo dirò a nessuno, te lo prometto."]], 2],
    ["Refusal (won't / wouldn't)", "People – and things – that refuse to do something.", [["The car [won't] start.", "La macchina non vuole partire."], ["He [wouldn't] listen to my advice.", "Non voleva ascoltare i miei consigli."]], 3],
    ["Threats (will / won't)", "A warning of what will happen.", [["You [won't] get away with this!", "Non la passerai liscia!"]], 3],
    ["Requests (will / would)", "Would you…? is more polite than will you…?", [["[Will] you close the door, please?", "Chiudi la porta, per favore?"], ["[Would] you mind waiting a moment?", "Le dispiacerebbe aspettare un momento?"]], 3],
    ["Polite offers and invitations (would)", "Would you like…?", [["[Would] you like some more cake?", "Vuoi ancora un po' di torta?"]], 2],
    ["Conditional and hypothesis (would)", "Imaginary situations and their results.", [["If I were rich, I [would] travel the world.", "Se fossi ricco, viaggerei per il mondo."], ["I [wouldn't] do that if I were you.", "Al tuo posto non lo farei."]], 3],
    ["Past habits (would)", "Repeated actions in the past (not states). Similar to used to.", [["When I was a kid, I [would] always play outside after school.", "Da bambino giocavo sempre fuori dopo la scuola."]], 4],
    ["Future in the past (would)", "In reported speech and narratives, will becomes would.", [["She said she [would] call me back.", "Ha detto che mi avrebbe richiamato."]], 4]
  ],
  mistakes: [
    ["If I would have money, I would buy a car.", "If I had money, I would buy a car.", "No would in the if-clause: if + past simple, [would] in the main clause."],
    ["I would to like a coffee.", "I would like a coffee.", "No to after would: [would like]."],
    ["When I was a child, I would have a dog.", "When I was a child, I had (used to have) a dog.", "Would is for repeated [actions] in the past, not for states (have, be, live, like). Use used to or the past simple."],
    ["I promise I call you.", "I promise I'll call you.", "Promises are made with [will]."],
    ["She said she will come.", "She said she would come.", "In reported speech after a past reporting verb, will usually becomes [would]."]
  ],
  contrasts: [
    ["Would vs used to for past habits", "Both describe repeated past actions. Only used to can describe past states.", [["Actions", "Every summer we [would] / [used to] go to the seaside.", "Ogni estate andavamo al mare.", "Both correct."], ["States", "We [used to] live in a small flat.", "Vivevamo in un piccolo appartamento.", "Not ‘would live’."]]],
    ["Will vs would in requests", "Both ask someone to do something; would is more polite and less direct.", [["Direct", "[Will] you be quiet, please?", "Fate silenzio, per favore?", "Can sound impatient."], ["Polite", "[Would] you be able to help me?", "Potrebbe aiutarmi?", "Polite, formal."]]]
  ] });

/* ============================== DEDUCTION AND THE PAST ============================== */
L({ id: "deduction", group: "deduction", belt: 3, title: "Deduction in the present: must, can't, may, might, could", short: "How sure are you? Logical conclusions about now",
  intro: "Modal verbs are used to make [deductions]: conclusions based on evidence, about the present. [Must] = I'm sure it's true. [Can't] = I'm sure it isn't true. [May / might / could] = it's possibly true.",
  form: [
    "[must / can't / may / might / could] + base form: She [must be] tired. That [can't be] right.",
    "For an action in progress: modal + [be + -ing]: He [must be working]. They [might be sleeping].",
    "The opposite of must (deduction) is [can't], not mustn't: It [can't be] true.",
    "[couldn't] can also express certainty that something is not true: It [couldn't be] easier."
  ],
  table: [["How sure?", "Modal", "Example"], ["100% yes", "must", "The lights are on. They [must be] at home."], ["About 50%", "may / might / could", "They [might be] at home, I'm not sure."], ["100% no", "can't / couldn't", "Nobody answers. They [can't be] at home."]],
  uses: [
    ["Certainty: it is true (must)", "We are sure because of the evidence.", [["It's 8 a.m., so he [must be] at work now.", "Sono le 8, quindi deve essere al lavoro adesso."], ["You've been travelling all day. You [must be] exhausted.", "Hai viaggiato tutto il giorno. Sarai esausto."]], 3],
    ["Certainty: it is not true (can't)", "We are sure it is impossible.", [["This [can't be] real! It's too good to be true.", "Non può essere vero! È troppo bello per essere vero."], ["She [can't be] his mother: she's only twenty.", "Non può essere sua madre: ha solo vent'anni."]], 3],
    ["Possibility (may / might / could)", "It's possibly true, but we're not sure.", [["That boy [may be] Mary's son. He looks like her.", "Quel ragazzo potrebbe essere il figlio di Mary. Le somiglia."], ["The keys [might be] in the car.", "Le chiavi potrebbero essere in macchina."], ["Who's at the door? – It [could be] the postman.", "Chi è alla porta? – Potrebbe essere il postino."]], 3],
    ["Actions in progress", "Modal + be + -ing.", [["Don't call now: they [must be having] dinner.", "Non chiamare adesso: staranno cenando."], ["He's not answering. He [might be driving].", "Non risponde. Potrebbe essere alla guida."]], 3]
  ],
  mistakes: [
    ["He mustn't be at home: his car isn't here.", "He can't be at home: his car isn't here.", "For negative deduction use [can't], not mustn't. Mustn't means prohibition."],
    ["She must to be tired.", "She must be tired.", "No to after must."],
    ["It can be Tom at the door. (= perhaps it is)", "It could / might be Tom at the door.", "For a specific possibility now use [could / might / may]. Can is for general possibility."],
    ["They must have dinner now. (= I'm sure they're eating)", "They must be having dinner now.", "For an action in progress at this moment: [must be + -ing]."]
  ],
  contrasts: [
    ["Must vs might (deduction)", "Must shows that the speaker is almost certain; might shows only a possibility.", [["Almost certain", "He [must be] Italian: listen to his accent.", "Dev'essere italiano: senti che accento.", "I'm sure."], ["Possible", "He [might be] Italian, or perhaps Spanish.", "Potrebbe essere italiano, o forse spagnolo.", "I'm not sure."]]],
    ["Can't vs mustn't", "Can't (deduction) = it's impossible; mustn't (obligation) = it's forbidden.", [["Deduction", "That [can't be] the right answer.", "Quella non può essere la risposta giusta.", "I'm sure it isn't."], ["Prohibition", "You [mustn't] copy the answers.", "Non devi copiare le risposte.", "It's not allowed."]]]
  ] });

L({ id: "past-modals", group: "deduction", belt: 4, title: "Modal verbs in the past", short: "Should have, could have, must have, might have, can't have, needn't have, would have",
  intro: "[Modal + have + past participle] refers to the past. These structures express deductions about the past (must have, can't have, might have), regrets and criticism (should have, ought to have), missed possibilities (could have), unnecessary actions (needn't have) and hypothetical past situations (would have).",
  form: [
    "[modal + have + past participle]: She [must have left]. You [should have told] me.",
    "Negative: modal + not + have + past participle: He [can't have seen] us. You [shouldn't have said] that.",
    "Continuous: modal + [have been + -ing]: They [must have been waiting] for hours.",
    "In speech, have is weak: should've /ˈʃʊdəv/, could've, must've. Never write ~~should of~~."
  ],
  table: [["Structure", "Meaning", "Example"], ["must have done", "I'm sure it happened", "She [must have left] already: her coat is gone."], ["can't / couldn't have done", "I'm sure it didn't happen", "He [can't have seen] us: he didn't wave."], ["may / might / could have done", "perhaps it happened", "He [might have forgotten] our meeting."], ["should / ought to have done", "it was right, but it didn't happen (regret, criticism)", "I [should have studied] more."], ["shouldn't have done", "it happened, but it was wrong", "You [shouldn't have shouted] at her."], ["could have done", "it was possible, but it didn't happen", "You [could have called] me!"], ["needn't have done", "it happened, but it wasn't necessary", "I [needn't have brought] an umbrella."], ["would have done", "hypothetical past result", "I [would have gone], but I was sick."]],
  uses: [
    ["Deduction about the past: must have / can't have", "Conclusions about the past, based on evidence.", [["The ground is wet. It [must have rained] in the night.", "Il terreno è bagnato. Deve aver piovuto durante la notte."], ["She [can't have left]: her bag is still here.", "Non può essere uscita: la sua borsa è ancora qui."]], 4],
    ["Possibility in the past: may have / might have / could have", "Perhaps something happened.", [["He [might have forgotten] our meeting.", "Potrebbe essersi dimenticato del nostro appuntamento."], ["I [may have left] my phone at the restaurant.", "Potrei aver lasciato il telefono al ristorante."]], 4],
    ["Regret and criticism: should have / ought to have", "Something was the right thing to do, but it didn't happen – or the opposite with shouldn't have.", [["I [should have studied] more for the exam.", "Avrei dovuto studiare di più per l'esame."], ["You [shouldn't have told] him: it was a secret.", "Non avresti dovuto dirglielo: era un segreto."]], 4],
    ["Missed opportunity or criticism: could have", "Something was possible, but it didn't happen. Often a reproach.", [["You [could have called] me! I was worried.", "Avresti potuto chiamarmi! Ero preoccupato."], ["We [could have won] if we'd played better.", "Avremmo potuto vincere se avessimo giocato meglio."]], 4],
    ["Unnecessary past action: needn't have", "It was done, but it wasn't necessary.", [["You [needn't have brought] a present – but thank you!", "Non c'era bisogno che portassi un regalo, ma grazie!"]], 5],
    ["Hypothetical past: would have", "What would have happened in a different situation (third conditional).", [["I [would have gone] to the party, but I was sick.", "Sarei andato alla festa, ma ero malato."], ["If you'd asked me, I [would have helped] you.", "Se me l'avessi chiesto, ti avrei aiutato."]], 4]
  ],
  mistakes: [
    ["You should of told me.", "You should have told me.", "The weak pronunciation /əv/ sounds like ‘of’, but the word is [have]."],
    ["She mustn't have seen us.", "She can't have seen us.", "For a negative deduction about the past use [can't have] / [couldn't have]."],
    ["I should have went home.", "I should have gone home.", "After have use the [past participle]: gone, not went."],
    ["Yesterday I must stay at home.", "Yesterday I had to stay at home.", "Obligation in the past = had to. Must have done is a deduction (I'm sure it happened), not an obligation."],
    ["You could called me.", "You could have called me.", "Past possibility: could [have] + past participle."],
    ["He would have came if you had invited him.", "He would have come if you had invited him.", "Would have + past participle: [come]."]
  ],
  contrasts: [
    ["Could have vs should have", "Could have = it was possible (a missed opportunity). Should have = it was the right thing to do (regret or criticism).", [["Possible", "You [could have taken] the train.", "Avresti potuto prendere il treno.", "That option existed."], ["Right thing", "You [should have taken] the train.", "Avresti dovuto prendere il treno.", "That was the best choice, and you didn't make it."]]],
    ["Must have vs might have", "Must have = I'm almost sure it happened. Might have = perhaps it happened.", [["Almost sure", "She [must have left] already: the lights are off.", "Deve essere già uscita: le luci sono spente.", "Strong evidence."], ["Perhaps", "She [might have left] already – I'm not sure.", "Potrebbe essere già uscita, non ne sono sicuro.", "Weak evidence."]]],
    ["Must have done vs had to do", "Must have done is a deduction; had to do is a past obligation.", [["Deduction", "He [must have worked] late: he looks exhausted.", "Deve aver lavorato fino a tardi: sembra distrutto.", "I suppose so."], ["Obligation", "He [had to] work late yesterday.", "Ieri ha dovuto lavorare fino a tardi.", "It was necessary."]]],
    ["Needn't have done vs didn't need to do", "Needn't have: done, but unnecessary. Didn't need to: not necessary (usually not done).", [["Done", "We [needn't have hurried]: the train was late.", "Non c'era bisogno di correre: il treno era in ritardo.", "We hurried for nothing."], ["Not done", "We [didn't need to] hurry, so we walked slowly.", "Non avevamo bisogno di correre, quindi abbiamo camminato piano.", "We didn't hurry."]]]
  ] });
