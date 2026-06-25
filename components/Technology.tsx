'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function Technology() {
  const { t } = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tecnologia" className="py-24 bg-[var(--bg-mid)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.technology.heading}
          </h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto">{t.technology.subhead}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + diagram */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-3 mb-10">
              {t.technology.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-2)] text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)] text-sm font-semibold mb-10">
              {t.technology.badge}
            </div>

            {/* Architecture diagram */}
            <div>
              <p className="text-xs text-[var(--text-2)] uppercase tracking-widest mb-4">
                {t.technology.diagram.caption}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {['IoT Gateway', 'MQTT', 'Cloud AI\nLSTM + IF', 'App ES|EN', 'Dispatch API'].map(
                  (node, i, arr) => (
                    <div key={node} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--text-1)] whitespace-pre-line text-center leading-tight">
                        {node}
                      </div>
                      {i < arr.length - 1 && (
                        <span className="text-[var(--accent)] text-xs font-bold">→</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: device photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center self-stretch"
          >
            <div
              className="relative w-full max-w-md rounded-2xl overflow-hidden self-stretch"
                style={{ 
                boxShadow: '0 0 40px rgba(48,191,18,0.25)',
                minHeight: '400px',
                height: '100%'}}
            >
              <Image
                src="/monitt-io.jpeg"
                alt="TRB256 IoT Gateway"
                fill
                quality={90}
                className="object-cover"
                style={{ filter: 'contrast(1.1) brightness(1.05)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
