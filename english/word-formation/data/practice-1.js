/* Word Formation — practice (1): how word formation works, noun suffixes, adjective suffixes.
   wf items: [sentence with ___, WORD IN CAPITALS, [accepted answers], word class, explanation]
   mc items: [sentence with ___, [options], index of the answer, explanation]
   correct items: [wrong sentence, [accepted correct sentences], explanation] */
const P = x => GL.batteries.push(x);

/* ---------- how word formation works ---------- */
P({ id: "how-mc", lesson: "how", type: "mc", belt: 3, instr: "Choose the word that fits the grammar of each sentence.", items: [
  ["It was a very ___ decision.", ["difficult", "difficulty", "difficultly"], 0, "Before the noun decision we need an [adjective]."],
  ["She has a lot of ___ in her job.", ["experience", "experienced", "experiencing"], 0, "After a lot of we need a [noun]."],
  ["He looked at me ___.", ["angrily", "angry", "anger"], 0, "Looked at me is a verb phrase: we need an [adverb] to say how."],
  ["The ___ of the new hospital will cost millions.", ["construction", "construct", "constructive"], 0, "After the we need a [noun]."],
  ["Her parents are very ___ of her.", ["proud", "pride", "proudly"], 0, "After be we need an [adjective]: proud of."],
  ["We must ___ the problem before it gets worse.", ["solve", "solution", "soluble"], 0, "After the modal must we need a [verb] in the base form."],
  ["The museum was ___ crowded.", ["extremely", "extreme", "extremity"], 0, "Before the adjective crowded we need an [adverb] of degree."],
  ["There were several ___ between the two stories.", ["differences", "different", "difference"], 0, "Several needs a [plural noun]: differences."],
  ["My grandfather is a ___ storyteller.", ["wonderful", "wonder", "wonderfully"], 0, "Between a and the noun storyteller we need an [adjective]."],
  ["The ___ of the house surprised us.", ["size", "sized", "sizing"], 0, "After the we need a [noun]."],
  ["Please drive ___: the road is icy.", ["carefully", "careful", "care"], 0, "Drive is a verb: we need an [adverb]."],
  ["It's ___ to argue with him: he never listens.", ["pointless", "point", "pointlessly"], 0, "It's + [adjective] + to: pointless."]
] });
P({ id: "how-wf", lesson: "how", type: "wf", belt: 3, items: [
  ["The ___ of the plane was delayed by two hours.", "ARRIVE", ["arrival"], "noun", "After the we need a noun: arrive → [arrival]."],
  ["She smiled ___ at the children.", "HAPPY", ["happily"], "adverb", "Smiled is a verb: adverb, y → [ily]."],
  ["Thank you for being so ___ yesterday.", "HELP", ["helpful"], "adjective", "Being so + adjective: help → [helpful]."],
  ["The weather was ___ for the time of year: snow in May!", "USUAL", ["unusual"], "adjective (negative)", "After was we need an adjective; snow in May is not normal: [unusual]."],
  ["My sister wants to be a ___.", "SCIENCE", ["scientist"], "noun (person)", "A + noun for a person: science → [scientist]."],
  ["The soup was very ___: we all had a second bowl.", "TASTE", ["tasty"], "adjective", "Very + adjective: taste → [tasty] (drop the e, add -y)."],
  ["The ___ of the river is about 50 metres.", "WIDE", ["width"], "noun", "The + noun; spelling change: wide → [width]."],
  ["We were all very ___ when we heard the news.", "SURPRISE", ["surprised"], "adjective (-ed)", "The people feel the surprise: [surprised]."],
  ["You need to ___ the text: it's too long.", "SHORT", ["shorten"], "verb", "After need to we need a verb: short → [shorten] (make shorter)."],
  ["There are many tourist ___ in the city centre.", "ATTRACT", ["attractions"], "noun (plural)", "Many + plural noun: attract → attraction → [attractions]."]
] });

