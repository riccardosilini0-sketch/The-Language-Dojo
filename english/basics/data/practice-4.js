/* English Basics — practice batteries (4): have got, can, question words, the imperative.
   Formats: see data/practice-1.js. */

/* ---------- have got ---------- */
P({ id: "hg-gap", lesson: "have-got", type: "gap", belt: 1, instr: "Complete the sentences with the correct form of have got: affirmative (+) or negative (–).", items: [
  ["I ___ two sisters. (+)", [["'ve got", "have got"]], "I + [have got]."],
  ["My dad ___ a beard. (+)", [["'s got", "has got"]], "He + [has got]."],
  ["We ___ a garden, but we've got a balcony. (–)", [["haven't got", "have not got"]], "We + [haven't got]."],
  ["She ___ any brothers. She's an only child. (–)", [["hasn't got", "has not got"]], "She + [hasn't got]."],
  ["They ___ a big house in the country. (+)", [["'ve got", "have got"]], "They + [have got]."],
  ["Our cat ___ blue eyes. (+)", [["'s got", "has got"]], "It + [has got]."],
  ["I ___ a headache. I need some rest. (+)", [["'ve got", "have got"]], "Illnesses: I['ve got] a headache."],
  ["He ___ a car. He's only sixteen. (–)", [["hasn't got", "has not got"]], "He + [hasn't got]."],
  ["You ___ a lot of books! (+)", [["'ve got", "have got"]], "You + [have got]."],
  ["Lucy ___ a cold today. (+)", [["'s got", "has got"]], "She + [has got]."],
  ["We ___ any homework today. Great! (–)", [["haven't got", "have not got"]], "We + [haven't got]."],
  ["Italy ___ a lot of beautiful beaches. (+)", [["'s got", "has got"]], "It + [has got]."]
] });
P({ id: "hg-answers", lesson: "have-got", type: "halves", belt: 1, instr: "Match each question with the correct answer.",
  left: ["Have you got a pet?", "Has your brother got a car?", "Have your parents got a dog?", "Has Anna got a sister?", "Have we got any milk?", "Has the flat got a balcony?", "Have I got time for a coffee?", "Have you and Luca got a ball?"],
  right: ["Yes, it has. It's very big.", "No, she hasn't. She's got two brothers.", "No, we haven't. It's at school.", "Yes, I have. A cat called Mimi.", "Yes, you have. The train is at ten.", "No, he hasn't. He's only fifteen.", "No, we haven't. The fridge is empty.", "Yes, they have. It's a beagle."],
  answers: ["d", "f", "h", "b", "g", "a", "e", "c"],
  why: ["Have you…? – Yes, I [have].", "Has your brother…? – No, he [hasn't].", "Have your parents…? – Yes, they [have].", "Has Anna…? – No, she [hasn't].", "Milk is in the fridge: No, we [haven't].", "Has the flat…? – Yes, it [has].", "Have I…? – Yes, you [have].", "You and Luca → we: No, we [haven't]."] });
