/* Verb Tenses — level-balancing bank 3 (original sentences).
   Advanced tenses at C1–C2: past perfect continuous, future perfect simple and continuous.
   Format reference: data/engine.js. Belt = CEFR level (1 A1 … 6 C2). */
(function (D) {
  "use strict";

  /* ---------- PAST PERFECT CONTINUOUS (B2–C2) ---------- */
  D.extend("past-perfect-continuous", [
    ["g", 5, "By the time the ambulance arrived, the injured man ___ (lie) in the road for half an hour.", ["had been lying"], "Duration up to a past moment."],
    ["m", 5, "The negotiators were exhausted: they ___ through the night.", ["had been talking", "have been talking", "were talked", "had talk"], "An earlier activity explains a past state."],
    ["t", 5, "Rewrite with the past perfect continuous.", "She started working there in 2010. She left in 2020.", "She ___ there for ten years when she left.", ["had been working"], "Duration up to a past event."],
    ["e", 5, "[When the results came out], [the scientists] [have been studying] [the data for months].", 2, ["had been studying"], "Duration before a past moment."],
    ["d", 5, "An awkward moment.", [["Narrator", "When Clara walked in, everyone went quiet. It was obvious they ___ (talk) about her, and somebody ___ (laugh)."]], [["had been talking"], ["had been laughing"]], "Earlier activities whose effects are still visible."],
    ["i", 5, "Era stanchissima perché lavorava da dodici ore.", "She was exhausted because she ___ for twelve hours.", ["had been working"], "Italian imperfetto + da (past) = past perfect continuous."],
    ["x", 5, "The detective examined the room.", "The ashtray was full: someone ___ (smoke) there for hours.", ["had been smoking"], "Deduction from evidence about an earlier activity."],
    ["k", 5, "He had been feeling unwell for days before he saw a doctor.", ["Past perfect continuous", "Past continuous", "Past perfect simple", "Present perfect continuous"], "Duration before a past event."],
    ["j", 5, "We had been waiting for ages when the bus finally turned up.", true, [], "Duration before a past event."],
    ["q", 5, "Write a sentence in the past perfect continuous.", "they / argue / for hours / before / anyone / intervene", ["They had been arguing for hours before anyone intervened."], "had been + -ing before + past simple."],
    ["h", 5, "Match the beginnings and endings.", [["His clothes were covered in paint", "because he had been decorating the kitchen."], ["By the time the band came on,", "the fans had been waiting for three hours."], ["How long had you been living there", "when you met your wife?"], ["I could tell she had been crying", "from her red eyes."]], "Past perfect continuous: duration before a past moment, or an earlier activity with visible effects."],
    ["g", 6, "It later emerged that the company ___ (falsify) its accounts for years before the scandal broke.", ["had been falsifying"], "A repeated activity over a long period before a past event."],
    ["m", 6, "Little did they know that the police ___ their phones for months.", ["had been tapping", "have been tapping", "were tapped", "had tapped"], "Inversion with little + past perfect continuous for an activity over a period."],
    ["t", 6, "Report the statement.", "“I've been working on the project since March,” she explained.", "She explained that she ___ on the project since March.", ["had been working"], "Reported speech: present perfect continuous → past perfect continuous."],
    ["e", 6, "[Only then] [did I realise] [that I had been knowing] [the truth all along].", 2, ["that I had known"], "Know is a state verb: past perfect simple."],
    ["d", 6, "A witness statement.", [["Witness", "The driver seemed confused. I suspect he ___ (drink), although he insisted he ___ (only / drive) for twenty minutes."]], [["had been drinking"], ["had only been driving"]], "Earlier activities in reported narrative."],
    ["i", 6, "Si scoprì che l'impiegato rubava denaro da anni.", "It turned out that the employee ___ money for years.", ["had been stealing"], "A repeated activity over years before a past discovery."],
    ["x", 6, "A historian describes the fall of an empire.", "By the fifth century, the empire ___ (decline) for generations.", ["had been declining"], "A long process up to a past point."],
    ["k", 6, "Had she been expecting the news, she would not have reacted so badly.", ["Past perfect continuous", "Past perfect simple", "Past continuous", "Present perfect continuous"], "Inverted third conditional with a continuous form."],
    ["j", 6, "She had been finishing her thesis by June.", false, ["She had finished her thesis by June."], "A completed result: past perfect simple."],
    ["q", 6, "Rewrite with an inverted conditional.", "If I had been paying attention, I would have seen the sign.", ["Had I been paying attention, I would have seen the sign."], "Had + subject + been + -ing replaces if."],
    ["g", 6, "The firefighters, who ___ (battle) the blaze since dawn, were finally relieved at midday.", ["had been battling"], "Duration in a non-defining relative clause."],
    ["m", 6, "Not until the audit did anyone notice that the money ___ for months.", ["had been disappearing", "has been disappearing", "disappeared", "was disappeared"], "A gradual process before a past discovery."],
    ["e", 6, "[The athlete] [had been training] [for the Olympics] [when she] [was injuring] [her knee].", 4, ["injured"], "A short event: past simple."],
    ["t", 6, "Rewrite with a participle clause.", "Because she had been travelling all night, she fell asleep at once.", "Having ___ all night, she fell asleep at once.", ["been travelling"], "Perfect continuous participle: having been + -ing."],
    ["h", 6, "Match the beginnings and endings.", [["Little did we suspect that he", "had been lying to us all along."], ["Having been travelling since dawn,", "the tourists were exhausted by evening."], ["Had they been listening more carefully,", "they would have understood."], ["It transpired that the twins", "had been swapping places in class for months."]], "Advanced structures with the past perfect continuous: inversion, participle clauses and conditionals."],
    ["j", 6, "Having been waiting for an hour, we decided to leave.", true, [], "Perfect continuous participle clause (formal)."]
  ]);

  /* ---------- FUTURE PERFECT SIMPLE (B2–C2) ---------- */
  D.extend("future-perfect-simple", [
    ["g", 5, "By the time you get this letter, I ___ (leave) the country.", ["will have left"], "Completed before a future moment."],
    ["m", 5, "Don't phone before ten – the meeting ___ by then.", ["won't have finished", "won't finish", "hasn't finished", "didn't finish"], "Not completed before a future time."],
    ["t", 5, "Rewrite with the future perfect.", "The builders will finish the roof before the end of May.", "The builders ___ the roof by the end of May.", ["will have finished"], "by + deadline."],
    ["e", 5, "[By 2030], [scientists] [will find] [a cure for the disease].", 2, ["will have found"], "By + future time: future perfect."],
    ["d", 5, "Planning a trip.", [["Tom", "Can we leave on Friday afternoon?"], ["Ana", "Yes, by then I ___ (hand in) my thesis and you ___ (finish) your exams."]], [["will have handed in"], ["will have finished"]], "Both actions completed before Friday afternoon."],
    ["i", 5, "Entro la fine dell'anno avremo venduto mille copie.", "By the end of the year we ___ a thousand copies.", ["will have sold"], "Completed by a future deadline."],
    ["x", 5, "It's 7 p.m. Your friend's plane landed at 6.", "She ___ (arrive) at the hotel by now.", ["will have arrived"], "Future perfect for a deduction about the present."],
    ["k", 5, "Next month they will have been married for fifty years.", ["Future perfect simple", "Future continuous", "Future perfect continuous", "Present perfect simple"], "State up to a future point: be → will have been."],
    ["j", 5, "By next summer I will have saved enough for a car.", true, [], "Completed by a future time."],
    ["q", 5, "Write a question in the future perfect.", "how many countries / you / visit / by the end of the tour?", ["How many countries will you have visited by the end of the tour?"], "Wh- + will + subject + have + past participle."],
    ["h", 5, "Match the beginnings and endings.", [["By the time we get to the cinema,", "the film will have started."], ["Don't worry about the washing-up –", "I'll have done it by the time you're back."], ["Will you have finished", "the report by Monday?"], ["In June they will have been", "together for ten years."]], "The future perfect describes what will be complete by a future time."],
    ["g", 5, "You ___ (hear) about the new manager, I expect.", ["will have heard"], "A confident assumption about the past."],
    ["m", 5, "By the end of this course, you ___ more than 2,000 new words.", ["will have learnt", "will learn", "have learnt", "are learning"], "Completed total by a future point."],
    ["g", 6, "By the time the bill is passed, it ___ (amend) so many times that it will be unrecognisable.", ["will have been amended"], "Future perfect passive: will have been + past participle."],
    ["m", 6, "The renovations ___ by the time the museum reopens next spring.", ["will have been completed", "will have completed", "will be completed", "have been completed"], "Future perfect passive."],
    ["t", 6, "Rewrite in the passive.", "By 2040, engineers will have replaced most petrol cars.", "By 2040, most petrol cars ___ .", ["will have been replaced"], "Future perfect passive."],
    ["e", 6, "[As you] [will have noticed], [the figures] [will have improved] [since last quarter].", 3, ["have improved"], "With since last quarter (a fact up to now), use the present perfect."],
    ["d", 6, "A conference speech.", [["Speaker", "By the end of today, you ___ (hear) from twelve experts, and you ___ (be given) the tools to apply their ideas."]], [["will have heard"], ["will have been given"]], "Future perfect, active and passive."],
    ["i", 6, "A quest'ora avranno già ricevuto la nostra email.", "They ___ our email by now.", ["will have received", "will already have received", "will have already received"], "Deduction about the present: future perfect."],
    ["x", 6, "A project manager reviews the schedule.", "Unless we hire more staff, we ___ (not / meet) the deadline by the time the client arrives.", ["will not have met", "won't have met"], "Negative future perfect."],
    ["k", 6, "As you will have gathered, the plan has changed.", ["Future perfect simple", "Present perfect simple", "Future simple (will)", "Future continuous"], "Will have + participle for a polite assumption about the listener's knowledge."],
    ["j", 6, "By the time we arrive, the tickets will have sold out.", true, [], "Completed before a future moment."],
    ["q", 6, "Rewrite with the future perfect to express an assumption.", "I'm sure they have finished dinner by now. (they / finish / dinner / by now)", ["They will have finished dinner by now."], "Future perfect for deduction."],
    ["h", 6, "Match the beginnings and endings.", [["As many of you will have read,", "the company is merging with a rival."], ["By the time the report is published,", "the data will have been updated twice."], ["You'll have been told", "about the new security procedures."], ["Within a decade, the city", "will have doubled in size."]], "Advanced uses: assumptions about the listener and the future perfect passive."],
    ["g", 6, "By the time the investigation concludes, the evidence ___ (destroy) unless it is secured now.", ["will have been destroyed"], "Future perfect passive in a conditional context."],
    ["m", 6, "Sales ___ by 20% by the end of the financial year, according to forecasts.", ["will have risen", "will rise", "have risen", "will be rising"], "Change completed by a future point."],
    ["t", 6, "Rewrite with “by the time”.", "The guests will arrive at eight. We'll finish cooking before that.", "By the time the guests arrive, we ___ cooking.", ["will have finished"], "by the time + present simple, future perfect in the main clause."],
    ["e", 6, "[By the time] [the treaty] [will have been signed], [the war had cost thousands of lives].", 2, ["was signed"], "A past narrative: past simple in the time clause, past perfect in the main clause."],
    ["d", 6, "A science podcast.", [["Host", "By 2050, according to some estimates, sea levels ___ (rise) by at least 20 centimetres, and many coastal cities ___ (be forced) to build defences."]], [["will have risen"], ["will have been forced"]], "Future perfect, active and passive."]
  ]);

  /* ---------- FUTURE PERFECT CONTINUOUS (C1–C2) ---------- */
  D.extend("future-perfect-continuous", [
    ["g", 6, "By the time the bridge opens, engineers ___ (work) on it for over a decade.", ["will have been working"], "Duration up to a future point."],
    ["m", 6, "When she retires in June, she ___ at the hospital for forty years.", ["will have been working", "will be working", "will work", "has been working"], "Duration up to a future moment: will have been + -ing."],
    ["t", 6, "Rewrite with the future perfect continuous.", "We started renovating in January. In December we will still be renovating.", "By December we ___ for almost a year.", ["will have been renovating"], "Duration from a past start to a future point."],
    ["d", 6, "A long-distance runner.", [["Reporter", "By the time you cross the finish line tomorrow, how long ___ (you / run)?"], ["Runner", "About thirty hours – I ___ (not / sleep) for a day and a half!"]], [["will you have been running"], ["will not have slept", "won't have slept"]], "Duration (continuous) and a completed state (simple) up to a future point."],
    ["i", 6, "A giugno saranno dieci anni che insegno in questa scuola.", "In June I ___ at this school for ten years.", ["will have been teaching", "will have taught"], "Duration up to a future point."],
    ["x", 6, "You're talking about a friend who is on a long flight.", "She'll be exhausted when she lands – she ___ (travel) for nearly twenty hours.", ["will have been travelling", "will have been traveling"], "Explains a future state by a preceding activity."],
    ["k", 6, "By midnight, the volunteers will have been searching for the missing child for two days.", ["Future perfect continuous", "Future perfect simple", "Future continuous", "Past perfect continuous"], "Duration up to a future moment."],
    ["j", 6, "By next year I will have been knowing him for a decade.", false, ["By next year I will have known him for a decade."], "Know is a state verb: future perfect simple."],
    ["q", 6, "Write a question in the future perfect continuous.", "how long / you / study / English / by the time you graduate?", ["How long will you have been studying English by the time you graduate?"], "How long + will + subject + have been + -ing."],
    ["h", 6, "Match the beginnings and endings.", [["By the time the film ends,", "we'll have been sitting here for three hours."], ["She'll be starving when she gets home –", "she'll have been walking all day."], ["How long will you have been living abroad", "when you finally come back?"], ["By 2030 the company", "will have been trading for a century."]], "Future perfect continuous: duration up to a future point, or a preceding activity explaining a future state."],
    ["g", 6, "Next month the strike ___ (go on) for six weeks, with no end in sight.", ["will have been going on"], "Duration up to a future point."],
    ["m", 6, "They'll be tired when they arrive; they ___ since dawn.", ["will have been driving", "will be driving", "have been driving", "drove"], "Activity before a future moment explains a future state."],
    ["e", 6, "[By the time] [the new law] [comes into force], [campaigners] [will be fighting] [for it for years].", 4, ["will have been fighting"], "Duration up to a future point."],
    ["t", 6, "Rewrite with “by the time”.", "The investigation began in 2022. When the report is published, it will still be going on.", "By the time the report is published, the investigation ___ for years.", ["will have been going on"], "Duration up to a future event."],
    ["i", 6, "Quando arriveranno i soccorsi, saremo bloccati qui da ore.", "By the time help arrives, we ___ stuck here for hours.", ["will have been"], "With the state verb be: future perfect simple (will have been)."],
    ["d", 6, "An anniversary.", [["Host", "Next week, this programme ___ (broadcast) for twenty-five years, and we ___ (interview) more than a thousand guests."]], [["will have been broadcasting", "will have been broadcast"], ["will have interviewed"]], "Duration (continuous) vs total of completed actions (simple)."]
  ]);

  /* ---------- small top-ups to even out levels ---------- */
  D.extend("present-simple", [
    ["q", 3, "Write a question in the present simple.", "what / this word / mean?", ["What does this word mean?"], "Mean is a state verb: What does … mean?"],
    ["e", 3, "[I] [am not knowing] [the answer] [to that question].", 1, ["do not know", "don't know"], "Know is a state verb: present simple."]
  ]);
  D.extend("present-continuous", [
    ["q", 3, "Write a sentence in the present continuous.", "the population of the city / grow / fast", ["The population of the city is growing fast."], "A changing situation."],
    ["j", 3, "I'm not believing a word he says.", false, ["I don't believe a word he says."], "Believe is a state verb."]
  ]);
  D.extend("present-perfect-simple", [
    ["m", 4, "I can't find my glasses anywhere. ___ them?", ["Have you seen", "Did you see", "Are you seeing", "Had you seen"], "A recent past action with present relevance, no time given."],
    ["j", 4, "We've already bought the tickets for tonight.", true, [], "already + present perfect."]
  ]);
  D.extend("past-simple", [
    ["q", 3, "Write the question for the answer: “It cost 50 euros.”", "how much / it / cost?", ["How much did it cost?"], "How much + did + subject + base form."],
    ["j", 3, "I didn't knew the answer.", false, ["I didn't know the answer."], "didn't + base form."],
    ["x", 3, "Talking about a school trip.", "We ___ (see) the Colosseum, which was amazing.", ["saw"], "A completed event on a past trip."]
  ]);
  D.extend("present-simple-future", [
    ["m", 3, "I'll wait here until you ___ back.", ["come", "will come", "came", "are coming"], "until + present simple."]
  ]);
  D.extend("future-continuous", [
    ["g", 5, "Make sure you're on time – the director ___ (expect) you at nine sharp.", ["will be expecting"], "A situation in progress at a future time."]
  ]);
  D.extend("future-perfect-simple", [
    ["j", 6, "By the time the report reaches the minister, it will have been rewritten three times.", true, [], "Future perfect passive."]
  ]);
  D.extend("future-perfect-continuous", [
    ["t", 6, "Rewrite with the future perfect continuous.", "The talks began at 9 a.m. At 9 p.m. they will still be going on.", "By 9 p.m. the talks ___ for twelve hours.", ["will have been going on"], "Duration up to a future point."]
  ]);
})(window.TenseDojo);
