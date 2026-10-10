# Notes

## Upstream

- Repo: https://github.com/rgehrsitz/executive-typora-theme
- Commit: `97dc286f5ec82c3173ae330fe8381776a6213a1d`
- Commit date: 2026-09-07T22:31:30-04:00 ("README: link the release zip in the install steps")
- Source file: `executive.css` (1944 lines), read in full.
- Fonts copied into `fonts/` (byte-identical, checked with `cmp`): `MonaspaceXenonVar.woff2`, `MonaspaceNeonVar.woff2`, `MonaspaceArgonVar.woff2`, and `executive/fonts/LICENSE-Monaspace-OFL.txt` as `fonts/OFL.txt`. Krypton and Radon not copied.
- Upstream font facts (from the comment in section 1 of executive.css): axes wght 200-800, wdth 100-125, slnt 0 to -11; default instance ExtraLight; italic via `font-style: oblique 0deg 11deg`.

## Upstream :root variables

Verbatim from `:root` (lines 88-134), with the VS Code key annotation as written upstream.

| Variable | Value | VS Code annotation |
|---|---|---|
| --exec-bg | #181e21 | editor.background |
| --exec-bg-raised | #1c2424 | editorWidget.background |
| --exec-bg-panel | #212828 | titleBar.activeBackground |
| --exec-bg-sidebar | #242e2e | sideBar.background |
| --exec-bg-menu | #273030 | menu.background |
| --exec-bg-input | #1c2728 | input.background |
| --exec-bg-hover | #2a3f3f | menu.selectionBackground |
| --exec-bg-active | #2f3f3f | list.activeSelectionBackground |
| --exec-jade-deep | #1b6164 | statusBar.background |
| --exec-jade | #1c6f73 | badge.background |
| --exec-jade-bright | #109299 | editorSuggestWidget.highlightFg |
| --exec-jade-light | #1e959d | textLink.foreground |
| --exec-teal | #02c4ba | support.function |
| --exec-teal-bright | #32d4db | editorLink.activeForeground |
| --exec-brown | #5e3e1d | input.border / indent guides |
| --exec-brown-mid | #8c5d2c | editorIndentGuide.activeBackground |
| --exec-brown-line | #543529 | panel.border |
| --exec-brown-soft | #452f18 | sideBar.border |
| --exec-tan | #a57746 | editorLineNumber.foreground |
| --exec-tan-light | #c9a178 | breadcrumb.foreground |
| --exec-comment | #996b3d | comment |
| --exec-muted | #79726b | activityBar.inactiveForeground |
| --exec-placeholder | #8a7d70 | input.placeholderForeground |
| --exec-text | #fdc78e | editor.foreground |
| --exec-text-strong | #fde4bd | tab.activeForeground |
| --exec-text-soft | #dec1a3 | terminal.foreground |
| --exec-text-sidebar | #ffcf9d | sideBar.foreground |
| --exec-text-title | #ffdcb7 | titleBar.activeForeground |
| --exec-text-input | #dec6ad | input.foreground |
| --exec-cream | #ffe6cc | button.foreground |
| --exec-cursor | #ffc281 | editorCursor.foreground |
| --exec-lineno-active | #ffc587 | editorLineNumber.activeForeground |
| --exec-coral | #ff7353 | markup.heading / variable |
| --exec-orange | #dd8730 | markup.bold / constant.numeric |
| --exec-gold | #ffc848 | entity.name.type |
| --exec-sand | #d9bd7d | keyword.operator / punctuation |
| --exec-green | #acdb47 | string / markup.inline.raw |
| --exec-purple | #ab66c0 | keyword / markup.italic |
| --exec-blue | #2b9ed1 | entity.name.function / link title |
| --exec-red | #bc4024 | editorError.foreground |
| --exec-warning | #d6ab47 | editorWarning.foreground |
| --exec-selection | #1b676b | selection.background |
| --exec-selection-code | #1cb9c034 | editor.selectionBackground |
| --exec-find | #20556d | editor.findMatchBackground |
| --exec-find-current | #b28a2c | progressBar.background |
| --exec-btn | #16666b | button.background |
| --exec-btn-hover | #208086 | button.hoverBackground |

Other colour-bearing `:root` entries (not `--exec-*`):

