/* Modal Verbs — practice batteries (1): basics, ability and permission, obligation and necessity.
   mc:        [sentence with ___, [options], index of the correct option, explanation]
   gap:       [sentence with ___ (hint), [[accepted answers for gap 1], …], explanation]
   correct:   [sentence with a mistake, [accepted corrections], explanation]
   transform: [first sentence, key word or "", beginning, end, [accepted answers], explanation]
   text:      { parts: [[speaker or "", "text with {1}…"]], gaps: [[[accepted], explanation], …] } */
const P = x => GL.batteries.push(x);

/* ---------- basics ---------- */
P({ id: "basics-errors", lesson: "basics", type: "correct", belt: 1, items: [
  ["My sister cans play the piano very well.", ["My sister can play the piano very well."], "No -s with modal verbs: she [can]."],
  ["You must to listen to the teacher.", ["You must listen to the teacher."], "Must is followed by the base form without to."],
  ["Do you can help me with this box?", ["Can you help me with this box?"], "Questions with modals: [modal + subject + verb], no do."],
  ["He doesn't can come to the party.", ["He can't come to the party.", "He cannot come to the party."], "Negative of can: [can't / cannot], no do."],
  ["I will can visit you next summer.", ["I will be able to visit you next summer.", "I'll be able to visit you next summer."], "Two modals cannot go together: [will be able to]."],
  ["She should calls her parents more often.", ["She should call her parents more often."], "After a modal, the base form without -s: [call]."],
  ["We might going to the beach tomorrow.", ["We might go to the beach tomorrow."], "Might + base form: [go], not going."],
  ["Does she must wear a uniform?", ["Does she have to wear a uniform?", "Must she wear a uniform?"], "Must never uses does. In everyday English: [Does she have to…?]"],
  ["I can to speak three languages.", ["I can speak three languages."], "No to after can."],
  ["You shouldn't to eat so much sugar.", ["You shouldn't eat so much sugar.", "You should not eat so much sugar."], "No to after shouldn't."],
  ["It mays rain later.", ["It may rain later."], "No -s with modal verbs."],
  ["I'd like to can play the guitar.", ["I'd like to be able to play the guitar.", "I would like to be able to play the guitar."], "Can has no infinitive: [to be able to]."]
] });
P({ id: "basics-mc", lesson: "basics", type: "mc", belt: 1, items: [
  ["She ___ swim when she was three.", ["could", "can", "cans"], 0, "Past ability: [could]. Cans does not exist."],
  ["___ I use your phone for a moment?", ["Can", "Do", "Must"], 0, "Asking for permission: [Can I…?]"],
  ["You ___ eat in the library. It's against the rules.", ["mustn't", "don't have to", "needn't"], 0, "A rule that forbids something: [mustn't]."],
  ["He ___ be at work now: it's 10 a.m. on a Monday.", ["must", "mustn't", "can't"], 0, "A logical conclusion (I'm sure): [must]."],
  ["I ___ go to bed early tonight: I'm exhausted.", ["should", "should to", "ought"], 0, "Should + base form. Ought needs to: ought to go."],
  ["Look at those clouds. It ___ rain this afternoon.", ["might", "musts", "can to"], 0, "Possibility in the future: [might]."],
  ["We ___ hurry: we have plenty of time.", ["don't have to", "mustn't", "can't"], 0, "It isn't necessary: [don't have to]."],
  ["___ you like a cup of tea?", ["Would", "Will", "Shall"], 0, "Polite offer: [Would you like…?]"],
  ["It's hot in here. ___ I open the window?", ["Shall", "Will", "Do"], 0, "Offer with I: [Shall I…?]"],
  ["I'm sorry, I ___ come to your party on Saturday.", ["can't", "don't can", "not can"], 0, "Negative of can: [can't]."],
  ["Last year I ___ work every Saturday.", ["had to", "must", "musted"], 0, "Must has no past form: [had to]."],
  ["You look tired. You ___ take a break.", ["should", "must to", "would to"], 0, "Advice: [should] + base form."]
] });

