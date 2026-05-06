import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProperties from '@/components/FeaturedProperties'
import PropertyList from '@/components/PropertyList'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProperties />
      <PropertyList />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
