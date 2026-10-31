#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
NAME="youssef-portfolio"
REPO="Alyaaant/$NAME"

for cmd in git gh; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Required command missing: $cmd"
    echo "On macOS: brew install git gh"
    exit 1
  fi
done

gh auth status >/dev/null 2>&1 || gh auth login
ACCOUNT="$(gh api user --jq .login)"
if [ "$ACCOUNT" != "Alyaaant" ]; then
  echo "Stopping: you are signed in as $ACCOUNT, expected Alyaaant."
  exit 1
fi

# Never publish inside an existing repository such as Skolivio/NILE QUEST.
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Stopping: this directory is inside an existing Git repository."
  echo "Unzip the portfolio into a standalone folder on Desktop, not under an existing repository."
  exit 1
fi
if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Stopping: $REPO already exists. No existing repository was overwritten."
  exit 1
fi

git init -b main
git add -A
git commit -m "feat: launch personal portfolio and five-minute introduction"
gh repo create "$REPO" --public --source=. --remote=origin --push

# Enable GitHub Pages from main branch root. Do not put secrets in this repo.
if printf '%s' '{"source":{"branch":"main","path":"/"}}' | gh api -X POST "repos/$REPO/pages" --input - >/dev/null; then
  echo "GitHub Pages setup requested."
else
  echo "GitHub repo is pushed, but enabling Pages may require a manual step."
  echo "Open repo Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save."
fi

echo "Repository: https://github.com/$REPO"
echo "Expected Pages URL once the build succeeds: https://alyaaant.github.io/$NAME/"
echo "Pages can take several minutes to build; confirm the green deployment on GitHub Actions."
