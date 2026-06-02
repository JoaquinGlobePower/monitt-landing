'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useT } from '@/lib/i18n'

export default function About() {
  const { t } = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
              {t.about.heading}
            </h2>
            <p className="text-[var(--text-2)] mb-6 leading-relaxed">{t.about.subhead}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--text-2)] mb-10">
              {t.about.location}
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {t.about.values.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h4 className="font-semibold text-[var(--text-1)] text-sm mb-1">{v.label}</h4>
                  <p className="text-xs text-[var(--text-2)]">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 0 30px rgba(48,191,18,0.2)' }}
              >
                <Image
                  src="/field1.jpg"
                  alt="Instalación en terreno — Monitt.io"
                  width={400}
                  height={320}
                  quality={90}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 0 30px rgba(48,191,18,0.2)' }}
              >
                <Image
                  src="/field2.jpg"
                  alt="TRB256 en terreno — Monitt.io"
                  width={400}
                  height={320}
                  quality={90}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                />
              </div>
            </div>
            <p className="text-center text-xs text-[var(--text-2)]">{t.about.caption}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
