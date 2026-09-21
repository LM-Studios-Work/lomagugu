export interface Property {
  id: number
  name: string
  headline?: string
  location: string
  price: string
  type: string
  badge: string
  beds: number
  baths: number
  sqft: number
  image: string
  images: string[]
  description: string
  features: string[]
  investmentSnapshot?: {
    label: string
    value: string
  }[]
  whyInvestHere?: string[]
  agent: {
    name: string
    title: string
    phone: string
    email: string
    avatar: string
  }
}

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function fetchProperties(): Promise<Property[]> {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'properties',
    depth: 1, // to populate images
  })

  return result.docs.map((doc: any) => {
    const formatCurrency = (val: number) => {
      return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0 }).format(val);
    };

    const firstImageUrl = doc.images?.[0]?.image?.url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80';
    const allImages = doc.images?.map((img: any) => img.image?.url).filter(Boolean) || [firstImageUrl];

    // Attempt to extract some text from Lexical rich text if possible
    let textDescription = 'A beautiful property available from Lomagugu Properties.';
    if (doc.description && doc.description.root && doc.description.root.children) {
      try {
        textDescription = doc.description.root.children[0].children[0].text || textDescription;
      } catch (e) {
        // fallback
      }
    }

    return {
      id: doc.id,
      name: doc.title,
      location: doc.location,
      price: doc.price ? formatCurrency(doc.price) : 'Price on request',
      type: doc.type ? doc.type.charAt(0).toUpperCase() + doc.type.slice(1) : 'Property',
      badge: 'For Sale',
      beds: doc.bedrooms || 0,
      baths: doc.bathrooms || 0,
      sqft: 0, // Not in CMS yet
      image: firstImageUrl,
      images: allImages,
      description: textDescription,
      features: [], // Not in CMS yet
      agent: {
        name: 'Lomagugu Agent',
        title: 'Property Consultant',
        phone: '+27 12 555 0192',
        email: 'Admin@lomaguguproperties.co.za',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
      },
    }
  })
}
