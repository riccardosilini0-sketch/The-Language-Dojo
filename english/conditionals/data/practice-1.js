/* Conditionals — practice batteries.
   Formats: see english/basics/data/practice-1.js. Contractions and full forms are accepted automatically
   ('ll = will, 'd = would or had, won't = will not). */
const P = x => GL.batteries.push(x);
const T = (it, hint, acc, why) => [it, hint, acc, acc[0], why];

/* ---------- zero and first conditional ---------- */
P({ id: "zf-gap", lesson: "zero-first", type: "gap", belt: 2, instr: "Complete the first conditional sentences with the present simple or will + the verb in brackets.", items: [
  ["If it ___ (rain) tomorrow, we ___ (stay) at home.", [["rains"], ["'ll stay", "will stay"]], "if + present, [will] + verb."],
  ["If you ___ (not / hurry), you ___ (miss) the bus.", [["don't hurry", "do not hurry"], ["'ll miss", "will miss"]], "Negative present after if."],
  ["I ___ (call) you if I ___ (have) any problems.", [["'ll call", "will call"], ["have"]], "Main clause first: no comma."],
  ["If she ___ (get) the job, she ___ (move) to London.", [["gets"], ["'ll move", "will move"]], "if + present, will + verb."],
  ["What ___ you ___ (do) if the shop is closed?", [["will"], ["do"]], "Question: What [will] you do…?"],
  ["If we ___ (leave) now, we ___ (arrive) on time.", [["leave"], ["'ll arrive", "will arrive"]], "if + present, will + verb."],
  ["If you ___ (eat) all that cake, you ___ (feel) sick.", [["eat"], ["'ll feel", "will feel"]], "A warning: if + present, will."],
  ["They ___ (not / come) if it ___ (snow).", [["won't come", "will not come"], ["snows"]], "[won't] + verb, if + present."],
  ["If I ___ (see) Marco, I ___ (tell) him the news.", [["see"], ["'ll tell", "will tell"]], "if + present, will + verb."],
  ["When I ___ (get) home, I ___ (send) you the photos.", [["get"], ["'ll send", "will send"]], "when + present, will + verb."]
] });
P({ id: "zf-zero", lesson: "zero-first", type: "halves", belt: 2, instr: "Match the beginnings and the endings of these zero conditional sentences.",
  left: ["If you heat ice,", "If you mix blue and yellow,", "If plants don't get water,", "If I drink coffee in the evening,", "If you press this button,", "If my cat is hungry,", "If you don't use a password,", "If it's sunny on Sunday,"],
  right: ["the machine stops.", "it miaows all morning.", "it melts.", "anyone can read your messages.", "you get green.", "we usually go for a walk.", "I can't sleep.", "they die."],
  answers: ["c", "e", "h", "g", "a", "b", "d", "f"],
  why: ["A scientific fact.", "Colours: blue + yellow = green.", "A general truth.", "A personal habit.", "An instruction / a rule.", "A habit.", "A general truth.", "A habit."] });