/* ---------- can / could / be able to ---------- */
P({ id: "can-gap", lesson: "can-could", type: "gap", belt: 1, instr: "Complete the sentences with can, can't, could or couldn't and the verb in brackets.", items: [
  ["My little brother is only two, but he ___ (count) to twenty.", [["can count"]], "Present ability: [can] + base form."],
  ["I'm sorry, I ___ (hear) you. The music is too loud.", [["can't hear", "cannot hear"]], "Present inability: [can't]."],
  ["When I was a child, I ___ (climb) trees like a monkey.", [["could climb"]], "General ability in the past: [could]."],
  ["My grandfather ___ (read) when he was a boy: he never went to school.", [["couldn't read", "could not read"]], "Inability in the past: [couldn't]."],
  ["___ (you / speak) Spanish? – Yes, a little.", [["Can you speak"]], "Question about present ability: [Can you…?]"],
  ["We ___ (find) a hotel last night: everything was full.", [["couldn't find", "could not find"]], "Negative past ability: couldn't is fine for a single occasion in the negative."],
  ["Penguins ___ (fly), but they are excellent swimmers.", [["can't fly", "cannot fly"]], "General fact about inability: [can't]."],
  ["___ (I / borrow) your umbrella? – Sure, take it.", [["Can I borrow", "Could I borrow"]], "Asking for permission: [Can I…? / Could I…?]"],
  ["___ (you / pass) me the salt, please?", [["Can you pass", "Could you pass"]], "A request: [Can you…? / Could you…?]"],
  ["I'm afraid you ___ (park) here: it's for residents only.", [["can't park", "cannot park"]], "No permission: [can't]."],
  ["Before the operation she ___ (walk) without a stick.", [["couldn't walk", "could not walk"]], "Past inability over a period: [couldn't]."],
  ["You ___ (see) the mountains from our balcony on a clear day.", [["can see"]], "Present possibility / ability with see: [can see]."]
] });
P({ id: "can-mc", lesson: "can-could", type: "mc", belt: 2, items: [
  ["The fire spread quickly, but all the guests ___ escape.", ["were able to", "could", "can"], 0, "One specific success on a particular occasion: [were able to], not could."],
  ["When I lived in Madrid I ___ speak Spanish quite well.", ["could", "can", "am able"], 0, "General ability over a period in the past: [could]."],
  ["I've ___ sleep well since I moved to this flat.", ["been able to", "could", "can"], 0, "Present perfect of can: [have been able to]."],
  ["After the course you ___ use the software without help.", ["will be able to", "will can", "can to"], 0, "Future ability: [will be able to]."],
  ["Excuse me, ___ you tell me the time, please?", ["could", "must", "should"], 0, "A polite request to a stranger: [could]."],
  ["Mum, ___ I go to Luca's party? – Yes, you ___.", ["can … can", "could … could", "may … could"], 0, "Asking: can / could; giving permission: [can] (not could)."],
  ["The roads were icy, but we finally ___ to get home.", ["managed", "could", "can"], 0, "Managed to = succeeded after a difficulty, on one occasion. Could + to is impossible."],
  ["Winters in Milan ___ be very foggy.", ["can", "could have", "are able to"], 0, "General, theoretical possibility: [can]."],
  ["Take your keys: I ___ be out when you get back.", ["could", "can", "am able to"], 0, "A specific possibility in the future: [could] (can is for general possibility)."],
  ["I'd love ___ play the piano.", ["to be able to", "can", "to can"], 0, "Can has no infinitive: [to be able to]."],
  ["We ___ go to the cinema tonight, if you like.", ["could", "can to", "are able"], 0, "A suggestion: [could]."],
  ["I looked everywhere, but I ___ find my glasses.", ["couldn't", "wasn't able", "can't"], 0, "Negative past: couldn't is correct even for one occasion. Wasn't able needs to."]
] });
P({ id: "can-transform", lesson: "can-could", type: "transform", belt: 2, items: [
  ["I don't know how to ski.", "CAN", "I", "ski.", ["can't", "cannot"], "Not know how to = [can't]."],
  ["Is it OK if I sit here?", "CAN", "", "sit here?", ["Can I"], "Asking for permission: [Can I…?]"],
  ["Please help me with this suitcase.", "COULD", "", "help me with this suitcase?", ["Could you"], "Polite request: [Could you…?]"],
  ["She succeeded in passing the exam despite being ill.", "ABLE", "She", "pass the exam despite being ill.", ["was able to"], "One specific success in the past: [was able to]."],
  ["It was impossible for me to sleep last night.", "COULDN'T", "I", "last night.", ["couldn't sleep", "could not sleep"], "Past inability: [couldn't sleep]."],
  ["Next year it will be possible for you to vote.", "ABLE", "Next year you", "vote.", ["will be able to", "'ll be able to"], "Future: [will be able to]."],
  ["I haven't had the chance to call him yet.", "ABLE", "I", "call him yet.", ["haven't been able to", "have not been able to"], "Present perfect of can: [haven't been able to]."],
  ["Perhaps the meeting will finish late.", "COULD", "The meeting", "late.", ["could finish"], "A specific possibility in the future: [could]."],
  ["When I was young, I was a fast runner.", "COULD", "When I was young, I", "fast.", ["could run"], "General past ability: [could run]."],
  ["We finally found a parking space after twenty minutes.", "MANAGED", "We finally", "a parking space after twenty minutes.", ["managed to find"], "Success after difficulty: [managed to] + base form."]
] });
P({ id: "can-errors", lesson: "can-could", type: "correct", belt: 2, items: [
  ["After three hours, I could finally fix the computer.", ["After three hours, I was able to finally fix the computer.", "After three hours, I was finally able to fix the computer.", "After three hours, I finally managed to fix the computer.", "After three hours, I managed to finally fix the computer.", "After three hours, I managed to fix the computer.", "After three hours, I was able to fix the computer."], "One specific success: [was able to] or [managed to], not could."],
  ["I know to drive, but I don't have a car.", ["I can drive, but I don't have a car."], "Italian ‘so guidare’ = [I can drive]."],
  ["Can you to open the door, please?", ["Can you open the door, please?"], "No to after can."],
  ["I can't to find my phone.", ["I can't find my phone.", "I cannot find my phone."], "No to after can't."],
  ["Yes, of course you could borrow my bike.", ["Yes, of course you can borrow my bike."], "To give permission use [can], not could."],
  ["She has could play the violin since she was five.", ["She has been able to play the violin since she was five."], "Present perfect: [has been able to]."],
  ["We will can see the sea from the hotel.", ["We will be able to see the sea from the hotel.", "We'll be able to see the sea from the hotel."], "Future: [will be able to]."],
  ["My brother can swimming very fast.", ["My brother can swim very fast."], "Can + base form: [swim]."],
  ["I could to read before I started school.", ["I could read before I started school."], "No to after could."],
  ["Could you speak English when you were ten? – Yes, I could speaking it quite well.", ["Could you speak English when you were ten? – Yes, I could speak it quite well."], "Could + base form: [speak]."]
] });

