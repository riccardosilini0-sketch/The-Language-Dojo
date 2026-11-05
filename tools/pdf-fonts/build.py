"""Builds the fonts embedded in PDF worksheets (assets/fonts/pdf/).

PDF worksheets need real TrueType fonts so that every character survives:
IPA symbols, Japanese kana and kanji, typographic punctuation. This script
subsets free fonts available on most Linux systems:

  sans.ttf / sans-bold.ttf  Inter Regular / SemiBold (OFL)  - converted from CFF to TrueType
  serif-bold.ttf            Caladea Bold (Apache 2.0)        - titles
  fallback.ttf              DejaVu Sans (free licence)       - IPA and any symbol Inter lacks
  jp.ttf                    IPA P Gothic (IPA Font License)  - kana, all JIS level-1 kanji and
                                                               every kanji used in the site data

Run again after adding content with unusual characters:  python3 tools/pdf-fonts/build.py
"""
import os, re, glob
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter, Options
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib.tables._g_l_y_f import table__g_l_y_f
from fontTools.ttLib.tables._l_o_c_a import table__l_o_c_a
from fontTools.ttLib import newTable

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
OUT = os.path.join(ROOT, "assets", "fonts", "pdf")
SRC = {
    "sans": "/usr/share/fonts/opentype/inter/Inter-Regular.otf",
    "sans-bold": "/usr/share/fonts/opentype/inter/Inter-SemiBold.otf",
    "serif-bold": "/usr/share/fonts/truetype/crosextra/Caladea-Bold.ttf",
    "fallback": "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "jp": "/usr/share/fonts/opentype/ipafont-gothic/ipagp.ttf",
}

# every character used in the site content
used = set()
for f in glob.glob(os.path.join(ROOT, "english", "**", "*.js"), recursive=True) + glob.glob(os.path.join(ROOT, "japanese", "**", "*.js"), recursive=True) + glob.glob(os.path.join(ROOT, "assets", "js", "*.js")):
    used |= set(open(f, encoding="utf-8").read())

def rng(a, b): return set(chr(c) for c in range(a, b + 1))
latin = rng(0x20, 0x7E) | rng(0xA0, 0x17F) | rng(0x2010, 0x2044) | set("→←↑↓✓✗•·…€£°×÷≈≠≤≥½¼¾")
ipa = rng(0x250, 0x2AF) | rng(0x2B0, 0x2FF) | rng(0x300, 0x36F) | set("θðŋæɒʌəɜɪʊɔʃʒːˈˌɡ")
kana = rng(0x3000, 0x303F) | rng(0x3040, 0x309F) | rng(0x30A0, 0x30FF) | rng(0xFF00, 0xFFEF)
jis1 = set()
for row in range(16, 48):
    for cell in range(1, 95):
        try: jis1.add(bytes([0xA0 + row, 0xA0 + cell]).decode("euc_jp"))
        except UnicodeDecodeError: pass
cjk_used = set(c for c in used if 0x3000 <= ord(c) <= 0x9FFF or 0xFF00 <= ord(c) <= 0xFFEF)
latin_used = set(c for c in used if ord(c) < 0x3000)

def otf_to_ttf(font):
    """CFF outlines -> TrueType quadratic outlines (PDF FontFile2 needs glyf)."""
    gs = font.getGlyphSet(); order = font.getGlyphOrder()
    glyf = newTable("glyf"); glyf.glyphOrder = order; glyf.glyphs = {}
    for name in order:
        pen = TTGlyphPen(gs)
        gs[name].draw(Cu2QuPen(pen, 1.0, reverse_direction=True))
        glyf.glyphs[name] = pen.glyph()
    font["glyf"] = glyf; font["loca"] = newTable("loca")
    font["maxp"].tableVersion = 0x00010000
    for a in ("maxZones", "maxTwilightPoints", "maxStorage", "maxFunctionDefs", "maxInstructionDefs", "maxStackElements", "maxSizeOfInstructions", "maxComponentElements", "maxPoints", "maxContours", "maxCompositePoints", "maxCompositeContours", "maxComponentDepth"):
        setattr(font["maxp"], a, 0)
    font["maxp"].maxZones = 1
    font["head"].indexToLocFormat = 0; font["head"].glyphDataFormat = 0
    del font["CFF "]
    if "VORG" in font: del font["VORG"]
    font.sfntVersion = "\x00\x01\x00\x00"
    font["post"].formatType = 2.0; font["post"].extraNames = []; font["post"].mapping = {}
    font["post"].glyphOrder = order
    return font

def build(key, chars):
    font = TTFont(SRC[key])
    opts = Options(); opts.layout_features = ["kern"]; opts.name_IDs = ["*"]; opts.notdef_outline = True
    opts.hinting = False; opts.desubroutinize = True
    s = Subsetter(opts); s.populate(unicodes=[ord(c) for c in chars]); s.subset(font)
    if "CFF " in font: font = otf_to_ttf(font)
    # subsets are modified versions: they get their own names (the IPA Font License forbids "IPA" in derived names)
    fam = "DojoPDF " + key.replace("-", " ").title()
    for rec in font["name"].names:
        if rec.nameID in (1, 3, 4, 16, 21): rec.string = fam
        elif rec.nameID == 6: rec.string = fam.replace(" ", "-")
    path = os.path.join(OUT, key + ".ttf"); font.save(path)
    cm = TTFont(path).getBestCmap()
    print(f"{key:11} {os.path.getsize(path)//1024:5} KB  {len(cm)} characters")

os.makedirs(OUT, exist_ok=True)
build("sans", latin | latin_used - kana - cjk_used)
build("sans-bold", latin | latin_used - kana - cjk_used)
build("serif-bold", latin | latin_used - kana - cjk_used)
build("fallback", latin | ipa | latin_used - kana - cjk_used)
build("jp", kana | jis1 | cjk_used | set(" 0123456789"))