P({ id: "zf-mc", lesson: "zero-first", type: "mc", belt: 2, items: [
  ["If it ___ tomorrow, we'll go to the beach.", ["is sunny", "will be sunny", "would be sunny"], 0, "After if: present simple."],
  ["If you heat water to 100°C, it ___.", ["boils", "will boil always", "would boil"], 0, "A fact: zero conditional."],
  ["I'll text you ___ I arrive at the station.", ["when", "if", "unless"], 0, "Sure to happen: [when]."],
  ["If you ___ me, I'll help you.", ["help", "will help", "helped"], 0, "After if: present simple."],
  ["If you see Laura, ___ her I'm sorry.", ["tell", "you tell", "will tell"], 0, "Imperative in the main clause."],
  ["If I finish early, I ___ come to the party.", ["can", "could", "would"], 0, "A real possibility: [can]."],
  ["She ___ angry if you're late again.", ["will be", "is being", "would have been"], 0, "Result in the future: [will be]."],
  ["If you don't water this plant, it ___.", ["dies", "died", "would die"], 0, "A general truth: present simple."],
  ["When the film ___, we'll have dinner.", ["finishes", "will finish", "finished"], 0, "After when (future): present simple."],
  ["What will you do if you ___ the exam?", ["don't pass", "won't pass", "didn't pass"], 0, "After if: present simple."]
] });
P({ id: "zf-errors", lesson: "zero-first", type: "correct", belt: 2, items: [
  ["If it will rain, we'll stay at home.", ["If it rains, we'll stay at home.", "If it rains, we will stay at home."], "After if: present simple."],
  ["When I will arrive, I'll call you.", ["When I arrive, I'll call you.", "When I arrive, I will call you."], "After when (future): present simple."],
  ["If you will help me, I help you.", ["If you help me, I'll help you.", "If you help me, I will help you."], "if + present, will + verb."],
  ["If you study, you pass the test tomorrow.", ["If you study, you'll pass the test tomorrow.", "If you study, you will pass the test tomorrow."], "Future result: [will]."],
  ["I'll be angry if you will lie to me.", ["I'll be angry if you lie to me.", "I will be angry if you lie to me."], "After if: present simple."],
  ["If she won't come, we'll go without her.", ["If she doesn't come, we'll go without her.", "If she does not come, we'll go without her."], "Negative after if: [doesn't come]."],
  ["As soon as I will know, I'll tell you.", ["As soon as I know, I'll tell you.", "As soon as I know, I will tell you."], "After as soon as: present simple."],
  ["If you mix red and white, you will get always pink.", ["If you mix red and white, you get pink.", "If you mix red and white, you always get pink."], "A fact: zero conditional."],
  ["If I'll have time, I'll call you.", ["If I have time, I'll call you.", "If I have time, I will call you."], "After if: present simple."],
  ["You will feel better if you will rest.", ["You'll feel better if you rest.", "You will feel better if you rest."], "After if: present simple."]
] });
P({ id: "zf-check", lesson: "zero-first", type: "mc", belt: 2, title: "Zero and first conditional – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["If you ___ late again, the teacher will be angry.", ["are", "will be", "were"], 0, "After if: present simple."],
  ["If you freeze water, it ___ ice.", ["becomes", "will became", "became"], 0, "A fact: present simple."],
  ["I'll lend you my bike if you ___ careful.", ["are", "will be", "be"], 0, "After if: present simple."],
  ["If we miss the train, we ___ the next one.", ["'ll take", "take", "took"], 0, "A future result: [will]."],
  ["___ I get my results, I'll let you know.", ["When", "Unless", "Will"], 0, "Sure to happen: [When]."],
  ["If he doesn't call, ___ worry.", ["don't", "you don't", "won't"], 0, "Imperative: [don't] worry."],
  ["If it's cold tomorrow, I ___ wear my new coat.", ["'ll", "'d", "have"], 0, "First conditional: [will]."],
  ["What ___ if you lose your phone?", ["will you do", "do you will", "you will do"], 0, "Question: [will you do]."],
  ["If you heat butter, it ___.", ["melts", "will melt always", "melted"], 0, "A fact: present simple."],
  ["If I ___ the answer, I'll tell you.", ["find", "will find", "found"], 0, "After if: present simple."]
] });

