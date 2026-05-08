import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'

export const metadata = {
  title: 'Contact Us - Lomagugu Properties',
  description: 'Get in touch with Lomagugu Properties in Pretoria, South Africa.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
