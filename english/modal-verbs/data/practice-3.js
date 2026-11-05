/* Modal Verbs — practice batteries (3): more contrasts and transformations. */

P({ id: "must-transform", lesson: "must", type: "transform", belt: 2, items: [
  ["It's necessary for all visitors to sign in at reception.", "MUST", "All visitors", "at reception.", ["must sign in"], "A written rule: [must] + base form."],
  ["It was necessary for me to work late yesterday.", "HAD", "I", "late yesterday.", ["had to work"], "Past obligation: [had to] (must has no past)."],
  ["You really need to try the pasta here – it's amazing!", "MUST", "You", "the pasta here – it's amazing!", ["must try"], "Strong recommendation: [must]."],
  ["Smoking is not allowed in the building.", "MUSTN'T", "You", "in the building.", ["mustn't smoke", "must not smoke"], "Prohibition: [mustn't]."],
  ["It will be necessary for us to change trains in Bologna.", "HAVE", "We will", "trains in Bologna.", ["have to change"], "Future obligation: [will have to]."],
  ["I feel that I need to call my grandmother more often.", "MUST", "I", "my grandmother more often.", ["must call"], "Personal obligation: [must]."],
  ["Is it necessary for me to bring my passport?", "HAVE", "Do", "bring my passport?", ["I have to"], "Question: [Do I have to…?]"],
  ["It was not necessary for us to wait.", "HAVE", "We", "wait.", ["didn't have to", "did not have to"], "No necessity in the past: [didn't have to]."],
  ["Wearing a seat belt is compulsory.", "MUST", "You", "a seat belt.", ["must wear"], "A rule: [must wear]."],
  ["Since January it has been necessary for her to take the train to work.", "HAD", "Since January she", "the train to work.", ["has had to take"], "Present perfect of have to: [has had to]."]
] });

P({ id: "have-to-errors", lesson: "have-to", type: "correct", belt: 2, items: [
  ["My brother have to wear glasses.", ["My brother has to wear glasses."], "He / she / it: [has to]."],
  ["I haven't to go to school tomorrow.", ["I don't have to go to school tomorrow.", "I haven't got to go to school tomorrow."], "Negative: [don't have to] (or haven't got to)."],
  ["Did you had to pay for the tickets?", ["Did you have to pay for the tickets?"], "After did: base form [have to]."],
  ["Yesterday I must leave work early.", ["Yesterday I had to leave work early."], "Past obligation: [had to]."],
  ["We will must wait for the next bus.", ["We will have to wait for the next bus.", "We'll have to wait for the next bus."], "Future: [will have to]."],
  ["She doesn't has to cook tonight.", ["She doesn't have to cook tonight.", "She does not have to cook tonight."], "After doesn't: base form [have to]."],
  ["I hate have to get up early.", ["I hate having to get up early."], "After hate use the -ing form: [having to]."],
  ["Do you must work on Sundays?", ["Do you have to work on Sundays?", "Must you work on Sundays?"], "Must doesn't use do: [Do you have to…?]"],
  ["They had got to leave early last night.", ["They had to leave early last night."], "Have got to is present only: past = [had to]."],
  ["Everybody have to show their ticket.", ["Everybody has to show their ticket."], "Everybody takes a singular verb: [has to]."]
] });

P({ id: "should-errors", lesson: "should", type: "correct", belt: 3, items: [
  ["You should to eat more fruit.", ["You should eat more fruit."], "No to after should."],
  ["You ought see a doctor.", ["You ought to see a doctor."], "Ought is followed by [to]."],
  ["You had better to hurry.", ["You had better hurry.", "You'd better hurry."], "Had better + base form, no to."],
  ["You'd not better be late.", ["You'd better not be late.", "You had better not be late."], "Negative: [had better not]."],
  ["She shoulds study more.", ["She should study more."], "No -s with modal verbs."],
  ["Do I should call him?", ["Should I call him?"], "Questions: [Should I…?] without do."],
  ["You should went to bed earlier last night.", ["You should have gone to bed earlier last night."], "Past regret / advice: [should have gone]."],
  ["We better leave now.", ["We'd better leave now.", "We had better leave now."], "Had better: don't drop [had / 'd] in writing."],
  ["You don't should drink so much coffee.", ["You shouldn't drink so much coffee.", "You should not drink so much coffee."], "Negative: [shouldn't], no do."],
  ["You must to see that film: it's a masterpiece.", ["You must see that film: it's a masterpiece."], "No to after must."]
] });

