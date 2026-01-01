import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VegaForge — Product-Minded Developer',
  description: 'Fullstack developer with product thinking. Building products, not just writing code. Solidity, React, Next.js.',
  keywords: ['developer', 'solidity', 'react', 'next.js', 'web3', 'blockchain', 'product'],
  authors: [{ name: 'Alex Vega' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'VegaForge — Product-Minded Developer',
    description: 'Fullstack developer with product thinking. Building products, not just writing code.',
    url: 'https://vegaforge.dev',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VegaForge — Product-Minded Developer',
    description: 'Fullstack developer with product thinking. Building products, not just writing code.',
    creator: '@vvegalex',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