/* ---------- second conditional ---------- */
P({ id: "sc-gap", lesson: "second", type: "gap", belt: 3, instr: "Complete the second conditional sentences with the past simple or would + the verb in brackets.", items: [
  ["If I ___ (have) more money, I ___ (buy) a new phone.", [["had"], ["'d buy", "would buy"]], "if + past simple, [would] + verb."],
  ["If she ___ (live) nearer, we ___ (see) her more often.", [["lived"], ["'d see", "would see"]], "if + past simple, would + verb."],
  ["What ___ you ___ (do) if you found a wallet in the street?", [["would"], ["do"]], "Question: What [would] you do…?"],
  ["If I ___ (be) you, I ___ (not / say) anything.", [["were", "was"], ["wouldn't say", "would not say"]], "Advice: If I [were] you, I [wouldn't]…"],
  ["If we ___ (not / have) a test tomorrow, we ___ (go) out tonight.", [["didn't have", "did not have"], ["'d go", "would go"]], "Imaginary: we have got a test."],
  ["He ___ (be) happier if he ___ (do) more sport.", [["'d be", "would be"], ["did"]], "Main clause first: would + verb, if + past."],
  ["If I ___ (know) the answer, I ___ (tell) you.", [["knew"], ["'d tell", "would tell"]], "if + past simple, would + verb."],
  ["If it ___ (not / be) so cold, we ___ (swim).", [["wasn't", "weren't", "was not", "were not"], ["'d swim", "would swim", "could swim"]], "Imaginary present."],
  ["I ___ (travel) around the world if I ___ (win) the lottery.", [["'d travel", "would travel"], ["won"]], "Unlikely future: would + verb, if + past."],
  ["If you ___ (ask) him, he ___ (help) you.", [["asked"], ["'d help", "would help", "might help"]], "if + past simple, would / might."]
] });
P({ id: "sc-rewrite", lesson: "second", type: "rewrite", belt: 3, instr: "Read the situation and write a second conditional sentence. Start as shown.", items: [
  ["I haven't got a car, so I can't drive you home.", ["If I had a car, I could drive you home.", "If I had a car, I would drive you home."], "Imaginary present: if + past, could / would.", "If I"],
  ["I don't know her address, so I can't send her the invitation.", ["If I knew her address, I could send her the invitation.", "If I knew her address, I would send her the invitation."], "if + past simple.", "If I"],
  ["He doesn't study, so he gets bad marks.", ["If he studied, he wouldn't get bad marks.", "If he studied, he would get good marks.", "If he studied, he would get better marks."], "if + past simple, would.", "If he"],
  ["We live in a small flat, so we can't have a dog.", ["If we didn't live in a small flat, we could have a dog.", "If we lived in a bigger flat, we could have a dog.", "If we lived in a big flat, we could have a dog.", "If we didn't live in a small flat, we would have a dog."], "Imaginary present.", "If we"],
  ["It's raining, so we can't play tennis.", ["If it wasn't raining, we could play tennis.", "If it weren't raining, we could play tennis.", "If it wasn't raining, we would play tennis.", "If it weren't raining, we would play tennis."], "if + past continuous, could.", "If it"],
  ["My advice: talk to your teacher.", ["If I were you, I would talk to your teacher.", "If I were you, I'd talk to your teacher.", "If I was you, I'd talk to your teacher.", "If I were you, I would talk to my teacher."], "Advice: [If I were you], I'd…", "If I were you,"],
  ["She's very shy, so she doesn't speak in class.", ["If she wasn't so shy, she would speak in class.", "If she weren't so shy, she would speak in class.", "If she wasn't so shy, she'd speak in class.", "If she weren't so shy, she'd speak in class."], "Imaginary present.", "If she"],
  ["I don't have time, so I don't read much.", ["If I had time, I would read more.", "If I had time, I'd read more.", "If I had more time, I would read more.", "If I had more time, I'd read more."], "if + past simple, would.", "If I"]
] });
P({ id: "sc-mc", lesson: "second", type: "mc", belt: 3, items: [
  ["If I ___ rich, I'd buy a house by the sea.", ["were", "am", "would be"], 0, "Second conditional: [were]."],
  ["If you could live anywhere, where ___ you live?", ["would", "will", "did"], 0, "[would]."],
  ["I'd go to the concert if the tickets ___ so expensive.", ["weren't", "aren't", "wouldn't be"], 0, "After if: past simple."],
  ["If I ___ you, I'd see a doctor.", ["were", "would be", "am"], 0, "Advice: If I [were] you."],
  ["If we had a garden, we ___ have a barbecue.", ["could", "can", "will"], 0, "Possibility in an imaginary situation: [could]."],
  ["If I have time tomorrow, I ___ you. (I think I will have time)", ["'ll help", "'d help", "helped"], 0, "A real possibility: first conditional."],
  ["If I had wings, I ___ fly to school!", ["would", "will", "had"], 0, "Imaginary: [would]."],
  ["He wouldn't be so tired if he ___ to bed earlier.", ["went", "goes", "would go"], 0, "After if: past simple."],
  ["What would you say if he ___ you to marry him?", ["asked", "asks", "would ask"], 0, "After if: past simple."],
  ["If she spoke Japanese, she ___ get that job.", ["might", "will", "may have"], 0, "Possibility: [might]."]
] });
P({ id: "sc-errors", lesson: "second", type: "correct", belt: 3, items: [
  ["If I would have more time, I would read more.", ["If I had more time, I would read more.", "If I had more time, I'd read more."], "After if: past simple."],
  ["If I am you, I would go.", ["If I were you, I would go.", "If I were you, I'd go.", "If I was you, I'd go."], "[If I were you]."],
  ["If I had a dog, I will walk it every day.", ["If I had a dog, I would walk it every day.", "If I had a dog, I'd walk it every day."], "Second conditional: [would]."],
  ["If I knew the answer, I tell you.", ["If I knew the answer, I would tell you.", "If I knew the answer, I'd tell you."], "Main clause: [would]."],
  ["If I won the lottery, I would to buy a house.", ["If I won the lottery, I would buy a house.", "If I won the lottery, I'd buy a house."], "No to after would."],
  ["What you would do if you saw a ghost?", ["What would you do if you saw a ghost?"], "Question: [would you] do."],
  ["If she lives here, she would be happier.", ["If she lived here, she would be happier.", "If she lived here, she'd be happier."], "Imaginary: past simple."],
  ["I would go out if it doesn't rain.", ["I would go out if it didn't rain.", "I'd go out if it didn't rain.", "I'll go out if it doesn't rain."], "Second conditional: past simple after if (or first conditional: will)."]
] });
P({ id: "sc-check", lesson: "second", type: "mc", belt: 3, title: "Second conditional – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["If I ___ the president, I'd make school free for everyone.", ["were", "am", "will be"], 0, "[were]."],
  ["If you won a million euros, what ___ you buy?", ["would", "will", "do"], 0, "[would]."],
  ["If I ___ his number, I'd call him.", ["knew", "know", "would know"], 0, "After if: past simple."],
  ["I'd help you if I ___ so busy.", ["weren't", "am not", "won't be"], 0, "After if: past simple."],
  ["If I were you, I ___ buy that jacket. It's too expensive.", ["wouldn't", "won't", "didn't"], 0, "Advice: I [wouldn't]."],
  ["If we lived in the city, we ___ walk to school.", ["could", "can", "will"], 0, "Possibility: [could]."],
  ["If she ___ harder, she'd get better marks.", ["worked", "works", "would work"], 0, "After if: past simple."],
  ["If it doesn't rain tomorrow, we ___ have a picnic.", ["'ll", "'d", "would have"], 0, "A real possibility: first conditional."],
  ["I wouldn't do that if I ___ you.", ["were", "am", "would be"], 0, "[if I were you]."],
  ["Where would you live if you ___ choose?", ["could", "can", "will"], 0, "After if: [could]."]
] });

