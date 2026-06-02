'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import content, { Lang, ContentShape } from './content'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: ContentShape
}

const LangContext = createContext<LangContextValue>({
  lang: 'es',
  setLang: () => {},
  t: content.es,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = localStorage.getItem('monitt-lang') as Lang | null
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('monitt-lang', l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useT() {
  return useContext(LangContext)
}
