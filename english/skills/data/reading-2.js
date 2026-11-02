/* Skill Development — Reading, second set. Original texts written for Language Dojo. */
Skills.add(
  /* ---------- B1 · matching people and texts ---------- */
  { id: "r-b1-clubs", skill: "reading", level: 3, type: "match", time: 15,
    title: "Find the right club", topic: "Free time", voice: "en-GB-SoniaNeural",
    intro: "Five young people are looking for an after-school club. Read the descriptions of eight clubs and decide which club would be best for each person.",
    sections: [
      ["A", "Climbing Wall", "Our indoor wall is open on Tuesday and Thursday evenings. Beginners are welcome, and all equipment is included in the price. Instructors stay with you the whole time, so it’s safe even if you’ve never climbed before."],
      ["B", "Young Chefs", "Every Saturday morning we cook a three-course meal together and then eat it! You’ll learn dishes from a different country each month. Bring an apron – we provide the ingredients."],
      ["C", "Film Makers", "Write, film and edit your own short films using only a phone. At the end of term, the best films are shown at the town cinema. Meetings on Wednesday afternoons."],
      ["D", "Chess Corner", "Quiet games every Monday after school in the library. Players of all levels meet to play and learn new strategies. There’s a friendly tournament once a month, but nobody has to take part."],
      ["E", "Green Team", "We look after the community garden and grow vegetables that we give to local families. Most of the work is outdoors on Friday afternoons, so wear old clothes!"],
      ["F", "Drama Club", "Rehearsals on Tuesdays and Thursdays for our big summer show. Everyone gets a speaking part, and you’ll perform on a real stage in front of hundreds of people."],
      ["G", "Weekend Walkers", "Long walks in the hills every Sunday, with a picnic lunch. You need good shoes and a reasonable level of fitness, as some walks are over fifteen kilometres."],
      ["H", "Coding Lab", "Learn to build simple games and apps. We meet on Wednesday evenings in the computer room, and you can work alone or in small teams. No experience needed."]
    ],
    statements: [
      ["Leo loves being outside and is very fit. He is free only at weekends and doesn’t mind a long day out.", "G", "G (Weekend Walkers): Sundays, outdoors, long walks for fit people. B is also at the weekend, but indoors."],
      ["Amira wants to try a sport she has never done before. She can only go out on weekday evenings, and her parents are worried about safety.", "A", "A (Climbing Wall): weekday evenings, beginners welcome, instructors for safety."],
      ["Tom is shy and doesn’t enjoy performing, but he likes thinking games. He would like a calm club where he can improve slowly.", "D", "D (Chess Corner): quiet, all levels, and the tournament is optional. F would be too public for him."],
      ["Sofia is interested in other cultures and enjoys making things she can share with friends. She is busy every weekday.", "B", "B (Young Chefs): Saturday mornings, food from different countries, eaten together."],
      ["Ben wants to tell stories in a creative way, but he doesn’t want to be on stage. He would love other people to see his work.", "C", "C (Film Makers): creative stories, no stage, films shown at the cinema. F involves performing on stage."]
    ] },

  /* ---------- B1 · gapped text (story) ---------- */
  { id: "r-b1-wrong-train", skill: "reading", level: 3, type: "gapped", time: 15,
    title: "The wrong train", topic: "Travel stories", voice: "en-GB-RyanNeural",
    text: [
      "Last spring, I was going to visit my cousin in Bristol for the weekend. I had never travelled alone by train before, so I was a bit nervous. My mum came with me to the station and helped me find the right platform. [1]",
      "I found a seat by the window, put on my headphones and started reading a book. The train was quiet and comfortable, and after a while I fell asleep. [2] Outside the window there were mountains, and I was sure there were no mountains between London and Bristol.",
      "I went to find the ticket inspector. When I showed her my ticket, she looked at it for a long time. [3] I had got on the right train, but at the next station it had divided into two parts, and I was in the part going north!",
      "The inspector was very kind. She told me to get off at the next stop and wait for a train back. [4] My cousin wasn’t worried at all – in fact, she laughed so much that she couldn’t speak for a minute.",
      "I finally arrived in Bristol four hours late, tired and hungry. [5] Now, every time I take a train, I check the signs on the doors very carefully, and I never fall asleep."
    ],
    sentences: [
      ["Then she explained what had happened.", 3, "After the inspector looks at the ticket, the next sentence explains the problem: the train had divided."],
      ["My cousin was waiting for me with a pizza and a big smile.", 5, "It follows “tired and hungry” and comes before the final lesson, at the end of the story."],
      ["She waited until the train left and waved goodbye.", 1, "Mum is at the station with the writer; this is the moment the journey begins."],
      ["Luckily, the next station had a café, so I wasn’t bored.", 0, "This is the extra sentence: the story never mentions a café or being bored."],
      ["While I was waiting, I phoned my cousin to tell her the news.", 4, "“While I was waiting” refers to waiting for the train back, and the next sentence describes the cousin’s reaction."],
      ["When I woke up, the landscape looked very strange.", 2, "After “I fell asleep”, the writer wakes up and notices the mountains."]
    ] },

  /* ---------- B2 · multiple choice ---------- */
  { id: "r-b2-fear", skill: "reading", level: 4, type: "rmc", time: 20,
    title: "Why we enjoy being scared", topic: "Psychology and entertainment", voice: "en-GB-SoniaNeural",
    text: [
      "Every October, thousands of people queue for hours and pay good money to be chased through dark corridors by actors dressed as zombies. Horror films regularly top the box office, and roller coasters keep getting taller. At first sight, it makes little sense: fear evolved to keep us away from danger, so why would anyone go looking for it?",
      "Part of the answer lies in what happens in the body. When we are frightened, the brain releases a rush of adrenaline and other chemicals that sharpen the senses and prepare us to fight or run. In a genuinely dangerous situation, that feeling is deeply unpleasant. But when we know, at some level, that we are safe, the same physical reaction can be experienced as excitement – even joy. Researchers who interviewed visitors leaving a haunted house found that many felt calmer and happier afterwards than before they went in.",
      "The key, psychologists say, is control. A horror film can be paused; a scary attraction has an exit. We are, in effect, choosing to experience a strong emotion within clear limits. Some experts compare it to play-fighting among young animals: a way of rehearsing how to react to a threat without facing any real risk. People who regularly watch frightening films, one study suggested, coped slightly better with anxiety during a period of real-world uncertainty.",
      "There is also a social side. Being scared together creates a powerful sense of connection. Friends who scream on the same ride often feel closer afterwards, and couples on a first date may confuse the racing heart caused by a horror film with romantic attraction – a phenomenon that cinemas have quietly profited from for decades.",
      "Not everyone, of course, enjoys the experience. For some people, the line between pleasant excitement and genuine distress is very thin, and personality, past experiences and even mood on the day can make the difference. The thrill also depends on getting the dose right: too little fear and we are bored; too much and we simply want to leave. Designers of scary attractions spend a great deal of time trying to find that balance.",
      "So next time a friend suggests a horror film, you might think of it less as a strange taste and more as a form of training – a safe rehearsal for the moments in life when the fear is real."
    ],
    questions: [
      ["What does the writer find puzzling in the first paragraph?",
        ["That horror films make so much money.", "That people seek out an emotion meant to protect them from danger.", "That roller coasters are becoming more dangerous.", "That people are willing to queue for such a long time."], 1,
        "“Fear evolved to keep us away from danger, so why would anyone go looking for it?” The other options are examples, not the puzzle."],
      ["According to paragraph 2, the same physical reaction to fear",
        ["is always unpleasant, whatever the situation.", "can feel positive when we know we are not in danger.", "makes people less able to concentrate.", "lasts longer when people are with friends."], 1,
        "“When we know, at some level, that we are safe, the same physical reaction can be experienced as excitement – even joy.”"],
      ["Why does the writer mention play-fighting among young animals?",
        ["To show that animals also enjoy horror films.", "To suggest that facing controlled fear may help us prepare for real threats.", "To explain why some people prefer real risks.", "To prove that fear is learned in childhood."], 1,
        "It is “a way of rehearsing how to react to a threat without facing any real risk”."],
      ["What does “a phenomenon that cinemas have quietly profited from” (paragraph 4) refer to?",
        ["Couples mistaking fear for attraction.", "Friends screaming together on rides.", "People watching films alone.", "Audiences leaving before the end."], 0,
        "The phrase follows the description of couples who “confuse the racing heart caused by a horror film with romantic attraction”."],
      ["What point does the writer make in paragraph 5?",
        ["Most people dislike being frightened.", "The enjoyment of fear depends on the person and on the amount of fear.", "Scary attractions are becoming too extreme.", "Mood has no effect on how we react to fear."], 1,
        "Personality, experience and mood matter, and “the thrill also depends on getting the dose right”."],
      ["What is the writer’s main purpose in the article?",
        ["To warn readers about the dangers of horror films.", "To explain why a seemingly strange pleasure makes sense.", "To persuade readers to visit haunted houses.", "To compare people who like fear with those who don’t."], 1,
        "The article answers the opening question with physical, psychological and social explanations, ending with fear as “a safe rehearsal”."]
    ] },

  /* ---------- B2 · multiple matching ---------- */
  { id: "r-b2-young-founders", skill: "reading", level: 4, type: "match", time: 20,
    title: "Young founders", topic: "Business and work", voice: "en-GB-RyanNeural",
    intro: "Four people who started a business before the age of 25 talk about their experience.",
    sections: [
      ["A", "Hana, second-hand clothes app", "The idea came from my own wardrobe: it was full of things I’d worn twice. I built the first version of the app with a friend from my coding course, and for months we did everything ourselves, from customer service to packaging. What I underestimated was how lonely it can be. When things go wrong at two in the morning, there’s no manager to call. These days we have twelve employees, and the thing I’m proudest of isn’t the sales figures – it’s that people actually enjoy working here."],
      ["B", "Callum, bicycle repairs", "I never planned to have a business. I fixed bikes for neighbours as a teenager, and word spread. When the local bike shop closed, people started knocking on my door, so I rented a garage and made it official. My parents were nervous – they wanted me to go to university – and I understand why. The money was terrible for the first two years. But I’ve never once woken up dreading the day, and I don’t think many of my friends can say that."],
      ["C", "Priya, tutoring platform", "We raised a lot of investment very quickly, which sounds like a dream but put enormous pressure on us. Investors wanted growth, and we grew too fast, hiring people before we really knew what they would do. We nearly ran out of money in our third year. Looking back, it was the best lesson I could have had: now I question every expense. If I could give one piece of advice, it would be to grow slowly and never be embarrassed to ask for help."],
      ["D", "Marco, plant-based snacks", "People assume I had rich parents, but I started with my savings from a summer job and a borrowed kitchen. The first batches were a disaster – one even caught fire. What saved us was a small shop owner who agreed to sell our snacks and gave us brutally honest feedback every week. We changed the recipe eleven times. Now we’re in supermarkets across the country, but I still visit that first shop every month."]
    ],
    statements: [
      ["admits that the business grew faster than it should have?", "C", "Priya: “we grew too fast, hiring people before we really knew what they would do”."],
      ["did not originally intend to start a company?", "B", "Callum: “I never planned to have a business.”"],
      ["values the atmosphere at work more than financial success?", "A", "Hana: “the thing I’m proudest of isn’t the sales figures – it’s that people actually enjoy working here.”"],
      ["benefited from repeated criticism of the product?", "D", "Marco: the shop owner gave “brutally honest feedback every week”, and they changed the recipe eleven times."],
      ["mentions that the family disapproved at first?", "B", "Callum’s parents “were nervous – they wanted me to go to university”."],
      ["got the idea from a personal habit?", "A", "Hana’s wardrobe was “full of things I’d worn twice”."],
      ["corrects a common assumption about how they started?", "D", "Marco: “People assume I had rich parents, but I started with my savings…”"],
      ["felt isolated at difficult moments?", "A", "Hana: “I underestimated how lonely it can be.”"],
      ["now pays close attention to spending?", "C", "Priya: “now I question every expense.”"],
      ["stays loyal to someone who helped at the beginning?", "D", "Marco “still visits that first shop every month”."]
    ] },

  /* ---------- C1 · multiple choice ---------- */
  { id: "r-c1-slow-reading", skill: "reading", level: 5, type: "rmc", time: 22,
    title: "In defence of slow reading", topic: "Culture and the mind", voice: "en-GB-SoniaNeural",
    text: [
      "It has become something of a ritual for commentators to lament the death of reading. Yet by most measures we read more words today than at any time in history: messages, headlines, captions, threads. What has changed is not the quantity but the texture of our reading. We skim, we scan, we hop from link to link, and the long, uninterrupted engagement with a single text – once the default – now feels almost like an act of resistance.",
      "Researchers who study reading on screens have noticed a pattern they describe, rather unkindly, as ‘F-shaped’: the eye moves across the first lines, drops down the left-hand side and picks up the occasional phrase. This is an efficient strategy for extracting information from a web page. The trouble begins when the habit migrates to texts that were never designed to be read that way – a novel, a closely argued essay, a contract. Comprehension of detail, studies suggest, suffers most when readers are under the impression that they have understood perfectly well.",
      "Advocates of what has come to be called ‘slow reading’ are careful not to present it as a nostalgic rejection of technology. Their argument is subtler: that deep reading is a skill, and like any skill it weakens with neglect. The cognitive scientist Maryanne Wolf has written about her own unsettling discovery, after years of online reading, that she could no longer settle into a novel she had once loved; she had to retrain herself, page by reluctant page, over the following weeks.",
      "What exactly is lost? Not simply information, its defenders argue, but a particular kind of thinking. Sustained reading obliges us to hold an argument in mind, to notice when it contradicts itself, to tolerate ambiguity long enough for meaning to emerge. Fiction, in particular, invites us to inhabit perspectives other than our own – a capacity some researchers link, cautiously, to empathy. These are not luxuries; they are precisely the capacities a democracy depends on.",
      "None of this means abandoning screens, which are, after all, simply surfaces. A long article can be read slowly on a tablet, and a printed book can be skimmed. The real variable is attention, and attention is shaped by environment: notifications, open tabs, the faint itch to check something. Many slow readers report that the most effective change they made was not technological but spatial – a chair, an hour, a phone in another room.",
      "Perhaps the most persuasive case for slow reading is also the least measurable. Those who rediscover it often describe not an improvement in productivity but something closer to relief: the pleasure of being absorbed, of losing track of time, of a mind no longer pulled in several directions at once. In an economy that competes ferociously for our attention, choosing where to give it may be one of the few freedoms we still fully control."
    ],
    questions: [
      ["What is the writer’s view of claims that reading is dying?",
        ["They are accurate, because people read fewer books.", "They miss the point, because the way we read has changed, not the amount.", "They exaggerate the dangers of social media.", "They are supported by most research."], 1,
        "“What has changed is not the quantity but the texture of our reading.”"],
      ["According to paragraph 2, the main problem with ‘F-shaped’ reading is that",
        ["it is an inefficient way to read web pages.", "readers apply it to texts that need careful attention, often without realising.", "it makes readers lose interest in novels.", "it is mainly used by younger readers."], 1,
        "It is efficient online; “the trouble begins when the habit migrates” to novels or contracts, and readers believe they have understood."],
      ["Why does the writer mention Maryanne Wolf’s experience?",
        ["To show that even experts can lose the ability to read deeply.", "To criticise scientists who read online.", "To prove that novels are harder than other texts.", "To suggest that the skill cannot be recovered."], 0,
        "She “could no longer settle into a novel she had once loved” and had to retrain herself – deep reading weakens with neglect, but can be rebuilt."],
      ["In paragraph 4, the writer suggests that the abilities developed by sustained reading are",
        ["pleasant but not essential.", "important for society as a whole.", "proven to increase empathy.", "mainly useful for studying fiction."], 1,
        "“These are not luxuries; they are precisely the capacities a democracy depends on.” The link to empathy is described as “cautious”."],
      ["What is the main point of paragraph 5?",
        ["Printed books are better than screens.", "The reading environment matters more than the device.", "Technology will soon solve the problem of distraction.", "Slow readers avoid technology completely."], 1,
        "“The real variable is attention, and attention is shaped by environment.”"],
      ["Which word best describes the writer’s attitude in the final paragraph?",
        ["Resigned", "Sceptical", "Quietly persuasive", "Openly critical"], 2,
        "The writer presents slow reading as a source of “relief” and “one of the few freedoms we still fully control” – a gentle but clear argument."]
    ] },

  /* ---------- C1 · gapped text ---------- */
  { id: "r-c1-walkable", skill: "reading", level: 5, type: "gapped", time: 22,
    title: "The city that walks", topic: "Cities and design", voice: "en-GB-RyanNeural",
    text: [
      "For much of the twentieth century, cities were designed around a single, unquestioned assumption: that the future belonged to the car. Streets were widened, pavements narrowed and whole neighbourhoods divided by motorways. [1] Today, a growing number of planners argue that this vision was not merely unattractive but economically and socially costly.",
      "The case for ‘walkable’ cities rests partly on health. People who live in neighbourhoods where shops, schools and parks are within a short walk tend to be more active, often without deliberately exercising at all. [2] Over a population, small differences in daily movement add up to significant reductions in illnesses linked to inactivity.",
      "There is an economic argument too, and it surprises many shopkeepers. [3] Studies in several European cities have found the opposite: pedestrians may spend less per visit than drivers, but they visit more often, and over a month they tend to spend more.",
      "Perhaps the most interesting findings, however, concern something harder to measure. Streets where people walk are streets where people meet – a neighbour at the bakery, a colleague at a crossing. [4] Urban researchers have documented how residents of streets with heavy traffic report fewer friends among their neighbours than those living on quieter roads nearby.",
      "None of this is to suggest that cars can or should be banished. [5] The most successful schemes have tended to proceed gradually, often beginning with temporary changes – a closed road on Sundays, a few planters and benches – that residents can try before anything permanent is built.",
      "Paris, Barcelona and Ljubljana are often cited as examples, but the principle is modest enough to apply anywhere. [6] As one planner put it, the test of a good street is simple: would you let a ten-year-old walk along it alone?"
    ],
    sentences: [
      ["Many traders have long believed that removing parking would drive customers away.", 3, "It introduces the belief that the next sentence contradicts (“the opposite”), and links to “surprises many shopkeepers”."],
      ["These casual encounters, repeated over months and years, are the raw material of community.", 4, "“These casual encounters” refers back to meeting a neighbour or colleague, and leads to research on friendships between neighbours."],
      ["Walking to the station or the corner shop simply becomes part of the routine.", 2, "It explains how people become active “without deliberately exercising”."],
      ["What matters is not grand architecture but the small decisions that make walking easy, safe and pleasant.", 6, "“The principle is modest enough to apply anywhere” is developed here; the final quotation gives a simple test."],
      ["People with disabilities, deliveries and emergency services all depend on vehicles, and plans that ignore them rarely survive.", 5, "It continues “cars can or should be banished” with reasons, before describing gradual, successful schemes."],
      ["Walking, in this model, was something you did between the car park and the front door.", 1, "It summarises the car-centred vision of the first paragraph before “Today…” introduces the change."],
      ["As a result, car ownership in these cities has fallen to almost zero.", 0, "This is the extra sentence: the text never claims that car ownership has disappeared, and paragraph 5 rejects banishing cars."]
    ] }
);
