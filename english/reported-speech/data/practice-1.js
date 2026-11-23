/* Reported Speech — practice batteries.
   Formats: see english/basics/data/practice-1.js.
   V(...) adds the version with or without "that" after said / told + pronoun, so both are accepted. */
const P = x => GL.batteries.push(x);
const V = (...xs) => {
  const out = new Set();
  xs.forEach(s => {
    out.add(s);
    out.add(s.replace(/\b(said|told (?:me|him|her|us|them)) that /, "$1 "));
    out.add(s.replace(/\b(said|told (?:me|him|her|us|them)) (?=(?:I|you|he|she|it|we|they|the|his|her|my|their|our|[A-Z][a-z]+)\b)/, "$1 that "));
  });
  return [...out];
};

/* ---------- say and tell; pronouns and time words ---------- */
P({ id: "st-gap", lesson: "say-tell", type: "gap", belt: 3, instr: "Complete the sentences with said or told.", items: [
  ["She ___ me that she was tired.", [["told"]], "Tell + person: [told me]."],
  ["He ___ that he was hungry.", [["said"]], "No person: [said]."],
  ["They ___ us the truth.", [["told"]], "Tell + person: [told us]."],
  ["Anna ___ to me that she was sorry.", [["said"]], "Say [to] + person."],
  ["My teacher ___ we had a test on Monday.", [["said"]], "No person: [said]."],
  ["Who ___ you that?", [["told"]], "Tell + person: [told you]."],
  ["He ___ goodbye and left.", [["said"]], "Fixed expression: [say] goodbye."],
  ["Grandma ___ us a story about the war.", [["told"]], "Fixed expression: [tell] a story."],
  ["She ___ hello to everyone.", [["said"]], "Fixed expression: [say] hello."],
  ["Paolo ___ me he had a new job.", [["told"]], "Tell + person."]
] });
P({ id: "st-time", lesson: "say-tell", type: "mc", belt: 3, instr: "The conversation took place last month. Choose the correct word or phrase in reported speech.", items: [
  ["‘I'll call you tomorrow.’ → She said she would call me ___.", ["the next day", "tomorrow", "the day before"], 0, "tomorrow → [the next day]."],
  ["‘I saw him yesterday.’ → He said he had seen him ___.", ["the day before", "yesterday", "the next day"], 0, "yesterday → [the day before]."],
  ["‘I'm busy today.’ → She said she was busy ___.", ["that day", "today", "this day"], 0, "today → [that day]."],
  ["‘We'll leave next week.’ → They said they would leave ___.", ["the following week", "next week", "the week before"], 0, "next week → [the following week]."],
  ["‘I bought this bag here.’ → She said she had bought ___ bag there.", ["that", "this", "these"], 0, "this → [that]."],
  ["‘I moved here two years ago.’ → He said he had moved there two years ___.", ["before", "ago", "later"], 0, "ago → [before]."],
  ["‘I'm leaving now.’ → She said she was leaving ___.", ["then", "now", "later"], 0, "now → [then]."],
  ["‘Come here!’ → He told me to go ___.", ["there", "here", "then"], 0, "here → [there]."],
  ["‘I had a party last week.’ → She said she had had a party ___.", ["the week before", "last week", "the following week"], 0, "last week → [the week before]."],
  ["‘We're meeting tonight.’ → They said they were meeting ___.", ["that night", "tonight", "the night before"], 0, "tonight → [that night]."]
] });
P({ id: "st-errors", lesson: "say-tell", type: "correct", belt: 3, items: [
  ["She said me that she was tired.", V("She told me that she was tired.", "She said to me that she was tired.", "She said that she was tired."), "Tell + person, or say to + person."],
  ["He told that he was hungry.", V("He said that he was hungry.", "He told me that he was hungry."), "Without a person: [said]."],
  ["She told to me the news.", ["She told me the news."], "Tell + person, without to."],
  ["The coach said us to arrive early.", ["The coach told us to arrive early."], "An order with a person: [told us to]."],
  ["He said us a story.", ["He told us a story."], "Fixed expression: [tell] a story."],
  ["They said to the police all they knew.", ["They told the police all they knew.", "They told the police everything they knew."], "Tell + person + the information."],
  ["Can you say me the time?", ["Can you tell me the time?"], "[tell] someone the time."],
  ["She told hello to me.", ["She said hello to me."], "Fixed expression: [say] hello."]
] });
P({ id: "st-check", lesson: "say-tell", type: "mc", belt: 3, title: "Say and tell – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["He ___ me he was leaving.", ["told", "said", "said to"], 0, "Tell + person."],
  ["She ___ she was hungry.", ["said", "told", "told to"], 0, "No person: [said]."],
  ["Don't ___ lies!", ["tell", "say", "speak"], 0, "Fixed expression: [tell] lies."],
  ["‘I'm busy now.’ → She said she was busy ___.", ["then", "now", "there"], 0, "now → [then]."],
  ["‘I live here.’ → He said he lived ___.", ["there", "here", "then"], 0, "here → [there]."],
  ["‘I love my job.’ → Anna said ___ loved ___ job.", ["she … her", "I … my", "she … my"], 0, "I → she, my → her."],
  ["Can you ___ me where the station is?", ["tell", "say", "say to"], 0, "Tell + person."],
  ["He said ___ that he was sorry.", ["to me", "me", "to"], 0, "Say [to] + person."],
  ["‘I'll come tomorrow.’ (reported a week later) → She said she would come ___.", ["the next day", "tomorrow", "yesterday"], 0, "tomorrow → [the next day]."],
  ["She ___ us to be quiet.", ["told", "said", "said to"], 0, "Tell + person + to (an order)."]
] });

