/* English Basics — lessons (3): object pronouns, possessive adjectives and pronouns, the possessive 's.
   Format: see data/lessons.js. */

/* ============================== OBJECT PRONOUNS AND POSSESSION ============================== */
L({ id: "object-pronouns", group: "possession", belt: 1, title: "Object pronouns", short: "Me, you, him, her, it, us, them",
  intro: "[me, you, him, her, it, us, them] are object pronouns: they come after a verb or after a preposition. In Italian these pronouns often go before the verb (ti amo); in English they always go after it (I love [you]).",
  form: [
    "Subject → object: I → [me], you → [you], he → [him], she → [her], it → [it], we → [us], they → [them].",
    "After a verb: I know [him]. Look at [her]. Help [us]!",
    "After a preposition: with [me], for [you], to [him], about [them], next to [us].",
    "Position: the object pronoun comes [after] the verb: I love [you] (ti amo), not ~~I you love~~.",
    "Alone, and after be, we use the object form: Who's there? – It's [me]! · ‘I'm tired.’ – ‘[Me] too.’"
  ],
  table: [["Subject", "Object", "Example", "Italian"],
    ["I", "me", "Help [me]!", "mi, me"],
    ["you", "you", "This is for [you].", "ti, te, vi, voi, La"],
    ["he", "him", "I know [him].", "lo, gli, lui"],
    ["she", "her", "Look at [her]!", "la, le, lei"],
    ["it", "it", "I love [it]!", "lo, la"],
    ["we", "us", "Wait for [us]!", "ci, noi"],
    ["they", "them", "Sit with [them].", "li, le, loro"]],
  uses: [
    ["After a verb", "", [["This song is great! Listen to [it]!", "Questa canzone è fantastica! Ascoltala!"], ["My grandparents are wonderful. I love [them].", "I miei nonni sono fantastici. Li adoro."], ["Where's Marco? Call [him]!", "Dov'è Marco? Chiamalo!"]]],
    ["After a preposition", "", [["This present is for [you].", "Questo regalo è per te."], ["Come with [us]!", "Vieni con noi!"], ["Sit next to [me].", "Siediti vicino a me."]]],
    ["Short answers and replies", "", [["Who's at the door? – It's [me].", "Chi è alla porta? – Sono io."], ["‘I'm hungry.’ – ‘[Me] too!’", "«Ho fame.» – «Anch'io!»"]], 2],
    ["Give it to me", "With give, send and show, a pronoun for the thing comes first, then [to] + the person: [Give it to me].", [["Give [it] to [me], please.", "Dammelo, per favore."], ["Send [them] to [us].", "Mandaceli."]], 2]
  ],
  mistakes: [
    ["I him know.", "I know him.", "The object pronoun goes after the verb."],
    ["Come with I!", "Come with me!", "After a preposition: [me]."],
    ["She loves he.", "She loves him.", "Object of the verb: [him]."],
    ["Listen to she!", "Listen to her!", "After a preposition: [her]."],
    ["This is for they.", "This is for them.", "After a preposition: [them]."],
    ["Him is my brother.", "He is my brother.", "Subject of the verb: [he]."],
    ["Give to me it.", "Give it to me.", "The thing first, then to + the person."],
    ["This song likes me.", "I like this song.", "‘Mi piace’ = [I like]: the person who likes is the subject."]
  ],
  contrasts: [
    ["Subject or object?", "The subject comes before the verb; the object comes after the verb or after a preposition.", [["Subject", "[He] is my friend. · [They] are late.", "Lui è mio amico. · Sono in ritardo.", "Before the verb."], ["Object", "I like [him]. · Wait for [them].", "Lui mi piace. · Aspettali.", "After the verb or a preposition."]]]
  ],
  task: ["Write five sentences about people and things you like or love. Use me, you, him, her, it, us and them.",
    ["My grandmother is amazing. I love her very much.", "My little brother is annoying, but I love him too.", "Football is my passion: I play it every weekend.", "My friends are great and I'm always with them after school.", "Pizza? I love it!"]] });

