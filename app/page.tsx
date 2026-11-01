import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Pond } from './components/Pond'
import { TallyButton } from './components/TallyButton'

const systems = [
  {
    label: 'BasePaint Market',
    meta: 'Base / 2025',
    title: '365 NFTs. One transaction.',
    description: 'A specialized market for complete BasePaint year collections. Atomic bundles, a custom contract and a product built around one collector problem.',
    stats: ['3,767 tests', '9.0/10 audit', 'Live on Base'],
    win: '',
    href: 'https://basepaint.market',
  },
  {
    label: 'Missing Days',
    meta: 'BasePaint / 2026',
    title: 'What is missing.',
    win: '1st place · BasePaint Year 3 Hackathon · FOR COLLECTORS',
    description: 'A profile for any BasePaint wallet: owned days, missing days, scarcity and the next useful action. No wallet connect, no database.',
    stats: ['1st place', '32 projects', 'CC0 public good'],
    href: 'https://missing-days.vercel.app',
  },
  {
    label: 'Curfew',
    meta: 'Chrome / 2026',
    title: 'Rules that hold.',
    description: 'Daily time budgets for distraction sites, enforced at the network level. Local-only, no accounts, no analytics layer.',
    stats: ['200 tests', 'MIT', 'Chrome Web Store'],
    win: '',
    href: 'https://chromewebstore.google.com/detail/curfew/obnikdokealeimpbhfbjhpdmfcgbgcje',
  },
]

const capabilities = [
  ['01', 'Product', 'Discovery, scope, user flows and the decisions that shape the build.', 'Product / strategy'],
  ['02', 'Design', 'Interface, identity and prototypes that make complex systems understandable.', 'UI / UX / identity'],
  ['03', 'Engineering', 'Next.js, React, TypeScript, APIs, data and production infrastructure.', 'Fullstack / infra'],
  ['04', 'AI systems', 'Agents, retrieval, evaluation and AI features that survive real users.', 'Agents / RAG / evals'],
  ['05', 'Web3', 'Smart contracts, wallets and on-chain products where they make sense.', 'Contracts / wallets'],
]

const lab = [
  { name: 'AvaxLens', meta: 'Live on Avalanche', href: 'https://avaxlens.vercel.app', icon: 'globe' },
  { name: 'SkillTax', meta: 'Live on Solana devnet', href: 'https://skilltax.gg', icon: 'globe' },
  { name: 'DSH File Explorer', meta: 'GitHub / MIT', href: 'https://github.com/devacc8/dsh-file-explorer', icon: 'github' },
  { name: 'DSH Billing Badge', meta: 'GitHub / npm', href: 'https://github.com/devacc8/dsh-billing-badge', icon: 'github' },
  { name: 'CoinPeek', meta: 'Chrome / MIT', href: 'https://chromewebstore.google.com/detail/coinpeek-bitcoin-price-ba/konlmcdlofpoegdkbjocdfojejmfkfbo', icon: 'chrome' },
]

