import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookViewingContent from '@/components/BookViewingContent'

export const metadata = {
  title: 'Book a Viewing - Lomagugu Properties',
  description: 'Schedule a property viewing with Lomagugu Properties.',
}

import { fetchProperties } from '@/lib/properties'

export default async function BookViewingPage() {
  const properties = await fetchProperties()

  return (
    <main>
      <Navbar />
      <BookViewingContent initialProperties={properties} />
      <Footer />
    </main>
  )
}
