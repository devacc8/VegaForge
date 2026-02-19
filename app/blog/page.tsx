import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { Navigation } from '../components/Navigation'
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
