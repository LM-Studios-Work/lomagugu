'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How can I search for properties on your website?',
    a: 'Simply use our search bar to filter properties by location, price range, property type, and other criteria.',
  },
  {
    q: 'What fees are associated with using your services?',
    a: 'We charge a standard brokerage commission upon successful transaction. Listing is free for all verified sellers.',
  },
  {
    q: 'How can I verify the authenticity of property listings?',
    a: 'All listings are verified by our in-house team. Look for the verified badge on each property card.',
  },
  {
    q: 'What is your process for international property transactions?',
    a: 'Our global legal partners handle cross-border transactions, ensuring compliance with local regulations.',
  },
  {
    q: 'How can I schedule a property viewing?',
    a: 'Click the "View Details" button on any listing and use the scheduling tool to book a virtual or in-person tour.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left */}
          <div className="md:w-64 shrink-0">
            <h2 className="font-sans font-bold text-foreground text-3xl leading-tight text-balance mb-3">
              Frequently Ask a Question
            </h2>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Got a question? We&apos;ve got the answer. Check out our frequently asked
              questions below.
            </p>
          </div>

          {/* Right – accordion */}
          <div className="flex-1">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-border">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-sans text-sm font-medium leading-snug ${
                        isOpen ? 'text-foreground' : 'text-foreground/80'
                      }`}
                    >
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown size={16} className="shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed pb-5">
                      {item.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
