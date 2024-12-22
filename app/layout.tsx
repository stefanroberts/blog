import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav'
import './globals.css'
import './prism-theme.css'

const mono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'Stefan Roberts',
  description: 'Thoughts, stories and ideas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <header className="mb-16">
              <MainNav />
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

