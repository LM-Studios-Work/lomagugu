import Image from 'next/image'

const HOUSE_IMG = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Menu */}
          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Menu</p>
            <ul className="flex flex-col gap-2">
              {['Home', 'About Us', 'Property List', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Team</p>
            <ul className="flex flex-col gap-2">
              {['Team', 'Careers', 'Privacy Policies', 'Partner Agreement'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top + address + social */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans font-semibold text-foreground text-sm mb-4">Back to top</p>
            <address className="font-sans not-italic text-xs text-muted-foreground leading-relaxed mb-6">
              76 St. Commonwealth Blvd, Queens<br />
              NY, United States, New York<br />
              hello@hello.studio
            </address>
            <p className="font-sans font-semibold text-foreground text-sm mb-2">Follow Us</p>
            <div className="flex gap-3">
              {['Instagram', 'Twitter', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <p className="font-sans font-semibold text-foreground text-sm mb-4">About</p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Popular', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            {/* House thumbnail */}
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
              <Image
                src={HOUSE_IMG}
                alt="Featured property"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="border-t border-border py-6 px-8 overflow-hidden">
        <p
          className="font-sans font-black text-border text-center select-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
          aria-hidden="true"
        >
          DWELLA
        </p>
      </div>
    </footer>
  )
}
