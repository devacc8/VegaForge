#!/usr/bin/env node
/**
 * Content guard for the blog.
 *
 * Runs before `next build` (through the `prebuild` script, so Vercel runs it too) and
 * fails on the mechanical mistakes that reading does not catch:
 *
 *   - an article without `cta: false`, which leaves the template's generic P.S. rendering
 *     next to the article's own ask;
 *   - an em dash or en dash anywhere, frontmatter included, because the description is the
 *     copy that search results and link cards show;
 *   - a frontmatter date that disagrees with the sitemap's lastmod for the same URL.
 *
 * A missing `**P.S.**` paragraph is a warning rather than a failure: the ask is editorial,
 * the wording differs per article, and the service articles and the product articles do not
 * close the same way. The warning is still worth reading.
 *
 * A dash inside a direct quotation stays: that text is not ours to repunctuate. The
 * exception is per file and has to name its reason here.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const blogDir = path.join(root, 'content', 'blog')
const sitemapPath = path.join(root, 'public', 'sitemap.xml')

/** file -> why its dashes are allowed to stay */
const QUOTED_DASH = new Map([
  ['vibe-coding-security.mdx', 'the em dash sits inside the quotation from Karpathy'],
])

const lastmod = new Map()
if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, 'utf8')
  const entry = /<loc>https:\/\/vegaforge\.dev\/blog\/([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g
  for (const m of xml.matchAll(entry)) lastmod.set(m[1], m[2])
}

const errors = []
const warnings = []
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx')).sort()

for (const file of files) {
  const slug = file.replace(/\.mdx$/, '')
  const text = fs.readFileSync(path.join(blogDir, file), 'utf8')
  const front = text.split('---')[1] ?? ''
  const date = front.match(/^date:\s*"([^"]+)"/m)?.[1]

  if (!/^cta:\s*false\s*$/m.test(front)) {
    errors.push(`${file}: no \`cta: false\`, so the template's generic P.S. renders too`)
  }

  if (!text.includes('**P.S.**')) {
    warnings.push(`${file}: no \`**P.S.**\` paragraph, so the page carries no ask of its own`)
  }

  const dashes = (text.match(/[—–]/g) ?? []).length
  if (dashes > 0 && !QUOTED_DASH.has(file)) {
    errors.push(
      `${file}: ${dashes} em/en dash(es), use a period, comma, colon or parentheses` +
        ' (hyphens inside compound words and number ranges are fine)',
    )
  }

  const lm = lastmod.get(slug)
  if (date && lm && lm !== date) {
    errors.push(`${file}: frontmatter date ${date} but sitemap lastmod ${lm}`)
  } else if (date && !lm) {
    errors.push(`${file}: not in sitemap.xml, so nothing links to it for crawlers`)
  }
}

for (const [file, reason] of QUOTED_DASH) {
  if (!files.includes(file)) {
    warnings.push(`${file}: listed as a dash exception but no longer exists, drop it`)
  } else if (!/[—–]/.test(fs.readFileSync(path.join(blogDir, file), 'utf8'))) {
    warnings.push(`${file}: listed as a dash exception but has no dashes left, drop it`)
  } else {
    console.log(`allowed: ${file} (${QUOTED_DASH.get(file)})`)
  }
}

for (const w of warnings) console.warn(`warning: ${w}`)

if (errors.length > 0) {
  console.error(`\ncontent guard failed on ${errors.length} point(s):`)
  for (const e of errors) console.error(`  ${e}`)
  console.error('')
  process.exit(1)
}

console.log(`content guard: ${files.length} articles checked, nothing to fix`)
