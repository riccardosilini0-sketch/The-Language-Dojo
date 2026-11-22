/* Word Formation — configuration and lessons.
   Lesson format (read by assets/js/grammar-lab.js):
     form: [lines]  ·  table: [[header…], [row…], …]  (optional)
     uses: [[title, explanation, [[example, Italian], …], belt?], …]
     mistakes: [[wrong, right, why], …]
     contrasts: [[title, explanation, [[label, example, Italian, note], …]], …]
   [words] in square brackets are highlighted; ~~words~~ are wrong forms. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "Word formation means building new words from a base: a suffix changes the word class (decide → decision), a prefix changes the meaning (possible → impossible). Learn the main prefixes and suffixes, then practise with sentences and with texts in the style of Cambridge Use of English, Part 3 (B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency).",
  lessonsLead: "Each lesson is a reference you can come back to: the affixes in a table, spelling rules, meanings with examples, common mistakes and comparisons. Every lesson ends with its own practice.",
  groups: [["basics", "The basics"], ["suffixes", "Suffixes"], ["prefixes", "Prefixes"]],
  levels: { 3: "B1 Preliminary: one change only (adjective → adverb, verb → noun) and the most common negative prefixes", 4: "B2 First: two changes (fortune → unfortunately), spelling changes (high → height), singular and plural", 5: "C1 Advanced: formal and academic words, less transparent roots, several affixes", 6: "C2 Proficiency: rare or idiomatic derivatives, fine distinctions of meaning and collocation" },
  reviewTitle: "Word Formation – Exam Practice",
  instr: {
    mc: "Choose the correct word to complete each sentence.",
    correct: "Each sentence contains a wrong word form. Write the correct sentence."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== THE BASICS ============================== */
L({ id: "how", group: "basics", belt: 3, title: "How word formation works", short: "Word classes, affixes and a method for Part 3",
  intro: "Most English words belong to a [family]: success, succeed, successful, successfully, unsuccessful. A [suffix] at the end usually changes the [word class] (verb → noun, adjective → adverb); a [prefix] at the beginning changes the [meaning] (happy → unhappy) but not the class. In Cambridge Use of English, Part 3, you read a sentence or a text, look at the word in CAPITALS and write the form that fits the gap.",
  form: [
    "[Suffix] = ending that usually changes the word class: [decide] (verb) → [decision] (noun) → [decisive] (adjective) → [decisively] (adverb).",
    "[Prefix] = beginning that changes the meaning: [usual] → [unusual], [write] → [rewrite], [understand] → [misunderstand]. The word class stays the same.",
    "Many answers need [two or more changes]: fortune → fortunate → [unfortunately] (prefix + suffix + suffix).",
    "Spelling can change inside the word: [high → height], [choose → choice], [long → length], [explain → explanation], [pronounce → pronunciation].",
    "Look at the [grammar around the gap] first: what comes before and after tells you the word class, then the meaning tells you whether you need a negative or a plural."
  ],
  table: [["Gap position", "Word class needed", "Example"], ["after a / an / the / my / this", "noun", "It was a difficult [decision]."], ["after an adjective", "noun", "She showed great [patience]."], ["after be, seem, look, become", "adjective", "The film was really [enjoyable]."], ["before a noun", "adjective", "a [dangerous] road"], ["after a verb or at the end of a clause", "adverb", "He drove [carefully]."], ["before an adjective or a participle", "adverb", "an [extremely] [well]-paid job"], ["after to / modal verb", "verb", "We need to [modernise] the office."]],
  uses: [
    ["Step 1 · Find the word class", "Read the whole sentence. Decide what the gap needs: noun, verb, adjective or adverb. Articles, determiners and adjectives point to a noun; be and linking verbs point to an adjective; a verb before the gap often needs an adverb after it.", [["The [arrival] of the train was delayed. (ARRIVE)", "L'arrivo del treno è stato ritardato."], ["She answered [calmly]. (CALM)", "Ha risposto con calma."]]],
    ["Step 2 · Positive or negative?", "Check the meaning of the whole sentence. Words like but, although, never, unfortunately or a complaint in the context often tell you that you need a negative prefix.", [["The instructions were so [unclear] that nobody understood them. (CLEAR)", "Le istruzioni erano così poco chiare che nessuno le capiva."]]],
    ["Step 3 · Singular or plural? Person or thing?", "A noun may need -s: look at the verb and the determiner (many, several, a few, there are). Decide whether the sentence talks about a person (-er, -or, -ist, -ant) or an idea (-tion, -ment, -ness).", [["There are several [differences] between the two versions. (DIFFER)", "Ci sono diverse differenze tra le due versioni."], ["My brother is a [scientist]. (SCIENCE)", "Mio fratello è uno scienziato."]]],
    ["Step 4 · Check the spelling", "Write the word in full and check internal changes (pronounce → pronunciation), doubled letters (begin → beginner) and a final -e (use → usable, but change → changeable).", [["Her [pronunciation] is excellent. (PRONOUNCE)", "La sua pronuncia è eccellente."]]],
    ["Exam tips", "In Part 3 you always have to change the word: the word in capitals is never the answer as it is. Write one word only. British and American spellings are both accepted (organise / organize), but the spelling must be correct.", [["The [organisation] / [organization] of the event was perfect. (ORGANISE)", "L'organizzazione dell'evento è stata perfetta."]], 4]
  ],
  mistakes: [
    ["It was a very success party.", "It was a very successful party.", "Before a noun we need an [adjective]: successful. Success is a noun."],
    ["She sings beautiful.", "She sings beautifully.", "After the verb sing we need an [adverb] to describe how she sings."],
    ["There are a lot of different between them.", "There are a lot of differences between them.", "After a lot of we need a [noun], and here it must be plural: differences."],
    ["The heighth of the tower is 50 metres.", "The height of the tower is 50 metres.", "Spelling change: high → [height] (compare long → length, wide → width)."],
    ["He was very unpolite.", "He was very impolite.", "Each adjective takes its own negative prefix: [impolite], not ~~unpolite~~. Learn the negative together with the word."]
  ],
  contrasts: [
    ["Prefix or suffix?", "A prefix changes the meaning, a suffix changes the word class. Many answers need both.", [["Prefix", "The story was [unbelievable].", "La storia era incredibile.", "un- + believe + -able: negative adjective"], ["Suffix", "Her [belief] in God is strong.", "La sua fede in Dio è forte.", "believe → belief: noun"]]],
    ["Same family, different class", "Choose the member of the family that the grammar needs.", [["Noun", "Thank you for your [help].", "Grazie per il tuo aiuto.", "after your"], ["Adjective", "She was very [helpful].", "È stata molto disponibile.", "after be + very"], ["Adverb", "He [helpfully] carried my bags.", "Mi ha gentilmente portato le borse.", "describes the verb"]]]
  ] });

