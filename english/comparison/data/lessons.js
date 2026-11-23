/* Comparatives and Quantifiers — configuration and lessons (A1–B1).
   Lesson format: see english/basics/data/lessons.js (form, table, uses, mistakes, contrasts, task).
   [words] in square brackets are highlighted; ~~text~~ marks a wrong form. Reference variety: British English. */
window.GL = { lessons: [], batteries: [] };
GL.config = {
  intro: "How to compare people and things (bigger, the best, as tall as) and how to talk about quantity (much, many, a lot of, a few, too, enough, all, none). Each lesson shows the forms, the uses with examples and Italian translations, the typical mistakes of Italian speakers, and practice of increasing difficulty.",
  lessonsLead: "Each lesson covers one topic: form and structure, main uses with examples, common mistakes, comparisons and a short writing task.",
  groups: [["comparing", "Comparing"], ["quantity", "Quantity"]],
  levels: { 1: "Comparatives, countable and uncountable nouns", 2: "Superlatives, as … as, much, many, a few, a little, too and enough", 3: "Fine points: much / far + comparative, the … the …, all, both, either, neither, none" },
  reviewTitle: "Mixed Comparison and Quantity",
  instr: {
    gap: "Complete the sentences with the correct form.",
    mc: "Choose the correct option to complete each sentence.",
    correct: "Each sentence contains a mistake. Write the correct sentence.",
    text: "Read the whole text first, then complete the gaps.",
    dialogue: "Read the whole dialogue first, then complete the gaps."
  }
};
const L = x => GL.lessons.push(x);

/* ============================== COMPARING ============================== */
L({ id: "comparatives", group: "comparing", belt: 1, title: "Comparative adjectives", short: "Bigger, more expensive, better than",
  intro: "We use comparative adjectives to compare two people or things. Short adjectives take [-er]; longer adjectives take [more]. The second term of comparison is introduced by [than].",
  form: [
    "One-syllable adjectives: + [-er]: old → old[er], tall → tall[er], cheap → cheap[er].",
    "Ending in -e: + [-r]: nice → nic[er], large → larg[er].",
    "One vowel + one consonant: double the consonant: big → bi[gger], hot → ho[tter], thin → thi[nner].",
    "Two syllables ending in -y: y → [-ier]: happy → happ[ier], easy → eas[ier], funny → funn[ier].",
    "Other adjectives with two or more syllables: [more] + adjective: [more] expensive, [more] interesting, [more] famous.",
    "Irregular: good → [better], bad → [worse], far → [further / farther].",
    "[than] introduces the second term: Rome is [bigger than] Florence. After than, an object pronoun is normal in speaking: She's taller [than me]."
  ],
  table: [["Adjective", "Rule", "Comparative"],
    ["cheap, tall", "+ -er", "cheaper, taller"],
    ["nice, safe", "+ -r", "nicer, safer"],
    ["big, hot", "double consonant + -er", "bigger, hotter"],
    ["easy, busy", "y → -ier", "easier, busier"],
    ["modern, expensive", "more + adjective", "more modern, more expensive"],
    ["good, bad, far", "irregular", "better, worse, further"]],
  uses: [
    ["Comparing two things", "", [["My brother is [taller than] my dad.", "Mio fratello è più alto di mio papà."], ["Trains are [more comfortable than] buses.", "I treni sono più comodi degli autobus."], ["This exercise is [easier than] the last one.", "Questo esercizio è più facile del precedente."]]],
    ["Better and worse", "", [["Your English is [better than] mine.", "Il tuo inglese è migliore del mio."], ["The weather is [worse] today [than] yesterday.", "Oggi il tempo è peggio di ieri."]]],
    ["Than + pronoun", "In everyday English we use the object pronoun after than; in formal English, subject + verb.", [["She's two years [older than me].", "Ha due anni più di me."], ["She's older [than I am]. (more formal)", "È più grande di me."]], 2]
  ],
  mistakes: [
    ["My sister is more tall than me.", "My sister is taller than me.", "Short adjectives: [-er], not more."],
    ["This book is more better.", "This book is better.", "Better is already a comparative: no more."],
    ["Milan is bigger of Brescia.", "Milan is bigger than Brescia.", "‘Più … di’ = [than], not of."],
    ["It's more cheap here.", "It's cheaper here.", "One syllable: [cheaper]."],
    ["The weather is badder today.", "The weather is worse today.", "bad → [worse]."],
    ["This film is interestinger.", "This film is more interesting.", "Long adjectives: [more] + adjective."],
    ["My bag is biger than yours.", "My bag is bigger than yours.", "One vowel + one consonant: double it: [bigger]."]
  ],
  contrasts: [
    ["-er or more?", "The number of syllables decides.", [["Short", "[cheaper], [faster], [bigger]", "più economico, più veloce, più grande", "One syllable (and two syllables in -y): -er."], ["Long", "[more modern], [more expensive]", "più moderno, più costoso", "Two or more syllables: more."]]]
  ],
  task: ["Compare yourself with a person in your family in five sentences. Use at least three different comparatives.",
    ["My sister Giulia is older than me: she's seventeen.", "She's taller than me, but I'm faster at running.", "She's more patient than me, especially with our little brother.", "I'm better at maths, but she's better at languages.", "Her room is tidier than mine – much tidier!"]] });

