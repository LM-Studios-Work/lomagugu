export interface Property {
  id: number
  name: string
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
    name: 'Oceanfront Paradise',
    location: 'Miami Beach, USA',
    price: '$4,200,000',
    type: 'Luxury Villa',
    badge: 'For Sale',
    beds: 5,
    baths: 4,
    sqft: 5800,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
    ],
    description:
      'An extraordinary beachfront estate offering panoramic Atlantic views from every room. This magnificent property blends contemporary design with natural materials, featuring soaring ceilings, walls of glass, and seamless indoor-outdoor living spaces that open onto a private beach.',
    features: ['Private Beach Access', 'Infinity Pool', 'Smart Home System', 'Chef\'s Kitchen', 'Home Theater', 'Three-Car Garage'],
    agent: {
      name: 'Sarah Mitchell',
      title: 'Senior Luxury Specialist',
      phone: '+1 (305) 555-0192',
      email: 'sarah.mitchell@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    },
  },
  {
    id: 2,
    name: 'Brooklyn Brownstone',
    location: 'Dubai, UAE',
    price: '$2,500,000',
    type: 'Historic Townhouse',
    badge: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    ],
    description:
      'A meticulously restored historic townhouse combining old-world charm with modern luxury. Original architectural details — herringbone hardwood floors, carved crown moulding, and original fireplaces — have been carefully preserved alongside fully updated systems and contemporary finishes.',
    features: ['Original Architecture', 'Private Garden', 'Wine Cellar', 'Rooftop Terrace', 'Period Fireplaces', 'Gourmet Kitchen'],
    agent: {
      name: 'James Okonkwo',
      title: 'Urban Property Specialist',
      phone: '+1 (212) 555-0847',
      email: 'james.okonkwo@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    },
  },
  {
    id: 3,
    name: 'The Tuscan Villa',
    location: 'Paris, France',
    price: '$25,000,000',
    type: 'Historic Villa',
    badge: 'For Sale',
    beds: 8,
    baths: 7,
    sqft: 12400,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80',
      'https://images.unsplash.com/photo-1560185127-6a4ed4bef9c1?w=900&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&q=80',
    ],
    description:
      'A rare 18th-century estate set among rolling vineyards, olive groves, and formal Italian gardens. This irreplaceable property features hand-painted frescoes, antique marble floors, and a private chapel — a true masterpiece of Tuscan craftsmanship that has been sensitively modernised.',
    features: ['Vineyard & Olive Grove', 'Private Chapel', 'Staff Quarters', 'Heated Pool', 'Frescoed Ceilings', 'Guest House'],
    agent: {
      name: 'Isabelle Fontaine',
      title: 'European Estates Director',
      phone: '+33 1 55 00 1847',
      email: 'isabelle.fontaine@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    },
  },
  {
    id: 4,
    name: 'Alpine Retreat',
    location: 'Zurich, Switzerland',
    price: '$8,500,000',
    type: 'Mountain Estate',
    badge: 'For Sale',
    beds: 6,
    baths: 5,
    sqft: 7200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&q=80',
    ],
    description:
      'Perched at 1,800 metres with sweeping views of the Swiss Alps, this extraordinary chalet combines traditional alpine craftsmanship with the highest level of contemporary luxury. Floor-to-ceiling glazing frames the dramatic mountain panorama from every principal room.',
    features: ['Mountain Panorama', 'Ski-In Ski-Out', 'Spa & Sauna', 'Heated Garage', 'Staff Apartment', 'Helipad'],
    agent: {
      name: 'Marcus Gruber',
      title: 'Alpine Properties Specialist',
      phone: '+41 44 555 0291',
      email: 'marcus.gruber@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    },
  },
  {
    id: 5,
    name: 'Modern City Apartment',
    location: 'New York City, USA',
    price: '$1,200,000',
    type: 'Apartment',
    badge: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: 1450,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=80',
    ],
    description:
      'A sleek full-floor residence in the heart of Manhattan offering sweeping city skyline views. The open-plan layout is flooded with natural light through floor-to-ceiling windows, complemented by Italian marble finishes, integrated Miele appliances, and a private elevator entry.',
    features: ['Full-Floor Layout', 'City Skyline Views', 'Private Elevator', 'Concierge Service', 'Fitness Center', 'Rooftop Access'],
    agent: {
      name: 'Sarah Mitchell',
      title: 'Senior Luxury Specialist',
      phone: '+1 (212) 555-0192',
      email: 'sarah.mitchell@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    },
  },
  {
    id: 6,
    name: 'Luxury Beachfront Villa',
    location: 'Miami Beach, USA',
    price: '$2,500,000',
    type: 'Villa',
    badge: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 4100,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
      'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    ],
    description:
      'A stunning contemporary villa set directly on the white sands of Miami Beach. Designed by an award-winning architect, the home features cantilevered terraces, a zero-edge pool, and an open-plan living pavilion that dissolves the boundary between interior and the ocean beyond.',
    features: ['Oceanfront Position', 'Zero-Edge Pool', 'Private Dock', 'Summer Kitchen', 'Smart Home', 'Cabana'],
    agent: {
      name: 'James Okonkwo',
      title: 'Urban Property Specialist',
      phone: '+1 (305) 555-0847',
      email: 'james.okonkwo@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    },
  },
  {
    id: 7,
    name: 'Cozy Mountain Cabin',
    location: 'Aspen, USA',
    price: '$1,200,000',
    type: 'Cabin',
    badge: 'For Sale',
    beds: 3,
    baths: 2,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=900&q=80',
    ],
    description:
      'A charming hand-hewn log cabin set among aspen groves in the world-renowned Aspen ski resort. Thoughtfully renovated with radiant floor heating, a stone fireplace, and a wraparound deck positioned to capture spectacular mountain and valley views throughout the seasons.',
    features: ['Ski-In Ski-Out', 'Stone Fireplace', 'Wraparound Deck', 'Hot Tub', 'Radiant Heating', 'Mountain Views'],
    agent: {
      name: 'Marcus Gruber',
      title: 'Alpine Properties Specialist',
      phone: '+1 (970) 555-0291',
      email: 'marcus.gruber@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    },
  },
  {
    id: 8,
    name: 'Historic Brownstone Townhouse',
    location: 'Boston, USA',
    price: '$1,800,000',
    type: 'Townhouse',
    badge: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3600,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
    ],
    description:
      'A landmark Back Bay brownstone occupying a prime position on one of Boston\'s most sought-after tree-lined streets. Five floors of gracious living with original bay windows, parquet floors, and handsome fireplaces in every principal room, all updated with modern comfort in mind.',
    features: ['Bay Windows', 'Private Courtyard', 'Original Parquet Floors', 'Multiple Fireplaces', 'Wine Cellar', 'Roof Deck'],
    agent: {
      name: 'Isabelle Fontaine',
      title: 'European Estates Director',
      phone: '+1 (617) 555-0192',
      email: 'isabelle.fontaine@dwella.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    },
  },
]
