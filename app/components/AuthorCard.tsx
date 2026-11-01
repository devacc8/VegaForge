import { GitHubIcon, XIcon } from './Icons'

export function AuthorCard() {
  return (
    <aside className="mt-12 border-y border-[var(--border-color)] bg-white px-5 py-6 md:px-7">
      <div className="grid gap-5 md:grid-cols-[56px_1fr_auto] md:items-start">
        <img src="https://avatars.githubusercontent.com/u/222370422?v=4" alt="Alex Vega" className="h-14 w-14 border border-forge-500 object-cover" loading="lazy" />
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">Author</p>
          <h2 className="mt-1 font-display text-2xl font-medium tracking-[-.04em]">Alex Vega</h2>
          <p className="font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">CTO, VegaForge</p>
          <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-[var(--text-secondary)]">
            Alex writes about technology, AI and everything interesting in tech. He is CTO at VegaForge, where he leads product and engineering from the first process map to production.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          <a href="mailto:alex@vegaforge.dev" className="border border-[var(--border-color)] px-3 py-2 font-mono text-[9px] uppercase tracking-[.04em] text-[var(--text-secondary)] transition-colors hover:border-forge-500 hover:text-forge-500">Email</a>
          <a href="https://x.com/vvegalex" target="_blank" rel="noopener noreferrer" aria-label="Alex Vega on X" className="flex h-9 w-9 items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] transition-colors hover:border-forge-500 hover:text-forge-500"><XIcon className="h-3.5 w-3.5" /></a>
          <a href="https://github.com/devacc8" target="_blank" rel="noopener noreferrer" aria-label="Alex Vega on GitHub" className="flex h-9 w-9 items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] transition-colors hover:border-forge-500 hover:text-forge-500"><GitHubIcon className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </aside>
  )
}