/* ---------- tense changes ---------- */
P({ id: "ts-gap", lesson: "tenses", type: "gap", belt: 3, instr: "Complete the reported sentences. Change the tense of the verb.", items: [
  ["‘I'm tired.’ → She said she ___ tired.", [["was"]], "am → [was]."],
  ["‘I like pizza.’ → He said he ___ pizza.", [["liked"]], "present simple → [past simple]."],
  ["‘We're watching a film.’ → They said they ___ a film.", [["were watching"]], "present continuous → [past continuous]."],
  ["‘I lost my keys.’ → She said she ___ her keys.", [["had lost", "'d lost"]], "past simple → [past perfect]."],
  ["‘I've finished my homework.’ → He said he ___ his homework.", [["had finished", "'d finished"]], "present perfect → [past perfect]."],
  ["‘I'll help you.’ → She said she ___ me.", [["would help", "'d help"]], "will → [would]."],
  ["‘I can swim.’ → He said he ___ swim.", [["could"]], "can → [could]."],
  ["‘I must go.’ → She said she ___ go.", [["had to", "must"]], "must → [had to] (or must)."],
  ["‘I don't know.’ → He said he ___ know.", [["didn't", "did not"]], "don't → [didn't]."],
  ["‘I haven't seen him.’ → She said she ___ him.", [["hadn't seen", "had not seen"]], "present perfect → [past perfect]."],
  ["‘We may be late.’ → They said they ___ be late.", [["might"]], "may → [might]."],
  ["‘I won't tell anyone.’ → He said he ___ anyone.", [["wouldn't tell", "would not tell"]], "won't → [wouldn't]."]
] });
P({ id: "ts-rewrite", lesson: "tenses", type: "rewrite", belt: 3, instr: "Rewrite the sentences in reported speech. Change tenses and pronouns. Start as shown.", items: [
  ["‘I live in Milan,’ said Sara.", V("Sara said that she lived in Milan.", "Sara said that she lives in Milan."), "Backshift (or no change if it's still true).", "Sara said"],
  ["‘I'm working,’ Tom told me.", V("Tom told me that he was working."), "present continuous → past continuous.", "Tom told me"],
  ["‘We went to Rome,’ they said.", V("They said that they had been to Rome.", "They said that they had gone to Rome.", "They said that they went to Rome."), "past simple → past perfect.", "They said"],
  ["‘I'll call you,’ Anna told me.", V("Anna told me that she would call me."), "will → would; you → me.", "Anna told me"],
  ["‘I can't come,’ said Luca.", V("Luca said that he couldn't come.", "Luca said that he could not come."), "can't → couldn't.", "Luca said"],
  ["‘I've never been to London,’ she said.", V("She said that she had never been to London."), "present perfect → past perfect.", "She said"],
  ["‘My brother is ill,’ Marta told us.", V("Marta told us that her brother was ill."), "my → her; is → was.", "Marta told us"],
  ["‘We must leave early,’ they said.", V("They said that they had to leave early.", "They said that they must leave early."), "must → had to.", "They said"]
] });
P({ id: "ts-errors", lesson: "tenses", type: "correct", belt: 3, items: [
  ["She said she is tired yesterday.", V("She said she was tired yesterday."), "Past reporting verb: [was]."],
  ["He said he will come.", V("He said he would come."), "will → [would]."],
  ["They said they have finished.", V("They said they had finished."), "present perfect → [past perfect]."],
  ["She said she can't come.", V("She said she couldn't come.", "She said she could not come."), "can → [could]."],
  ["He told he had lost his phone.", V("He said he had lost his phone.", "He told me he had lost his phone."), "Tell needs a person."],
  ["She said me she was leaving.", V("She told me she was leaving.", "She said she was leaving."), "Tell + person."],
  ["Tom said he doesn't like fish. (he has changed his mind)", V("Tom said he didn't like fish."), "Not true now: [backshift]."],
  ["She said she would went to the party.", V("She said she would go to the party."), "would + base form."]
] });
P({ id: "ts-check", lesson: "tenses", type: "mc", belt: 3, title: "Tense changes – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["‘I'm hungry.’ → He said he ___ hungry.", ["was", "is", "had been"], 0, "am → was."],
  ["‘I've lost my wallet.’ → She said she ___ her wallet.", ["had lost", "has lost", "lost"], 0, "present perfect → past perfect."],
  ["‘I'll be there.’ → He said he ___ there.", ["would be", "will be", "was"], 0, "will → would."],
  ["‘I can't swim.’ → She said she ___ swim.", ["couldn't", "can't", "didn't"], 0, "can't → couldn't."],
  ["‘We're leaving.’ → They said they ___.", ["were leaving", "are leaving", "left"], 0, "present continuous → past continuous."],
  ["‘I saw the film.’ → He said he ___ the film.", ["had seen", "has seen", "saw it"], 0, "past simple → past perfect."],
  ["Maria says she ___ coming tonight.", ["is", "was", "had been"], 0, "Present reporting verb: no change."],
  ["The teacher said that water ___ at 100°C.", ["boils", "had boiled", "would boil"], 0, "Always true: no change needed."],
  ["‘I must study.’ → She said she ___ study.", ["had to", "has to", "must to"], 0, "must → had to (or must)."],
  ["‘I don't like it.’ → He said he ___ it.", ["didn't like", "doesn't like", "hadn't liked"], 0, "present simple → past simple."]
] });

