import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

const listings = [
  {
    id: 1,
    name: 'Modern City Apartment',
    location: 'New York City, USA',
    price: '$1,200,000',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
  },
  {
    id: 2,
    name: 'Luxury Beachfront Villa',
    location: 'Miami Beach, USA',
    price: '$2,500,000',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80',
  },
  {
    id: 3,
    name: 'Cozy Mountain Cabin',
    location: 'Aspen, USA',
    price: '$1,200,000',
    type: 'Cabin',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&q=80',
  },
  {
    id: 4,
    name: 'Historic Brownstone Townhouse',
    location: 'Boston, USA',
    price: '$1,800,000',
    type: 'Townhouse',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
  },
  {
    id: 5,
    name: 'Rustic Farmhouse Estate',
    location: 'Napa Valley, USA',
    price: '$3,000,000',
    type: 'Farmhouse',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
  },
]

export default function PropertyList() {
  return (
    <section id="properties" className="border-t border-border bg-[#e7f8f0] py-14 md:py-[68px]">
      <div className="w-full px-6 md:px-[54px]">
        <div className="mb-8 flex items-start justify-between md:mb-[54px]">
          <div>
            <h2 className="max-w-3xl font-sans text-3xl font-bold leading-tight text-foreground text-balance md:text-[42px]">
              Discover Your Next Destination
            </h2>
            <p className="mt-7 max-w-[590px] font-sans text-[15px] leading-snug text-muted-foreground">
              Explore a diverse range of properties in popular locations around the world. Use our
              intuitive filters to refine your search by property type, price range, and location.
            </p>
          </div>
          <a
            href="#"
            className="mt-11 hidden font-sans text-sm text-foreground transition-colors hover:text-primary md:inline"
          >
            See All
          </a>
        </div>

        <div className="flex flex-col">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group grid items-center gap-x-5 px-5 py-[18px] transition-colors duration-200 hover:bg-white md:grid-cols-[176px_minmax(270px,1fr)_minmax(210px,270px)_82px_144px] md:gap-x-8"
            >
              <div className="relative h-[92px] w-full overflow-hidden md:h-[116px] md:w-[176px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 88px), 176px"
                />
              </div>

              <div className="mt-5 min-w-0 md:mt-0">
                <p className="font-sans text-lg font-medium leading-tight text-foreground md:text-[20px]">
                  {item.name}
                </p>
                <p className="mt-2 flex items-center gap-2 font-sans text-sm text-muted-foreground md:text-[15px]">
                  <MapPin size={16} strokeWidth={1.75} />
                  {item.location}
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <p className="font-sans text-[15px] font-normal text-muted-foreground group-hover:font-bold group-hover:text-foreground">
                  Price: {item.price}
                </p>
                <p className="mt-2 font-sans text-[13px] text-muted-foreground">
                  Property Type: {item.type}
                </p>
              </div>

              <div className="hidden h-9 w-px justify-self-center bg-[#9fb0a7] md:block" aria-hidden="true" />

              <a
                href="#"
                className="mt-4 inline-flex h-10 w-[126px] shrink-0 items-center justify-center gap-2 border border-border bg-transparent font-sans text-sm font-medium text-foreground transition-colors group-hover:border-[#173f2c] group-hover:bg-[#173f2c] group-hover:text-white md:mt-0 md:justify-self-end"
              >
                View Details <ArrowRight size={15} strokeWidth={1.75} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