/* ---------- may / might ---------- */
P({ id: "may-mc", lesson: "may-might", type: "mc", belt: 3, items: [
  ["___ I come in? – Yes, please do.", ["May", "Might", "Must"], 0, "Formal permission: [May I…?]"],
  ["Where's Paolo? – I'm not sure. He ___ be in the garden.", ["might", "must", "can't"], 0, "Not sure = possibility: [might]."],
  ["Visitors ___ not use flash photography inside the museum.", ["may", "might", "need"], 0, "Formal rule / prohibition: [may not]."],
  ["Don't wait for me. I ___ be late.", ["may", "must", "can"], 0, "Possibility in the future: [may]."],
  ["___ he's ill. He wasn't at school today.", ["Maybe", "May be", "Might"], 0, "Maybe (one word) is an adverb followed by a full sentence."],
  ["She ___ ill. She wasn't at school today.", ["may be", "maybe", "mays be"], 0, "May + be + adjective: [may be ill]."],
  ["You ___ want to check your answers before handing in the test.", ["might", "must", "shall"], 0, "Polite suggestion: [You might want to…]"],
  ["Take some water. The journey ___ take longer than we think.", ["might", "can", "should to"], 0, "A specific possibility: [might]."],
  ["I ___ not have time to finish the report today.", ["may", "can", "must"], 0, "Perhaps not: [may not]."],
  ["Who's that man? – I don't know. He ___ be the new manager.", ["could", "must", "shall"], 0, "Possibility: [could] (or may / might)."],
  ["If we left now, we ___ catch the earlier train.", ["might", "may to", "must"], 0, "Possible result in a second conditional: [might]."],
  ["I'm not sure if I'll come. I ___ stay at home.", ["might", "must", "can't"], 0, "Uncertain plan: [might]."]
] });
P({ id: "may-transform", lesson: "may-might", type: "transform", belt: 3, items: [
  ["Perhaps she is at the gym.", "MIGHT", "She", "at the gym.", ["might be"], "Perhaps + present = [might be]."],
  ["Perhaps it will snow tonight.", "MAY", "It", "tonight.", ["may snow"], "Perhaps + future = [may] + base form."],
  ["Is it all right if I leave early?", "MAY", "", "leave early?", ["May I"], "Formal permission: [May I…?]"],
  ["Perhaps they don't know the address.", "MIGHT", "They", "the address.", ["might not know", "mightn't know"], "Perhaps not = [might not]."],
  ["It's possible that he's working late.", "MAY", "He", "late.", ["may be working"], "An action perhaps in progress: [may be + -ing]."],
  ["Students are allowed to use a calculator.", "MAY", "Students", "a calculator.", ["may use"], "Formal permission: [may] + base form."],
  ["Maybe we won't have enough chairs.", "MAY", "We", "enough chairs.", ["may not have"], "Maybe not = [may not]."],
  ["I suggest you book a table in advance.", "MIGHT", "You", "book a table in advance.", ["might want to", "might like to"], "Polite suggestion: [might want to]."],
  ["Perhaps the shop is closed on Sundays.", "COULD", "The shop", "on Sundays.", ["could be closed"], "Possibility: [could be]."],
  ["It's possible that the parcel will arrive tomorrow.", "MIGHT", "The parcel", "tomorrow.", ["might arrive"], "Possibility in the future: [might] + base form."]
] });

