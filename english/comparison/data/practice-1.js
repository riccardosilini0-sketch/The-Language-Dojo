/* Comparatives and Quantifiers — practice batteries.
   Formats (see english/basics/data/practice-1.js): mc, gap, correct, rewrite, order, translate, halves, text, sort.
   Contractions and full forms are accepted automatically. */
const P = x => GL.batteries.push(x);
const T = (it, hint, acc, why) => [it, hint, acc, acc[0], why];

/* ---------- comparatives ---------- */
P({ id: "cmp-gap", lesson: "comparatives", type: "gap", belt: 1, instr: "Complete the sentences with the comparative form of the adjectives in brackets and than.", items: [
  ["My brother is ___ (tall) me.", [["taller than"]], "One syllable: [-er] + than."],
  ["A plane is ___ (fast) a train.", [["faster than"]], "One syllable: [faster than]."],
  ["Today is ___ (hot) yesterday.", [["hotter than"]], "One vowel + one consonant: [hotter]."],
  ["This exercise is ___ (easy) the last one.", [["easier than"]], "-y → [-ier]: easier."],
  ["Gold is ___ (expensive) silver.", [["more expensive than"]], "Long adjective: [more] expensive."],
  ["Your marks are ___ (good) mine.", [["better than"]], "good → [better]."],
  ["The weather in November is ___ (bad) in October.", [["worse than"]], "bad → [worse]."],
  ["Elephants are ___ (big) horses.", [["bigger than"]], "Double the g: [bigger]."],
  ["This film is ___ (interesting) the book.", [["more interesting than"]], "Long adjective: [more] interesting."],
  ["My new phone is ___ (thin) my old one.", [["thinner than"]], "Double the n: [thinner]."],
  ["Milan is ___ (far) from here than Verona.", [["further", "farther"]], "far → [further / farther]."],
  ["My grandma is ___ (happy) now that she lives with us.", [["happier"]], "-y → [-ier]: happier."]
] });
P({ id: "cmp-mc", lesson: "comparatives", type: "mc", belt: 1, items: [
  ["My sister is ___ than me.", ["older", "more old", "oldest"], 0, "One syllable: [older]."],
  ["This test is ___ than the last one.", ["more difficult", "difficulter", "most difficult"], 0, "Long adjective: [more difficult]."],
  ["Is London bigger ___ Paris?", ["than", "of", "that"], 0, "‘Più … di’ = [than]."],
  ["Your idea is ___ than mine.", ["better", "more good", "gooder"], 0, "good → [better]."],
  ["Dogs are ___ than cats, in my opinion.", ["friendlier", "more friendly than", "friendliest"], 0, "Friendly → [friendlier] (more friendly is also used, but not with a second than)."],
  ["The red dress is ___ than the blue one.", ["cheaper", "more cheap", "cheapest"], 0, "One syllable: [cheaper]."],
  ["My headache is ___ today.", ["worse", "badder", "more bad"], 0, "bad → [worse]."],
  ["Summer days are ___ than winter days.", ["longer", "more long", "longest"], 0, "One syllable: [longer]."],
  ["Tom is taller than ___.", ["me", "my", "mine"], 0, "After than in everyday English: object pronoun [me]."],
  ["This sofa is ___ than the old one.", ["more comfortable", "comfortabler", "most comfortable"], 0, "Long adjective: [more comfortable]."]
] });
P({ id: "cmp-errors", lesson: "comparatives", type: "correct", belt: 1, items: [
  ["My sister is more tall than me.", ["My sister is taller than me.", "My sister is taller than I am."], "Short adjective: [taller]."],
  ["This book is more better than that one.", ["This book is better than that one."], "Better is already comparative."],
  ["Milan is bigger of Brescia.", ["Milan is bigger than Brescia."], "‘di’ = [than]."],
  ["It's more cheap in this shop.", ["It's cheaper in this shop.", "It is cheaper in this shop."], "One syllable: [cheaper]."],
  ["The weather is badder today.", ["The weather is worse today."], "bad → [worse]."],
  ["This film is interestinger than that one.", ["This film is more interesting than that one."], "Long adjective: [more interesting]."],
  ["My bag is biger than yours.", ["My bag is bigger than yours."], "Double the consonant: [bigger]."],
  ["English is more easy than German.", ["English is easier than German."], "-y → [-ier]."],
  ["She's more young than her husband.", ["She's younger than her husband.", "She is younger than her husband."], "One syllable: [younger]."],
  ["This exercise is difficulter than the first.", ["This exercise is more difficult than the first.", "This exercise is more difficult than the first one."], "Long adjective: [more difficult]."]
] });
P({ id: "cmp-check", lesson: "comparatives", type: "mc", belt: 2, title: "Comparative adjectives – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["Cars are ___ than bikes.", ["more expensive", "expensiver", "the most expensive"], 0, "Long adjective: [more expensive]."],
  ["My dad is ___ than my mum.", ["thinner", "thiner", "more thin"], 0, "Double the n: [thinner]."],
  ["This year's exams are ___ than last year's.", ["easier", "more easy", "easyer"], 0, "-y → [-ier]."],
  ["She speaks English ___ than me.", ["better", "more good", "more well"], 0, "Well (adverb) → [better]."],
  ["Is your house ___ from school than mine?", ["further", "more far", "farest"], 0, "far → [further]."],
  ["Rome is older ___ Milan.", ["than", "of", "as"], 0, "[than]."],
  ["The sea is ___ today than yesterday.", ["warmer", "more warm", "warmest"], 0, "One syllable: [warmer]."],
  ["Your room is ___ than mine.", ["tidier", "more tidy than", "tidyer"], 0, "-y → [-ier]."],
  ["My cold is ___ today. I'm going to stay at home.", ["worse", "badder", "more bad"], 0, "bad → [worse]."],
  ["Science is ___ than history for me.", ["more interesting", "interestinger", "most interesting"], 0, "Long adjective: [more interesting]."]
] });

