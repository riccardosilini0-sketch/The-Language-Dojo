/* English Basics — practice batteries (2): articles, plural nouns, demonstratives, there is / there are.
   Formats: see data/practice-1.js. sort: { cats: [groups], items: [[word or expression, index of the group, explanation]] } */

/* ---------- articles ---------- */
P({ id: "art-aan", lesson: "articles", type: "gap", belt: 1, instr: "Complete the sentences with a or an.", items: [
  ["My dad is ___ architect.", [["an"]], "Vowel sound /ɑː/: [an] architect."],
  ["This is ___ easy exercise.", [["an"]], "Vowel sound /iː/: [an] easy exercise."],
  ["Rome is ___ old city.", [["an"]], "Vowel sound: [an] old city."],
  ["She's ___ university student.", [["a"]], "University begins with /j/: [a] university."],
  ["It's ___ hour from Milan by train.", [["an"]], "Silent h: [an] hour."],
  ["Is it ___ good film?", [["a"]], "Consonant sound: [a] good film."],
  ["My brother is ___ actor.", [["an"]], "Vowel sound: [an] actor."],
  ["He's ___ honest person.", [["an"]], "Silent h: [an] honest person."],
  ["It's ___ ugly building.", [["an"]], "Vowel sound /ʌ/: [an] ugly building."],
  ["She's ___ European citizen.", [["a"]], "European begins with /j/: [a] European."],
  ["It's ___ interesting book.", [["an"]], "Vowel sound: [an] interesting book."],
  ["My aunt is ___ hairdresser.", [["a"]], "The h is pronounced: [a] hairdresser."]
] });
P({ id: "art-the", lesson: "articles", type: "mc", belt: 1, instr: "Choose the correct option: a, the or no article (—).", items: [
  ["___ sun is a star.", ["The", "A", "— (no article)"], 0, "There is only one sun: [the]."],
  ["I love ___ chocolate.", ["— (no article)", "the", "a"], 0, "Chocolate in general: no article."],
  ["___ maths is my favourite subject.", ["— (no article)", "The", "A"], 0, "School subjects: no article."],
  ["Where is ___ remote control? It isn't on the sofa.", ["the", "a", "— (no article)"], 0, "A specific thing that both people know: [the]."],
  ["___ breakfast is at half past seven.", ["— (no article)", "The", "A"], 0, "Meals: no article."],
  ["Is ___ teacher in the classroom?", ["the", "a", "— (no article)"], 0, "Our teacher, a specific person: [the]."],
  ["___ cats are independent animals.", ["— (no article)", "The", "A"], 0, "Cats in general: no article."],
  ["Lisbon is the capital of ___ Portugal.", ["— (no article)", "the", "a"], 0, "Most countries: no article."],
  ["Chicago is in ___ USA.", ["the", "— (no article)", "a"], 0, "[the] USA, [the] UK."],
  ["Volleyball is ___ popular sport in Italy.", ["a", "the", "— (no article)"], 0, "One sport among many: [a]."],
  ["___ English is a global language.", ["— (no article)", "The", "An"], 0, "Languages: no article."],
  ["Look at ___ moon! It's beautiful tonight.", ["the", "a", "— (no article)"], 0, "There is only one moon: [the]."]
] });
P({ id: "art-errors", lesson: "articles", type: "correct", belt: 1, items: [
  ["My sister is dentist.", ["My sister is a dentist.", "My sister's a dentist."], "Jobs: [a / an]."],
  ["It's a easy question.", ["It's an easy question.", "It is an easy question."], "Vowel sound: [an]."],
  ["The life is beautiful.", ["Life is beautiful."], "Life in general: no article."],
  ["The English is an important language.", ["English is an important language."], "Languages: no article."],
  ["He's an university professor.", ["He's a university professor.", "He is a university professor."], "University begins with /j/: [a]."],
  ["We are a friends.", ["We are friends.", "We're friends."], "No a / an with plurals."],
  ["The Spain is a big country.", ["Spain is a big country."], "Most countries: no article."],
  ["Where's remote control?", ["Where's the remote control?", "Where is the remote control?"], "A specific thing: [the]."],
  ["The football is my favourite sport.", ["Football is my favourite sport."], "Sports: no article."],
  ["It's a hour from here.", ["It's an hour from here.", "It is an hour from here."], "Silent h: [an] hour."]
] });
P({ id: "art-translate", lesson: "articles", type: "translate", belt: 2, items: [
  T("Mio padre è avvocato.", "", ["My father is a lawyer.", "My dad is a lawyer.", "My father's a lawyer.", "My dad's a lawyer."], "Jobs: [a / an]."),
  T("La matematica è difficile.", "", ["Maths is difficult.", "Maths is hard.", "Math is difficult."], "School subjects: no article."),
  T("Oggi il sole è caldo.", "", ["The sun is hot today.", "Today the sun is hot."], "Only one sun: [the]."),
  T("Amo la musica.", "", ["I love music."], "Music in general: no article."),
  T("È un esercizio facile.", "", ["It's an easy exercise.", "It is an easy exercise."], "Vowel sound: [an]."),
  T("Il calcio è popolare in Italia.", "", ["Football is popular in Italy.", "Soccer is popular in Italy."], "Sports and countries: no article."),
  T("Il libro sul tavolo è nuovo.", "", ["The book on the table is new."], "Specific things: [the]."),
  T("La colazione è alle otto.", "", ["Breakfast is at eight.", "Breakfast is at eight o'clock.", "Breakfast is at 8.", "Breakfast is at 8 o'clock."], "Meals: no article."),
  T("Sono studenti.", "loro", ["They're students.", "They are students."], "No a / an with plurals."),
  T("Mia zia è un'artista.", "", ["My aunt is an artist.", "My aunt's an artist."], "Jobs, vowel sound: [an]."),
] });
P({ id: "art-check", lesson: "articles", type: "mc", belt: 2, title: "Articles – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My cousin is ___ engineer.", ["an", "a", "— (no article)"], 0, "Jobs, vowel sound: [an]."],
  ["___ life is short.", ["— (no article)", "The", "A"], 0, "Life in general: no article."],
  ["Look at ___ stars tonight!", ["the", "— (no article)", "a"], 0, "These particular stars, the ones in the sky now: [the]."],
  ["___ Netherlands is famous for tulips.", ["The", "— (no article)", "A"], 0, "[the] Netherlands, like the UK and the USA."],
  ["My favourite subject is ___ history.", ["— (no article)", "the", "a"], 0, "School subjects: no article."],
  ["This is ___ useful app.", ["a", "an", "— (no article)"], 0, "Useful begins with /j/: [a]."],
  ["It's ___ honour to meet you.", ["an", "a", "the"], 0, "Silent h: [an] honour."],
  ["Cats are ___ independent animals.", ["— (no article)", "the", "an"], 0, "Plural: no a / an."],
  ["Rome is ___ capital of Italy.", ["the", "a", "— (no article)"], 0, "Italy has only one capital: [the]."],
  ["We're ___ good friends.", ["— (no article)", "a", "an"], 0, "Plural: no a / an."]
] });

