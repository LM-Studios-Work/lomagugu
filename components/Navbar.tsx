'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Property List', href: '/properties' },
  { label: 'Valuations', href: '/valuations' },
  { label: 'Book Viewing', href: '/book-viewing' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <header className={isHome ? 'absolute top-0 left-0 right-0 z-50' : 'relative bg-dark z-50'}>
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Lomagugu Properties Home" className="flex items-center gap-1">
          <Image
            src="/Logo-removebg-preview.png"
            alt="Lomagugu Properties"
            width={210}
            height={84}
            className="h-[3.3rem] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-sans text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:opacity-75 transition-opacity ${pathname === link.href ? 'font-semibold opacity-100' : 'font-normal opacity-90'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-sans text-white hover:opacity-75 transition-opacity px-3 py-1.5"
          >
            Login
          </a>
          <a
            href="#"
            className="text-sm font-sans bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors"
          >
            Registration
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm px-8 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm py-2 border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-white text-sm border border-white/40 px-4 py-2">Login</a>
            <a href="#" className="bg-primary text-white text-sm px-4 py-2">Registration</a>
          </div>
        </div>
      )}
    </header>
  )
}
