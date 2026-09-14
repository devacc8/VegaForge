import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TallyButton } from '../components/TallyButton'
import {
  projects,
  PROJECT_GROUP_TITLES,
  PROJECT_GROUP_NOTES,
  timeline,
  capabilities,
  type Project,
  type ProjectGroup,
} from '../../lib/projects'

const CHROME_ICON =
  'M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.952 6.848a12.014 12.014 0 0 0 9.229-9.006zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z'

const GROUP_ORDER: ProjectGroup[] = ['products', 'extensions', 'open-source']

export const metadata: Metadata = {
  title: 'Work: products, extensions and open source | VegaForge',
  description:
    'Everything shipped end to end: BasePaint Market, Missing Days, SkillTax, AvaxLens, Curfew, CoinPeek, and the DeepSeek Harness plugins. Smart contracts, fullstack apps and browser extensions.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work: products, extensions and open source | VegaForge',
    description: 'Products, browser extensions and open source, built end to end and shipped.',
    url: 'https://vegaforge.dev/work',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work: products, extensions and open source | VegaForge',
    description: 'Products, browser extensions and open source, built end to end and shipped.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 md:p-7 transition-all duration-300 hover:border-forge-500/50 dark:hover:border-forge-600/50 shadow-xs dark:shadow-none">
      <p className="font-mono text-[11px] tracking-widest text-forge-600 dark:text-forge-500 mb-3">{project.label}</p>
      <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-3">{project.title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">{project.description}</p>
      {project.note ? (
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-500 italic leading-relaxed">{project.note}</p>
      ) : null}

      {project.stats.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-neutral-200 dark:border-neutral-800 pt-5">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p
                className={`font-display font-bold text-lg ${
                  stat.accent ? 'text-forge-600 dark:text-forge-500' : 'text-neutral-900 dark:text-white'
                }`}
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-neutral-500 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-[11px] text-neutral-600 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.links.map((link) =>
          link.chrome ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-forge-600 hover:bg-forge-500 text-white rounded-full text-xs font-medium transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d={CHROME_ICON} />
              </svg>
              {link.label}
            </a>
          ) : (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 dark:hover:border-forge-500 rounded-full text-xs text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
            >
              {link.label}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ),
        )}
      </div>
    </article>
  )
}

export default function WorkPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forge-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="fixed inset-0 bg-linear-to-b from-neutral-100 via-neutral-50 to-white dark:from-[#0a0a0a] dark:via-[#0d0908] dark:to-[#050505] -z-10 transition-colors duration-300" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forge-500/5 dark:bg-forge-600/5 rounded-full blur-[120px] -z-10" />

      <Navigation />

      <section id="main-content" className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 mb-6">WORK</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 dark:text-white mb-8 max-w-3xl leading-[1.15]">
            Everything I have built and shipped
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Six products and two extensions, plus the open source I keep alive. Each one built end to end:
            the contract or the manifest, the backend, the interface, the tests, and the release.
          </p>
        </div>
      </section>

      {GROUP_ORDER.map((group) => {
        const groupProjects = projects.filter((project) => project.group === group)
        if (groupProjects.length === 0) return null
        return (
          <section key={group} className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white">
                  {PROJECT_GROUP_TITLES[group]}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">{PROJECT_GROUP_NOTES[group]}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {groupProjects.map((project) => (
                  <CompactCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white mb-3">
            How it got here
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-10">
            Six years, from a hackathon prize to extensions people install.
          </p>
          <ol className="relative border-l border-neutral-200 dark:border-neutral-800 ml-2">
            {timeline.map((entry) => (
              <li key={entry.title} className="mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-forge-500 dark:bg-forge-600 border-2 border-white dark:border-neutral-950" />
                <p className="font-mono text-xs text-forge-600 dark:text-forge-500 mb-1">{entry.year}</p>
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-1">
                  {entry.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                  {entry.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white mb-3">
            What I do
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-10">
            The three things clients and teams come to me for.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <a
                key={capability.title}
                href={capability.href}
                className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 transition-all duration-300 hover:border-forge-500/50 dark:hover:border-forge-600/50"
              >
                <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                  {capability.detail}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-forge-600 dark:text-forge-500">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 md:p-8">
            <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-4">Open source</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
              Two DeepSeek Harness plugins on npm, a hardened fork of a community file explorer with three
              patches sent upstream, and pull requests merged into Talent Protocol and the Base documentation.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/devacc8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 rounded-full text-xs text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/dsh-billing-badge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 rounded-full text-xs text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 transition-all"
              >
                npm
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 md:p-8">
            <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-4">Writing</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
              Twenty articles about building products with AI, the harness around the model, and what a
              product-minded developer actually does all day. Several are mirrored to Habr in Russian.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 rounded-full text-xs text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 transition-all"
            >
              Read the blog
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white mb-4">
            Have a product in mind?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto mb-8">
            Tell me what you want to exist and I will tell you what it takes. The first conversation costs
            nothing and usually saves a sprint.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <TallyButton className="inline-flex items-center gap-2 px-6 py-3 bg-forge-600 hover:bg-forge-500 text-white font-medium rounded-full transition-all cursor-pointer">
              Get in Touch
            </TallyButton>
            <a
              href="https://github.com/devacc8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium rounded-full transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