L({ id: "superlatives", group: "comparing", belt: 2, title: "Superlative adjectives", short: "The biggest, the most expensive, the best",
  intro: "We use superlatives to compare one person or thing with all the others in a group. Superlatives normally take [the].",
  form: [
    "One-syllable adjectives: [the] + [-est]: the old[est], the tall[est], the cheap[est].",
    "The same spelling rules as comparatives: the nic[est], the bi[ggest], the happ[iest].",
    "Longer adjectives: [the most] + adjective: [the most] expensive, [the most] beautiful.",
    "Irregular: good → [the best], bad → [the worst], far → [the furthest].",
    "After a superlative: [in] + a place or a group (in the world, in my class); [of] + a period or a number (of the year, of all).",
    "With the present perfect and ever: It's [the best] film [I've ever seen]."
  ],
  table: [["Adjective", "Comparative", "Superlative"],
    ["cheap", "cheaper", "the cheapest"], ["big", "bigger", "the biggest"], ["happy", "happier", "the happiest"],
    ["expensive", "more expensive", "the most expensive"], ["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"]],
  uses: [
    ["One in a group", "", [["Everest is [the highest] mountain [in] the world.", "L'Everest è la montagna più alta del mondo."], ["Marta is [the most organised] student [in] our class.", "Marta è la studentessa più organizzata della classe."]]],
    ["The best and the worst", "", [["This is [the best] pizza in town!", "È la pizza più buona della città!"], ["Monday is [the worst] day [of] the week.", "Il lunedì è il giorno peggiore della settimana."]]],
    ["With ever", "", [["It's [the funniest] film [I've ever seen].", "È il film più divertente che abbia mai visto."]], 3]
  ],
  mistakes: [
    ["It's the most big city in Italy.", "It's the biggest city in Italy.", "One syllable: [the biggest]."],
    ["She's the best student of the class.", "She's the best student in the class.", "A place or a group: [in]."],
    ["This is the more expensive phone in the shop.", "This is the most expensive phone in the shop.", "Superlative: [the most]."],
    ["He's tallest boy in my class.", "He's the tallest boy in my class.", "Superlatives take [the]."],
    ["It's the baddest day of my life!", "It's the worst day of my life!", "bad → [the worst]."]
  ],
  contrasts: [
    ["Comparative or superlative?", "Two things → comparative; one in a group of three or more → superlative.", [["Two", "Anna is [taller than] Luca.", "Anna è più alta di Luca.", "than"], ["A group", "Anna is [the tallest in] the class.", "Anna è la più alta della classe.", "the … in / of"]]]
  ],
  task: ["Write five sentences about your town, your school or your country with superlatives.",
    ["The oldest building in my town is the castle.", "The most popular place for teenagers is the main square.", "The best ice cream is at Gelateria Roma.", "The hottest month of the year is July.", "Our school's gym is the biggest in the area."]] });