/* ---------- noun suffixes ---------- */
P({ id: "nouns-wf1", lesson: "nouns", type: "wf", belt: 3, items: [
  ["The ___ of the new library is planned for next year.", "OPEN", ["opening"], "noun", "After the we need a noun: open → [opening]."],
  ["I'd like some ___ about train times, please.", "INFORM", ["information"], "noun (uncountable)", "Some + uncountable noun: [information] (no -s)."],
  ["Her ___ in the final was fantastic.", "PERFORM", ["performance"], "noun", "Her + noun: perform → [performance]."],
  ["The ___ of the race gets a gold medal.", "WIN", ["winner"], "noun (person)", "The person who wins: [winner] (double n)."],
  ["She's a famous ___ and photographer.", "ART", ["artist"], "noun (person)", "A + noun for a person: art → [artist]."],
  ["Thank you for your ___: it was very kind of you.", "KIND", ["kindness"], "noun", "Your + noun; adjective → noun with -ness: [kindness]."],
  ["We had a long ___ about the future.", "DISCUSS", ["discussion"], "noun", "A long + noun: discuss → [discussion]."],
  ["I spent my ___ in a small village.", "CHILD", ["childhood"], "noun", "The period of being a child: [childhood]."],
  ["Good ___ between teachers and parents is essential.", "COMMUNICATE", ["communication"], "noun", "Adjective good + noun: [communication]."],
  ["The ___ of the hotel, a tall woman called Sara, welcomed us at the door.", "MANAGE", ["manager"], "noun (person)", "The person who manages: [manager]."],
  ["Their ___ has lasted since primary school.", "FRIEND", ["friendship"], "noun", "Their + abstract noun for the relationship: [friendship]."],
  ["The new park is a great ___ for the town.", "IMPROVE", ["improvement"], "noun", "A great + noun: improve → [improvement]."]
] });
P({ id: "nouns-wf2", lesson: "nouns", type: "wf", belt: 4, items: [
  ["The ___ of the tower is over 300 metres.", "HIGH", ["height"], "noun", "Spelling change: high → [height]."],
  ["She has made her ___: she's going to study medicine.", "CHOOSE", ["choice"], "noun", "Make a choice; spelling change: choose → [choice]."],
  ["The ___ of his grandfather was a great shock.", "DIE", ["death"], "noun", "The + noun: die → [death]."],
  ["Can you give me a simple ___ of the rules?", "EXPLAIN", ["explanation"], "noun", "Spelling change: explain → [explanation] (no i)."],
  ["Her English ___ is almost perfect.", "PRONOUNCE", ["pronunciation"], "noun", "Spelling change: pronounce → [pronunciation] (no o after n)."],
  ["All the company's ___ get a bonus at Christmas.", "EMPLOY", ["employees"], "noun (person, plural)", "The people who are employed: -ee, plural after all: [employees]."],
  ["The ___ of electric bikes is growing fast.", "POPULAR", ["popularity"], "noun", "The + noun: popular → [popularity] (-ar → -arity)."],
  ["We were amazed by the ___ of the mountains.", "BEAUTIFUL", ["beauty"], "noun", "The + noun: here the suffix is removed: beautiful → [beauty]."],
  ["Several ___ applied for the job.", "APPLY", ["applicants"], "noun (person, plural)", "People who apply: [applicants]; several needs the plural."],
  ["There has been a big ___ in the price of flights.", "REDUCE", ["reduction"], "noun", "A big + noun: reduce → [reduction] (-duce → -duction)."],
  ["Lack of ___ is a big problem in the city at night.", "SAFE", ["safety"], "noun", "Lack of + noun: safe → [safety]."],
  ["She showed great ___ when she rescued the dog.", "BRAVE", ["bravery"], "noun", "Great + noun: brave → [bravery]."]
] });
P({ id: "nouns-mc", lesson: "nouns", type: "mc", belt: 4, items: [
  ["The ___ was very nervous before the job interview.", ["interviewee", "interviewer", "interview"], 0, "The person who is interviewed: [-ee]. The interviewer asks the questions."],
  ["He wants to be a ___ and work in Parliament.", ["politician", "politics", "political"], 0, "The person: [politician]. Politics is the subject."],
  ["The ___ of the bridge took two years.", ["construction", "constructor", "constructing"], 0, "The process: [construction]."],
  ["We admire her ___ and her honesty.", ["generosity", "generousness", "generous"], 0, "Generous → [generosity] (-ous → -osity)."],
  ["The ___ in the room was unbearable.", ["heat", "hotness", "heating"], 0, "Hot → [heat]: an irregular noun. Heating is the system that warms a building."],
  ["I can't stand the ___ of the city.", ["noise", "noisiness", "noisy"], 0, "The usual noun is [noise]; noisy is the adjective."],
  ["A few ___ walked out before the end of the film.", ["viewers", "views", "viewings"], 0, "People who watch: [viewers]."],
  ["Children need ___ to explore and play.", ["freedom", "freeness", "freedomship"], 0, "Free → [freedom] (-dom = state)."],
  ["There is no ___ between the two words.", ["connection", "connective", "connector"], 0, "No + abstract noun: [connection]."],
  ["She works as a ___ in a big hospital.", ["receptionist", "reception", "receiver"], 0, "The person who works at reception: [receptionist]."],
  ["The ___ of the exam results is next Friday.", ["publication", "publicity", "publisher"], 0, "The act of publishing: [publication]. Publicity is advertising."],
  ["We need ___ before we can start the project.", ["permission", "permit", "permissive"], 0, "Need + uncountable noun: [permission]. A permit is a document (countable: a permit)."]
] });
P({ id: "nouns-correct", lesson: "nouns", type: "correct", belt: 4, items: [
  ["We need more informations about the course.", ["We need more information about the course."], "[Information] is uncountable: no -s."],
  ["The decide was very difficult.", ["The decision was very difficult."], "The + noun: decide → [decision]."],
  ["His explaination wasn't clear.", ["His explanation wasn't clear.", "His explanation was not clear."], "Spelling: explain → [explanation]."],
  ["She is a famous pianoist.", ["She is a famous pianist."], "Piano → [pianist]: the o disappears."],
  ["I'm worried about my weight and my healthy.", ["I'm worried about my weight and my health.", "I am worried about my weight and my health."], "My + noun: [health]. Healthy is the adjective."],
  ["The lenght of the course is six weeks.", ["The length of the course is six weeks."], "Spelling: long → [length] (g before th)."],
  ["The employers of the shop are students: they work there part-time.", ["The employees of the shop are students: they work there part-time."], "The people who work for the shop are the [employees]; the employer is the boss."],
  ["There is a big different between the two schools.", ["There is a big difference between the two schools."], "A big + noun: [difference]."],
  ["I have a strong believe in hard work.", ["I have a strong belief in hard work."], "The noun of believe is [belief]."],
  ["She has a lot of patient with children.", ["She has a lot of patience with children."], "A lot of + noun: patient → [patience]."]
] });

