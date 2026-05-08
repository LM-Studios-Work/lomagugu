import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertyDetail from '@/components/PropertyDetail'
import { properties } from '@/lib/properties'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return properties.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const property = properties.find((p) => p.id === Number(id))
  if (!property) return { title: 'Property Not Found — Dwella' }
  return {
    title: `${property.name} — Dwella`,
    description: property.description,
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params
  const property = properties.find((p) => p.id === Number(id))
  if (!property) notFound()

  return (
    <main>
      <Navbar />
      <PropertyDetail property={property} />
      <Footer />
    </main>
  )
}