/* ---------- plural nouns ---------- */
P({ id: "pl-gap", lesson: "plurals", type: "gap", belt: 1, instr: "Complete the sentences with the plural of the nouns in brackets.", items: [
  ["The ___ (child) are in the park.", [["children"]], "Irregular: child → [children]."],
  ["My ___ (foot) are tired.", [["feet"]], "Irregular: foot → [feet]."],
  ["The ___ (city) in the north are very cold in winter.", [["cities"]], "Consonant + y → [-ies]."],
  ["Two ___ (box) are on the floor.", [["boxes"]], "-x → [-es]."],
  ["The ___ (knife) are in the drawer.", [["knives"]], "-fe → [-ves]."],
  ["My ___ (tooth) are very white.", [["teeth"]], "Irregular: tooth → [teeth]."],
  ["The ___ (watch) in this shop are expensive.", [["watches"]], "-ch → [-es]."],
  ["Three ___ (woman) are in the office.", [["women"]], "Irregular: woman → [women]."],
  ["The ___ (baby) are asleep.", [["babies"]], "Consonant + y → [-ies]."],
  ["The ___ (key) are in my pocket.", [["keys"]], "Vowel + y: just [-s]."],
  ["The ___ (tomato) are from Sicily.", [["tomatoes"]], "tomato → [tomatoes]."],
  ["There are two ___ (mouse) in the kitchen!", [["mice"]], "Irregular: mouse → [mice]."]
] });
P({ id: "pl-sort", lesson: "plurals", type: "sort", belt: 1, instr: "How do these nouns form the plural? Choose the correct ending.", cats: ["+ -s", "+ -es", "y → -ies", "f / fe → -ves"], items: [
  ["bag", 0, "bag → bags."], ["glass", 1, "-ss → glasses."], ["family", 2, "Consonant + y → families."], ["wolf", 3, "wolf → wolves."],
  ["toy", 0, "Vowel + y → toys."], ["dish", 1, "-sh → dishes."], ["story", 2, "Consonant + y → stories."], ["shelf", 3, "shelf → shelves."],
  ["phone", 0, "phone → phones."], ["fox", 1, "-x → foxes."], ["party", 2, "Consonant + y → parties."], ["life", 3, "life → lives."],
  ["day", 0, "Vowel + y → days."], ["church", 1, "-ch → churches."], ["photo", 0, "photo → photos."], ["roof", 0, "An exception: roof → roofs."]
] });
P({ id: "pl-rewrite", lesson: "plurals", type: "rewrite", belt: 1, instr: "Rewrite the sentences in the plural.", items: [
  ["The child is happy.", ["The children are happy."], "child → [children], is → [are].", "The"],
  ["The woman is from Peru.", ["The women are from Peru."], "woman → [women].", "The"],
  ["The knife is sharp.", ["The knives are sharp."], "knife → [knives].", "The"],
  ["The box is heavy.", ["The boxes are heavy."], "box → [boxes].", "The"],
  ["The baby is hungry.", ["The babies are hungry."], "baby → [babies].", "The"],
  ["The man is tall.", ["The men are tall."], "man → [men].", "The"],
  ["The sheep is in the field.", ["The sheep are in the field."], "sheep has the same form in the plural.", "The"],
  ["The dish is dirty.", ["The dishes are dirty."], "dish → [dishes].", "The"],
  ["The person is friendly.", ["The people are friendly."], "person → [people].", "The"],
  ["She's a nurse.", ["They're nurses.", "They are nurses."], "Plural: no a / an. she → [they].", "They"]
] });
P({ id: "pl-errors", lesson: "plurals", type: "correct", belt: 2, items: [
  ["The peoples here are very nice.", ["The people here are very nice."], "People is already plural."],
  ["My two childs are at school.", ["My two children are at school."], "child → [children]."],
  ["Our homeworks are difficult.", ["Our homework is difficult."], "Homework is uncountable."],
  ["My new jeans is blue.", ["My new jeans are blue."], "Jeans is plural."],
  ["The news are on at eight.", ["The news is on at eight."], "News is singular."],
  ["Two mans are at the door.", ["Two men are at the door."], "man → [men]."],
  ["The ladys are in the garden.", ["The ladies are in the garden."], "Consonant + y → [-ies]."],
  ["My glasses is on the table.", ["My glasses are on the table."], "Glasses is plural."],
  ["Your advices are very useful.", ["Your advice is very useful."], "Advice is uncountable."],
  ["The informations are on the website.", ["The information is on the website."], "Information is uncountable."]
] });
P({ id: "pl-check", lesson: "plurals", type: "mc", belt: 2, title: "Plural nouns – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The ___ are in the garden.", ["children", "childs", "childrens"], 0, "child → [children]."],
  ["My ___ are cold.", ["feet", "foots", "feets"], 0, "foot → [feet]."],
  ["The ___ in this shop are cheap.", ["dresses", "dress", "dresss"], 0, "-ss → [-es]."],
  ["The people ___ very friendly here.", ["are", "is", "be"], 0, "People is plural: [are]."],
  ["My jeans ___ too long.", ["are", "is", "am"], 0, "Jeans is plural: [are]."],
  ["The ___ of my two uncles are both teachers.", ["wives", "wifes", "wife"], 0, "wife → [wives]."],
  ["Your homework ___ on my desk.", ["is", "are", "be"], 0, "Homework is uncountable: [is]."],
  ["The ___ are full of books.", ["shelves", "shelfs", "shelf"], 0, "shelf → [shelves]."],
  ["The two ___ are on the sofa.", ["babies", "babys", "baby"], 0, "baby → [babies]."],
  ["The news ___ really good today.", ["is", "are", "be"], 0, "News is singular: [is]."]
] });

