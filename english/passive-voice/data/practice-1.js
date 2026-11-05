/* The Passive Voice — practice batteries (1): active and passive, the passive in every tense.
   rewrite: [active sentence, [accepted passive sentences], explanation, beginning shown to the student] */
const P = x => GL.batteries.push(x);

/* ---------- active and passive ---------- */
P({ id: "ap-mc", lesson: "active-passive", type: "mc", belt: 2, items: [
  ["The Mona Lisa ___ by Leonardo da Vinci.", ["was painted", "painted", "was paint"], 0, "Past simple passive: [was + past participle]."],
  ["English ___ in many countries around the world.", ["is spoken", "speaks", "is speak"], 0, "A general fact, present simple passive: [is spoken]."],
  ["The accident ___ at about ten o'clock.", ["happened", "was happened", "has happened by"], 0, "Happen has no object: it cannot be passive."],
  ["My bike ___ last night. I left it outside the station.", ["was stolen", "stole", "was stole"], 0, "Unknown agent: passive [was stolen] (stole is the past simple, not the participle)."],
  ["Leonardo ___ the Mona Lisa in the early 1500s.", ["painted", "was painted", "has painted"], 0, "Here Leonardo is the subject and does the action: active [painted]."],
  ["Paper ___ from wood.", ["is made", "makes", "is making"], 0, "A process, present simple passive: [is made]."],
  ["This song ___ by millions of people every day.", ["is listened to", "is listened", "listens to"], 0, "Prepositional verb: keep the preposition: [is listened to]."],
  ["Where ___ these photos taken?", ["were", "did", "have"], 0, "Passive question, past simple: [were … taken]."],
  ["The museum ___ on Mondays.", ["is closed", "closes by", "is close"], 0, "Present simple passive (state): [is closed]."],
  ["Hamlet ___ by Shakespeare.", ["was written", "wrote", "is writing"], 0, "Past simple passive with an important agent."],
  ["Our neighbours ___ a new garage last year.", ["built", "were built", "was built"], 0, "Our neighbours did the action: active [built]."],
  ["The results ___ yet.", ["haven't been published", "haven't published", "didn't publish"], 0, "Present perfect passive with yet: [haven't been published]."]
] });
P({ id: "ap-rewrite", lesson: "active-passive", type: "rewrite", belt: 2, items: [
  ["Leonardo painted the Mona Lisa.", ["The Mona Lisa was painted by Leonardo."], "Past simple passive; the agent is important information.", "The Mona Lisa"],
  ["They make these cars in Japan.", ["These cars are made in Japan."], "Present simple passive; ‘they’ is not mentioned.", "These cars"],
  ["Someone stole my wallet.", ["My wallet was stolen."], "Unknown agent: leave it out.", "My wallet"],
  ["People speak French in Quebec.", ["French is spoken in Quebec."], "General agent (people): leave it out.", "French"],
  ["Shakespeare wrote Romeo and Juliet.", ["Romeo and Juliet was written by Shakespeare."], "Important agent: by Shakespeare. The title is singular: was.", "Romeo and Juliet"],
  ["The police arrested two men.", ["Two men were arrested.", "Two men were arrested by the police."], "Obvious agent (the police): it can be left out.", "Two men"],
  ["They clean the offices every evening.", ["The offices are cleaned every evening."], "Routine action: present simple passive.", "The offices"],
  ["Alexander Fleming discovered penicillin.", ["Penicillin was discovered by Alexander Fleming."], "Historical achievement with an important agent.", "Penicillin"],
  ["Somebody broke the window.", ["The window was broken."], "Unknown agent: leave it out.", "The window"],
  ["They grow coffee in Colombia.", ["Coffee is grown in Colombia."], "Present simple passive: [is grown].", "Coffee"],
  ["The teacher didn't correct our tests.", ["Our tests weren't corrected by the teacher.", "Our tests were not corrected by the teacher.", "Our tests weren't corrected.", "Our tests were not corrected."], "Negative past passive: [weren't corrected].", "Our tests"],
  ["Did your wife paint these portraits?", ["Were these portraits painted by your wife?"], "Passive question: [Were … painted by…?]", "Were these portraits"]
] });

