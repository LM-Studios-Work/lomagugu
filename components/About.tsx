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
    <section id="about" className="bg-background py-16 sm:py-20 lg:py-[58px]">
      <div className="w-full px-6 sm:px-10 lg:px-[56px]">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[minmax(0,620px)_minmax(360px,404px)] md:justify-between md:gap-16 lg:gap-20 xl:grid-cols-[minmax(0,640px)_404px]">
          {/* Left */}
          <div className="max-w-[650px]">
            <p className="mb-[42px] inline-flex h-[38px] items-center rounded-full border border-[#ededed] px-[18px] font-sans text-[15px] font-normal leading-none text-[#3f3f3f] shadow-[0_1px_5px_rgba(0,0,0,0.035)]">
              About Us
            </p>
            <h2 className="mb-[27px] max-w-[455px] font-sans text-[42px] font-normal leading-[1.46] tracking-normal text-foreground sm:text-[48px] sm:leading-[1.28] lg:text-[48px] lg:leading-[1.26]">
              Your Global Real Estate Partner.
            </h2>
            <p className="max-w-[595px] font-sans text-[17px] font-normal leading-[1.32] tracking-normal text-[#444444]">
              Dwella is your gateway to a world of real estate opportunities. With a
              global network of trusted partners, we&apos;re dedicated to connecting buyers
              and sellers across borders.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-full flex-col gap-[12px] md:w-full md:justify-self-end">
            {features.map(({ icon: Icon, title, description, dark }) => (
              <div
                key={title}
                className={`min-h-[166px] px-[20px] py-[27px] ${
                  dark
                    ? 'bg-[#000000] text-dark-foreground'
                    : 'bg-[#f7f7f7] text-card-foreground'
                }`}
              >
                <Icon
                  size={40}
                  strokeWidth={1.75}
                  className={`mb-[22px] ${dark ? 'text-white' : 'text-foreground'}`}
                />
                <p
                  className={`mb-[5px] font-sans text-[22px] font-normal leading-none tracking-normal ${
                    dark ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {title}
                </p>
                <p
                  className={`font-sans text-[17px] font-normal leading-[1.35] tracking-normal ${
                    dark ? 'text-white/60' : 'text-[#444444]'
                  }`}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