/* ---------- this, that, these, those ---------- */
P({ id: "dem-mc", lesson: "demonstratives", type: "mc", belt: 1, instr: "Choose this, that, these or those.", items: [
  ["___ books here are mine.", ["These", "Those", "This", "That"], 0, "Plural, near (here): [these]."],
  ["Look at ___ mountains over there!", ["those", "these", "that", "this"], 0, "Plural, far (over there): [those]."],
  ["___ pen in my hand is red.", ["This", "That", "These", "Those"], 0, "Singular, near: [this]."],
  ["Who is ___ man over there?", ["that", "this", "those", "these"], 0, "Singular, far: [that]."],
  ["___ apples here are delicious.", ["These", "Those", "This", "That"], 0, "Plural, near: [these]."],
  ["Mum, ___ is my friend Sam.", ["this", "these", "those", "that"], 0, "Introducing one person: [this is]."],
  ["___ are my cousins, Ben and Lucy.", ["These", "This", "That", "Those"], 0, "Introducing more people: [these are]."],
  ["Is ___ your house over there, with the red door?", ["that", "this", "these", "those"], 0, "Singular, far: [that]."],
  ["I'm sorry I'm late. – ___'s OK.", ["That", "This", "These", "Those"], 0, "Reply to something just said: [That's] OK."],
  ["Look at ___ birds in the sky!", ["those", "these", "that", "this"], 0, "Plural, far: [those]."],
  ["Hello, ___ is Marta. Is that Paolo?", ["this", "that", "these", "those"], 0, "On the phone, the speaker: [this is]."],
  ["___ shoes I'm wearing are too small for me.", ["These", "Those", "This", "That"], 0, "Plural, near (on my feet): [these]."]
] });
P({ id: "dem-gap", lesson: "demonstratives", type: "gap", belt: 1, instr: "Complete the sentences with this, that, these or those and, where there are two gaps, is or are.", items: [
  ["___ cakes here ___ delicious.", [["These"], ["are"]], "Plural, near: [these are]."],
  ["___ girl over there ___ my cousin.", [["That"], ["is", "'s"]], "Singular, far: [that is]."],
  ["___ cup of tea here ___ for you.", [["This"], ["is"]], "Singular, near: [this is]."],
  ["___ boys over there ___ in my class.", [["Those"], ["are"]], "Plural, far: [those are]."],
  ["Look at ___ stars over there!", [["those"]], "Plural, far: [those]."],
  ["___ bag in my hand is very heavy.", [["This"]], "Singular, near: [this]."],
  ["Mum, ___ ___ my friends Ali and Lea.", [["these"], ["are"]], "Introducing more people: [these are]."],
  ["Thank you! ___ ___ very kind of you.", [["That"], ["is", "'s"]], "Reacting to something: [that's] kind."],
  ["Who ___ ___ people over there?", [["are"], ["those"]], "Question, plural, far: [are those]."],
  ["Is ___ your coat on the chair over there?", [["that"]], "Singular, far: [that]."]
] });
P({ id: "dem-rewrite", lesson: "demonstratives", type: "rewrite", belt: 1, instr: "Rewrite the sentences in the plural.", items: [
  ["This book is interesting.", ["These books are interesting."], "this → [these], is → [are].", "These"],
  ["That car is fast.", ["Those cars are fast."], "that → [those].", "Those"],
  ["This is my friend.", ["These are my friends."], "this is → [these are].", "These"],
  ["That woman is a doctor.", ["Those women are doctors."], "woman → women; no a / an in the plural.", "Those"],
  ["Is this your pen?", ["Are these your pens?"], "Question: [Are these]…?", "Are"],
  ["That child is my cousin.", ["Those children are my cousins."], "child → [children].", "Those"],
  ["This box is heavy.", ["These boxes are heavy."], "box → [boxes].", "These"],
  ["That isn't my bag.", ["Those aren't my bags.", "Those are not my bags."], "Negative plural: [those aren't].", "Those"],
  ["This city is beautiful.", ["These cities are beautiful."], "city → [cities].", "These"],
  ["Is that man your teacher?", ["Are those men your teachers?"], "Question, plural: [Are those]…?", "Are"]
] });
P({ id: "dem-errors", lesson: "demonstratives", type: "correct", belt: 2, items: [
  ["This shoes are new.", ["These shoes are new."], "Plural, near: [these]."],
  ["Look at that trees!", ["Look at those trees!"], "Plural, far: [those]."],
  ["These is my brother, Tom.", ["This is my brother, Tom."], "One person: [this is]."],
  ["Those car is very expensive.", ["That car is very expensive."], "Singular, far: [that]."],
  ["This are my parents.", ["These are my parents."], "More people: [these are]."],
  ["Is these your phone?", ["Is this your phone?"], "Singular: [this]."],
  ["That are my friends over there.", ["Those are my friends over there."], "Plural, far: [those are]."],
  ["These pizza is delicious.", ["This pizza is delicious."], "Singular: [this]."],
  ["This people are very nice.", ["These people are very nice."], "People is plural: [these]."],
  ["Those childrens are my cousins.", ["Those children are my cousins."], "child → [children], no -s."]
] });
P({ id: "dem-check", lesson: "demonstratives", type: "mc", belt: 2, title: "This, that, these, those – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ is my sister, Maria.", ["This", "These", "Those"], 0, "Introducing one person: [this is]."],
  ["___ are my new trainers. Do you like them?", ["These", "This", "That"], 0, "Plural, near: [these]."],
  ["Who are ___ people over there?", ["those", "that", "this"], 0, "Plural, far: [those]."],
  ["Thank you! ___ is very kind of you.", ["That", "Those", "These"], 0, "Reacting to what someone did: [that]."],
  ["___ flowers in my hand are for you.", ["These", "Those", "This"], 0, "Plural, near: [these]."],
  ["Is ___ your car over there?", ["that", "those", "these"], 0, "Singular, far: [that]."],
  ["Hello, ___ is Luca. Is Anna there?", ["this", "that", "these"], 0, "On the phone, the speaker: [this is]."],
  ["___ jeans I'm wearing are too big.", ["These", "This", "That"], 0, "Jeans is plural; near: [these]."],
  ["Look at ___ beautiful sunset!", ["that", "those", "these"], 0, "Singular, far: [that]."],
  ["___ apple is red, but these ones are green.", ["This", "These", "Those"], 0, "Singular, near: [this]."]
] });