/* ---------- third conditional ---------- */
P({ id: "tc-gap", lesson: "third", type: "gap", belt: 4, instr: "Complete the third conditional sentences with the past perfect or would have + the past participle of the verbs in brackets.", items: [
  ["If I ___ (study) more, I ___ (pass) the exam.", [["had studied", "'d studied"], ["would have passed", "'d have passed"]], "if + past perfect, would have + participle."],
  ["If we ___ (leave) earlier, we ___ (not / miss) the train.", [["had left", "'d left"], ["wouldn't have missed", "would not have missed"]], "Negative: wouldn't have."],
  ["She ___ (come) to the party if you ___ (invite) her.", [["would have come", "'d have come"], ["had invited", "'d invited"]], "Main clause first."],
  ["If it ___ (not / rain), we ___ (play) the final.", [["hadn't rained", "had not rained"], ["would have played", "'d have played"]], "if + negative past perfect."],
  ["If you ___ (tell) me, I ___ (help) you.", [["had told", "'d told"], ["would have helped", "'d have helped", "could have helped"]], "Regret: would / could have."],
  ["If he ___ (not / drive) so fast, he ___ (not / have) an accident.", [["hadn't driven", "had not driven"], ["wouldn't have had", "would not have had"]], "Two negatives."],
  ["What ___ you ___ (do) if you had lost your passport?", [["would"], ["have done"]], "Question: would you have done."],
  ["If I ___ (know) it was your birthday, I ___ (buy) you a present.", [["had known", "'d known"], ["would have bought", "'d have bought"]], "if + past perfect, would have + participle."]
] });
P({ id: "tc-rewrite", lesson: "third", type: "rewrite", belt: 4, instr: "Read the situation and write a third conditional sentence. Start as shown.", items: [
  ["I didn't set the alarm, so I was late.", ["If I had set the alarm, I wouldn't have been late.", "If I'd set the alarm, I wouldn't have been late.", "If I had set the alarm, I would not have been late."], "if + past perfect, wouldn't have + participle.", "If I"],
  ["She didn't take an umbrella, so she got wet.", ["If she had taken an umbrella, she wouldn't have got wet.", "If she'd taken an umbrella, she wouldn't have got wet.", "If she had taken an umbrella, she wouldn't have gotten wet."], "if + past perfect.", "If she"],
  ["We didn't book a table, so we couldn't eat there.", ["If we had booked a table, we could have eaten there.", "If we'd booked a table, we could have eaten there.", "If we had booked a table, we would have eaten there."], "could have + participle.", "If we"],
  ["He didn't revise, so he failed.", ["If he had revised, he wouldn't have failed.", "If he'd revised, he wouldn't have failed.", "If he had revised, he would have passed."], "if + past perfect.", "If he"],
  ["I didn't know you were in hospital, so I didn't visit you.", ["If I had known you were in hospital, I would have visited you.", "If I'd known you were in hospital, I'd have visited you.", "If I had known you were in hospital, I'd have visited you."], "if + past perfect, would have + participle.", "If I"],
  ["They missed the bus because they left late.", ["If they hadn't left late, they wouldn't have missed the bus.", "If they had left earlier, they wouldn't have missed the bus.", "If they had left on time, they wouldn't have missed the bus."], "if + past perfect.", "If they"],
  ["You didn't call me, so I didn't come.", ["If you had called me, I would have come.", "If you'd called me, I'd have come.", "If you had called me, I'd have come."], "if + past perfect.", "If you"],
  ["The weather was bad, so the plane didn't leave.", ["If the weather hadn't been bad, the plane would have left.", "If the weather had been good, the plane would have left.", "If the weather had been better, the plane would have left."], "if + past perfect.", "If the weather"]
] });
P({ id: "tc-errors", lesson: "third", type: "correct", belt: 4, items: [
  ["If I would have known, I would have come.", ["If I had known, I would have come.", "If I'd known, I would have come.", "If I'd known, I'd have come."], "After if: past perfect."],
  ["If you had studied, you would pass.", ["If you had studied, you would have passed."], "Past result: would have + participle."],
  ["If I had saw him, I would have said hello.", ["If I had seen him, I would have said hello."], "Past participle: [seen]."],
  ["If she had come, she would had enjoyed it.", ["If she had come, she would have enjoyed it."], "[would have]."],
  ["If we left earlier, we wouldn't have missed the bus.", ["If we had left earlier, we wouldn't have missed the bus.", "If we'd left earlier, we wouldn't have missed the bus."], "A different past: [had left]."],
  ["I would have helped you if you asked me.", ["I would have helped you if you had asked me.", "I would have helped you if you'd asked me."], "if + past perfect."],
  ["If it hadn't rained, we would have went to the beach.", ["If it hadn't rained, we would have gone to the beach."], "Past participle: [gone]."],
  ["If he had driven carefully, he wouldn't crash.", ["If he had driven carefully, he wouldn't have crashed."], "Past result: wouldn't have crashed."]
] });
P({ id: "tc-check", lesson: "third", type: "mc", belt: 4, title: "Third conditional – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["If I ___ about the strike, I would have taken the car.", ["had known", "knew", "would have known"], 0, "After if: past perfect."],
  ["If you had asked me, I ___ you.", ["would have helped", "would help", "had helped"], 0, "Past result: would have + participle."],
  ["We ___ the match if our best player hadn't been injured.", ["would have won", "would win", "will have won"], 0, "Past result."],
  ["If she ___ her phone, she wouldn't have got lost.", ["hadn't lost", "didn't lose", "wouldn't have lost"], 0, "After if: past perfect."],
  ["If I'd known you were coming, I ___ a cake.", ["'d have made", "'d made", "'ll have made"], 0, "Main clause: [would have] made."],
  ["If they had taken a taxi, they ___ arrived on time.", ["might have", "might", "will have"], 0, "[might have] + participle."],
  ["If I'd left on time, I ___ missed the beginning of the film.", ["wouldn't have", "hadn't", "won't have"], 0, "[wouldn't have] + participle."],
  ["If you ___ me the truth, I wouldn't have been so angry.", ["had told", "told", "would tell"], 0, "After if: past perfect."],
  ["What would you have done if you ___ in my situation?", ["had been", "were", "would be"], 0, "A past situation: past perfect."],
  ["If he had been more careful, he ___ his leg.", ["wouldn't have broken", "wouldn't break", "didn't break"], 0, "Past result."]
] });

