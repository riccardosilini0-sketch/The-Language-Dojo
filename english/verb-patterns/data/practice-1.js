/* Verb Patterns — practice batteries.
   Formats: see english/basics/data/practice-1.js. */
const P = x => GL.batteries.push(x);
const T = (it, hint, acc, why) => [it, hint, acc, acc[0], why];

/* ---------- verbs + -ing ---------- */
P({ id: "ing-gap", lesson: "ing", type: "gap", belt: 2, instr: "Complete the sentences with the -ing form of the verbs in brackets.", items: [
  ["I really enjoy ___ (cook) for my friends.", [["cooking"]], "enjoy + [-ing]."],
  ["Have you finished ___ (use) the computer?", [["using"]], "finish + [-ing]."],
  ["Do you mind ___ (open) the window?", [["opening"]], "mind + [-ing]."],
  ["He suggested ___ (go) to the beach.", [["going"]], "suggest + [-ing]."],
  ["I can't stand ___ (wait) for the bus in the rain.", [["waiting"]], "can't stand + [-ing]."],
  ["___ (swim) is my favourite sport.", [["Swimming"]], "Subject: [-ing]."],
  ["Try to avoid ___ (make) the same mistake again.", [["making"]], "avoid + [-ing]."],
  ["I don't feel like ___ (go) out tonight.", [["going"]], "feel like + [-ing]."],
  ["She spends hours ___ (chat) on her phone.", [["chatting"]], "spend time + [-ing]; double the t."],
  ["I miss ___ (live) by the sea.", [["living"]], "miss + [-ing]."],
  ["Keep ___ (practise) and you'll improve.", [["practising", "practicing"]], "keep + [-ing]."],
  ["Imagine ___ (win) the World Cup!", [["winning"]], "imagine + [-ing]."]
] });
P({ id: "ing-mc", lesson: "ing", type: "mc", belt: 2, items: [
  ["I enjoy ___ to music.", ["listening", "to listen", "listen"], 0, "enjoy + [-ing]."],
  ["I'd like ___ a coffee, please.", ["to have", "having", "have"], 0, "would like + [to]."],
  ["Do you mind ___ me a hand?", ["giving", "to give", "give"], 0, "mind + [-ing]."],
  ["___ a new language is fun.", ["Learning", "Learn", "To learning"], 0, "Subject: [-ing]."],
  ["She finished ___ the report at midnight.", ["writing", "to write", "write"], 0, "finish + [-ing]."],
  ["We spent the morning ___ the house.", ["cleaning", "to clean", "clean"], 0, "spend time + [-ing]."],
  ["Paolo suggested ___ a taxi.", ["taking", "to take", "take"], 0, "suggest + [-ing]."],
  ["I can't stand ___ rude people.", ["meeting", "to meeting", "meet"], 0, "can't stand + [-ing]."],
  ["Stop ___ about it! It's over.", ["worrying", "to worry", "worry"], 0, "stop (end an action) + [-ing]."],
  ["Do you feel like ___ a film tonight?", ["watching", "to watch", "watch"], 0, "feel like + [-ing]."]
] });
P({ id: "ing-errors", lesson: "ing", type: "correct", belt: 2, items: [
  ["I enjoy to read detective stories.", ["I enjoy reading detective stories."], "enjoy + [-ing]."],
  ["Have you finished to eat?", ["Have you finished eating?"], "finish + [-ing]."],
  ["He suggested to go to the cinema.", ["He suggested going to the cinema.", "He suggested that we go to the cinema.", "He suggested that we should go to the cinema."], "suggest + [-ing]."],
  ["Do you mind to wait a moment?", ["Do you mind waiting a moment?"], "mind + [-ing]."],
  ["Smoke is bad for your health.", ["Smoking is bad for your health."], "Subject: [-ing]."],
  ["I'd like going to Japan one day.", ["I'd like to go to Japan one day.", "I would like to go to Japan one day."], "would like + [to]."],
  ["I don't feel like to study today.", ["I don't feel like studying today."], "feel like + [-ing]."],
  ["She avoids to drive in the city centre.", ["She avoids driving in the city centre."], "avoid + [-ing]."],
  ["I spent all day to study.", ["I spent all day studying."], "spend time + [-ing]."],
  ["Keep to try! You'll do it.", ["Keep trying! You'll do it.", "Keep trying! You will do it."], "keep + [-ing]."]
] });
P({ id: "ing-check", lesson: "ing", type: "mc", belt: 3, title: "Verbs followed by -ing – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My grandma loves ___ in the garden.", ["working", "work", "to working"], 0, "love + [-ing] (or to work)."],
  ["Would you like ___ with us?", ["to come", "coming", "come"], 0, "would like + [to]."],
  ["I miss ___ my old friends.", ["seeing", "to see", "see"], 0, "miss + [-ing]."],
  ["___ too much coffee isn't good for you.", ["Drinking", "Drink", "To drinking"], 0, "Subject: [-ing]."],
  ["He kept ___ the same question.", ["asking", "to ask", "ask"], 0, "keep + [-ing]."],
  ["I don't mind ___ the dishes.", ["doing", "to do", "do"], 0, "mind + [-ing]."],
  ["Practise ___ the words aloud.", ["saying", "to say", "say"], 0, "practise + [-ing]."],
  ["Avoid ___ heavy food before a match.", ["eating", "to eat", "eat"], 0, "avoid + [-ing]."],
  ["Can you imagine ___ on Mars?", ["living", "to live", "live"], 0, "imagine + [-ing]."],
  ["I hate ___ late.", ["being", "be", "been"], 0, "hate + [-ing] (or to be)."]
] });

