/* English Basics — practice batteries (3): object pronouns, possessives, the possessive 's.
   Formats: see data/practice-1.js. */

/* ---------- object pronouns ---------- */
P({ id: "obj-gap", lesson: "object-pronouns", type: "gap", belt: 1, instr: "Complete the sentences with an object pronoun: me, you, him, her, it, us or them.", items: [
  ["Where's Marco? Call ___ now!", [["him"]], "Marco → [him]."],
  ["My grandma is great. I love ___.", [["her"]], "My grandma → [her]."],
  ["This is a present for ___, Mum!", [["you"]], "The person you speak to → [you]."],
  ["We're lucky: our teacher is very nice to ___.", [["us"]], "We → [us]."],
  ["These shoes are horrible. Look at ___!", [["them"]], "Shoes (plural) → [them]."],
  ["I'm here! Look at ___!", [["me"]], "I → [me]."],
  ["This song is fantastic. Listen to ___!", [["it"]], "A song → [it]."],
  ["Paolo and Sara are in the garden. Go with ___.", [["them"]], "Two people → [them]."],
  ["Ms Rossi is at the door. Talk to ___, please.", [["her"]], "Ms Rossi → [her]."],
  ["We're at the station. Wait for ___!", [["us"]], "We → [us]."],
  ["My dad is in the kitchen. Help ___, please.", [["him"]], "My dad → [him]."],
  ["Your phone is on the floor. Pick ___ up!", [["it"]], "A phone → [it]."]
] });
P({ id: "obj-mc", lesson: "object-pronouns", type: "mc", belt: 1, instr: "Choose the correct option: subject pronoun, object pronoun or possessive.", items: [
  ["Sit next to ___.", ["me", "I", "my"], 0, "After a preposition: [me]."],
  ["___ is my best friend.", ["She", "Her", "Hers"], 0, "Subject of the verb: [she]."],
  ["Give ___ the ball!", ["him", "he", "his"], 0, "Object of give: [him]."],
  ["This letter is for ___.", ["them", "they", "their"], 0, "After a preposition: [them]."],
  ["___ are in the same class.", ["We", "Us", "Our"], 0, "Subject: [we]."],
  ["Call ___ tonight!", ["us", "we", "our"], 0, "Object of call: [us]."],
  ["Who's there? – It's ___!", ["me", "I", "my"], 0, "Alone, after be: [me]."],
  ["Please help ___!", ["me", "I", "mine"], 0, "Object of help: [me]."],
  ["My aunt is very funny. I like ___ a lot.", ["her", "she", "hers"], 0, "Object of like: [her]."],
  ["___ is a great film. Watch ___!", ["It … it", "It … him", "He … it"], 0, "A film → [it] (subject and object)."]
] });
P({ id: "obj-rewrite", lesson: "object-pronouns", type: "rewrite", belt: 1, instr: "Rewrite the sentences: replace the words in capitals with a pronoun.", items: [
  ["I love MY GRANDPARENTS.", ["I love them."], "My grandparents → [them]."],
  ["Look at THE CAT!", ["Look at it!"], "The cat → [it]."],
  ["Talk to MRS NERI.", ["Talk to her."], "Mrs Neri → [her]."],
  ["This is for YOU AND YOUR SISTER.", ["This is for you."], "You and your sister → [you]."],
  ["Come with MARIO AND ME.", ["Come with us."], "Mario and me → [us]."],
  ["Ask YOUR DAD.", ["Ask him."], "Your dad → [him]."],
  ["Listen to THIS SONG.", ["Listen to it."], "This song → [it]."],
  ["Wait for LISA AND TOM.", ["Wait for them."], "Lisa and Tom → [them]."],
  ["Sit next to SARA.", ["Sit next to her."], "Sara → [her]."],
  ["PAOLO is in the garden.", ["He is in the garden.", "He's in the garden."], "Paolo is the subject → [he], not him."]
] });
P({ id: "obj-errors", lesson: "object-pronouns", type: "correct", belt: 2, items: [
  ["I him love.", ["I love him."], "The object goes after the verb."],
  ["Come with I!", ["Come with me!"], "After a preposition: [me]."],
  ["Listen to she!", ["Listen to her!"], "After a preposition: [her]."],
  ["This present is for they.", ["This present is for them."], "After a preposition: [them]."],
  ["Him is my cousin.", ["He is my cousin.", "He's my cousin."], "Subject: [he]."],
  ["Give to me the book.", ["Give me the book.", "Give the book to me."], "Give + person + thing, or give + thing + to + person."],
  ["Wait for we!", ["Wait for us!"], "After a preposition: [us]."],
  ["This song likes me.", ["I like this song."], "‘Mi piace’ = [I like]."],
  ["Look at they!", ["Look at them!"], "After a preposition: [them]."],
  ["Us are late!", ["We are late!", "We're late!"], "Subject: [we]."]
] });
P({ id: "obj-check", lesson: "object-pronouns", type: "mc", belt: 2, title: "Object pronouns – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My friends are at the park. Let's go with ___.", ["them", "they", "their"], 0, "After a preposition: [them]."],
  ["Is this coffee for ___? – Yes, thanks.", ["me", "I", "my"], 0, "After a preposition: [me]."],
  ["___ is my sister's boyfriend.", ["He", "Him", "His"], 0, "Subject: [he]."],
  ["Please wait for ___. We're coming!", ["us", "we", "our"], 0, "After a preposition: [us]."],
  ["This book is great. Read ___!", ["it", "its", "him"], 0, "A book → [it]."],
  ["Look at ___! They're so funny.", ["them", "they", "it"], 0, "After a preposition: [them]."],
  ["Where's Anna? I need to talk to ___.", ["her", "she", "hers"], 0, "After a preposition: [her]."],
  ["‘I'm cold.’ – ‘___ too.’", ["Me", "I", "My"], 0, "In short replies: [Me] too."],
  ["Our neighbours are very nice to ___.", ["us", "we", "our"], 0, "After a preposition: [us]."],
  ["Send ___ a message tonight!", ["me", "I", "my"], 0, "Object of send: [me]."]
] });

