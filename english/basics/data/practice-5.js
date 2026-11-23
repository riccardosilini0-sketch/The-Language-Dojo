/* English Basics — practice batteries (5): prepositions of place and time.
   Formats: see data/practice-1.js. A battery with img: [path, description] shows a picture above the questions
   (practised on the site only: the PDF Worksheet Builder leaves it out). */

/* ---------- prepositions of place ---------- */
P({ id: "place-pic", lesson: "place", type: "mc", belt: 1, title: "In the living room", img: ["img/room.svg", "A living room: a door with a clock above it and a plant next to it, two chairs with a ball between them, a table with a lamp and a box of books on it and a cat under it, an armchair with a picture above it, a bag behind it and a dog in front of it."],
  instr: "Look at the picture. Choose the correct preposition.", items: [
  ["The lamp is ___ the table.", ["on", "under", "in"], 0, "Touching the top of the table: [on]."],
  ["The cat is ___ the table.", ["under", "on", "above"], 0, "Below the table: [under]."],
  ["The ball is ___ the two chairs.", ["between", "behind", "on"], 0, "In the middle of two things: [between]."],
  ["The picture is ___ the armchair.", ["above", "on", "under"], 0, "Higher, not touching: [above]."],
  ["The dog is ___ the armchair.", ["in front of", "behind", "on"], 0, "Directly before the armchair: [in front of]."],
  ["The bag is ___ the armchair.", ["behind", "in front of", "under"], 0, "At the back of the armchair: [behind]."],
  ["The plant is ___ the door.", ["next to", "above", "behind"], 0, "At the side of the door: [next to]."],
  ["The clock is ___ the door.", ["above", "on", "under"], 0, "Higher than the door, on the wall: [above]."],
  ["The books are ___ the box.", ["in", "on", "under"], 0, "Inside the box: [in]."],
  ["The box is ___ the lamp.", ["next to", "behind", "under"], 0, "At the side of the lamp: [next to]."]
] });
P({ id: "place-gap", lesson: "place", type: "gap", belt: 1, instr: "Complete the sentences with in, on or at.", items: [
  ["My keys are ___ my bag.", [["in"]], "Inside: [in]."],
  ["Your phone is ___ the table.", [["on"]], "A surface: [on]."],
  ["Sara isn't here. She's ___ school.", [["at"]], "A place where we do something: [at] school."],
  ["My grandparents are ___ Sicily this month.", [["in"]], "Regions and countries: [in]."],
  ["The poster is ___ the wall.", [["on"]], "A surface: [on] the wall."],
  ["Wait for me ___ the bus stop.", [["at"]], "A point: [at] the bus stop."],
  ["Dad is ___ the kitchen.", [["in"]], "A room: [in]."],
  ["Our flat is ___ the fourth floor.", [["on"]], "Floors: [on]."],
  ["I'm ___ home tonight.", [["at"]], "Fixed expression: [at] home."],
  ["There's a lot of milk ___ the fridge.", [["in"]], "Inside: [in]."],
  ["We're ___ the train now.", [["on"]], "Public transport: [on]."],
  ["Mum is ___ work until six.", [["at"]], "Fixed expression: [at] work."]
] });
P({ id: "place-errors", lesson: "place", type: "correct", belt: 1, items: [
  ["The book is in the table.", ["The book is on the table."], "A surface: [on]."],
  ["I'm in home.", ["I'm at home.", "I am at home."], "[at] home."],
  ["The pharmacy is near to the bank.", ["The pharmacy is near the bank."], "No to after near."],
  ["The dog is next the sofa.", ["The dog is next to the sofa."], "[next to]."],
  ["The bus stop is in front the cinema.", ["The bus stop is in front of the cinema."], "[in front of]."],
  ["My aunt is at London.", ["My aunt is in London."], "Cities: [in]."],
  ["The café is between the bank or the shoe shop.", ["The café is between the bank and the shoe shop."], "between … [and]."],
  ["Our classroom is at the first floor.", ["Our classroom is on the first floor."], "Floors: [on]."],
  ["The cat is under of the bed.", ["The cat is under the bed."], "No of after under."],
  ["Sit next to I.", ["Sit next to me."], "After a preposition: [me]."]
] });
P({ id: "place-translate", lesson: "place", type: "translate", belt: 2, items: [
  T("Il gatto è sotto il letto.", "", ["The cat is under the bed."], "[under]."),
  T("Sono a casa.", "", ["I'm at home.", "I am at home."], "[at] home."),
  T("La farmacia è di fronte alla chiesa.", "", ["The pharmacy is opposite the church.", "The chemist's is opposite the church.", "The pharmacy is across from the church."], "On the other side, facing: [opposite]."),
  T("Il quadro è sopra il divano.", "", ["The picture is above the sofa.", "The painting is above the sofa."], "Higher, not touching: [above]."),
  T("La banca è tra il bar e il supermercato.", "", ["The bank is between the café and the supermarket.", "The bank is between the bar and the supermarket."], "[between] … and."),
  T("Siediti vicino a me.", "", ["Sit next to me.", "Sit near me.", "Sit beside me."], "[next to] me."),
  T("Mio fratello è a Londra.", "", ["My brother is in London."], "Cities: [in]."),
  T("Il mio appartamento è al secondo piano.", "", ["My flat is on the second floor.", "My apartment is on the second floor."], "Floors: [on]."),
  T("La macchina è davanti al garage.", "", ["The car is in front of the garage."], "[in front of]."),
  T("C'è un parco vicino alla scuola.", "", ["There's a park near the school.", "There is a park near the school.", "There's a park next to the school.", "There is a park next to the school."], "[near] the school.")
] });
P({ id: "place-check", lesson: "place", type: "mc", belt: 2, title: "Prepositions of place – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The milk is ___ the fridge.", ["in", "on", "at"], 0, "Inside: [in]."],
  ["My bedroom is ___ the first floor.", ["on", "in", "at"], 0, "Floors: [on]."],
  ["Let's meet ___ the bus stop.", ["at", "on", "in"], 0, "A point: [at]."],
  ["The café is ___ the bank and the bakery.", ["between", "next", "opposite"], 0, "In the middle of two places: [between] … and."],
  ["The car is ___ the house.", ["in front of", "in front", "front of"], 0, "[in front of]."],
  ["The lamp is ___ the table, not on the floor.", ["on", "in", "at"], 0, "A surface: [on]."],
  ["Your shoes are ___ the bed.", ["under", "below of", "under of"], 0, "[under], without of."],
  ["Sit ___ me, please.", ["next to", "next", "near to"], 0, "[next to]."],
  ["My cousins are ___ Paris.", ["in", "at", "on"], 0, "Cities: [in]."],
  ["The clock is on the wall, ___ the door.", ["above", "on", "in"], 0, "Higher, not touching: [above]."]
] });