- `--node-fill: #112424` (annotation: sideBarSectionHeader.background), used for Mermaid node fill.
- `--mermaid-theme: night`, `--mermaid-font-family: "Monaspace Argon", "Monaspace Neon", sans-serif`.
- Typora variables (`--bg-color`, `--text-color`, `--select-text-bg-color`, etc.) all point at `var(--exec-*)`; no literals.
- Weights: `--prose-weight: 400`, `--strong-weight: 700`.
- Feature lists: `--features-prose` and `--features-code` = `"calt" 1, "liga" 1, "ss01" 1` ... `"ss09" 1`; `--features-safe` = `"calt" 1, "liga" 1`.

## Upstream hard-coded literals outside :root

Comment-only literals at lines 808-822 (the CodeMirror token-to-scope table) are documentation, not styling, and are omitted.

| Line | Literal | Selector | What it styles | Palette token |
|---|---|---|---|---|
| 556 | #2b3536 | `code, tt, var` | inline code border | --exec-border-code |
| 564 | #2c3838 | `kbd` | kbd background | --exec-kbd-bg |
| 696 | #1e2828 | `th` | table header background (tab.inactiveBackground) | --exec-bg-th |
| 703 | rgba(255, 255, 255, .02) | `tbody tr:nth-child(2n)` | zebra row background | --exec-zebra |
| 754 | #2b3536 | `.md-toc` | TOC border | --exec-border-code |
| 784 | rgba(255, 255, 255, .02) | `.md-alert` | alert background | --exec-zebra |
| 832 | #2b3536 | `pre.md-fences, .md-fences` | code fence border | --exec-border-code |
| 858 | #2b3536 | `.md-fences-with-lineno .CodeMirror-gutters, .CodeMirror-gutters` | gutter right border | --exec-border-code |
| 873 | rgba(255, 255, 255, .04) | `.cm-s-inner .CodeMirror-activeline-background` | active line in fences | none |
| 891 | #888888 | `.cm-s-inner .CodeMirror-matchingbracket` | matching bracket outline | none |
| 892 | rgba(0, 100, 0, .1) | `.cm-s-inner .CodeMirror-matchingbracket` | matching bracket background | none |
| 1184 | rgba(255, 255, 255, .04) | `.cm-s-typora-default .CodeMirror-activeline-background` | active line in source mode | none |
| 1227 | #684f34 | `#top-titlebar` | title bar bottom border (titleBar.border) | none |
| 1282 | rgba(94, 62, 29, .22) | `.file-library-node:not(.active) > .file-node-content:hover ~ .file-node-background`, same for `.file-tree-node` | sidebar file hover (list.hoverBackground) | none |
| 1296 | rgba(94, 62, 29, .3) | `.file-list-item` | file list row separator | none |
| 1388 | rgba(0, 0, 0, .6) | `#sidebar-files-menu` | menu box-shadow | none (see Discrepancies) |
| 1400 | #2c4141 | `footer.ty-footer` | status bar top border (statusBar.border) | none |
| 1459 | #5e3f1d | `.context-menu, .dropdown-menu, #spell-check-panel` | menu border (menu.border) | none (1 off from --exec-brown #5e3e1d) |
| 1461 | rgba(0, 0, 0, .45) | `.context-menu, .dropdown-menu, #spell-check-panel` | menu box-shadow | --exec-shadow |
| 1474 | #f7d6b5 | `.dropdown-menu > li > a:hover` and related | menu item hover text (menu.selectionForeground) | none |
| 1479 | #225d60 | `.dropdown-menu .divider, .context-menu.dropdown-menu .divider` | menu separator (menu.separatorBackground) | none |
| 1492 | rgba(39, 48, 48, .96) | `#toc-dropmenu` | TOC dropdown background (bg-menu at 96%) | none |
| 1497 | #225d60 | `#toc-dropmenu .divider` | TOC dropdown separator | none |
| 1536 | #1c2828 | `.native-window #md-notification, #md-notification` | notification background (notifications.background) | none |
| 1537 | #e4c98b | same | notification text (notifications.foreground) | none |
| 1538 | #493016 | same | notification border (notifications.border) | none |
| 1557 | rgb(0 0 0 / 40%) | `.ty-editor-toolbar` | toolbar drop-shadow filter | none |
| 1573 | rgba(0, 0, 0, .6) | `#typora-quick-open` | quick open box-shadow | none (see Discrepancies) |
| 1695 | #ffffff | `.btn-primary:hover, .btn-primary:focus, .modal-content .btn-primary:hover` | primary button hover text | none |
| 1711 | rgba(0, 0, 0, .6) | `.modal-content` | modal box-shadow | none (see Discrepancies) |
| 1754 | rgba(8, 12, 13, .7) | `.modal-backdrop` | modal backdrop | --exec-overlay |
| 1879 | rgba(117, 108, 92, .4) | `::-webkit-scrollbar-thumb` | scrollbar thumb (scrollbarSlider.background) | --exec-scrollbar |
| 1884 | rgba(100, 96, 86, .7) | `::-webkit-scrollbar-thumb:hover` | scrollbar thumb hover (scrollbarSlider.hoverBackground) | none |
| 1888 | rgba(190, 177, 151, .4) | `::-webkit-scrollbar-thumb:active` | scrollbar thumb active (scrollbarSlider.activeBackground) | none |
| 1896 | rgba(117, 108, 92, .4) | `#typora-sidebar:hover div.sidebar-content-content::-webkit-scrollbar-thumb:horizontal` | sidebar horizontal scrollbar | --exec-scrollbar |

