#!/bin/sh
set -eu

usage() {
  echo "Usage: scripts/link-vault.sh [--create] [<vault-path>]" >&2
  echo "Symlinks this repository into <vault>/.obsidian/themes/Executive (default vault: test-vault)." >&2
  exit 2
}

create=0
vault=""
for arg in "$@"; do
  case "$arg" in
    --create) create=1 ;;
    -h|--help) usage ;;
    -*) echo "Unknown option: $arg" >&2; usage ;;
    *)
      [ -z "$vault" ] || usage
      vault="$arg"
      ;;
  esac
done

repo=$(cd "$(dirname "$0")/.." && pwd -P)
[ -n "$vault" ] || vault="$repo/test-vault"

if [ ! -d "$vault" ]; then
  echo "Vault not found: $vault" >&2
  exit 1
fi
vault=$(cd "$vault" && pwd -P)

if [ ! -d "$vault/.obsidian" ]; then
  if [ "$create" -eq 1 ]; then
    mkdir "$vault/.obsidian"
  else
    echo "No .obsidian directory in $vault. Open it in Obsidian first or pass --create." >&2
    exit 1
  fi
fi

themes="$vault/.obsidian/themes"
target="$themes/Executive"
mkdir -p "$themes"

if [ -e "$target" ] && [ ! -L "$target" ]; then
  echo "Refusing to overwrite $target: it is a real file or directory. Remove it first." >&2
  exit 1
fi

ln -sfn "$repo" "$target"
echo "Linked $target -> $repo"
echo "Enable it under Settings > Appearance > Themes > Executive."