L({ id: "as-as", group: "comparing", belt: 2, title: "As … as, less, much more", short: "Equality, less than, and how big the difference is",
  intro: "[as + adjective + as] says that two things are equal; [not as … as] says that the first is less. [much], [far], [a bit] and [a little] say how big a difference is.",
  form: [
    "Equality: [as] + adjective + [as]: My bag is [as heavy as] yours.",
    "Negative: [not as / not so] + adjective + [as]: The test was[n't as difficult as] I thought.",
    "[less] + adjective + [than] is possible with long adjectives, but [not as … as] is more common: This phone is [less expensive than] that one.",
    "A big difference: [much / far / a lot] + comparative: [much bigger], [far more interesting].",
    "A small difference: [a bit / a little / slightly] + comparative: [a bit cheaper].",
    "[the same as], [different from], [similar to]: My phone is [the same as] yours.",
    "Two comparatives: [the more …, the more …]: [The more] you practise, [the better] you get."
  ],
  table: [["Meaning", "Form", "Example"],
    ["equal", "as … as", "Tom is as tall as his dad."],
    ["less", "not as … as · less … than", "This film isn't as good as the book."],
    ["much more", "much / far / a lot + comparative", "It's much colder today."],
    ["a little more", "a bit / a little / slightly + comparative", "It's a bit warmer today."],
    ["identical", "the same as", "Your shoes are the same as mine."]],
  uses: [
    ["Equal", "", [["My sister is [as tall as] me now.", "Mia sorella adesso è alta come me."], ["The second film is [as good as] the first.", "Il secondo film è bello come il primo."]]],
    ["Less", "", [["Trains aren't [as fast as] planes.", "I treni non sono veloci come gli aerei."], ["This sofa is [less comfortable than] the old one.", "Questo divano è meno comodo di quello vecchio."]]],
    ["How big the difference is", "", [["Your flat is [much bigger] than mine.", "Il tuo appartamento è molto più grande del mio."], ["Can you speak [a bit more slowly]?", "Puoi parlare un po' più lentamente?"]], 3],
    ["The same as, different from", "", [["My birthday is [the same] day [as] yours!", "Il mio compleanno è lo stesso giorno del tuo!"], ["British English is a bit [different from] American English.", "L'inglese britannico è un po' diverso da quello americano."]]],
    ["The more …, the more …", "", [["[The more] I sleep, [the more tired] I feel!", "Più dormo, più mi sento stanco!"]], 3]
  ],
  mistakes: [
    ["She's tall as her mother.", "She's as tall as her mother.", "Two [as]: as tall as."],
    ["He's as tall than me.", "He's as tall as me.", "As … [as], not than."],
    ["It's very more expensive.", "It's much more expensive.", "Before a comparative: [much], not very."],
    ["My phone is the same of yours.", "My phone is the same as yours.", "[the same as]."],
    ["It's different than mine.", "It's different from mine.", "British English: [different from] (different than is American)."],
    ["More you study, more you learn.", "The more you study, the more you learn.", "[The more …, the more …]."]
  ],
  contrasts: [
    ["Very or much?", "Very goes with a normal adjective; [much] goes with a comparative.", [["very", "It's [very] cold.", "Fa molto freddo.", "Adjective."], ["much", "It's [much] colder than yesterday.", "Fa molto più freddo di ieri.", "Comparative."]]]
  ],
  task: ["Compare two places you know well (two towns, two schools, two shops) in five sentences. Use as … as, not as … as, much / a bit + comparative.",
    ["Brescia isn't as big as Milan, but it's much quieter.", "Milan is far more expensive than Brescia.", "The public transport in Milan is a bit better.", "The people in Brescia are as friendly as in Milan.", "The more I visit Milan, the more I like it!"]] });

/* ============================== QUANTITY ============================== */
L({ id: "countable", group: "quantity", belt: 1, title: "Countable and uncountable nouns", short: "A / an, some, any, a piece of, how much / how many",
  intro: "Countable nouns can be counted (one apple, two apples). Uncountable nouns can't: they have no plural and no a / an (water, money, information). The difference decides which words of quantity we can use.",
  form: [
    "Countable: singular with [a / an], plural with [-s]: an egg, three eggs.",
    "Uncountable: no a / an, no plural, singular verb: [Water is] important. [Money isn't] everything.",
    "[some] in affirmative sentences, [any] in negatives and questions, with plurals and uncountables: some eggs, some milk · any eggs, any milk.",
    "[some] in questions for offers and requests: Would you like [some] tea?",
    "To count uncountables: [a piece of] advice, [a slice of] bread, [a bottle of] water, [a cup of] tea, [a kilo of] rice.",
    "[How many] + plural countable; [How much] + uncountable: [How many] eggs? [How much] milk?"
  ],
  table: [["Countable", "Uncountable", "Italian (uncountable in English)"],
    ["a chair, two chairs", "furniture", "i mobili"], ["a suggestion, suggestions", "advice", "i consigli"], ["a job", "work", "il lavoro"],
    ["an exercise, exercises", "homework", "i compiti"], ["a fact", "information", "le informazioni"], ["a coin, a note", "money", "i soldi"], ["a suitcase, a bag", "luggage", "i bagagli"]],
  uses: [
    ["Some and any", "", [["There's [some] cheese in the fridge, but there aren't [any] eggs.", "C'è del formaggio in frigo, ma non ci sono uova."], ["Have you got [any] money?", "Hai dei soldi?"]]],
    ["Offers and requests with some", "", [["Would you like [some] coffee?", "Vuoi del caffè?"], ["Can I have [some] water, please?", "Posso avere dell'acqua, per favore?"]], 2],
    ["Counting uncountable nouns", "", [["Let me give you [a piece of] advice.", "Lascia che ti dia un consiglio."], ["I'd like [two slices of] bread.", "Vorrei due fette di pane."], ["Buy [a bottle of] water, please.", "Compra una bottiglia d'acqua, per favore."]]],
    ["How much, how many", "", [["[How many] students are there in your class?", "Quanti studenti ci sono nella tua classe?"], ["[How much] time have we got?", "Quanto tempo abbiamo?"]]]
  ],
  mistakes: [
    ["Can you give me an advice?", "Can you give me some advice?", "Advice is uncountable: [some advice] or [a piece of advice]."],
    ["The informations are wrong.", "The information is wrong.", "Information: no plural, singular verb."],
    ["We've got a lot of homeworks.", "We've got a lot of homework.", "Homework is uncountable."],
    ["How many money have you got?", "How much money have you got?", "Uncountable: [how much]."],
    ["I need a new furniture.", "I need some new furniture.", "Furniture is uncountable: no a."],
    ["There isn't some milk.", "There isn't any milk.", "Negative: [any]."]
  ],
  contrasts: [
    ["A job or work?", "Some pairs mean nearly the same, but one is countable and the other isn't.", [["Countable", "I've got [a new job].", "Ho un nuovo lavoro.", "a job, two jobs"], ["Uncountable", "I've got [a lot of work] today.", "Oggi ho molto lavoro.", "no a, no plural"]]]
  ],
  task: ["Write a shopping list for a party and five sentences about it. Use some, any, a bottle of, a packet of and how much / how many.",
    ["We need some crisps and two bottles of orange juice.", "There isn't any bread, so let's buy a loaf.", "How many people are coming? About fifteen.", "How much money have we got? Thirty euros.", "Let's buy a packet of balloons too!"]] });

