import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif, Syne } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const syne = Syne({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Balazs Otakomaiya',
    template: '%s | Balazs Otakomaiya',
  },
  description: 'VP, Lead Software Engineer at J.P. Morgan’s eTrading FX Services team. 8 years shipping products at scale. Co-founded EZZRA.',
  openGraph: {
    title: 'Balazs Otakomaiya',
    description: 'VP, Lead Software Engineer at J.P. Morgan’s eTrading FX Services team.',
    url: baseUrl,
    siteName: 'Balazs Otakomaiya',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${syne.variable}`}
    >
      <body className="antialiased min-h-[100dvh] flex flex-col">
        {/* Film grain */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Rulers */}
        <div className="ruler-vertical ruler-left" aria-hidden="true" />
        <div className="ruler-vertical ruler-right" aria-hidden="true" />
        <div className="ruler-horizontal ruler-top" aria-hidden="true" />
        <div className="ruler-horizontal ruler-bottom" aria-hidden="true" />

        <Navbar />
        <main
          className="relative z-[1] flex-1 flex flex-col w-full mx-auto px-5 sm:px-8 md:px-0"
          style={{ maxWidth: 'var(--content-width)' }}
        >
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