P({ id: "hg-rewrite", lesson: "have-got", type: "rewrite", belt: 1, instr: "Rewrite the sentences: make them negative (–) or turn them into questions (?). Use contractions in the negative sentences.", items: [
  ["She's got a brother. (?)", ["Has she got a brother?"], "Question: [Has she got]…?", "Has"],
  ["They've got a car. (–)", ["They haven't got a car."], "Negative: [haven't got]."],
  ["You've got a pen. (?)", ["Have you got a pen?"], "Question: [Have you got]…?", "Have"],
  ["He's got a cold. (–)", ["He hasn't got a cold."], "Negative: [hasn't got]."],
  ["We've got time. (?)", ["Have we got time?"], "Question: [Have we got]…?", "Have"],
  ["Marco has got a laptop. (?)", ["Has Marco got a laptop?"], "Question: [Has Marco got]…?", "Has"],
  ["I've got a sister. (–)", ["I haven't got a sister."], "Negative: [haven't got]."],
  ["The hotel has got a pool. (?)", ["Has the hotel got a pool?"], "Question: [Has the hotel got]…?", "Has"],
  ["Your parents have got a dog. (?)", ["Have your parents got a dog?"], "Question: [Have your parents got]…?", "Have"],
  ["My phone has got a good camera. (–)", ["My phone hasn't got a good camera."], "Negative: [hasn't got]."]
] });
P({ id: "hg-errors", lesson: "have-got", type: "correct", belt: 2, items: [
  ["My sister have got long hair.", ["My sister has got long hair.", "My sister's got long hair."], "She: [has got]."],
  ["I've a new bike.", ["I've got a new bike.", "I have got a new bike.", "I have a new bike."], "Contracted form: [’ve got]."],
  ["Do you have got a pen?", ["Have you got a pen?", "Do you have a pen?"], "[Have you got]…? or [Do you have]…?, never both."],
  ["She hasn't got some friends here.", ["She hasn't got any friends here."], "Negative: [any]."],
  ["Have you got a car? – Yes, I've got.", ["Have you got a car? – Yes, I have."], "Short answer: Yes, I [have]."],
  ["He has got twelve years.", ["He is twelve.", "He's twelve."], "Age: [be]."],
  ["Has got your brother a phone?", ["Has your brother got a phone?"], "Has + subject + got."],
  ["We have got hungry.", ["We are hungry.", "We're hungry."], "Hungry: [be]."],
  ["My dad has got the black hair.", ["My dad has got black hair.", "My dad's got black hair."], "No article with physical features."],
  ["They haven't a garden.", ["They haven't got a garden.", "They don't have a garden."], "[haven't got] or [don't have]."]
] });
P({ id: "hg-check", lesson: "have-got", type: "mc", belt: 2, title: "Have got – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My cousin ___ red hair.", ["has got", "have got", "is"], 0, "He / she: [has got]."],
  ["___ you got a dictionary?", ["Have", "Has", "Do"], 0, "Question: [Have] you got…?"],
  ["We ___ any bread. Let's go to the shop.", ["haven't got", "hasn't got", "aren't"], 0, "We + [haven't got]."],
  ["Has your school got a gym? – Yes, ___.", ["it has", "it's got", "it is"], 0, "Short answer: Yes, it [has]."],
  ["I ___ a sore throat.", ["'ve got", "'ve", "am"], 0, "Contracted form: I['ve got]."],
  ["Lisa ___ a brother, but she's got two sisters.", ["hasn't got", "haven't got", "isn't"], 0, "She + [hasn't got]."],
  ["How many cousins ___ got?", ["have you", "you have", "has you"], 0, "Question order: [have you] got?"],
  ["Our dog's got ___ long tail.", ["a", "the", "— (no article)"], 0, "One tail: [a] long tail."],
  ["___ fifteen and he's got a girlfriend.", ["He's", "He's got", "He has"], 0, "Age: [He's] (= he is) fifteen."],
  ["Have they got a car? – No, they ___.", ["haven't", "haven't got", "don't"], 0, "Short answer: No, they [haven't]."]
] });