/* ---------- present simple and past simple ---------- */
P({ id: "pp-gap", lesson: "present-past", type: "gap", belt: 2, instr: "Complete the sentences with the present simple passive or the past simple passive of the verbs in brackets.", items: [
  ["Most of the world's cocoa ___ (grow) in West Africa.", [["is grown"]], "A general fact: [is grown]."],
  ["The first telephone call ___ (make) in 1876.", [["was made"]], "A past event: [was made]."],
  ["I ___ (bear) in Palermo in 2009.", [["was born"]], "Birth: always [was / were born]."],
  ["These biscuits ___ (sell) in every supermarket.", [["are sold"]], "Plural, general fact: [are sold]."],
  ["The tickets ___ (not / include) in the price of the tour last year.", [["were not included", "weren't included"]], "Past negative, plural: [weren't included]."],
  ["Breakfast ___ (serve) from seven to ten every morning.", [["is served"]], "A routine: [is served]."],
  ["When ___ (the Colosseum / build)?", [["was the Colosseum built"]], "Past question: [was … built]."],
  ["Thousands of emails ___ (send) every second.", [["are sent"]], "A general fact, plural: [are sent]."],
  ["Our flight ___ (cancel) because of the snow.", [["was cancelled", "was canceled"]], "A past event: [was cancelled]."],
  ["My grandparents' house ___ (destroy) in an earthquake in 1980.", [["was destroyed"]], "A past event: [was destroyed]."],
  ["Many languages ___ (speak) in India.", [["are spoken"]], "A general fact: [are spoken]."],
  ["We ___ (not / invite) to the wedding, so we didn't go.", [["were not invited", "weren't invited"]], "Past negative: [weren't invited]."]
] });
P({ id: "pp-errors", lesson: "present-past", type: "correct", belt: 2, items: [
  ["I am born in Rome.", ["I was born in Rome."], "Was born, always past."],
  ["The letter was wrote by my sister.", ["The letter was written by my sister."], "Past participle of write: [written]."],
  ["These shoes are make in Italy.", ["These shoes are made in Italy."], "Past participle: [made]."],
  ["Where did this jacket made?", ["Where was this jacket made?"], "Passive questions use be: [Where was … made?]"],
  ["The windows was cleaned yesterday.", ["The windows were cleaned yesterday."], "Plural subject: [were]."],
  ["The concert cancelled because of the rain.", ["The concert was cancelled because of the rain.", "The concert was canceled because of the rain."], "The concert didn't cancel itself: [was cancelled]."],
  ["My phone was stolen from someone on the bus.", ["My phone was stolen on the bus."], "From someone is wrong and unnecessary: leave the agent out."],
  ["The problem was happened last week.", ["The problem happened last week."], "Happen cannot be passive."],
  ["Spanish is speaking in Argentina.", ["Spanish is spoken in Argentina."], "Passive: is + past participle [spoken], not -ing."],
  ["The thief was catch by the police.", ["The thief was caught by the police.", "The thief was caught."], "Past participle of catch: [caught]."]
] });