function LabIcon({ type }: { type: string }) {
  if (type === 'github') {
    return (
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }
  if (type === 'chrome') {
    return (
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.952 6.848a12.014 12.014 0 0 0 9.229-9.006zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
      </svg>
    )
  }
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.5 3.4 5.3 3.4 8.5s-1.2 6-3.4 8.5c-2.2-2.5-3.4-5.3-3.4-8.5S9.8 6 12 3.5Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-0 md:grid-cols-[1.05fr_.95fr] md:px-8">
          <div className="max-w-[660px] pb-7 pt-16 md:pt-20">
            <h1 className="font-display text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[.9] tracking-[-.06em]">
              Custom systems.
              <br />
              <span className="text-[#1d5b63]">Continuously built.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-[var(--text-secondary)]">
              CSAS for companies whose software is their business. We design, engineer and run the system around how the company actually works.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a href="#systems" className="inline-flex items-center gap-2 bg-forge-500 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-forge-600">
                Explore systems <span aria-hidden="true">↗</span>
              </a>
              <a href="#model" className="inline-flex items-center border border-[var(--text-primary)] px-5 py-3 text-xs font-medium transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">
                What is CSAS?
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[var(--border-color)] pt-5 sm:grid-cols-3">
              <div>
                <p className="font-display text-base font-medium">Design + engineering</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">One team, one loop</p>
              </div>
              <div>
                <p className="font-display text-base font-medium">Production first</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">Built to run, not demo</p>
              </div>
              <div>
                <p className="font-display text-base font-medium">CSAS</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">Custom software as a service</p>
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <Pond />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-[var(--border-color)] bg-[var(--text-primary)] py-2.5 text-[var(--bg-primary)]">
        <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-8 font-mono text-[10px] uppercase tracking-[.1em]">
          {['Custom software as a service', 'Product systems', 'AI + Web3 + fullstack', 'Built to run'].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap">
              {item} <span className="text-forge-400">/</span>
            </span>
          ))}
          {['Custom software as a service', 'Product systems', 'AI + Web3 + fullstack', 'Built to run'].map((item, index) => (
            <span key={`${item}-b-${index}`} className="whitespace-nowrap">
              {item} <span className="text-forge-400">/</span>
            </span>
          ))}
        </div>
      </div>

      <section id="systems" className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">01 / Selected systems</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.4rem,4.6vw,4.2rem)] font-medium leading-[.96] tracking-[-.055em]">Software that had to work.</h2>
              <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[var(--text-muted)]">Three systems, three different constraints. The common thread: production, not a prototype that never leaves the room.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {systems.map((system) => (
              <a key={system.label} href={system.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-[330px] flex-col border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 transition-colors hover:border-forge-500">
                <div className="flex justify-between gap-4 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">
                  <span>{system.label}</span>
                  <span>{system.meta}</span>
                </div>
                <h3 className="mt-10 font-display text-[28px] font-medium leading-none tracking-[-.045em]">{system.title}</h3>
                {system.win ? <p className="mt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[.04em] text-forge-500">{system.win}</p> : null}
                <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-secondary)]">{system.description}</p>
                <div className="mt-auto border-t border-[var(--border-color)] pt-4 font-mono text-[9px] leading-relaxed text-[#1d5b63]">
                  {system.stats.map((stat) => <span key={stat} className="block">{stat}</span>)}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--border-color)] pt-3 text-xs">
                  <span>Open system</span><span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">02 / Capabilities</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.4rem,4.6vw,4.2rem)] font-medium leading-[.96] tracking-[-.055em]">One system, five disciplines.</h2>
              <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[var(--text-muted)]">No handoff between strategy, interface and code. The same team carries the context from first question to production.</p>
            </div>
          </div>
          <div className="border-t border-[var(--text-primary)]">
            {capabilities.map(([n, title, description, tag]) => (
              <div key={n} className="grid gap-2 border-b border-[var(--border-color)] py-5 md:grid-cols-[44px_34%_1fr_160px] md:items-baseline md:gap-5">
                <span className="font-mono text-[9px] text-forge-500">{n}</span>
                <h3 className="font-display text-2xl font-medium tracking-[-.03em]">{title}</h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className="font-mono text-[9px] text-[#1d5b63] md:text-right">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="bg-[var(--text-primary)] text-[var(--bg-primary)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
          <div className="border-t border-white/25 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">03 / The model</p>
            <h2 className="mt-4 max-w-[1000px] font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[.94] tracking-[-.06em]">
              SaaS is dead. <span className="text-forge-400">Long live CSAS.</span>
            </h2>
            <p className="mt-5 max-w-[760px] font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.1] tracking-[-.035em] text-white/60">
              Custom software as a service: we build the system around the company, then keep it alive.
            </p>
          </div>
          <div className="mt-10 grid border-t border-white/20 md:grid-cols-4">
            {[
              ['01 / Discover', 'Learn the process.', 'Map the workflow, exceptions and the true cost of the current tools.'],
              ['02 / Design', 'Design the system.', 'Product, interface and architecture shaped around the business.'],
              ['03 / Build', 'Ship the first version.', 'Working software in production, not a deck with a future roadmap.'],
              ['04 / Run', 'Stay and improve.', 'Operate, measure and evolve the system as the company changes.'],
            ].map(([n, title, description], index) => (
              <div key={n} className={`py-5 md:px-6 ${index === 0 ? 'md:pl-0' : ''} ${index === 3 ? 'md:pr-0' : ''} ${index < 3 ? 'border-b border-white/20 md:border-r md:border-b-0' : ''}`}>
                <p className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-300">{n}</p>
                <h3 className="mt-7 font-display text-[22px] font-medium tracking-[-.03em]">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="bg-[var(--bg-secondary)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">04 / Lab notes</p>
            <h2 className="mt-4 max-w-[520px] font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[.96] tracking-[-.055em]">Built in the open.</h2>
            <p className="mt-4 max-w-[400px] text-[13px] leading-relaxed text-[var(--text-muted)]">Open source and side products, separate from client work. These are the tools we build when no one asks.</p>
          </div>
          <div className="border-t border-[var(--text-primary)]">
            {lab.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 border-b border-[var(--border-color)] py-4 text-[13px] transition-colors hover:text-forge-500">
                <span>{item.name}</span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#1d5b63]">
                  <LabIcon type={item.icon} /> {item.meta} <span className="ml-1">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-14">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">05 / Writing</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[.96] tracking-[-.055em]">Our CTO writes the blog.</h2>
            <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[var(--text-muted)]">Notes on custom software, AI systems and the work behind them. Follow along on the blog or on X.</p>
          </div>
          <div className="flex items-center gap-4 border border-[var(--border-color)] p-4 md:min-w-[300px]">
            <img src="https://avatars.githubusercontent.com/u/222370422?v=4" alt="Alex Vega" className="h-14 w-14 border border-[var(--border-color)] object-cover" loading="lazy" />
            <div>
              <p className="font-display text-lg font-medium">Alex Vega</p>
              <p className="font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">CTO, VegaForge</p>
              <div className="mt-2 flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-[.04em]">
                <a href="/blog" className="text-forge-500 hover:underline">Read the blog</a>
                <a href="https://x.com/vvegalex" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-forge-500">Follow on X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-forge-500 text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-16 md:grid-cols-[1.25fr_.75fr] md:items-end md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">06 / Start a conversation</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[.9] tracking-[-.06em]">Bring us the system. We will make it work.</h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/75">Tell us what the business runs on today and where it breaks. We will answer with a point of view, not a brochure.</p>
            <a href="mailto:alex@vegaforge.dev" className="mt-6 inline-flex border border-white px-5 py-3 text-xs font-medium transition-colors hover:bg-white hover:text-forge-600">alex@vegaforge.dev <span className="ml-2">↗</span></a>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">VegaForge / Product systems</p>
            <TallyButton className="mt-3 inline-block border-b border-white pb-1 font-display text-2xl transition-transform hover:translate-x-1">Start a project</TallyButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