/* ---------- can ---------- */
P({ id: "can-gap", lesson: "can", type: "gap", belt: 1, instr: "Complete the sentences with can or can't and the verb in brackets.", items: [
  ["Penguins ___ (fly), but they ___ (swim) very well.", [["can't fly", "cannot fly"], ["can swim"]], "They aren't able to fly: [can't fly]; they are able to swim: [can swim]."],
  ["I ___ (speak) English and French.", [["can speak"]], "Ability: [can] + verb."],
  ["My baby brother is only one. He ___ (walk) yet.", [["can't walk", "cannot walk"]], "Not yet able: [can't]."],
  ["Fish ___ (breathe) under water.", [["can breathe"]], "Ability: [can]."],
  ["Sorry, I ___ (come) to your party. I'm ill.", [["can't come", "cannot come"]], "Not possible: [can't]."],
  ["___ (you / help) me with my homework?", [["Can you help"]], "Request: [Can you]…?"],
  ["Cats ___ (see) in the dark.", [["can see"]], "Ability: [can]."],
  ["My grandma ___ (use) a computer. It's too difficult for her.", [["can't use", "cannot use"]], "Not able: [can't]."],
  ["___ (I / open) the window? It's hot in here.", [["Can I open"]], "Permission: [Can I]…?"],
  ["I ___ (hear) you. Speak up, please!", [["can't hear", "cannot hear"]], "Not able: [can't]."],
  ["We ___ (go) out tonight: we've got a test tomorrow.", [["can't go", "cannot go"]], "Not possible: [can't]."]
] });
P({ id: "can-mc", lesson: "can", type: "mc", belt: 1, items: [
  ["She ___ play the piano.", ["can", "cans", "can to"], 0, "No -s, no to: [can] play."],
  ["___ you ride a horse?", ["Can", "Do", "Are"], 0, "Question: [Can] you…?"],
  ["I ___ find my glasses. Where are they?", ["can't", "don't can", "not can"], 0, "Negative: [can't]."],
  ["Can you swim? – Yes, I ___.", ["can", "can swim it", "do"], 0, "Short answer: Yes, I [can]."],
  ["___ I go to the toilet, please?", ["Can", "Do", "Am"], 0, "Permission: [Can I]…?"],
  ["My dad can ___ very well.", ["cook", "cooks", "to cook"], 0, "Can + base form: [cook]."],
  ["Can he speak Chinese? – No, he ___.", ["can't", "doesn't", "isn't"], 0, "Short answer: No, he [can't]."],
  ["I ___ the answer to question 3.", ["know", "can", "know to"], 0, "A piece of information: [know]."],
  ["You ___ smoke here. It's a hospital.", ["can't", "can", "don't can"], 0, "Not allowed: [can't]."],
  ["Ostriches ___ run very fast, but they can't fly.", ["can", "can't", "cans"], 0, "Ability: [can]."]
] });
P({ id: "can-order", lesson: "can", type: "order", belt: 1, items: [
  ["can / swim / I / fast", ["I can swim fast."], "Subject + [can] + verb."],
  ["you / can / help / me", ["Can you help me?"], "Question: [Can you] + verb?"],
  ["can't / she / cook", ["She can't cook."], "Negative: subject + [can't] + verb."],
  ["can / I / the window / open", ["Can I open the window?"], "Permission: [Can I] + verb?"],
  ["play / can / the guitar / he", ["He can play the guitar.", "Can he play the guitar?"], "Affirmative or question: both are possible."],
  ["speak / they / can't / Russian", ["They can't speak Russian."], "Negative: [can't] + verb."],
  ["can / where / buy / I / a ticket", ["Where can I buy a ticket?"], "Question word + [can] + subject + verb."],
  ["see / we / the sea / can / from here", ["We can see the sea from here.", "Can we see the sea from here?"], "Affirmative or question: both are possible."],
  ["dance / can't / my brother", ["My brother can't dance."], "Negative: [can't] + verb."],
  ["ride / a bike / can / your sister", ["Can your sister ride a bike?", "Your sister can ride a bike."], "Question or affirmative: both are possible."]
] });
P({ id: "can-translate", lesson: "can", type: "translate", belt: 2, items: [
  T("So nuotare.", "", ["I can swim."], "‘Sapere’ + verb = [can]."),
  T("Non so cucinare.", "", ["I can't cook.", "I cannot cook."], "Negative: [can't]."),
  T("Sai parlare spagnolo?", "", ["Can you speak Spanish?"], "Question: [Can you]…?"),
  T("Posso entrare?", "", ["Can I come in?", "May I come in?", "Can I go in?"], "Permission: [Can I]…?"),
  T("Mi puoi aiutare?", "", ["Can you help me?", "Could you help me?"], "Request: [Can you]…?"),
  T("Mia sorella sa suonare il violino.", "", ["My sister can play the violin."], "Ability: [can] + play."),
  T("Non trovo il mio telefono.", "", ["I can't find my phone.", "I cannot find my phone.", "I can't find my mobile.", "I can't find my mobile phone."], "‘Non trovo’ = [I can't find]."),
  T("Qui non si può fumare.", "", ["You can't smoke here.", "You cannot smoke here."], "Not allowed: [You can't]."),
  T("Lui sa guidare? – No.", "use a short answer", ["Can he drive? – No, he can't.", "Can he drive? – No, he cannot."], "Short answer: No, he [can't]."),
  T("Da qui si vede il mare.", "", ["You can see the sea from here.", "We can see the sea from here."], "Possibility: [you can see].")
] });
P({ id: "can-check", lesson: "can", type: "mc", belt: 2, title: "Can – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My grandfather ___ use a smartphone. He's very good at it.", ["can", "cans", "can to"], 0, "Ability: [can]."],
  ["___ you play chess? – Yes, I can.", ["Can", "Do", "Are"], 0, "Question: [Can] you…?"],
  ["I ___ hear you. The music is too loud!", ["can't", "don't can", "not can"], 0, "Negative: [can't]."],
  ["‘So guidare’ = I ___ drive.", ["can", "know", "know to"], 0, "Ability: [can]."],
  ["Can I borrow your pen? – Sure, ___.", ["you can", "I can", "you can't"], 0, "Giving permission: [you can]."],
  ["Can your sister speak German? – No, she ___.", ["can't", "doesn't", "isn't"], 0, "Short answer: No, she [can't]."],
  ["Sorry, we ___ come to the party.", ["can't", "can't to", "don't can"], 0, "Negative: [can't] + verb."],
  ["He can ___ three languages.", ["speak", "speaks", "to speak"], 0, "Can + base form."],
  ["Where ___ buy a bus ticket?", ["can I", "I can", "can I to"], 0, "Question word + [can I] + verb."],
  ["Newborn babies ___ walk.", ["can't", "can", "cans"], 0, "Not able: [can't]."]
] });

