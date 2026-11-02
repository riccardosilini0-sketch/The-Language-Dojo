/* Verb Tenses — level-balancing bank 2 (original sentences).
   Present perfect simple and continuous, past continuous, past perfect, will, future continuous.
   Format reference: data/engine.js. Belt = CEFR level (1 A1 … 6 C2). */
(function (D) {
  "use strict";

  /* ---------- PRESENT PERFECT SIMPLE (A2–C1) ---------- */
  D.extend("present-perfect-simple", [
    ["g", 3, "I ___ (not / see) Marta since her wedding.", ["have not seen"], "since + a past point: present perfect."],
    ["m", 3, "We ___ in this flat for six years.", ["have lived", "live", "are living", "lived"], "Duration up to now (still true): present perfect."],
    ["i", 3, "Non sono mai stato in Irlanda.", "I ___ to Ireland.", ["have never been"], "Experience up to now: have never been."],
    ["q", 3, "Write a question with yet.", "the parcel / arrive / yet?", ["Has the parcel arrived yet?"], "Questions with yet: present perfect."],
    ["d", 3, "Packing for a trip.", [["Dad", "___ (you / pack) your suitcase?"], ["Ivo", "Almost. I ___ (not / find) my passport yet!"]], [["Have you packed"], ["have not found", "haven't found"]], "Recent actions and yet: present perfect."],
    ["k", 3, "She has broken her arm, so she can't play.", ["Present perfect simple", "Past simple", "Present perfect continuous", "Past perfect simple"], "Past action with a result now."],
    ["g", 4, "That's the fourth time you ___ (ask) me the same question!", ["have asked"], "That's the … time + present perfect."],
    ["m", 4, "Scientists ___ a new species of frog in the Amazon.", ["have discovered", "discovered yesterday", "had discovered", "are discovering"], "News with present relevance (no time given): present perfect."],
    ["e", 4, "[It's the most beautiful place] [I] [ever saw] [in my life].", 2, ["have ever seen"], "Superlative + ever + present perfect."],
    ["t", 4, "Rewrite with “for”.", "The last time I spoke to him was a month ago.", "I ___ to him for a month.", ["have not spoken", "haven't spoken", "have not talked", "haven't talked"], "Negative present perfect + for."],
    ["x", 4, "Your teacher asks about your project.", "I ___ (write) the introduction, but I haven't started the conclusion.", ["have written"], "Completed part of a task: present perfect."],
    ["j", 4, "Have you ever met someone famous?", true, [], "Life experience: present perfect."],
    ["q", 4, "Write a sentence with the present perfect.", "the government / just / announce / new rules", ["The government has just announced new rules."], "Recent news: has just + past participle."],
    ["h", 4, "Match the beginnings and endings.", [["This is the first time", "I've driven a car."], ["She's lived in Paris", "since she was eighteen."], ["Has anyone", "seen my glasses?"], ["I haven't eaten", "a thing all day."]], "Present perfect for experiences, duration up to now and recent events."],
    ["g", 5, "Recent studies ___ (show) that sleep plays a key role in memory.", ["have shown"], "Reporting recent research: present perfect."],
    ["m", 5, "This is the second time the printer ___ this week.", ["has broken down", "broke down", "had broken down", "breaks down"], "This is the second time + present perfect."],
    ["t", 5, "Rewrite starting with “It's the first time”.", "I've never stayed in such an expensive hotel before.", "It's the first time I ___ in such an expensive hotel.", ["have stayed", "'ve stayed"], "It's the first time + present perfect."],
    ["e", 5, "[Since] [the factory closed], [unemployment] [rose] [sharply].", 3, ["has risen"], "Since + past event → present perfect in the main clause."],
    ["d", 5, "A news report.", [["Reporter", "Firefighters ___ (bring) the fire under control, but they ___ (not / yet / establish) its cause."]], [["have brought"], ["have not yet established", "haven't yet established", "have not established yet", "haven't established yet"]], "News with present relevance: present perfect."],
    ["k", 5, "Prices have gone up by 10% since January.", ["Present perfect simple", "Present perfect continuous", "Past simple", "Present simple"], "Change measured up to now."],
    ["j", 5, "I've been to the dentist yesterday.", false, ["I went to the dentist yesterday."], "yesterday → past simple."],
    ["d", 5, "A formal complaint.", [["", "I ___ (write) to you three times this month, and I ___ (still / not / receive) a reply."]], [["have written"], ["have still not received", "still have not received", "still haven't received", "have not received", "haven't received"]], "Repeated actions in an unfinished period: present perfect."],
    ["q", 5, "Rewrite with “ever since”.", "he / be / unhappy / ever since / he / move / here", ["He has been unhappy ever since he moved here."], "Present perfect + ever since + past simple."],
    ["i", 5, "È da anni che non vedo un film così bello.", "I ___ such a good film for years.", ["have not seen", "haven't seen"], "Italian present with da = English present perfect (negative + for)."],
    ["m", 5, "So far this year, the company ___ three new shops.", ["has opened", "opened", "is opening", "had opened"], "So far this year: unfinished period → present perfect."]
  ]);

  /* ---------- PRESENT PERFECT CONTINUOUS (B1–C1) ---------- */
  D.extend("present-perfect-continuous", [
    ["g", 4, "Your eyes are red. ___ (you / cry)?", ["Have you been crying"], "Visible result of a recent activity."],
    ["m", 4, "I ___ this report since nine, and I'm only half way through.", ["have been writing", "have written", "wrote", "am writing"], "Unfinished activity: present perfect continuous."],
    ["t", 4, "Rewrite with “for”.", "We started queuing two hours ago and we're still here.", "We ___ for two hours.", ["have been queuing", "have been queueing"], "Activity still going on."],
    ["e", 4, "[She] [has been learning] [three languages] [and speaks them all fluently].", 1, ["has learnt", "has learned"], "A completed achievement: present perfect simple."],
    ["d", 4, "At the gym.", [["Coach", "You look exhausted!"], ["Mo", "I ___ (run) on the treadmill for forty minutes. I ___ (burn) 500 calories!"]], [["have been running"], ["have burnt", "have burned"]], "Activity (continuous) vs result (simple)."],
    ["x", 4, "The road outside is all wet.", "It ___ (rain) – look at the puddles.", ["has been raining"], "Present evidence of a recent activity."],
    ["k", 4, "I've been thinking about what you said.", ["Present perfect continuous", "Present continuous", "Present perfect simple", "Past continuous"], "A mental activity continuing up to now."],
    ["g", 5, "Lately, house prices ___ (rise) faster than wages.", ["have been rising"], "A recent trend continuing up to now."],
    ["m", 5, "He's out of breath because he ___.", ["has been running", "has run", "ran", "is running"], "The present effect of a recent activity."],
    ["e", 5, "[I] [have been owning] [this car] [for ten years].", 1, ["have owned"], "Own is a state verb: present perfect simple."],
    ["t", 5, "Rewrite to focus on the activity.", "Who has used my laptop? The battery is flat.", "Who ___ my laptop? The battery is flat.", ["has been using"], "Focus on the activity that caused a present result."],
    ["j", 5, "We have been knowing each other since school.", false, ["We have known each other since school."], "Know is a state verb."],
    ["d", 5, "Neighbours.", [["Ann", "You ___ (complain) about the noise for weeks. Why don't you speak to them?"], ["Ben", "I ___ (try) three times, but they never open the door."]], [["have been complaining"], ["have tried"]], "Repeated activity over a period (continuous) vs number of attempts (simple)."],
    ["q", 5, "Ask about the duration of an activity.", "how long / you / work / on this novel?", ["How long have you been working on this novel?"], "How long + present perfect continuous."],
    ["i", 5, "È tutto il giorno che ti cerco!", "I ___ for you all day!", ["have been looking"], "Duration up to now."],
    ["x", 5, "A teacher speaks to a student.", "You ___ (not / pay) attention recently – is something wrong?", ["have not been paying", "haven't been paying"], "A recent pattern of behaviour."],
    ["k", 5, "Somebody has been sitting in my chair!", ["Present perfect continuous", "Present perfect simple", "Past continuous", "Present continuous"], "Evidence of a recent activity."]
  ]);

  /* ---------- PAST CONTINUOUS (A2–B2) ---------- */
  D.extend("past-continuous", [
    ["g", 3, "We ___ (drive) home when we heard the news on the radio.", ["were driving"], "Background action + short event."],
    ["m", 3, "What ___ when the fire alarm went off?", ["were you doing", "did you do", "are you doing", "have you done"], "Action in progress at a past moment."],
    ["t", 3, "Join with “while”.", "Sara was reading. Her brother was watching TV.", "Sara was reading while her brother ___ TV.", ["was watching"], "Two actions in progress at the same time."],
    ["k", 3, "At midnight I was still studying.", ["Past continuous", "Past simple", "Past perfect simple", "Present perfect continuous"], "In progress at a precise past time."],
    ["i", 3, "Mentre attraversavo la strada, ho visto un incidente.", "While I ___ the road, I saw an accident.", ["was crossing"], "Background action: past continuous."],
    ["g", 4, "I ___ (wonder) whether you could give me some advice.", ["was wondering"], "Polite, tentative request."],
    ["m", 4, "She ___ always ___ about her job, so we stopped asking.", ["was … complaining", "always … complained", "is … complaining", "has … complained"], "Always + past continuous: annoying past habit."],
    ["e", 4, "[When I arrived], [the guests] [danced] [and the music was very loud].", 2, ["were dancing"], "The scene in progress when I arrived."],
    ["j", 4, "I was meaning to call you, but I forgot.", true, [], "Was meaning to = intended to (but didn't)."]
  ]);

  /* ---------- PAST PERFECT SIMPLE (B1–C1) ---------- */
  D.extend("past-perfect-simple", [
    ["g", 4, "She was exhausted because she ___ (not / sleep) the night before.", ["had not slept"], "Cause in an earlier past."],
    ["m", 4, "I didn't go to the cinema with them because I ___ the film.", ["had already seen", "already saw", "have already seen", "was already seeing"], "Earlier past experience explaining a past decision."],
    ["t", 4, "Report the sentence.", "“I've lost my keys,” said Jo.", "Jo said she ___ her keys.", ["had lost"], "Reported speech: present perfect → past perfect."],
    ["d", 4, "A disappointing evening.", [["Lea", "How was the restaurant?"], ["Dan", "We couldn't eat there! They ___ (close) the kitchen by the time we ___ (arrive)."]], [["had closed"], ["arrived", "got there"]], "Earlier action (past perfect) before a past moment (past simple)."],
    ["i", 4, "Non avevo mai visto tanta neve.", "I ___ so much snow.", ["had never seen"], "Never before a past moment."],
    ["x", 4, "Mark finally got his driving licence.", "He ___ (fail) the test twice before.", ["had failed"], "Earlier attempts before the past event."],
    ["k", 4, "When I got home, someone had broken the window.", ["Past perfect simple", "Past simple", "Present perfect simple", "Past continuous"], "An earlier action before I got home."],
    ["g", 5, "Hardly ___ (we / start) eating when the doorbell rang.", ["had we started"], "Hardly + inversion + past perfect … when."],
    ["m", 5, "If I ___ about the strike, I would have taken the car.", ["had known", "knew", "would know", "have known"], "Third conditional: if + past perfect."],
    ["t", 5, "Rewrite with “wish”.", "I regret not studying harder at school.", "I wish I ___ harder at school.", ["had studied"], "Wish + past perfect for past regrets."],
    ["e", 5, "[Not until] [I got home] [did I realise] [I lost my wallet].", 3, ["I had lost my wallet"], "The loss happened earlier: past perfect."],
    ["j", 5, "Had I known, I would have helped.", true, [], "Inverted third conditional."],
    ["q", 5, "Rewrite with “No sooner”.", "no sooner / she / sit down / than the phone rang", ["No sooner had she sat down than the phone rang."], "No sooner + had + subject + past participle + than."],
    ["d", 5, "A job interview story.", [["Kim", "How did it go?"], ["Raj", "Badly! I realised halfway through that I ___ (prepare) answers for the wrong job – they ___ (send) me the wrong description!"]], [["had prepared"], ["had sent"]], "Earlier past actions revealed later in the story."],
    ["x", 5, "A biography.", "By the age of thirty, she ___ (publish) four novels.", ["had published"], "By + past time: past perfect."],
    ["i", 5, "Se me l'avessi detto, ti avrei aiutato.", "If you ___ me, I would have helped you.", ["had told"], "Third conditional."],
    ["k", 5, "It was the best concert I had ever been to.", ["Past perfect simple", "Present perfect simple", "Past simple", "Past perfect continuous"], "Superlative + ever in a past narrative."]
  ]);

  /* ---------- FUTURE SIMPLE (WILL) (A2–B2) ---------- */
  D.extend("future-simple", [
    ["g", 3, "Don't worry – I'm sure everything ___ (be) fine.", ["will be"], "Confident prediction: will."],
    ["m", 3, "I've forgotten my pen. – Don't worry, I ___ you one.", ["'ll lend", "am lending", "lend", "am going to lend"], "Instant offer."],
    ["i", 3, "Ti prometto che non arriverò in ritardo.", "I promise I ___ late.", ["will not be", "won't be"], "Promise: won't."],
    ["x", 3, "A fortune teller looks at your hand.", "You ___ (meet) someone special soon.", ["will meet"], "Prediction about the future."],
    ["k", 3, "I'll probably stay at home tonight.", ["Future simple (will)", "Be going to", "Present continuous", "Present simple"], "probably + will."],
    ["g", 4, "That ___ (be) Tom at the door – he said he'd come at six.", ["will be"], "Will for a confident assumption about the present."],
    ["m", 4, "The car ___ start! I think the battery is flat.", ["won't", "doesn't going to", "isn't", "not will"], "Won't for refusal or something that doesn't work."],
    ["t", 4, "Rewrite with “will” to express certainty.", "I'm sure she knows the answer.", "She ___ the answer.", ["will know"], "Will for deduction about the present."],
    ["e", 4, "[I] [won't] [to forget] [your birthday this year].", 2, ["forget"], "will/won't + base form without to."],
    ["d", 4, "A difficult client.", [["Lia", "He says he ___ (not / pay) until we fix the problem."], ["Ted", "OK, I ___ (call) him right now and explain."]], [["will not pay", "won't pay"], ["will call", "'ll call"]], "Refusal (won't) and an instant decision (will)."],
    ["j", 4, "Shall we go for a pizza tonight?", true, [], "Shall we…? for suggestions."]
  ]);

  /* ---------- FUTURE CONTINUOUS (B1–C1) ---------- */
  D.extend("future-continuous", [
    ["g", 4, "Don't phone between two and four – I ___ (sit) an exam.", ["will be sitting", "will be taking", "will be doing"], "In progress during that time."],
    ["m", 4, "This time next month we ___ in our new house.", ["will be living", "will live", "are living", "live"], "Situation in progress at a future time."],
    ["t", 4, "Rewrite with the future continuous.", "I'll drive past your office anyway, so I can give you a lift.", "I ___ past your office anyway, so I can give you a lift.", ["will be driving"], "Something that will happen in the normal course of events."],
    ["e", 4, "[At 8 p.m.] [I] [will watch] [the final], [so don't call].", 2, ["will be watching"], "In progress at a future moment."],
    ["d", 4, "Holiday plans.", [["Gina", "What will you be doing in August?"], ["Paul", "I ___ (work) in Edinburgh, and in the evenings I ___ (study) for my exams."]], [["will be working"], ["will be studying"]], "Activities in progress over a future period."],
    ["i", 4, "Domani alle dieci starò ancora dormendo.", "At ten tomorrow I ___ .", ["will still be sleeping"], "Still in progress at a future time."],
    ["x", 4, "A flight announcement.", "We ___ (land) at Gatwick in approximately twenty minutes.", ["will be landing"], "An event in the normal course of things."],
    ["k", 4, "Will you be using the printer this afternoon?", ["Future continuous", "Future simple (will)", "Present continuous", "Future perfect simple"], "Polite enquiry about plans."],
    ["j", 4, "In two years' time I'll be studying at university.", true, [], "In progress at a future time."],
    ["q", 4, "Write a polite question in the future continuous.", "you / stay / for dinner?", ["Will you be staying for dinner?"], "Polite question about plans."],
    ["m", 5, "Ladies and gentlemen, the train ___ shortly at Platform 4.", ["will be arriving", "will have arrived", "arrives at", "is arrive"], "Announcement of an expected event."],
    ["t", 5, "Rewrite to sound less direct.", "When will you pay me back?", "When ___ me back?", ["will you be paying"], "The future continuous sounds more polite and neutral."],
    ["e", 5, "[Don't worry about the plants –] [I'll water] [them while you] [will be travelling].", 3, ["are travelling", "travel"], "Time clause (while): present tense for the future."],
    ["d", 5, "A busy week.", [["Boss", "Can you come to the meeting on Friday?"], ["Amy", "I'm afraid I ___ (fly) back from Tokyo then, so I ___ (not / attend) until Monday."]], [["will be flying"], ["will not be attending", "won't be attending", "will not be able to attend", "won't be able to attend"]], "Future continuous for a future in progress and for neutral future facts."],
    ["i", 5, "Passerai dal supermercato più tardi? Mi serve il latte.", "___ past the supermarket later? I need some milk.", ["Will you be going"], "Polite question about plans: future continuous."],
    ["x", 5, "Predicting the future of work.", "In twenty years, many of us ___ (work) alongside robots.", ["will be working"], "Situation in progress at a future time."],
    ["k", 5, "Our team will be presenting the results at 3 p.m.", ["Future continuous", "Future perfect simple", "Present continuous", "Future simple (will)"], "A scheduled future activity in progress."],
    ["j", 5, "Next week at this time, I'll be lie on a beach.", false, ["Next week at this time, I'll be lying on a beach."], "will be + -ing."],
    ["q", 5, "Write a sentence in the future continuous.", "this time tomorrow / we / fly / over the Alps", ["This time tomorrow we will be flying over the Alps."], "In progress at a future moment."],
    ["h", 5, "Match the beginnings and endings.", [["Don't call me at nine –", "I'll be putting the children to bed."], ["Will you be using the car", "this evening? I'd like to borrow it."], ["In ten years' time,", "people will be travelling in driverless cars."], ["I can post your letter –", "I'll be going past the post office anyway."]], "Future continuous: in progress at a future time, polite enquiries, and actions in the normal course of events."],
    ["m", 5, "Hurry up! The guests ___ any minute now.", ["will be arriving", "will have arrived", "arrive", "have arrived"], "An expected event about to be in progress."],
    ["e", 5, "[I] [will be knowing] [the results] [by Friday].", 1, ["will know"], "Know is a state verb: will know."],
    ["d", 5, "A video call.", [["Nick", "Can I call you at eight?"], ["Sue", "Better at nine – I ___ (still / have) dinner at eight."]], [["will still be having", "will still be eating"]], "Still in progress at a future time."]
  ]);
})(window.TenseDojo);
