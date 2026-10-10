import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, SRC, GENERATED, MODES, build, readPalette, parseColor } from "./build.mjs";

const TEXT_TOKENS = [
  "text", "text-strong", "text-soft", "tan-light", "tan", "comment", "muted", "heading",
  "coral", "orange", "gold", "sand", "green", "purple", "blue", "teal", "red", "warning", "jade",
].map((t) => `--exec-${t}`);
const BG_ONLY = new Set(["--exec-heading"]);
const MIN_RATIO = 4.5;

const failures = [];
const tokens = readPalette();

for (const [name, t] of Object.entries(tokens)) {
  for (const mode of MODES) {
    if (typeof t[mode] !== "string" || !t[mode].trim()) failures.push(`${name}: missing ${mode} value`);
  }
}

const srcFiles = existsSync(SRC) ? readdirSync(SRC).filter((f) => f.endsWith(".css")).sort() : [];
const handWritten = srcFiles.filter((f) => /^(10|20|30)-/.test(f));

const LITERALS = [
  [/#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b/gi, "hex"],
  [/\brgba?\s*\(/gi, "rgb()/rgba()"],
  [/\bhsla?\s*\(/gi, "hsl()"],
];

for (const file of srcFiles) {
  const css = readFileSync(join(SRC, file), "utf8");
  for (const m of css.matchAll(/var\(\s*(--exec-[\w-]+)/g)) {
    if (!tokens[m[1]]) failures.push(`src/${file}: var(${m[1]}) not defined in palette.json`);
  }
  if (!handWritten.includes(file)) continue;
  const code = css.replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, " "));
  for (const [re, label] of LITERALS) {
    for (const m of code.matchAll(re)) {
      const line = code.slice(0, m.index).split("\n").length;
      failures.push(`src/${file}:${line}: ${label} colour literal "${m[0]}"`);
    }
  }
}

const fresh = build();
const themePath = join(ROOT, "theme.css");
const theme = existsSync(themePath) ? readFileSync(themePath, "utf8") : null;
if (theme === null) failures.push("theme.css missing; run node scripts/build.mjs");
else if (theme !== fresh.theme) failures.push("theme.css differs from a fresh build; run node scripts/build.mjs");
for (const name of GENERATED) {
  const p = join(SRC, name);
  if (!existsSync(p) || readFileSync(p, "utf8") !== fresh.generated[name]) {
    failures.push(`src/${name} differs from a fresh build; run node scripts/build.mjs`);
  }
}
if (theme !== null) {
  if (/@import/i.test(theme)) failures.push("theme.css contains @import");
  if (/url\(\s*["']?\s*https?:/i.test(theme)) failures.push("theme.css contains a remote url()");
}

function luminance({ r, g, b }) {
  const ch = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

function ratio(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

for (const mode of MODES) {
  const strict = mode === "light";
  const bg = parseColor(tokens["--exec-bg"][mode]);
  const raised = parseColor(tokens["--exec-bg-raised"][mode]);
  const rows = [];
  for (const name of TEXT_TOKENS) {
    if (!tokens[name]) {
      failures.push(`${name}: text token not in palette.json`);
      continue;
    }
    const fg = parseColor(tokens[name][mode]);
    if (fg.a < 1) {
      if (strict) failures.push(`${name} (light): text token is not opaque (${tokens[name][mode]})`);
      rows.push([name, tokens[name][mode], "n/a", "n/a", "not opaque"]);
      continue;
    }
    const rBg = ratio(fg, bg);
    const rRaised = ratio(fg, raised);
    const needRaised = !BG_ONLY.has(name);
    const ok = rBg >= MIN_RATIO && (!needRaised || rRaised >= MIN_RATIO);
    if (strict && !ok) {
      failures.push(
        `${name} (light ${tokens[name][mode]}): contrast ${rBg.toFixed(2)} vs bg, ${rRaised.toFixed(2)} vs bg-raised` +
          `${needRaised ? "" : " (bg only)"}; needs ${MIN_RATIO}:1`,
      );
    }
    rows.push([name, tokens[name][mode], rBg.toFixed(2), needRaised ? rRaised.toFixed(2) : `${rRaised.toFixed(2)}*`, ok ? "ok" : "LOW"]);
  }
  console.log(`\n${mode} contrast ${strict ? "(enforced, 4.5:1)" : "(report only)"}`);
  const head = ["token", "value", "vs bg", "vs bg-raised", "status"];
  const widths = head.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)));
  const fmt = (r) => r.map((c, i) => c.padEnd(widths[i])).join("  ");
  console.log(fmt(head));
  for (const r of rows) console.log(fmt(r));
  if (rows.some((r) => r[3].endsWith("*"))) console.log("* not enforced for this token");
}

if (failures.length) {
  console.error(`\ncheck failed (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("\ncheck passed");