/* ---------- question words ---------- */
P({ id: "q-gap", lesson: "questions", type: "gap", belt: 1, instr: "Complete the questions with a question word. Read the answers first.", items: [
  ["___ is your name? – Daniel.", [["What"]], "Name: [What]'s your name?"],
  ["___ are you from? – Spain.", [["Where"]], "Place: [Where]."],
  ["___ old is your dog? – Three.", [["How"]], "Age: [How] old."],
  ["___ is your birthday? – In June.", [["When"]], "Time: [When]."],
  ["___ is your English teacher? – Mrs Grant.", [["Who"]], "A person: [Who]."],
  ["___ are you sad? – Because my cat is ill.", [["Why"]], "A reason (because): [Why]."],
  ["___ many pens have you got? – Four.", [["How"]], "Number: [How] many."],
  ["___ much is this book? – Eight euros.", [["How"]], "Price: [How] much."],
  ["___ is this umbrella? – It's Paolo's.", [["Whose"]], "The owner: [Whose]."],
  ["___ are you? – I'm fine, thanks.", [["How"]], "Condition: [How] are you?"],
  ["___ time is the film? – At nine.", [["What"]], "The time: [What] time."],
  ["___ bus is ours, the 12 or the 15? – The 12.", [["Which"]], "A choice between two: [Which]."]
] });
P({ id: "q-answers", lesson: "questions", type: "halves", belt: 1, instr: "Match each question with the correct answer.",
  left: ["What's your name?", "Where's the bathroom?", "Who's that man?", "When's the next train?", "Why are you tired?", "How are you?", "How much is this cap?", "Whose is this pen?", "How many people are there in your class?", "Which is your bike?"],
  right: ["It's mine.", "Twenty-four.", "Fine, thanks. And you?", "Down the corridor, on the left.", "Because I can't sleep at night.", "At 10.15.", "The blue one.", "Lucia.", "He's my uncle.", "Twelve euros."],
  answers: ["h", "d", "i", "f", "e", "c", "j", "a", "b", "g"],
  why: ["Name → [Lucia].", "Where → a place.", "Who → a person: [He's my uncle].", "When → a time.", "Why → [because]…", "How are you? → [Fine, thanks].", "How much → a price.", "Whose → the owner: [mine].", "How many → a number.", "Which → a choice: [the blue one]."] });
