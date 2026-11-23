/* Relative Clauses — practice batteries.
   Formats: see english/basics/data/practice-1.js. */
const P = x => GL.batteries.push(x);
const T = (it, hint, acc, why) => [it, hint, acc, acc[0], why];

/* ---------- who, which, that ---------- */
P({ id: "ww-gap", lesson: "who-which", type: "gap", belt: 2, instr: "Complete the sentences with who or which.", items: [
  ["The girl ___ sits next to me is from Spain.", [["who", "that"]], "A person: [who] (or that)."],
  ["The bus ___ goes to the airport is the 52.", [["which", "that"]], "A thing: [which] (or that)."],
  ["I've got a friend ___ speaks five languages.", [["who", "that"]], "A person: [who]."],
  ["This is the book ___ changed my life.", [["which", "that"]], "A thing: [which]."],
  ["A vet is a doctor ___ looks after animals.", [["who", "that"]], "A person: [who]."],
  ["Did you see the dog ___ was in the park?", [["which", "that"]], "An animal: [which]."],
  ["The people ___ live upstairs are very noisy.", [["who", "that"]], "People: [who]."],
  ["I lost the ring ___ my grandmother gave me.", [["which", "that"]], "A thing: [which]."],
  ["The woman ___ called you is my aunt.", [["who", "that"]], "A person: [who]."],
  ["It's a film ___ everyone should see.", [["which", "that"]], "A thing: [which]."],
  ["Is she the teacher ___ helped you?", [["who", "that"]], "A person: [who]."],
  ["We stayed in a hotel ___ had a big pool.", [["which", "that"]], "A thing: [which]."]
] });
P({ id: "ww-halves", lesson: "who-which", type: "halves", belt: 2, instr: "Match the two halves of these definitions.",
  left: ["A dentist is a person", "A fridge is a machine", "A librarian is someone", "A passport is a document", "A neighbour is a person", "A dictionary is a book", "A tourist is someone", "A thermometer is an instrument"],
  right: ["which tells you what words mean.", "who lives near you.", "which keeps food cold.", "who visits a place on holiday.", "who looks after your teeth.", "which measures temperature.", "who works in a library.", "which you need to travel abroad."],
  answers: ["e", "c", "g", "h", "b", "a", "d", "f"],
  why: ["A person: who.", "A thing: which.", "A person: who.", "A thing: which.", "A person: who.", "A thing: which.", "A person: who.", "A thing: which."] });
P({ id: "ww-errors", lesson: "who-which", type: "correct", belt: 2, items: [
  ["The girl which sits next to me is Spanish.", ["The girl who sits next to me is Spanish.", "The girl that sits next to me is Spanish."], "People: [who]."],
  ["The book who I'm reading is great.", ["The book which I'm reading is great.", "The book that I'm reading is great.", "The book I'm reading is great."], "Things: [which]."],
  ["The film that I saw it was boring.", ["The film that I saw was boring.", "The film I saw was boring.", "The film which I saw was boring."], "Don't repeat the object."],
  ["The man what lives here is a doctor.", ["The man who lives here is a doctor.", "The man that lives here is a doctor."], "After a noun: [who]."],
  ["She's the woman who she teaches us maths.", ["She's the woman who teaches us maths.", "She's the woman that teaches us maths."], "Who is already the subject."],
  ["I have a cat who is called Pepe and which sleeps all day.", ["I have a cat which is called Pepe and sleeps all day.", "I have a cat that is called Pepe and sleeps all day.", "I have a cat called Pepe which sleeps all day."], "Animals: [which / that]."],
  ["The bus which I take it every day is always late.", ["The bus which I take every day is always late.", "The bus that I take every day is always late.", "The bus I take every day is always late."], "Don't repeat the object."],
  ["Is this the train goes to Verona?", ["Is this the train that goes to Verona?", "Is this the train which goes to Verona?"], "Subject: the pronoun is necessary."]
] });
P({ id: "ww-check", lesson: "who-which", type: "mc", belt: 2, title: "Who, which, that – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The man ___ repaired my bike was very kind.", ["who", "which", "what"], 0, "A person: [who]."],
  ["Where's the cake ___ was on the table?", ["that", "who", "what"], 0, "A thing: [that]."],
  ["I like people ___ are honest.", ["who", "which", "whose"], 0, "People: [who]."],
  ["This is the song ___ won the competition.", ["which", "who", "where"], 0, "A thing: [which]."],
  ["The doctor ___ I saw yesterday was very young.", ["who", "which", "she"], 0, "A person: [who]."],
  ["Have you got a pen ___ works?", ["that", "who", "it"], 0, "A thing: [that]."],
  ["The photos ___ you sent me are beautiful.", ["which", "who", "what"], 0, "Things: [which]."],
  ["She's the girl ___ won the prize.", ["who", "which", "what"], 0, "A person: [who]."],
  ["The museum ___ we visited was closed on Monday.", ["that", "who", "where"], 0, "A thing, object of visited: [that]."],
  ["The dog ___ bit my brother belongs to our neighbour.", ["which", "who", "what"], 0, "An animal: [which]."]
] });

