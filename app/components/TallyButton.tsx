'use client'

export const TALLY_FORM_ID = 'RG4QQ9'

const TALLY_CONFIG = {
  formId: TALLY_FORM_ID,
  layout: 'modal',
  width: '500',
  hideTitle: '1',
  emojiText: '👋',
  emojiAnimation: 'wave',
} as const

export function TallyButton({
  children,
  className,
  placement = 'page',
  cta = 'start_project',
}: {
  children: React.ReactNode
  className?: string
  placement?: string
  cta?: string
}) {
  return (
    <button
      data-tally-open={TALLY_CONFIG.formId}
      data-tally-layout={TALLY_CONFIG.layout}
      data-tally-width={TALLY_CONFIG.width}
      data-tally-hide-title={TALLY_CONFIG.hideTitle}
      data-tally-emoji-text={TALLY_CONFIG.emojiText}
      data-tally-emoji-animation={TALLY_CONFIG.emojiAnimation}
      data-umami-event="cta_click"
      data-umami-event-cta={cta}
      data-umami-event-placement={placement}
      className={`cursor-pointer ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
