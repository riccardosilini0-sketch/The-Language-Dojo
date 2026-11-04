/* Verb Tenses — mixed tenses: more batteries for every group and challenge,
   plus a new topic of long texts and realistic situations, from White belt (A1) to Black belt (C2).
   The student is never told which tense is needed. */
(function (D) {

D.extend("all-present", [
  ["m", 2, "Listen! Someone ___ at the door.", ["is knocking", "knocks", "has knocked"], "Happening now (Listen!): present continuous."],
  ["m", 3, "I ___ my keys. Can you help me look for them?", ["'ve lost", "lose", "'m losing"], "A past action with a present result (they're still lost): present perfect."],
  ["m", 3, "She ___ Spanish since she was a child, so she's completely fluent.", ["has spoken", "speaks", "is speaking"], "A state from the past up to now: present perfect (speak is used as a state here)."],
  ["m", 3, "How often ___ your hair cut?", ["do you have", "are you having", "have you had"], "How often = frequency, a habit: present simple."],
  ["m", 4, "You look hot. ___ ?", ["Have you been running", "Do you run", "Are you running"], "A visible result of a recent activity: present perfect continuous."],
  ["m", 3, "We ___ for a new flat at the moment, but we haven't found anything yet.", ["are looking", "look", "have looked"], "A temporary activity in progress around now: present continuous."],
  ["m", 4, "This is the third time you ___ me the same question!", ["'ve asked", "ask", "'re asking"], "‘This is the third time’ + present perfect."],
  ["m", 3, "Water ___ at 0°C.", ["freezes", "is freezing", "has frozen"], "A scientific fact: present simple."],
  ["m", 4, "The kids are quiet. What ___ ?", ["are they doing", "do they do", "have they done"], "Asking about an activity happening now: present continuous."],
  ["m", 4, "I ___ this film before. Let's watch something else.", ["'ve seen", "see", "'ve been seeing"], "Experience up to now: present perfect simple (see is not used in the continuous with this meaning)."],
  ["m", 5, "He ___ to get hold of you all afternoon. Where have you been?", ["'s been trying", "tries", "'s tried"], "A repeated activity continuing up to now: present perfect continuous."],
  ["m", 4, "I ___ you're right. Let's take the earlier train.", ["think", "'m thinking", "'ve been thinking"], "Think = have an opinion: a state, present simple."],
  ["g", 2, "My brother ___ (not / like) coffee, so he always drinks tea.", ["does not like"], "Like is a state verb: present simple."],
  ["g", 3, "Turn the radio down, please. I ___ (try) to concentrate.", ["am trying"], "An action happening now: present continuous."],
  ["g", 3, "I ___ (never / be) to Ireland, but I'd love to go.", ["have never been"], "Life experience up to now: present perfect."],
  ["g", 4, "Sorry I'm late! ___ (you / wait) long?", ["Have you been waiting"], "Duration of an activity up to now: present perfect continuous."],
  ["g", 3, "The shops in my town ___ (close) at seven on weekdays.", ["close"], "A regular timetable: present simple."],
  ["g", 4, "She ___ (write) four books so far, and the fifth is coming out next year.", ["has written"], "A number of completed things in a period continuing now: present perfect simple."],
  ["g", 4, "It ___ (get) dark earlier and earlier – winter's coming.", ["is getting"], "A gradual change in progress: present continuous."],
  ["g", 5, "I ___ (mean) to call you for weeks, but I keep forgetting.", ["have been meaning"], "An intention continuing over a period up to now: present perfect continuous."],
  ["p", 3, "A message from a language school", [
    "Dear Mr and Mrs Russo, I am writing to tell you how your son Matteo ___ (get) on. He ___ (be) with us for six weeks now and he ___ (make) excellent progress.",
    "He ___ (attend) classes every morning from nine to one, and in the afternoons he ___ (usually / join) our sports activities. This week he ___ (prepare) a presentation about Italian food, which he will give on Friday.",
    "His host family ___ (say) he is polite and helpful, although he ___ (always / leave) his wet towels on the bathroom floor! He ___ (already / read) two novels in English, and his teacher ___ (think) he could move up a level next month. We ___ (look) forward to seeing him continue to improve."
  ], [["is getting"], ["has been"], ["has made", "has been making"], ["attends"], ["usually joins"], ["is preparing"], ["says"], ["is always leaving"], ["has already read"], ["thinks"], ["are looking", "look"]], [
    "A process in progress around now: is getting on.",
    "Duration up to now with a state verb: has been.",
    "Progress up to now with a present result: has made (has been making is also possible).",
    "A regular routine: attends.",
    "A habit with usually: usually joins.",
    "A temporary activity this week: is preparing.",
    "A reported general statement: says.",
    "Always + continuous for an annoying habit: is always leaving.",
    "Completed achievements up to now: has already read.",
    "An opinion (state): thinks.",
    "A fixed expression in formal letters: we are looking forward / we look forward."
  ], "Read the school's letter to Matteo's parents."]
]);

D.extend("all-past", [
  ["m", 3, "When I left the house, it ___, so I took an umbrella.", ["was raining", "rained", "had rained"], "In progress at that moment: past continuous."],
  ["m", 3, "When I left the house, it ___, but the streets were still wet.", ["had stopped raining", "was stopping raining", "stopped raining"], "The rain stopped before I left: past perfect."],
  ["m", 3, "I ___ my leg when I was skiing in Austria.", ["broke", "was breaking", "had broken"], "A short completed event during a longer activity: past simple."],
  ["m", 4, "By the time I found a parking space, the meeting ___.", ["had started", "started", "was starting"], "Completed before a past moment: past perfect."],
  ["m", 4, "He was tired because he ___ in the garden all day.", ["had been working", "worked", "was working"], "A long activity before a past moment, explaining the result: past perfect continuous."],
  ["m", 3, "We ___ in a small village when I was a child.", ["used to live", "were living", "had lived"], "A past state that is no longer true: used to."],
  ["m", 4, "While I ___ dinner, the lights suddenly went out.", ["was cooking", "cooked", "had cooked"], "While + an activity in progress: past continuous."],
  ["m", 4, "She ___ the news before I could tell her.", ["had already heard", "already heard", "was already hearing"], "Before another past action: past perfect."],
  ["m", 4, "Where ___ when the earthquake happened?", ["were you living", "had you lived", "did you live"], "A situation in progress at the time of the event: past continuous."],
  ["m", 5, "They ___ for hours when the rescue team finally found them.", ["had been walking", "walked", "were walking"], "Duration up to a past moment: past perfect continuous."],
  ["m", 4, "I ___ to the gym three times a week, but now I'm too busy.", ["used to go", "was going", "had gone"], "A past habit that has stopped: used to."],
  ["m", 5, "It was the best meal I ___ for years.", ["had eaten", "ate", "was eating"], "Superlative referring to a period up to a past moment: past perfect."],
  ["g", 2, "Yesterday I ___ (meet) my old teacher in the street.", ["met"], "A single completed past event: past simple."],
  ["g", 3, "At eight o'clock last night we ___ (have) dinner, so we didn't hear the phone.", ["were having"], "In progress at a past moment: past continuous."],
  ["g", 3, "I couldn't pay because I ___ (leave) my wallet at home.", ["had left"], "An earlier past action that explains the situation: past perfect."],
  ["g", 4, "Her eyes were red. She ___ (cry).", ["had been crying"], "A visible result of a recent activity in the past: past perfect continuous."],
  ["g", 3, "My grandparents ___ (not / have) a TV when they were young.", ["did not have", "did not use to have"], "A past state: didn't have (didn't use to have)."],
  ["g", 4, "As soon as she ___ (finish) the exam, she ran out of the room.", ["had finished", "finished"], "One action after another: past perfect or past simple with as soon as."],
  ["g", 4, "The thieves ___ (escape) through the window while the guards were watching the football.", ["escaped"], "A completed action during a background activity: past simple."],
  ["g", 5, "When I finally got through to customer service, I ___ (hold) for forty minutes.", ["had been holding"], "Duration up to a past moment: past perfect continuous."],
  ["p", 4, "An unexpected guest", [
    "Last winter, on a freezing night, I ___ (sit) by the fire with a book when someone ___ (knock) at the door. I ___ (not / expect) anyone, so I was a little scared.",
    "It was an old man. His car ___ (break) down a mile away and he ___ (walk) through the snow for almost an hour. His hands were blue: he ___ (lose) his gloves somewhere on the road.",
    "I ___ (make) him a hot drink and we ___ (talk) until the tow truck arrived. It turned out that he ___ (live) in my house as a boy, sixty years earlier! When he was young, he ___ (play) in the same garden every day. Before he left, he ___ (show) me his initials carved in the old oak tree."
  ], [["was sitting"], ["knocked"], ["was not expecting", "had not expected"], ["had broken"], ["had been walking"], ["had lost"], ["made"], ["talked"], ["had lived"], ["used to play"], ["showed"]], [
    "Background activity in progress: was sitting.",
    "The interrupting event: knocked.",
    "A state of mind at that moment: wasn't expecting (hadn't expected is also possible).",
    "Before the moment he knocked: had broken down.",
    "Duration up to a past moment: had been walking.",
    "Before he arrived: had lost.",
    "A main event: made.",
    "A main event lasting until another: talked.",
    "Much earlier: had lived.",
    "A repeated past habit: used to play.",
    "A main event: showed."
  ], "Read the story."]
]);

D.extend("all-future", [
  ["m", 3, "I'm sure you ___ the new job. You're perfect for it.", ["'ll get", "'re getting", "get"], "A prediction based on opinion: will."],
  ["m", 3, "We ___ to Portugal in August – we've booked the hotel.", ["'re going", "'ll go", "go"], "An arrangement: present continuous."],
  ["m", 3, "The match ___ at 3 p.m. on Saturday.", ["kicks off", "will be kicking off", "is going to kick off"], "A fixed schedule: present simple."],
  ["m", 4, "Don't call before nine – I ___ the kids to school.", ["'ll be taking", "'ll take", "take"], "In progress at a future time: future continuous."],
  ["m", 4, "By the time you arrive, we ___ the decorations.", ["'ll have finished", "'ll finish", "finish"], "Completed before a future moment: future perfect."],
  ["m", 3, "Mind that step! You ___!", ["'re going to trip", "'ll trip", "trip"], "Visible evidence of what is about to happen: going to."],
  ["m", 4, "As soon as I ___ the results, I'll let you know.", ["get", "'ll get", "'m getting"], "In time clauses (as soon as) we use the present simple for the future."],
  ["m", 4, "This time tomorrow we ___ on the beach.", ["'ll be lying", "'ll lie", "lie"], "In progress at a future moment: future continuous."],
  ["m", 4, "I've decided. I ___ my own business.", ["'m going to start", "'ll start", "start"], "An intention decided before speaking: going to."],
  ["m", 5, "By next June she ___ here for ten years.", ["'ll have been working", "'ll work", "'s working"], "Duration up to a future point: future perfect continuous."],
  ["m", 4, "I'm not sure – perhaps I ___ the green one.", ["'ll take", "'m taking", "take"], "An uncertain decision made now: will."],
  ["m", 5, "The ceremony ___ at the town hall; the invitations were sent last week.", ["is being held", "will hold", "holds"], "An arrangement, here in the passive: is being held."],
  ["g", 2, "I'm cold. – Wait, I ___ (close) the window.", ["will close"], "An offer made now: will."],
  ["g", 3, "Look at the time! We ___ (miss) the bus.", ["are going to miss"], "A prediction based on present evidence: going to."],
  ["g", 3, "The museum ___ (open) at ten tomorrow, so we can have a late breakfast.", ["opens"], "A timetable: present simple."],
  ["g", 4, "When I ___ (finish) university, I'm going to travel.", ["finish"], "Time clause with when: present simple for the future."],
  ["g", 4, "I ___ (meet) Sara at six – we arranged it yesterday.", ["am meeting"], "An arrangement: present continuous."],
  ["g", 4, "At ten o'clock tonight I ___ (watch) the final with my friends.", ["will be watching"], "In progress at a future moment: future continuous."],
  ["g", 5, "By the end of the month, I ___ (save) enough for the deposit.", ["will have saved"], "Completed before a future point: future perfect."],
  ["g", 5, "Next month we ___ (live) here for exactly a year.", ["will have lived", "will have been living"], "Duration up to a future point: future perfect."],
  ["p", 4, "Graduation day", [
    "Dear Grandma, my graduation ceremony ___ (take) place on 20 July at 11 a.m. in the main hall – the programme came today. Mum and Dad ___ (drive) up the night before, and they ___ (pick) you up on the way if you'd like to come.",
    "By then I ___ (finish) all my exams, so I'll be able to relax. After the ceremony, my friends and I ___ (have) lunch at a restaurant by the river – we booked it months ago.",
    "In September I ___ (start) a job at an architecture studio in Milan. I'm sure it ___ (be) hard at first. This time next year I ___ (probably / work) on my first real project! Don't worry about the journey: I ___ (call) you next week to organise everything. When I ___ (know) the exact times, I'll let you know."
  ], [["takes", "is taking"], ["are driving"], ["will pick"], ["will have finished"], ["are having"], ["am starting", "start", "am going to start"], ["will be"], ["will probably be working"], ["will call"], ["know"]], [
    "An official programme: takes place.",
    "An arrangement: are driving.",
    "An offer: they'll pick you up.",
    "Completed before a future point: will have finished.",
    "An arrangement (booked): are having.",
    "A fixed arrangement (am starting); start or going to start are also possible.",
    "An opinion-based prediction: will be.",
    "In progress at a future time: will probably be working.",
    "A promise: I'll call.",
    "Time clause with when: present simple."
  ], "Read Sara's letter to her grandmother."]
]);

D.extend("present-past-mixed", [
  ["m", 3, "I ___ to Paris last year, and I ___ back several times since.", ["went … have been", "have been … went", "went … went"], "A specific past time (last year): past simple; since + up to now: present perfect."],
  ["m", 3, "Where's Tom? – He ___ out. He'll be back in an hour.", ["'s gone", "went", "goes"], "A past action with a present result (he isn't here): present perfect."],
  ["m", 3, "Tom ___ out at six and came back at midnight.", ["went", "has gone", "was going"], "Finished past events in sequence: past simple."],
  ["m", 3, "She usually ___ the bus, but today she ___ her bike.", ["takes … is riding", "is taking … rides", "took … rode"], "A routine (present simple) vs a temporary action today (present continuous)."],
  ["m", 4, "I ___ the report when my computer crashed.", ["was writing", "have written", "wrote"], "An action in progress interrupted in the past: past continuous."],
  ["m", 4, "I ___ the report, so you can read it now.", ["'ve written", "wrote", "was writing"], "A completed action with a present result: present perfect."],
  ["m", 4, "How long ___ your current car?", ["have you had", "did you have", "do you have"], "A state continuing up to now: present perfect."],
  ["m", 4, "How long ___ your first car?", ["did you have", "have you had", "do you have"], "A finished period (you no longer have it): past simple."],
  ["m", 4, "Look, it ___! Let's go and build a snowman.", ["'s snowing", "snowed", "snows"], "Happening now: present continuous."],
  ["m", 4, "When I was a student I ___ in a café at weekends.", ["worked", "have worked", "am working"], "A finished period in the past: past simple."],
  ["m", 5, "I ___ about what you said yesterday, and I think you're right.", ["'ve been thinking", "thought", "'m thinking"], "A mental activity continuing up to now: present perfect continuous."],
  ["m", 5, "Nobody ___ the problem until it was too late.", ["noticed", "has noticed", "notices"], "A finished past situation (until it was too late): past simple."],
  ["d", 3, "", [["", "I ___ (lose) my phone yesterday, and I ___ (not / find) it yet."]], [["lost"], ["have not found"]], "Past simple for yesterday; present perfect with yet."],
  ["d", 3, "", [["", "My sister ___ (live) in London. She ___ (move) there in 2018."]], [["lives"], ["moved"]], "A present situation: present simple; a specific past time: past simple."],
  ["g", 4, "Can you be quiet? The baby ___ (sleep).", ["is sleeping"], "Happening now: present continuous."],
  ["g", 4, "I ___ (just / have) lunch, so I'm not hungry.", ["have just had"], "Just + present perfect: a very recent action with a present result."],
  ["g", 4, "While we ___ (walk) home, we saw a fox.", ["were walking"], "While + an activity in progress in the past: past continuous."],
  ["d", 4, "", [["", "He ___ (work) here since 2019, but he ___ (start) as an intern."]], [["has worked", "has been working"], ["started", "started"]], "Since + present perfect; a finished past event: past simple."],
  ["g", 5, "I ___ (never / understand) why people enjoy horror films.", ["have never understood"], "A state up to now: present perfect."],
  ["d", 5, "", [["", "When I ___ (be) younger, I ___ (not / like) vegetables at all."]], [["was"], ["did not like"]], "A finished period of life: past simple."],
  ["p", 4, "Meeting an old friend", [
    "Dear Paul, guess who I ___ (meet) last week? Hannah, from our old school! I ___ (wait) for a train at Victoria station when she ___ (tap) me on the shoulder.",
    "We ___ (not / see) each other since we left school, so we had a lot to talk about. She ___ (live) in Brighton now and she ___ (work) as a vet. At the moment she ___ (train) for a triathlon – she ___ (always / be) the sporty one!",
    "She ___ (get) married two years ago and she ___ (just / buy) a house by the sea. We ___ (already / arrange) to meet again next month. ___ (you / hear) from any of the others recently?"
  ], [["met"], ["was waiting"], ["tapped"], ["had not seen"], ["lives"], ["works"], ["is training"], ["has always been"], ["got"], ["has just bought"], ["have already arranged"], ["Have you heard"]], [
    "A specific past time (last week): met.",
    "Background activity in progress: was waiting.",
    "The interrupting event: tapped.",
    "Up to that past moment: hadn't seen.",
    "A present situation: lives.",
    "A permanent job: works.",
    "A temporary activity around now: is training.",
    "A state from the past up to now: has always been.",
    "A specific past time: got married.",
    "A very recent action with a present result: has just bought.",
    "Completed up to now: have already arranged.",
    "Up to now (recently): Have you heard?"
  ], "Read Lisa's email."]
]);

D.extend("challenge-intermediate", [
  ["m", 3, "I ___ for this company for five years, and I still enjoy it.", ["'ve worked", "worked", "work"], "A situation continuing up to now: present perfect."],
  ["m", 3, "Can you turn the music down? I ___ to sleep.", ["'m trying", "try", "'ve tried"], "Happening now: present continuous."],
  ["m", 4, "When we got to the cinema, the film ___, so we missed the beginning.", ["had started", "started", "was starting"], "Before we arrived: past perfect."],
  ["m", 3, "What ___ this evening? – Nothing special.", ["are you doing", "do you do", "will you do"], "Asking about plans / arrangements: present continuous."],
  ["m", 4, "I ___ my homework when my friend called.", ["was doing", "did", "have done"], "An activity in progress, interrupted: past continuous."],
  ["m", 3, "It's cold in here. I ___ the heating on.", ["'ll put", "put", "'m putting"], "A decision made now: will."],
  ["m", 4, "She ___ to the dentist since she was twelve!", ["hasn't been", "didn't go", "wasn't"], "Since + present perfect."],
  ["m", 4, "Look at those dark clouds. It ___.", ["'s going to rain", "rains", "will have rained"], "Present evidence: going to."],
  ["m", 4, "My parents ___ in Rome when they were students.", ["met", "have met", "were meeting"], "A finished time (when they were students): past simple."],
  ["m", 4, "The bus ___ at 7:45 every morning.", ["leaves", "is leaving", "will leave"], "A regular timetable: present simple."],
  ["m", 4, "I ___ a lot of new words since I started reading in English.", ["'ve learnt", "learnt", "learn"], "Since + present perfect."],
  ["m", 4, "When I was a child, I ___ afraid of the dark.", ["used to be", "was being", "had been"], "A past state that is no longer true: used to."],
  ["p", 3, "A holiday to remember", [
    "Last summer we ___ (go) to Sicily for two weeks. We ___ (stay) in a small hotel near the sea, and every morning we ___ (have) breakfast on the terrace.",
    "One day, while we ___ (swim), my brother ___ (see) a turtle. It was the first time he ___ (ever / see) one in the wild.",
    "I ___ (be) to many places since then, but Sicily is still my favourite. Next year we ___ (go) back – my parents ___ (already / book) the same hotel! I'm sure we ___ (have) a great time again."
  ], [["went"], ["stayed"], ["had"], ["were swimming"], ["saw"], ["had ever seen"], ["have been"], ["are going", "are going to go"], ["have already booked"], ["will have"]], [
    "A finished time (last summer): went.",
    "A finished period: stayed.",
    "A past habit during the holiday: had.",
    "While + an activity in progress: were swimming.",
    "A short event during that activity: saw.",
    "‘It was the first time’ + past perfect.",
    "Since then = up to now: have been.",
    "A plan / arrangement: are going.",
    "Completed up to now with already: have already booked.",
    "An opinion-based prediction: will have."
  ], "Read Giulia's composition."]
]);

D.extend("challenge-upper", [
  ["m", 4, "By the time the firefighters arrived, the fire ___ most of the building.", ["had destroyed", "destroyed", "was destroying"], "Completed before a past moment: past perfect."],
  ["m", 4, "I ___ the documents you asked for. They're on your desk.", ["'ve printed", "printed", "'d printed"], "A recent action with a present result: present perfect."],
  ["m", 4, "Hardly anyone ___ to the meeting. It was a waste of time.", ["came", "has come", "had come"], "A finished event: past simple."],
  ["m", 5, "She ___ there for long before she realised it was the wrong address.", ["hadn't been waiting", "didn't wait", "hasn't waited"], "Duration up to a past moment (before she realised): past perfect continuous."],
  ["m", 5, "This time next week I ___ my final exam.", ["'ll be taking", "'ll have taken", "take"], "In progress at a future moment: future continuous."],
  ["m", 5, "By this time next week I ___ my final exam, so I'll be free.", ["'ll have taken", "'ll be taking", "take"], "Completed before a future point: future perfect."],
  ["m", 4, "He ___ his car twice this year – he's a terrible driver.", ["'s crashed", "crashed", "'s been crashing"], "A number of times in an unfinished period: present perfect simple."],
  ["m", 5, "We ___ the problem for weeks, but we still haven't found a solution.", ["'ve been discussing", "discussed", "'d discussed"], "An activity continuing up to now: present perfect continuous."],
  ["m", 5, "I ___ to call you, but I didn't have your number.", ["was going", "am going", "will"], "A past intention that didn't happen: was going to."],
  ["m", 4, "When I ___ the email, I'll forward it to you.", ["receive", "'ll receive", "'m receiving"], "Time clause: present simple for the future."],
  ["m", 5, "The company ___ by a Japanese group in 2020.", ["was bought", "has been bought", "bought"], "A finished past time, passive: was bought."],
  ["m", 5, "Since the new manager arrived, the atmosphere in the office ___ completely.", ["has changed", "changed", "had changed"], "Since + a change continuing up to now: present perfect."],
  ["p", 5, "A career change", [
    "Three years ago, Laura ___ (work) as a lawyer in a large firm in London. She ___ (earn) a good salary, but she ___ (feel) for some time that something was missing.",
    "One evening, after she ___ (spend) fourteen hours in the office, she ___ (make) a decision: she would become a teacher. Her colleagues ___ (think) she had gone mad.",
    "Today Laura ___ (teach) history at a secondary school in Leeds. She ___ (never / regret) her choice, although she ___ (earn) far less than before. “By the end of this year,” she says, “I ___ (teach) for two years, and I ___ (not / have) a single boring day.”"
  ], [["was working", "worked"], ["earned", "was earning"], ["had been feeling", "had felt"], ["had spent"], ["made"], ["thought"], ["teaches"], ["has never regretted"], ["earns", "is earning"], ["will have been teaching", "will have taught"], ["will not have had"]], [
    "A situation in the past at a specific time: was working (worked is also possible).",
    "A past situation: earned / was earning.",
    "A feeling continuing up to a past moment: had been feeling.",
    "Completed before the decision: had spent.",
    "A main past event: made.",
    "A past reaction: thought.",
    "A present permanent situation: teaches.",
    "Up to now: has never regretted.",
    "A present fact: earns.",
    "Duration up to a future point: will have been teaching.",
    "Up to a future point: won't have had."
  ], "Read an article about Laura."]
]);

D.extend("challenge-advanced", [
  ["m", 5, "Not until I got home ___ that I had left my bag on the train.", ["did I realise", "I realised", "had I realised"], "Not until + inversion with the past simple."],
  ["m", 5, "By the time the report is published, the minister ___.", ["will have resigned", "resigns", "will resign"], "Completed before a future point: future perfect."],
  ["m", 6, "Little ___ that the decision would change her life.", ["did she know", "she knew", "she had known"], "Little + inversion: did she know."],
  ["m", 5, "I ___ to London many times, but this trip felt different.", ["had been", "have gone", "was going"], "Experience up to a past moment (this trip, now in the past): past perfect."],
  ["m", 6, "Scarcely ___ the stage when the lights went out.", ["had he stepped onto", "he stepped onto", "did he step onto"], "Scarcely + past perfect with inversion … when + past simple."],
  ["m", 5, "She looked as though she ___ a ghost.", ["had seen", "saw", "has seen"], "As though + past perfect for an earlier unreal situation."],
  ["m", 6, "The negotiations ___ for months by the time an agreement was finally reached.", ["had been dragging on", "dragged on", "have been dragging on"], "Duration up to a past point: past perfect continuous."],
  ["m", 5, "It's high time we ___ a decision.", ["made", "make", "have made"], "It's high time + past simple (with present meaning)."],
  ["m", 6, "Had I known about the strike, I ___ the train.", ["wouldn't have taken", "didn't take", "won't take"], "Third conditional with inversion: would have + past participle."],
  ["m", 5, "This is the first time the company ___ a loss.", ["has reported", "reported", "reports"], "‘This is the first time’ + present perfect."],
  ["m", 6, "Hardly a day ___ without some new revelation about the scandal.", ["goes by", "is going by", "has gone by"], "A general, repeated situation: present simple (hardly a day goes by)."],
  ["m", 6, "By the time the vaccine is approved, researchers ___ on it for over a decade.", ["will have been working", "will be working", "work"], "Duration up to a future point: future perfect continuous."],
  ["p", 6, "The archive", [
    "When the historian Dr Amara Osei first ___ (enter) the abandoned archive in 2019, nobody ___ (open) its doors for almost fifty years. Dust ___ (cover) every surface, and rainwater ___ (leak) through the roof for decades, slowly destroying the lower shelves.",
    "Since then, she and her team ___ (catalogue) more than 40,000 documents, and they ___ (still / find) surprises every week. Only last month they ___ (discover) a bundle of letters that ___ (lie) unnoticed behind a cabinet since the 1920s.",
    "By the time the project ends in 2027, the team ___ (digitise) the entire collection, and researchers all over the world ___ (be able) to read it online. “People often ask me whether it ___ (be) worth it,” she says. “Ask me again in ten years.”"
  ], [["entered"], ["had opened"], ["covered", "was covering"], ["had been leaking"], ["have catalogued", "have been cataloguing"], ["are still finding"], ["discovered"], ["had lain", "had been lying"], ["will have digitised"], ["will be able"], ["is", "has been", "was"]], [
    "A completed past event at a specific time: entered.",
    "Before that moment, over fifty years: had opened.",
    "A description of the scene at that time: covered / was covering.",
    "Duration of a process up to a past point: had been leaking.",
    "Since then = up to now: have catalogued (or have been cataloguing).",
    "Something happening repeatedly around now: are still finding.",
    "A finished time (last month): discovered.",
    "A state lasting up to a past point: had lain (lie → lay → lain), or had been lying.",
    "Completed by a future point: will have digitised.",
    "A future ability: will be able.",
    "A general question about the project: is / has been / was all possible in reported context."
  ], "Read part of a magazine article."]
]);

/* ===================== NEW: long texts and realistic situations ===================== */
D.add({ id: "mixed-texts", area: "mixed", group: "texts", title: "Texts and situations", short: "Long texts, emails and dialogues with all the tenses",
  intro: "Real texts mix tenses all the time. Read each text from beginning to end before you start: the context, not a single word, tells you which tense you need. The texts are in order of difficulty, from White belt (A1) to Black belt (C2).",
  uses: [["Read the whole text first", "The meaning of the paragraph decides the tense."], ["Look at the time of the story", "Is it now, a finished past, a period up to now, or the future?"], ["Ask what the speaker means", "A habit? An action in progress? A result? A plan?"], ["Check the form", "Subject agreement, auxiliaries and irregular verbs."]],
  q: [
    ["p", 1, "My family", [
      "Hello! My name ___ (be) Sofia and I ___ (live) in Turin with my family. My dad ___ (work) in a hospital and my mum ___ (teach) maths.",
      "I ___ (have) a little brother, Leo. He ___ (not / like) school, but he ___ (love) football. Every Saturday he ___ (play) in a team.",
      "Right now it's Sunday morning. Leo ___ (sleep), Dad ___ (cook) pancakes and I ___ (write) this message. What ___ (you / do) at the moment?"
    ], [["is"], ["live"], ["works"], ["teaches"], ["have"], ["does not like"], ["loves"], ["plays"], ["is sleeping"], ["is cooking"], ["am writing"], ["are you doing"]], [
      "A fact about her: is.", "A permanent situation: live.", "A permanent job: works.", "A permanent job; -ch verbs add -es: teaches.",
      "Have (possession) is a state: have.", "A state verb, negative: doesn't like.", "A state verb: loves.", "A regular habit (every Saturday): plays.",
      "Happening now: is sleeping.", "Happening now: is cooking.", "Happening now: am writing.", "Asking about now: are you doing."
    ], "Read Sofia's message to a new pen friend."],
    ["p", 1, "Last weekend", [
      "Last weekend ___ (be) great. On Saturday I ___ (go) to the park with my friends. We ___ (play) volleyball and ___ (eat) ice cream.",
      "In the evening I ___ (watch) a film with my sister. It ___ (not / be) very good, but we ___ (laugh) a lot.",
      "On Sunday I ___ (stay) at home because it ___ (rain). Next weekend I ___ (visit) my grandparents – I'm going to take them some flowers. I ___ (love) visiting them!"
    ], [["was"], ["went"], ["played"], ["ate"], ["watched"], ["was not"], ["laughed"], ["stayed"], ["rained", "was raining"], ["am going to visit", "am visiting"], ["love"]], [
      "A finished time: was.", "Past simple of go: went.", "Regular past: played.", "Past simple of eat: ate.",
      "A finished action: watched.", "Negative past of be: wasn't.", "A finished action: laughed.", "A finished action: stayed.",
      "A past situation: rained / was raining.", "A plan: am going to visit (or am visiting).", "A general feeling now: love."
    ], "Read Tom's diary."],
    ["p", 2, "A new job", [
      "Hi Mark, how are you? I ___ (just / start) a new job at a travel agency! I ___ (be) there for two weeks now and I really like it.",
      "Before this, I ___ (work) in a supermarket for three years. It ___ (be) OK, but the hours were terrible.",
      "In my new job I ___ (help) customers to plan their holidays. At the moment I ___ (learn) how to use the booking system. Yesterday I ___ (sell) my first holiday – a week in Greece! Next month the company ___ (send) me on a training course in Madrid – they booked my flight today. I'm sure it ___ (be) fun. Write soon and tell me what you ___ (do) these days!"
    ], [["have just started"], ["have been"], ["worked"], ["was"], ["help"], ["am learning"], ["sold"], ["is sending"], ["will be"], ["are doing"]], [
      "Just + present perfect: a very recent action.", "Duration up to now with be: have been.", "A finished period in the past: worked.",
      "A finished situation: was.", "A general description of the job: help.", "A temporary activity now: am learning.",
      "A finished time (yesterday): sold.", "An arrangement already made: is sending.", "An opinion-based prediction: will be.",
    "A temporary activity around now (these days): are doing."
    ], "Read Elena's email."],
    ["p", 2, "At the hotel reception", [
      "Receptionist: Good evening. ___ (you / have) a reservation?",
      "Guest: Yes, I ___ (book) a double room online last week. The name's Bianchi.",
      "Receptionist: Ah yes, Mr Bianchi. You ___ (stay) for three nights, is that right?",
      "Guest: That's right. What time ___ (breakfast / start)?",
      "Receptionist: It ___ (start) at seven and finishes at ten. ___ (you / ever / stay) with us before?",
      "Guest: No, this is my first time in Edinburgh. I ___ (hear) a lot about it, though.",
      "Receptionist: I'm sure you ___ (enjoy) it. Oh, and it ___ (rain) at the moment, so take an umbrella if you go out. I ___ (give) you one from the desk.",
      "Guest: Thank you very much."
    ], [["Do you have"], ["booked"], ["are staying"], ["does breakfast start"], ["starts"], ["Have you ever stayed"], ["have heard"], ["will enjoy"], ["is raining"], ["will give"]], [
      "Have (possession) as a state: Do you have …?", "A finished time (last week): booked.", "An arrangement: are staying.",
      "A timetable question: does breakfast start.", "A timetable: starts.", "Experience up to now: Have you ever stayed?",
      "Experience up to now: have heard.", "An opinion-based prediction: will enjoy.", "Happening now: is raining.", "An offer made now: I'll give."
    ], "Read the conversation."],
    ["p", 3, "The best concert of my life", [
      "I ___ (be) to dozens of concerts, but the best one ___ (be) in Verona in 2022. My best friend ___ (buy) the tickets months before as a birthday present, so it was a complete surprise.",
      "When we ___ (arrive) at the Arena, thousands of people ___ (already / queue) outside. The sun ___ (set) and everybody ___ (sing) the band's songs.",
      "The concert ___ (last) three hours. I ___ (never / hear) such a perfect sound before. Since then I ___ (listen) to that album hundreds of times. Next summer the band ___ (play) in Milan, and we ___ (definitely / go)!"
    ], [["have been"], ["was"], ["had bought"], ["arrived"], ["were already queuing", "were already queueing", "had already queued"], ["was setting"], ["was singing", "were singing"], ["lasted"], ["had never heard"], ["have listened"], ["is playing", "plays"], ["are definitely going", "will definitely go", "are definitely going to go"]], [
      "Experience up to now: have been.", "A specific past time (in 2022): was.", "Before the concert: had bought.",
      "A main event: arrived.", "In progress at the moment of arrival: were already queuing.", "Background in progress: was setting.",
      "Background in progress: was singing.", "A finished duration: lasted.", "Experience up to that past moment: had never heard.",
      "Since then = up to now: have listened.", "An arranged / scheduled concert: is playing.", "A firm plan: are definitely going."
    ], "Read the blog post."],
    ["p", 3, "A complaint", [
      "Dear Sir or Madam, I ___ (write) to complain about a pair of headphones that I ___ (order) from your website on 3 May.",
      "The headphones ___ (arrive) a week late, and when I ___ (open) the box, I ___ (find) that one of the speakers ___ (not / work). Since then I ___ (call) your customer service three times, but nobody ___ (reply) to my emails.",
      "I ___ (use) your website for many years and I ___ (never / have) a problem before. I hope you ___ (send) me a replacement as soon as possible. I ___ (look) forward to hearing from you. Yours faithfully, Anna Conti"
    ], [["am writing"], ["ordered"], ["arrived"], ["opened"], ["found"], ["did not work", "was not working"], ["have called"], ["has replied"], ["have used", "have been using"], ["have never had"], ["will send"], ["look", "am looking"]], [
      "A fixed formal opening: I am writing.", "A specific past date: ordered.", "A finished past event: arrived.",
      "A past event in sequence: opened.", "The next event: found.", "The state at that time: didn't work.",
      "Since then = up to now: have called.", "Up to now: has replied.", "Duration up to now: have used.",
      "Experience up to now: have never had.", "A future hope: will send.", "Formal closing: I look forward (I am looking forward)."
    ], "Read the email."],
    ["p", 4, "The lost dog", [
      "Our dog Biscuit ___ (disappear) last Tuesday afternoon. My son ___ (play) with him in the garden when the postman ___ (leave) the gate open, and Biscuit ___ (run) off into the woods.",
      "We ___ (search) for hours, but it ___ (get) dark and we ___ (have) to go home. That night nobody ___ (sleep) much.",
      "Since then we ___ (put) up posters all over town, and dozens of people ___ (offer) to help. Yesterday a farmer ___ (phone) to say he ___ (see) a small brown dog near his barn. We ___ (drive) there tomorrow morning – fingers crossed!"
    ], [["disappeared"], ["was playing"], ["left"], ["ran"], ["searched"], ["was getting", "got"], ["had"], ["slept"], ["have put"], ["have offered"], ["phoned"], ["had seen"], ["are driving", "are going to drive"]], [
      "A finished past event: disappeared.", "Background activity in progress: was playing.", "The event that interrupted it: left.",
      "The next event: ran.", "A finished period: searched.", "A gradual change at that time: was getting.",
      "A past necessity: had to.", "A finished past situation: slept.", "Since then = up to now: have put.",
      "Up to now: have offered.", "A finished time (yesterday): phoned.", "Before he phoned: had seen.", "An arrangement / plan: are driving."
    ], "Read the family's post on a local website."],
    ["p", 4, "Job interview", [
      "Interviewer: So, tell me about yourself. What ___ (you / do) at the moment?",
      "Candidate: I ___ (work) for a small marketing agency. I ___ (be) there since 2021, and before that I ___ (study) economics in Bologna.",
      "Interviewer: Why ___ (you / want) to leave?",
      "Candidate: I ___ (learn) a lot, but I ___ (look) for a new challenge for some time now. Recently I ___ (manage) two big campaigns on my own.",
      "Interviewer: Impressive. If we offer you the job, when ___ (you / be able) to start?",
      "Candidate: My contract ___ (end) on 30 June, so by July I ___ (finish) all my current projects."
    ], [["are you doing", "do you do"], ["work", "am working"], ["have been"], ["studied"], ["do you want"], ["have learnt", "have learned"], ["have been looking"], ["have managed"], ["will you be able"], ["ends"], ["will have finished"]], [
      "Asking about the current situation: are you doing (do you do = what's your job).",
      "A current job: work / am working.", "Since + a state up to now: have been.", "A finished period before that: studied.",
      "Want is a state verb: do you want.", "Experience up to now: have learnt.", "An activity continuing up to now: have been looking.",
      "Completed achievements in a recent period: have managed.", "A future ability: will you be able.", "A fixed date in a contract: ends.",
      "Completed before a future point: will have finished."
    ], "Read the job interview."],
    ["p", 5, "The return of the wolves", [
      "For most of the twentieth century, wolves ___ (be) absent from the Alps. Hunters ___ (kill) the last ones by the 1930s, and for decades many people ___ (believe) they would never come back.",
      "Then, in the 1990s, wolves from the Apennines ___ (start) moving north. Today around 300 packs ___ (live) in the Alpine region, and their number ___ (grow) every year.",
      "Not everyone is happy. Farmers ___ (complain) about attacks on their sheep for years, and some ___ (already / give) up keeping animals in the high pastures. Scientists, however, argue that by 2040 the wolves ___ (help) to restore the natural balance of the mountains. In the meantime, a new generation of shepherds ___ (learn) to live alongside them."
    ], [["were"], ["had killed"], ["believed"], ["started", "began"], ["live", "are living"], ["is growing"], ["have been complaining"], ["have already given"], ["will have helped"], ["is learning"]], [
      "A finished period in the past: were.", "Before a past point (by the 1930s): had killed.", "A past state: believed.",
      "A finished event at a specific time: started.", "A present situation: live.", "A trend in progress: is growing.",
      "A repeated activity up to now (for years): have been complaining.", "A completed action with a present result: have already given up.",
      "Completed before a future point: will have helped.", "A process in progress around now: is learning."
    ], "Read the article."],
    ["p", 5, "Customer service", [
      "Agent: Good afternoon, how can I help?",
      "Customer: Hi. I ___ (try) to get through to you for the last forty minutes! I ___ (order) a sofa six weeks ago, and it still ___ (not / arrive).",
      "Agent: I'm sorry to hear that. Let me check… Ah, I see the problem. The sofa ___ (leave) our warehouse on Monday, but the delivery company ___ (lose) it.",
      "Customer: Lost it? A sofa?",
      "Agent: I know, I'm very sorry. They ___ (look) for it since Tuesday. I ___ (send) you a replacement immediately, and you ___ (receive) a full refund of the delivery charge.",
      "Customer: When ___ (it / arrive)?",
      "Agent: The delivery ___ (be) scheduled for Friday. By then we ___ (also / send) you a voucher for your trouble."
    ], [["have been trying"], ["ordered"], ["has not arrived"], ["left"], ["has lost", "lost"], ["have been looking"], ["will send"], ["will receive"], ["will it arrive", "is it arriving", "does it arrive"], ["is"], ["will also have sent"]], [
      "An activity continuing up to now (for the last forty minutes): have been trying.",
      "A specific past time: ordered.", "Up to now (still): hasn't arrived.", "A specific past time (on Monday): left.",
      "A past action with a present result: has lost (lost is also accepted).", "Since + an activity continuing up to now: have been looking.",
      "A decision / promise made now: I'll send.", "A future consequence: will receive.", "A question about the future: will it arrive.",
      "A scheduled fact: is scheduled.", "Completed before a future point: will also have sent."
    ], "Read the phone call."],
    ["p", 6, "An obituary", [
      "The novelist Margaret Hale, who ___ (die) last Thursday at the age of 94, ___ (write) more than thirty novels in a career that ___ (span) seven decades.",
      "Born in Glasgow in 1931, she ___ (work) as a typist for ten years before her first book ___ (be) accepted by a publisher. By the time she turned fifty, she ___ (win) almost every major literary prize, yet she ___ (always / refuse) to give interviews.",
      "Friends say that she ___ (write) every morning until the very end; at the time of her death she ___ (work) on a novel about her childhood. Her publisher ___ (confirm) that it will appear next year. Few writers ___ (capture) the voice of ordinary people so faithfully, and readers ___ (still / discover) her books long after today's bestsellers are forgotten."
    ], [["died"], ["wrote"], ["spanned"], ["worked"], ["was"], ["had won"], ["always refused", "had always refused"], ["wrote", "was writing"], ["was working"], ["has confirmed"], ["have captured"], ["will still be discovering", "will still discover"]], [
      "A finished event (last Thursday): died.", "A completed life's work (she is dead): wrote.", "A finished period: spanned.",
      "A finished period in the past: worked.", "A completed past event (passive): was accepted.", "Completed before a past point (by the time she turned fifty): had won.",
      "A past habit throughout her life: always refused (or had always refused up to then).", "A past habit: wrote (was writing).",
      "In progress at a past moment: was working.", "A recent statement with present relevance: has confirmed.",
      "Up to now, across all time: have captured.", "In progress at a future time: will still be discovering."
    ], "Read the newspaper obituary."]
  ] });

})(window.TenseDojo);
