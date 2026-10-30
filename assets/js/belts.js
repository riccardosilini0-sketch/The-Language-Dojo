/* Language Dojo — the belt system shared by all training resources */
window.DojoBelts = (function () {
  const list = [
    { level: 1, name: "White belt", short: "White", color: "#f4efe4", stroke: "#cfc6b6" },
    { level: 2, name: "Yellow belt", short: "Yellow", color: "#e3b93c" },
    { level: 3, name: "Orange belt", short: "Orange", color: "#dc7f2f" },
    { level: 4, name: "Green belt", short: "Green", color: "#4f8f5c" },
    { level: 5, name: "Blue belt", short: "Blue", color: "#3a5f9e" },
    { level: 6, name: "Black belt", short: "Black", color: "#1d1b18" }
  ];
  const get = l => list[Math.max(1, Math.min(6, l)) - 1];
  function svg(level) {
    const b = get(level), s = b.stroke || "rgba(0,0,0,.18)";
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M6 25h52v12H6z" fill="${b.color}" stroke="${s}" stroke-width="1.4"/><path d="M27 41l-6 16 7-3 4 5 1-18M37 41l6 16-7-3-4 5-1-18" fill="${b.color}" stroke="${s}" stroke-width="1.4" stroke-linejoin="round"/><rect x="25" y="21" width="14" height="20" rx="2" fill="${b.color}" stroke="${s}" stroke-width="1.4"/></svg>`;
  }
  const chip = (level, label) => { const b = get(level); return `<span class="belt-chip"><i style="background:${b.color}"></i>${label || b.name}</span>`; };
  return { list, get, svg, chip };
})();
