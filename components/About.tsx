import { Globe, Anchor, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access properties in diverse markets worldwide.',
    dark: false,
  },
  {
    icon: Anchor,
    title: 'Personalized Service',
    description: 'Get solutions for your unique needs.',
    dark: false,
  },
  {
    icon: RefreshCw,
    title: 'Transparent Processes',
    description: 'Stay informed throughout the entire process.',
    dark: true,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left */}
          <div className="flex-1 max-w-md">
            <p className="text-xs font-sans text-muted-foreground mb-4 tracking-wide">
              About Us
            </p>
            <h2 className="font-sans font-bold text-foreground text-3xl md:text-4xl leading-tight text-balance mb-5">
              Your Global Real Estate Partner.
            </h2>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Dwella is your gateway to a world of real estate opportunities. With a
              global network of trusted partners, we&apos;re dedicated to connecting buyers
              and sellers across borders.
            </p>
          </div>

          {/* Right – feature cards */}
          <div className="flex-1 flex flex-col gap-3">
            {features.map(({ icon: Icon, title, description, dark }) => (
              <div
                key={title}
                className={`flex items-start gap-4 px-5 py-4 rounded ${
                  dark
                    ? 'bg-dark text-dark-foreground'
                    : 'border border-border bg-card text-card-foreground'
                }`}
              >
                <div
                  className={`mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center rounded-sm ${
                    dark ? 'bg-white/10' : 'bg-muted'
                  }`}
                >
                  <Icon
                    size={16}
                    className={dark ? 'text-white' : 'text-foreground'}
                  />
                </div>
                <div>
                  <p
                    className={`font-sans font-semibold text-sm mb-0.5 ${
                      dark ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {title}
                  </p>
                  <p
                    className={`font-sans text-xs leading-relaxed ${
                      dark ? 'text-white/60' : 'text-muted-foreground'
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