/* ---------- leaving out the pronoun ---------- */
P({ id: "om-sort", lesson: "omit", type: "sort", belt: 3, instr: "Can the relative pronoun in brackets be left out?", cats: ["yes (object)", "no (subject)"], items: [
  ["The book (that) I'm reading", 0, "A subject follows (I): object pronoun, optional."],
  ["The man (who) lives next door", 1, "A verb follows (lives): subject pronoun, necessary."],
  ["The film (which) we saw", 0, "Object of saw: optional."],
  ["The bus (that) goes to town", 1, "Subject of goes: necessary."],
  ["The girl (who) you met", 0, "Object of met: optional."],
  ["The app (which) helps you study", 1, "Subject of helps: necessary."],
  ["The song (that) my brother likes", 0, "Object of likes: optional."],
  ["The teacher (who) teaches us art", 1, "Subject of teaches: necessary."],
  ["The present (that) she gave me", 0, "Object of gave: optional."],
  ["The people (who) work here", 1, "Subject of work: necessary."]
] });
P({ id: "om-rewrite", lesson: "omit", type: "rewrite", belt: 3, instr: "Join the two sentences with a relative clause. Leave out the relative pronoun where possible.", items: [
  ["I bought a jacket. It's too big.", ["The jacket I bought is too big.", "The jacket that I bought is too big.", "The jacket which I bought is too big."], "Object: the pronoun can be left out.", "The jacket"],
  ["A man lives next door. He's a pilot.", ["The man who lives next door is a pilot.", "The man that lives next door is a pilot."], "Subject: [who] is necessary.", "The man"],
  ["We met some people on holiday. They were very friendly.", ["The people we met on holiday were very friendly.", "The people who we met on holiday were very friendly.", "The people that we met on holiday were very friendly."], "Object: optional.", "The people"],
  ["You recommended a book. I loved it.", ["I loved the book you recommended.", "I loved the book that you recommended.", "I loved the book which you recommended."], "Object: optional.", "I loved"],
  ["A girl won the race. She's my cousin.", ["The girl who won the race is my cousin.", "The girl that won the race is my cousin."], "Subject: necessary.", "The girl"],
  ["My dad cooked a meal. It was delicious.", ["The meal my dad cooked was delicious.", "The meal that my dad cooked was delicious.", "The meal which my dad cooked was delicious."], "Object: optional.", "The meal"],
  ["A bus stops here. It goes to the station.", ["The bus that stops here goes to the station.", "The bus which stops here goes to the station."], "Subject: necessary.", "The bus"],
  ["I took some photos. Do you want to see them?", ["Do you want to see the photos I took?", "Do you want to see the photos that I took?", "Do you want to see the photos which I took?"], "Object: optional.", "Do you want"]
] });
P({ id: "om-check", lesson: "omit", type: "mc", belt: 3, title: "Leaving out the pronoun – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The woman ___ is the new manager.", ["who you met", "you met her", "who you met her"], 0, "Object: who (or nothing) + subject + verb."],
  ["The boy ___ in the hospital is my friend.", ["who is", "is", "he is"], 0, "Subject: [who] is necessary."],
  ["Is this the bag ___?", ["you lost", "you lost it", "lost"], 0, "Object pronoun left out; don't repeat it."],
  ["The train ___ at nine is always full.", ["that leaves", "leaves", "it leaves"], 0, "Subject: [that] is necessary."],
  ["The pizza ___ was cold.", ["we ordered", "we ordered it", "ordered"], 0, "Object: left out, not repeated."],
  ["I know a girl ___ three instruments.", ["who plays", "plays", "she plays"], 0, "Subject: necessary."],
  ["The questions ___ were very difficult.", ["they asked", "asked", "they asked them"], 0, "Object: left out."],
  ["Do you remember the man ___ to us at the station?", ["who spoke", "spoke", "he spoke"], 0, "Subject: necessary."]
] });