/* ============================== SUFFIXES ============================== */
L({ id: "nouns", group: "suffixes", belt: 3, title: "Suffixes that form nouns", short: "-tion, -ment, -ness, -ity, -ance, -er, -ist, -hood, -ship",
  intro: "Noun suffixes turn verbs and adjectives into nouns. Some form [abstract nouns] – ideas, states, qualities and processes (decide → [decision], happy → [happiness]); others form [agent nouns] – the person or thing that does something (teach → [teacher], art → [artist]).",
  form: [
    "Verb → abstract noun: [-tion / -sion / -ation] (inform → information, decide → decision), [-ment] (develop → development), [-ance / -ence] (appear → appearance, prefer → preference), [-al] (arrive → arrival, refuse → refusal), [-ure] (fail → failure).",
    "Adjective → abstract noun: [-ness] (kind → kindness), [-ity] (possible → possibility, popular → popularity), [-ce / -cy] (important → importance, fluent → fluency), [-th] (warm → warmth, strong → strength).",
    "Noun → abstract noun (state, relationship, period): [-hood] (child → childhood, neighbour → neighbourhood), [-ship] (friend → friendship, member → membership), [-dom] (free → freedom, bore → boredom), [-ism] (tour → tourism, optimist → optimism).",
    "Agent nouns (people and things): [-er] (teach → teacher, open → opener), [-or] (act → actor, invent → inventor), [-ist] (art → artist, science → scientist), [-ant / -ent] (assist → assistant, reside → resident), [-ian] (music → musician, library → librarian), [-ee] (employ → employee, the person who is employed).",
    "Spelling: drop a final -e before a vowel (create → creation); y → i (happy → happiness, ready → readiness); some stems change (explain → explanation, pronounce → pronunciation, maintain → maintenance, deep → depth, long → length, high → height, choose → choice, lose → loss, die → death)."
  ],
  table: [["Suffix", "Base", "Noun", "Type"], ["-tion / -sion / -ation", "inform, decide, imagine", "[information], [decision], [imagination]", "action, process"], ["-ment", "develop, achieve, enjoy", "[development], [achievement], [enjoyment]", "action, result"], ["-ness", "kind, aware, weak", "[kindness], [awareness], [weakness]", "quality, state"], ["-ity", "able, curious, generous", "[ability], [curiosity], [generosity]", "quality"], ["-ance / -ence", "perform, patient, depend", "[performance], [patience], [dependence]", "action, quality"], ["-er / -or", "drive, visit, direct", "[driver], [visitor], [director]", "agent"], ["-ist / -ian", "journal, piano, politics", "[journalist], [pianist], [politician]", "agent: profession"], ["-ee / -ant", "employ, interview, apply", "[employee], [interviewee], [applicant]", "person affected / agent"], ["-hood / -ship / -dom", "child, leader, wise", "[childhood], [leadership], [wisdom]", "state, period, relation"]],
  uses: [
    ["Actions and processes: -tion, -ment, -al, -ance", "These suffixes name the action of the verb or its result.", [["The [construction] of the bridge took four years.", "La costruzione del ponte ha richiesto quattro anni."], ["We celebrated the [achievement] of our goals.", "Abbiamo festeggiato il raggiungimento dei nostri obiettivi."], ["His [refusal] to help surprised everyone.", "Il suo rifiuto di aiutare ha sorpreso tutti."]]],
    ["Qualities and states: -ness, -ity, -ence, -th", "From adjectives we form the name of the quality. -ity is common with Latin adjectives ending in -able, -al, -ous, -ive (able → ability, real → reality, curious → curiosity, active → activity).", [["Thank you for your [kindness].", "Grazie per la tua gentilezza."], ["The [popularity] of e-bikes is growing.", "La popolarità delle bici elettriche è in crescita."], ["Check the [length] and the [width] of the table.", "Controlla la lunghezza e la larghezza del tavolo."]]],
    ["People who do something: -er, -or, -ist, -ian, -ant", "Agent nouns usually come from verbs (-er, -or, -ant) or from nouns for a subject or an instrument (-ist, -ian). -or is typical of Latin verbs: act, direct, invent, edit, visit, translate.", [["She works as a [translator] for the EU.", "Lavora come traduttrice per l'UE."], ["The [winner] gets a trip to Paris.", "Il vincitore riceve un viaggio a Parigi."], ["My aunt is an [electrician].", "Mia zia è un'elettricista."]]],
    ["-er and -ee: who does it and who receives it", "-er is the person who acts; -ee is the person to whom the action is done.", [["The [employer] pays the [employees] every month.", "Il datore di lavoro paga i dipendenti ogni mese."], ["The [interviewer] asked the [interviewee] three questions.", "L'intervistatore ha fatto tre domande all'intervistato."]], 4],
    ["Periods, relationships, systems: -hood, -ship, -dom, -ism", "-hood is a period or state (childhood), -ship a relationship or skill (friendship, leadership), -dom a state or domain (freedom, kingdom), -ism a system or movement (tourism, racism).", [["I had a happy [childhood].", "Ho avuto un'infanzia felice."], ["Their [friendship] lasted fifty years.", "La loro amicizia è durata cinquant'anni."], ["Mass [tourism] is changing the city.", "Il turismo di massa sta cambiando la città."]], 4]
  ],
  mistakes: [
    ["We need more informations.", "We need more information.", "[Information] is uncountable: no -s, and no an. The same is true of advice, knowledge, equipment."],
    ["I admire her patient.", "I admire her patience.", "After the possessive her we need a noun: patient (adjective) → [patience]."],
    ["The explaination was clear.", "The explanation was clear.", "Spelling change: explain → [explanation] (the i disappears)."],
    ["He is a good politic.", "He is a good politician.", "The person is a [politician]; politics is the subject and political the adjective."],
    ["I have a strong believe in justice.", "I have a strong belief in justice.", "Verb believe → noun [belief] (f, not v). Compare prove → proof, relieve → relief."]
  ],
  contrasts: [
    ["-er and -ee", "The suffix tells you who acts and who receives the action.", [["-er", "The [trainer] explains the exercises.", "L'allenatore spiega gli esercizi.", "the person who trains"], ["-ee", "Each [trainee] gets a manual.", "Ogni tirocinante riceve un manuale.", "the person who is trained"]]],
    ["The person and the subject", "Many fields have three related nouns.", [["Subject", "She studies [economics].", "Studia economia.", ""], ["Person", "She wants to be an [economist].", "Vuole diventare un'economista.", ""], ["Adjective", "an [economic] crisis · an [economical] car", "una crisi economica · un'auto economica", "economic = of the economy, economical = cheap to run"]]]
  ] });

