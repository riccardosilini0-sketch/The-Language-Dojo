/* =====================================================================
   Skill Development — task registry
   Every task is original material written for Language Dojo, in the formats of
   international B1–C1 exams. Content files call Skills.add({...}).

   Common fields
     id      unique, used in the address (#t-<id>) and for audio files
     skill   "reading" | "use" | "writing" | "listening"
     level   3 = B1 (Orange belt) · 4 = B2 (Green) · 5 = C1 (Blue)
     type    see below · title · topic · time (minutes)

   Reading
     rmc      text: [paragraphs], questions: [[question, [options], answer index, why]]
     gapped   text: [paragraphs with [1]…[6]], sentences: [[sentence, gap number or 0 = extra, why]]
     match    sections: [[letter, name, text]], statements: [[statement, letter, why]]
     Reading texts are also recorded (voice: an Azure voice name).
   Use of English (gaps in the text are written {1}, {2}…)
     mcc      text, gaps: [[[options], answer index, why]]
     open     text, gaps: [[[accepted answers], why]]
     wf       text, gaps: [[STEM, [accepted answers], why]]
     kwt      words: "2–5" | "3–6", items: [[first sentence, KEY, start, end, [accepted], why]]
   Writing
     write    genre, words, prompt: [lines], input?: {title, lines}, notes?: [content points],
              checklist: [..], language: [[function, [phrases]]], model: [[paragraph, comment]]
   Listening (recorded with several Azure voices)
     lmc      speakers: {name: voice}, script: [[speaker, line]], questions (as rmc)
     complete speakers, script, sentences: [[before, after, [accepted], why]]
   ===================================================================== */
window.Skills = {
  tasks: [],
  add(...t) { this.tasks.push(...t); }
};
