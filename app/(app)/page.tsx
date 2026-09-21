import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'

import PropertyList from '@/components/PropertyList'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import { fetchProperties } from '@/lib/properties'

export default async function Home() {
  const properties = await fetchProperties()

  return (
    <main>
      <Navbar />
      <Hero initialProperties={properties} />
      <About />

      <PropertyList initialProperties={properties} />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
