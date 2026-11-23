/* English Basics — lessons (2): articles, plural nouns, demonstratives, there is / there are.
   Format: see data/lessons.js. */

/* ============================== NOUNS, ARTICLES, DEMONSTRATIVES, THERE IS ============================== */
L({ id: "articles", group: "things", belt: 1, title: "Articles: a, an, the", short: "A / an, the and no article",
  intro: "English has two articles: the indefinite article [a / an] and the definite article [the]. Often there is no article at all (the [zero article]), especially when we talk about things in general, where Italian uses il, la, i, le.",
  form: [
    "[a] before a consonant sound: a book, a car, [a] university (/juː/), [a] European city.",
    "[an] before a vowel sound: an apple, an egg, an umbrella, [an] hour (the h is silent).",
    "[a / an] only with singular countable nouns: a pen, an orange. Never with plurals: ~~a books~~.",
    "[the] has one form for everything: the boy, the girls, the house, the books.",
    "No article with plural and uncountable nouns used in a general sense: [Dogs] are loyal. I love [music]."
  ],
  table: [["Article", "When", "Examples"],
    ["a", "one of many, mentioned for the first time; jobs; before a consonant sound", "She's a nurse. · It's a big city."],
    ["an", "the same uses, before a vowel sound", "He's an actor. · It's an easy exercise."],
    ["the", "a specific thing; something already mentioned; something unique", "The cat is black. · The sun is hot."],
    ["— (no article)", "things in general; meals, school subjects, sports, languages; names of people, cities and most countries", "Cats are clever. · Lunch is at one. · Maths is fun. · Paris is beautiful."]],
  uses: [
    ["A / an: one of many, jobs", "We use a / an for one thing among many, and always with jobs.", [["Is this [a] good restaurant?", "È un buon ristorante?"], ["My mum is [a] dentist and my dad is [an] architect.", "Mia mamma è dentista e mio papà è architetto."]]],
    ["The: something specific or already known", "Both speakers know which thing we mean.", [["[The] teacher is in [the] classroom.", "L'insegnante è in classe."], ["Where's [the] remote control? – On [the] sofa.", "Dov'è il telecomando? – Sul divano."]]],
    ["The: there is only one", "The sun, the moon, the sea, the world, the President.", [["[The] sun is very hot today.", "Oggi il sole è molto caldo."], ["[The] moon is beautiful tonight.", "Stasera la luna è bellissima."]]],
    ["No article: things in general", "Italian uses the article for things in general; English doesn't.", [["[Dogs] are loyal animals.", "I cani sono animali fedeli."], ["[Music] is important to me.", "La musica è importante per me."], ["[Pizza] is my favourite food.", "La pizza è il mio cibo preferito."]]],
    ["No article: meals, school subjects, sports, languages", "", [["[Breakfast] is at seven.", "La colazione è alle sette."], ["[Maths] is my favourite subject.", "La matematica è la mia materia preferita."], ["[Football] is very popular in Italy.", "Il calcio è molto popolare in Italia."], ["[English] is easy!", "L'inglese è facile!"]]],
    ["No article: people, cities, most countries", "But a few countries have the: [the] UK, [the] USA, [the] Netherlands.", [["[Mrs Bianchi] is from [Naples].", "La signora Bianchi è di Napoli."], ["[Italy] is in southern Europe.", "L'Italia è nell'Europa meridionale."], ["New York is in [the] USA.", "New York è negli Stati Uniti."]], 2]
  ],
  mistakes: [
    ["My sister is nurse.", "My sister is a nurse.", "Jobs need [a / an]."],
    ["She is a engineer.", "She is an engineer.", "Vowel sound: [an] engineer."],
    ["It's an university.", "It's a university.", "University begins with the sound /j/: [a] university."],
    ["It's a hour from here.", "It's an hour from here.", "The h of hour is silent: [an] hour."],
    ["The dogs are loyal animals.", "Dogs are loyal animals.", "Dogs in general: no article. (The dogs = some specific dogs.)"],
    ["I love the music.", "I love music.", "Music in general: no article (‘amo la musica’)."],
    ["The maths is difficult.", "Maths is difficult.", "School subjects: no article."],
    ["The Italy is a beautiful country.", "Italy is a beautiful country.", "Most countries: no article."],
    ["They are a students.", "They are students.", "No a / an with plurals."]
  ],
  contrasts: [
    ["In general or specific?", "The same Italian sentence can need no article or the, depending on the meaning.", [["In general", "[Coffee] is very popular in Italy.", "Il caffè è molto popolare in Italia.", "Coffee in general: no article."], ["Specific", "[The] coffee in this café is excellent.", "Il caffè di questo bar è ottimo.", "This particular coffee: the."]]]
  ],
  task: ["Describe five people you know and say what they do. Use a, an and the, or no article where needed.",
    ["My mum is a doctor and my dad is an engineer.", "My aunt is a teacher at the primary school in my town.", "My cousin Matteo is a student. Physics is his favourite subject.", "Our neighbour is an artist. The paintings in her flat are amazing.", "My best friend is a big fan of basketball."]] });

