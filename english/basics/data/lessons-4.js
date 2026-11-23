/* English Basics — lessons (4): have got, can, question words, the imperative.
   Format: see data/lessons.js. */

/* ============================== HAVE GOT, CAN, QUESTIONS, IMPERATIVES ============================== */
L({ id: "have-got", group: "verbs", belt: 1, title: "Have got", short: "Possession, family, appearance and illnesses",
  intro: "[Have got] is used for possession, family, physical features and illnesses. It is typical of British English, especially in speaking. American English, and more formal British English, often use [have] with do / does instead.",
  form: [
    "Affirmative: I / you / we / they [have got] ('ve got); he / she / it [has got] ('s got).",
    "Negative: [haven't got] / [hasn't got]: I [haven't got] a car. She [hasn't got] a brother.",
    "Questions: [Have] you [got]…? [Has] she [got]…? No do: ~~Do you have got~~.",
    "Short answers: Yes, I [have]. / No, she [hasn't]. Got is not used in short answers: ~~Yes, I've got~~.",
    "In the contracted form got is necessary: I['ve got] a cold, not ~~I've a cold~~.",
    "Have got exists only in the present. For the past we use [had]: I [had] a bike when I was little.",
    "American English: I [have] a car. [Do you have] a car? I [don't have] a car."
  ],
  table: [["", "Affirmative", "Negative", "Question", "Short answers"],
    ["I / you / we / they", "have got · 've got", "haven't got", "Have … got?", "Yes, … have. / No, … haven't."],
    ["he / she / it", "has got · 's got", "hasn't got", "Has … got?", "Yes, … has. / No, … hasn't."]],
  uses: [
    ["Possession", "", [["I['ve got] a new phone.", "Ho un telefono nuovo."], ["[Have] you [got] a pen? – Yes, I [have].", "Hai una penna? – Sì."]]],
    ["Family and friends", "", [["She['s got] two brothers and a sister.", "Ha due fratelli e una sorella."], ["We [haven't got] any cousins.", "Non abbiamo cugini."]]],
    ["Physical features", "No article with physical features: she's got [blue eyes] (ha gli occhi azzurri).", [["My dad['s got] a beard and short grey hair.", "Mio papà ha la barba e i capelli corti e grigi."], ["Our cat['s got] green eyes.", "Il nostro gatto ha gli occhi verdi."]]],
    ["Illnesses", "", [["I['ve got] a headache.", "Ho mal di testa."], ["Luca [has got] a cold.", "Luca ha il raffreddore."]], 2],
    ["Have got and have", "For possession both are correct. With have, questions and negatives use do / does.", [["I['ve got] a dog. = I [have] a dog.", "Ho un cane."], ["[Have] you [got] a car? = [Do] you [have] a car?", "Hai una macchina?"]], 2]
  ],
  mistakes: [
    ["She have got blue eyes.", "She has got blue eyes.", "He / she / it: [has got]."],
    ["I've a brother.", "I've got a brother.", "Contracted form: [’ve got]."],
    ["Do you have got a pen?", "Have you got a pen?", "Questions: [Have you got]…? (no do)."],
    ["I haven't got some money.", "I haven't got any money.", "Negative: [any]."],
    ["Have you got a bike? – Yes, I've got.", "Have you got a bike? – Yes, I have.", "Short answers: Yes, I [have]."],
    ["I have got fourteen years.", "I'm fourteen.", "Age: [be]."],
    ["He has got hungry.", "He's hungry.", "Hungry is an adjective: [be] hungry."],
    ["My sister has got the blue eyes.", "My sister has got blue eyes.", "No article with physical features."]
  ],
  contrasts: [
    ["'s got or 's?", "She's can mean she has (got) or she is: look for got.", [["'s = has", "She['s got] a dog.", "Ha un cane.", "'s + got."], ["'s = is", "She['s] a vet.", "È veterinaria.", "No got."]]]
  ],
  task: ["Describe yourself and your family in five or six sentences: what you have got and what you haven't got.",
    ["I've got long dark hair and brown eyes.", "I've got one brother, but I haven't got any sisters.", "My brother's got a bike and a skateboard.", "We've got a dog, Toby. He's got short white fur.", "We haven't got a garden, but we've got a big balcony.", "Have you got any pets?"]] });

