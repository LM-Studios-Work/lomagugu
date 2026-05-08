'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CalendarDays, Clock, User, Mail, Phone, MessageSquare, CheckCircle2, Home, Video, MapPin } from 'lucide-react'
import { properties } from '@/lib/properties'

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

const viewingTypes = [
  { id: 'in-person', label: 'In-Person Tour', icon: Home, description: 'Visit the property with one of our agents.' },
  { id: 'virtual', label: 'Virtual Tour', icon: Video, description: 'Explore via live video call from anywhere.' },
]

function getTodayStr() {
  return new Date().toISOString().split('T')[0]
}

function BookViewingForm() {
  const searchParams = useSearchParams()
  const preselectedId = searchParams.get('property')

  const [submitted, setSubmitted] = useState(false)
  const [viewingType, setViewingType] = useState('in-person')
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <CheckCircle2 size={56} strokeWidth={1.2} className="text-primary mb-6" />
        <h2 className="font-sans text-3xl font-normal text-foreground mb-3">Viewing Confirmed</h2>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-[420px] mb-8">
          Thank you, <strong>{form.name}</strong>. Your {viewingType === 'virtual' ? 'virtual' : 'in-person'} viewing for{' '}
          <strong>{selectedProperty?.name ?? 'the selected property'}</strong> has been requested. One of our agents will reach out to confirm within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ property: '', date: '', name: '', email: '', phone: '', notes: '' }); setSelectedTime('') }}
          className="font-sans text-sm font-medium bg-primary text-white px-6 py-3 hover:bg-accent transition-colors"
        >
          Book Another Viewing
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 xl:gap-16 py-16 px-6 md:px-10 lg:px-16">

      {/* Left — info panel */}
      <aside className="flex flex-col gap-8">
        <div>
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-sans text-2xl font-normal text-foreground leading-snug mb-4">Schedule Your Property Viewing</h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            Choose a property, select your preferred viewing type and time slot, then fill in your contact details. Our team will confirm your appointment within 24 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-5">
          {[
            { step: '01', label: 'Select a property', icon: Home },
            { step: '02', label: 'Choose date & time', icon: CalendarDays },
            { step: '03', label: 'Confirm your details', icon: User },
          ].map(({ step, label, icon: Icon }) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e8f8f1] border border-[#c8e8d8]">
                <Icon size={17} strokeWidth={1.5} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-[10px] text-muted-foreground tracking-widest">{step}</p>
                <p className="font-sans text-sm font-medium text-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected property preview */}
        {selectedProperty && (
          <div className="border border-[#c8e8d8] bg-[#e8f8f1] p-5">
            <p className="font-sans text-xs text-muted-foreground mb-2 uppercase tracking-widest">Selected Property</p>
            <p className="font-sans text-base font-semibold text-foreground leading-tight">{selectedProperty.name}</p>
            <p className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground mt-1 mb-3">
              <MapPin size={11} strokeWidth={1.7} />{selectedProperty.location}
            </p>
            <p className="font-sans text-sm font-semibold text-primary">{selectedProperty.price}</p>
          </div>
        )}
      </aside>

      {/* Right — form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">

        {/* Step 1 — Viewing type */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Viewing Type</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {viewingTypes.map(({ id, label, icon: Icon, description }) => (
              <button
                key={id}
                type="button"
                onClick={() => setViewingType(id)}
                className={`flex items-start gap-4 border p-5 text-left transition-colors ${
                  viewingType === id
                    ? 'border-primary bg-[#e8f8f1]'
                    : 'border-border bg-background hover:border-muted-foreground'
                }`}
              >
                <Icon size={20} strokeWidth={1.4} className={viewingType === id ? 'text-primary mt-0.5 shrink-0' : 'text-muted-foreground mt-0.5 shrink-0'} />
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{label}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">{description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Property select */}
        <div>
          <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-4">Select Property</label>
          <div className="relative">
            <Home size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              required
              value={form.property}
              onChange={(e) => setForm((f) => ({ ...f, property: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
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

        {/* Step 3 — Date & time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-3">Preferred Date</label>
            <div className="relative">
              <CalendarDays size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="date"
                required
                min={getTodayStr()}
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-3">Preferred Time</label>
            <div className="relative">
              <Clock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <select
                required
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
              >
                <option value="">Select a time...</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 4 — Contact */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Your Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div className="relative">
              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div className="relative">
              <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="relative mb-5">
            <Mail size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div className="relative">
            <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
            <textarea
              placeholder="Any questions or special requirements? (optional)"
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-sans text-sm font-semibold py-4 hover:bg-accent transition-colors"
        >
          Request Viewing
        </button>
      </form>
    </div>
  )
}

export default function BookViewingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-14 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">Schedule a Visit</p>
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl leading-[1.05] text-balance max-w-[580px] mb-4">
            Book a Property Viewing
          </h1>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-[480px]">
            Choose in-person or virtual — our agents are available six days a week to guide you through your next home.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-background">
        <Suspense>
          <BookViewingForm />
        </Suspense>
      </section>
    </>
  )
}
