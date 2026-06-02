'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Zap, Truck, MapPin } from 'lucide-react'
import { useT } from '@/lib/i18n'

const icons = [Brain, Zap, Truck, MapPin]

export default function Solutions() {
  const { t } = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="soluciones" className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.solutions.heading}
          </h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto">{t.solutions.subhead}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 group hover:border-[var(--accent)] transition-all duration-300"
                style={{ '--hover-shadow': '0 0 20px var(--accent-dim)' } as React.CSSProperties}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px var(--accent-dim)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = 'none')
                }
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors">
                  <Icon size={22} className="text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[var(--text-1)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