L({ id: "can", group: "verbs", belt: 1, title: "Can", short: "Ability, permission, requests and possibility",
  intro: "[Can] is a modal verb. We use it for ability (what we are able to do), for permission and requests, and to say that something is possible. In Italian it corresponds to both ‘potere’ and ‘sapere’ (so nuotare = I [can] swim).",
  form: [
    "[can] + base form, the same for all persons: I / you / he / she / we / they [can swim]. No -s: ~~she cans~~.",
    "No [to] after can: I can [speak], not ~~I can to speak~~.",
    "Negative: [can't] (or [cannot], written as one word): I [can't] dance.",
    "Questions: [Can] you [ride] a horse? Short answers: Yes, I [can]. / No, I [can't].",
    "No do: [Can you] swim? (not ~~Do you can swim?~~).",
    "Pronunciation: in affirmative sentences can is weak, /kən/: I can swim /aɪ kən swɪm/. Can't is strong: /kɑːnt/ in British English."
  ],
  table: [["", "Affirmative", "Negative", "Question", "Short answers"],
    ["all persons", "can + verb", "can't / cannot + verb", "Can … + verb?", "Yes, … can. / No, … can't."]],
  uses: [
    ["Ability", "", [["I [can] play the guitar, but I [can't] sing.", "So suonare la chitarra, ma non so cantare."], ["My little sister [can] read already.", "La mia sorellina sa già leggere."], ["[Can] you swim? – Yes, I [can].", "Sai nuotare? – Sì."]]],
    ["Permission", "", [["[Can] I open the window? – Yes, of course.", "Posso aprire la finestra? – Sì, certo."], ["You [can't] use your phone in class.", "Non puoi usare il telefono in classe."]]],
    ["Requests", "", [["[Can] you help me, please?", "Puoi aiutarmi, per favore?"], ["[Can] you pass me the salt?", "Mi passi il sale?"]]],
    ["Possibility", "", [["You [can] see the Alps from here on a clear day.", "Da qui si vedono le Alpi quando è sereno."], ["I [can't] find my keys.", "Non trovo le chiavi."]], 2],
    ["Can and could", "[Could] is the past of can for ability, and a more polite form for requests: see the section Modal Verbs.", [["I [could] swim when I was five.", "Sapevo nuotare a cinque anni."], ["[Could] you help me, please?", "Potrebbe aiutarmi, per favore?"]], 2]
  ],
  mistakes: [
    ["She cans play tennis.", "She can play tennis.", "No -s with can."],
    ["I can to speak French.", "I can speak French.", "No to after can."],
    ["Do you can swim?", "Can you swim?", "Questions: no do."],
    ["I don't can come.", "I can't come.", "Negative: [can't]."],
    ["He can plays the piano.", "He can play the piano.", "Base form after can: [play]."],
    ["I can't to find my phone.", "I can't find my phone.", "No to after can't."],
    ["I know swim.", "I can swim.", "‘So nuotare’ (ability) = [I can] swim."]
  ],
  contrasts: [
    ["Can or know?", "‘Sapere’ + a verb (ability) = [can]; ‘sapere’ + a piece of information = [know].", [["Ability", "I [can] swim. · She [can] cook.", "So nuotare. · Sa cucinare.", "can + verb"], ["Information", "I [know] the answer. · I [know] his name.", "So la risposta. · So come si chiama.", "know + noun"]]]
  ],
  task: ["Write five or six sentences about what you and your family can and can't do. Include one question.",
    ["I can swim and I can ride a bike, but I can't ski.", "My mum can speak three languages: Italian, English and German.", "My dad can cook really well. His lasagne is amazing!", "My little brother can't read yet: he's only four.", "Can you play an instrument? I can play the drums!"]] });

L({ id: "questions", group: "verbs", belt: 2, title: "Question words", short: "What, who, where, when, why, how, which, whose…",
  intro: "Wh- questions ask for information. The question word comes first, then the verb ([be], [can], [have]…) and then the subject.",
  form: [
    "Question word + be + subject: [Where are] you from? [What is] your name?",
    "Question word + can + subject + verb: [What can] you see?",
    "Question word + have + subject + got: [How many] brothers [have] you [got]?",
    "When the question word is the subject, the order doesn't change: [Who is] at the door? [What is] in the box?",
    "A preposition goes at the end: [Where] are you [from]? [Who] is this present [for]? [What] is the film [about]?"
  ],
  table: [["Question word", "Asks about", "Example"],
    ["What", "things, information", "What's your name?"],
    ["Who", "people", "Who's your best friend?"],
    ["Where", "places", "Where's the station?"],
    ["When", "time", "When's your birthday?"],
    ["Why", "reasons (answer: because…)", "Why are you late?"],
    ["How", "manner, condition", "How are you?"],
    ["How old", "age", "How old is your sister?"],
    ["How many", "number (countable nouns)", "How many students are there?"],
    ["How much", "price; quantity (uncountable nouns)", "How much is this jacket?"],
    ["Which", "a choice from a few options", "Which bag is yours?"],
    ["Whose", "the owner", "Whose phone is this?"],
    ["What time", "the time", "What time is the film?"]],
  uses: [
    ["Personal information", "", [["[What's] your name?", "Come ti chiami?"], ["[Where] are you from?", "Di dove sei?"], ["[How old] are you?", "Quanti anni hai?"], ["[When's] your birthday?", "Quando è il tuo compleanno?"]]],
    ["With there is, have got and can", "", [["[How many] people are there in your family?", "Quante persone ci sono nella tua famiglia?"], ["[How many] cousins have you got?", "Quanti cugini hai?"], ["[What] can you see from your window?", "Che cosa vedi dalla tua finestra?"]]],
    ["Why and because", "We answer why with [because].", [["[Why] are you sad? – [Because] my best friend is ill.", "Perché sei triste? – Perché la mia migliore amica è malata."]]],
    ["What or which?", "[Which] when the choice is among a few known options; [what] for open questions.", [["[What] is your favourite colour?", "Qual è il tuo colore preferito?"], ["[Which] is your bag, the red one or the blue one?", "Qual è la tua borsa, quella rossa o quella blu?"]], 2],
    ["How, how much, how many", "", [["[How] are you? – Fine, thanks.", "Come stai? – Bene, grazie."], ["[How much] is this T-shirt?", "Quanto costa questa maglietta?"], ["[How many] languages can you speak?", "Quante lingue sai parlare?"]], 2]
  ],
  mistakes: [
    ["Where you are from?", "Where are you from?", "Question word + be + subject."],
    ["How many years have you?", "How old are you?", "Age: [How old] + be."],
    ["How many brothers you have got?", "How many brothers have you got?", "Have goes before the subject."],
    ["From where are you?", "Where are you from?", "The preposition goes at the end."],
    ["How much students are there?", "How many students are there?", "Countable nouns: [how many]."],
    ["How is your name?", "What's your name?", "‘Come ti chiami?’ = [What's] your name?"],
    ["Who's is this coat?", "Whose is this coat?", "The owner: [whose]."],
    ["Why you are late?", "Why are you late?", "Why + be + subject."]
  ],
  contrasts: [
    ["How many or how much?", "", [["How many", "[How many] apples are there?", "Quante mele ci sono?", "Countable nouns, plural."], ["How much", "[How much] milk is there? · [How much] is it?", "Quanto latte c'è? · Quanto costa?", "Uncountable nouns, prices."]]]
  ],
  task: ["Write six questions for a new classmate, each with a different question word. Then write the answers.",
    ["What's your name? – My name's Elisa.", "How old are you? – I'm fourteen.", "Where are you from? – I'm from Verona.", "When's your birthday? – It's in May.", "How many brothers and sisters have you got? – I've got one sister.", "What's your favourite subject? – Art!"]] });