/* ---------- verbs + to-infinitive ---------- */
P({ id: "to-gap", lesson: "to-inf", type: "gap", belt: 2, instr: "Complete the sentences with to + the infinitive of the verbs in brackets.", items: [
  ["I want ___ (learn) Spanish.", [["to learn"]], "want + [to]."],
  ["We decided ___ (stay) at home.", [["to stay"]], "decide + [to]."],
  ["She promised ___ (call) me tonight.", [["to call"]], "promise + [to]."],
  ["I hope ___ (see) you soon.", [["to see"]], "hope + [to]."],
  ["He refused ___ (answer) my question.", [["to answer"]], "refuse + [to]."],
  ["Did you manage ___ (finish) your project?", [["to finish"]], "manage + [to]."],
  ["We can't afford ___ (buy) a new car.", [["to buy"]], "afford + [to]."],
  ["They offered ___ (help) us with the move.", [["to help"]], "offer + [to]."],
  ["I'm saving money ___ (buy) a guitar.", [["to buy"]], "Purpose: [to] + verb."],
  ["She decided ___ (not / go) to the party.", [["not to go"]], "Negative: [not to]."],
  ["I don't know what ___ (say).", [["to say"]], "Question word + [to]."],
  ["We're planning ___ (visit) Edinburgh in May.", [["to visit"]], "plan + [to]."]
] });
P({ id: "to-sort", lesson: "to-inf", type: "sort", belt: 2, instr: "Which form follows these verbs: -ing or to + infinitive?", cats: ["+ -ing", "+ to + infinitive"], items: [
  ["enjoy", 0, "enjoy doing"], ["want", 1, "want to do"], ["finish", 0, "finish doing"], ["decide", 1, "decide to do"], ["mind", 0, "mind doing"], ["hope", 1, "hope to do"],
  ["avoid", 0, "avoid doing"], ["promise", 1, "promise to do"], ["suggest", 0, "suggest doing"], ["refuse", 1, "refuse to do"], ["can't stand", 0, "can't stand doing"], ["manage", 1, "manage to do"],
  ["feel like", 0, "feel like doing"], ["would like", 1, "would like to do"], ["keep", 0, "keep doing"], ["afford", 1, "afford to do"]
] });
P({ id: "to-mc", lesson: "to-inf", type: "mc", belt: 2, items: [
  ["I went to the library ___ a book.", ["to borrow", "for borrow", "for borrowing"], 0, "Purpose: [to] + verb."],
  ["He agreed ___ me.", ["to help", "helping", "help"], 0, "agree + [to]."],
  ["She seems ___ happy in her new job.", ["to be", "being", "be"], 0, "seem + [to]."],
  ["I can't decide what ___.", ["to wear", "wearing", "wear"], 0, "Question word + [to]."],
  ["We need ___ more milk.", ["to buy", "buying", "buy"], 0, "need + [to]."],
  ["Remember ___ the lights off.", ["to turn", "turning", "turn"], 0, "A duty: remember + [to]."],
  ["Tom has learnt ___ the guitar.", ["to play", "playing", "play"], 0, "learn + [to]."],
  ["I enjoy ___ new places.", ["visiting", "to visit", "visit"], 0, "enjoy + [-ing]."],
  ["We expect ___ by six.", ["to arrive", "arriving", "arrive"], 0, "expect + [to]."],
  ["She managed ___ the last train.", ["to catch", "catching", "catch"], 0, "manage + [to]."]
] });
P({ id: "to-check", lesson: "to-inf", type: "mc", belt: 3, title: "Verbs followed by to + infinitive – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["I'd love ___ to New York.", ["to go", "going", "go"], 0, "would love + [to]."],
  ["She went to Paris ___ French.", ["to study", "for study", "for to study"], 0, "Purpose: [to]."],
  ["We decided ___ by train.", ["not to travel", "to not traveling", "not travelling"], 0, "[not to] + verb."],
  ["He refused ___ the bill.", ["to pay", "paying", "pay"], 0, "refuse + [to]."],
  ["Can you show me how ___ this machine?", ["to use", "using", "use"], 0, "how + [to]."],
  ["I finished ___ my essay at ten.", ["writing", "to write", "write"], 0, "finish + [-ing]."],
  ["They hope ___ the final.", ["to reach", "reaching", "reach"], 0, "hope + [to]."],
  ["Do you mind ___ here?", ["waiting", "to wait", "wait"], 0, "mind + [-ing]."],
  ["I can't afford ___ out every night.", ["to eat", "eating", "eat"], 0, "afford + [to]."],
  ["He promised ___ late again.", ["not to be", "to not being", "not being"], 0, "[not to] + verb."]
] });