/* ---------- adjective suffixes ---------- */
P({ id: "adj-wf", lesson: "adjectives", type: "wf", belt: 3, items: [
  ["Be ___ with that knife: it's very sharp.", "CARE", ["careful"], "adjective", "Be + adjective; the context asks for attention: [careful] (one l)."],
  ["This map is ___: it's twenty years old.", "USE", ["useless", "unusable"], "adjective", "A map twenty years old has no use: [useless]. Unusable (it cannot be used) is also accepted."],
  ["Swimming here is ___ because of the currents.", "DANGER", ["dangerous"], "adjective", "Is + adjective: danger → [dangerous]."],
  ["We had a really ___ evening at the theatre.", "ENJOY", ["enjoyable"], "adjective", "Before a noun: enjoy → [enjoyable]."],
  ["It's a ___ day: take an umbrella.", "RAIN", ["rainy"], "adjective", "Weather adjective with -y: [rainy]."],
  ["She's very ___: she paints, sings and writes poems.", "CREATE", ["creative"], "adjective", "Very + adjective: create → [creative]."],
  ["The lesson was so ___ that I fell asleep.", "BORE", ["boring"], "adjective (-ing)", "The lesson causes the feeling: [boring]."],
  ["I'm very ___ in history.", "INTEREST", ["interested"], "adjective (-ed)", "The person feels interest: [interested] in."],
  ["The Colosseum is one of the most ___ buildings in Rome.", "FAME", ["famous"], "adjective", "Drop the e: fame → [famous]."],
  ["The shop assistant was very ___ and showed us everything.", "HELP", ["helpful"], "adjective", "The assistant helped: [helpful]."],
  ["Spain has many ___ dishes from different regions.", "TRADITION", ["traditional"], "adjective", "Before the noun dishes: tradition → [traditional]."],
  ["Don't worry, the injection is completely ___.", "PAIN", ["painless"], "adjective", "Don't worry: it does not hurt, so [painless]."]
] });
P({ id: "adj-mc", lesson: "adjectives", type: "mc", belt: 4, items: [
  ["The film was really ___. I couldn't stop watching.", ["gripping", "gripped", "grippable"], 0, "The film causes the feeling: [-ing]."],
  ["She's a ___ girl: she always thinks before she acts.", ["sensible", "sensitive", "sensational"], 0, "Reasonable, practical: [sensible]. Sensitive = easily hurt or moved."],
  ["This car is very ___: it uses very little fuel.", ["economical", "economic", "economist"], 0, "Saving money: [economical]. Economic = related to the economy."],
  ["1969 was a ___ year: people walked on the Moon.", ["historic", "historical", "history"], 0, "Important in history: [historic]. Historical = about history (a historical novel)."],
  ["The old ring is ___: it has been in our family for centuries.", ["priceless", "worthless", "valueless"], 0, "Extremely valuable: [priceless]. Worthless = with no value."],
  ["Stop being so ___! You're 30, not 5.", ["childish", "childlike", "childly"], 0, "Silly, immature (negative): [childish]. Childlike = innocent (positive)."],
  ["The museum is ___ by bus and by train.", ["accessible", "accessable", "accessive"], 0, "Latin root: [-ible]."],
  ["Our neighbours are very ___: they always say hello.", ["friendly", "friendful", "friendish"], 0, "Friend + [-ly] forms an adjective: friendly."],
  ["The view from the top of the mountain was ___.", ["breathtaking", "breathtaken", "breathless"], 0, "So beautiful that it takes your breath away: [breathtaking]. Breathless = out of breath."],
  ["She's very ___ about her future: she wants to be a surgeon.", ["ambitious", "ambitionful", "ambitive"], 0, "Ambition → [ambitious] (-tion → -tious)."],
  ["It was a ___ mistake that cost us the match.", ["costly", "costful", "costive"], 0, "Expensive in its consequences: [costly] (-ly forms an adjective here)."],
  ["The hotel room was small but very ___.", ["comfortable", "comfortful", "comfortive"], 0, "Comfort → [comfortable]."]
] });
P({ id: "adj-correct", lesson: "adjectives", type: "correct", belt: 4, items: [
  ["The trip was very tired.", ["The trip was very tiring."], "The trip causes the feeling: [tiring]."],
  ["She is a very success businesswoman.", ["She is a very successful businesswoman."], "Before a noun we need an adjective: [successful]."],
  ["Thank you, you've been very helpfull.", ["Thank you, you've been very helpful.", "Thank you, you have been very helpful."], "-ful has one l: [helpful]."],
  ["This shirt is washible.", ["This shirt is washable."], "English verbs take [-able]: washable."],
  ["He is very sensible: he gets upset very easily.", ["He is very sensitive: he gets upset very easily."], "Easily upset = [sensitive]."],
  ["It was a very enjoyful holiday.", ["It was a very enjoyable holiday."], "Enjoy → [enjoyable]."],
  ["I was very interesting in the lecture.", ["I was very interested in the lecture."], "The person feels interest: [interested]."],
  ["The village is very peaceable at night.", ["The village is very peaceful at night."], "Calm and quiet: [peaceful]. Peaceable describes people who avoid fighting."],
  ["Smoking is very harmfull to your health.", ["Smoking is very harmful to your health."], "-ful has one l: [harmful]."],
  ["She has a very nature smile.", ["She has a very natural smile."], "Before a noun: nature → [natural]."]
] });
