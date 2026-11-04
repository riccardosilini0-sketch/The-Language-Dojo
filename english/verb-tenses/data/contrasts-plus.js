/* Verb Tenses — contrasts: new topics (three past tenses, the four future forms) and
   new multiple-choice batteries for every contrast. In each item the right answer depends
   on the situation described, not on a single time expression. */
(function (D) {

/* ===================== NEW: Past Simple vs Past Continuous vs Past Perfect ===================== */
D.add({ id: "past-narrative", area: "contrasts", group: "past", title: "Past Simple, Past Continuous and Past Perfect", short: "The three tenses of storytelling",
  intro: "In a story, the past simple moves the action forward, the past continuous describes the background or an action in progress, and the past perfect goes back to something that happened earlier.",
  form: "Past simple: worked / went · Past continuous: was / were + -ing · Past perfect: had + past participle",
  uses: [["Main events, one after another", "She opened the door and switched on the light."], ["Background / action in progress", "It was raining and people were hurrying home."], ["An interrupted action", "I was cooking when the phone rang."], ["An earlier past action", "When I arrived, the film had started."]],
  q: [
    ["m", 2, "I ___ a shower when the doorbell rang, so I didn't answer.", ["was having", "had", "had had"], "The shower was in progress when the doorbell interrupted it: past continuous."],
    ["m", 3, "When we got to the station, the train ___, so we took a taxi.", ["had left", "was leaving", "left"], "The train left before we arrived (that's why we took a taxi): past perfect. ‘Was leaving’ would mean we could still see it going."],
    ["m", 3, "When we got to the station, the train ___, so we ran and just managed to jump on.", ["was leaving", "had left", "left"], "The train was in the process of leaving at that moment: past continuous."],
    ["m", 3, "When the guests arrived, Tom ___ the table, so they all helped him finish.", ["was laying", "had laid", "laid"], "He hadn't finished (they helped him finish): an action in progress, past continuous."],
    ["m", 3, "When the guests arrived, Tom ___ the table, so they sat down straight away.", ["had laid", "was laying", "lays"], "The table was ready before they arrived: past perfect."],
    ["m", 3, "When the guests arrived, Tom ___ the door and took their coats.", ["opened", "had opened", "was opening"], "Two main events in sequence (arrived → opened): past simple."],
    ["m", 2, "It was a beautiful morning. The birds ___ and the sun was shining.", ["were singing", "sang", "had sung"], "Background description of the scene: past continuous."],
    ["m", 4, "She didn't recognise him because he ___ a beard since their last meeting.", ["had grown", "was growing", "grew"], "The change happened before she saw him: past perfect."],
    ["m", 3, "I ___ my keys while I was running for the bus, and I only noticed at home.", ["dropped", "was dropping", "had been dropping"], "A short completed action during a longer one: past simple."],
    ["m", 4, "By the time the ambulance arrived, a nurse who ___ past had already helped the man.", ["was walking", "walked", "has walked"], "She was in the middle of walking past when the accident happened: past continuous."],
    ["m", 4, "He was exhausted because he ___ the night before.", ["hadn't slept", "wasn't sleeping", "didn't sleep"], "The lack of sleep came before the moment described and explains it: past perfect."],
    ["m", 3, "What ___ at ten last night? I called you twice.", ["were you doing", "had you done", "did you do"], "An activity in progress at a specific past moment: past continuous."],
    ["m", 4, "The house was quiet. The children ___ to bed and Mum was reading in the kitchen.", ["had gone", "were going", "went"], "They went to bed before the moment described (now they are in bed): past perfect."],
    ["m", 2, "We ___ the film last Saturday and we loved it.", ["saw", "were seeing", "had seen"], "A completed event at a finished past time, no earlier reference point: past simple."],
    ["m", 4, "As I ___ the letter, I realised that someone had opened it before me.", ["was reading", "had read", "have read"], "‘As’ + an action in progress when the realisation came: past continuous."],
    ["g", 2, "The phone rang while I ___ (drive), so I didn't answer it.", ["was driving"], "While + a longer action in progress: past continuous."],
    ["g", 3, "I couldn't get into the flat because I ___ (lose) my keys.", ["had lost", "lost"], "The loss happened before the moment I couldn't get in: past perfect."],
    ["g", 3, "She ___ (finish) her coffee, picked up her bag and left.", ["finished"], "A sequence of main events: past simple."],
    ["x", 4, "Olivia had a broken arm in all the photos from the holiday.", "She ___ (fall) off her bike a week before they left.", ["had fallen"], "The accident happened before the holiday: past perfect."],
    ["x", 3, "Nobody heard the burglar.", "We ___ (sleep) when he climbed in through the window.", ["were sleeping"], "An activity in progress interrupted by another action: past continuous."],
    ["x", 4, "The concert was a disaster.", "The singer ___ (forget) the words of the first song, so she started again.", ["forgot"], "A main event in the story, followed by her reaction: past simple."],
    ["x", 4, "Mark looked very pale at breakfast.", "He ___ (not / feel) well all night, he said.", ["had not been feeling", "had not felt"], "A state continuing up to a past moment: past perfect (continuous)."],
    ["g", 3, "When I looked out of the window, it ___ (snow) heavily and the roads were white.", ["was snowing"], "The scene at the moment I looked: past continuous."],
    ["g", 4, "When I looked out of the window, it ___ (stop) snowing, so we went outside to play.", ["had stopped"], "The snow stopped before I looked: past perfect."],
    ["p", 3, "The lost passport", [
      "Last summer my friend Kate and I ___ (fly) to Lisbon for a long weekend. When we ___ (arrive) at the airport, Kate ___ (look) in her bag and went pale: she ___ (leave) her passport at home!",
      "While she ___ (phone) her brother, I ___ (check) the timetable. Luckily, he ___ (not / go) to work yet. He ___ (jump) in the car and drove to the airport as fast as he could.",
      "When he arrived, the gate ___ (close) and the last passengers ___ (board). Kate ran, and she ___ (make) it just in time. On the plane she ___ (laugh) so much that people stared."
    ], [["flew"], ["arrived"], ["looked"], ["had left"], ["was phoning"], ["checked", "was checking"], ["had not gone"], ["jumped"], ["was closing"], ["were boarding"], ["made"], ["laughed"]], [
      "A main past event: flew.",
      "A main event: arrived.",
      "The next event: looked.",
      "Earlier than the moment at the airport: had left.",
      "While + an action in progress: was phoning.",
      "A completed action during that time (or another activity in progress): checked / was checking.",
      "Up to then he hadn't left: hadn't gone.",
      "A main event in the sequence: jumped.",
      "In progress when he arrived (it wasn't closed yet, she made it): was closing.",
      "In progress at that moment: were boarding.",
      "The result in the story: made.",
      "A main event: laughed."
    ], "Read Anna's story."],
    ["p", 4, "The first night in the new house", [
      "We ___ (move) into the old farmhouse on a stormy night in October. The previous owners ___ (live) there for forty years, and they ___ (leave) some of their furniture behind.",
      "At midnight I ___ (lie) in bed, listening to the wind, when I ___ (hear) footsteps upstairs. My husband ___ (sleep) deeply, so I ___ (take) a torch and climbed the stairs alone.",
      "The attic door was open, although I was sure I ___ (close) it that afternoon. Inside, a window ___ (bang) in the wind and a large owl ___ (sit) on an old wardrobe, looking at me calmly. It ___ (obviously / find) a way in through the broken glass."
    ], [["moved"], ["had lived", "had been living"], ["had left"], ["was lying"], ["heard"], ["was sleeping"], ["took"], ["had closed"], ["was banging"], ["was sitting"], ["had obviously found"]], [
      "A main event: moved.",
      "Duration before our arrival: had lived.",
      "They left the furniture before we moved in: had left.",
      "Background action in progress: was lying.",
      "The interrupting event: heard.",
      "In progress at that moment: was sleeping.",
      "A main event: took.",
      "Earlier that afternoon, before now in the story: had closed.",
      "In progress when I entered: was banging.",
      "Description of the scene: was sitting.",
      "Earlier than the moment I saw it: had obviously found."
    ], "Read the beginning of a story."],
    ["p", 5, "A meeting at the airport", [
      "Twenty years ___ (pass) since they last saw each other. As Elena ___ (walk) through the arrivals hall, she ___ (wonder) whether she would recognise her old friend.",
      "Then she ___ (see) him. He ___ (stand) by the exit with a bunch of flowers. His hair ___ (turn) completely grey, but his smile ___ (not / change) at all.",
      "They ___ (hug) and both started talking at once. In the taxi he told her everything that ___ (happen) to him: he ___ (get) married, he ___ (lose) his job in the crisis and he ___ (spend) three years in Brazil."
    ], [["had passed"], ["was walking"], ["was wondering", "wondered"], ["saw"], ["was standing"], ["had turned"], ["had not changed"], ["hugged"], ["had happened"], ["had got", "had gotten"], ["had lost"], ["had spent"]], [
      "Before the moment of the story: had passed.",
      "Background activity: was walking.",
      "A thought in progress at the same time: was wondering (wondered is possible).",
      "A main event: saw.",
      "Description: was standing.",
      "The change happened before that moment: had turned.",
      "Up to then: hadn't changed.",
      "A main event: hugged.",
      "Earlier events he reported: had happened.",
      "Earlier than the conversation: had got married.",
      "Earlier: had lost.",
      "Earlier: had spent."
    ], "Read a scene from a novel."]
  ] });

/* ===================== NEW: the four future forms ===================== */
D.add({ id: "future-forms", area: "contrasts", group: "future", title: "Future forms: will, going to, Present Continuous, Present Simple", short: "Four ways of talking about the future",
  intro: "English has no single future tense. We choose the form according to what we mean: a prediction or instant decision (will), an intention or evidence-based prediction (going to), a personal arrangement (present continuous) or a timetable (present simple).",
  form: "will + verb · am / is / are going to + verb · am / is / are + -ing · present simple (timetables)",
  uses: [["Instant decisions, offers, promises, opinions", "I'll help you with those bags."], ["Intentions and evidence", "I'm going to learn Spanish. · Look out! You're going to fall!"], ["Arrangements with other people", "I'm meeting Sara at six."], ["Timetables and schedules", "The train leaves at 8:15."]],
  q: [
    ["m", 2, "The phone's ringing. – Don't get up, I ___ it.", ["'ll answer", "'m answering", "answer"], "A decision made at the moment of speaking: will."],
    ["m", 3, "I can't come on Friday. I ___ my cousin at the airport – she lands at six.", ["'m meeting", "'ll meet", "meet"], "A personal arrangement with a fixed time: present continuous."],
    ["m", 3, "The flight to Rome ___ at 7:40, so we need to be at the airport by six.", ["leaves", "is going to leave", "will be leaving"], "An official timetable: present simple."],
    ["m", 2, "Look at that man on the ladder! He ___.", ["'s going to fall", "will fall", "falls"], "A prediction based on what we can see now: going to."],
    ["m", 3, "I've decided: I ___ for that job in Berlin. I'm writing the application tonight.", ["'m going to apply", "'ll apply", "apply"], "An intention decided before speaking: going to."],
    ["m", 3, "I'm sure you ___ the exam. You've worked so hard.", ["'ll pass", "'re passing", "pass"], "A prediction based on opinion (I'm sure): will."],
    ["m", 3, "What time ___ tomorrow? – At 9:30, according to the programme.", ["does the tour start", "did the tour start", "has the tour started"], "A programme / timetable: present simple."],
    ["m", 3, "We ___ dinner with the Smiths on Saturday – they invited us last week.", ["'re having", "'ll have", "have"], "An arrangement with other people: present continuous."],
    ["m", 2, "That box looks heavy. – Yes, it is. – I ___ you carry it.", ["'ll help", "'m helping", "'m going to help"], "An offer made on the spot: will."],
    ["m", 4, "The film ___ at 8:00, so let's have dinner at 6:30.", ["starts", "will have started", "started"], "Cinema times are a schedule: present simple."],
    ["m", 4, "Careful! The cup is right on the edge of the table. It ___.", ["'s going to fall", "falls", "'ll be falling"], "Present evidence of what is about to happen: going to."],
    ["m", 3, "I promise I ___ anyone your secret.", ["won't tell", "am not telling", "don't tell"], "A promise: will."],
    ["m", 4, "Sorry, I can't lend you the car next week. My brother ___ it to drive to Scotland.", ["is borrowing", "borrows", "borrowed"], "An arrangement already made: present continuous."],
    ["m", 4, "When ___ the next bus to the city centre? – In ten minutes.", ["does", "will", "is going to"], "Timetables use the present simple: When does the next bus leave?"],
    ["m", 4, "Now that she's saved enough money, Paula ___ a car. She's been looking at adverts all week.", ["is going to buy", "will buy", "buys"], "An intention based on a decision already taken: going to."],
    ["g", 2, "I'm hungry. – Are you? I ___ (make) you a sandwich.", ["will make"], "An instant offer: will."],
    ["g", 3, "I ___ (see) the dentist at 4:30 tomorrow, so I'll leave work early.", ["am seeing"], "An appointment = an arrangement: present continuous."],
    ["g", 3, "Hurry up! The concert ___ (begin) in twenty minutes.", ["begins"], "A scheduled event: present simple."],
    ["g", 3, "We ___ (paint) the kitchen yellow. We bought the paint yesterday.", ["are going to paint", "are painting"], "An intention already decided: going to (are painting is also possible as a plan)."],
    ["g", 3, "I don't think it ___ (rain) tomorrow. The forecast is good.", ["will rain"], "An opinion-based prediction with I don't think: will."],
    ["x", 4, "Mia: Shall we go for a pizza on Thursday?", "Leo: I can't. I ___ (play) in a football match – the coach told us yesterday.", ["am playing"], "A fixed arrangement: present continuous."],
    ["x", 4, "The sky is black and you can hear thunder.", "It ___ (pour) with rain in a minute.", ["is going to pour"], "Evidence in the present: going to."],
    ["x", 4, "Sam: I've lost my phone charger.", "Ana: Don't worry, I ___ (lend) you mine.", ["will lend"], "An offer made at the moment: will."],
    ["x", 4, "The school calendar for next year is out.", "Term ___ (start) on 9 September.", ["starts"], "An official calendar: present simple."],
    ["p", 3, "Weekend messages", [
      "Ella: Hi! What ___ (you / do) on Saturday? I've got no plans yet.",
      "Zoe: In the morning I ___ (help) my mum at her shop – I promised her last week. But the shop ___ (close) at one, so I'm free after that.",
      "Ella: Great! There's a new exhibition at the museum. I think you ___ (love) it.",
      "Zoe: Sounds good. What time ___ (it / open)?",
      "Ella: It ___ (open) at ten and closes at six. Oh, and I've decided: I ___ (buy) a new camera with my birthday money, so I'll take some photos.",
      "Zoe: Nice! I ___ (meet) you outside the museum at two, OK?",
      "Ella: Perfect. Look at the forecast, though – it ___ (be) very hot. I ___ (bring) some water."
    ], [["are you doing"], ["am helping"], ["closes"], ["will love"], ["does it open"], ["opens"], ["am going to buy"], ["will meet"], ["is going to be", "will be"], ["will bring"]], [
      "Asking about arrangements: are you doing.",
      "An arrangement made with her mum: am helping.",
      "Opening hours = a timetable: closes.",
      "An opinion-based prediction (I think): will love.",
      "Timetable question: does it open.",
      "A timetable: opens.",
      "An intention already decided: am going to buy.",
      "A decision / suggestion made at that moment: I'll meet you.",
      "A prediction based on evidence (the forecast): is going to be (will be is also possible).",
      "A decision made at the moment of speaking: I'll bring."
    ], "Read the messages between two friends."],
    ["p", 4, "A trip to Edinburgh", [
      "We've booked everything for our trip! The train ___ (leave) King's Cross at 8:00 on Friday and ___ (arrive) in Edinburgh at 12:20.",
      "On Friday afternoon we ___ (meet) my old university friend Fiona – she's taking the afternoon off work for us. On Saturday we ___ (climb) Arthur's Seat; that's the plan, anyway.",
      "My husband has never seen the castle, so I'm sure he ___ (love) it. Our hotel is right in the centre, so we ___ (not / need) taxis. Oh no, I've just checked the weather: it ___ (rain) all weekend! Never mind, I ___ (pack) our umbrellas tonight. Our friend's band ___ (play) at a pub on Saturday night – we've already got tickets – and the show ___ (start) at nine."
    ], [["leaves"], ["arrives"], ["are meeting"], ["are going to climb"], ["will love"], ["will not need"], ["is going to rain"], ["will pack"], ["is playing"], ["starts"]], [
      "A train timetable: leaves.",
      "A timetable: arrives.",
      "An arrangement made with Fiona: are meeting.",
      "An intention (that's the plan): are going to climb.",
      "An opinion-based prediction (I'm sure): will love.",
      "A logical prediction: won't need.",
      "A prediction from evidence (the forecast she has just checked): is going to rain.",
      "A decision made now: I'll pack.",
    "An arrangement with tickets bought: is playing.",
    "A scheduled time: starts."
    ], "Read Helen's email."],
    ["p", 5, "The new manager", [
      "Our new manager ___ (start) on Monday. HR has already sent the welcome programme: the induction meeting ___ (begin) at 9:00 and ___ (end) at 11:00.",
      "I ___ (show) her around the building in the afternoon – my boss asked me yesterday. People say she's very demanding, but I think we ___ (get) on well.",
      "She has told us she ___ (reorganise) the whole department, so I suppose there ___ (be) some changes. Personally, I ___ (ask) her for more training as soon as I have the chance. And if anyone wants to know more about her, just ask: I ___ (tell) you everything I find out! Her first team meeting ___ (take) place on Wednesday at 10:00, according to the calendar."
    ], [["starts", "is starting"], ["begins"], ["ends"], ["am showing"], ["will get"], ["is going to reorganise"], ["will be"], ["am going to ask"], ["will tell"], ["takes"]], [
      "A fixed start date in the schedule: starts (is starting is also possible as an arrangement).",
      "An official programme: begins.",
      "An official programme: ends.",
      "An arrangement made with the boss: am showing.",
      "An opinion-based prediction (I think): will get on.",
      "Her stated intention: is going to reorganise.",
      "A deduction / prediction (I suppose): will be.",
      "A personal intention: am going to ask.",
      "A promise / offer: I'll tell.",
    "An official calendar: present simple, takes."
    ], "Read an employee's message to a colleague."]
  ] });

/* ===================== more multiple-choice batteries for every contrast ===================== */
D.extend("ps-vs-pc", [
  ["m", 2, "Can you call back later? We ___ dinner.", ["are having", "have", "had"], "Happening at the moment of speaking: present continuous."],
  ["m", 2, "We usually ___ dinner at eight, but tonight we're eating late.", ["have", "are having", "having"], "‘Usually’ marks the normal routine, contrasted with tonight: present simple."],
  ["m", 3, "My sister ___ for a bank, but this summer she's working at a hotel by the sea.", ["works", "is working", "work"], "Her permanent job, contrasted with the temporary summer job: present simple."],
  ["m", 3, "Why ___ that thick coat? It's twenty-five degrees!", ["are you wearing", "do you wear", "you wear"], "Something happening now that surprises the speaker: present continuous."],
  ["m", 3, "I ___ what you mean, but I don't agree.", ["see", "am seeing", "seeing"], "See = understand, a state verb: present simple."],
  ["m", 3, "I ___ Dr Ross tomorrow about my back.", ["'m seeing", "see", "seeing"], "See = meet / visit (an action), here an arrangement: present continuous."],
  ["m", 3, "The population of our town ___ every year as new families move in.", ["is growing", "grows", "grow"], "A trend in progress: present continuous."],
  ["m", 2, "Ice ___ if you heat it.", ["melts", "is melting", "melt"], "A scientific fact: present simple."],
  ["m", 3, "Look, the ice on the lake ___. It isn't safe to walk on it.", ["is melting", "melts", "melted"], "Happening now, as you can see: present continuous."],
  ["m", 4, "He ___ his keys! It's the third time this week.", ["'s always losing", "always loses", "always lose"], "Always + continuous expresses irritation at a repeated habit."],
  ["m", 4, "This cake ___ wonderful. Did you make it yourself?", ["tastes", "is tasting", "taste"], "Taste describes a quality (state): present simple."],
  ["m", 4, "Don't disturb Grandma – she ___ the soup to see if it needs more salt.", ["is tasting", "tastes", "taste"], "Taste as a deliberate action happening now: present continuous."]
]);

D.extend("pps-vs-ppc", [
  ["m", 3, "Your eyes are red. ___?", ["Have you been crying", "Have you cried", "Did you cry"], "A visible result of a recent, longer activity: present perfect continuous."],
  ["m", 3, "I ___ three emails this morning and it's only ten o'clock.", ["'ve written", "'ve been writing", "was writing"], "A number of completed items: present perfect simple."],
  ["m", 4, "I ___ emails all morning – I haven't had time for anything else.", ["'ve been writing", "'ve written", "write"], "Emphasis on the duration of the activity: present perfect continuous."],
  ["m", 4, "We ___ each other since primary school.", ["'ve known", "'ve been knowing", "know"], "Know is a state verb: present perfect simple, never continuous."],
  ["m", 4, "Somebody ___ my laptop! The settings are all different.", ["'s been using", "used", "'s used"], "Evidence of an activity that has been going on (not one completed action): present perfect continuous."],
  ["m", 4, "Oh no, somebody ___ my sandwich! There's nothing left.", ["'s eaten", "'s been eating", "was eating"], "The action is complete and the result is total (nothing left): present perfect simple."],
  ["m", 3, "How long ___ for the bus? – About twenty minutes.", ["have you been waiting", "have you waited", "do you wait"], "How long + an activity still in progress: present perfect continuous."],
  ["m", 4, "I'm exhausted. I ___ the garden all afternoon.", ["'ve been digging", "'ve dug", "dug"], "A long activity explaining how I feel now: present perfect continuous."],
  ["m", 4, "I ___ the whole book! It was brilliant.", ["'ve read", "'ve been reading", "am reading"], "Completed (the whole book): present perfect simple."],
  ["m", 4, "I ___ this book for weeks and I'm only on page fifty.", ["'ve been reading", "'ve read", "read"], "An unfinished activity: present perfect continuous."],
  ["m", 5, "The company ___ its prices four times this year.", ["has raised", "has been raising", "raised"], "A number of times (four times): present perfect simple."],
  ["m", 5, "The roads are wet. It ___.", ["'s been raining", "'s rained", "rains"], "A present result of a recent, continuous activity: present perfect continuous."]
]);

D.extend("pst-vs-pcont", [
  ["m", 2, "When I got home, my parents ___ TV, so I joined them on the sofa.", ["were watching", "watched", "watch"], "An activity already in progress when I arrived: past continuous."],
  ["m", 2, "When the film ended, my parents ___ off the TV and went to bed.", ["turned", "were turning", "turn"], "Two events in sequence: past simple."],
  ["m", 3, "I ___ my finger while I was chopping the onions.", ["cut", "was cutting", "had cut"], "A short action that happened during a longer one: past simple."],
  ["m", 3, "At this time yesterday I ___ over the Alps.", ["was flying", "flew", "fly"], "An action in progress at a specific past moment: past continuous."],
  ["m", 3, "Sorry I didn't answer – I ___ a shower.", ["was having", "had", "have"], "An activity in progress at the time of the call: past continuous."],
  ["m", 3, "She ___ in Paris for three years in the 1990s.", ["lived", "was living", "had been"], "A completed period in the past: past simple."],
  ["m", 4, "She ___ in Paris when she met her husband.", ["was living", "has lived", "lives"], "A temporary background situation when another event happened: past continuous."],
  ["m", 3, "While Dad ___ the car, the rest of us were cleaning the house.", ["was washing", "washed", "washes"], "Two long activities in progress at the same time: past continuous."],
  ["m", 4, "I ___ to call you, but then my phone battery died.", ["was going", "went", "have gone"], "A planned action in the past that did not happen: was going to."],
  ["m", 3, "How ___ your leg? – I fell off a horse.", ["did you break", "were you breaking", "you broke"], "A completed accident: past simple question."],
  ["m", 4, "When the neighbour came to complain, the children ___ a lot of noise, so she had to shout.", ["were making", "made", "make"], "The noise was already in progress when she came: past continuous. Made would mean they started after she arrived."],
  ["m", 4, "Every summer we ___ to the same campsite in Brittany.", ["went", "were going", "had gone"], "A repeated past habit: past simple (or used to)."]
]);

D.extend("pst-vs-ppf", [
  ["m", 3, "When I arrived at the party, Sam ___, so I didn't see him.", ["had left", "left", "was leaving"], "He left before I arrived: past perfect."],
  ["m", 3, "When I arrived at the party, Sam ___ and gave me a big hug.", ["came over", "had come over", "comes over"], "His reaction came after my arrival: past simple."],
  ["m", 3, "I didn't want to see the film because I ___ it twice already.", ["had seen", "saw", "have seen"], "An experience before the past moment: past perfect."],
  ["m", 4, "When she finally saw the film, she ___ the book three times already.", ["had read", "read", "was reading"], "Already + a number of times before a past moment: past perfect."],
  ["m", 3, "After the guests ___, we cleaned the kitchen.", ["had left", "were leaving", "leave"], "After makes the order clear; past perfect stresses that they had gone first (left is also common)."],
  ["m", 4, "It was the first time I ___ snow, and I was amazed.", ["had seen", "saw", "have seen"], "‘It was the first time’ + past perfect."],
  ["m", 4, "He was nervous because he ___ in front of so many people before.", ["had never spoken", "never spoke", "didn't speak"], "Lack of experience up to that past moment: past perfect."],
  ["m", 3, "We ___ dinner and then went for a walk.", ["had", "had had", "were having"], "A simple sequence of two events: past simple."],
  ["m", 4, "The shop ___ by the time we got there.", ["had closed", "closes", "has closed"], "By the time + past simple, then past perfect for the earlier action."],
  ["m", 4, "I recognised her immediately, although we ___ for years.", ["hadn't met", "didn't meet", "haven't met"], "A period before the past moment: past perfect."],
  ["m", 3, "Yesterday I ___ an old school friend in the supermarket.", ["met", "had met", "was meeting"], "A single past event with no earlier reference point: past simple."],
  ["m", 5, "No sooner ___ the house than it started to rain.", ["had we left", "we left", "did we leave"], "No sooner + past perfect (with inversion) … than + past simple."]
]);

D.extend("pcont-vs-ppf", [
  ["m", 3, "When I went into the kitchen, my mother ___ a cake. The smell was wonderful.", ["was baking", "had baked", "baked"], "In progress at that moment: past continuous."],
  ["m", 4, "When I went into the kitchen, my mother ___ a cake. It was cooling on the table.", ["had baked", "was baking", "bakes"], "Already finished (it was cooling): past perfect."],
  ["m", 4, "The streets were wet. It ___ during the night.", ["had rained", "was raining", "rains"], "Before the moment described (the rain had stopped): past perfect."],
  ["m", 3, "We couldn't play tennis because it ___.", ["was raining", "had rained", "rained"], "Happening at that time: past continuous."],
  ["m", 4, "When the teacher came in, the students ___ the test, so she collected the papers.", ["had finished", "were finishing", "finish"], "Completed before she came in: past perfect."],
  ["m", 4, "When the teacher came in, the students ___ quietly, so she sat down and waited.", ["were working", "had worked", "worked"], "Still in progress when she entered: past continuous."],
  ["m", 4, "The road was blocked because a tree ___ in the storm.", ["had fallen", "was falling", "falls"], "Before the moment described: past perfect."],
  ["m", 3, "I saw Paul in town. He ___ for a present for his wife.", ["was looking", "had looked", "looks"], "In progress when I saw him: past continuous."],
  ["m", 4, "By eight o'clock most of the guests ___, but the band was still playing.", ["had gone", "were going", "go"], "By + a past time: completed before then, past perfect."],
  ["m", 4, "At eight o'clock most of the guests ___ home, so the hall was emptying fast.", ["were going", "had gone", "go"], "In progress at that moment (the hall was emptying): past continuous."],
  ["m", 5, "I could tell from her face that she ___ bad news.", ["had received", "was receiving", "receives"], "Something that happened before I saw her face: past perfect."],
  ["m", 5, "When we arrived at the beach, the sun ___, so we only stayed for half an hour.", ["was setting", "had set", "set"], "In progress (it was still setting): past continuous."]
]);

D.extend("ppf-vs-ppfc", [
  ["m", 4, "She was out of breath because she ___.", ["had been running", "had run", "was run"], "A continuous activity with a visible result: past perfect continuous."],
  ["m", 4, "By lunchtime she ___ ten kilometres.", ["had run", "had been running", "was running"], "A completed quantity: past perfect simple."],
  ["m", 4, "They ___ married for twenty years when they moved to Spain.", ["had been", "had been being", "were"], "Be is a state verb: past perfect simple."],
  ["m", 5, "He ___ for the company for thirty years when he finally retired.", ["had been working", "has been working", "was working"], "Duration up to a past moment (when he retired): past perfect continuous."],
  ["m", 4, "I ___ the report, so I sent it to my boss.", ["had finished", "had been finishing", "was finishing"], "A completed action before another: past perfect simple."],
  ["m", 5, "The kitchen was a mess because the children ___ biscuits.", ["had been making", "had made", "made"], "The mess is the side effect of an activity: past perfect continuous."],
  ["m", 5, "The children proudly showed us the biscuits they ___.", ["had made", "had been making", "were making"], "The result (the biscuits) is the focus: past perfect simple."],
  ["m", 4, "How long ___ when the bus finally came?", ["had you been waiting", "had you waited", "did you wait"], "How long + duration up to a past moment: past perfect continuous."],
  ["m", 5, "She ___ that film three times before she finally understood the ending.", ["had seen", "had been seeing", "was seeing"], "A number of times: past perfect simple."],
  ["m", 5, "His hands were black because he ___ on the car engine.", ["had been working", "had worked", "works"], "Evidence of a recent activity: past perfect continuous."],
  ["m", 5, "I ___ him for years, so I wasn't surprised by his reaction.", ["had known", "had been knowing", "knew"], "Know is a state verb: past perfect simple."],
  ["m", 6, "By the time the results were published, the scientists ___ the data for over a decade.", ["had been analysing", "had analysed", "analysed"], "Duration of an activity up to a past point: past perfect continuous."]
]);

D.extend("will-vs-going-to", [
  ["m", 2, "I've bought some paint. I ___ my bedroom this weekend.", ["'m going to paint", "'ll paint", "paint"], "A plan already made (the paint is bought): going to."],
  ["m", 2, "Oh, we've run out of milk. – Really? I ___ some on my way home.", ["'ll get", "'m going to get", "get"], "A decision made at the moment of speaking: will."],
  ["m", 3, "Look at those clouds. It ___.", ["'s going to rain", "will rain", "rains"], "A prediction based on present evidence: going to."],
  ["m", 3, "I think the government ___ the election next year.", ["will lose", "is losing", "loses"], "A prediction based on opinion: will."],
  ["m", 3, "Why are you putting on your running shoes? – I ___ for a run.", ["'m going to go", "'ll go", "go"], "An intention already decided, shown by the action: going to."],
  ["m", 3, "This bag is too heavy for me. – Give it to me, I ___ it.", ["'ll carry", "'m going to carry", "carry"], "An offer: will."],
  ["m", 3, "Don't worry, I ___ anyone.", ["won't tell", "don't tell", "haven't told"], "A promise: will."],
  ["m", 4, "She's gone very pale and she's holding her stomach. Quick, she ___ sick!", ["'s going to be", "will have been", "has been"], "Something about to happen, based on what we can see: going to."],
  ["m", 3, "What are your plans for the summer? – We ___ our relatives in Australia.", ["'re going to visit", "'ll visit", "visit"], "A plan: going to."],
  ["m", 4, "Shall I open the window? – No, it's fine. I ___ it myself in a minute.", ["'ll do", "'m going to do", "do"], "A spontaneous decision: will."],
  ["m", 4, "Watch out! You ___ that glass!", ["'re going to knock over", "'ll knock over", "knock over"], "Something about to happen, visible now: going to."],
  ["m", 4, "I'm not sure, but I expect they ___ late. They usually are.", ["'ll be", "'re being", "are"], "A prediction based on expectation: will."]
]);

D.extend("will-vs-pcont-future", [
  ["m", 3, "I ___ Laura for lunch tomorrow. We booked a table at Gino's.", ["'m meeting", "'ll meet", "meet"], "An arrangement with a booking: present continuous."],
  ["m", 3, "Are you free tonight? – Sorry, I ___ to the cinema with Max.", ["'m going", "'ll go", "go"], "An arrangement already made: present continuous."],
  ["m", 3, "I'm too tired to cook. I know – I ___ a pizza.", ["'ll order", "'m ordering", "order"], "A decision made now: will."],
  ["m", 3, "Our cousins ___ to stay with us next week. Mum's preparing the guest room.", ["are coming", "will come", "come"], "An arrangement: present continuous."],
  ["m", 3, "I'm sure the weather ___ fine for the wedding.", ["will be", "is being", "is"], "A prediction: will."],
  ["m", 4, "Who ___ the presentation on Monday? – Anna. She's been preparing it for days.", ["is giving", "gives", "has given"], "An arranged task (she has been preparing it): present continuous."],
  ["m", 4, "The last bus has gone. – Don't worry, I ___ you home.", ["'ll drive", "'m driving", "drive"], "An offer made on the spot: will."],
  ["m", 4, "Robots ___ most of our jobs in fifty years' time.", ["will do", "are doing", "do"], "A long-term prediction: will."],
  ["m", 3, "What ___ this weekend? Anything nice?", ["are you doing", "will you do", "do you do"], "Asking about arrangements: present continuous."],
  ["m", 4, "I can't decide which dress to buy. – OK, I ___ the blue one.", ["'ll take", "'m taking", "take"], "A decision made at the moment of buying: will."],
  ["m", 4, "We ___ married in June – the church is booked and the invitations have gone out.", ["'re getting", "'ll get", "get"], "A fixed arrangement: present continuous."],
  ["m", 5, "If you leave your number, someone ___ you back.", ["will call", "is calling", "calls"], "A future action / promise, not an arrangement: will."]
]);

D.extend("will-vs-fcont", [
  ["m", 3, "Don't phone at eight – we ___ dinner then.", ["'ll be having", "'ll have", "have"], "In progress at a future moment: future continuous."],
  ["m", 3, "I ___ you as soon as I get there.", ["'ll call", "'ll be calling", "call"], "A single future action / promise: will."],
  ["m", 4, "This time next year I ___ in Tokyo.", ["'ll be working", "'ll work", "work"], "In progress around a future time: future continuous."],
  ["m", 4, "___ the car this evening? If not, can I borrow it?", ["Will you be using", "Will you use", "Do you use"], "A polite question about plans: future continuous."],
  ["m", 4, "Wait here. I ___ back in five minutes.", ["'ll be", "'ll be being", "am"], "A simple future statement / promise: will be."],
  ["m", 4, "At midnight the whole city ___ the fireworks.", ["will be watching", "will watch", "watches"], "In progress at a future moment: future continuous."],
  ["m", 4, "I think Italy ___ the match.", ["will win", "will be winning", "wins"], "A prediction of a result: will."],
  ["m", 4, "Don't worry about the cat. My neighbour ___ it every day while we're away.", ["will be feeding", "fed", "has fed"], "Part of the normal course of events during a future period: future continuous (will feed is also possible)."],
  ["m", 4, "I'm sorry, I can't help. – OK, I ___ someone else.", ["'ll ask", "'ll be asking", "ask"], "A decision made now: will."],
  ["m", 5, "In a few minutes we ___ over the Alps. Please keep your seat belts fastened.", ["will be flying", "will fly", "fly"], "A future action in progress (an announcement): future continuous."],
  ["m", 5, "When you arrive, I ___ for you at the gate.", ["'ll be waiting", "'ll wait", "wait"], "In progress at the moment of your arrival: future continuous."],
  ["m", 5, "If you need anything, just ask. I ___ you.", ["'ll help", "'ll be helping", "help"], "A promise: will."]
]);

D.extend("will-vs-fperf", [
  ["m", 4, "By the time you get home, I ___ dinner.", ["'ll have cooked", "'ll cook", "cook"], "Completed before a future moment: future perfect."],
  ["m", 4, "When you get home, I ___ dinner – I'll start then.", ["'ll cook", "'ll have cooked", "'m cooked"], "The action begins at that future moment: will."],
  ["m", 4, "Call me at six. I ___ work by then.", ["'ll have finished", "'ll finish", "finish"], "By then: completed before a future time."],
  ["m", 4, "I ___ the report tomorrow morning, I promise.", ["'ll finish", "'ll have finished", "finish"], "A promise about a future action: will."],
  ["m", 5, "In June they ___ married for twenty-five years.", ["'ll have been", "'ll be", "are"], "Duration up to a future point: future perfect."],
  ["m", 4, "Don't worry, the paint ___ by tomorrow.", ["will have dried", "will dry", "dries"], "Completed before a future point: future perfect."],
  ["m", 4, "I think she ___ a great teacher.", ["'ll make", "'ll have made", "makes"], "A prediction: will."],
  ["m", 5, "By 2040 scientists ___ a cure for this disease, I hope.", ["will have found", "will find", "find"], "Completed before a future date: future perfect."],
  ["m", 5, "The film ___ by the time we get to the cinema. Let's not bother.", ["will have started", "will start", "starts"], "Before our arrival: future perfect."],
  ["m", 5, "The film ___ at nine, so let's leave at half past eight.", ["starts", "will have started", "has started"], "A schedule: present simple."],
  ["m", 5, "Next month I ___ here for exactly a year.", ["'ll have lived", "'ll live", "live"], "Duration up to a future point: future perfect."],
  ["m", 6, "By the end of this lesson you ___ the three main uses of the future perfect.", ["will have learnt", "will learn", "learn"], "Completed by a future time: future perfect."]
]);

D.extend("fperf-vs-fperfc", [
  ["m", 5, "By the end of the day I ___ twenty pages.", ["'ll have translated", "'ll have been translating", "translate"], "A completed quantity: future perfect simple."],
  ["m", 5, "By six o'clock I ___ for eight hours non-stop.", ["'ll have been translating", "'ll have translated", "translated"], "Duration of the activity: future perfect continuous."],
  ["m", 5, "By the time he retires, he ___ in the same office for forty years.", ["'ll have been working", "'ll be working", "works"], "Duration up to a future point: future perfect continuous."],
  ["m", 5, "By next year they ___ the new bridge.", ["'ll have built", "'ll have been building", "build"], "Completed result: future perfect simple."],
  ["m", 5, "In March we ___ each other for ten years.", ["'ll have known", "'ll have been knowing", "know"], "Know is a state verb: future perfect simple."],
  ["m", 6, "When the marathon ends, the runners ___ for over four hours.", ["'ll have been running", "'ll have run", "run"], "Duration of the activity: future perfect continuous."],
  ["m", 5, "By the end of the course you ___ over two hundred new words.", ["'ll have learnt", "'ll have been learning", "learn"], "A completed number: future perfect simple."],
  ["m", 6, "She'll be exhausted when she arrives: she ___ all night.", ["'ll have been driving", "'ll have driven", "drives"], "The cause of a future state (tiredness) is a long activity: future perfect continuous."],
  ["m", 6, "By the time she arrives, she ___ 900 kilometres.", ["'ll have driven", "'ll have been driving", "drives"], "A completed distance: future perfect simple."],
  ["m", 5, "How long ___ English by the time you take the exam?", ["will you have been studying", "will you have studied", "do you study"], "How long + duration up to a future point: future perfect continuous."],
  ["m", 6, "By Friday the committee ___ a decision, one way or another.", ["will have reached", "will have been reaching", "reaches"], "A single completed outcome: future perfect simple."],
  ["m", 6, "By Friday the committee ___ the proposal for three weeks.", ["will have been discussing", "will have discussed", "discusses"], "Duration of an ongoing activity: future perfect continuous."]
]);

D.extend("pp-vs-ps", [
  ["m", 2, "I ___ to Japan twice – the last time was in 2019.", ["'ve been", "went", "was"], "Life experience (twice), with no specific time for the whole: present perfect. The second clause gives a specific time separately."],
  ["m", 2, "I ___ to Japan in 2019.", ["went", "have been", "have gone"], "A specific past time: past simple."],
  ["m", 3, "___ the new Bond film yet? – No, not yet.", ["Have you seen", "Did you see", "Do you see"], "Yet + up to now: present perfect."],
  ["m", 3, "___ the match last night? – Yes, it was great.", ["Did you watch", "Have you watched", "Do you watch"], "A finished time (last night): past simple."],
  ["m", 3, "Shakespeare ___ about 39 plays.", ["wrote", "has written", "writes"], "He is dead, so his life is a finished period: past simple."],
  ["m", 3, "My favourite author ___ six novels so far, and she's working on a seventh.", ["has written", "wrote", "writes"], "An unfinished period (she's still alive and writing): present perfect."],
  ["m", 3, "I can't find my glasses. ___ them?", ["Have you seen", "Did you see", "Were you seeing"], "Present relevance (I need them now): present perfect."],
  ["m", 3, "Where ___ your glasses? – On the bus, I think.", ["did you lose", "have you lost", "are you losing"], "Asking about the circumstances (where) of a past event: past simple."],
  ["m", 4, "We ___ in this house since 2015.", ["'ve lived", "lived", "live"], "Since + a period continuing now: present perfect."],
  ["m", 4, "We ___ in that house from 2010 to 2015.", ["lived", "have lived", "have been living"], "A finished period: past simple."],
  ["m", 4, "Look! Someone ___ the window.", ["has broken", "broke", "breaks"], "A recent event with a visible result now: present perfect."],
  ["m", 4, "It's the most beautiful place I ___.", ["'ve ever visited", "ever visited", "visit"], "Superlative + ever: present perfect."]
]);

D.extend("will-vs-ps-timetable", [
  ["m", 3, "Hurry! The train ___ in five minutes.", ["leaves", "will leave", "is going to leave"], "A timetable: present simple."],
  ["m", 3, "I'm sure the train ___ late again – it always is.", ["will be", "is", "be"], "A prediction (I'm sure): will."],
  ["m", 3, "What time ___ the museum ___ on Sundays?", ["does … open", "will … open", "is … opening"], "Opening hours are a timetable: present simple."],
  ["m", 3, "Don't worry, I ___ you a map of the museum.", ["'ll give", "give", "am giving"], "An offer: will."],
  ["m", 3, "The course ___ on 3 October and ends in June.", ["starts", "will start", "is going to start"], "An official schedule: present simple."],
  ["m", 4, "I think the course ___ very useful for your career.", ["will be", "is", "has been"], "An opinion-based prediction: will."],
  ["m", 4, "Our plane ___ at 6:10, so we need to be at the airport by four.", ["takes off", "will take off", "has taken off"], "A flight timetable: present simple."],
  ["m", 4, "I hope the plane ___ off on time.", ["takes", "took", "has taken"], "After hope, the present simple can refer to the future; here it is natural (will take is also possible)."],
  ["m", 4, "The exam ___ at 9:00 and lasts three hours.", ["begins", "will begin", "began"], "An official timetable: present simple."],
  ["m", 4, "Good luck tomorrow! I'm sure you ___ fine.", ["'ll do", "do", "are doing"], "A prediction / encouragement: will."],
  ["m", 4, "According to the programme, the speech ___ at 10:15.", ["is", "will", "is being"], "A programme: present simple (is)."],
  ["m", 5, "As soon as the bell ___, the students will leave the room.", ["rings", "will ring", "is ringing"], "In time clauses after as soon as we use the present simple for the future."]
]);

})(window.TenseDojo);