/* ---------- possessive adjectives and pronouns ---------- */
P({ id: "pos-gap", lesson: "possessives", type: "gap", belt: 1, instr: "Complete the sentences with a possessive adjective: my, your, his, her, its, our or their.", items: [
  ["I'm Lucy and this is ___ dog, Max.", [["my"]], "I → [my]."],
  ["Paolo is with ___ grandmother.", [["his"]], "The owner is Paolo: [his]."],
  ["Maria and ___ husband are from Lima.", [["her"]], "The owner is Maria: [her]."],
  ["We love ___ new house.", [["our"]], "We → [our]."],
  ["The children are in ___ bedroom.", [["their"]], "The children → [their]."],
  ["Are you and ___ sister twins?", [["your"]], "You → [your]."],
  ["The cat is hungry. ___ bowl is empty.", [["Its"]], "An animal → [its]."],
  ["Mr and Mrs Lee are here with ___ children.", [["their"]], "Mr and Mrs Lee → [their]."],
  ["Hi, Tom! Is this ___ jacket?", [["your"]], "Speaking to Tom: [your]."],
  ["Sara is at home with ___ brother.", [["her"]], "The owner is Sara: [her]."],
  ["Luca, where are ___ shoes? They aren't by the door.", [["your"]], "Speaking to Luca: [your]."],
  ["My brother and I are in ___ room.", [["our"]], "My brother and I → [our]."]
] });
P({ id: "pos-mc", lesson: "possessives", type: "mc", belt: 1, instr: "Choose the correct option: possessive adjective or possessive pronoun.", items: [
  ["This isn't my umbrella. ___ is blue.", ["Mine", "My", "Me"], 0, "Alone, without a noun: [mine]."],
  ["Is this ___ bag?", ["your", "yours", "you"], 0, "Before a noun: [your]."],
  ["These books aren't ours. They're ___.", ["theirs", "their", "them"], 0, "Alone: [theirs]."],
  ["Excuse me, is this seat ___?", ["yours", "your", "you"], 0, "Alone: [yours]."],
  ["Our car is red. What colour is ___?", ["yours", "your", "you're"], 0, "Alone: [yours]."],
  ["___ is this coat? – It's mine.", ["Whose", "Who's", "Who"], 0, "Asking about the owner: [whose]."],
  ["The bird is in ___ cage.", ["its", "it's", "it"], 0, "Possessive: [its], no apostrophe."],
  ["Anna is with ___ dad.", ["her", "his", "hers"], 0, "The owner is Anna: [her]."],
  ["This house is ___. We're very happy here.", ["ours", "our", "us"], 0, "Alone: [ours]."],
  ["Is that pencil ___, Mr Moretti?", ["yours", "your", "his"], 0, "Speaking to Mr Moretti, alone: [yours]."]
] });
P({ id: "pos-translate", lesson: "possessives", type: "translate", belt: 2, items: [
  T("Questa è la mia bici.", "", ["This is my bike.", "This is my bicycle."], "No article before a possessive: [my] bike."),
  T("Paolo è con sua sorella.", "", ["Paolo is with his sister."], "The owner is Paolo: [his]."),
  T("Anna è con suo padre.", "", ["Anna is with her father.", "Anna is with her dad."], "The owner is Anna: [her]."),
  T("Di chi è questo libro?", "", ["Whose is this book?", "Whose book is this?"], "The owner: [whose]."),
  T("È mio.", "", ["It's mine.", "It is mine."], "Alone: [mine]."),
  T("La nostra casa è vecchia.", "", ["Our house is old."], "[our] + noun."),
  T("I loro figli sono simpatici.", "", ["Their children are nice.", "Their kids are nice."], "[their] + noun."),
  T("È tua questa penna?", "", ["Is this your pen?", "Is this pen yours?"], "[your] + noun, or [yours] alone."),
  T("Il cane è nella sua cuccia.", "", ["The dog is in its bed.", "The dog is in its kennel.", "The dog is in his bed.", "The dog is in her bed."], "An animal: [its] (his or her for a pet we know)."),
  T("Questo zaino non è mio, è suo.", "di lei", ["This backpack isn't mine, it's hers.", "This rucksack isn't mine, it's hers.", "This bag isn't mine, it's hers.", "This backpack isn't mine. It's hers.", "This rucksack isn't mine. It's hers."], "Alone: [mine], [hers].")
] });
P({ id: "pos-errors", lesson: "possessives", type: "correct", belt: 2, items: [
  ["Marco is with her girlfriend.", ["Marco is with his girlfriend."], "The owner is Marco: [his]."],
  ["Sofia and his brother are here.", ["Sofia and her brother are here."], "The owner is Sofia: [her]."],
  ["Is this the your car?", ["Is this your car?"], "No article before a possessive."],
  ["This coat is your.", ["This coat is yours."], "Alone: [yours]."],
  ["Who's is this umbrella?", ["Whose is this umbrella?", "Whose umbrella is this?"], "The owner: [whose]."],
  ["The school is proud of it's students.", ["The school is proud of its students."], "Possessive: [its]."],
  ["These bags are their.", ["These bags are theirs."], "Alone: [theirs]."],
  ["Ours teacher is from London.", ["Our teacher is from London."], "Before a noun: [our]."],
  ["Is this pen her's?", ["Is this pen hers?"], "No apostrophe: [hers]."],
  ["Mines is the red one.", ["Mine is the red one."], "The pronoun is [mine], without -s."]
] });
P({ id: "pos-check", lesson: "possessives", type: "mc", belt: 2, title: "Possessives – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["Tom is with ___ cousin Anna.", ["his", "her", "its"], 0, "The owner is Tom: [his]."],
  ["Lucy is in ___ room.", ["her", "his", "hers"], 0, "The owner is Lucy: [her]."],
  ["Is this pencil ___? – No, mine is green.", ["yours", "your", "you"], 0, "Alone: [yours]."],
  ["___ is this scarf?", ["Whose", "Who's", "Who"], 0, "The owner: [whose]."],
  ["We're proud of ___ team.", ["our", "ours", "us"], 0, "Before a noun: [our]."],
  ["Their flat is in the centre; ___ is near the sea.", ["ours", "our", "us"], 0, "Alone: [ours]."],
  ["The tree is losing ___ leaves.", ["its", "it's", "his"], 0, "A thing: [its]."],
  ["That isn't my coat. ___ is grey.", ["Mine", "My", "Me"], 0, "Alone: [mine]."],
  ["These are my grandparents and this is ___ dog.", ["their", "theirs", "they're"], 0, "Before a noun: [their]."],
  ["Is that ___ phone, Marco?", ["your", "yours", "you're"], 0, "Before a noun: [your]."]
] });

