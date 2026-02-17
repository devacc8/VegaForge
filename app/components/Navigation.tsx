'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname === '/ai-chatbot' || pathname === '/ai-agent'
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const workHref = isHome ? '#work' : '/#work'
  const whyMeHref = isHome ? '#why-me' : '/#why-me'

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false)
  }, [pathname])

  // Close dropdown on click outside
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

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-sm transition-colors link-underline inline-flex items-center gap-1 ${isServicePage ? 'text-forge-600 dark:text-forge-500' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'}`}
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
      </div>
    </nav>
  )
}
