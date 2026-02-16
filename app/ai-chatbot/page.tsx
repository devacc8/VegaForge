import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'AI Chatbot for Your Business | VegaForge',
  description: 'AI chatbot trained on your business data using RAG. Smart model routing cuts API costs 40-60%. Deploy across Telegram, WhatsApp, Website, Email, Instagram. You own everything.',
  alternates: {
    canonical: '/ai-chatbot',
  },
  openGraph: {
    title: 'AI Chatbot for Your Business | VegaForge',
    description: 'AI chatbot trained on your business data using RAG. Every answer grounded in your documents.',
    url: 'https://vegaforge.dev/ai-chatbot',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge AI Chatbot Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot for Your Business | VegaForge',
    description: 'AI chatbot trained on your business data using RAG. Smart model routing cuts API costs 40-60%.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

export default function AIChatbotPage() {
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
      <section id="main-content" className="min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-forge-600 dark:hover:text-forge-500 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>

          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">AI CHATBOT SERVICE</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 dark:text-white mb-6">
            AI Chatbot for
            <br />
            <span className="text-forge-600 dark:text-forge-500">Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
            Trained on your documents, not generic internet data. Every answer is grounded in your business knowledge. Smart model routing cuts API costs 40-60%
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:devacc8@pm.me"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
            >
              Get in Touch
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

      {/* How It Works */}
      <section id="how-it-works" className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">ARCHITECTURE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            How It Works
          </h2>

          {/* Architecture flow */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Input */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-forge-100 dark:bg-forge-600/10 border border-forge-200 dark:border-forge-600/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-forge-600 dark:text-forge-500">01</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">Your Data</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Documents, FAQs, product catalogs, website content. Processed into vector embeddings with hybrid search
                </p>
              </div>
            </div>

            {/* Step 2: AI */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-forge-100 dark:bg-forge-600/10 border border-forge-200 dark:border-forge-600/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-forge-600 dark:text-forge-500">02</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">Smart AI</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Customer asks a question. AI retrieves relevant docs from your knowledge base and generates an accurate answer
                </p>
              </div>
            </div>

            {/* Step 3: Channels */}
            <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-forge-100 dark:bg-forge-600/10 border border-forge-200 dark:border-forge-600/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-forge-600 dark:text-forge-500">03</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2">Every Channel</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Same bot, same knowledge across Telegram, WhatsApp, Website widget, Email, Instagram
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['RAG', 'Vector Search', 'BM25', 'Smart Routing', 'Multi-Model'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">FEATURES</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'RAG with Hybrid Search',
                desc: 'Semantic vector search combined with keyword matching (BM25). Your bot finds the most relevant information even when questions are phrased differently',
              },
              {
                title: 'Smart Model Routing',
                desc: 'Simple questions go to fast, cheap models. Complex ones go to powerful models. Reduces your API costs by 40-60% without sacrificing quality',
              },
              {
                title: 'Multi-Channel Deployment',
                desc: 'One bot, one knowledge base — available on Telegram, WhatsApp, your website, email, and Instagram. Consistent answers everywhere',
              },
              {
                title: 'No Vendor Lock-in',
                desc: 'You own everything. Full source code, deployed on your infrastructure. No monthly platform fees. Only standard API costs for the AI models you use',
              },
              {
                title: 'No Recurring Embedding Costs',
                desc: 'Document processing happens locally. Add new content to your knowledge base anytime — no API calls needed for embedding updates',
              },
              {
                title: 'Human Handoff',
                desc: 'When the bot cannot answer confidently, it acknowledges the limit and escalates to a human agent or collects contact info for follow-up',
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

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">PROCESS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            How We Work Together
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Share your documents, define bot persona and tone, choose messaging platforms' },
              { step: '02', title: 'Build', desc: 'Process documents into vector database, configure AI models, set up RAG pipeline and channels' },
              { step: '03', title: 'Test & Refine', desc: 'Test with real questions, tune response quality, adjust persona, handle edge cases' },
              { step: '04', title: 'Launch', desc: 'Deploy to production, deliver documentation and knowledge base update guide' },
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
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-xs dark:shadow-none">
            <div className="relative z-10">
              <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">TAILORED TO YOU</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
                Every Project Is Different
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
                Scope and pricing depend on your specific needs. Key factors that shape the project:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  'Number of messaging channels',
                  'Volume and complexity of documents',
                  'Custom API integrations',
                  'Analytics dashboard requirements',
                  'Human handoff workflows',
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
                Let&apos;s Discuss Your Project
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">FAQ</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How does the bot learn about my business?',
                a: 'You share your documents — PDFs, FAQs, product info, website content. I process them into a vector database with semantic search. The bot retrieves relevant information before answering, so every response is based on your actual data, not generic AI knowledge.',
              },
              {
                q: 'What AI models do you use?',
                a: 'Claude, GPT, and other models via OpenRouter. Smart routing picks the best model for each question — fast and cheap for simple queries, powerful for complex ones. This typically reduces API costs by 40-60%.',
              },
              {
                q: 'Can I update the knowledge base myself?',
                a: 'Yes. I provide a simple process to add new documents anytime. The bot learns from new content immediately — no code changes needed.',
              },
              {
                q: 'What if the bot cannot answer a question?',
                a: 'The bot acknowledges when it does not know something rather than making things up. It can escalate to a human agent or collect the customer\'s contact info for follow-up.',
              },
              {
                q: 'Do I own the bot and infrastructure?',
                a: 'Yes, 100%. Everything is deployed on your infrastructure. You get full source code, documentation, and independence. No monthly platform fees — only standard API costs for the AI models you use.',
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
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg mx-auto">
            Tell me about your business and what you need. I will get back to you within 24 hours with a plan
          </p>
          <a
            href="mailto:devacc8@pm.me"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all text-lg"
          >
            Get in Touch
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
