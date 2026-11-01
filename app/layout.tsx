import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VegaForge: Product engineering and custom software as a service',
  description: 'VegaForge designs, builds and runs custom software as a service. Product engineering for companies that need systems shaped around how they work.',
  keywords: ['custom software', 'product engineering', 'CSAS', 'Next.js', 'React', 'AI agents', 'Web3', 'product design'],
  authors: [{ name: 'VegaForge' }],
  metadataBase: new URL('https://vegaforge.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'VegaForge: Product engineering and custom software as a service',
    description: 'VegaForge designs, builds and runs custom software as a service. Product engineering for companies that need systems shaped around how they work.',
    url: 'https://vegaforge.dev',
    siteName: 'VegaForge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VegaForge, product engineering company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VegaForge: Product engineering company',
    description: 'Custom software as a service. Product engineering for companies that need systems shaped around how they work.',
    creator: '@vvegalex',
    images: ['/og-image.png'],
  },
}



const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://vegaforge.dev/#website',
      url: 'https://vegaforge.dev',
      name: 'VegaForge',
      description: 'Product engineering company building custom software as a service',
      publisher: {
        '@id': 'https://vegaforge.dev/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://vegaforge.dev/#organization',
      name: 'VegaForge',
      url: 'https://vegaforge.dev',
      email: 'alex@vegaforge.dev',
      description: 'VegaForge designs, builds and runs custom software as a service.',
      sameAs: [
        'https://x.com/vvegalex',
        'https://github.com/devacc8',
      ],
      knowsAbout: [
        'Custom software',
        'Product engineering',
        'Next.js',
        'React',
        'TypeScript',
        'AI agents',
        'Web3',
        'Product design',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