P({ id: "will-would-transform", lesson: "will-would", type: "transform", belt: 4, items: [
  ["Please close the door.", "WOULD", "", "closing the door?", ["Would you mind"], "Polite request: [Would you mind + -ing?]"],
  ["I don't have a car, so I can't drive you.", "WOULD", "If I had a car, I", "you.", ["would drive", "'d drive"], "Imaginary present: [would] + base form."],
  ["The window refuses to open.", "WON'T", "The window", ".", ["won't open", "will not open"], "Refusal of a thing: [won't open]."],
  ["As a child, I often went fishing with my dad.", "WOULD", "As a child, I", "fishing with my dad.", ["would often go", "would go", "'d often go"], "Repeated past action: [would] + base form."],
  ["Do you want a sandwich?", "LIKE", "Would", "a sandwich?", ["you like"], "Polite offer: [Would you like…?]"],
  ["‘I'll help you,’ she said.", "WOULD", "She said", "me.", ["she would help", "she'd help"], "Reported speech: will → [would]."],
  ["My advice is not to sign the contract.", "WOULDN'T", "I", "the contract if I were you.", ["wouldn't sign", "would not sign"], "Advice: [I wouldn't … if I were you]."],
  ["He refused to apologise.", "WOULDN'T", "He", ".", ["wouldn't apologise", "would not apologise", "wouldn't apologize"], "Refusal in the past: [wouldn't]."],
  ["I prefer to stay at home tonight.", "RATHER", "I'd", "at home tonight.", ["rather stay"], "Preference: [would rather] + base form."],
  ["I promise to call you tonight.", "WILL", "I", "you tonight, I promise.", ["will call", "'ll call"], "A promise: [will]."]
] });

P({ id: "may-contrast", lesson: "may-might", type: "mc", belt: 3, items: [
  ["Some snakes ___ be very dangerous.", ["can", "could have", "may to"], 0, "General possibility (true of some snakes): [can]."],
  ["Don't touch that snake: it ___ be poisonous.", ["might", "can", "must to"], 0, "A specific possibility now: [might] (or may / could)."],
  ["___ I speak to the manager, please?", ["May", "Might", "Must"], 0, "Formal request for permission: [May I…?]"],
  ["I ___ go to the concert, but I haven't bought a ticket yet.", ["might", "can", "must"], 0, "An uncertain plan: [might]."],
  ["You ___ smoke on the balcony, but not inside. (permission)", ["can", "might", "must"], 0, "Giving permission: [can] (or may)."],
  ["He ___ not like the present. He's very difficult to please.", ["may", "can", "must"], 0, "Perhaps not: [may not]."],
  ["It ___ be very windy on the coast in winter.", ["can", "might have", "must"], 0, "Something that sometimes happens: [can]."],
  ["We ___ have to cancel the picnic if it rains.", ["may", "can", "must"], 0, "Possibility + have to: [may have to]."],
  ["Excuse me, ___ you help me? I'm lost.", ["could", "might", "should"], 0, "Polite request: [could you…?]"],
  ["They ___ be on holiday – their shutters have been closed for days.", ["could", "can", "must to"], 0, "A possible explanation now: [could] (or may / might)."],
  ["When I was younger I ___ stay up all night without feeling tired.", ["could", "might", "may"], 0, "General past ability: [could]."],
  ["Children under twelve ___ not enter without an adult. (formal notice)", ["may", "might", "need"], 0, "Formal prohibition in a notice: [may not]."]
] });

