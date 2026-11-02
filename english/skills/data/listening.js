/* Skill Development — Listening.
   Activities based on authentic videos, played with the official embedded player (never downloaded
   or copied). The questions are written for Language Dojo; the transcript stays on the source site.
   TED Talks: © TED Conferences, licensed under CC BY-NC-ND 4.0 (non-commercial use, video unaltered).
   Times in the explanations refer to the official transcript on TED.com. */
const TED = (slug, speaker, title) => ({ provider: "youtube", speaker, title, source: "TED",
  page: `https://www.ted.com/talks/${slug}`, transcript: `https://www.ted.com/talks/${slug}/transcript`,
  credit: "© TED Conferences, available at TED.com. Licensed under CC BY-NC-ND 4.0." });

Skills.add(
  /* ---------- B1 · true or false · a short talk ---------- */
  { id: "v-b1-30-days", skill: "listening", level: 3, type: "vtf", time: 12,
    title: "Try something new for 30 days", topic: "Habits and challenges",
    intro: "A short, light-hearted talk by Matt Cutts, a software engineer, about setting small personal challenges.",
    video: Object.assign(TED("matt_cutts_try_something_new_for_30_days", "Matt Cutts", "Try something new for 30 days"), { id: "UNP03fDSj1U", start: 0, end: 200 }),
    statements: [
      ["Matt started his challenges because he felt his life had become boring and repetitive.", true, "He says he “felt like I was stuck in a rut” – a rut is a boring routine you can’t get out of.", "0:03"],
      ["He thinks 30 days is enough time to start or stop a habit.", true, "“30 days is just about the right amount of time to add a new habit or subtract a habit.”", "0:20"],
      ["During the challenges, the months seemed to pass more quickly than before.", false, "The opposite: “instead of the months flying by, forgotten, the time was much more memorable.”", "0:34"],
      ["One of his challenges was to take a photo every day for a month.", true, "“A challenge I did to take a picture every day for a month.”", "0:45"],
      ["Before the challenges, he already cycled to work.", false, "He went “from desk-dwelling computer nerd to the kind of guy who bikes to work” – the challenges changed him.", "0:55"],
      ["He climbed Mount Kilimanjaro before he started the challenges.", false, "He climbed it last year and says: “I would never have been that adventurous before I started my 30-day challenges.”", "1:08"],
      ["To write a 50,000-word novel in a month, you need to write about 1,667 words a day.", true, "“All you have to do is write 1,667 words a day for a month.”", "1:19"],
      ["He thinks the novel he wrote is very good.", false, "“Now is my book the next great American novel? No. I wrote it in a month. It’s awful.”", "1:50"],
      ["He learned that small changes are more likely to last than big, crazy challenges.", true, "Small, sustainable changes “were more likely to stick”; big challenges are fun “but they’re less likely to stick”.", "2:21"],
      ["After 30 days without sugar, he continued to avoid sugar.", false, "The joke about “day 31” (with a picture that makes the audience laugh) shows that he ate a lot of sugar again – an example of a big change that didn’t stick.", "2:35"]
    ] },

  /* ---------- B2 · matching · first part of a talk ---------- */
  { id: "v-b2-speaking-sins", skill: "listening", level: 4, type: "vmatch", time: 12,
    title: "Seven deadly sins of speaking", topic: "Communication",
    intro: "In the first part of his talk, sound expert Julian Treasure lists seven habits that make people stop listening to us.",
    video: Object.assign(TED("julian_treasure_how_to_speak_so_that_people_want_to_listen", "Julian Treasure", "How to speak so that people want to listen"), { id: "eIho2S0ZahI", start: 0, end: 155 }),
    ask: "Match each habit with the description Julian gives. There is one description you do not need.",
    options: [
      ["A", "presenting opinions as if they were facts"],
      ["B", "making listeners feel that they are being assessed"],
      ["C", "interrupting people before they have finished"],
      ["D", "blaming other people instead of taking responsibility"],
      ["E", "speaking badly about someone who is not there"],
      ["F", "spreading unhappiness about things like the weather"],
      ["G", "seeing the bad side of everything, even a date"],
      ["H", "overstating things until it turns into lying"]
    ],
    items: [
      ["gossip", "E", "“Speaking ill of somebody who’s not present.”", "0:40"],
      ["judging", "B", "“It’s very hard to listen to somebody if you know that you’re being judged and found wanting.”", "0:53"],
      ["negativity", "G", "His mother answered “It’s October 1 today” with “I know, isn’t it dreadful?”", "1:03"],
      ["complaining", "F", "He calls it “viral misery” and the national sport of the UK: “We complain about the weather…”", "1:22"],
      ["excuses", "D", "Some people “pass it on to everybody else and don’t take responsibility for their actions.”", "1:39"],
      ["embroidery (exaggeration)", "H", "Exaggeration “demeans our language” and “becomes lying”.", "1:54"],
      ["dogmatism", "A", "“The confusion of facts with opinions.” Description C is not mentioned in the talk.", "2:15"]
    ] },

  /* ---------- B2 · note completion · second part of the same talk ---------- */
  { id: "v-b2-speaking-tools", skill: "listening", level: 4, type: "vcomplete", time: 15,
    title: "The tools of a powerful voice", topic: "Communication",
    intro: "In the second part of the talk, Julian Treasure explains four foundations of powerful speech and the tools of the voice.",
    video: Object.assign(TED("julian_treasure_how_to_speak_so_that_people_want_to_listen", "Julian Treasure", "How to speak so that people want to listen"), { id: "eIho2S0ZahI", start: 150, end: 440 }),
    sentences: [
      ["Here, the word “hail” means to greet or", "enthusiastically.", ["acclaim"], "“To greet or acclaim enthusiastically.”", "2:32"],
      ["Honesty means being true in what you say, being straight and", ".", ["clear"], "“Being true in what you say, being straight and clear.”", "3:10"],
      ["A friend described authenticity as “standing in your own", "”.", ["truth"], "“Standing in your own truth.”", "3:10"],
      ["Integrity means doing what you say and being somebody people can", ".", ["trust"], "“Being somebody people can trust.”", "3:10"],
      ["Love, in this sense, means wishing people", ".", ["well"], "“I do mean wishing people well.”", "3:10"],
      ["We tend to vote for politicians with", "voices, because we associate depth with power.", ["lower", "deeper", "low", "deep"], "“We vote for politicians with lower voices.”", "4:29"],
      ["Research shows that we prefer voices that are rich, smooth and warm, like", ".", ["hot chocolate", "chocolate"], "“Rich, smooth, warm, like hot chocolate.”", "5:07"],
      ["People who speak all on one", "are hard to listen to.", ["note"], "“People who speak all on one note… That’s where the word ‘monotonic’ comes from.”", "5:30"],
      ["There is nothing wrong with silence: we don’t have to fill it with", ".", ["ums and ahs", "um and ah", "ums and ahs", "ums", "um"], "“We don’t have to fill it with ums and ahs.”", "6:13"]
    ] },

  /* ---------- C1 · multiple choice · ideas and attitude ---------- */
  { id: "v-c1-procrastination", skill: "listening", level: 5, type: "vmc", time: 18,
    title: "Two kinds of procrastination", topic: "Psychology",
    intro: "Writer Tim Urban describes the procrastinator’s mind with three characters: the Rational Decision-Maker, the Instant Gratification Monkey and the Panic Monster. Watch the final part of his talk.",
    video: Object.assign(TED("tim_urban_inside_the_mind_of_a_master_procrastinator", "Tim Urban", "Inside the mind of a master procrastinator"), { id: "arj7oStGLkU", start: 565, end: 850 }),
    questions: [
      ["According to Urban, what does the Panic Monster explain?",
        ["Why procrastinators can suddenly work extremely hard just before a deadline.", "Why some people never procrastinate at all.", "Why procrastinators prefer easy, enjoyable tasks.", "Why deadlines make most people anxious."], 0,
        "The Panic Monster explains how someone could spend two weeks unable to start a paper “and then miraculously find the unbelievable work ethic to stay up all night”.", "9:28"],
      ["What struck him about the emails he received after writing about procrastination?",
        ["Most of them came from PhD students.", "Many readers disagreed with his theory.", "Their serious tone contrasted with the light tone of his post.", "The writers asked him for practical advice."], 2,
        "“What struck me was the contrast between the light tone of the post and the heaviness of these emails.” PhD students are mentioned as a joke, not as the main point.", "10:16"],
      ["What is special about the second kind of procrastination?",
        ["It only affects people in creative or entrepreneurial careers.", "It happens when there is no deadline, so the Panic Monster never appears.", "It is easier to overcome than the first kind.", "It only concerns people’s work, not their private lives."], 1,
        "In non-deadline situations “the Panic Monster doesn’t show up”. His examples include family, health and relationships, not only careers.", "10:47"],
      ["Why is long-term procrastination particularly damaging, according to Urban?",
        ["It is usually noticed and criticised by other people.", "It is suffered quietly and its effects keep growing.", "It always leads people to abandon their careers.", "It is the subject of very little scientific research."], 1,
        "Its effects “just extend outward forever”, and “it’s usually suffered quietly and privately”.", "11:31"],
      ["How does he describe the frustration of the people who wrote to him?",
        ["They had failed to achieve their dreams.", "They had achieved their dreams too late.", "They had never even started to pursue their dreams.", "They had chosen the wrong dreams."], 2,
        "“The frustration is not that they couldn’t achieve their dreams; it’s that they weren’t even able to start chasing them.”", "11:31"],
      ["What “epiphany” does he share near the end?",
        ["Non-procrastinators probably don’t exist.", "Deadlines are the main cause of unhappiness.", "The Monkey can be removed with practice.", "Most people procrastinate only at work."], 0,
        "“I don’t think non-procrastinators exist… I think all of you are procrastinators.”", "12:28"],
      ["What is the purpose of the Life Calendar he shows?",
        ["To help people plan their work week by week.", "To make people realise how limited their time is.", "To show how much time people waste online.", "To prove that procrastination gets worse with age."], 1,
        "One box per week of a 90-year life: “That’s not that many boxes”, so we need to think about what we are procrastinating on.", "12:54"]
    ] }
);