/* ---------- verb + object + infinitive; make and let ---------- */
P({ id: "obj-gap", lesson: "object-inf", type: "gap", belt: 3, instr: "Complete the sentences with the words in brackets and the correct form of the verb: to + infinitive or the base form.", items: [
  ["My parents want ___ (I / study) medicine.", [["me to study"]], "want + object + [to]."],
  ["The teacher told ___ (we / be) quiet.", [["us to be"]], "tell + object + [to]."],
  ["Could you ask ___ (he / call) me back?", [["him to call"]], "ask + object + [to]."],
  ["My mum makes ___ (I / tidy) my room every Saturday.", [["me tidy"]], "make + object + base form."],
  ["Let ___ (I / help) you with that bag.", [["me help"]], "let + object + base form."],
  ["The doctor advised ___ (she / rest) for a week.", [["her to rest"]], "advise + object + [to]."],
  ["Our school doesn't allow ___ (we / use) phones in class.", [["us to use"]], "allow + object + [to]."],
  ["That film made ___ (I / cry).", [["me cry"]], "make + object + base form."],
  ["Remind ___ (I / buy) some bread, please.", [["me to buy"]], "remind + object + [to]."],
  ["My dad lets ___ (we / stay) up late on Fridays.", [["us stay"]], "let + object + base form."],
  ["I'd like ___ (you / meet) my parents.", [["you to meet"]], "would like + object + [to]."],
  ["Can you help ___ (I / carry) this box?", [["me carry", "me to carry"]], "help + object + base form or to."]
] });
P({ id: "obj-errors", lesson: "object-inf", type: "correct", belt: 3, items: [
  ["I want that you come with me.", ["I want you to come with me."], "want + object + [to]."],
  ["She told me sit down.", ["She told me to sit down."], "tell + object + [to]."],
  ["My parents make me to study every day.", ["My parents make me study every day."], "make + object + base form."],
  ["Let me to explain.", ["Let me explain."], "let + object + base form."],
  ["He asked to me to wait.", ["He asked me to wait."], "ask + object, without to."],
  ["They don't let us using our phones.", ["They don't let us use our phones."], "let + object + base form."],
  ["The teacher wants that we read this book.", ["The teacher wants us to read this book."], "want + object + [to]."],
  ["My mum doesn't allow me go out on school nights.", ["My mum doesn't allow me to go out on school nights.", "My mum doesn't let me go out on school nights."], "allow + object + [to], or let + object + verb."],
  ["The film made me to laugh a lot.", ["The film made me laugh a lot."], "make + object + base form."],
  ["I'd like that you help me.", ["I'd like you to help me.", "I would like you to help me."], "would like + object + [to]."]
] });
P({ id: "obj-translate", lesson: "object-inf", type: "translate", belt: 3, items: [
  T("Voglio che tu venga con me.", "", ["I want you to come with me."], "want + object + [to]."),
  T("Mia mamma mi fa fare i compiti.", "", ["My mum makes me do my homework.", "My mom makes me do my homework.", "My mother makes me do my homework."], "make + object + base form."),
  T("Lasciami spiegare.", "", ["Let me explain."], "let + object + base form."),
  T("L'insegnante ci ha detto di aprire i libri.", "", ["The teacher told us to open our books.", "The teacher told us to open the books."], "tell + object + [to]."),
  T("Mi puoi ricordare di chiamare la nonna?", "", ["Can you remind me to call Grandma?", "Can you remind me to call my grandma?", "Can you remind me to call my grandmother?", "Could you remind me to call Grandma?", "Can you remind me to call grandma?"], "remind + object + [to]."),
  T("I miei genitori mi lasciano uscire il sabato.", "", ["My parents let me go out on Saturdays.", "My parents let me go out on Saturday."], "let + object + base form."),
  T("Mi ha chiesto di aspettare.", "lui", ["He asked me to wait."], "ask + object + [to]."),
  T("Vorrei che tu conoscessi mia sorella.", "", ["I'd like you to meet my sister.", "I would like you to meet my sister."], "would like + object + [to]."),
  T("Quella canzone mi fa sempre ridere.", "", ["That song always makes me laugh."], "make + object + base form."),
  T("La scuola non ci permette di usare il telefono.", "", ["The school doesn't allow us to use our phones.", "The school doesn't allow us to use the phone.", "The school doesn't let us use our phones.", "The school doesn't allow us to use phones."], "allow + object + [to].")
] });
P({ id: "obj-check", lesson: "object-inf", type: "mc", belt: 3, title: "Verb + object + infinitive – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["My boss wants ___ on Saturday.", ["me to work", "that I work", "me work"], 0, "want + object + [to]."],
  ["Don't make me ___ again!", ["say it", "to say it", "saying it"], 0, "make + object + base form."],
  ["Let me ___ you a story.", ["tell", "to tell", "telling"], 0, "let + object + base form."],
  ["She asked ___ the window.", ["me to close", "to me to close", "me close"], 0, "ask + object + [to]."],
  ["My parents don't ___ me stay out late.", ["let", "allow", "permit"], 0, "[let] + object + base form (allow needs to)."],
  ["The coach encouraged ___ harder.", ["us to train", "us train", "that we train"], 0, "encourage + object + [to]."],
  ["I was made ___ for an hour.", ["to wait", "wait", "waiting"], 0, "Passive: be made [to]."],
  ["Can you help me ___ my keys?", ["find", "finding", "found"], 0, "help + object + base form (or to find)."],
  ["The teacher told us ___ talk during the test.", ["not to", "to not to", "don't"], 0, "Negative: [not to]."],
  ["I'd like ___ my new flat.", ["you to see", "that you see", "you seeing"], 0, "would like + object + [to]."]
] });

