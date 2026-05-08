'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface SearchSelectProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
  variant?: 'hero' | 'filters'
  className?: string
}

export default function SearchSelect({
  label,
  value,
  options,
  onChange,
  variant = 'filters',
  className = '',
}: SearchSelectProps) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeSelect = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeSelect)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeSelect)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const isHero = variant === 'hero'

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <span
        className={
          isHero
            ? 'mb-1 block font-sans text-xs text-white/60'
            : 'mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4b5554]'
        }
      >
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className={
          isHero
            ? 'group flex h-8 w-full min-w-0 items-center justify-between gap-3 border-b border-white/20 bg-transparent pb-1 text-left font-sans text-sm text-white transition-colors hover:border-white/55 focus:outline-none focus:border-white'
            : 'group flex h-11 w-full min-w-[155px] items-center justify-between gap-3 border border-[#b9ddca] bg-white px-3.5 text-left font-sans text-sm text-foreground shadow-[0_1px_0_rgba(17,17,17,0.03)] transition-colors hover:border-primary focus:outline-none focus:border-primary'
        }
      >
        <span className="min-w-0 truncate">{value}</span>
        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''} ${
            isHero ? 'text-white/65 group-hover:text-white' : 'text-primary'
          }`}
        />
      </button>

      {open && (
        <div
          className={
            isHero
              ? 'absolute left-0 top-[calc(100%+10px)] z-50 max-h-72 min-w-full overflow-auto border border-white/15 bg-[#08120d]/95 p-1.5 shadow-2xl backdrop-blur-md'
              : 'absolute left-0 top-[calc(100%+8px)] z-50 max-h-72 min-w-full overflow-auto border border-[#b9ddca] bg-white p-1.5 shadow-xl'
          }
        >
          {options.map((option) => {
            const selected = option === value

            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option)
                  setOpen(false)
                }}
                className={`block w-full min-w-max px-3 py-2 text-left font-sans text-sm transition-colors ${
                  isHero
                    ? selected
                      ? 'bg-white text-foreground'
                      : 'text-white/78 hover:bg-white/10 hover:text-white'
                    : selected
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-[#e8f8f1]'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
