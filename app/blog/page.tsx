import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { PostCard } from '../components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog | VegaForge',
  description: 'Practical insights on AI agents, automation, Web3 development, and building products as a solo developer.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | VegaForge',
    description: 'Practical insights on AI agents, automation, Web3 development, and building products as a solo developer.',
    url: 'https://vegaforge.dev/blog',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | VegaForge',
    description: 'Practical insights on AI agents, automation, Web3 development, and building products.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      <Navigation />

      <section id="main-content" className="px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-12 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">BLOG</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Writing
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12 max-w-xl">
            Practical takes on AI agents, automation, pricing, and building products as a solo developer.
          </p>

          {posts.length === 0 ? (
            <p className="text-neutral-500 dark:text-neutral-500">No posts yet.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
