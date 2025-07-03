import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { defaultSEO } from '@/lib/seo'
import { Providers } from './providers'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: ['digital agency', 'web design', 'branding', 'marketing', 'creative'],
  authors: [{ name: 'I&S Digital' }],
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.image!],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.image!],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF8040',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 