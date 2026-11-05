/* The Passive Voice — configuration and lessons (format: see english/modal-verbs/data/lessons.js). */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "In a passive sentence the focus moves from who does the action to what happens to someone or something (Leonardo painted the Mona Lisa → The Mona Lisa was painted by Leonardo). Start from the basic structure, learn the passive in every tense, then move on to modals, infinitives, reporting verbs and other advanced structures.",
  lessonsLead: "The lessons are in order of difficulty: from the formation of the passive to its most advanced uses. Each one has form and structure, main uses with examples, common mistakes and comparisons.",
  groups: [["basics", "Forming the passive"], ["tenses", "The passive in every tense"], ["structures", "Passive structures"], ["advanced", "Advanced uses"]],
  levels: { 2: "Active and passive, present simple and past simple passive", 3: "Continuous and perfect tenses, future, modals, the by-agent", 4: "Infinitives and gerunds, two objects, have something done", 5: "Reporting verbs, get-passive, prepositional verbs and other advanced structures" },
  reviewTitle: "Mixed Passive Structures",
  instr: {
    gap: "Complete the sentences with the correct passive form of the verbs in brackets.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    rewrite: "Rewrite the sentences in the passive. Use by + agent only when it gives important information.",
    transform: "Complete the second sentence so that it has a similar meaning to the first. Use the word given, where there is one.",
    text: "Read the whole text first, then complete the gaps with the correct active or passive form of the verbs in brackets."
  }
};
const L = x => GL.lessons.push(x);

L({ id: "active-passive", group: "basics", belt: 2, title: "Active and passive", short: "Structure, differences and when to use the passive",
  intro: "In an [active] sentence the subject is the person or thing that does the action. In a [passive] sentence the subject is the person or thing that [receives] the action. The object of the active sentence becomes the subject of the passive one, and the verb becomes [be + past participle].",
  form: [
    "Active: [subject + verb + object]: Leonardo [painted] the Mona Lisa.",
    "Passive: [object → subject + be + past participle (+ by agent)]: The Mona Lisa [was painted] by Leonardo.",
    "The tense is shown by [be]; the main verb is always the [past participle]: is made, was made, has been made, will be made.",
    "Only verbs with an object (transitive verbs) can become passive: ~~The accident was happened~~ is impossible (happen has no object).",
    "Questions: put the (first) auxiliary before the subject: [Was] the window [broken]? [Has] the letter [been sent]?",
    "Negatives: not after the first auxiliary: The room [wasn't cleaned]. The results [haven't been published]."
  ],
  table: [["", "Active", "Passive"], ["Present simple", "They [make] cars here.", "Cars [are made] here."], ["Past simple", "Someone [stole] my bike.", "My bike [was stolen]."], ["Present perfect", "They [have found] the keys.", "The keys [have been found]."], ["Future", "They [will open] a new school.", "A new school [will be opened]."]],
  uses: [
    ["When who does the action is not important", "The action or the result matters more than the agent.", [["Newspapers [are printed] at night.", "I giornali vengono stampati di notte."], ["English [is spoken] all over the world.", "L'inglese è parlato in tutto il mondo."]], 2],
    ["When we don't know who does the action", "The agent is unknown.", [["The shop [had been burgled].", "Il negozio era stato svaligiato."], ["My car [was stolen] last night.", "Mi hanno rubato la macchina ieri sera."]], 2],
    ["To describe a process", "Instructions, procedures, science: the actions matter, not who performs them.", [["The fruit [is washed], [weighed] and [packed].", "La frutta viene lavata, pesata e confezionata."], ["The solution [was heated] to 90 °C.", "La soluzione è stata riscaldata a 90 °C."]], 3],
    ["Historical events and achievements", "Often with by to name the agent.", [["This battle [was won] by the Romans.", "Questa battaglia fu vinta dai Romani."], ["Facebook [was invented] by Mark Zuckerberg.", "Facebook è stato inventato da Mark Zuckerberg."]], 2],
    ["To focus on the object or on the result", "The person or thing affected is the topic of the sentence.", [["Have you heard? Mark [has been promoted]!", "Hai sentito? Mark è stato promosso!"], ["The new bridge [will be opened] next month.", "Il nuovo ponte sarà inaugurato il mese prossimo."]], 2],
    ["Formal and impersonal style", "News, reports, notices and academic writing.", [["Passengers [are requested] not to leave luggage unattended.", "Si prega i passeggeri di non lasciare i bagagli incustoditi."]], 3]
  ],
  mistakes: [
    ["The Mona Lisa painted by Leonardo.", "The Mona Lisa was painted by Leonardo.", "The passive needs [be]: was painted. Without be, the sentence has no main verb."],
    ["The letter was wrote yesterday.", "The letter was written yesterday.", "Always use the [past participle] (third form): written, not wrote."],
    ["The accident was happened at night.", "The accident happened at night.", "Happen, arrive, die, sleep, seem… have no object, so they cannot be passive."],
    ["In this shop is spoken English.", "English is spoken in this shop.", "Italian ‘In questo negozio si parla inglese’: in English the thing becomes the [subject] of the sentence: English is spoken…"],
    ["My bike was stolen from someone.", "My bike was stolen.", "The agent is introduced by [by], and when it's someone / people / they, we leave it out."]
  ],
  contrasts: [
    ["Italian si / passive and English passive", "Italian often uses si (si vende, si parla) or the passive with venire. English uses the passive with be, with the thing as the subject.", [["Italian", "Qui si vendono biglietti. · La porta viene chiusa alle otto.", "", "Si-construction, venire + participle."], ["English", "Tickets [are sold] here. · The door [is locked] at eight.", "", "Thing as subject + be + past participle."]]],
    ["Active or passive?", "Use the active when the agent is important and is the topic; use the passive when the action or the receiver is the topic.", [["Active", "Our neighbour [built] this house in 1990.", "Il nostro vicino ha costruito questa casa nel 1990.", "We are talking about the neighbour."], ["Passive", "This house [was built] in 1990.", "Questa casa è stata costruita nel 1990.", "We are talking about the house."]]]
  ] });

