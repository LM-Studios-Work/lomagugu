'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, User, MessageSquare, ArrowRight, Check } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80'

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
      {/* ── Hero ── */}
      <section className="relative min-h-[580px] md:min-h-[560px] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,20,15,0.40) 0%, rgba(10,20,15,0.68) 50%, rgba(10,20,15,0.90) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-[56px] pb-14 pt-36">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">
                Get In Touch
              </p>
              <h1 className="font-sans font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-[640px]">
                We&apos;d Love to Hear<br />From You.
              </h1>
            </div>
            <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed max-w-[380px] md:text-right md:mb-1">
              Buying, selling, or simply exploring — our global specialists are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Info tiles (About.tsx card pattern) ── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] pt-14 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
            {[
              {
                icon: MapPin,
                label: 'Headquarters',
                value: '76 St. Commonwealth Blvd\nQueens, NY 10001, US',
                dark: false,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+1 (212) 555-0191',
                dark: false,
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'hello@dwella.com',
                dark: true,
              },
              {
                icon: Clock,
                label: 'Office Hours',
                value: 'Mon – Sat\n9:00 AM – 6:00 PM',
                dark: false,
              },
            ].map(({ icon: Icon, label, value, dark }) => (
              <div
                key={label}
                className={`px-6 py-8 flex flex-col justify-between min-h-[180px] ${
                  dark ? 'bg-[#000000]' : 'bg-[#f7f7f7]'
                }`}
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className={`mb-6 ${dark ? 'text-white' : 'text-foreground'}`}
                />
                <div>
                  <p
                    className={`font-sans text-xs uppercase tracking-widest mb-2 ${
                      dark ? 'text-white/40' : 'text-muted-foreground'
                    }`}
                  >
                    {label}
                  </p>
                  <p
                    className={`font-sans text-base font-normal leading-snug whitespace-pre-line ${
                      dark ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone accent strip ── */}
      <section className="bg-primary px-6 md:px-10 lg:px-[56px] py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-2">
              Prefer to speak directly?
            </p>
            <p className="font-sans text-white font-bold text-3xl md:text-4xl leading-none tracking-tight">
              +1 (212) 555-0191
            </p>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <p className="font-sans text-sm text-white/75 leading-relaxed">
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
            <a
              href="tel:+12125550191"
              className="inline-flex items-center gap-2.5 border border-white/30 text-white font-sans text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors mt-2 md:self-end"
            >
              <Phone size={14} strokeWidth={1.5} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 xl:gap-20">

          {/* Left label column */}
          <aside>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-3">
              Send a Message
            </p>
            <h2 className="font-sans text-[32px] md:text-[38px] font-normal text-foreground leading-[1.15] text-balance mb-6">
              Tell Us What You&apos;re Looking For.
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              Fill in the form and one of our advisors will respond within one business day.
            </p>

            {/* Decorative stat block */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f7f7f7] px-6 py-5">
                <p className="font-sans text-3xl font-bold text-foreground leading-none mb-1">
                  &lt; 24h
                </p>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
                  Average response time
                </p>
              </div>
              <div className="bg-[#000000] px-6 py-5">
                <p className="font-sans text-3xl font-bold text-white leading-none mb-1">
                  6 days
                </p>
                <p className="font-sans text-xs text-white/45 uppercase tracking-widest">
                  Per week, we&apos;re here
                </p>
              </div>
            </div>
          </aside>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center py-16">
                <div className="inline-flex h-14 w-14 items-center justify-center bg-primary mb-8">
                  <Check size={24} strokeWidth={1.5} className="text-white" />
                </div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Received
                </p>
                <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-[1.05] text-balance mb-5">
                  Message Sent.
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-[400px] mb-10">
                  Thank you, <span className="text-foreground font-semibold">{form.name}</span>. We&apos;ve received your message and will get back to you within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
                  }}
                  className="inline-flex items-center gap-2.5 bg-primary text-white font-sans text-sm font-semibold px-7 py-3.5 hover:bg-accent transition-colors"
                >
                  Send Another Message <ArrowRight size={14} strokeWidth={1.75} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                {/* Name + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                      Phone <span className="normal-case text-muted-foreground/60">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (___) ___-____"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground"
                  />
                </div>

                {/* Subject — pill buttons */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-5">
                    Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, subject: s }))}
                        className={`font-sans text-xs px-4 py-2.5 border transition-colors ${
                          form.subject === s
                            ? 'bg-foreground text-background border-foreground'
                            : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {/* Hidden required input for subject */}
                  <input
                    type="text"
                    required
                    readOnly
                    value={form.subject}
                    className="sr-only"
                    tabIndex={-1}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Tell us what you have in mind..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={5}
                    className="w-full border-b border-border bg-transparent font-sans text-base text-foreground placeholder-muted-foreground pb-3 focus:outline-none focus:border-foreground resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2 border-t border-border">
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[320px]">
                    By submitting you agree to our Privacy Policy. We will never share your data with third parties.
                  </p>
                  <button
                    type="submit"
                    className="shrink-0 flex items-center gap-3 bg-primary text-white font-sans text-sm font-semibold px-8 py-4 hover:bg-accent transition-colors"
                  >
                    Send Message <ArrowRight size={15} strokeWidth={1.75} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Bottom banner with photo ── */}
      <section className="relative overflow-hidden min-h-[260px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80')`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(1,1,1,0.72)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-[56px] py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs text-white/45 uppercase tracking-widest mb-3">
              Ready to Take the Next Step?
            </p>
            <h3 className="font-sans font-bold text-white text-3xl md:text-4xl leading-[1.05] text-balance">
              Schedule a Viewing Today.
            </h3>
          </div>
          <a
            href="/book-viewing"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-sans text-sm font-semibold px-7 py-4 hover:bg-accent transition-colors whitespace-nowrap"
          >
            Book a Viewing <ArrowRight size={15} strokeWidth={1.75} />
          </a>
        </div>
      </section>
    </>
  )
}
