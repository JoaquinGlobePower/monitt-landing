'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useT } from '@/lib/i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: t.nav.solutions, href: '#soluciones' },
    { label: t.nav.technology, href: '#tecnologia' },
    { label: t.nav.pricing, href: '#precios' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.contact, href: '#contacto' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="Monitt.io logo" width={32} height={32} className="rounded" />
          <span className="font-semibold text-lg text-[var(--text-1)] font-['Space_Grotesk']">
            Monitt.io
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contacto"
            className="ml-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hi)] transition-colors"
            aria-label={t.nav.cta}
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[var(--text-2)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[var(--text-2)] hover:text-[var(--accent)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
