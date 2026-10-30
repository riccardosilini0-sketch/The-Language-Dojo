/* Japanese Dojo — kana data (Hepburn romanisation).
   Katakana are generated from hiragana (same sounds, Unicode offset 0x60), plus katakana-only extended sounds.
   belt: practice level for each group (1 White … 6 Black). */
(function () {
  const toKata = s => s.replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
  // rows: [id, label, [[kana, romaji] | null, …]]  (null = empty cell in the gojūon grid)
  const basic = [
    ["a", "Vowels", [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]]],
    ["k", "K", [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]]],
    ["s", "S", [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]]],
    ["t", "T", [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]]],
    ["n", "N", [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]]],
    ["h", "H", [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]]],
    ["m", "M", [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]]],
    ["y", "Y", [["や", "ya"], null, ["ゆ", "yu"], null, ["よ", "yo"]]],
    ["r", "R", [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]]],
    ["w", "W", [["わ", "wa"], null, null, null, ["を", "o"]]],
    ["nn", "N (final)", [["ん", "n"], null, null, null, null]]
  ];
  const dakuten = [
    ["g", "G", [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]]],
    ["z", "Z", [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]]],
    ["d", "D", [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]]],
    ["b", "B", [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]]],
    ["p", "P (handakuten)", [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]]]
  ];
  const yoon = [
    ["ky", "KY", [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]]],
    ["sh", "SH", [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]]],
    ["ch", "CH", [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]]],
    ["ny", "NY", [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]]],
    ["hy", "HY", [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]]],
    ["my", "MY", [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]]],
    ["ry", "RY", [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]]],
    ["gy", "GY", [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]]],
    ["j", "J", [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]]],
    ["by", "BY", [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]]],
    ["py", "PY", [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]]]
  ];
  const kataRows = rows => rows.map(([id, l, cells]) => [id, l, cells.map(c => c && [toKata(c[0]), c[1]])]);
  const extended = [
    ["ex1", "SH · J · CH", [["シェ", "she"], ["ジェ", "je"], ["チェ", "che"]]],
    ["ex2", "T · D", [["ティ", "ti"], ["ディ", "di"], ["トゥ", "tu"], ["ドゥ", "du"], ["デュ", "dyu"]]],
    ["ex3", "F", [["ファ", "fa"], ["フィ", "fi"], ["フェ", "fe"], ["フォ", "fo"]]],
    ["ex4", "W", [["ウィ", "wi"], ["ウェ", "we"], ["ウォ", "wo"]]],
    ["ex5", "V", [["ヴァ", "va"], ["ヴィ", "vi"], ["ヴ", "vu"], ["ヴェ", "ve"], ["ヴォ", "vo"]]]
  ];
  window.DOJO_KANA = {
    hiragana: {
      sections: [
        { id: "basic", title: "Gojūon", subtitle: "The 46 basic characters", rows: basic, cols: 5 },
        { id: "dakuten", title: "Dakuten and handakuten", subtitle: "Voiced sounds: two dots (゛) or a small circle (゜)", rows: dakuten, cols: 5 },
        { id: "yoon", title: "Yōon", subtitle: "Contracted sounds: a character + small ゃ, ゅ or ょ", rows: yoon, cols: 3 }
      ],
      belts: { a: 1, k: 1, s: 1, t: 1, n: 1, h: 1, m: 1, y: 1, r: 1, w: 1, nn: 1, g: 2, z: 2, d: 2, b: 2, p: 2, ky: 2, sh: 2, ch: 2, ny: 2, hy: 2, my: 2, ry: 2, gy: 2, j: 2, by: 2, py: 2 },
      special: {
        title: "Double consonants and long vowels",
        points: [
          ["Small っ doubles the next consonant", [["きって", "kitte", "stamp · francobollo"], ["がっこう", "gakkō", "school · scuola"], ["ざっし", "zasshi", "magazine · rivista"]]],
          ["Long vowels: a vowel is held for twice as long", [["おかあさん", "okāsan", "mother · mamma"], ["おにいさん", "onīsan", "older brother · fratello maggiore"], ["くうき", "kūki", "air · aria"], ["おねえさん", "onēsan", "older sister · sorella maggiore"], ["おとうさん", "otōsan", "father · papà"]]]
        ]
      }
    },
    katakana: {
      sections: [
        { id: "basic", title: "Gojūon", subtitle: "The 46 basic characters", rows: kataRows(basic), cols: 5 },
        { id: "dakuten", title: "Dakuten and handakuten", subtitle: "Voiced sounds: two dots (゛) or a small circle (゜)", rows: kataRows(dakuten), cols: 5 },
        { id: "yoon", title: "Yōon", subtitle: "Contracted sounds: a character + small ャ, ュ or ョ", rows: kataRows(yoon), cols: 3 },
        { id: "extended", title: "Extended sounds", subtitle: "Combinations used only to write foreign words", rows: extended, cols: 5 }
      ],
      belts: { a: 2, k: 2, s: 2, t: 2, n: 2, h: 3, m: 3, y: 3, r: 3, w: 3, nn: 3, g: 3, z: 3, d: 3, b: 3, p: 3, ky: 3, sh: 3, ch: 3, ny: 3, hy: 3, my: 3, ry: 3, gy: 3, j: 3, by: 3, py: 3, ex1: 3, ex2: 3, ex3: 3, ex4: 3, ex5: 3 },
      special: {
        title: "Double consonants and long vowels",
        points: [
          ["Small ッ doubles the next consonant", [["ベッド", "beddo", "bed · letto"], ["サッカー", "sakkā", "football · calcio"], ["ポケット", "poketto", "pocket · tasca"]]],
          ["The long vowel mark ー lengthens the sound before it", [["コーヒー", "kōhī", "coffee · caffè"], ["ノート", "nōto", "notebook · quaderno"], ["スーパー", "sūpā", "supermarket · supermercato"]]]
        ]
      },
      // loanwords: [katakana, rōmaji, English, Italian]
      words: [
        ["コーヒー", "kōhī", "coffee", "caffè"], ["テレビ", "terebi", "television", "televisione"], ["コンピューター", "konpyūtā", "computer", "computer"],
        ["イタリア", "Itaria", "Italy", "Italia"], ["ローマ", "Rōma", "Rome", "Roma"], ["アメリカ", "Amerika", "America", "America"],
        ["パン", "pan", "bread", "pane"], ["アイスクリーム", "aisukurīmu", "ice cream", "gelato"], ["ホテル", "hoteru", "hotel", "albergo"],
        ["タクシー", "takushī", "taxi", "taxi"], ["レストラン", "resutoran", "restaurant", "ristorante"], ["カメラ", "kamera", "camera", "macchina fotografica"],
        ["ゲーム", "gēmu", "game", "videogioco"], ["サッカー", "sakkā", "football", "calcio"], ["ピザ", "piza", "pizza", "pizza"],
        ["スパゲッティ", "supagetti", "spaghetti", "spaghetti"], ["ジュース", "jūsu", "juice", "succo"], ["バス", "basu", "bus", "autobus"],
        ["メール", "mēru", "email", "e-mail"], ["スマートフォン", "sumātofon", "smartphone", "smartphone"], ["チョコレート", "chokorēto", "chocolate", "cioccolato"],
        ["ノート", "nōto", "notebook", "quaderno"], ["パーティー", "pātī", "party", "festa"], ["ファッション", "fasshon", "fashion", "moda"]
      ]
    }
  };
})();