L({ id: "imperative", group: "verbs", belt: 1, title: "The imperative and let's", short: "Instructions, orders, advice and suggestions",
  intro: "The imperative gives instructions, orders, advice and invitations. It is the base form of the verb, without a subject. [Let's] makes suggestions that include the speaker.",
  form: [
    "Affirmative: the [base form]: [Open] your books. [Sit] down, please.",
    "Negative: [Don't] + base form: [Don't] run! [Don't be] late.",
    "No subject: [Listen]! (not ~~You listen!~~).",
    "The same form for one person and for more people: [Come] here, Luca! [Come] here, children!",
    "[Let's] + base form for suggestions that include you: [Let's] go! Negative: [Let's not] wait.",
    "[Please] makes it more polite: [Please] close the door. / Close the door, [please]."
  ],
  table: [["", "Form", "Example", "Italian"],
    ["Affirmative", "base form", "Sit down.", "Siediti. / Sedetevi."],
    ["Negative", "don't + base form", "Don't shout.", "Non gridare. / Non gridate."],
    ["Suggestion", "let's + base form", "Let's start.", "Cominciamo."],
    ["Negative suggestion", "let's not + base form", "Let's not wait.", "Non aspettiamo."]],
  uses: [
    ["Instructions", "", [["[Read] the text and [answer] the questions.", "Leggi il testo e rispondi alle domande."], ["[Turn] left at the traffic lights.", "Gira a sinistra al semaforo."]]],
    ["Orders and warnings", "", [["[Stop]! [Don't] cross the road!", "Fermo! Non attraversare la strada!"], ["[Be] careful! The floor is wet.", "Attento! Il pavimento è bagnato."]]],
    ["Advice and invitations", "", [["[Don't] worry, it's OK.", "Non preoccuparti, va tutto bene."], ["[Come] to my party on Saturday!", "Vieni alla mia festa sabato!"], ["[Have] a nice day!", "Buona giornata!"]]],
    ["Suggestions with let's", "", [["[Let's] go to the cinema tonight.", "Andiamo al cinema stasera."], ["[Let's not] take the bus. [Let's] walk.", "Non prendiamo l'autobus. Andiamo a piedi."]], 2]
  ],
  mistakes: [
    ["Not touch!", "Don't touch!", "Negative: [don't] + verb."],
    ["Don't to worry.", "Don't worry.", "No to after don't."],
    ["You sit down, please.", "Sit down, please.", "No subject."],
    ["Let's to go!", "Let's go!", "Let's + base form."],
    ["Let's don't wait.", "Let's not wait.", "Negative: [let's not]."],
    ["Be not late!", "Don't be late!", "Negative of be: [don't be]."],
    ["Opens your books.", "Open your books.", "Base form, no -s."]
  ],
  contrasts: [
    ["Don't or let's not?", "", [["Don't", "[Don't] open the window.", "Non aprire la finestra.", "For the other person."], ["Let's not", "[Let's not] open the window.", "Non apriamo la finestra.", "Includes the speaker."]]]
  ],
  task: ["Write six rules for your classroom or your home: three things to do and three things not to do. Then add one suggestion with let's.",
    ["Be on time.", "Listen to the teacher.", "Help your classmates.", "Don't eat in class.", "Don't use your phone during lessons.", "Don't shout in the corridor.", "Let's keep our classroom clean!"]] });