P({ id: "deduction-text", lesson: "deduction", type: "text", belt: 4, title: "Who lives next door?",
  instr: "Read the whole text first, then complete each gap with must, can't, might or could and the verb in brackets.",
  parts: [
    ["", "A new neighbour moved into the flat next door last week, and my family has been trying to work out who she is. There are three bicycles in the hall, so she {1} (live) alone – unless she collects bikes."],
    ["", "Every morning at six we hear the sound of a cello. She {2} (be) a musician, or she {3} (be) a student at the conservatoire. My dad thinks she {4} (be) a professional, because she plays beautifully."],
    ["", "Her post is addressed to ‘Dr L. Moretti’, so she {5} (be) a doctor – although she {6} (have) a PhD in something else. She goes out at ten every evening and comes back at seven in the morning, so she {7} (work) night shifts."],
    ["", "Right now I can hear voices and laughter. She {8} (have) a party. Or she {9} (talk) to friends online. I {10} (knock) on her door tomorrow and introduce myself – that's probably the easiest way to find out!"]
  ],
  gaps: [
    [["can't live", "cannot live", "couldn't live"], "Three bikes: I'm sure she doesn't live alone: [can't live]."],
    [["might be", "could be", "may be"], "A possibility: [might be]."],
    [["might be", "could be", "may be"], "Another possibility: [might / could be]."],
    [["must be"], "Strong evidence (she plays beautifully): [must be]."],
    [["might be", "could be", "may be"], "A possibility, not a certainty (see the next sentence): [might be]."],
    [["might have", "could have", "may have"], "Another possibility: [might have]."],
    [["must work"], "Strong evidence (out all night, every night): [must work]."],
    [["must be having", "might be having", "could be having"], "Action in progress, strong evidence: [must be having]."],
    [["might be talking", "could be talking", "may be talking"], "An alternative possibility, in progress: [might be talking]."],
    [["might knock", "could knock", "will knock", "may knock"], "A possible plan: [might / could knock]."]
  ] });

P({ id: "past-contrast", lesson: "past-modals", type: "mc", belt: 5, items: [
  ["You ___ taken the bus: it's much quicker than walking. Why didn't you?", ["should have", "must have", "can't have"], 0, "The better choice, not taken: [should have]."],
  ["You ___ taken the bus, or you could have walked. Both were fine.", ["could have", "should have", "must have"], 0, "One of several possibilities: [could have]."],
  ["She ___ missed the train: she's never late.", ["must have", "should have", "needn't have"], 0, "A confident conclusion: [must have]."],
  ["She ___ missed the train, or perhaps she overslept. I really don't know.", ["might have", "must have", "should have"], 0, "One possible explanation: [might have]."],
  ["I ___ studied all weekend: the exam was postponed.", ["needn't have", "mustn't have", "couldn't have"], 0, "Done, but unnecessary: [needn't have]."],
  ["I ___ study at the weekend, so I went to the beach.", ["didn't need to", "needn't have", "mustn't"], 0, "Not necessary, not done: [didn't need to]."],
  ["He ___ seen the email: he replied to it an hour ago.", ["must have", "can't have", "might not have"], 0, "Evidence that it happened: [must have]."],
  ["He ___ seen the email: his phone was off all day.", ["can't have", "must have", "should have"], 0, "Impossible: [can't have]."],
  ["We ___ booked earlier – now all the cheap seats have gone.", ["should have", "could have", "must have"], 0, "Regret: [should have]."],
  ["Don't worry about the vase. Anyone ___ knocked it over: it was right on the edge.", ["could have", "should have", "needn't have"], 0, "It was possible for anyone: [could have]."],
  ["Why didn't you tell me? I ___ helped you.", ["would have", "must have", "should"], 0, "Hypothetical past: [would have helped]."],
  ["They ___ been waiting long: the coffee on the table is still hot.", ["can't have", "mustn't have", "shouldn't have"], 0, "Negative deduction: [can't have been waiting]."]
] });

P({ id: "review-match", lesson: "review", type: "halves", belt: 3, instr: "Match each situation with the most suitable response.",
  left: ["The museum is free on Sundays.", "This is a hospital.", "I've got a terrible headache.", "The lights are off and nobody answers.", "It's cold in here.", "I failed my driving test.", "She speaks Japanese perfectly.", "We've got plenty of time.", "That can't be the right answer.", "I'm not sure where my keys are."],
  right: ["Shall I close the window?", "So you don't have to pay.", "They must be out.", "You should have practised more.", "Let's check it again.", "So you mustn't smoke.", "We don't need to hurry.", "You should take an aspirin.", "They might be in the car.", "She must have lived in Japan."],
  answers: ["b", "f", "h", "c", "a", "d", "j", "g", "e", "i"],
  why: ["Free = not necessary to pay: [don't have to].", "A hospital rule: [mustn't].", "Advice: [should].", "Strong deduction: [must be].", "An offer: [Shall I…?]", "Past regret / criticism: [should have practised].", "Deduction about the past: [must have lived].", "No necessity: [don't need to].", "When an answer seems impossible, check it again.", "Possibility: [might be]."] });
