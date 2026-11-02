/* Verb Tenses — more variety for Contrasts, Mixed Groups and Challenges (original sentences).
   Every topic gets error correction, context gaps, transformations, translation, choose the tense,
   sentences from prompts, word order, right or wrong, dialogues and matching halves.
   Format reference: data/engine.js. Belt = CEFR level (1 A1 … 6 C2). */
(function (D) {
  "use strict";
  const T = "Rewrite the sentence using the word in brackets. Keep the meaning.";

  /* ================= CONTRASTS ================= */
  D.extend("ps-vs-pc", [
    ["e", 2, "[Look!] [It snows] [outside] [– let’s go out!]", 1, ["It is snowing", "It's snowing"], "‘Look!’ shows the action is happening now: present continuous."],
    ["e", 3, "[I] [am not understanding] [what] [you mean.]", 1, ["do not understand", "don't understand"], "Understand is a state verb: present simple."],
    ["x", 2, "It’s 8 p.m. Dad is in the kitchen.", "He ___ (cook) dinner for all of us.", ["is cooking"], "An action in progress at this moment."],
    ["x", 3, "Marco is a nurse, but this month he’s on holiday in Spain.", "He ___ (work) in a hospital in Milan.", ["works"], "His job is a permanent situation: present simple."],
    ["d", 2, "Translate: “Di solito vado a scuola a piedi, ma oggi prendo l’autobus.”", [["", "I usually ___ (walk) to school, but today I ___ (take) the bus."]], [["walk"], ["am taking", "'m taking"]], "Habit → present simple; today, a temporary change → present continuous."],
    ["k", 2, "Shh! The baby ___ .", ["Present continuous (is sleeping)", "Present simple (sleeps)", "Present perfect (has slept)"], "‘Shh!’ = right now: present continuous."],
    ["q", 3, "Write the sentence.", "what / you / think / about? You look worried.", ["What are you thinking about?"], "Think = an active process happening now → continuous."],
    ["o", 2, "She doesn't usually wear glasses.", [], "Present simple negative with a frequency adverb: doesn't + usually + base form."],
    ["j", 3, "I’m seeing what you mean now.", false, ["I see what you mean now."], "See meaning ‘understand’ is a state verb: present simple."],
    ["j", 4, "We’re having a great time here in Rome.", true, [], "Have meaning ‘experience’ is an action, so the continuous is correct."],
    ["d", 2, "On the phone.", [["Mum", "What ___ (you / do)? It’s very noisy."], ["Tom", "I’m at the station. I ___ (wait) for the train. It usually ___ (arrive) at six."]], [["are you doing"], ["am waiting", "'m waiting"], ["arrives"]], "Now → continuous; a timetable or habit → simple."],
    ["h", 3, "Match the beginnings and endings.", [["The sun rises", "in the east."], ["Look – the sun is rising", "over the hills!"], ["I’m living with friends", "until I find my own flat."], ["My parents live", "in the same house they bought in 1990."]], "Facts and permanent situations → simple; now and temporary → continuous."]
  ]);

  D.extend("pps-vs-ppc", [
    ["e", 3, "[I] [have been reading] [three books] [this week.]", 1, ["have read", "'ve read"], "A number of completed things (three books) → present perfect simple."],
    ["e", 4, "[She’s] [known] [him] [since they’ve been children.]", 3, ["since they were children"], "After since we use a past time: since they were children."],
    ["x", 3, "Your friend’s eyes are red and there are tissues everywhere.", "___ (you / cry)?", ["Have you been crying"], "A recent activity with visible results → present perfect continuous."],
    ["x", 4, "Lucy finished the report an hour ago.", "She ___ (write) twenty pages!", ["has written", "'s written"], "A completed result with a quantity → present perfect simple."],
    ["t", 4, T + " (BEEN)", "I started waiting for the bus forty minutes ago.", "I ___ for the bus for forty minutes.", ["have been waiting", "'ve been waiting"], "Duration of an activity up to now: present perfect continuous + for."],
    ["i", 3, "Studio inglese da tre anni.", "I ___ English for three years.", ["have been studying", "'ve been studying", "have studied", "'ve studied"], "Italian uses the present (studio da); English uses the present perfect (usually continuous)."],
    ["k", 4, "I ___ my keys. Can you help me look for them?", ["Present perfect simple (have lost)", "Present perfect continuous (have been losing)", "Past continuous (was losing)"], "Lose is a single completed action with a present result: simple."],
    ["q", 4, "Write a question.", "how long / you / learn / to play the piano?", ["How long have you been learning to play the piano?"], "How long + present perfect continuous for an ongoing activity."],
    ["j", 4, "I’ve been knowing her for ten years.", false, ["I've known her for ten years.", "I have known her for ten years."], "Know is a state verb: present perfect simple, not continuous."],
    ["j", 5, "The kids have been painting the fence all morning, but they haven’t finished yet.", true, [], "Continuous: the activity, not the result, is the focus."],
    ["d", 4, "After a long day.", [["Sam", "You look exhausted!"], ["Ella", "I am. I ___ (clean) the house since eight, and I ___ (only / do) the kitchen so far."]], [["have been cleaning", "'ve been cleaning"], ["have only done", "'ve only done"]], "Activity with duration → continuous; how much is completed → simple."],
    ["h", 4, "Match the beginnings and endings.", [["I’ve been running,", "so I’m all sweaty."], ["I’ve run five kilometres", "and now I’m going to stretch."], ["We’ve been arguing", "for hours and nobody wants to give in."], ["They’ve decided", "to sell the house."]], "Continuous = activity and its side effects; simple = completed result."]
  ]);

  D.extend("pst-vs-pcont", [
    ["e", 2, "[While I] [cooked,] [the phone] [rang.]", 1, ["was cooking"], "The longer background action takes the past continuous after while."],
    ["e", 3, "[When she] [was arriving] [home, she] [made a cup of tea.]", 1, ["arrived"], "Two actions in sequence: past simple for both."],
    ["x", 2, "Yesterday at 9 p.m. the power went off.", "We ___ (watch) a film when it happened.", ["were watching"], "An action in progress at a moment in the past."],
    ["d", 3, "Last summer we had a perfect holiday.", [["", "We ___ (swim) every day and ___ (eat) fresh fish every evening."]], [["swam"], ["ate"]], "Repeated completed actions in the past: past simple."],
    ["t", 3, T + " (WHILE)", "I was walking home. I saw an accident.", "I saw an accident ___ home.", ["while I was walking", "while walking"], "While + past continuous for the background action."],
    ["d", 2, "Translate: “Stavo dormendo quando hai chiamato.”", [["", "I ___ (sleep) when you ___ (call)."]], [["was sleeping"], ["called"]], "Background action → past continuous; the short interrupting action → past simple."],
    ["k", 3, "What ___ at this time yesterday?", ["Past continuous (were you doing)", "Past simple (did you do)", "Past perfect (had you done)"], "‘At this time yesterday’ = in progress at a past moment."],
    ["q", 3, "Write the sentence.", "the sun / shine / and the birds / sing / when we / wake up", ["The sun was shining and the birds were singing when we woke up."], "Description of the scene → past continuous; the event → past simple."],
    ["o", 2, "What were you doing at midnight?", [], "Question: Wh- + was/were + subject + -ing."],
    ["j", 3, "I was knowing the answer, but I didn’t say anything.", false, ["I knew the answer, but I didn't say anything."], "Know is a state verb: past simple."],
    ["d", 3, "A strange night.", [["Lily", "What happened last night?"], ["Max", "I ___ (read) in bed when I ___ (hear) a noise downstairs. I ___ (go) down, but it was only the cat."]], [["was reading"], ["heard"], ["went"]], "Background → continuous; events in sequence → simple."],
    ["h", 3, "Match the beginnings and endings.", [["While we were having lunch,", "it started to rain."], ["She fell off her bike", "while she was riding to school."], ["He opened the door,", "looked around and went in."], ["At 8 o’clock I was still", "getting ready for the party."]], "Interrupted actions, sequences and actions in progress."]
  ]);

  D.extend("pst-vs-ppf", [
    ["e", 3, "[When we] [got to the cinema,] [the film] [already started.]", 3, ["had already started"], "The film started before we arrived: past perfect."],
    ["e", 4, "[After she] [had finished] [her homework, she] [had gone to bed.]", 3, ["went to bed"], "Use the past perfect only for the earlier action; the later one is past simple."],
    ["x", 3, "Paolo was very nervous on the plane.", "He ___ (never / fly) before.", ["had never flown"], "Experience before a past moment: past perfect."],
    ["x", 4, "I couldn’t get into my flat.", "I ___ (leave) my keys at the office.", ["had left"], "The cause happened earlier than the past situation."],
    ["t", 4, T + " (BEFORE)", "I hadn’t seen the sea until I was twelve.", "I had ___ I was twelve.", ["never seen the sea before"], "Never … before + past perfect."],
    ["d", 3, "Translate: “Quando sono arrivato alla stazione, il treno era già partito.”", [["", "When I ___ (arrive) at the station, the train ___ (already / leave)."]], [["arrived"], ["had already left"]], "Earlier action → past perfect; later → past simple."],
    ["k", 4, "She was upset because someone ___ her bike.", ["Past perfect (had stolen)", "Past simple (stole)", "Present perfect (has stolen)"], "The theft happened before she was upset."],
    ["q", 4, "Write the sentence.", "by the time / the police / arrive, / the thieves / escape", ["By the time the police arrived, the thieves had escaped."], "By the time + past simple, past perfect for the earlier event."],
    ["o", 4, "I had never eaten sushi before that night.", [], "Past perfect: had + never + past participle."],
    ["j", 4, "When I phoned her, she had gone out.", true, [], "Correct: she left before the phone call."],
    ["d", 4, "A disappointing evening.", [["Kate", "How was the concert?"], ["Leo", "We missed it! By the time we ___ (find) a parking space, the band ___ (finish)."]], [["found"], ["had finished"]], "The band finished before we found a space."],
    ["h", 4, "Match the beginnings and endings.", [["She didn’t recognise him", "because he had grown a beard."], ["I had never seen snow", "until I moved to Canada."], ["When the guests arrived,", "we had just finished cooking."], ["He apologised", "because he had forgotten my birthday."]], "Past perfect gives the earlier cause or background."]
  ]);

  D.extend("pcont-vs-ppf", [
    ["e", 4, "[When I] [came in,] [they] [had watched TV,] [so I joined them.]", 3, ["were watching TV"], "An action in progress when I came in: past continuous."],
    ["x", 3, "I arrived at the meeting at ten.", "It was over: everyone ___ (go) home.", ["had gone"], "Completed before my arrival: past perfect."],
    ["x", 4, "When I arrived at the party, Anna was in the garden.", "She ___ (talk) to some friends.", ["was talking"], "In progress at that moment: past continuous."],
    ["t", 4, T + " (ALREADY)", "The plane left. Then we reached the gate.", "When we reached the gate, the plane ___ .", ["had already left"], "Earlier completed action → past perfect."],
    ["i", 4, "Quando sono arrivato, stavano già mangiando.", "When I arrived, they ___ .", ["were already eating"], "In progress → past continuous (they hadn’t finished)."],
    ["k", 4, "When I got home, my brother ___ dinner, so it was ready.", ["Past perfect (had cooked)", "Past continuous (was cooking)", "Present perfect (has cooked)"], "It was ready = the cooking was complete."],
    ["j", 4, "When we arrived, the match had finished, so we saw the second half.", false, ["When we arrived, the match was still going on, so we saw the second half.", "When we arrived, the match was going on, so we saw the second half."], "If we saw the second half, the match was still in progress."],
    ["d", 4, "At the airport.", [["Ben", "Did you see Jenny at the airport?"], ["Ali", "Yes. When I got there, she ___ (wait) at the gate, but her husband ___ (already / go) through security."]], [["was waiting"], ["had already gone"]], "In progress → past continuous; completed before → past perfect."],
    ["h", 4, "Match the beginnings and endings.", [["When I woke up, it was raining,", "so I took an umbrella."], ["When I woke up, it had rained,", "and the streets were wet."], ["When we got to the shop, it was closing,", "so we had to hurry."], ["When we got to the shop, it had closed,", "so we went home."]], "Continuous = still happening; perfect = already finished."]
  ]);

  D.extend("ppf-vs-ppfc", [
    ["e", 4, "[She was tired] [because she] [had been running] [ten kilometres.]", 2, ["had run"], "A completed distance (ten kilometres) → past perfect simple."],
    ["e", 5, "[They] [had been knowing] [each other] [for years before they married.]", 1, ["had known"], "Know is a state verb: past perfect simple."],
    ["x", 4, "His clothes were covered in paint.", "He ___ (paint) the kitchen all afternoon.", ["had been painting"], "An activity with visible effects → past perfect continuous."],
    ["x", 5, "By the end of the day, Laura was proud.", "She ___ (answer) over a hundred emails.", ["had answered"], "A completed quantity → past perfect simple."],
    ["t", 5, T + " (FOR)", "We started waiting at six. The bus finally came at seven.", "When the bus finally came, we ___ an hour.", ["had been waiting for"], "Duration up to a past moment: past perfect continuous + for."],
    ["i", 5, "Quando l’ho incontrato, viveva a Londra da cinque anni.", "When I met him, he ___ in London for five years.", ["had been living", "had lived"], "Duration up to a past moment: past perfect (continuous)."],
    ["k", 5, "The ground was wet. It ___ all night.", ["Past perfect continuous (had been raining)", "Past perfect simple (had rained)", "Past continuous (was raining)"], "A long activity explaining a past situation → continuous."],
    ["j", 5, "By the time I arrived, she had been writing three letters.", false, ["By the time I arrived, she had written three letters."], "A number of completed things → simple."],
    ["d", 5, "Explaining a bad mood.", [["Rob", "Why was Sara so angry yesterday?"], ["Kim", "She ___ (try) to fix her laptop for hours and she ___ (lose) all her photos."]], [["had been trying"], ["had lost"]], "Long activity → continuous; single result → simple."],
    ["h", 5, "Match the beginnings and endings.", [["Her eyes were red –", "she had been crying."], ["She had cried only once", "in her whole career."], ["We had been driving for hours", "when the car broke down."], ["We had driven 500 km", "by the time we stopped."]], "Continuous = duration and effects; simple = completed amount."]
  ]);

  D.extend("will-vs-going-to", [
    ["e", 2, "[Look at those clouds!] [It will rain] [any minute.]", 1, ["It is going to rain", "It's going to rain"], "A prediction based on present evidence → going to."],
    ["e", 3, "[The phone’s ringing.] [– OK,] [I’m going to answer] [it.]", 2, ["I will answer", "I'll answer"], "A decision made at the moment of speaking → will."],
    ["x", 2, "Mia has bought paint and brushes.", "She ___ (paint) her bedroom this weekend.", ["is going to paint", "'s going to paint"], "A plan already decided → going to."],
    ["x", 3, "Your bag looks heavy.", "Don’t worry, I ___ (carry) it for you.", ["will carry", "'ll carry"], "An offer made now → will."],
    ["i", 2, "Ho deciso: l’anno prossimo studierò il giapponese.", "I’ve decided: next year I ___ Japanese.", ["am going to study", "'m going to study"], "A decision taken before speaking → going to."],
    ["k", 3, "I think robots ___ most jobs in the future.", ["will (will do)", "going to (are going to do)", "Present continuous (are doing)"], "A personal opinion about the future (I think) → will."],
    ["q", 3, "Write a question.", "what / you / do / after university?", ["What are you going to do after university?"], "Asking about plans → going to."],
    ["o", 2, "We are going to visit our grandparents.", [], "Subject + be + going to + base form."],
    ["j", 3, "I promise I’m going to call you tonight.", false, ["I promise I'll call you tonight.", "I promise I will call you tonight."], "Promises → will."],
    ["d", 3, "In a café.", [["Waiter", "Are you ready to order?"], ["Nina", "Yes, I ___ (have) the soup, please."], ["Waiter", "And your friend?"], ["Nina", "She’s not hungry. She ___ (have) lunch with her parents later – they planned it last week."]], [["will have", "'ll have"], ["is going to have", "'s going to have"]], "Decision now → will; arrangement/plan → going to."],
    ["h", 3, "Match the beginnings and endings.", [["I’m cold.", "– I’ll close the window."], ["We’re going to move house:", "we’ve already found a buyer."], ["Watch out!", "You’re going to fall!"], ["Don’t worry about the exam,", "I’m sure you’ll pass."]], "Will: decisions now, opinions; going to: plans, evidence."]
  ]);

  D.extend("will-vs-pcont-future", [
    ["e", 3, "[I’m sorry, I can’t come.] [I will meet] [my cousin] [at six tomorrow.]", 1, ["am meeting", "'m meeting"], "A fixed arrangement with time and person → present continuous."],
    ["x", 3, "Lara looks at her diary.", "She ___ (fly) to Madrid on Friday morning.", ["is flying", "'s flying"], "A personal arrangement (tickets booked) → present continuous."],
    ["i", 3, "Domani sera ceno con Marta: abbiamo prenotato.", "Tomorrow evening I ___ with Marta: we’ve booked a table.", ["am having dinner", "'m having dinner"], "Arrangements → present continuous."],
    ["k", 3, "Don’t call me tonight – I ___ a concert with Jo.", ["Present continuous (am going to)", "will (will go to)", "Present simple (go to)"], "An arrangement already made."],
    ["q", 3, "Write a question.", "what / you / do / this weekend?", ["What are you doing this weekend?"], "Asking about arrangements → present continuous."],
    ["j", 4, "Wait, I’m helping you with those boxes.", false, ["Wait, I'll help you with those boxes.", "Wait, I will help you with those boxes."], "A spontaneous offer → will."],
    ["d", 3, "Making plans.", [["Tim", "Are you free on Saturday?"], ["Eva", "Sorry, I ___ (work) all day – it’s on the schedule. But I ___ (call) you on Sunday, I promise."]], [["am working", "'m working"], ["will call", "'ll call"]], "Arrangement → present continuous; promise → will."],
    ["h", 3, "Match the beginnings and endings.", [["I’m seeing the dentist", "at 4 p.m. tomorrow."], ["I think it’ll", "be sunny tomorrow."], ["We’re getting married", "in June."], ["Maybe I’ll", "watch a film tonight."]], "Fixed arrangements vs predictions and uncertain decisions."]
  ]);

  D.extend("will-vs-fcont", [
    ["e", 4, "[Don’t call at nine –] [I will have] [my piano lesson] [then.]", 1, ["will be having", "'ll be having"], "An action in progress at a future time → future continuous."],
    ["x", 4, "Tomorrow at this time Ben will be on the plane.", "He ___ (fly) over the Alps.", ["will be flying", "'ll be flying"], "In progress at a future moment."],
    ["t", 4, T + " (BE)", "At 10 a.m. tomorrow I’ll be in the middle of my exam.", "At 10 a.m. tomorrow I ___ my exam.", ["will be taking", "'ll be taking", "will be doing", "'ll be doing", "will be sitting", "'ll be sitting"], "Future continuous for an action in progress."],
    ["i", 4, "Domani a quest’ora starò prendendo il sole in spiaggia.", "This time tomorrow I ___ on the beach.", ["will be sunbathing", "'ll be sunbathing"], "Future continuous = starò + gerundio."],
    ["k", 4, "___ the car tonight? I’d like to borrow it.", ["Future continuous (Will you be using)", "will (Will you use)", "Present simple (Do you use)"], "A polite question about plans → future continuous."],
    ["j", 4, "I’ll be thinking of you during your interview.", true, [], "Correct: an action in progress during a future event."],
    ["d", 4, "Arranging a call.", [["Max", "Can I phone you at eight?"], ["Zoe", "No, I ___ (drive) home then. Call me at nine – I ___ (answer) straight away."]], [["will be driving", "'ll be driving"], ["will answer", "'ll answer"]], "In progress at eight → continuous; single action → will."],
    ["h", 4, "Match the beginnings and endings.", [["This time next week", "I’ll be lying on a beach."], ["I’ll phone you", "as soon as I land."], ["When you arrive, we’ll be", "having dinner, so come hungry."], ["I’m sure she’ll", "love the present."]], "Future continuous for actions in progress; will for single actions and predictions."]
  ]);

  D.extend("will-vs-fperf", [
    ["e", 4, "[By next June] [I will finish] [all my exams] [and I’ll be free.]", 1, ["will have finished", "'ll have finished"], "Completed before a future time (by next June) → future perfect."],
    ["x", 4, "The builders started in March and need six months.", "By October they ___ (finish) the house.", ["will have finished", "'ll have finished"], "Completed before a future deadline."],
    ["t", 5, T + " (HAVE)", "The film ends at 10. We’ll arrive after that.", "By the time we arrive, the film ___ .", ["will have ended", "'ll have ended", "will have finished", "'ll have finished"], "By the time + present, future perfect for the earlier event."],
    ["i", 5, "Entro la fine dell’anno avrò risparmiato mille euro.", "By the end of the year I ___ a thousand euros.", ["will have saved", "'ll have saved"], "Avrò risparmiato = future perfect."],
    ["k", 4, "Call me at 8. I ___ my homework by then.", ["Future perfect (will have done)", "will (will do)", "Future continuous (will be doing)"], "By then = before that time."],
    ["j", 5, "By the time you read this, I’ll leave.", false, ["By the time you read this, I'll have left.", "By the time you read this, I will have left."], "The leaving happens before the reading → future perfect."],
    ["d", 5, "Planning a party.", [["Ana", "Can we start decorating at five?"], ["Joe", "Sure. By five I ___ (buy) everything, and then I ___ (help) you."]], [["will have bought", "'ll have bought"], ["will help", "'ll help"]], "Completed before five → future perfect; later action → will."],
    ["h", 5, "Match the beginnings and endings.", [["By the time she’s thirty,", "she’ll have visited every continent."], ["Don’t worry,", "I’ll do the washing-up later."], ["By Friday the paint", "will have dried."], ["I think the new bridge", "will make traffic worse."]], "Future perfect = completed before a future time."]
  ]);

  D.extend("fperf-vs-fperfc", [
    ["e", 5, "[By May] [she will have been writing] [four novels] [in total.]", 1, ["will have written"], "A completed number (four novels) → future perfect simple."],
    ["x", 5, "Grandad started working at the factory in 1990.", "Next year he ___ (work) there for 35 years.", ["will have been working"], "Duration up to a future point → future perfect continuous."],
    ["t", 5, T + " (BEEN)", "We started the journey at 6 a.m.; at noon we’ll still be on the road.", "At noon we ___ for six hours.", ["will have been travelling", "will have been driving", "will have been traveling"], "Duration of an activity up to a future time."],
    ["i", 6, "A giugno saranno due anni che studio giapponese.", "In June I ___ Japanese for two years.", ["will have been studying"], "Duration up to a future time → future perfect continuous."],
    ["k", 5, "By the end of the course, you ___ twelve essays.", ["Future perfect simple (will have written)", "Future perfect continuous (will have been writing)", "Future continuous (will be writing)"], "A completed quantity → simple."],
    ["j", 6, "By 2030 scientists will have been finding a cure.", false, ["By 2030 scientists will have found a cure."], "Find is a single completed result → simple."],
    ["d", 6, "A long race.", [["Reporter", "How will the runners feel at the finish?"], ["Coach", "Exhausted! By then they ___ (run) for over three hours and they ___ (climb) 2,000 metres."]], [["will have been running"], ["will have climbed"]], "Duration → continuous; completed amount → simple."],
    ["h", 6, "Match the beginnings and endings.", [["By ten o’clock I’ll have been studying", "for five hours, so I’ll need a break."], ["By ten o’clock I’ll have studied", "three chapters."], ["Next month we’ll have been living here", "for exactly a year."], ["Next month we’ll have paid", "the last instalment of the loan."]], "Continuous = duration; simple = completed results."]
  ]);

  D.extend("pp-vs-ps", [
    ["e", 2, "[I] [have seen] [that film] [last week.]", 1, ["saw"], "A finished time (last week) → past simple."],
    ["e", 3, "[Did you ever] [eat] [Japanese food?] [– Yes, many times.]", 0, ["Have you ever"], "Life experience without a time → present perfect (Have you ever eaten…?)."],
    ["x", 2, "Your friend asks about your holiday plans.", "I ___ (never / be) to London, so I’d love to go.", ["have never been", "'ve never been"], "Experience up to now → present perfect."],
    ["d", 3, "Leo is talking about his trip.", [["Leo", "We ___ (go) to Paris in 2019 and ___ (love) it."]], [["went"], ["loved"]], "A finished time (in 2019) → past simple."],
    ["t", 3, T + " (SINCE)", "We moved here in 2018 and we still live here.", "We have lived here ___ .", ["since 2018"], "Since + the starting point."],
    ["i", 2, "Hai mai visto la neve?", "___ snow?", ["Have you ever seen"], "Hai mai… = Have you ever + past participle."],
    ["k", 3, "Shakespeare ___ 37 plays.", ["Past simple (wrote)", "Present perfect (has written)", "Past perfect (had written)"], "Shakespeare is dead: his life is a finished period."],
    ["o", 3, "Have you finished your homework yet?", [], "Yet goes at the end of questions in the present perfect."],
    ["h", 3, "Match the beginnings and endings.", [["I’ve lost my wallet –", "can you lend me some money?"], ["I lost my wallet last year,", "but someone found it."], ["She has worked here", "since 2015."], ["She worked there", "for two years, then left."]], "Present result/unfinished period → present perfect; finished time → past simple."],
    ["d", 3, "Catching up.", [["Ivy", "___ (you / see) the new Batman film?"], ["Dan", "Yes, I ___ (see) it on Saturday. It was brilliant!"]], [["Have you seen"], ["saw"]], "No time → present perfect; on Saturday → past simple."]
  ]);

  D.extend("will-vs-ps-timetable", [
    ["e", 3, "[Hurry up!] [The train] [will leave] [at 8.15.]", 2, ["leaves"], "Timetables → present simple."],
    ["x", 3, "You are reading the school calendar.", "The summer term ___ (end) on 10 June.", ["ends"], "Official schedules → present simple."],
    ["i", 3, "Il film inizia alle nove: sbrigati!", "The film ___ at nine: hurry up!", ["starts", "begins"], "Programmes and timetables → present simple."],
    ["k", 3, "I think it ___ a great film – the reviews are excellent.", ["will (will be)", "Present simple (is)", "Present continuous (is being)"], "An opinion/prediction → will."],
    ["q", 3, "Write a question.", "what time / the museum / open / tomorrow?", ["What time does the museum open tomorrow?"], "Opening times → present simple."],
    ["j", 4, "The conference starts on Monday and finishes on Wednesday.", true, [], "A fixed official schedule → present simple."],
    ["d", 3, "At the station.", [["Tourist", "Excuse me, when ___ (the next train to Bath / leave)?"], ["Guard", "At 10.40. Don’t worry, I’m sure you ___ (find) a seat."]], [["does the next train to Bath leave"], ["will find", "'ll find"]], "Timetable → present simple; reassurance/prediction → will."],
    ["h", 3, "Match the beginnings and endings.", [["The bus leaves", "at 7.05 every morning."], ["I’m sure the bus will", "be late again today."], ["The shop opens", "at nine on Saturdays."], ["Perhaps the shop will", "open a new branch next year."]], "Timetables vs predictions."]
  ]);

  /* ================= MIXED GROUPS ================= */
  D.extend("all-present", [
    ["e", 3, "[I] [live] [here] [since 2020.]", 1, ["have lived", "'ve lived", "have been living", "'ve been living"], "Since + starting point → present perfect."],
    ["e", 4, "[This week] [I work] [from home] [because the office is being painted.]", 1, ["am working", "'m working"], "A temporary situation (this week) → present continuous."],
    ["x", 3, "Anna’s hands are covered in flour.", "She ___ (make) bread.", ["is making", "'s making", "has been making", "'s been making"], "Happening now / recent activity with visible results."],
    ["x", 4, "You meet a friend you haven’t seen for ages.", "What ___ (you / do) since we last met?", ["have you been doing"], "An activity over a period up to now."],
    ["t", 4, T + " (FIRST)", "I have never tried Thai food before.", "It’s the ___ Thai food.", ["first time I have tried", "first time I've tried", "first time I have eaten", "first time I've eaten"], "It’s the first time + present perfect."],
    ["d", 3, "Translate: “Lavoro qui da sei mesi e mi piace molto.”", [["", "I ___ (work) here for six months and I ___ (like) it a lot."]], [["have worked", "'ve worked", "have been working", "'ve been working"], ["like"]], "Da + period → present perfect; state verb like → present simple."],
    ["k", 4, "Prices ___ all the time these days.", ["Present continuous (are going up)", "Present simple (go up)", "Present perfect (have gone up)"], "A changing, developing situation → present continuous."],
    ["q", 4, "Write the sentence.", "how many cups of coffee / you / drink / today?", ["How many cups of coffee have you drunk today?", "How many cups of coffee have you had today?"], "An unfinished time period (today) with a quantity → present perfect simple."],
    ["j", 4, "She is always borrowing my clothes without asking!", true, [], "Always + continuous expresses annoyance about a repeated habit."],
    ["j", 4, "I have been believing in ghosts since I was a child.", false, ["I have believed in ghosts since I was a child.", "I've believed in ghosts since I was a child."], "Believe is a state verb: no continuous."],
    ["d", 4, "A message to a friend.", [["Sara", "Hi! I ___ (write) to you from the train. I ___ (travel) a lot for work recently, and I ___ (not / see) my family for two weeks. Usually I ___ (work) in the office, so this is strange for me!"]], [["am writing", "'m writing"], ["have been travelling", "'ve been travelling", "have been traveling"], ["have not seen", "haven't seen"], ["work"]], "Now → continuous; recent period → perfect continuous; up to now → perfect; habit → simple."],
    ["h", 4, "Match the beginnings and endings.", [["I usually cycle to work,", "but today I’m taking the bus."], ["I’ve been cycling to work", "for years, and I love it."], ["I’ve cycled 20 km today,", "so I’m tired."], ["Look – he’s cycling", "without holding the handlebars!"]], "Four present forms, four meanings."]
  ]);

  D.extend("all-past", [
    ["e", 3, "[When I was a child,] [I was going] [to the beach] [every summer.]", 1, ["went", "used to go"], "A repeated past habit → past simple or used to."],
    ["e", 4, "[She was tired] [because she] [was working] [twelve hours without a break.]", 2, ["had been working"], "Duration before a past moment → past perfect continuous."],
    ["x", 4, "When I got to the restaurant,", "my friends ___ (already / order), so I ate on my own.", ["had already ordered"], "Completed before my arrival → past perfect."],
    ["d", 3, "It was a quiet evening in the village.", [["", "Some children ___ (play) in the square and an old man ___ (read) a newspaper."]], [["were playing"], ["was reading"]], "Background description → past continuous."],
    ["t", 4, T + " (USED)", "My grandfather smoked when he was young, but he doesn’t now.", "My grandfather ___ when he was young.", ["used to smoke"], "Used to = past habit that is no longer true."],
    ["d", 4, "Translate: “Quando sono arrivato, la riunione era già cominciata.”", [["", "When I ___ (arrive), the meeting ___ (already / start)."]], [["arrived"], ["had already started"]], "Earlier → past perfect; later → past simple."],
    ["k", 4, "I ___ in the garden when I found the old coin.", ["Past continuous (was digging)", "Past simple (dug)", "Past perfect (had dug)"], "An action in progress interrupted by a short event."],
    ["q", 4, "Write the sentence.", "she / not / sleep / well / because / she / drink / too much coffee", ["She didn't sleep well because she had drunk too much coffee.", "She did not sleep well because she had drunk too much coffee."], "The cause happened earlier → past perfect."],
    ["j", 4, "We were living in Rome when my sister was born.", true, [], "A longer background situation + a single event."],
    ["j", 5, "By the time the ambulance arrived, the man was dying.", true, [], "Correct: the process was in progress (he was still alive)."],
    ["d", 4, "A story.", [["Narrator", "It ___ (rain) heavily when Emma ___ (leave) the office. She ___ (forget) her umbrella at home that morning, so by the time she ___ (reach) the station, she was soaked."]], [["was raining"], ["left"], ["had forgotten"], ["reached"]], "Background → past continuous; events → past simple; earlier → past perfect."],
    ["h", 4, "Match the beginnings and endings.", [["I used to play the violin,", "but I gave it up at fifteen."], ["I was playing the violin", "when the string broke."], ["I had played the violin for years", "before I joined the orchestra."], ["I played the violin", "at the school concert last Friday."]], "Habit, background, earlier period, single event."]
  ]);

  D.extend("all-future", [
    ["e", 3, "[I can’t come on Friday.] [I will visit] [my grandmother –] [we arranged it last week.]", 1, ["am visiting", "'m visiting"], "An arrangement → present continuous."],
    ["e", 4, "[When I] [will get] [home,] [I’ll call you.]", 1, ["get"], "After when/as soon as/until, use the present simple for the future."],
    ["x", 4, "Your flight lands at 7 a.m. in New York.", "By the time you land, I ___ (go) to bed in Rome.", ["will have gone", "'ll have gone"], "Completed before a future moment → future perfect."],
    ["x", 3, "The sky is getting very dark.", "I think it ___ (rain) soon.", ["is going to rain", "'s going to rain", "will rain", "'ll rain"], "Evidence → going to (will is also possible with ‘I think’)."],
    ["t", 4, T + " (BE)", "At 3 p.m. tomorrow I’ll be in the middle of my driving test.", "At 3 p.m. tomorrow I ___ my driving test.", ["will be taking", "'ll be taking", "will be doing", "'ll be doing"], "In progress at a future time → future continuous."],
    ["d", 4, "Translate: “Appena arrivo, ti mando un messaggio.”", [["", "As soon as I ___ (arrive), I ___ (send) you a message."]], [["arrive"], ["will send", "'ll send"]], "As soon as + present simple; main clause → will."],
    ["k", 4, "The match ___ at 8, so let’s meet at 7.30.", ["Present simple (starts)", "will (will start)", "going to (is going to start)"], "A fixed timetable → present simple."],
    ["q", 4, "Write the sentence.", "this time next month / we / lie / on a beach in Greece", ["This time next month we will be lying on a beach in Greece.", "This time next month we'll be lying on a beach in Greece."], "In progress at a future time → future continuous."],
    ["j", 4, "I’ll tell you when I will know the results.", false, ["I'll tell you when I know the results.", "I will tell you when I know the results."], "Present simple after when for the future."],
    ["j", 5, "By 2040 most cars will be running on electricity.", true, [], "A situation in progress at a future time."],
    ["d", 4, "Holiday plans.", [["Ben", "What ___ (you / do) in the summer?"], ["Kate", "We ___ (go) to Ireland – we’ve booked the ferry. It ___ (leave) at 6 a.m. on 1 August. By the end of the month we ___ (drive) round the whole island!"]], [["are you doing", "are you going to do"], ["are going", "'re going", "are going to go", "'re going to go"], ["leaves"], ["will have driven", "'ll have driven"]], "Arrangements, timetable, completed by a future time."],
    ["h", 4, "Match the beginnings and endings.", [["I’ll carry that for you –", "it looks heavy."], ["I’m going to study medicine:", "I’ve already applied."], ["I’m meeting Sara", "at 6 outside the cinema."], ["By June I’ll have saved", "enough for a new bike."]], "Offer, plan, arrangement, completed by a time."]
  ]);

  D.extend("present-past-mixed", [
    ["e", 3, "[I] [have broken] [my arm] [when I was ten.]", 1, ["broke"], "A finished time (when I was ten) → past simple."],
    ["e", 4, "[How long] [do you know] [Tom?] [– Since primary school.]", 1, ["have you known"], "Duration up to now with a state verb → present perfect simple."],
    ["x", 3, "Look at Marco!", "He ___ (grow) so much since last year!", ["has grown", "'s grown"], "A change with a present result → present perfect."],
    ["x", 4, "Elena isn’t at her desk.", "She ___ (go) to the bank – she’ll be back soon.", ["has gone", "'s gone"], "Has gone = she’s there now, not back yet."],
    ["t", 4, T + " (AGO)", "I last saw Paul three years ago.", "I haven’t seen Paul ___ .", ["for three years"], "Haven’t + past participle + for + period."],
    ["d", 3, "Translate: “Ieri ho perso il telefono, ma l’ho già ritrovato.”", [["", "Yesterday I ___ (lose) my phone, but I ___ (find) it already."]], [["lost"], ["have found", "'ve found"]], "Yesterday → past simple; already, present result → present perfect."],
    ["k", 4, "I ___ to Spain three times – the last time was in 2022.", ["Present perfect (have been)", "Past simple (went)", "Past perfect (had been)"], "The number of experiences up to now → present perfect."],
    ["q", 4, "Write a question.", "when / you / start / playing tennis?", ["When did you start playing tennis?"], "When asks about a finished time → past simple."],
    ["j", 4, "I’ve been to the gym yesterday.", false, ["I went to the gym yesterday."], "Yesterday → past simple."],
    ["j", 4, "She’s lived in Paris since she got married.", true, [], "Since + past simple clause, present perfect in the main clause."],
    ["d", 4, "An interview.", [["Journalist", "How long ___ (you / be) a firefighter?"], ["Paul", "Twelve years. I ___ (join) the service in 2013, and since then I ___ (work) in three different cities."]], [["have you been"], ["joined"], ["have worked", "'ve worked", "have been working", "'ve been working"]], "Duration to now → present perfect; a date → past simple."],
    ["h", 4, "Match the beginnings and endings.", [["She’s written two books", "and she’s working on a third."], ["Agatha Christie wrote", "more than sixty novels."], ["I’ve already eaten,", "so I’m not hungry."], ["I ate", "a huge breakfast this morning."]], "Living author / dead author; present result / finished time."]
  ]);

  /* ================= CHALLENGES ================= */
  D.extend("challenge-intermediate", [
    ["e", 3, "[I’m sure] [you will enjoy] [the film] [when you will see it.]", 3, ["when you see it"], "Present simple after when for the future."],
    ["e", 4, "[We] [have been] [to Venice] [two years ago.]", 1, ["went"], "Ago → past simple."],
    ["x", 3, "It’s 11 p.m. and the light in Sam’s room is still on.", "He ___ (study) for tomorrow’s test.", ["is studying", "'s studying"], "In progress now."],
    ["x", 4, "Mum came home and found the kitchen in a mess.", "The kids ___ (bake) a cake.", ["had been baking"], "Activity before a past moment, with visible results."],
    ["t", 4, T + " (YET)", "I still haven’t finished the book.", "I haven’t finished the book ___ .", ["yet"], "Yet at the end of negative present perfect sentences."],
    ["d", 3, "Translate: “Cosa fai stasera? – Vado al cinema con Luca.”", [["A", "What ___ (you / do) tonight?"], ["B", "I ___ (go) to the cinema with Luca."]], [["are you doing", "are you going to do"], ["am going", "'m going"]], "Arrangements → present continuous (or going to)."],
    ["k", 4, "Ouch! I ___ my finger!", ["Present perfect (have cut)", "Past simple (cut)", "Present continuous (am cutting)"], "A recent event with a present result → present perfect."],
    ["q", 4, "Write the sentence.", "while / I / walk / to school, / I / meet / an old friend", ["While I was walking to school, I met an old friend."], "While + past continuous; short event → past simple."],
    ["o", 3, "How long have you been waiting?", [], "How long + have + subject + been + -ing."],
    ["j", 4, "If it will rain tomorrow, we’ll stay at home.", false, ["If it rains tomorrow, we'll stay at home.", "If it rains tomorrow, we will stay at home."], "Present simple after if for the future."],
    ["j", 3, "My brother has just passed his driving test.", true, [], "Just + present perfect for a very recent event."],
    ["d", 4, "A postcard.", [["Giulia", "Hi from Edinburgh! We ___ (arrive) on Saturday and we ___ (already / visit) the castle. Right now I ___ (sit) in a lovely café. Tomorrow we ___ (take) a tour of the Highlands – we booked it yesterday."]], [["arrived"], ["have already visited", "'ve already visited"], ["am sitting", "'m sitting"], ["are taking", "'re taking", "are going to take", "'re going to take"]], "Past time → past simple; already → present perfect; now → continuous; arrangement → present continuous."],
    ["h", 4, "Match the beginnings and endings.", [["I’ve never seen", "such a beautiful sunset."], ["When I was little,", "I used to be afraid of the dark."], ["By the time we got there,", "the shop had closed."], ["Don’t phone me at seven:", "I’ll be having dinner."]], "Mixed tenses in context."],
    ["c", 4, "Since I started this job, I ___ (meet / a lot of interesting people).", ["have met a lot of interesting people", "'ve met a lot of interesting people"], "Since + past starting point → present perfect."]
  ]);

  D.extend("challenge-upper", [
    ["e", 4, "[It’s the first time] [I] [see] [such a big crowd.]", 2, ["have seen", "'ve seen"], "It’s the first time + present perfect."],
    ["e", 5, "[By the time] [the meeting ends,] [we will discuss] [every point on the agenda.]", 2, ["will have discussed", "'ll have discussed"], "Completed before a future time → future perfect."],
    ["x", 4, "Tom looks pale and tired.", "He ___ (not / sleep) properly for days.", ["has not been sleeping", "hasn't been sleeping", "has not slept", "hasn't slept"], "A situation continuing up to now."],
    ["x", 5, "When the firefighters arrived,", "the fire ___ (burn) for over an hour.", ["had been burning"], "Duration before a past moment → past perfect continuous."],
    ["t", 5, T + " (SOONER)", "As soon as we sat down, the lights went out.", "No ___ the lights went out.", ["sooner had we sat down than"], "No sooner + past perfect with inversion + than + past simple."],
    ["t", 4, T + " (USED)", "I find it normal now to get up early.", "I’m ___ up early now.", ["used to getting"], "Be used to + -ing = be accustomed to."],
    ["i", 5, "Era la prima volta che guidava di notte.", "It was the first time she ___ at night.", ["had driven", "had ever driven"], "It was the first time + past perfect."],
    ["k", 5, "This time next year, I ___ at university in Edinburgh.", ["Future continuous (will be studying)", "Future perfect (will have studied)", "Present continuous (am studying)"], "In progress at a future time."],
    ["q", 5, "Write the sentence.", "hardly / I / arrive / when / the phone / ring", ["Hardly had I arrived when the phone rang."], "Hardly + inversion with the past perfect + when + past simple."],
    ["j", 5, "I wish I didn’t say that to her yesterday.", false, ["I wish I hadn't said that to her yesterday.", "I wish I had not said that to her yesterday."], "Regret about the past → wish + past perfect."],
    ["j", 5, "By the end of the decade, the city will have doubled in size.", true, [], "Completed by a future time → future perfect."],
    ["d", 5, "An email from a colleague.", [["Mark", "Sorry for the late reply. I ___ (travel) all week and I ___ (only / just / get) back. By the time you read this, I ___ (send) you the report. Next week I ___ (work) from home, so call me any time."]], [["have been travelling", "'ve been travelling", "have been traveling"], ["have only just got", "'ve only just got", "have only just gotten"], ["will have sent", "'ll have sent"], ["will be working", "'ll be working", "am working", "'m working"]], "Recent activity, very recent event, completed by a future time, future in progress."],
    ["h", 5, "Match the beginnings and endings.", [["Scarcely had the film begun", "when the power went off."], ["By this time next week", "we’ll have moved into the new flat."], ["She was exhausted because", "she had been working since dawn."], ["He’s been looking for a job", "ever since he left school."]], "Advanced tense patterns."],
    ["c", 5, "When I finally found my glasses, I realised I ___ (look / for them / for an hour).", ["had been looking for them for an hour"], "Duration before a past moment → past perfect continuous."]
  ]);

  D.extend("challenge-advanced", [
    ["e", 5, "[Not only] [she has] [won the race,] [but she also broke the record.]", 1, ["has she"], "After not only at the beginning, use inversion: not only has she won."],
    ["e", 6, "[Little] [he realised] [that his life] [was about to change.]", 1, ["did he realise", "did he realize"], "Little at the start + inversion with did."],
    ["x", 5, "The negotiations started in January.", "By the time an agreement is reached, the two sides ___ (talk) for almost a year.", ["will have been talking"], "Duration up to a future point → future perfect continuous."],
    ["x", 6, "Looking back, the minister admitted:", "‘We ___ (should / act) much sooner.’", ["should have acted"], "Should have + past participle = criticism of a past action."],
    ["t", 6, T + " (TIME)", "We should leave now – it’s getting late.", "It’s ___ .", ["time we left", "high time we left", "about time we left"], "It’s (high) time + past simple."],
    ["t", 5, T + " (UNTIL)", "She only realised her mistake when she got home.", "Not ___ did she realise her mistake.", ["until she got home"], "Not until + clause + inversion."],
    ["d", 6, "Translate: “Se avessi studiato di più, adesso avrei un lavoro migliore.”", [["", "If I ___ (study) harder, I ___ (have) a better job now."]], [["had studied"], ["would have", "'d have"]], "Mixed conditional: past condition, present result."],
    ["k", 6, "By the time the treaty was signed, the two countries ___ for decades.", ["Past perfect continuous (had been fighting)", "Past continuous (were fighting)", "Present perfect continuous (have been fighting)"], "Duration up to a past point."],
    ["q", 6, "Write the sentence.", "rarely / I / see / such dedication", ["Rarely have I seen such dedication."], "Rarely + inversion with the present perfect."],
    ["j", 6, "Had I known about the strike, I would have taken the car.", true, [], "Inverted third conditional: had I known = if I had known."],
    ["j", 6, "Hardly the speech had ended when the protests began.", false, ["Hardly had the speech ended when the protests began."], "Hardly requires inversion: hardly had…"],
    ["d", 6, "A review.", [["Critic", "Seldom ___ (I / see) a debut so assured. By the time the final chapter ___ (begin), the author ___ (build) a world so convincing that readers ___ (still / think) about it for weeks to come."]], [["have I seen"], ["begins"], ["has built"], ["will still be thinking"]], "Inversion, narrative present, completed result, future in progress."],
    ["h", 6, "Match the beginnings and endings.", [["Were the government to raise taxes,", "there would be protests."], ["Under no circumstances", "should you open this door."], ["Had they left earlier,", "they wouldn’t have missed the flight."], ["Only later did I understand", "what she had meant."]], "Formal inversion structures."],
    ["c", 6, "I’d rather you ___ (not / tell / anyone) about this yet.", ["did not tell anyone", "didn't tell anyone"], "I’d rather + subject + past simple for a present/future preference."]
  ]);
})(window.TenseDojo);