L({ id: "present-past", group: "basics", belt: 2, title: "Present simple and past simple passive", short: "am / is / are + past participle · was / were + past participle",
  intro: "The two most frequent passive forms are the [present simple passive] (facts, habits, processes) and the [past simple passive] (finished events in the past).",
  form: [
    "Present simple passive: [am / is / are + past participle]: Coffee [is grown] in Brazil. These cars [are made] in Turin.",
    "Past simple passive: [was / were + past participle]: The castle [was built] in 1350. The windows [were broken].",
    "Negative: [isn't / aren't / wasn't / weren't + past participle]: Breakfast [isn't served] after ten.",
    "Questions: [Is / Are / Was / Were + subject + past participle]: [Were] you [invited]? Where [was] this photo [taken]?",
    "Irregular verbs: learn the third form: write – wrote – [written], steal – stole – [stolen], build – built – [built]."
  ],
  uses: [
    ["Facts and processes (present simple)", "General truths and how things are done.", [["Most smartphones [are made] in Asia.", "La maggior parte degli smartphone è fabbricata in Asia."], ["The museum [is closed] on Mondays.", "Il museo è chiuso il lunedì."]], 2],
    ["Regular actions (present simple)", "Things done routinely, when the agent is obvious or not important.", [["The bins [are emptied] every Tuesday.", "I bidoni vengono svuotati ogni martedì."]], 2],
    ["Finished past events (past simple)", "What happened, when the agent is unknown or not important.", [["The bridge [was destroyed] during the war.", "Il ponte fu distrutto durante la guerra."], ["We [weren't told] about the change.", "Non ci hanno detto del cambiamento."]], 2],
    ["Was born", "Born is a passive form: we always say [was / were born].", [["I [was born] in Naples in 2008.", "Sono nato a Napoli nel 2008."]], 2]
  ],
  mistakes: [
    ["I am born in 2009.", "I was born in 2009.", "Birth is a finished past event: [was born]."],
    ["The windows was cleaned yesterday.", "The windows were cleaned yesterday.", "Plural subject: [were]."],
    ["Where did this photo taken?", "Where was this photo taken?", "Passive questions use be, not do: [Where was … taken?]"],
    ["Rice grows in Asia by farmers.", "Rice is grown in Asia.", "When we mean that people produce it, use the passive [is grown]; ‘by farmers’ adds nothing."],
    ["This book was write in 1990.", "This book was written in 1990.", "Past participle of write: [written]."]
  ],
  contrasts: [
    ["Present simple passive vs past simple passive", "Look at the time: a general fact now, or a finished event?", [["Now / always", "Paper [is made] from wood.", "La carta si fa dal legno.", "A general fact."], ["Finished past", "Paper [was invented] in China.", "La carta fu inventata in Cina.", "A historical event."]]]
  ] });

