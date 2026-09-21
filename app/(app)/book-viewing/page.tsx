import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookViewingContent from '@/components/BookViewingContent'

export const metadata = {
  title: 'Book a Viewing - Lomagugu Properties',
  description: 'Schedule a property viewing with Lomagugu Properties.',
}

export default function BookViewingPage() {
  return (
    <main>
      <Navbar />
      <BookViewingContent />
      <Footer />
    </main>
  )
}