/* ---------- remember, forget, stop, try ---------- */
P({ id: "mc-gap", lesson: "meaning-change", type: "gap", belt: 4, instr: "Complete the sentences with the -ing form or to + infinitive of the verbs in brackets.", items: [
  ["Remember ___ (lock) the door when you go out.", [["to lock"]], "A duty: remember + [to]."],
  ["I remember ___ (go) to the zoo with my grandad when I was little.", [["going"]], "A memory: remember + [-ing]."],
  ["Sorry, I forgot ___ (buy) the milk.", [["to buy"]], "A duty not done: forget + [to]."],
  ["I'll never forget ___ (see) the Northern Lights.", [["seeing"]], "A memory: forget + [-ing]."],
  ["My dad stopped ___ (smoke) ten years ago.", [["smoking"]], "End a habit: stop + [-ing]."],
  ["We stopped ___ (buy) some sandwiches on the way.", [["to buy"]], "A reason for stopping: stop + [to]."],
  ["If your laptop is slow, try ___ (restart) it.", [["restarting"]], "An experiment: try + [-ing]."],
  ["I tried ___ (open) the jar, but it was too tight.", [["to open"]], "An effort: try + [to]."],
  ["I regret ___ (not / study) harder at school.", [["not studying"]], "Sorry about the past: regret + [-ing]."],
  ["She went on ___ (talk) for another hour.", [["talking"]], "Continue: go on + [-ing]."]
] });
P({ id: "mc-mc", lesson: "meaning-change", type: "mc", belt: 4, items: [
  ["Did you remember ___ your mum?", ["to call", "calling", "call"], 0, "A duty: remember + [to]."],
  ["I remember ___ that film when I was ten.", ["watching", "to watch", "watch"], 0, "A memory: remember + [-ing]."],
  ["He stopped ___ to his friend because he was busy.", ["talking", "to talk", "talk"], 0, "He ended the action: stop + [-ing]."],
  ["We stopped at a café ___ a coffee.", ["to have", "having", "have"], 0, "A reason: stop + [to]."],
  ["Try ___ some lemon to the sauce: it's delicious.", ["adding", "to add", "add"], 0, "An experiment: try + [-ing]."],
  ["I'm trying ___ but the music is too loud.", ["to concentrate", "concentrating", "concentrate"], 0, "An effort: try + [to]."],
  ["Don't forget ___ the plants while I'm away.", ["to water", "watering", "water"], 0, "A duty: forget + [to]."],
  ["We regret ___ you that the flight is cancelled.", ["to inform", "informing", "inform"], 0, "Formal bad news: regret + [to]."],
  ["After a short break, the teacher went on ___ the next exercise.", ["to explain", "explaining", "explain"], 0, "Something new: go on + [to]."],
  ["I'll never forget ___ you for the first time.", ["meeting", "to meet", "meet"], 0, "A memory: forget + [-ing]."]
] });
P({ id: "mc-check", lesson: "meaning-change", type: "mc", belt: 4, title: "Remember, stop, try – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["I don't remember ___ my keys here. Who moved them?", ["leaving", "to leave", "leave"], 0, "A memory: remember + [-ing]."],
  ["Please remember ___ your homework tomorrow.", ["to bring", "bringing", "bring"], 0, "A duty: remember + [to]."],
  ["She stopped ___ chocolate because of her diet.", ["eating", "to eat", "eat"], 0, "End a habit: stop + [-ing]."],
  ["Halfway up the hill, we stopped ___ a rest.", ["to have", "having", "have"], 0, "A reason: stop + [to]."],
  ["I tried ___ the window, but it was stuck.", ["to open", "opening", "open"], 0, "An effort: try + [to]."],
  ["If you can't sleep, try ___ a book.", ["reading", "to read", "read"], 0, "An experiment: try + [-ing]."],
  ["I regret ___ so rude to her.", ["being", "to be", "be"], 0, "Sorry about the past: regret + [-ing]."],
  ["He forgot ___ the door, and the cat escaped.", ["to close", "closing", "close"], 0, "A duty not done: forget + [to]."],
  ["She trained as a nurse and went on ___ a hospital director.", ["to become", "becoming", "become"], 0, "The next step: go on + [to]."],
  ["Please don't stop ___. I love that song.", ["singing", "to sing", "sing"], 0, "End an action: stop + [-ing]."]
] });

