import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://swajitpatwari.com'),
  title: {
    default: 'Swajit Patwari | Customer Success Operations Manager',
    template: '%s | Swajit Patwari',
  },
  description: 'Customer Success Operations and SaaS Business Operations professional with 7+ years of experience. MBA candidate at SFU Beedie.',
  applicationName: 'Swajit Patwari Portfolio',
  authors: [{ name: 'Swajit Patwari', url: 'https://swajitpatwari.com' }],
  creator: 'Swajit Patwari',
  publisher: 'Swajit Patwari',
  generator: 'Next.js',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swajitpatwari.com',
    siteName: 'Swajit Patwari Portfolio',
    title: 'Swajit Patwari | Customer Success Operations Manager',
    description:
      'Customer Success Operations and SaaS Business Operations professional with 7+ years of experience. MBA candidate at SFU Beedie.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Swajit Patwari Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swajit Patwari | Customer Success Operations Manager',
    description:
      'Customer Success Operations and SaaS Business Operations professional with 7+ years of experience. MBA candidate at SFU Beedie.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