/* ---------- continuous and perfect tenses ---------- */
P({ id: "cp-gap", lesson: "continuous-perfect", type: "gap", belt: 3, instr: "Complete the sentences with the correct passive form (present continuous, past continuous, present perfect or past perfect) of the verbs in brackets.", items: [
  ["Sorry, you can't use this room: it ___ (paint) at the moment.", [["is being painted"]], "In progress now: [is being painted]."],
  ["Your order ___ (just / send). It will arrive tomorrow.", [["has just been sent"]], "Recent action with a present result: [has just been sent]."],
  ["When I got home, dinner ___ (cook) by my brother.", [["was being cooked"]], "In progress at a past moment: [was being cooked]."],
  ["By the time the firefighters arrived, the building ___ (evacuate).", [["had been evacuated", "had already been evacuated"]], "Before a past moment: [had been evacuated]."],
  ["Three new schools ___ (build) in our town since 2020.", [["have been built"]], "Since + present perfect passive: [have been built]."],
  ["I'm sure we ___ (follow): that car has been behind us for miles.", [["are being followed"]], "In progress now: [are being followed]."],
  ["The flowers are all dead. They ___ (not / water) for weeks.", [["have not been watered", "haven't been watered"]], "Present result of a period up to now: [haven't been watered]."],
  ["Graham ___ (not / show) how the new machine works yet.", [["has not been shown", "hasn't been shown"]], "Yet + present perfect passive."],
  ["When we arrived, the tickets ___ (already / sell).", [["had already been sold"]], "Before we arrived: [had already been sold]."],
  ["The patient ___ (operate) on at the moment, so you can't see him.", [["is being operated"]], "Prepositional verb in progress: [is being operated] on."],
  ["I'm really fed up with this hotel! Breakfast ___ (not / serve) yet.", [["has not been served", "hasn't been served"]], "Up to now: [hasn't been served]."],
  ["At the time of the robbery the alarm system ___ (repair).", [["was being repaired"]], "In progress at a past moment: [was being repaired]."]
] });
P({ id: "cp-rewrite", lesson: "continuous-perfect", type: "rewrite", belt: 3, items: [
  ["Ricky is cooking dinner.", ["Dinner is being cooked by Ricky."], "Present continuous passive: [is being cooked].", "Dinner"],
  ["They were looking at Joe.", ["Joe was being looked at."], "Past continuous passive of a prepositional verb: [was being looked at].", "Joe"],
  ["I had just baked a cake.", ["A cake had just been baked."], "Past perfect passive: [had just been baked].", "A cake"],
  ["Have you written your essay yet?", ["Has your essay been written yet?"], "Present perfect passive question: [Has … been written?]", "Has your essay"],
  ["Have they caught the murderer yet?", ["Has the murderer been caught yet?"], "Present perfect passive question.", "Has the murderer"],
  ["Someone is repairing the lift.", ["The lift is being repaired."], "Present continuous passive; no agent.", "The lift"],
  ["They have cancelled the meeting.", ["The meeting has been cancelled.", "The meeting has been canceled."], "Present perfect passive.", "The meeting"],
  ["The police were questioning the suspect.", ["The suspect was being questioned by the police.", "The suspect was being questioned."], "Past continuous passive.", "The suspect"],
  ["Someone had stolen the money before the guards arrived.", ["The money had been stolen before the guards arrived."], "Past perfect passive.", "The money"],
  ["They are building a new stadium.", ["A new stadium is being built."], "Present continuous passive.", "A new stadium"],
  ["Nobody has used this room for years.", ["This room hasn't been used for years.", "This room has not been used for years."], "Negative present perfect passive.", "This room"],
  ["They were keeping the honeybees in a humid room.", ["The honeybees were being kept in a humid room."], "Past continuous passive: [were being kept].", "The honeybees"]
] });
P({ id: "cp-mc", lesson: "continuous-perfect", type: "mc", belt: 3, items: [
  ["The road is closed because it ___.", ["is being repaired", "has being repaired", "is been repaired"], 0, "In progress: [is being repaired]."],
  ["Over the last decades, our daily lives ___ by social media.", ["have been invaded", "had been invaded", "are invading"], 0, "A period up to now: [have been invaded]."],
  ["David lost all his research because his computer backup ___ by mistake.", ["had been deleted", "should be deleted", "is being deleted"], 0, "Before he lost it: [had been deleted]."],
  ["A fake photo ___ in the paper recently.", ["has been published", "is being published", "was being published by"], 0, "Recently + present perfect passive."],
  ["I felt as if I ___ watched.", ["was being", "had being", "am been"], 0, "Past continuous passive: [was being watched]."],
  ["Look! The new bridge ___ finally.", ["has been finished", "has finished by", "is being finish"], 0, "A recent result: [has been finished]."],
  ["When I arrived at the party, most of the food ___.", ["had been eaten", "has been eaten", "was eating"], 0, "Before I arrived: [had been eaten]."],
  ["Don't sit on that bench: it ___ painted.", ["has just been", "has just being", "just was"], 0, "Recent result: [has just been painted]."],
  ["The patients ___ by a new doctor this week.", ["are being treated", "are treating", "have treated"], 0, "Temporary, in progress: [are being treated]."],
  ["Yesterday the documents ___ because the computer broke down.", ["weren't prepared", "haven't been prepared", "aren't being prepared"], 0, "Finished past time (yesterday): past simple passive."],
  ["Two people ___ in the accident so far.", ["have been injured", "are injuring", "had injured"], 0, "So far + present perfect passive."],
  ["The suspect ___ when the journalists arrived.", ["was being interviewed", "has been interviewed", "is interviewed"], 0, "In progress at a past moment: [was being interviewed]."]
] });

