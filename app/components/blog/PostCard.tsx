import type { PostMeta } from '@/lib/blog'

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <a href={`/blog/${post.slug}`} className="group block" aria-label={`Read: ${post.title}`}>
      <article className="relative bg-white dark:bg-linear-to-br dark:from-neutral-900/60 dark:to-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-xs dark:shadow-none">
        <div className="absolute inset-0 bg-forge-500/5 dark:bg-forge-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Category + reading time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 uppercase">
              {post.category}
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-xl md:text-2xl text-neutral-900 dark:text-white mb-3 group-hover:text-forge-600 dark:group-hover:text-forge-500 transition-colors">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Date + tags */}
          <div className="flex flex-wrap items-center gap-3">
            <time dateTime={post.date} className="text-xs text-neutral-500 dark:text-neutral-500">
              {formattedDate}
            </time>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-full text-xs text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  )
}