/* ---------- mixed conditionals ---------- */
P({ id: "mx-mc", lesson: "mixed", type: "mc", belt: 4, items: [
  ["If I had slept more last night, I ___ so tired now.", ["wouldn't be", "wouldn't have been", "won't be"], 0, "Past condition, present result: [wouldn't be]."],
  ["If she ___ the job in Paris, she would live in France now.", ["had accepted", "accepted", "would accept"], 0, "Past condition: past perfect."],
  ["If I spoke German, I ___ the tour guide yesterday.", ["would have understood", "would understand", "understood"], 0, "Present fact, past result: [would have understood]."],
  ["If he weren't so lazy, he ___ the exam last week.", ["would have passed", "would pass", "had passed"], 0, "Present fact, past result."],
  ["If we had bought the house, we ___ in Rome now.", ["would live", "would have lived", "lived"], 0, "Past condition, present result."],
  ["I'm allergic to cats. If I ___ allergic, I would have adopted that kitten last week.", ["weren't", "won't be", "wouldn't be"], 0, "Present fact (I am allergic): past simple after if."],
  ["If you had listened to me, we ___ lost now.", ["wouldn't be", "wouldn't have been", "aren't"], 0, "Present result (now)."],
  ["If she weren't afraid of flying, she ___ to New York with us last summer.", ["would have come", "would come", "came"], 0, "Past result."]
] });
P({ id: "mx-gap", lesson: "mixed", type: "gap", belt: 4, instr: "Complete the mixed conditional sentences with the correct form of the verbs in brackets.", items: [
  ["If I ___ (not / miss) the bus, I would be at school now.", [["hadn't missed", "had not missed"]], "Past condition: past perfect."],
  ["If she had studied medicine, she ___ (be) a doctor now.", [["would be", "'d be"]], "Present result: would + verb."],
  ["If I ___ (be) taller, I would have joined the basketball team.", [["were", "was"]], "Present fact: past simple."],
  ["If he spoke English, he ___ (get) the job last month.", [["would have got", "would have gotten", "'d have got"]], "Past result: would have + participle."],
  ["If we ___ (win) the lottery last year, we wouldn't work now.", [["had won", "'d won"]], "Past condition: past perfect."],
  ["If you had told me the truth, I ___ (not / be) so angry now.", [["wouldn't be", "would not be"]], "Present result."],
  ["If I ___ (not / be) so shy, I would have spoken to her.", [["weren't", "wasn't", "were not", "was not"]], "Present fact: past simple."],
  ["If they had left on time, they ___ (be) here by now.", [["would be", "'d be"]], "Present result (by now)."]
] });
P({ id: "mx-check", lesson: "mixed", type: "mc", belt: 4, title: "Mixed conditionals – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["If I had saved more money, I ___ a car now.", ["would have", "would have had", "had"], 0, "Present result: would have (possession now)."],
  ["If I weren't so busy, I ___ you yesterday.", ["would have called", "would call", "called"], 0, "Past result."],
  ["If she ___ that course, she'd be a pilot today.", ["had finished", "finished", "would finish"], 0, "Past condition."],
  ["If you had eaten breakfast, you ___ hungry now.", ["wouldn't be", "wouldn't have been", "won't be"], 0, "Present result."],
  ["If he were more careful, he ___ his keys again.", ["wouldn't have lost", "wouldn't lose", "hadn't lost"], 0, "Present fact, past result."],
  ["If we hadn't moved, I ___ all my old friends now.", ["would still see", "would have still seen", "still see"], 0, "Present result."],
  ["If I ___ in Spain, I would have learnt Spanish as a child.", ["had grown up", "grew up", "would grow up"], 0, "Past condition: past perfect."],
  ["If I didn't love you, I ___ all this way to see you.", ["wouldn't have come", "wouldn't come", "didn't come"], 0, "Present fact, past result."]
] });

