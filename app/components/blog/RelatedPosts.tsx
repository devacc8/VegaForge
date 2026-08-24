import type { PostMeta } from '@/lib/blog'

// Compact "Related reading" grid rendered at the foot of an article. Cards are
// tighter than the main PostCard so three sit in one row on desktop and stack
// cleanly on mobile.
export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null

  return (
    <section aria-labelledby="related-heading" className="mt-14">
      <h2
        id="related-heading"
        className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 uppercase mb-6"
      >
        Related reading
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
            aria-label={`Read: ${post.title}`}
          >
            <article className="relative h-full bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-xl p-5 transition-all duration-500 shadow-xs dark:shadow-none">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-widest text-forge-600 dark:text-forge-500 uppercase">
                  {post.category}
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">/</span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-500">
                  {post.readingTime} min read
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-2 leading-snug group-hover:text-forge-600 dark:group-hover:text-forge-500 transition-colors line-clamp-3">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                {post.description}
              </p>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}