/* ---------- must ---------- */
P({ id: "must-mc", lesson: "must", type: "mc", belt: 2, items: [
  ["All passengers ___ show their boarding pass at the gate.", ["must", "mustn't", "needn't"], 0, "A written rule: [must]."],
  ["You ___ try this cake. It's delicious!", ["must", "mustn't", "had to"], 0, "Strong recommendation: [must]."],
  ["I ___ wait for over an hour at the doctor's yesterday.", ["had to", "must", "musted"], 0, "Obligation in the past: [had to]."],
  ["I really ___ stop eating junk food. I feel terrible.", ["must", "had to", "mustn't"], 0, "Personal obligation (the speaker's own feeling): [must]."],
  ["You ___ be home by eleven. That's the rule.", ["must", "must to", "musts"], 0, "Must + base form."],
  ["When I was at school, we ___ wear a uniform.", ["had to", "must", "have to"], 0, "Past obligation: [had to]."],
  ["Drivers ___ stop at a red light.", ["must", "can", "might"], 0, "A law: [must]."],
  ["You ___ come and see us when you're in London!", ["must", "mustn't", "don't have to"], 0, "Invitation / strong recommendation: [must]."],
  ["If the train doesn't come, we'll ___ take a taxi.", ["have to", "must", "had to"], 0, "Future obligation depending on circumstances: [will have to]."],
  ["Children ___ play with matches.", ["mustn't", "don't have to", "must"], 0, "Something dangerous and forbidden: [mustn't]."],
  ["___ you leave so soon? Stay a bit longer.", ["Must", "Do you must", "Have you"], 0, "Questions with must: [Must you…?] (formal; Do you have to…? is also common)."],
  ["The doctor said I ___ rest for a week.", ["had to", "must to", "musted"], 0, "Reported obligation in the past: [had to] (must is also possible in reported speech, but not musted)."]
] });