L({ id: "possessives", group: "possession", belt: 1, title: "Possessive adjectives and pronouns", short: "My, your, his, her… · mine, yours, his, hers… · whose",
  intro: "Possessive adjectives ([my, your, his, her, its, our, their]) go before a noun. Possessive pronouns ([mine, yours, his, hers, ours, theirs]) replace the noun. [Whose] asks who the owner is.",
  form: [
    "Possessive adjective + noun: [my] bag, [our] house. No article before them: ~~the my bag~~.",
    "They never change with the noun: [my] brother, [my] sisters (mio, mie).",
    "[his] or [her] depends on the owner, not on the thing: Paolo and [his] mother; Anna and [her] father.",
    "[its] is for things and animals: The dog is in [its] bed. Don't confuse [its] (possessive) with [it's] (= it is).",
    "Possessive pronoun alone: This bag is [mine]. Is this pen [yours]? No apostrophe: ~~your's~~, ~~her's~~.",
    "[Whose] asks about the owner: [Whose] is this phone? [Whose] keys are these?"
  ],
  table: [["Subject", "Adjective + noun", "Pronoun", "Italian"],
    ["I", "my", "mine", "mio, mia, miei, mie"],
    ["you", "your", "yours", "tuo…, vostro…, Suo"],
    ["he", "his", "his", "suo… (di lui)"],
    ["she", "her", "hers", "suo… (di lei)"],
    ["it", "its", "—", "suo… (di una cosa, di un animale)"],
    ["we", "our", "ours", "nostro…"],
    ["they", "their", "theirs", "loro"]],
  uses: [
    ["Possessive adjectives", "", [["[My] name's Laura and [my] brothers are Max and Leo.", "Mi chiamo Laura e i miei fratelli sono Max e Leo."], ["Is this [your] bag?", "È tua questa borsa?"], ["[Our] school is very old.", "La nostra scuola è molto vecchia."]]],
    ["His or her?", "The owner decides: a man → [his], a woman → [her].", [["Luca is with [his] sister.", "Luca è con sua sorella."], ["Giulia is with [her] brother.", "Giulia è con suo fratello."]]],
    ["Possessive pronouns", "", [["This isn't my coat. [Mine] is black.", "Questo non è il mio cappotto. Il mio è nero."], ["Is this pencil case [yours]? – Yes, it's [mine].", "È tuo questo astuccio? – Sì, è mio."], ["Their flat is small, but [ours] is big.", "Il loro appartamento è piccolo, ma il nostro è grande."]], 2],
    ["Whose?", "", [["[Whose] is this jacket? – It's [his].", "Di chi è questa giacca? – È sua."], ["[Whose] shoes are these?", "Di chi sono queste scarpe?"]], 2],
    ["Its or it's?", "", [["The cat is in [its] basket.", "Il gatto è nella sua cesta."], ["[It's] (= it is) a lovely day.", "È una bella giornata."]], 2]
  ],
  mistakes: [
    ["Paolo is with her mother.", "Paolo is with his mother.", "The owner is Paolo, a man: [his]."],
    ["Anna is with his dog.", "Anna is with her dog.", "The owner is Anna, a woman: [her]."],
    ["This is the my book.", "This is my book.", "No article before a possessive."],
    ["Is this pen your?", "Is this pen yours?", "Alone, without a noun: [yours]."],
    ["This bag is her's.", "This bag is hers.", "No apostrophe in possessive pronouns."],
    ["The dog is in it's bed.", "The dog is in its bed.", "Possessive: [its], without an apostrophe."],
    ["Who's is this phone?", "Whose is this phone?", "The owner: [whose]. Who's = who is."],
    ["Theirs house is big.", "Their house is big.", "Before a noun: [their]."]
  ],
  contrasts: [
    ["Adjective or pronoun?", "The adjective needs a noun after it; the pronoun stands alone.", [["Adjective + noun", "This is [my] bike.", "Questa è la mia bici.", "Always followed by a noun."], ["Pronoun", "This bike is [mine].", "Questa bici è mia.", "Replaces the noun."]]],
    ["Whose or who's?", "They sound the same.", [["Whose", "[Whose] is this bag?", "Di chi è questa borsa?", "Asks about the owner."], ["Who's", "[Who's] that girl?", "Chi è quella ragazza?", "= who is."]]]
  ],
  task: ["Write five sentences about your family, your things and other people's things. Use possessive adjectives, possessive pronouns and a question with whose.",
    ["My family is small: my mum, my dad, my sister and me.", "My sister is Alice and her room is next to mine.", "Our flat isn't big, but our terrace is huge.", "Whose is this phone? It isn't mine.", "Is it yours, Alice? – Yes, it's mine!"]] });