/* ---------- prepositions and adjectives ---------- */
P({ id: "prep-gap", lesson: "prep-ing", type: "gap", belt: 3, instr: "Complete the sentences with the -ing form or to + infinitive of the verbs in brackets.", items: [
  ["She's very good at ___ (draw).", [["drawing"]], "After a preposition: [-ing]."],
  ["I'm interested in ___ (learn) Japanese.", [["learning"]], "interested in + [-ing]."],
  ["Wash your hands before ___ (eat).", [["eating"]], "before + [-ing]."],
  ["He left without ___ (say) goodbye.", [["saying"]], "without + [-ing]."],
  ["I look forward to ___ (hear) from you.", [["hearing"]], "look forward to + [-ing]."],
  ["This exercise is easy ___ (do).", [["to do"]], "Adjective + [to]."],
  ["It's important ___ (sleep) well before an exam.", [["to sleep"]], "It's + adjective + [to]."],
  ["I'm tired of ___ (wait) for you!", [["waiting"]], "tired of + [-ing]."],
  ["Instead of ___ (study), he played video games.", [["studying"]], "instead of + [-ing]."],
  ["I was surprised ___ (see) her there.", [["to see"]], "Adjective + [to]."],
  ["Thank you for ___ (help) me.", [["helping"]], "for + [-ing]."],
  ["Nice ___ (meet) you!", [["to meet"]], "Adjective + [to]."]
] });
P({ id: "prep-errors", lesson: "prep-ing", type: "correct", belt: 3, items: [
  ["I'm good at swim.", ["I'm good at swimming.", "I am good at swimming."], "After a preposition: [-ing]."],
  ["She left without to say goodbye.", ["She left without saying goodbye."], "without + [-ing]."],
  ["I look forward to see you.", ["I look forward to seeing you."], "look forward to + [-ing]."],
  ["Before to go out, close the windows.", ["Before going out, close the windows.", "Before you go out, close the windows."], "before + [-ing]."],
  ["I'm interested to learn Japanese.", ["I'm interested in learning Japanese.", "I am interested in learning Japanese."], "interested [in] + -ing."],
  ["This book is easy for read.", ["This book is easy to read."], "Adjective + [to]."],
  ["Thank you for help me.", ["Thank you for helping me."], "for + [-ing]."],
  ["After to finish school, I want to travel.", ["After finishing school, I want to travel.", "After I finish school, I want to travel."], "after + [-ing]."],
  ["He's afraid of fly.", ["He's afraid of flying.", "He is afraid of flying."], "afraid of + [-ing]."],
  ["It's difficult understand him.", ["It's difficult to understand him.", "It is difficult to understand him."], "It's + adjective + [to]."]
] });
P({ id: "prep-check", lesson: "prep-ing", type: "mc", belt: 3, title: "Prepositions and adjectives – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["I'm really bad at ___ names.", ["remembering", "remember", "to remember"], 0, "After a preposition: [-ing]."],
  ["We look forward to ___ you next week.", ["meeting", "meet", "met"], 0, "look forward to + [-ing]."],
  ["She's happy ___ you.", ["to help", "helping", "help"], 0, "Adjective + [to]."],
  ["How about ___ to the cinema?", ["going", "to go", "go"], 0, "How about + [-ing]."],
  ["He apologised for ___ late.", ["being", "be", "to be"], 0, "for + [-ing]."],
  ["It's not easy ___ a flat in Milan.", ["to find", "finding", "find"], 0, "It's + adjective + [to]."],
  ["After ___ lunch, we went for a walk.", ["having", "to have", "have"], 0, "after + [-ing]."],
  ["She's afraid of ___ alone at night.", ["walking", "to walk", "walk"], 0, "afraid of + [-ing]."],
  ["I was sorry ___ about your accident.", ["to hear", "hearing", "hear"], 0, "Adjective + [to]."],
  ["Why don't you call him instead of ___ a message?", ["sending", "send", "to send"], 0, "instead of + [-ing]."]
] });

