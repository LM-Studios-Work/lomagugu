import Image from 'next/image'
import Link from 'next/link'

const HOUSE_IMG = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80'

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Valuations', href: '/valuations' },
  { label: 'Book Viewing', href: '/book-viewing' },
  { label: 'Contact', href: '/contact' },
]

const supportLinks = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Property Valuations', href: '/valuations' },
  { label: 'Schedule a Viewing', href: '/book-viewing' },
  { label: 'Get in Touch', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">
              Lomagugu Properties
            </p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[250px]">
              South African property guidance for buyers, sellers, landlords, and investors.
            </p>
          </div>

          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Explore</p>
            <ul className="flex flex-col gap-2">
              {mainLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Services</p>
            <ul className="flex flex-col gap-2 mb-6">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="font-sans not-italic text-xs text-muted-foreground leading-relaxed">
              Tyger Valley Office Park, Silverlakes, Pretoria
              <br />
              <a href="tel:+27111234567" className="hover:text-foreground transition-colors">
                +27 11 123 4567
              </a>
              <br />
              <a
                href="mailto:Admin@lomaguguproperties.co.za"
                className="hover:text-foreground transition-colors"
              >
                Admin@lomaguguproperties.co.za
              </a>
            </address>
          </div>

          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Visit Us</p>
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden mb-4">
              <Image
                src={HOUSE_IMG}
                alt="Lomagugu Properties"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <Link
              href="/contact"
              className="font-sans text-xs text-foreground hover:text-primary transition-colors"
            >
              View office location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
