/* Verb Tenses — text completion: one long text per tense (format "p", see engine.js) */
(function (D) {

D.extend("present-simple", [
  ["p", 2, "A day in the life of a baker", [
    "Marco ___ (work) in a small bakery in the centre of Bologna. He ___ (get) up at three o'clock every morning, when the streets are still dark and silent. He ___ (not / need) an alarm clock any more: his body simply ___ (know) the time.",
    "The bakery ___ (open) at seven, but the bread ___ (take) almost four hours to prepare. Marco ___ (not / like) machines, so he still ___ (mix) the dough by hand. Customers often ___ (ask) him for the secret of his bread. “There ___ (be) no secret,” he says. “Good flour, water and patience.”",
    "In the afternoon he ___ (sleep) for a couple of hours. “___ (you / ever / feel) tired?” I ask. He laughs. “Of course, but I love my job.”"
  ], [["works"], ["gets"], ["does not need"], ["knows"], ["opens"], ["takes"], ["does not like"], ["mixes"], ["ask"], ["is"], ["sleeps"], ["Do you ever feel"]], [
    "A permanent situation (his job), so present simple; he → works.",
    "‘Every morning’ shows a daily routine: present simple, gets.",
    "A general fact about him, negative with he: doesn't need.",
    "Know is a state verb, never used in the continuous here: knows.",
    "A timetable / fixed fact: the bakery opens at seven.",
    "A general truth about how long bread takes: takes.",
    "Like is a state verb; negative he → doesn't like.",
    "A habit (still, by hand): present simple; verbs ending in -x add -es: mixes.",
    "‘Often’ describes a frequent action; customers is plural: ask.",
    "A general statement: there is no secret.",
    "A daily routine in the afternoon: sleeps.",
    "‘Ever’ asks about frequency in general: Do you ever feel …? Present continuous would mean ‘right now’."
  ], "Read about Marco's routine."],
]);

D.extend("present-continuous", [
  ["p", 2, "A message from the beach", [
    "Hi Sara! I ___ (write) to you from a café near the beach. The sun ___ (shine) and a light wind ___ (blow) from the sea. Right now Luca ___ (swim) and the children ___ (build) an enormous sandcastle next to our umbrella.",
    "We ___ (stay) in a small hotel this week because our usual apartment is being repaired. The owner is lovely, but she ___ (always / complain) about the tourists, which is a bit funny because her hotel is full of them!",
    "The town ___ (change) a lot: they ___ (build) a new promenade and lots of new shops ___ (open). What ___ (you / do) at the moment? ___ (you / still / study) for your exams? Write soon!"
  ], [["am writing"], ["is shining"], ["is blowing"], ["is swimming"], ["are building"], ["are staying"], ["is always complaining"], ["is changing"], ["are building"], ["are opening"], ["are you doing"], ["Are you still studying"]], [
    "An action happening as she writes: present continuous, am writing.",
    "Something happening at this moment: is shining.",
    "In progress now: is blowing.",
    "‘Right now’ signals an action in progress: is swimming.",
    "In progress at the moment of writing; children is plural: are building.",
    "A temporary arrangement (this week only), not a permanent situation: are staying.",
    "Always + present continuous describes a repeated, slightly annoying habit: is always complaining.",
    "A situation in the process of changing: is changing.",
    "A project in progress around now, not necessarily at this very second: are building.",
    "A developing situation around now: are opening.",
    "‘At the moment’ asks about an activity in progress now: are you doing.",
    "A temporary activity in progress around now: Are you still studying."
  ], "Read Giulia's message to her friend."],
]);

D.extend("present-perfect-simple", [
  ["p", 3, "Moving to a new city", [
    "I ___ (live) in Edinburgh for six months now, and it ___ (become) home very quickly. I ___ (meet) lots of friendly people at work and I ___ (join) a running club, so I ___ (not / feel) lonely at all.",
    "I ___ (already / visit) the castle twice, but I ___ (not / see) the Highlands yet. My parents ___ (never / be) to Scotland, so they're coming to stay next month.",
    "The weather? Well, it ___ (rain) almost every day this week, but I ___ (buy) a good waterproof jacket. ___ (you / ever / think) about living abroad? It's the best decision I ___ (ever / make)."
  ], [["have lived", "have been living"], ["has become"], ["have met"], ["have joined"], ["have not felt"], ["have already visited"], ["have not seen"], ["have never been"], ["has rained", "has been raining"], ["have bought"], ["Have you ever thought"], ["have ever made"]], [
    "‘For six months now’: a situation that started in the past and continues: have lived (the continuous form is also correct).",
    "A change in the past with a result now (Edinburgh is home): has become.",
    "Experiences in an unfinished period up to now: have met.",
    "A past action with a present result (she is a member now): have joined.",
    "A state from the past up to now: haven't felt. Feel is used as a state here.",
    "Already + present perfect: the visits happened in the period up to now.",
    "Yet in negatives goes with the present perfect: haven't seen.",
    "Never + present perfect for experience in their whole life: have never been. ‘Been to’ = visited and come back.",
    "‘This week’ is an unfinished period: has rained (or has been raining).",
    "A past action with a result now (she owns the jacket): have bought.",
    "Ever + present perfect asks about life experience: Have you ever thought.",
    "Superlative + ever goes with the present perfect: the best decision I've ever made."
  ], "Read Anna's email to a friend."],
]);

D.extend("present-perfect-continuous", [
  ["p", 4, "Why is everyone so tired?", [
    "Mum: Why are you all so dirty? What ___ (you / do)?",
    "Tom: We ___ (help) Dad in the garden. We ___ (dig) since ten o'clock this morning, and Lucy ___ (cut) the hedge all afternoon.",
    "Mum: And why is the dog wet?",
    "Lucy: He ___ (play) with the hose. Sorry! And Dad's hands are black because he ___ (repair) the old lawnmower.",
    "Mum: How long ___ (he / try) to fix it?",
    "Tom: For hours. He ___ (talk) about buying a new one for months, but he never does.",
    "Mum: Well, I ___ (cook) for the last two hours, so dinner is ready. Wash your hands first!",
    "Lucy: Mmm, it smells good. We ___ (look) forward to this all day. And I ___ (not / eat) anything since breakfast!"
  ], [["have you been doing"], ["have been helping"], ["have been digging"], ["has been cutting"], ["has been playing"], ["has been repairing"], ["has he been trying"], ["has been talking"], ["have been cooking"], ["have been looking"], ["have not eaten"]], [
    "Mum sees the result (dirt) of a recent activity: present perfect continuous, have you been doing.",
    "A recent, longer activity that explains the present situation: have been helping.",
    "‘Since ten o'clock’ + an activity still going on or just finished: have been digging.",
    "‘All afternoon’ emphasises the duration of the activity: has been cutting.",
    "The wet dog is the visible result of a recent activity: has been playing.",
    "Black hands = the result of a recent activity: has been repairing.",
    "How long + an activity continuing up to now: has he been trying.",
    "‘For months’ + a repeated activity up to now: has been talking.",
    "‘For the last two hours’: an activity that has just finished, with a result (dinner is ready).",
    "An activity continuing up to now with ‘all day’: have been looking forward.",
    "With a negative and ‘since’, the present perfect simple is normal: haven't eaten. It counts actions, not a continuing activity."
  ], "A family conversation at the end of a Saturday."],
]);

D.extend("past-simple", [
  ["p", 2, "My first day at work", [
    "I still remember my first day at work very clearly. I ___ (wake) up at six and ___ (put) on my new suit. I ___ (not / eat) any breakfast because I was too nervous.",
    "The office was on the tenth floor. When I ___ (arrive), the receptionist ___ (give) me a badge and ___ (take) me to my desk. My manager, Mr Hughes, ___ (come) over and ___ (shake) my hand.",
    "In the afternoon I ___ (make) my first mistake: I ___ (send) an email to the wrong client! Luckily, nobody ___ (notice). “How ___ (it / go)?” my mum asked when I got home. “Great,” I said. And it was."
  ], [["woke"], ["put"], ["did not eat"], ["arrived"], ["gave"], ["took"], ["came"], ["shook"], ["made"], ["sent"], ["noticed"], ["did it go"]], [
    "A finished action in a finished past (that day): woke (irregular).",
    "A sequence of completed actions: put (same form in the past).",
    "Past simple negative: didn't + base form: didn't eat.",
    "A completed action in the story: arrived.",
    "One completed action after another: gave (give → gave).",
    "Next action in the sequence: took (take → took).",
    "Completed past action: came (come → came).",
    "Completed past action: shook (shake → shook).",
    "A finished event at a past time (in the afternoon): made.",
    "Completed action: sent (send → sent).",
    "Negative statement about the past: nobody + past simple affirmative form: noticed.",
    "Past simple question: did + subject + base form: How did it go?"
  ], "Read about Daniel's first day."],
]);

D.extend("past-continuous", [
  ["p", 3, "The night of the storm", [
    "It was a cold night in November. I ___ (read) in bed and my brother ___ (play) video games in his room. Outside, the wind ___ (blow) and the rain ___ (hit) the windows.",
    "At about eleven o'clock, while my parents ___ (watch) a film downstairs, all the lights went out. For a few seconds nobody moved. Then we heard a strange noise: something ___ (scratch) at the back door.",
    "My dad took a torch and opened the door very slowly. A small cat was sitting on the step. It ___ (shake) with cold and it ___ (look) at us with enormous eyes. While Mum ___ (find) a blanket, I gave it some milk. When the lights came back on, the cat ___ (sleep) peacefully on the sofa. It ___ (still / live) with us ten years later."
  ], [["was reading"], ["was playing"], ["was blowing"], ["was hitting"], ["were watching"], ["was scratching"], ["was shaking"], ["was looking"], ["was finding", "was looking for"], ["was sleeping"], ["was still living"]], [
    "The background scene at a moment in the past: was reading.",
    "Another activity in progress at the same time: was playing.",
    "Background description of the weather: was blowing.",
    "Background action in progress: was hitting.",
    "While + an activity in progress when something else happened: were watching.",
    "An action in progress when they heard it: was scratching.",
    "Description of the scene when the door opened: was shaking.",
    "In progress at that moment: was looking.",
    "While + an activity in progress at the same time as another action: was finding (or was looking for).",
    "In progress when the lights came back on: was sleeping.",
    "A temporary-looking situation in progress at a past point (ten years later): was still living. Past simple ‘still lived’ is also possible in speech, but the continuous stresses the situation in progress."
  ], "Read Clara's story."],
]);

D.extend("past-perfect-simple", [
  ["p", 4, "Too late", [
    "When Emma got to the station, the train ___ (already / leave). She ___ (run) all the way from the office, but it was no use. She checked her phone: her sister ___ (send) three messages asking where she was.",
    "It was the second time that month that Emma ___ (miss) the last train. She ___ (promise) herself that it would never happen again, but a meeting ___ (go) on much longer than planned.",
    "She went to the taxi rank, but the last taxi ___ (just / drive) away. In the end she phoned her sister, who ___ (not / go) to bed yet. When they finally arrived home, Emma realised that she ___ (leave) her keys at the office. By then, they ___ (both / stop) caring: they just laughed."
  ], [["had already left"], ["had run"], ["had sent"], ["had missed"], ["had promised"], ["had gone"], ["had just driven"], ["had not gone"], ["had left"], ["had both stopped"]], [
    "The train left before she arrived: an earlier past action, had already left.",
    "She ran before reaching the station: had run.",
    "The messages arrived before she checked her phone: had sent.",
    "‘It was the second time that …’ requires the past perfect when the main verb is past: had missed.",
    "The promise came before this evening: had promised.",
    "The meeting lasted longer earlier that evening, before she got to the station: had gone on.",
    "Just + past perfect: the taxi left a moment before she arrived.",
    "Up to the moment of the call her sister was still awake: hadn't gone to bed yet.",
    "She left the keys earlier, before arriving home: had left.",
    "By then (a past point) + past perfect: had both stopped."
  ], "Read about Emma's evening."],
]);

D.extend("past-perfect-continuous", [
  ["p", 5, "The interview", [
    "By the time the interview finally started, Jonathan ___ (wait) in the corridor for over an hour. He ___ (prepare) for this moment for weeks, and he ___ (rehearse) his answers in front of the mirror every evening.",
    "The interviewer apologised: she ___ (deal) with an emergency all morning. Jonathan noticed that her eyes were red; she ___ (obviously / work) late the night before.",
    "The first questions went well. Then she asked why he ___ (look) for a new job. He explained that he ___ (work) at the same company for eight years and that he ___ (think) about a change for a long time.",
    "When he left the building, the rain that ___ (fall) all morning had stopped. He ___ (hope) for a sign that things would go well, and the sun breaking through the clouds felt like one."
  ], [["had been waiting"], ["had been preparing"], ["had been rehearsing"], ["had been dealing"], ["had obviously been working"], ["had been looking"], ["had been working", "had worked"], ["had been thinking"], ["had been falling"], ["had been hoping"]], [
    "Duration up to a past moment (by the time … started, for over an hour): had been waiting.",
    "A long activity continuing up to the interview: had been preparing.",
    "A repeated activity over a period before the interview: had been rehearsing.",
    "An activity that continued up to that morning's past moment: had been dealing.",
    "Red eyes = the visible result of a longer activity before then: had obviously been working.",
    "Reported reason for an activity in progress before the interview: had been looking.",
    "Duration up to a past moment with for: had been working (had worked is also correct).",
    "A long mental process up to a past moment: had been thinking.",
    "An activity continuing all morning until it stopped: had been falling.",
    "An ongoing feeling leading up to that moment: had been hoping."
  ], "Read about Jonathan's job interview."],
]);

D.extend("used-to", [
  ["p", 3, "My grandfather's village", [
    "My grandfather ___ (live) in a tiny village in the mountains when he was a boy. There ___ (not / be) any electricity, so the family ___ (go) to bed when it got dark.",
    "He ___ (walk) five kilometres to school every day, even in winter. “We ___ (not / complain),” he tells me. “That was just life.” His mother ___ (bake) bread twice a week in a stone oven, and the whole village ___ (come) to buy it.",
    "“___ (you / have) any toys?” I once asked him. “Not really. We ___ (play) with sticks and stones. And we ___ (swim) in the river every summer.” Today the village is almost empty, but he still goes back every year."
  ], [["used to live", "lived"], ["did not use to be", "was not", "were not"], ["used to go"], ["used to walk"], ["did not use to complain", "did not complain"], ["used to bake"], ["used to come"], ["Did you use to have"], ["used to play"], ["used to swim"]], [
    "A past state that is no longer true: used to live (past simple lived is also possible).",
    "Negative past state: didn't use to be (wasn't / weren't is also correct).",
    "A past habit: used to go.",
    "A repeated past action that no longer happens: used to walk.",
    "Negative past habit: didn't use to complain (no -d after didn't).",
    "A regular past habit: used to bake.",
    "A repeated past action: used to come.",
    "Question form: Did you use to have …? (use, not used, after did).",
    "A past habit: used to play.",
    "A repeated action every summer in the past: used to swim."
  ], "Read about a grandfather's childhood."],
]);

D.extend("future-simple", [
  ["p", 3, "Life in 2050", [
    "What will life be like in 2050? Most experts agree that cities ___ (be) much greener. Many people think that cars ___ (drive) themselves and that we ___ (not / need) a driving licence.",
    "I'm not sure robots ___ (do) all the housework, but they ___ (probably / help) us more than today. Some scientists believe that we ___ (live) on the Moon, although I doubt it ___ (happen) so soon.",
    "One thing is certain: the climate ___ (continue) to change, and we ___ (have) to adapt. Personally, I ___ (be) almost sixty in 2050. I hope I ___ (still / enjoy) long walks in the countryside, robots or no robots!"
  ], [["will be"], ["will drive"], ["will not need"], ["will do"], ["will probably help"], ["will live", "will be living"], ["will happen"], ["will continue"], ["will have"], ["will be"], ["will still enjoy", "will still be enjoying"]], [
    "A prediction based on opinion (experts agree): will be.",
    "A prediction after ‘think that’: will drive.",
    "Negative prediction: won't need.",
    "After ‘I'm not sure’ we use will for an uncertain prediction: will do.",
    "Probably goes after will in affirmative sentences: will probably help.",
    "A prediction after ‘believe that’: will live.",
    "After ‘I doubt’ we use will: will happen.",
    "A prediction presented as certain: will continue.",
    "A future necessity: will have to.",
    "A future fact (her age): will be.",
    "After ‘hope’ will is normal for the future: will still enjoy."
  ], "Read a student's essay about the future."],
]);

D.extend("be-going-to", [
  ["p", 2, "Big plans for the summer", [
    "This summer is going to be different. My friend Ben and I ___ (travel) around Europe by train. We ___ (start) in Paris, and then we ___ (visit) Berlin, Prague and Vienna.",
    "We ___ (not / stay) in hotels because they are too expensive: we ___ (sleep) in hostels. Ben ___ (take) his guitar, and I ___ (write) a blog about the trip.",
    "Look at this photo of our bags! They're so heavy – I think we ___ (need) a taxi to the station. And look at those dark clouds over there. It ___ (rain) on our first day! ___ (you / come) to the station to say goodbye?"
  ], [["are going to travel"], ["are going to start"], ["are going to visit"], ["are not going to stay"], ["are going to sleep"], ["is going to take"], ["am going to write"], ["are going to need"], ["is going to rain"], ["Are you going to come"]], [
    "A plan decided before speaking: are going to travel.",
    "Part of the plan: are going to start.",
    "Intention already decided: are going to visit.",
    "A negative intention: aren't going to stay.",
    "A decided plan: are going to sleep.",
    "Ben's intention: is going to take.",
    "My intention: am going to write.",
    "A prediction based on present evidence (the heavy bags): are going to need.",
    "Evidence you can see now (dark clouds): is going to rain.",
    "Asking about someone's intention: Are you going to come?"
  ], "Read Sofia's plans."],
]);

D.extend("present-continuous-future", [
  ["p", 3, "A busy week", [
    "Hi Mark, sorry, I can't meet you on Monday. I ___ (fly) to Dublin early in the morning for a conference, and I ___ (not / come) back until Wednesday evening.",
    "On Thursday I ___ (have) lunch with my new clients – we booked the table last week – and in the evening my sister and her husband ___ (come) round for dinner.",
    "Friday is a bit better. I ___ (finish) work at three because I ___ (see) the dentist at four. What ___ (you / do) on Saturday? Tom and I ___ (go) to a concert in the evening, but we're free in the afternoon. ___ (Anna / come) to the party next week? Let me know! On Sunday my parents ___ (visit), so I'm cooking a big lunch."
  ], [["am flying"], ["am not coming"], ["am having"], ["are coming"], ["am finishing"], ["am seeing"], ["are you doing"], ["are going"], ["Is Anna coming"], ["are visiting"]], [
    "A fixed arrangement (tickets booked): present continuous, am flying.",
    "Part of the same arrangement: I'm not coming back.",
    "An arrangement with other people (the table is booked): am having lunch.",
    "An arrangement already made with guests: are coming.",
    "A personal arrangement for a definite time: am finishing.",
    "An appointment: am seeing the dentist.",
    "Asking about someone's arrangements: What are you doing on Saturday?",
    "A planned social arrangement (tickets bought): are going.",
    "Asking whether something is arranged: Is Anna coming?",
    "An arrangement already made with the parents: are visiting."
  ], "Read Laura's message about her week."],
]);

D.extend("present-simple-future", [
  ["p", 3, "The school trip to London", [
    "Here is the timetable for Friday's trip. The coach ___ (leave) the school car park at 7:15 sharp, so please arrive by 7:00. The journey ___ (take) about three hours.",
    "The guided tour of the British Museum ___ (begin) at 10:30 and ___ (last) ninety minutes. Lunch ___ (be) at 12:30 in the museum café.",
    "In the afternoon, the boat trip on the Thames ___ (depart) from Westminster Pier at 2:45. The museum shop ___ (close) at 5:30, so you will have a little time for souvenirs. The coach ___ (not / wait) for late students! We ___ (get) back to school at about 9:00 p.m. What time ___ (the boat / arrive) at Greenwich? At 3:30."
  ], [["leaves"], ["takes"], ["begins"], ["lasts"], ["is"], ["departs"], ["closes"], ["does not wait"], ["get"], ["does the boat arrive"]], [
    "An official timetable: present simple, leaves.",
    "A scheduled duration: takes.",
    "A programme with a fixed time: begins.",
    "Part of the official schedule: lasts.",
    "Timetabled event: is.",
    "A fixed departure time: departs.",
    "Opening hours are timetables: closes.",
    "A fixed rule of the schedule: doesn't wait.",
    "Scheduled arrival in an itinerary: get back.",
    "Question about a timetable: What time does the boat arrive?"
  ], "Read the teacher's information sheet."],
]);

D.extend("future-continuous", [
  ["p", 4, "This time next week", [
    "This time next week I ___ (lie) on a beach in Sardinia! I ___ (not / think) about emails or meetings, I promise.",
    "On Monday morning, while you ___ (sit) in the office, I ___ (swim) in the sea. In the evenings we ___ (eat) fresh fish in a little restaurant by the harbour.",
    "Don't call me at nine on Saturday: we ___ (drive) to the airport then. And don't worry about the plants: my neighbour ___ (water) them while I'm away. ___ (you / use) the car next week? If not, I'll leave you the keys. ___ (you / pass) the post office tomorrow? Could you send this letter for me? In the evenings I ___ (probably / read) on the terrace while the sun goes down."
  ], [["will be lying"], ["will not be thinking"], ["are sitting", "will be sitting"], ["will be swimming"], ["will be eating"], ["will be driving"], ["will be watering"], ["Will you be using"], ["Will you be passing"], ["will probably be reading"]], [
    "An action in progress at a future moment (this time next week): will be lying.",
    "Negative action in progress during the holiday: won't be thinking.",
    "After while in a time clause we use a present form: are sitting (will be sitting is acceptable in informal speech).",
    "An activity in progress at a future time: will be swimming.",
    "A planned, repeated activity during the holiday: will be eating.",
    "In progress at a specific future time (at nine on Saturday): will be driving.",
    "Something that will happen as part of the normal course of events: will be watering.",
    "A polite question about plans before asking a favour: Will you be using …?",
    "Polite enquiry about someone's plans: Will you be passing …?",
    "An activity in progress during a future period: will probably be reading."
  ], "Read Paolo's message before his holiday."],
]);

D.extend("future-perfect-simple", [
  ["p", 5, "A year of change", [
    "By this time next year, a lot ___ (change) in my life. I ___ (finish) my degree and, if everything goes to plan, I ___ (find) a job in a design studio.",
    "My brother and his wife are moving to Canada in June, so by Christmas they ___ (live) there for six months. I ___ (visit) them at least once – I've already started saving.",
    "By the end of the year I ___ (also / run) my first marathon. I ___ (train) for months by then. And my parents? By next autumn they ___ (be) married for thirty years. They ___ (not / decide) how to celebrate yet, so I'm planning a surprise. By the time they find out, I ___ (book) the restaurant!"
  ], [["will have changed"], ["will have finished"], ["will have found"], ["will have lived", "will have been living"], ["will have visited"], ["will also have run"], ["will have been training", "will have trained"], ["will have been"], ["have not decided"], ["will have booked"]], [
    "By + a future time: an action completed before then, will have changed.",
    "Completed before a future point: will have finished.",
    "Completed before next year: will have found.",
    "Duration up to a future point (by Christmas, for six months): will have lived.",
    "Completed before the end of the year: will have visited.",
    "Completed before the end of the year; also goes after will: will also have run.",
    "Duration up to a future point: will have been training (or will have trained).",
    "Duration of a state up to a future point: will have been married.",
    "This is about now, not the future: they haven't decided yet (present perfect with yet).",
    "Completed before a future moment (by the time they find out): will have booked."
  ], "Read Giorgia's plans for the next year."],
]);

D.extend("future-perfect-continuous", [
  ["p", 5, "A teacher retires", [
    "Next June Mrs Patel will retire. By then she ___ (teach) at our school for thirty-five years, and she ___ (run) the drama club for almost as long.",
    "On the day of her last lesson, she ___ (work) with children for more than half her life. “By the time I leave,” she joked, “I ___ (mark) homework for longer than most of you have been alive!”",
    "Her husband retired two years ago. By next summer he ___ (wait) for her to join him for two years, and they ___ (plan) their trip around Australia for even longer. We ___ (prepare) a farewell show for months by the time it takes place, so it had better be good! At her party, the head teacher ___ (give) a speech – he ___ (write) it for weeks by then! And the choir ___ (practise) her favourite song since Easter."
  ], [["will have been teaching", "will have taught"], ["will have been running"], ["will have been working"], ["will have been marking"], ["will have been waiting"], ["will have been planning"], ["will have been preparing"], ["will give"], ["will have been writing"], ["will have been practising"]], [
    "Duration of an activity up to a future point (by then, for thirty-five years): will have been teaching.",
    "Duration up to the same future point: will have been running.",
    "A long activity continuing up to a future day: will have been working.",
    "Repeated activity over a period ending at a future time: will have been marking.",
    "Duration up to next summer: will have been waiting.",
    "An activity continuing up to a future point: will have been planning.",
    "Duration up to a future event: will have been preparing.",
    "A single future action: will give.",
    "Duration of an activity up to a future point (by then, for weeks): will have been writing.",
    "Duration up to the party (since Easter): will have been practising."
  ], "Read about a teacher's retirement."],
  ["p", 6, "The bridge", [
    "When the new bridge finally opens in 2031, engineers ___ (work) on it for eleven years. Local residents ___ (complain) about the noise for almost as long, and the cost ___ (rise) every single year of construction.",
    "By the opening ceremony, the city council ___ (debate) the project for nearly two decades, and the original architect, who retired in 2025, ___ (watch) its progress from a distance for six years.",
    "Critics say that by the time it opens, commuters ___ (queue) on the old bridge for far too long and many ___ (switch) to the train. The mayor is unmoved: “People ___ (cross) this bridge long after we have all forgotten the delays.” By then, the protest group ___ (campaign) against it for a decade, and the engineers ___ (spend) more on lawyers than on concrete, according to one critic."
  ], [["will have been working"], ["will have been complaining"], ["will have been rising", "will have risen"], ["will have been debating"], ["will have been watching"], ["will have been queuing", "will have been queueing"], ["will have switched"], ["will be crossing"], ["will have been campaigning"], ["will have spent"]], [
    "Duration of an activity up to a future point (when it opens, for eleven years).",
    "A repeated activity continuing up to that future point: will have been complaining.",
    "A process continuing over many years up to the opening: will have been rising.",
    "Duration up to the ceremony: will have been debating.",
    "Duration up to a future point: will have been watching.",
    "Duration up to a future point: will have been queuing.",
    "A completed change before then, not an activity: will have switched (future perfect simple).",
    "An action in progress at a future time, not duration up to a point: will be crossing (future continuous).",
    "Duration of an activity up to a future point: will have been campaigning.",
    "A completed total by a future point: will have spent."
  ], "Read a newspaper report."],
]);

})(window.TenseDojo);