/* ---------- used to ---------- */
P({ id: "ut-gap", lesson: "used-to", type: "gap", belt: 4, instr: "Complete the sentences with used to, didn't use to, be used to or get used to and the correct form of the verbs in brackets.", items: [
  ["When I was a child, I ___ (play) in the street with my friends.", [["used to play"]], "A past habit: [used to] + verb."],
  ["I ___ (not / like) vegetables, but now I love them.", [["didn't use to like", "did not use to like"]], "Negative: [didn't use to] + verb."],
  ["___ you ___ (have) long hair?", [["Did"], ["use to have"]], "Question: [Did] you [use to]…?"],
  ["There ___ (be) a cinema here, but it closed.", [["used to be"]], "A past state: [used to be]."],
  ["I'm a nurse, so I'm used to ___ (work) at night.", [["working"]], "be used to + [-ing]."],
  ["It took me months to get used to ___ (drive) on the left.", [["driving"]], "get used to + [-ing]."],
  ["She isn't used to ___ (cold) weather – she's from Sicily.", [["the cold", "cold"]], "be used to + noun."],
  ["Don't worry, you'll soon get used to ___ (live) on your own.", [["living"]], "get used to + [-ing]."]
] });
P({ id: "ut-mc", lesson: "used-to", type: "mc", belt: 4, items: [
  ["I ___ go to the gym every Monday. (now)", ["usually", "use to", "used to"], 0, "Present habit: [usually] + present simple."],
  ["My grandad ___ be a fisherman.", ["used to", "is used to", "uses to"], 0, "A past state: [used to]."],
  ["I'm used to ___ up early.", ["getting", "get", "got"], 0, "be used to + [-ing]."],
  ["We ___ live in Naples, but we moved to Turin in 2019.", ["used to", "were used to", "use to"], 0, "A past state: [used to]."],
  ["Did you ___ wear glasses?", ["use to", "used to", "using to"], 0, "After did: [use to]."],
  ["I can't ___ the noise in this city.", ["get used to", "use to", "used to"], 0, "Become accustomed: [get used to]."],
  ["She ___ working long hours. It's normal for her.", ["is used to", "used to", "uses to"], 0, "Accustomed: [is used to] + -ing."],
  ["I didn't ___ like coffee.", ["use to", "used to", "using to"], 0, "After didn't: [use to]."]
] });
P({ id: "ut-check", lesson: "used-to", type: "mc", belt: 4, title: "Used to – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["When I was little, I ___ afraid of dogs.", ["used to be", "was used to be", "used to being"], 0, "A past state: [used to be]."],
  ["He's a farmer, so he ___ getting up at five.", ["is used to", "used to", "uses to"], 0, "Accustomed: [is used to] + -ing."],
  ["There ___ be a lake here, but now it's dry.", ["used to", "is used to", "use to"], 0, "A past state: [used to]."],
  ["You'll soon get used to ___ English every day.", ["speaking", "speak", "spoke"], 0, "get used to + [-ing]."],
  ["I ___ walk to school, but now I take the bus.", ["used to", "am used to", "use to"], 0, "A finished past habit: [used to]."],
  ["Where did you ___ live before?", ["use to", "used to", "using to"], 0, "After did: [use to]."],
  ["I'm not used to ___ so much homework.", ["having", "have", "had"], 0, "be used to + [-ing]."],
  ["She ___ to like jazz, but now she loves it.", ["didn't use", "didn't used", "wasn't used"], 0, "[didn't use to] + verb."]
] });