L({ id: "continuous-perfect", group: "tenses", belt: 3, title: "Continuous and perfect tenses in the passive", short: "is being done · was being done · has been done · had been done",
  intro: "Continuous passives use [being], perfect passives use [been]. Learn the difference: [being] for actions in progress (is being cleaned), [been] for completed actions with a perfect tense (has been cleaned).",
  form: [
    "Present continuous passive: [am / is / are being + past participle]: The room [is being cleaned].",
    "Past continuous passive: [was / were being + past participle]: Dinner [was being cooked] when I arrived.",
    "Present perfect passive: [have / has been + past participle]: Your essay [has been marked].",
    "Past perfect passive: [had been + past participle]: A cake [had just been baked].",
    "Perfect continuous passives (has been being built) exist but are very rare: use the active or another tense."
  ],
  table: [["Tense", "Active", "Passive"], ["Present continuous", "Ricky is cooking dinner.", "Dinner [is being cooked] by Ricky."], ["Past continuous", "They were looking at Joe.", "Joe [was being looked at]."], ["Present perfect", "Have you written your essay yet?", "[Has] your essay [been written] yet?"], ["Past perfect", "I had just baked a cake.", "A cake [had just been baked]."]],
  uses: [
    ["Actions in progress (being)", "Something is happening to the subject now or at a past moment.", [["Sorry, the lift [is being repaired].", "Scusate, l'ascensore è in riparazione."], ["I felt that I [was being followed].", "Avevo la sensazione di essere seguito."]], 3],
    ["Recent results and experiences (has been)", "Present perfect: a past action with a present result.", [["The meeting [has been cancelled].", "La riunione è stata annullata."], ["Three people [have been arrested].", "Sono state arrestate tre persone."]], 3],
    ["An earlier past (had been)", "Past perfect: before another past moment.", [["When we got there, the tickets [had been sold out].", "Quando siamo arrivati, i biglietti erano esauriti."], ["The house [had been empty] for years.", "La casa era vuota da anni."]], 3]
  ],
  mistakes: [
    ["The road is been repaired.", "The road is being repaired.", "Continuous passive: [is being], not is been."],
    ["The letter has being sent.", "The letter has been sent.", "Perfect passive: [has been], not has being."],
    ["Joe was looked at being.", "Joe was being looked at.", "Word order: was + [being] + past participle (+ preposition)."],
    ["My car has been stole.", "My car has been stolen.", "Past participle: [stolen]."],
    ["The work had finished when I arrived. (= someone had finished it)", "The work had been finished when I arrived.", "If someone finished the work, the work is the receiver: [had been finished]."]
  ],
  contrasts: [
    ["Being vs been", "Being = continuous (in progress). Been = perfect (completed).", [["In progress", "The house [is being painted].", "Stanno dipingendo la casa.", "The painters are working now."], ["Completed", "The house [has been painted].", "La casa è stata dipinta.", "The job is done."]]]
  ] });

L({ id: "all-tenses", group: "tenses", belt: 3, title: "The passive in every tense", short: "Future, conditional, infinitive: the complete table",
  intro: "The rule is always the same: put [be] in the tense of the active verb and add the [past participle]. With will, going to, would and the infinitive, be keeps its base form: will [be] done, is going to [be] done, would [be] done, to [be] done.",
  form: [
    "Future with will: [will be + past participle]: The results [will be announced] tomorrow.",
    "Future with going to: [am / is / are going to be + past participle]: The old cinema [is going to be demolished].",
    "Future perfect: [will have been + past participle]: The bridge [will have been finished] by June.",
    "Conditional: [would be + past participle]: It [would be sold] if…",
    "Past conditional: [would have been + past participle]: She [would have been chosen] if she had applied."
  ],
  table: [["Tense", "Active", "Passive"], ["Present simple", "write / writes", "am / is / are [written]"], ["Present continuous", "am / is / are writing", "am / is / are [being written]"], ["Present perfect", "have / has written", "have / has [been written]"], ["Past simple", "wrote", "was / were [written]"], ["Past continuous", "was / were writing", "was / were [being written]"], ["Past perfect", "had written", "had [been written]"], ["Future (will)", "will write", "will [be written]"], ["Future (going to)", "am / is / are going to write", "am / is / are going to [be written]"], ["Future perfect", "will have written", "will [have been written]"], ["Conditional", "would write", "would [be written]"], ["Past conditional", "would have written", "would [have been written]"], ["Infinitive", "to write", "to [be written]"], ["Perfect infinitive", "to have written", "to [have been written]"]],
  uses: [
    ["Future plans and predictions", "News, announcements, plans.", [["A new hospital [will be built] next year.", "L'anno prossimo sarà costruito un nuovo ospedale."], ["The match [is going to be shown] on TV.", "La partita sarà trasmessa in TV."]], 3],
    ["Completed by a future time", "Future perfect passive.", [["By 2030 most cars [will have been replaced] by electric ones.", "Entro il 2030 la maggior parte delle auto sarà stata sostituita da quelle elettriche."]], 4],
    ["Hypothetical situations", "Conditional passive.", [["If the money were found, it [would be returned] to the owner.", "Se il denaro fosse ritrovato, sarebbe restituito al proprietario."], ["Mary [would have been bitten] if she hadn't used an insect repellent.", "Mary sarebbe stata punta se non avesse usato un repellente."]], 4]
  ],
  mistakes: [
    ["The winners will announced tomorrow.", "The winners will be announced tomorrow.", "Future passive: will + [be] + past participle."],
    ["The house is going to built next year.", "The house is going to be built next year.", "Going to + [be] + past participle."],
    ["The work will have finished by Friday. (= someone will finish it)", "The work will have been finished by Friday.", "Future perfect passive: [will have been finished]."],
    ["It would be build if they had the money.", "It would be built if they had the money.", "Past participle of build: [built]."]
  ],
  contrasts: [
    ["Will be done vs is going to be done", "As in the active, will is for predictions and decisions, going to for plans already decided.", [["Prediction", "I'm sure the problem [will be solved] soon.", "Sono sicuro che il problema sarà risolto presto.", "Opinion."], ["Plan", "The road [is going to be closed] for three weeks.", "La strada sarà chiusa per tre settimane.", "A decision already taken."]]]
  ] });

