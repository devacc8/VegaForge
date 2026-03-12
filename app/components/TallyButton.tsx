'use client'

const TALLY_CONFIG = {
  formId: 'RG4QQ9',
  layout: 'modal',
  width: '500',
  hideTitle: '1',
  emojiText: '👋',
  emojiAnimation: 'wave',
} as const

export function TallyButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      data-tally-open={TALLY_CONFIG.formId}
      data-tally-layout={TALLY_CONFIG.layout}
      data-tally-width={TALLY_CONFIG.width}
      data-tally-hide-title={TALLY_CONFIG.hideTitle}
      data-tally-emoji-text={TALLY_CONFIG.emojiText}
      data-tally-emoji-animation={TALLY_CONFIG.emojiAnimation}
      className={className}
    >
      {children}
    </button>
  )
}