/* ---------- have to / have got to ---------- */
P({ id: "have-to-gap", lesson: "have-to", type: "gap", belt: 2, instr: "Complete the sentences with the correct form of have to and the verb in brackets.", items: [
  ["My dad ___ (get up) at five every morning for work.", [["has to get up"]], "He / she / it: [has to]."],
  ["We ___ (wait) two hours at the airport yesterday.", [["had to wait"]], "Past: [had to]."],
  ["___ (you / work) on Saturdays?", [["Do you have to work"]], "Present question: [Do you have to…?]"],
  ["Lately I ___ (work) overtime almost every day.", [["have had to work", "'ve had to work"]], "Present perfect: [have had to]."],
  ["If you want to study medicine, you ___ (study) for six years.", [["will have to study", "'ll have to study", "have to study"]], "Future / general obligation: [will have to] or [have to]."],
  ["She ___ (not / wear) a uniform at her new school.", [["doesn't have to wear", "does not have to wear"]], "No necessity, present: [doesn't have to]."],
  ["I hate ___ (get up) early on Mondays.", [["having to get up"]], "After hate: -ing form: [having to]."],
  ["What time ___ (you / leave) the party last night?", [["did you have to leave"]], "Past question: [did you have to]."],
  ["We might ___ (cancel) the trip because of the weather.", [["have to cancel"]], "After a modal: [might have to]."],
  ["Sorry, I ___ (go) now – my bus is coming. (informal, present)", [["'ve got to go", "have got to go", "have to go", "'ve gotta go"]], "Informal present: [have got to] (have to is also correct)."],
  ["He ___ (not / pay) for the tickets: they were free.", [["didn't have to pay", "did not have to pay"]], "No necessity in the past: [didn't have to]."],
  ["Nobody likes ___ (queue) for hours.", [["having to queue"]], "After like: -ing form: [having to]."]
] });
P({ id: "have-to-mc", lesson: "have-to", type: "mc", belt: 2, items: [
  ["I ___ eat better. My doctor is right. (my own decision)", ["must", "had to", "musted"], 0, "Internal obligation, the speaker's own feeling: [must]."],
  ["I ___ finish this report by Friday: my boss wants it.", ["have to", "has to", "must to"], 0, "External obligation (the boss): [have to]."],
  ["She ___ take the bus because her car was at the mechanic's.", ["had to", "must", "has had"], 0, "Past obligation: [had to]."],
  ["___ your brother have to wear glasses?", ["Does", "Has", "Must"], 0, "Question with have to: [Does … have to?]"],
  ["We ___ to leave early tomorrow.", ["have got", "must", "should"], 0, "Have got to = have to (informal present)."],
  ["I'm tired of ___ to explain the same thing again and again.", ["having", "have", "must"], 0, "After a preposition: [having to]."],
  ["Everyone ___ pay taxes.", ["has to", "have to", "having to"], 0, "Everyone takes a singular verb: [has to]."],
  ["Will we ___ show our passports at the border?", ["have to", "must", "had to"], 0, "Future: [will have to]."],
  ["I ___ go to the bank yesterday, but it was closed.", ["had to", "must have", "have to"], 0, "Past obligation: [had to]."],
  ["Since the accident she ___ use a wheelchair.", ["has had to", "had got to", "must"], 0, "From the past until now: present perfect [has had to]."],
  ["Did you ___ wait long for the doctor?", ["have to", "had to", "must"], 0, "After did: base form [have to]."],
  ["In many countries, people ___ vote: it's the law.", ["have to", "has to", "must to"], 0, "External obligation (law), plural subject: [have to]."]
] });

