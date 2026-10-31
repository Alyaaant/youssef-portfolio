# Youssef Elnoubi — Portfolio & 5-minute introduction

A Japanese/English personal portfolio with photo placeholders, a chronological career story, professional and side-project summaries, dark mode, a five-slide presentation, and QR links.

## Publish with GitHub Pages — no Railway required

1. Unzip this package into a **new** folder such as `~/Desktop/youssef-portfolio`.
2. Install GitHub CLI if needed: `brew install gh`.
3. From that folder run: `bash scripts/publish-github-pages.sh`.
4. The script creates an independent public repository, `Alyaaant/youssef-portfolio`, pushes the content and enables GitHub Pages from `main`.
5. Wait for the Pages deployment on GitHub Actions, then check the published page. No existing Skolivio or NILE QUEST repository or server is modified.

GitHub integration used inside ChatGPT cannot currently write to your repositories; the script runs locally using your own GitHub CLI login instead. It refuses to overwrite an existing repository or to run from inside another Git project.

## Preview locally

Option A: open `index.html` in your browser.

Option B (Node 22):

```bash
npm start
```

Open http://localhost:3000/ and http://localhost:3000/presentation.html.

## Replace photos later

- Main portrait: `assets/profile.jpg` (already referenced; when missing the initials fallback is shown).
- Memory gallery: supply `assets/photos/sales.jpg`, `study.jpg`, `work.jpg`, and `life.jpg`, then change the matching `src=` paths in `index.html` from `*-placeholder.svg` to the jpgs.
- Don't upload private photos or photos of other people without their permission.

## Privacy

No home address, phone number, birth date, visa information, salary details or confidential work data are included. The GitHub repository and Pages site are public.

## Tech

HTML, CSS, vanilla JavaScript, SVG placeholder illustrations, QR code images. Node.js server / Dockerfile included for optional hosting; GitHub Pages serves static files directly.
