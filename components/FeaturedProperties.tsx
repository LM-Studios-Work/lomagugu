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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
  },
  {
    id: 2,
    name: 'Brooklyn Brownstone',
    location: 'Dubai, UAE',
    price: '$2,500,000',
    type: 'Historic Townhouse',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    id: 3,
    name: 'The Tuscan Villa',
    location: 'Paris, France',
    price: '$25,000,000',
    type: 'Historic Villa',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=700&q=80',
  },
  {
    id: 4,
    name: 'Alpine Retreat',
    location: 'Zurich, Switzerland',
    price: '$8,500,000',
    type: 'Mountain Estate',
    badge: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
  },
]

export default function FeaturedProperties() {
  const [offset, setOffset] = useState(0)
  const visibleCount = 3
  const maxOffset = properties.length - visibleCount

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
          <div className="md:max-w-xs flex flex-col gap-4">
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Discover a curated selection of exceptional properties from around the world.
              Each listing offers a unique opportunity to own a piece of the global real
              estate market.
            </p>
            {/* Arrows — square bordered boxes, no radius */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={offset === 0}
                aria-label="Previous"
                className="w-8 h-8 flex items-center justify-center border border-border text-foreground hover:border-foreground transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={14} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                aria-label="Next"
                className="w-8 h-8 flex items-center justify-center border border-border text-foreground hover:border-foreground transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards — zero border-radius, sharp edges */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{ transform: `translateX(calc(-${offset * (100 / visibleCount + 1.8)}%))` }}
          >
            {properties.map((p) => (
              <article
                key={p.id}
                className="min-w-[calc(33.333%-14px)] flex-shrink-0 cursor-pointer group"
              >
                {/* Image — NO border-radius */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* For Sale badge — white bg, dark green text, thin border */}
                  <span className="absolute top-3 left-3 bg-white text-[#1a3e2d] border border-[#1a3e2d] text-[11px] font-sans font-medium px-2 py-0.5">
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
                    <span className="font-normal text-muted-foreground">• {p.type}</span>
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
