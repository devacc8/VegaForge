export default function TestDesignsPage() {
  const items = [
    {
      title: 'SEO Optimization',
      desc: 'Keyword research, meta descriptions, heading structure, and internal linking. Your content ranks, not just exists.',
    },
    {
      title: 'Fact-Checking',
      desc: 'Every claim verified against primary sources. Contract addresses, TVL numbers, dates, protocol mechanics. No hallucinations.',
    },
    {
      title: 'Voice Matching',
      desc: 'We study your existing content, tone, and audience. The article sounds like your team wrote it.',
    },
    {
      title: '48h Turnaround',
      desc: 'From brief to final draft in two business days. Need it faster? Priority delivery available on monthly plans.',
    },
    {
      title: 'One Free Revision',
      desc: 'Not happy with the direction? One round of revisions included at no extra cost. Our revision rate is under 15%.',
    },
    {
      title: 'Ready to Publish',
      desc: 'Delivered in Markdown or Google Docs with suggested hero image, meta tags, and social snippets for promotion.',
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto space-y-24">

        <h1 className="font-display font-bold text-3xl">What You Get — Design Variants</h1>

        {/* Variant 1: Horizontal Scroll */}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">VARIANT 1 — HORIZONTAL SCROLL</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Every Article Includes</h3>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-forge-600/20 scrollbar-track-transparent">
            {items.map((item) => (
              <div key={item.title} className="snap-start shrink-0 w-72 bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-forge-500/50 dark:hover:border-forge-600/50 transition-all">
                <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 2: Checkmarks in 2 Columns */}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">VARIANT 2 — CHECKMARKS 2 COLUMNS</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Every Article Includes</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-forge-600/10 dark:bg-forge-600/20 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-forge-600 dark:text-forge-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 3: Bento Grid */}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">VARIANT 3 — BENTO GRID</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Every Article Includes</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {/* First two: large cards spanning 2 cols */}
            {items.slice(0, 2).map((item) => (
              <div key={item.title} className="md:col-span-2 bg-forge-600/5 dark:bg-forge-600/10 border border-forge-500/30 dark:border-forge-600/30 rounded-2xl p-8">
                <h4 className="font-display font-semibold text-xl mb-2 text-forge-600 dark:text-forge-500">{item.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            {/* Remaining four: small cards */}
            {items.slice(2).map((item) => (
              <div key={item.title} className="bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5">
                <h4 className="font-display font-semibold text-base mb-1.5">{item.title}</h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 4: Numbered Pills */}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">VARIANT 4 — NUMBERED PILLS</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Every Article Includes</h3>
          <div className="space-y-3 max-w-3xl">
            {items.map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-4 hover:border-forge-500/50 dark:hover:border-forge-600/50 transition-all">
                <span className="font-mono text-sm font-bold text-forge-600/40 dark:text-forge-500/40 mt-0.5">0{i + 1}</span>
                <div className="flex-1">
                  <span className="font-display font-semibold">{item.title}</span>
                  <span className="text-neutral-500 mx-2">—</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 5: Feature Strip with Icons */}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">VARIANT 5 — ICON STRIP</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Every Article Includes</h3>
          <div className="bg-forge-600/5 dark:bg-forge-600/10 border border-forge-500/20 dark:border-forge-600/20 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {items.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-forge-600/10 dark:bg-forge-600/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-forge-600 dark:text-forge-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </main>
  )
}