/* ---------- reported questions ---------- */
P({ id: "rq-rewrite", lesson: "questions", type: "rewrite", belt: 4, instr: "Report the questions. Start as shown.", items: [
  ["‘Where do you live?’ she asked me.", ["She asked me where I lived.", "She asked me where I live."], "Statement order, no do.", "She asked me"],
  ["‘Are you ready?’ he asked.", ["He asked if I was ready.", "He asked whether I was ready.", "He asked me if I was ready.", "He asked me whether I was ready."], "Yes / no question: if / whether.", "He asked"],
  ["‘What are you doing?’ Mum asked me.", ["Mum asked me what I was doing."], "Statement order: I was doing.", "Mum asked me"],
  ["‘Have you seen my keys?’ Dad asked me.", ["Dad asked me if I had seen his keys.", "Dad asked me whether I had seen his keys."], "if + past perfect; my → his.", "Dad asked me"],
  ["‘Why did you leave?’ she asked him.", ["She asked him why he had left.", "She asked him why he left."], "No did: why he had left.", "She asked him"],
  ["‘Can you swim?’ the instructor asked me.", ["The instructor asked me if I could swim.", "The instructor asked me whether I could swim."], "can → could.", "The instructor asked me"],
  ["‘How old is your sister?’ he asked me.", ["He asked me how old my sister was."], "Statement order: my sister was.", "He asked me"],
  ["‘Will you come to the party?’ they asked us.", ["They asked us if we would come to the party.", "They asked us whether we would come to the party."], "will → would.", "They asked us"]
] });
P({ id: "rq-order", lesson: "questions", type: "order", belt: 4, instr: "Put the words in the correct order to make reported or indirect questions.", items: [
  ["asked / me / where / I / lived / she", ["She asked me where I lived."], "Statement order after the question word."],
  ["if / he / asked / was / I / ready", ["He asked if I was ready."], "if + subject + verb."],
  ["tell / me / can / the station / where / is / you", ["Can you tell me where the station is?"], "Indirect question: the station is."],
  ["know / do / you / if / open / is / the shop", ["Do you know if the shop is open?"], "if + subject + verb."],
  ["wanted / she / to know / I / what / had bought", ["She wanted to know what I had bought."], "No did: what I had bought."],
  ["asked / us / whether / we / they / were coming", ["They asked us whether we were coming."], "whether + subject + verb."],
  ["wonder / I / she / why / is / angry", ["I wonder why she is angry."], "Statement order: she is."],
  ["asked / how much / he / the ticket / cost", ["He asked how much the ticket cost."], "No did: the ticket cost."]
] });
P({ id: "rq-errors", lesson: "questions", type: "correct", belt: 4, items: [
  ["He asked me where did I live.", ["He asked me where I lived."], "Statement order, no did."],
  ["She asked me what was my name.", ["She asked me what my name was."], "Subject + verb."],
  ["He asked me do I like football.", ["He asked me if I liked football.", "He asked me whether I liked football."], "if + statement order."],
  ["She asked if I was ready?", ["She asked if I was ready."], "No question mark."],
  ["Can you tell me where is the station?", ["Can you tell me where the station is?"], "Statement order."],
  ["They asked us what time does the film start.", ["They asked us what time the film started."], "No does; backshift."],
  ["I don't know what does this word mean.", ["I don't know what this word means."], "Statement order, no does."],
  ["She asked me that I was hungry.", ["She asked me if I was hungry.", "She asked me whether I was hungry."], "Yes / no question: [if / whether], not that."]
] });
P({ id: "rq-check", lesson: "questions", type: "mc", belt: 4, title: "Reported questions – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["She asked me where ___.", ["I worked", "did I work", "do I work"], 0, "Statement order, backshift."],
  ["He asked ___ I was free on Saturday.", ["if", "that", "do"], 0, "Yes / no question: [if]."],
  ["Can you tell me what time ___?", ["it is", "is it", "it is?"], 0, "Indirect question: statement order."],
  ["They asked me how long I ___ there.", ["had lived", "have I lived", "did live"], 0, "present perfect → past perfect, statement order."],
  ["She wanted to know ___ I had a car.", ["whether", "that", "what"], 0, "Yes / no: [whether]."],
  ["Do you know where ___?", ["the toilets are", "are the toilets", "the toilets are?"], 0, "Statement order."],
  ["He asked me why I ___ so late.", ["was", "am I", "was I"], 0, "Statement order, backshift."],
  ["I wonder if she ___ the email.", ["has read", "did read", "has she read"], 0, "Statement order."],
  ["The officer asked us where we ___ from.", ["were", "are we", "were we"], 0, "Statement order."],
  ["She asked if I ___ help her.", ["could", "can I", "could I"], 0, "can → could, statement order."]
] });

