import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertiesContent from '@/components/PropertiesContent'

export const metadata = {
  title: 'Property List - Lomagugu Properties',
}

interface PropertiesPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const resolvedSearchParams = await searchParams

  return (
    <main>
      <Navbar />
      <PropertiesContent searchParams={resolvedSearchParams} />
      <Footer />
    </main>
  )
}