/* ---------- every tense ---------- */
P({ id: "at-gap", lesson: "all-tenses", type: "gap", belt: 3, instr: "Complete the sentences with the correct passive form of the verbs in brackets. Pay attention to the tense.", items: [
  ["The winners ___ (announce) tomorrow at noon.", [["will be announced", "are going to be announced", "are being announced"]], "Future: [will be announced]."],
  ["The old cinema ___ (demolish) next month – the plans were approved last week.", [["is going to be demolished", "will be demolished", "is being demolished"]], "A decided plan: [is going to be demolished]."],
  ["By 2030, the new metro line ___ (complete).", [["will have been completed"]], "Completed before a future time: [will have been completed]."],
  ["If the money were found, it ___ (return) to its owner.", [["would be returned"]], "Second conditional: [would be returned]."],
  ["She ___ (choose) for the team if she had applied.", [["would have been chosen"]], "Third conditional: [would have been chosen]."],
  ["I'd like ___ (inform) of any changes.", [["to be informed"]], "Passive infinitive: [to be informed]."],
  ["As soon as you arrive at the site, you ___ (give) some instructions.", [["will be given"]], "Future: [will be given]."],
  ["In the future, society ___ (assure) that artificial intelligence is not a threat.", [["will have to be assured", "will be assured"]], "Future passive: [will be assured] (will have to be assured is also possible)."],
  ["Last year my bike ___ (steal) twice.", [["was stolen"]], "Past simple passive."],
  ["Sometimes players ___ (ask) to play a position which isn't their first choice.", [["are asked"]], "A general fact: [are asked]."],
  ["The flowers are all dead. They ___ (not / water) for weeks.", [["have not been watered", "haven't been watered"]], "Present perfect passive."],
  ["Mary ___ (bite) by a dangerous insect if she hadn't used a strong insecticide.", [["would have been bitten"]], "Third conditional: [would have been bitten]."]
] });
P({ id: "at-rewrite", lesson: "all-tenses", type: "rewrite", belt: 4, items: [
  ["People don't invite Jasper to parties very often.", ["Jasper isn't invited to parties very often.", "Jasper is not invited to parties very often."], "Present simple passive, negative.", "Jasper"],
  ["We didn't write that graffiti.", ["That graffiti wasn't written by us.", "That graffiti was not written by us."], "Past simple passive, negative; by us is needed here because it's the point.", "That graffiti"],
  ["The judges won't choose the winners until Saturday.", ["The winners won't be chosen until Saturday.", "The winners will not be chosen until Saturday."], "Future passive: [won't be chosen].", "The winners"],
  ["Someone has to do something to stop them.", ["Something has to be done to stop them."], "Have to + passive infinitive: [has to be done].", "Something"],
  ["My aunt gave me this watch for my birthday.", ["I was given this watch for my birthday by my aunt.", "I was given this watch by my aunt for my birthday.", "This watch was given to me by my aunt for my birthday.", "This watch was given to me for my birthday by my aunt.", "I was given this watch for my birthday.", "This watch was given to me for my birthday."], "Two objects: the personal construction (I was given…) is the most natural.", "I"],
  ["People are going to talk about him for a long time.", ["He is going to be talked about for a long time."], "Going to + passive of a prepositional verb: [is going to be talked about].", "He"],
  ["They will have finished the work by Friday.", ["The work will have been finished by Friday."], "Future perfect passive.", "The work"],
  ["They would publish the article if it were true.", ["The article would be published if it were true."], "Conditional passive.", "The article"],
  ["They will deliver your sofa next week.", ["Your sofa will be delivered next week."], "Future passive.", "Your sofa"],
  ["Someone would have found the mistake if they had checked.", ["The mistake would have been found if they had checked."], "Past conditional passive.", "The mistake"],
  ["They are going to open a new shopping centre.", ["A new shopping centre is going to be opened."], "Going to + be + past participle.", "A new shopping centre"]
] });
P({ id: "at-mc", lesson: "all-tenses", type: "mc", belt: 4, items: [
  ["The bridge ___ by the end of next year.", ["will have been finished", "will be finishing", "has been finished"], 0, "Completed before a future time: future perfect passive."],
  ["A new hospital ___ next year – the government has just approved the project.", ["is going to be built", "is building", "will have built"], 0, "A decided plan: [is going to be built]."],
  ["If you broke the rules, you ___ from the club.", ["would be expelled", "will be expelled", "would expel"], 0, "Second conditional: [would be expelled]."],
  ["The match ___ live on TV tomorrow evening.", ["will be shown", "will show", "shows by"], 0, "Future passive: [will be shown]."],
  ["She ___ if the doctor hadn't acted so quickly.", ["would have been killed", "would be killed", "had been killed"], 0, "Third conditional: [would have been killed]."],
  ["I hope ___ for the job.", ["to be chosen", "being chosen", "to choose"], 0, "Hope + passive infinitive: [to be chosen]."],
  ["Your application ___ next week, and you'll get an answer by Friday.", ["will be considered", "will consider", "is considering"], 0, "Future passive."],
  ["The museum ___ for repairs since January.", ["has been closed", "is closed since", "was being closed"], 0, "Since + present perfect passive."],
  ["The suspect ___ tomorrow morning.", ["will be questioned", "will question", "is questioning"], 0, "Future passive."],
  ["All the tickets ___ by the time we got there.", ["had been sold", "have been sold", "were selling"], 0, "Before a past moment: past perfect passive."],
  ["By the time you arrive, all the preparations ___.", ["will have been made", "will make", "are made"], 0, "Completed before a future moment: future perfect passive."],
  ["The results of the survey ___ in next month's report.", ["will be published", "will publish", "publish"], 0, "Future passive."]
] });
