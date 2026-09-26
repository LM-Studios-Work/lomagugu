import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export const metadata = {
  title: 'About Us - Lomagugu Properties',
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex flex-col justify-end overflow-hidden pt-36 pb-20">
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
            Who We Are
          </p>
          <h1 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-[680px] mb-6">
            About Lomagugu Properties
          </h1>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-[520px]">
            We don't simply deal with property. We create opportunities, develop spaces and build lasting value.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6 text-[#444444] font-sans">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Lomagugu Properties (Pty) Ltd</strong> is a proudly South African, Black woman-owned property company built around one simple belief: property is more than bricks and buildings — it is an opportunity to create value, build communities and transform lives.
              </p>
              
              <p className="text-lg leading-relaxed">
                We provide integrated property solutions across the property lifecycle, supporting clients from identifying an opportunity through to development, investment, occupation and ongoing property management.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our business brings together property advisory, property development, valuations, sales and rentals, construction and project management, asset and facilities management, refurbishments, feasibility studies and property investment support. This allows us to work with homeowners, investors, developers, businesses and institutions looking for practical, professional property solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                At Lomagugu, we focus on understanding the property, the investment objective and the people behind it. Whether we are helping a client acquire or dispose of a property, assess its value, develop a site, manage an asset or improve an existing building, our objective is to create long-term and sustainable value.
              </p>

              <div className="pt-8 pb-4">
                <h2 className="text-3xl font-sans text-foreground mb-6">What Lomagugu Stands For</h2>
                <div className="flex flex-wrap gap-3">
                  {['Integrity', 'Professionalism', 'Value Creation', 'Development', 'Impact'].map((value) => (
                    <span key={value} className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                We aspire to build a property business that connects property expertise with investment thinking and development execution — creating opportunities not only for our clients, but also for communities and emerging professionals.
              </p>
              
              <div className="bg-[#f7f7f7] border-l-4 border-primary p-8 my-10 rounded-r-lg">
                <h3 className="text-xl font-sans text-foreground mb-4 uppercase tracking-wide">Our Promise</h3>
                <p className="text-2xl font-serif italic text-foreground leading-snug">
                  “We don't simply deal with property. We create opportunities, develop spaces and build lasting value.”
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                This positioning also fits well with the broader South African property-services model, where companies increasingly combine sales, rentals, development, management and advisory capabilities rather than operating only as traditional estate agencies.
              </p>
            </div>

            {/* Image & Team Section */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="relative aspect-[3/4] w-full mx-auto overflow-hidden rounded-xl shadow-xl">
                {/* Using a placeholder. Ask the user to save the provided image as public/mbali.png */}
                <Image 
                  src="/mbali.png" 
                  alt="Mbali Malunga - Operations Manager"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center md:text-left bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-2xl font-sans text-foreground font-semibold">Mbali Malunga</h3>
                <p className="text-primary font-medium mt-2 uppercase tracking-wider text-sm">Operations Manager</p>
                <div className="mt-6 flex flex-col gap-3 text-[#444444]">
                  <a href="tel:0780636941" className="inline-flex items-center gap-3 hover:text-primary transition-colors">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Phone size={18} />
                    </span>
                    <span className="font-medium">078 063 6941</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