L({ id: "modals", group: "structures", belt: 3, title: "The passive with modal verbs", short: "must be done · should have been done",
  intro: "After a modal verb, the passive is [be + past participle] (present and future) or [have been + past participle] (past). The modal keeps its meaning: obligation, possibility, advice, deduction.",
  form: [
    "Present / future: [modal + be + past participle]: This form [must be signed]. The game [could be cancelled].",
    "Past: [modal + have been + past participle]: The letter [should have been sent] yesterday. It [might have been stolen].",
    "Negative: modal + not + be / have been: Mobile phones [mustn't be used]. It [can't have been done] on purpose.",
    "Semi-modals work the same way: The car [has to be repaired]. The tickets [need to be printed]. It [ought to be checked]."
  ],
  table: [["Modal", "Active", "Passive"], ["must", "You must sign the form.", "The form [must be signed]."], ["can", "You can't use phones here.", "Phones [can't be used] here."], ["should", "They should repair the road.", "The road [should be repaired]."], ["might", "They might cancel the flight.", "The flight [might be cancelled]."], ["have to", "We have to finish it today.", "It [has to be finished] today."], ["should have", "They should have warned us.", "We [should have been warned]."], ["might have", "Someone might have taken it.", "It [might have been taken]."], ["can't have", "Nobody can have seen it.", "It [can't have been seen]."]],
  uses: [
    ["Rules and instructions", "Notices, regulations, instructions.", [["Mobile phones [must be turned off] during the performance.", "I cellulari devono essere spenti durante lo spettacolo."], ["This medicine [should be taken] after meals.", "Questo farmaco va preso dopo i pasti."]], 3],
    ["Possibility", "What could happen to something.", [["The flight [might be delayed] because of the fog.", "Il volo potrebbe essere ritardato a causa della nebbia."]], 3],
    ["Past criticism and regret", "Should have been done: it was necessary, but it didn't happen.", [["We [should have been told] about the changes.", "Avrebbero dovuto dirci dei cambiamenti."], ["Our software systems [should be updated] if we want to become competitive.", "I nostri sistemi software dovrebbero essere aggiornati se vogliamo diventare competitivi."]], 4],
    ["Deduction about the past", "Must have been / can't have been / might have been + past participle.", [["The window [must have been left] open.", "La finestra deve essere stata lasciata aperta."], ["The painting [can't have been stolen]: the alarm didn't go off.", "Il quadro non può essere stato rubato: l'allarme non è scattato."]], 4]
  ],
  mistakes: [
    ["The form must signed by a parent.", "The form must be signed by a parent.", "Modal + [be] + past participle."],
    ["The rules should to be respected.", "The rules should be respected.", "No to after should."],
    ["The car must be repair today.", "The car must be repaired today.", "Past participle: [repaired]."],
    ["The email should have sent yesterday.", "The email should have been sent yesterday.", "Past passive with a modal: should have [been] sent."],
    ["It might been stolen.", "It might have been stolen.", "Past: modal + [have been] + past participle."]
  ],
  contrasts: [
    ["Should be done vs should have been done", "Present / future recommendation vs past regret.", [["Present", "The windows [should be cleaned].", "Le finestre dovrebbero essere pulite.", "It's a good idea now."], ["Past", "The windows [should have been cleaned] before the party.", "Le finestre avrebbero dovuto essere pulite prima della festa.", "It didn't happen."]]]
  ] });

