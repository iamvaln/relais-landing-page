import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  // À remplacer par le domaine définitif : sert de base aux images de partage (OpenGraph, Twitter).
  metadataBase: new URL('https://relais-landing-page.vercel.app'),
  title: 'Relais — Passe le relais, pas le chaos',
  description:
    'Le jour où vous ne serez plus là, les personnes en qui vous avez confiance pourront accéder à vos comptes numériques, les fermer ou les transmettre — en toute sécurité, selon vos volontés. Zero-knowledge. Mobile d’abord.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF8F5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