/* ---------- review ---------- */
P({ id: "review-text", lesson: "review", type: "text", belt: 3, title: "A year in Dublin", instr: "Read the whole text first, then complete the gaps with the correct form of the verbs in brackets: -ing, to + infinitive or the base form.",
  parts: [
    ["#", "A year in Dublin"],
    ["", "Last year I decided {1} (spend) a year at a school in Dublin. At first my parents didn't want me {2} (go) so far away, but in the end they let me {3} (try)."],
    ["", "I remember {4} (feel) very nervous on my first day. I wasn't used to {5} (speak) English all the time, and I kept {6} (make) mistakes. But my host family was great: they encouraged me {7} (talk) as much as possible, and they never made me {8} (feel) stupid."],
    ["", "I really enjoyed {9} (explore) the city at the weekend. Now I'm back home, and I miss {10} (walk) along the river with my Irish friends. I'm looking forward to {11} (see) them again next summer – I've promised {12} (visit) them in July!"]
  ],
  gaps: [
    [["to spend"], "decide + [to]."],
    [["to go"], "want + object + [to]."],
    [["try"], "let + object + base form."],
    [["feeling"], "A memory: remember + [-ing]."],
    [["speaking"], "be used to + [-ing]."],
    [["making"], "keep + [-ing]."],
    [["to talk"], "encourage + object + [to]."],
    [["feel"], "make + object + base form."],
    [["exploring"], "enjoy + [-ing]."],
    [["walking"], "miss + [-ing]."],
    [["seeing"], "look forward to + [-ing]."],
    [["to visit"], "promise + [to]."]
  ] });