/* ---------- the possessive 's ---------- */
P({ id: "sax-gap", lesson: "saxon", type: "gap", belt: 2, exact: true, instr: "Write the possessive form ('s or ') of the words in brackets.", items: [
  ["___ (Marco) bike is red.", [["Marco's"]], "One person: [’s]."],
  ["This is my ___ (sister) room.", [["sister's"]], "One sister: [’s]."],
  ["My ___ (parents) car is in the garage.", [["parents'"]], "Plural in -s: [’] only."],
  ["The ___ (children) toys are everywhere!", [["children's"]], "Irregular plural: [’s]."],
  ["Where is the ___ (teacher) desk?", [["teacher's"]], "One teacher: [’s]."],
  ["The ___ (students) results are very good.", [["students'"]], "Plural in -s: [’] only."],
  ["___ (Anna) brother is in my class.", [["Anna's"]], "One person: [’s]."],
  ["The ___ (women) changing room is on the left.", [["women's"]], "Irregular plural: [’s]."],
  ["My ___ (grandparents) house is in Puglia.", [["grandparents'"]], "Plural in -s: [’] only."],
  ["Is this ___ (James) jacket?", [["James's", "James'"]], "Names in -s: [James's] or [James']."],
  ["My ___ (brother) friends are very noisy. He's got lots of friends!", [["brother's"]], "One brother (he): [’s]."],
  ["___ (Laura and Tom) flat is very modern.", [["Laura and Tom's"]], "Two people, one flat: only the last name takes [’s]."]
] });
P({ id: "sax-rewrite", lesson: "saxon", type: "rewrite", belt: 2, instr: "Rewrite the sentences with 's or '.", items: [
  ["The bike of Luca is new.", ["Luca's bike is new."], "The owner first: [Luca's] bike.", "Luca's"],
  ["The house of my grandparents is big.", ["My grandparents' house is big."], "Plural in -s: [grandparents'].", "My"],
  ["The toys of the children are on the floor.", ["The children's toys are on the floor."], "Irregular plural: [children's].", "The"],
  ["The name of my teacher is Mr Ricci.", ["My teacher's name is Mr Ricci."], "One teacher: [teacher's].", "My"],
  ["The car of my parents is old.", ["My parents' car is old."], "Plural in -s: [parents'].", "My"],
  ["The phone of Sara is on the table.", ["Sara's phone is on the table."], "No article before the name: [Sara's] phone.", "Sara's"],
  ["The office of the doctor is on the first floor.", ["The doctor's office is on the first floor."], "One doctor: [doctor's].", "The"],
  ["The bedroom of my two sisters is small.", ["My sisters' bedroom is small.", "My two sisters' bedroom is small."], "Plural in -s: [sisters'].", "My"],
  ["The cat of Chris is black.", ["Chris's cat is black.", "Chris' cat is black."], "Names in -s: [Chris's] or [Chris'].", "Chris"],
  ["The books of the students are new.", ["The students' books are new."], "Plural in -s: [students'].", "The"]
] });
P({ id: "sax-mc", lesson: "saxon", type: "mc", belt: 2, instr: "What does 's mean in each sentence? Choose is, has or possession.", items: [
  ["Tom's tall.", ["is", "has", "possession"], 0, "Tom's tall = Tom [is] tall."],
  ["Tom's bike is new.", ["possession", "is", "has"], 0, "Tom's + noun: [possession]."],
  ["Tom's got two sisters.", ["has", "is", "possession"], 0, "'s got = [has] got."],
  ["My dad's a teacher.", ["is", "has", "possession"], 0, "My dad [is] a teacher."],
  ["My dad's car is blue.", ["possession", "is", "has"], 0, "dad's + noun: [possession]."],
  ["She's got long hair.", ["has", "is", "possession"], 0, "'s got = [has] got."],
  ["Where's your sister?", ["is", "has", "possession"], 0, "Where [is]…?"],
  ["Anna's at the gym.", ["is", "has", "possession"], 0, "Anna [is] at the gym."],
  ["Anna's gym is near the station.", ["possession", "is", "has"], 0, "Anna's + noun: [possession]."],
  ["It's got four legs.", ["has", "is", "possession"], 0, "'s got = [has] got."]
] });
P({ id: "sax-errors", lesson: "saxon", type: "correct", belt: 2, items: [
  ["The car of my mum is red.", ["My mum's car is red."], "People: [’s], owner first."],
  ["The Paolo's house is near here.", ["Paolo's house is near here."], "No article before the name."],
  ["This is Giulia phone.", ["This is Giulia's phone."], "Don't forget the [’s]."],
  ["The childrens' clothes are dirty.", ["The children's clothes are dirty."], "Irregular plural: [children's]."],
  ["Whose is this bag? – It's of Marta.", ["Whose is this bag? – It's Marta's."], "‘È di Marta’ = it's [Marta's]."],
  ["The womens' team is very good.", ["The women's team is very good."], "Irregular plural: [women's]."],
  ["Is this the bike of your brother?", ["Is this your brother's bike?"], "People: [’s]."],
  ["The students books are on the desk.", ["The students' books are on the desk."], "Plural in -s: [students']."],
  ["Mr Smiths' car is new.", ["Mr Smith's car is new."], "One person: [Smith's]."],
  ["My sister's are both doctors.", ["My sisters are both doctors."], "A simple plural has no apostrophe: [sisters]."]
] });
P({ id: "sax-check", lesson: "saxon", type: "mc", belt: 2, title: "The possessive 's – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["This is ___ bike.", ["my brother's", "my brothers's", "the my brother's"], 0, "One brother: [brother's]."],
  ["The ___ room is upstairs.", ["children's", "childrens'", "childs'"], 0, "Irregular plural: [children's]."],
  ["My two ___ house is in Bari.", ["grandparents'", "grandparent's'", "grandparents's"], 0, "Plural in -s: [grandparents']."],
  ["___ is this book? – It's Luca's.", ["Whose", "Who's", "Who"], 0, "The owner: [whose]."],
  ["The party is at ___ on Saturday.", ["Sara's", "Sara", "the Sara's"], 0, "At someone's house: at [Sara's]."],
  ["___ sister is a doctor.", ["Elena's", "The Elena's", "Of Elena"], 0, "No article: [Elena's] sister."],
  ["Where are the ___ coats? All the girls are ready.", ["girls'", "girls's", "girl's'"], 0, "Plural in -s: [girls']."],
  ["The ___ team is in the final.", ["women's", "womens'", "woman's'"], 0, "Irregular plural: [women's]."],
  ["James is my friend. This is ___ house.", ["James's", "James", "Jameses"], 0, "Names in -s: [James's] (or James')."],
  ["The ___ uniforms are blue. All the students wear them.", ["students'", "student's'", "students's"], 0, "Plural in -s: [students']."]
] });
