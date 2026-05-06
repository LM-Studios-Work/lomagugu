'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: 'Oceanfront Paradise',
    location: 'Miami, USA',
    price: '$4,200,000',
    type: 'Luxury Villa',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80',
  },
  {
    id: 2,
    name: 'Brooklyn Brownstone',
    location: 'Quebec, USA',
    price: '$2,800,000',
    type: 'Historic Townhouse',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
  },
  {
    id: 3,
    name: 'The Tuscan Villa',
    location: 'Paris, France',
    price: '$25,000,000',
    type: 'Historic Villa',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
  },
  {
    id: 4,
    name: 'Alpine Retreat',
    location: 'Zurich, Switzerland',
    price: '$8,500,000',
    type: 'Mountain Estate',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  },
]

export default function FeaturedProperties() {
  const [offset, setOffset] = useState(0)
  const maxOffset = properties.length - 3

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="max-w-lg">
            <h2 className="font-sans font-bold text-foreground text-3xl md:text-4xl leading-tight text-balance">
              Featured Properties from Around the Globe
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
              Discover a curated selection of exceptional properties from around the world.
              Each listing offers a unique opportunity to own a piece of the global real
              estate market.
            </p>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={offset === 0}
                aria-label="Previous"
                className="w-8 h-8 flex items-center justify-center border border-border rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                aria-label="Next"
                className="w-8 h-8 flex items-center justify-center border border-border rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{ transform: `translateX(calc(-${offset * (100 / 3 + 1.5)}%))` }}
          >
            {properties.map((p) => (
              <article
                key={p.id}
                className="min-w-[calc(33.333%-14px)] flex-shrink-0 cursor-pointer group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-sans font-medium px-2 py-0.5 rounded-sm">
                    {p.badge}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-sans font-semibold text-foreground text-sm">{p.name}</p>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
                      <MapPin size={11} />
                      {p.location}
                    </span>
                  </div>
                  <p className="font-sans text-foreground font-bold text-sm">
                    {p.price}{' '}
                    <span className="font-normal text-muted-foreground">
                      • {p.type}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
