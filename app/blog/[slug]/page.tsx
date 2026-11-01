import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { mdxComponents } from '../../components/mdx/MDXComponents'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { RelatedPosts } from '../../components/blog/RelatedPosts'
import { AuthorCard } from '../../components/AuthorCard'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug)
    if (!post) return { title: 'Not Found' }

    const { meta } = post
    return {
      title: `${meta.title} | VegaForge`,
      description: meta.description,
      alternates: { canonical: `/blog/${meta.slug}` },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `https://vegaforge.dev/blog/${meta.slug}`,
        siteName: 'VegaForge',
        locale: 'en_US',
        type: 'article',
        publishedTime: meta.date,
        authors: ['Alex Vega'],
        images: [{ url: meta.image || '/og-image.png', width: 1200, height: 630, alt: meta.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        creator: '@vvegalex',
        images: [meta.image || '/og-image.png'],
      },
    }
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { meta, content } = post
  const relatedPosts = getRelatedPosts(slug, 3)

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: { dark: 'github-dark', light: 'github-light' },
              defaultLang: { block: 'plaintext' },
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'prepend',
              properties: {
                className: ['anchor-link'],
                ariaLabel: 'Link to section',
              },
            },
          ],
        ],
      },
    },
  })

  const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const wordCount = content.trim().split(/\s+/).length

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    wordCount,
    keywords: meta.tags.join(', '),
    inLanguage: 'en-US',
    url: `https://vegaforge.dev/blog/${meta.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vegaforge.dev/blog/${meta.slug}`,
    },
    image: {
      '@type': 'ImageObject',
      url: `https://vegaforge.dev${meta.image || '/og-image.png'}`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: 'Alex Vega',
      url: 'https://vegaforge.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VegaForge',
      url: 'https://vegaforge.dev',
    },
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Navigation />

      <article id="main-content" className="px-5 md:px-8 pt-16 md:pt-20 pb-12 md:pb-24">
        <div className="mx-auto max-w-[880px]">
          {/* Header */}
          <header className="mb-10">
            <a
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[.06em] text-[var(--text-muted)] transition-colors hover:text-forge-500"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>

            <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[.06em]">
              <span className="text-forge-500">{meta.category}</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-muted)]">{meta.readingTime} min read</span>
            </div>

            <h1 className="mb-4 max-w-[820px] font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">
              {meta.title}
            </h1>

            <p className="mb-4 max-w-[720px] text-[16px] leading-relaxed text-[var(--text-secondary)]">
              {meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <time dateTime={meta.date} className="font-mono text-[9px] text-[var(--text-muted)]">
                {formattedDate}
              </time>
              {meta.tags.map((tag: string) => (
                <span key={tag} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[var(--text-muted)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 h-px bg-[var(--border-color)]" />
          </header>

          {/* Hero image */}
          {meta.image && (
            <div className="mb-10 -mx-6 md:mx-0">
              <img
                src={meta.image}
                alt={meta.title}
                width={1400}
                height={780}
                className="w-full border border-[var(--border-color)]"
              />
            </div>
          )}

          {/* Article body */}
          <div className="article-body">
            {mdxContent}
          </div>

          <AuthorCard />

          {/* Baseline reader CTA, written as a postscript. Suppressed on articles that
              carry a targeted one. */}
          {meta.cta && (
            <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-500">
              <strong className="font-medium text-[var(--text-secondary)]">P.S.</strong>{' '}
              Working on something in this space and want a second opinion?{' '}
              <a
                href="mailto:alex@vegaforge.dev"
                className="text-forge-600 underline underline-offset-2 decoration-forge-500/30 transition-colors hover:decoration-forge-500"
              >
                Write to VegaForge
              </a>
              .
            </p>
          )}

          {/* Related reading */}
          <RelatedPosts posts={relatedPosts} />

          {/* Footer divider */}
          <div className="mt-12 mb-8 h-px bg-[var(--border-color)]" />

          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[.06em] text-[var(--text-muted)] transition-colors hover:text-forge-500"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