/* ---------- there is / there are ---------- */
P({ id: "th-gap", lesson: "there-is", type: "gap", belt: 1, instr: "Complete the sentences with there is, there are, is there or are there.", items: [
  ["___ a big park near my house.", [["There's", "There is"]], "Singular: [there's]."],
  ["___ thirty students in my class.", [["There are"]], "Plural: [there are]."],
  ["___ a bank near here? – Yes, there is.", [["Is there"]], "Singular question: [Is there]…?"],
  ["___ any eggs in the fridge?", [["Are there"]], "Plural question: [Are there]…?"],
  ["___ some milk in the fridge.", [["There's", "There is"]], "Milk is uncountable: [there's]."],
  ["___ two cinemas in my town.", [["There are"]], "Plural: [there are]."],
  ["How many people ___ in your family?", [["are there"]], "How many + [are there]."],
  ["___ a problem with my computer.", [["There's", "There is"]], "Singular: [there's]."],
  ["___ any good restaurants in this street?", [["Are there"]], "Plural question: [Are there]…?"],
  ["___ a lot of traffic today.", [["There's", "There is"]], "Traffic is uncountable: [there's]."],
  ["___ a swimming pool at your school?", [["Is there"]], "Singular question: [Is there]…?"],
  ["___ three bedrooms in our flat.", [["There are"]], "Plural: [there are]."]
] });
P({ id: "th-neg", lesson: "there-is", type: "gap", belt: 1, instr: "Complete the sentences with there isn't a, there isn't any or there aren't any.", items: [
  ["___ cinema in my village.", [["There isn't a", "There is not a", "There's no"]], "Singular countable: [there isn't a]."],
  ["___ shops near my house.", [["There aren't any", "There are not any", "There are no"]], "Plural: [there aren't any]."],
  ["___ milk in the fridge.", [["There isn't any", "There is not any", "There's no"]], "Uncountable: [there isn't any]."],
  ["___ lift in this building.", [["There isn't a", "There is not a", "There's no"]], "Singular countable: [there isn't a]."],
  ["___ chairs in the classroom.", [["There aren't any", "There are not any", "There are no"]], "Plural: [there aren't any]."],
  ["___ bread on the table.", [["There isn't any", "There is not any", "There's no"]], "Uncountable: [there isn't any]."],
  ["___ students in the library today.", [["There aren't any", "There are not any", "There are no"]], "Plural: [there aren't any]."],
  ["___ bus stop in my street.", [["There isn't a", "There is not a", "There's no"]], "Singular countable: [there isn't a]."],
  ["___ sugar in my coffee.", [["There isn't any", "There is not any", "There's no"]], "Uncountable: [there isn't any]."],
  ["___ trees in this square.", [["There aren't any", "There are not any", "There are no"]], "Plural: [there aren't any]."]
] });
P({ id: "th-mc", lesson: "there-is", type: "mc", belt: 2, instr: "Choose the correct option: some or any, there is or it is.", items: [
  ["There are ___ apples on the table.", ["some", "any", "a"], 0, "Affirmative, plural: [some]."],
  ["Is there ___ water in the bottle?", ["any", "a", "many"], 0, "Question, uncountable: [any]."],
  ["There isn't ___ bread.", ["any", "some", "a"], 0, "Negative, uncountable: [any]."],
  ["___ a new student in our class. She's from Peru.", ["There's", "It's", "Is"], 0, "Something new / that exists: [there's]."],
  ["There's a café in the station. ___ very small.", ["It's", "There's", "Is"], 0, "Describing the café already mentioned: [it's]."],
  ["Are there ___ students from Spain in your school?", ["any", "a", "much"], 0, "Question, plural: [any]."],
  ["___ any milk? – No, there isn't.", ["Is there", "Are there", "There is"], 0, "Uncountable question: [Is there]…?"],
  ["How many bedrooms ___ in your house?", ["are there", "there are", "is there"], 0, "How many + [are there]."],
  ["Are there any biscuits? – Yes, ___.", ["there are", "there's", "they are"], 0, "Short answer: Yes, [there are]."],
  ["___ seven days in a week.", ["There are", "There is", "It is"], 0, "Plural: [there are]."]
] });
P({ id: "th-text", lesson: "there-is", type: "text", belt: 2, title: "My street", instr: "Read the whole text first, then complete the gaps with there is, there are, there isn't, there aren't or it's.",
  parts: [
    ["#", "My street"],
    ["", "My home is in Via Roma, a long street in the centre of town. {1} a lot of shops in my street, and {2} a small supermarket on the corner."],
    ["", "{3} a cinema, but {4} two cafés and a pizzeria. The pizzeria is great: {5} the best pizza in town!"],
    ["", "{6} any trees, so in summer it's very hot. And at night? {7} a lot of noise, because {8} any bars or clubs – it's a quiet street."]
  ],
  gaps: [
    [["There are"], "A lot of shops (plural): [there are]."],
    [["there's", "there is"], "A supermarket (singular): [there's]."],
    [["There isn't", "There is not", "There's not"], "‘But’ shows a contrast with what follows: [there isn't] a cinema."],
    [["there are"], "Two cafés (plural): [there are]."],
    [["it's", "it is"], "Describing the pizzeria already mentioned: [it's] the best pizza."],
    [["There aren't", "There are not"], "Any + plural in a negative: [there aren't]."],
    [["There isn't", "There is not", "There's not"], "It's a quiet street: [there isn't] a lot of noise."],
    [["there aren't", "there are not"], "Any + plural in a negative: [there aren't]."]
  ] });
