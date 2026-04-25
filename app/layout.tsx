import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/lib/auth-context'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Admin Dashboard - danishahmed111',
  description: 'Professional Admin Dashboard owned and maintained by danishahmed111. Secure, scalable admin panel with analytics and user management.',
  generator: 'v0.app',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['admin', 'dashboard', 'analytics', 'management', 'danishahmed111'],
  authors: [{ name: 'danishahmed111', url: 'https://github.com/danishahmed111' }],
  creator: 'danishahmed111',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://dashboard.danishahmed111.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Admin Dashboard - danishahmed111',
    description: 'Professional Admin Dashboard with Analytics and User Management',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://dashboard.danishahmed111.dev',
    siteName: 'Admin Dashboard',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard - danishahmed111',
    description: 'Professional Admin Dashboard owned by danishahmed111',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
