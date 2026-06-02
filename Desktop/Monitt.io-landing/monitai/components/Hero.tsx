'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { useT } from '@/lib/i18n'

function Counter({ from, to, unit }: { from: number; to: number; unit: string }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.5, ease: 'easeOut' })
    return controls.stop
  }, [count, to])

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {unit}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  const { t } = useT()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.4,
          animation: 'grid-drift 8s linear infinite',
        }}
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(48,191,18,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--accent-dim)] text-[var(--accent)] text-xs font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
            Predictive Industrial AI
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[var(--text-1)] mb-6"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg text-[var(--text-2)] mb-8 max-w-lg leading-relaxed"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hi)] transition-colors shadow-lg"
              style={{ boxShadow: '0 0 20px var(--accent-dim)' }}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#tecnologia"
              className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-1)] font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap gap-3"
          >
            {t.hero.stats.map((s) => (
              <div
                key={s.label}
                className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm"
              >
                <span className="font-bold text-[var(--accent)] mr-1">{s.value}</span>
                <span className="text-[var(--text-2)]">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' as const }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="relative w-64 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-1 shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(48,191,18,0.15)' }}
          >
            {/* Phone status bar */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-mid)]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
                <span className="text-xs text-[var(--text-2)]">Monitt.io</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
                  <span className="text-xs text-[var(--accent)]">Live</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-xs font-semibold text-[var(--text-2)] uppercase tracking-wider mb-2">
                  Generator A-01
                </p>
                {t.hero.mockup.map((m, i) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]"
                  >
                    <span className="text-xs text-[var(--text-2)]">{m.label}</span>
                    <span className="text-sm font-bold text-[var(--accent)]">
                      <Counter from={0} to={Number(m.value)} unit={m.unit} />
                    </span>
                  </div>
                ))}
                <div className="mt-4 px-3 py-2 rounded-lg bg-[var(--accent-dim)] border border-[var(--accent)] text-xs text-[var(--accent)] font-semibold text-center">
                  ✓ Sistema nominal
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
