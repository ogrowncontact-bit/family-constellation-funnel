export type Locale = "pt" | "en" | "es";

export const locales: Locale[] = ["pt", "en", "es"];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export interface Dictionary {
  nav: {
    features: string;
    testimonials: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  leadForm: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    redirecting: string;
    error: string;
    privacy: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      features: "Recursos",
      testimonials: "Depoimentos",
      faq: "Perguntas",
      cta: "Começar grátis",
    },
    hero: {
      badge: "SABEDORIA ANCESTRAL",
      title1: "Descubra os padrões ocultos",
      titleHighlight: "da sua família",
      subtitle:
        "Combine a sabedoria cabalística com numerologia e constelação sistêmica para enxergar, com clareza, os vínculos invisíveis que moldam sua história familiar.",
      ctaPrimary: "Revelar meu mapa familiar grátis",
      ctaSecondary: "Ver como funciona",
      trust: "✦ Comece grátis ✦ Sem cartão de crédito",
    },
    benefits: {
      title: "Por que essa abordagem funciona",
      subtitle:
        "Um método único que une psicologia sistêmica e tradição cabalística.",
      items: [
        {
          title: "Clareza profunda",
          desc: "A Kabbalah revela padrões invisíveis no seu sistema familiar, trazendo luz ao que estava oculto.",
        },
        {
          title: "Harmonia sistêmica",
          desc: "Entenda a dinâmica de equilíbrio entre os pilares da misericórdia, da severidade e do equilíbrio.",
        },
        {
          title: "Cura ancestral",
          desc: "Liberte padrões transgeracionais e restaure o fluxo de amor no seu sistema familiar.",
        },
      ],
    },
    features: {
      title: "O que você recebe no app",
      subtitle: "Ferramentas para mapear e compreender sua constelação familiar.",
      items: [
        {
          title: "Constelação na Árvore da Vida",
          desc: "Posicione os membros da sua família nas Sephirot e visualize as conexões pelos 22 caminhos sagrados.",
        },
        {
          title: "Numerologia cabalística",
          desc: "Cálculo automático de Guematria, Sephirot pessoais e compatibilidades baseadas na Árvore da Vida.",
        },
        {
          title: "Insights com IA",
          desc: "Orientação personalizada combinando sabedoria cabalística com análise de padrões sistêmicos.",
        },
      ],
    },
    testimonials: {
      title: "Vozes de quem já trilhou o caminho",
      subtitle: "Histórias reais de quem experimentou essa jornada.",
      items: [
        {
          quote:
            "Descobri padrões geracionais que 10 anos de terapia não tinham revelado. A visualização na Árvore da Vida é reveladora.",
          name: "Marina S.",
          role: "Terapeuta holística",
        },
        {
          quote:
            "Uso com meus clientes toda semana. A combinação de Guematria com constelação sistêmica é única no mercado brasileiro.",
          name: "Rafael M.",
          role: "Coach sistêmico",
        },
        {
          quote:
            "As práticas diárias mudaram minha relação com minha mãe. Cada dia recebo um insight que faz sentido perfeito.",
          name: "Cláudia P.",
          role: "Buscadora espiritual",
        },
      ],
    },
    leadForm: {
      title: "Comece sua jornada agora",
      subtitle:
        "Deixe seu nome e e-mail para desbloquear seu mapa familiar gratuito e seguir direto para o app.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu melhor e-mail",
      submit: "Revelar meu mapa familiar",
      submitting: "Enviando...",
      success: "Pronto! Redirecionando você para o app...",
      redirecting: "Abrindo seu mapa familiar...",
      error: "Algo deu errado. Tente novamente em instantes.",
      privacy: "Seus dados estão seguros. Sem spam, cancele quando quiser.",
    },
    faq: {
      title: "Perguntas frequentes",
      subtitle: "Tudo o que você precisa saber antes de começar sua jornada.",
      items: [
        {
          q: "O que é numerologia cabalística?",
          a: "É um sistema que atribui valores numéricos a letras e nomes (Guematria) para revelar significados ocultos e conexões energéticas dentro da sua história familiar.",
        },
        {
          q: "Preciso ter conhecimento prévio de Kabbalah?",
          a: "Não. O app guia você passo a passo, explicando cada Sephira e caminho da Árvore da Vida de forma simples e acessível.",
        },
        {
          q: "Isso substitui terapia ou aconselhamento?",
          a: "Não. É uma ferramenta complementar de autoconhecimento e não substitui acompanhamento psicológico ou terapêutico profissional.",
        },
        {
          q: "Posso cancelar minha assinatura a qualquer momento?",
          a: "Sim, você pode cancelar quando quiser, direto nas configurações da sua conta, sem burocracia.",
        },
        {
          q: "Meus dados familiares estão seguros?",
          a: "Sim. Seus dados são criptografados e nunca são compartilhados com terceiros.",
        },
        {
          q: "Posso exportar meus insights?",
          a: "Sim, os planos pagos permitem exportar relatórios e workbooks em PDF.",
        },
      ],
    },
    finalCta: {
      title: "Pronto para iluminar seu caminho?",
      subtitle:
        "Junte-se a milhares de pessoas que encontraram paz e clareza através da sabedoria da Árvore da Vida.",
      button: "Iniciar jornada grátis",
      note: "✦ Em breve: versão para terapeutas e facilitadores",
    },
    footer: {
      tagline: "Constelação familiar sistêmica encontra sabedoria cabalística.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      features: "Features",
      testimonials: "Stories",
      faq: "FAQ",
      cta: "Start free",
    },
    hero: {
      badge: "ANCESTRAL WISDOM",
      title1: "Discover the hidden patterns",
      titleHighlight: "of your family",
      subtitle:
        "Combine Kabbalistic wisdom with numerology and systemic constellations to clearly see the invisible bonds shaping your family story.",
      ctaPrimary: "Reveal my free family map",
      ctaSecondary: "See how it works",
      trust: "✦ Start free ✦ No credit card required",
    },
    benefits: {
      title: "Why this approach works",
      subtitle: "A unique method blending systemic psychology and Kabbalistic tradition.",
      items: [
        {
          title: "Deep clarity",
          desc: "Kabbalah reveals invisible patterns in your family system, bringing light to what was hidden.",
        },
        {
          title: "Systemic harmony",
          desc: "Understand the balance dynamics between the pillars of mercy, severity, and harmony.",
        },
        {
          title: "Ancestral healing",
          desc: "Release transgenerational patterns and restore the flow of love in your family system.",
        },
      ],
    },
    features: {
      title: "What you get in the app",
      subtitle: "Tools to map and understand your family constellation.",
      items: [
        {
          title: "Constellation on the Tree",
          desc: "Place family members on the Sephirot and visualize connections through the 22 sacred paths.",
        },
        {
          title: "Kabbalistic numerology",
          desc: "Automatic Gematria calculation, personal Sephirot and compatibilities based on the Tree of Life.",
        },
        {
          title: "AI insights",
          desc: "Personalized guidance combining Kabbalistic wisdom with systemic pattern analysis.",
        },
      ],
    },
    testimonials: {
      title: "Voices from the community",
      subtitle: "Real stories from people who walked this journey.",
      items: [
        {
          quote:
            "I discovered generational patterns that 10 years of therapy hadn't revealed. The Tree of Life visualization is eye-opening.",
          name: "Marina S.",
          role: "Holistic therapist",
        },
        {
          quote:
            "I use it with my clients every week. Combining Gematria with systemic constellation is unique in the market.",
          name: "Rafael M.",
          role: "Systemic coach",
        },
        {
          quote:
            "The daily practices changed my relationship with my mother. Every day I get an insight that makes perfect sense.",
          name: "Claudia P.",
          role: "Spiritual seeker",
        },
      ],
    },
    leadForm: {
      title: "Start your journey now",
      subtitle: "Leave your name and email to unlock your free family map and continue straight into the app.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your best email",
      submit: "Reveal my family map",
      submitting: "Sending...",
      success: "All set! Redirecting you to the app...",
      redirecting: "Opening your family map...",
      error: "Something went wrong. Please try again in a moment.",
      privacy: "Your data is safe. No spam, unsubscribe anytime.",
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you need to know before starting your journey.",
      items: [
        {
          q: "What is Kabbalistic numerology?",
          a: "It's a system that assigns numeric values to letters and names (Gematria) to reveal hidden meanings and energetic connections within your family story.",
        },
        {
          q: "Do I need prior knowledge of Kabbalah?",
          a: "No. The app guides you step by step, explaining each Sephira and path of the Tree of Life in a simple, accessible way.",
        },
        {
          q: "Does this replace therapy or counseling?",
          a: "No. It's a complementary self-knowledge tool and does not replace professional psychological or therapeutic support.",
        },
        {
          q: "Can I cancel my subscription at any time?",
          a: "Yes, you can cancel whenever you want, directly in your account settings, no hassle.",
        },
        {
          q: "Is my family data safe?",
          a: "Yes. Your data is encrypted and never shared with third parties.",
        },
        {
          q: "Can I export my insights?",
          a: "Yes, paid plans let you export reports and workbooks as PDF.",
        },
      ],
    },
    finalCta: {
      title: "Ready to illuminate your path?",
      subtitle: "Join thousands who found peace and clarity through the wisdom of the Tree of Life.",
      button: "Start free journey",
      note: "✦ Coming soon: version for therapists and facilitators",
    },
    footer: {
      tagline: "Systemic family constellation meets Kabbalistic wisdom.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      testimonials: "Testimonios",
      faq: "Preguntas",
      cta: "Empezar gratis",
    },
    hero: {
      badge: "SABIDURÍA ANCESTRAL",
      title1: "Descubre los patrones ocultos",
      titleHighlight: "de tu familia",
      subtitle:
        "Combina la sabiduría cabalística con la numerología y las constelaciones sistémicas para ver con claridad los vínculos invisibles que dan forma a tu historia familiar.",
      ctaPrimary: "Revelar mi mapa familiar gratis",
      ctaSecondary: "Ver cómo funciona",
      trust: "✦ Empieza gratis ✦ Sin tarjeta de crédito",
    },
    benefits: {
      title: "Por qué funciona este enfoque",
      subtitle: "Un método único que une la psicología sistémica y la tradición cabalística.",
      items: [
        {
          title: "Claridad profunda",
          desc: "La Kabbalah revela patrones invisibles en tu sistema familiar, iluminando lo que estaba oculto.",
        },
        {
          title: "Armonía sistémica",
          desc: "Comprende la dinámica de equilibrio entre los pilares de la misericordia, la severidad y el equilibrio.",
        },
        {
          title: "Sanación ancestral",
          desc: "Libera patrones transgeneracionales y restaura el flujo de amor en tu sistema familiar.",
        },
      ],
    },
    features: {
      title: "Lo que obtienes en la app",
      subtitle: "Herramientas para mapear y comprender tu constelación familiar.",
      items: [
        {
          title: "Constelación en el Árbol",
          desc: "Coloca a los miembros de tu familia en las Sephirot y visualiza las conexiones a través de los 22 caminos sagrados.",
        },
        {
          title: "Numerología cabalística",
          desc: "Cálculo automático de Guematria, Sephirot personales y compatibilidades basadas en el Árbol de la Vida.",
        },
        {
          title: "Perspectivas con IA",
          desc: "Orientación personalizada que combina la sabiduría cabalística con el análisis de patrones sistémicos.",
        },
      ],
    },
    testimonials: {
      title: "Voces de la comunidad",
      subtitle: "Historias reales de quienes ya recorrieron este camino.",
      items: [
        {
          quote:
            "Descubrí patrones generacionales que 10 años de terapia no habían revelado. La visualización en el Árbol de la Vida es reveladora.",
          name: "Marina S.",
          role: "Terapeuta holística",
        },
        {
          quote:
            "Lo uso con mis clientes cada semana. La combinación de Guematria con constelación sistémica es única en el mercado.",
          name: "Rafael M.",
          role: "Coach sistémico",
        },
        {
          quote:
            "Las prácticas diarias cambiaron mi relación con mi madre. Cada día recibo una idea que tiene sentido perfecto.",
          name: "Claudia P.",
          role: "Buscadora espiritual",
        },
      ],
    },
    leadForm: {
      title: "Comienza tu viaje ahora",
      subtitle: "Deja tu nombre y correo para desbloquear tu mapa familiar gratuito y continuar directo en la app.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu mejor correo",
      submit: "Revelar mi mapa familiar",
      submitting: "Enviando...",
      success: "¡Listo! Redirigiéndote a la app...",
      redirecting: "Abriendo tu mapa familiar...",
      error: "Algo salió mal. Inténtalo de nuevo en un momento.",
      privacy: "Tus datos están seguros. Sin spam, cancela cuando quieras.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber antes de comenzar tu viaje.",
      items: [
        {
          q: "¿Qué es la numerología cabalística?",
          a: "Es un sistema que asigna valores numéricos a letras y nombres (Guematria) para revelar significados ocultos y conexiones energéticas en tu historia familiar.",
        },
        {
          q: "¿Necesito conocimientos previos de Kabbalah?",
          a: "No. La app te guía paso a paso, explicando cada Sephira y camino del Árbol de la Vida de forma simple y accesible.",
        },
        {
          q: "¿Esto sustituye la terapia o el asesoramiento?",
          a: "No. Es una herramienta complementaria de autoconocimiento y no sustituye el acompañamiento psicológico o terapéutico profesional.",
        },
        {
          q: "¿Puedo cancelar mi suscripción en cualquier momento?",
          a: "Sí, puedes cancelar cuando quieras, directamente en la configuración de tu cuenta, sin trámites.",
        },
        {
          q: "¿Mis datos familiares están seguros?",
          a: "Sí. Tus datos están cifrados y nunca se comparten con terceros.",
        },
        {
          q: "¿Puedo exportar mis perspectivas?",
          a: "Sí, los planes de pago permiten exportar informes y cuadernos de trabajo en PDF.",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para iluminar tu camino?",
      subtitle: "Únete a miles de personas que encontraron paz y claridad a través de la sabiduría del Árbol de la Vida.",
      button: "Iniciar viaje gratis",
      note: "✦ Próximamente: versión para terapeutas y facilitadores",
    },
    footer: {
      tagline: "La constelación familiar sistémica se encuentra con la sabiduría cabalística.",
      rights: "Todos los derechos reservados.",
    },
  },
};
