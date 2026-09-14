import type { Project } from '../../lib/projects'

/** The Chrome logo, used on the primary store button. */
const CHROME_ICON =
  'M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.952 6.848a12.014 12.014 0 0 0 9.229-9.006zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z'

/**
 * The wide project card used on the home page. It reads entirely from the
 * shared project data, so the home page and /work can never disagree.
 */
export function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="mt-8 group relative bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-8 md:p-12 transition-all duration-500 shadow-xs dark:shadow-none">
      <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-xs text-forge-600 dark:text-forge-500 mb-2">{project.label}</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) =>
              link.chrome ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forge-600 hover:bg-forge-500 text-white rounded-full text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-forge-600/50 hover:border-forge-500 dark:hover:border-forge-500 rounded-full text-sm text-neutral-700 dark:text-forge-400 hover:text-forge-600 dark:hover:text-forge-300 hover:bg-forge-500/5 dark:hover:bg-forge-500/10 transition-all"
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ),
            )}
          </div>
        </div>

        <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed ${project.note ? 'mb-4' : 'mb-8'} max-w-2xl`}>
          {project.description}
        </p>
        {project.note ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-500 italic mb-8 max-w-2xl">{project.note}</p>
        ) : null}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y border-neutral-200 dark:border-neutral-800">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p
                className={`font-display font-bold text-2xl ${
                  stat.accent ? 'text-forge-600 dark:text-forge-500' : 'text-neutral-900 dark:text-white'
                }`}
              >
                {stat.value}
              </p>
              <p className="text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