/* ---------- mustn't / don't have to ---------- */
P({ id: "mustnt-mc", lesson: "mustnt-dont-have-to", type: "mc", belt: 2, items: [
  ["You ___ smoke here. It's a hospital.", ["mustn't", "don't have to", "needn't"], 0, "Forbidden: [mustn't]."],
  ["You ___ come if you don't want to.", ["don't have to", "mustn't", "can't"], 0, "Optional, not necessary: [don't have to]."],
  ["The museum is free, so you ___ pay.", ["don't have to", "mustn't", "shouldn't to"], 0, "Not necessary: [don't have to]."],
  ["You ___ tell anyone about the surprise party!", ["mustn't", "don't have to", "needn't"], 0, "It's important not to do it: [mustn't]."],
  ["Tomorrow is Sunday, so I ___ get up early.", ["don't have to", "mustn't", "haven't to"], 0, "No obligation: [don't have to]."],
  ["Children ___ play near the swimming pool without an adult.", ["mustn't", "don't have to", "don't need"], 0, "A safety rule: [mustn't]."],
  ["You ___ bring food: there's a restaurant on the train.", ["needn't", "mustn't", "can't to"], 0, "Not necessary: [needn't]."],
  ["She ___ work yesterday because it was a bank holiday.", ["didn't have to", "mustn't", "hadn't to"], 0, "No necessity in the past: [didn't have to]."],
  ["You ___ forget to take your passport!", ["mustn't", "don't have to", "needn't"], 0, "A strong warning: [mustn't forget]."],
  ["You ___ shout. I can hear you perfectly well.", ["don't have to", "mustn't", "couldn't"], 0, "It isn't necessary: [don't have to] (also needn't)."],
  ["When I was a child, I ___ watch TV after nine.", ["wasn't allowed to", "mustn't", "didn't have to"], 0, "Prohibition in the past: [wasn't allowed to]."],
  ["Employees ___ wear a tie, but most of them do.", ["don't have to", "mustn't", "can't"], 0, "Not required, they choose to: [don't have to]."]
] });
P({ id: "mustnt-gap", lesson: "mustnt-dont-have-to", type: "gap", belt: 3, instr: "Complete the sentences with mustn't, don't / doesn't have to or didn't have to.", items: [
  ["You ___ (use) your phone while you're driving. It's illegal.", [["mustn't use", "must not use"]], "Illegal = forbidden: [mustn't]."],
  ["My sister ___ (cook) tonight: we're eating out.", [["doesn't have to cook", "does not have to cook"]], "Not necessary: [doesn't have to]."],
  ["We ___ (make) any noise: the baby is asleep.", [["mustn't make", "must not make"]], "It's important not to: [mustn't]."],
  ["I ___ (study) last weekend because the exam was cancelled.", [["didn't have to study", "did not have to study"]], "Past, not necessary: [didn't have to]."],
  ["You ___ (wear) a suit to the party: it's very informal.", [["don't have to wear", "do not have to wear"]], "Not necessary: [don't have to]."],
  ["Passengers ___ (leave) their luggage unattended.", [["mustn't leave", "must not leave"]], "A rule that forbids: [mustn't]."],
  ["He ___ (pay) for the repair: it was still under guarantee.", [["didn't have to pay", "did not have to pay"]], "Past, not necessary: [didn't have to]."],
  ["You ___ (be) late for the interview, or you won't get the job.", [["mustn't be", "must not be"]], "A strong warning: [mustn't]."],
  ["Students ___ (bring) a dictionary: we provide them.", [["don't have to bring", "do not have to bring"]], "Not necessary: [don't have to]."],
  ["You ___ (touch) the paintings in the gallery.", [["mustn't touch", "must not touch"]], "Forbidden: [mustn't]."],
  ["We ___ (queue): we had already bought our tickets online.", [["didn't have to queue", "did not have to queue"]], "Past, not necessary: [didn't have to]."],
  ["She ___ (get up) early on Fridays: she starts work at eleven.", [["doesn't have to get up", "does not have to get up"]], "Not necessary: [doesn't have to]."]
] });
P({ id: "mustnt-text", lesson: "mustnt-dont-have-to", type: "text", belt: 3, title: "Rules for the school trip",
  instr: "Read the whole text first, then complete each gap with mustn't, don't have to or have to.",
  parts: [
    ["#", "Year 9 – trip to the Science Museum"],
    ["", "We will meet at the main entrance at 7:30. You {1} be late, because the coach will leave at 7:45 exactly. You {2} wear your school uniform: casual clothes are fine, but you {3} bring a waterproof jacket, because the forecast says it will rain."],
    ["", "You {4} bring a packed lunch: the museum has a café and lunch is included in the price. However, you {5} eat or drink in the exhibition rooms – only in the café."],
    ["", "Inside the museum you {6} stay with your group leader at all times. You {7} touch the exhibits unless there is a sign saying ‘Please touch’. Photos are allowed, so you {8} leave your phone at home, but you {9} use flash in the dark rooms."],
    ["", "Finally, you {10} pay anything on the day: parents have already paid online."]
  ],
  gaps: [
    [["mustn't", "must not"], "Being late is not allowed (the coach won't wait): [mustn't]."],
    [["don't have to", "do not have to"], "Uniform is not necessary: [don't have to]."],
    [["have to", "must"], "It is necessary to bring a jacket: [have to] / must."],
    [["don't have to", "do not have to"], "Lunch is included: not necessary."],
    [["mustn't", "must not"], "Eating in the rooms is forbidden: [mustn't]."],
    [["have to", "must"], "Staying with the group is obligatory: [have to] / must."],
    [["mustn't", "must not"], "Touching is forbidden: [mustn't]."],
    [["don't have to", "do not have to"], "Photos are allowed, so leaving the phone is not necessary."],
    [["mustn't", "must not"], "Flash is forbidden: [mustn't]."],
    [["don't have to", "do not have to"], "Payment has already been made: not necessary."]
  ] });

