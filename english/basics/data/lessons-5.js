/* English Basics — lessons (5): prepositions of place, prepositions of time.
   Format: see data/lessons.js. */

/* ============================== PREPOSITIONS OF PLACE AND TIME ============================== */
L({ id: "place", group: "prepositions", belt: 1, title: "Prepositions of place", short: "In, on, at, under, next to, between, behind, opposite…",
  intro: "Prepositions of place say where something or someone is: [in, on, at, under, next to, near, between, behind, in front of, opposite, above, below].",
  form: [
    "Preposition + noun: [on] the table, [under] the bed, [next to] the window.",
    "Preposition + object pronoun: [next to] me, [behind] them, [between] us.",
    "[between] two things: [between] the bank [and] the café.",
    "Some prepositions are two or three words: [next to], [in front of]. No to after near: [near] the station (not ~~near to~~ in basic English).",
    "[in] for enclosed spaces, cities and countries; [on] for surfaces, floors and public transport; [at] for a point or for a place where we do something: at the door, at school, at home, at work."
  ],
  table: [["Preposition", "Meaning", "Example", "Italian"],
    ["in", "inside", "in the box", "in, dentro"],
    ["on", "on a surface", "on the table", "su, sopra (a contatto)"],
    ["at", "at a point; where an activity happens", "at the door · at school", "a, da"],
    ["under", "below and covered by", "under the bed", "sotto"],
    ["next to", "at the side of", "next to the door", "accanto a"],
    ["near", "not far from", "near the station", "vicino a"],
    ["between", "in the middle of two things", "between the chairs", "tra"],
    ["behind", "at the back of", "behind the sofa", "dietro"],
    ["in front of", "directly before", "in front of the school", "davanti a"],
    ["opposite", "on the other side, facing", "opposite the bank", "di fronte a"],
    ["above", "higher than, not touching", "above the sofa", "sopra (senza contatto)"],
    ["below", "lower than", "below the window", "sotto (più in basso)"]],
  uses: [
    ["Things in a room", "", [["The cat is [under] the bed.", "Il gatto è sotto il letto."], ["The picture is [above] the sofa.", "Il quadro è sopra il divano."], ["The lamp is [on] the desk, [next to] the computer.", "La lampada è sulla scrivania, accanto al computer."]]],
    ["Places in town", "", [["The bank is [between] the post office [and] the café.", "La banca è tra l'ufficio postale e il bar."], ["The bus stop is [opposite] the school.", "La fermata dell'autobus è di fronte alla scuola."], ["There's a park [near] my house.", "C'è un parco vicino a casa mia."]]],
    ["In, on or at?", "", [["She's [in] the kitchen. · He's [in] Rome.", "È in cucina. · È a Roma."], ["Our flat is [on] the third floor.", "Il nostro appartamento è al terzo piano."], ["I'm [at] school / [at] home / [at] work / [at] the bus stop.", "Sono a scuola / a casa / al lavoro / alla fermata."], ["We're [on] the bus.", "Siamo sull'autobus."]], 2],
    ["Opposite or in front of?", "[opposite] = on the other side, facing (often across a street); [in front of] = directly before something.", [["The car is [in front of] the garage.", "La macchina è davanti al garage."], ["The pharmacy is [opposite] the church.", "La farmacia è di fronte alla chiesa."]], 2]
  ],
  mistakes: [
    ["The keys are in the table.", "The keys are on the table.", "A surface: [on]."],
    ["I'm in home.", "I'm at home.", "Fixed expression: [at] home."],
    ["My cousin is at Milan this week.", "My cousin is in Milan this week.", "Cities: [in]."],
    ["The bank is near to the station.", "The bank is near the station.", "No to after near."],
    ["The cat is next the door.", "The cat is next to the door.", "[next to]."],
    ["The café is in front the station.", "The café is in front of the station.", "[in front of]."],
    ["My flat is at the second floor.", "My flat is on the second floor.", "Floors: [on]."],
    ["The school is between the park or the library.", "The school is between the park and the library.", "between … [and]."]
  ],
  contrasts: [
    ["On or above?", "", [["on", "The book is [on] the shelf.", "Il libro è sulla mensola.", "Touching the surface."], ["above", "The clock is [above] the door.", "L'orologio è sopra la porta.", "Higher, not touching."]]]
  ],
  task: ["Describe your bedroom in five or six sentences. Say where the furniture and your things are.",
    ["My bed is next to the window.", "There's a desk opposite the bed, and my computer is on the desk.", "My guitar is behind the door.", "There's a big poster above my bed.", "My shoes are under the bed – always!", "My bookcase is between the desk and the wardrobe."]] });

