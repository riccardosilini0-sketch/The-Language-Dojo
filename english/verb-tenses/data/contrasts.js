/* Verb Tenses Dojo — AREA 2: verb tense contrasts (British English) */
(function (D) {

/* ------------------------- PRESENT CONTRASTS ------------------------- */
D.add({ id: "ps-vs-pc", area: "contrasts", group: "present", title: "Present Simple vs Present Continuous", short: "Habits and facts or actions happening now?",
  intro: "The present simple describes habits, facts and permanent situations. The present continuous describes actions in progress now and temporary situations.",
  uses: [["Present simple: habits and permanent situations", "Julia works in a bank."], ["Present continuous: now or temporary", "This week she's working from home."], ["State verbs (know, like, mean…) stay simple", "I know what you mean."]],
  q: [
    ["m", 1, "My dad usually ___ to work, but today he ___ the bus.", ["drives … is taking", "is driving … takes", "drives … takes", "is driving … is taking"], "‘Usually’ describes a habit (present simple); ‘today’ describes a temporary change happening now (present continuous)."],
    ["g", 1, "Listen! The baby ___ (cry).", ["is crying"], "‘Listen!’ shows the action is happening now: present continuous."],
    ["g", 1, "I ___ (go) swimming every Tuesday.", ["go"], "‘Every Tuesday’ describes a routine: present simple."],
    ["m", 2, "Sorry, I can't talk now. I ___ a shower.", ["am having", "have", "has", "had"], "The action is in progress at the moment of speaking: present continuous."],
    ["g", 2, "Water ___ (freeze) at 0°C.", ["freezes"], "A scientific fact is always true: present simple."],
    ["m", 2, "I ___ with my aunt this month while my parents are abroad.", ["am staying", "stay", "stays", "stayed"], "A temporary situation (this month) takes the present continuous."],
    ["g", 2, "She ___ (not / like) horror films.", ["does not like"], "Like is a state verb and describes a permanent preference: present simple."],
    ["m", 3, "This milk ___ strange. I think it's gone off.", ["smells", "is smelling", "smell", "is smell"], "Smell describing a quality is a state verb, so it takes the present simple. ‘Is smelling’ would mean someone is actively sniffing it."],
    ["g", 3, "Why ___ (you / look) at me like that? Have I said something wrong?", ["are you looking"], "The action is happening right now: present continuous."],
    ["m", 3, "Julia ___ in a bank, but at the moment she ___ from home.", ["works … is working", "is working … works", "works … works", "is working … is working"], "Her job in general is permanent (present simple); ‘at the moment’ describes a temporary situation (present continuous)."],
    ["g", 4, "I ___ (think) about changing schools. What do you reckon?", ["am thinking"], "Think meaning consider is an activity, so it can be continuous. Think meaning believe is a state and stays simple."],
    ["m", 4, "I ___ you're right, actually.", ["think", "am thinking", "thinks", "thought"], "Here think means believe (an opinion), which is a state: present simple."]
  ] });

D.add({ id: "pps-vs-ppc", area: "contrasts", group: "present", title: "Present Perfect Simple vs Present Perfect Continuous", short: "Result and quantity or duration and activity?",
  intro: "The present perfect simple focuses on the result or on how much / how many. The present perfect continuous focuses on the activity itself and how long it has lasted.",
  uses: [["Simple: result, how many, how much", "I've written three emails."], ["Continuous: activity, duration, side effects", "I've been writing emails all morning."], ["State verbs use the simple", "We've known each other for years."]],
  q: [
    ["m", 2, "I ___ three emails this morning.", ["have written", "have been writing", "write", "am writing"], "We say how many (three emails), so we focus on the completed result: present perfect simple."],
    ["m", 2, "I ___ emails all morning — I'm so bored.", ["have been writing", "have written", "wrote", "write"], "‘All morning’ and ‘I'm so bored’ focus on the long activity, so we use the continuous."],
    ["g", 2, "She ___ (paint) the kitchen. Look, it's finished — doesn't it look great?", ["has painted"], "The job is finished and we focus on the result: present perfect simple."],
    ["g", 2, "She ___ (paint) the kitchen — that's why she's got paint in her hair.", ["has been painting"], "We focus on the activity and its side effect (paint in her hair): present perfect continuous."],
    ["m", 3, "How many cups of tea ___ today?", ["have you drunk", "have you been drinking", "do you drink", "are you drinking"], "How many asks about quantity, so we use the present perfect simple."],
    ["m", 3, "We ___ each other for years.", ["have known", "have been knowing", "know", "are knowing"], "Know is a state verb, so it is not used in the continuous. Duration up to now with a state: present perfect simple."],
    ["g", 3, "I ___ (read) your book, but I haven't finished it yet.", ["have been reading"], "The activity is still unfinished: present perfect continuous."],
    ["g", 3, "I ___ (read) your book — here it is. Thanks for lending it to me.", ["have read"], "The book is finished and we focus on the completed result: present perfect simple."],
    ["m", 4, "He ___ to fix the printer for an hour, but it still isn't working.", ["has been trying", "is trying", "tries", "try"], "‘For an hour’ up to now with an unfinished activity: present perfect continuous."],
    ["g", 4, "Our team ___ (win) eight matches this season so far.", ["has won"], "We count completed results (eight matches), so we use the present perfect simple."],
    ["m", 5, "You look exhausted. ___?", ["Have you been running", "Have you run", "Have you ran", "Are you run"], "We guess the activity that caused a present situation (looking exhausted): present perfect continuous. ‘Ran’ is the past simple, not the participle."],
    ["g", 5, "I ___ (call) you four times! Where have you been?", ["have called"], "We count the number of times (four), so we use the present perfect simple."]
  ] });

/* -------------------------- PAST CONTRASTS -------------------------- */
D.add({ id: "pst-vs-pcont", area: "contrasts", group: "past", title: "Past Simple vs Past Continuous", short: "Completed events or actions in progress?",
  intro: "The past simple describes completed actions and the main events of a story. The past continuous describes actions in progress, often as the background to those events.",
  uses: [["Past simple: completed events, sequences", "He fell off his bike and broke his arm."], ["Past continuous: background in progress", "I was walking home when it started to rain."]],
  q: [
    ["g", 1, "I ___ (walk) home when it started to rain.", ["was walking"], "The longer action was in progress when a shorter event interrupted it: past continuous."],
    ["g", 1, "When the teacher came in, everyone ___ (stop) talking.", ["stopped"], "One completed action follows another (the teacher came in → everyone stopped): past simple."],
    ["m", 2, "While she ___ TV, the lights went out.", ["was watching", "watched", "watches", "has watched"], "‘While’ introduces the background action in progress: past continuous."],
    ["m", 2, "He ___ off his bike and broke his arm.", ["fell", "was falling", "falls", "has fallen"], "Two short completed actions in sequence: past simple."],
    ["g", 2, "What ___ (you / do) at 9 o'clock last night? I called but you didn't answer.", ["were you doing"], "We are asking about an activity in progress at a specific past moment: past continuous."],
    ["m", 3, "When the alarm went off, I ___ out of bed straight away.", ["jumped", "was jumping", "jump", "have jumped"], "‘Straight away’ shows a reaction that followed the alarm: past simple."],
    ["g", 3, "When I arrived at the party, Tom ___ (dance) with Lisa.", ["was dancing"], "The dancing was already in progress when I arrived: past continuous."],
    ["m", 3, "When I arrived at the party, Tom ___ me a drink.", ["gave", "was giving", "gives", "has given"], "Tom's action followed my arrival as the next event: past simple."],
    ["g", 3, "We ___ (have) breakfast when the postman knocked on the door.", ["were having"], "An action in progress (breakfast) interrupted by a short event (the knock)."],
    ["m", 3, "I ___ my keys while I was jogging in the park.", ["lost", "was losing", "lose", "have lost"], "Losing keys is a short, completed event that happened during a longer activity: past simple."],
    ["g", 4, "She ___ (read) a novel when she suddenly realised she had read it before.", ["was reading"], "The reading was in progress when the sudden realisation happened."],
    ["m", 4, "I ___ to my teacher when my phone rang loudly. It was so embarrassing!", ["was talking", "talked", "talk", "have talked"], "The conversation was in progress when the phone rang: past continuous."]
  ] });

D.add({ id: "pst-vs-ppf", area: "contrasts", group: "past", title: "Past Simple vs Past Perfect", short: "Which past action happened first?",
  intro: "The past simple describes past events in the order they happened. The past perfect goes one step further back: it shows an action that was already complete before another past moment.",
  uses: [["Past simple: events in sequence", "She opened the door, turned on the light and sat down."], ["Past perfect: the earlier past", "When I got to the station, the train had already left."]],
  q: [
    ["g", 1, "When I got to the station, the train ___ (already / leave).", ["had already left"], "The train left before I arrived. ‘Already’ highlights the earlier action: past perfect."],
    ["m", 2, "I ___ the film before, so I knew the ending.", ["had seen", "saw", "have seen", "see"], "Seeing the film happened before the past moment of knowing the ending: past perfect."],
    ["g", 2, "She ___ (be) very nervous because she had never flown before.", ["was"], "Her nervousness is the main past situation; the earlier experience is already in the past perfect."],
    ["m", 2, "By the time we got to the stadium, the match ___ .", ["had finished", "finished", "has finished", "finishes"], "‘By the time’ shows the match ended before we arrived: past perfect."],
    ["g", 2, "I ___ (call) her as soon as I heard the news.", ["called"], "One action follows another immediately (as soon as): past simple."],
    ["m", 3, "It was the first time I ___ snow.", ["had seen", "saw", "have seen", "see"], "After ‘It was the first time…’ we use the past perfect."],
    ["g", 3, "By the time the ambulance arrived, the man ___ (regain) consciousness.", ["had regained"], "‘By the time’ + past event: the other action was completed before it."],
    ["m", 3, "When we arrived, the party was over and everyone ___ home.", ["had gone", "has gone", "goes", "is going"], "Everyone left before we arrived (the party was over): past perfect."],
    ["g", 3, "I didn't recognise him at first because he ___ (grow) a beard.", ["had grown"], "Growing the beard happened before the moment I saw him: past perfect."],
    ["m", 4, "She ___ the door, turned on the light and sat down.", ["opened", "had opened", "has opened", "was opening"], "A simple sequence of actions in the order they happened: past simple."],
    ["g", 4, "When I opened the fridge, I found that someone ___ (eat) my yoghurt.", ["had eaten"], "The eating happened before I opened the fridge: past perfect."],
    ["m", 5, "Hardly ___ the room when the lights went out.", ["had she entered", "she had entered", "did she enter", "has she entered"], "Hardly… when is followed by inversion with the past perfect: Hardly had she entered… when…"]
  ] });

D.add({ id: "pcont-vs-ppf", area: "contrasts", group: "past", title: "Past Continuous vs Past Perfect", short: "In progress at that moment or already finished?",
  intro: "The past continuous shows that an action was in progress at a past moment. The past perfect shows that an action was already finished before that moment.",
  uses: [["Past continuous: still in progress", "When I got home, Mum was cooking dinner."], ["Past perfect: already completed", "When I got home, Mum had cooked dinner."]],
  q: [
    ["g", 2, "When I got home, my mum ___ (cook) dinner, so I helped her chop the vegetables.", ["was cooking"], "The cooking was still in progress, so I could help: past continuous."],
    ["g", 2, "When I got home, my mum ___ (cook) dinner, so we sat down and ate straight away.", ["had cooked", "had already cooked"], "Dinner was ready when I arrived: the cooking was already completed, so we use the past perfect."],
    ["m", 2, "When we arrived at the cinema, the film ___ , so we missed the beginning.", ["had started", "was starting", "starts", "has started"], "We missed the beginning, so the film started before we arrived: past perfect."],
    ["m", 3, "We found our seats just as the lights went down: the film ___ .", ["was just starting", "had just started", "just starts", "has just started"], "The film was beginning at that very moment, so we use the past continuous."],
    ["g", 3, "I couldn't answer the phone because I ___ (drive).", ["was driving"], "The driving was in progress when the phone rang: past continuous."],
    ["g", 3, "I couldn't open the door because I ___ (lose) my key.", ["had lost"], "Losing the key happened earlier and caused the problem: past perfect."],
    ["m", 3, "When the guests arrived, Sam ___ the table, so they helped him finish.", ["was laying", "had laid", "lays", "has laid"], "The job was unfinished when the guests arrived: past continuous."],
    ["m", 3, "When the guests arrived, Sam ___ the table, so everything was ready.", ["had laid", "was laying", "lays", "has laid"], "Everything was ready: the action was completed before they arrived, so we use the past perfect."],
    ["g", 4, "By the time the firefighters arrived, the fire ___ (spread) to the house next door.", ["had spread"], "‘By the time’: the spreading was completed before the firefighters arrived."],
    ["m", 4, "At midnight, the students ___ for their exam — they had no intention of going to bed.", ["were still revising", "had still revised", "still revise", "have still revised"], "At that moment the revision was still in progress: past continuous."],
    ["g", 4, "Halfway through the exam, she realised she ___ (make) a terrible mistake on the first page.", ["had made"], "The mistake was made before the moment she realised it: past perfect."]
  ] });

D.add({ id: "ppf-vs-ppfc", area: "contrasts", group: "past", title: "Past Perfect Simple vs Past Perfect Continuous", short: "Completed result or duration before a past moment?",
  intro: "Both look back from a past moment. The past perfect simple focuses on completed results and quantities; the past perfect continuous focuses on the activity and its duration.",
  uses: [["Simple: result, quantity", "By lunchtime she had written five reports."], ["Continuous: activity, duration, cause", "She was tired because she had been working all day."]],
  q: [
    ["m", 3, "She was tired because she ___ all afternoon.", ["had been gardening", "had gardened", "has gardened", "gardens"], "The tiredness was caused by a long activity: past perfect continuous."],
    ["m", 3, "By lunchtime, she ___ five reports.", ["had written", "had been writing", "writes", "has been writing"], "We count completed results (five reports): past perfect simple."],
    ["g", 3, "We ___ (walk) for hours and our feet were killing us.", ["had been walking"], "Duration of an activity up to a past moment, with a visible effect: past perfect continuous."],
    ["g", 3, "By the time I got there, they ___ (eat) all the pizza.", ["had eaten"], "The pizza was finished: a completed result, so we use the past perfect simple."],
    ["m", 4, "He ___ the guitar for ten years when he joined his first band.", ["had been playing", "has been playing", "was playing", "plays"], "Duration up to a past moment (when he joined): past perfect continuous."],
    ["g", 4, "She ___ (know) him for years before they started working together.", ["had known"], "Know is a state verb, so we use the past perfect simple even with duration."],
    ["m", 4, "The children's faces were muddy — they ___ in the garden.", ["had been playing", "had played", "have played", "play"], "The muddy faces are the side effect of an activity: past perfect continuous."],
    ["g", 4, "How many countries ___ (you / visit) before you turned eighteen?", ["had you visited"], "How many asks about completed experiences: past perfect simple."],
    ["m", 5, "Her eyes were red and puffy; it was obvious she ___ .", ["had been crying", "had cried", "cried", "has cried"], "Visible evidence of a recent activity in a past context: past perfect continuous."],
    ["g", 5, "By the end of the tour, the band ___ (perform) in over forty cities.", ["had performed"], "A completed total (over forty cities): past perfect simple."],
    ["m", 5, "The kitchen was a mess: flour everywhere, dirty bowls in the sink. Clearly, someone ___ .", ["had been baking", "has been baking", "bakes", "is baking"], "We deduce the activity from its effects in the past: past perfect continuous."]
  ] });

/* ------------------------- FUTURE CONTRASTS ------------------------- */
D.add({ id: "will-vs-going-to", area: "contrasts", group: "future", title: "Will vs Be Going To", short: "Instant decision or decided plan?",
  intro: "We use will for decisions made at the moment of speaking, offers and opinion-based predictions. We use be going to for plans already decided and predictions based on evidence.",
  uses: [["Will: decided now", "‘We've run out of milk.’ ‘I'll buy some.’"], ["Going to: decided before", "I'm going to study law at university."]],
  q: [
    ["m", 1, "'We've run out of milk.' 'Oh, have we? I ___ some on my way home.'", ["will buy", "am going to buy", "buy", "bought"], "‘Oh, have we?’ shows the speaker has only just found out: an instant decision takes will."],
    ["m", 1, "'Why are you putting on your trainers?' 'I ___ for a run.'", ["am going to go", "will go", "go", "went"], "The decision was made before speaking (that's why the trainers are on): be going to."],
    ["g", 2, "I've already decided: I ___ (study) law at university.", ["am going to study"], "‘I've already decided’ signals a prior intention: be going to."],
    ["g", 2, "'The phone's ringing.' 'Don't get up — I ___ (get) it.'", ["will get"], "An offer and decision made at the moment of speaking: will."],
    ["m", 2, "'I'm cold.' 'I ___ the heating on.'", ["will turn", "am going to turn", "turn", "turned"], "A spontaneous offer in reaction to what someone has just said: will."],
    ["g", 3, "'Have you got any plans for the summer?' 'Yes, we ___ (visit) my grandparents in Scotland. We booked the tickets ages ago.'", ["are going to visit", "are visiting"], "The plan was made long ago (tickets booked): be going to (or the present continuous)."],
    ["m", 3, "'Can someone help me with these boxes?' 'I ___ !'", ["will", "am going to", "do", "did"], "Volunteering on the spot is an instant decision: I will!"],
    ["g", 3, "She's bought all the ingredients — she ___ (make) a birthday cake for her brother.", ["is going to make", "is making"], "Buying the ingredients shows the plan existed before: be going to."],
    ["g", 4, "'I've got a terrible headache.' 'Wait here — I ___ (get) you some water.'", ["will get"], "A spontaneous offer to help: will."],
    ["m", 4, "I ___ a party next Saturday. I've already sent the invitations.", ["am going to have", "will have", "have", "had"], "The invitations have been sent, so the plan was decided earlier: be going to."],
    ["g", 4, "'What ___ (you / do) with all that wood?' 'I'm going to build a shed.'", ["are you going to do"], "We ask about an existing intention, as the answer confirms: be going to."]
  ] });

D.add({ id: "will-vs-pcont-future", area: "contrasts", group: "future", title: "Will vs Present Continuous (future arrangements)", short: "Prediction and decision or fixed arrangement?",
  intro: "We use will for predictions, promises and decisions made now. We use the present continuous for arrangements already fixed with other people.",
  uses: [["Will: decisions and predictions", "I think it'll be cold tomorrow."], ["Present continuous: arrangements", "I'm visiting my grandparents on Sunday."]],
  q: [
    ["m", 2, "I ___ my grandparents on Sunday. We arranged it last week.", ["am visiting", "will visit", "visit", "visited"], "‘We arranged it’: a fixed arrangement, so we use the present continuous."],
    ["m", 2, "'There's no bread.' 'I ___ to the shop and get some.'", ["will go", "am going", "go", "went"], "A decision made on the spot: will. (‘I'm going to the shop and get some’ is not grammatical.)"],
    ["g", 2, "I ___ (meet) Jack at the cinema at seven — we've already bought the tickets.", ["am meeting", "am going to meet"], "A fixed arrangement with a time and place: present continuous."],
    ["m", 3, "I think it ___ cold tomorrow.", ["will be", "is being", "is", "was"], "‘I think’ introduces an opinion-based prediction: will."],
    ["g", 3, "'Are you free tomorrow evening?' 'Sorry, I ___ (have) dinner with my aunt.'", ["am having", "am going to have"], "An arrangement already made: present continuous."],
    ["m", 3, "'I can't do this maths problem.' 'Don't worry, I ___ you.'", ["will help", "am helping", "help", "helped"], "A spontaneous offer: will."],
    ["g", 3, "My brother ___ (get) married in June. The wedding is at a castle!", ["is getting", "is going to get"], "A wedding is a fixed arrangement: present continuous."],
    ["m", 4, "Don't phone at eight — we ___ to the theatre. We've had the tickets for weeks.", ["are going", "will go", "go", "went"], "Tickets bought weeks ago: a fixed arrangement."],
    ["g", 4, "I don't think I ___ (pass) the driving test — I haven't practised enough.", ["will pass", "am going to pass"], "A prediction based on opinion (I don't think…): will."],
    ["m", 4, "'Shall we go out on Saturday?' 'I can't — I ___ my cousin's band at the festival.'", ["am seeing", "will see", "see", "saw"], "‘I can't’ shows an arrangement already exists: present continuous."],
    ["m", 5, "Perhaps one day robots ___ all our housework.", ["will do", "are doing", "do", "did"], "A speculative prediction about the distant future: will."]
  ] });

D.add({ id: "will-vs-fcont", area: "contrasts", group: "future", title: "Future Simple vs Future Continuous", short: "Single future action or action in progress?",
  intro: "Will + base form expresses decisions, promises and predictions. Will be + -ing describes an action that will be in progress at a particular future moment.",
  uses: [["Will: decisions, promises, predictions", "I'll send you a postcard, I promise."], ["Will be + -ing: in progress at a future time", "This time next week I'll be lying on a beach."]],
  q: [
    ["m", 2, "This time next week, I ___ on a beach in Greece.", ["will be lying", "will lie", "lie", "lay"], "At that future moment the action will be in progress: future continuous."],
    ["m", 2, "I ___ you a postcard from Greece, I promise.", ["will send", "will be sending", "send", "am sent"], "A promise is expressed with will + base form."],
    ["g", 3, "Don't call at eight — I ___ (watch) the final then.", ["will be watching"], "At eight o'clock the action will be in progress: future continuous."],
    ["g", 3, "I think our team ___ (win) the final.", ["will win", "is going to win"], "An opinion-based prediction: will + base form."],
    ["m", 3, "At midnight tonight, most of the town ___ .", ["will be sleeping", "will sleep", "sleeps", "slept"], "At that moment the action will be in progress: future continuous."],
    ["m", 3, "'It's really hot in here.' 'I ___ the window.'", ["will open", "will be opening", "open", "opened"], "A decision at the moment of speaking: will + base form."],
    ["g", 4, "When you get to the airport, I ___ (wait) for you at arrivals.", ["will be waiting"], "The waiting will already be in progress when you arrive."],
    ["m", 4, "___ past the post office on your way home? Could you post this for me?", ["Will you be going", "Will you go", "Do you go", "Did you go"], "We ask politely about someone's existing plans with the future continuous. ‘Will you go…?’ would sound like a request to go."],
    ["g", 4, "Don't worry, I ___ (not / forget) your birthday this year.", ["will not forget"], "A promise: will + base form."],
    ["m", 5, "In twenty years' time, people ___ in self-driving cars.", ["will be travelling", "travelled", "travel", "have travelled"], "We imagine a situation in progress at a future time: future continuous."]
  ] });

D.add({ id: "will-vs-fperf", area: "contrasts", group: "future", title: "Future Simple vs Future Perfect", short: "Happening then or completed by then?",
  intro: "Will + base form describes a future action. Will have + past participle describes an action that will already be completed before a future moment.",
  uses: [["Will: the action itself", "I'll call you as soon as I land."], ["Will have done: completed before", "By the time you arrive, I'll have cooked dinner."]],
  q: [
    ["m", 2, "By the time you arrive, I ___ dinner, so we can eat straight away.", ["will have cooked", "will cook", "cook", "cooked"], "Dinner will be ready before you arrive: future perfect."],
    ["m", 2, "When you arrive, I ___ dinner — I'll start as soon as you get here.", ["will cook", "will have cooked", "cooked", "have cooked"], "The cooking will start after you arrive, not before: will + base form."],
    ["g", 3, "By the time you get this message, I ___ (leave) for the airport.", ["will have left"], "Leaving will happen before you read the message: future perfect."],
    ["m", 3, "I ___ you as soon as I land.", ["will call", "will have called", "called", "have called"], "A promise about a future action: will + base form."],
    ["g", 3, "By the time I'm thirty, I hope I ___ (visit) at least twenty countries.", ["will have visited"], "‘By the time I'm thirty’ + a completed total: future perfect."],
    ["m", 4, "Hurry up! The show ___ by the time we get there.", ["will have started", "will start", "starts", "started"], "The show will begin before we arrive: future perfect."],
    ["m", 4, "Don't worry — the show ___ at eight, so we've got plenty of time.", ["will start", "will have started", "has started", "had started"], "We describe when the show will begin, not something completed before: will + base form."],
    ["g", 4, "I'm sure she ___ (enjoy) the party tomorrow.", ["will enjoy", "is going to enjoy"], "A prediction about a future event: will + base form."],
    ["m", 5, "By 2040, electric cars ___ petrol cars in most European countries.", ["will have replaced", "have replaced", "replace", "had replaced"], "By + a future year: the change will be complete by then."],
    ["g", 5, "Phone me at nine — the meeting ___ (end) by then.", ["will have ended"], "‘By then’: the meeting will already be over."]
  ] });

D.add({ id: "fperf-vs-fperfc", area: "contrasts", group: "future", title: "Future Perfect Simple vs Future Perfect Continuous", short: "Completed result or duration by a future point?",
  intro: "Both look back from a future point. The future perfect simple focuses on what will be completed; the continuous focuses on how long an activity will have lasted.",
  uses: [["Simple: completed result, quantity", "By June, I'll have read ten books."], ["Continuous: duration of an activity", "By June, I'll have been reading this book for six months."]],
  q: [
    ["m", 3, "By June, I ___ ten books for my course.", ["will have read", "will have been reading", "read", "am reading"], "A completed quantity (ten books) by a future time: future perfect simple."],
    ["m", 3, "By June, I ___ this book for six months — it's so long!", ["will have been reading", "will have read", "read", "have read"], "The duration of an unfinished activity: future perfect continuous."],
    ["g", 4, "By the end of the day, she ___ (answer) over a hundred emails.", ["will have answered"], "A completed total by a future time: future perfect simple."],
    ["g", 4, "By five o'clock, we ___ (wait) here for three hours.", ["will have been waiting"], "The duration of an activity up to a future time: future perfect continuous."],
    ["m", 4, "When the marathon finishes, the runners ___ for over four hours.", ["will have been running", "have been running", "are running", "ran"], "Duration up to a future moment: future perfect continuous."],
    ["m", 4, "By the time the race finishes, she ___ 42 kilometres.", ["will have run", "will have been running", "runs", "ran"], "A completed distance (42 km): future perfect simple."],
    ["g", 5, "Next year my grandparents ___ (live) in this village for half a century.", ["will have been living", "will have lived"], "Duration up to a future point. Live works with both forms; the continuous stresses the length of time."],
    ["m", 5, "By the time he retires, he ___ more than 300 bridges.", ["will have designed", "will have been designing", "designs", "designed"], "A completed total (300 bridges): future perfect simple."],
    ["g", 5, "He'll be exhausted tonight — he ___ (drive) since six this morning.", ["will have been driving"], "A long activity that will explain a future situation: future perfect continuous."],
    ["m", 5, "By the end of this course, you ___ all the main tenses in English.", ["will have studied", "will have been studying", "study", "studied"], "We focus on a completed result (all the main tenses): future perfect simple."]
  ] });

/* -------------------------- OTHER CONTRASTS -------------------------- */
D.add({ id: "pp-vs-ps", area: "contrasts", group: "other", title: "Present Perfect vs Past Simple", short: "Connected to now or finished time?",
  intro: "The present perfect connects the past to the present (experiences, unfinished time, present results). The past simple describes finished actions at a finished time.",
  uses: [["Present perfect: up to now, no finished time", "I've been to Paris three times."], ["Past simple: finished time", "I went to Paris last year."]],
  q: [
    ["m", 1, "I ___ to Paris last year.", ["went", "have gone", "have been", "go"], "‘Last year’ is finished time, so we use the past simple."],
    ["m", 1, "Have you ever ___ to Paris?", ["been", "went", "go", "going"], "Have + past participle. To talk about visiting a place we use been."],
    ["g", 2, "We ___ (move) to this town in 2018.", ["moved"], "‘In 2018’ is a finished time: past simple."],
    ["g", 2, "We ___ (live) in this town since 2018.", ["have lived", "have been living"], "‘Since 2018’ describes a situation continuing up to now: present perfect."],
    ["m", 2, "When ___ your phone?", ["did you lose", "have you lost", "had you lost", "do you lose"], "Questions with when ask about a finished past time: past simple."],
    ["m", 2, "I ___ my homework, so now I can relax.", ["have finished", "finished", "finish", "had finished"], "The past action has a present result (now I can relax). In British English we use the present perfect."],
    ["g", 3, "She ___ (work) at the bank for ten years, but she retired in 2020.", ["worked"], "The period is finished (she retired): past simple."],
    ["g", 3, "She ___ (work) at the bank for ten years and she still loves it.", ["has worked", "has been working"], "She still works there: present perfect."],
    ["m", 3, "Shakespeare ___ 37 plays.", ["wrote", "has written", "writes", "had written"], "Shakespeare's life is a finished period: past simple."],
    ["m", 4, "This is the third time this week the lift ___ down.", ["has broken", "broke", "breaks", "had broken"], "After ‘This is the third time…’ we use the present perfect."],
    ["g", 4, "I ___ (not / see) Tom since he left school.", ["have not seen"], "Since + past event: a situation continuing up to now, so we use the present perfect."],
    ["m", 4, "I ___ Tom when I was in town yesterday.", ["saw", "have seen", "had seen", "see"], "‘Yesterday’ is finished time: past simple."]
  ] });

D.add({ id: "will-vs-ps-timetable", area: "contrasts", group: "other", title: "Will vs Present Simple (future timetables)", short: "Prediction and decision or timetable and time clause?",
  intro: "We use will for predictions, promises and decisions. We use the present simple for timetabled events and after time words such as when, as soon as and until.",
  uses: [["Will: predictions, promises, decisions", "I think it will rain tomorrow."], ["Present simple: timetables", "Our flight departs at 6.15."], ["Present simple after when, as soon as, until", "I'll call you when I arrive."]],
  q: [
    ["m", 2, "I'll call you when I ___ at the hotel.", ["arrive", "will arrive", "arrived", "am arrive"], "After when (a time conjunction) we use the present simple, not will."],
    ["m", 2, "I think it ___ tomorrow.", ["will rain", "rains", "rained", "raining"], "An opinion-based prediction: will."],
    ["g", 2, "What time ___ (the next bus / leave)?", ["does the next bus leave"], "Bus times follow a timetable: present simple."],
    ["m", 3, "As soon as the film ___ , we'll get something to eat.", ["finishes", "will finish", "finished", "finishing"], "After as soon as we use the present simple with future meaning."],
    ["g", 3, "I ___ (help) you with your project after dinner, I promise.", ["will help"], "A promise about a future action: will + base form."],
    ["m", 3, "Our flight ___ at 6.15 tomorrow morning, so we need to leave home at four.", ["departs", "departing", "is depart", "depart"], "A scheduled departure: present simple."],
    ["g", 3, "Let's wait here until the rain ___ (stop).", ["stops"], "After until we use the present simple with future meaning."],
    ["m", 4, "We won't start the meeting until everyone ___ .", ["arrives", "will arrive", "arrived", "arrive"], "After until: present simple. Everyone is singular, so arrives."],
    ["g", 4, "I'm sure you ___ (love) the new museum.", ["will love", "are going to love"], "A confident prediction (I'm sure): will."],
    ["m", 4, "'It's so hot in here.' 'I ___ the air conditioning on.'", ["will put", "put", "am put", "puts"], "A decision made at the moment of speaking: will."],
    ["g", 5, "If the train ___ (be) late again, I'll complain to the company.", ["is"], "In the if-clause of a first conditional we use the present simple, not will."],
    ["m", 5, "By the time the ceremony ___ , all the guests will have taken their seats.", ["begins", "will begin", "began", "will have begun"], "After by the time (a time conjunction) we use the present simple with future meaning."]
  ] });

})(window.TenseDojo);
