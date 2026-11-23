/* English Basics — practice batteries (1): the verb be.
   mc:        [sentence with ___, [options], index of the correct option, explanation]
   gap:       [sentence with ___ (hint), [[accepted answers for gap 1], …], explanation]
   correct:   [sentence with a mistake, [accepted corrections], explanation]
   rewrite:   [sentence, [accepted sentences], explanation, beginning shown to the student]
   order:     [words separated by " / ", [accepted sentences], explanation]
   translate: [Italian sentence, hint or "", [accepted English sentences], model answer, explanation]
   halves:    left: [...], right: [...], answers: [letter for each left item], why: [...]
   text:      { parts: [[speaker or "" or "#" for a heading, "text with {1}…"]], gaps: [[[accepted], explanation], …] }
   Contractions and full forms are accepted automatically (I'm = I am, isn't = is not, he's not = he is not).
   A battery with a title keeps it; the others are numbered per lesson (The verb be – 1, – 2 …). */
const P = x => GL.batteries.push(x);
const T = (it, hint, acc, why) => [it, hint, acc, acc[0], why];

/* ---------- the verb be ---------- */
P({ id: "be-gap", lesson: "to-be", type: "gap", belt: 1, instr: "Complete the sentences with am, is or are.", items: [
  ["I ___ fifteen years old.", [["am"]], "I + [am]."],
  ["My sister ___ a nurse.", [["is"]], "My sister = she: [is]."],
  ["We ___ in the same class.", [["are"]], "We + [are]."],
  ["Paolo and Sara ___ from Verona.", [["are"]], "Two people = they: [are]."],
  ["It ___ very cold today.", [["is"]], "It + [is]."],
  ["You ___ right: the answer is B.", [["are"]], "You + [are]. ‘Hai ragione’ = you're right."],
  ["The shop ___ closed on Sundays.", [["is"]], "The shop = it: [is]."],
  ["My grandparents ___ at the seaside this week.", [["are"]], "My grandparents = they: [are]."],
  ["Our English teacher ___ from Manchester.", [["is"]], "Our teacher = he / she: [is]."],
  ["I ___ really hungry. What's for lunch?", [["am"]], "‘Ho fame’ = I [am] hungry."],
  ["My new shoes ___ too small for me.", [["are"]], "Shoes is plural: [are]."],
  ["Your keys ___ on the kitchen table.", [["are"]], "Keys is plural: [are]."]
] });
P({ id: "be-neg", lesson: "to-be", type: "gap", belt: 1, instr: "Complete the sentences with the negative form of be and the words in brackets. Use contractions.", items: [
  ["___ (I / not) Spanish. I'm Portuguese.", [["I'm not", "I am not"]], "Negative of I am: [I'm not]."],
  ["___ (she / not) at school today. She's ill.", [["She isn't", "She's not", "She is not"]], "[She isn't] or [she's not]: both are correct."],
  ["___ (it / not) expensive: it's only five euros.", [["It isn't", "It's not", "It is not"]], "[It isn't] / [it's not]."],
  ["___ (we / not) late. The film starts at nine.", [["We aren't", "We're not", "We are not"]], "[We aren't] / [we're not]."],
  ["___ (they / not) brothers. They're cousins.", [["They aren't", "They're not", "They are not"]], "[They aren't] / [they're not]."],
  ["___ (you / not) in my group. You're in group B.", [["You aren't", "You're not", "You are not"]], "[You aren't] / [you're not]."],
  ["___ (my phone / not) in my bag. Where is it?", [["My phone isn't", "My phone's not", "My phone is not"]], "My phone = it: [isn't]."],
  ["___ (the windows / not) open.", [["The windows aren't", "The windows are not"]], "Windows is plural: [aren't]."],
  ["___ (Mr Rossi / not) our maths teacher. He teaches science.", [["Mr Rossi isn't", "Mr Rossi is not", "Mr Rossi's not"]], "Mr Rossi = he: [isn't]."],
  ["___ (I / not) afraid of spiders.", [["I'm not", "I am not"]], "‘Non ho paura’ = [I'm not] afraid. There is no ~~amn't~~."]
] });
P({ id: "be-answers", lesson: "to-be", type: "halves", belt: 1, instr: "Match each question with the correct answer.",
  left: ["Are you Italian?", "Is your brother at home?", "Are your parents teachers?", "Is it cold outside?", "Am I late?",
    "Is Anna your best friend?", "Are we in room 12?", "Where are you from?", "How old is your sister?", "What's your name?"],
  right: ["I'm from Brescia.", "No, they aren't. They're doctors.", "Yes, she is. We're in the same class.", "My name's Luca.", "No, he isn't. He's at football practice.",
    "She's nineteen.", "Yes, I am. I'm from Naples.", "No, we aren't. We're in room 14.", "Yes, it is. Take your coat.", "No, you aren't. The lesson starts at ten."],
  answers: ["g", "e", "b", "i", "j", "c", "h", "a", "f", "d"],
  why: ["Are you…? – Yes, I [am].", "Is your brother…? – No, he [isn't].", "Are your parents…? – No, they [aren't].", "Is it…? – Yes, it [is].", "Am I…? – No, you [aren't].",
    "Is Anna…? – Yes, she [is].", "Are we…? – No, we [aren't].", "Where…? needs information, not yes or no.", "How old…? – She['s] nineteen.", "What's your name? – My name['s] Luca."] });
