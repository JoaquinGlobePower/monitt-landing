'use client'

import { useState, useEffect, } from 'react'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useT } from '@/lib/i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { resolvedTheme } = useTheme()
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // A dónde lleva "Iniciar sesión": la app de la plataforma (su propia URL).
  // Configurable por entorno con NEXT_PUBLIC_PLATFORM_URL; por defecto, el dev server de Vite.
  const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'http://localhost:5173'

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
          <Image src={resolvedTheme === 'dark' ? '/logolight.svg' : '/logodark.svg'} alt="Monitt.io logo" width={132} height={80} className="rounded" />
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
            href={PLATFORM_URL}
            className="ml-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-1)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.nav.login}
          </a>
          <a
            href="https://calendar.app.google/RYDQUm6yvCDA6meD7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hi)] transition-colors"
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
          <a
            href={PLATFORM_URL}
            onClick={() => setOpen(false)}
            className="block text-center px-4 py-2 mb-3 rounded-lg border border-[var(--border)] text-[var(--text-1)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.nav.login}
          </a>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://calendar.app.google/RYDQUm6yvCDA6meD7"
              target="_blank"
              rel="noopener noreferrer"
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
