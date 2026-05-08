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

export const properties: Property[] = [
  {
    id: 1,
    name: 'Green Creek Lifestyle Estate',
    headline: 'Prime Investment Apartment',
    location: 'Bronkhorstspruit Road, next to Blyde Beach',
    price: 'R1,050,000',
    type: 'Investment Apartment',
    badge: 'For Sale',
    beds: 2,
    baths: 1,
    sqft: 980,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
    ],
    description:
      'This modern 2-bedroom, 1-bathroom apartment in the sought-after Green Creek Lifestyle Estate offers stylish, secure living with strong investment appeal. The open-plan layout and partial furnishings make it ideal for immediate occupation or rental. Residents enjoy resort-style amenities, including a swimming pool and fully equipped gym, all within a secure, access-controlled estate. Ideally located on Bronkhorstspruit Road, next to Blyde Beach and popular restaurants, with easy access to public transport. A smart lock-up-and-go lifestyle home or a high-demand rental investment in a growing precinct.',
    features: [
      '2 Bedrooms',
      '1 Bathroom',
      'Swimming Pool',
      'Gym',
      'Secure Estate',
      'Partial Furnishings',
      'Open-plan Layout',
      'Lock-up-and-go',
    ],
    investmentSnapshot: [
      { label: 'Price Range', value: 'R1.05m - R1.25m' },
      { label: 'Rental Income', value: 'R9,500 - R11,000 pm' },
      { label: 'Gross Yield', value: '+/- 9% - 11%' },
    ],
    agent: {
      name: 'Lerato Mokoena',
      title: 'Residential Sales Consultant',
      phone: '+27 12 555 0192',
      email: 'Admin@lomaguguproperties.co.za',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    },
  },
  {
    id: 2,
    name: 'Capital Trilogy',
    headline: 'Elegant One-Bedroom Living at Menlyn Maine',
    location: 'Menlyn Maine, Pretoria',
    price: 'R2,200,000',
    type: 'Apartment',
    badge: 'For Sale',
    beds: 1,
    baths: 1,
    sqft: 1450,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    ],
    description:
      'Step into refined urban living with this fully furnished one-bedroom apartment with ensuite bathroom, perfectly situated within the exclusive Capital Trilogy development in Menlyn Maine - Pretoria\'s premier live-work-play precinct. The intelligently designed apartment combines modern finishes, sleek furnishings, and elegant comfort. The open-plan layout seamlessly integrates living, dining, and kitchen areas, while floor-to-ceiling windows offer breathtaking views of the Menlyn skyline. The kitchen is fully equipped with high-end appliances, combining style and functionality for the discerning professional, diplomat, or investor seeking premium rental appeal. Every detail, from designer decor to ambient lighting, exudes sophistication and timeless elegance. Residents enjoy world-class amenities, including a rooftop swimming pool and bar restaurants, secure parking, and 24-hour concierge and security. Step outside to Menlyn Maine Central Square for fine dining, boutique retail, and vibrant entertainment, all within walking distance.',
    features: [
      '1 Bedroom',
      'Ensuite Bathroom',
      'Fully Furnished',
      'Rooftop Pool',
      '24hr Security',
      'Concierge',
      'Secure Parking',
      'High-end Appliances',
    ],
    investmentSnapshot: [
      { label: 'Estimated Monthly Rental', value: 'R22,000 pm' },
      { label: 'Gross Rental Yield', value: '+/- 10% per annum' },
      { label: 'Target Market', value: 'Professionals, executives, short-stay tenants' },
    ],
    whyInvestHere: [
      'Blue-chip Menlyn Maine location',
      'High-demand rental and Airbnb market',
      'Premium rooftop amenities driving premium rates',
      'Lock-up-and-go, low-maintenance investment',
    ],
    agent: {
      name: 'Thabo Nkosi',
      title: 'Urban Property Specialist',
      phone: '+27 12 555 0847',
      email: 'Admin@lomaguguproperties.co.za',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    },
  },
  {
    id: 3,
    name: 'Trilogy Apartments',
    headline: 'Blue-Chip Address in Menlyn Main',
    location: 'Menlyn Main, Pretoria',
    price: 'R2,600,000',
    type: 'Apartment',
    badge: 'For Sale',
    beds: 1,
    baths: 1,
    sqft: 1680,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80',
      'https://images.unsplash.com/photo-1560185127-6a4ed4bef9c1?w=900&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&q=80',
    ],
    description:
      'Step into luxury urban living at the iconic Trilogy Apartments, perfectly positioned in the heart of Menlyn Main. This is more than an apartment - it\'s an address that performs. This elegant one-bedroom residence offers a sleek open-plan kitchen and living space, designed for modern, lock-up-and-go living. Floor-to-ceiling windows frame beautiful city views, creating a light-filled space that feels both private and connected to the energy of the precinct. Enjoy exclusive access to a rooftop restaurant and resort-style swimming pool, overlooking the city skyline - a standout feature that consistently attracts high-quality tenants and short-stay guests. Located opposite the Menlyn Casino and surrounded by upmarket restaurants, retail, and entertainment, this property is ideally positioned for Airbnb, executive rentals, or owner-occupation.',
    features: [
      '1 Bedroom',
      'Open-plan Kitchen',
      'City Views',
      'Rooftop Restaurant',
      'Resort-style Pool',
      'Secure Parking',
      '24hr Security',
      'Lock-up-and-go',
    ],
    investmentSnapshot: [
      { label: 'Price', value: 'From R2.6 million' },
      { label: 'Rental Income', value: 'R15,000 - R30,000 pm' },
    ],
    whyInvestHere: [
      'Blue-chip Menlyn Main location',
      'Proven short-stay and executive rental demand',
      'Rooftop amenities that command premium rates',
      'Secure, low-maintenance, high-appeal asset',
    ],
    agent: {
      name: 'Naledi Khumalo',
      title: 'Property Investment Advisor',
      phone: '+27 12 555 1847',
      email: 'Admin@lomaguguproperties.co.za',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    },
  },
  {
    id: 4,
    name: 'Greenfield Estate',
    location: 'Midrand, Johannesburg',
    price: 'Expected completion: Q3 2025',
    type: 'Residential Estate',
    badge: 'Coming Soon',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&q=80',
    ],
    description:
      'A luxury residential estate featuring modern homes with eco-friendly designs, communal parks, and state-of-the-art security. Expected completion: Q3 2025.',
    features: ['Eco-Friendly Design', 'Communal Parks', 'State-of-the-Art Security', 'Modern Homes', 'Family Lifestyle', 'Planned Community'],
    agent: {
      name: 'Sipho Dlamini',
      title: 'Estate Property Consultant',
      phone: '+27 12 555 0291',
      email: 'Admin@lomaguguproperties.co.za',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    },
  },
  {
    id: 5,
    name: 'Urban Heights Complex',
    location: 'Sandton, Johannesburg',
    price: 'Launch date: Q1 2025',
    type: 'Apartment Complex',
    badge: 'Coming Soon',
    beds: 2,
    baths: 2,
    sqft: 1300,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=80',
    ],
    description:
      'Premium apartment complex in the heart of Sandton with retail spaces, gym facilities, and rooftop gardens. Launch date: Q1 2025.',
    features: ['Retail Spaces', 'Gym Facilities', 'Rooftop Gardens', 'Central Sandton Location', 'Premium Apartments', 'Mixed-Use Development'],
    agent: {
      name: 'Lerato Mokoena',
      title: 'Residential Sales Consultant',
      phone: '+27 12 555 1192',
      email: 'Admin@lomaguguproperties.co.za',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    },
  },
]
