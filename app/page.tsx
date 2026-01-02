'use client'

import { ThemeSwitcher } from './components/ThemeSwitcher'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />

      {/* Subtle radial glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
            Vega<span className="text-forge-500">Forge</span>
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#work" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
              Work
            </a>
            <a href="#why-me" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
              Why Me
            </a>
            <ThemeSwitcher />
            <a
              href="https://x.com/vvegalex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-neutral-300 dark:border-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:border-forge-500 hover:text-forge-600 dark:hover:text-white transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24">
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
                Fullstack developer with product thinking.
                <br className="hidden md:block" />
                Building products, not just writing code.
              </p>

              {/* Ember line */}
              <div className="ember-line w-24 mb-10 opacity-0 animate-fade-up stagger-4" />

              {/* Main text */}
              <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed opacity-0 animate-fade-up stagger-5">
                <p>
                  The old model (PM designs, developer codes) no longer works. AI accelerated development dramatically, but created a new problem: teams need people who understand both <em className="text-neutral-800 dark:text-neutral-200 not-italic">what</em> to build and <em className="text-neutral-800 dark:text-neutral-200 not-italic">how</em>.
                </p>
                <p>
                  I combine both skills. 7 years in development, 5 in Solidity and web3. Worked in startups where there's no luxury of separating roles. Took product management courses. Won Ethereum hackathons.
                </p>
                <p>
                  Latest project: <a href="https://basepaint.market" target="_blank" rel="noopener noreferrer" className="text-forge-600 dark:text-forge-500 hover:text-forge-500 dark:hover:text-forge-400 transition-colors">basepaint.market</a>. I noticed BasePaint collectors had nowhere to sell complete year collections (365 NFTs). OpenSea and Blur don't support atomic bundle trades. I designed the solution, wrote the smart contract, backend, frontend, conducted an audit, launched to mainnet. Solo.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-6">
                <a
                  href="#work"
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
            <div className="hidden xl:block flex-shrink-0">
              <div className="space-y-8 text-right">
                <div className="opacity-0 animate-fade-in stagger-3">
                  <p className="font-display font-bold text-4xl text-neutral-900 dark:text-white">7+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Years Dev</p>
                </div>
                <div className="opacity-0 animate-fade-in stagger-4">
                  <p className="font-display font-bold text-4xl text-forge-600 dark:text-forge-500">5+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Years Web3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">SELECTED WORK</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white">
              Products I've Built
            </h2>
          </div>

          {/* Project Card: BasePaint Market */}
          <div className="group relative bg-white dark:bg-gradient-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-12 transition-all duration-500 shadow-sm dark:shadow-none">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Project header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-xs text-forge-600 dark:text-forge-500 mb-2">2025 — LIVE ON BASE MAINNET</p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white">
                    BasePaint Market
                  </h3>
                </div>
                <a
                  href="https://basepaint.market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-forge-500 rounded-full text-sm text-neutral-700 dark:text-neutral-300 hover:text-forge-600 dark:hover:text-white transition-all"
                >
                  Visit Site
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                The first specialized marketplace for trading complete BasePaint year collections on Base L2. Enables buying and selling complete sets (365 NFTs) in a single atomic transaction — something impossible on OpenSea or Blur.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y border-neutral-200 dark:border-neutral-800">
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">2,342</p>
                  <p className="text-xs text-neutral-500">Automated Tests</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-forge-600 dark:text-forge-500">9.0/10</p>
                  <p className="text-xs text-neutral-500">Audit Score</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">365</p>
                  <p className="text-xs text-neutral-500">NFTs per Bundle</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">0</p>
                  <p className="text-xs text-neutral-500">Critical Issues</p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {['Solidity', 'Next.js 14', 'Node.js', 'PostgreSQL', 'RainbowKit', 'Base L2'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Card: CoinPeek */}
          <div className="mt-8 group relative bg-white dark:bg-gradient-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-12 transition-all duration-500 shadow-sm dark:shadow-none">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Project header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-xs text-forge-600 dark:text-forge-500 mb-2">2020–2026 — CHROME EXTENSION</p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white">
                    CoinPeek
                  </h3>
                </div>
                <a
                  href="https://github.com/devacc8/coinpeek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-forge-500 rounded-full text-sm text-neutral-700 dark:text-neutral-300 hover:text-forge-600 dark:hover:text-white transition-all"
                >
                  View on GitHub
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                Chrome extension for instant crypto monitoring. Shows Bitcoin price right on the toolbar badge, plus ETH prices, network gas fees, and a smart BTC/ETH/USD converter. Automatic updates every 60 seconds with minimal resource usage.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y border-neutral-200 dark:border-neutral-800">
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">50KB</p>
                  <p className="text-xs text-neutral-500">Lightweight</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-forge-600 dark:text-forge-500">5</p>
                  <p className="text-xs text-neutral-500">API Integrations</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">3</p>
                  <p className="text-xs text-neutral-500">Fallback APIs</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-neutral-900 dark:text-white">MIT</p>
                  <p className="text-xs text-neutral-500">Open Source</p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Chrome APIs', 'Manifest V3', 'CoinGecko', 'Blocknative', 'mempool.space'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hackathon Card */}
          <a
            href="https://blog.chain.link/ethonline-2020-chainlink-hackathon-winners/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 group relative bg-neutral-50 dark:bg-gradient-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-10 transition-all duration-500 block"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-forge-100 dark:bg-forge-600/10 border border-forge-200 dark:border-forge-600/30 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-forge-600 dark:text-forge-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs text-neutral-500 mb-1">2020 — ETHONLINE HACKATHON</p>
                <h3 className="font-display font-semibold text-xl text-neutral-900 dark:text-white mb-2">
                  Special Prize from PoolTogether
                </h3>
                <p className="text-neutral-500 text-sm">
                  Chainlink-powered hackathon winner. Built a DeFi solution during ETHOnline 2020.
                </p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-forge-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="px-6 md:px-12 lg:px-20 py-32">
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
            <div className="bg-white dark:bg-gradient-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none">
              <h3 className="font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "AI can code now. Why hire a developer?"
              </h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  AI generates code, but doesn't understand context. Who verifies the smart contract has no reentrancy vulnerabilities? Who chooses the right pattern (escrow vs approval-based)? Who writes 2,342 tests including fuzz tests for edge cases?
                </p>
                <p>
                  AI is a tool. You need someone who knows <em className="text-neutral-800 dark:text-neutral-200 not-italic">what</em> to check and <em className="text-neutral-800 dark:text-neutral-200 not-italic">why</em>.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none">
              <h3 className="font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "Why not hire a PM and developer separately?"
              </h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  In a startup, there's no time for the PM → Designer → Developer → QA chain. When one person sees the user's problem and solves it themselves, the cycle shrinks from weeks to days.
                </p>
                <div className="mt-6 pl-4 border-l-2 border-forge-600/50">
                  <p className="text-sm text-neutral-500 mb-2">Example from BasePaint Market:</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Collectors didn't know the real value of their sets on the secondary market. Instead of creating a ticket and waiting, I built an Analytics Dashboard in a day: daily floor price on OpenSea, day rarity scores, number of complete set holders, and missing NFTs that can't be purchased. The feature strengthened the core product and gave users the data they needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none">
              <h3 className="font-display font-semibold text-xl text-neutral-900 dark:text-white mb-4">
                "What does 'product thinking' actually mean?"
              </h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  It's the ability to see a user's problem and find a solution through the product — not just write code to a spec.
                </p>
                <div className="mt-6 pl-4 border-l-2 border-forge-600/50">
                  <p className="text-sm text-neutral-500 mb-2">Example:</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    On OpenSea/Blur you can't sell 365 NFTs in one transaction. Why? No atomic bundle transfers. Solution: a smart contract with approval-based listings (not escrow — less gas, safer). Result: the first specialized marketplace for BasePaint collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-neutral-900 dark:text-white">Vega<span className="text-forge-500">Forge</span></span>
            <span className="text-neutral-400 dark:text-neutral-600 text-sm">© 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/vvegalex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/devacc8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
