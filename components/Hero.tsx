'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { properties } from '@/lib/properties'
import SearchSelect from './SearchSelect'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80'

const priceRanges = [
  'All Prices',
  'Under R1.5M',
  'R1.5M - R3M',
  'R3M - R10M',
  'Over R10M',
]

export default function Hero() {
  const router = useRouter()
  const propertyTypes = useMemo(
    () => ['All Types', ...new Set(properties.map((property) => property.type))],
    []
  )
  const areas = useMemo(
    () => ['All Areas', ...new Set(properties.map((property) => property.location))],
    []
  )

  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedPrice, setSelectedPrice] = useState('All Prices')
  const [selectedArea, setSelectedArea] = useState('All Areas')

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (selectedType !== 'All Types') {
      params.set('type', selectedType)
    }

    if (selectedPrice !== 'All Prices') {
      params.set('price', selectedPrice)
    }

    if (selectedArea !== 'All Areas') {
      params.set('area', selectedArea)
    }

    const query = params.toString()
    router.push(query ? `/properties?${query}` : '/properties')
  }

  return (
    <section className="relative min-h-[760px] md:min-h-[720px] flex flex-col justify-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,20,15,0.45) 0%, rgba(10,20,15,0.72) 55%, rgba(10,20,15,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-16 pb-0">
        <div className="flex items-center gap-3 mb-6">
          {['Residential', 'Commercial', 'Pretoria'].map((tag, i) => (
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

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h1 className="font-sans font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-[680px]">
            Find Your Place in
            <br />
            South Africa.
          </h1>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed max-w-[410px] md:text-right md:mb-7">
            Lomagugu Properties helps buyers, sellers, landlords, and investors move
            with confidence across South Africa&apos;s property market.
          </p>
        </div>

        <div className="mb-12 border border-white/15 bg-black/20 px-5 py-5 backdrop-blur-sm md:px-8">
          <div className="grid grid-cols-1 items-end gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(150px,0.8fr)_1px_minmax(170px,0.85fr)_1px_minmax(230px,1.4fr)_auto] lg:gap-6">
            <SearchSelect
              label="Type"
              value={selectedType}
              options={propertyTypes}
              onChange={setSelectedType}
              variant="hero"
            />

            <div className="hidden h-8 w-px bg-white/20 lg:block" aria-hidden="true" />

            <SearchSelect
              label="Price"
              value={selectedPrice}
              options={priceRanges}
              onChange={setSelectedPrice}
              variant="hero"
            />

            <div className="hidden h-8 w-px bg-white/20 lg:block" aria-hidden="true" />

            <SearchSelect
              label="Area"
              value={selectedArea}
              options={areas}
              onChange={setSelectedArea}
              variant="hero"
              className="sm:col-span-2 lg:col-span-1"
            />

            <button
              onClick={handleSearch}
              className="flex h-11 items-center justify-center gap-2 bg-primary px-6 font-sans text-sm font-medium text-primary-foreground transition-colors hover:bg-accent sm:col-span-2 lg:col-span-1"
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
