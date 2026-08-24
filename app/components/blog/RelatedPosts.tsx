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
        className="font-mono text-xs tracking-widest text-forge-600 dark:text-forge-500 uppercase mb-6"
      >
        More from the forge
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
            aria-label={`Read: ${post.title}`}
          >
            <article className="relative h-full flex flex-col bg-white dark:bg-linear-to-br dark:from-neutral-900/80 dark:to-neutral-950/80 border border-neutral-200 dark:border-neutral-800 hover:border-forge-500/50 dark:hover:border-forge-600/50 rounded-xl overflow-hidden transition-all duration-500 shadow-xs dark:shadow-none hover:shadow-md">
              {/* Hero image — the click magnet */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
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
                  <span className="font-mono text-[10px] tracking-widest text-forge-600 dark:text-forge-500 uppercase">
                    {post.category}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">/</span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-500">
                    {post.readingTime} min read
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white leading-snug group-hover:text-forge-600 dark:group-hover:text-forge-500 transition-colors line-clamp-3">
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
