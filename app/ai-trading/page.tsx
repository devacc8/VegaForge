import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TallyButton } from '../components/TallyButton'

export const metadata: Metadata = {
  title: 'AI Trading Systems for Funds and Trading Teams | VegaForge',
  description:
    'VegaForge builds AI trading systems: data, calibration, execution, risk and the infrastructure around them. For trading teams, funds and market operators.',
  alternates: { canonical: '/ai-trading' },
  openGraph: {
    title: 'AI Trading Systems for Funds and Trading Teams | VegaForge',
    description: 'AI trading systems: the harness around the model, from data to execution and risk.',
    url: 'https://vegaforge.dev/ai-trading',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge AI trading systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Trading Systems for Funds and Trading Teams | VegaForge',
    description: 'AI trading systems: data, calibration, execution, risk and the infrastructure in between.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

const systemRows: Array<[string, string, string]> = [
  ['01', 'Data', 'Venues, reference data, corporate actions, snapshots.'],
  ['02', 'Research', 'Signal, calibration, backtest, a baseline to beat.'],
  ['03', 'Risk', 'Limits, exposure, drawdown, a kill switch.'],
  ['04', 'Execution', 'Venues, order types, impact, reconciliation.'],
  ['05', 'Monitoring', 'Traces, P&L attribution, drift, alerts.'],
]

const failures: Array<[string, string, string]> = [
  ['A signal with no cost model', 'Fees, spread, market impact and borrow', 'A cost-aware edge'],
  ['A backtest with leakage', 'Time-ordered folds, survivorship, regime shifts', 'A test you can replay'],
  ['A model with no desk', 'Execution, risk, reconciliation, monitoring', 'The desk around it'],
]

const mapTop: Array<[string, string, string[]]> = [
  ['01', 'Data', ['Venues', 'Reference data', 'Corporate actions', 'Snapshots']],
  ['02', 'Research', ['Signal', 'Calibration', 'Backtest', 'Baseline']],
  ['03', 'Risk', ['Limits', 'Exposure', 'Drawdown', 'Kill switch']],
  ['04', 'Execution', ['Venues', 'Order types', 'Impact', 'Reconciliation']],
]

const mapBottom: Array<[string, string, string, boolean]> = [
  ['05', 'Monitoring', 'Traces, P&L attribution, drift, alerts, on-call.', false],
  ['06', 'Reconciliation', 'Ledger, venue and chain compared after every order.', false],
  ['07', 'Model', 'A signal or a probability. One input, not the system.', true],
]

const services: Array<[string, string, string, string[], string]> = [
  [
    '01',
    'Research scanner',
    'Find the gap before risking capital. A ranked list of opportunities with the evidence and the costs attached.',
    ['Universe scan', 'Signal with sources', 'Cost and liquidity model', 'Ranked shortlist'],
    'It places no orders and takes no exposure.',
  ],
  [
    '02',
    'Execution agent',
    'The model proposes. The harness disposes. Orders inside explicit limits, paper first, human approval where the size justifies it.',
    ['Sizing and limits', 'Paper trading', 'Human approval', 'Kill switch'],
    'It does not promise returns, and it does not hide the downside.',
  ],
  [
    '03',
    'Risk and monitoring',
    'Exposure, drawdown, reconciliation errors, failed orders and fee drag in one place. A short daily brief instead of another dashboard.',
    ['Exposure and drawdown', 'Reconciliation', 'Fee drag', 'Daily brief'],
    'It is not a dashboard nobody opens. If it does not change a decision, we cut it.',
  ],
]

const gates: Array<[string, string, string]> = [
  ['01', 'Data you can replay', 'Snapshots, timestamps and the version of the rules at the moment of the decision.'],
  ['02', 'A test set you have not touched', 'Time-ordered folds, a locked period, no peeking at the answer.'],
  ['03', 'A cost model, not a mid-price fantasy', 'Fees, spread, impact, borrow and failed transactions.'],
  ['04', 'A risk limit for every position', 'Size, daily loss, venue, correlation. Written down, not implied.'],
  ['05', 'A kill switch that works', 'Tested, not assumed. One person can stop the system.'],
  ['06', 'An owner for reconciliation', 'Ledger, venue and chain, compared and signed off.'],
]

const risks: Array<[string, string]> = [
  ['Lookahead leakage', 'Time-ordered folds and a locked test set.'],
  ['Survivorship', 'Delisted and voided markets stay in the sample.'],
  ['Overfitting', 'Pre-registered variants and a correction for the number of attempts.'],
  ['Fee blindness', 'A cost-aware sizer, not a mid-price fill.'],
  ['Market impact', 'Liquidity and participation limits, sized before the order.'],
  ['Broken feed', 'Stale-data guards, fallbacks and a visible failure state.'],
  ['Model drift', 'Calibration monitoring, retraining rules and a rollback path.'],
  ['Reconciliation drift', 'Three-way checks and one owner for the difference.'],
]

const timeline: Array<[string, string, string]> = [
  ['Week 0 to 2', 'Diagnostic', 'We audit the data, the signal, the execution path and the risk limits. You get a short report: what is missing, what to build first, what not to build.'],
  ['Week 2 to 6', 'Prototype', 'A scanner or a paper-trading agent on your data. No live capital until the evaluation is clear and the failure modes are named.'],
  ['Week 6 and later', 'Production', 'Live system, monitoring, reconciliation and a retainer. We stay on the failure modes, not just the launch.'],
]

const reading: Array<[string, string, string]> = [
  ['Your Polymarket Bot Is a Demo Until It Has a Harness', 'What the harness is, and what breaks without it.', '/blog/prediction-markets-harness'],
  ["The Five Things Polymarket's Winners Do and 87% Don't", 'What 112,000 wallets say about sizing, focus and exits.', '/blog/polymarket-top-1-percent'],
  ['The Weather Bots Quietly Making Millions on Polymarket', 'Why the boring markets attracted the best data pipelines.', '/blog/weather-bots-polymarket'],
  ['The harness is the moat', 'Why the model is a commodity and the system is the advantage.', '/blog/harness-is-the-moat'],
]

export default function AITradingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="relative overflow-hidden bg-[#0b1d22] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[.22]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-16 md:px-8 md:pb-20 md:pt-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">AI trading / Financial markets</p>
            <h1 className="mt-5 max-w-[760px] font-display text-[clamp(2.6rem,4.4vw,4.4rem)] font-medium leading-[.9] tracking-[-.06em]">
              AI trading systems,
              <br />
              <span className="text-forge-300">built as infrastructure.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/60">
              We build the harness that turns a model into a trading system: data pipelines, calibration, execution, risk limits and the infrastructure in between. For trading teams, funds and market operators.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <TallyButton className="bg-forge-500 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-forge-600">Start with a diagnostic</TallyButton>
              <a href="#system" className="border border-white/40 px-5 py-3 text-xs font-medium text-white transition-colors hover:border-white hover:bg-white/10">See the system</a>
            </div>
          </div>

          <div className="border border-white/15 bg-white/[.03]">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 px-5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[.08em] text-forge-300">System map</p>
              <p className="font-mono text-[9px] uppercase tracking-[.06em] text-white/35">One model / five layers</p>
            </div>
            <div className="divide-y divide-white/10">
              {systemRows.map(([n, title, description]) => (
                <div key={n} className="grid grid-cols-[26px_84px_1fr] gap-3 px-5 py-3.5">
                  <span className="pt-0.5 font-mono text-[8px] text-forge-300">{n}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[.06em] text-white">{title}</span>
                  <span className="text-[12px] leading-relaxed text-white/45">{description}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 border-t border-white/15 px-5 py-4">
              <span className="border border-forge-500/50 bg-forge-500/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[.06em] text-forge-300">Model</span>
              <span className="font-mono text-[8px] uppercase tracking-[.05em] text-white/35">One input, not the system</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-[.85fr_1.15fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">The failure</p>
            <h2 className="mt-4 max-w-[460px] font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[.96] tracking-[-.05em]">The model is the smallest part.</h2>
            <p className="mt-5 max-w-[440px] text-[14px] leading-relaxed text-[var(--text-secondary)]">Most teams start with a model and an API key. That is the first week of a project, not the product. The market does not care about your backtest.</p>
          </div>

          <div className="self-end">
            <div className="hidden border-t border-[var(--text-primary)] pb-3 pt-3 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)] md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-6">
              <span>What fails</span>
              <span>Why</span>
              <span>What we build</span>
            </div>
            <div className="border-t border-[var(--text-primary)]">
              {failures.map(([what, why, build]) => (
                <div key={what} className="grid gap-2 border-b border-[var(--border-color)] py-5 md:grid-cols-[1fr_1fr_1fr] md:gap-6">
                  <h3 className="font-display text-lg font-medium leading-tight tracking-[-.02em]">{what}</h3>
                  <p className="text-[13px] leading-relaxed text-[var(--text-muted)]">{why}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[.05em] text-forge-500 md:pt-1">{build}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="bg-[#0b1d22] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">The system</p>
              <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[.96] tracking-[-.05em] text-white">One model. Five layers. One owner.</h2>
            </div>
            <p className="max-w-[360px] text-[13px] leading-relaxed text-white/45">The model is one box. The rest is the system that decides whether it is allowed to act.</p>
          </div>

          <div className="mt-8 grid gap-px bg-white/15 md:grid-cols-4">
            {mapTop.map(([n, title, items]) => (
              <div key={n} className="bg-[#0b1d22] p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-medium tracking-[-.03em] text-white">{title}</h3>
                  <span className="font-mono text-[8px] text-forge-300">{n}</span>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="font-mono text-[9px] uppercase tracking-[.04em] text-white/40">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-px grid gap-px bg-white/15 md:grid-cols-[1.5fr_1fr_1fr]">
            {mapBottom.map(([n, title, description, accent]) => (
              <div key={n} className={`p-5 ${accent ? 'bg-forge-500/10' : 'bg-[#0b1d22]'}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className={`font-display text-xl font-medium tracking-[-.03em] ${accent ? 'text-forge-300' : 'text-white'}`}>{title}</h3>
                  <span className="font-mono text-[8px] text-forge-300">{n}</span>
                </div>
                <p className="mt-3 max-w-[420px] text-[12px] leading-relaxed text-white/45">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--text-primary)] pb-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">The work</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[.96] tracking-[-.05em]">Three ways to start.</h2>
            </div>
            <p className="max-w-[380px] text-[13px] leading-relaxed text-[var(--text-muted)]">You do not have to start with live capital. Most teams should not.</p>
          </div>

          <div className="border-t border-[var(--text-primary)]">
            {services.map(([n, title, description, gets, nots]) => (
              <div key={n} className="grid gap-5 border-b border-[var(--border-color)] py-7 md:grid-cols-[46px_1.1fr_1fr_1fr] md:gap-8">
                <span className="font-mono text-[9px] text-forge-500">{n}</span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-[-.03em]">{title}</h3>
                  <p className="mt-3 max-w-[380px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[.06em] text-[var(--text-muted)]">What you get</p>
                  <ul className="mt-3 space-y-1.5">
                    {gets.map((item) => (
                      <li key={item} className="text-[12px] leading-relaxed text-[var(--text-secondary)]">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[.06em] text-[var(--text-muted)]">What it does not do</p>
                  <p className="mt-3 max-w-[300px] text-[12px] leading-relaxed text-[var(--text-muted)]">{nots}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1d22] text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">Before live capital</p>
            <h2 className="mt-4 max-w-[400px] font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[.96] tracking-[-.05em] text-white">Six gates.</h2>
            <p className="mt-5 max-w-[360px] text-[13px] leading-relaxed text-white/45">If one of them is missing, the model does not trade. None of them is optional.</p>
          </div>

          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {gates.map(([n, title, description]) => (
              <div key={n} className="bg-[#0b1d22] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="h-1.5 w-1.5 bg-forge-500" aria-hidden="true" />
                  <span className="font-mono text-[8px] text-forge-300">{n}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium leading-tight tracking-[-.02em] text-white">{title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-white/45">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">The risk register</p>
            <h2 className="mt-4 max-w-[400px] font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[.96] tracking-[-.05em]">What we look for before it looks for us.</h2>
          </div>

          <div className="border-t border-[var(--text-primary)]">
            {risks.map(([risk, control]) => (
              <div key={risk} className="grid gap-2 border-b border-[var(--border-color)] py-4 md:grid-cols-[.9fr_1.1fr] md:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-[.05em] text-[var(--text-primary)]">{risk}</span>
                <span className="text-[13px] leading-relaxed text-[var(--text-muted)]">{control}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:gap-16 md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">From production</p>
            <h2 className="mt-4 max-w-[560px] font-display text-[clamp(2rem,3.6vw,3.2rem)] font-medium leading-[.98] tracking-[-.05em]">We have run this harness on prediction markets.</h2>
            <p className="mt-5 max-w-[500px] text-[14px] leading-relaxed text-[var(--text-secondary)]">The same layers apply to real markets. No client names, no P&amp;L promises.</p>
            <a href="/prediction-markets" className="mt-6 inline-flex font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 underline underline-offset-4">See the event market work</a>
          </div>
          <div className="border-l border-[var(--border-color)] pl-6 md:pl-10">
            <p className="border-b border-[var(--border-color)] py-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">A weather ensemble priced against a market.</p>
            <p className="border-b border-[var(--border-color)] py-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">An LLM forecaster with a calibration layer.</p>
            <p className="border-b border-[var(--border-color)] py-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">A fee-aware sizer that survived live.</p>
            <a href="/blog/prediction-markets-harness" className="mt-4 inline-flex font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 underline underline-offset-4">Read the harness article</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--text-primary)] pb-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">How we start</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[.96] tracking-[-.05em]">Diagnostic, prototype, live.</h2>
            </div>
            <p className="max-w-[340px] text-[13px] leading-relaxed text-[var(--text-muted)]">No live capital on day one. The first deliverable is a decision, not a trade.</p>
          </div>

          <div className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-[var(--border-color)] md:block" aria-hidden="true" />
            {timeline.map(([week, title, description]) => (
              <div key={week} className="relative border-l border-[var(--border-color)] pl-5 pt-6 md:border-l-0 md:pl-0 md:pt-8">
                <span className="absolute -left-[3px] top-[1px] h-2 w-2 bg-forge-500 md:left-0" aria-hidden="true" />
                <p className="font-mono text-[8px] uppercase tracking-[.06em] text-forge-500">{week}</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-.03em]">{title}</h3>
                <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-.05em]">Reading</h2>
            <a href="/blog" className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 hover:underline">All writing ↗</a>
          </div>
          <div className="border-t border-[var(--text-primary)]">
            {reading.map(([title, description, href]) => (
              <a key={href} href={href} className="group grid gap-2 border-b border-[var(--border-color)] py-4 md:grid-cols-[1fr_320px] md:gap-6">
                <h3 className="font-display text-lg font-medium leading-tight tracking-[-.02em] transition-colors group-hover:text-forge-500">{title}</h3>
                <p className="text-[12px] leading-relaxed text-[var(--text-muted)]">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-forge-500 bg-[#0b1d22] text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-16 md:grid-cols-[1.3fr_.7fr] md:items-end md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">Start with a diagnostic</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2.4rem,4.8vw,4.8rem)] font-medium leading-[.9] tracking-[-.06em]">Bring us the market. We will build the harness.</h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/55">Tell us what you are trying to trade and what you have already tried. We will answer with a point of view, not a sales deck.</p>
            <a href="mailto:alex@vegaforge.dev" className="mt-6 inline-flex border border-white/50 px-5 py-3 text-xs font-medium text-white transition-colors hover:border-white hover:bg-white/10">alex@vegaforge.dev <span className="ml-2">↗</span></a>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/40">VegaForge / AI trading</p>
            <TallyButton className="mt-3 border-b border-forge-500 pb-1 font-display text-2xl text-white transition-transform hover:translate-x-1">Start a project</TallyButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