/* ---------- superlatives ---------- */
P({ id: "sup-gap", lesson: "superlatives", type: "gap", belt: 2, instr: "Complete the sentences with the superlative form of the adjectives in brackets.", items: [
  ["The Nile is ___ (long) river in Africa.", [["the longest"]], "One syllable: [the -est]."],
  ["This is ___ (expensive) restaurant in town.", [["the most expensive"]], "Long adjective: [the most]."],
  ["August is ___ (hot) month of the year.", [["the hottest"]], "Double the t: [the hottest]."],
  ["She's ___ (good) player in the team.", [["the best"]], "good → [the best]."],
  ["That was ___ (bad) day of my life!", [["the worst"]], "bad → [the worst]."],
  ["Who is ___ (funny) person in your family?", [["the funniest"]], "-y → [the -iest]."],
  ["It's ___ (beautiful) beach I know.", [["the most beautiful"]], "Long adjective: [the most]."],
  ["Mount Everest is ___ (high) mountain in the world.", [["the highest"]], "One syllable: [the highest]."],
  ["This is ___ (easy) exercise in the book.", [["the easiest"]], "-y → [the easiest]."],
  ["Neptune is ___ (far) planet from the Sun.", [["the furthest", "the farthest"]], "far → [the furthest / farthest]."],
  ["Who's ___ (young) student in your class?", [["the youngest"]], "One syllable: [the youngest]."],
  ["It's ___ (popular) app among teenagers.", [["the most popular"]], "Long adjective: [the most]."]
] });
P({ id: "sup-mc", lesson: "superlatives", type: "mc", belt: 2, items: [
  ["It's the biggest city ___ Italy.", ["in", "of", "than"], 0, "A place: [in]."],
  ["It was the best day ___ the holiday.", ["of", "in", "than"], 0, "A period: [of]."],
  ["She's ___ girl in the class.", ["the tallest", "the most tall", "tallest"], 0, "[the tallest]."],
  ["That's ___ film I've ever seen!", ["the worst", "the baddest", "the most bad"], 0, "bad → [the worst]."],
  ["This is the ___ question in the test.", ["most difficult", "difficultest", "more difficult"], 0, "Long adjective: [most difficult]."],
  ["Which is the ___ planet?", ["biggest", "bigest", "most big"], 0, "Double the g: [biggest]."],
  ["Who's the best singer ___ all time?", ["of", "in", "from"], 0, "A period: [of all time]."],
  ["It's the ___ book I've ever read.", ["most boring", "boringest", "more boring"], 0, "Long adjective: [most boring]."],
  ["Anna is the oldest ___ the three sisters.", ["of", "in", "than"], 0, "A number of people: [of]."],
  ["This is the ___ pizza in town.", ["best", "goodest", "better"], 0, "good → [best]."]
] });
P({ id: "sup-sort", lesson: "superlatives", type: "sort", belt: 2, instr: "How do these adjectives form the comparative and the superlative?", cats: ["-er / -est", "double consonant", "-ier / -iest", "more / most", "irregular"], items: [
  ["small", 0, "small → smaller → the smallest."], ["fat", 1, "fat → fatter → the fattest."], ["pretty", 2, "pretty → prettier → the prettiest."], ["famous", 3, "famous → more famous → the most famous."], ["good", 4, "good → better → the best."],
  ["cold", 0, "cold → colder → the coldest."], ["wet", 1, "wet → wetter → the wettest."], ["lazy", 2, "lazy → lazier → the laziest."], ["dangerous", 3, "dangerous → more dangerous → the most dangerous."], ["bad", 4, "bad → worse → the worst."],
  ["short", 0, "short → shorter → the shortest."], ["sad", 1, "sad → sadder → the saddest."], ["heavy", 2, "heavy → heavier → the heaviest."], ["modern", 3, "modern → more modern → the most modern."], ["far", 4, "far → further → the furthest."]
] });
P({ id: "sup-check", lesson: "superlatives", type: "mc", belt: 2, title: "Superlative adjectives – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["Russia is ___ country in the world.", ["the biggest", "the bigger", "the most big"], 0, "[the biggest]."],
  ["He's the most intelligent student ___ the school.", ["in", "of", "than"], 0, "A place or group: [in]."],
  ["It was ___ storm in fifty years.", ["the worst", "the baddest", "the worse"], 0, "bad → [the worst]."],
  ["She's ___ person I know.", ["the kindest", "the most kind", "kindest"], 0, "One syllable: [the kindest]."],
  ["That's the ___ joke I've ever heard!", ["funniest", "most funny", "funnyest"], 0, "-y → [-iest]."],
  ["It's ___ museum in the city.", ["the most interesting", "the interestingest", "the more interesting"], 0, "Long adjective: [the most]."],
  ["January is the coldest month ___ the year.", ["of", "in", "from"], 0, "A period: [of]."],
  ["Who is ___ footballer in the world?", ["the best", "the better", "the most good"], 0, "good → [the best]."],
  ["Which is the ___ way to the station?", ["quickest", "most quick", "quicker"], 0, "One syllable: [quickest]."],
  ["Paolo is taller than Luca, but Marco is ___ of the three.", ["the tallest", "taller", "the taller"], 0, "One of three: superlative."]
] });

