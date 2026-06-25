import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/lib/i18n'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monitt.io — IA Predictiva para Activos Industriales',
  description:
    'Monitt.io detecta fallas antes de que ocurran. IA predictiva, despacho en un toque y GPS en tiempo real para equipos industriales críticos.',
  openGraph: {
    title: 'Monitt.io — Predictive AI for Industrial Assets',
    description: 'Turn your industrial machinery into intelligent assets.',
    siteName: 'Monitt.io',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