L({ id: "time", group: "prepositions", belt: 2, title: "Prepositions of time", short: "In, on, at, or no preposition",
  intro: "[in], [on] and [at] are the most common prepositions of time. The choice depends on the kind of time: [at] for clock times and some fixed expressions, [on] for days and dates, [in] for longer periods.",
  form: [
    "[at] + clock times and points in time: at 8 o'clock, at half past six, at midnight, at night, at the weekend, at Christmas, at Easter.",
    "[on] + days and dates: on Monday, on Friday morning, on 25th December, on my birthday, on Christmas Day.",
    "[in] + months, years, seasons, centuries and parts of the day: in May, in 2026, in summer, in the 21st century, in the morning, in the afternoon, in the evening.",
    "Compare: [in] the morning, but [on] Monday morning; [in] the evening, but [at] night.",
    "No preposition before this, next, last, every, today, tomorrow, yesterday: [next week], [every day], [this morning]. Not: ~~on next Monday~~.",
    "British English says [at] the weekend; American English says [on] the weekend.",
    "Dates: we write on 3rd May or on 3 May, and we say ‘on the third of May’."
  ],
  table: [["", "When", "Examples"],
    ["at", "clock times, night, the weekend, festivals", "at 7.30 · at night · at the weekend · at Christmas"],
    ["on", "days, dates, special days", "on Sunday · on 14th July · on my birthday · on Saturday night"],
    ["in", "months, years, seasons, parts of the day, longer periods", "in March · in 1998 · in winter · in the afternoon"],
    ["—", "this, next, last, every, today, tomorrow, yesterday", "next Tuesday · every summer · this evening"]],
  uses: [
    ["Clock times: at", "", [["The lesson starts [at] eight o'clock.", "La lezione comincia alle otto."], ["Lunch is [at] one.", "Il pranzo è all'una."], ["I'm never tired [at] night.", "Di notte non sono mai stanco."]]],
    ["Days and dates: on", "", [["My birthday is [on] 12th April.", "Il mio compleanno è il 12 aprile."], ["We haven't got school [on] Sunday.", "La domenica non abbiamo scuola."], ["The party is [on] Friday evening.", "La festa è venerdì sera."]]],
    ["Months, years, seasons, parts of the day: in", "", [["It's very hot here [in] August.", "Qui ad agosto fa molto caldo."], ["My grandad's birthday is [in] October.", "Il compleanno del nonno è a ottobre."], ["I'm always hungry [in] the morning.", "La mattina ho sempre fame."]]],
    ["No preposition", "", [["See you [next week]!", "Ci vediamo la settimana prossima!"], ["I've got a test [tomorrow].", "Domani ho una verifica."], ["We're at the gym [every Monday].", "Siamo in palestra tutti i lunedì."]]],
    ["Festivals", "[at] Christmas / [at] Easter (the period), [on] Christmas Day / [on] Easter Monday (the day).", [["We're always with our grandparents [at] Christmas.", "A Natale siamo sempre con i nonni."], ["The shops are closed [on] Christmas Day.", "Il giorno di Natale i negozi sono chiusi."]]]
  ],
  mistakes: [
    ["My birthday is in 5th May.", "My birthday is on 5th May.", "Dates: [on]."],
    ["The film is on 9 o'clock.", "The film is at 9 o'clock.", "Clock times: [at]."],
    ["We're at the seaside on August.", "We're at the seaside in August.", "Months: [in]."],
    ["See you on next Monday!", "See you next Monday!", "No preposition with next."],
    ["We're free in the weekend.", "We're free at the weekend.", "British English: [at] the weekend (American English: on the weekend)."],
    ["I'm tired in the night.", "I'm tired at night.", "Fixed expression: [at] night."],
    ["The school is closed in Sunday.", "The school is closed on Sunday.", "Days: [on]."],
    ["It's cold at winter.", "It's cold in winter.", "Seasons: [in]."],
    ["The concert is on the evening.", "The concert is in the evening.", "Parts of the day: [in] the evening (but on Friday evening)."]
  ],
  contrasts: [
    ["In the morning or on Monday morning?", "", [["in", "[in] the morning · [in] the evening", "la mattina · la sera", "A part of the day in general."], ["on", "[on] Monday morning · [on] Saturday evening", "lunedì mattina · sabato sera", "A part of a specific day."], ["at", "[at] night · [at] midnight", "di notte · a mezzanotte", "Fixed expressions."]]]
  ],
  task: ["Write about your week in five or six sentences: when are your lessons, your free time, your favourite day? Use in, on, at or no preposition.",
    ["My lessons are in the morning, from eight to one.", "On Tuesday afternoon I've got guitar lessons.", "At the weekend I'm free, and on Saturday evening I'm often with my friends.", "My favourite day is Friday, because there's pizza at home on Friday night!", "My birthday is in December, on the 10th."]] });