/* ---------- as … as, less, much more ---------- */
P({ id: "as-gap", lesson: "as-as", type: "gap", belt: 2, instr: "Complete the second sentence so that it means the same as the first. Use as … as or not as … as.", items: [
  ["Tom and Sam are both 1.80 m. → Tom is ___ Sam.", [["as tall as"]], "Equal: [as tall as]."],
  ["The train is faster than the bus. → The bus isn't ___ the train.", [["as fast as", "so fast as"]], "Less: [not as fast as]."],
  ["My bag is 5 kg and yours is 5 kg. → My bag is ___ yours.", [["as heavy as"]], "Equal: [as heavy as]."],
  ["The book is better than the film. → The film isn't ___ the book.", [["as good as", "so good as"]], "Less: [not as good as]."],
  ["Milan is more expensive than Brescia. → Brescia isn't ___ Milan.", [["as expensive as", "so expensive as"]], "Less: [not as expensive as]."],
  ["Anna and I are both 15. → Anna is ___ me.", [["as old as"]], "Equal: [as old as]."],
  ["Today is colder than yesterday. → Yesterday wasn't ___ today.", [["as cold as", "so cold as"]], "Less: [not as cold as]."],
  ["Maths is more difficult than English for me. → English isn't ___ maths for me.", [["as difficult as", "so difficult as"]], "Less: [not as difficult as]."],
  ["Your phone and my phone cost the same. → Your phone is ___ mine.", [["as expensive as", "as cheap as"]], "Equal: [as expensive as]."],
  ["My brother is taller than my dad. → My dad isn't ___ my brother.", [["as tall as", "so tall as"]], "Less: [not as tall as]."]
] });
P({ id: "as-mc", lesson: "as-as", type: "mc", belt: 3, items: [
  ["It's ___ colder today than yesterday.", ["much", "very", "more"], 0, "Before a comparative: [much]."],
  ["My phone is the same ___ yours.", ["as", "of", "than"], 0, "[the same as]."],
  ["She's as clever ___ her sister.", ["as", "than", "like"], 0, "[as … as]."],
  ["Spanish is a bit ___ from Italian.", ["different", "same", "similar"], 0, "[different from]."],
  ["The more you read, ___ you learn.", ["the more", "more", "the most"], 0, "[the more …, the more …]."],
  ["This hotel is ___ expensive than the other one.", ["less", "fewer", "as"], 0, "[less] + adjective + than."],
  ["Can you speak ___ more slowly, please?", ["a bit", "very", "too"], 0, "A small difference: [a bit] + comparative."],
  ["My new school is ___ bigger than my old one.", ["far", "very", "too"], 0, "A big difference: [far] + comparative."],
  ["Your jacket is similar ___ mine.", ["to", "as", "than"], 0, "[similar to]."],
  ["The film wasn't ___ good as the book.", ["as", "more", "than"], 0, "[not as … as]."]
] });
P({ id: "as-errors", lesson: "as-as", type: "correct", belt: 3, items: [
  ["She's tall as her mother.", ["She's as tall as her mother.", "She is as tall as her mother."], "Two [as]."],
  ["He's as tall than me.", ["He's as tall as me.", "He is as tall as me."], "As … [as]."],
  ["It's very more expensive.", ["It's much more expensive.", "It's far more expensive.", "It's a lot more expensive."], "[much / far / a lot] + comparative."],
  ["My bike is the same of yours.", ["My bike is the same as yours."], "[the same as]."],
  ["More you study, more you learn.", ["The more you study, the more you learn."], "[The more …, the more …]."],
  ["Your shoes are similar of mine.", ["Your shoes are similar to mine."], "[similar to]."],
  ["This test isn't as easy like the last one.", ["This test isn't as easy as the last one."], "As … [as]."],
  ["Today is a bit more cold.", ["Today is a bit colder.", "It's a bit colder today."], "One syllable: [colder]."],
  ["This phone is less cheaper than that one.", ["This phone is less expensive than that one.", "This phone is cheaper than that one."], "Less + base adjective, or just the comparative."],
  ["Bigger it is, better it is.", ["The bigger it is, the better it is.", "The bigger, the better."], "[The …-er, the …-er]."]
] });
P({ id: "as-translate", lesson: "as-as", type: "translate", belt: 3, items: [
  T("Sono alto come mio padre.", "", ["I'm as tall as my father.", "I'm as tall as my dad.", "I am as tall as my father.", "I am as tall as my dad."], "[as … as]."),
  T("Il film non è bello come il libro.", "", ["The film isn't as good as the book.", "The film is not as good as the book.", "The movie isn't as good as the book.", "The film isn't so good as the book."], "[not as … as]."),
  T("Oggi fa molto più freddo.", "", ["It's much colder today.", "Today it's much colder.", "It's a lot colder today.", "It's far colder today."], "[much] + comparative."),
  T("Il mio telefono è uguale al tuo.", "", ["My phone is the same as yours.", "My mobile is the same as yours."], "[the same as]."),
  T("Puoi parlare un po' più piano?", "più lentamente", ["Can you speak a bit more slowly?", "Can you speak a little more slowly?", "Could you speak a bit more slowly?", "Could you speak a little more slowly?"], "[a bit] + comparative."),
  T("Più studi, più impari.", "", ["The more you study, the more you learn."], "[The more …, the more …]."),
  T("Questo hotel è meno caro.", "", ["This hotel is less expensive.", "This hotel is cheaper."], "[less] + adjective, or cheaper."),
  T("Il tedesco è diverso dall'inglese.", "", ["German is different from English.", "German is different to English."], "[different from]."),
  T("Mia sorella è intelligente come me.", "", ["My sister is as clever as me.", "My sister is as intelligent as me.", "My sister is as clever as I am.", "My sister is as intelligent as I am."], "[as … as]."),
  T("Il treno è molto più veloce dell'autobus.", "", ["The train is much faster than the bus.", "The train is far faster than the bus.", "The train is a lot faster than the bus."], "[much] + comparative + than.")
] });

