import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TallyButton } from '../components/TallyButton'

export const metadata: Metadata = {
  title: 'Prediction Markets | VegaForge',
  description:
    'VegaForge builds AI systems for prediction markets: data, calibration, edge detection, execution and risk. For Polymarket and other event markets.',
  alternates: { canonical: '/prediction-markets' },
  openGraph: {
    title: 'Prediction Markets | VegaForge',
    description: 'AI systems for prediction markets: the harness around the model, from data to execution and risk.',
    url: 'https://vegaforge.dev/prediction-markets',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge prediction markets' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prediction Markets | VegaForge',
    description: 'AI systems for prediction markets: data, calibration, edge, execution and risk.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

const failures = [
  [
    '01',
    'A forecast is not an edge',
    'The market already prices the obvious. A model that agrees with the crowd has no trade, no matter how good the prose is.',
  ],
  [
    '02',
    'A signal is not a trade',
    'Fees, spread, liquidity and size decide whether the edge survives contact with the order book.',
  ],
  [
    '03',
    'A backtest is not a system',
    'Live feeds break, orders miss, calibration drifts. Someone has to watch the thing at 3 a.m.',
  ],
]

const layers = [
  ['01 / Data', 'Market feeds, order books, resolution rules, external data.', 'Snapshots you can replay, not a stream you hope to catch.'],
  ['02 / Model', 'A probability, not a paragraph.', 'LLM, statistical or ensemble. One calibration layer turns confidence into a number.'],
  ['03 / Edge', 'Model probability minus price, fees and fill cost.', 'Ranked opportunities, not a watchlist of everything.'],
  ['04 / Execution', 'Sizing, limits, order types, cancellation, kill switch.', 'Paper before live. Human approval where the size justifies it.'],
  ['05 / Evaluation', 'Backtests, live paper, traces, P&L attribution.', 'Calibration drift is a first-class metric, not an afterthought.'],
]

const offers: Array<[string, string, string, string[]]> = [
  [
    'Research scanner',
    'Find the gap before risking money.',
    'Scans markets, reads resolution rules, builds a probability with evidence and ranks the gaps against the book. No orders, no exposure.',
    ['Market scan', 'Resolution rules', 'Evidence', 'Ranking'],
  ],
  [
    'Execution agent',
    'The model proposes. The harness disposes.',
    'Places orders inside explicit limits: size, price, liquidity, daily loss. Paper trading first, human approval and a kill switch.',
    ['Sizing', 'Limits', 'Paper trading', 'Kill switch'],
  ],
  [
    'Risk and monitoring',
    'See the failure before the loss.',
    'Exposure, calibration drift, failed orders and fee drag in one place. A short daily brief instead of another dashboard nobody opens.',
    ['Exposure', 'Calibration drift', 'Fee drag', 'Daily brief'],
  ],
]

const cases = [
  [
    'Weather, priced against an ensemble',
    'The edge was not the prompt. It was the data pipeline: an open weather ensemble, a calibrated mapping to the market question, and a filter for markets where the book was thin. The model was the easy part.',
    'Lesson: the data pipeline carried the edge.',
  ],
  [
    'An LLM forecaster that was too confident',
    'Raw model probabilities were overconfident at the tails. A calibration layer and a market filter made the output usable. The lesson: an uncalibrated forecast is a liability, not an edge.',
    'Lesson: calibrate before you size.',
  ],
  [
    'Fees and liquidity ate the first strategy',
    'The naive signal looked profitable until fees, spread and size were included. A fee-aware sizer and a liquidity filter turned it into something that could survive live.',
    'Lesson: the book is part of the model.',
  ],
]

const steps = [
  ['01', 'Diagnostic', '1 to 2 weeks', 'We audit the data, the model and the execution path. You get a short report: what is missing, what to build first, what not to build.'],
  ['02', 'Prototype', '4 to 6 weeks', 'A scanner or a paper-trading agent on your data. No live money until the evaluation is clear and the failure modes are named.'],
  ['03', 'Production', 'Ongoing', 'Live system, monitoring, calibration and a retainer. We stick around for the failure modes, not just the launch.'],
]

const research = [
  ["The Five Things Polymarket's Winners Do and 87% Don't", 'What 112,000 wallets say about sizing, category focus and exits.', '/blog/polymarket-top-1-percent'],
  ['The Weather Bots Quietly Making Millions on Polymarket', 'Why the boring markets attracted the best data pipelines.', '/blog/weather-bots-polymarket'],
  ['How an LLM Turned $1,000 into $14,000 on Polymarket in 48 Hours', 'The viral demo, and what it leaves out about execution and risk.', '/blog/claude-polymarket-trading'],
  ['AI Agents and Prediction Markets', 'How forecasting agents change research, and where they still fail.', '/blog/ai-agents-prediction-markets'],
  ["They Didn't Hack Polymarket. They Hijacked Its Speed Test", 'The trust boundary behind a market is the browser, not the contract.', '/blog/polymarket-dns-hijack'],
]

export default function PredictionMarketsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">Prediction markets / AI systems</p>
          <h1 className="mt-4 max-w-[980px] font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[.9] tracking-[-.06em]">
            AI for prediction markets,
            <br />
            <span className="text-[#1d5b63]">built as a system.</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
            We build the harness around the model: data, calibration, edge detection, execution and risk. For Polymarket and other event markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <TallyButton className="bg-forge-500 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-forge-600">Start with a diagnostic</TallyButton>
            <a href="#harness" className="border border-[var(--text-primary)] px-5 py-3 text-xs font-medium transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">See the harness</a>
          </div>

          <div className="mt-12 border-t border-[var(--text-primary)] pt-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-5">
              {['Data', 'Model', 'Edge', 'Execution', 'Evaluation'].map((step, index) => (
                <div key={step} className="flex items-baseline gap-2">
                  <span className="font-mono text-[9px] text-forge-500">0{index + 1}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[.06em] text-[var(--text-secondary)]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">01 / The failure</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">The model is not the strategy.</h2>
              <p className="mt-4 max-w-[600px] text-[14px] leading-relaxed text-[var(--text-muted)]">The demo works. The live account does not. The missing layer is the harness.</p>
            </div>
          </div>

          <div className="grid border-t border-[var(--text-primary)] md:grid-cols-3">
            {failures.map(([n, title, description], index) => (
              <div key={n} className={`border-b border-[var(--border-color)] py-6 md:px-7 ${index < 2 ? 'md:border-r' : ''} ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}>
                <span className="font-mono text-[9px] text-forge-500">{n}</span>
                <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-[-.035em]">{title}</h3>
                <p className="mt-3 max-w-[360px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[720px] border-l-2 border-forge-500 pl-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Most teams start by plugging an LLM into an API key. That is the first week, not the product. The market does not care about your demo.
          </p>
        </div>
      </section>

      <section id="harness" className="border-b border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--bg-primary)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-white/30 pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">02 / The harness</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em] text-white">Five layers the model does not write for you.</h2>
              <p className="mt-4 max-w-[620px] text-[14px] leading-relaxed text-white/50">The model is a commodity. The system around it is the advantage.</p>
            </div>
          </div>

          <div className="border-t border-white/20">
            {layers.map(([label, title, description]) => (
              <div key={label} className="grid gap-2 border-b border-white/15 py-5 md:grid-cols-[150px_320px_1fr] md:gap-6">
                <span className="font-mono text-[9px] uppercase tracking-[.05em] text-forge-300">{label}</span>
                <h3 className="font-display text-xl font-medium leading-tight tracking-[-.03em] text-white">{title}</h3>
                <p className="max-w-[560px] text-[13px] leading-relaxed text-white/55">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[9px] uppercase tracking-[.06em] text-white/40">
            More on the thesis: <a href="/blog/harness-is-the-moat" className="text-forge-300 underline underline-offset-2">the harness is the moat</a>
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">03 / The work</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">Three ways to start.</h2>
              <p className="mt-4 max-w-[600px] text-[14px] leading-relaxed text-[var(--text-muted)]">You do not have to begin with live money. Most teams should not.</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {offers.map(([title, kicker, description, tags]) => (
              <article key={title} className="flex flex-col border border-[var(--border-color)] bg-white p-6 transition-colors hover:border-forge-500 md:p-7">
                <h3 className="font-display text-2xl font-medium tracking-[-.04em]">{title}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">{kicker}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {tags.map((tag) => (
                    <span key={tag} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[#1d5b63]">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">04 / From production</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">What we learned building one.</h2>
              <p className="mt-4 max-w-[620px] text-[14px] leading-relaxed text-[var(--text-muted)]">A prediction market system we built and run. No client names, no P&amp;L promises, just the parts that mattered.</p>
            </div>
          </div>

          <div className="grid border-t border-[var(--text-primary)] md:grid-cols-3">
            {cases.map(([title, body, lesson], index) => (
              <div key={title} className={`border-b border-[var(--border-color)] py-6 md:px-7 ${index < 2 ? 'md:border-r' : ''} ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}>
                <h3 className="font-display text-xl font-medium leading-tight tracking-[-.03em]">{title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">{body}</p>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">05 / Beyond Polymarket</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">Event markets first. Then the rest.</h2>
              <p className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-[var(--text-muted)]">Prediction markets are a good starting point: clean questions, fast feedback, public data. The same five layers apply to trading, hedging and arbitrage on other venues.</p>
            </div>
          </div>

          <div className="grid border-t border-[var(--text-primary)] md:grid-cols-3">
            {[
              ['Trading', 'Signals, sizing and execution on liquid markets. The harness decides what reaches the book.'],
              ['Hedging', 'You cannot hedge what you cannot measure. Limits, scenarios and a clear audit trail.'],
              ['Arbitrage', 'Two prices, one position. Latency, fees and fill probability are the whole game.'],
            ].map(([title, description], index) => (
              <div key={title} className={`border-b border-[var(--border-color)] py-6 md:px-7 ${index < 2 ? 'md:border-r' : ''} ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}>
                <h3 className="font-display text-2xl font-medium tracking-[-.035em]">{title}</h3>
                <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">
            The same harness on real markets: <a href="/ai-trading" className="text-forge-500 underline underline-offset-2">AI trading</a>
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 grid gap-4 border-t border-[var(--text-primary)] pt-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">06 / How we start</p>
            <div>
              <h2 className="max-w-[820px] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-medium leading-[.96] tracking-[-.055em]">Diagnostic, prototype, production.</h2>
              <p className="mt-4 max-w-[600px] text-[14px] leading-relaxed text-[var(--text-muted)]">No live money on day one. The first deliverable is a decision, not a trade.</p>
            </div>
          </div>

          <div className="border-t border-[var(--text-primary)]">
            {steps.map(([n, title, time, description]) => (
              <div key={n} className="grid gap-2 border-b border-[var(--border-color)] py-5 md:grid-cols-[80px_220px_150px_1fr] md:gap-6">
                <span className="font-mono text-[9px] text-forge-500">{n}</span>
                <h3 className="font-display text-xl font-medium tracking-[-.03em]">{title}</h3>
                <span className="font-mono text-[9px] uppercase tracking-[.05em] text-[var(--text-muted)]">{time}</span>
                <p className="max-w-[560px] text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex flex-col justify-between gap-3 border-t border-[var(--text-primary)] pt-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">07 / From the blog</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium tracking-[-.05em]">The research behind the system.</h2>
            </div>
            <a href="/blog" className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500 hover:underline">All writing ↗</a>
          </div>
          <div className="border-t border-[var(--text-primary)]">
            {research.map(([title, description, href]) => (
              <a key={href} href={href} className="group grid gap-2 border-b border-[var(--border-color)] py-4 md:grid-cols-[1fr_320px] md:gap-6">
                <h3 className="font-display text-lg font-medium leading-tight tracking-[-.02em] transition-colors group-hover:text-forge-500">{title}</h3>
                <p className="text-[12px] leading-relaxed text-[var(--text-muted)]">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forge-500 text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-14 md:grid-cols-[1.25fr_.75fr] md:items-end md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">Start with a diagnostic</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[.9] tracking-[-.06em]">Bring us the market. We will build the harness.</h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/75">Tell us what you are trying to trade and what you have already tried. We will answer with a point of view, not a sales deck.</p>
            <a href="mailto:alex@vegaforge.dev" className="mt-6 inline-flex border border-white px-5 py-3 text-xs font-medium transition-colors hover:bg-white hover:text-forge-600">alex@vegaforge.dev <span className="ml-2">↗</span></a>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">VegaForge / Prediction markets</p>
            <TallyButton className="mt-3 border-b border-white pb-1 font-display text-2xl transition-transform hover:translate-x-1">Start a project</TallyButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
