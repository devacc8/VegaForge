'use client'

import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const workHref = isHome ? '#work' : '/#work'
  const whyMeHref = isHome ? '#why-me' : '/#why-me'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
          Vega<span className="text-forge-500">Forge</span>
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <a href={workHref} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
            Work
          </a>
          <a href={whyMeHref} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
            Why Me
          </a>
          <ThemeSwitcher />
          <a
            href="https://x.com/vvegalex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-neutral-300 dark:border-forge-600/50 rounded-full text-neutral-700 dark:text-forge-400 hover:border-forge-500 dark:hover:border-forge-500 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
