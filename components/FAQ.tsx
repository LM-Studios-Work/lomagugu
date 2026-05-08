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
    q: 'What is your process for buying or selling property in South Africa?',
    a: 'We guide clients through each stage of the transaction, from listing or viewing to offer management and compliance with South African property requirements.',
  },
  {
    q: 'How can I schedule a property viewing?',
    a: 'Click the "View Details" button on any listing and use the scheduling tool to request a property viewing.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="border-t border-border bg-background pb-16 pt-[86px] md:pb-[64px] md:pt-[96px]">
      <div className="mx-auto w-full max-w-[1124px] px-6 md:px-[54px]">
        <div className="grid gap-14 md:grid-cols-[390px_512px] md:justify-between">
          {/* Left */}
          <div className="max-w-[390px]">
            <h2 className="font-sans text-[40px] font-medium leading-[1.28] tracking-normal text-foreground md:text-[42px]">
              Frequently Ask a Question
            </h2>
            <p className="mt-7 max-w-[352px] font-sans text-[13px] font-normal leading-[1.45] text-foreground">
              Got a question? We&apos;ve got the answer. Check out our frequently asked
              questions below.
            </p>
          </div>

          {/* Right accordion */}
          <div className="w-full md:w-[512px]">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-border">
                  <button
                    className={`flex w-full items-start justify-between gap-6 text-left ${
                      i === 0 ? 'pb-[22px] pt-0' : 'py-[22px]'
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`max-w-[430px] font-sans text-[20px] font-medium leading-[1.12] tracking-normal ${
                        isOpen ? 'text-foreground' : 'text-foreground'
                      }`}
                    >
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} strokeWidth={2} className="mt-1 shrink-0 text-foreground" />
                    ) : (
                      <ChevronDown size={18} strokeWidth={2} className="mt-1 shrink-0 text-foreground" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="max-w-[430px] pb-[20px] font-sans text-[13px] font-normal leading-[1.25] text-muted-foreground">
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
