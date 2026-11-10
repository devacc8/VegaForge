'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { TallyButton } from './TallyButton'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/ai-trading', label: 'AI Trading' },
  { href: '/prediction-markets', label: 'Prediction Markets' },
  { href: '/blog', label: 'Blog' },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--nav-bg)] backdrop-blur-md">
        <div className="mx-auto flex h-[62px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8">
          <a href="/" className="font-display text-xl font-bold tracking-[-0.055em] text-[var(--text-primary)]">
            Vega<span className="text-forge-500">Forge</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
                    active ? 'text-forge-600' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="/#contact"
              className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <TallyButton className="hidden bg-forge-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-forge-500 md:inline-flex">
              Start a project
            </TallyButton>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center border border-[var(--border-color)] text-[var(--text-secondary)] md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[62px] z-40 border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[var(--border-color-subtle)] py-3 font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)]"
              >
                {link.label}
              </a>
            ))}
            <a href="/#contact" className="border-b border-[var(--border-color-subtle)] py-3 font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)]">
              Contact
            </a>
            <TallyButton className="mt-4 bg-forge-600 px-4 py-3 text-center text-sm font-medium text-white">
              Start a project
            </TallyButton>
          </nav>
        </div>
      )}
    </>
  )
}