/* ---------- countable and uncountable ---------- */
P({ id: "cu-sort", lesson: "countable", type: "sort", belt: 1, instr: "Are these nouns countable or uncountable in English?", cats: ["countable", "uncountable"], items: [
  ["apple", 0, "an apple, two apples."], ["water", 1, "No plural: some water."], ["advice", 1, "Uncountable: some advice, a piece of advice."], ["chair", 0, "a chair, two chairs."],
  ["furniture", 1, "Uncountable: some furniture."], ["information", 1, "Uncountable: some information."], ["suggestion", 0, "a suggestion, two suggestions."], ["homework", 1, "Uncountable: some homework."],
  ["exercise", 0, "an exercise, two exercises."], ["money", 1, "Uncountable: some money."], ["coin", 0, "a coin, two coins."], ["bread", 1, "Uncountable: some bread, a loaf of bread."],
  ["job", 0, "a job, two jobs."], ["work", 1, "Uncountable (= lavoro): a lot of work."], ["luggage", 1, "Uncountable: some luggage."], ["suitcase", 0, "a suitcase, two suitcases."]
] });
P({ id: "cu-gap", lesson: "countable", type: "gap", belt: 1, instr: "Complete the sentences with a / an, some, any, how much or how many.", items: [
  ["Would you like ___ tea?", [["some"]], "An offer: [some]."],
  ["There isn't ___ milk in the fridge.", [["any"]], "Negative: [any]."],
  ["___ brothers have you got?", [["How many"]], "Countable plural: [How many]."],
  ["___ money have you got?", [["How much"]], "Uncountable: [How much]."],
  ["I need ___ new phone.", [["a"]], "Singular countable: [a]."],
  ["Have you got ___ questions?", [["any"]], "Question: [any]."],
  ["She's got ___ interesting job.", [["an"]], "Singular countable, vowel sound: [an]."],
  ["There's ___ cheese on the table.", [["some"]], "Affirmative, uncountable: [some]."],
  ["___ sugar do you want in your coffee?", [["How much"]], "Uncountable: [How much]."],
  ["Can I have ___ water, please?", [["some"]], "A request: [some]."],
  ["I haven't got ___ homework today.", [["any"]], "Negative: [any]."],
  ["___ people are coming to the party?", [["How many"]], "People is plural countable: [How many]."]
] });
P({ id: "cu-errors", lesson: "countable", type: "correct", belt: 2, items: [
  ["Can you give me an advice?", ["Can you give me some advice?", "Can you give me a piece of advice?"], "Advice is uncountable."],
  ["The informations are on the website.", ["The information is on the website."], "Information: no plural."],
  ["We've got a lot of homeworks.", ["We've got a lot of homework.", "We have got a lot of homework."], "Homework: no plural."],
  ["How many money do you need?", ["How much money do you need?"], "Uncountable: [how much]."],
  ["I need a new furniture for my room.", ["I need some new furniture for my room.", "I need new furniture for my room.", "I need a new piece of furniture for my room."], "Furniture: no a."],
  ["There isn't some bread.", ["There isn't any bread."], "Negative: [any]."],
  ["My luggages are very heavy.", ["My luggage is very heavy."], "Luggage: no plural, singular verb."],
  ["I've got a lot of works this week.", ["I've got a lot of work this week."], "Work (lavoro): no plural."],
  ["Can I have a bread, please?", ["Can I have some bread, please?", "Can I have a piece of bread, please?", "Can I have a slice of bread, please?"], "Bread: some bread, a slice of bread."],
  ["How much eggs do we need?", ["How many eggs do we need?"], "Countable: [how many]."]
] });
P({ id: "cu-check", lesson: "countable", type: "mc", belt: 2, title: "Countable and uncountable nouns – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["Let me give you ___ advice.", ["some", "an", "a"], 0, "Advice is uncountable: [some]."],
  ["The news ___ very good today.", ["is", "are", "be"], 0, "News is singular."],
  ["___ time have we got?", ["How much", "How many", "How"], 0, "Uncountable: [How much]."],
  ["I'd like a ___ of water.", ["bottle", "piece", "slice"], 0, "[a bottle of] water."],
  ["There aren't ___ biscuits left.", ["any", "some", "a"], 0, "Negative: [any]."],
  ["Our ___ is in the car.", ["luggage", "luggages", "luggage are"], 0, "Uncountable: no -s."],
  ["She's looking for ___ job.", ["a new", "new", "some new"], 0, "Job is countable: [a]."],
  ["I've got two ___ of homework today.", ["pieces", "pieces's", "homeworks"], 0, "[pieces of] homework."],
  ["Would you like ___ cake?", ["some", "any", "many"], 0, "An offer: [some]."],
  ["How ___ students are there?", ["many", "much", "lot"], 0, "Countable: [many]."]
] });