/* ---------- unless, in case, I wish ---------- */
P({ id: "uw-mc", lesson: "unless-wish", type: "mc", belt: 4, items: [
  ["___ you hurry, you'll miss the train.", ["Unless", "In case", "If"], 0, "If you don't hurry = [Unless] you hurry."],
  ["Take a jacket ___ it gets cold later.", ["in case", "unless", "if not"], 0, "A precaution: [in case]."],
  ["You can borrow my car ___ you drive carefully.", ["as long as", "unless", "in case"], 0, "Only if: [as long as]."],
  ["I wish I ___ more free time.", ["had", "have", "would have"], 0, "A wish about now: past simple."],
  ["I wish I ___ that. I'm sorry.", ["hadn't said", "didn't say", "wouldn't say"], 0, "A regret: past perfect."],
  ["I wish you ___ making that noise!", ["would stop", "stopped", "had stopped"], 0, "Annoyance: wish + [would]."],
  ["If only I ___ the answer!", ["knew", "know", "would know"], 0, "A wish about now: past simple."],
  ["I wish I ___ taller.", ["were", "would be", "am"], 0, "Your own situation: [were]."],
  ["I won't come ___ you invite Laura too.", ["unless", "in case", "as long as not"], 0, "Only if you invite her: [unless]."],
  ["If only we ___ the earlier train! We'd be home now.", ["had taken", "took", "would take"], 0, "A regret: past perfect."]
] });
P({ id: "uw-rewrite", lesson: "unless-wish", type: "rewrite", belt: 4, instr: "Rewrite the sentences using the words given at the start.", items: [
  ["If you don't apologise, she won't talk to you.", ["Unless you apologise, she won't talk to you.", "Unless you apologise, she will not talk to you."], "If … not = [unless].", "Unless"],
  ["I haven't got a bike. I'd like one.", ["I wish I had a bike."], "A wish about now: past simple.", "I wish"],
  ["I didn't go to the concert. I regret it.", ["I wish I had gone to the concert.", "I wish I'd gone to the concert."], "A regret: past perfect.", "I wish"],
  ["My brother always leaves his socks on the floor. It's annoying.", ["I wish my brother wouldn't leave his socks on the floor.", "I wish my brother would stop leaving his socks on the floor."], "Annoyance: wish + would.", "I wish"],
  ["I can't speak Chinese. I'd like to.", ["I wish I could speak Chinese."], "A wish about an ability: could.", "I wish"],
  ["Take some money. You might need it.", ["Take some money in case you need it."], "A precaution: [in case].", "Take some money"],
  ["You can go out, but only if you're back by ten.", ["You can go out as long as you're back by ten.", "You can go out provided you're back by ten.", "You can go out provided that you're back by ten.", "You can go out as long as you are back by ten."], "Only if: [as long as / provided].", "You can go out"],
  ["I ate too much. I regret it now.", ["I wish I hadn't eaten so much.", "I wish I hadn't eaten too much.", "If only I hadn't eaten so much."], "A regret: past perfect.", "I wish"]
] });
P({ id: "uw-errors", lesson: "unless-wish", type: "correct", belt: 4, items: [
  ["Unless you don't hurry, you'll be late.", ["Unless you hurry, you'll be late.", "If you don't hurry, you'll be late."], "Unless = if … not."],
  ["I wish I have a dog.", ["I wish I had a dog."], "A wish about now: past simple."],
  ["I wish I didn't say that yesterday.", ["I wish I hadn't said that yesterday."], "A regret: past perfect."],
  ["I wish I would be taller.", ["I wish I were taller.", "I wish I was taller."], "Your own situation: were / was."],
  ["In case it will rain, take an umbrella.", ["In case it rains, take an umbrella.", "Take an umbrella in case it rains."], "After in case: present simple."],
  ["If only I can drive!", ["If only I could drive!"], "A wish: [could]."],
  ["I wish you stop talking during the film.", ["I wish you would stop talking during the film."], "Annoyance: wish + [would]."],
  ["You can stay as long as you will be quiet.", ["You can stay as long as you are quiet.", "You can stay as long as you're quiet."], "After as long as: present simple."]
] });
P({ id: "uw-check", lesson: "unless-wish", type: "mc", belt: 4, title: "Unless, in case, I wish – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["We'll go for a walk ___ it rains.", ["unless", "in case", "as long as"], 0, "If it doesn't rain: [unless]."],
  ["Write down the address ___ you forget it.", ["in case", "unless", "if"], 0, "A precaution: [in case]."],
  ["I wish I ___ a better singer.", ["were", "am", "would be"], 0, "Your own situation: [were]."],
  ["I wish I ___ to the doctor earlier. Now it's worse.", ["had gone", "went", "would go"], 0, "A regret: past perfect."],
  ["I wish my neighbours ___ so much noise.", ["wouldn't make", "don't make", "hadn't made"], 0, "Annoyance: [wouldn't]."],
  ["You can have a party ___ you clean up afterwards.", ["provided", "unless", "in case"], 0, "Only if: [provided]."],
  ["If only I ___ fly!", ["could", "can", "would"], 0, "A wish about an ability: [could]."],
  ["I'll lend you the money ___ you pay me back next week.", ["as long as", "unless", "in case"], 0, "Only if: [as long as]."],
  ["I wish it ___ raining. I want to go out.", ["would stop", "stopped", "had stopped"], 0, "A wish for a change: [would stop]."],
  ["___ you tell me the truth, I can't help you.", ["Unless", "In case", "Provided"], 0, "If you don't tell me: [Unless]."]
] });

