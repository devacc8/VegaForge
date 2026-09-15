import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
  readingTime: number
  /** Baseline reader CTA in the article template. Articles with their own CTA set it false. */
  cta: boolean
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 230)
}

function parseMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const date = data.date instanceof Date
    ? data.date.toISOString().slice(0, 10)
    : typeof data.date === 'string' ? data.date : ''

  return {
    slug,
    title: typeof data.title === 'string' ? data.title : slug,
    description: typeof data.description === 'string' ? data.description : '',
    date,
    category: typeof data.category === 'string' ? data.category : '',
    tags: Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === 'string') : [],
    image: typeof data.image === 'string' ? data.image : '',
    readingTime: calculateReadingTime(content),
    cta: data.cta !== false,
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
    const { data, content } = matter(raw)
    return parseMeta(slug, data, content)
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

// Related posts, chosen automatically: shared tags carry the most weight,
// same category adds a little, ties break toward the newer post. If too few
// posts overlap, the block is topped up with the most recent ones so it is
// never empty and never needs per-article upkeep.
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts()
  const current = all.find((p) => p.slug === slug)
  if (!current) return []

  const currentTags = new Set(current.tags)

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((post) => {
      const sharedTags = post.tags.filter((t) => currentTags.has(t)).length
      const sameCategory = post.category === current.category ? 1 : 0
      const score = sharedTags * 3 + sameCategory
      return { post, score }
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    })

  return scored.slice(0, limit).map((s) => s.post)
}

export function getPostBySlug(slug: string) {
  if (!slug || /[/\\]|\.\./.test(slug)) return null

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    meta: parseMeta(slug, data, content),
    content,
  }
}