/* ---------- whose, where, when ---------- */
P({ id: "wh-gap", lesson: "whose-where", type: "gap", belt: 3, instr: "Complete the sentences with whose, where, when or why.", items: [
  ["That's the café ___ we first met.", [["where"]], "A place: [where]."],
  ["I have a friend ___ father is a famous chef.", [["whose"]], "Possession: [whose]."],
  ["I'll never forget the day ___ I passed my driving test.", [["when"]], "A time: [when]."],
  ["That's the reason ___ I'm always tired.", [["why"]], "A reason: [why]."],
  ["The boy ___ bike was stolen called the police.", [["whose"]], "Possession: [whose]."],
  ["This is the hospital ___ I was born.", [["where"]], "A place: [where]."],
  ["Summer is the season ___ I feel happiest.", [["when"]], "A time: [when]."],
  ["She's the singer ___ songs are on every radio station.", [["whose"]], "Possession: [whose]."],
  ["Is there a shop near here ___ I can buy a charger?", [["where"]], "A place: [where]."],
  ["Do you remember the year ___ we moved here?", [["when"]], "A time: [when]."]
] });
P({ id: "wh-mc", lesson: "whose-where", type: "mc", belt: 3, items: [
  ["The man ___ car I crashed into was very angry.", ["whose", "who's", "who"], 0, "Possession: [whose]."],
  ["That's the town ___ my mother grew up.", ["where", "which", "when"], 0, "A place + subject + verb: [where]."],
  ["That's the town ___ has the oldest bridge in Italy.", ["which", "where", "whose"], 0, "Subject of has: [which]."],
  ["Monday is the day ___ the museum is closed.", ["when", "where", "which"], 0, "A time: [when]."],
  ["She's the girl ___ in my English class.", ["who's", "whose", "who"], 0, "who is: [who's]."],
  ["Is that the restaurant ___ you had dinner?", ["where", "which", "when"], 0, "A place: [where]."],
  ["I met a woman ___ son plays for Juventus.", ["whose", "who", "which"], 0, "Possession: [whose]."],
  ["Tell me the reason ___ you're angry.", ["why", "which", "what"], 0, "A reason: [why]."]
] });
P({ id: "wh-errors", lesson: "whose-where", type: "correct", belt: 3, items: [
  ["The boy who's dad is a pilot is in my class.", ["The boy whose dad is a pilot is in my class."], "Possession: [whose]."],
  ["That's the restaurant which we had dinner.", ["That's the restaurant where we had dinner.", "That's the restaurant which we had dinner in.", "That's the restaurant in which we had dinner."], "A place: [where]."],
  ["This is the town where I was born in.", ["This is the town where I was born.", "This is the town I was born in."], "Where already means ‘in which’."],
  ["The man whose his car was stolen called the police.", ["The man whose car was stolen called the police."], "Whose replaces his."],
  ["I remember the day where I met you.", ["I remember the day when I met you.", "I remember the day I met you."], "A time: [when]."],
  ["That's the reason because I left.", ["That's the reason why I left.", "That's why I left."], "[the reason why]."],
  ["The woman who her bag was stolen is crying.", ["The woman whose bag was stolen is crying."], "Possession: [whose]."],
  ["Is there a place which I can park?", ["Is there a place where I can park?"], "A place: [where]."]
] });
P({ id: "wh-check", lesson: "whose-where", type: "mc", belt: 3, title: "Whose, where, when – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The writer ___ book I'm reading lives in Turin.", ["whose", "who's", "which"], 0, "Possession: [whose]."],
  ["That's the beach ___ we spent our holidays.", ["where", "which", "when"], 0, "A place: [where]."],
  ["Christmas is the time ___ families get together.", ["when", "where", "which"], 0, "A time: [when]."],
  ["Do you know the reason ___ she's sad?", ["why", "because", "what"], 0, "A reason: [why]."],
  ["The student ___ phone rang had to leave the room.", ["whose", "who", "who's"], 0, "Possession: [whose]."],
  ["Rome is the city ___ I'd most like to live.", ["where", "which", "that"], 0, "A place: [where]."],
  ["The house ___ windows are broken has been empty for years.", ["whose", "which", "where"], 0, "Possession for things: [whose]."],
  ["Do you remember the moment ___ you heard the news?", ["when", "where", "whose"], 0, "A time: [when]."]
] });