/* ---------- review ---------- */
P({ id: "review-text", lesson: "review", type: "text", belt: 3, title: "The day everything went wrong", instr: "Read the whole text first, then complete the gaps with the correct form of the verbs in brackets.",
  parts: [
    ["#", "The day everything went wrong"],
    ["", "Last Monday was a disaster. I forgot to set my alarm, and if I {1} (set) it, I wouldn't have woken up at 8.15. I ran to the bus stop, but the bus had just left. If I {2} (leave) five minutes earlier, I would have caught it."],
    ["", "I arrived at school during the maths test. My teacher said, ‘If you {3} (arrive) late again, I {4} (call) your parents.’ I wish I {5} (be) a more organised person!"],
    ["", "Now I have a new rule: I always prepare my bag the evening before, in case I {6} (be) late in the morning. My mum says that if I {7} (go) to bed earlier, I {8} (not / be) so tired in the morning. She's probably right. If I {9} (be) you, she says, I {10} (put) the phone in the kitchen at night."]
  ],
  gaps: [
    [["had set", "'d set"], "Third conditional: if + past perfect."],
    [["had left", "'d left"], "Third conditional: if + past perfect."],
    [["arrive"], "First conditional: if + present simple."],
    [["'ll call", "will call"], "First conditional: will + verb."],
    [["were", "was"], "A wish about now: past simple."],
    [["am", "'m"], "After in case: present simple."],
    [["went"], "Second conditional: if + past simple."],
    [["wouldn't be", "would not be"], "Second conditional: wouldn't + verb."],
    [["were", "was"], "Advice: If I [were] you."],
    [["would put", "'d put"], "Advice: I'd + verb."]
  ] });
