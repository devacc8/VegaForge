import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { GitHubIcon, XIcon } from '../components/Icons'
import { TallyButton } from '../components/TallyButton'
import {
  projects,
  PROJECT_GROUP_TITLES,
  PROJECT_GROUP_NOTES,
  type Project,
  type ProjectGroup,
  type ProjectLink,
} from '../../lib/projects'

const GROUP_ORDER: ProjectGroup[] = ['products', 'extensions', 'open-source']

const CHROME_ICON =
  'M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.952 6.848a12.014 12.014 0 0 0 9.229-9.006zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z'

export const metadata: Metadata = {
  title: 'Work | VegaForge',
  description:
    'Products, browser extensions and open source built end to end: BasePaint Market, Missing Days, SkillTax, AvaxLens, Curfew, CoinPeek and the DeepSeek Harness plugins.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | VegaForge',
    description: 'Products, browser extensions and open source, built end to end and shipped.',
    url: 'https://vegaforge.dev/work',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VegaForge work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | VegaForge',
    description: 'Products, browser extensions and open source, built end to end and shipped.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

function LinkIcon({ link }: { link: ProjectLink }) {
  if (link.chrome) {
    return (
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={CHROME_ICON} />
      </svg>
    )
  }
  if (link.href.includes('github.com')) return <GitHubIcon className="h-3 w-3" />
  if (link.href.includes('x.com')) return <XIcon className="h-3 w-3" />
  if (link.href.includes('npmjs.com')) {
    return (
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2.8 21 8v8l-9 5.2L3 16V8z" />
        <path d="M7.5 15V9.5h2.2l2.3 3 2.3-3h2.2V15h-2v-3.2L12 14.6l-2.5-2.8V15z" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.5 3.4 5.3 3.4 8.5s-1.2 6-3.4 8.5c-2.2-2.5-3.4-5.3-3.4-8.5S9.8 6 12 3.5Z" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border border-[var(--border-color)] bg-white p-6 transition-colors hover:border-forge-500 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">{project.label}</p>
        <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-forge-500" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-2xl font-medium tracking-[-.04em]">{project.title}</h3>
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">{project.description}</p>
      {project.note ? <p className="mt-3 text-[11px] leading-relaxed text-[var(--text-muted)]">{project.note}</p> : null}

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--border-color)] pt-5">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <p className={`font-display text-lg font-medium ${stat.accent ? 'text-forge-500' : 'text-[var(--text-primary)]'}`}>{stat.value}</p>
            <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[.04em] text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[var(--text-muted)]">{tech}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border-color)] pt-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[var(--border-color)] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.04em] text-[var(--text-secondary)] transition-colors hover:border-forge-500 hover:text-forge-500"
          >
            <LinkIcon link={link} />
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-500">Work / Product systems</p>
          <h1 className="mt-4 max-w-[900px] font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[.9] tracking-[-.06em]">Shipped, not promised.</h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-[var(--text-secondary)]">Products, browser extensions and open source. Each one built end to end: the contract or manifest, the backend, the interface, the tests and the release.</p>
        </div>
      </section>

      {GROUP_ORDER.map((group) => {
        const groupProjects = projects.filter((project) => project.group === group)
        if (groupProjects.length === 0) return null
        return (
          <section key={group} className="border-b border-[var(--border-color)]">
            <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-8 md:py-20">
              <div className="mb-8 flex flex-col gap-2 border-t border-[var(--text-primary)] pt-4 md:flex-row md:items-baseline md:justify-between">
                <h2 className="font-display text-[clamp(2rem,3.5vw,3.2rem)] font-medium tracking-[-.05em]">{PROJECT_GROUP_TITLES[group]}</h2>
                <p className="font-mono text-[9px] uppercase tracking-[.06em] text-[var(--text-muted)]">{PROJECT_GROUP_NOTES[group]}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {groupProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-[var(--text-primary)] text-[var(--bg-primary)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-8 px-5 py-14 md:flex-row md:items-end md:px-8 md:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.08em] text-forge-300">Start a conversation</p>
            <h2 className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4.2vw,4rem)] font-medium leading-[.94] tracking-[-.05em]">Have a system to build?</h2>
            <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-white/55">Tell us what the business runs on today and where it breaks.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <TallyButton className="bg-forge-500 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-forge-600">Start a project</TallyButton>
            <a href="mailto:alex@vegaforge.dev" className="border border-white/30 px-5 py-3 text-xs font-medium transition-colors hover:border-white">alex@vegaforge.dev</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
