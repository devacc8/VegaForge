import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VegaForge: Product-Minded Fullstack Developer | Web3, EVM & Solana',
  description: 'Fullstack developer with product thinking. 8+ years in development, 5+ in Web3 across EVM and Solana. Building products end-to-end: smart contracts, backend, frontend.',
  keywords: ['developer', 'solidity', 'rust', 'solana', 'anchor', 'react', 'next.js', 'web3', 'blockchain', 'product', 'fullstack', 'smart contracts'],
  authors: [{ name: 'Alex Vega' }],
  metadataBase: new URL('https://vegaforge.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'VegaForge: Product-Minded Fullstack Developer | Web3, EVM & Solana',
    description: 'Fullstack developer with product thinking. 8+ years in development, 5+ in Web3 across EVM and Solana. Building products end-to-end.',
    url: 'https://vegaforge.dev',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VegaForge, Product-Minded Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VegaForge: Product-Minded Fullstack Developer',
    description: 'Fullstack developer with product thinking. 8+ years in development, 5+ in Web3 across EVM and Solana.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}

const themeScript = `
  (function() {
    const stored = localStorage.getItem('vegaforge-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Default to dark if no preference stored
    if (stored === 'light' || (stored === 'system' && !prefersDark)) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  })();
`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://vegaforge.dev/#website',
      url: 'https://vegaforge.dev',
      name: 'VegaForge',
      description: 'Product-minded fullstack developer portfolio',
      publisher: {
        '@id': 'https://vegaforge.dev/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://vegaforge.dev/#person',
      name: 'Alex Vega',
      url: 'https://vegaforge.dev',
      jobTitle: 'Fullstack Developer',
      description: 'Product-minded fullstack developer with 8+ years in development, 5+ in Web3 across EVM and Solana.',
      sameAs: [
        'https://x.com/vvegalex',
        'https://github.com/devacc8',
      ],
      knowsAbout: ['Solidity', 'Rust', 'Solana', 'Anchor', 'React', 'Next.js', 'Web3', 'Blockchain', 'Smart Contracts', 'DeFi'],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>
        <div className="grain-overlay" />
        {children}
        <script src="https://tally.so/widgets/embed.js" async />
        <script
          src="https://analytics.vegaforge.dev/script.js"
          data-website-id="0ca1af6e-fc0c-4e05-8945-f14bcf4425d7"
          defer
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
