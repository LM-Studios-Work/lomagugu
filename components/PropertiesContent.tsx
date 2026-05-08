'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bed, Bath, Maximize2, Search, SlidersHorizontal, X, ArrowRight } from 'lucide-react'
import { properties } from '@/lib/properties'

const propertyTypes = ['All', 'Apartment', 'Villa', 'Cabin', 'Townhouse', 'Farmhouse', 'Mountain Estate', 'Luxury Villa', 'Historic Villa', 'Historic Townhouse']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $1.5M', min: 0, max: 1500000 },
  { label: '$1.5M – $3M', min: 1500000, max: 3000000 },
  { label: '$3M – $10M', min: 3000000, max: 10000000 },
  { label: 'Over $10M', min: 10000000, max: Infinity },
]

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, '')) * 1_000_000
}

export default function PropertiesContent() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    const range = priceRanges[selectedPriceIdx]
    return properties.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchesType = selectedType === 'All' || p.type === selectedType
      const price = parsePrice(p.price)
      const matchesPrice = price >= range.min && price <= range.max
      return matchesSearch && matchesType && matchesPrice
    })
  }, [search, selectedType, selectedPriceIdx])

  return (
    <>
      {/* Page hero */}
      <section className="bg-dark pt-32 pb-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">Our Portfolio</p>
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-[680px] mb-6">
            Find Your Perfect Property
          </h1>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-[520px]">
            Explore our curated portfolio of exceptional homes, estates and residences from the world&apos;s most sought-after locations.
          </p>
        </div>
      </section>

      {/* Filters bar */}
      <section className="bg-[#e8f8f1] border-b border-[#c8e8d8] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5554]" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#c8e8d8] font-sans text-sm text-foreground placeholder-[#9fb0a7] focus:outline-none focus:border-primary"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5554] hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter toggle mobile */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 text-sm font-sans text-foreground border border-[#c8e8d8] bg-white px-4 py-2.5"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>

            {/* Filters desktop */}
            <div className="hidden md:flex items-center gap-3 flex-wrap">
              {/* Type filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="font-sans text-sm text-foreground border border-[#c8e8d8] bg-white px-3 py-2.5 focus:outline-none focus:border-primary cursor-pointer"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>
                ))}
              </select>

              {/* Price filter */}
              <select
                value={selectedPriceIdx}
                onChange={(e) => setSelectedPriceIdx(Number(e.target.value))}
                className="font-sans text-sm text-foreground border border-[#c8e8d8] bg-white px-3 py-2.5 focus:outline-none focus:border-primary cursor-pointer"
              >
                {priceRanges.map((r, i) => (
                  <option key={r.label} value={i}>{r.label}</option>
                ))}
              </select>

              {/* Reset */}
              {(search || selectedType !== 'All' || selectedPriceIdx !== 0) && (
                <button
                  onClick={() => { setSearch(''); setSelectedType('All'); setSelectedPriceIdx(0) }}
                  className="font-sans text-xs text-primary hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Count */}
            <p className="font-sans text-xs text-[#4b5554] ml-auto whitespace-nowrap">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {/* Mobile filters expanded */}
          {filtersOpen && (
            <div className="md:hidden flex flex-col gap-3 mt-3 pt-3 border-t border-[#c8e8d8]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="font-sans text-sm text-foreground border border-[#c8e8d8] bg-white px-3 py-2.5 focus:outline-none focus:border-primary w-full"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>
                ))}
              </select>
              <select
                value={selectedPriceIdx}
                onChange={(e) => setSelectedPriceIdx(Number(e.target.value))}
                className="font-sans text-sm text-foreground border border-[#c8e8d8] bg-white px-3 py-2.5 focus:outline-none focus:border-primary w-full"
              >
                {priceRanges.map((r, i) => (
                  <option key={r.label} value={i}>{r.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Property grid */}
      <section className="bg-background py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-sans text-2xl font-normal text-foreground mb-3">No properties found</p>
              <p className="font-sans text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((property) => (
                <article key={property.id} className="group flex flex-col">
                  {/* Image */}
                  <Link href={`/properties/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 bg-white px-3 py-1.5 font-sans text-[10px] font-medium text-foreground tracking-wide">
                      {property.badge}
                    </span>
                  </Link>

                  {/* Info */}
                  <div className="flex flex-col flex-1 pt-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Link href={`/properties/${property.id}`}>
                        <h2 className="font-sans text-[19px] font-normal leading-snug text-foreground group-hover:text-primary transition-colors">
                          {property.name}
                        </h2>
                      </Link>
                    </div>

                    <p className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground mb-3">
                      <MapPin size={12} strokeWidth={1.7} />
                      {property.location}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-5 mb-4">
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Bed size={13} strokeWidth={1.5} /> {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Bath size={13} strokeWidth={1.5} /> {property.baths} Baths
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Maximize2 size={12} strokeWidth={1.5} /> {property.sqft.toLocaleString()} sqft
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="font-sans text-[17px] font-semibold text-primary leading-none">{property.price}</p>
                        <p className="font-sans text-xs text-muted-foreground mt-1">{property.type}</p>
                      </div>
                      <Link
                        href={`/properties/${property.id}`}
                        className="flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground border border-border px-4 py-2 transition-colors hover:bg-dark hover:text-white hover:border-dark"
                      >
                        View Details <ArrowRight size={13} strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