L({ id: "plurals", group: "things", belt: 1, title: "Plural nouns", short: "Regular and irregular plurals, people, jeans, information",
  intro: "Most English nouns form the plural with [-s]. Some need a spelling change, and a few very common nouns are irregular. Some nouns are always plural, others have no plural at all.",
  form: [
    "Most nouns: + [-s]: book → book[s], car → car[s], day → day[s].",
    "Nouns ending in -s, -ss, -sh, -ch, -x: + [-es]: bus → bus[es], class → class[es], dish → dish[es], watch → watch[es], box → box[es].",
    "Consonant + y → [-ies]: city → cit[ies], baby → bab[ies]. Vowel + y: just -s: boy → boy[s], key → key[s].",
    "Many nouns in -f / -fe → [-ves]: leaf → lea[ves], knife → kni[ves], wife → wi[ves], shelf → shel[ves]. But: roof → roof[s], chef → chef[s].",
    "Some nouns in -o take [-es]: potato → potato[es], tomato → tomato[es], hero → hero[es]. Others take -s: photo → photo[s], piano → piano[s], radio → radio[s].",
    "Pronunciation of the ending: /s/ after a voiceless sound (cats, books), /z/ after a voiced sound (dogs, days), /ɪz/ after /s z ʃ tʃ dʒ/ (buses, watches, pages)."
  ],
  table: [["Singular", "Plural", "Italian"],
    ["man", "men", "uomo"], ["woman", "women /ˈwɪmɪn/", "donna"], ["child", "children", "bambino"], ["person", "people", "persona"],
    ["foot", "feet", "piede"], ["tooth", "teeth", "dente"], ["mouse", "mice", "topo"], ["sheep", "sheep", "pecora"], ["fish", "fish", "pesce"]],
  uses: [
    ["Regular plurals", "", [["My [books] are in my bag.", "I miei libri sono nella borsa."], ["The [buses] are late again.", "Gli autobus sono di nuovo in ritardo."], ["Our [cities] are full of tourists in summer.", "D'estate le nostre città sono piene di turisti."]]],
    ["Irregular plurals", "Learn them by heart: they are very frequent.", [["The [children] are in the garden.", "I bambini sono in giardino."], ["Two [women] and three [men] are at the door.", "Due donne e tre uomini sono alla porta."], ["My [feet] are cold.", "Ho i piedi freddi."]]],
    ["People is plural", "[People] takes a plural verb: people [are], never ~~people is~~.", [["The [people] here are very friendly.", "Le persone qui sono molto cordiali."]]],
    ["Nouns that are always plural", "Some nouns are always plural in English: [trousers, jeans, shorts, glasses, scissors, clothes].", [["My [jeans] are new.", "I miei jeans sono nuovi."], ["Where are my [glasses]?", "Dove sono i miei occhiali?"], ["Your [trousers] are too long.", "I tuoi pantaloni sono troppo lunghi."]], 2],
    ["Uncountable nouns: no plural", "Some nouns are uncountable in English: they have no plural and no a / an. Common examples: [information, advice, homework, furniture, bread, money, news]. News is singular.", [["The [news] is good.", "Le notizie sono buone."], ["Your [advice] is very useful.", "I tuoi consigli sono molto utili."], ["[Homework] is boring!", "I compiti sono noiosi!"]], 2]
  ],
  mistakes: [
    ["The peoples are friendly.", "The people are friendly.", "People is already plural."],
    ["My childs are at school.", "My children are at school.", "child → [children]."],
    ["Two bus are late.", "Two buses are late.", "bus → [buses]."],
    ["The citys are big.", "The cities are big.", "Consonant + y → [-ies]."],
    ["My foots are cold.", "My feet are cold.", "foot → [feet]."],
    ["Your informations are wrong.", "Your information is wrong.", "Information is uncountable: no -s, singular verb."],
    ["My jeans is new.", "My jeans are new.", "Jeans is plural: [are]."],
    ["The news are bad.", "The news is bad.", "News is singular: [is]."]
  ],
  contrasts: [
    ["Countable or uncountable?", "Some nouns are plural in Italian but uncountable in English.", [["Uncountable", "My homework [is] easy. · The furniture [is] new.", "I miei compiti sono facili. · I mobili sono nuovi.", "No plural, singular verb."], ["Countable", "My exercises [are] easy. · The chairs [are] new.", "I miei esercizi sono facili. · Le sedie sono nuove.", "Plural with -s."]]]
  ],
  task: ["Look around your classroom or your bedroom and write five sentences with plural nouns and are.",
    ["The windows are big and the walls are white.", "The desks are in three rows.", "My books are on the shelf, and my clothes are on the chair.", "Two of my classmates are at the board.", "The children in the photo are my cousins."]] });