L({ id: "quantifiers", group: "quantity", belt: 2, title: "Much, many, a lot of, a few, a little, too, enough", short: "How much there is, and whether it's the right amount",
  intro: "Quantifiers say how much or how many. Some go only with countable nouns, some only with uncountable nouns, and some with both.",
  form: [
    "[a lot of / lots of] + countable or uncountable, mostly in affirmative sentences: a lot of friends, a lot of time.",
    "[many] + plural countable, [much] + uncountable, mostly in negatives and questions: not many people, not much time · How many…? How much…?",
    "[a few] + plural countable, [a little] + uncountable: some, a small number / amount (positive): a few friends, a little money.",
    "[few] / [little] without a: not many / not much, not enough (negative): Few people came. There's little hope.",
    "[too much / too many] + noun: more than is right: too much sugar, too many cars.",
    "[too] + adjective: [too] hot, [too] expensive. [adjective + enough]: old [enough], warm [enough]. [enough + noun]: [enough] money, [enough] chairs.",
    "[not enough] = less than we need: There are[n't enough] chairs."
  ],
  table: [["", "Countable (plural)", "Uncountable"],
    ["a large quantity", "a lot of, lots of, many", "a lot of, lots of, much"],
    ["a small quantity (positive)", "a few", "a little"],
    ["a small quantity (negative)", "few, not many", "little, not much"],
    ["more than is right", "too many", "too much"],
    ["the right quantity", "enough", "enough"]],
  uses: [
    ["A lot of, many, much", "", [["She's got [a lot of] friends.", "Ha molti amici."], ["There aren't [many] cafés in my village.", "Nel mio paese non ci sono molti bar."], ["Have you got [much] homework today?", "Hai molti compiti oggi?"]]],
    ["A few, a little", "", [["I've got [a few] questions.", "Ho qualche domanda."], ["Add [a little] salt.", "Aggiungi un po' di sale."]]],
    ["Few and little: not enough", "", [["[Few] people know this place.", "Poche persone conoscono questo posto."], ["We've got very [little] time.", "Abbiamo pochissimo tempo."]], 3],
    ["Too much, too many, too", "", [["There are [too many] cars in the city centre.", "Ci sono troppe macchine in centro."], ["You put [too much] sugar in my coffee!", "Mi hai messo troppo zucchero nel caffè!"], ["This jacket is [too expensive].", "Questa giacca è troppo cara."]]],
    ["Enough", "After an adjective, before a noun.", [["Is the water [warm enough] for a swim?", "L'acqua è abbastanza calda per fare il bagno?"], ["We haven't got [enough] chairs.", "Non abbiamo abbastanza sedie."]]]
  ],
  mistakes: [
    ["There are much people here.", "There are a lot of people here.", "People is plural countable: [a lot of] or many."],
    ["I haven't got many time.", "I haven't got much time.", "Time is uncountable: [much]."],
    ["I've got a little friends.", "I've got a few friends.", "Countable plural: [a few]."],
    ["It's enough big.", "It's big enough.", "Adjective + [enough]."],
    ["There's too much cars.", "There are too many cars.", "Countable plural: [too many]."],
    ["It's too much expensive.", "It's too expensive.", "Too + adjective, without much."],
    ["I have a lot of works.", "I have a lot of work.", "Work (uncountable) has no plural."]
  ],
  contrasts: [
    ["A few or few?", "With a: positive (some). Without a: negative (not many, not enough).", [["a few", "I've got [a few] friends here. I'm happy.", "Ho qualche amico qui. Sono contento.", "Some: positive."], ["few", "I've got [few] friends here. I feel lonely.", "Ho pochi amici qui. Mi sento solo.", "Not many: negative."]]],
    ["Too or very?", "[Too] means more than is acceptable; [very] just makes the adjective stronger.", [["very", "It's [very] expensive, but I can buy it.", "È molto caro, ma posso comprarlo.", "Strong, but possible."], ["too", "It's [too] expensive. I can't buy it.", "È troppo caro. Non posso comprarlo.", "A problem."]]]
  ],
  task: ["Describe your town or your school: what is there a lot of, not much of, too much of, not enough of? Write five sentences.",
    ["There are a lot of shops in the centre, but there aren't many parks.", "There's too much traffic in the morning.", "There aren't enough buses after nine p.m.", "There are a few good restaurants near the station.", "The library is nice, but it's too small."]] });

