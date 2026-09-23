import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#1F1A15' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* Thème : celui du système par défaut, mémorisé dans le navigateur dès que l'on bascule. */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="relais-theme" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
