'use client'

import { useEffect } from 'react'
import { TALLY_FORM_ID } from './TallyButton'

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void
    }
  }
}

type TallyMessage = {
  type?: string
  payload?: {
    formId?: string
    submissionId?: string
    responseId?: string
  }
  formId?: string
  submissionId?: string
  responseId?: string
}

export function TallyEvents() {
  useEffect(() => {
    const seen = new Set<string>()

    const onMessage = (event: MessageEvent<TallyMessage>) => {
      if (!/^https:\/\/([a-z0-9-]+\.)?tally\.so$/.test(event.origin)) return
      if (event.data?.type !== 'Tally.FormSubmitted') return

      const payload = event.data.payload ?? event.data
      const formId = payload.formId
      if (formId && formId !== TALLY_FORM_ID) return

      const submissionId = payload.submissionId ?? payload.responseId
      if (submissionId && seen.has(submissionId)) return
      if (submissionId) seen.add(submissionId)

      window.umami?.track('lead_submit', {
        form: 'project',
        source_page: window.location.pathname,
      })
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}