L({ id: "adjectives", group: "suffixes", belt: 3, title: "Suffixes that form adjectives", short: "-able, -al, -ful, -less, -ous, -ive, -ic, -y, -ed and -ing",
  intro: "Adjective suffixes turn nouns and verbs into adjectives. Some have a clear meaning: [-able] = can be done (washable), [-ful] = with (useful), [-less] = without (useless). Others simply mark the word class: [-al, -ous, -ive, -ic, -y].",
  form: [
    "Noun → adjective: [-al] (nation → national, music → musical), [-ous] (danger → dangerous, fame → famous), [-ful / -less] (care → careful / careless), [-ic] (artist → artistic, economy → economic), [-y] (rain → rainy, health → healthy), [-ish] (child → childish), [-ly] (friend → friendly, cost → costly).",
    "Verb → adjective: [-able / -ible] (enjoy → enjoyable, access → accessible), [-ive] (attract → attractive, create → creative), [-ent / -ant] (depend → dependent, please → pleasant).",
    "[-ed / -ing] from verbs of feeling: [-ed] describes how a person feels (I'm bored), [-ing] describes what causes the feeling (the film is boring).",
    "Spelling: drop -e before -able / -ous / -ive (use → usable, fame → famous, create → creative) but keep it after soft c / g (notice → noticeable, change → changeable); y → i (beauty → beautiful, luxury → luxurious); some stems change (space → spacious, vary → various, science → scientific, energy → energetic, sense → sensible / sensitive).",
    "-ful has one l: [careful], [beautiful], [successful]."
  ],
  table: [["Suffix", "Meaning", "Examples"], ["-able / -ible", "that can be …", "[washable], [reliable], [visible], [flexible]"], ["-ful", "with, full of", "[helpful], [painful], [successful]"], ["-less", "without", "[helpless], [painless], [pointless]"], ["-ous / -ious", "having the quality of", "[dangerous], [ambitious], [mysterious]"], ["-al / -ial", "related to", "[cultural], [financial], [essential]"], ["-ive / -ative", "having the tendency", "[creative], [talkative], [protective]"], ["-ic / -ical", "related to", "[historic], [historical], [economic], [economical]"], ["-y", "with, like", "[cloudy], [salty], [risky]"], ["-ed / -ing", "feeling / cause", "[interested] / [interesting], [tired] / [tiring]"]],
  uses: [
    ["-able / -ible: possibility", "That can be done. -able is the productive form (we add it to new verbs); -ible comes with Latin roots: visible, possible, flexible, responsible, terrible, edible.", [["This jacket is [washable] at 30 degrees.", "Questa giacca è lavabile a 30 gradi."], ["The museum is [accessible] to wheelchair users.", "Il museo è accessibile alle persone in sedia a rotelle."]]],
    ["-ful and -less: with and without", "Many pairs exist (useful / useless, careful / careless, harmful / harmless), but not all: we say [priceless] (extremely valuable), [worthless] (with no value) and [valuable].", [["Thanks, that's very [useful].", "Grazie, è molto utile."], ["It's [pointless] to argue with him.", "È inutile discutere con lui."], ["The painting is [priceless].", "Il quadro non ha prezzo."]]],
    ["-ous, -al, -ive, -ic, -y: word class", "These suffixes mainly mark the adjective. Learn them with the noun or the verb they come from.", [["Climbing without a rope is [dangerous].", "Arrampicare senza corda è pericoloso."], ["She's very [creative] and [artistic].", "È molto creativa e artistica."], ["It was a [cloudy], [windy] day.", "Era una giornata nuvolosa e ventosa."]]],
    ["-ed and -ing", "-ed: how someone feels. -ing: the thing or person that causes the feeling.", [["I was [disappointed] with the result.", "Ero deluso dal risultato."], ["The result was [disappointing].", "Il risultato è stato deludente."]]],
    ["Pairs with different meanings", "Some bases form two adjectives with different meanings: [economic] (of the economy) / [economical] (saving money); [historic] (important in history) / [historical] (about history); [sensible] (reasonable) / [sensitive] (easily upset, delicate); [childish] (silly, negative) / [childlike] (innocent, positive).", [["It was a [historic] victory.", "È stata una vittoria storica."], ["She writes [historical] novels.", "Scrive romanzi storici."], ["Be [sensible]: take an umbrella.", "Sii ragionevole: prendi un ombrello."]], 5]
  ],
  mistakes: [
    ["The museum was very interested.", "The museum was very interesting.", "The museum causes the feeling: [interesting]. Interested describes the person who feels it."],
    ["She was carefull with the glasses.", "She was careful with the glasses.", "The suffix -ful has [one l]: careful, beautiful, successful."],
    ["The trip was very enjoyful.", "The trip was very enjoyable.", "Enjoy forms [enjoyable] (that can be enjoyed); there is no adjective ~~enjoyful~~."],
    ["He is a very sensible person: he cries at sad films.", "He is a very sensitive person: he cries at sad films.", "[Sensitive] = easily moved or upset. [Sensible] = reasonable, practical (a false friend: Italian ‘sensibile’ = sensitive)."],
    ["It's a very value ring.", "It's a very valuable ring.", "Before a noun we need an adjective: value → [valuable]."]
  ],
  contrasts: [
    ["-ful and -less", "Usually opposites, but check the meaning: priceless is positive.", [["-ful", "The staff were very [helpful].", "Il personale è stato molto disponibile.", "with help"], ["-less", "Without a map we felt [helpless].", "Senza una mappa ci sentivamo impotenti.", "without help"], ["Careful!", "a [priceless] painting · a [worthless] coin", "un quadro inestimabile · una moneta senza valore", "priceless = extremely valuable"]]],
    ["-ed and -ing", "Feeling and cause.", [["-ed", "The children were [excited].", "I bambini erano emozionati.", "how they felt"], ["-ing", "It was an [exciting] match.", "È stata una partita emozionante.", "what caused the feeling"]]]
  ] });

