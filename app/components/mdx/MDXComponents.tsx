import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-l-2 border-forge-500 bg-forge-500/5 dark:bg-forge-600/5 rounded-r-xl px-5 py-4">
      <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed [&>p]:m-0">
        {children}
      </div>
    </div>
  )
}

export const mdxComponents: MDXComponentsType = {
  Callout,

  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mt-12 mb-6"
      {...props}
    />
  ),

  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white mt-10 mb-4 group"
      {...props}
    />
  ),

  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="font-display font-semibold text-xl md:text-2xl text-neutral-900 dark:text-white mt-8 mb-3"
      {...props}
    />
  ),

  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4
      className="font-display font-semibold text-lg text-neutral-900 dark:text-white mt-6 mb-2"
      {...props}
    />
  ),

  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p
      className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5"
      {...props}
    />
  ),

  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-forge-600 dark:text-forge-500 hover:text-forge-500 dark:hover:text-forge-400 underline underline-offset-2 decoration-forge-500/30 hover:decoration-forge-500 transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),

  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="mb-5 space-y-2 list-disc list-outside pl-5 text-neutral-700 dark:text-neutral-300 leading-relaxed" {...props} />
  ),

  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="mb-5 space-y-2 list-decimal list-outside pl-5 text-neutral-700 dark:text-neutral-300 leading-relaxed" {...props} />
  ),

  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="pl-1" {...props} />
  ),

  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-5 text-neutral-600 dark:text-neutral-400 italic [&>p]:mb-0"
      {...props}
    />
  ),

  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-neutral-900 dark:text-white" {...props} />
  ),

  code: (props: ComponentPropsWithoutRef<'code'>) => {
    // Inline code only — block code is handled by rehype-pretty-code
    const isBlock = typeof props.children === 'string' && props.children.includes('\n')
    if (isBlock) return <code {...props} />
    return (
      <code
        className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-sm font-mono text-forge-700 dark:text-forge-400"
        {...props}
      />
    )
  },

  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-sm" {...props} />
    </div>
  ),

  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-neutral-50 dark:bg-neutral-900/50" {...props} />
  ),

  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="px-4 py-3 text-left font-display font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),

  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td
      className="px-4 py-3 text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800/50"
      {...props}
    />
  ),

  img: (props: ComponentPropsWithoutRef<'img'>) => (
    <figure className="my-8">
      <img
        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800"
        loading="lazy"
        {...props}
      />
      {props.alt && (
        <figcaption className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-500">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),

  hr: () => (
    <hr className="my-10 border-neutral-200 dark:border-neutral-800" />
  ),
}
