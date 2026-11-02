/* Verb Tenses Dojo — AREA 1: individual verb tenses (British English) */
(function (D) {

/* ============================ PRESENT ============================ */
D.add({ id: "present-simple", area: "tenses", group: "present", title: "Present Simple", short: "Habits, facts and permanent situations",
  intro: "We use the present simple for things that are generally true: habits and routines, facts, permanent situations and states.",
  form: "I / you / we / they work · he / she / it works · don't / doesn't + base form · Do / Does … ?",
  uses: [["Habits and routines", "I usually cycle to school."], ["Facts and general truths", "Water boils at 100°C."], ["Permanent situations", "My aunt lives in Bristol."], ["States (know, like, believe…)", "I don't understand this word."]],
  q: [
    ["g", 1, "My brother ___ (play) football every Saturday.", ["plays"], "‘Every Saturday’ describes a regular habit, so we use the present simple. With he / she / it we add -s: plays."],
    ["g", 1, "Water ___ (boil) at 100 degrees Celsius.", ["boils"], "This is a scientific fact that is always true, so we use the present simple."],
    ["m", 1, "We ___ in a small flat near the station.", ["live", "lives", "are live", "living"], "A permanent situation takes the present simple. With ‘we’ there is no -s, and ‘are live’ and ‘living’ are not possible verb forms here."],
    ["g", 1, "She ___ (not / eat) meat. She's a vegetarian.", ["does not eat"], "Negative present simple with he / she / it: doesn't + base form. Note that we say ‘doesn't eat’, not ‘doesn't eats’."],
    ["m", 2, "Where ___ your cousins live?", ["do", "does", "are", "is"], "Present simple questions use do / does + base form. ‘Your cousins’ is plural, so we need do."],
    ["g", 2, "The bank ___ (not / close) until five, so we have plenty of time.", ["does not close"], "The bank's opening hours are a fixed, regular situation, so we use the present simple: doesn't close."],
    ["m", 2, "How often ___ to the gym?", ["do you go", "are you going", "you go", "go you"], "Questions about frequency (how often) refer to habits, so we use the present simple: do + subject + base form."],
    ["g", 2, "I ___ (not / understand) what this word means.", ["do not understand"], "Understand is a state verb: it describes a mental state, not an action, so it is not normally used in the continuous."],
    ["m", 3, "This soup ___ delicious. What's in it?", ["tastes", "is tasting", "taste", "tasting"], "Here taste describes a quality of the soup (a state), so we use the present simple. ‘Is tasting’ would describe the action of trying food."],
    ["g", 3, "Most people in my town ___ (speak) two languages.", ["speak"], "A general truth about a permanent situation takes the present simple. ‘Most people’ is plural, so there is no -s."],
    ["m", 3, "The Earth ___ around the Sun once a year.", ["goes", "is going", "go", "has gone"], "A scientific fact takes the present simple. The subject is singular (the Earth), so we add -es: goes."],
    ["g", 4, "My grandmother rarely ___ (watch) television; she prefers listening to the radio.", ["watches"], "‘Rarely’ describes how often something happens, so we use the present simple. Verbs ending in -ch add -es: watches."]
  ] });

D.add({ id: "present-continuous", area: "tenses", group: "present", title: "Present Continuous", short: "Actions happening now and temporary situations",
  intro: "We use the present continuous for actions in progress now or around now, temporary situations and changing situations.",
  form: "am / is / are + verb-ing",
  uses: [["Actions in progress now", "Shh! The baby is sleeping."], ["Temporary situations", "I'm staying with my cousins this week."], ["Changing situations", "The climate is getting warmer."], ["Annoying habits with always", "He's always leaving the door open."]],
  q: [
    ["g", 1, "Be quiet, please! I ___ (study) for my exam.", ["am studying"], "The action is happening at the moment of speaking, so we use the present continuous: am + studying."],
    ["g", 1, "Look! It ___ (snow).", ["is snowing"], "‘Look!’ shows that the action is happening right now, so we use the present continuous."],
    ["m", 1, "My parents ___ dinner in the kitchen right now.", ["are cooking", "cook", "is cooking", "cooks"], "‘Right now’ signals an action in progress. ‘My parents’ is plural, so we use are + cooking."],
    ["g", 2, "We ___ (not / watch) this film. You can change the channel.", ["are not watching"], "The situation is true at the moment of speaking, so we use the negative present continuous: aren't watching."],
    ["m", 2, "Why ___ that heavy coat? It's really warm today.", ["are you wearing", "do you wear", "you are wearing", "wear you"], "We are asking about what the person is doing now, so we use the present continuous. In questions the auxiliary comes before the subject: are you wearing."],
    ["g", 2, "My sister ___ (stay) with us until she finds a new flat.", ["is staying"], "This is a temporary situation (until she finds a flat), so we use the present continuous."],
    ["m", 2, "Listen! Someone ___ at the door.", ["is knocking", "knocks", "knock", "knocked"], "‘Listen!’ draws attention to something happening right now, so we use the present continuous."],
    ["m", 3, "The number of electric cars on our roads ___ steadily at the moment.", ["is growing", "grows", "grow", "growing"], "We use the present continuous for a situation that is changing or developing around now. ‘At the moment’ confirms this."],
    ["g", 3, "I ___ (read) a fascinating book about the Romans at the moment, but I haven't finished it yet.", ["am reading"], "The present continuous can describe an activity happening around now, even if it isn't happening at this exact second."],
    ["g", 3, "Sorry, I can't talk now — I ___ (drive).", ["am driving"], "The action is in progress at the moment of speaking, so we use the present continuous."],
    ["g", 4, "Tom can't come to the phone because he ___ (have) a shower.", ["is having"], "Have is a state verb when it means possess, but in expressions like have a shower it describes an action, so it can be continuous."],
    ["m", 4, "I ___ what you mean, but I don't agree.", ["see", "am seeing", "sees", "have seen"], "When see means understand, it is a state verb and takes the present simple. ‘I'm seeing’ would mean meeting or dating someone."]
  ] });

D.add({ id: "present-perfect-simple", area: "tenses", group: "present", title: "Present Perfect Simple", short: "Experiences, recent events and situations up to now",
  intro: "We use the present perfect simple to connect the past with the present: life experiences, recent events with a present result, and situations that continue up to now.",
  form: "have / has + past participle",
  uses: [["Life experiences (ever, never)", "Have you ever been to Japan?"], ["Recent events with a present result", "I've lost my phone, so I can't call you."], ["Unfinished time periods", "I've drunk three coffees today."], ["Situations up to now (for, since)", "We've known each other since primary school."], ["With just, already and yet", "She's just left."]],
  q: [
    ["g", 1, "I ___ (never / see) the sea.", ["have never seen"], "We use the present perfect for life experiences up to now. Never goes between have and the past participle."],
    ["g", 1, "Oh no! I ___ (lose) my keys.", ["have lost"], "The past action has a result in the present: I don't have my keys now. In British English this calls for the present perfect."],
    ["m", 1, "___ you ever eaten sushi?", ["Have", "Did", "Has", "Were"], "We ask about life experiences with Have you ever + past participle. ‘Eaten’ is a past participle, so we need have."],
    ["g", 2, "We ___ (know) each other since primary school.", ["have known"], "Know is a state verb, so for a situation that started in the past and continues now we use the present perfect simple, not the continuous."],
    ["m", 2, "She isn't here. She ___ to the supermarket.", ["has gone", "has been", "goes", "have gone"], "Has gone means she went and is still there (or on her way). Has been would mean she went and has already come back, which contradicts ‘she isn't here’."],
    ["g", 2, "Have you finished your homework? — No, I ___ (not / start) it yet.", ["have not started"], "Yet in negative sentences is used with the present perfect: the action hasn't happened up to now."],
    ["m", 2, "My dad ___ three cups of coffee today, and it's only ten o'clock.", ["has drunk", "drank", "has drank", "drinks"], "Today is an unfinished period of time, so we use the present perfect. The past participle of drink is drunk."],
    ["g", 3, "This is the most beautiful place I ___ (ever / visit).", ["have ever visited"], "After a superlative (the most beautiful…) we use the present perfect with ever to talk about experience up to now."],
    ["g", 3, "Can I borrow a pen? Mine ___ (just / run) out of ink.", ["has just run"], "Just with the present perfect describes a very recent action with a present result (I need a pen now)."],
    ["m", 3, "How long ___ your current phone?", ["have you had", "do you have", "are you having", "did you have"], "With how long for a situation that started in the past and continues now, we use the present perfect. Have (possess) is a state verb, so it isn't continuous."],
    ["g", 4, "It's the first time she ___ (drive) on the left, so she's a bit nervous.", ["has driven"], "After ‘It's the first time…’ referring to the present, we use the present perfect."],
    ["m", 4, "The government ___ a new law on plastic packaging, which comes into force next month.", ["has introduced", "introduces", "was introducing", "had introduced"], "News of a recent action with present relevance is usually reported in the present perfect."]
  ] });

D.add({ id: "present-perfect-continuous", area: "tenses", group: "present", title: "Present Perfect Continuous", short: "Duration of activities up to now",
  intro: "We use the present perfect continuous for activities that started in the past and are still continuing, or have just stopped, often to emphasise how long they have lasted.",
  form: "have / has been + verb-ing",
  uses: [["Duration up to now (for, since, how long)", "I've been waiting for twenty minutes."], ["Recent activity with visible results", "Your eyes are red. Have you been crying?"], ["Repeated activity up to now", "She's been calling me all morning."]],
  q: [
    ["g", 1, "I ___ (wait) for the bus for twenty minutes.", ["have been waiting"], "The activity started in the past and is still going on. ‘For twenty minutes’ emphasises duration, so we use the present perfect continuous."],
    ["g", 1, "It ___ (rain) since this morning.", ["has been raining"], "The rain started this morning and is still continuing, so we use has been + -ing with since."],
    ["m", 1, "How long ___ English?", ["have you been learning", "are you learning", "do you learn", "you have been learning"], "How long asks about the duration of an activity that is still in progress, so we use the present perfect continuous, with have before the subject."],
    ["g", 2, "Your hands are covered in paint. What ___ (you / do)?", ["have you been doing"], "We can see the result of a recent activity (paint on the hands), so we use the present perfect continuous."],
    ["m", 2, "She's tired because she ___ all day.", ["has been working", "is working", "works", "had been working"], "Her tiredness now is the result of an activity that lasted all day up to now, so we use the present perfect continuous."],
    ["g", 2, "We ___ (look) for a new house for months, but we haven't found anything yet.", ["have been looking"], "The search started months ago and is still continuing, so we use the present perfect continuous."],
    ["m", 3, "I ___ this book for weeks and I'm only on page 50.", ["have been reading", "have read", "read", "am reading"], "The activity is unfinished and has lasted for weeks. ‘Have read’ would suggest the book is finished."],
    ["g", 3, "Sorry I'm late. ___ (you / wait) long?", ["have you been waiting"], "The waiting started before and has continued up to now, so we use the present perfect continuous in the question."],
    ["m", 3, "The ground is wet, but the sun is out now. It ___ .", ["has been raining", "rains", "is raining", "had rained"], "The rain has just stopped and we can see the result (the wet ground), so we use the present perfect continuous."],
    ["g", 4, "Lately I ___ (try) to go to bed earlier, but it isn't easy.", ["have been trying"], "Lately refers to a period up to now; the repeated activity is still in progress, so we use the present perfect continuous."],
    ["m", 4, "He ___ to get hold of you since nine o'clock. Did you switch your phone off?", ["has been trying", "is trying", "tries", "was trying"], "Since nine o'clock refers to a period that continues up to now, so we need a perfect form. The continuous stresses the repeated attempts."],
    ["g", 4, "My knees hurt because I ___ (run) a lot recently.", ["have been running"], "The pain now is the result of a recent repeated activity, so we use the present perfect continuous."]
  ] });

/* ============================== PAST ============================== */
D.add({ id: "past-simple", area: "tenses", group: "past", title: "Past Simple", short: "Completed actions at a specific time in the past",
  intro: "We use the past simple for actions and situations that are finished and happened at a specific time in the past.",
  form: "regular verbs + -ed · irregular forms (go → went) · didn't + base form · Did … ?",
  uses: [["Completed actions at a known time", "We visited Rome in 2019."], ["Sequences of events", "He opened the door, looked around and left."], ["Past habits and states", "I walked to school when I was a child."]],
  q: [
    ["g", 1, "We ___ (visit) our grandparents last weekend.", ["visited"], "‘Last weekend’ is a finished time in the past, so we use the past simple."],
    ["g", 1, "I ___ (see) a great film yesterday.", ["saw"], "Yesterday is a finished time. See is irregular: see – saw – seen."],
    ["m", 1, "Where ___ on holiday last summer?", ["did you go", "you went", "have you gone", "did you went"], "Past simple questions use did + subject + base form. ‘Last summer’ is finished time, so the present perfect is not possible."],
    ["g", 2, "She ___ (not / come) to the party on Saturday because she was ill.", ["did not come"], "The negative past simple is didn't + base form (not ‘didn't came’)."],
    ["m", 2, "Shakespeare ___ in 1616.", ["died", "has died", "dies", "was dying"], "A completed event at a specific past date takes the past simple."],
    ["g", 2, "When I was a child, I ___ (walk) to school every day.", ["walked", "used to walk"], "For past habits we use the past simple (or used to + base form)."],
    ["m", 2, "They ___ the match 3–1 last night.", ["won", "have won", "win", "were winning"], "‘Last night’ is a finished time, and the match is a completed event, so we use the past simple."],
    ["g", 2, "___ (you / enjoy) the concert last night?", ["did you enjoy"], "A question about a finished past event: Did + subject + base form."],
    ["g", 3, "The plane ___ (land), the passengers got off and we finally saw our cousins.", ["landed"], "For a sequence of completed actions in the past we use the past simple for each one."],
    ["m", 3, "I ___ my phone on the train this morning, but someone handed it in.", ["left", "have left", "had left", "was leaving"], "The action is completed and the story continues in the past (someone handed it in), so we use the past simple."],
    ["g", 3, "Mozart ___ (write) more than 600 pieces of music.", ["wrote"], "Mozart is no longer alive, so his life is a finished period: we use the past simple, not the present perfect."],
    ["m", 4, "When ___ learning the guitar?", ["did you start", "have you started", "had you started", "were you starting"], "Questions with when ask about a specific past time, so we use the past simple, not the present perfect."]
  ] });

D.add({ id: "past-continuous", area: "tenses", group: "past", title: "Past Continuous", short: "Actions in progress at a moment in the past",
  intro: "We use the past continuous for actions that were in progress at a particular moment in the past, often as the background to another event.",
  form: "was / were + verb-ing",
  uses: [["In progress at a past moment", "At 8 p.m. I was having dinner."], ["Background to a shorter event", "I was walking home when it started to rain."], ["Two actions in progress at the same time", "While I was cooking, he was laying the table."], ["Setting the scene in a story", "The sun was shining and birds were singing."]],
  q: [
    ["g", 1, "At eight o'clock last night I ___ (have) dinner.", ["was having"], "The action was in progress at a specific moment in the past, so we use the past continuous."],
    ["g", 1, "They ___ (play) tennis when it started to rain.", ["were playing"], "The longer activity (playing) was in progress when a shorter event (it started to rain) interrupted it."],
    ["m", 2, "What ___ when I phoned you? You sounded out of breath.", ["were you doing", "did you do", "have you done", "do you do"], "We are asking about an activity in progress at the moment of the phone call, so we use the past continuous."],
    ["g", 2, "I ___ (not / listen) when the teacher gave us the homework, so I don't know what to do.", ["was not listening"], "The negative past continuous shows what was (not) happening at the moment of another past event."],
    ["m", 2, "While I ___ in the garden, my brother was cooking lunch.", ["was working", "work", "am working", "have been working"], "Two actions in progress at the same time in the past: we use the past continuous for both."],
    ["g", 2, "The sun ___ (shine) and the birds were singing as we set off.", ["was shining"], "The past continuous sets the scene at the beginning of a story: it describes the background."],
    ["m", 3, "She cut her finger while she ___ vegetables.", ["was chopping", "is chopping", "has chopped", "chops"], "The longer action in progress (chopping) is interrupted by a short event (she cut her finger)."],
    ["g", 3, "This time last year we ___ (travel) around Australia.", ["were travelling", "were traveling"], "‘This time last year’ refers to a moment in the past when the activity was in progress. (British spelling: travelling.)"],
    ["m", 3, "I saw Emma at the station. She ___ for a train to London.", ["was waiting", "waited", "has waited", "waits"], "At the moment I saw her, the waiting was in progress, so we use the past continuous."],
    ["g", 3, "What ___ (you / think) about when I interrupted you?", ["were you thinking"], "The thinking was in progress when the interruption happened. Think about (an activity) can be continuous."],
    ["g", 4, "When I arrived, everyone ___ (dance), so I joined in.", ["was dancing"], "The dancing was already in progress when I arrived, so we use the past continuous."],
    ["m", 4, "The phone rang just as I ___ out of the door.", ["was going", "go", "have gone", "am going"], "‘Just as’ introduces an action in progress at the moment of another event (the phone rang)."]
  ] });

D.add({ id: "past-perfect-simple", area: "tenses", group: "past", title: "Past Perfect Simple", short: "An earlier past before another past",
  intro: "We use the past perfect to make it clear that one action happened before another action or time in the past.",
  form: "had + past participle",
  uses: [["The earlier of two past actions", "When we arrived, the film had already started."], ["By + a past time", "By 2010, they had moved to Leeds."], ["After ‘It was the first time…’", "It was the first time I had flown."]],
  q: [
    ["g", 1, "When we arrived at the cinema, the film ___ (already / start).", ["had already started"], "The film started before we arrived. The past perfect shows the earlier of the two past actions."],
    ["g", 1, "I couldn't get in because I ___ (forget) my keys.", ["had forgotten"], "Forgetting the keys happened before the moment I couldn't get in, so we use the past perfect."],
    ["m", 2, "She was nervous because she ___ on a plane before.", ["had never been", "has never been", "was never", "is never"], "Her experience up to that past moment is expressed with the past perfect: had never been."],
    ["g", 2, "By the time the police arrived, the thief ___ (escape).", ["had escaped"], "‘By the time’ shows that one action was completed before another past action."],
    ["m", 2, "After she ___ her homework, she went out with her friends.", ["had finished", "has finished", "finishes", "was finishing"], "The homework was finished before she went out. The past perfect makes this order clear."],
    ["g", 2, "I recognised him immediately, although I ___ (not / see) him for years.", ["had not seen"], "The period of not seeing him lasted up to that moment in the past, so we use the past perfect."],
    ["m", 3, "The streets were wet. It ___ during the night.", ["had rained", "has rained", "rains", "is raining"], "The rain happened before the past moment we are describing (the streets were wet), so we use the past perfect."],
    ["g", 3, "When I got to the office, I realised I ___ (leave) my laptop at home.", ["had left"], "Leaving the laptop happened before I realised it, so we use the past perfect."],
    ["m", 3, "It was the best meal I ___ .", ["had ever eaten", "have ever eaten", "ever ate", "was ever eating"], "After a superlative in a past context (It was the best…), we use the past perfect with ever."],
    ["g", 3, "She was upset because her friends ___ (not / invite) her to the party.", ["had not invited"], "Not inviting her happened before she felt upset, so we use the past perfect."],
    ["g", 4, "By 2015, my parents ___ (live) in four different countries.", ["had lived"], "By + a past date, counting completed experiences (four countries): we use the past perfect simple."],
    ["m", 5, "No sooner ___ home than the phone rang.", ["had I got", "I had got", "did I get", "have I got"], "After No sooner at the start of a sentence we use inversion with the past perfect: No sooner had I got… than…"]
  ] });

D.add({ id: "past-perfect-continuous", area: "tenses", group: "past", title: "Past Perfect Continuous", short: "Duration up to a point in the past",
  intro: "We use the past perfect continuous for an activity that had been in progress up to a point in the past, often to explain a past situation.",
  form: "had been + verb-ing",
  uses: [["Duration up to a past moment", "We had been driving for hours when we finally stopped."], ["The cause of a past situation", "She was tired because she had been running."]],
  q: [
    ["g", 1, "We ___ (drive) for three hours when we finally stopped for lunch.", ["had been driving"], "The driving lasted for three hours up to a moment in the past (when we stopped), so we use the past perfect continuous."],
    ["g", 2, "Her eyes were red because she ___ (cry).", ["had been crying"], "The activity (crying) explains a past situation (her red eyes), so we use the past perfect continuous."],
    ["m", 2, "I ___ for an hour when the bus finally came.", ["had been waiting", "have been waiting", "am waiting", "wait"], "The waiting continued for an hour up to a past moment (when the bus came)."],
    ["g", 2, "The ground was wet because it ___ (rain) all night.", ["had been raining"], "The rain lasted all night before the past moment we describe, and explains the wet ground."],
    ["m", 3, "How long ___ there before you moved to London?", ["had you been living", "have you been living", "are you living", "do you live"], "We ask about the duration of an activity up to a point in the past (before you moved)."],
    ["g", 3, "He was out of breath because he ___ (run).", ["had been running"], "The activity (running) caused a past situation (being out of breath)."],
    ["m", 3, "When I met her, she ___ for the company for ten years.", ["had been working", "has been working", "is working", "works"], "The working lasted ten years up to a past moment (when I met her)."],
    ["g", 3, "They ___ (argue) before I arrived — you could feel the tension in the room.", ["had been arguing"], "An activity in progress just before a past moment explains the situation (the tension)."],
    ["m", 4, "By the time the match was cancelled, the fans ___ outside the stadium for over two hours.", ["had been queuing", "have been queuing", "are queuing", "queue"], "Duration (for over two hours) up to a past moment (the cancellation)."],
    ["g", 4, "I ___ (not / sleep) well for weeks, so I finally went to see a doctor.", ["had not been sleeping"], "A situation that lasted weeks up to a past decision: the negative past perfect continuous."],
    ["m", 4, "The kitchen smelt of smoke. Someone ___ toast and burnt it.", ["had been making", "has been making", "makes", "is making"], "The smell is evidence of an earlier activity in a past context, so we use the past perfect continuous."]
  ] });

/* ============================= FUTURE ============================= */
D.add({ id: "used-to", area: "tenses", group: "past", title: "Used to", short: "Past habits and states that are no longer true",
  intro: "We use used to + base form for habits and states in the past that are no longer true now.",
  form: "used to + base form · didn't use to + base form · Did … use to …?",
  uses: [["Past habits", "I used to walk to school."], ["Past states", "There used to be a cinema in our street."], ["Contrast with now", "She used to have long hair, but now it's short."]],
  q: [
    ["g", 2, "When I was little, I ___ (be) afraid of the dark.", ["used to be", "was"], "A past state that is no longer true: used to + base form (or the past simple)."],
    ["g", 2, "We ___ (live) in a flat, but now we have a house.", ["used to live", "lived"], "A past situation that has changed: used to live."],
    ["g", 2, "My grandfather ___ (not / use) a computer, but now he sends emails every day.", ["did not use to use", "didn't use to use", "never used to use"], "Negative: didn't use to + base form (no -d after didn't)."],
    ["m", 2, "___ you use to play with dolls?", ["Did", "Were", "Do", "Have"], "Questions: Did + subject + use to + base form."],
    ["m", 3, "There ___ a cinema here, but they closed it in 2015.", ["used to be", "use to be", "was used to be", "used to being"], "There used to be = there was in the past (but not now)."],
    ["m", 3, "I ___ go to the beach every summer when I was a child.", ["used to", "use to", "am used to", "was used"], "Used to + base form for past habits."]
  ] });

D.add({ id: "future-simple", area: "tenses", group: "future", title: "Future Simple (will)", short: "Predictions, instant decisions, offers and promises",
  intro: "We use will for predictions based on opinion, decisions made at the moment of speaking, offers, promises and future facts.",
  form: "will / won't + base form",
  uses: [["Predictions (opinion)", "I think it'll be a great party."], ["Decisions at the moment of speaking", "It's cold. I'll close the window."], ["Offers and promises", "I'll help you with that bag. · I won't tell anyone."], ["Future facts", "The sun will set at 6.15 tonight."]],
  q: [
    ["g", 1, "I think it ___ (be) sunny tomorrow.", ["will be"], "After I think we often use will for a prediction based on personal opinion."],
    ["m", 1, "The phone's ringing. — OK, I ___ it.", ["will answer", "am answering", "answer", "answered"], "This is a decision made at the moment of speaking, so we use will."],
    ["g", 1, "Don't worry, I ___ (not / tell) anyone your secret.", ["will not tell"], "A promise is expressed with will; the negative is won't (will not)."],
    ["m", 2, "Those bags look heavy. I ___ you with them.", ["will help", "am helping", "help", "helped"], "An offer made at the moment of speaking is expressed with will."],
    ["g", 2, "Maybe we ___ (meet) again one day.", ["will meet"], "An uncertain prediction (maybe) is expressed with will."],
    ["m", 2, "I'm sure you ___ your exam. You've worked so hard.", ["will pass", "are passing", "pass", "passed"], "After I'm sure we use will for a confident prediction based on opinion."],
    ["g", 2, "I promise I ___ (call) you as soon as I land.", ["will call"], "We use will for promises."],
    ["m", 3, "'I've left my wallet at home!' 'Never mind, I ___ you some money.'", ["will lend", "am lending", "lend", "am going to lend"], "The speaker decides at this moment, so will is correct. Going to would suggest a decision made earlier."],
    ["g", 3, "I'm not sure, but I ___ (probably / be) a bit late tonight.", ["will probably be"], "Probably goes after will in positive sentences: will probably be."],
    ["m", 3, "Wait — I don't have any cash. — Don't worry, I ___ for the coffees.", ["will pay", "pay", "am paying", "paid"], "An instant decision and offer: will + base form."],
    ["m", 3, "Experts predict that by 2050 there ___ more than nine billion people on Earth.", ["will be", "are being", "is", "will have"], "A prediction about the future: there will be."],
    ["g", 4, "If you don't hurry, you ___ (miss) the bus.", ["will miss", "are going to miss"], "In the main clause of a first conditional we normally use will (going to is also possible)."]
  ] });

D.add({ id: "be-going-to", area: "tenses", group: "future", title: "Be going to", short: "Plans, intentions and predictions with evidence",
  intro: "We use be going to for plans and intentions already decided before the moment of speaking, and for predictions based on what we can see now.",
  form: "am / is / are going to + base form",
  uses: [["Plans and intentions", "I'm going to study medicine."], ["Predictions based on present evidence", "Look at those clouds. It's going to rain."]],
  q: [
    ["g", 1, "Look at those dark clouds. It ___ (rain).", ["is going to rain"], "We can see the evidence now (the clouds), so we use be going to for the prediction."],
    ["g", 1, "I ___ (buy) a new bike with my birthday money. I've already chosen it.", ["am going to buy", "am buying"], "The decision was made before speaking (I've already chosen it): this is an intention, so we use be going to."],
    ["m", 1, "What ___ do after you finish school?", ["are you going to", "will you to", "do you going to", "are you go to"], "To ask about plans and intentions we use be going to + base form."],
    ["g", 2, "Watch out! That glass ___ (fall) off the table!", ["is going to fall"], "We can see that something is about to happen, so we use be going to."],
    ["m", 2, "We've saved enough money. We ___ a car next month.", ["are going to buy", "buy", "would buy", "bought"], "A plan decided in advance is expressed with be going to."],
    ["g", 2, "She ___ (not / take) the job — she told me yesterday.", ["is not going to take"], "She has already decided, so we use the negative of be going to."],
    ["m", 3, "He's driving far too fast. He ___ an accident.", ["is going to have", "is having", "has", "had"], "A prediction based on present evidence (he's driving too fast) takes be going to."],
    ["g", 3, "I ___ (start) going to the gym — I've decided to get fit.", ["am going to start"], "‘I've decided’ shows an intention formed before speaking: be going to."],
    ["m", 3, "Careful! You ___ that vase!", ["are going to knock over", "knock over", "knocked over", "are knock over"], "We can see that the accident is about to happen, so we use be going to."],
    ["g", 3, "___ (you / tell) her the truth? You need to decide soon.", ["are you going to tell"], "We are asking about someone's intention, so we use be going to."],
    ["m", 4, "Laura is pregnant. She ___ a baby in June.", ["is going to have", "has had", "had", "have"], "The present situation (she is pregnant) is clear evidence for the future event."],
    ["g", 4, "According to the sat nav, we ___ (arrive) about ten minutes late — the traffic is terrible.", ["are going to arrive", "will arrive"], "The prediction is based on present evidence (the sat nav, the traffic), so be going to is the most natural choice."]
  ] });

D.add({ id: "present-continuous-future", area: "tenses", group: "future", title: "Present Continuous for future arrangements", short: "Fixed plans with a time and place",
  intro: "We use the present continuous for fixed future arrangements, usually when the time and place have already been agreed with other people.",
  form: "am / is / are + verb-ing (+ future time)",
  uses: [["Fixed arrangements", "I'm meeting Sara at six tonight."], ["Plans that involve other people or bookings", "We're flying to Dublin on Friday."]],
  q: [
    ["g", 1, "I ___ (meet) Sara at the café at six this evening.", ["am meeting"], "A fixed arrangement with a time and place: present continuous."],
    ["m", 1, "What ___ this weekend?", ["are you doing", "do you do", "you are doing", "have you done"], "To ask about arrangements we use the present continuous: What are you doing…?"],
    ["g", 1, "We ___ (fly) to Dublin on Friday. The tickets are booked.", ["are flying", "are going to fly"], "The tickets are booked, so this is a fixed arrangement: present continuous."],
    ["m", 2, "I can't come to football practice on Thursday. I ___ the dentist.", ["am seeing", "see", "have seen", "saw"], "A dentist's appointment is a fixed arrangement, so we use the present continuous."],
    ["g", 2, "My cousins ___ (come) to stay with us next week.", ["are coming", "are going to come"], "An arrangement already agreed: present continuous."],
    ["m", 2, "___ anything special for your birthday next week?", ["Are you doing", "Do you do", "Did you do", "Have you done"], "We are asking about future arrangements, so we use the present continuous."],
    ["g", 2, "___ (you / do) anything on Friday evening? There's a party at Sam's.", ["are you doing"], "Asking about someone's arrangements: Are you doing…?"],
    ["g", 3, "Sorry, I can't have lunch with you tomorrow — I ___ (have) lunch with a client.", ["am having"], "An arrangement already in the diary: present continuous."],
    ["m", 3, "Jake ___ his new girlfriend to the wedding next month.", ["is bringing", "brings", "brought", "has brought"], "This is a future arrangement, so we use the present continuous."],
    ["g", 3, "We ___ (not / go) away this summer because we're moving house.", ["are not going"], "The negative present continuous for future arrangements: we aren't going away."],
    ["m", 4, "I'd love to come, but my parents ___ their anniversary that evening, so I'll be at the restaurant with them.", ["are celebrating", "celebrate", "celebrated", "have celebrated"], "A planned event with a fixed time and place is a future arrangement."],
    ["g", 4, "I ___ (start) my new job on Monday — I signed the contract last week.", ["am starting", "start"], "A fixed arrangement is usually expressed with the present continuous. (The present simple is also possible here, as the start date is fixed like a schedule.)"]
  ] });

D.add({ id: "present-simple-future", area: "tenses", group: "future", title: "Present Simple for future timetables", short: "Schedules, timetables and time clauses",
  intro: "We use the present simple for future events that follow a timetable, schedule or programme, and after time words like when, as soon as and until.",
  form: "present simple + future time (The train leaves at 7.45.)",
  uses: [["Transport timetables", "The train leaves at 7.45."], ["Scheduled events", "The concert starts at eight."], ["After when, as soon as, before, until", "I'll call you when I arrive."]],
  q: [
    ["g", 1, "Hurry up! The train ___ (leave) in ten minutes.", ["leaves"], "Train departures follow a timetable, so we use the present simple for the future."],
    ["m", 1, "The film ___ at 8.30, so let's meet at 8.15.", ["starts", "start", "starting", "is start"], "Cinema times are a schedule: present simple. The subject is singular, so starts."],
    ["g", 1, "What time ___ (the museum / open) tomorrow?", ["does the museum open"], "Opening times are a timetable, so we ask with does + subject + base form."],
    ["m", 2, "Our flight ___ at 6 a.m., so we need to get up very early.", ["departs", "has departed", "will departing", "departed"], "Flight times are scheduled, so we use the present simple."],
    ["g", 2, "The summer term ___ (finish) on 18th July.", ["finishes"], "School terms follow an official calendar: present simple."],
    ["m", 2, "I'll text you as soon as I ___ home.", ["get", "will get", "am getting", "got"], "After time conjunctions like as soon as we use the present simple to refer to the future, not will."],
    ["g", 2, "The conference ___ (not / begin) until Tuesday.", ["does not begin"], "A scheduled event: negative present simple."],
    ["m", 3, "We can't stay late — the last bus ___ at 11.15.", ["goes", "go", "is go", "went"], "Bus times are part of a timetable: present simple."],
    ["g", 3, "Don't forget to lock the door before you ___ (leave).", ["leave"], "After before (a time conjunction) we use the present simple with future meaning."],
    ["m", 3, "The exhibition ___ on 3rd May and runs until the end of June.", ["opens", "open", "opening", "has opened"], "A programme of events is described in the present simple (opens… and runs…)."],
    ["g", 4, "Once the meeting ___ (end), I'll send you the report.", ["ends", "has ended"], "After once (a time conjunction) we use a present tense, not will. The present perfect is also possible to stress completion."],
    ["m", 4, "I won't be able to relax until I ___ my exam results.", ["get", "will get", "am getting", "will have got"], "After until we use the present simple to refer to the future."]
  ] });

D.add({ id: "future-continuous", area: "tenses", group: "future", title: "Future Continuous", short: "Actions in progress at a future time",
  intro: "We use the future continuous for actions that will be in progress at a particular time in the future, and to ask politely about people's plans.",
  form: "will be + verb-ing",
  uses: [["In progress at a future time", "This time tomorrow I'll be lying on a beach."], ["Background to a future event", "When you arrive, I'll be cooking dinner."], ["Polite questions about plans", "Will you be using the car tonight?"]],
  q: [
    ["g", 1, "This time tomorrow I ___ (lie) on a beach in Spain.", ["will be lying"], "‘This time tomorrow’ is a moment in the future when the action will be in progress."],
    ["g", 2, "At 9 a.m. on Monday I ___ (sit) my maths exam.", ["will be sitting"], "At that future moment the exam will be in progress: future continuous."],
    ["m", 2, "Don't call me at seven — I ___ dinner then.", ["will be having", "have", "had", "have had"], "At seven o'clock the action will be in progress, so we use the future continuous."],
    ["g", 2, "When you arrive, we ___ (wait) for you at the station.", ["will be waiting"], "The waiting will already be in progress when you arrive."],
    ["m", 3, "___ the car this evening? If not, could I borrow it?", ["Will you be using", "Do you use", "Did you use", "Have you used"], "The future continuous is a polite way to ask about someone's plans."],
    ["g", 3, "In ten years' time, I expect I ___ (work) abroad.", ["will be working"], "An activity that will be in progress at a time in the future."],
    ["m", 3, "Try not to phone between 2 and 4 — the baby ___ .", ["will be sleeping", "sleeps", "slept", "has slept"], "During that future period, the action will be in progress."],
    ["g", 3, "Don't worry about the plants — I ___ (pass) your house every day anyway, so I can water them.", ["will be passing", "pass"], "The future continuous describes something that will happen anyway, as part of the normal course of events."],
    ["m", 4, "By this time next week, we ___ across the Atlantic.", ["will be sailing", "sail", "sailed", "have sailed"], "At that moment next week the journey will be in progress."],
    ["g", 4, "I ___ (not / use) my laptop tomorrow, so you can borrow it.", ["will not be using", "will not use"], "The future continuous is often used to say neutrally what will (not) be happening, without suggesting a decision."],
    ["m", 4, "Ladies and gentlemen, we ___ shortly at Manchester Piccadilly.", ["will be arriving", "are arrived", "arrived", "have arrived"], "Announcements often use the future continuous for events that will happen as planned."]
  ] });

D.add({ id: "future-perfect-simple", area: "tenses", group: "future", title: "Future Perfect Simple", short: "Actions completed before a future time",
  intro: "We use the future perfect simple for actions that will be completed before a particular time in the future.",
  form: "will have + past participle",
  uses: [["Completed before a future time (by, by the time)", "By June, I'll have finished my exams."], ["Assumptions about the past", "It's six o'clock — they'll have arrived by now."]],
  q: [
    ["g", 1, "By the end of June, I ___ (finish) all my exams.", ["will have finished"], "‘By the end of June’: the action will be completed before that future time."],
    ["m", 2, "By the time you get here, we ___ dinner.", ["will have eaten", "are eating", "eat", "ate"], "‘By the time you get here’: dinner will be finished before that moment."],
    ["g", 2, "She ___ (read) all seven books by the end of the summer.", ["will have read"], "Completion before a future deadline: will have + past participle."],
    ["m", 2, "Next year my parents ___ married for 25 years.", ["will have been", "have been", "are", "were"], "Looking back from a future point (next year) over a period of time: will have been."],
    ["g", 3, "Call me after seven — I ___ (get) home by then.", ["will have got", "will have gotten"], "By then I'll have completed the action of getting home. (British English: got.)"],
    ["m", 3, "Hurry up! By the time we get to the cinema, the film ___ .", ["will have started", "starts", "has started", "started"], "The film will start before we arrive: will have started."],
    ["g", 3, "By 2030, I hope scientists ___ (find) a cure for many diseases.", ["will have found"], "By + future year: the action will be completed before that time."],
    ["m", 4, "I ___ the report by Friday, so you can have it at the weekend.", ["will have written", "write", "am writing", "wrote"], "The report will be completed before Friday: future perfect."],
    ["g", 4, "By the time you read this letter, I ___ (leave) the country.", ["will have left"], "The leaving will happen before the future moment of reading."],
    ["g", 4, "In two weeks' time I ___ (not / finish) the project, so I'll need more time.", ["will not have finished"], "The negative future perfect says that something will not be completed by a future time."],
    ["m", 5, "It's 6 p.m. — the parcel ___ by now. Let's check the doorstep.", ["will have arrived", "arrives", "is arriving", "will arrive"], "Will have + past participle can express a confident assumption about something that has probably already happened."]
  ] });

D.add({ id: "future-perfect-continuous", area: "tenses", group: "future", title: "Future Perfect Continuous", short: "Duration up to a point in the future",
  intro: "We use the future perfect continuous to emphasise how long an activity will have been in progress at a particular point in the future.",
  form: "will have been + verb-ing",
  uses: [["Duration up to a future point", "By June, I'll have been working here for ten years."], ["The cause of a future situation", "He'll be tired because he'll have been driving all day."]],
  q: [
    ["g", 2, "By next month, I ___ (work) here for ten years.", ["will have been working"], "We look back from a future point (next month) at the duration of an activity: future perfect continuous."],
    ["m", 2, "In September she ___ English for five years.", ["will have been studying", "will study", "studies", "studied"], "Duration up to a future point (September): will have been + -ing."],
    ["g", 3, "By the time the plane lands, we ___ (travel) for eighteen hours.", ["will have been travelling", "will have been traveling"], "The travelling will have lasted eighteen hours by a future moment (when the plane lands)."],
    ["m", 3, "He'll be exhausted when he arrives because he ___ all day.", ["will have been driving", "drives", "has driven", "drove"], "The activity will explain a future situation (he'll be exhausted)."],
    ["g", 3, "At 10 p.m. the volunteers ___ (search) for the missing dog for twelve hours.", ["will have been searching"], "Duration up to a specific future time: future perfect continuous."],
    ["m", 4, "By the end of this year, they ___ for a new stadium for over a decade.", ["will have been campaigning", "campaign", "are campaigning", "campaigned"], "The campaign will have lasted over a decade at a future point."],
    ["g", 4, "When I finally retire, I ___ (teach) for over forty years.", ["will have been teaching", "will have taught"], "Looking back from a future point at the length of an activity. The continuous stresses the duration; the simple is also possible."],
    ["m", 4, "Next Sunday we ___ together for exactly one year.", ["will have been going out", "go out", "are going out", "went out"], "Duration of a relationship up to a future date: future perfect continuous."],
    ["g", 5, "By the time the results are published, the researchers ___ (collect) data for almost a decade.", ["will have been collecting"], "The activity will have been in progress for a decade at a future moment."],
    ["m", 5, "Your eyes will be sore tomorrow if you stay up all night — you ___ at a screen for hours.", ["will have been staring", "stare", "are staring", "stared"], "The activity will be the cause of a future situation (sore eyes)."]
  ] });

})(window.TenseDojo);
