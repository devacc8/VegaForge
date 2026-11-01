import type { PostMeta } from '@/lib/blog'

// Image-first "More from the forge" grid at the foot of an article. Each card leads
// with the hero image (the thing that actually earns a click), then category,
// reading time, and title. Three across on desktop, stacking on mobile.
export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null

  return (
    <section aria-labelledby="related-heading" className="mt-16">
      <h2
        id="related-heading"
        className="mb-6 font-mono text-[10px] uppercase tracking-[.06em] text-forge-500"
      >
        More from the forge
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
            aria-label={`Read: ${post.title}`}
          >
            <article className="relative flex h-full flex-col overflow-hidden border border-[var(--border-color)] bg-white transition-colors hover:border-forge-500">
              {/* Hero image — the click magnet */}
              <div className="relative aspect-video overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-forge-500/10 to-forge-600/5 dark:from-forge-600/15 dark:to-forge-500/5" />
                )}
                {/* Subtle bottom fade so light heroes stay legible under the border */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/20 to-transparent opacity-0 dark:opacity-100" />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[.06em] text-forge-500">
                    {post.category}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">/</span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-500">
                    {post.readingTime} min read
                  </span>
                </div>

                <h3 className="font-display text-base font-medium leading-snug tracking-[-.02em] text-[var(--text-primary)] transition-colors group-hover:text-forge-500 line-clamp-3">
                  {post.title}
                </h3>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}
