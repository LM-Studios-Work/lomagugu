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

      <div className="relative z-10 mx-auto max-w-[880px] px-6 py-14 md:px-0 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Heading */}
          <h2 className="font-sans font-bold text-white text-3xl md:max-w-[390px] md:text-[40px] md:leading-[1.18] lg:text-[42px] text-balance">
            Ready to Own Your Dream Property
          </h2>

          {/* Right */}
          <div className="md:max-w-[390px] md:pt-1">
            <p className="font-sans text-sm leading-snug text-white/70 mb-5">
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