P({ id: "be-order", lesson: "to-be", type: "order", belt: 1, items: [
  ["is / my / Luca / brother", ["Luca is my brother.", "My brother is Luca."], "Subject + [is] + the rest."],
  ["you / are / tired", ["Are you tired?"], "Question: [Are you] …?"],
  ["from / where / they / are", ["Where are they from?"], "Question word + [are] + subject + from: [Where are they from?]"],
  ["isn't / the / open / museum / today", ["The museum isn't open today.", "Today the museum isn't open."], "Negative: [isn't] after the subject."],
  ["old / how / you / are", ["How old are you?"], "Age: [How old are you?]"],
  ["not / I / hungry / am", ["I am not hungry."], "Negative: I [am not] (I'm not)."],
  ["is / teacher / your / who", ["Who is your teacher?"], "Question word + [is] + subject."],
  ["the dogs / in / are / the garden", ["The dogs are in the garden."], "Subject + [are] + place."],
  ["it / late / is", ["Is it late?"], "Question: [Is it] …?"],
  ["a / sister / is / doctor / my", ["My sister is a doctor."], "Jobs need [a / an]."]
] });
P({ id: "be-rewrite", lesson: "to-be", type: "rewrite", belt: 1, instr: "Rewrite the sentences: make them negative (–) or turn them into questions (?). Use contractions in the negative sentences.", items: [
  ["He's from Germany. (?)", ["Is he from Germany?"], "Question: [Is he] …?", "Is"],
  ["You're ready. (?)", ["Are you ready?"], "Question: [Are you] …?", "Are"],
  ["I'm cold. (–)", ["I'm not cold.", "I am not cold."], "Negative: [I'm not]."],
  ["The bus is late. (?)", ["Is the bus late?"], "[Is] + the bus + late?", "Is"],
  ["They're at the cinema. (–)", ["They aren't at the cinema.", "They're not at the cinema."], "Negative: [they aren't] / [they're not]."],
  ["We're in the right room. (?)", ["Are we in the right room?"], "Question: [Are we] …?", "Are"],
  ["My cousin is twenty. (–)", ["My cousin isn't twenty.", "My cousin's not twenty."], "Negative: [isn't]."],
  ["It's your birthday today. (?)", ["Is it your birthday today?"], "Question: [Is it] …?", "Is"],
  ["Your answers are correct. (–)", ["Your answers aren't correct."], "Plural subject: [aren't]."],
  ["Emma is your sister. (?)", ["Is Emma your sister?"], "Question: [Is Emma] …?", "Is"]
] });
P({ id: "be-dialogue", lesson: "to-be", type: "text", belt: 1, title: "First day at a new school", instr: "Read the whole dialogue first, then complete the gaps with the correct form of be: am, is, are or a negative form.",
  parts: [
    ["Tom", "Hi! {1} you new here?"],
    ["Sara", "Yes, I {2}. I'm Sara. I'm from Bologna."],
    ["Tom", "Nice to meet you. I'm Tom. {3} you in class 1B?"],
    ["Sara", "No, I {4}. I'm in 1C. {5} Mr Bianchi your English teacher?"],
    ["Tom", "Yes, he {6}. He's great, but his tests {7} easy!"],
    ["Sara", "Oh no! And where {8} the canteen?"],
    ["Tom", "It {9} on the ground floor. Come on, we {10} late for lunch!"]
  ],
  gaps: [
    [["Are"], "Question with you: [Are you] new here?"],
    [["am"], "Short answer: Yes, I [am] (never Yes, I'm)."],
    [["Are"], "Question with you: [Are you] in class 1B?"],
    [["'m not", "am not"], "Short answer: No, I['m not]."],
    [["Is"], "Mr Bianchi = he: [Is] Mr Bianchi…?"],
    [["is"], "Short answer: Yes, he [is]."],
    [["aren't", "are not"], "‘But’ shows a contrast: his tests [aren't] easy."],
    [["is"], "The canteen = it: where [is]…?"],
    [["is", "'s"], "It [is] on the ground floor."],
    [["are", "'re"], "We [are] late."]
  ] });