/* ---------- need / needn't ---------- */
P({ id: "need-gap", lesson: "need", type: "gap", belt: 3, instr: "Complete the sentences with need to, needs to, don't need to, needn't or didn't need to and the verb in brackets.", items: [
  ["I ___ (buy) some milk: there's none left.", [["need to buy"]], "Necessity: [need to] + base form."],
  ["She ___ (rest): she's been working all day.", [["needs to rest"]], "She: [needs to]."],
  ["You ___ (shout): I'm not deaf! (modal form)", [["needn't shout", "need not shout"]], "Modal needn't + base form, no to."],
  ["We ___ (book) a table: the restaurant is never full. (ordinary verb)", [["don't need to book", "do not need to book"]], "Ordinary verb, negative: [don't need to]."],
  ["I ___ (take) a taxi: a friend gave me a lift. (ordinary verb, past)", [["didn't need to take", "did not need to take"]], "Past, not necessary: [didn't need to]."],
  ["___ (you / need / leave) so early?", [["Do you need to leave"]], "Question with the ordinary verb: [Do you need to…?]"],
  ["He ___ (worry) about the exam: he's very well prepared. (modal form)", [["needn't worry", "need not worry"]], "Modal form: [needn't worry]."],
  ["The kids ___ (go) to bed early tonight: they have a test tomorrow.", [["need to go"]], "Necessity: [need to]."],
  ["My brother ___ (not / study) much for that exam: it was easy.", [["didn't need to study", "did not need to study"]], "Past, not necessary: [didn't need to]."],
  ["Everyone ___ (bring) a photo for the passport form.", [["needs to bring"]], "Everyone: singular, [needs to]."],
  ["You ___ (come) with me: I can manage on my own. (modal form)", [["needn't come", "need not come"]], "Modal needn't + base form."],
  ["Does she ___ (sign) the contract today?", [["need to sign"]], "After does: base form [need to sign]."]
] });
P({ id: "need-transform", lesson: "need", type: "transform", belt: 4, items: [
  ["It isn't necessary for you to call me back.", "NEEDN'T", "You", "me back.", ["needn't call", "need not call"], "No necessity: [needn't] + base form."],
  ["The windows are dirty. Someone should clean them.", "CLEANING", "The windows", ".", ["need cleaning"], "Need + -ing has a passive meaning: [need cleaning]."],
  ["It wasn't necessary for us to buy tickets, so we didn't.", "NEED", "We", "tickets.", ["didn't need to buy", "did not need to buy"], "Not necessary, not done: [didn't need to]."],
  ["Is it necessary for me to bring anything?", "NEED", "Do", "bring anything?", ["I need to"], "Question with the ordinary verb: [Do I need to…?]"],
  ["It's necessary for him to see a doctor.", "NEEDS", "He", "a doctor.", ["needs to see"], "Necessity: [needs to] + base form."],
  ["You don't have to wear a tie.", "NEED", "You", "a tie.", ["don't need to wear", "do not need to wear", "needn't wear", "need not wear"], "Don't have to = [don't need to] / [needn't]."],
  ["Your hair is too long. You should have it cut.", "CUTTING", "Your hair", ".", ["needs cutting"], "Need + -ing: [needs cutting]."],
  ["There's no need to hurry.", "NEEDN'T", "We", ".", ["needn't hurry", "need not hurry"], "No need = [needn't]."],
  ["The car must be washed.", "WASHING", "The car", ".", ["needs washing"], "Passive meaning: [needs washing]."],
  ["It's not necessary for her to come to the meeting.", "DOESN'T", "She", "to the meeting.", ["doesn't need to come", "does not need to come", "doesn't have to come", "does not have to come"], "No necessity: [doesn't need to] / doesn't have to."]
] });
