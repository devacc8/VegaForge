import { GitHubIcon, XIcon } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-baseline gap-3">
          <a href="/" className="font-display text-lg font-bold tracking-[-0.055em] text-[var(--text-primary)]">
            Vega<span className="text-forge-500">Forge</span>
          </a>
          <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
            Custom software as a service
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="mailto:alex@vegaforge.dev"
            className="font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-secondary)] transition-colors hover:text-forge-600"
          >
            alex@vegaforge.dev
          </a>
          <a
            href="https://github.com/devacc8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition-colors hover:text-forge-600"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/vvegalex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-[var(--text-muted)] transition-colors hover:text-forge-600"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
