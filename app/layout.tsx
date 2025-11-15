import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

// SEO and metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Future Brand - AI-Powered Innovation',
    template: '%s | Future Brand'
  },
  description: 'Experience the future of branding with AI-powered design, modern aesthetics, and innovative technology. Redefining what\'s possible in the digital age.',
  keywords: ['AI', 'branding', 'design', 'innovation', 'technology', 'modern', 'digital'],
  authors: [{ name: 'Future Brand Team' }],
  creator: 'Future Brand',
  publisher: 'Future Brand',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Future Brand - AI-Powered Innovation',
    description: 'Experience the future of branding with AI-powered design, modern aesthetics, and innovative technology.',
    siteName: 'Future Brand',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Future Brand - AI-Powered Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Brand - AI-Powered Innovation',
    description: 'Experience the future of branding with AI-powered design, modern aesthetics, and innovative technology.',
    images: ['/og-image.jpg'],
    creator: '@futurebrand',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Future Brand" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-950 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Header component */}
        <Header />
        
        {/* Main content area */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Footer component */}
        <Footer />
        
        {/* Back to top button */}
        <button
          id="back-to-top"
          className="fixed bottom-8 right-8 bg-primary-950 text-white p-3 rounded-full shadow-lg hover:bg-primary-800 transition-all duration-300 opacity-0 invisible z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </body>
    </html>
  )
}

