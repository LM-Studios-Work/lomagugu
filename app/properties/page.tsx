import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertiesContent from '@/components/PropertiesContent'

export const metadata = {
  title: 'Property List — Dwella',
  description: 'Browse our full portfolio of luxury properties from around the world.',
}

export default function PropertiesPage() {
  return (
    <main>
      <Navbar />
      <PropertiesContent />
      <Footer />
    </main>
  )
}