/* ---------- non-defining ---------- */
P({ id: "nd-mc", lesson: "non-defining", type: "mc", belt: 4, items: [
  ["My brother, ___ lives in Rome, is a chef.", ["who", "that", "—"], 0, "Non-defining: [who], never that."],
  ["Paris, ___ I visited last year, is beautiful.", ["which", "that", "—"], 0, "Non-defining: [which]; it can't be left out."],
  ["He passed all his exams, ___ surprised everyone.", ["which", "what", "that"], 0, "A whole sentence: [which]."],
  ["Mrs Verdi, ___ daughter is a doctor, lives next door.", ["whose", "who", "who's"], 0, "Possession: [whose]."],
  ["Naples, ___ my father was born, is famous for pizza.", ["where", "which", "that"], 0, "A place: [where]."],
  ["Our teacher, ___ everyone loves, is retiring this year.", ["who", "that", "—"], 0, "Non-defining: [who]; never left out."],
  ["The concert was cancelled, ___ was a big disappointment.", ["which", "what", "who"], 0, "A whole sentence: [which]."],
  ["My phone, ___ I bought last month, has stopped working.", ["which", "that", "—"], 0, "Non-defining: [which]."]
] });
P({ id: "nd-rewrite", lesson: "non-defining", type: "rewrite", belt: 4, instr: "Join the two sentences with a non-defining relative clause. Remember the commas.", items: [
  ["My grandmother is ninety. She still drives.", ["My grandmother, who is ninety, still drives."], "Extra information: [, who …,].", "My grandmother,"],
  ["Venice is full of tourists. My aunt lives there.", ["Venice, where my aunt lives, is full of tourists."], "A place: [, where …,].", "Venice,"],
  ["Mr Riva is a vet. His son is in my class.", ["Mr Riva, whose son is in my class, is a vet."], "Possession: [, whose …,].", "Mr Riva,"],
  ["My laptop is very slow. I bought it five years ago.", ["My laptop, which I bought five years ago, is very slow."], "A thing: [, which …,].", "My laptop,"],
  ["The train was late. This meant we missed the film.", ["The train was late, which meant we missed the film.", "The train was late, which meant that we missed the film."], "A whole sentence: [, which …].", "The train was late,"],
  ["Our English teacher is from Dublin. Everyone likes her.", ["Our English teacher, who everyone likes, is from Dublin.", "Our English teacher, whom everyone likes, is from Dublin."], "Non-defining: who / whom.", "Our English teacher,"],
  ["Lake Garda is very popular. It's the largest lake in Italy.", ["Lake Garda, which is the largest lake in Italy, is very popular."], "A place as a thing: [, which …,].", "Lake Garda,"],
  ["She didn't come to my party. That was strange.", ["She didn't come to my party, which was strange."], "A whole sentence: [, which …].", "She didn't come to my party,"]
] });
P({ id: "nd-errors", lesson: "non-defining", type: "correct", belt: 4, items: [
  ["My brother, that lives in Rome, is a chef.", ["My brother, who lives in Rome, is a chef."], "Non-defining: never that."],
  ["Paris, I visited last year, is beautiful.", ["Paris, which I visited last year, is beautiful."], "Non-defining: the pronoun can't be left out."],
  ["He failed the test, what was a surprise.", ["He failed the test, which was a surprise."], "A whole sentence: [which]."],
  ["My mother who is a doctor works at night.", ["My mother, who is a doctor, works at night."], "Non-defining: commas."],
  ["Florence, that is in Tuscany, is very beautiful.", ["Florence, which is in Tuscany, is very beautiful."], "Non-defining: [which]."],
  ["My best friend, who's parents are Irish, speaks perfect English.", ["My best friend, whose parents are Irish, speaks perfect English."], "Possession: [whose]."],
  ["The Colosseum, where is in Rome, was built in AD 80.", ["The Colosseum, which is in Rome, was built in AD 80."], "Subject: [which], not where."],
  ["We missed the bus, that meant we were late.", ["We missed the bus, which meant we were late.", "We missed the bus, which meant that we were late."], "A whole sentence: [which]."]
] });
P({ id: "nd-check", lesson: "non-defining", type: "mc", belt: 4, title: "Non-defining relative clauses – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["Milan, ___ is the capital of Lombardy, has two football teams.", ["which", "that", "where"], 0, "Subject, non-defining: [which]."],
  ["My uncle, ___ you met at my party, is a pilot.", ["who", "that", "—"], 0, "Non-defining: [who]; can't be left out."],
  ["She lent me her car, ___ was very kind of her.", ["which", "what", "that"], 0, "A whole sentence: [which]."],
  ["Which sentence is correct?", ["My sister, who lives in Turin, is a nurse.", "My sister who lives in Turin, is a nurse.", "My sister, that lives in Turin, is a nurse."], 0, "Two commas, who."],
  ["Mr Neri, ___ shop is in the main square, sells the best bread.", ["whose", "who", "which"], 0, "Possession: [whose]."],
  ["Sicily, ___ my grandparents live, is beautiful in spring.", ["where", "which", "when"], 0, "A place: [where]."],
  ["In 2006, ___ Italy won the World Cup, I was five.", ["when", "where", "which"], 0, "A time: [when]."],
  ["The sofa, ___ we bought last year, is already broken.", ["which", "that", "—"], 0, "Non-defining: [which]."]
] });