/* ---------- orders, requests and reporting verbs ---------- */
P({ id: "ov-rewrite", lesson: "orders-verbs", type: "rewrite", belt: 4, instr: "Report the orders and requests with told or asked + to. Start as shown.", items: [
  ["‘Sit down!’ the teacher told us.", ["The teacher told us to sit down."], "Order: tell + person + to.", "The teacher told us"],
  ["‘Please close the window,’ she asked me.", ["She asked me to close the window."], "Request: ask + person + to.", "She asked me"],
  ["‘Don't be late!’ Mum told me.", ["Mum told me not to be late."], "Negative: not to.", "Mum told me"],
  ["‘Could you help me?’ he asked her.", ["He asked her to help him."], "Request: ask + person + to; me → him.", "He asked her"],
  ["‘Don't touch it!’ the guide told the children.", ["The guide told the children not to touch it."], "Negative order: not to.", "The guide told the children"],
  ["‘Turn off your phones,’ the coach told the players.", ["The coach told the players to turn off their phones."], "your → their.", "The coach told the players"],
  ["‘Please don't tell anyone,’ she asked me.", ["She asked me not to tell anyone."], "Negative request: not to.", "She asked me"],
  ["‘Wait for me!’ Paolo told us.", ["Paolo told us to wait for him."], "me → him.", "Paolo told us"]
] });
P({ id: "ov-mc", lesson: "orders-verbs", type: "mc", belt: 4, instr: "Choose the reporting verb that best summarises what each person said.", items: [
  ["‘I'll carry your bag for you.’ → She ___ to carry my bag.", ["offered", "suggested", "warned"], 0, "An offer: [offered to]."],
  ["‘I'll definitely call you tonight.’ → He ___ to call me.", ["promised", "refused", "admitted"], 0, "A promise: [promised to]."],
  ["‘No, I won't lend you my car.’ → She ___ to lend me her car.", ["refused", "agreed", "offered"], 0, "A refusal: [refused to]."],
  ["‘Let's go to the beach.’ → He ___ going to the beach.", ["suggested", "promised", "refused"], 0, "A suggestion: [suggested] + -ing."],
  ["‘I'm sorry I'm late.’ → She ___ for being late.", ["apologised", "admitted", "denied"], 0, "[apologised for] + -ing."],
  ["‘You should see a doctor.’ → She ___ me to see a doctor.", ["advised", "suggested", "promised"], 0, "Advice: [advised] + person + to."],
  ["‘Don't forget to buy milk.’ → He ___ me to buy milk.", ["reminded", "remembered", "suggested"], 0, "[reminded] + person + to."],
  ["‘Yes, I took the money.’ → He ___ taking the money.", ["admitted", "denied", "refused"], 0, "Saying yes, it's true: [admitted] + -ing."],
  ["‘I didn't break the window!’ → She ___ breaking the window.", ["denied", "admitted", "refused"], 0, "Saying it isn't true: [denied] + -ing."],
  ["‘Don't swim here – it's dangerous.’ → The lifeguard ___ us not to swim there.", ["warned", "suggested", "apologised"], 0, "A warning: [warned] + person + not to."]
] });
P({ id: "ov-gap", lesson: "orders-verbs", type: "gap", belt: 4, instr: "Complete the reported sentences with the correct form of the verb in brackets: to + infinitive or -ing.", items: [
  ["He promised ___ (call) me.", [["to call"]], "promise + [to]."],
  ["She suggested ___ (meet) at six.", [["meeting"]], "suggest + [-ing]."],
  ["They refused ___ (pay) the bill.", [["to pay"]], "refuse + [to]."],
  ["He apologised for ___ (be) rude.", [["being"]], "apologise for + [-ing]."],
  ["She advised me ___ (rest).", [["to rest"]], "advise + person + [to]."],
  ["He denied ___ (steal) the bike.", [["stealing", "having stolen"]], "deny + [-ing]."],
  ["My friend offered ___ (help) me move.", [["to help"]], "offer + [to]."],
  ["The teacher reminded us ___ (bring) our books.", [["to bring"]], "remind + person + [to]."],
  ["She admitted ___ (eat) the last biscuit.", [["eating", "having eaten"]], "admit + [-ing]."],
  ["They agreed ___ (lend) us their car.", [["to lend"]], "agree + [to]."]
] });
P({ id: "ov-errors", lesson: "orders-verbs", type: "correct", belt: 4, items: [
  ["She told me that I sit down.", ["She told me to sit down."], "Orders: tell + person + [to]."],
  ["He said me to wait.", ["He told me to wait.", "He asked me to wait."], "[told me to]."],
  ["She told me don't be late.", ["She told me not to be late."], "[not to]."],
  ["He suggested to go by train.", ["He suggested going by train.", "He suggested that we go by train.", "He suggested that we went by train.", "He suggested that we should go by train."], "suggest + [-ing]."],
  ["She apologised to be late.", ["She apologised for being late."], "apologise [for] + -ing."],
  ["He promised me calling.", ["He promised to call me.", "He promised me that he would call."], "promise + [to]."],
  ["The doctor advised to me to rest.", ["The doctor advised me to rest."], "advise + person, without to."],
  ["He denied to take the money.", ["He denied taking the money.", "He denied having taken the money."], "deny + [-ing]."]
] });
P({ id: "ov-check", lesson: "orders-verbs", type: "mc", belt: 4, title: "Orders and reporting verbs – Check yourself", instr: "Choose the correct option. Then read the explanations of the answers you got wrong.", items: [
  ["The police officer told us ___.", ["to stop", "stop", "that we stop"], 0, "tell + person + [to]."],
  ["She asked me ___ the door.", ["not to open", "don't open", "to not opening"], 0, "Negative request: [not to]."],
  ["He offered ___ me a lift.", ["to give", "giving", "me to give"], 0, "offer + [to]."],
  ["They suggested ___ a taxi.", ["taking", "to take", "take"], 0, "suggest + [-ing]."],
  ["She apologised ___ late.", ["for being", "to be", "for be"], 0, "apologise for + [-ing]."],
  ["He warned me ___ the dog.", ["not to touch", "don't touch", "to not touching"], 0, "warn + person + [not to]."],
  ["She admitted ___ the vase.", ["breaking", "to break", "break"], 0, "admit + [-ing]."],
  ["He ___ me to call my grandmother.", ["reminded", "remembered", "suggested"], 0, "remind + person + to."],
  ["She asked ___ she could borrow my bike.", ["if", "to", "that"], 0, "A question: [asked if]."],
  ["She asked me ___ her my bike.", ["to lend", "if lend", "lending"], 0, "A request: [asked me to]."]
] });

