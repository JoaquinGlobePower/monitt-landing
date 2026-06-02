'use client'

import { useT } from '@/lib/i18n'

const brands = [
  'Caterpillar',
  'Cummins',
  'Kohler Power',
  'Atlas Copco',
  'Generac',
  'ABB',
  'Schneider Electric',
  'Siemens',
]

export default function ClientLogos() {
  const { t } = useT()
  const doubled = [...brands, ...brands]

  return (
    <section className="py-16 border-y border-[var(--border)] bg-[var(--bg-mid)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm text-[var(--text-2)] uppercase tracking-widest font-semibold">
          {t.trusted.heading}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex" style={{ width: 'max-content' }}>
          <div className="animate-marquee flex items-center gap-12 px-6">
            {doubled.map((brand, i) => (
              <div
                key={i}
                className="shrink-0 px-5 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-sm font-semibold text-[var(--text-2)] whitespace-nowrap hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid md:grid-cols-3 gap-6">
        {t.trusted.testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 hover:border-[var(--accent)] transition-colors"
            style={{ boxShadow: '0 0 0 0 transparent' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px var(--accent-dim)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = 'none')
            }
          >
            <p className="text-[var(--text-2)] text-sm leading-relaxed mb-4">"{item.quote}"</p>
            <div>
              <p className="font-semibold text-[var(--text-1)] text-sm">{item.name}</p>
              <p className="text-xs text-[var(--accent)]">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
