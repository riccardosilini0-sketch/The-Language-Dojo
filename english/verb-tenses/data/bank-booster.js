/* Verb Tenses — exercise bank with varied formats (original sentences).
   Formats inspired by common grammar practice books: building sentences from prompts,
   word order, right or wrong, dialogues with several gaps, matching halves.
   Format reference: data/engine.js. Belt = CEFR level (1 A1 … 6 C2). */
(function (D) {
  "use strict";
  const Q = "Write a question in the present simple.", QN = "Write a negative sentence in the present simple.";

  /* ---------------- PRESENT SIMPLE ---------------- */
  D.extend("present-simple", [
    ["q", 1, Q, "you / like / pizza?", ["Do you like pizza?"], "Questions: Do + subject + base form."],
    ["q", 1, Q, "your sister / play / the guitar?", ["Does your sister play the guitar?"], "With he/she/it: Does + subject + base form (no -s on the verb)."],
    ["q", 2, QN, "my dad / not / drink / coffee", ["My dad does not drink coffee."], "Negative with he/she/it: doesn't + base form."],
    ["q", 2, Q, "what time / the film / start?", ["What time does the film start?"], "Question word + does + subject + base form."],
    ["q", 3, Q, "how often / you / go / to the gym?", ["How often do you go to the gym?"], "How often + do + subject + base form."],
    ["q", 3, "Write the sentence with the adverb in the correct place.", "we / always / have / pizza on Fridays", ["We always have pizza on Fridays."], "Frequency adverbs go before the main verb."],
    ["q", 4, "Write the sentence with the adverb in the correct place.", "she / be / never / late for school", ["She is never late for school."], "With the verb be, frequency adverbs go after it: is never."],
    ["o", 1, "She lives in a small flat.", [], "Subject + verb + object. She → lives."],
    ["o", 2, "Where do your grandparents live?", [], "Question word + do + subject + base form."],
    ["o", 2, "He never eats meat.", [], "Never goes before the main verb."],
    ["o", 3, "How long does the journey take?", [], "How long + does + subject + base form."],
    ["o", 3, "My parents don't often watch TV.", [], "Frequency adverbs go after don't/doesn't and before the main verb."],
    ["j", 1, "She work in a bank.", false, ["She works in a bank."], "He/she/it + -s: she works."],
    ["j", 1, "Do you speak Italian?", true, [], "Correct: Do + subject + base form."],
    ["j", 2, "My brother doesn't likes football.", false, ["My brother doesn't like football."], "After doesn't, use the base form: like."],
    ["j", 2, "Water boils at 100 degrees Celsius.", true, [], "A scientific fact takes the present simple."],
    ["j", 3, "What time does the shop opens?", false, ["What time does the shop open?"], "After does, use the base form: open."],
    ["j", 3, "I am usually walking to school.", false, ["I usually walk to school."], "A routine with usually takes the present simple."],
    ["j", 4, "She is never late.", true, [], "Correct: the adverb goes after be."],
    ["d", 2, "Two friends talk about their weekends.", [["Anna", "What ___ (you / usually / do) at the weekend?"], ["Ben", "I ___ (play) football on Saturdays, and my sister ___ (go) swimming."]], [["do you usually do"], ["play"], ["goes"]], "Routines take the present simple; my sister (she) → goes."],
    ["d", 3, "A new classmate.", [["Teacher", "Where ___ (you / live), Sofia?"], ["Sofia", "Near the station. I ___ (not / live) far from school, so I ___ (walk) here every morning."]], [["do you live"], ["do not live", "don't live"], ["walk"]], "Permanent situations and routines: present simple."],
    ["d", 4, "A timetable.", [["Tourist", "Excuse me, when ___ (the next train / leave) for Pisa?"], ["Clerk", "It ___ (leave) at 10.15 and ___ (arrive) at 11.05."]], [["does the next train leave"], ["leaves"], ["arrives"]], "Timetables use the present simple, even for the future."]
  ]);

  /* ---------------- PRESENT CONTINUOUS ---------------- */
  D.extend("present-continuous", [
    ["q", 1, "Write a question in the present continuous.", "what / you / do?", ["What are you doing?"], "Question word + am/is/are + subject + -ing."],
    ["q", 1, "Write a question in the present continuous.", "the children / sleep?", ["Are the children sleeping?"], "Are + plural subject + -ing."],
    ["q", 2, "Write a negative sentence in the present continuous.", "it / not / rain / now", ["It is not raining now."], "Negative: is not (isn't) + -ing."],
    ["q", 3, "Write a question in the present continuous.", "who / you / wait for?", ["Who are you waiting for?"], "The preposition can stay at the end of the question."],
    ["q", 3, "Write a sentence in the present continuous.", "my brother / learn / to drive / this month", ["My brother is learning to drive this month."], "A temporary situation around now."],
    ["o", 1, "They are watching a film.", [], "Subject + are + -ing."],
    ["o", 2, "Why are you laughing?", [], "Why + are + subject + -ing."],
    ["o", 2, "I'm not wearing a coat today.", ["Today I'm not wearing a coat."], "Negative: am not + -ing."],
    ["o", 3, "The number of tourists is growing every year.", ["Every year the number of tourists is growing."], "A changing situation: present continuous."],
    ["j", 1, "I am liking this song.", false, ["I like this song."], "Like is a state verb: present simple."],
    ["j", 1, "Listen! Someone is knocking at the door.", true, [], "An action happening now."],
    ["j", 2, "She is wanting a new phone.", false, ["She wants a new phone."], "Want is a state verb."],
    ["j", 2, "Look! The bus come.", false, ["Look! The bus is coming."], "Something happening now: is coming."],
    ["j", 3, "He's always losing his keys!", true, [], "Always + present continuous expresses an annoying habit."],
    ["j", 3, "Are you understand me?", false, ["Do you understand me?"], "Understand is a state verb: Do you understand…?"],
    ["d", 2, "A phone call.", [["Mum", "Hi Tom. What ___ (you / do)?"], ["Tom", "I ___ (sit) in the library. I ___ (revise) for my exam."]], [["are you doing"], ["am sitting"], ["am revising"]], "Actions in progress at the moment of speaking."],
    ["d", 3, "A video call.", [["Jess", "Why ___ (you / wear) a coat inside?"], ["Kai", "The heating ___ (not / work), and it ___ (get) really cold in here!"]], [["are you wearing"], ["is not working", "isn't working"], ["is getting"]], "Temporary situations and changes in progress."],
    ["h", 2, "Match the beginnings and endings.", [["Shh! Grandad", "is sleeping on the sofa."], ["Mum can't come to the phone:", "she's having a shower."], ["Take your coat –", "it's getting cold outside."], ["Why are you", "laughing at me?"]], "Look at the grammar: a subject needs is + -ing; Why are you needs only the -ing form."]
  ]);

  /* ---------------- PRESENT PERFECT SIMPLE ---------------- */
  D.extend("present-perfect-simple", [
    ["q", 2, "Write a question in the present perfect.", "you / ever / be / to London?", ["Have you ever been to London?"], "Experience: Have + subject + ever + past participle."],
    ["q", 2, "Write a negative sentence in the present perfect.", "I / not / finish / my homework / yet", ["I have not finished my homework yet."], "Negative with yet: haven't + past participle … yet."],
    ["q", 3, "Write a question with How long.", "how long / you / know / Marco?", ["How long have you known Marco?"], "Know is a state verb: present perfect simple."],
    ["q", 3, "Write a sentence in the present perfect.", "she / just / leave", ["She has just left."], "Just goes between has and the past participle."],
    ["q", 4, "Write a sentence in the present perfect.", "this / be / the best meal / I / ever / eat", ["This is the best meal I have ever eaten."], "Superlative + ever + present perfect."],
    ["o", 2, "I have never seen snow.", [], "Never goes between have and the past participle."],
    ["o", 2, "Have you finished your lunch?", [], "Have + subject + past participle."],
    ["o", 3, "We have lived here since 2015.", ["Since 2015 we have lived here."], "Since + starting point."],
    ["o", 3, "Has the film already started?", [], "Already goes before the past participle."],
    ["j", 2, "I have seen him yesterday.", false, ["I saw him yesterday."], "With a finished time (yesterday) use the past simple."],
    ["j", 2, "She has lost her keys, so she can't get in.", true, [], "A past action with a result now."],
    ["j", 3, "How long do you know your best friend?", false, ["How long have you known your best friend?"], "Duration up to now: present perfect."],
    ["j", 3, "I have been to Paris three times.", true, [], "Life experience, number of times."],
    ["j", 4, "This is the first time I eat sushi.", false, ["This is the first time I have eaten sushi."], "This is the first time + present perfect."],
    ["j", 4, "I've known her since five years.", false, ["I've known her for five years."], "for + a period of time; since + a starting point."],
    ["d", 3, "Two friends meet in town.", [["Leo", "___ (you / see) the new film at the cinema yet?"], ["Mia", "No, I ___ (not / have) time. ___ (you / see) it?"], ["Leo", "Yes, I ___ (see) it twice!"]], [["Have you seen"], ["have not had", "haven't had"], ["Have you seen"], ["have seen", "saw"]], "Questions with yet and experiences up to now take the present perfect."],
    ["d", 4, "At the office.", [["Boss", "___ (you / send) the report to the client?"], ["Paul", "Not yet. I ___ (already / write) it, but I ___ (not / check) the figures."]], [["Have you sent"], ["have already written"], ["have not checked", "haven't checked"]], "Already, yet and recent actions with present results."]
  ]);

  /* ---------------- PRESENT PERFECT CONTINUOUS ---------------- */
  D.extend("present-perfect-continuous", [
    ["q", 3, "Write a question in the present perfect continuous.", "how long / you / wait?", ["How long have you been waiting?"], "How long + have + subject + been + -ing."],
    ["q", 3, "Write a sentence in the present perfect continuous.", "it / rain / all morning", ["It has been raining all morning."], "Activity continuing up to now."],
    ["q", 4, "Write a question to ask for an explanation.", "Your hands are dirty. (what / you / do?)", ["What have you been doing?"], "Asking about a recent activity that explains what we see."],
    ["q", 4, "Write a sentence in the present perfect continuous.", "she / not / sleep / well / lately", ["She has not been sleeping well lately."], "Negative: hasn't been + -ing."],
    ["o", 3, "I have been learning Spanish for two years.", ["For two years I have been learning Spanish."], "have been + -ing + for."],
    ["o", 3, "Have you been crying?", [], "Have + subject + been + -ing."],
    ["o", 4, "They have been arguing all evening.", [], "Duration of an activity up to now."],
    ["j", 3, "I have been knowing him for years.", false, ["I have known him for years."], "Know is a state verb: present perfect simple."],
    ["j", 3, "We've been walking for hours – let's stop.", true, [], "Duration of an activity up to now."],
    ["j", 4, "She has been writing three emails this morning.", false, ["She has written three emails this morning."], "A number of completed items: present perfect simple."],
    ["j", 4, "How long have you been living in Milan?", true, [], "Correct: duration of a situation up to now."],
    ["d", 4, "At the doctor's.", [["Doctor", "How long ___ (you / feel) like this?"], ["Patient", "About a week. And I ___ (not / sleep) well since Monday."]], [["have you been feeling", "have you felt"], ["have not been sleeping", "haven't been sleeping", "have not slept", "haven't slept"]], "Duration up to now: present perfect continuous (or simple)."],
    ["d", 5, "Coming home.", [["Dad", "You look exhausted. What ___ (you / do)?"], ["Lucy", "I ___ (help) Gran in the garden. We ___ (plant) over fifty trees!"]], [["have you been doing"], ["have been helping"], ["have planted"]], "Activity with visible effects (continuous) vs number of completed results (simple)."]
  ]);

  /* ---------------- PAST SIMPLE ---------------- */
  D.extend("past-simple", [
    ["q", 1, "Write a question in the past simple.", "you / enjoy / the party?", ["Did you enjoy the party?"], "Did + subject + base form."],
    ["q", 1, "Write a negative sentence in the past simple.", "we / not / go / out / last night", ["We did not go out last night."], "didn't + base form."],
    ["q", 2, "Write a question in the past simple.", "where / you / buy / those shoes?", ["Where did you buy those shoes?"], "Question word + did + subject + base form."],
    ["q", 2, "Write a question in the past simple.", "what time / the match / finish?", ["What time did the match finish?"], "What time + did + subject + base form."],
    ["q", 3, "Write the question for the answer: “I met her in 2019.”", "when / you / meet / her?", ["When did you meet her?"], "When + did + subject + base form."],
    ["o", 1, "I visited my aunt last week.", ["Last week I visited my aunt."], "Past simple with a finished time."],
    ["o", 2, "Did they win the match?", [], "Did + subject + base form."],
    ["o", 2, "She didn't answer my message.", [], "didn't + base form."],
    ["o", 3, "What did you have for dinner?", [], "What + did + subject + base form."],
    ["j", 1, "I goed to the cinema yesterday.", false, ["I went to the cinema yesterday."], "Go is irregular: go – went – gone."],
    ["j", 1, "Did you see the news?", true, [], "Did + base form."],
    ["j", 2, "She didn't came to school.", false, ["She didn't come to school."], "After didn't, use the base form."],
    ["j", 2, "When did you arrive?", true, [], "Correct question form."],
    ["j", 3, "Where you went on holiday?", false, ["Where did you go on holiday?"], "Questions need did + base form."],
    ["j", 3, "We have bought a car two years ago.", false, ["We bought a car two years ago."], "Ago always takes the past simple."],
    ["d", 2, "Monday morning.", [["Kate", "___ (you / have) a good weekend?"], ["Sam", "Yes, thanks. I ___ (go) to the mountains with my family and we ___ (climb) a glacier!"]], [["Did you have"], ["went"], ["climbed"]], "Finished events last weekend: past simple."],
    ["d", 3, "A police interview.", [["Officer", "What ___ (you / do) after the concert?"], ["Witness", "I ___ (take) a taxi home. I ___ (not / see) anything strange."]], [["did you do"], ["took"], ["did not see", "didn't see"]], "A sequence of completed past actions."],
    ["h", 2, "Match the questions and answers.", [["Did you call Lisa?", "Yes, I did, but she didn't answer."], ["Where did you park?", "Behind the station."], ["What time did you get up?", "At half past seven."], ["Who did you meet?", "An old friend from school."]], "Each answer gives the information the question asks for: a place, a time, a person, or yes/no."]
  ]);

  /* ---------------- PAST CONTINUOUS ---------------- */
  D.extend("past-continuous", [
    ["q", 2, "Write a question in the past continuous.", "what / you / do / at 9 p.m. last night?", ["What were you doing at 9 p.m. last night?"], "What + were + subject + -ing."],
    ["q", 2, "Write a sentence in the past continuous.", "it / snow / when we woke up", ["It was snowing when we woke up."], "Background action in progress."],
    ["q", 3, "Join the ideas with while.", "I / cook / dinner – the phone / ring", ["While I was cooking dinner, the phone rang.", "The phone rang while I was cooking dinner."], "while + past continuous (long action), past simple (short action)."],
    ["q", 3, "Write a negative sentence in the past continuous.", "she / not / listen / to the teacher", ["She was not listening to the teacher."], "wasn't + -ing."],
    ["o", 2, "We were having lunch when you called.", ["When you called we were having lunch."], "Long action (past continuous) + short action (past simple)."],
    ["o", 3, "Were you sleeping when I arrived?", [], "Were + subject + -ing."],
    ["o", 3, "The sun was shining and the birds were singing.", ["The birds were singing and the sun was shining."], "Setting the scene in a story."],
    ["j", 2, "I was walking home when I saw an accident.", true, [], "Long action interrupted by a short one."],
    ["j", 2, "They was playing tennis at five.", false, ["They were playing tennis at five."], "With they, use were."],
    ["j", 3, "When she arrived, we were eating dinner.", true, [], "The meal was already in progress."],
    ["j", 3, "I was knowing the answer.", false, ["I knew the answer."], "Know is a state verb: past simple."],
    ["d", 3, "A strange evening.", [["Ella", "What ___ (you / do) when the lights went out?"], ["Max", "I ___ (watch) TV and my parents ___ (play) cards."]], [["were you doing"], ["was watching"], ["were playing"]], "Actions in progress at a past moment."],
    ["d", 4, "Telling a story.", [["Narrator", "It ___ (rain) heavily. A man ___ (stand) at the bus stop when a car suddenly ___ (stop) next to him."]], [["was raining"], ["was standing"], ["stopped"]], "Background (past continuous) and the main event (past simple)."],
    ["h", 2, "Match the questions and short answers.", [["Were you sleeping?", "No, I wasn't."], ["Was it raining?", "Yes, it was."], ["Were they playing outside?", "Yes, they were."], ["Was she listening?", "No, she wasn't."]], "Short answers repeat was/were with the right pronoun."]
  ]);

  /* ---------------- USED TO ---------------- */
  D.extend("used-to", [
    ["q", 2, "Write a sentence with used to.", "I / have / long hair", ["I used to have long hair."], "used to + base form."],
    ["q", 2, "Write a question with used to.", "you / play / video games?", ["Did you use to play video games?"], "Did + subject + use to + base form (no -d)."],
    ["q", 3, "Write a negative sentence with used to.", "my dad / not / like / vegetables", ["My dad did not use to like vegetables.", "My dad never used to like vegetables."], "didn't use to + base form."],
    ["q", 3, "Write a sentence with There used to be.", "a bakery / on this corner", ["There used to be a bakery on this corner."], "There used to be = there was (but not now)."],
    ["o", 2, "We used to go camping every summer.", ["Every summer we used to go camping."], "used to + base form for past habits."],
    ["o", 3, "Did your school use to have a uniform?", [], "Did + subject + use to + base form."],
    ["o", 3, "She didn't use to drink coffee.", [], "didn't use to + base form."],
    ["j", 2, "I use to live in Naples.", false, ["I used to live in Naples."], "In affirmative sentences: used to."],
    ["j", 2, "Did you used to walk to school?", false, ["Did you use to walk to school?"], "After did: use to (no -d)."],
    ["j", 3, "There used to be a cinema here.", true, [], "Correct: a past situation that no longer exists."],
    ["j", 3, "I used to go to Paris last year.", false, ["I went to Paris last year."], "Used to is for repeated habits or states, not a single event at a specific time."],
    ["d", 3, "Grandma remembers.", [["Grandma", "When I was young, we ___ (not / have) a television."], ["Luca", "So what ___ (you / do) in the evenings?"], ["Grandma", "We ___ (listen) to the radio and play cards."]], [["did not use to have", "didn't use to have", "never used to have", "did not have", "didn't have"], ["did you use to do", "did you do"], ["used to listen", "listened"]], "Past habits and states: used to (or the past simple)."],
    ["h", 3, "Match the beginnings and endings.", [["I used to hate olives,", "but now I love them."], ["There used to be a factory here,", "but they turned it into flats."], ["Did you use to", "have a pet when you were little?"], ["She didn't use to", "wear glasses."]], "used to + base form; did/didn't + use to + base form."]
  ]);

  /* ---------------- PAST PERFECT SIMPLE ---------------- */
  D.extend("past-perfect-simple", [
    ["q", 3, "Write a sentence in the past perfect.", "when we arrived / the film / already / start", ["When we arrived, the film had already started."], "The earlier action: had + past participle."],
    ["q", 3, "Write a question in the past perfect.", "you / ever / fly / before that trip?", ["Had you ever flown before that trip?"], "Had + subject + ever + past participle."],
    ["q", 4, "Join the sentences with because. Use the past perfect.", "She was hungry. – She / not / eat / all day", ["She was hungry because she had not eaten all day."], "The earlier cause: past perfect."],
    ["q", 4, "Write a sentence in the past perfect.", "by the time the police came / the thieves / escape", ["By the time the police came, the thieves had escaped."], "By the time + past simple, past perfect for the earlier action."],
    ["o", 3, "I had never seen the sea before.", [], "had + never + past participle."],
    ["o", 4, "They had left before we arrived.", ["Before we arrived they had left."], "The earlier action: past perfect."],
    ["o", 4, "Had you finished your homework?", [], "Had + subject + past participle."],
    ["j", 3, "When I got to the station, the train already left.", false, ["When I got to the station, the train had already left."], "The train left first: past perfect."],
    ["j", 3, "She told me she had lost her passport.", true, [], "Reported speech: an earlier past."],
    ["j", 4, "I had seen that film last week.", false, ["I saw that film last week."], "A single past event with a finished time: past simple."],
    ["j", 4, "After he had finished his speech, everyone clapped.", true, [], "After + past perfect for the earlier action."],
    ["d", 4, "A bad start to the holiday.", [["Ruth", "Why were you so late?"], ["Tim", "When we got to the airport, we realised we ___ (leave) the passports at home! And by the time we got back, our flight ___ (go)."]], [["had left"], ["had gone", "had left"]], "Actions completed before another past moment: past perfect."],
    ["h", 4, "Match the beginnings and endings.", [["By the time I got home,", "everyone had gone to bed."], ["I didn't recognise him", "because he had grown a beard."], ["It was the first time", "I had ever flown."], ["She was nervous because", "she had never spoken in public before."]], "The past perfect shows which action happened earlier."]
  ]);

  /* ---------------- PAST PERFECT CONTINUOUS ---------------- */
  D.extend("past-perfect-continuous", [
    ["q", 4, "Write a sentence in the past perfect continuous.", "we / wait / for an hour / when the bus came", ["We had been waiting for an hour when the bus came."], "Duration up to a past moment."],
    ["q", 4, "Write a question with How long.", "how long / she / work / there / before she left?", ["How long had she been working there before she left?"], "How long + had + subject + been + -ing."],
    ["q", 5, "Explain the situation with the past perfect continuous.", "His eyes were red. (he / cry)", ["He had been crying."], "An earlier activity explains a past situation."],
    ["o", 4, "They had been driving all night.", [], "had been + -ing."],
    ["o", 5, "Had you been waiting long?", [], "Had + subject + been + -ing."],
    ["j", 4, "The ground was wet because it had been raining.", true, [], "An earlier activity explains the past situation."],
    ["j", 4, "I had been knowing her for years.", false, ["I had known her for years."], "State verbs use the past perfect simple."],
    ["j", 5, "She had been writing four letters by lunchtime.", false, ["She had written four letters by lunchtime."], "Completed items: past perfect simple."],
    ["d", 5, "After the marathon.", [["Reporter", "How did you feel at the finish line?"], ["Runner", "Exhausted! I ___ (run) for over three hours and I ___ (not / drink) anything for the last ten kilometres."]], [["had been running"], ["had not drunk", "hadn't drunk"]], "Duration of an activity (continuous) vs a completed fact (simple) before a past moment."]
  ]);

  /* ---------------- FUTURE SIMPLE (WILL) ---------------- */
  D.extend("future-simple", [
    ["q", 2, "Write a prediction with will.", "I think / it / rain / tomorrow", ["I think it will rain tomorrow."], "Prediction based on opinion: will + base form."],
    ["q", 2, "Write a promise with will.", "I / not / tell / anyone", ["I will not tell anyone."], "won't + base form."],
    ["q", 3, "Write an offer with Shall.", "I / open / the window?", ["Shall I open the window?"], "Offers: Shall I…?"],
    ["q", 3, "Write a sentence with will and probably.", "she / probably / be / late", ["She will probably be late."], "Probably goes after will."],
    ["o", 2, "I'll help you with your bags.", [], "Instant offer: will."],
    ["o", 3, "Will you marry me?", [], "Will + subject + base form."],
    ["o", 3, "I don't think they'll come.", [], "I don't think + will (not I think … won't)."],
    ["j", 2, "I will to call you later.", false, ["I will call you later."], "Will + base form without to."],
    ["j", 2, "The phone's ringing. I'll answer it.", true, [], "A decision at the moment of speaking."],
    ["j", 3, "If it will rain, we'll stay at home.", false, ["If it rains, we'll stay at home."], "After if (future meaning), use the present simple."],
    ["d", 3, "In a restaurant.", [["Waiter", "Are you ready to order?"], ["Customer", "Yes. I ___ (have) the soup, please. And my friend ___ (have) the fish."]], [["will have"], ["will have"]], "Decisions made at the moment of speaking: will."],
    ["h", 3, "Match the situations and responses.", [["This box is really heavy.", "I'll carry it for you."], ["I've left my wallet at home.", "Don't worry, I'll pay."], ["I'm thirsty.", "I'll get you a glass of water."], ["It's cold in here.", "I'll close the window."]], "Instant decisions and offers: will."]
  ]);

  /* ---------------- BE GOING TO ---------------- */
  D.extend("be-going-to", [
    ["q", 1, "Write a sentence with be going to.", "I / start / a new course / in September", ["I am going to start a new course in September."], "Plans: be going to + base form."],
    ["q", 2, "Write a question with be going to.", "what / you / wear / to the party?", ["What are you going to wear to the party?"], "What + are + subject + going to + base form."],
    ["q", 2, "Write a prediction with be going to.", "Look at those clouds! (it / rain)", ["It is going to rain."], "Prediction based on evidence."],
    ["q", 3, "Write a negative sentence with be going to.", "we / not / buy / a new car / this year", ["We are not going to buy a new car this year."], "isn't/aren't going to + base form."],
    ["o", 1, "We're going to visit Rome.", [], "be going to + base form."],
    ["o", 2, "Are you going to tell her?", [], "Are + subject + going to + base form."],
    ["o", 3, "Mind out! You're going to fall!", [], "Prediction from what we can see."],
    ["j", 1, "I'm going to buy a new phone.", true, [], "A plan: be going to."],
    ["j", 2, "She going to study medicine.", false, ["She is going to study medicine."], "be going to needs the verb be."],
    ["j", 2, "Look at that sky! It will rain.", false, ["Look at that sky! It's going to rain."], "A prediction with present evidence: going to."],
    ["j", 3, "I've decided: I'm going to learn Japanese.", true, [], "A decision already made."],
    ["d", 2, "Plans for the summer.", [["Nina", "What ___ (you / do) this summer?"], ["Omar", "I ___ (work) in my uncle's restaurant. Then my family ___ (visit) Morocco."]], [["are you going to do", "are you doing"], ["am going to work", "am working"], ["is going to visit", "are going to visit", "is visiting", "are visiting"]], "Plans and intentions: be going to (or the present continuous)."]
  ]);

  /* ---------------- PRESENT CONTINUOUS FOR THE FUTURE ---------------- */
  D.extend("present-continuous-future", [
    ["q", 2, "Write a sentence about an arrangement.", "I / meet / Sara / at six tomorrow", ["I am meeting Sara at six tomorrow."], "Fixed arrangement: present continuous."],
    ["q", 2, "Write a question about arrangements.", "what / you / do / on Saturday?", ["What are you doing on Saturday?"], "Asking about arrangements."],
    ["q", 3, "Write a negative sentence about an arrangement.", "we / not / go / away / this weekend", ["We are not going away this weekend."], "aren't + -ing."],
    ["o", 2, "We're flying to Dublin on Friday.", ["On Friday we're flying to Dublin."], "Arranged travel: present continuous."],
    ["o", 3, "Who are you taking to the wedding?", [], "Asking about an arrangement."],
    ["j", 2, "I see the dentist tomorrow at four.", false, ["I'm seeing the dentist tomorrow at four."], "An appointment: present continuous."],
    ["j", 3, "My cousins are staying with us next week.", true, [], "An arrangement."],
    ["d", 3, "Making plans.", [["Zoe", "Are you free on Thursday evening?"], ["Ian", "Sorry, I ___ (play) in a concert. But I ___ (not / do) anything on Friday."]], [["am playing"], ["am not doing"]], "Arrangements in your diary: present continuous."]
  ]);

  /* ---------------- PRESENT SIMPLE FOR THE FUTURE (TIMETABLES, TIME CLAUSES) ---------------- */
  D.extend("present-simple-future", [
    ["q", 2, "Write a sentence about a timetable.", "the train / leave / at 8.15", ["The train leaves at 8.15."], "Timetables: present simple."],
    ["q", 3, "Join the ideas with as soon as.", "I'll call you – I / get / home", ["I'll call you as soon as I get home.", "As soon as I get home, I'll call you."], "Time clauses take the present simple."],
    ["q", 3, "Join the ideas with until.", "We'll wait here – the rain / stop", ["We'll wait here until the rain stops."], "until + present simple."],
    ["q", 4, "Join the ideas with when.", "She'll be happy – she / hear / the news", ["She'll be happy when she hears the news.", "When she hears the news, she'll be happy."], "when + present simple for the future."],
    ["o", 3, "I'll phone you when I arrive.", ["When I arrive I'll phone you."], "when + present simple."],
    ["o", 3, "What time does the concert start?", [], "Timetabled event: present simple."],
    ["j", 3, "I'll tell you when I will know.", false, ["I'll tell you when I know."], "After when (future meaning), use the present simple."],
    ["j", 3, "The museum opens at nine tomorrow.", true, [], "A timetable."],
    ["j", 4, "Don't go out until you have finished your homework.", true, [], "until + present perfect for a completed action."],
    ["h", 3, "Match the beginnings and endings.", [["I'll lend you the book", "as soon as I finish it."], ["Text me", "when you get to the station."], ["We can't leave", "until Dad comes back."], ["Take an umbrella", "in case it rains."]], "Time clauses (and in case) take the present simple."],
    ["d", 4, "Before the exam.", [["Mum", "Will you call me after the exam?"], ["Ana", "Yes, I'll call you as soon as I ___ (come) out. And when I ___ (get) the results, I'll tell you."]], [["come"], ["get"]], "Time clauses: present simple."]
  ]);

  /* ---------------- FUTURE CONTINUOUS ---------------- */
  D.extend("future-continuous", [
    ["q", 3, "Write a sentence in the future continuous.", "this time tomorrow / I / lie / on a beach", ["This time tomorrow I will be lying on a beach."], "In progress at a future time: will be + -ing."],
    ["q", 4, "Write a polite question in the future continuous.", "you / use / the car / tonight?", ["Will you be using the car tonight?"], "Polite enquiry about plans."],
    ["o", 3, "At ten I'll be working.", ["I'll be working at ten."], "will be + -ing."],
    ["o", 4, "Will you be going past the shop?", [], "Will + subject + be + -ing."],
    ["j", 3, "Don't call at eight – we'll be having dinner.", true, [], "In progress at that time."],
    ["j", 4, "This time next week I will lie on a beach.", false, ["This time next week I will be lying on a beach."], "In progress at a future time: future continuous."],
    ["d", 4, "Arranging a call.", [["Ben", "Can I call you at nine tomorrow?"], ["Liz", "No, I ___ (drive) to work then. Call me at eleven – I ___ (not / do) anything important."]], [["will be driving"], ["will not be doing", "won't be doing"]], "Actions in progress at a future time."]
  ]);

  /* ---------------- FUTURE PERFECT SIMPLE ---------------- */
  D.extend("future-perfect-simple", [
    ["q", 4, "Write a sentence in the future perfect.", "by Friday / I / finish / the project", ["By Friday I will have finished the project."], "will have + past participle."],
    ["q", 4, "Write a question in the future perfect.", "you / finish / by six?", ["Will you have finished by six?"], "Will + subject + have + past participle."],
    ["q", 5, "Write a negative sentence in the future perfect.", "they / not / arrive / by the time we leave", ["They will not have arrived by the time we leave."], "won't have + past participle."],
    ["o", 4, "By June I will have saved enough money.", ["I will have saved enough money by June."], "Completed before a future time."],
    ["j", 4, "By next year they will finish the bridge.", false, ["By next year they will have finished the bridge."], "By + future time: future perfect."],
    ["j", 5, "She'll have heard the news by now.", true, [], "Future perfect for a confident deduction about the past."],
    ["d", 5, "Planning a party.", [["Sam", "Can we start decorating at five?"], ["Eva", "Yes, by then the guests ___ (not / arrive) yet, and I ___ (finish) cooking."]], [["will not have arrived", "won't have arrived"], ["will have finished"]], "Completed (or not) before a future moment."]
  ]);

  /* ---------------- FUTURE PERFECT CONTINUOUS ---------------- */
  D.extend("future-perfect-continuous", [
    ["q", 5, "Write a sentence in the future perfect continuous.", "by June / I / work / here / for ten years", ["By June I will have been working here for ten years."], "will have been + -ing for duration up to a future point."],
    ["o", 5, "In May we will have been living here for a year.", ["We will have been living here for a year in May."], "Duration up to a future moment."],
    ["j", 5, "By midnight I will have been studying for six hours.", true, [], "Duration up to a future moment."],
    ["j", 5, "Next month she will be teaching here for twenty years.", false, ["Next month she will have been teaching here for twenty years."], "Duration up to a future point: future perfect continuous."]
  ]);

  /* ---------------- CONTRASTS ---------------- */
  D.extend("ps-vs-pc", [
    ["j", 2, "I usually take the bus, but today I walk.", false, ["I usually take the bus, but today I'm walking."], "Today = temporary, happening now: present continuous."],
    ["d", 2, "In the kitchen.", [["Mum", "What ___ (you / cook)? It smells great!"], ["Dan", "Pasta. I ___ (cook) every Sunday."]], [["are you cooking"], ["cook"]], "Now (continuous) vs routine (simple)."],
    ["h", 2, "Match the questions and answers.", [["Do you work here?", "Yes, I do."], ["Are you working today?", "Yes, I am."], ["Does she drive?", "No, she doesn't."], ["Is she driving?", "No, she isn't."]], "Short answers repeat the auxiliary of the question: do/does or am/is/are."]
  ]);
  D.extend("pp-vs-ps", [
    ["q", 3, "Write a question in the past simple or present perfect.", "you / ever / try / sushi?", ["Have you ever tried sushi?"], "Experience without a time: present perfect."],
    ["q", 3, "Write a question in the past simple or present perfect.", "when / you / try / it?", ["When did you try it?"], "When asks about a finished time: past simple."],
    ["j", 3, "I have finished my homework an hour ago.", false, ["I finished my homework an hour ago."], "ago → past simple."],
    ["j", 3, "I've lived here since 2018.", true, [], "since + starting point → present perfect."],
    ["d", 3, "Catching up.", [["Ali", "___ (you / ever / be) to Scotland?"], ["Meg", "Yes, I ___ (go) there two years ago. It ___ (rain) every day!"]], [["Have you ever been"], ["went"], ["rained"]], "Experience (present perfect), then details at a finished time (past simple)."],
    ["h", 3, "Match the questions and answers.", [["Have you finished?", "Yes, I have."], ["Did you finish?", "Yes, I did."], ["Has he called?", "No, he hasn't."], ["Did he call?", "No, he didn't."]], "Short answers use the auxiliary of the question: have/has or did."],
    ["j", 4, "We've moved here in 2016.", false, ["We moved here in 2016."], "in + a past date → past simple."]
  ]);
  D.extend("pps-vs-ppc", [
    ["j", 4, "I've been reading three books this month.", false, ["I've read three books this month."], "A number of completed things: present perfect simple."],
    ["j", 4, "I've been reading a great book – I'm on page 200.", true, [], "Unfinished activity: present perfect continuous."],
    ["d", 4, "After work.", [["Rob", "You look tired."], ["Kim", "I ___ (paint) the living room all day, and I ___ (only / finish) one wall!"]], [["have been painting"], ["have only finished"]], "Activity (continuous) vs result (simple)."]
  ]);
  D.extend("pst-vs-pcont", [
    ["h", 3, "Match the questions and answers.", [["What were you doing at eight?", "I was having dinner."], ["What did you do at eight?", "I phoned my grandmother."], ["Were you sleeping?", "No, I wasn't."], ["Did you sleep well?", "Yes, I did."]], "Past continuous for actions in progress; past simple for completed actions. Short answers repeat the auxiliary."],
    ["d", 3, "An accident.", [["Officer", "What happened?"], ["Driver", "I ___ (drive) along the main road when a dog ___ (run) in front of my car."]], [["was driving"], ["ran"]], "Long action in progress + short interrupting event."]
  ]);
  D.extend("pst-vs-ppf", [
    ["j", 4, "When we arrived, the party finished.", false, ["When we arrived, the party had finished."], "The party ended before we arrived: past perfect."],
    ["d", 4, "Two different stories.", [["Story 1", "When I got home, my sister ___ (already / eat) all the pizza, so I made a sandwich."], ["Story 2", "When I got home, my sister ___ (make) me a cup of tea and we chatted."]], [["had already eaten"], ["made"]], "Past perfect: it happened before I got home. Past simple: it happened after I got home."]
  ]);
  D.extend("will-vs-going-to", [
    ["j", 3, "Look at the time! We'll miss the train!", false, ["Look at the time! We're going to miss the train!"], "A prediction from present evidence: going to."],
    ["d", 3, "At home.", [["Joe", "We've run out of milk."], ["Ada", "Really? I ___ (get) some from the shop."], ["Joe", "Thanks. Oh, and I ___ (make) pancakes tonight – I decided this morning."]], [["will get"], ["am going to make", "am making"]], "Instant decision (will) vs plan made before (going to)."],
    ["h", 3, "Match the situations and the best responses.", [["The phone's ringing.", "I'll get it."], ["I've bought a ticket for the match.", "I'm going to watch it with my cousin."], ["Look at those clouds!", "It's going to rain."], ["I don't understand this exercise.", "I'll explain it to you."]], "will: instant decisions and offers; going to: plans and evidence-based predictions."]
  ]);
})(window.TenseDojo);
