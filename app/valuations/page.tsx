import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ValuationsContent from '@/components/ValuationsContent'

export const metadata = {
  title: 'Valuations — Lomagugu Properties',
  description:
    'Licensed, certified property valuations for residential, commercial, municipal, agricultural, and industrial properties. Know exactly what your property is worth.',
}

export default function ValuationsPage() {
  return (
    <main>
      <Navbar />
      <ValuationsContent />
      <Footer />
    </main>
  )
}