P({ id: "q-order", lesson: "questions", type: "order", belt: 1, items: [
  ["is / your / what / name", ["What is your name?"], "Question word + [is] + subject."],
  ["from / are / where / you", ["Where are you from?"], "The preposition goes at the end."],
  ["your / how / sister / old / is", ["How old is your sister?"], "[How old] + is + subject."],
  ["got / have / how many / you / cousins", ["How many cousins have you got?"], "[How many] + noun + have + subject + got."],
  ["is / who / your / teacher / favourite", ["Who is your favourite teacher?"], "[Who] + is + subject."],
  ["can / what / you / cook", ["What can you cook?"], "Question word + [can] + subject + verb."],
  ["the / station / is / where", ["Where is the station?"], "[Where] + is + subject."],
  ["late / you / are / why", ["Why are you late?"], "[Why] + are + subject."],
  ["is / your / when / birthday", ["When is your birthday?"], "[When] + is + subject."],
  ["this / whose / is / bag", ["Whose bag is this?", "Whose is this bag?"], "[Whose] + noun + is + this? or Whose is this + noun?"]
] });
P({ id: "q-errors", lesson: "questions", type: "correct", belt: 2, items: [
  ["Where you are from?", ["Where are you from?"], "Question word + be + subject."],
  ["How many years has your brother?", ["How old is your brother?"], "Age: [How old] + be."],
  ["What time it is?", ["What time is it?"], "Be before the subject: [is it]."],
  ["How much books have you got?", ["How many books have you got?"], "Countable nouns: [how many]."],
  ["From where is your teacher?", ["Where is your teacher from?", "Where's your teacher from?"], "The preposition goes at the end."],
  ["How is your name?", ["What is your name?", "What's your name?"], "‘Come ti chiami?’ = [What's] your name?"],
  ["Who's is this jacket?", ["Whose is this jacket?", "Whose jacket is this?"], "The owner: [whose]."],
  ["Why you are angry?", ["Why are you angry?"], "Why + be + subject."],
  ["How many brothers you have got?", ["How many brothers have you got?"], "Have before the subject."],
  ["Where can I to buy a ticket?", ["Where can I buy a ticket?"], "No to after can."]
] });
P({ id: "q-check", lesson: "questions", type: "mc", belt: 2, title: "Question words – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ is your best friend? – Marco.", ["Who", "What", "Whose"], 0, "A person: [Who]."],
  ["___ are my keys? – On the table.", ["Where", "What", "When"], 0, "A place: [Where]."],
  ["___ is the concert? – On Saturday.", ["When", "Where", "Who"], 0, "A day: [When]."],
  ["___ brothers have you got?", ["How many", "How much", "How"], 0, "Countable nouns: [How many]."],
  ["___ is that car? – It's my neighbour's.", ["Whose", "Who's", "Who"], 0, "The owner: [Whose]."],
  ["___ is your sister? – She's seventeen.", ["How old", "How many", "What"], 0, "Age: [How old]."],
  ["___ are you so happy? – Because it's Friday!", ["Why", "What", "How"], 0, "A reason: [Why]."],
  ["___ is the pizza? – Seven euros.", ["How much", "How many", "What much"], 0, "Price: [How much]."],
  ["___ colour is your new bike?", ["What", "How", "Who"], 0, "[What colour]…?"],
  ["___ one is yours, the black one or the white one?", ["Which", "What", "Who"], 0, "A choice between two: [Which]."]
] });

/* ---------- the imperative ---------- */
P({ id: "imp-gap", lesson: "imperative", type: "gap", belt: 1, instr: "Complete the sentences with the affirmative (+) or negative (–) imperative of the verbs in brackets.", items: [
  ["___ (open) your books at page 12. (+)", [["Open"]], "Affirmative: base form."],
  ["___ (run) in the corridor! (–)", [["Don't run", "Do not run"]], "Negative: [Don't] + verb."],
  ["___ (be) late for the bus! (–)", [["Don't be", "Do not be"]], "Negative of be: [Don't be]."],
  ["___ (listen) carefully. (+)", [["Listen"]], "Affirmative: base form."],
  ["___ (forget) your homework! (–)", [["Don't forget", "Do not forget"]], "Negative: [Don't] + verb."],
  ["___ (sit) down, please. (+)", [["Sit"]], "Affirmative: base form."],
  ["___ (touch) that! It's hot! (–)", [["Don't touch", "Do not touch"]], "Warning: [Don't touch]."],
  ["___ (be) careful with that knife. (+)", [["Be"]], "Affirmative of be: [Be]."],
  ["___ (worry). Everything is OK. (–)", [["Don't worry", "Do not worry"]], "Advice: [Don't worry]."],
  ["___ (close) the door, please. It's cold. (+)", [["Close"]], "Affirmative: base form."],
  ["___ (talk) during the test. (–)", [["Don't talk", "Do not talk"]], "Negative: [Don't] + verb."],
  ["___ (turn) left at the bank. (+)", [["Turn"]], "Directions: base form."]
] });
P({ id: "imp-match", lesson: "imperative", type: "halves", belt: 1, instr: "Match each situation with the correct instruction or suggestion.",
  left: ["It's very cold in here.", "The baby is asleep.", "The floor is wet.", "You've got a headache.", "It's your birthday!", "The road is dangerous.", "The test is easy.", "You're hungry.", "It's midnight and the party is over.", "The film is great."],
  right: ["Look both ways before you cross.", "Close the window.", "Watch it tonight!", "Drink some water and rest.", "Have a wonderful day!", "Don't make any noise.", "Let's go home.", "Have a sandwich.", "Don't worry!", "Be careful, don't slip!"],
  answers: ["b", "f", "j", "d", "e", "a", "i", "h", "g", "c"],
  why: ["Cold → close the window.", "Asleep → [don't] make noise.", "Wet floor → [be careful].", "Headache → drink water and rest.", "Birthday → [have] a wonderful day.", "Dangerous road → look both ways.", "Easy test → [don't worry].", "Hungry → [have] a sandwich.", "The party is over → [let's] go home.", "A great film → [watch] it."] });
