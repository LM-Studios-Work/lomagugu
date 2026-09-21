import type { Metadata } from 'next'
import { helveticaNeue } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lomagugu Properties - South African Property Experts',
  description:
    'Lomagugu Properties connects buyers, sellers, landlords, and investors with trusted property opportunities across South Africa.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${helveticaNeue.variable} bg-background antialiased`}>
      <body>{children}</body>
    </html>
  )
}