/* ---------- quantifiers ---------- */
P({ id: "qf-mc", lesson: "quantifiers", type: "mc", belt: 2, items: [
  ["There aren't ___ people at the beach today.", ["many", "much", "a little"], 0, "Countable plural, negative: [many]."],
  ["I haven't got ___ time.", ["much", "many", "a few"], 0, "Uncountable: [much]."],
  ["She's got ___ friends in London.", ["a lot of", "much", "a little"], 0, "Affirmative: [a lot of]."],
  ["Can I ask you ___ questions?", ["a few", "a little", "much"], 0, "Countable plural: [a few]."],
  ["Add ___ salt and stir.", ["a little", "a few", "many"], 0, "Uncountable: [a little]."],
  ["There are ___ cars in the city centre. It's impossible to park.", ["too many", "too much", "enough"], 0, "Countable plural, more than right: [too many]."],
  ["I'm not ___ to drive. I'm only sixteen.", ["old enough", "enough old", "too old"], 0, "Adjective + [enough]."],
  ["We haven't got ___ chairs for everyone.", ["enough", "too many", "a little"], 0, "[enough] + noun."],
  ["This coffee is ___ hot. I can't drink it.", ["too", "too much", "enough"], 0, "[too] + adjective."],
  ["You eat ___ sugar. It's bad for your teeth.", ["too much", "too many", "a few"], 0, "Uncountable, more than right: [too much]."]
] });
P({ id: "qf-gap", lesson: "quantifiers", type: "gap", belt: 2, instr: "Complete the sentences with much, many, a few, a little, too or enough.", items: [
  ["How ___ brothers have you got?", [["many"]], "Countable: [many]."],
  ["There isn't ___ milk left. Can you buy some?", [["much"]], "Uncountable, negative: [much]."],
  ["I've got ___ friends in Rome, so I'm not alone there.", [["a few"]], "Countable plural, positive: [a few]."],
  ["Could I have ___ more coffee, please?", [["a little"]], "Uncountable, small amount: [a little]."],
  ["It's ___ cold to go to the beach.", [["too"]], "More than acceptable: [too] + adjective."],
  ["Is the room big ___ for twenty people?", [["enough"]], "Adjective + [enough]."],
  ["How ___ does this cost?", [["much"]], "Price: [How much]."],
  ["I've got ___ homework: I can't come out tonight.", [["too much"]], "Uncountable, more than right: [too much]."],
  ["There are ___ people here. Let's go somewhere quieter.", [["too many"]], "Countable plural, more than right: [too many]."],
  ["We haven't got ___ time to visit the museum.", [["enough"]], "[enough] + noun."]
] });
P({ id: "qf-errors", lesson: "quantifiers", type: "correct", belt: 2, items: [
  ["There are much people here.", ["There are a lot of people here.", "There are many people here.", "There are lots of people here."], "Countable: [a lot of] / many."],
  ["I haven't got many time.", ["I haven't got much time."], "Uncountable: [much]."],
  ["I've got a little friends here.", ["I've got a few friends here."], "Countable plural: [a few]."],
  ["It's enough big for us.", ["It's big enough for us.", "It is big enough for us."], "Adjective + [enough]."],
  ["There's too much cars in this street.", ["There are too many cars in this street."], "Countable plural: [too many]."],
  ["This jacket is too much expensive.", ["This jacket is too expensive."], "Too + adjective."],
  ["We haven't got chairs enough.", ["We haven't got enough chairs."], "[enough] + noun."],
  ["Could I have a few water?", ["Could I have a little water?", "Could I have some water?"], "Uncountable: [a little]."],
  ["How many does it cost?", ["How much does it cost?"], "Price: [How much]."],
  ["There are too many traffic today.", ["There's too much traffic today.", "There is too much traffic today."], "Traffic is uncountable: [too much]."]
] });
P({ id: "qf-check", lesson: "quantifiers", type: "mc", belt: 3, title: "Quantifiers – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ people know about this beach – it's a secret!", ["Few", "A few", "Little"], 0, "Not many (negative): [Few]."],
  ["I speak ___ German, enough to order a coffee.", ["a little", "little", "a few"], 0, "Small but positive: [a little]."],
  ["There's ___ hope now. The game is almost over.", ["little", "a little", "few"], 0, "Not much (negative): [little]."],
  ["I've got ___ good friends, and that's all I need.", ["a few", "few", "a little"], 0, "Some (positive): [a few]."],
  ["Is your coffee sweet ___?", ["enough", "too", "much"], 0, "Adjective + [enough]."],
  ["She's ___ young to watch that film.", ["too", "too much", "enough"], 0, "[too] + adjective."],
  ["We've got ___ of time. Don't worry.", ["lots", "much", "many"], 0, "[lots of] time."],
  ["How ___ languages do you speak?", ["many", "much", "lot"], 0, "Countable: [many]."],
  ["It's ___ expensive, but I can afford it.", ["very", "too", "enough"], 0, "Strong, but possible: [very]."],
  ["There isn't ___ room in the car for five people.", ["enough", "too much", "a few"], 0, "[enough] + noun."]
] });

