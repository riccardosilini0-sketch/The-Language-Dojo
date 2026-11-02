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
