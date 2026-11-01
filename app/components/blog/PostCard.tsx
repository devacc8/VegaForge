import type { PostMeta } from '@/lib/blog'

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <a href={`/blog/${post.slug}`} className="group block" aria-label={`Read: ${post.title}`}>
      <article className="flex overflow-hidden border border-[var(--border-color)] bg-white transition-colors hover:border-forge-500">
        {post.image && (
          <div className="hidden w-[180px] shrink-0 border-r border-[var(--border-color)] md:block">
            <img src={post.image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
        <div className="min-w-0 flex-1 p-5 md:p-7">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[.06em]">
            <span className="text-forge-500">{post.category}</span>
            <span className="text-[var(--text-muted)]">/</span>
            <span className="text-[var(--text-muted)]">{post.readingTime} min read</span>
          </div>
          <h2 className="mt-3 font-display text-xl font-medium leading-tight tracking-[-.035em] transition-colors group-hover:text-forge-500 md:text-2xl">{post.title}</h2>
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">{post.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <time dateTime={post.date} className="font-mono text-[9px] text-[var(--text-muted)]">{formattedDate}</time>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="border border-[var(--border-color)] px-2 py-1 font-mono text-[8px] text-[var(--text-muted)]">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </a>
  )
}
