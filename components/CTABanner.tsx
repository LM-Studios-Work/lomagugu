import { ArrowRight } from 'lucide-react'

const CTA_BG = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1600&q=80'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${CTA_BG}')` }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/80" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Heading */}
          <h2 className="font-sans font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight text-balance max-w-sm">
            Ready to Own Your Dream Property
          </h2>

          {/* Right */}
          <div className="md:max-w-sm">
            <p className="font-sans text-white/60 text-sm leading-relaxed mb-6">
              Encourage users to take the next step, whether it&apos;s contacting a real
              estate agent, signing up for a property alert, or scheduling a virtual tour.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-sans font-medium px-6 py-3 hover:bg-accent transition-colors"
            >
              Get Started <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