Literals marked "none" have no palette token yet. They are Typora-specific chrome or minor states; whether any is needed for Obsidian is decided in steps 5-7 and logged under "Tokens added".

## Upstream selectors for alerts, code tokens, Mermaid

### GitHub alerts (Typora `.md-alert`)

- Container: `.md-alert` - `border-left-width: 3px`, `border-radius: 0 4px 4px 0`, background rgba(255,255,255,.02).
- Title: `.md-alert-text` - heading font, weight 650.
- Border colour per type: `.md-alert-note` blue, `.md-alert-tip` green, `.md-alert-important` purple, `.md-alert-warning` gold, `.md-alert-caution` coral.
- Title colour per type: `.md-alert-text-note` blue, `.md-alert-text-tip` green, `.md-alert-text-important` purple, `.md-alert-text-warning` gold, `.md-alert-text-caution` coral.

### Code tokens in fences (`.cm-s-inner`, CodeMirror 5)

| Selector | Token |
|---|---|
| .cm-keyword | purple |
| .cm-atom, .cm-number | orange |
| .cm-def | blue |
| .cm-variable | coral |
| .cm-variable-2 | gold |
| .cm-variable-3, .cm-type | teal |
| .cm-property | coral |
| .cm-operator, .cm-punctuation, .cm-bracket | sand |
| .cm-comment | comment, italic |
| .cm-string | green |
| .cm-string-2 | teal |
| .cm-meta, .cm-qualifier, .cm-attribute | orange |
| .cm-builtin | teal |
| .cm-tag | coral |
| .cm-header | coral, weight 600 |
| .cm-quote | comment |
| .cm-hr | brown-mid |
| .cm-link | purple, underline |
| .cm-url | purple |
| .cm-em | purple italic |
| .cm-strong | orange, weight 700 |
| .cm-strikethrough | muted, line-through |
| .cm-error, .cm-invalidchar | red |
| .cm-negative | coral (markup.deleted.diff) |
| .cm-positive | green (markup.inserted.diff) |
| .cm-searching | find background, cream text |
| .CodeMirror-matchingbracket | text-strong, literal outline/background |
| .CodeMirror-nonmatchingbracket | red |
| .CodeMirror-linenumber | tan; active line number lineno-active |
| .CodeMirror-cursor | 2px cursor colour |
| .CodeMirror-selected | selection-code |

Note: the spec role table maps `regexp` to teal, matching upstream `.cm-string-2`; upstream maps `variable-2` to gold, which the spec role table does not mention.

Source mode (`.cm-s-typora-default`) uses a separate Markdown-oriented mapping (header coral, formatting-header blue, strong orange, em purple, code green, link blue, url purple, list markers coral, formatting tan). This is the closest analogue to Obsidian Live Preview markup tokens.

### Mermaid (`.md-diagram-panel`)