Skills.add(
  /* ---------- B1 · multiple choice · a demonstration ---------- */
  { id: "v-b1-shoes", skill: "listening", level: 3, type: "vmc", time: 10,
    title: "How to tie your shoes", topic: "Everyday life",
    intro: "In this very short talk, Terry Moore explains that most people tie their shoes the wrong way – and shows a better method.",
    video: Object.assign(TED("terry_moore_how_to_tie_your_shoes", "Terry Moore", "How to tie your shoes"), { id: "zAFcV7zuUDA", start: 0, end: 185 }),
    questions: [
      ["What does Terry Moore say about the TED audience at the start?",
        ["They are intelligent, but many tie their shoes incorrectly.", "They are not interested in practical skills.", "Most of them wear expensive shoes.", "They already know the method he will show."], 0,
        "He calls them “effective, intelligent…” but believes “many, if not most, of you are actually tying your shoes incorrectly.”", "0:04"],
      ["What made him discover the problem?",
        ["A friend laughed at his shoes.", "He bought expensive shoes whose laces kept coming undone.", "He read an article about knots.", "His children taught him a new method."], 1,
        "His new, expensive shoes had round nylon laces and “I couldn’t keep them tied.”", "0:23"],
      ["Who told him he was tying his shoes wrong?",
        ["His wife.", "A shoe designer.", "The owner of the shop.", "A TED speaker."], 2,
        "He went back to the store, and the owner said: “Oh, you’re tying them wrong.”", "0:23"],
      ["How old was he when he learned the right way?",
        ["About 15.", "About 30.", "About 50.", "About 70."], 2,
        "“I would have thought that, by age 50, one of the life skills that I had really nailed was tying my shoes.”", "0:23"],
      ["How can you tell the weak form of the knot?",
        ["The bow points along the length of the shoe.", "The bow points across the shoe.", "The laces are different lengths.", "The knot is very small."], 0,
        "In the weak form, “the bow will orient itself down the long axis of the shoe.” The strong form points across (the transverse axis).", "1:18"],
      ["How do you make the strong form of the knot?",
        ["You tie the knot twice.", "You use flat laces instead of round ones.", "You go the other way around the loop.", "You start with the other foot."], 2,
        "“Simply go the other direction around the bow.”", "1:33"],
      ["What is his final message?",
        ["Small changes can have big effects.", "Expensive shoes are not worth it.", "Children should learn knots at school.", "You should always ask shop assistants for help."], 0,
        "“Sometimes a small advantage someplace in life can yield tremendous results someplace else.”", "2:22"]
    ] },

  /* ---------- B1 · note completion · numbers and facts ---------- */
  { id: "v-b1-goals", skill: "listening", level: 3, type: "vcomplete", time: 12,
    title: "Keep your goals to yourself", topic: "Psychology",
    intro: "Derek Sivers, an entrepreneur and musician, explains why telling people about your goals might be a bad idea.",
    video: Object.assign(TED("derek_sivers_keep_your_goals_to_yourself", "Derek Sivers", "Keep your goals to yourself"), { id: "NHopJHSlVo4", start: 0, end: 185 }),
    sentences: [
      ["According to Sivers, telling someone your goal makes it", "likely to happen.", ["less"], "“Telling someone your goal makes it less likely to happen.”", "0:32"],
      ["When people acknowledge your goal, the mind is tricked into feeling that the work is already", ".", ["done", "finished"], "“The mind is kind of tricked into feeling that it’s already done.”", "0:32"],
      ["The founder of social psychology called this effect", "in 1926.", ["substitution"], "“1926: Kurt Lewin, founder of social psychology, called this ‘substitution.’”", "1:19"],
      ["The 2009 tests involved", "people.", ["163", "one hundred and sixty-three", "a hundred and sixty-three"], "“163 people across four separate tests.”", "1:37"],
      ["Everyone was given", "minutes of work towards their goal.", ["45", "forty-five"], "“Everyone was given 45 minutes of work.”", "1:37"],
      ["People who had announced their goal stopped after", "minutes, on average.", ["33", "thirty-three"], "“Those who had announced it quit after only 33 minutes, on average.”", "1:37"],
      ["They also felt much", "to achieving their goal.", ["closer"], "They “said that they felt much closer to achieving their goal.”", "1:37"],
      ["If you must talk about a goal, say it in a way that gives you no", ".", ["satisfaction"], "“State it in a way that gives you no satisfaction.”", "2:16"],
      ["His example: “I really want to run this marathon, so I need to train", "times a week.”", ["five", "5"], "“I need to train five times a week…”", "2:16"]
    ] },

  /* ---------- B2 · true or false · an argument ---------- */
  { id: "v-b2-less-stuff", skill: "listening", level: 4, type: "vtf", time: 12,
    title: "Less stuff, more happiness", topic: "Lifestyle",
    intro: "Designer Graham Hill asks whether owning less – and living in less space – could make us happier.",
    video: Object.assign(TED("graham_hill_less_stuff_more_happiness", "Graham Hill", "Less stuff, more happiness"), { id: "L8YJtvHGeUU", start: 0, end: 340 }),
    statements: [
      ["Americans have about three times as much living space as fifty years ago.", true, "“We Americans have about three times the amount of space we did 50 years ago.”", "0:23"],
      ["Because homes are bigger, people no longer need extra storage space.", false, "The opposite: personal storage has become a 22-billion-dollar industry, because “we need even more space”.", "0:23"],
      ["According to Hill, people’s happiness has increased over the same fifty years.", false, "Happiness levels have “flat-lined” – they have not risen.", "0:23"],
      ["He thinks experiences like travelling or camping show us the benefits of having less.", true, "College dorms, hotel rooms, camping – “this gave you a little more freedom, a little more time.”", "1:10"],
      ["He designed his Manhattan apartment entirely by himself.", false, "He crowd-sourced the design: there were “over 300 entries from around the world”.", "1:50"],
      ["By buying a smaller apartment, he saved a large amount of money.", true, "“By buying a space that was 420 sq. ft. instead of 600, immediately I’m saving 200 grand.”", "1:50"],
      ["His first piece of advice is to think before buying something new.", true, "He says we must “edit ruthlessly” and “stem the inflow: we need to think before we buy.”", "2:44"],
      ["He believes we should never buy expensive things.", false, "“By all means, we should buy and own some great stuff” – things we will love for years.", "2:44"],
      ["He recommends furniture and spaces that can be used in several different ways.", true, "Multifunctional spaces: a dining table that becomes a bed, a coffee table that grows to seat ten.", "3:49"],
      ["He thinks everyone should live in a space as small as his.", false, "“I’m not saying that we all need to live in 420 sq. ft.”", "4:31"]
    ] },

  /* ---------- B2 · matching · rules ---------- */
  { id: "v-b2-conversation", skill: "listening", level: 4, type: "vmatch", time: 15,
    title: "Ten ways to have a better conversation", topic: "Communication",
    intro: "Radio host Celeste Headlee shares the rules she follows as a professional interviewer. Watch the part of her talk where she explains them.",
    video: Object.assign(TED("celeste_headlee_10_ways_to_have_a_better_conversation", "Celeste Headlee", "10 ways to have a better conversation"), { id: "R1vskiVDwl4", start: 240, end: 660 }),
    ask: "Match each rule with the advice or example Celeste gives. There is one piece of advice you do not need.",
    options: [
      ["A", "Write a blog if you only want to state your opinion."],
      ["B", "Don’t start talking about your own similar experience."],
      ["C", "Ask questions that begin with who, what, when, where, why or how."],
      ["D", "Let thoughts come into your mind – and go out again."],
      ["E", "Be fully present, not half in and half out."],
      ["F", "Always prepare interesting topics before you meet someone."],
      ["G", "People don’t care about years, names and dates."],
      ["H", "We listen with the intent to reply, not to understand."]
    ],
    items: [
      ["Don’t multitask.", "E", "“If you want to get out of the conversation, get out… but don’t be half in it and half out of it.”", "4:19"],
      ["Don’t pontificate.", "A", "“If you want to state your opinion without any opportunity for response… write a blog.”", "4:41"],
      ["Use open-ended questions.", "C", "“Start your questions with who, what, when, where, why or how.”", "5:54"],
      ["Go with the flow.", "D", "“Thoughts will come into your mind and you need to let them go out of your mind.”", "6:32"],
      ["Don’t equate your experience with theirs.", "B", "If they lost a family member, “don’t start talking about the time you lost a family member.”", "7:38"],
      ["Stay out of the weeds.", "G", "“People don’t care about the years, the names, the dates… What they care about is you.”", "8:38"],
      ["Listen.", "H", "Quoting Stephen Covey: “We listen with the intent to reply.” Option F is the kind of standard advice she tells us to forget.", "9:00"]
    ] },

  /* ---------- C1 · note completion · argument and humour ---------- */
  { id: "v-c1-creativity", skill: "listening", level: 5, type: "vcomplete", time: 18,
    title: "Do schools kill creativity?", topic: "Education",
    intro: "In one of the most watched TED Talks ever, educationalist Ken Robinson argues that schools educate children out of their creativity. Watch the central part of his talk.",
    video: Object.assign(TED("sir_ken_robinson_do_schools_kill_creativity", "Ken Robinson", "Do schools kill creativity?"), { id: "iG9CE55wbtY", start: 310, end: 670 }),
    sentences: [
      ["What children’s stories have in common is that kids will take a", ".", ["chance"], "“Kids will take a chance. If they don’t know, they’ll have a go.”", "5:14"],
      ["If you’re not prepared to be", ", you’ll never come up with anything original.", ["wrong"], "“If you’re not prepared to be wrong, you’ll never come up with anything original.”", "5:14"],
      ["Companies and education systems", "mistakes.", ["stigmatize", "stigmatise"], "“We stigmatize mistakes… mistakes are the worst thing you can make.”", "5:14"],
      ["Picasso said that all children are born", ".", ["artists"], "“All children are born artists. The problem is to remain an artist as we grow up.”", "5:57"],
      ["Robinson believes we don’t grow into creativity – we grow", "of it.", ["out"], "“We don’t grow into creativity, we grow out of it. Or rather, we get educated out of it.”", "5:57"],
      ["At the top of every education system are mathematics and", ".", ["languages"], "“At the top are mathematics and languages, then the humanities. At the bottom are the arts.”", "8:19"],
      ["Within the arts, art and music usually have higher status than drama and", ".", ["dance"], "“Art and music are normally given a higher status in schools than drama and dance.”", "8:19"],
      ["As children grow up, we educate them progressively from the", "up.", ["waist"], "“We start to educate them progressively from the waist up. And then we focus on their heads.”", "9:06"],
      ["Judging by its results, the purpose of public education seems to be to produce university", ".", ["professors"], "“The whole purpose of public education throughout the world is to produce university professors.”", "9:15"]
    ] },

  /* ---------- C1 · multiple choice · ideas and evidence ---------- */
  { id: "v-c1-polarized", skill: "listening", level: 5, type: "vmc", time: 15,
    title: "We have lost the balance", topic: "Society and communication",
    intro: "Watch the opening of Celeste Headlee’s talk, where she explains why she thinks good conversation has become rare.",
    video: Object.assign(TED("celeste_headlee_10_ways_to_have_a_better_conversation", "Celeste Headlee", "10 ways to have a better conversation"), { id: "R1vskiVDwl4", start: 0, end: 260 }),
    questions: [
      ["Why does she mention the advice to “stick to the weather and your health”?",
        ["To show that even these ‘safe’ topics now cause arguments.", "To recommend them as the best topics for strangers.", "To criticise old-fashioned films.", "To introduce her own research on health."], 0,
        "With climate change and anti-vaccine debates, “those subjects are not safe either.”", "0:24"],
      ["What did the Pew Research study find?",
        ["Americans are more divided than ever before.", "Most Americans enjoy political debates.", "People choose friends with different opinions.", "Young people are less polarized than adults."], 0,
        "“We are more polarized, we are more divided, than we ever have been in history.”", "0:37"],
      ["According to Headlee, what does our reluctance to compromise show?",
        ["That we are not listening to each other.", "That politics has become less important.", "That people have stronger values.", "That conversations have become shorter."], 0,
        "“We’re less likely to compromise, which means we’re not listening to each other.”", "0:37"],
      ["What point does she make about teenagers?",
        ["Many prefer texting friends to talking face to face.", "They send fewer messages than adults.", "They are better at conversation than their parents.", "They rarely use smartphones at school."], 0,
        "About a third send more than a hundred texts a day, and many “are more likely to text their friends than they are to talk to them face to face.”", "1:26"],
      ["What did the teacher Paul Barnwell conclude?",
        ["Conversational skill may be the most neglected thing schools fail to teach.", "Students should be allowed to use notes when speaking.", "Screens improve students’ communication skills.", "Conversation cannot really be taught."], 0,
        "“Conversational competence might be the single most overlooked skill we fail to teach.”", "2:03"],
      ["Why does she reject the usual advice such as nodding and smiling?",
        ["If you are really paying attention, you don’t need to show it artificially.", "It is impolite in many cultures.", "It makes conversations too long.", "Interviewers never do it."], 0,
        "“There is no reason to learn how to show you’re paying attention if you are in fact paying attention.”", "3:18"]
    ] }
);
