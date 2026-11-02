/* Verb Tenses — level-balancing bank 1 (original sentences).
   Fills each tense up to a similar number of exercises per CEFR level.
   Present simple, present continuous, past simple, be going to, used to, present tenses for the future.
   Format reference: data/engine.js. Belt = CEFR level (1 A1 … 6 C2). */
(function (D) {
  "use strict";

  /* ---------- PRESENT SIMPLE (A1–B2) ---------- */
  D.extend("present-simple", [
    ["g", 1, "My cat ___ (sleep) on my bed every night.", ["sleeps"], "A habit; with it the verb takes -s."],
    ["g", 1, "We ___ (have) English on Mondays and Thursdays.", ["have"], "A timetable at school: present simple."],
    ["m", 1, "___ your parents speak English?", ["Do", "Does", "Are", "Is"], "Plural subject: Do + subject + base form."],
    ["g", 1, "Lucia ___ (not / eat) meat.", ["does not eat"], "Negative with she: doesn't + base form."],
    ["o", 1, "I get up at seven every day.", ["Every day I get up at seven."], "A daily routine."],
    ["i", 1, "Mio fratello studia ingegneria.", "My brother ___ engineering.", ["studies"], "study → studies (consonant + y → ies)."],
    ["j", 1, "He watchs TV after dinner.", false, ["He watches TV after dinner."], "Verbs ending in -ch add -es: watches."],
    ["g", 2, "How much ___ (this jacket / cost)?", ["does this jacket cost"], "Question with a singular subject: does + subject + base form."],
    ["x", 2, "Marta is a vet.", "She ___ (look after) sick animals.", ["looks after"], "A job description: present simple."],
    ["q", 2, "Write a question in the present simple.", "which bus / you / take / to school?", ["Which bus do you take to school?"], "Which + noun + do + subject + base form."],
    ["k", 2, "The Earth goes round the Sun.", ["Present simple", "Present continuous", "Past simple", "Present perfect simple"], "A permanent fact."],
    ["e", 2, "[My parents] [doesn't] [live] [in Rome].", 1, ["don't", "do not"], "Plural subject: don't."],
    ["g", 3, "I ___ (not / mind) waiting – take your time.", ["do not mind"], "Mind (= be bothered) is a state verb: present simple."],
    ["m", 3, "This soup ___ salty. Did you add salt?", ["tastes", "is tasting", "taste", "has tasting"], "Taste describing a quality is a state verb."],
    ["t", 3, "Rewrite with “belong to”.", "This is my umbrella.", "This umbrella ___ me.", ["belongs to"], "Belong is a state verb: present simple."],
    ["d", 3, "A recipe.", [["Chef", "First you ___ (melt) the butter, then you ___ (add) the flour and ___ (stir) for a minute."]], [["melt"], ["add"], ["stir"]], "Instructions use the present simple."],
    ["g", 4, "Whenever I ___ (hear) that song, I think of my grandmother.", ["hear"], "Whenever + present simple for a general truth."],
    ["m", 4, "As the novel begins, the hero ___ in a small fishing village.", ["lives", "is living", "lived", "has lived"], "Summaries of stories are told in the present simple."],
    ["e", 4, "[By the time] [the match] [is finishing], [it will be dark].", 2, ["finishes"], "Time clauses about the future take the present simple."],
    ["j", 4, "I'm thinking you're right.", false, ["I think you're right."], "Think = believe is a state verb: present simple."],
    ["x", 4, "A sports commentary.", "Bianchi passes to Russo, who ___ (shoot) and scores!", ["shoots"], "Live commentary uses the present simple for quick actions."]
  ]);

  /* ---------- PRESENT CONTINUOUS (A1–B2) ---------- */
  D.extend("present-continuous", [
    ["g", 1, "Look! The children ___ (play) in the snow.", ["are playing"], "Something happening now: are + -ing."],
    ["g", 1, "I ___ (read) a really good book at the moment.", ["am reading"], "At the moment: present continuous."],
    ["m", 1, "Where's Dad? – He ___ the car.", ["is washing", "washes", "wash", "washing"], "An action in progress now."],
    ["i", 1, "Stanno guardando la partita.", "They ___ the match.", ["are watching"], "Stare + gerundio = present continuous."],
    ["o", 1, "My sister is talking on the phone.", [], "is + -ing."],
    ["j", 1, "She is siting next to the window.", false, ["She is sitting next to the window."], "sit → sitting (double t)."],
    ["q", 1, "Write a sentence in the present continuous.", "we / have / lunch / now", ["We are having lunch now."], "have (= eat) can be continuous."],
    ["c", 1, "___ (it / rain) outside? I can hear something.", ["Is it raining"], "Question: Is + it + -ing."],
    ["g", 2, "You ___ (not / listen) to me! I asked you a question.", ["are not listening"], "Negative: aren't + -ing."],
    ["x", 2, "Max has a summer job this year.", "He ___ (work) in a café until September.", ["is working"], "A temporary situation."],
    ["m", 2, "Why ___ that heavy coat? It's warm today!", ["are you wearing", "do you wear", "you are wearing", "are you wear"], "Question about now: are + subject + -ing."],
    ["e", 2, "[Be quiet!] [I] [try] [to concentrate].", 2, ["am trying"], "Happening now: am trying."],
    ["t", 2, "Make it a question.", "Your brother is studying.", "___ studying?", ["Is your brother"], "Invert is and the subject."],
    ["g", 3, "The price of petrol ___ (go) up again.", ["is going"], "A changing situation: present continuous."],
    ["m", 3, "Sorry, I can't talk now – I ___ dinner.", ["am cooking", "cook", "cooked", "have cooked"], "An action in progress at the moment of speaking."],
    ["k", 3, "More and more people are buying electric cars.", ["Present continuous", "Present simple", "Present perfect continuous", "Past continuous"], "A trend in progress."],
    ["d", 3, "On the phone.", [["Kim", "Hi! Is this a bad time?"], ["Ray", "A bit – we ___ (have) dinner, and the baby ___ (cry). Can I call you back?"]], [["are having"], ["is crying"]], "Actions in progress at the moment of speaking."],
    ["i", 3, "In questo periodo sto imparando a suonare la chitarra.", "These days I ___ to play the guitar.", ["am learning"], "A temporary activity around now."],
    ["g", 4, "She ___ (be) very generous today – I wonder what she wants.", ["is being"], "Be + -ing for temporary behaviour."],
    ["m", 4, "My brother ___ forgetting his keys! It's so annoying.", ["is always", "always is", "always", "does always"], "Always + present continuous for an irritating habit."],
    ["t", 4, "Rewrite to show it is a temporary situation.", "They live with their grandparents (until their new house is ready).", "They ___ with their grandparents until their new house is ready.", ["are living", "are staying"], "Temporary arrangement: present continuous."],
    ["e", 4, "[I] [am seeing] [your point], [but I don't agree].", 1, ["see"], "See = understand is a state verb."],
    ["j", 4, "The doctor is seeing a patient at the moment.", true, [], "See = meet (professionally) is an action: continuous is fine."],
    ["x", 4, "You notice a friend has changed recently.", "You ___ (look) much more relaxed these days.", ["are looking", "look"], "Look (appearance) can be simple or continuous for a temporary state."],
    ["q", 4, "Write a sentence with always to show annoyance.", "he / always / interrupt / me", ["He is always interrupting me."], "always + present continuous = irritating habit."]
  ]);

  /* ---------- PAST SIMPLE (A1–B2) ---------- */
  D.extend("past-simple", [
    ["g", 1, "I ___ (be) at home last night.", ["was"], "Past of be with I: was."],
    ["g", 1, "They ___ (play) tennis on Sunday.", ["played"], "Regular verb + -ed."],
    ["m", 1, "We ___ a pizza for dinner yesterday.", ["had", "have", "has", "haved"], "Have → had."],
    ["i", 1, "Ieri sera sono andato a letto tardi.", "Last night I ___ to bed late.", ["went"], "Go → went."],
    ["o", 1, "She was very tired yesterday.", ["Yesterday she was very tired."], "Past of be: was."],
    ["j", 1, "We was at the beach.", false, ["We were at the beach."], "With we: were."],
    ["c", 1, "___ (you / be) at school yesterday?", ["Were you"], "Question with be: Were + subject."],
    ["q", 1, "Write a negative sentence in the past simple.", "I / not / like / the film", ["I did not like the film."], "didn't + base form."],
    ["g", 2, "The shop ___ (close) at six, so we couldn't buy anything.", ["closed"], "A finished past event."],
    ["x", 2, "Paolo's birthday was on Saturday.", "His friends ___ (give) him a new bike.", ["gave"], "Give → gave."],
    ["m", 2, "How ___ your weekend?", ["was", "were", "did", "is"], "How was…? (be in the past)."],
    ["e", 2, "[She] [buyed] [a new dress] [for the party].", 1, ["bought"], "Buy is irregular: bought."],
    ["t", 2, "Make it a question.", "He found his wallet.", "___ his wallet?", ["Did he find"], "Did + subject + base form."],
    ["d", 3, "", [["", "I ___ (lose) my phone on the bus, but someone ___ (hand) it in."]], [["lost"], ["handed"]], "A sequence of past events."],
    ["m", 3, "When I was a teenager, I ___ to school every day.", ["cycled", "have cycled", "had cycled", "am cycling"], "A past habit: past simple (or used to)."],
    ["k", 3, "Columbus reached the Americas in 1492.", ["Past simple", "Present perfect simple", "Past perfect simple", "Past continuous"], "A historical event with a date."],
    ["d", 3, "After the holidays.", [["Teacher", "Where ___ (you / go) in August?"], ["Elisa", "We ___ (drive) to Croatia and ___ (spend) two weeks on an island."]], [["did you go"], ["drove"], ["spent"]], "Finished events in a finished period."],
    ["i", 3, "Non ho capito la domanda, potrebbe ripeterla?", "I ___ the question – could you repeat it?", ["did not understand", "didn't understand", "didn't catch", "did not catch"], "Italian passato prossimo for a single finished event often = past simple."],
    ["g", 4, "I'd rather you ___ (not / smoke) in here.", ["did not smoke"], "I'd rather + subject + past simple (present meaning)."],
    ["m", 4, "It's high time we ___ a decision.", ["made", "make", "have made", "will make"], "It's (high) time + past simple."],
    ["t", 4, "Rewrite with “wish”.", "I'm sorry I don't speak Japanese.", "I wish I ___ Japanese.", ["spoke", "could speak"], "Wish + past simple for a present situation."],
    ["e", 4, "[If I] [would have] [more time], [I'd learn the piano].", 1, ["had"], "Second conditional: if + past simple."],
    ["j", 4, "Suppose you won the lottery – what would you do?", true, [], "Suppose + past simple for an imaginary situation."],
    ["x", 4, "You're talking about an old friend.", "When ___ (you / last / see) him?", ["did you last see"], "When … last + past simple."],
    ["q", 4, "Write the sentence with “It's time”.", "it's time / we / go / home", ["It's time we went home."], "It's time + subject + past simple."]
  ]);

  /* ---------- BE GOING TO (A1–B1) ---------- */
  D.extend("be-going-to", [
    ["g", 1, "I ___ (visit) my grandparents on Sunday.", ["am going to visit"], "A plan: am going to + base form."],
    ["g", 1, "My brother ___ (buy) a new bike next week.", ["is going to buy"], "He/she: is going to."],
    ["m", 1, "We ___ watch a film tonight.", ["are going to", "is going to", "going to", "are go to"], "We are going to + base form."],
    ["i", 1, "Domani vado a fare una passeggiata (ho deciso).", "Tomorrow I ___ for a walk.", ["am going to go"], "Intention: going to go."],
    ["o", 1, "They are going to paint the kitchen.", [], "be going to + base form."],
    ["j", 1, "I am going to visiting Paris.", false, ["I am going to visit Paris."], "Going to + base form, not -ing."],
    ["c", 1, "What ___ (you / cook) tonight?", ["are you going to cook", "are you cooking"], "Asking about plans."],
    ["q", 1, "Write a sentence with be going to.", "she / learn / to swim / this summer", ["She is going to learn to swim this summer."], "A plan for the future."],
    ["x", 1, "Tom has bought a guitar.", "He ___ (take) lessons.", ["is going to take"], "Evidence of a plan."],
    ["k", 1, "We're going to have a picnic tomorrow.", ["Be going to", "Present simple", "Past simple", "Present perfect simple"], "A plan for tomorrow."],
    ["g", 2, "Be careful! That glass ___ (fall) off the table.", ["is going to fall"], "Prediction from what we can see."],
    ["m", 2, "I'm sorry, I ___ come to your party. I have to work.", ["am not going to", "not going to", "don't going to", "am going not to"], "Negative: am not going to."],
    ["e", 2, "[Are] [you] [going] [study] [tonight]?", 3, ["to study"], "Going to + base form."],
    ["t", 2, "Rewrite with going to.", "My plan is to get fit this year.", "I ___ fit this year.", ["am going to get"], "Plans: going to."],
    ["d", 2, "The weekend.", [["Leo", "___ (you / come) to the match on Saturday?"], ["Pia", "No, I ___ (help) my parents move house."]], [["Are you going to come", "Are you coming"], ["am going to help", "am helping"]], "Plans and arrangements."],
    ["i", 2, "Guarda il cielo: sta per piovere.", "Look at the sky: it ___ rain.", ["is going to"], "Prediction with evidence."],
    ["h", 2, "Match the beginnings and endings.", [["Look at those black clouds –", "it's going to rain."], ["I've saved enough money,", "so I'm going to buy a laptop."], ["Are you going to", "invite Marco to your party?"], ["We aren't going to", "stay long."]], "be going to for plans and evidence-based predictions."]
  ]);

  /* ---------- USED TO (A2–B1) ---------- */
  D.extend("used-to", [
    ["g", 2, "I ___ (have) a dog when I was a child.", ["used to have", "had"], "A past state: used to + base form."],
    ["g", 2, "She ___ (play) the piano, but she stopped years ago.", ["used to play"], "A past habit that has stopped."],
    ["m", 2, "We ___ go to the same school.", ["used to", "use to", "were used to", "used"], "used to + base form."],
    ["i", 2, "Da piccolo mangiavo sempre le caramelle.", "As a child I ___ sweets all the time.", ["used to eat", "ate"], "Italian imperfetto for habits = used to (or past simple)."],
    ["o", 2, "My dad used to work in a factory.", [], "used to + base form."],
    ["c", 2, "___ (you / use to / live) in Milan?", ["Did you use to live"], "Did + subject + use to + base form."],
    ["x", 2, "Look at this old photo of our street.", "There ___ (be) a park here, but now it's a car park.", ["used to be", "was"], "There used to be = there was (not now)."],
    ["k", 2, "I used to hate maths, but now I love it.", ["Used to", "Past continuous", "Present perfect simple", "Past perfect simple"], "A past state that has changed."],
    ["e", 2, "[He] [use to] [walk] [to work].", 1, ["used to"], "Affirmative: used to."],
    ["j", 2, "We didn't use to have a car.", true, [], "Negative: didn't use to + base form."],
    ["t", 2, "Rewrite with used to.", "I was shy as a child, but I'm not now.", "I ___ shy as a child.", ["used to be"], "Past state no longer true."],
    ["g", 3, "My grandparents ___ (not / have) a fridge when they got married.", ["did not use to have", "didn't use to have", "never used to have", "did not have", "didn't have"], "Negative past state."],
    ["m", 3, "Where ___ go on holiday when you were young?", ["did you use to", "did you used to", "used you to", "were you used to"], "Question: did + subject + use to."],
    ["i", 3, "Una volta non mi piaceva il caffè.", "I ___ coffee.", ["did not use to like", "didn't use to like", "never used to like"], "Negative: didn't use to like."],
    ["d", 3, "Then and now.", [["Jo", "You ___ (have) long hair, didn't you?"], ["Ed", "Yes, and I ___ (not / wear) glasses either. Things change!"]], [["used to have"], ["did not use to wear", "didn't use to wear", "never used to wear"]], "Past states that have changed: used to."],
    ["e", 3, "[Did] [your mum] [used to] [work] [in a bank]?", 2, ["use to"], "After did: use to (no -d)."],
    ["j", 3, "I used to live in London for three years.", false, ["I lived in London for three years."], "With a specific duration of a completed period, use the past simple."],
    ["x", 3, "Talking about technology.", "People ___ (write) letters much more before email.", ["used to write", "wrote"], "A past habit."],
    ["q", 3, "Write a question with used to.", "what games / you / play / as a child?", ["What games did you use to play as a child?"], "Wh- + did + subject + use to + base form."],
    ["k", 3, "There didn't use to be so much traffic in this town.", ["Used to", "Past simple", "Past continuous", "Present perfect simple"], "didn't use to = a past state that has changed."],
    ["h", 3, "Match the questions and answers.", [["Did you use to wear a uniform?", "Yes, I did – a grey one."], ["What did you use to do after school?", "I used to play football."], ["Where did you use to live?", "In a village near Verona."], ["Who did you use to sit next to?", "My best friend, Carla."]], "Each answer gives the information asked for."]
  ]);

  /* ---------- PRESENT CONTINUOUS FOR THE FUTURE (A2–B1) ---------- */
  D.extend("present-continuous-future", [
    ["g", 2, "We ___ (have) a party on Saturday – can you come?", ["are having"], "An arrangement."],
    ["q", 2, "Write a question about an arrangement.", "when / you / leave / for Spain?", ["When are you leaving for Spain?"], "Asking about arranged plans."],
    ["d", 2, "In the office.", [["Bea", "Can we meet tomorrow morning?"], ["Carl", "Sorry, I ___ (fly) to Paris at nine. I ___ (come) back on Thursday."]], [["am flying"], ["am coming"]], "Fixed travel arrangements."]
  ]);

  /* ---------- PRESENT SIMPLE FOR THE FUTURE (A2–B2) ---------- */
  D.extend("present-simple-future", [
    ["g", 2, "The film ___ (begin) at 8.30 tonight.", ["begins", "starts"], "A scheduled event."],
    ["m", 2, "Our plane ___ at 6 a.m. tomorrow.", ["leaves", "is leave", "leaving", "left"], "Timetables: present simple."],
    ["i", 2, "Le lezioni iniziano il 15 settembre.", "Lessons ___ on 15 September.", ["start", "begin"], "Official calendar: present simple."],
    ["o", 2, "When does the next bus leave?", [], "Timetable question: present simple."],
    ["c", 2, "What time ___ (the museum / close) today?", ["does the museum close"], "Opening hours: present simple."],
    ["j", 2, "The train will arrive at 10.45 according to the timetable.", false, ["The train arrives at 10.45 according to the timetable."], "Timetables use the present simple."],
    ["g", 3, "I'll phone you after I ___ (finish) work.", ["finish", "have finished"], "after + present tense for the future."],
    ["m", 3, "Don't cross the road until the light ___ green.", ["turns", "will turn", "turning", "is going to turn"], "until + present simple."],
    ["e", 3, "[Before] [you will leave], [please] [close the windows].", 1, ["you leave"], "before + present simple."],
    ["t", 3, "Join with “when”.", "I'll be 18 next year. Then I'll learn to drive.", "I'll learn to drive when I ___ 18.", ["am"], "when + present simple."],
    ["x", 3, "Your friend is waiting for your call.", "I'll call her as soon as I ___ (get) off the train.", ["get"], "as soon as + present simple."],
    ["d", 3, "Leaving the house.", [["Mum", "Lock the door when you ___ (go) out, and text me when you ___ (arrive)."]], [["go"], ["arrive", "get there"]], "Time clauses: present simple."],
    ["g", 4, "Once you ___ (sign) the form, you can start work.", ["have signed", "sign"], "once + present perfect (or simple) for a completed future action."],
    ["m", 4, "I won't lend you the money unless you ___ me back by Friday.", ["pay", "will pay", "paid", "are paying"], "unless + present simple."],
    ["e", 4, "[We'll go] [for a walk] [provided that] [it won't rain].", 3, ["it doesn't rain", "it does not rain"], "provided that + present simple."],
    ["j", 4, "By the time you read this, I will be in Australia.", true, [], "by the time + present simple."],
    ["t", 4, "Rewrite with “in case”.", "Take a map, because you might get lost.", "Take a map in case you ___ lost.", ["get"], "in case + present simple."],
    ["x", 4, "A message to a colleague.", "As soon as the report ___ (be) ready, I'll send it to you.", ["is"], "as soon as + present simple."],
    ["q", 4, "Join the ideas with “the moment”.", "I'll let you know – I / hear / anything", ["I'll let you know the moment I hear anything."], "the moment + present simple."]
  ]);
})(window.TenseDojo);
