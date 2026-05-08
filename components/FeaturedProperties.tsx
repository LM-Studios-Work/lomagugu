'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { properties } from '@/lib/properties'

export default function FeaturedProperties() {
  const [offset, setOffset] = useState(0)
  const visibleCount = 3
  const maxOffset = properties.length - visibleCount

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="bg-background pb-[76px] pt-[27px]">
      <div className="w-full px-6 sm:px-10 lg:px-[42px]">
        <div className="mb-[56px] grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,560px)_300px] md:items-start md:justify-between">
          <div className="max-w-[545px]">
            <h2 className="font-sans text-[40px] font-normal leading-[1.16] tracking-normal text-foreground sm:text-[42px]">
              Featured Properties from Around the Globe
            </h2>
          </div>
          <div className="flex max-w-[300px] flex-col gap-[22px] md:justify-self-end">
            <p className="font-sans text-[13px] font-normal leading-[1.25] tracking-normal text-[#3f3f3f]">
              Discover a curated selection of exceptional properties from around the world.
              Each listing offers a unique opportunity to own a piece of the global real
              estate market.
            </p>
            <div className="flex gap-[10px]">
              <button
                onClick={prev}
                disabled={offset === 0}
                aria-label="Previous"
                className="flex h-[29px] w-[29px] items-center justify-center border border-[#e7e7e7] text-foreground transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                aria-label="Next"
                className="flex h-[29px] w-[29px] items-center justify-center border border-[#e7e7e7] text-foreground transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-[16px] transition-transform duration-300"
            style={{ transform: `translateX(calc(-${offset * (100 / visibleCount + 1.72)}%))` }}
          >
            {properties.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={`/properties/${p.id}`}
                className="group min-w-[calc(33.333%-11px)] flex-shrink-0 cursor-pointer"
              >
                <article>
                  <div className="relative aspect-[1.082/1] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-[11px] top-[11px] bg-white px-[13px] py-[8px] font-sans text-[10px] font-normal leading-none text-black">
                      {p.badge}
                    </span>
                  </div>
                  <div className="mt-[17px]">
                    <div className="mb-[5px] flex items-start justify-between gap-3">
                      <p className="font-sans text-[18px] font-normal leading-none text-foreground group-hover:text-primary transition-colors">
                        {p.name}
                      </p>
                      <span className="flex shrink-0 items-center gap-[3px] pt-[1px] font-sans text-[10px] text-[#3f3f3f]">
                        <MapPin size={12} strokeWidth={1.7} />
                        {p.location}
                      </span>
                    </div>
                    <p className="font-sans text-[13px] font-semibold leading-none text-primary">
                      {p.price}{' '}
                      <span className="font-normal text-[#3f3f3f]">&bull; {p.type}</span>
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