- Font: `--mermaid-font-family` (Argon) forced with `!important` on `svg text`, `tspan`, `foreignObject` descendants, `svg[aria-roledescription] ...`, and `body > svg text/tspan` (measurement SVG).
- Node shapes (`.node rect|circle|ellipse|polygon|path`, `.actor`, `.statediagram-state rect`, `g.classGroup rect`, `.labelBox`): fill `--node-fill`, stroke brown-mid.
- Labels (`.nodeLabel`, `.edgeLabel`, `.label`, `.stateLabel`, `g.classGroup text`, `text.actor > tspan`, `.labelText`, `.loopText`, `.messageText`, `.sequenceNumber`): text-strong.
- Cluster and titles (`.cluster-label`, `.titleText`, `.classTitle`): gold.
- Edges (`.edgePath .path`, `.flowchart-link`, `.transition`, `.relation`, `.messageLine0/1`, `.loopLine`): stroke tan.
- `.actor-line`: stroke brown.
- Markers (`marker path`, `.arrowheadPath`, `#arrowhead path`, `#crosshead path`, `#filled-head path`, `.marker`): fill and stroke tan.
- Edge label background (`.edgeLabel`, `.edgeLabel rect`, `.labelBkg`): bg.
- Clusters (`.cluster rect|polygon`): fill bg-raised, stroke brown.
- Notes (`.note`, `.note rect`): fill brown, stroke brown-mid; `.noteText`: cream.
- Activations (`.activation0-2`): fill jade, stroke jade-light.
- State start/end (`.start-state`, `.end-state`, `.statediagram-state .divider`, `g.stateGroup .state-start`): jade.
- `[lang='mermaid'] .label`: text.
- All rules use `!important` because Mermaid injects id-scoped styles. Upstream covers flowchart, sequence, state, class only.

## Discrepancies with spec

Colour values: every spec dark value with an upstream equivalent matches upstream exactly. No dark value in `palette.json` had to deviate from the spec table.

Partial or annotation-level differences:

