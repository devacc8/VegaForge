# VegaForge site

Next.js 16 site with an MDX blog, deployed by Vercel from `main` in this repository.
The workspace root is one level up; the studio that writes the articles is `../voice`.

## Commands

```bash
npm install     # once
npm run build   # the gate before any push that touches content
npm run dev     # local preview
```

`npm run build` runs `scripts/check-content.mjs` through `prebuild`. It fails on a missing
`cta: false`, on an em or en dash anywhere including the description, and on a frontmatter
date that disagrees with the sitemap. Fix what it reports, never bypass it.

## Where things are

- `content/blog/*.mdx`: the articles. Frontmatter carries the title, description, date,
  category, image, readingTime, cta and an optional diagram.
- `public/blog/`: heroes and inline images.
- `public/sitemap.xml`: every URL, newest first. Update it when a page or an article ships.
- `app/`: routes and components. `app/ai-agents/` is the consolidated service page.
- `vercel.json`: redirects, security headers and the CSP.

## Rules

- No dashes as punctuation in content or code.
- Everything written to a file is English.
- Never commit `.env`.
- Push `main` only after `npm run build` passes; Vercel deploys on push.
- An article's Russian source and its history file live in `../voice`, a different
  repository. Commit and push them there on their own, never in the same commit.