/* ---------- prepositions of time ---------- */
P({ id: "time-sort", lesson: "time", type: "sort", belt: 2, instr: "Choose the correct preposition for each expression of time.", cats: ["in", "on", "at"], items: [
  ["the morning", 0, "Parts of the day: [in] the morning."], ["Monday", 1, "Days: [on] Monday."], ["8 o'clock", 2, "Clock times: [at] 8 o'clock."], ["July", 0, "Months: [in] July."],
  ["my birthday", 1, "Special days: [on] my birthday."], ["night", 2, "Fixed expression: [at] night."], ["2030", 0, "Years: [in] 2030."], ["the weekend", 2, "British English: [at] the weekend (American English: on)."],
  ["summer", 0, "Seasons: [in] summer."], ["Christmas Day", 1, "A specific day: [on] Christmas Day."], ["midnight", 2, "A point in time: [at] midnight."], ["Friday evening", 1, "Part of a specific day: [on] Friday evening."],
  ["the evening", 0, "Parts of the day: [in] the evening."], ["Easter", 2, "Festivals (the period): [at] Easter."], ["the 21st century", 0, "Centuries: [in]."], ["15th March", 1, "Dates: [on]."]
] });
P({ id: "time-gap", lesson: "time", type: "gap", belt: 2, instr: "Complete the sentences with in, on or at.", items: [
  ["My birthday is ___ June.", [["in"]], "Months: [in]."],
  ["The film starts ___ 8.30.", [["at"]], "Clock times: [at]."],
  ["We haven't got school ___ Saturday.", [["on"]], "Days: [on]."],
  ["I'm always tired ___ the evening.", [["in"]], "Parts of the day: [in] the evening."],
  ["The shops are closed ___ Christmas Day.", [["on"]], "A specific day: [on]."],
  ["It snows a lot here ___ winter.", [["in"]], "Seasons: [in]."],
  ["See you ___ the weekend!", [["at", "on"]], "British English: [at] the weekend; American English: on the weekend."],
  ["My grandparents' anniversary is ___ 2nd October.", [["on"]], "Dates: [on]."],
  ["I can't sleep ___ night.", [["at"]], "Fixed expression: [at] night."],
  ["The museum opens ___ 10 a.m.", [["at"]], "Clock times: [at]."],
  ["Leonardo da Vinci was born ___ 1452.", [["in"]], "Years: [in]."],
  ["Let's meet ___ Friday afternoon.", [["on"]], "Part of a specific day: [on] Friday afternoon."]
] });
P({ id: "time-mc", lesson: "time", type: "mc", belt: 2, instr: "Choose in, on, at or no preposition (—).", items: [
  ["See you ___ next Monday!", ["— (no preposition)", "on", "at"], 0, "No preposition before next."],
  ["I've got a test ___ tomorrow.", ["— (no preposition)", "on", "in"], 0, "No preposition before tomorrow."],
  ["We're at the seaside ___ August.", ["in", "on", "— (no preposition)"], 0, "Months: [in]."],
  ["The train leaves ___ 7.15.", ["at", "on", "in"], 0, "Clock times: [at]."],
  ["I'm at the gym ___ every Tuesday.", ["— (no preposition)", "on", "at"], 0, "No preposition before every."],
  ["Our holiday is ___ July.", ["in", "on", "at"], 0, "Months: [in]."],
  ["Call me ___ this evening.", ["— (no preposition)", "in", "on"], 0, "No preposition before this."],
  ["The concert is ___ Saturday night.", ["on", "at", "in"], 0, "A specific day: [on] Saturday night."],
  ["My cousins visit us ___ Easter.", ["at", "in", "— (no preposition)"], 0, "Festivals (the period): [at] Easter."],
  ["There are a lot of tourists here ___ summer.", ["in", "on", "at"], 0, "Seasons: [in]."]
] });
P({ id: "time-errors", lesson: "time", type: "correct", belt: 2, items: [
  ["My birthday is in 5th May.", ["My birthday is on 5th May.", "My birthday is on 5 May.", "My birthday is on May 5th."], "Dates: [on]."],
  ["The film is on 9 o'clock.", ["The film is at 9 o'clock.", "The film is at nine o'clock."], "Clock times: [at]."],
  ["We're at the seaside on August.", ["We're at the seaside in August.", "We are at the seaside in August."], "Months: [in]."],
  ["See you on next Monday!", ["See you next Monday!"], "No preposition with next."],
  ["I'm tired in the night.", ["I'm tired at night.", "I am tired at night."], "[at] night."],
  ["The school is closed in Sunday.", ["The school is closed on Sunday."], "Days: [on]."],
  ["It's cold at winter.", ["It's cold in winter.", "It is cold in winter."], "Seasons: [in]."],
  ["The concert is on the evening.", ["The concert is in the evening."], "[in] the evening."],
  ["We're free in the weekend.", ["We're free at the weekend.", "We're free on the weekend.", "We are free at the weekend."], "[at] the weekend (British) or on the weekend (American)."],
  ["The party is at Friday.", ["The party is on Friday."], "Days: [on]."]
] });
P({ id: "time-check", lesson: "time", type: "mc", belt: 2, title: "Prepositions of time – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The lesson finishes ___ one o'clock.", ["at", "on", "in"], 0, "Clock times: [at]."],
  ["My sister's birthday is ___ 3rd March.", ["on", "in", "at"], 0, "Dates: [on]."],
  ["It's very cold here ___ January.", ["in", "on", "at"], 0, "Months: [in]."],
  ["I'm free ___ Sunday morning.", ["on", "in", "at"], 0, "Part of a specific day: [on]."],
  ["Let's go out ___ tonight.", ["— (no preposition)", "at", "in"], 0, "No preposition before tonight."],
  ["We get lots of presents ___ Christmas.", ["at", "in", "— (no preposition)"], 0, "Festivals (the period): [at] Christmas."],
  ["Owls hunt ___ night.", ["at", "in", "on"], 0, "[at] night."],
  ["The library is closed ___ the afternoon.", ["in", "on", "at"], 0, "Parts of the day: [in] the afternoon."],
  ["Picasso was born ___ 1881.", ["in", "on", "at"], 0, "Years: [in]."],
  ["I've got English ___ Monday and Thursday.", ["on", "in", "at"], 0, "Days: [on]."]
] });
