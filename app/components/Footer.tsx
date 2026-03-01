import { XIcon, GitHubIcon } from './Icons'

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-neutral-900 dark:text-white">
            Vega<span className="text-forge-500">Forge</span>
          </span>
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
            <XIcon />
          </a>
          <a
            href="https://github.com/devacc8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