L({ id: "verbs", group: "suffixes", belt: 4, title: "Suffixes that form verbs", short: "-ise / -ize, -ify, -ate, -en and the prefix en-",
  intro: "A few suffixes turn nouns and adjectives into verbs meaning [make or become]: modern → [modernise] (make modern), simple → [simplify] (make simple), wide → [widen] (make or become wider). The prefix [en-] / [em-] does the same job at the beginning of the word: rich → [enrich], power → [empower].",
  form: [
    "[-ise / -ize]: modern → modernise, real → realise, critic → criticise, organ → organise, summary → summarise, apology → apologise. British English uses both spellings; American English uses -ize. Some verbs always take -ise: advertise, advise, compromise, exercise, surprise, supervise.",
    "[-ify]: simple → simplify, class → classify, pure → purify, note → notify, beauty → beautify, solid → solidify, just → justify.",
    "[-ate]: active → activate, motive → motivate, origin → originate, valid → validate, captive → captivate.",
    "[-en] with one-syllable adjectives and nouns: wide → widen, short → shorten, weak → weaken, length → lengthen, strength → strengthen, threat → threaten, height → heighten.",
    "[en- / em-] at the beginning: able → enable, courage → encourage, large → enlarge, danger → endanger, rich → enrich, power → empower.",
    "Spelling: drop a final -y or -e before -ise / -ify (memory → memorise, apology → apologise, simple → simplify); clarify comes from clear, pacify from peace, glorify from glory."
  ],
  table: [["Suffix / prefix", "Base", "Verb", "Meaning"], ["-ise / -ize", "modern, critic, memory", "[modernise], [criticise], [memorise]", "make, do, become"], ["-ify", "simple, clear, intense", "[simplify], [clarify], [intensify]", "make"], ["-ate", "active, motive, alien", "[activate], [motivate], [alienate]", "make, cause"], ["-en", "wide, short, strength", "[widen], [shorten], [strengthen]", "make or become"], ["en- / em-", "able, courage, power", "[enable], [encourage], [empower]", "make, put into"]],
  uses: [
    ["-ise / -ize", "The most productive verb suffix, used with nouns and adjectives. Both spellings are correct in British English; be consistent.", [["The government wants to [modernise] the railways.", "Il governo vuole modernizzare le ferrovie."], ["Can you [summarise] the article in 100 words?", "Puoi riassumere l'articolo in 100 parole?"]]],
    ["-ify", "Make something have a quality. The noun ends in -ification: simplify → simplification, classify → classification.", [["Let me [clarify] what I mean.", "Lascia che chiarisca che cosa intendo."], ["Please [notify] us of any changes.", "Vi preghiamo di comunicarci eventuali modifiche."]]],
    ["-en: make or become", "Used with short adjectives and some nouns. Many of these verbs can be used with or without an object.", [["They are going to [widen] the road.", "Allargheranno la strada."], ["The days [lengthen] in spring.", "In primavera le giornate si allungano."], ["The exercise will [strengthen] your back.", "L'esercizio rafforzerà la schiena."]]],
    ["en- / em-: prefix that forms verbs", "Used before nouns and adjectives; em- before b and p. The noun usually ends in -ment: encourage → encouragement, enlarge → enlargement.", [["The new app will [enable] you to pay by phone.", "La nuova app ti permetterà di pagare con il telefono."], ["My parents always [encouraged] me to read.", "I miei genitori mi hanno sempre incoraggiato a leggere."]]],
    ["-ate", "Common in formal and scientific language. The noun ends in -ation: motivate → motivation, activate → activation.", [["Good teachers [motivate] their students.", "I bravi insegnanti motivano i loro studenti."], ["The alarm is [activated] at night.", "L'allarme viene attivato di notte."]], 5]
  ],
  mistakes: [
    ["They want to wide the road.", "They want to widen the road.", "Wide is an adjective; the verb is [widen] (make wider)."],
    ["Can you simple the instructions?", "Can you simplify the instructions?", "Simple → [simplify] (make simple). The noun is simplification."],
    ["The teacher courages us to speak.", "The teacher encourages us to speak.", "The verb needs the prefix en-: [encourage]."],
    ["I need to memory these words.", "I need to memorise these words.", "Memory is a noun; the verb is [memorise] / memorize."],
    ["He advized me to leave.", "He advised me to leave.", "Advise is always spelt with [-ise]; the noun advice has c."]
  ],
  contrasts: [
    ["-en and en-", "The same meaning (make), at the end or at the beginning of the word.", [["-en", "They will [shorten] the meeting.", "Accorceranno la riunione.", "short + -en"], ["en-", "They will [enlarge] the photo.", "Ingrandiranno la foto.", "en- + large"], ["Careful", "[lighten] a heavy bag · [enlighten] the reader", "alleggerire una borsa pesante · illuminare il lettore", "lighten = make lighter; enlighten = give knowledge"]]]
  ] });