L({ id: "infinitive-gerund", group: "structures", belt: 4, title: "Passive infinitives and gerunds", short: "to be done · to have been done · being done · having been done",
  intro: "When a verb is followed by an infinitive or an -ing form, these can be passive too. The passive infinitive is [to be + past participle]; the passive -ing form is [being + past participle]. The perfect forms ([to have been done], [having been done]) refer to an earlier time.",
  form: [
    "Passive infinitive: [to be + past participle]: I want [to be told] the truth.",
    "Perfect passive infinitive: [to have been + past participle]: She is happy [to have been chosen].",
    "Passive -ing form: [being + past participle]: I hate [being interrupted].",
    "Perfect passive -ing form: [having been + past participle]: [Having been warned], we took the other road.",
    "After verbs and adjectives that take to: want, expect, hope, need, would like, seem, be happy… · After verbs that take -ing and prepositions: enjoy, hate, avoid, remember, mind, without, after, before…"
  ],
  table: [["", "Active", "Passive"], ["Infinitive", "to tell", "[to be told]"], ["Perfect infinitive", "to have told", "[to have been told]"], ["-ing form", "telling", "[being told]"], ["Perfect -ing form", "having told", "[having been told]"]],
  uses: [
    ["After verbs followed by to", "want, expect, hope, would like, need, ask…", [["Everyone wants [to be loved].", "Tutti vogliono essere amati."], ["The report needs [to be finished] by Friday.", "La relazione deve essere finita entro venerdì."]], 4],
    ["After verbs and prepositions followed by -ing", "enjoy, hate, avoid, remember, mind, without, after, instead of…", [["Nobody likes [being criticised] in public.", "A nessuno piace essere criticato in pubblico."], ["He left without [being seen].", "Se ne andò senza essere visto."]], 4],
    ["Perfect forms: earlier actions", "The passive action happened before the main verb.", [["I'm honoured [to have been invited].", "Sono onorato di essere stato invitato."], ["[Having been told] the news, she called her parents.", "Saputa la notizia, chiamò i genitori."]], 5],
    ["Adjective + passive infinitive", "Common in the structure It is easy / difficult / important to be…", [["It's important [to be seen] as reliable.", "È importante essere considerati affidabili."]], 4]
  ],
  mistakes: [
    ["I don't like be told what to do.", "I don't like being told what to do.", "After like (= enjoy) use the -ing form: [being told]."],
    ["She hopes to be choose for the team.", "She hopes to be chosen for the team.", "Past participle: [chosen]."],
    ["He avoided to be seen.", "He avoided being seen.", "Avoid is followed by -ing: [being seen]."],
    ["I remember being took to the zoo as a child.", "I remember being taken to the zoo as a child.", "Past participle of take: [taken]."]
  ],
  contrasts: [
    ["To be done vs being done", "It depends on the verb or preposition before it.", [["+ to", "I expect [to be paid] on time.", "Mi aspetto di essere pagato puntualmente.", "Expect + to-infinitive."], ["+ -ing", "I don't mind [being paid] in cash.", "Non mi dispiace essere pagato in contanti.", "Mind + -ing."]]],
    ["To be done vs to have been done", "Simple infinitive: same time or future. Perfect infinitive: earlier time.", [["Same time", "I'm pleased [to be selected].", "Sono contento di essere selezionato.", "Now."], ["Earlier", "I'm pleased [to have been selected].", "Sono contento di essere stato selezionato.", "The selection happened before."]]]
  ] });

L({ id: "by-agent", group: "structures", belt: 3, title: "The by-agent: when to use it and when to leave it out", short: "Who did it? By + agent",
  intro: "In a passive sentence the person or thing that does the action (the [agent]) is introduced by [by]. In most passive sentences, however, the agent is [not mentioned]: we use the passive precisely because the agent is unknown, obvious or unimportant.",
  form: [
    "[by + agent] after the past participle: The Mona Lisa was painted [by Leonardo].",
    "Leave out the agent when it is [unknown] (My bike was stolen), [obvious] (The thief was arrested – by the police), [general] (people, someone, they, we, you) or [unimportant].",
    "Keep the agent when it is [new or important information]: Hamlet was written [by Shakespeare].",
    "[with] + instrument or material, not by: The door was opened [with a key]. The cake was decorated [with cream]."
  ],
  uses: [
    ["Agent as important information", "Who did it is the point of the sentence.", [["Facebook was invented [by Mark Zuckerberg].", "Facebook è stato inventato da Mark Zuckerberg."], ["The goal was scored [by a nineteen-year-old].", "Il gol è stato segnato da un diciannovenne."]], 3],
    ["No agent: unknown, obvious or general", "Someone, people, they, the police… are left out.", [["My wallet [has been stolen].", "Mi hanno rubato il portafoglio."], ["The suspect [was arrested] last night.", "Il sospettato è stato arrestato ieri sera."], ["Italian [is spoken] in Switzerland.", "In Svizzera si parla italiano."]], 3],
    ["With + instrument", "The tool or substance used.", [["The window was broken [with a stone].", "La finestra è stata rotta con una pietra."]], 3]
  ],
  mistakes: [
    ["My phone was stolen by someone.", "My phone was stolen.", "By someone gives no information: leave it out."],
    ["English is spoken all over the world by people.", "English is spoken all over the world.", "By people is general and useless."],
    ["The letter was written from my grandfather.", "The letter was written by my grandfather.", "Italian ‘da’ = [by] for the agent, not from."],
    ["The door was opened by a key.", "The door was opened with a key.", "Instrument: [with], not by."]
  ],
  contrasts: [
    ["By vs with", "By introduces who (or what) does the action; with introduces the instrument used.", [["Agent", "The cake was made [by my grandmother].", "La torta è stata fatta da mia nonna.", "Who made it."], ["Instrument", "The cake was decorated [with chocolate].", "La torta è stata decorata con il cioccolato.", "What was used."]]]
  ] });

