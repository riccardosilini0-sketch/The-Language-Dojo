/* Skill Development — Writing, second set. Tasks, checklists and annotated model answers
   written for Language Dojo. Students check their own work: nothing is sent or saved. */
Skills.add(
  /* ---------- B1 · article ---------- */
  { id: "w-b1-article", skill: "writing", level: 3, type: "write", time: 25, genre: "Article", words: "about 100 words",
    title: "My favourite place to relax", topic: "Free time",
    prompt: ["You see this announcement on an English-language website for teenagers.", "Write your article in about 100 words."],
    input: { title: "Articles wanted!", lines: [
      "Where do you go when you want to relax?",
      "Tell us about your favourite place. Where is it? What do you do there?",
      "Why is it special for you?",
      "The best articles will appear on our website."
    ] },
    notes: ["Where the place is", "What you do there", "Why it is special"],
    checklist: [
      "My article has a title that makes people want to read it.",
      "I answered all three questions in the announcement.",
      "I talked to the reader directly at least once (Have you ever…? You…).",
      "I used adjectives to describe the place and my feelings.",
      "I used paragraphs and linking words (because, so, when, also).",
      "I finished with a sentence that gives my opinion or asks the reader something.",
      "I wrote about 100 words and checked my spelling."
    ],
    language: [
      ["Starting an article", ["Have you ever…?", "Everyone needs a place where…", "Let me tell you about…"]],
      ["Describing a place", ["It’s a small, quiet…", "It’s surrounded by…", "From there you can see…"]],
      ["Explaining feelings", ["It makes me feel…", "I love it because…", "It’s special to me because…"]],
      ["Ending", ["If you ever visit…, you should…", "What about you? Where do you…?"]]
    ],
    model: [
      ["My secret garden", "A short, interesting title."],
      ["Have you ever wanted to escape from the noise of the city? I have a perfect place: my grandmother’s garden, just outside my town.", "Opening question to involve the reader; answers “where”."],
      ["When I go there, I usually sit under the old apple tree and read, or I help my grandmother water her flowers. Sometimes we just drink lemonade and talk for hours.", "What you do there: present simple with frequency adverbs."],
      ["It’s special to me because it never changes. The garden smells of roses, it’s always peaceful, and I feel safe and calm there.", "Why it is special: adjectives and feelings."],
      ["What about you? Where do you go to relax?", "Ends with a question to the reader. About 100 words."]
    ] },

  /* ---------- B1 · story ---------- */
  { id: "w-b1-story", skill: "writing", level: 3, type: "write", time: 25, genre: "Story", words: "about 100 words",
    title: "A surprising day", topic: "Stories",
    prompt: ["Your English teacher has asked you to write a story.", "Your story must begin with this sentence:", "Write your story in about 100 words."],
    input: { title: "First sentence", lines: ["When I opened the front door, I couldn’t believe my eyes."] },
    checklist: [
      "My story begins with the sentence given.",
      "It has a clear beginning, middle and end.",
      "I used past tenses correctly (past simple for events, past continuous for background).",
      "I used time expressions to show the order of events (then, suddenly, a few minutes later, in the end).",
      "I described feelings and used some direct speech.",
      "The ending is clear and not too sudden.",
      "I wrote about 100 words and checked my spelling."
    ],
    language: [
      ["Ordering events", ["At first…", "Then…", "Suddenly…", "A few minutes later…", "In the end…"]],
      ["Describing feelings", ["I was so surprised that…", "I couldn’t stop laughing.", "My heart was beating fast."]],
      ["Endings", ["It was the best day of my life.", "I’ll never forget that day.", "From then on, …"]]
    ],
    model: [
      ["When I opened the front door, I couldn’t believe my eyes. My whole class was standing in the garden, holding balloons and shouting “Happy birthday!”", "The given sentence, followed immediately by the surprise."],
      ["I was so shocked that I dropped my bag. I had told everyone that I didn’t want a party, because my best friend had just moved to another city.", "Feelings, and the past perfect for background information."],
      ["Then, suddenly, someone stepped out from behind the tree. It was my best friend! She had travelled for three hours to be there.", "Time expressions (Then, suddenly) build tension; a second surprise."],
      ["We danced and laughed until midnight. It was the best birthday of my life.", "A clear ending. About 100 words."]
    ] },

  /* ---------- B2 · review ---------- */
  { id: "w-b2-review", skill: "writing", level: 4, type: "write", time: 40, genre: "Review", words: "140–190 words",
    title: "A series worth watching?", topic: "Entertainment",
    prompt: ["You see this announcement in an online magazine for students.", "Write your review in 140–190 words."],
    input: { title: "Reviews wanted", lines: [
      "Have you watched a TV series recently that you would recommend – or not?",
      "Write a review telling us what the series is about, what you liked or didn’t like about it, and who would enjoy it.",
      "We’ll publish the most interesting reviews next month."
    ] },
    notes: ["What the series is about (no spoilers!)", "What you liked and disliked", "Who would enjoy it, and your recommendation"],
    checklist: [
      "My review has a title and an engaging opening.",
      "I summarised the plot briefly without giving away the ending.",
      "I gave a balanced opinion with specific examples (acting, script, music, pace…).",
      "I used a range of descriptive adjectives (gripping, predictable, beautifully filmed…).",
      "My final paragraph makes a clear recommendation and says who would enjoy it.",
      "The style is lively but not too informal.",
      "I wrote 140–190 words and checked accuracy."
    ],
    language: [
      ["Describing the plot", ["It is set in…", "It tells the story of…", "The main character, …, is…"]],
      ["Giving opinions", ["What impressed me most was…", "The only disappointment was…", "Although…, …"]],
      ["Recommending", ["I would highly recommend it to anyone who…", "It’s definitely worth watching if…", "Give it a miss unless…"]]
    ],
    model: [
      ["Slow Horses – spies who get everything wrong", "A title with the name of the series and a hint of its tone."],
      ["If you think spy dramas are all about glamorous agents and fast cars, think again. This British series follows a group of intelligence officers who have been sent to a shabby office as a punishment for their mistakes.", "Engaging opening; brief, spoiler-free summary."],
      ["What impressed me most was the writing. The dialogue is sharp and often very funny, yet the series never loses its tension, and each episode ends in a way that makes it almost impossible not to watch the next one. The acting is excellent too, particularly the lead, who manages to be both disgusting and strangely lovable.", "Specific strengths with examples; varied adjectives."],
      ["My only criticism is that some of the plots are rather complicated, and you need to pay close attention to follow who is working for whom.", "A balanced weakness."],
      ["Overall, I would highly recommend it to anyone who enjoys clever thrillers with a dark sense of humour. However, if you prefer action to conversation, you might find it a little slow.", "Clear recommendation and target audience. About 180 words."]
    ] },

  /* ---------- B2 · formal email ---------- */
  { id: "w-b2-formal-email", skill: "writing", level: 4, type: "write", time: 40, genre: "Formal email", words: "140–190 words",
    title: "Volunteering at a festival", topic: "Work and volunteering",
    prompt: ["You see this advertisement and decide to apply.", "Write your email in 140–190 words."],
    input: { title: "Summer Arts Festival – volunteers needed", lines: [
      "We are looking for friendly, reliable volunteers aged 16+ to help at our ten-day festival in July.",
      "Jobs include welcoming visitors, giving information and helping backstage.",
      "Write to Ms Carter, telling us why you would be a good volunteer, what experience you have and which job you would prefer.",
      "Volunteers receive free tickets to all events."
    ] },
    notes: ["Why you would be a good volunteer", "Your relevant experience", "Which job you prefer, and why"],
    checklist: [
      "I started with “Dear Ms Carter” and ended with “Yours sincerely” and my full name.",
      "The first paragraph says why I am writing.",
      "I covered all three points in the advertisement, each in its own paragraph.",
      "I gave concrete examples of my skills and experience.",
      "The register is formal: no contractions, no slang, polite expressions.",
      "I ended by saying I am available for an interview or further information.",
      "I wrote 140–190 words and checked accuracy."
    ],
    language: [
      ["Opening", ["I am writing to apply for…", "I saw your advertisement on…", "I would like to be considered for…"]],
      ["Describing skills and experience", ["I have experience of…", "I am used to working…", "This has taught me…"]],
      ["Closing", ["I would be happy to provide further information.", "I look forward to hearing from you.", "Yours sincerely,"]]
    ],
    model: [
      ["Dear Ms Carter,", "Formal greeting with the name given."],
      ["I am writing to apply for a volunteer position at the Summer Arts Festival, which I saw advertised on your website.", "Reason for writing."],
      ["I believe I would be a good volunteer because I am outgoing, punctual and calm under pressure. I also speak English, Italian and some Spanish, which could be useful when welcoming visitors from abroad.", "Point 1: personal qualities supported by evidence."],
      ["Last summer I worked as an assistant at a children’s holiday camp, where I was responsible for organising activities and dealing with parents’ questions. This experience taught me how to stay patient and solve problems quickly.", "Point 2: relevant experience and what was learnt."],
      ["I would prefer to work as a visitor guide, as I enjoy meeting people and would like to improve my communication skills. However, I would be happy to help wherever I am needed.", "Point 3: preference with a reason, plus flexibility."],
      ["I am available for the whole festival and would be glad to attend an interview. I look forward to hearing from you.\nYours sincerely,\nGiulia Rossi", "Formal closing. About 170 words."]
    ] },

  /* ---------- C1 · essay ---------- */
  { id: "w-c1-essay", skill: "writing", level: 5, type: "write", time: 45, genre: "Essay", words: "220–260 words",
    title: "Spending public money", topic: "Society",
    prompt: ["Your class has listened to a radio discussion about how local governments should spend their money. You have made the notes below.", "Write an essay discussing two of the areas in your notes. Explain which area should receive more money, giving reasons to support your opinion. Write 220–260 words."],
    input: { title: "Which area should receive more money?", lines: [
      "• public transport",
      "• libraries and museums",
      "• sports facilities",
      "Some opinions expressed in the discussion:",
      "“Buses are the only way many people can get to work.”",
      "“Culture is what makes a town worth living in.”",
      "“Free sports centres would save money on healthcare.”"
    ] },
    checklist: [
      "I chose two of the three areas and discussed both in depth.",
      "My introduction presents the issue without simply repeating the task.",
      "I used the opinions from the discussion in my own words, if at all.",
      "Each body paragraph has a clear topic sentence, development and evidence or examples.",
      "My conclusion clearly states which area should receive more money and why.",
      "I used a range of linking devices (Admittedly, Nevertheless, What is more, On balance…).",
      "I used advanced vocabulary and structures accurately, in a formal register.",
      "I wrote 220–260 words and checked accuracy."
    ],
    language: [
      ["Introducing the issue", ["With budgets under increasing pressure, …", "Deciding how to allocate public funds is…"]],
      ["Presenting arguments", ["Proponents of… argue that…", "There is a strong case for…", "It could be argued that…"]],
      ["Conceding and contrasting", ["Admittedly, …", "While this is true, …", "Nevertheless, …"]],
      ["Concluding", ["On balance, …", "Weighing up these arguments, …", "It is my firm belief that…"]]
    ],
    model: [
      ["With local budgets under increasing pressure, deciding where public money should go has rarely been more difficult. Two areas that are frequently in competition are public transport and cultural institutions such as libraries and museums.", "Introduction: context and the two areas chosen."],
      ["There is a strong case for investing in public transport. For many residents, particularly the elderly and those on low incomes, a reliable bus service is not a convenience but a lifeline, determining whether they can reach work, school or medical appointments. Better transport also reduces traffic and pollution, benefiting even those who never use it.", "Paragraph 1: argument with consequences and a wider benefit."],
      ["Libraries and museums, meanwhile, contribute to a town’s quality of life in ways that are harder to measure. Libraries in particular offer free access to books, the internet and a warm, safe space, while museums attract visitors and give communities a sense of identity. Admittedly, these benefits are real; however, they depend to some extent on people being able to reach these places in the first place.", "Paragraph 2: fair treatment of the other side, then a link back to transport."],
      ["On balance, I believe public transport should receive the larger share of funding. Without it, the advantages offered by cultural institutions remain out of reach for precisely those who need them most. Investing in transport is therefore not a choice against culture, but a way of making it accessible to everyone.", "Conclusion: clear opinion with a final, persuasive argument. About 250 words."]
    ] },

  /* ---------- C1 · report ---------- */
  { id: "w-c1-report", skill: "writing", level: 5, type: "write", time: 45, genre: "Report", words: "220–260 words",
    title: "An exchange programme", topic: "Education",
    prompt: ["You recently took part in a two-week exchange programme with a school abroad. The head teacher has asked you to write a report for future participants.", "Your report should describe the most valuable aspects of the programme, mention any problems that arose and recommend improvements. Write 220–260 words."],
    checklist: [
      "I used a title and clear headings.",
      "The introduction states the purpose of the report.",
      "I described the positive aspects with specific examples.",
      "I explained the problems objectively, without complaining emotionally.",
      "My recommendations are practical and linked to the problems.",
      "The register is formal and impersonal where appropriate (passives, nominalisation).",
      "I wrote 220–260 words and checked accuracy."
    ],
    language: [
      ["Purpose", ["The aim of this report is to…", "This report evaluates…"]],
      ["Reporting", ["Participants found…", "It was generally felt that…", "The majority of students…"]],
      ["Problems", ["One drawback was…", "Some participants experienced difficulties with…"]],
      ["Recommendations", ["It is recommended that…", "Future programmes would benefit from…", "It would be advisable to…"]]
    ],
    model: [
      ["Report: the exchange programme with Lycée Victor Hugo", "Title stating the subject."],
      ["Introduction\nThe aim of this report is to evaluate the recent two-week exchange with our partner school in Lyon and to suggest improvements for future participants.", "Purpose, stated formally."],
      ["Valuable aspects\nThe majority of participants agreed that living with a host family was the most rewarding part of the experience. Daily conversation improved their confidence in French far more than classroom lessons could have done. The joint project with French students, in which mixed teams created a short documentary about the city, was also widely praised, as it encouraged genuine cooperation.", "Positive aspects with concrete examples; formal phrasing."],
      ["Problems\nThe main drawback was the timetable, which left little free time. Several students also reported that information about transport and emergency contacts was given only on arrival, which caused some anxiety during the first days.", "Problems stated objectively."],
      ["Recommendations\nIt is recommended that future programmes include at least one free afternoon per week, allowing participants to explore independently or spend time with their host families. In addition, a short information booklet should be sent to families before departure. With these minor changes, the programme would remain an outstanding opportunity that I would strongly recommend to other students.", "Practical recommendations linked to the problems, positive final evaluation. About 250 words."]
    ] }
);
