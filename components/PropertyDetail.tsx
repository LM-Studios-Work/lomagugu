'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin, Bed, Bath, Maximize2, ChevronLeft, ChevronRight,
  Check, Phone, Mail, ArrowLeft, CalendarDays
} from 'lucide-react'
import type { Property } from '@/lib/properties'

interface Props {
  property: Property
}

export default function PropertyDetail({ property }: Props) {
  const [activeImg, setActiveImg] = useState(0)

  const prev = () => setActiveImg((i) => (i === 0 ? property.images.length - 1 : i - 1))
  const next = () => setActiveImg((i) => (i === property.images.length - 1 ? 0 : i + 1))

  return (
    <>
      {/* Back link */}
      <div className="bg-dark pt-28 pb-6 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 font-sans text-xs text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> Back to Property List
          </Link>
        </div>
      </div>

      {/* Image gallery */}
      <section className="bg-dark pb-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-3">
            <Image
              src={property.images[activeImg]}
              alt={`${property.name} — photo ${activeImg + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Badge */}
            <span className="absolute left-4 top-4 bg-white px-4 py-2 font-sans text-xs font-medium text-foreground tracking-wide">
              {property.badge}
            </span>
            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-black/40 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-black/40 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
            {/* Counter */}
            <span className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 font-sans text-xs text-white">
              {activeImg + 1} / {property.images.length}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative h-16 flex-1 overflow-hidden border-2 transition-colors ${
                  i === activeImg ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-90'
                }`}
                aria-label={`View photo ${i + 1}`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="20vw" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-14 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 xl:gap-16">

            {/* Left column */}
            <div>
              {/* Header */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h1 className="font-sans text-[32px] md:text-[40px] font-normal leading-[1.1] text-foreground">
                    {property.name}
                  </h1>
                  <p className="font-sans text-[28px] md:text-[32px] font-semibold text-primary leading-none whitespace-nowrap">
                    {property.price}
                  </p>
                </div>
                <p className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
                  <MapPin size={14} strokeWidth={1.7} />
                  {property.location}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Bed, label: 'Bedrooms', value: property.beds },
                  { icon: Bath, label: 'Bathrooms', value: property.baths },
                  { icon: Maximize2, label: 'Square Feet', value: `${property.sqft.toLocaleString()} sqft` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex flex-col items-center justify-center bg-muted py-6 gap-3">
                    <Icon size={22} strokeWidth={1.5} className="text-primary" />
                    <div className="text-center">
                      <p className="font-sans text-xl font-semibold text-foreground leading-none">{value}</p>
                      <p className="font-sans text-xs text-muted-foreground mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="font-sans text-lg font-semibold text-foreground mb-4">About This Property</h2>
                <p className="font-sans text-[15px] leading-relaxed text-[#444444]">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-sans text-lg font-semibold text-foreground mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-sans text-sm text-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-primary text-white">
                        <Check size={11} strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column — Agent & CTA */}
            <div className="flex flex-col gap-5">
              {/* Agent card */}
              <div className="border border-border p-7">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-5">Listed by</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full shrink-0">
                    <Image
                      src={property.agent.avatar}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-base font-semibold text-foreground leading-tight">{property.agent.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{property.agent.title}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 font-sans text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={14} strokeWidth={1.5} className="text-primary shrink-0" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 font-sans text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={14} strokeWidth={1.5} className="text-primary shrink-0" />
                    {property.agent.email}
                  </a>
                </div>
                <a
                  href={`mailto:${property.agent.email}?subject=Enquiry about ${encodeURIComponent(property.name)}`}
                  className="w-full flex items-center justify-center gap-2 bg-dark text-white font-sans text-sm font-medium py-3 hover:bg-primary transition-colors"
                >
                  Send Enquiry
                </a>
              </div>

              {/* Book viewing CTA */}
              <div className="bg-[#e8f8f1] border border-[#c8e8d8] p-7">
                <CalendarDays size={28} strokeWidth={1.4} className="text-primary mb-4" />
                <p className="font-sans text-base font-semibold text-foreground mb-2">Book a Viewing</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                  Schedule an in-person or virtual tour of this property with one of our specialists.
                </p>
                <Link
                  href={`/book-viewing?property=${property.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-sans text-sm font-medium py-3 hover:bg-accent transition-colors"
                >
                  Book a Viewing
                </Link>
              </div>

              {/* Type tag */}
              <div className="border border-border p-5 flex items-center justify-between">
                <span className="font-sans text-sm text-muted-foreground">Property Type</span>
                <span className="font-sans text-sm font-medium text-foreground">{property.type}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
