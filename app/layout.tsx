import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VegaForge — Product-Minded Fullstack Developer | Web3 & Solidity',
  description: 'Fullstack developer with product thinking. 7+ years in development, 5+ in Solidity and Web3. Building products end-to-end: smart contracts, backend, frontend.',
  keywords: ['developer', 'solidity', 'react', 'next.js', 'web3', 'blockchain', 'product', 'fullstack', 'smart contracts'],
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
    title: 'VegaForge — Product-Minded Fullstack Developer | Web3 & Solidity',
    description: 'Fullstack developer with product thinking. 7+ years in development, 5+ in Solidity and Web3. Building products end-to-end.',
    url: 'https://vegaforge.dev',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VegaForge — Product-Minded Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VegaForge — Product-Minded Fullstack Developer',
    description: 'Fullstack developer with product thinking. 7+ years in development, 5+ in Solidity and Web3.',
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
      description: 'Product-minded fullstack developer with 7+ years in development, 5+ in Solidity and Web3.',
      sameAs: [
        'https://x.com/vvegalex',
        'https://github.com/devacc8',
      ],
      knowsAbout: ['Solidity', 'React', 'Next.js', 'Web3', 'Blockchain', 'Smart Contracts', 'DeFi'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
