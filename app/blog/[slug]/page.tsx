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
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: meta.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        creator: '@vvegalex',
        images: ['/og-image.png'],
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
              defaultLang: 'plaintext',
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
      url: 'https://vegaforge.dev/og-image.png',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

      <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-neutral-900 dark:text-white">Vega<span className="text-forge-500">Forge</span></span>
            <span className="text-neutral-400 dark:text-neutral-600 text-sm">&copy; 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://x.com/vvegalex" target="_blank" rel="noopener noreferrer" aria-label="Follow on X (Twitter)" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/devacc8" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