L({ id: "adverbs", group: "suffixes", belt: 3, title: "Adverbs with -ly", short: "Spelling rules, irregular adverbs and pairs like hard / hardly",
  intro: "Most adverbs of manner are formed with [adjective + -ly]: quick → [quickly], careful → [carefully]. Some adverbs are irregular (good → [well]), some have the same form as the adjective (fast, hard, late), and some pairs have different meanings (hard / [hardly], late / [lately]).",
  form: [
    "Adjective + [-ly]: slow → slowly, sudden → suddenly, careful → carefully (two l: careful + ly).",
    "-y → [-ily]: easy → easily, happy → happily, angry → angrily (but shy → shyly, dry → dryly).",
    "-le → [-ly]: gentle → gently, simple → simply, possible → possibly, terrible → terribly, comfortable → comfortably.",
    "-ic → [-ically]: basic → basically, dramatic → dramatically, scientific → scientifically (exception: public → publicly).",
    "-e: keep the e (extreme → extremely, complete → completely, polite → politely) except true → [truly], due → [duly], whole → [wholly].",
    "-ll → [-lly]: full → fully, dull → dully.",
    "Irregular: good → [well]. Same form as the adjective: [fast], [hard], [late], [early], [straight], [high], [low], [daily], [monthly].",
    "Adjectives already ending in -ly (friendly, lovely, lonely, silly, likely) have no adverb: use [in a … way]: She spoke to me [in a friendly way]."
  ],
  table: [["Adjective", "Adverb", "Rule"], ["quiet, careful", "[quietly], [carefully]", "+ -ly"], ["easy, lucky", "[easily], [luckily]", "y → ily"], ["gentle, probable", "[gently], [probably]", "-le → -ly"], ["dramatic, tragic", "[dramatically], [tragically]", "-ic → -ically"], ["true, whole", "[truly], [wholly]", "the e is dropped"], ["good", "[well]", "irregular"], ["fast, hard, late, early", "[fast], [hard], [late], [early]", "same form"], ["friendly, lonely", "[in a friendly way]", "no -ly adverb"]],
  uses: [
    ["Adverbs of manner", "They describe how something is done; they usually come after the verb or after the object.", [["She opened the door [quietly].", "Ha aperto la porta silenziosamente."], ["He speaks English [fluently].", "Parla inglese fluentemente."]]],
    ["Adverbs before adjectives and participles", "Adverbs of degree and comment modify adjectives, other adverbs and past participles.", [["The test was [surprisingly] easy.", "La verifica è stata sorprendentemente facile."], ["a [highly] [respected] scientist", "uno scienziato molto stimato"]]],
    ["Comment adverbs", "At the beginning of a sentence they give the speaker's opinion of the whole sentence. Many need two changes in Part 3: fortune → [unfortunately], luck → [luckily].", [["[Unfortunately], the concert was cancelled.", "Purtroppo il concerto è stato annullato."], ["[Surprisingly], nobody complained.", "Sorprendentemente nessuno si è lamentato."]]],
    ["Pairs with two meanings", "[hard] = with effort / [hardly] = almost not; [late] = not on time / [lately] = recently; [high] = at a high level / [highly] = very, very much; [near] = close / [nearly] = almost; [free] = without paying / [freely] = without limits; [most] = the most / [mostly] = mainly.", [["She works very [hard].", "Lavora molto duramente."], ["I can [hardly] hear you.", "Ti sento a malapena."], ["Have you seen him [lately]?", "L'hai visto ultimamente?"], ["It's [highly] unlikely.", "È molto improbabile."]], 4]
  ],
  mistakes: [
    ["He drives very careful.", "He drives very carefully.", "Drives is a verb: we need the adverb [carefully]."],
    ["She speaks English very good.", "She speaks English very well.", "The adverb of good is [well]."],
    ["I worked hardly all weekend.", "I worked hard all weekend.", "[Hard] is the adverb (with effort); hardly means almost not."],
    ["The concert finished lately.", "The concert finished late.", "Not on time = [late]. Lately means recently."],
    ["He was basicly right.", "He was basically right.", "Adjectives in -ic take [-ically]: basic → basically."],
    ["She smiled at me friendly.", "She smiled at me in a friendly way.", "Friendly is an adjective with no adverb: use [in a friendly way]."]
  ],
  contrasts: [
    ["hard and hardly", "Same base, opposite meanings.", [["hard", "We trained [hard] for the final.", "Ci siamo allenati duramente per la finale.", "with effort"], ["hardly", "We [hardly] trained for the final.", "Non ci siamo quasi allenati per la finale.", "almost not"]]],
    ["late and lately", "Time, but two different ideas.", [["late", "The plane landed [late].", "L'aereo è atterrato in ritardo.", "not on time"], ["lately", "I've been very busy [lately].", "Ultimamente sono stato molto impegnato.", "recently"]]]
  ] });

