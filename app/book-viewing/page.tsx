import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookViewingContent from '@/components/BookViewingContent'

export const metadata = {
  title: 'Book a Viewing — Dwella',
  description: 'Schedule an in-person or virtual property viewing with a Dwella specialist.',
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
