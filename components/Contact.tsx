'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function Contact() {
  const { t } = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const f = t.contact.form

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', plan: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 bg-[var(--bg-mid)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto">{t.contact.subhead}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center">
                <Mail size={18} className="text-[var(--accent)]" />
              </div>
              <span className="text-[var(--text-2)]">{t.contact.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center">
                <Phone size={18} className="text-[var(--accent)]" />
              </div>
              <span className="text-[var(--text-2)]">{t.contact.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center">
                <MapPin size={18} className="text-[var(--accent)]" />
              </div>
              <span className="text-[var(--text-2)]">{t.contact.city}</span>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-xl border border-[var(--accent)] bg-[var(--accent-dim)] p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-[var(--text-1)] text-xl mb-2">{f.successTitle}</h3>
                <p className="text-[var(--text-2)]">{f.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-name">{f.name}</label>
                    <input
                      id="c-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-company">{f.company}</label>
                    <input
                      id="c-company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-email">{f.email}</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-phone">{f.phone}</label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-plan">{f.plan}</label>
                  <select
                    id="c-plan"
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="">—</option>
                    {f.planOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[var(--text-2)] mb-1" htmlFor="c-msg">{f.message}</label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hi)] transition-colors disabled:opacity-60"
                  style={{ boxShadow: '0 0 20px var(--accent-dim)' }}
                >
                  <Send size={16} />
                  {loading ? '...' : f.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