/* ---------- review ---------- */
P({ id: "review-text", lesson: "review", type: "text", belt: 4, title: "A phone call from Grandma", instr: "Read the whole text first, then complete the gaps with one word in each gap.",
  parts: [
    ["#", "A phone call from Grandma"],
    ["", "Yesterday my grandma phoned. She {1} me that she was feeling much better and that she {2} come to visit us the following weekend."],
    ["", "She asked me {3} I was studying hard, and she wanted to know what I {4} done for my birthday. I told her that we {5} had a party at home the day {6}."],
    ["", "Then she asked me {7} give the phone to my mum. Mum {8} that she would pick Grandma up at the station, and Grandma told her not {9} worry. Before she hung up, Grandma reminded me {10} send her the photos of the party."]
  ],
  gaps: [
    [["told"], "Tell + person: [told me]."],
    [["would"], "will → [would]."],
    [["if", "whether"], "Yes / no question: [if / whether]."],
    [["had"], "Past perfect: what I [had] done."],
    [["had"], "Past perfect: we [had] had a party."],
    [["before"], "yesterday → [the day before]."],
    [["to"], "Request: asked me [to] give."],
    [["said", "promised"], "No person after the verb: [said]."],
    [["to"], "Negative order: told her not [to] worry."],
    [["to"], "remind + person + [to]."]
  ] });
