'use client'

import Link from 'next/link'
import {
  Home,
  Building2,
  Landmark,
  Tractor,
  Factory,
  Star,
  Users,
  ClipboardList,
  Zap,
  Tag,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=85'

const BOTTOM_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80'

/* ── Primary services ─────────────────────────────────────────────────────── */
const primaryServices = [
  {
    icon: Home,
    title: 'Residential Valuations',
    description:
      'We provide accurate market valuations for all residential property types. Whether you&apos;re selling, refinancing, or managing your estate, our comprehensive assessment accounts for property condition, location, and current market trends.',
    items: ['Single family homes', 'Townhouses & apartments', 'Residential land', 'Estate valuations'],
    dark: false,
  },
  {
    icon: Landmark,
    title: 'Municipal Valuations',
    description:
      'Navigate municipal assessment processes with confidence. We help property owners evaluate council valuations, identify discrepancies, and build compelling cases for fair assessments based on current market data.',
    items: ['Property assessment', 'Tax valuation', 'Appeals support', 'Compliance reports'],
    dark: false,
  },
  {
    icon: Building2,
    title: 'Commercial Valuations',
    description:
      'Strategic valuations designed for business decision-making. We analyse rental income, operational efficiency, and market demand to determine accurate values for offices, retail centres, warehouses, and mixed-use facilities.',
    items: ['Office buildings', 'Retail properties', 'Industrial facilities', 'Investment analysis'],
    dark: true,
  },
]

/* ── Additional services ──────────────────────────────────────────────────── */
const additionalServices = [
  {
    icon: Tractor,
    title: 'Agricultural Valuations',
    description:
      'Expert assessment of farming operations and rural land, factoring in soil quality, productivity records, infrastructure, and environmental considerations for accurate valuation.',
  },
  {
    icon: Factory,
    title: 'Industrial Valuations',
    description:
      'Detailed technical evaluations of manufacturing facilities, logistics hubs, and specialised industrial assets incorporating equipment value, operational capacity, and regulatory compliance factors.',
  },
  {
    icon: Star,
    title: 'Specialised Property Valuations',
    description:
      'Valuations for unique-use properties including hospitality venues, healthcare facilities, educational institutions, and other specialised developments requiring tailored evaluation approaches.',
  },
]

/* ── Why choose us ────────────────────────────────────────────────────────── */
const reasons = [
  {
    n: '1',
    icon: Users,
    title: 'Expert Team',
    body: 'Our valuers hold professional credentials and bring years of local market expertise. Deep understanding of regional trends ensures your valuation reflects true market conditions.',
  },
  {
    n: '2',
    icon: CheckCircle2,
    title: 'Accurate Assessments',
    body: 'Rigorous site evaluations combined with detailed market research guarantee precision. We examine comparable sales, investment metrics, and property-specific factors to deliver reliable valuations.',
  },
  {
    n: '3',
    icon: ClipboardList,
    title: 'Professional Reports',
    body: 'Comprehensive documentation prepared to institutional standards. Our reports meet requirements for financial institutions, insurers, and legal applications with complete supporting analysis.',
  },
  {
    n: '4',
    icon: Zap,
    title: 'Quick Turnaround',
    body: 'We recognise time-sensitive situations. Efficient processes ensure fast delivery of quality valuations when you need them, without sacrificing thoroughness or accuracy.',
  },
  {
    n: '5',
    icon: Tag,
    title: 'Competitive Pricing',
    body: 'Clear, upfront pricing with no surprise fees. We offer competitive rates tailored to your valuation type and complexity, ensuring excellent value for professional service.',
  },
  {
    n: '6',
    icon: HeadphonesIcon,
    title: 'Client Support',
    body: 'Responsive, knowledgeable staff available to explain findings and answer your valuation questions. We are here to ensure you understand the assessment and feel confident in the results.',
  },
]

export default function ValuationsContent() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] md:min-h-[580px] flex flex-col justify-end overflow-hidden">
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
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-[56px] pb-14 pt-36">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-4">
                Valuation Services
              </p>
              <h1 className="font-sans font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-[700px]">
                Know Exactly What<br />Your Property Is Worth.
              </h1>
            </div>
            <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed max-w-[400px] md:text-right md:mb-1">
              Licensed valuers. Unbiased assessments. Trusted by owners, investors, and institutions across the region.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why valuations matter ─────────────────────────────────────── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,560px)_minmax(0,1fr)] gap-12 xl:gap-20 items-start">
          <div>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Why It Matters
            </p>
            <h2 className="font-sans text-[36px] md:text-[44px] font-normal text-foreground leading-[1.18] text-balance mb-6">
              Why Professional Valuations Matter
            </h2>
            <p className="font-sans text-[17px] text-[#444444] leading-relaxed mb-5 max-w-[520px]">
              Understanding your property&apos;s accurate market value is essential for making informed financial decisions. At Lomagugu Properties, our team of licensed and certified valuers provides unbiased, detailed assessments that protect your interests.
            </p>
            <p className="font-sans text-[17px] text-[#444444] leading-relaxed max-w-[520px]">
              From residential needs to complex commercial evaluations, we deliver reliable valuations tailored to your specific requirements — whether for financing, taxation, insurance coverage, or dispute resolution.
            </p>
          </div>

          {/* Stat tiles */}
          <div className="flex flex-col gap-3">
            {[
              { value: '500+', label: 'Valuations completed', dark: false },
              { value: '15+', label: 'Years of market expertise', dark: false },
              { value: '100%', label: 'Certified, licensed valuers', dark: true },
            ].map(({ value, label, dark }) => (
              <div
                key={label}
                className={`px-7 py-8 flex items-center justify-between min-h-[100px] ${
                  dark ? 'bg-[#000000]' : 'bg-[#f7f7f7]'
                }`}
              >
                <p
                  className={`font-sans text-4xl font-bold leading-none ${
                    dark ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {value}
                </p>
                <p
                  className={`font-sans text-sm text-right max-w-[180px] leading-snug ${
                    dark ? 'text-white/50' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Primary services ─────────────────────────────────────────────── */}
      <section className="bg-background px-6 md:px-10 lg:px-[56px] pb-4">
        <div className="border-t border-border pt-14 mb-10">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Our Valuation Services
          </p>
          <h2 className="font-sans text-[36px] md:text-[44px] font-normal text-foreground leading-[1.18] text-balance max-w-[560px]">
            Comprehensive Valuations for Every Property Type.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-14">
          {primaryServices.map(({ icon: Icon, title, description, items, dark }) => (
            <div
              key={title}
              className={`flex flex-col justify-between px-7 py-9 min-h-[460px] ${
                dark ? 'bg-[#000000]' : 'bg-[#f7f7f7]'
              }`}
            >
              <div>
                <Icon
                  size={38}
                  strokeWidth={1.4}
                  className={`mb-8 ${dark ? 'text-white' : 'text-foreground'}`}
                />
                <p
                  className={`font-sans text-[22px] font-normal leading-snug mb-4 ${
                    dark ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {title}
                </p>
                <p
                  className={`font-sans text-sm leading-relaxed mb-7 ${
                    dark ? 'text-white/55' : 'text-[#555555]'
                  }`}
                >
                  {description.replace(/&apos;/g, "'")}
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2.5 font-sans text-xs ${
                        dark ? 'text-white/60' : 'text-muted-foreground'
                      }`}
                    >
                      <span
                        className={`inline-block w-1 h-1 rounded-full shrink-0 ${
                          dark ? 'bg-white/40' : 'bg-primary'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2.5 font-sans text-xs font-semibold tracking-widest uppercase border px-5 py-3 transition-colors w-fit ${
                  dark
                    ? 'border-white/30 text-white hover:bg-white/10'
                    : 'border-foreground/30 text-foreground hover:border-foreground'
                }`}
              >
                Get Valuation <ArrowRight size={12} strokeWidth={1.75} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Additional services ───────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] px-6 md:px-10 lg:px-[56px] py-14">
        <div className="mb-10">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Additional Services
          </p>
          <h2 className="font-sans text-[32px] md:text-[38px] font-normal text-foreground leading-[1.2] text-balance max-w-[480px]">
            Beyond the Standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {additionalServices.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-background px-7 py-8 min-h-[240px] flex flex-col justify-between">
              <div>
                <Icon
                  size={32}
                  strokeWidth={1.4}
                  className="mb-6 text-foreground"
                />
                <p className="font-sans text-[19px] font-normal text-foreground leading-snug mb-3">
                  {title}
                </p>
                <p className="font-sans text-sm text-[#555555] leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}
      <section className="bg-[#000000] px-6 md:px-10 lg:px-[56px] py-16">
        <div className="mb-12">
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="font-sans text-[36px] md:text-[44px] font-normal text-white leading-[1.18] text-balance max-w-[540px]">
            Why Choose Lomagugu Properties for Valuations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map(({ n, icon: Icon, title, body }) => (
            <div key={n} className="border border-white/10 px-7 py-8 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-start justify-between mb-6">
                <Icon size={28} strokeWidth={1.4} className="text-primary" />
                <span className="font-sans text-xs text-white/25 tracking-widest">{n.padStart(2, '0')}</span>
              </div>
              <div>
                <p className="font-sans text-[18px] font-normal text-white leading-snug mb-2">
                  {title}
                </p>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA banner ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[280px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${BOTTOM_IMAGE}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(1,1,1,0.74)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-[56px] py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs text-white/45 uppercase tracking-widest mb-3">
              Ready to Get Started?
            </p>
            <h3 className="font-sans font-bold text-white text-3xl md:text-4xl leading-[1.05] text-balance">
              Request a Professional Valuation.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-sans text-sm font-semibold px-7 py-4 hover:bg-accent transition-colors whitespace-nowrap"
          >
            Get Valuation <ArrowRight size={15} strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </>
  )
}
