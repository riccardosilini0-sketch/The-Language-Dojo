/* English Basics — review batteries: mixed practice on all the lessons and the final test.
   test: true → the result also shows the score out of 100 and the mark out of 10 (pass mark 60/100 = 6). */

P({ id: "review-dialogue", lesson: "review", type: "text", belt: 2, title: "A new friend", instr: "Read the whole dialogue first, then complete the gaps with one word in each gap.",
  parts: [
    ["#", "A new friend"],
    ["Mia", "Hi! {1} name's Mia. What's yours?"],
    ["Leo", "I'm Leo. {2} you new here?"],
    ["Mia", "Yes. I'm from Glasgow, {3} Scotland."],
    ["Leo", "Cool! {4} you got any brothers or sisters?"],
    ["Mia", "Yes, I've got two brothers. {5} names are Rory and Finn."],
    ["Leo", "{6} old are they?"],
    ["Mia", "Eight and ten. Look, {7} is a photo of them."],
    ["Leo", "They look funny! I've got a sister, but I haven't got {8} brothers."],
    ["Mia", "There's a guitar in your bag. {9} you play it?"],
    ["Leo", "Yes, I {10}! It's my dad's guitar. Let's play together {11} Saturday!"],
    ["Mia", "Great idea! {12} forget!"]
  ],
  gaps: [
    [["My"], "Possessive adjective: [My] name's Mia."],
    [["Are"], "Question with be: [Are] you new here?"],
    [["in"], "Countries: [in] Scotland."],
    [["Have"], "Have got question: [Have] you got…?"],
    [["Their"], "Rory and Finn → [their] names."],
    [["How"], "Age: [How] old…?"],
    [["this", "here"], "Showing something near: [this] is a photo."],
    [["any"], "Negative: haven't got [any]."],
    [["Can"], "Ability: [Can] you play it?"],
    [["can"], "Short answer: Yes, I [can]."],
    [["on"], "Days: [on] Saturday."],
    [["Don't"], "Negative imperative: [Don't] forget!"]
  ] });

P({ id: "review-errors", lesson: "review", type: "correct", belt: 2, title: "Mixed Basics – Error correction", items: [
  ["I have thirteen years.", ["I'm thirteen.", "I am thirteen."], "Age: [be]."],
  ["My mother is teacher.", ["My mother is a teacher.", "My mother's a teacher."], "Jobs: [a / an]."],
  ["The peoples here are nice.", ["The people here are nice."], "People is already plural."],
  ["This shoes are dirty.", ["These shoes are dirty."], "Plural: [these]."],
  ["There is three bedrooms in my flat.", ["There are three bedrooms in my flat."], "Plural: [there are]."],
  ["Come with I!", ["Come with me!"], "After a preposition: [me]."],
  ["Anna is with his brother.", ["Anna is with her brother."], "The owner is Anna: [her]."],
  ["The car of my dad is black.", ["My dad's car is black."], "People: [’s]."],
  ["Do you have got a bike?", ["Have you got a bike?", "Do you have a bike?"], "[Have you got]…? or [Do you have]…?"],
  ["She cans speak German.", ["She can speak German."], "No -s with can."],
  ["Where you are from?", ["Where are you from?"], "Question word + be + subject."],
  ["My birthday is in 4th July.", ["My birthday is on 4th July.", "My birthday is on 4 July.", "My birthday is on July 4th."], "Dates: [on]."]
] });

P({ id: "final-test", lesson: "review", type: "mc", belt: 2, test: true, title: "English Basics – Final test",
  instr: "25 questions, 4 points each: 100 points in all. Answer all the questions, then check your answers. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["My brother and I ___ in the same school.", ["are", "is", "am"], 0, "My brother and I = we: [are]."],
  ["___ is cold today. Wear a coat.", ["It", "He", "There"], 0, "Weather: [It]'s cold."],
  ["Mrs Galli is ___ architect.", ["an", "a", "the"], 0, "Jobs, vowel sound: [an]."],
  ["The ___ are in the garden.", ["children", "childs", "childrens"], 0, "child → [children]."],
  ["___ jeans I'm wearing are too long for me.", ["These", "This", "That"], 0, "Plural, near: [these]."],
  ["___ a supermarket near here?", ["Is there", "Are there", "There is"], 0, "Singular question: [Is there]…?"],
  ["There aren't ___ eggs in the fridge.", ["any", "some", "a"], 0, "Negative, plural: [any]."],
  ["This present is for ___.", ["her", "she", "hers"], 0, "After a preposition: [her]."],
  ["Luca is at home with ___ sister.", ["his", "her", "its"], 0, "The owner is Luca: [his]."],
  ["Is this pen ___? – Yes, it's mine.", ["yours", "your", "you"], 0, "Alone: [yours]."],
  ["The ___ toys are all over the floor.", ["children's", "childrens'", "children"], 0, "Irregular plural: [children's]."],
  ["___ is this umbrella? – It's Sara's.", ["Whose", "Who's", "Who"], 0, "The owner: [Whose]."],
  ["My sister ___ a new laptop.", ["has got", "have got", "is"], 0, "She: [has got]."],
  ["___ you got a pen? – Yes, I have.", ["Have", "Has", "Do"], 0, "Question: [Have] you got…?"],
  ["My grandad ___ swim: he's afraid of water.", ["can't", "doesn't can", "not can"], 0, "Negative: [can't]."],
  ["Can you ride a horse? – Yes, I ___.", ["can", "do", "am"], 0, "Short answer: Yes, I [can]."],
  ["___ are you from? – Peru.", ["Where", "What", "Who"], 0, "A place: [Where]."],
  ["How ___ brothers and sisters have you got?", ["many", "much", "old"], 0, "Countable: [How many]."],
  ["___ talk in the library!", ["Don't", "Not", "No"], 0, "Negative imperative: [Don't]."],
  ["It's a nice day. ___ go for a walk.", ["Let's", "Let", "Let's to"], 0, "Suggestion: [Let's] + verb."],
  ["The keys are ___ the table.", ["on", "in", "at"], 0, "A surface: [on]."],
  ["My uncle is ___ work until six.", ["at", "in", "on"], 0, "[at] work."],
  ["The bank is ___ the post office and the café.", ["between", "next", "opposite"], 0, "[between] … and."],
  ["My birthday is ___ 18th May.", ["on", "in", "at"], 0, "Dates: [on]."],
  ["The film starts ___ 9 p.m.", ["at", "on", "in"], 0, "Clock times: [at]."]
] });
