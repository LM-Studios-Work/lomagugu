'use client'

import { useEffect, useId } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Bath,
  Bed,
  CalendarDays,
  Check,
  Home,
  Mail,
  MapPin,
  TrendingUp,
  X,
} from 'lucide-react'
import type { Property } from '@/lib/properties'

interface PropertyDetailsModalProps {
  property: Property | null
  onClose: () => void
}

export default function PropertyDetailsModal({ property, onClose }: PropertyDetailsModalProps) {
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!property) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, property])

  if (!property) {
    return null
  }

  const hasInvestmentDetails =
    Boolean(property.investmentSnapshot?.length) || Boolean(property.whyInvestHere?.length)
  const title = property.headline ? `${property.name} | ${property.headline}` : property.name

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 px-0 pt-10 backdrop-blur-[2px] md:items-center md:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[1120px] overflow-y-auto bg-background shadow-2xl md:max-h-[88vh]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-white text-foreground transition-colors hover:bg-primary hover:text-white"
          aria-label="Close property details"
        >
          <X size={18} strokeWidth={1.7} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-dark md:min-h-[420px] lg:sticky lg:top-0 lg:h-[88vh]">
            <Image
              src={property.images[0] ?? property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <span className="mb-4 inline-flex bg-white px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
                {property.badge}
              </span>
              <h2
                id={titleId}
                className="max-w-[620px] font-sans text-[34px] font-semibold leading-[1.02] text-white md:text-[44px]"
              >
                {title}
              </h2>
              <p className="mt-4 flex items-start gap-2 font-sans text-sm leading-snug text-white/75">
                <MapPin size={15} strokeWidth={1.7} className="mt-[1px] shrink-0" />
                {property.location}
              </p>
            </div>
          </div>

          <div className="px-6 py-7 md:px-8 md:py-9 lg:px-10">
            <div className="border-b border-border pb-7">
              <p className="font-sans text-[32px] font-semibold leading-none text-primary">
                {property.price}
              </p>
              <div className="mt-6 grid grid-cols-3 border border-border bg-muted">
                {[
                  { icon: Bed, label: 'Bedrooms', value: property.beds },
                  { icon: Bath, label: 'Bathrooms', value: property.baths },
                  { icon: Home, label: 'Type', value: property.type },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex min-h-[94px] flex-col justify-center gap-2 border-r border-border px-4 last:border-r-0"
                  >
                    <Icon size={18} strokeWidth={1.6} className="text-primary" />
                    <div>
                      <p className="font-sans text-[15px] font-semibold leading-tight text-foreground">
                        {value}
                      </p>
                      <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-border py-7">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Property Detail
              </p>
              <p
                id={descriptionId}
                className="font-sans text-[14px] leading-[1.75] text-[#3f3f3f]"
              >
                {property.description}
              </p>
            </div>

            <div className="border-b border-border py-7">
              <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Amenities
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 bg-[#e8f8f1] px-4 py-3 font-sans text-sm text-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-primary text-white">
                      <Check size={11} strokeWidth={2.6} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {hasInvestmentDetails && (
              <div className="border-b border-border py-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-dark text-white">
                    <TrendingUp size={17} strokeWidth={1.6} />
                  </span>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Investment Snapshot
                  </p>
                </div>

                {property.investmentSnapshot && (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {property.investmentSnapshot.map((item) => (
                      <div key={item.label} className="border border-border px-4 py-4">
                        <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 font-sans text-[17px] font-semibold leading-snug text-foreground">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {property.whyInvestHere && (
                  <div className="mt-6 bg-dark p-5 text-white">
                    <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      Why Invest Here
                    </p>
                    <ul className="grid grid-cols-1 gap-3">
                      {property.whyInvestHere.map((reason) => (
                        <li key={reason} className="flex gap-3 font-sans text-sm text-white/80">
                          <Check size={14} strokeWidth={2} className="mt-[2px] shrink-0 text-[#8fd3ad]" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 gap-3 pt-7 sm:grid-cols-2">
              <Link
                href={`/book-viewing?property=${property.id}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-primary px-5 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                <CalendarDays size={16} strokeWidth={1.7} />
                Book Viewing
              </Link>
              <a
                href={`mailto:${property.agent.email}?subject=Enquiry about ${encodeURIComponent(property.name)}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-border px-5 py-3 font-sans text-sm font-semibold text-foreground transition-colors hover:border-dark hover:bg-dark hover:text-white"
              >
                <Mail size={16} strokeWidth={1.7} />
                Send Enquiry
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
