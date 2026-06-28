// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/whatsapp/WhatsAppButton'
import { SEO_DEFAULTS, COMPANY } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title:        { default: SEO_DEFAULTS.defaultTitle, template: SEO_DEFAULTS.titleTemplate },
  description:  SEO_DEFAULTS.description,
  icons: {
    icon:    '/images/favicon-clickdecoded.png',
    apple:   '/images/clickdecoded.png',
  },
  openGraph: {
    type:     'website',
    locale:   'en_IN',
    url:      COMPANY.siteUrl,
    siteName: COMPANY.name,
    images:   [{ url: SEO_DEFAULTS.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', creator: SEO_DEFAULTS.twitterHandle },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