L({ id: "demonstratives", group: "things", belt: 1, title: "This, that, these, those", short: "Demonstratives: near and far, singular and plural",
  intro: "[This, that, these, those] show which person or thing we mean. [This] and [these] are for things near the speaker (questo, questi); [that] and [those] are for things farther away (quello, quelli).",
  form: [
    "[this] + singular noun, near: this book. [these] + plural noun, near: these books.",
    "[that] + singular noun, far: that house. [those] + plural noun, far: those houses.",
    "They can go before a noun or stand alone: [This] bag is new. · [This] is my bag.",
    "With be: this [is], that [is] (that's), these [are], those [are]. Only that is can be contracted: [that's].",
    "Pronunciation: this /ðɪs/ has a short vowel; these /ðiːz/ has a long vowel and a final /z/."
  ],
  table: [["", "Near (qui)", "Far (lì, là)"], ["Singular", "this", "that"], ["Plural", "these", "those"]],
  uses: [
    ["Near and far", "", [["[This] chair is comfortable, but [that] one is broken.", "Questa sedia è comoda, ma quella è rotta."], ["[These] shoes are new. [Those] are old.", "Queste scarpe sono nuove. Quelle sono vecchie."]]],
    ["Introducing people", "We use [this is] to introduce one person and [these are] for more people.", [["Mum, [this is] Giulia, my new classmate.", "Mamma, lei è Giulia, la mia nuova compagna di classe."], ["[These are] my parents.", "Questi sono i miei genitori."]]],
    ["On the phone", "[This is] for the speaker; [Is that…?] for the other person.", [["Hello, [this is] Marco. [Is that] Luca?", "Pronto, sono Marco. Parlo con Luca?"]], 2],
    ["That for something just said or done", "", [["I'm sorry I'm late. – [That's] OK.", "Scusa il ritardo. – Non importa."], ["[That's] a great idea!", "È un'ottima idea!"]], 2],
    ["This one, that one", "To avoid repeating a singular noun we use [one].", [["Is it this bag? – No, [that one].", "È questa borsa? – No, quella."]], 2]
  ],
  mistakes: [
    ["This books are mine.", "These books are mine.", "Plural noun: [these]."],
    ["Those house is very old.", "That house is very old.", "Singular noun: [that]."],
    ["These is my friend Ali.", "This is my friend Ali.", "One person: [this is]."],
    ["This are my parents.", "These are my parents.", "More than one person: [these are]."],
    ["Look at that birds!", "Look at those birds!", "Plural and far: [those]."],
    ["This people are very kind.", "These people are very kind.", "People is plural: [these]."]
  ],
  contrasts: [
    ["This or these: /ɪ/ or /iː/?", "The two words sound different: make the difference clear when you speak.", [["this /ðɪs/", "[This] is my friend.", "Questo è il mio amico.", "Short vowel, final /s/."], ["these /ðiːz/", "[These] are my friends.", "Questi sono i miei amici.", "Long vowel, final /z/."]]]
  ],
  task: ["Imagine you are showing a friend round your house or your town. Write five sentences with this, that, these and those.",
    ["This is my bedroom and these are my posters.", "That's the bathroom, at the end of the corridor.", "Those boxes are full of old toys.", "This is the main square, and that building is the town hall.", "These shops are very old."]] });