L({ id: "two-objects", group: "structures", belt: 4, title: "Verbs with two objects", short: "Peter was lent a book · A book was lent to Peter",
  intro: "Some verbs, such as [give, send, lend, show, offer, tell, teach, ask, pay, promise], can have two objects: a direct object (a thing) and an indirect object (a person). These sentences have two possible passives. The most common one, called the [personal construction], has the [person] as subject.",
  form: [
    "Active: Susan lent [Peter] (indirect) [a book] (direct).",
    "Personal passive (more common): [Peter was lent a book] (by Susan).",
    "Impersonal passive: [A book was lent to Peter] (by Susan). Note the preposition [to] (or for) before the person.",
    "Italian has only the second option (Un libro è stato prestato a Peter). English prefers the first, with the [person as subject]: Peter was lent a book."
  ],
  table: [["Active", "Personal passive", "Impersonal passive"], ["They gave me a tablet.", "[I was given] a tablet.", "A tablet [was given to me]."], ["Someone showed Sally the app.", "[Sally was shown] the app.", "The app [was shown to Sally]."], ["The police asked us a lot of questions.", "[We were asked] a lot of questions.", "— (not natural)"], ["They offered him a job.", "[He was offered] a job.", "A job [was offered to him]."]],
  uses: [
    ["Person as subject (the most common)", "The person who receives something is the topic of the sentence.", [["I [was given] a tablet to use as an e-book.", "Mi è stato dato un tablet da usare come e-book."], ["Molly's father [was given] the good news.", "Al padre di Molly è stata data la bella notizia."], ["We [were asked] a lot of questions.", "Ci hanno fatto molte domande."]], 4],
    ["Thing as subject", "When the thing is the topic. Use to before the person.", [["The prize [was awarded to] a young scientist.", "Il premio è stato assegnato a una giovane scienziata."]], 4],
    ["Verbs that don't allow the person as subject", "explain, describe, suggest, say, announce, report take only the thing as subject: The problem was explained to me.", [["The rules [were explained to] the students.", "Le regole sono state spiegate agli studenti."]], 5]
  ],
  mistakes: [
    ["To me was given a prize.", "I was given a prize. / A prize was given to me.", "Italian ‘A me è stato dato’: in English the person becomes the subject: [I was given]."],
    ["She was explained the problem.", "The problem was explained to her.", "Explain cannot have the person as subject."],
    ["A book was lent Peter.", "A book was lent to Peter. / Peter was lent a book.", "When the thing is the subject, add [to] before the person."],
    ["He was offer a new job.", "He was offered a new job.", "Past participle: [offered]."]
  ],
  contrasts: [
    ["Personal vs impersonal construction", "Both are correct with most verbs; the personal one sounds more natural in English.", [["Personal", "[Jane wasn't offered] a part-time job.", "A Jane non è stato offerto un lavoro part-time.", "Person as subject: very common."], ["Impersonal", "[A part-time job wasn't offered to Jane].", "Un lavoro part-time non è stato offerto a Jane.", "Thing as subject: less common."]]]
  ] });

L({ id: "have-done", group: "structures", belt: 4, title: "Have / get something done", short: "Services and unpleasant experiences",
  intro: "[have + object + past participle] means that someone else does something for us, usually a professional service we arrange and pay for. The same structure also describes an [unpleasant experience] caused by someone else (I had my bag stolen). [get something done] is a more informal alternative.",
  form: [
    "[have + object + past participle]: I [had my hair cut]. She's [having her flat redecorated].",
    "[have] changes tense; the past participle never changes: I have / am having / had / have had / will have / am going to have [my car serviced].",
    "Questions and negatives use the auxiliaries of have: [Did you have] your car fixed? They [aren't going to have] their house painted.",
    "[get + object + past participle] (informal): I need to [get my phone repaired].",
    "To name the person who does the job: by: I'm having my wedding dress [made by] a famous designer."
  ],
  uses: [
    ["Services done by someone else", "We arrange for a professional to do it.", [["I'm [having my flat redecorated].", "Mi sto facendo ridipingere l'appartamento."], ["He [has his beard trimmed] every week.", "Si fa regolare la barba ogni settimana."], ["We [had a new kitchen fitted] last year.", "Ci siamo fatti montare una cucina nuova l'anno scorso."]], 4],
    ["Unpleasant experiences", "Something bad done to us or to our things by someone else.", [["I [had my handbag stolen] on the train.", "Mi hanno rubato la borsa sul treno."], ["He [had his car damaged] in the storm.", "Gli si è danneggiata la macchina durante la tempesta."]], 4],
    ["Get something done (informal)", "Same meaning, more informal; often suggests effort or urgency.", [["You should [get your eyes tested].", "Dovresti farti controllare la vista."]], 4]
  ],
  mistakes: [
    ["I cut my hair at the hairdresser's.", "I had my hair cut at the hairdresser's.", "If the hairdresser cut it, you [had your hair cut]. ‘I cut my hair’ means you did it yourself."],
    ["I had cut my hair yesterday.", "I had my hair cut yesterday.", "Word order: have + [object] + past participle."],
    ["She had her car repair.", "She had her car repaired.", "Past participle: [repaired]."],
    ["Did you had your car fixed?", "Did you have your car fixed?", "After did: base form [have]."],
    ["I'm going to make my house painted.", "I'm going to have my house painted.", "Italian ‘farsi fare’ is [have / get something done], not make."]
  ],
  contrasts: [
    ["I did it vs I had it done", "The active means I did it myself; have something done means someone else did it.", [["Myself", "I [repaired] my bike.", "Ho riparato la bici (da solo).", "I did the work."], ["Someone else", "I [had my bike repaired].", "Mi sono fatto riparare la bici.", "A mechanic did the work."]]],
    ["Have something done: service vs experience", "The structure is the same; the context tells you the meaning.", [["Service", "I [had my hair cut] yesterday.", "Mi sono fatto tagliare i capelli ieri.", "I wanted it."], ["Experience", "I [had my wallet stolen] yesterday.", "Mi hanno rubato il portafoglio ieri.", "I didn't want it."]]]
  ] });

