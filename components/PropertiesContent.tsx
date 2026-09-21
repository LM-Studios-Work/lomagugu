'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
} from 'lucide-react'
import { Property } from '@/lib/properties'
import PropertyDetailsModal from './PropertyDetailsModal'
import SearchSelect from './SearchSelect'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=85'

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under R1.5M', min: 0, max: 1500000 },
  { label: 'R1.5M - R3M', min: 1500000, max: 3000000 },
  { label: 'R3M - R10M', min: 3000000, max: 10000000 },
  { label: 'Over R10M', min: 10000000, max: Infinity },
]

interface PropertiesContentProps {
  searchParams?: Record<string, string | string[] | undefined>
  initialProperties?: Property[]
}

function parsePrice(price: string): number | null {
  const digits = price.replace(/[^0-9]/g, '')
  if (!digits) {
    return null
  }

  const numericPrice = Number(digits)
  return Number.isFinite(numericPrice) ? numericPrice : null
}

function getPriceIndex(label: string | null): number {
  if (!label) {
    return 0
  }

  const index = priceRanges.findIndex((range) => range.label === label)
  return index >= 0 ? index : 0
}

export default function PropertiesContent({ searchParams, initialProperties = [] }: PropertiesContentProps) {
  const propertyTypes = useMemo(() => Array.from(new Set(['All Types', ...initialProperties.map((p) => p.type)])), [initialProperties])
  const propertyAreas = useMemo(() => Array.from(new Set(['All Areas', ...initialProperties.map((p) => p.location)])), [initialProperties])
  const pathname = usePathname()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0)
  const [selectedArea, setSelectedArea] = useState('All Areas')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  useEffect(() => {
    const searchValue = searchParams?.search
    const typeValue = searchParams?.type
    const priceValue = searchParams?.price
    const areaValue = searchParams?.area

    setSearch(Array.isArray(searchValue) ? searchValue[0] ?? '' : searchValue ?? '')
    setSelectedType(
      Array.isArray(typeValue) ? typeValue[0] ?? 'All Types' : typeValue ?? 'All Types'
    )
    setSelectedPriceIdx(
      getPriceIndex(Array.isArray(priceValue) ? priceValue[0] ?? null : priceValue ?? null)
    )
    setSelectedArea(
      Array.isArray(areaValue) ? areaValue[0] ?? 'All Areas' : areaValue ?? 'All Areas'
    )
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()

    if (search) {
      params.set('search', search)
    }

    if (selectedType !== 'All Types') {
      params.set('type', selectedType)
    }

    if (selectedPriceIdx !== 0) {
      params.set('price', priceRanges[selectedPriceIdx].label)
    }

    if (selectedArea !== 'All Areas') {
      params.set('area', selectedArea)
    }

    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }, [pathname, router, search, selectedArea, selectedPriceIdx, selectedType])

  const filtered = useMemo(() => {
    const range = priceRanges[selectedPriceIdx]
    const normalizedSearch = search.trim().toLowerCase()

    return initialProperties.filter((property) => {
      const matchesSearch =
        !normalizedSearch ||
        property.name.toLowerCase().includes(normalizedSearch) ||
        property.location.toLowerCase().includes(normalizedSearch) ||
        property.type.toLowerCase().includes(normalizedSearch)
      const matchesType = selectedType === 'All Types' || property.type === selectedType
      const matchesArea = selectedArea === 'All Areas' || property.location === selectedArea
      const numericPrice = parsePrice(property.price)
      const matchesPrice =
        selectedPriceIdx === 0 ||
        (numericPrice !== null && numericPrice >= range.min && numericPrice <= range.max)

      return matchesSearch && matchesType && matchesArea && matchesPrice
    })
  }, [search, selectedArea, selectedPriceIdx, selectedType])

  const resetFilters = () => {
    setSearch('')
    setSelectedType('All Types')
    setSelectedPriceIdx(0)
    setSelectedArea('All Areas')
  }

  const hasActiveFilters =
    search !== '' ||
    selectedType !== 'All Types' ||
    selectedPriceIdx !== 0 ||
    selectedArea !== 'All Areas'

  return (
    <>
      <section className="relative min-h-[500px] flex flex-col justify-end overflow-hidden pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,20,15,0.40) 0%, rgba(10,20,15,0.7) 50%, rgba(10,20,15,0.95) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-[680px] mb-6">
            Find Your Perfect Property
          </h1>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-[520px]">
            Explore our curated portfolio of exceptional homes, estates and residences from
            the world&apos;s most sought-after locations.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search by name, type, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-background border border-border font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
              <div className="w-[180px]">
                <SearchSelect
                  label="Type"
                  value={selectedType}
                  options={propertyTypes}
                  onChange={setSelectedType}
                />
              </div>
              <div className="w-[180px]">
                <SearchSelect
                  label="Area"
                  value={selectedArea}
                  options={propertyAreas}
                  onChange={setSelectedArea}
                />
              </div>
              <div className="w-[180px]">
                <SearchSelect
                  label="Price"
                  value={priceRanges[selectedPriceIdx].label}
                  options={priceRanges.map((range) => range.label)}
                  onChange={(value) => setSelectedPriceIdx(getPriceIndex(value))}
                />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex h-11 items-center justify-center px-4 font-sans text-xs font-semibold text-primary hover:bg-muted transition-colors border border-transparent mt-[22px]"
                >
                  Reset
                </button>
              )}
            </div>

            <button
              onClick={() => setFiltersOpen((open) => !open)}
              className="md:hidden flex items-center gap-2 text-sm font-sans text-foreground border border-border bg-white px-4 py-2.5 w-full justify-center"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>

            <p className="font-sans text-xs text-muted-foreground whitespace-nowrap hidden lg:block ml-2">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {filtersOpen && (
            <div className="md:hidden flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <SearchSelect
                label="Type"
                value={selectedType}
                options={propertyTypes}
                onChange={setSelectedType}
              />
              <SearchSelect
                label="Area"
                value={selectedArea}
                options={propertyAreas}
                onChange={setSelectedArea}
              />
              <SearchSelect
                label="Price"
                value={priceRanges[selectedPriceIdx].label}
                options={priceRanges.map((range) => range.label)}
                onChange={(value) => setSelectedPriceIdx(getPriceIndex(value))}
              />

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="self-start font-sans text-xs text-primary hover:underline mt-2"
                >
                  Reset filters
                </button>
              )}
              
              <p className="font-sans text-xs text-muted-foreground mt-2">
                {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-background py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-sans text-2xl font-normal text-foreground mb-3">
                No properties found
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((property) => (
                <article key={property.id} className="group flex flex-col">
                  <button
                    type="button"
                    onClick={() => setSelectedProperty(property)}
                    className="block relative aspect-[4/3] overflow-hidden border-0 bg-transparent p-0"
                  >
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
                  </button>

                  <div className="flex flex-col flex-1 pt-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProperty(property)}
                        className="border-0 bg-transparent p-0 text-left"
                      >
                        <h2 className="font-sans text-[19px] font-normal leading-snug text-foreground group-hover:text-primary transition-colors">
                          {property.name}
                        </h2>
                      </button>
                    </div>

                    <p className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground mb-3">
                      <MapPin size={12} strokeWidth={1.7} />
                      {property.location}
                    </p>

                    <div className="flex items-center gap-5 mb-4">
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Bed size={13} strokeWidth={1.5} /> {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Bath size={13} strokeWidth={1.5} /> {property.baths} Baths
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Maximize2 size={12} strokeWidth={1.5} />{' '}
                        {property.sqft.toLocaleString()} sqft
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="font-sans text-[17px] font-semibold text-primary leading-none">
                          {property.price}
                        </p>
                        <p className="font-sans text-xs text-muted-foreground mt-1">
                          {property.type}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedProperty(property)}
                        className="flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground border border-border px-4 py-2 transition-colors hover:bg-dark hover:text-white hover:border-dark"
                      >
                        View Details <ArrowRight size={13} strokeWidth={1.75} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <PropertyDetailsModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  )
}
