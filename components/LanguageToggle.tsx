'use client'

import { useT } from '@/lib/i18n'

export default function LanguageToggle() {
  const { lang, setLang } = useT()

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      aria-label="Toggle language"
      className="text-sm font-medium px-2 py-1 rounded-lg hover:bg-[var(--accent-dim)] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors tracking-wide"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