L({ id: "reporting", group: "advanced", belt: 5, title: "Reporting verbs: It is said that… / He is said to…", short: "Impersonal and personal passive with say, believe, think, suppose, expect…",
  intro: "With verbs like [say, believe, think, know, report, expect, suppose, consider, claim] we use two passive structures to report what people in general say or believe, especially in news and formal writing: the [impersonal construction] (It is said that…) and the [personal construction] (He is said to…).",
  form: [
    "Impersonal: [It + be + past participle + that + clause]: [It is said that] Mary will leave. [It was believed that] the earth was flat.",
    "Personal: [subject + be + past participle + to-infinitive]: Mary [is said to] leave soon. The earth [was believed to be] flat.",
    "Same time: [to + base form]: He is said [to live] in Paris.",
    "In progress now: [to be + -ing]: She is believed [to be living] in Belfast.",
    "Earlier time: [to have + past participle]: He is thought [to have left] the country.",
    "Earlier, in progress: [to have been + -ing]: They are said [to have been working] on it for years.",
    "[be supposed to]: (1) people say: The painting is supposed to be worth a million. (2) obligation / expectation: You're not supposed to cheat. [be expected to]: what people expect or what is required."
  ],
  table: [["Active", "Impersonal passive", "Personal passive"], ["People say that he lives in Rome.", "[It is said that] he lives in Rome.", "He [is said to live] in Rome."], ["People believe that she is living in Belfast.", "[It is believed that] she is living in Belfast.", "She [is believed to be living] in Belfast."], ["People think that he left the country.", "[It is thought that] he left the country.", "He [is thought to have left] the country."], ["People expected that the team would win.", "[It was expected that] the team would win.", "The team [was expected to win]."]],
  uses: [
    ["Reporting opinions and rumours (news, formal writing)", "When the source is people in general or is not important.", [["[It is believed that] the fire started in the kitchen.", "Si ritiene che l'incendio sia partito dalla cucina."], ["The minister [is said to be] considering resigning.", "Si dice che il ministro stia pensando di dimettersi."]], 5],
    ["Personal construction with different times", "The infinitive shows the time relation.", [["By 2050 the global population [is thought to have reached] 9.7 billion.", "Si pensa che entro il 2050 la popolazione mondiale avrà raggiunto i 9,7 miliardi."], ["The man they found [is believed to be] the man who was kidnapped.", "Si ritiene che l'uomo ritrovato sia quello rapito."]], 5],
    ["Be supposed to: rules and expectations", "What is expected or required, often not done.", [["You're [not supposed to] use your phone in class.", "Non si dovrebbe usare il telefono in classe."], ["The students [were supposed to have done] their homework.", "Gli studenti avrebbero dovuto fare i compiti."]], 4],
    ["Be expected to", "What is expected to happen, or what people are required to do.", [["The new smartphone [is expected to] be available next month.", "Il nuovo smartphone dovrebbe essere disponibile il mese prossimo."], ["All patients [are expected to] fill out the form.", "Tutti i pazienti sono tenuti a compilare il modulo."]], 5]
  ],
  mistakes: [
    ["He is said that he lives in Rome.", "He is said to live in Rome. / It is said that he lives in Rome.", "Don't mix the two structures: [It is said that + clause] or [subject + is said to + infinitive]."],
    ["She is believed to living abroad.", "She is believed to be living abroad.", "Continuous infinitive: [to be + -ing]."],
    ["He is thought to have leave.", "He is thought to have left.", "Perfect infinitive: to have + [past participle]."],
    ["It is supposed that you wash your hands. (rule)", "You are supposed to wash your hands.", "For rules and obligations use the personal construction: [You're supposed to…]"],
    ["They say to be very rich.", "They are said to be very rich.", "The passive needs be: [are said to]."]
  ],
  contrasts: [
    ["Impersonal vs personal construction", "Both report the same idea; the personal one is shorter and very common in news.", [["Impersonal", "[It is expected that] the local team will win the championship.", "Ci si aspetta che la squadra locale vinca il campionato.", "It + passive + that."], ["Personal", "The local team [is expected to win] the championship.", "La squadra locale dovrebbe vincere il campionato.", "Subject + passive + to-infinitive."]]],
    ["To do / to be doing / to have done", "The infinitive tells you when the action happens compared with the reporting verb.", [["Same time", "She is said [to work] at the hospital.", "Si dice che lavori all'ospedale.", "Now / generally."], ["Earlier", "She is said [to have worked] at the hospital.", "Si dice che abbia lavorato all'ospedale.", "In the past."]]]
  ] });

