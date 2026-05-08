import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'

export const metadata = {
  title: 'Contact Us — Dwella',
  description: 'Get in touch with Dwella\'s team of global real estate specialists.',
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
