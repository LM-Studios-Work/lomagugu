'use client'

import { Search, ChevronDown } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden="true"
      />
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,20,15,0.45) 0%, rgba(10,20,15,0.72) 55%, rgba(10,20,15,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-0">
        {/* Tags row */}
        <div className="flex items-center gap-3 mb-6">
          {['Plot', 'Architectural', 'Tech'].map((tag, i) => (
            <span
              key={tag}
              className={`text-xs font-sans px-3 py-1 rounded-sm border ${
                i === 0
                  ? 'border-white/60 text-white bg-white/10'
                  : 'border-white/30 text-white/60'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline + sub-copy */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight text-balance max-w-xl">
            Own Your World,<br />One Property at a Time.
          </h1>
          <p className="font-sans text-white/70 text-sm leading-relaxed max-w-xs md:text-right">
            Seamlessly navigate the global real estate market. Our expert team is here
            to guide you every step of the way.
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-background rounded-t-lg px-6 py-4">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
            {/* Type */}
            <div className="flex flex-col gap-0.5 min-w-[110px]">
              <span className="text-xs text-muted-foreground font-sans">Type</span>
              <button className="flex items-center gap-1 text-sm font-sans text-foreground">
                Duplex <ChevronDown size={14} className="text-muted-foreground" />
              </button>
            </div>

            <div className="hidden md:block w-px h-8 bg-border" aria-hidden="true" />

            {/* Price */}
            <div className="flex flex-col gap-0.5 min-w-[130px]">
              <span className="text-xs text-muted-foreground font-sans">Price</span>
              <button className="flex items-center gap-1 text-sm font-sans text-foreground">
                $261 – $371k <ChevronDown size={14} className="text-muted-foreground" />
              </button>
            </div>

            <div className="hidden md:block w-px h-8 bg-border" aria-hidden="true" />

            {/* Area */}
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-xs text-muted-foreground font-sans">Area</span>
              <button className="flex items-center gap-1 text-sm font-sans text-foreground">
                Long Beach, California <ChevronDown size={14} className="text-muted-foreground" />
              </button>
            </div>

            {/* Search button */}
            <button
              className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-sans font-medium px-5 py-2.5 rounded hover:bg-accent transition-colors ml-auto shrink-0"
              aria-label="Search properties"
            >
              <Search size={15} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