/* ---------- all, both, either, neither, none ---------- */
P({ id: "an-mc", lesson: "all-none", type: "mc", belt: 3, items: [
  ["___ my parents are doctors.", ["Both", "All", "Every"], 0, "Two people: [Both]."],
  ["___ student has a locker.", ["Every", "All", "Both"], 0, "Singular noun: [Every]."],
  ["___ of my two brothers can swim.", ["Neither", "None", "No"], 0, "Two, not one: [Neither]."],
  ["___ of my friends like opera.", ["None", "Neither", "No"], 0, "Three or more, not one: [None]."],
  ["You can take ___ bus: they both go to the centre.", ["either", "neither", "all"], 0, "One or the other: [either]."],
  ["___ the shops are closed on Sunday.", ["All", "Every", "Each"], 0, "Plural: [All] the shops."],
  ["There's ___ milk left. Let's buy some.", ["no", "none", "any"], 0, "No + noun."],
  ["___ Anna and Marta are coming.", ["Both", "Either", "All"], 0, "[Both … and]."],
  ["We can go ___ today or tomorrow.", ["either", "neither", "both"], 0, "[either … or]."],
  ["___ Tom nor Ben was at school today.", ["Neither", "Either", "Both"], 0, "[neither … nor]."]
] });
P({ id: "an-errors", lesson: "all-none", type: "correct", belt: 3, items: [
  ["Every students have a book.", ["Every student has a book."], "Every + singular."],
  ["Both of them doesn't like fish.", ["Neither of them likes fish.", "Neither of them like fish."], "‘Nessuno dei due’ = [neither]."],
  ["All the two films are good.", ["Both films are good.", "Both the films are good.", "Both of the films are good."], "Two: [both]."],
  ["None of my two sisters is here.", ["Neither of my two sisters is here.", "Neither of my sisters is here."], "Two: [neither]."],
  ["I haven't got no money.", ["I haven't got any money.", "I've got no money.", "I have got no money."], "One negative only."],
  ["The all students are here.", ["All the students are here.", "All of the students are here."], "[All the]."],
  ["Each of the students have a laptop.", ["Each of the students has a laptop."], "Each of + plural noun + singular verb."],
  ["Neither my brother or my sister speaks French.", ["Neither my brother nor my sister speaks French."], "[neither … nor]."],
  ["Both my parents is teachers.", ["Both my parents are teachers."], "Both + plural verb."],
  ["None people came to the meeting.", ["No people came to the meeting.", "Nobody came to the meeting.", "No one came to the meeting."], "[no] + noun, or nobody."]
] });
P({ id: "an-check", lesson: "all-none", type: "mc", belt: 3, title: "All, both, neither, none – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["I've got two cousins. ___ of them live in Rome.", ["Both", "All", "Every"], 0, "Two: [Both]."],
  ["I asked three people, but ___ of them knew the answer.", ["none", "neither", "no"], 0, "Three: [none]."],
  ["___ day I walk to school.", ["Every", "All", "Both"], 0, "Singular: [Every] day."],
  ["Which T-shirt? – I don't mind. ___ is fine.", ["Either", "Neither", "Both"], 0, "One or the other: [Either]."],
  ["Each of my parents ___ a car.", ["has", "have", "are"], 0, "Each of + plural noun + singular verb: [has]."],
  ["___ of us are ready.", ["All", "Every", "Each"], 0, "[All of us]."],
  ["There were ___ tickets left, so we didn't go.", ["no", "none", "any"], 0, "No + noun."],
  ["___ my sister nor my brother likes football.", ["Neither", "Either", "Both"], 0, "[Neither … nor]."],
  ["We've got two cars, but ___ of them works!", ["neither", "none", "both"], 0, "Two: [neither]."],
  ["Each student ___ a different task.", ["has", "have", "are"], 0, "Each + singular verb."]
] });

