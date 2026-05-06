import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'

const listings = [
  {
    id: 1,
    name: 'Modern City Apartment',
    location: 'New York City, USA',
    price: '$1,200,000',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80',
    highlight: false,
  },
  {
    id: 2,
    name: 'Luxury Beachfront Villa',
    location: 'Miami Beach, USA',
    price: '$2,500,000',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&q=80',
    highlight: true,
  },
  {
    id: 3,
    name: 'Cozy Mountain Cabin',
    location: 'Aspen, USA',
    price: '$1,200,000',
    type: 'Cabin',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=300&q=80',
    highlight: false,
  },
  {
    id: 4,
    name: 'Historic Brownstone Townhouse',
    location: 'Boston, USA',
    price: '$1,800,000',
    type: 'Townhouse',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&q=80',
    highlight: false,
  },
  {
    id: 5,
    name: 'Rustic Farmhouse Estate',
    location: 'Napa Valley, USA',
    price: '$3,000,000',
    type: 'Farmhouse',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&q=80',
    highlight: false,
  },
]

export default function PropertyList() {
  return (
    <section id="properties" className="py-20 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="max-w-lg">
            <h2 className="font-sans font-bold text-foreground text-3xl md:text-4xl leading-tight text-balance">
              Discover Your Next Destination
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-sm font-sans text-foreground hover:text-primary transition-colors mt-1"
          >
            See All
          </a>
        </div>
        <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-md mb-10">
          Explore a diverse range of properties in popular locations around the world. Use our
          intuitive filters to refine your search by property type, price range, and location.
        </p>

        {/* List */}
        <div className="flex flex-col gap-3">
          {listings.map((item) => (
            <article
              key={item.id}
              className={`flex items-center gap-5 rounded p-4 ${
                item.highlight
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground border border-border'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-16 rounded overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              {/* Name + location */}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-sans font-semibold text-sm ${
                    item.highlight ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </p>
                <p
                  className={`flex items-center gap-1 font-sans text-xs mt-0.5 ${
                    item.highlight ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                >
                  <MapPin size={11} />
                  {item.location}
                </p>
              </div>

              {/* Price + type */}
              <div className="hidden md:block min-w-[180px]">
                <p
                  className={`font-sans font-bold text-sm ${
                    item.highlight ? 'text-white' : 'text-foreground'
                  }`}
                >
                  Price: {item.price}
                </p>
                <p
                  className={`font-sans text-xs mt-0.5 ${
                    item.highlight ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                >
                  Property Type: {item.type}
                </p>
              </div>

              <div
                className={`hidden md:block w-px h-10 mx-2 ${
                  item.highlight ? 'bg-white/20' : 'bg-border'
                }`}
                aria-hidden="true"
              />

              {/* CTA */}
              <a
                href="#"
                className={`flex items-center gap-1.5 text-xs font-sans font-medium shrink-0 hover:gap-2.5 transition-all ${
                  item.highlight ? 'text-white' : 'text-foreground'
                }`}
              >
                View Details <ArrowRight size={13} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
