import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      <Navigation />

      <section className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-4">404</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all"
          >
            Back to Home
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
