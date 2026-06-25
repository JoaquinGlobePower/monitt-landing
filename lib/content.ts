export type Lang = 'es' | 'en'

export interface ContentShape {
  nav: {
    solutions: string
    technology: string
    pricing: string
    blog: string
    about: string
    contact: string
    cta: string
    login: string
  }
  hero: {
    headline: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
    mockup: { label: string; value: string; unit: string }[]
  }
  trusted: {
    heading: string
    testimonials: { quote: string; name: string; role: string }[]
  }
  solutions: {
    heading: string
    subhead: string
    cards: { title: string; desc: string }[]
  }
  technology: {
    heading: string
    subhead: string
    bullets: string[]
    badge: string
    diagram: {
      nodes: string[]
      caption: string
    }
  }
  pricing: {
    heading: string
    subhead: string
    monthly: string
    annual: string
    plans: {
      name: string
      price: string
      annualPrice: string
      period: string
      features: string[]
      cta: string
      highlight?: boolean
      custom?: boolean
    }[]
  }
  blog: {
    heading: string
    subhead: string
    posts: { title: string; date: string; read: string; slug: string }[]
  }
  about: {
    heading: string
    subhead: string
    location: string
    caption: string
    values: { icon: string; label: string; desc: string }[]
  }
  contact: {
    heading: string
    subhead: string
    email: string
    phone: string
    city: string
    form: {
      name: string
      company: string
      email: string
      phone: string
      plan: string
      planOptions: string[]
      message: string
      submit: string
      successTitle: string
      successDesc: string
    }
  }
  footer: {
    tagline: string
    columns: { title: string; links: string[] }[]
    copy: string
  }
}

