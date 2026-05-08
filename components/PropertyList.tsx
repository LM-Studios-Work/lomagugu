import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { properties as allProperties } from '@/lib/properties'

const listings = allProperties.slice(0, 5)

export default function PropertyList() {
  return (
    <section id="properties" className="bg-[#e8f8f1] pb-20 pt-10 md:pb-[104px] md:pt-[58px]">
      <div className="w-full px-6 md:px-[41px]">
        <div className="mb-[47px] flex items-start justify-between">
          <div>
            <h2 className="max-w-[620px] font-sans text-[34px] font-semibold leading-[1.08] tracking-normal text-foreground md:text-[35px]">
              Discover Your Next Destination
            </h2>
            <p className="mt-[25px] max-w-[620px] font-sans text-[13px] font-normal leading-[1.35] tracking-normal text-[#4b5554]">
              Explore a diverse range of properties in popular locations around the world. Use our
              intuitive filters to refine your search by property type, price range, and location.
            </p>
          </div>
          <Link
            href="/properties"
            className="mt-[36px] hidden font-sans text-[13px] font-normal leading-none text-foreground transition-colors hover:text-primary md:inline"
          >
            See All
          </Link>
        </div>

        <div className="flex flex-col gap-0">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group grid items-center gap-x-5 px-4 py-[14px] transition-colors duration-200 hover:bg-white md:grid-cols-[149px_minmax(270px,1fr)_minmax(210px,240px)_70px_126px] md:gap-x-[29px] md:px-[16px] md:py-[14px]"
            >
              <div className="relative h-[98px] w-full overflow-hidden md:h-[99px] md:w-[149px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 80px), 149px"
                />
              </div>

              <div className="mt-5 min-w-0 md:mt-0">
                <p className="font-sans text-[18px] font-normal leading-none tracking-normal text-foreground">
                  {item.name}
                </p>
                <p className="mt-[11px] flex items-center gap-[7px] font-sans text-[14px] font-normal leading-none text-[#4b5554]">
                  <MapPin size={14} strokeWidth={1.75} />
                  {item.location}
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <p className="font-sans text-[13px] font-normal leading-none tracking-normal text-[#4b5554] group-hover:font-semibold group-hover:text-foreground">
                  Price: {item.price}
                </p>
                <p className="mt-[15px] font-sans text-[13px] font-normal leading-none tracking-normal text-[#4b5554]">
                  Property Type: {item.type}
                </p>
              </div>

              <div className="hidden h-[31px] w-px justify-self-center bg-[#9fb0a7] md:block" aria-hidden="true" />

              <Link
                href={`/properties/${item.id}`}
                className="mt-4 inline-flex h-[35px] w-[108px] shrink-0 items-center justify-center gap-[7px] border border-[#dbe9e3] bg-transparent font-sans text-[11px] font-semibold leading-none text-foreground transition-colors group-hover:border-[#173f2c] group-hover:bg-[#173f2c] group-hover:text-white md:mt-0 md:justify-self-end"
              >
                View Details <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