P({ id: "th-check", lesson: "there-is", type: "mc", belt: 2, title: "There is, there are – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["___ a cat under the table.", ["There's", "There are", "It's"], 0, "Something that is there: [there's]."],
  ["___ two windows in my bedroom.", ["There are", "There is", "They are"], 0, "Plural: [there are]."],
  ["Is there a gym in your school? – No, ___.", ["there isn't", "there aren't", "it isn't"], 0, "Short answer: No, [there isn't]."],
  ["There aren't ___ chairs in the room.", ["any", "some", "a"], 0, "Negative, plural: [any]."],
  ["___ any good films on TV tonight?", ["Are there", "Is there", "There are"], 0, "Plural question: [Are there]…?"],
  ["There's a new pizzeria in town. ___ really good.", ["It's", "There's", "They're"], 0, "Describing it: [it's]."],
  ["There's ___ orange juice in the fridge.", ["some", "any", "a"], 0, "Affirmative, uncountable: [some]."],
  ["How many students ___ in your class?", ["are there", "there are", "is there"], 0, "How many + [are there]."],
  ["There ___ a lot of people in the square today.", ["are", "is", "be"], 0, "People is plural: there [are]."],
  ["Are there any eggs? – Yes, ___.", ["there are", "there're", "there's"], 0, "Short answer, no contraction: Yes, [there are]."]
] });
