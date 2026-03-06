import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Praskla Technology | Enterprise IT Solutions',
  description: 'Innovative Solutions Connecting Brands and Customers. Enterprise-grade software development, digital transformation, digital marketing, and IT security services.',
  keywords: 'IT solutions, software development, digital transformation, cybersecurity, digital marketing',
  openGraph: {
    title: 'Praskla Technology | Enterprise IT Solutions',
    description: 'Innovative Solutions Connecting Brands and Customers',
    url: 'https://prasklatechnology.com',
    siteName: 'Praskla Technology',
    images: [
      {
        url: 'https://prasklatechnology.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praskla Technology | Enterprise IT Solutions',
    description: 'Innovative Solutions Connecting Brands and Customers',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="bg-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
