import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
  description: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
  keywords: 'digital transformation, Africa, municipalities, governance, local government, e-governance, technology, innovation',
  authors: [{ name: 'DTIMA Team' }],
  creator: 'DTIMA',
  publisher: 'DTIMA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dtima.africa'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
      'sw': '/sw',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
    description: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
    url: 'https://dtima.africa',
    siteName: 'DTIMA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
    description: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background font-sans antialiased">
          {children}
        </div>
      </body>
    </html>
  )
}
