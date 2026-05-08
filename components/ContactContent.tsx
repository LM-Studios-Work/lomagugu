'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, User, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

const officeInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '76 St. Commonwealth Blvd, Queens\nNY 10001, United States',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555-0191',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@dwella.com',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed',
  },
]

const subjects = [
  'General Enquiry',
  'Property Purchase',
  'Property Sale',
  'Book a Viewing',
  'Investment Advice',
  'Other',
]

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-14 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl leading-[1.05] text-balance max-w-[600px] mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-[480px]">
            Whether you&apos;re buying, selling, or simply exploring — our team of global real estate specialists is here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 xl:gap-16">

          {/* Left — office info */}
          <aside>
            <div className="flex flex-col gap-8 mb-10">
              {officeInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e8f8f1] border border-[#c8e8d8]">
                    <Icon size={17} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                    <p className="font-sans text-sm text-foreground leading-relaxed whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="relative w-full aspect-[4/3] overflow-hidden bg-[#e8f8f1] border border-[#c8e8d8] flex flex-col items-center justify-center gap-3"
            >
              <MapPin size={32} strokeWidth={1.2} className="text-primary" />
              <p className="font-sans text-sm text-muted-foreground text-center px-6">
                76 St. Commonwealth Blvd<br />Queens, NY 10001
              </p>
            </div>
          </aside>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2 size={56} strokeWidth={1.2} className="text-primary mb-6" />
                <h2 className="font-sans text-3xl font-normal text-foreground mb-3">Message Sent</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-[380px] mb-8">
                  Thank you, <strong>{form.name}</strong>. We&apos;ve received your message and will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="font-sans text-sm font-medium bg-primary text-white px-6 py-3 hover:bg-accent transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-5">Your Details</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
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
                    {/* Phone */}
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative mb-5">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>

                  {/* Subject */}
                  <div className="relative mb-5">
                    <MessageSquare size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      required
                      placeholder="Your message..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      rows={6}
                      className="w-full px-4 py-3 border border-border bg-background font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-sans text-xs text-muted-foreground max-w-[340px] leading-relaxed">
                    By submitting this form you agree to our Privacy Policy. We will never share your data with third parties.
                  </p>
                  <button
                    type="submit"
                    className="shrink-0 flex items-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 hover:bg-accent transition-colors"
                  >
                    Send Message <ArrowRight size={15} strokeWidth={1.75} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section className="bg-dark py-14 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-sans text-xl font-normal text-white mb-2">Prefer to speak directly?</h3>
            <p className="font-sans text-sm text-white/60">Our agents are available Monday to Saturday, 9 AM – 6 PM.</p>
          </div>
          <a
            href="tel:+12125550191"
            className="flex items-center gap-2 bg-primary text-white font-sans text-sm font-medium px-6 py-3 hover:bg-accent transition-colors whitespace-nowrap"
          >
            <Phone size={15} strokeWidth={1.5} /> Call Us Now
          </a>
        </div>
      </section>
    </>
  )
}
