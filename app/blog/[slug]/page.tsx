import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { mdxComponents } from '../../components/mdx/MDXComponents'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

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
    <main className="min-h-screen relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      <Navigation />

      <article id="main-content" className="px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-12 md:pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-500 hover:text-forge-600 dark:hover:text-forge-500 transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 uppercase">
                {meta.category}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                {meta.readingTime} min read
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 dark:text-white mb-4 leading-tight">
              {meta.title}
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <time dateTime={meta.date} className="text-sm text-neutral-500 dark:text-neutral-500">
                {formattedDate}
              </time>
              {meta.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-neutral-200 dark:bg-neutral-800 mt-8" />
          </header>

          {/* Hero image */}
          {meta.image && (
            <div className="mb-10 -mx-6 md:mx-0">
              <img
                src={meta.image}
                alt={meta.title}
                width={1400}
                height={780}
                className="w-full rounded-none md:rounded-2xl"
              />
            </div>
          )}

          {/* Article body */}
          <div>
            {mdxContent}
          </div>

          {/* Footer divider */}
          <div className="h-px bg-neutral-200 dark:bg-neutral-800 mt-12 mb-8" />

          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-500 hover:text-forge-600 dark:hover:text-forge-500 transition-colors"
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