P({ id: "review-test", lesson: "review", type: "mc", belt: 4, test: true, title: "Verb Patterns – Final test",
  instr: "20 questions, 5 points each: 100 points in all. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["I enjoy ___ with my friends.", ["going out", "to go out", "go out"], 0, "enjoy + -ing."],
  ["We've decided ___ a new car.", ["to buy", "buying", "buy"], 0, "decide + to."],
  ["Would you like ___ a drink?", ["to have", "having", "have"], 0, "would like + to."],
  ["Do you mind ___ the door?", ["closing", "to close", "close"], 0, "mind + -ing."],
  ["___ is my favourite hobby.", ["Reading", "Read", "To reading"], 0, "Subject: -ing."],
  ["I went to the bank ___ some money.", ["to get", "for get", "for getting"], 0, "Purpose: to."],
  ["She refused ___ me the truth.", ["to tell", "telling", "tell"], 0, "refuse + to."],
  ["My parents want ___ to university.", ["me to go", "that I go", "me go"], 0, "want + object + to."],
  ["The teacher made us ___ the exercise again.", ["do", "to do", "doing"], 0, "make + object + base form."],
  ["Let me ___ you with that.", ["help", "to help", "helping"], 0, "let + object + base form."],
  ["She told me ___ worry.", ["not to", "to not to", "don't"], 0, "tell + object + not to."],
  ["Remember ___ the cat before you leave.", ["to feed", "feeding", "feed"], 0, "A duty: remember + to."],
  ["I remember ___ this song at my sister's wedding.", ["hearing", "to hear", "hear"], 0, "A memory: remember + -ing."],
  ["He stopped ___ when he got married.", ["smoking", "to smoke", "smoke"], 0, "End a habit: stop + -ing."],
  ["Try ___ the computer off and on again.", ["turning", "to turning", "turn"], 0, "An experiment: try + -ing."],
  ["I'm good at ___ problems.", ["solving", "solve", "to solve"], 0, "Preposition + -ing."],
  ["I look forward to ___ from you.", ["hearing", "hear", "heard"], 0, "look forward to + -ing."],
  ["It's difficult ___ this word.", ["to pronounce", "pronouncing", "pronounce"], 0, "It's + adjective + to."],
  ["We ___ live in the country, but now we live in town.", ["used to", "are used to", "use to"], 0, "A past state: used to."],
  ["She's used to ___ long hours.", ["working", "work", "worked"], 0, "be used to + -ing."]
] });