L({ id: "there-is", group: "things", belt: 1, title: "There is, there are", short: "C'è, ci sono: with some and any",
  intro: "We use [there is] and [there are] to say that something exists or is in a place: Italian ‘c'è’ and ‘ci sono’.",
  form: [
    "Singular and uncountable nouns: [there is] (there's): [There's] a bank near here. [There's] some milk in the fridge.",
    "Plural nouns: [there are]: [There are] twenty students in my class.",
    "Negative: [there isn't] / [there aren't]: [There isn't] a lift. [There aren't] any shops.",
    "Questions and short answers: [Is there] a park? – Yes, there [is]. / No, there [isn't]. · [Are there] any buses? – Yes, there [are]. / No, there [aren't].",
    "How many: [How many] students [are there] in your class?",
    "[some] in affirmative sentences, [any] in negatives and questions, with plural and uncountable nouns: There are [some] eggs. There aren't [any] eggs. Are there [any] eggs?",
    "Affirmative short answers are never contracted: Yes, there [is] (not ~~Yes, there's~~)."
  ],
  table: [["", "Singular / uncountable", "Plural"],
    ["+", "There is (there's) a / some…", "There are some…"],
    ["–", "There isn't a / any…", "There aren't any…"],
    ["?", "Is there a / any…?", "Are there any…?"],
    ["Short answers", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."]],
  uses: [
    ["Something exists or is in a place", "", [["[There's] a supermarket in my street.", "C'è un supermercato nella mia via."], ["[There are] two bathrooms in our flat.", "Ci sono due bagni nel nostro appartamento."]]],
    ["Describing a place", "", [["In my town [there's] a castle, but [there isn't] a cinema.", "Nella mia città c'è un castello, ma non c'è un cinema."], ["[There aren't any] trees in this street.", "Non ci sono alberi in questa via."]]],
    ["Questions", "", [["[Is there] a chemist's near here? – Yes, [there is].", "C'è una farmacia qui vicino? – Sì."], ["[How many] people [are there] in your family?", "Quante persone ci sono nella tua famiglia?"]]],
    ["Some and any", "Some and any go with plural and uncountable nouns.", [["[There's some] juice in the fridge.", "C'è del succo in frigo."], ["[Are there any] questions?", "Ci sono domande?"], ["[There isn't any] milk.", "Non c'è latte."]], 2],
    ["There is or it is?", "[There is] says that something exists; [it is] gives information about something already mentioned.", [["[There's] a new restaurant in town. [It's] very good.", "C'è un nuovo ristorante in città. È molto buono."]], 2]
  ],
  mistakes: [
    ["There is two cats in the garden.", "There are two cats in the garden.", "Plural: [there are]."],
    ["In my town is a big park.", "In my town there's a big park.", "‘C'è’ = [there is]: it can't be left out."],
    ["Is a bank near here?", "Is there a bank near here?", "Question: [Is there]…?"],
    ["There are some milk.", "There's some milk.", "Milk is uncountable: [there is]."],
    ["There aren't some biscuits.", "There aren't any biscuits.", "Negative: [any]."],
    ["Is there a lift? – Yes, there's.", "Is there a lift? – Yes, there is.", "Short answers: no contraction."],
    ["How many students there are in your class?", "How many students are there in your class?", "Question: [are there]."],
    ["It's a new shop in my street.", "There's a new shop in my street.", "To say that something exists: [there is]."]
  ],
  contrasts: [
    ["There is or it is?", "First we say that something is there, then we describe it.", [["There is", "[There's] a cat on the sofa.", "C'è un gatto sul divano.", "Says that something exists or is there."], ["It is", "[It's] black and white.", "È bianco e nero.", "Describes it."]]]
  ],
  task: ["Describe your town or your neighbourhood in five or six sentences. Say what there is and what there isn't.",
    ["My town is small, but it's very pretty.", "There's a beautiful old church in the main square.", "There are two supermarkets, a library and a sports centre.", "There isn't a cinema, and there aren't any big shops.", "There's a lot of green, and the people are friendly."]] });