const content: Record<Lang, ContentShape> = {
  es: {
    nav: {
      solutions: 'Soluciones',
      technology: 'Tecnología',
      pricing: 'Precios',
      blog: 'Blog',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Solicitar Demo',
      login: 'Iniciar sesión',
    },
    hero: {
      headline: 'Convierte tu maquinaria industrial en activos inteligentes',
      subhead:
        'Monitt.io detecta fallas antes de que ocurran. IA predictiva, despacho en un toque y GPS en tiempo real para generadores, compresores y equipos críticos.',
      ctaPrimary: 'Solicitar Demo',
      ctaSecondary: 'Ver Tecnología',
      stats: [
        { value: '99.7%', label: 'Uptime garantizado' },
        { value: '3 sem', label: 'Aviso promedio anticipado' },
        { value: 'ES/EN', label: 'Bilingüe nativo' },
        { value: 'GPS', label: 'Rastreo en tiempo real' },
      ],
      mockup: [
        { label: 'Voltaje', value: '220', unit: 'V' },
        { label: 'Temperatura', value: '78', unit: '°C' },
        { label: 'Aceite', value: '92', unit: '%' },
      ],
    },
    trusted: {
      heading: 'Confiado por líderes de la industria',
      testimonials: [
        {
          quote:
            'MonitAI nos avisó de una falla 18 días antes de que el generador fallara. Evitamos una parada de producción catastrófica.',
          name: 'Carlos M.',
          role: 'Director de Operaciones',
        },
        {
          quote:
            'The bilingual alerts changed everything for our cross-border operations. Our team in Texas and Chile are finally on the same page.',
          name: 'Sarah T.',
          role: 'VP Operations',
        },
        {
          quote:
            'El despacho de técnicos en un toque es revolucionario. Lo que antes tomaba horas ahora son minutos.',
          name: 'Andrés R.',
          role: 'Plant Manager',
        },
      ],
    },
    solutions: {
      heading: 'Soluciones que transforman operaciones',
      subhead:
        'Desde diagnóstico predictivo hasta despacho en campo, cubrimos el ciclo completo de mantenimiento industrial.',
      cards: [
        {
          title: 'Diagnóstico Predictivo con IA',
          desc: 'Modelos LSTM e Isolation Forest detectan anomalías semanas antes de una falla crítica.',
        },
        {
          title: 'Arranque y Prueba Remota',
          desc: 'Enciende, prueba y verifica el estado de tu equipo desde cualquier lugar con un solo toque.',
        },
        {
          title: 'Despacho de Técnicos en un Toque',
          desc: 'Coordina al técnico más cercano con histórico del equipo y guía de resolución instantánea.',
        },
        {
          title: 'Rastreo GPS de Activos',
          desc: 'Visualiza toda tu flota de equipos en tiempo real con geofencing y alertas de movimiento.',
        },
      ],
    },
    technology: {
      heading: 'Tecnología de punta, lista para campo',
      subhead:
        'Hardware COTS de probada fiabilidad industrial, conectado a una nube de IA entrenada en datos reales de equipos.',
      bullets: [
        'Hardware COTS con certificación industrial (TRB256)',
        'Conectividad MQTT / NB-IoT / LTE-M',
        'IA: LSTM + Isolation Forest en tiempo real',
        'RPC cifrado de extremo a extremo',
        'Despliegue en minutos, sin infraestructura propia',
      ],
      badge: 'Fase 2: Manufactura local en Chile 🇨🇱',
      diagram: {
        nodes: ['IoT Gateway', 'MQTT', 'Cloud AI Engine\nLSTM + Isolation Forest', 'App Móvil ES|EN', 'Dispatch API'],
        caption: 'Arquitectura de referencia Monitt.io',
      },
    },
    pricing: {
      heading: 'Precios transparentes',
      subhead: 'Sin letra chica. Cancela cuando quieras.',
      monthly: 'Mensual',
      annual: 'Anual (20% off)',
      plans: [
        {
          name: 'Residencial',
          price: '$49',
          annualPrice: '$39',
          period: '/mes',
          features: [
            '1 dispositivo',
            'Alertas básicas',
            'Historial 7 días',
            'Soporte por email',
          ],
          cta: 'Comenzar',
        },
        {
          name: 'Empresarial',
          price: '$199',
          annualPrice: '$159',
          period: '/mes',
          features: [
            'Hasta 10 dispositivos',
            'IA predictiva completa',
            'GPS en tiempo real',
            'Historial 90 días',
            'Despacho en un toque',
            'Soporte prioritario',
          ],
          cta: 'Solicitar Demo',
          highlight: true,
        },
        {
          name: 'Industrial',
          price: 'Precio a convenir',
          annualPrice: 'Precio a convenir',
          period: '',
          features: [
            'Dispositivos ilimitados',
            'IA personalizada',
            'SLA 99.9%',
            'CSM dedicado',
            'Integración ERP/CMMS',
            'On-premise disponible',
          ],
          cta: 'Hablar con ventas',
          custom: true,
        },
      ],
    },
    blog: {
      heading: 'Últimos artículos',
      subhead: 'Insights de ingeniería, operaciones y mantenimiento predictivo.',
      posts: [
        {
          title: '¿Por qué los generadores industriales fallan sin aviso?',
          date: '12 Jun, 2025',
          read: '5 min',
          slug: 'por-que-generadores-fallan',
        },
        {
          title: 'LSTM y detección de anomalías: la ciencia detrás de Monitt.io',
          date: '28 May, 2025',
          read: '7 min',
          slug: 'lstm-deteccion-anomalias',
        },
        {
          title: 'Cómo reducir el tiempo de inactividad no planificado en sitios remotos',
          date: '10 May, 2025',
          read: '4 min',
          slug: 'reducir-inactividad-sitios-remotos',
        },
      ],
    },
    about: {
      heading: 'Construido en Chile para el mundo industrial',
      subhead:
        'Somos un equipo de ingenieros y operadores obsesionados con eliminar las fallas inesperadas de equipos críticos.',
      location: '🇨🇱 Basados en Chile — Construyendo para Latinoamérica y más allá',
      caption: 'Instalación real en terreno — TRB256 · Santiago, Chile',
      values: [
        { icon: '🔬', label: 'Engineering-first', desc: 'Decisiones basadas en datos, no suposiciones.' },
        { icon: '🌎', label: 'LatAm-built', desc: 'Diseñado para las realidades operativas de la región.' },
        { icon: '🔐', label: 'Security-first', desc: 'Cifrado de extremo a extremo en cada capa.' },
        { icon: '🤝', label: 'Bilingüe nativo', desc: 'ES/EN en todos los canales, sin traducción automática.' },
      ],
    },
    contact: {
      heading: 'Hablemos',
      subhead: 'Agenda una demo y descubre cómo Monitt.io puede transformar tus operaciones.',
      email: 'demo@monitai.io',
      phone: '+56 9 XXXX XXXX',
      city: 'Santiago, Chile 🇨🇱',
      form: {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Email',
        phone: 'Teléfono',
        plan: 'Plan de interés',
        planOptions: ['Residencial', 'Empresarial', 'Industrial', 'No estoy seguro/a'],
        message: 'Mensaje',
        submit: 'Enviar / Send',
        successTitle: '¡Mensaje enviado!',
        successDesc: 'Te contactaremos dentro de las próximas 24 horas.',
      },
    },
    footer: {
      tagline: 'IA predictiva para activos industriales críticos.',
      columns: [
        { title: 'Producto', links: ['Soluciones', 'Tecnología', 'Precios', 'Integraciones'] },
        { title: 'Empresa', links: ['Nosotros', 'Blog', 'Casos de Uso', 'Carreras'] },
        { title: 'Recursos', links: ['Documentación', 'API Reference', 'Status', 'Soporte'] },
        { title: 'Legal', links: ['Privacidad', 'Términos', 'Cookies', 'SLA'] },
      ],
      copy: '© 2025 Monitt.io. Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      solutions: 'Solutions',
      technology: 'Technology',
      pricing: 'Pricing',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      cta: 'Request Demo',
      login: 'Sign in',
    },
    hero: {
      headline: 'Turn your industrial machinery into intelligent assets',
      subhead:
        'Monitt.io detects failures before they happen. Predictive AI, one-touch dispatch, and real-time GPS for generators, compressors, and critical equipment.',
      ctaPrimary: 'Request Demo',
      ctaSecondary: 'See Technology',
      stats: [
        { value: '99.7%', label: 'Guaranteed Uptime' },
        { value: '3 wks', label: 'Avg. advance warning' },
        { value: 'ES/EN', label: 'Bilingual native' },
        { value: 'GPS', label: 'Real-time tracking' },
      ],
      mockup: [
        { label: 'Voltage', value: '220', unit: 'V' },
        { label: 'Temperature', value: '78', unit: '°C' },
        { label: 'Oil', value: '92', unit: '%' },
      ],
    },
    trusted: {
      heading: 'Trusted by industry leaders',
      testimonials: [
        {
          quote:
            'MonitAI warned us of a failure 18 days before the generator broke down. We avoided a catastrophic production shutdown.',
          name: 'Carlos M.',
          role: 'Operations Director',
        },
        {
          quote:
            'The bilingual alerts changed everything for our cross-border operations. Our team in Texas and Chile are finally on the same page.',
          name: 'Sarah T.',
          role: 'VP Operations',
        },
        {
          quote:
            'One-touch technician dispatch is revolutionary. What used to take hours now takes minutes.',
          name: 'Andrés R.',
          role: 'Plant Manager',
        },
      ],
    },
    solutions: {
      heading: 'Solutions that transform operations',
      subhead:
        'From predictive diagnostics to field dispatch, we cover the full industrial maintenance lifecycle.',
      cards: [
        {
          title: 'Predictive AI Diagnostics',
          desc: 'LSTM and Isolation Forest models detect anomalies weeks before a critical failure.',
        },
        {
          title: 'Remote Start & Test',
          desc: 'Power on, test, and verify equipment status from anywhere with a single tap.',
        },
        {
          title: 'One-Touch Field Dispatch',
          desc: 'Coordinate the nearest technician with full equipment history and instant resolution guidance.',
        },
        {
          title: 'GPS Asset Tracking',
          desc: 'Visualize your entire equipment fleet in real time with geofencing and movement alerts.',
        },
      ],
    },
    technology: {
      heading: 'Cutting-edge tech, field-ready',
      subhead:
        'Proven industrial-grade COTS hardware, connected to an AI cloud trained on real equipment data.',
      bullets: [
        'Industrial-certified COTS hardware (TRB256)',
        'MQTT / NB-IoT / LTE-M connectivity',
        'AI: LSTM + Isolation Forest in real time',
        'End-to-end encrypted RPC',
        'Deployed in minutes, no own infrastructure needed',
      ],
      badge: 'Phase 2: Local manufacturing in Chile 🇨🇱',
      diagram: {
        nodes: ['IoT Gateway', 'MQTT', 'Cloud AI Engine\nLSTM + Isolation Forest', 'Mobile App ES|EN', 'Dispatch API'],
        caption: 'Monitt.io reference architecture',
      },
    },
    pricing: {
      heading: 'Transparent pricing',
      subhead: 'No fine print. Cancel anytime.',
      monthly: 'Monthly',
      annual: 'Annual (20% off)',
      plans: [
        {
          name: 'Residential',
          price: '$49',
          annualPrice: '$39',
          period: '/mo',
          features: [
            '1 device',
            'Basic alerts',
            '7-day history',
            'Email support',
          ],
          cta: 'Get Started',
        },
        {
          name: 'Enterprise',
          price: '$199',
          annualPrice: '$159',
          period: '/mo',
          features: [
            'Up to 10 devices',
            'Full predictive AI',
            'Real-time GPS',
            '90-day history',
            'One-touch dispatch',
            'Priority support',
          ],
          cta: 'Request Demo',
          highlight: true,
        },
        {
          name: 'Industrial',
          price: 'Custom pricing',
          annualPrice: 'Custom pricing',
          period: '',
          features: [
            'Unlimited devices',
            'Custom AI models',
            '99.9% SLA',
            'Dedicated CSM',
            'ERP/CMMS integration',
            'On-premise available',
          ],
          cta: 'Talk to Sales',
          custom: true,
        },
      ],
    },
    blog: {
      heading: 'Latest articles',
      subhead: 'Engineering insights, operations, and predictive maintenance.',
      posts: [
        {
          title: 'Why industrial generators fail without warning',
          date: 'Jun 12, 2025',
          read: '5 min',
          slug: 'why-generators-fail',
        },
        {
          title: 'LSTM and anomaly detection: the science behind Monitt.io',
          date: 'May 28, 2025',
          read: '7 min',
          slug: 'lstm-anomaly-detection',
        },
        {
          title: 'How to reduce unplanned downtime at remote sites',
          date: 'May 10, 2025',
          read: '4 min',
          slug: 'reduce-downtime-remote-sites',
        },
      ],
    },
    about: {
      heading: 'Built in Chile for the industrial world',
      subhead:
        'We are a team of engineers and operators obsessed with eliminating unexpected failures in critical equipment.',
      location: '🇨🇱 Based in Chile — Building for Latin America and beyond',
      caption: 'Real field installation — TRB256 · Santiago, Chile',
      values: [
        { icon: '🔬', label: 'Engineering-first', desc: 'Data-driven decisions, not assumptions.' },
        { icon: '🌎', label: 'LatAm-built', desc: "Designed for the region's operational realities." },
        { icon: '🔐', label: 'Security-first', desc: 'End-to-end encryption at every layer.' },
        { icon: '🤝', label: 'Bilingual-native', desc: 'ES/EN across all channels, no auto-translation.' },
      ],
    },
    contact: {
      heading: "Let's talk",
      subhead: 'Schedule a demo and discover how Monitt.io can transform your operations.',
      email: 'demo@monitai.io',
      phone: '+56 9 XXXX XXXX',
      city: 'Santiago, Chile 🇨🇱',
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        plan: 'Plan of interest',
        planOptions: ['Residential', 'Enterprise', 'Industrial', "I'm not sure"],
        message: 'Message',
        submit: 'Enviar / Send',
        successTitle: 'Message sent!',
        successDesc: "We'll reach out within the next 24 hours.",
      },
    },
    footer: {
      tagline: 'Predictive AI for critical industrial assets.',
      columns: [
        { title: 'Product', links: ['Solutions', 'Technology', 'Pricing', 'Integrations'] },
        { title: 'Company', links: ['About', 'Blog', 'Use Cases', 'Careers'] },
        { title: 'Resources', links: ['Documentation', 'API Reference', 'Status', 'Support'] },
        { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'SLA'] },
      ],
      copy: '© 2025 Monitt.io. All rights reserved.',
    },
  },
}

export default content
