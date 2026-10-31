/* Verb Tenses — extra exercise bank: future forms.
   Format reference: data/engine.js. Belts = difficulty (1 White … 6 Black). */
(function (D) {
  "use strict";

  D.extend("future-simple", [
    ["g", 1, "I think it ___ (rain) tomorrow.", ["will rain"], "A prediction based on opinion (“I think”): will + base form."],
    ["m", 1, "That bag looks heavy. — Don't worry, I ___ you.", ["will help", "help", "am helping", "helped"], "An offer made at the moment of speaking: will."],
    ["e", 1, "[She] [will comes] [later].", 1, ["will come"], "After will, use the base form without -s."],
    ["i", 1, "Ti chiamo domani.", "I ___ you tomorrow.", ["will call", "will phone", "will ring"], "A promise or spontaneous decision about the future: will."],
    ["c", 2, "___ (you / help) me with this box, please?", ["Will you help"], "Requests: Will you + base form?"],
    ["x", 2, "The phone is ringing.", "I ___ (get) it!", ["will get"], "A decision taken at the moment of speaking: will."],
    ["t", 2, "Make it negative.", "I will tell him.", "I ___ him.", ["will not tell"], "Negative: will not (won't) + base form."],
    ["k", 2, "Perhaps she'll be late.", ["Future simple (will)", "Be going to", "Present continuous", "Future continuous"], "An uncertain prediction (“perhaps”): will."],
    ["g", 3, "I promise I ___ (not / forget) your birthday.", ["will not forget"], "Promises take will."],
    ["m", 3, "In fifty years, people ___ on Mars, maybe.", ["will live", "are living", "live", "lived"], "A general prediction about the distant future: will."],
    ["e", 3, "[If] [it] [will rain], [we'll stay] [at home].", 2, ["rains"], "After “if” in a future condition, use the present simple."],
    ["i", 3, "Penso che vincerà la nostra squadra.", "I think our team ___ .", ["will win"], "Prediction with “I think”: will."],
    ["x", 4, "Your friend has left her wallet at home.", "Don't worry, I ___ (pay) for you.", ["will pay"], "A spontaneous offer: will."],
    ["t", 4, "Rewrite as an offer with “Shall”.", "Do you want me to carry your bag?", "___ your bag?", ["Shall I carry"], "Shall I…? makes an offer."],
    ["k", 4, "I'll probably see you at the meeting.", ["Future simple (will)", "Be going to", "Future continuous", "Present continuous"], "Probably + will for a prediction."],
    ["e", 4, "[I'll see] [you] [when] [I will get] [back].", 3, ["I get"], "After “when” referring to the future, use the present simple."],
    ["g", 5, "The door ___ (not / open)! It's stuck.", ["will not open"], "Won't can express refusal, even for objects."],
    ["m", 5, "I'm sure you ___ the exam — you've worked so hard.", ["will pass", "are passing", "pass", "passed"], "Confident prediction with “I'm sure”: will."],
    ["i", 5, "Non preoccuparti, non lo dirò a nessuno.", "Don't worry, I ___ anyone.", ["will not tell"], "A promise in the negative: won't."],
    ["x", 5, "The doctor looks at your X-ray.", "Your arm ___ (heal) in about six weeks.", ["will heal"], "A prediction based on expertise: will."],
    ["e", 5, "[Look at those clouds —] [it] [will rain] [soon].", 2, ["is going to rain"], "A prediction based on present evidence: be going to."],
    ["t", 6, "Rewrite with “will” and “probably”.", "Prices are likely to go up next year.", "Prices ___ up next year.", ["will probably go"], "Probably goes after will in affirmative sentences."],
    ["g", 6, "Someone's at the door. That ___ (be) the postman — I'm expecting a parcel.", ["will be"], "Will can express a confident assumption about the present."],
    ["k", 6, "You'll find the keys in the top drawer.", ["Future simple (will)", "Present simple", "Be going to", "Future continuous"], "Will for a confident statement about what will happen."],
    ["e", 6, "[By the time] [you will arrive], [we] [will have eaten].", 1, ["you arrive"], "Time clauses (by the time, when, as soon as) take a present tense."]
  ]);

  D.extend("be-going-to", [
    ["g", 1, "Look at that sky! It ___ (rain).", ["is going to rain"], "A prediction based on present evidence: be going to."],
    ["m", 1, "We ___ visit our grandparents this weekend — we decided last week.", ["are going to", "will", "go to", "are go to"], "A plan decided before speaking: be going to."],
    ["e", 1, "[I] [am going] [buy] [a new bike].", 1, ["am going to"], "Be going to needs “to” before the base form."],
    ["i", 1, "Ho intenzione di imparare il giapponese.", "I ___ Japanese.", ["am going to learn", "am going to study"], "An intention: be going to + base form."],
    ["c", 2, "What ___ (you / do) after school today?", ["are you going to do", "are you doing"], "Asking about plans: be going to (or the present continuous)."],
    ["x", 2, "Sam has bought paint and brushes.", "He ___ (paint) his bedroom.", ["is going to paint"], "Evidence of a plan: be going to."],
    ["t", 2, "Make it negative.", "They are going to sell the house.", "They ___ the house.", ["are not going to sell"], "Negative: am/is/are not going to."],
    ["k", 2, "She's going to have a baby in May.", ["Be going to", "Future simple (will)", "Present continuous", "Present simple"], "A future event based on present evidence."],
    ["g", 3, "Watch out! You ___ (fall)!", ["are going to fall"], "Something about to happen, visible now."],
    ["m", 3, "I've decided — I ___ apply for the job.", ["am going to", "will", "would", "am going"], "A decision already made: be going to."],
    ["e", 3, "[He] [is going to] [studies] [medicine].", 2, ["study"], "After going to, use the base form."],
    ["i", 3, "Guarda quel bicchiere: sta per cadere!", "Look at that glass: it ___ fall!", ["is going to", "is about to"], "Imminent event with evidence."],
    ["x", 4, "The score is 4–0 with five minutes left.", "Our team ___ (win) the match.", ["is going to win"], "A prediction based on the present situation."],
    ["t", 4, "Use “going to” for an intention.", "My plan is to save money for a car.", "I ___ money for a car.", ["am going to save"], "Plans and intentions: be going to."],
    ["k", 4, "I'm going to tell her the truth tonight — I've made up my mind.", ["Be going to", "Future simple (will)", "Present simple", "Future continuous"], "A firm intention decided before speaking."],
    ["e", 4, "[She] [has already decided]: [she] [will study] [law].", 3, ["is going to study"], "A decision made earlier takes be going to, not will."],
    ["g", 5, "I ___ (be going) to call you yesterday, but I forgot.", ["was going"], "Was/were going to = an intention in the past that did not happen."],
    ["m", 5, "Experts say the economy ___ get worse before it gets better.", ["is going to", "is going", "goes to", "going to"], "Prediction based on current signs: is going to."],
    ["i", 5, "Non ho intenzione di scusarmi.", "I ___ apologise.", ["am not going to"], "Negative intention: am not going to."],
    ["x", 5, "Laura is holding a pen over the contract.", "She ___ (sign) it.", ["is going to sign"], "We can see what is about to happen."],
    ["e", 5, "[I decided last week]: [I] [will start] [a diet] [on Monday].", 2, ["am going to start"], "A previous decision: be going to."],
    ["t", 6, "Rewrite with “going to”.", "We intend to move abroad next year.", "We ___ abroad next year.", ["are going to move"], "Intend to = be going to."],
    ["g", 6, "Mind the step — you ___ (trip) over it.", ["are going to trip"], "A warning based on what we can see."],
    ["k", 6, "It was going to be a quiet evening, but then the guests arrived.", ["Be going to", "Past continuous", "Future simple (will)", "Past perfect simple"], "Was going to: the future seen from the past."],
    ["e", 6, "[They] [was going to] [get married], [but they changed their minds].", 1, ["were going to"], "With they, use were going to."]
  ]);

  D.extend("present-continuous-future", [
    ["g", 1, "I ___ (meet) Sara at six tomorrow.", ["am meeting"], "A fixed arrangement with a time: present continuous."],
    ["m", 1, "We ___ to Spain on Friday. The tickets are booked.", ["are flying", "fly", "flew", "flying"], "An arrangement already made: present continuous."],
    ["i", 1, "Sabato sera esco con i miei amici.", "On Saturday evening I ___ out with my friends.", ["am going"], "Personal arrangements: present continuous."],
    ["c", 2, "What ___ (you / do) this weekend?", ["are you doing"], "Asking about arrangements: present continuous."],
    ["x", 2, "Lucy has booked a table at a restaurant for tonight.", "She ___ (have) dinner with her parents.", ["is having"], "A booking = a fixed arrangement."],
    ["t", 2, "Make it a question.", "They are coming tomorrow.", "___ tomorrow?", ["Are they coming"], "Invert are and the subject."],
    ["e", 3, "[I] [see] [the dentist] [at 4 tomorrow].", 1, ["am seeing"], "An appointment = present continuous."],
    ["k", 3, "I'm playing tennis with Joe on Sunday — we've booked the court.", ["Present continuous", "Present simple", "Be going to", "Future continuous"], "A fixed arrangement with other people."],
    ["g", 3, "Sorry, I can't come — I ___ (work) on Saturday.", ["am working"], "A scheduled personal commitment."],
    ["i", 4, "La prossima settimana si trasferiscono a Londra.", "They ___ to London next week.", ["are moving"], "An arranged future action."],
    ["m", 4, "Hurry up! The guests ___ at eight.", ["are arriving", "arrive", "will arriving", "arrived"], "An arrangement with people (not a timetable): present continuous."],
    ["x", 4, "You have a ticket for a concert tonight.", "I ___ (go) to a concert tonight.", ["am going"], "A ticket shows an arrangement."],
    ["t", 5, "Rewrite as a fixed arrangement.", "My plan is to see the manager at 10. It's in my diary.", "I ___ the manager at 10.", ["am seeing", "am meeting"], "In the diary = arrangement: present continuous."],
    ["e", 5, "[We] [have] [a meeting] [with the client] [tomorrow at nine].", 1, ["are having"], "A scheduled personal arrangement takes the present continuous."],
    ["k", 5, "Our cousins are staying with us next week.", ["Present continuous", "Present simple", "Future simple (will)", "Present perfect continuous"], "A future arrangement."],
    ["c", 6, "Who ___ (you / take) to the wedding next month?", ["are you taking"], "Asking about arrangements."],
    ["i", 6, "Domani non vengo a scuola: ho una visita medica.", "I ___ to school tomorrow: I have a doctor's appointment.", ["am not coming", "am not going"], "A negative arrangement: present continuous."],
    ["m", 6, "I can't have lunch with you on Thursday — I ___ the team in Milan.", ["am visiting", "visit", "will be visit", "visited"], "Fixed plan that prevents another one: present continuous."]
  ]);

  D.extend("present-simple-future", [
    ["g", 1, "The bus ___ (leave) at 7.30 tomorrow.", ["leaves"], "Timetables: present simple."],
    ["m", 1, "The film ___ at nine tonight.", ["starts", "is start", "starting", "started"], "Scheduled events: present simple."],
    ["i", 1, "Il treno arriva alle 10.", "The train ___ at 10.", ["arrives", "gets in"], "Timetables: present simple."],
    ["c", 2, "What time ___ (the shop / open) tomorrow?", ["does the shop open"], "Question about a schedule: does + subject + base form."],
    ["x", 2, "The school calendar is fixed.", "The summer holidays ___ (begin) on 10 June.", ["begin", "start"], "Official calendars: present simple."],
    ["e", 2, "[I'll call you] [when] [I will arrive].", 2, ["I arrive"], "After “when” referring to the future, use the present simple."],
    ["t", 3, "Join with “as soon as”.", "I'll finish this. Then I'll help you.", "I'll help you as soon as I ___ this.", ["finish", "have finished"], "As soon as + present tense for the future."],
    ["k", 3, "The concert begins at eight tomorrow.", ["Present simple", "Present continuous", "Future simple (will)", "Be going to"], "A scheduled event."],
    ["g", 3, "Before you ___ (go) out, turn off the lights.", ["go"], "Before + present simple with future meaning."],
    ["m", 4, "We'll leave when the rain ___ .", ["stops", "will stop", "stop", "is going to stop"], "Time clause: present simple."],
    ["i", 4, "Ti dirò tutto quando ci vediamo.", "I'll tell you everything when we ___ .", ["meet", "see each other"], "When + present simple for the future."],
    ["e", 4, "[Unless] [you will hurry], [you'll miss] [the bus].", 1, ["you hurry"], "After “unless”, use the present simple."],
    ["x", 5, "Your boarding pass says: departure 06:15, gate B12.", "Our flight ___ (depart) at 6.15 tomorrow.", ["departs", "leaves"], "Official timetables: present simple."],
    ["g", 5, "I won't sign anything until I ___ (read) the contract.", ["have read", "read"], "Until + present perfect (or simple) for the future."],
    ["t", 5, "Rewrite with “until”.", "The taxi will come soon. We'll wait here till then.", "We'll wait here until the taxi ___ .", ["comes", "arrives"], "Until + present simple."],
    ["e", 6, "[Once] [you will have] [finished], [you can go].", 1, ["you have"], "Once + present perfect for a future completed action."],
    ["k", 6, "As soon as she ___ here, we'll start.", ["Present simple", "Future simple (will)", "Present continuous", "Be going to"], "As soon as + present simple."],
    ["i", 6, "Appena arrivi, mandami un messaggio.", "Text me as soon as you ___ .", ["arrive", "get there", "get here"], "As soon as + present simple."]
  ]);

  D.extend("future-continuous", [
    ["g", 1, "This time tomorrow I ___ (fly) to New York.", ["will be flying"], "An action in progress at a future time: will be + -ing."],
    ["m", 1, "Don't call at eight — we ___ dinner.", ["will be having", "will have", "are have", "have"], "In progress at a future moment."],
    ["e", 1, "[At ten tomorrow] [I] [will work], [so I can't meet you].", 2, ["will be working"], "Activity in progress at a future time: future continuous."],
    ["i", 2, "Domani a quest'ora sarò in spiaggia a prendere il sole.", "This time tomorrow I ___ on the beach.", ["will be sunbathing", "will be lying"], "This time tomorrow + future continuous."],
    ["c", 2, "___ (you / use) your car tonight? Can I borrow it?", ["Will you be using"], "Polite question about plans."],
    ["x", 2, "Your exam is on Monday from 9 to 12.", "At 10 on Monday I ___ (take) my exam.", ["will be taking", "will be doing", "will be sitting"], "In progress at that moment."],
    ["t", 3, "Make it a polite question about plans.", "Are you coming to the meeting?", "___ to the meeting?", ["Will you be coming"], "The future continuous sounds less direct."],
    ["k", 3, "In an hour I'll be driving home.", ["Future continuous", "Future simple (will)", "Present continuous", "Future perfect simple"], "In progress at a future point."],
    ["g", 3, "Don't worry, I ___ (pass) the post office anyway, so I'll post your letter.", ["will be passing"], "Something that will happen in the normal course of events."],
    ["m", 4, "In ten years' time, most people ___ electric cars.", ["will be driving", "drive", "are driving", "have driven"], "A situation in progress at a future time."],
    ["i", 4, "Alle otto starò ancora lavorando.", "At eight I ___ .", ["will still be working"], "Still in progress at a future time."],
    ["e", 4, "[When you get here], [we] [will be eat] [dinner].", 2, ["will be eating"], "Future continuous: will be + -ing."],
    ["x", 5, "The match starts at 3 and lasts 90 minutes.", "At 4 o'clock the players ___ (still / play).", ["will still be playing"], "In progress at 4."],
    ["k", 5, "Will you be going past the supermarket later?", ["Future continuous", "Future simple (will)", "Present continuous", "Future perfect continuous"], "A polite enquiry about plans."],
    ["c", 5, "By this time next year, she ___ (live) in Tokyo.", ["will be living"], "A situation in progress at a future point."],
    ["t", 6, "Rewrite to sound less direct.", "Will you stay for dinner?", "___ for dinner?", ["Will you be staying"], "The future continuous avoids sounding like a request."],
    ["m", 6, "Ladies and gentlemen, we ___ shortly at Heathrow.", ["will be landing", "will have landed", "land", "are land"], "Announcements of an event in the normal course of things."],
    ["g", 6, "Stop by around five — I ___ (wait) for you at the café.", ["will be waiting"], "In progress at a future time."]
  ]);

  D.extend("future-perfect-simple", [
    ["g", 1, "By six o'clock I ___ (finish) my homework.", ["will have finished"], "Completed before a future time: will have + past participle."],
    ["m", 1, "By next year, they ___ the new bridge.", ["will have built", "will build", "have built", "built"], "By + future time: future perfect."],
    ["i", 2, "Per venerdì avrò letto tutto il libro.", "By Friday I ___ the whole book.", ["will have read"], "Completed by a future deadline."],
    ["c", 2, "___ (you / finish) by tomorrow?", ["Will you have finished"], "Question: Will + subject + have + past participle."],
    ["e", 2, "[By the time] [you arrive], [we] [will finished] [dinner].", 3, ["will have finished"], "Future perfect: will have + past participle."],
    ["x", 3, "The film started at 8 and lasts two hours. You'll arrive at 10.15.", "When you arrive, the film ___ (end).", ["will have ended", "will have finished"], "Completed before your arrival."],
    ["t", 3, "Rewrite with “by”.", "I'll finish the report before Monday.", "I ___ the report by Monday.", ["will have finished", "will have written"], "By + deadline: future perfect."],
    ["k", 3, "By 2030, scientists will have found a cure.", ["Future perfect simple", "Future simple (will)", "Future continuous", "Present perfect simple"], "Completed before a future date."],
    ["g", 4, "Next month we ___ (be) married for 25 years.", ["will have been"], "Duration up to a future point with a state verb."],
    ["m", 4, "Don't call at seven: I ___ work by then.", ["will not have finished", "do not finish", "did not finish", "am not finishing"], "Not completed before a future time."],
    ["i", 4, "Entro le dieci saranno già partiti.", "By ten they ___ .", ["will have already left", "will already have left", "will have left"], "Completed before a future time."],
    ["x", 5, "Tom saves €100 a month. He started in January.", "By December he ___ (save) €1,200.", ["will have saved"], "Total completed by a future point."],
    ["e", 5, "[By the end of the course] [you] [will be learning] [500 new words].", 2, ["will have learnt", "will have learned"], "A completed total by a future time: future perfect."],
    ["k", 5, "By the time you read this letter, I ___ the country.", ["Future perfect simple", "Future simple (will)", "Present perfect simple", "Future continuous"], "Completed before another future event."],
    ["c", 6, "You ___ (hear) the news already, I suppose.", ["will have heard"], "Future perfect for a confident assumption about the past."],
    ["t", 6, "Rewrite as a deduction.", "I'm sure she has got home by now.", "She ___ home by now.", ["will have got", "will have gotten", "will have arrived"], "Will have + past participle expresses a deduction."],
    ["m", 6, "By the time we get there, the shop ___ .", ["will have closed", "will close", "closes", "has closed"], "Completed before another future event."]
  ]);

  D.extend("future-perfect-continuous", [
    ["g", 1, "By eight o'clock I ___ (wait) for an hour.", ["will have been waiting"], "Duration up to a future point: will have been + -ing."],
    ["g", 2, "By June I ___ (work) here for a year.", ["will have been working"], "Duration up to a future point."],
    ["m", 3, "Next month she ___ at the school for ten years.", ["will have been teaching", "will be teaching", "teaches", "has been teaching"], "Duration up to a future point."],
    ["i", 3, "A dicembre vivrò qui da cinque anni.", "In December I ___ here for five years.", ["will have been living", "will have lived"], "Italian future + “da” = English future perfect (continuous)."],
    ["e", 3, "[By 5 p.m.] [we] [will have been drive] [for eight hours].", 2, ["will have been driving"], "The future perfect continuous needs -ing."],
    ["x", 4, "The marathon started at 9. You will finish at 1.", "At 1 o'clock you ___ (run) for four hours.", ["will have been running"], "Duration up to a future moment."],
    ["c", 4, "How long ___ (you / study) English by the end of this year?", ["will you have been studying"], "How long + future perfect continuous."],
    ["k", 4, "By midnight, I'll have been studying for six hours.", ["Future perfect continuous", "Future continuous", "Future perfect simple", "Present perfect continuous"], "Duration up to a future point."],
    ["t", 5, "Rewrite with the future perfect continuous.", "We started waiting at 7. At 9 we'll still be waiting.", "At 9 we ___ for two hours.", ["will have been waiting"], "Duration from a past start up to a future point."],
    ["g", 5, "She'll be tired when she arrives: she ___ (travel) all day.", ["will have been travelling", "will have been traveling"], "Explains a future situation by a preceding activity."],
    ["e", 5, "[By next year] [I] [will have been knowing] [her] [for a decade].", 2, ["will have known"], "State verbs use the future perfect simple."],
    ["m", 6, "He ___ for twelve hours by the time the shift ends, so let him rest.", ["will have been working", "will work", "works", "is working"], "Duration up to a future point."],
    ["i", 6, "Quando arriverà, avrà guidato per ore.", "When he arrives, he ___ for hours.", ["will have been driving"], "Duration of an activity before a future moment."],
    ["x", 6, "The workers started digging the tunnel in 2023.", "By 2027 they ___ (dig) for four years.", ["will have been digging"], "Duration up to a future year."]
  ]);
})(window.TenseDojo);
