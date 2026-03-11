import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'AI-Powered Content Writing for Crypto Projects | VegaForge',
  description: 'Human-edited blog posts, Twitter threads, and documentation for crypto projects. AI-accelerated research and drafting with human editorial quality.',
  alternates: {
    canonical: '/content-writing',
  },
  openGraph: {
    title: 'AI-Powered Content Writing for Crypto Projects | VegaForge',
    description: 'Human-edited content for crypto projects. AI-accelerated research, human editorial quality.',
    url: 'https://vegaforge.dev/content-writing',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge Content Writing Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Content Writing for Crypto Projects | VegaForge',
    description: 'Blog posts, Twitter threads, and documentation for crypto and Web3 projects.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

export default function ContentWritingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Background */}
      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      <Navigation />

      {/* Hero */}
      <section id="main-content" className="min-h-[50vh] md:min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">CONTENT WRITING SERVICE</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 dark:text-white mb-6">
            Content for
            <br />
            <span className="text-forge-600 dark:text-forge-500">Crypto Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
            Not AI slop. Not slow freelancers. A human editor with an AI research pipeline — producing crypto content faster than a full-time hire, at half the cost
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:devacc8@pm.me"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
            >
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium rounded-full transition-all"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">THE PROBLEM</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Your Blog Is Dead. Your Twitter Is Quiet.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Full-Time Writer',
                desc: '$4-8K/month salary + benefits. Good quality, but expensive for early-stage projects',
                highlight: false,
              },
              {
                title: 'Freelance Writers',
                desc: '$300-500 per article. Inconsistent quality, no crypto domain knowledge, frequent ghosting',
                highlight: false,
              },
              {
                title: 'DIY with ChatGPT',
                desc: 'Generic, soulless content that readers and search engines can spot immediately. No voice, no strategy',
                highlight: false,
              },
              {
                title: 'Human Editor + AI Pipeline',
                desc: 'AI researches and drafts. Human editor shapes the voice, verifies facts, and owns the final quality. You get a real person who happens to be 4x faster',
                highlight: true,
              },
            ].map((item) => (
              <div key={item.title} className={`group relative border rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none ${item.highlight ? 'bg-forge-600/5 dark:bg-forge-600/10 border-forge-500/50 dark:border-forge-600/50' : 'bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50'}`}>
                <div className="relative z-10">
                  <h3 className={`font-display font-semibold text-lg mb-2 ${item.highlight ? 'text-forge-600 dark:text-forge-500' : 'text-neutral-900 dark:text-white'}`}>{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">PACKAGES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Choose Your Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Starter */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-1">Blog Starter</h3>
                <p className="font-display font-bold text-3xl text-forge-600 dark:text-forge-500 mb-4">$1,000<span className="text-base font-normal text-neutral-500">/mo</span></p>
                <div className="space-y-3 mb-6">
                  {[
                    '4 blog posts/month (1,500-2,500 words)',
                    'SEO-optimized with keywords',
                    'Crypto/Web3 domain expertise',
                    'Fact-checked and human-edited',
                    '48h turnaround per article',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:devacc8@pm.me?subject=Blog%20Starter%20Package"
                  className="block text-center px-4 py-2.5 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 dark:hover:border-forge-500 rounded-full text-sm text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Blog + Twitter — highlighted */}
            <div className="group relative bg-forge-600/5 dark:bg-forge-600/10 border-2 border-forge-500/50 dark:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-forge-600 text-white text-xs font-medium rounded-full">
                Most Popular
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-1">Blog + Twitter</h3>
                <p className="font-display font-bold text-3xl text-forge-600 dark:text-forge-500 mb-4">$2,000<span className="text-base font-normal text-neutral-500">/mo</span></p>
                <div className="space-y-3 mb-6">
                  {[
                    '4 blog posts/month (1,500-2,500 words)',
                    '20 tweets/week + 4 threads/month',
                    'Content calendar and strategy',
                    'Voice matching to your brand',
                    'Performance analytics',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:devacc8@pm.me?subject=Blog%20%2B%20Twitter%20Package"
                  className="block text-center px-4 py-2.5 bg-forge-600 hover:bg-forge-500 text-white rounded-full text-sm font-medium transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Full Content */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-1">Full Content</h3>
                <p className="font-display font-bold text-3xl text-forge-600 dark:text-forge-500 mb-4">$3,000<span className="text-base font-normal text-neutral-500">/mo</span></p>
                <div className="space-y-3 mb-6">
                  {[
                    'Everything in Blog + Twitter',
                    'Daily Twitter management',
                    'Documentation and READMEs',
                    'Newsletter writing',
                    'Dedicated content strategist',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:devacc8@pm.me?subject=Full%20Content%20Package"
                  className="block text-center px-4 py-2.5 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 dark:hover:border-forge-500 rounded-full text-sm text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* One-off */}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Need a single article? <a href="mailto:devacc8@pm.me?subject=One-off%20Article" className="text-forge-600 dark:text-forge-500 hover:text-forge-500 dark:hover:text-forge-400 transition-colors font-medium">One-off deep-dive articles from $350</a>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">HOW IT WORKS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Human-Led. AI-Accelerated.
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: '01',
                title: 'Research',
                desc: 'AI agent monitors your niche 24/7 — trending topics, competitor moves, community discussions',
              },
              {
                step: '02',
                title: 'Draft',
                desc: 'AI generates first draft with your brand voice, domain terminology, and target keywords',
              },
              {
                step: '03',
                title: 'Edit',
                desc: 'Human editor reviews for voice, facts, strategy. Rewrites weak sections. Verifies all claims',
              },
              {
                step: '04',
                title: 'Deliver',
                desc: 'Final article delivered within 48 hours. Ready to publish or with revision notes',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-2xl font-bold text-forge-600/30 dark:text-forge-500/30">{item.step}</span>
                  <div className="h-px flex-1 bg-forge-600/20 dark:bg-forge-500/20" />
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">WHY US</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Not Another Content Mill
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Crypto-Native',
                desc: 'We understand DeFi, L2s, smart contracts, tokenomics, and MEV. Not generic writers learning your industry on your dime',
              },
              {
                title: 'Human Editor, Not a Prompt',
                desc: 'Every article is reviewed and shaped by a human editor with crypto domain expertise. AI accelerates research and first drafts — the human owns the final product',
              },
              {
                title: 'Proof of Work',
                desc: 'Browse our blog — real articles published weekly. Judge the quality yourself before committing',
              },
              {
                title: 'Speed Without Sacrifice',
                desc: '4 articles/month is baseline, scalable to 8+. AI handles research and drafting. Human ensures every piece sounds like you, not like a robot',
              },
            ].map((feature) => (
              <div key={feature.title} className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
                <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">IDEAL CLIENTS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Built For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'DeFi Protocols',
                desc: 'SEO blog content, developer guides, protocol updates. Turn complex mechanics into reader-friendly articles',
              },
              {
                title: 'L2 Chains & Infra',
                desc: 'Ecosystem content, integration tutorials, technical documentation. Attract developers to build on your stack',
              },
              {
                title: 'Pre-Launch Startups',
                desc: 'Build blog and Twitter presence before TGE. Establish thought leadership while your product is in development',
              },
              {
                title: 'Web3 SDK & Tools',
                desc: 'Technical articles, integration guides, comparison pieces. Content that drives developer adoption',
              },
              {
                title: 'Marketing Agencies',
                desc: 'White-label content production for your crypto clients. Scale output without scaling headcount',
              },
              {
                title: 'DAOs & Communities',
                desc: 'Governance updates, research reports, community digests. Keep token holders informed and engaged',
              },
            ].map((item) => (
              <div key={item.title} className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
                <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">COMPARISON</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            How We Compare
          </h2>

          <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xs dark:shadow-none">
            <div className="relative z-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-neutral-500 dark:text-neutral-500"></th>
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-neutral-900 dark:text-white">Full-Time Writer</th>
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-neutral-900 dark:text-white">Freelancer</th>
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-forge-600 dark:text-forge-500">VegaForge</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost', ft: '$4-8K', free: '$1.2-2K', us: '$1-3K' },
                    { label: 'Articles/month', ft: '4-6', free: '3-4', us: '4-8+' },
                    { label: 'Crypto expertise', ft: 'Varies', free: 'Rarely', us: 'Deep' },
                    { label: 'Consistency', ft: 'High', free: 'Low', us: 'High' },
                    { label: 'Turnaround', ft: '3-5 days', free: '5-10 days', us: '48 hours' },
                    { label: 'Twitter content', ft: 'Extra cost', free: 'Separate hire', us: 'Included in plans' },
                    { label: 'Scalability', ft: 'Hire more', free: 'Find more', us: 'Same team, more output' },
                  ].map((row, i) => (
                    <tr key={row.label} className={i < 6 ? 'border-b border-neutral-100 dark:border-neutral-800/50' : ''}>
                      <td className="p-4 md:p-6 font-medium text-sm text-neutral-900 dark:text-white">{row.label}</td>
                      <td className="p-4 md:p-6 text-sm text-neutral-600 dark:text-neutral-400">{row.ft}</td>
                      <td className="p-4 md:p-6 text-sm text-neutral-600 dark:text-neutral-400">{row.free}</td>
                      <td className="p-4 md:p-6 text-sm text-forge-600 dark:text-forge-400 font-medium">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">PORTFOLIO</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
            See Our Work
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-12">
            Published weekly on our blog. Technical deep-dives, industry analysis, and hands-on guides covering AI, Web3, and developer tooling.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
            >
              Browse Articles
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">FAQ</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is this just AI-generated content?',
                a: 'No. Every article is written and edited by a human with deep crypto expertise. AI is our research and drafting tool — it speeds up the process, but the human editor makes every editorial decision: voice, structure, fact-checking, and strategy. The result reads like a person wrote it, because a person did.',
              },
              {
                q: 'Do you write in our brand voice?',
                a: 'Yes. During onboarding we analyze your existing content, tone, terminology, and audience. We create a custom voice profile that the AI agent uses for all drafts. The result reads like your team wrote it.',
              },
              {
                q: 'What if we need revisions?',
                a: 'Every article includes one round of revisions at no extra cost. We aim to get it right on the first delivery — our revision rate is under 15%.',
              },
              {
                q: 'Can you write technical content?',
                a: 'Absolutely. Our background is in Solidity, DeFi, and Web3 infrastructure. We can write smart contract explainers, protocol deep-dives, integration guides, and developer tutorials.',
              },
              {
                q: 'What about SEO?',
                a: 'All blog content is SEO-optimized by default: keyword research, meta descriptions, proper heading structure, and internal linking. For advanced SEO needs, we offer an add-on package.',
              },
              {
                q: 'Minimum commitment?',
                a: 'No long-term contracts. Monthly billing, cancel anytime. We recommend at least 2 months to see results from blog content and SEO.',
              },
            ].map((item) => (
              <details key={item.q} className="group/faq bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl shadow-xs dark:shadow-none transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer">
                  <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white pr-4">{item.q}</h3>
                  <span className="faq-icon shrink-0 w-6 h-6 flex items-center justify-center text-forge-600 dark:text-forge-500 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
            Ready to Fill Your Blog?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg mx-auto">
            Tell us about your project. We will reply within 24 hours with a content plan tailored to your goals
          </p>
          <a
            href="mailto:devacc8@pm.me?subject=Content%20Writing%20Inquiry"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all text-lg"
          >
            Get a Content Plan
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