L({ id: "all-none", group: "quantity", belt: 3, title: "All, both, either, neither, none, every", short: "Talking about every part of a group, or about none of it",
  intro: "These words talk about a whole group or about none of it. [Both], [either] and [neither] are for two people or things; [all] and [none] for three or more.",
  form: [
    "[all (of) the] + plural / uncountable: [All the] students are here. [All of us] like music.",
    "[every / each] + singular noun, singular verb: [Every] student [has] a tablet.",
    "Two: [both] (= all two), [either] (= one or the other), [neither] (= not one and not the other).",
    "[both … and], [either … or], [neither … nor]: [Both] Anna [and] Luca are here.",
    "[neither / either + of + plural], usually singular verb: [Neither of] my parents [speaks] English.",
    "Three or more: [none of] + plural or uncountable: [None of] my friends play chess.",
    "[no] + noun: [no] time, [no] friends (= not any)."
  ],
  table: [["", "Two", "Three or more"],
    ["the whole group", "both", "all, every, each"],
    ["one of them, it doesn't matter which", "either", "any"],
    ["not one", "neither", "none, no"]],
  uses: [
    ["All and every", "", [["[All] my friends are coming.", "Vengono tutti i miei amici."], ["[Every] room has a balcony.", "Ogni stanza ha un balcone."]]],
    ["Both, either, neither", "", [["[Both] my brothers play football.", "Entrambi i miei fratelli giocano a calcio."], ["You can sit on [either] chair.", "Puoi sederti su una qualsiasi delle due sedie."], ["[Neither] answer is correct.", "Nessuna delle due risposte è corretta."]]],
    ["None and no", "", [["[None of] the shops are open on Sunday.", "Nessuno dei negozi è aperto la domenica."], ["There's [no] milk left.", "Non c'è più latte."]]]
  ],
  mistakes: [
    ["Every students have a book.", "Every student has a book.", "Every + singular noun and singular verb."],
    ["Both of them doesn't like fish.", "Neither of them likes fish.", "‘Nessuno dei due’ = [neither]."],
    ["All the two films are good.", "Both films are good.", "Two: [both]."],
    ["None of my two sisters are here.", "Neither of my two sisters is here.", "Two: [neither]."],
    ["I haven't got no money.", "I haven't got any money.", "One negative only: not … [any] or [no] money."],
    ["The all students are here.", "All the students are here.", "[All the], not the all."]
  ],
  contrasts: [
    ["Neither or none?", "", [["neither", "[Neither of] my parents is Italian.", "Nessuno dei miei genitori è italiano.", "Two people."], ["none", "[None of] my cousins live in Italy.", "Nessuno dei miei cugini vive in Italia.", "Three or more."]]]
  ],
  task: ["Write five sentences about your family or your class. Use all, every, both, neither and none.",
    ["All the students in my class have a tablet.", "Every Friday we have a test.", "Both my parents work in a hospital.", "Neither of my grandparents speaks English.", "None of my friends like getting up early!"]] });
