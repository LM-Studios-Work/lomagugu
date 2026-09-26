import Link from 'next/link'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

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
    <footer className="bg-black text-white border-t border-[#2c5f45]/30 font-sans">
      {/* Top Section - Newsletter / Call to Action */}
      <div className="border-b border-[#2c5f45]/30 bg-[#0d1f15]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:flex lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:max-w-md">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Stay updated</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Join our newsletter for exclusive property listings, market insights, and real estate guidance in South Africa.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:w-96">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-[#2c5f45]/50 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#499971] transition-all flex-grow text-sm"
            />
            <button className="bg-[#2c5f45] hover:bg-[#3a7a5a] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tighter text-white">
                Lomagugu<span className="text-[#499971]">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-[280px]">
              Premium South African property guidance for buyers, sellers, landlords, and investors. Elevating your real estate journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-neutral-900 hover:bg-[#2c5f45] text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-neutral-900 hover:bg-[#2c5f45] text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-neutral-900 hover:bg-[#2c5f45] text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {mainLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-[#499971] hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-[#499971] hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#499971] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Tyger Valley Office Park<br />
                  Silverlakes, Pretoria
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-[#499971] shrink-0" />
                <a href="tel:+27111234567" className="hover:text-[#499971] transition-colors">
                  +27 11 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-[#499971] shrink-0" />
                <a href="mailto:Admin@lomaguguproperties.co.za" className="hover:text-[#499971] transition-colors">
                  Admin@lomaguguproperties.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2c5f45]/30">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Lomagugu Properties. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
