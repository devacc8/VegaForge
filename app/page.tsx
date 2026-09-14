'use client'

import { useEffect, useRef } from 'react'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { FeaturedCard } from './components/FeaturedCard'
import { projects } from '../lib/projects'

export default function Home() {
  const emberLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const emberLine = emberLineRef.current
    if (!emberLine) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 200
      const progress = Math.min(scrollY / maxScroll, 1)
      const minWidth = 10
      const maxWidth = 35
      const width = minWidth + progress * (maxWidth - minWidth)
      emberLine.style.width = `${width}vw`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />

      {/* Subtle radial glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="main-content" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-12">
            {/* Main content */}
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-6 opacity-0 animate-fade-up stagger-1">
                PRODUCT-MINDED DEVELOPER
              </p>

              {/* Main headline */}
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-neutral-900 dark:text-white opacity-0 animate-fade-up stagger-2">
                Development changed.
                <br />
                <span className="text-glow text-forge-600 dark:text-forge-500">So did I.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 opacity-0 animate-fade-up stagger-3">
                Fullstack developer with product thinking
                <br className="hidden md:block" />
                Building products, not just writing code
              </p>

              {/* Ember line */}
              <div ref={emberLineRef} className="ember-line mb-10 opacity-0 animate-fade-up stagger-4" />

              {/* Main text */}
              <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed opacity-0 animate-fade-up stagger-5">
                <p>
                  The old model (PM designs, developer codes) no longer works. AI accelerated development dramatically, but created a new problem: teams need people who understand both <em className="text-neutral-800 dark:text-neutral-200 not-italic">what</em> to build and <em className="text-neutral-800 dark:text-neutral-200 not-italic">how</em>.
                </p>
                <p>
                  I combine both skills. 8+ years in development, 5 in web3 across EVM and Solana. Worked in startups where there's no luxury of separating roles. Took product management courses. Won Ethereum hackathons.
                </p>
                <p>
                  Latest project: <a href="https://basepaint.market" target="_blank" rel="noopener noreferrer" className="text-forge-600 dark:text-forge-500 hover:text-forge-500 dark:hover:text-forge-400 transition-colors">basepaint.market</a>. I noticed BasePaint collectors had nowhere to sell complete year collections (365 NFTs). OpenSea and Blur don't support atomic bundle trades. I designed the solution, wrote the smart contract, backend, frontend, conducted an audit, launched to mainnet. Solo.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-6">
                <a
                  href="/work"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
                >
                  View Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://x.com/vvegalex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium rounded-full transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Stats sidebar (desktop only) */}
            <div className="hidden xl:block shrink-0">
              <div className="space-y-8 text-right">
                <div className="opacity-0 animate-fade-in stagger-3">
                  <p className="font-display font-bold text-4xl text-neutral-900 dark:text-white">8+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Years Dev</p>
                </div>
                <div className="opacity-0 animate-fade-in stagger-4">
                  <p className="font-display font-bold text-4xl text-forge-600 dark:text-forge-500">5+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Years Web3</p>
                </div>
                <div className="opacity-0 animate-fade-in stagger-5">
                  <p className="font-display font-bold text-4xl text-neutral-900 dark:text-white">OSS</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 md:px-12 lg:px-20 pt-16 md:pt-32 pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">
              SELECTED WORK
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white">
              Products I&apos;ve Built
            </h2>
          </div>

          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}

          <div className="mt-12 flex justify-center">
            <a
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 dark:hover:border-forge-500 rounded-full text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
            >
              More work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="why-me" className="px-6 md:px-12 lg:px-20 pt-8 md:pt-16 pb-16 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">WHY PRODUCT-MINDED?</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white">
              Questions I Get Asked
            </h2>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-6">
            {/* Q1 */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-10 shadow-xs dark:shadow-none transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "AI can code now. Why hire a developer?"
              </h3>
              <div className="relative z-10 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  AI generates code, but doesn't understand context. Who verifies the smart contract has no reentrancy vulnerabilities? Who chooses the right pattern (escrow vs approval-based)? Who writes 3,767 tests including fuzz tests for edge cases?
                </p>
                <p>
                  AI is a tool. You need someone who knows <em className="text-neutral-800 dark:text-neutral-200 not-italic">what</em> to check and <em className="text-neutral-800 dark:text-neutral-200 not-italic">why</em>.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-10 shadow-xs dark:shadow-none transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "Why not hire a PM and developer separately?"
              </h3>
              <div className="relative z-10 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  In a startup, there's no time for the PM → Designer → Developer → QA chain. When one person sees the user's problem and solves it themselves, the cycle shrinks from weeks to days.
                </p>
                <div className="mt-6 pl-4 border-l-2 border-forge-600/50">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Example from BasePaint Market:</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Collectors didn't know the real value of their sets on the secondary market. Instead of creating a ticket and waiting, I built an Analytics Dashboard in a day: daily floor price on OpenSea, day rarity scores, number of complete set holders, and missing NFTs that can't be purchased. The feature strengthened the core product and gave users the data they needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-10 shadow-xs dark:shadow-none transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "What does 'product thinking' actually mean?"
              </h3>
              <div className="relative z-10 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  It's the ability to see a user's problem and find a solution through the product, not just write code to a spec.
                </p>
                <div className="mt-6 pl-4 border-l-2 border-forge-600/50">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Example:</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    On OpenSea/Blur you can't sell 365 NFTs in one transaction. Why? No atomic bundle transfers. Solution: a smart contract with approval-based listings (not escrow: less gas, safer). Result: the first specialized marketplace for BasePaint collections.
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-10 shadow-xs dark:shadow-none transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "Isn't this just vibe coding?"
              </h3>
              <div className="relative z-10 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  Not quite. Vibe coding means fully delegating to AI without understanding what's being built. My approach is different: I architect the system, define constraints, review every decision. AI accelerates execution, but direction comes from 8+ years of experience.
                </p>
                <p>
                  The result is faster delivery with higher quality than a traditional team, not despite the human involvement, but <em className="text-neutral-800 dark:text-neutral-200 not-italic">because</em> of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
