/* =====================================================================
   Language Dojo — PDF worksheet renderer
   Turns a list of normalised exercises (see adapters.js) into an A4 PDF.
   - Real text, not images: fonts are embedded as TrueType (assets/fonts/pdf/),
     with automatic fallback per character (Latin → IPA → Japanese).
   - Its own layout engine: line breaking, page breaks that never split a question,
     page numbers, running footer, answer key for the teacher's version.
   - Uses pdf-lib (assets/js/vendor/pdf-lib.min.js, MIT) only to write the PDF file.
   Works in the browser and in Node (for automated tests).
   ===================================================================== */
(function (root) {
  "use strict";

  /* ---------------- TrueType reader: cmap, advance widths, metrics ---------------- */
  class TTF {
    constructor(bytes) {
      this.bytes = bytes; const dv = this.dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      const n = dv.getUint16(4); this.t = {};
      for (let i = 0; i < n; i++) { const o = 12 + 16 * i; this.t[String.fromCharCode(bytes[o], bytes[o + 1], bytes[o + 2], bytes[o + 3])] = dv.getUint32(o + 8); }
      const h = this.t.head; this.upm = dv.getUint16(h + 18); this.bbox = [dv.getInt16(h + 36), dv.getInt16(h + 38), dv.getInt16(h + 40), dv.getInt16(h + 42)];
      const hh = this.t.hhea; this.ascent = dv.getInt16(hh + 4); this.descent = dv.getInt16(hh + 6); const nhm = dv.getUint16(hh + 34);
      const ng = dv.getUint16(this.t.maxp + 4); this.adv = new Uint16Array(ng); let last = 0;
      for (let g = 0; g < ng; g++) { if (g < nhm) last = dv.getUint16(this.t.hmtx + 4 * g); this.adv[g] = last; }
      const os2 = this.t["OS/2"]; this.cap = os2 && dv.getUint16(os2) >= 2 ? dv.getInt16(os2 + 88) : Math.round(this.ascent * .7);
      this.cmap = new Map(); this.readCmap();
    }
    readCmap() {
      const dv = this.dv, c = this.t.cmap, n = dv.getUint16(c + 2);
      for (let i = 0; i < n; i++) {
        const pid = dv.getUint16(c + 4 + 8 * i), eid = dv.getUint16(c + 6 + 8 * i), off = c + dv.getUint32(c + 8 + 8 * i), fmt = dv.getUint16(off);
        if (!(pid === 0 || (pid === 3 && (eid === 1 || eid === 10)))) continue;
        if (fmt === 4) {
          const seg = dv.getUint16(off + 6) / 2, ends = off + 14, starts = ends + 2 * seg + 2, deltas = starts + 2 * seg, ranges = deltas + 2 * seg;
          for (let s = 0; s < seg; s++) {
            const end = dv.getUint16(ends + 2 * s), start = dv.getUint16(starts + 2 * s), delta = dv.getInt16(deltas + 2 * s), ro = dv.getUint16(ranges + 2 * s);
            for (let ch = start; ch <= end && ch !== 0xFFFF; ch++) {
              let g = ro === 0 ? (ch + delta) & 0xFFFF : dv.getUint16(ranges + 2 * s + ro + 2 * (ch - start));
              if (ro !== 0 && g !== 0) g = (g + delta) & 0xFFFF;
              if (g) this.cmap.set(ch, g);
            }
          }
        } else if (fmt === 12) {
          const groups = dv.getUint32(off + 12);
          for (let k = 0; k < groups; k++) { const o = off + 16 + 12 * k, s = dv.getUint32(o), e = dv.getUint32(o + 4), g0 = dv.getUint32(o + 8); for (let ch = s; ch <= e; ch++) this.cmap.set(ch, g0 + ch - s); }
        }
      }
    }
    gid(cp) { return this.cmap.get(cp) || 0; }
    has(cp) { return this.cmap.has(cp); }
    width(gid, size) { return this.adv[gid] * size / this.upm; }
  }

  /* ---------------- embedding a TrueType font in the PDF (Type0 / CIDFontType2, Identity-H) ---------------- */
  function pdfFont(doc, ttf, tag) {
    const P = root.PDFLib, ctx = doc.context, used = new Map();
    let ref = null;
    return {
      ttf, used,
      ref() { return ref || (ref = ctx.nextRef()); },
      finish() {
        if (!ref) return;
        const k = 1000 / ttf.upm, base = "LDOJO" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[tag.length % 26] + "+" + tag;
        const gids = [...used.keys()].sort((a, b) => a - b);
        const W = []; gids.forEach(g => { W.push(g); W.push([Math.round(ttf.adv[g] * k)]); });
        const hex = (n, l = 4) => n.toString(16).toUpperCase().padStart(l, "0");
        const u16 = cp => cp > 0xFFFF ? hex(0xD800 + ((cp - 0x10000) >> 10)) + hex(0xDC00 + ((cp - 0x10000) & 0x3FF)) : hex(cp);
        let cm = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n";
        for (let i = 0; i < gids.length; i += 100) { const part = gids.slice(i, i + 100); cm += `${part.length} beginbfchar\n${part.map(g => `<${hex(g)}> <${u16(used.get(g))}>`).join("\n")}\nendbfchar\n`; }
        cm += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
        const toUni = ctx.register(ctx.flateStream(new TextEncoder().encode(cm)));
        const file = ctx.register(ctx.flateStream(ttf.bytes, { Length1: ttf.bytes.length }));
        const desc = ctx.register(ctx.obj({ Type: "FontDescriptor", FontName: base, Flags: 32, FontBBox: ttf.bbox.map(v => Math.round(v * k)), ItalicAngle: 0,
          Ascent: Math.round(ttf.ascent * k), Descent: Math.round(ttf.descent * k), CapHeight: Math.round(ttf.cap * k), StemV: 80, FontFile2: file }));
        const cid = ctx.register(ctx.obj({ Type: "Font", Subtype: "CIDFontType2", BaseFont: base, FontDescriptor: desc, W, DW: 500, CIDToGIDMap: "Identity",
          CIDSystemInfo: ctx.obj({ Registry: P.PDFString.of("Adobe"), Ordering: P.PDFString.of("Identity"), Supplement: 0 }) }));
        ctx.assign(ref, ctx.obj({ Type: "Font", Subtype: "Type0", BaseFont: base, Encoding: "Identity-H", DescendantFonts: [cid], ToUnicode: toUni }));
      }
    };
  }

  /* ---------------- design ---------------- */
  const A4 = [595.28, 841.89], M = { l: 54, r: 54, t: 50, b: 58 };
  const C = { ink: [0.114, 0.106, 0.094], ink2: [0.227, 0.212, 0.192], stone: [0.435, 0.408, 0.369], line: [0.84, 0.81, 0.76], shu: [0.784, 0.216, 0.176], wash: [0.965, 0.945, 0.906], ok: [0.247, 0.49, 0.306] };
  const S = {
    brand: { f: "bold", size: 8.5, color: C.ink, track: 1.6 },
    small: { f: "sans", size: 8, color: C.stone },
    title: { f: "serif", size: 23, color: C.ink, lh: 1.15 },
    field: { f: "sans", size: 9.5, color: C.ink2 },
    type: { f: "bold", size: 7.6, color: C.shu, track: 1.1 },
    exTitle: { f: "serif", size: 14.5, color: C.ink, lh: 1.2 },
    instr: { f: "sans", size: 9.6, color: C.ink2, lh: 1.42 },
    meta: { f: "sans", size: 7.8, color: C.stone },
    body: { f: "sans", size: 10.2, color: C.ink, lh: 1.55 },
    bodyB: { f: "bold", size: 10.2, color: C.ink, lh: 1.55 },
    text: { f: "sans", size: 10.4, color: C.ink, lh: 1.62 },
    num: { f: "bold", size: 10.2, color: C.ink, lh: 1.55 },
    opt: { f: "sans", size: 9.8, color: C.ink, lh: 1.45 },
    key: { f: "sans", size: 9.2, color: C.ink, lh: 1.42 },
    keyWhy: { f: "sans", size: 8.2, color: C.stone, lh: 1.38 },
    h2: { f: "serif", size: 17, color: C.ink, lh: 1.2 }
  };

  /* ---------------- the renderer ---------------- */
  class Renderer {
    constructor(PDFDocument, fontBytes) { this.fontBytes = fontBytes; this.PDFDocument = PDFDocument; }
    async init(meta) {
      const P = root.PDFLib;
      this.doc = await P.PDFDocument.create();
      this.doc.setTitle(meta.title || "Worksheet"); this.doc.setAuthor("Riccardo Silini Nedrotti"); this.doc.setCreator("The Language Dojo"); this.doc.setProducer("The Language Dojo – PDF Worksheet Builder"); this.doc.setLanguage("en");
      this.F = {};
      for (const [k, b] of Object.entries(this.fontBytes)) if (b) { const t = new TTF(b); this.F[k] = Object.assign(pdfFont(this.doc, t, k.toUpperCase().replace(/[^A-Z]/g, "")), { key: k }); }
      this.chains = { sans: ["sans", "fallback", "jp"], bold: ["bold", "fallback", "jp"], serif: ["serif", "bold", "fallback", "jp"], fallback: ["fallback", "jp"] };
      this.meta = meta; this.pages = []; this.W = A4[0] - M.l - M.r;
      if (meta.logo) this.logo = await this.doc.embedPng(meta.logo);
      this.newPage(true);
    }
    /* ---- text ---- */
    fontFor(fk, cp) { for (const k of this.chains[fk] || [fk]) { const f = this.F[k]; if (f && f.ttf.has(cp)) return f; } return this.F[this.chains[fk][0]] || this.F.sans; }
    // splits a string into runs of the same font; widths in points
    runs(text, st) {
      const out = []; let cur = null;
      for (const ch of String(text)) {
        const cp = ch.codePointAt(0); if (cp === 0x200B) continue;
        const f = cp === 32 ? this.F[this.chains[st.f][0]] : this.fontFor(st.f, cp);
        const g = f.ttf.gid(cp), w = f.ttf.width(g, st.size) + (st.track || 0);
        if (!cur || cur.font !== f) out.push(cur = { font: f, gids: [], cps: [], w: 0, st });
        cur.gids.push(g); cur.cps.push(cp); cur.w += w;
      }
      return out;
    }
    textWidth(text, st) { return this.runs(text, st).reduce((s, r) => s + r.w, 0); }
    /* inline content: array of pieces {t:text, st} | {gap:width} | {box:true} | {br:true}
       returns lines [{atoms:[…], w, h}] that fit in width */
    wrap(pieces, width, base) {
      const atoms = [];
      const isCJK = cp => (cp >= 0x3000 && cp <= 0x9FFF) || (cp >= 0xFF00 && cp <= 0xFFEF);
      pieces.forEach(p => {
        if (p.br) { atoms.push({ br: true }); return; }
        if (p.gap) { atoms.push({ gap: p.gap, w: p.gap, st: p.st || base, label: p.label }); return; }
        if (p.box) { atoms.push({ box: true, w: (p.st || base).size * 1.25, st: p.st || base }); return; }
        const st = p.st || base;
        // a piece marked "keep" is one unbreakable unit; "glue" keeps it on the same line as the previous unit
        if (p.keep) { atoms.push({ word: String(p.t), st, glue: p.glue }); return; }
        // words: split at spaces; CJK characters can break anywhere
        String(p.t).split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { atoms.push({ space: true, w: this.textWidth(" ", st), st }); return; }
          let buf = "";
          for (const ch of part) { if (isCJK(ch.codePointAt(0))) { if (buf) { atoms.push({ word: buf, st, nb: true }); buf = ""; } atoms.push({ word: ch, st, nb: true, cjk: true }); } else buf += ch; }
          if (buf) atoms.push({ word: buf, st });
        });
      });
      atoms.forEach(a => { if (a.word !== undefined) { a.runs = this.runs(a.word, a.st); a.w = a.runs.reduce((s, r) => s + r.w, 0); } });
      const lines = []; let line = [], w = 0;
      const push = () => { while (line.length && line[line.length - 1].space) { w -= line.pop().w; } lines.push({ atoms: line, w }); line = []; w = 0; };
      atoms.forEach((a, i) => {
        if (a.br) { push(); return; }
        if (a.space && !line.length) return;
        // a word glued to the previous one (CJK or punctuation without spaces) stays with it unless it doesn't fit
        if (w + a.w > width && line.length && !a.space) {
          // long single words are split by characters
          const prev = a.glue && line.length > 1 ? line.pop() : null; if (prev) w -= prev.w;
          push(); if (prev) { line.push(prev); w += prev.w; }
        }
        if (!a.space && a.w > width && a.runs) { // hard split of an over-long word
          let part = "", pw = 0;
          for (const ch of a.word) { const cw = this.textWidth(ch, a.st); if (pw + cw > width && part) { const x = { word: part, st: a.st }; x.runs = this.runs(part, a.st); x.w = pw; line.push(x); w += pw; push(); part = ""; pw = 0; } part += ch; pw += cw; }
          a = { word: part, st: a.st }; a.runs = this.runs(part, a.st); a.w = pw;
        }
        line.push(a); w += a.w;
      });
      if (line.length) push();
      lines.forEach(l => { const st = l.atoms.reduce((m, a) => a.st && a.st.size > m.size ? a.st : m, base); l.size = st.size; l.h = st.size * (st.lh || base.lh || 1.4); });
      return lines;
    }
    linesHeight(lines) { return lines.reduce((s, l) => s + l.h, 0); }
    // draws lines with the top of the first line at y (PDF coordinates: y grows upwards)
    drawLines(page, lines, x, yTop, opts = {}) {
      const P = root.PDFLib; let y = yTop;
      lines.forEach(l => {
        const baseY = y - l.h + (l.h - l.size) / 2 + l.size * 0.22;
        let cx = x + (opts.align === "right" ? (opts.width - l.w) : opts.align === "center" ? (opts.width - l.w) / 2 : 0);
        l.atoms.forEach(a => {
          if (a.runs) a.runs.forEach(r => { this.show(page, r, cx, baseY); cx += r.w; });
          else if (a.gap) {
            page.drawLine({ start: { x: cx + 1, y: baseY - 2 }, end: { x: cx + a.w - 1, y: baseY - 2 }, thickness: 0.6, color: P.rgb(...C.ink2) });
            if (a.label) { const lr = this.runs(a.label, S.meta); let lx = cx + 2; lr.forEach(r => { this.show(page, r, lx, baseY + 1.5, C.stone); lx += r.w; }); }
            cx += a.w;
          } else if (a.box) {
            const s = a.st.size * 0.82; page.drawRectangle({ x: cx + 0.5, y: baseY - 1, width: s, height: s, borderColor: P.rgb(...C.ink2), borderWidth: 0.7 }); cx += a.w;
          } else cx += a.w;
        });
        y -= l.h;
      });
      return y;
    }
    show(page, run, x, y, color) {
      const P = root.PDFLib, f = run.font;
      const name = this.fontName(page, f);
      run.gids.forEach((g, i) => { if (!f.used.has(g)) f.used.set(g, run.cps[i]); });
      const hex = run.gids.map(g => g.toString(16).padStart(4, "0")).join("");
      const ops = [P.beginText(), P.setFontAndSize(name, run.st.size), P.setFillingRgbColor(...(color || run.st.color || C.ink))];
      ops.push(P.setCharacterSpacing(run.st.track || 0));
      ops.push(P.moveText(x, y), P.showText(P.PDFHexString.of(hex)), P.endText());
      page.pushOperators(...ops);
    }
    fontName(page, f) {
      page.__fonts = page.__fonts || new Map();
      if (!page.__fonts.has(f)) page.__fonts.set(f, page.node.newFontDictionary(f.key, f.ref()));
      return page.__fonts.get(f);
    }
    /* ---- pages and flow ---- */
    newPage(first) {
      const page = this.doc.addPage(A4); this.pages.push(page); this.page = page; this.y = A4[1] - M.t;
      if (first) this.drawFirstHeader();
      else this.y -= 4;
    }
    space(h) { this.y -= h; }
    ensure(h) { if (this.y - h < M.b) { this.newPage(false); return true; } return false; }
    place(h, draw) { this.ensure(h); draw(this.page, this.y); this.y -= h; }
    drawFirstHeader() {
      const P = root.PDFLib, p = this.page, m = this.meta, x = M.l, top = this.y;
      // brand row
      const ls = 26;
      if (this.logo) p.drawImage(this.logo, { x, y: top - ls, width: ls, height: ls });
      const bx = x + (this.logo ? ls + 9 : 0);
      this.drawLines(p, this.wrap([{ t: "THE LANGUAGE DOJO" }], 300, S.brand), bx, top - 3);
      this.drawLines(p, this.wrap([{ t: "Created by Riccardo Silini Nedrotti" }], 300, S.small), bx, top - 15);
      const right = [m.area, m.version === "teacher" ? "Teacher's version" : "Student worksheet"].filter(Boolean).join("  ·  ");
      this.drawLines(p, this.wrap([{ t: right }], this.W, S.small), x, top - 9, { align: "right", width: this.W });
      p.drawLine({ start: { x, y: top - ls - 9 }, end: { x: x + this.W, y: top - ls - 9 }, thickness: 1.2, color: P.rgb(...C.shu) });
      let y = top - ls - 24;
      const tl = this.wrap([{ t: m.title || "Worksheet" }], this.W, S.title);
      y = this.drawLines(p, tl, x, y) - 8;
      // student fields
      const fields = [["Student's name", m.name, 0.5], ["Class", m.klass, 0.2], ["Date", m.date, 0.3 - 0.02]];
      let fx = x; const gapW = 10;
      fields.forEach(([label, val, frac], i) => {
        const w = (this.W - gapW * 2) * frac, lw = this.textWidth(label + "  ", S.field);
        this.drawLines(p, this.wrap([{ t: label }], w, S.field), fx, y);
        const ly = y - 13.2;
        p.drawLine({ start: { x: fx + lw, y: ly }, end: { x: fx + w, y: ly }, thickness: 0.6, color: P.rgb(...C.line) });
        if (val) this.drawLines(p, this.wrap([{ t: val, st: Object.assign({}, S.field, { color: C.ink }) }], w - lw, S.field), fx + lw + 2, y);
        fx += w + gapW;
      });
      y -= 22;
      if (m.duration) { this.drawLines(p, this.wrap([{ t: "Duration: ", st: S.field }, { t: m.duration, st: Object.assign({}, S.field, { f: "bold" }) }], this.W, S.field), x, y); y -= 16; }
      if (m.note) { const nl = this.wrap([{ t: m.note }], this.W, S.instr); y = this.drawLines(p, nl, x, y) - 4; }
      this.y = y - 8;
    }
    drawFooters() {
      const P = root.PDFLib, n = this.pages.length;
      this.pages.forEach((p, i) => {
        const y = M.b - 22;
        p.drawLine({ start: { x: M.l, y: y + 12 }, end: { x: M.l + this.W, y: y + 12 }, thickness: 0.5, color: P.rgb(...C.line) });
        this.drawLines(p, this.wrap([{ t: "THE LANGUAGE DOJO", st: Object.assign({}, S.small, { f: "bold", track: 0.8 }) }, { t: "   " + (this.meta.title || "") }], this.W * 0.75, S.small), M.l, y + 8);
        this.drawLines(p, this.wrap([{ t: `Page ${i + 1} of ${n}` }], 120, S.small), M.l + this.W - 120, y + 8, { align: "right", width: 120 });
      });
    }
    /* ---- building blocks: a block is {h, draw(page, yTop)} ---- */
    textBlock(pieces, st, opts = {}) {
      const w = opts.width || this.W - (opts.indent || 0), lines = this.wrap(pieces, w, st);
      return { h: this.linesHeight(lines) + (opts.after || 0), draw: (p, y) => this.drawLines(p, lines, M.l + (opts.indent || 0), y, opts), lines };
    }
    // a block for each line, so that long texts flow across pages
    flowText(pieces, st, opts = {}) {
      const w = this.W - (opts.indent || 0), lines = this.wrap(pieces, w, st);
      lines.forEach((l, i) => this.place(l.h + (i === lines.length - 1 ? (opts.after || 0) : 0), (p, y) => this.drawLines(p, [l], M.l + (opts.indent || 0), y)));
    }
    rule(after = 10) { if (this.y > A4[1] - M.t - 8 || this.y - after < M.b) { this.y -= Math.min(after, Math.max(0, this.y - M.b)); return; } this.place(after, (p, y) => p.drawLine({ start: { x: M.l, y: y - after / 2 }, end: { x: M.l + this.W, y: y - after / 2 }, thickness: 0.4, color: root.PDFLib.rgb(...C.line) })); }
    writeLines(n, indent = 0, gap = 22) {
      const P = root.PDFLib, x = M.l + indent, w = this.W - indent;
      return { h: n * gap + 2, draw: (p, y) => { for (let i = 1; i <= n; i++) p.drawLine({ start: { x, y: y - i * gap }, end: { x: x + w, y: y - i * gap }, thickness: 0.5, color: P.rgb(...C.line) }); } };
    }
    stack(blocks, extra = 0) { return { h: blocks.reduce((s, b) => s + b.h, 0) + extra, draw: (p, y) => { blocks.forEach(b => { b.draw(p, y); y -= b.h; }); } }; }
    async save() { Object.values(this.F).forEach(f => f.finish()); return this.doc.save({ useObjectStreams: false }); }
  }

  /* ---------------- exercise layout ---------------- */
  const gapW = (ans, st = S.body) => Math.max(54, Math.min(190, (String(ans || "").length + 4) * st.size * 0.55));
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  // text with ___ markers → pieces; each ___ becomes a blank as wide as the answer needs
  function gapPieces(text, answers, st) {
    const out = []; const parts = String(text).split("___");
    parts.forEach((part, i) => { if (part) out.push({ t: part, st }); if (i < parts.length - 1) out.push({ gap: gapW(answers && answers[i], st), st }); });
    return out;
  }
  // text with {n} markers (numbered gaps)
  function numGapPieces(text, answers, st) {
    const out = []; let last = 0; const re = /\{(\d+)\}/g; let m;
    while ((m = re.exec(text))) { if (m.index > last) out.push({ t: text.slice(last, m.index), st }); const n = +m[1]; out.push({ t: `(${n})`, st: Object.assign({}, st, { f: "bold", size: st.size * 0.82, color: C.shu }) }); out.push({ gap: gapW(answers && answers[n - 1], st), st }); last = re.lastIndex; }
    if (last < text.length) out.push({ t: text.slice(last), st });
    return out;
  }

  function renderExercise(R, ex, index) {
    // header: TYPE · title · instruction (kept together with the first question)
    const head = [
      R.textBlock([{ t: String(ex.type || "").toUpperCase() }, ...(ex.belt ? [{ t: "    " + ex.beltLabel, st: S.meta }] : [])], S.type, { after: 3 }),
      R.textBlock([{ t: `${index}.  `, st: Object.assign({}, S.exTitle, { color: C.shu }) }, { t: ex.title }], S.exTitle, { after: 3 }),
      R.textBlock([{ t: ex.instr || "" }], S.instr, { after: 6 })
    ];
    if (ex.source) head.push(R.textBlock([{ t: ex.source }], S.meta, { after: 6 }));
    let headBlock = R.stack(head, 4), headDone = false;
    const put = b => { if (!headDone) { const all = R.stack([headBlock, b]); R.ensure(all.h); headBlock.draw(R.page, R.y); R.y -= headBlock.h; headDone = true; } R.place(b.h, b.draw); };
    let qn = 0;
    (ex.parts || []).forEach(part => renderPart(R, part, put, () => ++qn));
    if (!headDone) put({ h: 0, draw: () => {} });
    R.space(10); R.rule(14);
  }

  function renderPart(R, part, put, nextN) {
    const ind = 18;
    const numbered = (n, blocks) => { const nb = R.textBlock([{ t: n + "" }], S.num, { width: ind }); return { h: Math.max(nb.h, blocks.reduce((s, b) => s + b.h, 0)) + 6, draw: (p, y) => { nb.draw(p, y); blocks.forEach(b => { b.draw(p, y); y -= b.h; }); } }; };
    const indented = (pieces, st, after = 0) => R.textBlock(pieces, st, { indent: ind, after });
    switch (part.k) {
      case "p": put(R.textBlock([{ t: part.text }], part.style ? S[part.style] : S.body, { after: 6 })); break;
      case "heading": put(R.textBlock([{ t: part.text }], S.bodyB, { after: 2 })); break;
      case "box": { // word box / reference box
        const P = root.PDFLib, inner = R.wrap([{ t: part.items.join("    ·    ") }], R.W - 20, S.body), h = R.linesHeight(inner) + 14;
        put({ h: h + 6, draw: (p, y) => { p.drawRectangle({ x: M.l, y: y - h, width: R.W, height: h, borderColor: P.rgb(...C.line), borderWidth: 0.8, color: P.rgb(...C.wash) }); R.drawLines(p, inner, M.l + 10, y - 7); } });
        break;
      }
      case "passage": {
        if (part.title) put(R.textBlock([{ t: part.title }], S.bodyB, { after: 4 }));
        part.paras.forEach(pa => { const pieces = part.numbered ? numGapPieces(pa, part.answers, S.text) : (part.gaps ? gapPieces(pa, part.answers, S.text) : [{ t: pa }]); const lines = R.wrap(pieces, R.W, S.text); lines.forEach((l, i) => put({ h: l.h + (i === lines.length - 1 ? 6 : 0), draw: (p, y) => R.drawLines(p, [l], M.l, y) })); });
        R.space(4); break;
      }
      case "q": part.items.forEach(it => {
        const n = nextN(), blocks = [];
        if (it.t === "mc") {
          if (it.text) blocks.push(indented(gapPieces(it.text, it.text.includes("___") ? [it.opts[it.ans] || "xxxxxxxx"] : [], S.body), S.body, 3));
          // options in columns when they are short, one per line otherwise
          const longest = Math.max(...it.opts.map(o => R.textWidth(o, S.opt))) + 34, cols = Math.max(1, Math.min(it.opts.length, Math.floor((R.W - ind) / Math.max(longest, 90))));
          const colW = (R.W - ind) / cols;
          const cells = it.opts.map((o, j) => R.wrap([{ box: true, st: S.opt }, { t: ` ${LETTERS[j]}  `, st: Object.assign({}, S.opt, { f: "bold", color: C.stone }) }, { t: o, st: S.opt }], colW - 8, S.opt));
          for (let r = 0; r < cells.length; r += cols) {
            const row = cells.slice(r, r + cols), h = Math.max(...row.map(c => R.linesHeight(c)));
            blocks.push({ h: h + 1, draw: (p, y) => row.forEach((c, j) => R.drawLines(p, c, M.l + ind + j * colW, y)) });
          }
        } else if (it.t === "gap") blocks.push(indented(gapPieces(it.text, it.ans, S.body), S.body));
        else if (it.t === "write") {
          if (it.text) blocks.push(indented([{ t: it.text }], it.textStyle ? S[it.textStyle] : S.body, 2));
          if (it.cue) blocks.push(indented([{ t: it.cue + " ", st: S.body }, { gap: R.W - ind - R.textWidth(it.cue + " ", S.body) - 4 }], S.body));
          else blocks.push(R.writeLines(it.lines || 1, ind, 20));
        } else if (it.t === "transform") {
          blocks.push(indented([{ t: it.first }], S.body, 1));
          if (it.kw) blocks.push(indented([{ t: it.kw.toUpperCase(), st: Object.assign({}, S.bodyB, { color: C.shu, track: 0.8 }) }], S.body, 1));
          blocks.push(indented([...(it.start ? [{ t: it.start + " " }] : []), { gap: Math.max(150, gapW(it.ans) + 30) }, ...(it.end ? [{ t: " " + it.end }] : [])], S.body));
        } else if (it.t === "tf") {
          blocks.push(indented([{ t: it.text }], S.body, 2));
          blocks.push(indented([{ box: true }, { t: " True      " }, { box: true }, { t: " False" }], S.opt));
        } else if (it.t === "dialogue") {
          it.lines.forEach(([sp, line], k) => blocks.push(indented([...(sp ? [{ t: sp + ":  ", st: S.bodyB }] : []), ...gapPieces(line, it.ansByLine ? it.ansByLine[k] : [], S.body)], S.body)));
        } else if (it.t === "order") {
          blocks.push(indented([{ t: it.words.join("  /  "), st: Object.assign({}, S.body, { color: C.ink2 }) }], S.body, 2));
          blocks.push(R.writeLines(1, ind, 20));
        } else if (it.t === "choose") { // a word or sentence with parts to underline / circle
          blocks.push(indented([{ t: it.text }], S.body, 2));
          if (it.display) blocks.push(indented([{ t: it.display, st: Object.assign({}, S.text, { size: 12.5 }) }], S.text, 2));
          if (it.write) blocks.push(R.writeLines(1, ind, 20));
        }
        put(numbered(n, blocks));
      }); break;
      case "match": {
        // two columns: numbered left items, lettered right items, answer boxes
        const half = (R.W - 16) / 2;
        const left = part.left.map((s, i) => R.wrap([{ t: `${nextN()}  `, st: S.num }, { t: s }, { t: "   " }, { gap: 22 }], half, S.body));
        const right = part.right.map((s, i) => R.wrap([{ t: `${LETTERS[i]}  `, st: S.num }, { t: s }], half, S.body));
        const rows = Math.max(left.length, right.length);
        for (let i = 0; i < rows; i++) {
          const l = left[i] || [], r = right[i] || [], h = Math.max(R.linesHeight(l), R.linesHeight(r)) + 5;
          put({ h, draw: (p, y) => { R.drawLines(p, l, M.l, y); R.drawLines(p, r, M.l + half + 16, y); } });
        }
        R.space(4); break;
      }
      case "sort": {
        const P = root.PDFLib;
        put(R.textBlock([{ t: part.items.join("    ·    ") }], S.body, { after: 8 }));
        const cw = R.W / part.cols.length, rows = Math.max(4, Math.ceil(part.items.length / part.cols.length) + 1), rh = 20;
        put({ h: rows * rh + 24, draw: (p, y) => part.cols.forEach((c, i) => {
          const x = M.l + i * cw;
          p.drawRectangle({ x: x + 2, y: y - rows * rh - 20, width: cw - 4, height: rows * rh + 20, borderColor: P.rgb(...C.line), borderWidth: 0.8 });
          R.drawLines(p, R.wrap([{ t: c }], cw - 12, S.bodyB), x + 8, y - 3);
          for (let k = 1; k < rows; k++) p.drawLine({ start: { x: x + 8, y: y - 20 - k * rh }, end: { x: x + cw - 8, y: y - 20 - k * rh }, thickness: 0.4, color: P.rgb(...C.line) });
        }) });
        break;
      }
      case "writing": {
        part.prompt.forEach(t => put(R.textBlock([{ t }], S.body, { after: 3 })));
        if (part.points && part.points.length) part.points.forEach(t => put(R.textBlock([{ t: "•  " + t }], S.body, { indent: 10 })));
        R.space(6);
        const n = part.lines || 16; for (let i = 0; i < n; i++) put(R.writeLines(1, 0, 22));
        break;
      }
      case "grid": { // short items in columns: prompt + blank (kana, kanji, verb forms…)
        const cols = part.cols || 4, cw = R.W / cols, st = part.big ? Object.assign({}, S.text, { size: 13 }) : S.body;
        for (let r = 0; r < part.items.length; r += cols) {
          const row = part.items.slice(r, r + cols).map(it => R.wrap([{ t: `${nextN()}  `, st: Object.assign({}, S.num, { size: 8.5, color: C.stone }) }, { t: it.q + "  ", st }, { gap: Math.max(30, cw - R.textWidth(it.q + "  ", st) - 28) }], cw - 6, S.body));
          const h = Math.max(...row.map(c => R.linesHeight(c))) + 6;
          put({ h, draw: (p, y) => row.forEach((c, j) => R.drawLines(p, c, M.l + j * cw, y)) });
        }
        R.space(4); break;
      }
      case "table": { // a table with some cells to complete
        const P = root.PDFLib, n = part.head.length, ws = part.widths || part.head.map(() => 1), tot = ws.reduce((a, b) => a + b, 0) + 0.35;
        const cw = ws.map(w => (R.W - 0) * w / tot), numW = R.W - cw.reduce((a, b) => a + b, 0);
        const cell = (t, st) => R.wrap([{ t: t || "" }], 0, st);
        const headLines = part.head.map((h, i) => R.wrap([{ t: h }], cw[i] - 10, Object.assign({}, S.bodyB, { size: 9 })));
        const hh = Math.max(...headLines.map(l => R.linesHeight(l))) + 8;
        const drawRow = (p, y, h, cells, header) => {
          let x = M.l + numW;
          if (header) p.drawRectangle({ x: M.l, y: y - h, width: R.W, height: h, color: P.rgb(...C.wash) });
          cells.forEach((c, i) => { if (c) R.drawLines(p, c, x + 5, y - 4); x += cw[i]; });
          p.drawLine({ start: { x: M.l, y: y - h }, end: { x: M.l + R.W, y: y - h }, thickness: 0.5, color: P.rgb(...C.line) });
        };
        put({ h: hh, draw: (p, y) => { drawRow(p, y, hh, headLines, true); p.drawLine({ start: { x: M.l, y }, end: { x: M.l + R.W, y }, thickness: 0.5, color: P.rgb(...C.line) }); } });
        part.rows.forEach(row => {
          const nn = nextN(), lines = row.map((c, i) => c ? R.wrap([{ t: c }], cw[i] - 10, S.body) : null);
          const h = Math.max(22, ...lines.filter(Boolean).map(l => R.linesHeight(l) + 8));
          const numL = R.wrap([{ t: String(nn) }], numW, Object.assign({}, S.num, { size: 8.5, color: C.stone }));
          put({ h, draw: (p, y) => { R.drawLines(p, numL, M.l + 2, y - 4); drawRow(p, y, h, lines, false); } });
        });
        R.space(6); break;
      }
      case "media": put(R.textBlock([{ t: "▶  ", st: Object.assign({}, S.bodyB, { color: C.shu }) }, { t: part.label, st: S.bodyB }, ...(part.detail ? [{ br: true }, { t: part.detail, st: S.meta }] : [])], S.body, { after: 8 })); break;
    }
  }

  /* ---------------- answer key ---------------- */
  function answersOf(ex) {
    const out = []; let n = 0;
    (ex.parts || []).forEach(part => {
      if (part.k === "q") part.items.forEach(it => { n++; out.push({ n, a: it.key, why: it.why }); });
      if (part.k === "match") part.left.forEach((_, i) => { n++; out.push({ n, a: part.ans[i] + (part.right[LETTERS.indexOf(part.ans[i])] ? "  " + part.right[LETTERS.indexOf(part.ans[i])] : ""), why: part.whys && part.whys[i] }); });
      if (part.k === "passage" && part.answers && part.keyed) part.answers.forEach((a, i) => out.push({ n: i + 1, a, why: part.whys && part.whys[i], gap: true }));
      if (part.k === "grid") part.items.forEach(it => { n++; out.push({ n, a: it.key }); });
      if (part.k === "table") part.keyRows.forEach(r => { n++; out.push({ n, a: r.join("  –  ") }); });
      if (part.k === "sort") out.push({ n: "", a: part.cols.map(c => `${c}: ${part.items.filter(w => part.ans[w] === c).join(", ")}`).join("   ·   ") });
      if (part.k === "writing" && part.model) out.push({ n: "", a: "Model answer: " + part.model.join(" ") });
    });
    return out;
  }
  function renderKey(R, list, withWhy) {
    R.newPage(false);
    R.place(30, (p, y) => { R.drawLines(p, R.wrap([{ t: "Answer key" }], R.W, S.h2), M.l, y); R.drawLines(p, R.wrap([{ t: "TEACHER'S VERSION" }], R.W, S.type), M.l, y - 4, { align: "right", width: R.W }); });
    R.place(10, (p, y) => p.drawLine({ start: { x: M.l, y: y - 3 }, end: { x: M.l + R.W, y: y - 3 }, thickness: 1, color: root.PDFLib.rgb(...C.shu) }));
    list.forEach((ex, i) => {
      const head = R.textBlock([{ t: `${i + 1}.  `, st: Object.assign({}, S.bodyB, { color: C.shu }) }, { t: ex.title, st: S.bodyB }, { t: "   " + ex.type, st: S.meta }], S.bodyB, { after: 3 });
      const all = answersOf(ex);
      // short answers without explanations are printed side by side to save paper
      if (all.length > 3 && all.every(r => String(r.a || "").length <= 30 && !(withWhy && r.why))) {
        const pieces = [];
        all.forEach(r => { if (r.n !== "") pieces.push({ t: r.n + " ", st: Object.assign({}, S.key, { f: "bold" }), keep: true }); pieces.push({ t: (r.a || "–") + "      ", keep: true, glue: r.n !== "" }); });
        R.ensure(head.h + 30); R.place(head.h, head.draw); R.flowText(pieces, S.key, { indent: 10 }); R.space(8); return;
      }
      const rows = all.map(r => {
        const pieces = [{ t: (r.n !== "" ? r.n + "   " : ""), st: Object.assign({}, S.key, { f: "bold" }) }, { t: r.a || "–" }];
        const b = [R.textBlock(pieces, S.key, { indent: 10 })];
        if (withWhy && r.why) b.push(R.textBlock([{ t: r.why }], S.keyWhy, { indent: 28, after: 2 }));
        return R.stack(b);
      });
      if (!rows.length) rows.push(R.textBlock([{ t: "Open answers: no key available." }], S.keyWhy, { indent: 10 }));
      R.ensure(head.h + rows[0].h); R.place(head.h, head.draw);
      rows.forEach(b => R.place(b.h, b.draw));
      R.space(8);
    });
  }

  /* ---------------- public API ---------------- */
  async function build({ exercises, meta, fonts, logo }) {
    const R = new Renderer(null, fonts);
    await R.init(Object.assign({}, meta, { logo }));
    exercises.forEach((ex, i) => renderExercise(R, ex, i + 1));
    if (meta.version === "teacher") renderKey(R, exercises, meta.explanations !== false);
    R.drawFooters();
    const bytes = await R.save();
    return { bytes, pages: R.pages.length };
  }
  // which optional fonts the content needs (the Japanese font is large: load it only when necessary)
  const needsJapanese = exs => /[　-鿿＀-￯]/.test(JSON.stringify(exs));
  root.DojoPDF = { build, needsJapanese, TTF };
})(typeof window !== "undefined" ? window : globalThis);
