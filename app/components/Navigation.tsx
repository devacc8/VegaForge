'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname === '/ai-chatbot' || pathname === '/ai-agent'
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const workHref = isHome ? '#work' : '/#work'
  const whyMeHref = isHome ? '#why-me' : '/#why-me'

  // Close everything on route change
  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [mobileOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
          Vega<span className="text-forge-500">Forge</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href={workHref} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
            Work
          </a>
          <a href={whyMeHref} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline">
            Why Me
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-sm transition-colors link-underline inline-flex items-center gap-1 cursor-pointer ${isServicePage ? 'text-forge-600 dark:text-forge-500' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'}`}
            >
              Services
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg dark:shadow-neutral-950/50 overflow-hidden">
                <a
                  href="/ai-chatbot"
                  className={`block px-4 py-3 text-sm transition-colors ${pathname === '/ai-chatbot' ? 'text-forge-600 dark:text-forge-500 bg-forge-500/5' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white'}`}
                >
                  AI Chatbot
                </a>
                <a
                  href="/ai-agent"
                  className={`block px-4 py-3 text-sm transition-colors ${pathname === '/ai-agent' ? 'text-forge-600 dark:text-forge-500 bg-forge-500/5' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white'}`}
                >
                  AI Agent
                </a>
              </div>
            )}
          </div>

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

        {/* Mobile: theme switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-white dark:bg-[#0a0a0a] z-50">
          <div className="px-6 py-8 space-y-2">
            {/* Services section */}
            <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-3 px-4">SERVICES</p>
            <a
              href="/ai-chatbot"
              className={`block px-4 py-3 rounded-xl text-base transition-colors ${pathname === '/ai-chatbot' ? 'text-forge-600 dark:text-forge-500 bg-forge-500/10' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'}`}
            >
              AI Chatbot
            </a>
            <a
              href="/ai-agent"
              className={`block px-4 py-3 rounded-xl text-base transition-colors ${pathname === '/ai-agent' ? 'text-forge-600 dark:text-forge-500 bg-forge-500/10' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'}`}
            >
              AI Agent
            </a>

            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-4" />

            {/* Contact */}
            <a
              href="https://x.com/vvegalex"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-xl text-base text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
