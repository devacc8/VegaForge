import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TallyButton } from '../components/TallyButton'

export const metadata: Metadata = {
  title: 'AI Agents | VegaForge',
  description:
    'VegaForge builds AI agents for support, operations, financial monitoring and prediction market research. Retrieval, tools, evaluations and human approval, built into the systems your team already uses.',
  alternates: { canonical: '/ai-agents' },
  openGraph: {
    title: 'AI Agents | VegaForge',
    description: 'AI agents for support, operations, financial monitoring and prediction market research. Built with retrieval, tools, evaluations and human approval.',
    url: 'https://vegaforge.dev/ai-agents',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge AI agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents | VegaForge',
    description: 'AI agents for support, operations, financial monitoring and prediction market research, built end to end.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

const fits = [
  ['01', 'Customer support', 'Answer from the real knowledge base, hand off edge cases with context, and keep every answer auditable.'],
  ['02', 'Internal operations', 'Read the documents, check the systems and prepare the next action. Your team approves before anything changes.'],
  ['03', 'Research and monitoring', 'Watch sources, compare signals and deliver a short brief instead of another dashboard nobody opens.'],
  ['04', 'Product AI features', 'Retrieval, tools, evaluations and interfaces that survive real users, not a demo that only works on the happy path.'],
]

const stack = [
  ['01 / Model', 'The commodity', 'The right model for the job, not the most expensive one by default. Routing, fallbacks and cost limits.'],
  ['02 / Harness', 'The body', 'Deterministic tools, curated context, state and guardrails. The part the model does not write for you.'],
  ['03 / Data', 'The ground truth', 'Documents, ledgers, market feeds and internal systems. Clean sources, explicit permissions, no magic.'],
  ['04 / Evaluation', 'The proof', 'Task-level tests, traces and human review. We know what good looks like before the agent goes live.'],
  ['05 / Run', 'The loop', 'Monitoring, cost control and a clean handoff. The agent reports what it tried, not just what it produced.'],
]

const articles = [
  ['The harness is the moat', 'Why the model is a commodity and the system around it is the advantage.', '/blog/harness-is-the-moat'],
  ['AI agents and prediction markets', 'How LLM forecasting is changing research and execution in event markets.', '/blog/ai-agents-prediction-markets'],
  ['Why agents fail in production', 'The missing integration layer: connectors, testing, cost controls and observability.', '/blog/ai-agents-fail-alone'],
]

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">AI systems / CSAS</p>
          <h1 className="mt-4 max-w-[900px] font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[.9] tracking-[-.06em]">
            AI systems that do the work.
            <br />
            <span className="text-[#1d5b63]">With you in control.</span>
          </h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
            We build AI agents for support, operations, financial monitoring and prediction market research. Retrieval, tools, evaluations and human approval, built into the systems your team already uses.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <TallyButton className="bg-forge-500 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-forge-600">Start a conversation</TallyButton>
            <a href="#how-it-works" className="border border-[var(--text-primary)] px-5 py-3 text-xs font-medium transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">How it works</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">01 / Where it fits</p>
            <div>
              <h2 className="max-w-[760px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">A useful agent is a system, not a prompt.</h2>
              <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[var(--text-muted)]">The model is one part. The rest is data, permissions, tools, edge cases and the interface around them.</p>
            </div>
          </div>
          <div className="grid border-t border-[var(--text-primary)] md:grid-cols-2">
            {fits.map(([n, title, description], index) => (
              <div key={n} className={`border-b border-[var(--border-color)] py-6 md:px-8 ${index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[9px] text-forge-500">{n}</span>
                  <h3 className="font-display text-2xl font-medium tracking-[-.03em]">{title}</h3>
                </div>
                <p className="mt-3 max-w-[460px] pl-7 text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--bg-primary)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-9 md:px-8 md:py-11">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">The pipeline</p>
            <p className="font-mono text-[9px] uppercase tracking-[.06em] text-white/40">Sources to action</p>
          </div>
          <p className="mt-4 font-display text-xl font-medium tracking-[-.03em] text-white/80">The model sits in the middle. The rest is the system.</p>
          <div className="relative mt-8">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-white/20 md:block" aria-hidden="true" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-6 md:gap-4">
              {[
                ['01', 'Sources', 'Documents, ledgers, feeds'],
                ['02', 'Normalize', 'Clean, index, permissions'],
                ['03', 'Tools', 'Deterministic calls'],
                ['04', 'Agent', 'Reason, plan, explain'],
                ['05', 'Approval', 'Human decision'],
                ['06', 'Action', 'Write, send, act'],
              ].map(([n, title, description], index) => (
                <div key={n} className="relative">
                  <div className="flex items-center gap-2">
                    <span className="relative z-10 flex h-6 w-6 items-center justify-center border border-forge-400 bg-[var(--text-primary)] font-mono text-[8px] text-forge-300">{n}</span>
                    {index < 5 ? <span className="hidden text-white/25 md:inline" aria-hidden="true">→</span> : null}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-[-.03em] text-white">{title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/45">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-10 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">02 / Two workflows</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">Where the work is not a chat window.</h2>
              <p className="mt-4 max-w-[600px] text-[14px] leading-relaxed text-[var(--text-muted)]">Two patterns we keep coming back to: numbers that must reconcile, and decisions that need evidence.</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 md:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">Financial data</p>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-.04em]">Monitor, reconcile, explain.</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">Statements, invoices, bank feeds and market data arrive in different formats. The agent normalizes them, runs the deterministic math, reconciles what changed and writes a short morning brief. Anything unusual gets a source and an owner.</p>
              <div className="mt-6 border-t border-[var(--border-color)] pt-4">
                <p className="font-mono text-[8px] uppercase tracking-[.06em] text-[var(--text-muted)]">What it does</p>
                <ul className="mt-3 space-y-2 text-[12px] leading-relaxed text-[var(--text-secondary)]">
                  <li>Normalizes ledgers, invoices and feeds.</li>
                  <li>Runs calculations outside the model.</li>
                  <li>Flags anomalies with links to the source.</li>
                  <li>Prepares a brief for a human to approve.</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Deterministic math', 'Source-linked alerts', 'Audit trail', 'Human approval'].map((tag) => (
                  <span key={tag} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[#1d5b63]">{tag}</span>
                ))}
              </div>
              <a href="/ai-trading" className="mt-5 inline-flex font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 hover:underline">
                See AI trading systems ↗
              </a>
            </article>

            <article className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 md:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">Prediction markets</p>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-.04em]">Research the edge. Keep the risk bounded.</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">The agent reads the market, the resolution rules and the news, then produces a probability estimate with the evidence behind it. It compares that estimate to the price, sizes the gap against explicit limits and asks before acting.</p>
              <div className="mt-6 border-t border-[var(--border-color)] pt-4">
                <p className="font-mono text-[8px] uppercase tracking-[.06em] text-[var(--text-muted)]">What it does</p>
                <ul className="mt-3 space-y-2 text-[12px] leading-relaxed text-[var(--text-secondary)]">
                  <li>Scans markets and resolution rules.</li>
                  <li>Builds a case with sources and counterarguments.</li>
                  <li>Compares the estimate with the market price.</li>
                  <li>Reports the tradeoff, not a certainty.</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Research', 'Calibration', 'Risk limits', 'Human approval'].map((tag) => (
                  <span key={tag} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[#1d5b63]">{tag}</span>
                ))}
              </div>
              <a href="/prediction-markets" className="mt-5 inline-flex font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 hover:underline">
                How we build prediction market systems ↗
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">03 / The stack</p>
            <h2 className="max-w-[760px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">The model is one layer.</h2>
          </div>
          <div className="border-t border-[var(--text-primary)]">
            {stack.map(([n, title, kicker, description]) => (
              <div key={n} className="grid gap-2 border-b border-[var(--border-color)] py-5 md:grid-cols-[110px_220px_1fr] md:gap-6">
                <span className="font-mono text-[9px] uppercase tracking-[.05em] text-forge-500">{n}</span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-.03em]">{title}</h3>
                  <p className="font-mono text-[8px] uppercase tracking-[.05em] text-[var(--text-muted)]">{kicker}</p>
                </div>
                <p className="max-w-[620px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex flex-col justify-between gap-3 border-t border-[var(--text-primary)] pt-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">04 / From the blog</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium tracking-[-.05em]">How we think about agents.</h2>
            </div>
            <a href="/blog" className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 hover:underline">All writing ↗</a>
          </div>
          <div className="grid border-t border-[var(--text-primary)] md:grid-cols-3">
            {articles.map(([title, description, href], index) => (
              <a key={href} href={href} className={`group py-6 md:px-6 ${index < 2 ? 'border-b border-[var(--border-color)] md:border-r md:border-b-0' : ''} ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}>
                <h3 className="font-display text-xl font-medium leading-tight tracking-[-.03em] transition-colors group-hover:text-forge-500">{title}</h3>
                <p className="mt-3 text-[12px] leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className="mt-5 inline-block font-mono text-[9px] uppercase tracking-[.05em] text-forge-500">Read ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forge-500 text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-14 md:grid-cols-[1.25fr_.75fr] md:items-end md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">Start a conversation</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[.9] tracking-[-.06em]">Bring us the workflow. We will find the agent.</h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/75">Tell us what the team does by hand today. We will answer with a point of view, not a brochure.</p>
            <a href="mailto:alex@vegaforge.dev" className="mt-6 inline-flex border border-white px-5 py-3 text-xs font-medium transition-colors hover:bg-white hover:text-forge-600">alex@vegaforge.dev <span className="ml-2">↗</span></a>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">VegaForge / AI systems</p>
            <TallyButton className="mt-3 border-b border-white pb-1 font-display text-2xl transition-transform hover:translate-x-1">Start a project</TallyButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