P({ id: "imp-errors", lesson: "imperative", type: "correct", belt: 1, items: [
  ["Not run in the corridor!", ["Don't run in the corridor!", "Do not run in the corridor!"], "Negative: [Don't] + verb."],
  ["Don't to forget your keys.", ["Don't forget your keys."], "No to after don't."],
  ["Let's to have a pizza!", ["Let's have a pizza!"], "Let's + base form."],
  ["You close the door, please.", ["Close the door, please.", "Please close the door."], "No subject."],
  ["Be not afraid!", ["Don't be afraid!"], "Negative of be: [Don't be]."],
  ["Let's don't go out tonight.", ["Let's not go out tonight."], "Negative: [Let's not]."],
  ["Listens to me!", ["Listen to me!"], "Base form, no -s."],
  ["Don't is late!", ["Don't be late!"], "Negative of be: [Don't be]."],
  ["Please, sits down.", ["Please sit down.", "Please, sit down."], "Base form: [sit]."],
  ["No touch the paintings.", ["Don't touch the paintings."], "Negative: [Don't] + verb."]
] });
P({ id: "imp-text", lesson: "imperative", type: "text", belt: 2, title: "How to make a cup of tea", instr: "Read the whole text first, then complete the gaps with the affirmative or negative imperative of the verbs in brackets.",
  parts: [
    ["#", "How to make a cup of tea"],
    ["", "{1} (boil) some water. {2} (put) a tea bag in a cup. {3} (pour) the hot water into the cup and {4} (wait) three or four minutes."],
    ["", "{5} (leave) the tea bag in for too long: the tea gets bitter! {6} (take) out the tea bag and {7} (add) some milk, if you like."],
    ["", "{8} (drink) it immediately – it's very hot! {9} (sit) down, {10} (relax) and enjoy your tea."]
  ],
  gaps: [
    [["Boil"], "Instruction: base form."],
    [["Put"], "Instruction: base form."],
    [["Pour"], "Instruction: base form."],
    [["wait"], "Instruction: base form."],
    [["Don't leave", "Do not leave"], "A warning: the tea gets bitter → [Don't leave]."],
    [["Take"], "Instruction: base form."],
    [["add"], "Instruction: base form."],
    [["Don't drink", "Do not drink"], "A warning: it's very hot → [Don't drink]."],
    [["Sit"], "Instruction: base form."],
    [["relax"], "Instruction: base form."]
  ] });
P({ id: "imp-check", lesson: "imperative", type: "mc", belt: 2, title: "The imperative – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ your hands before lunch.", ["Wash", "Washes", "To wash"], 0, "Base form: [Wash]."],
  ["___ shout! The baby is asleep.", ["Don't", "Not", "No"], 0, "Negative: [Don't]."],
  ["___ go to the beach this afternoon!", ["Let's", "Let", "Let's to"], 0, "Suggestion: [Let's] + verb."],
  ["Don't ___ late tomorrow.", ["be", "are", "to be"], 0, "Negative of be: [Don't be]."],
  ["___ careful! The plate is hot.", ["Be", "Are", "Is"], 0, "Imperative of be: [Be]."],
  ["It's cold. ___ open the window.", ["Let's not", "Let's don't", "Not let's"], 0, "Negative suggestion: [Let's not]."],
  ["Please ___ quiet in the library.", ["be", "are", "being"], 0, "Imperative of be: [be]."],
  ["___ this cake – it's delicious!", ["Try", "Tries", "To try"], 0, "Base form: [Try]."],
  ["Don't ___, everything is fine.", ["worry", "worries", "to worry"], 0, "Don't + base form."],
  ["___ the window, please. It's hot.", ["Open", "Opens", "Opening"], 0, "Base form: [Open]."]
] });
