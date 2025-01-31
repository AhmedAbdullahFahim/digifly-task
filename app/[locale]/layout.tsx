import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Provider'

const PoppinsFont = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DigiFly',
  description: 'DigiFly task assessment',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const messages = await getMessages()
  const { locale } = await params

  return (
    <html lang={locale} dir={locale == 'en' ? 'ltr' : 'rtl'}>
      <body
        className={`${PoppinsFont.className}  antialiased overflow-x-hidden bg-gradient-to-b from-[#f5f3fc] to-white min-h-screen`}
        style={{
          fontFamily: `"Poppins", "Noto Sans Arabic", sans-serif`,
        }}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