/* ============================== PREFIXES ============================== */
L({ id: "negative", group: "prefixes", belt: 3, title: "Negative and privative prefixes", short: "un-, in- / im- / il- / ir-, dis-, non-, mis-, de-",
  intro: "Negative prefixes give a word the opposite or the missing meaning: happy → [unhappy], possible → [impossible], agree → [disagree]. Some have a special meaning: [mis-] = wrongly (misunderstand), [de-] = remove or reverse (defrost), [non-] = not (non-smoker).",
  form: [
    "[un-] is the most common, with adjectives, adverbs and participles of English origin: unhappy, unusual, unfortunately, unexpected, unemployed; with verbs it means reverse: unlock, undo, unpack.",
    "[in-] with Latin adjectives: incorrect, inexpensive, independent, invisible, inaccurate, incapable.",
    "[im-] before [m] and [p]: impossible, impatient, impolite, immature, immoral, imperfect.",
    "[il-] before [l]: illegal, illogical, illiterate, illegible.",
    "[ir-] before [r]: irregular, irresponsible, irrelevant, irrational.",
    "[dis-] with verbs, adjectives and nouns: disagree, dislike, disappear, dishonest, disloyal, disadvantage.",
    "[non-] = not, often with a hyphen: non-smoker, non-fiction, non-existent, non-stop.",
    "[mis-] = wrongly, badly: misunderstand, misbehave, mislead, misspell, misprint.",
    "[de-] = remove, reverse, reduce: defrost, decode, deforestation, devalue; [anti-] = against: antisocial, antibiotic; [counter-] = opposite: counterproductive.",
    "The prefix is simply added: no letters are lost, so a double letter can appear: [unnecessary], [illegal], [irregular], [dissatisfied], [misspell]."
  ],
  table: [["Prefix", "Meaning", "Examples"], ["un-", "not; reverse", "[unfair], [unlikely], [unlock], [undo]"], ["in-", "not", "[inaccurate], [incomplete], [insecure]"], ["im- (m, p)", "not", "[immature], [impractical], [impossible]"], ["il- (l)", "not", "[illegal], [illegible], [illogical]"], ["ir- (r)", "not", "[irrelevant], [irresistible], [irreversible]"], ["dis-", "not; opposite action", "[dishonest], [disobey], [disconnect]"], ["non-", "not", "[non-smoking], [non-profit], [non-verbal]"], ["mis-", "wrongly", "[misjudge], [misinterpret], [mispronounce]"], ["de-", "remove, reverse", "[defrost], [decentralise], [destabilise]"]],
  uses: [
    ["un-: the most frequent", "With English adjectives, adverbs and participles, and with verbs to reverse an action.", [["It was [unusually] cold for June.", "Faceva insolitamente freddo per giugno."], ["Can you [unlock] the door?", "Puoi aprire la porta (con la chiave)?"]]],
    ["in-, im-, il-, ir-", "One prefix with four forms: the first letter of the word decides (im- before m and p, il- before l, ir- before r, in- elsewhere). It is typical of words from Latin.", [["Driving without a licence is [illegal].", "Guidare senza patente è illegale."], ["This point is [irrelevant].", "Questo punto è irrilevante."], ["Don't be so [impatient]!", "Non essere così impaziente!"]]],
    ["dis-", "The opposite of a quality or an action.", [["I [disagree] with you.", "Non sono d'accordo con te."], ["It was [dishonest] of him to lie.", "È stato disonesto da parte sua mentire."]]],
    ["mis-: wrongly", "Something done wrongly or badly. Compare dis- (the opposite) and mis- (in the wrong way).", [["I think you [misunderstood] me.", "Credo che tu mi abbia frainteso."], ["The children [misbehaved] all day.", "I bambini si sono comportati male tutto il giorno."]], 4],
    ["de-, non-, anti-", "de- removes or reverses (defrost the fridge), non- simply says ‘not’ (non-alcoholic), anti- means against (anti-war).", [["[Deforestation] is a serious problem.", "La deforestazione è un problema serio."], ["This is a [non-smoking] area.", "Questa è una zona non fumatori."]], 4]
  ],
  mistakes: [
    ["It's unpossible to finish today.", "It's impossible to finish today.", "Before p the negative prefix is [im-]: impossible."],
    ["He was very unresponsible.", "He was very irresponsible.", "Before r the prefix is [ir-]: irresponsible."],
    ["The book was unnecesary.", "The book was unnecessary.", "Prefix + word: un + necessary = [unnecessary] (double n)."],
    ["I unagree with this idea.", "I disagree with this idea.", "Agree takes [dis-]: disagree."],
    ["You disunderstood the question.", "You misunderstood the question.", "Understanding wrongly is [mis-]: misunderstand."]
  ],
  contrasts: [
    ["dis- and mis-", "Opposite or wrongly?", [["dis-", "He [disobeyed] the rules.", "Ha disobbedito alle regole.", "did the opposite"], ["mis-", "He [misread] the rules.", "Ha letto male le regole.", "read them wrongly"]]],
    ["un- with verbs", "With verbs un- reverses an action; it does not mean ‘not do’.", [["un-", "I [unpacked] my suitcase.", "Ho disfatto la valigia.", "the opposite of pack"], ["not", "I [didn't pack] my suitcase.", "Non ho fatto la valigia.", "the action did not happen"]]]
  ] });

