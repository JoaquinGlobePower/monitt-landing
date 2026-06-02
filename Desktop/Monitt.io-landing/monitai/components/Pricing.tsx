'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Star } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function Pricing() {
  const { t } = useT()
  const [annual, setAnnual] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="precios" className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.pricing.heading}
          </h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto mb-8">{t.pricing.subhead}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                annual
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
              }`}
            >
              {t.pricing.annual}
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-2 border-[var(--accent)] bg-[var(--bg-card)]'
                  : 'border-[var(--border)] bg-[var(--bg-card)]'
              }`}
              style={plan.highlight ? { boxShadow: '0 0 40px var(--accent-dim)' } : {}}
            >
              {plan.highlight && (
                <div className="flex items-center gap-1 mb-3">
                  <Star size={14} className="text-[var(--accent)] fill-[var(--accent)]" />
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                    Most popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-[var(--text-1)] mb-2">{plan.name}</h3>

              <div className="mb-6">
                {plan.custom ? (
                  <span className="text-2xl font-bold text-[var(--text-1)]">{plan.price}</span>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[var(--text-1)]">
                      {annual ? plan.annualPrice : plan.price}
                    </span>
                    {!annual && plan.period && (
                      <span className="text-[var(--text-2)] text-sm">{plan.period}</span>
                    )}
                    {annual && plan.period && (
                      <div className="flex flex-col">
                        <span className="text-[var(--text-2)] text-sm">{plan.period}</span>
                        <span className="text-xs text-[var(--text-2)] line-through">{plan.price}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-2)]">
                    <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hi)]'
                    : 'border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
