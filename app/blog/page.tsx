import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { PostCard } from '../components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Writing | VegaForge',
  description: 'Notes on custom software, AI systems and the work behind them.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Writing | VegaForge',
    description: 'Notes on custom software, AI systems and the work behind them.',
    url: 'https://vegaforge.dev/blog',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge writing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing | VegaForge',
    description: 'Notes on custom software, AI systems and the work behind them.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">Writing</p>
          <h1 className="mt-4 max-w-[900px] font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[.9] tracking-[-.06em]">Field notes.</h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-[var(--text-secondary)]">Notes on custom software, AI systems and the work behind them.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1000px] px-5 py-12 md:px-8 md:py-16">
          {posts.length === 0 ? (
            <p className="text-[var(--text-muted)]">No posts yet.</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