/* ---------- prepositions and what ---------- */
P({ id: "pw-gap", lesson: "prep-what", type: "gap", belt: 4, instr: "Complete the sentences with what, which, whom, or a preposition (about, for, from, with…).", items: [
  ["___ I need is a long holiday.", [["What"]], "‘Quello che’ = [what]."],
  ["Is this the key you were looking ___?", [["for"]], "look for: the preposition goes at the end."],
  ["The house in ___ I grew up has been sold.", [["which"]], "After a preposition: [which]."],
  ["I don't understand ___ you mean.", [["what"]], "‘Quello che’ = [what]."],
  ["The person to ___ I spoke was very helpful.", [["whom"]], "Formal, after a preposition: [whom]."],
  ["She's the friend I always go on holiday ___.", [["with"]], "go on holiday with: preposition at the end."],
  ["That's the film I told you ___.", [["about"]], "tell someone about something."],
  ["Tell me ___ happened.", [["what"]], "‘Quello che / che cosa’ = [what]."],
  ["The town I come ___ is very small.", [["from"]], "come from: preposition at the end."],
  ["The topic ___ she's most interested in is history.", [["which", "that"]], "After a noun: which / that (or nothing)."]
] });
P({ id: "pw-errors", lesson: "prep-what", type: "correct", belt: 4, items: [
  ["The thing what I need is time.", ["The thing that I need is time.", "The thing I need is time.", "The thing which I need is time.", "What I need is time."], "After a noun: [that]."],
  ["That's the girl with who I went to Paris.", ["That's the girl I went to Paris with.", "That's the girl with whom I went to Paris.", "That's the girl who I went to Paris with."], "Preposition at the end, or with whom."],
  ["The house in that I live is old.", ["The house in which I live is old.", "The house I live in is old.", "The house that I live in is old.", "The house where I live is old."], "After a preposition: [which], never that."],
  ["I don't understand that you're saying.", ["I don't understand what you're saying."], "‘Quello che’ = [what]."],
  ["Which I like most is the beach.", ["What I like most is the beach."], "‘Quello che’ = [what]."],
  ["Is this the book you were looking?", ["Is this the book you were looking for?", "Is this the book that you were looking for?"], "look [for]: don't forget the preposition."],
  ["Everything what she said was true.", ["Everything that she said was true.", "Everything she said was true."], "After everything: [that], not what."],
  ["The man to who I wrote never answered.", ["The man to whom I wrote never answered.", "The man I wrote to never answered.", "The man who I wrote to never answered."], "After a preposition: [whom]."]
] });
P({ id: "pw-check", lesson: "prep-what", type: "mc", belt: 4, title: "Prepositions and what – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ I really want is a new bike.", ["What", "That", "Which"], 0, "‘Quello che’ = [What]."],
  ["She's the person I can always count ___.", ["on", "—", "with"], 0, "count on: preposition at the end."],
  ["The company for ___ she works is in Milan.", ["which", "that", "what"], 0, "After a preposition: [which]."],
  ["Everything ___ he told you is a lie.", ["that", "what", "which what"], 0, "After everything: [that]."],
  ["Is this the song you were talking ___?", ["about", "of it", "—"], 0, "talk about: preposition at the end."],
  ["I can't believe ___ she said!", ["what", "that what", "which"], 0, "‘Quello che’ = [what]."],
  ["The candidate with ___ we spoke was excellent.", ["whom", "who", "that"], 0, "Formal, after a preposition: [whom]."],
  ["This is the town I come ___.", ["from", "—", "from it"], 0, "Preposition at the end, without repeating the object: the town I come [from]."]
] });

