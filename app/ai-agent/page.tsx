import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'AI Agent for Social Media & Automation | VegaForge',
  description: 'Autonomous AI agent that manages your social media 24/7 with Telegram approval. Smart model routing, knowledge base, scheduled tasks. You own everything.',
  alternates: {
    canonical: '/ai-agent',
  },
  openGraph: {
    title: 'AI Agent for Social Media & Automation | VegaForge',
    description: 'Autonomous AI agent that manages your social media 24/7. You approve everything via Telegram.',
    url: 'https://vegaforge.dev/ai-agent',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge AI Agent Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent for Social Media & Automation | VegaForge',
    description: 'Autonomous AI agent that manages your social media 24/7 with Telegram approval.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

export default function AIAgentPage() {
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

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="main-content" className="min-h-[50vh] md:min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">AI AGENT SERVICE</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 dark:text-white mb-6">
            AI Agent for
            <br />
            <span className="text-forge-600 dark:text-forge-500">Your Social Media</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
            Like an AI team member that never sleeps and always asks for your OK first. Monitors your niche, generates content, engages with your audience — nothing goes live without your approval in Telegram
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:devacc8@pm.me"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
            >
              Get Your AI Agent
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium rounded-full transition-all"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">WHO IT&apos;S FOR</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Ideal For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Founders & Solopreneurs',
                desc: 'Build personal brand on autopilot. AI drafts content in your voice — you approve over coffee',
              },
              {
                title: 'Marketing Agencies',
                desc: 'Scale social media management across multiple client accounts without scaling headcount',
              },
              {
                title: 'Growth Teams',
                desc: 'Monitor competitors, engage in relevant conversations, identify and generate leads automatically',
              },
              {
                title: 'Content Creators',
                desc: 'Research topics, draft threads, schedule posts. Spend time creating, not managing distribution',
              },
              {
                title: 'Crypto & Web3 Projects',
                desc: 'Community engagement, announcement monitoring, ecosystem tracking across multiple platforms',
              },
              {
                title: 'Startups',
                desc: 'Maintain consistent social presence without hiring full-time SMM. Punch above your weight class',
              },
            ].map((item) => (
              <div key={item.title} className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
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

      {/* How It Works */}
      <section id="how-it-works" className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">ARCHITECTURE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: '01',
                title: 'Your Server',
                desc: 'Ubuntu VPS with hardened security. Firewall, VPN, SSH key-only access, auto-restart services',
              },
              {
                step: '02',
                title: 'AI Agent',
                desc: 'Custom persona and behavior rules. Knowledge base (RAG), scheduled tasks, multi-LLM routing',
              },
              {
                step: '03',
                title: 'Telegram Control',
                desc: 'Approve or reject every post. Send commands, check status, receive daily digest reports',
              },
              {
                step: '04',
                title: 'Goes Live',
                desc: 'Approved content published to Twitter, LinkedIn, Email, and any custom platform integration',
              },
            ].map((item) => (
              <div key={item.step} className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
                <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-forge-100 dark:bg-forge-600/10 border border-forge-200 dark:border-forge-600/30 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-mono text-sm font-bold text-forge-600 dark:text-forge-500">{item.step}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['Node.js', 'Python', 'Multi-LLM', 'RAG', 'Cron', 'Telegram Bot API'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">A TYPICAL DAY</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            A Day in the Life of Your Agent
          </h2>

          <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-xs dark:shadow-none">
            <div className="relative z-10 space-y-6">
              {[
                { time: '8:00 AM', event: 'Agent scans Twitter for conversations in your niche, finds 5 relevant posts' },
                { time: '8:15 AM', event: 'Generates context-aware replies, sends drafts to your Telegram' },
                { time: '8:30 AM', event: 'You tap Approve on 3 of them over coffee. They go live instantly' },
                { time: '12:00 PM', event: 'Agent drafts an original thread based on morning research. Sends for review' },
                { time: '6:00 PM', event: 'Daily digest arrives: 3 posts published, 12 replies sent, 2 new leads identified' },
              ].map((item) => (
                <div key={item.time} className="flex items-start gap-4 md:gap-6">
                  <span className="font-mono text-sm font-bold text-forge-600 dark:text-forge-500 shrink-0 w-20 md:w-24 pt-0.5">{item.time}</span>
                  <div className="h-px flex-0 w-6 bg-forge-600/20 dark:bg-forge-500/20 mt-3 shrink-0 hidden md:block" />
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.event}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <p className="font-display font-semibold text-lg text-forge-600 dark:text-forge-500">
                  You spent 10 minutes total. Your brand was active all day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">FEATURES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Human-in-the-Loop',
                desc: 'Nothing goes public without your approval. Every draft goes to your Telegram first — approve, edit, or reject with a single tap. You stay in full control',
              },
              {
                title: 'Smart Model Routing',
                desc: 'Claude, GPT, and other models via OpenRouter. Simple tasks go to fast, cheap models. Complex ones go to powerful models. Optimized API costs without sacrificing quality',
              },
              {
                title: 'Knowledge Base (RAG)',
                desc: 'Your agent knows your brand, products, and voice. Local embeddings with hybrid search — no recurring API costs for document processing',
              },
              {
                title: 'Scheduled Autonomy',
                desc: 'Cron-based tasks that run automatically: morning research, feed monitoring, content drafts, competitor tracking, daily digest reports',
              },
              {
                title: 'Enterprise Security',
                desc: 'AES-256 encrypted credentials, firewall with VPN, sandboxed browser processes, SSH key-only access. Your secrets are safe even if a browser process is compromised',
              },
              {
                title: 'Full Ownership',
                desc: 'Runs on your VPS, code in your Git repo, credentials in your encrypted vault. No vendor lock-in, no monthly platform fees. You own everything',
              },
            ].map((feature) => (
              <div key={feature.title} className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
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

      {/* Hiring vs AI Agent */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">COMPARISON</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Hiring a Person vs AI Agent
          </h2>

          <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xs dark:shadow-none">
            <div className="relative z-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-neutral-500 dark:text-neutral-500"></th>
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-neutral-900 dark:text-white">SMM Manager</th>
                    <th className="text-left p-4 md:p-6 font-display font-semibold text-sm text-forge-600 dark:text-forge-500">AI Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost', human: 'Full salary + benefits', agent: 'One-time setup + low running costs' },
                    { label: 'Availability', human: '8 hours/day, weekdays', agent: '24/7, every day' },
                    { label: 'Response time', human: 'Minutes to hours', agent: 'Seconds (after your approval)' },
                    { label: 'Consistency', human: 'Varies by mood, workload', agent: 'Same quality every time' },
                    { label: 'Scalability', human: 'Hire more people', agent: 'Add more platforms, same agent' },
                    { label: 'Sick days', human: 'Yes', agent: 'Never' },
                    { label: 'Your control', human: 'Trust & manage', agent: 'Approve every post via Telegram' },
                  ].map((row, i) => (
                    <tr key={row.label} className={i < 6 ? 'border-b border-neutral-100 dark:border-neutral-800/50' : ''}>
                      <td className="p-4 md:p-6 font-medium text-sm text-neutral-900 dark:text-white">{row.label}</td>
                      <td className="p-4 md:p-6 text-sm text-neutral-600 dark:text-neutral-400">{row.human}</td>
                      <td className="p-4 md:p-6 text-sm text-forge-600 dark:text-forge-400 font-medium">{row.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center mt-8 font-display font-semibold text-lg text-neutral-900 dark:text-white">
            An AI agent pays for itself in the first month vs hiring.
          </p>
        </div>
      </section>

      {/* Running Costs */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">RUNNING COSTS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
            What It Costs to Run
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-12">
            After setup, the agent runs on minimal infrastructure. Smart model routing keeps API costs low by assigning the right model to each task.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xs dark:shadow-none">
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-4">Infrastructure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">VPS (Ubuntu)</span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">$7-20/mo</span>
                  </div>
                  <div className="h-px bg-neutral-100 dark:bg-neutral-800/50" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">AI model API</span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">Pay-per-use</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xs dark:shadow-none">
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-4">Smart Model Routing</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Not every task needs a premium model. The agent automatically picks the best fit:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300"><span className="font-medium">Simple tasks</span> (short replies, greetings) — fast open-source models like DeepSeek, Kimi K2.5, MiniMax</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300"><span className="font-medium">Complex tasks</span> (research synthesis, long-form content) — Claude, GPT-4o for maximum quality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300"><span className="font-medium">Result</span> — significant cost savings without sacrificing quality where it matters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Claude', 'GPT-4o', 'DeepSeek', 'Kimi K2.5', 'MiniMax', 'OpenRouter'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">PROCESS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            How We Work Together
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery Call', desc: 'Discuss goals, target platforms, agent behavior, content strategy, and posting frequency' },
              { step: '02', title: 'Infrastructure', desc: 'VPS provisioning, security hardening, agent deployment, Telegram bot setup, credential vault' },
              { step: '03', title: 'Configure & Test', desc: 'Set up persona and behavior rules, API integrations, scheduled tasks, end-to-end testing' },
              { step: '04', title: 'Launch', desc: 'Go live with monitoring, deliver full documentation and operational playbook, post-launch support' },
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

      {/* Tailored to You */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-xs dark:shadow-none">
            <div className="relative z-10">
              <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">TAILORED TO YOU</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
                Every Business Is Different
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
                Scope and pricing depend on your specific needs. Key factors that shape the project:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  'Number of social platforms',
                  'Custom skill development',
                  'API integrations needed',
                  'Knowledge base scope',
                  'Monitoring & automation complexity',
                  'Ongoing maintenance needs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forge-600 dark:bg-forge-500 shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:devacc8@pm.me"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
              >
                Book a Discovery Call
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
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
                q: 'Who owns the agent and infrastructure?',
                a: 'You do, 100%. The agent runs on your VPS, credentials are in your encrypted vault, code is in your Git repo. No vendor lock-in, no monthly fees to me.',
              },
              {
                q: 'How much does it cost to run after setup?',
                a: 'A basic VPS is $7-20/month. AI model API costs depend on usage — typically $20-50/month for moderate activity. Smart model routing keeps this low by using cheaper models for simple tasks.',
              },
              {
                q: 'Can I change the agent\'s behavior myself?',
                a: 'Yes. The agent\'s persona, rules, and behavior are defined in a configuration file with clear documentation. You can adjust tone, add rules, or change scheduling without any code changes.',
              },
              {
                q: 'What if something goes wrong?',
                a: 'The agent runs as a systemd service with auto-restart. If it crashes, it comes back up automatically. Telegram alerts you of any issues. Plus, nothing goes public without your approval.',
              },
              {
                q: 'What social platforms does it support?',
                a: 'Currently via official APIs: Twitter/X, Email. Additional platforms can be integrated as custom work. We discuss specifics on the discovery call.',
              },
            ].map((item) => (
              <details key={item.q} className="group/faq bg-white dark:bg-linear-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl shadow-xs dark:shadow-none transition-all duration-300">
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
            Ready to Automate?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg mx-auto">
            Tell us about your business and social media goals. We will get back to you within 24 hours with a plan
          </p>
          <a
            href="mailto:devacc8@pm.me"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all text-lg"
          >
            Get Your AI Agent
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-neutral-900 dark:text-white">Vega<span className="text-forge-500">Forge</span></span>
            <span className="text-neutral-400 dark:text-neutral-600 text-sm">&copy; 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/vvegalex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X (Twitter)"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/devacc8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
