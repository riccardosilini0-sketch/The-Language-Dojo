# Language Dojo — Learn. Train. Master.

A static website (HTML, CSS, JavaScript). No server, database or account needed.

## Structure
```
index.html                      Homepage (brand, method, languages, training areas, news)
assets/css/dojo.css             Shared design system (colours, type, header, footer, buttons)
assets/css/home.css             Homepage styles
assets/css/language.css         Styles shared by every language page
assets/js/brand.js              Logo mark (brush ensō with speech-bubble tail)
assets/js/catalog.js            CONTENT CATALOG: languages, training areas, resources, news
assets/js/site.js               Shared header, footer, icons and helpers
assets/js/home.js               Builds the homepage sections from the catalog
assets/js/language.js           Builds any language page from the catalog
assets/img/                     Logo files: logo-horizontal.svg, logo-square.svg, logo-mark.svg, favicon.svg
english/index.html              English language page
english/verb-tenses/            Verb Tenses Dojo
  index.html, app.css, app.js   Interface (dojo, areas, topics, sessions, exams, belts)
  data/engine.js                Question format and registry
  data/tenses.js                Area 1: the 15 individual tenses
  data/contrasts.js             Area 2: tense contrasts
  data/mixed.js                 Areas 3 and 4: complete groups and challenges
japanese/                       Japanese Dojo
  index.html, app.css, app.js   Interface (dojo, hiragana, katakana, kanji, practice, tests)
  data/kana.js                  Hiragana and katakana tables, loanwords
  data/kanji.js                 The kanji (meanings, readings, words, sentences) - add more here
  data/strokes.js               Stroke order from KanjiVG (CC BY-SA 3.0)
assets/css/resource.css         Shared shell for learning resources
assets/js/belts.js              The belt system shared by all resources
english/irregular-verbs/        First learning app
  index.html, app.css, app.js   The app (overview, verb list, flashcards, practice, progress)
  verbs-data.js                 The verb list (104 verbs from the teacher's document)
  audio-data.js                 Recorded British English pronunciation for every form
```

## Adding content
- **News, a new resource or a status change:** edit `assets/js/catalog.js`. Homepage, footer and language pages update automatically.
- **A new language:** add it to `languages` in the catalog, copy `english/index.html` into a new folder (e.g. `spanish/index.html`) and change `data-lang="english"` to the new id.
- **New tense exercises:** add lines to the files in `english/verb-tenses/data/` (format explained in `engine.js`).
- **More kanji:** add entries to `japanese/data/kanji.js` and their strokes to `strokes.js` (from KanjiVG).
- **A new learning app:** create a folder under the language (e.g. `english/phrasal-verbs/`), reuse the page shell of `english/irregular-verbs/index.html`, and set the resource `status` to `"available"` with its `url` in the catalog.

## Running and publishing
- **Locally:** unzip and double-click `index.html`. Everything works offline, including audio and saved progress (fonts fall back to system fonts when offline).
- **Netlify:** drag the unzipped folder onto https://app.netlify.com/drop to get a public link.
- **GitHub Pages:** upload the folder contents to a repository and enable Pages (Settings → Pages).
- **School website:** upload the whole folder keeping the same structure.

Progress is saved in each student's browser (localStorage), on that device only.

© 2026 Language Dojo · Created by Riccardo Silini Nedrotti. All rights reserved.
Stroke-order data: KanjiVG (https://kanjivg.tagaini.net) by Ulrich Apel, CC BY-SA 3.0.