L({ id: "saxon", group: "possession", belt: 2, title: "The possessive 's", short: "Marco's bike, my parents' car, the children's room",
  intro: "To say that something belongs to a person, English uses the [possessive 's]: Marco['s] bike = la bici di Marco. The owner comes first, then the thing.",
  form: [
    "Singular noun + [’s]: my sister['s] room, the teacher['s] desk, Tom['s] phone.",
    "Plural noun ending in -s + [’] only: my parents['] car, the students['] books.",
    "Irregular plural (not ending in -s) + [’s]: the children['s] toys, the women['s] team, people['s] opinions.",
    "Names ending in -s: James['s] house or James['] house: both are correct.",
    "No article before the owner's name: [Marco's] bike, not ~~the Marco's bike~~ (Italian: la bici di Marco).",
    "Two people who own the same thing: [Anna and Luca's] house. Each one's own thing: [Anna's and Luca's] bikes.",
    "The thing can be left out when it is clear: Whose is this? – It's [Sara's]. The party is at [Luca's] (house)."
  ],
  table: [["Owner", "Rule", "Example"],
    ["one person", "+ 's", "my brother's room"],
    ["a plural in -s", "+ '", "my brothers' room (two or more brothers)"],
    ["an irregular plural", "+ 's", "the children's room"],
    ["two people, one thing", "the last name + 's", "Anna and Luca's house"],
    ["things", "of", "the end of the film"]],
  uses: [
    ["Possession and family", "", [["This is [Giulia's] bag.", "Questa è la borsa di Giulia."], ["My [mum's] name is Elena.", "Mia mamma si chiama Elena."], ["[Paolo's] sister is a nurse.", "La sorella di Paolo è infermiera."]]],
    ["More than one owner", "", [["My [parents'] car is red.", "La macchina dei miei genitori è rossa."], ["The [students'] bags are in the corridor.", "Gli zaini degli studenti sono nel corridoio."], ["The [children's] books are on the shelf.", "I libri dei bambini sono sullo scaffale."]]],
    ["Answering whose", "", [["[Whose] is this umbrella? – It's [Sara's].", "Di chi è questo ombrello? – È di Sara."]]],
    ["Shops and houses", "The word shop or house is often left out.", [["I'm at the [dentist's].", "Sono dal dentista."], ["The party is at [Luca's].", "La festa è da Luca."]]],
    ["Of with things", "With things we normally use [of].", [["the end [of the film]", "la fine del film"], ["the top [of the page]", "la parte alta della pagina"]]]
  ],
  mistakes: [
    ["The car of my father is new.", "My father's car is new.", "For people: [’s], with the owner first."],
    ["The Marco's bike is blue.", "Marco's bike is blue.", "No article before the name."],
    ["The childrens' room is upstairs.", "The children's room is upstairs.", "Irregular plural: [children's]."],
    ["This is Anna bag.", "This is Anna's bag.", "Don't forget the [’s]."],
    ["Whose is this? – It's of Luca.", "Whose is this? – It's Luca's.", "‘È di Luca’ = it's [Luca's]."],
    ["My grandparent's house is in Puglia. (two grandparents)", "My grandparents' house is in Puglia.", "Plural in -s: the apostrophe goes after the s."]
  ],
  contrasts: [
    ["'s: possession, is or has?", "The same 's can mean three different things.", [["Possession", "[Tom's] bike is new.", "La bici di Tom è nuova.", "Tom's + noun."], ["is", "[Tom's] tall.", "Tom è alto.", "Tom's = Tom is."], ["has (got)", "[Tom's got] a new bike.", "Tom ha una bici nuova.", "Tom's got = Tom has got."]]]
  ],
  task: ["Write five sentences about the people in your family and their things. Use 's and s'.",
    ["My mum's name is Rita and my dad's name is Franco.", "My grandparents' house is in the mountains.", "My brother's bedroom is always a mess!", "My cousins' dog is a big Labrador called Rocky.", "Whose is the guitar in the living room? It's my sister's."]] });