/* ---------- review ---------- */
P({ id: "review-text", lesson: "review", type: "text", belt: 3, title: "My grandparents' village", instr: "Read the whole text first, then complete the gaps with who, which, that, whose, where, when or what.",
  parts: [
    ["#", "My grandparents' village"],
    ["", "Every summer I go to Montecalvo, a tiny village {1} my grandparents live. It's a place {2} everybody knows everybody. My grandad, {3} is eighty-two, still works in the vineyard {4} his father planted in 1950."],
    ["", "Next door there's a family {5} children are my best friends there. We spend the days in the river, {6} is cold but very clear, and in the evening we eat at Zia Rosa's, a little restaurant {7} makes the best pasta in the world."],
    ["", "The moment {8} I like most is the evening, {9} the whole village meets in the square. {10} I love about Montecalvo is that nothing ever changes."]
  ],
  gaps: [
    [["where"], "A place: [where]."],
    [["where"], "A place where everybody knows everybody."],
    [["who"], "Non-defining, a person: [who]."],
    [["which", "that"], "A thing: [which / that]."],
    [["whose"], "Possession: [whose] children."],
    [["which"], "Non-defining, a thing: [which]."],
    [["which", "that"], "A thing, subject of makes."],
    [["that", "which"], "Object: that / which (it could also be left out)."],
    [["when"], "A time: [when]."],
    [["What"], "‘Quello che’ = [What]."]
  ] });
P({ id: "review-test", lesson: "review", type: "mc", belt: 4, test: true, title: "Relative Clauses – Final test",
  instr: "20 questions, 5 points each: 100 points in all. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["The woman ___ lives upstairs is a doctor.", ["who", "which", "what"], 0, "A person."],
  ["The phone ___ I bought is broken.", ["that", "who", "what"], 0, "A thing."],
  ["Is this the bus ___ goes to the centre?", ["which", "who", "where"], 0, "A thing, subject."],
  ["The film ___ was boring.", ["we saw", "we saw it", "saw"], 0, "Object: pronoun left out."],
  ["The boy ___ won the prize is my brother.", ["who", "—", "he"], 0, "Subject: necessary."],
  ["The man ___ dog bit me apologised.", ["whose", "who's", "who"], 0, "Possession."],
  ["That's the shop ___ I bought my shoes.", ["where", "which", "when"], 0, "A place."],
  ["I remember the day ___ we met.", ["when", "where", "which"], 0, "A time."],
  ["That's the reason ___ I'm late.", ["why", "because", "which"], 0, "A reason."],
  ["My sister, ___ is a nurse, works at night.", ["who", "that", "which"], 0, "Non-defining: who."],
  ["Rome, ___ is the capital, is very crowded.", ["which", "that", "where"], 0, "Non-defining: which."],
  ["He lost his keys, ___ meant he couldn't get in.", ["which", "what", "that"], 0, "A whole sentence: which."],
  ["My teacher, ___ I like a lot, is leaving.", ["who", "that", "—"], 0, "Non-defining: never left out."],
  ["___ I need is some sleep.", ["What", "That", "Which"], 0, "‘Quello che’ = what."],
  ["The house in ___ I live is very old.", ["which", "that", "where"], 0, "After a preposition: which."],
  ["She's the friend I always talk ___.", ["to", "—", "with her"], 0, "Preposition at the end."],
  ["Everything ___ he said was true.", ["that", "what", "who"], 0, "After everything: that."],
  ["The person to ___ I wrote never replied.", ["whom", "who", "that"], 0, "After a preposition: whom."],
  ["The student ___ bag was stolen went to the police.", ["whose", "who", "which"], 0, "Possession."],
  ["Which sentence is correct?", ["My father, who is a pilot, travels a lot.", "My father who is a pilot, travels a lot.", "My father, that is a pilot, travels a lot."], 0, "Two commas and who."]
] });