L({ id: "degree", group: "prefixes", belt: 4, title: "Prefixes of degree, time, repetition and position", short: "re-, over-, under-, pre-, post-, sub-, inter-, co-, out-",
  intro: "These prefixes add an idea of [degree] (too much, not enough), [time] (before, after), [repetition] (again) or [position and relationship] (under, between, together): build → [rebuild], cook → [overcook], war → [post-war], national → [international].",
  form: [
    "[re-] = again, back: rebuild, rewrite, reuse, reconsider, refill, renew.",
    "[over-] = too much, above: overcook, overestimate, overweight, overcrowded, oversleep.",
    "[under-] = not enough, below: underpaid, underestimate, undercooked, underground, underline.",
    "[pre-] = before: prehistoric, preview, prepaid, pre-war. [post-] = after: post-war, postgraduate, postpone.",
    "[sub-] = under, below, part of: subway, subtitle, subheading, substandard, subdivide.",
    "[inter-] = between, among: international, interact, interview, intercontinental.",
    "[co-] = together: co-worker, cooperate, coexist, co-author. [out-] = more or better than: outnumber, outlive, outgrow, outperform.",
    "Other useful prefixes: [multi-] (multinational), [mono-] (monolingual), [bi-] (bilingual), [semi-] (semi-final), [self-] (self-confident), [super-] (supermarket), [ex-] (ex-president), [trans-] (transatlantic).",
    "Hyphens: before a capital letter or a number (pre-1990, post-Brexit), to avoid two equal vowels (co-owner, re-enter, pre-exist) and with ex- and self- (ex-wife, self-aware)."
  ],
  table: [["Prefix", "Meaning", "Examples"], ["re-", "again, back", "[redo], [replay], [rethink]"], ["over-", "too much", "[overreact], [overpriced], [overdue]"], ["under-", "not enough", "[underrated], [underused], [underdeveloped]"], ["pre- / post-", "before / after", "[preschool], [prearrange] / [postwar], [postgraduate]"], ["sub-", "under, part of", "[submarine], [subtitle], [subcommittee]"], ["inter-", "between", "[international], [interaction], [interdependent]"], ["co-", "together", "[coexist], [co-founder], [cooperation]"], ["out-", "more than", "[outnumber], [outweigh], [outlast]"]],
  uses: [
    ["re-: again", "Do something again, often in a new or better way. The noun keeps the prefix: reconstruction, reconsideration.", [["We had to [rewrite] the whole report.", "Abbiamo dovuto riscrivere tutta la relazione."], ["Plastic bottles can be [reused].", "Le bottiglie di plastica si possono riutilizzare."]]],
    ["over- and under-: too much, not enough", "They often come in pairs: overestimate / underestimate, overpaid / underpaid, overcooked / undercooked.", [["The train was [overcrowded].", "Il treno era sovraffollato."], ["Nurses are often [underpaid].", "Gli infermieri sono spesso sottopagati."], ["Don't [underestimate] the problem.", "Non sottovalutare il problema."]]],
    ["pre- and post-: before and after", "Time prefixes, often with a hyphen before a proper noun or a date.", [["They met in the [post-war] years.", "Si sono conosciuti negli anni del dopoguerra."], ["Watch a [preview] of the new series.", "Guarda un'anteprima della nuova serie."]]],
    ["inter-, co-, sub-: position and relationship", "Between (inter-), together (co-), under or part of (sub-).", [["The film has English [subtitles].", "Il film ha i sottotitoli in inglese."], ["Thank you for your [cooperation].", "Grazie per la vostra collaborazione."], ["an [international] conference", "un convegno internazionale"]]],
    ["out-: more or better than", "A verb prefix meaning surpass: outnumber, outlive, outrun, outperform, outweigh.", [["The advantages [outweigh] the disadvantages.", "I vantaggi superano gli svantaggi."], ["Women generally [outlive] men.", "In genere le donne vivono più a lungo degli uomini."]], 5]
  ],
  mistakes: [
    ["We need to build again the wall.", "We need to rebuild the wall.", "Use the prefix [re-] instead of again after the verb: rebuild."],
    ["The meat is overcook.", "The meat is overcooked.", "After be we need the participle (adjective): [overcooked]."],
    ["He is underestimated the risks.", "He underestimated the risks.", "Underestimate is a verb: past simple [underestimated], with no be."],
    ["Most of the students are bilinguals.", "Most of the students are bilingual.", "[Bilingual] is an adjective: it has no plural -s."],
    ["She is my coworker and my excolleague.", "She is my co-worker and my ex-colleague.", "The prefix [ex-] always takes a hyphen; co-worker usually does."]
  ],
  contrasts: [
    ["over- and under-", "Too much or not enough.", [["over-", "The film was [overrated].", "Il film era sopravvalutato.", "people praised it too much"], ["under-", "The film was [underrated].", "Il film era sottovalutato.", "it deserved more praise"]]],
    ["inter- and intra-", "Between groups or within one group.", [["inter-", "[international] flights", "voli internazionali", "between nations"], ["intra-", "an [intranet]", "una rete intranet", "inside one organisation"]]]
  ] });