/* ---------- review ---------- */
P({ id: "review-text", lesson: "review", type: "text", belt: 2, title: "City or countryside?", instr: "Read the whole text first, then complete the gaps with one word in each gap.",
  parts: [
    ["#", "City or countryside?"],
    ["", "Last year my family moved from Milan to a small village in the mountains. Life here is very different {1} life in the city. The village is much {2} than Milan – there are only 800 people! – and it's {3} quieter."],
    ["", "There aren't {4} shops, and there isn't {5} traffic at all. The air is cleaner, and the views are the {6} beautiful I've ever seen."],
    ["", "Of course, the village isn't {7} exciting as Milan. There are only {8} buses a day, and there isn't a cinema. In winter it's colder {9} in the city, and sometimes there's {10} much snow to go out!"],
    ["", "Do I prefer it? {11} places have good and bad points. But the {12} I live here, the more I like it."]
  ],
  gaps: [
    [["from", "to"], "[different from] (British English)."],
    [["smaller"], "Comparative of small: [smaller]."],
    [["much", "far", "a lot"], "A big difference: [much] quieter."],
    [["many"], "Countable plural, negative: [many]."],
    [["much", "any"], "Uncountable, negative: [much] / any traffic."],
    [["most"], "Superlative: [the most] beautiful."],
    [["as", "so"], "[not as … as]."],
    [["a few"], "A small number of buses: [a few]."],
    [["than"], "Comparative + [than]."],
    [["too"], "More than acceptable: [too much] snow."],
    [["Both"], "Two places: [Both]."],
    [["longer", "more"], "[The longer …, the more …]."]
  ] });