L({ id: "advanced", group: "advanced", belt: 5, title: "Advanced passive structures", short: "get-passive, prepositional verbs, make / let / see, need + -ing and more",
  intro: "Beyond the basic structures, English has several passive patterns that are common in natural speech and in formal writing. Many of them have no direct equivalent in Italian.",
  form: [
    "[get + past participle] (informal, often for unexpected or unwelcome events): He [got fired]. Our car [got stolen].",
    "Prepositional verbs keep the preposition after the participle: Someone looked after the baby → The baby [was looked after]. People laughed at him → He [was laughed at].",
    "make / see / hear + object + base form in the active, but [to-infinitive] in the passive: They made him wait → He [was made to wait]. Someone saw her leave → She [was seen to leave].",
    "let has no passive: use [be allowed to]: They let us go → We [were allowed to] go.",
    "[need / want + -ing] = passive meaning: The car [needs washing] (= needs to be washed).",
    "Questions with who / what as object: [Who was] the film [directed by]? [What is] it [made of]?"
  ],
  uses: [
    ["Get-passive", "Informal; for things that happen to people, often suddenly or unpleasantly.", [["Three people [got injured] in the accident.", "Tre persone sono rimaste ferite nell'incidente."], ["Don't leave your bike here: it'll [get stolen].", "Non lasciare qui la bici: te la rubano."]], 5],
    ["Prepositional and phrasal verbs", "The preposition stays with the verb.", [["The children [are being looked after] by their grandparents.", "I bambini sono accuditi dai nonni."], ["The meeting [has been put off] until Friday.", "La riunione è stata rimandata a venerdì."]], 5],
    ["Make, see, hear in the passive", "Use to + base form after the participle.", [["We [were made to] wait for hours.", "Ci hanno fatto aspettare per ore."], ["He [was heard to] say that he was leaving.", "Lo si è sentito dire che se ne andava."]], 5],
    ["Questions ending in a preposition", "Very common with by, of, for, about.", [["Who [was] this picture [painted by]?", "Da chi è stato dipinto questo quadro?"], ["What [is] this sauce [made of]?", "Di cosa è fatta questa salsa?"]], 4],
    ["Verbs that cannot be passive", "Intransitive verbs (happen, arrive, die, seem, appear, disappear) and some state verbs (have = possess, fit, suit, lack, resemble).", [["The accident [happened] at night. (not ‘was happened’)", "L'incidente è avvenuto di notte."], ["This jacket [doesn't fit] me. (not ‘I am not fitted’)", "Questa giacca non mi sta bene."]], 4]
  ],
  mistakes: [
    ["The baby was looked by her grandmother.", "The baby was looked after by her grandmother.", "Keep the preposition of the verb: looked [after]."],
    ["We were made wait for an hour.", "We were made to wait for an hour.", "Make in the passive takes [to]: were made to wait."],
    ["We were let to go home early.", "We were allowed to go home early.", "Let has no passive form: use [be allowed to]."],
    ["The letter was arrived this morning.", "The letter arrived this morning.", "Arrive has no object, so it cannot be passive."],
    ["By whom was written this book?", "Who was this book written by?", "Word order: question word + was + subject + past participle (+ by). By whom was this book written? is correct but very formal."]
  ],
  contrasts: [
    ["Be-passive vs get-passive", "Be is neutral and used in all styles; get is informal and often describes a change or an unexpected event.", [["be", "The building [was damaged] by the earthquake.", "L'edificio è stato danneggiato dal terremoto.", "Neutral, formal."], ["get", "My phone [got broken] when I dropped it.", "Mi si è rotto il telefono quando l'ho fatto cadere.", "Informal, unexpected."]]],
    ["Active and passive with make", "In the active: make + object + base form. In the passive: be made + to + base form.", [["Active", "The teacher [made us rewrite] the essay.", "L'insegnante ci ha fatto riscrivere il tema.", "Base form."], ["Passive", "We [were made to rewrite] the essay.", "Ci hanno fatto riscrivere il tema.", "To + base form."]]]
  ] });
