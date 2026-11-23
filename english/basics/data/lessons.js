/* English Basics — configuration and lessons (A1–A2).
   Same lesson format as english/modal-verbs/data/lessons.js (read by assets/js/grammar-lab.js):
     form: [lines]  ·  table: [[header…], [row…], …]  (optional)
     uses: [[title, explanation, [[example, Italian], …], belt?], …]
     mistakes: [[wrong, right, why], …]   — the typical mistakes of Italian speakers
     contrasts: [[title, explanation, [[label, example, Italian, note], …]], …]
     task: [instruction, [model sentences]]   — "Your turn": guided production (optional)
   [words] in square brackets are highlighted; ~~text~~ marks a wrong form.
   Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "The building blocks of English: pronouns, the verb be, articles and plurals, possessives, have got, can, question words and the most common prepositions. Each lesson shows the forms in a table, explains when to use them with examples and Italian translations, warns you about the mistakes Italian speakers often make, and ends with practice of increasing difficulty.",
  lessonsLead: "Each lesson covers one basic topic: form and structure, main uses with examples, common mistakes, comparisons and a short writing task. Study the lessons in order: the exercises of each lesson use only the grammar of the lessons before it.",
  groups: [["people", "Subject pronouns and the verb be"], ["things", "Nouns, articles, demonstratives, there is"], ["possession", "Object pronouns and possession"], ["verbs", "Have got, can, questions and imperatives"], ["prepositions", "Prepositions of place and time"]],
  levels: { 1: "First steps: the forms and the most frequent uses", 2: "Consolidation: mixed forms, typical mistakes, translation and texts" },
  reviewTitle: "Mixed Basics",
  instr: {
    gap: "Complete the sentences with the correct form.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== SUBJECT PRONOUNS AND THE VERB BE ============================== */
L({ id: "pronouns", group: "people", belt: 1, title: "Subject pronouns", short: "I, you, he, she, it, we, they",
  intro: "Subject pronouns take the place of a noun that is the subject of the verb: [I, you, he, she, it, we, they]. In English the subject pronoun is almost always necessary, even when Italian leaves it out.",
  form: [
    "[I] is always written with a capital letter, also in the middle of a sentence: My brother and [I] are twins.",
    "[you] is singular and plural: it means tu, voi and the formal Lei.",
    "[he] is for a man or a boy, [she] for a woman or a girl, [it] for things, places, animals and ideas.",
    "English nouns have no grammatical gender: the house, the book, the city are all [it] (Italian ‘la casa’ is feminine, but in English it is it).",
    "[it] is also the subject of sentences about the weather, the time and distances: [It's] cold. [It's] ten o'clock.",
    "[they] is for more than one person or thing: Paolo and Marta → [they]; the books → [they].",
    "The subject cannot be left out: [She's] tired, not ~~Is tired~~."
  ],
  table: [["Pronoun", "Used for", "Italian"],
    ["I", "the person who speaks", "io"],
    ["you", "the person or people you speak to", "tu, voi, Lei"],
    ["he", "a man, a boy", "lui"],
    ["she", "a woman, a girl", "lei"],
    ["it", "a thing, a place, an animal", "esso, essa (often not translated)"],
    ["we", "the speaker and other people", "noi"],
    ["they", "other people or things", "loro, essi, esse"]],
  uses: [
    ["Instead of a noun", "We use a pronoun so that we don't repeat the noun.", [["Anna is my cousin. [She]'s eighteen.", "Anna è mia cugina. Ha diciotto anni."], ["I love this song. [It]'s really catchy.", "Adoro questa canzone. È davvero orecchiabile."]]],
    ["People: he or she", "He and she are for people. Animals are usually [it], but pets with a name are often he or she.", [["My grandad is eighty, but [he]'s very active.", "Mio nonno ha ottant'anni, ma è molto attivo."], ["Our cat is called Pepe. [He]'s very lazy.", "Il nostro gatto si chiama Pepe. È molto pigro."]]],
    ["It for things, places and the weather", "Things and places are always [it], whatever their gender in Italian.", [["Where's my phone? – [It]'s in your bag.", "Dov'è il mio telefono? – È nella tua borsa."], ["Rome is beautiful, but [it]'s very hot in summer.", "Roma è bellissima, ma d'estate fa molto caldo."], ["[It]'s sunny today.", "Oggi c'è il sole."]]],
    ["You: one person or more", "The same word for one person, for a group and for the polite form.", [["Are [you] ready, Luca?", "Sei pronto, Luca?"], ["Are [you] ready, everyone?", "Siete pronti, ragazzi?"], ["Excuse me, are [you] Mrs Rossi?", "Mi scusi, è Lei la signora Rossi?"]]],
    ["We and they", "We includes the speaker; they does not.", [["Marco and I are in the same team. [We]'re both defenders.", "Marco e io siamo nella stessa squadra. Siamo tutti e due difensori."], ["Where are my glasses? – [They]'re on your head!", "Dove sono i miei occhiali? – Sono sulla tua testa!"]]]
  ],
  mistakes: [
    ["i am Italian.", "I am Italian.", "[I] is always a capital letter."],
    ["My sister is nineteen. Is at university.", "My sister is nineteen. She's at university.", "The subject pronoun is necessary: [She's] at university."],
    ["Where's the station? – She's near the park.", "Where's the station? – It's near the park.", "Things and places are [it]: in English the station has no gender."],
    ["Tom and Jo are here. He's in the kitchen.", "Tom and Jo are here. They're in the kitchen.", "Two people = [they]."],
    ["My brother Luca is twelve. It's very tall.", "My brother Luca is twelve. He's very tall.", "People are he or she, never it."],
    ["Me and Marco are friends.", "Marco and I are friends.", "As the subject, use [I]; it's also polite to put the other person first: Marco and I."]
  ],
  contrasts: [
    ["Gender in Italian and in English", "In Italian every noun is masculine or feminine; in English only people (and pets) are he or she. Everything else is [it].", [["A thing", "The house is big. [It]'s near the sea.", "La casa è grande. È vicino al mare.", "La casa (feminine) → it."], ["A person", "My aunt is a vet. [She]'s from Turin.", "Mia zia è veterinaria. È di Torino.", "A woman → she."]]]
  ],
  task: ["Write five sentences about your family or your friends. Use I, he, she, we and they.",
    ["My name's Chiara and I'm thirteen.", "My brother is Paolo. He's sixteen and he's very funny.", "My mum is a nurse. She's at work today.", "My best friends are Ali and Sofia. They're in my class.", "We're all big fans of volleyball."]] });