P({ id: "review-test", lesson: "review", type: "mc", belt: 3, test: true, title: "Comparison and Quantity – Final test",
  instr: "20 questions, 5 points each: 100 points in all. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["Rome is older ___ Paris.", ["than", "of", "as"], 0, "Comparative + [than]."],
  ["This is ___ day of the year.", ["the shortest", "the most short", "shortest"], 0, "[the shortest]."],
  ["My marks are ___ than last year.", ["better", "more good", "best"], 0, "good → [better]."],
  ["She's the cleverest student ___ the class.", ["in", "of", "than"], 0, "A group: [in]."],
  ["The film isn't as good ___ the book.", ["as", "than", "like"], 0, "[not as … as]."],
  ["It's ___ hotter today than yesterday.", ["much", "very", "more"], 0, "[much] + comparative."],
  ["Your bag is the same ___ mine.", ["as", "of", "than"], 0, "[the same as]."],
  ["The ___ you practise, the better you get.", ["more", "most", "much"], 0, "[The more …]."],
  ["It was ___ concert of my life!", ["the worst", "the baddest", "the worse"], 0, "bad → [the worst]."],
  ["This sofa is ___ than the old one.", ["more comfortable", "comfortabler", "most comfortable"], 0, "Long adjective: [more]."],
  ["Can you give me ___ advice?", ["some", "an", "many"], 0, "Advice is uncountable."],
  ["___ money do you need?", ["How much", "How many", "How lot"], 0, "Uncountable: [How much]."],
  ["There aren't ___ students in the library.", ["many", "much", "a little"], 0, "Countable: [many]."],
  ["I've got ___ questions for you.", ["a few", "a little", "much"], 0, "Countable plural: [a few]."],
  ["There's ___ noise. I can't sleep.", ["too much", "too many", "enough"], 0, "Uncountable: [too much]."],
  ["He isn't tall ___ to play basketball.", ["enough", "too", "much"], 0, "Adjective + [enough]."],
  ["___ my parents speak English.", ["Both", "All", "Every"], 0, "Two: [Both]."],
  ["___ of my friends were at the party. I was alone.", ["None", "Neither", "No"], 0, "Three or more: [None]."],
  ["___ room in the hotel has a balcony.", ["Every", "All", "Both"], 0, "Singular: [Every]."],
  ["This T-shirt is ___ big for me. I need a smaller size.", ["too", "enough", "very much"], 0, "[too] + adjective."]
] });
