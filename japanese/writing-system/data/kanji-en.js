/* Writing System — English meanings of the kanji, their words and example sentences.
   kanji.js holds the Italian meanings. With the English interface (the default) these
   English meanings replace them; with the Italian interface the Italian ones stay.
   Format: kanji: [meaning, [word meanings, in the order of kanji.js], [sentence translations]] */
(function () {
  const EN = {
    "一": ["one", ["one (thing)", "one person; alone", "January"], ["One apple, please.", "It's cold in January."]],
    "二": ["two", ["two (things)", "two people", "February"], ["I have two children.", "Let's meet at two."]],
    "三": ["three", ["three (things)", "March", "three people"], ["I bought three sweets.", "I'm going to Japan in March."]],
    "四": ["four", ["four (things)", "April", "four people"], ["There are four people in my family.", "I've been a student since April."]],
    "五": ["five", ["five (things)", "May", "five minutes"], ["I get up at five.", "Please wait five more minutes."]],
    "六": ["six", ["six (things)", "June", "six hundred"], ["It rains a lot in June.", "I get up at six every morning."]],
    "七": ["seven", ["seven (things)", "July", "seven o'clock"], ["I'm going to the seaside in July.", "I get home at seven."]],
    "八": ["eight", ["eight (things)", "August", "greengrocer"], ["It's hot in August.", "I sleep eight hours every day."]],
    "九": ["nine", ["nine (things)", "September", "nine o'clock"], ["School starts in September.", "The lesson is from nine."]],
    "十": ["ten", ["October", "ten minutes", "the tenth (of the month); ten days"], ["I go to bed at ten.", "It takes ten minutes to get to the station."]],
    "百": ["hundred", ["hundred", "three hundred", "a hundred yen"], ["This pen costs a hundred yen.", "There are three hundred students at the school."]],
    "人": ["person", ["person", "Japanese (person)", "three people"], ["That person is a teacher.", "I'm Italian."]],
    "子": ["child", ["child", "girl", "boy"], ["The children are playing in the park.", "That girl is my younger sister."]],
    "女": ["woman", ["woman", "girl", "girl, female student"], ["Who is that woman?", "There are fifteen girls in the class."]],
    "男": ["man", ["man", "boy", "boy, male student"], ["There is a man standing in front of the station.", "There are two boys."]],
    "父": ["father", ["(my) father", "dad; (someone else's) father", "parents (father and mother)"], ["My father is an office worker.", "How is your father?"]],
    "母": ["mother", ["(my) mother", "mum; (someone else's) mother", "mother tongue"], ["My mother is good at cooking.", "Mum, I'm home!"]],
    "友": ["friend", ["friend", "friend (formal)", "best friend"], ["I'm watching a film with a friend.", "He is my best friend."]],
    "日": ["day, sun", ["Sunday", "every day", "Japan"], ["Today is Sunday.", "I study Japanese every day."]],
    "月": ["moon, month", ["moon", "Monday", "this month"], ["What a beautiful moon!", "I go to school on Monday."]],
    "年": ["year", ["this year", "next year", "every year"], ["I'm going to Japan this year.", "Next year I'll be a university student."]],
    "時": ["time, hour", ["time; hours", "what time", "sometimes"], ["What time is it now?", "I don't have time."]],
    "分": ["minute; divide; understand", ["five minutes", "oneself", "to understand"], ["I understand a little Japanese.", "The station is a five-minute walk away."]],
    "半": ["half", ["half", "half past three", "six months"], ["I get up at half past seven.", "I ate half of the cake."]],
    "今": ["now", ["now", "today", "this week"], ["I'm busy now.", "This Saturday is a holiday."]],
    "前": ["front, before", ["in front; before", "morning (a.m.)", "name"], ["Let's meet in front of the station.", "What's your name?"]],
    "後": ["after, behind", ["afternoon (p.m.)", "behind", "after, later"], ["I'm meeting a friend in the afternoon.", "I'll call you later."]],
    "山": ["mountain", ["mountain", "Mount Fuji", "volcano"], ["I want to climb a mountain.", "Fuji is the highest mountain in Japan."]],
    "川": ["river", ["river", "stream", "the Milky Way"], ["The children are swimming in the river.", "This river is very clean."]],
    "水": ["water", ["water", "Wednesday", "swimming"], ["Some water, please.", "There's a swimming lesson on Wednesdays."]],
    "木": ["tree, wood", ["tree", "Thursday", "Kimura (surname)"], ["There is a big tree in the park.", "Thursday is a day off."]],
    "火": ["fire", ["fire", "Tuesday", "fireworks"], ["There's a test on Tuesday.", "I saw fireworks in the summer."]],
    "金": ["gold, money", ["money", "Friday", "gold (colour)"], ["I have no money.", "I'm watching a film on Friday evening."]],
    "土": ["earth, soil", ["Saturday", "earth, land", "land, territory"], ["What are you doing on Saturday?", "This soil is very good."]],
    "気": ["spirit, energy, air", ["weather", "well, healthy", "electricity; light"], ["It's nice weather today, isn't it?", "How are you?"]],
    "上": ["up, above", ["above, on top", "good at, skilful", "rooftop"], ["The book is on the desk.", "You're good at Japanese!"]],
    "下": ["down, below", ["below, under", "underground (subway)", "poor at, unskilful"], ["The cat is under the chair.", "I go to school by underground."]],
    "中": ["inside, middle", ["inside", "China", "all day long"], ["There is a book in the bag.", "It rained all day long."]],
    "大": ["big", ["big", "university", "important, precious"], ["There is a big dog.", "My older brother studies Japanese at university."]],
    "小": ["small", ["small", "primary school", "novel"], ["How much is this small bag?", "My younger sister goes to primary school."]],
    "左": ["left", ["left", "left hand", "left and right"], ["Please turn left at the next corner.", "The bank is to the left of the station."]],
    "右": ["right", ["right", "right hand", "left and right"], ["Please turn right there.", "The toilet is on the right."]],
    "外": ["outside", ["outside", "foreign country", "foreigner"], ["It's cold outside.", "Have you ever been abroad?"]],
    "学": ["study, learn", ["student", "school", "university"], ["I'm a student.", "School starts at half past eight."]],
    "生": ["life, be born", ["teacher", "to be born", "birthday"], ["I was born in Rome.", "Happy birthday!"]],
    "先": ["ahead, previous", ["teacher", "last week", "last month"], ["Sir, I have a question.", "Last week I went to Kyoto."]],
    "本": ["book; origin", ["book", "Japan", "true, really"], ["This book is interesting.", "Really?"]],
    "語": ["language, word", ["Japanese (language)", "English (language)", "word, vocabulary item"], ["I'm studying Japanese.", "Can you speak English?"]],
    "名": ["name", ["name", "famous", "master, expert"], ["Please write your name here.", "Kyoto is a famous city."]],
    "円": ["yen; circle", ["yen", "a hundred yen", "a thousand yen"], ["This apple costs a hundred yen.", "Is a thousand yen enough?"]]
  };
  if ((window.Dojo || {}).lang === "it" || !window.DOJO_KANJI) return;
  window.DOJO_KANJI.list.forEach(k => {
    const e = EN[k.k]; if (!e) return;
    k.mean = e[0];
    k.words.forEach((w, i) => { if (e[1][i]) w[3] = e[1][i]; });
    k.ex.forEach((x, i) => { if (e[2][i]) x[2] = e[2][i]; });
  });
})();