P({ id: "be-errors", lesson: "to-be", type: "correct", belt: 2, items: [
  ["I have fourteen years.", ["I'm fourteen.", "I am fourteen."], "Age: [be] + number (+ years old)."],
  ["My father is engineer.", ["My father is an engineer.", "My father's an engineer."], "Jobs need [a / an]: [an] engineer."],
  ["Is very hot in here.", ["It's very hot in here.", "It is very hot in here."], "The subject is necessary: [It's] very hot."],
  ["Are you hungry? – Yes, I'm.", ["Are you hungry? – Yes, I am."], "Affirmative short answer: Yes, I [am]."],
  ["My friends is very nice.", ["My friends are very nice."], "Plural subject: [are]."],
  ["I amn't ready yet.", ["I'm not ready yet.", "I am not ready yet."], "Negative of I am: [I'm not]."],
  ["Where you are from?", ["Where are you from?"], "Questions: [be] before the subject."],
  ["Giulia has cold. Close the window, please.", ["Giulia is cold. Close the window, please.", "Giulia's cold. Close the window, please."], "‘Ha freddo’ = she [is] cold."],
  ["I'm agree with you.", ["I agree with you."], "Agree is a verb: no be. ‘Sono d'accordo’ = [I agree]."],
  ["You have right!", ["You're right!", "You are right!"], "‘Hai ragione’ = you [are] right."],
  ["My brother and I am at home.", ["My brother and I are at home."], "My brother and I = we: [are]."]
] });
P({ id: "be-translate", lesson: "to-be", type: "translate", belt: 2, items: [
  T("Ho freddo.", "", ["I'm cold.", "I am cold."], "‘Avere freddo’ = [be] cold."),
  T("Mia madre è insegnante.", "", ["My mother is a teacher.", "My mum is a teacher.", "My mother's a teacher.", "My mum's a teacher."], "Jobs need [a / an]: a teacher."),
  T("Di dove sei?", "", ["Where are you from?"], "[Where are you from?] – from goes at the end."),
  T("Non siamo stanchi.", "", ["We aren't tired.", "We're not tired.", "We are not tired."], "Negative: [we aren't] / [we're not]."),
  T("Quanti anni ha tuo fratello?", "", ["How old is your brother?"], "Age: [How old is]…? – no have."),
  T("È tardi!", "", ["It's late!", "It is late!"], "The subject is necessary: [It's] late."),
  T("Sei pronta? – Sì.", "use a short answer", ["Are you ready? – Yes, I am."], "Short answer: Yes, I [am]."),
  T("Le chiavi sono sul tavolo.", "", ["The keys are on the table."], "Plural subject: [are]."),
  T("Hai ragione.", "", ["You're right.", "You are right."], "‘Avere ragione’ = [be] right."),
  T("Siamo in ritardo.", "", ["We're late.", "We are late."], "‘Essere in ritardo’ = [be] late.")
] });
P({ id: "be-check", lesson: "to-be", type: "mc", belt: 2, title: "The verb be – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My parents ___ at work until six.", ["are", "is", "am"], 0, "Plural subject: [are]."],
  ["___ your brother at home?", ["Is", "Are", "Does"], 0, "Your brother = he: [Is]…?"],
  ["I ___ sixteen years old.", ["am", "have", "has"], 0, "Age: [be], not have."],
  ["Is it cold outside? – Yes, ___.", ["it is", "it's", "is it"], 0, "Affirmative short answers are not contracted: Yes, [it is]."],
  ["Hurry up! We ___ late!", ["are", "is", "have"], 0, "We + [are]. ‘Siamo in ritardo’."],
  ["Where ___ the toilets, please?", ["are", "is", "am"], 0, "Toilets is plural: [are]."],
  ["Sorry, ___ ready yet.", ["I'm not", "I amn't", "I not am"], 0, "Negative of I am: [I'm not]."],
  ["Mr Neri is ___ engineer.", ["an", "a", "the"], 0, "Jobs: [a / an]; engineer begins with a vowel sound: [an]."],
  ["___ cold today. Wear a jumper.", ["It's", "Is", "It"], 0, "The subject is necessary: [It's] cold."],
  ["Are you and Marta friends? – Yes, ___.", ["we are", "we're", "you are"], 0, "You and Marta = we. Short answer: Yes, [we are]."],
  ["How old ___ your grandparents?", ["are", "is", "have"], 0, "Age with a plural subject: How old [are]…?"]
] });
