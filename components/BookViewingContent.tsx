'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Home,
  MapPin,
  ArrowRight,
  Check,
} from 'lucide-react'
import { properties } from '@/lib/properties'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80'

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

function getTodayStr() {
  return new Date().toISOString().split('T')[0]
}

function BookViewingForm() {
  const searchParams = useSearchParams()
  const preselectedId = searchParams.get('property')

  const [submitted, setSubmitted] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [form, setForm] = useState({
    property: preselectedId || '',
    date: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  useEffect(() => {
    if (preselectedId) setForm((f) => ({ ...f, property: preselectedId }))
  }, [preselectedId])

  const selectedProperty = properties.find((p) => String(p.id) === form.property)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  /* ── Confirmation screen ── */
  if (submitted) {
    return (
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(1,1,1,0.78) 0%, rgba(1,1,1,0.88) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6 max-w-[560px]">
          <div className="inline-flex h-16 w-16 items-center justify-center border border-white/20 bg-primary mb-8">
            <Check size={28} strokeWidth={1.5} className="text-white" />
          </div>
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">
            Confirmed
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-white leading-[1.05] text-balance mb-5">
            Viewing Requested
          </h2>
          <p className="font-sans text-base text-white/65 leading-relaxed mb-10">
            Thank you, <span className="text-white font-semibold">{form.name}</span>.
            Your viewing request for{' '}
            <span className="text-white font-semibold">
              {selectedProperty?.name ?? 'the selected property'}
            </span>{' '}
            has been received. An agent will confirm within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setForm({ property: '', date: '', name: '', email: '', phone: '', notes: '' })
              setSelectedTime('')
            }}
            className="inline-flex items-center gap-2.5 border border-white/25 bg-white/10 text-white font-sans text-sm font-medium px-7 py-3.5 hover:bg-white/20 transition-colors"
          >
            Book Another Viewing <ArrowRight size={14} strokeWidth={1.75} />
          </button>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Info strip — three editorial tiles matching About.tsx ── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] pt-14 pb-0">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-sans text-[32px] md:text-[40px] font-normal text-foreground leading-[1.2] mb-10 max-w-[480px] text-balance">
            Three Steps to Your Next Home.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
            {[
              {
                step: '01',
                icon: Home,
                title: 'Select a Property',
                body: 'Choose from our curated portfolio of residential and commercial listings.',
                dark: false,
              },
              {
                step: '02',
                icon: CalendarDays,
                title: 'Choose Date & Time',
                body: 'Pick a suitable slot from our available viewing calendar.',
                dark: false,
              },
              {
                step: '03',
                icon: User,
                title: 'Confirm Your Details',
                body: 'Submit your contact information. We confirm within 24 hours.',
                dark: true,
              },
            ].map(({ step, icon: Icon, title, body, dark }) => (
              <div
                key={step}
                className={`px-6 py-8 min-h-[200px] flex flex-col justify-between ${
                  dark ? 'bg-[#000000]' : 'bg-[#f7f7f7]'
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon
                    size={36}
                    strokeWidth={1.5}
                    className={dark ? 'text-white' : 'text-foreground'}
                  />
                  <span
                    className={`font-sans text-xs tracking-widest ${
                      dark ? 'text-white/30' : 'text-muted-foreground'
                    }`}
                  >
                    {step}
                  </span>
                </div>
                <div>
                  <p
                    className={`font-sans text-xl font-normal mb-2 ${
                      dark ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {title}
                  </p>
                  <p
                    className={`font-sans text-sm leading-relaxed ${
                      dark ? 'text-white/55' : 'text-[#444444]'
                    }`}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form section ── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 xl:gap-20">

          {/* Left sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Selected property card */}
            {selectedProperty && (
              <div className="bg-[#f7f7f7] px-5 py-6">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-4">
                  Selected Property
                </p>
                <p className="font-sans text-lg font-normal text-foreground leading-snug mb-1.5">
                  {selectedProperty.name}
                </p>
                <p className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground mb-4">
                  <MapPin size={11} strokeWidth={1.7} />
                  {selectedProperty.location}
                </p>
                <p className="font-sans text-sm font-semibold text-primary">
                  {selectedProperty.price}
                </p>
              </div>
            )}
          </aside>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">

            {/* Property select */}
            <div>
              <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-5">
                Property
              </label>
              <div className="relative">
                <select
                  required
                  value={form.property}
                  onChange={(e) => setForm((f) => ({ ...f, property: e.target.value }))}
                  className="w-full border-b border-border bg-transparent font-sans text-base text-foreground pb-3 focus:outline-none focus:border-foreground appearance-none cursor-pointer"
                >
                  <option value="">Choose a property...</option>
                  {properties.map((p) => (
                    <option key={p.id} value={String(p.id)}>
                      {p.name} — {p.location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  min={getTodayStr()}
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  className="w-full border-b border-border bg-transparent font-sans text-base text-foreground pb-3 focus:outline-none focus:border-foreground"
                />
              </div>
              <div>
                <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-5">
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`font-sans text-xs py-2 px-1 border transition-colors ${
                        selectedTime === t
                          ? 'bg-foreground text-background border-foreground'
                          : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {/* Hidden input to trigger required validation on time */}
                <input
                  type="text"
                  required
                  readOnly
                  value={selectedTime}
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Contact details */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Your Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                  />
                </div>
              </div>
              <div className="mb-8">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                />
              </div>
              <div>
                <textarea
                  placeholder="Any questions or special requirements? (optional)"
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  rows={4}
                  className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2 border-t border-border">
              <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[340px]">
                By submitting you agree to our Privacy Policy. We will never share your data with third parties.
              </p>
              <button
                type="submit"
                className="shrink-0 flex items-center gap-3 bg-primary text-white font-sans text-sm font-semibold px-8 py-4 hover:bg-accent transition-colors"
              >
                Request Viewing <ArrowRight size={15} strokeWidth={1.75} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default function BookViewingContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[600px] md:min-h-[560px] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,20,15,0.42) 0%, rgba(10,20,15,0.70) 50%, rgba(10,20,15,0.90) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-[56px] pb-14 pt-36">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">
                Schedule a Visit
              </p>
              <h1 className="font-sans font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-[640px]">
                Book a Property<br />Viewing.
              </h1>
            </div>
            <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed max-w-[400px] md:text-right md:mb-1">
              Our agents are available six days a week to guide you through your next property viewing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="bg-background">
        <Suspense>
          <BookViewingForm />
        </Suspense>
      </section>
    </>
  )
}