L({ id: "to-be", group: "people", belt: 1, title: "The verb be", short: "Am, is, are: affirmative, negative, questions and short answers",
  intro: "[Be] is the most frequent verb in English. We use it to say who we are, where we are from, how old we are, how we feel, where things are and what they are like. In the present it has three forms: [am], [is] and [are].",
  form: [
    "Affirmative: subject + [am / is / are]: I [am] Italian. My sister [is] a nurse. We [are] in class 1B.",
    "In speaking and in informal writing we normally use [contractions]: I['m], you['re], he['s], she['s], it['s], we['re], they['re].",
    "Negative: [be + not]: I['m not] tired. He [isn't] at home. They [aren't] ready. There is no contraction ~~amn't~~: we say [I'm not].",
    "Two negative contractions are possible, and both are correct: he [isn't] / he['s not], you [aren't] / you['re not].",
    "Questions: [be + subject]: [Are you] OK? [Is she] your teacher? With a question word: [Where are you] from? [How old is] your brother?",
    "Short answers: Yes, I [am]. / No, I['m not]. · Yes, she [is]. / No, she [isn't]. Affirmative short answers are never contracted: Yes, I [am] (not ~~Yes, I'm~~).",
    "An English sentence always has a subject: [It's] cold. [It's] late. Not: ~~Is cold~~. In Italian the subject is often left out (‘Fa freddo’, ‘È tardi’); in English it is not."
  ],
  table: [["Subject", "Affirmative", "Negative", "Question"],
    ["I", "I am · I'm", "I am not · I'm not", "Am I…?"],
    ["you", "you are · you're", "you are not · you aren't", "Are you…?"],
    ["he / she / it", "he is · he's", "he is not · he isn't", "Is he…?"],
    ["we", "we are · we're", "we are not · we aren't", "Are we…?"],
    ["they", "they are · they're", "they are not · they aren't", "Are they…?"]],
  uses: [
    ["Names, identity and jobs", "Who someone is. With jobs we use [a / an] before the noun: she's [a] doctor, he's [an] engineer.", [["My name['s] Giulia and I['m] a student.", "Mi chiamo Giulia e sono una studentessa."], ["Ms Ferri [is] our English teacher.", "La professoressa Ferri è la nostra insegnante d'inglese."], ["My uncle [is an] engineer.", "Mio zio è ingegnere."]]],
    ["Nationality and where you are from", "Nationalities always begin with a capital letter: Italian, English, Spanish.", [["We['re] from Brescia.", "Siamo di Brescia."], ["[Are] you Spanish? – No, I['m not]. I['m] Portuguese.", "Sei spagnola? – No. Sono portoghese."]]],
    ["Age", "In English we [are] an age: we don't ‘have’ years. ‘Years old’ is optional.", [["I['m] fifteen (years old).", "Ho quindici anni."], ["How old [is] your brother? – He['s] twelve.", "Quanti anni ha tuo fratello? – Dodici."]]],
    ["How you feel: hungry, cold, tired, afraid…", "Many feelings and physical states that Italian expresses with [avere] use [be + adjective] in English: hungry, thirsty, cold, hot, sleepy, afraid, right, wrong.", [["I['m] hungry. What's for lunch?", "Ho fame. Cosa c'è per pranzo?"], ["Close the window, please. I['m] cold.", "Chiudi la finestra, per favore. Ho freddo."], ["You['re] right: the answer is B.", "Hai ragione: la risposta è la B."], ["Hurry up! We['re] late!", "Sbrigati! Siamo in ritardo!"]]],
    ["Describing people, things and places", "Be + adjective, or be + a / an + noun.", [["Your new bike [is] really cool.", "La tua bici nuova è fantastica."], ["Their flat [isn't] very big, but it['s] near the station.", "Il loro appartamento non è molto grande, ma è vicino alla stazione."], ["Milan [is] a busy city.", "Milano è una città frenetica."]]],
    ["Where people and things are", "Be + a phrase of place: at home, at school, at work, in the kitchen, on the table.", [["Mum [is] at work until six.", "La mamma è al lavoro fino alle sei."], ["Where [are] my keys? – They['re] on the table.", "Dove sono le mie chiavi? – Sono sul tavolo."]]],
    ["Weather, time and prices with it", "[It's] is the subject of sentences about the weather, the time, dates and prices.", [["[It's] sunny today.", "Oggi c'è il sole."], ["What time [is] it? – [It's] half past eight.", "Che ore sono? – Sono le otto e mezza."], ["How much [is] this T-shirt? – [It's] twelve euros.", "Quanto costa questa maglietta? – Dodici euro."]], 2]
  ],
  mistakes: [
    ["I have fifteen years.", "I'm fifteen.", "Age is expressed with [be]: I'm fifteen / I'm fifteen years old."],
    ["I have hungry.", "I'm hungry.", "Hungry, thirsty, cold, hot and afraid are adjectives: [be] + adjective. Italian uses avere (ho fame, ho sete, ho freddo)."],
    ["Is cold today.", "It's cold today.", "The subject cannot be left out: [It's] cold."],
    ["My father is engineer.", "My father is an engineer.", "Jobs need [a / an]: a teacher, an engineer."],
    ["Are you ready? – Yes, I'm.", "Are you ready? – Yes, I am.", "Affirmative short answers use the full form: Yes, I [am]. / Yes, she [is]."],
    ["I amn't ready.", "I'm not ready.", "The negative of I am is [I'm not]."],
    ["Where you are from?", "Where are you from?", "In questions, [be] comes before the subject: Where [are you] from?"],
    ["My parents is at work.", "My parents are at work.", "A plural subject takes [are]."],
    ["I'm agree with you.", "I agree with you.", "Agree is a verb: we don't use be with it. ‘Sono d'accordo’ = [I agree]."]
  ],
  contrasts: [
    ["Be or have?", "Italian uses avere for age, hunger, cold, fear and being right. English uses [be]. Have (got) is for what you own, your family and your physical features: you will study it in the lesson on have got.", [["English: be", "I['m] fifteen. · I['m] hungry. · You['re] right.", "Ho quindici anni. · Ho fame. · Hai ragione.", "Be + a number or an adjective."], ["English: have got", "I['ve got] a brother. · She['s got] blue eyes.", "Ho un fratello. · Ha gli occhi azzurri.", "Possession, family, physical features."]]],
    ["Full forms and contractions", "Both are correct. Contractions are normal in conversation, messages and informal writing; full forms are used in formal writing and when we want to stress the verb.", [["Contraction", "I['m] Marco. · She [isn't] here.", "Sono Marco. · Lei non è qui.", "Speaking, messages, informal writing."], ["Full form", "I [am] sure. · Yes, it [is]!", "Ne sono sicuro. · Sì, è così!", "Formal writing, emphasis, affirmative short answers."]]]
  ],
  task: ["Introduce yourself in five or six sentences: your name, your age, where you are from, your school and class, and how you feel today. Use am, is and are, with contractions.",
    ["Hi! My name's Marco and I'm fourteen.", "I'm from Brescia, in the north of Italy.", "I'm a student at Liceo Leonardo. I'm in class 1C.", "My best friend is Luca. He isn't in my class, but we're in the same football team.", "Today I'm a bit tired, but I'm happy because it's Friday!"]] });
