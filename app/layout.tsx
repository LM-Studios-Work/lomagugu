import type { Metadata } from 'next'
import { helveticaNeue } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dwella – Own Your World, One Property at a Time',
  description:
    'Dwella is your gateway to a world of real estate opportunities. With a global network of trusted partners, we connect buyers and sellers across borders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${helveticaNeue.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
