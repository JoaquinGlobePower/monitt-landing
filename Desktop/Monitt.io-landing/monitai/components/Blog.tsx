'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function Blog() {
  const { t } = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="py-24 bg-[var(--bg-mid)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.blog.heading}
          </h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto">{t.blog.subhead}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.blog.posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px var(--accent-dim)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = 'none')
              }
            >
              <div className="flex items-center gap-3 text-xs text-[var(--text-2)] mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{post.read}</span>
                </div>
              </div>
              <h3 className="font-semibold text-[var(--text-1)] mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-1 text-[var(--accent)] text-sm font-semibold">
                <span>Leer más</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
