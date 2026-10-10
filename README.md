# Executive for Obsidian

A warm jade and coral theme for Obsidian, ported from the Executive Typora theme and set in GitHub's Monaspace fonts.

## What it is

One theme that follows Obsidian's light/dark setting. There is no separate theme per mode: switch between light and dark under Settings > Appearance and Executive restyles everything from the matching palette. Every colour comes from `palette.json`, which holds a dark and a light value for each token.

![Executive in dark mode](docs/screenshot-dark.png)

![Executive in light mode](docs/screenshot-light.png)

The two screenshots above are placeholders. Replace `docs/screenshot-dark.png` and `docs/screenshot-light.png` with real captures of the test vault.

## Install

Manual:

1. Create `<vault>/.obsidian/themes/Executive/`.
2. Copy `theme.css` and `manifest.json` into it.
3. Enable Executive under Settings > Appearance > Themes.

Symlink, for development:

```sh
scripts/link-vault.sh <vault>
```

This links the repository root to `<vault>/.obsidian/themes/Executive`. Pass `--create` if the vault has no `.obsidian` folder yet. It refuses to replace an existing real directory.

## Development

Requires Node 20 or newer. No npm dependencies.

```sh
node scripts/build.mjs && node scripts/check.mjs
```

`build.mjs` generates the palette, font and callout CSS in `src/` and concatenates `src/*.css` into `theme.css`, which is committed. `check.mjs` validates tokens, colour literals, contrast and that `theme.css` matches a fresh build. CI runs both and fails if `theme.css` is out of date. Pushing a `v*` tag creates a release with `theme.css` and `manifest.json` attached.

`test-vault/` covers headings, inline formatting, lists, callouts, tables, footnotes, properties, code, math, Mermaid and images. Run `scripts/link-vault.sh` with no argument to link the theme into it, then open the folder as a vault and toggle light and dark.

## Updating from upstream

1. Clone a fresh copy of [rgehrsitz/executive-typora-theme](https://github.com/rgehrsitz/executive-typora-theme).
2. Re-run the comparison recorded in `NOTES.md` against the new `executive.css`.
3. Update the dark values in `palette.json`. Light values are maintained here.
4. Run `node scripts/build.mjs && node scripts/check.mjs`.

## Credits

- rgehrsitz for the Executive Typora theme this port is derived from.
- Kyle Alm and contributors for the Executive VS Code theme the palette originates from.
- GitHub Next for the Monaspace fonts.

## Licences

The theme is MIT licensed, see `LICENSE`. The Monaspace fonts in `fonts/` and embedded in `theme.css` are under the SIL Open Font License 1.1, see `fonts/OFL.txt`.
