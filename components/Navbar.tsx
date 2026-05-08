'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" aria-label="Dwella Home" className="flex items-center gap-1">
          <Image
            src="/Logo-removebg-preview.png"
            alt="Dwella"
            width={210}
            height={84}
            className="h-[3.3rem] w-auto"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-sans text-white">
          <li><a href="#" className="hover:opacity-75 transition-opacity font-medium">Home</a></li>
          <li><a href="#about" className="hover:opacity-75 transition-opacity">About Us</a></li>
          <li><a href="#properties" className="hover:opacity-75 transition-opacity">Property List</a></li>
          <li><a href="#contact" className="hover:opacity-75 transition-opacity">Contact Us</a></li>
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
          <a href="#" className="text-white text-sm font-medium py-2 border-b border-white/10">Home</a>
          <a href="#about" className="text-white text-sm py-2 border-b border-white/10">About Us</a>
          <a href="#properties" className="text-white text-sm py-2 border-b border-white/10">Property List</a>
          <a href="#contact" className="text-white text-sm py-2 border-b border-white/10">Contact Us</a>
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-white text-sm border border-white/40 px-4 py-2">Login</a>
            <a href="#" className="bg-primary text-white text-sm px-4 py-2">Registration</a>
          </div>
        </div>
      )}
    </header>
  )
}