| Token | Spec | Upstream | Action |
|---|---|---|---|
| --exec-shadow | rgba(0,0,0,.45) for "menus and modals" | .45 only on `.context-menu, .dropdown-menu, #spell-check-panel`; `#sidebar-files-menu`, `#typora-quick-open` and `.modal-content` use rgba(0,0,0,.6) | Kept .45 (the menu value, which upstream does use). Modals upstream are darker; not represented by a token. |
| --exec-jade-bright | source "focus ring" | annotation `editorSuggestWidget.highlightFg`; used as `--focus-ring-color` and input focus border | Value identical; kept spec source text. |
| --exec-brown | source "input.border" | annotation "input.border / indent guides" | Value identical. |
| --exec-blue | source "entity.name.function / link" | annotation "entity.name.function / link title" | Value identical. |
| --exec-node-fill | "upstream --node-fill (Mermaid)" | `--node-fill: #112424`, annotation sideBarSectionHeader.background, not an `--exec-*` variable | Value identical. |
| --exec-heading | NEW | not in upstream; upstream headings H1-H2 use --exec-coral | Dark = coral value #ff7353, as spec says. |
| --exec-mark-bg / --exec-mark-text | highlight background / text | not variables upstream; `mark` uses var(--exec-brown) and var(--exec-cream) | Values identical. |
| --exec-selection-text | added | not a variable upstream; `::selection` uses var(--exec-cream) | Value identical (#ffe6cc). |

## Tokens added

## Build and check

Run from the repo root (Node >= 20, no dependencies):

```
node scripts/build.mjs && node scripts/check.mjs
```

`scripts/build.mjs` generates `src/00-palette.css` (`.theme-dark` and `.theme-light` blocks from `palette.json`), `src/01-fonts.css` (base64 `@font-face` for Executive Xenon, Neon, Argon) and `src/02-callouts.css`, then concatenates every `src/*.css` in filename order into `theme.css` with a header (version from `manifest.json`, upstream commit, licences, credits). Output is deterministic.

`scripts/check.mjs` fails on: `var(--exec-*)` not in `palette.json`; a token missing a dark or light value; hex, `rgb()`, `rgba()`, `hsl()` literals in hand-written `src/10-*`, `20-*`, `30-*` files (comments ignored); `theme.css` or a generated `src/` file differing from a fresh in-memory build; `@import` or remote `url()` in `theme.css`; a light text token below 4.5:1 against `--exec-bg` and `--exec-bg-raised` (`--exec-heading` against `--exec-bg` only). Dark contrast is printed as a report and never fails.

Dark report at time of writing (below 4.5:1 vs `--exec-bg`, upstream values, not changed): tan 4.27, comment 3.63, muted 3.56, purple 4.33, red 3.13, jade 2.86.

### Callout mapping

`--callout-color` is emitted per mode as an RGB triplet of the token below. The mapping lives in `CALLOUT_TOKENS` at the top of `scripts/build.mjs`. Obsidian aliases get the colour of their base type.

| Callout types | Token |
|---|---|
| note, info, todo | --exec-blue |
| abstract, summary, tldr | --exec-teal |
| tip, hint, success, check, done | --exec-green |
| important, example | --exec-purple |
| question, help, faq, warning, attention | --exec-gold |
| caution | --exec-coral |
| failure, fail, missing, danger, error, bug | --exec-red |
| quote, cite | --exec-tan-light |

## Open questions

- `manifest.json` `minAppVersion` is the placeholder `1.0.0`, pending verification against the Obsidian docs.
- `src/02-callouts.css` uses native CSS nesting (`.theme-dark { .callout[data-callout="x"] { ... } }`). Chromium supports this from 112, so it needs an Obsidian build on Electron 24 or later. If `minAppVersion` ends up older, switch to flat `.theme-dark .callout[...]` selectors.
- `author` and `authorUrl` in `manifest.json` are placeholders.

## Post-build open questions and judgement calls

- `.markdown-rendered` (Reading view) and `.cm-editor` (editor) are not in the developer docs. Only forum posts describe them. Everything in `20-content.css` depends on them. Verify before release.
- `.menu`, `.callout-title`, `.callout-content`, `.mermaid`, the `.cm-*` Markdown classes and the Prism `.token.*` classes are undocumented. Each is used only where no documented variable exists.
- `--text-selection` sets the selection background only. `::selection` in `20-content.css` sets the selected-text colour to `--exec-selection-text`.
- Highlight text colour (`--exec-mark-text`) has no documented variable. Only `--text-highlight-bg` is documented, so the text colour is set by a selector.
- Code-token roles `type`, `builtin`, `number`, `atom` and `meta` have no Obsidian variables of their own. `--code-value` is orange, `--code-important` (regex) is teal and `--code-tag` is coral. The remaining roles use selectors in `20-content.css`.
- Modal backdrop (`--exec-overlay`) and menu/modal shadow (`--exec-shadow`) are not mapped to a variable. `--background-modifier-cover` is not verified, and `.modal-bg` is undocumented.
- `--scrollbar-bg` is left at the default. No token fits both modes.
- Notices use `--background-modifier-message`. Whether Obsidian uses it there is unverified.
- Callouts: the `color-mix(in srgb, rgb(var(--callout-color)) 10%, transparent)` tint was dropped, because `check.mjs` forbids `rgb(` in hand-written files. It needs Chromium 111+. The callout background tint is therefore not set yet.
- Callout `-rgb` and `-hsl` colour variables are deprecated since Obsidian 1.13, and the docs recommend `color-mix(in oklch, ...)`. The callout triplets are still the `--callout-color` RGB form.
- Mermaid: only flowchart, sequence, state and class diagrams are styled. Per-diagram theme variables and other diagram types cannot be matched from CSS.
- `manifest.json` `minAppVersion` is `1.0.0`. The official sample theme uses `1.10.6`. The docs recommend no value. Decide before release.
- `manifest.json` `author` and `authorUrl` are placeholders.
- `test-vault/.obsidian/themes/Executive` links back to the repo root. Harmless for Obsidian, but folder-walking tools may loop.
- `test-vault/assets/sample-chart.svg` contains hex colours. `check.mjs` scans only `src/`, so this is an accepted exception to "palette.json is the only colour source".
- Dark-mode contrast below 4.5:1 (report only): tan 4.27, comment 3.63, muted 3.56, purple 4.33, red 3.13, jade 2.86 against `--exec-bg`.
- Light contrast: `--exec-heading` is the lowest at 4.56:1 against `--exec-bg`. It passes.
- `--exec-shadow` uses 0.45 for menus. Upstream modals use 0.6, and no token covers 0.6.