P({ id: "review-test", lesson: "review", type: "mc", belt: 4, test: true, title: "Conditionals – Final test",
  instr: "20 questions, 5 points each: 100 points in all. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["If you heat chocolate, it ___.", ["melts", "will melt always", "would melt"], 0, "Zero conditional."],
  ["If it ___ tomorrow, we'll stay in.", ["rains", "will rain", "rained"], 0, "First conditional: present after if."],
  ["I'll call you when I ___ home.", ["get", "will get", "got"], 0, "After when: present simple."],
  ["If you see Tom, ___ him to call me.", ["tell", "you tell", "told"], 0, "Imperative."],
  ["If I ___ more money, I'd buy a new laptop.", ["had", "have", "would have"], 0, "Second conditional."],
  ["If I were you, I ___ that.", ["wouldn't do", "won't do", "don't do"], 0, "Advice."],
  ["What would you do if you ___ a famous singer?", ["met", "meet", "would meet"], 0, "Second conditional."],
  ["If we lived in London, we ___ go to the theatre more often.", ["could", "can", "will"], 0, "Possibility: could."],
  ["If I ___ harder, I would have passed.", ["had studied", "studied", "would study"], 0, "Third conditional."],
  ["If you'd told me, I ___ you.", ["would have helped", "would help", "had helped"], 0, "Third conditional."],
  ["If she hadn't missed the plane, she ___ here now.", ["would be", "would have been", "is"], 0, "Mixed: present result."],
  ["If I weren't so shy, I ___ to her yesterday.", ["would have spoken", "would speak", "spoke"], 0, "Mixed: past result."],
  ["___ you leave now, you'll be late.", ["Unless", "In case", "If"], 0, "If you don't leave now."],
  ["Take your phone ___ you get lost.", ["in case", "unless", "as long as"], 0, "A precaution."],
  ["You can borrow it ___ you give it back.", ["as long as", "unless", "in case"], 0, "Only if."],
  ["I wish I ___ to the party. Everyone says it was great.", ["had gone", "went", "would go"], 0, "A regret."],
  ["I wish I ___ play the piano.", ["could", "can", "would"], 0, "A wish about an ability."],
  ["I wish you ___ interrupt me all the time!", ["wouldn't", "don't", "hadn't"], 0, "Annoyance."],
  ["If only I ___ his name! I can't remember it.", ["knew", "know", "would know"], 0, "A wish about now."],
  ["If I had known, I ___.", ["would have come", "would come", "came"], 0, "Third conditional."]
] });