P({ id: "review-test", lesson: "review", type: "mc", belt: 4, test: true, title: "Reported Speech – Final test",
  instr: "20 questions, 5 points each: 100 points in all. The pass mark is 60 / 100 (6 / 10); the mark is the score divided by ten, rounded to the nearest half.", items: [
  ["She ___ me she was tired.", ["told", "said", "said to"], 0, "Tell + person."],
  ["He ___ that he was hungry.", ["said", "told", "told to"], 0, "No person: said."],
  ["‘I'm busy.’ → She said she ___ busy.", ["was", "is", "has been"], 0, "Backshift."],
  ["‘I've finished.’ → He said he ___.", ["had finished", "has finished", "finished"], 0, "present perfect → past perfect."],
  ["‘I'll help you.’ → She said she ___ me.", ["would help", "will help", "helped"], 0, "will → would."],
  ["‘I can drive.’ → He said he ___ drive.", ["could", "can", "had"], 0, "can → could."],
  ["‘I saw her yesterday.’ → He said he had seen her ___.", ["the day before", "yesterday", "the next day"], 0, "yesterday → the day before."],
  ["‘I live here.’ → She said she lived ___.", ["there", "here", "then"], 0, "here → there."],
  ["Maria says she ___ tired.", ["is", "was", "had been"], 0, "Present reporting verb: no change."],
  ["He asked me where ___.", ["I lived", "did I live", "I did live"], 0, "Statement order."],
  ["She asked ___ I liked jazz.", ["if", "that", "do"], 0, "Yes / no question: if."],
  ["Can you tell me where ___?", ["the bank is", "is the bank", "the bank is?"], 0, "Indirect question."],
  ["They asked us what time the film ___.", ["started", "did start", "does start"], 0, "No did; backshift."],
  ["The teacher told us ___ quiet.", ["to be", "be", "that we are"], 0, "tell + person + to."],
  ["Mum told me ___ late.", ["not to be", "don't be", "to not being"], 0, "Negative order: not to."],
  ["He promised ___ me back.", ["to pay", "paying", "pay"], 0, "promise + to."],
  ["She suggested ___ to the cinema.", ["going", "to go", "go"], 0, "suggest + -ing."],
  ["He apologised ___ late.", ["for being", "to be", "being"], 0, "apologise for + -ing."],
  ["She denied ___ my phone.", ["taking", "to take", "take"], 0, "deny + -ing."],
  ["The doctor advised me ___ more water.", ["to drink", "drinking", "drink"], 0, "advise + person + to."]
] });
