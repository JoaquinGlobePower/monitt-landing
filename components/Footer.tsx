'use client'

import Image from 'next/image'
import { useT } from '@/lib/i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Footer() {
  const { t } = useT()
  const f = t.footer

  return (
    <footer className="bg-[var(--accent-dk)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logolight.svg" alt="Monitt.io" width={132} height={42} className="rounded" />
            </div>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">{f.tagline}</p>
          </div>

          {/* Link columns */}
          {f.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[var(--text-1)] uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--text-2)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-2)]">{f.copy}</p>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
