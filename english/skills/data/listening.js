/* Skill Development — Listening. Original scripts written for Language Dojo, recorded with
   Azure neural voices (several voices and accents per recording, see tools/audio). */
Skills.add(
  /* ---------- B1 · multiple choice (dialogue) ---------- */
  { id: "l-b1-day-out", skill: "listening", level: 3, type: "lmc", time: 10,
    title: "Planning a day out", topic: "Family and free time",
    intro: "You will hear Emma and her brother Tom planning their father’s birthday.",
    speakers: { Emma: "en-GB-LibbyNeural", Tom: "en-GB-RyanNeural" },
    script: [
      ["Emma", "Tom, have you decided what we’re doing on Saturday for Dad’s birthday?"],
      ["Tom", "Not yet. I was thinking about the science museum. He loved it last time."],
      ["Emma", "Hmm, but that was only a few months ago, and it’s really crowded at weekends. What about a boat trip on the river? They start at ten and go all the way to the castle."],
      ["Tom", "That sounds nice, but have you checked the weather? They said it might rain on Saturday."],
      ["Emma", "Only in the morning. It’s supposed to be sunny after lunch. We could take the afternoon boat at two instead."],
      ["Tom", "OK. And how much is it?"],
      ["Emma", "Twelve pounds each, but it’s eight for students, so it’s cheaper for both of us. Dad pays the full price, of course."],
      ["Tom", "Fine. Shall we have lunch before we go? There’s that Italian place near the station."],
      ["Emma", "Dad’s not keen on pasta, remember? Let’s have a picnic on the boat. They let you bring your own food."],
      ["Tom", "Great idea. I’ll make the sandwiches, and you can get a cake."],
      ["Emma", "Actually, Mum’s already ordered one from the bakery. I’ll pick it up on Friday after work."],
      ["Tom", "Perfect. So what do I need to do?"],
      ["Emma", "Book the tickets online tonight, before they sell out. And don’t say anything to Dad!"]
    ],
    questions: [
      ["Why doesn’t Emma want to go to the science museum?", ["It’s too expensive.", "They went there quite recently.", "Their father didn’t enjoy it."], 1,
        "Emma: “that was only a few months ago”. Tom says their father loved it."],
      ["What time will they take the boat?", ["At ten o’clock.", "At twelve o’clock.", "At two o’clock."], 2,
        "The boats start at ten, but it may rain in the morning, so Emma suggests “the afternoon boat at two”."],
      ["How much does a student ticket cost?", ["Eight pounds.", "Ten pounds.", "Twelve pounds."], 0,
        "“Twelve pounds each, but it’s eight for students.”"],
      ["Where will they have lunch?", ["At an Italian restaurant.", "On the boat.", "At the castle."], 1,
        "Their father doesn’t like pasta, so Emma suggests a picnic on the boat."],
      ["Who will collect the cake?", ["Emma.", "Tom.", "Their mother."], 0,
        "Their mother ordered it, but Emma says: “I’ll pick it up on Friday after work.”"],
      ["What does Tom have to do tonight?", ["Make sandwiches.", "Book the tickets.", "Phone his father."], 1,
        "Emma: “Book the tickets online tonight, before they sell out.” The sandwiches are for Saturday."]
    ] },

  /* ---------- B2 · sentence completion (talk) ---------- */
  { id: "l-b2-puffins", skill: "listening", level: 4, type: "complete", time: 12,
    title: "A summer with the puffins", topic: "Nature and work",
    intro: "You will hear a young biologist called Jenny Hart talking about her work on a small island.",
    speakers: { Jenny: "en-IE-EmilyNeural" },
    script: [
      ["Jenny", "Hello everyone, and thanks for inviting me. I’m Jenny Hart, and for the last three summers I’ve been working as a research assistant on a small island off the west coast of Ireland, studying puffins."],
      ["Jenny", "People often ask me how I got into this. Honestly, it started with a holiday. When I was nineteen I went on a boat trip, saw my first puffin, and that was it. The following year I changed my degree from chemistry to marine biology."],
      ["Jenny", "Life on the island is pretty basic. There are four of us in a stone cottage with no electricity except what we get from a couple of solar panels, so we charge our laptops and cameras on sunny days and hope for the best. Fresh water comes from a tank that collects rain – which, luckily, is never in short supply."],
      ["Jenny", "Our main job is counting the birds and checking their nests. Puffins nest underground, a bit like rabbits, and each pair lays just one egg a year. We use small cameras on long poles to look inside the burrows without disturbing the birds."],
      ["Jenny", "The part that most visitors find surprising is what we do with the fish. Puffins carry fish back to their chicks in their beaks, sometimes ten or more at a time, and occasionally they drop some. We collect those fish and measure them, because their size tells us a lot about the health of the sea around the island."],
      ["Jenny", "Over the past few years we’ve noticed that the fish are getting smaller, which worries us. Smaller fish mean less energy for the chicks, and fewer of them survive."],
      ["Jenny", "The hardest thing about the job isn’t the cold or the wind, though there’s plenty of both. It’s the isolation. A supply boat comes once a fortnight, weather permitting, and sometimes it can’t come at all. I’ve learnt to really appreciate a good book."],
      ["Jenny", "If you’re thinking of doing something similar, my advice is to work as a volunteer first. Most projects need volunteers, and it’s the best way to find out whether you can cope with the conditions."]
    ],
    sentences: [
      ["Jenny saw her first puffin while she was on a", ".", ["boat trip", "boat"], "“When I was nineteen I went on a boat trip, saw my first puffin…”"],
      ["Before marine biology, Jenny studied", ".", ["chemistry"], "“I changed my degree from chemistry to marine biology.”"],
      ["The team’s only electricity comes from", ".", ["solar panels", "two solar panels", "a couple of solar panels"], "“no electricity except what we get from a couple of solar panels”."],
      ["Their fresh water comes from", ".", ["rain", "rainwater", "a tank that collects rain", "a tank"], "“Fresh water comes from a tank that collects rain.”"],
      ["Puffins make their nests", ", like rabbits.", ["underground", "under the ground"], "“Puffins nest underground, a bit like rabbits.”"],
      ["The researchers use", "on long poles to look inside the burrows.", ["cameras", "small cameras"], "“We use small cameras on long poles.”"],
      ["The size of the", "that the birds drop shows how healthy the sea is.", ["fish"], "“We collect those fish and measure them, because their size tells us a lot about the health of the sea.”"],
      ["A supply boat visits the island once every", ".", ["fortnight", "two weeks"], "“A supply boat comes once a fortnight” – a fortnight is two weeks."],
      ["Jenny recommends working as a", "before applying for this kind of job.", ["volunteer"], "“My advice is to work as a volunteer first.”"]
    ] },

  /* ---------- C1 · multiple choice (interview) ---------- */
  { id: "l-c1-sleep", skill: "listening", level: 5, type: "lmc", time: 15,
    title: "What we get wrong about sleep", topic: "Health and science",
    intro: "You will hear a radio interview with Dr Helen Ward, a sleep researcher.",
    speakers: { Presenter: "en-GB-RyanNeural", "Helen Ward": "en-AU-NatashaNeural" },
    script: [
      ["Presenter", "On today’s programme I’m joined by Dr Helen Ward, who has spent the last fifteen years studying sleep. Helen, there’s a widespread belief that we’re sleeping less than previous generations. Is that true?"],
      ["Helen Ward", "It’s a lovely, simple story, and it’s probably wrong – or at least far less certain than people assume. When you look at the historical data carefully, the decline is much smaller than the headlines suggest, and in some countries there’s barely any change at all. What has changed is how much we worry about sleep. Ironically, that anxiety can itself keep people awake."],
      ["Presenter", "So the problem is partly psychological?"],
      ["Helen Ward", "For a lot of people, yes. We see patients who’ve bought every gadget going – sleep trackers, special pillows, apps that analyse their breathing – and the data actually makes things worse. They wake up feeling reasonably rested, then check their phone, see a score of sixty-two out of a hundred and decide they’ve had a terrible night. There’s even a name for it: orthosomnia, an unhealthy obsession with perfect sleep."],
      ["Presenter", "That’s extraordinary. So what would you advise instead?"],
      ["Helen Ward", "Honestly, the most effective changes are rather unglamorous. Getting up at the same time every day, including weekends, does more than almost anything else, because it anchors the body clock. And daylight in the morning matters enormously – even twenty minutes outside on a cloudy day gives you far more light than a brightly lit office."],
      ["Presenter", "Many listeners will want to know about screens before bed. Is the blue light really so harmful?"],
      ["Helen Ward", "The effect of the light itself turns out to be fairly modest; most screens simply aren’t bright enough to shift the body clock very much. The bigger issue is what we’re doing on them. An exciting game or a stressful email keeps the brain alert in a way that reading a novel doesn’t. So I’d say the content matters more than the colour of the light."],
      ["Presenter", "And what about naps? Some people swear by them, others say they ruin the night."],
      ["Helen Ward", "Both can be true. A short nap – twenty minutes or so, early in the afternoon – can improve alertness without affecting night-time sleep. The problems start when people nap for over an hour, or late in the day, because they’re using up the pressure to sleep that they need at bedtime."],
      ["Presenter", "Finally, Helen, what’s the one thing you wish everyone understood about sleep?"],
      ["Helen Ward", "That a bad night now and again is completely normal and does far less damage than people fear. The body is remarkably good at catching up. If you lie awake occasionally, the worst thing you can do is panic about it."]
    ],
    questions: [
      ["What does Helen say about the idea that people sleep less than in the past?",
        ["It is supported by strong historical evidence.", "It is less clear-cut than is commonly believed.", "It is true only in certain countries.", "It explains why people now worry about sleep."], 1,
        "“It’s probably wrong – or at least far less certain than people assume.” The decline is “much smaller than the headlines suggest”."],
      ["According to Helen, some people who use sleep trackers",
        ["can no longer sleep without them.", "do not understand how the devices work.", "trust the data more than their own sense of how they slept.", "sleep better but feel more tired."], 2,
        "They wake up “feeling reasonably rested”, but a low score makes them decide they had “a terrible night”."],
      ["Which change does Helen consider among the most effective?",
        ["Waking up at the same time every day.", "Going to bed earlier at weekends.", "Using bright artificial light in the morning.", "Exercising outdoors in the evening."], 0,
        "“Getting up at the same time every day, including weekends, does more than almost anything else.” She recommends daylight, not artificial light."],
      ["What is Helen’s view of using screens before bed?",
        ["The light they produce is the main problem.", "What people do on them matters more than the light.", "Reading on a screen is as relaxing as reading a book.", "Modern screens are brighter than older ones."], 1,
        "“The content matters more than the colour of the light.”"],
      ["According to Helen, naps cause problems when they",
        ["are taken early in the afternoon.", "last about twenty minutes.", "are too long or taken too late.", "become a daily habit."], 2,
        "“The problems start when people nap for over an hour, or late in the day.”"],
      ["What is Helen’s main message at the end of the interview?",
        ["An occasional bad night is nothing to worry about.", "People should catch up on sleep at weekends.", "Lying awake is often a sign of a sleep disorder.", "Most people need more sleep than they think."], 0,
        "“A bad night now and again is completely normal… the worst thing you can do is panic about it.”"]
    ] }
);
