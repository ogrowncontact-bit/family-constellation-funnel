import type { ArchetypeId } from "@/lib/quiz";

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
  quiz: {
    metaTitle: string;
    badge: string;
    intro: string;
    progressLabel: string;
    next: string;
    back: string;
    submit: string;
    questions: { id: string; question: string; options: { id: string; label: string }[] }[];
  };
  results: {
    metaTitle: string;
    loading: string;
    missing: string;
    missingCta: string;
    greeting: string;
    archetypeLabel: string;
    ctaApp: string;
    unlockTitle: string;
    unlockSubtitle: string;
    whatsIncluded: string[];
    priceLoading: string;
    priceNote: string;
    ctaBuy: string;
    secure: string;
    error: string;
  };
  archetypes: Record<
    ArchetypeId,
    {
      title: string;
      shortSummary: string;
      pdfSections: { heading: string; body: string[] }[];
    }
  >;
  thankYou: {
    metaTitle: string;
    verifying: string;
    successTitle: string;
    successSubtitle: string;
    resendButton: string;
    resendSuccess: string;
    resendError: string;
    continueApp: string;
    failedTitle: string;
    failedSubtitle: string;
    backHome: string;
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
      success: "Pronto! Vamos para o seu questionário rápido...",
      redirecting: "Preparando seu questionário personalizado...",
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
    quiz: {
      metaTitle: "Descubra seu padrão familiar — Questionário",
      badge: "QUESTIONÁRIO GRATUITO",
      intro:
        "Responda 5 perguntas rápidas para descobrir qual padrão familiar está mais presente na sua vida agora.",
      progressLabel: "Pergunta {current} de {total}",
      next: "Próxima",
      back: "Voltar",
      submit: "Ver meu resultado",
      questions: [
        {
          id: "q1",
          question: "Qual área da sua vida mais reflete um padrão que parece 'maior que você'?",
          options: [
            { id: "a", label: "Relacionamentos amorosos — sempre acabo repetindo o mesmo tipo de história" },
            { id: "b", label: "Dinheiro e sucesso — sinto que não posso ter mais do que meus pais tiveram" },
            { id: "c", label: "Saúde e corpo — sintomas ou dores que parecem não ser só meus" },
            { id: "d", label: "Uma sensação constante de não pertencer a lugar nenhum" },
          ],
        },
        {
          id: "q2",
          question: "Existe alguém na sua família, vivo ou falecido, de quem quase ninguém fala?",
          options: [
            { id: "a", label: "Sim — uma pessoa foi praticamente apagada da história da família" },
            { id: "b", label: "Sim — alguém teve um destino trágico (perda muito cedo, doença grave, tragédia)" },
            { id: "c", label: "Não que eu saiba, mas sinto que falta uma peça na história da minha família" },
            { id: "d", label: "Não, na minha família todo mundo é lembrado e mencionado" },
          ],
        },
        {
          id: "q3",
          question: "Quando você recebe um elogio ou vive uma conquista importante, o que mais sente por dentro?",
          options: [
            { id: "a", label: "Uma culpa estranha, como se eu não merecesse tanto" },
            { id: "b", label: "Vontade de me esconder — tenho medo de me destacar demais" },
            { id: "c", label: "Alívio, mas logo penso em alguém da família que não teve essa chance" },
            { id: "d", label: "Consigo comemorar livremente, sem peso" },
          ],
        },
        {
          id: "q4",
          question: "Qual frase combina mais com os seus relacionamentos hoje?",
          options: [
            { id: "a", label: "Mesmo tentando mudar, sempre acabo revivendo a mesma história" },
            { id: "b", label: "Dou muito mais do que recebo, tentando ser aceito(a)" },
            { id: "c", label: "Eu me afasto antes de me machucarem, mesmo sem um motivo claro" },
            { id: "d", label: "Carrego os problemas dos outros como se fossem meus" },
          ],
        },
        {
          id: "q5",
          question: "O que você mais deseja resolver agora?",
          options: [
            { id: "a", label: "Entender e romper um padrão que se repete comigo" },
            { id: "b", label: "Me libertar de uma culpa ou peso que não é só meu" },
            { id: "c", label: "Resgatar uma conexão ou uma parte esquecida da minha história familiar" },
            { id: "d", label: "Finalmente me sentir em paz e pertencente à minha família" },
          ],
        },
      ],
    },
    results: {
      metaTitle: "Seu resultado — SoulWeave",
      loading: "Carregando seu resultado...",
      missing: "Não encontramos suas respostas. Vamos refazer o questionário rapidinho?",
      missingCta: "Responder o questionário",
      greeting: "Aqui está o seu resultado, {name}:",
      archetypeLabel: "Seu padrão familiar dominante",
      ctaApp: "Continuar para o app grátis",
      unlockTitle: "Desbloqueie seu Relatório Completo",
      unlockSubtitle:
        "Um PDF completo e personalizado, enviado direto para o seu e-mail, com a origem do seu padrão, como ele afeta sua vida hoje e um plano prático de 21 dias para começar a mudar.",
      whatsIncluded: [
        "A origem exata do seu padrão dentro da sua história familiar",
        "Como esse padrão aparece no seu dia a dia — amor, dinheiro, saúde e trabalho",
        "O que a Constelação Familiar Sistêmica revela sobre o seu caso",
        "Um plano prático de 21 dias para começar a romper o ciclo",
        "Afirmações personalizadas para o seu processo de cura",
      ],
      priceLoading: "Calculando o melhor preço para você...",
      priceNote:
        "Preço convertido para a sua moeda. Inclui uma taxa de processamento e conversão de {feePercent} (transparente, sem custos escondidos).",
      ctaBuy: "Quero meu Relatório Completo",
      secure: "Pagamento 100% seguro, processado pela Stripe.",
      error: "Não foi possível iniciar o pagamento. Tente novamente em instantes.",
    },
    archetypes: {
      brokenLink: {
        title: "O Elo Interrompido",
        shortSummary:
          "{name}, seu padrão dominante é O Elo Interrompido. Isso costuma aparecer quando alguém do seu sistema familiar foi esquecido, excluído ou silenciado — e, sem perceber, você carrega o peso desse vazio. Esse elo perdido pode se manifestar como uma sensação difusa de que falta algo, mesmo quando sua vida está bem. Reconectar esse fio invisível é o primeiro passo para você se sentir inteiro(a) de novo.",
        pdfSections: [
          {
            heading: "Origem do padrão",
            body: [
              "O Elo Interrompido normalmente nasce de uma exclusão dentro do sistema familiar: um filho que morreu muito cedo, um aborto nunca mencionado, um parente que foi expulso da família, um segredo guardado por gerações, ou alguém que emigrou e nunca mais voltou a ser citado.",
              "Segundo a Constelação Familiar Sistêmica, todo sistema busca inconscientemente incluir de volta quem foi excluído. Quando isso não acontece, um membro mais novo da família — muitas vezes sem saber o motivo — passa a 'representar' essa pessoa esquecida, carregando sentimentos que não são originalmente seus.",
            ],
          },
          {
            heading: "Como isso aparece no seu dia a dia",
            body: [
              "Uma sensação recorrente de vazio ou de que 'falta alguma coisa', mesmo quando tudo parece estar bem.",
              "Dificuldade em se sentir plenamente parte de grupos, famílias ou relacionamentos — como se você estivesse sempre um passo de fora.",
              "Fascínio ou conexão inexplicável com temas de perda, exclusão ou desaparecimento.",
              "Momentos de tristeza sem causa aparente, especialmente perto de datas ou aniversários familiares.",
            ],
          },
          {
            heading: "O que a Constelação Familiar revela",
            body: [
              "Na Constelação Familiar Sistêmica, esse padrão é tratado através do reconhecimento: dar um lugar simbólico a quem foi excluído, nomeá-lo e reconhecê-lo como parte do sistema — mesmo que apenas em pensamento e intenção — costuma aliviar imediatamente esse peso nos membros seguintes.",
              "O objetivo não é reviver a dor do passado, mas devolver à pessoa excluída o seu lugar de origem, para que você possa ocupar o seu — inteiro e livre.",
            ],
          },
          {
            heading: "Seu plano de 21 dias para romper o ciclo",
            body: [
              "Semana 1 — Reconhecer: escreva o nome de todas as pessoas da sua família que você conhece (até a geração dos bisavós, se possível) e observe se há alguém de quem quase ninguém fala.",
              "Semana 1 — Diariamente, repita em silêncio: 'Eu te vejo, eu te reconheço, você tem um lugar na nossa família.'",
              "Semana 2 — Escreva uma carta (não precisa enviar) para essa pessoa esquecida, contando que ela não será mais apagada.",
              "Semana 2 — Observe, sem julgamento, os momentos em que sente aquele vazio familiar, e anote o que estava acontecendo antes.",
              "Semana 3 — Pratique se permitir pertencer: aceite um convite, entre em um grupo, ou reforce um vínculo que você costuma manter à distância.",
              "Semana 3 — Feche o ciclo repetindo: 'Eu escolho ficar. Eu tenho o meu lugar aqui.'",
            ],
          },
          {
            heading: "Afirmações para o seu processo",
            body: [
              "Eu reconheço todos que vieram antes de mim, inclusive os que foram esquecidos.",
              "Eu tenho o meu próprio lugar nesta família e nesta vida.",
              "Eu posso pertencer sem precisar carregar o peso de quem foi excluído.",
              "Eu honro o passado e escolho viver plenamente o presente.",
              "Eu sou parte de algo maior, e isso me sustenta.",
            ],
          },
        ],
      },
      invisibleLoyalty: {
        title: "A Lealdade Invisível",
        shortSummary:
          "{name}, seu padrão dominante é A Lealdade Invisível. Parte de você acredita, sem saber, que ser feliz ou bem-sucedido(a) enquanto alguém da sua família sofreu é uma forma de traição. Essa lealdade oculta pode estar te sabotando bem na hora em que a vida começa a dar certo. Entender de onde vem essa lealdade é o caminho para finalmente se permitir prosperar.",
        pdfSections: [
          {
            heading: "Origem do padrão",
            body: [
              "A Lealdade Invisível surge quando, em algum momento da história familiar, alguém sofreu profundamente — um pai que nunca realizou seus sonhos, uma mãe que viveu uma perda enorme, um avô que passou por guerra, pobreza ou doença grave.",
              "Sem perceber, os membros seguintes da família desenvolvem uma lealdade inconsciente: 'Se eu for feliz e essa pessoa sofreu tanto, eu estaria traindo ela.' Essa lealdade costuma ser a explicação mais comum para a autossabotagem logo quando as coisas começam a dar certo.",
            ],
          },
          {
            heading: "Como isso aparece no seu dia a dia",
            body: [
              "Você se sabota justamente quando um projeto, relacionamento ou objetivo financeiro está prestes a dar certo.",
              "Sente culpa ao ganhar mais dinheiro, ter mais sucesso ou mais felicidade do que seus pais ou avós tiveram.",
              "Tem dificuldade em receber — elogios, presentes, ajuda ou amor — sem se sentir desconfortável.",
              "Repete, de forma sutil, situações de sofrimento parecidas com as que um familiar viveu.",
            ],
          },
          {
            heading: "O que a Constelação Familiar revela",
            body: [
              "A Constelação Familiar Sistêmica trabalha esse padrão trazendo à consciência a frase implícita por trás da lealdade — geralmente algo como 'eu sofro para não te deixar sozinho(a) no seu sofrimento' — e substituindo-a por um reconhecimento consciente: 'Eu levo o seu sofrimento a sério, e por respeito a você, eu vou viver bem.'",
              "Esse reconhecimento não apaga o sofrimento do familiar, mas devolve a ele a responsabilidade pelo próprio destino, liberando você para seguir o seu.",
            ],
          },
          {
            heading: "Seu plano de 21 dias para romper o ciclo",
            body: [
              "Semana 1 — Identifique: pense em qual membro da sua família teve a vida mais marcada por sofrimento, perda ou limitação. Anote a história que você conhece dessa pessoa.",
              "Semana 1 — Diariamente, diga em silêncio: 'Eu vejo o seu sofrimento e o respeito profundamente. Ele é seu, e a minha vida é minha.'",
              "Semana 2 — Repare em pelo menos um momento nesta semana em que você se sabotou ou hesitou perto de uma conquista, e anote o que sentiu.",
              "Semana 2 — Pratique receber algo pequeno (um elogio, uma ajuda) sem minimizar ou recusar.",
              "Semana 3 — Escreva uma frase de permissão para você mesmo(a): 'Eu tenho permissão para ser feliz, mesmo que [nome do familiar] tenha sofrido.'",
              "Semana 3 — Celebre uma conquista, por menor que seja, de forma consciente e sem culpa.",
            ],
          },
          {
            heading: "Afirmações para o seu processo",
            body: [
              "Eu honro o sofrimento de quem veio antes de mim sem precisar repeti-lo.",
              "Minha felicidade não é uma traição — é uma continuação do amor da minha família.",
              "Eu posso prosperar e ainda assim pertencer à minha família.",
              "Eu devolvo a cada um o seu destino, e sigo o meu com leveza.",
              "Eu mereço o bem que está chegando até mim.",
            ],
          },
        ],
      },
      inheritedWeight: {
        title: "O Peso Herdado",
        shortSummary:
          "{name}, seu padrão dominante é O Peso Herdado. Você tende a carregar sentimentos — culpa, tristeza, medo — que na verdade pertencem a outra pessoa ou a outra geração da sua família. Esse peso emprestado pesa no corpo e nas decisões, mesmo sem uma causa clara na sua própria vida. Devolver esse peso a quem ele pertence é o que vai te trazer leveza.",
        pdfSections: [
          {
            heading: "Origem do padrão",
            body: [
              "O Peso Herdado aparece quando emoções fortes — culpa, vergonha, luto não resolvido, raiva — não foram processadas por quem as viveu originalmente, e acabam sendo 'transferidas', ainda que invisivelmente, para as gerações seguintes.",
              "Você pode estar carregando uma dor, uma culpa ou até sintomas físicos que, na origem, pertencem a um dos seus pais, avós ou a outro membro do seu sistema familiar.",
            ],
          },
          {
            heading: "Como isso aparece no seu dia a dia",
            body: [
              "Sensação de peso, cansaço ou tristeza que parece 'maior' do que a sua própria vida justificaria.",
              "Sintomas físicos recorrentes sem uma causa médica clara.",
              "Sentir-se responsável por resolver ou consertar o sofrimento de outras pessoas da família.",
              "Dificuldade em se sentir leve ou em paz, mesmo quando não há nenhum problema real acontecendo.",
            ],
          },
          {
            heading: "O que a Constelação Familiar revela",
            body: [
              "Na Constelação Familiar Sistêmica, esse é um dos padrões mais comuns: o chamado 'emaranhamento', quando um membro carrega, por amor cego, algo que pertence a outra pessoa do sistema.",
              "O movimento de cura aqui é simbólico e poderoso: 'Eu pego o que é meu, e devolvo a você o que é seu — com respeito e amor.' Esse simples reconhecimento costuma trazer um alívio físico e emocional perceptível.",
            ],
          },
          {
            heading: "Seu plano de 21 dias para romper o ciclo",
            body: [
              "Semana 1 — Observe: quando sentir aquele peso familiar, pergunte-se 'Isso é realmente meu, ou eu aprendi a carregar isso de alguém?'",
              "Semana 1 — Diariamente, pratique a frase: 'Isto é seu, eu devolvo com amor. Isto é meu, eu assumo com responsabilidade.'",
              "Semana 2 — Escreva uma lista de 3 sentimentos ou responsabilidades que você percebe que não são realmente seus, mas que você carrega há anos.",
              "Semana 2 — Escolha um deles e, simbolicamente, 'devolva' — pode ser através de uma carta, uma visualização ou uma conversa interna.",
              "Semana 3 — Pratique dizer não a pedir para 'consertar' o sofrimento alheio, sem culpa.",
              "Semana 3 — Termine a semana anotando como o seu corpo e a sua mente se sentem depois de começar a soltar esse peso.",
            ],
          },
          {
            heading: "Afirmações para o seu processo",
            body: [
              "Eu carrego apenas o que é meu, com leveza e clareza.",
              "Eu devolvo com amor tudo o que não me pertence.",
              "Eu posso amar minha família sem precisar sofrer por ela.",
              "Meu corpo e minha mente têm permissão para descansar.",
              "Eu escolho a leveza como o meu novo caminho.",
            ],
          },
        ],
      },
      repetitionCycle: {
        title: "O Ciclo de Repetição",
        shortSummary:
          "{name}, seu padrão dominante é O Ciclo de Repetição. Você repete, sem querer, a mesma dinâmica em relacionamentos diferentes — como se um roteiro familiar antigo estivesse se repetindo através de você. Reconhecer esse ciclo é o que te dá o poder de escolher um final diferente desta vez. Esse é exatamente o ponto de partida que a Constelação Familiar Sistêmica trabalha.",
        pdfSections: [
          {
            heading: "Origem do padrão",
            body: [
              "O Ciclo de Repetição acontece quando um padrão de relacionamento, conflito ou escolha se repete de geração em geração — muitas vezes com os mesmos tipos de parceiros, os mesmos conflitos ou os mesmos finais.",
              "Isso costuma indicar uma dinâmica familiar não resolvida que continua 'buscando' uma solução através de você, até que alguém do sistema finalmente a compreenda e escolha algo diferente.",
            ],
          },
          {
            heading: "Como isso aparece no seu dia a dia",
            body: [
              "Você percebe que se envolve, repetidamente, com o mesmo 'tipo' de pessoa ou situação, mesmo jurando que desta vez seria diferente.",
              "Relacionamentos que terminam de formas parecidas, mesmo em contextos completamente diferentes.",
              "Sensação de estar vivendo uma história que já viu acontecer com um dos seus pais ou avós.",
              "Dificuldade em identificar o momento exato em que o padrão 'começa de novo'.",
            ],
          },
          {
            heading: "O que a Constelação Familiar revela",
            body: [
              "A Constelação Familiar Sistêmica mostra que ciclos de repetição costumam existir porque, em algum ponto do sistema familiar, uma experiência não foi totalmente vivida, reconhecida ou encerrada.",
              "Ao trazer esse padrão à consciência — nomeando exatamente o que se repete e de onde ele vem — você deixa de repeti-lo automaticamente e passa a poder escolher, pela primeira vez, uma resposta diferente.",
            ],
          },
          {
            heading: "Seu plano de 21 dias para romper o ciclo",
            body: [
              "Semana 1 — Mapeie: escreva os 2 ou 3 relacionamentos ou situações mais marcantes da sua vida e identifique o que eles têm em comum.",
              "Semana 1 — Pergunte-se: 'Já vi essa mesma história em algum dos meus pais ou avós?' Anote o que encontrar.",
              "Semana 2 — Diariamente, repita: 'Eu vejo o padrão. Eu não preciso repeti-lo. Eu escolho um caminho novo.'",
              "Semana 2 — Na próxima vez que perceber o padrão começando, faça uma escolha consciente diferente — mesmo que pequena.",
              "Semana 3 — Escreva uma 'nova história' de como você quer que suas relações sejam a partir de agora.",
              "Semana 3 — Compartilhe essa nova intenção com alguém de confiança, tornando-a mais real.",
            ],
          },
          {
            heading: "Afirmações para o seu processo",
            body: [
              "Eu reconheço os padrões da minha família com amor, sem precisar repeti-los.",
              "Eu tenho o poder de escolher uma história diferente para mim.",
              "Cada escolha consciente me afasta um passo do ciclo antigo.",
              "Eu honro o que veio antes de mim e sigo em frente com liberdade.",
              "Um novo caminho começa em mim, agora.",
            ],
          },
        ],
      },
      searchForBelonging: {
        title: "A Busca por Pertencimento",
        shortSummary:
          "{name}, seu padrão dominante é A Busca por Pertencimento. Uma parte sua ainda busca um lugar de aceitação total dentro da própria família, e por isso você pode acabar se esforçando demais para ser amado(a) ou aceito(a) nas suas relações. Esse padrão nasce de um vínculo que, em algum momento, não se sentiu totalmente seguro. Voltar a se sentir pertencente começa por entender a origem exata desse vazio.",
        pdfSections: [
          {
            heading: "Origem do padrão",
            body: [
              "A Busca por Pertencimento normalmente nasce de um vínculo familiar inicial que não trouxe total segurança — pode ter sido um nascimento não totalmente celebrado, uma comparação constante com um irmão, uma adoção, uma separação precoce dos pais, ou simplesmente pais que, por seus próprios motivos, não conseguiram estar plenamente presentes.",
              "Desde então, uma parte sua segue buscando, em outros lugares e relações, a certeza de pertencimento que faltou naquele primeiro vínculo.",
            ],
          },
          {
            heading: "Como isso aparece no seu dia a dia",
            body: [
              "Você tende a se esforçar demais — agradando, cuidando ou se adaptando — para garantir que as pessoas fiquem ao seu lado.",
              "Medo de ser deixado de lado, esquecido ou substituído, mesmo em relações estáveis.",
              "Dificuldade em dizer não, por medo de perder o afeto ou o lugar que conquistou.",
              "Sensação de estar sempre 'provando seu valor' para ser aceito(a).",
            ],
          },
          {
            heading: "O que a Constelação Familiar revela",
            body: [
              "A Constelação Familiar Sistêmica mostra que o pertencimento é um direito de nascença, não algo que precisa ser conquistado ou merecido — todo membro de um sistema tem, por direito, um lugar nele, independente do que tenha acontecido.",
              "O trabalho aqui é reconectar você a essa certeza mais profunda: seu lugar na sua família (e na vida) nunca dependeu do quanto você se esforça, e sempre foi seu por direito.",
            ],
          },
          {
            heading: "Seu plano de 21 dias para romper o ciclo",
            body: [
              "Semana 1 — Observe: em quais relações você sente que precisa 'se esforçar' para ser aceito(a)? Liste pelo menos 3 situações recentes.",
              "Semana 1 — Diariamente, repita: 'Eu pertenço, mesmo sem precisar provar nada.'",
              "Semana 2 — Pratique dizer não uma vez, mesmo que pequena, sem se justificar excessivamente.",
              "Semana 2 — Observe como seu corpo reage quando você para de 'se esforçar' — anote o desconforto e deixe que ele passe.",
              "Semana 3 — Escreva uma carta para a criança que você foi, garantindo a ela que ela sempre teve um lugar na família.",
              "Semana 3 — Escolha uma relação em que você possa simplesmente 'ser', sem cuidar ou agradar, e observe o que acontece.",
            ],
          },
          {
            heading: "Afirmações para o seu processo",
            body: [
              "Eu pertenço por direito, não por esforço.",
              "Eu posso ser eu mesmo(a) e ainda assim ser amado(a).",
              "Meu lugar na minha família e na minha vida nunca esteve em risco.",
              "Eu não preciso me provar para merecer amor.",
              "Eu me acolho exatamente como sou.",
            ],
          },
        ],
      },
    },
    thankYou: {
      metaTitle: "Pagamento confirmado — SoulWeave",
      verifying: "Confirmando seu pagamento...",
      successTitle: "Pagamento confirmado!",
      successSubtitle:
        "Seu Relatório Completo está a caminho de {email}. Pode levar alguns minutos para chegar — não esqueça de checar a caixa de spam.",
      resendButton: "Não recebeu? Reenviar e-mail",
      resendSuccess: "E-mail reenviado! Confira sua caixa de entrada.",
      resendError: "Não conseguimos reenviar agora. Tente novamente em instantes.",
      continueApp: "Ir para o app agora",
      failedTitle: "Não encontramos esse pagamento",
      failedSubtitle: "Verifique o link que você usou ou volte para tentar novamente.",
      backHome: "Voltar para o início",
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
      success: "All set! Let's get your quick questionnaire...",
      redirecting: "Preparing your personalized questionnaire...",
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
    quiz: {
      metaTitle: "Discover your family pattern — Quiz",
      badge: "FREE QUIZ",
      intro:
        "Answer 5 quick questions to discover which family pattern is most present in your life right now.",
      progressLabel: "Question {current} of {total}",
      next: "Next",
      back: "Back",
      submit: "See my result",
      questions: [
        {
          id: "q1",
          question: "Which area of your life most reflects a pattern that feels 'bigger than you'?",
          options: [
            { id: "a", label: "Romantic relationships — I keep repeating the same story" },
            { id: "b", label: "Money and success — I feel like I can't have more than my parents did" },
            { id: "c", label: "Health and body — symptoms or aches that don't feel like just mine" },
            { id: "d", label: "A constant feeling of not belonging anywhere" },
          ],
        },
        {
          id: "q2",
          question: "Is there someone in your family, alive or deceased, that almost no one talks about?",
          options: [
            { id: "a", label: "Yes — someone was basically erased from the family's story" },
            { id: "b", label: "Yes — someone had a tragic fate (an early loss, a severe illness, a tragedy)" },
            { id: "c", label: "Not that I know of, but I feel like a piece of my family's story is missing" },
            { id: "d", label: "No, everyone in my family is remembered and mentioned" },
          ],
        },
        {
          id: "q3",
          question: "When you receive praise or reach an important milestone, what do you feel inside?",
          options: [
            { id: "a", label: "A strange guilt, as if I don't fully deserve it" },
            { id: "b", label: "An urge to hide — I'm afraid of standing out too much" },
            { id: "c", label: "Relief, but I quickly think of a family member who never got that chance" },
            { id: "d", label: "I can celebrate freely, without any weight" },
          ],
        },
        {
          id: "q4",
          question: "Which sentence best matches your relationships today?",
          options: [
            { id: "a", label: "No matter how hard I try to change, I keep reliving the same story" },
            { id: "b", label: "I give far more than I receive, trying to be accepted" },
            { id: "c", label: "I pull away before I can get hurt, even without a clear reason" },
            { id: "d", label: "I carry other people's problems as if they were my own" },
          ],
        },
        {
          id: "q5",
          question: "What do you most want to resolve right now?",
          options: [
            { id: "a", label: "Understand and break a pattern that keeps repeating in my life" },
            { id: "b", label: "Free myself from a guilt or weight that isn't fully mine" },
            { id: "c", label: "Reconnect with a lost part of my family's story" },
            { id: "d", label: "Finally feel at peace and truly belonging in my family" },
          ],
        },
      ],
    },
    results: {
      metaTitle: "Your result — SoulWeave",
      loading: "Loading your result...",
      missing: "We couldn't find your answers. Let's quickly redo the quiz?",
      missingCta: "Take the quiz",
      greeting: "Here's your result, {name}:",
      archetypeLabel: "Your dominant family pattern",
      ctaApp: "Continue to the free app",
      unlockTitle: "Unlock Your Complete Report",
      unlockSubtitle:
        "A complete, personalized PDF sent straight to your email, covering the origin of your pattern, how it affects your life today, and a practical 21-day plan to start changing it.",
      whatsIncluded: [
        "The exact origin of your pattern within your family history",
        "How this pattern shows up in your daily life — love, money, health and work",
        "What Systemic Family Constellation reveals about your specific case",
        "A practical 21-day plan to start breaking the cycle",
        "Personalized affirmations for your healing process",
      ],
      priceLoading: "Calculating the best price for you...",
      priceNote:
        "Price converted to your currency. Includes a {feePercent} processing and conversion fee (transparent, no hidden costs).",
      ctaBuy: "I want my Complete Report",
      secure: "100% secure payment, processed by Stripe.",
      error: "We couldn't start the payment. Please try again in a moment.",
    },
    archetypes: {
      brokenLink: {
        title: "The Broken Link",
        shortSummary:
          "{name}, your dominant pattern is The Broken Link. This usually shows up when someone in your family system was forgotten, excluded, or silenced — and, without realizing it, you've been carrying the weight of that void. This missing link can feel like a vague sense that something is missing, even when your life looks fine on the outside. Reconnecting that invisible thread is the first step to feeling whole again.",
        pdfSections: [
          {
            heading: "Where this pattern comes from",
            body: [
              "The Broken Link usually originates from an exclusion within the family system: a child who died very young, a pregnancy loss never mentioned, a relative who was cast out of the family, a secret kept for generations, or someone who emigrated and was never spoken of again.",
              "According to Systemic Family Constellation work, every family system unconsciously seeks to include back whoever was excluded. When that doesn't happen, a younger family member — often without knowing why — starts to unconsciously 'represent' that forgotten person, carrying feelings that were never originally theirs.",
            ],
          },
          {
            heading: "How it shows up in your daily life",
            body: [
              "A recurring sense of emptiness or of 'something missing', even when everything seems fine.",
              "Difficulty feeling fully part of groups, families, or relationships — as if you're always one step outside.",
              "An unexplained fascination or connection with themes of loss, exclusion, or disappearance.",
              "Moments of sadness with no clear cause, especially around family anniversaries or dates.",
            ],
          },
          {
            heading: "What Systemic Family Constellation reveals",
            body: [
              "In Systemic Family Constellation work, this pattern is addressed through acknowledgment: symbolically giving the excluded person a place, naming them, and recognizing them as part of the system — even just in thought and intention — tends to bring immediate relief to the members who came after.",
              "The goal isn't to relive the past's pain, but to give the excluded person back their original place, so you can fully and freely occupy your own.",
            ],
          },
          {
            heading: "Your 21-day plan to break the cycle",
            body: [
              "Week 1 — Acknowledge: write down the names of everyone in your family you know of (back to your great-grandparents' generation if possible), and notice if there's anyone almost no one talks about.",
              "Week 1 — Daily, repeat silently: 'I see you, I acknowledge you, you have a place in our family.'",
              "Week 2 — Write a letter (you don't have to send it) to that forgotten person, telling them they won't be erased anymore.",
              "Week 2 — Without judgment, notice the moments you feel that familiar emptiness, and write down what was happening right before.",
              "Week 3 — Practice allowing yourself to belong: accept an invitation, join a group, or strengthen a bond you tend to keep at a distance.",
              "Week 3 — Close the cycle by repeating: 'I choose to stay. I have my own place here.'",
            ],
          },
          {
            heading: "Affirmations for your process",
            body: [
              "I acknowledge everyone who came before me, including those who were forgotten.",
              "I have my own place in this family and in this life.",
              "I can belong without carrying the weight of who was excluded.",
              "I honor the past and choose to fully live the present.",
              "I am part of something larger, and it holds me.",
            ],
          },
        ],
      },
      invisibleLoyalty: {
        title: "The Invisible Loyalty",
        shortSummary:
          "{name}, your dominant pattern is The Invisible Loyalty. Part of you unconsciously believes that being happy or successful while someone in your family suffered would be a form of betrayal. This hidden loyalty tends to sabotage you right when things start going well. Understanding where that loyalty comes from is the path to finally letting yourself thrive.",
        pdfSections: [
          {
            heading: "Where this pattern comes from",
            body: [
              "The Invisible Loyalty emerges when, at some point in the family's history, someone suffered deeply — a parent who never fulfilled their dreams, a mother who lived through a huge loss, a grandparent who went through war, poverty, or serious illness.",
              "Without realizing it, the family members who came after develop an unconscious loyalty: 'If I'm happy while this person suffered so much, I'd be betraying them.' This hidden loyalty is one of the most common explanations for self-sabotage right when things start to go well.",
            ],
          },
          {
            heading: "How it shows up in your daily life",
            body: [
              "You sabotage yourself right when a project, relationship, or financial goal is about to succeed.",
              "You feel guilty earning more money, having more success, or more happiness than your parents or grandparents had.",
              "You struggle to receive — compliments, gifts, help, or love — without feeling uncomfortable.",
              "You subtly repeat situations of suffering similar to what a family member went through.",
            ],
          },
          {
            heading: "What Systemic Family Constellation reveals",
            body: [
              "Systemic Family Constellation work addresses this pattern by bringing the implicit sentence behind the loyalty into awareness — usually something like 'I suffer so you're not alone in your suffering' — and replacing it with a conscious acknowledgment: 'I take your suffering seriously, and out of respect for you, I will live well.'",
              "This acknowledgment doesn't erase the family member's suffering, but it gives them back responsibility for their own fate, freeing you to follow yours.",
            ],
          },
          {
            heading: "Your 21-day plan to break the cycle",
            body: [
              "Week 1 — Identify: think about which family member's life was most marked by suffering, loss, or hardship. Write down the story you know about them.",
              "Week 1 — Daily, say silently: 'I see your suffering and I deeply respect it. It's yours, and my life is mine.'",
              "Week 2 — Notice at least one moment this week when you sabotaged yourself or hesitated near an achievement, and write down what you felt.",
              "Week 2 — Practice receiving something small (a compliment, help) without minimizing or refusing it.",
              "Week 3 — Write a permission statement for yourself: 'I have permission to be happy, even though [family member's name] suffered.'",
              "Week 3 — Consciously celebrate an achievement, however small, without guilt.",
            ],
          },
          {
            heading: "Affirmations for your process",
            body: [
              "I honor the suffering of those who came before me without needing to repeat it.",
              "My happiness isn't a betrayal — it's a continuation of my family's love.",
              "I can thrive and still belong to my family.",
              "I give each person back their own fate, and I follow mine with ease.",
              "I deserve the good that is coming to me.",
            ],
          },
        ],
      },
      inheritedWeight: {
        title: "The Inherited Weight",
        shortSummary:
          "{name}, your dominant pattern is The Inherited Weight. You tend to carry feelings — guilt, sadness, fear — that actually belong to someone else, or to an earlier generation of your family. That borrowed weight shows up in your body and your decisions, even without a clear cause in your own life. Giving that weight back to whom it belongs is what will bring you lightness.",
        pdfSections: [
          {
            heading: "Where this pattern comes from",
            body: [
              "The Inherited Weight shows up when strong emotions — guilt, shame, unresolved grief, anger — were never processed by the person who originally lived them, and end up being invisibly 'passed down' to the following generations.",
              "You may be carrying a pain, a guilt, or even physical symptoms that, at their root, belong to one of your parents, grandparents, or another member of your family system.",
            ],
          },
          {
            heading: "How it shows up in your daily life",
            body: [
              "A sense of heaviness, exhaustion, or sadness that feels 'bigger' than your own life would justify.",
              "Recurring physical symptoms with no clear medical cause.",
              "Feeling responsible for fixing or resolving other family members' suffering.",
              "Difficulty feeling light or at peace, even when nothing is actually wrong.",
            ],
          },
          {
            heading: "What Systemic Family Constellation reveals",
            body: [
              "In Systemic Family Constellation work, this is one of the most common patterns: so-called 'entanglement', when a member carries something that belongs to someone else in the system, out of blind love.",
              "The healing movement here is symbolic and powerful: 'I take what's mine, and I give you back what's yours — with respect and love.' This simple acknowledgment often brings a noticeable physical and emotional relief.",
            ],
          },
          {
            heading: "Your 21-day plan to break the cycle",
            body: [
              "Week 1 — Observe: when you feel that familiar heaviness, ask yourself, 'Is this really mine, or did I learn to carry it from someone else?'",
              "Week 1 — Daily, practice the phrase: 'This is yours, I give it back with love. This is mine, I take responsibility for it.'",
              "Week 2 — Write a list of 3 feelings or responsibilities you notice aren't really yours, but that you've carried for years.",
              "Week 2 — Pick one of them and symbolically 'give it back' — through a letter, a visualization, or an inner conversation.",
              "Week 3 — Practice saying no to fixing other people's suffering, without guilt.",
              "Week 3 — End the week by writing down how your body and mind feel after starting to let go of that weight.",
            ],
          },
          {
            heading: "Affirmations for your process",
            body: [
              "I carry only what's mine, with lightness and clarity.",
              "I lovingly give back everything that isn't mine.",
              "I can love my family without needing to suffer for them.",
              "My body and mind have permission to rest.",
              "I choose lightness as my new path.",
            ],
          },
        ],
      },
      repetitionCycle: {
        title: "The Repetition Cycle",
        shortSummary:
          "{name}, your dominant pattern is The Repetition Cycle. Without meaning to, you repeat the same dynamic across different relationships — as if an old family script keeps replaying itself through you. Recognizing this cycle is what gives you the power to choose a different ending this time. This is exactly where Systemic Family Constellation work begins.",
        pdfSections: [
          {
            heading: "Where this pattern comes from",
            body: [
              "The Repetition Cycle happens when a relationship pattern, conflict, or choice repeats from generation to generation — often with the same type of partners, the same conflicts, or the same endings.",
              "This usually points to an unresolved family dynamic that keeps 'looking' for a resolution through you, until someone in the system finally understands it and chooses something different.",
            ],
          },
          {
            heading: "How it shows up in your daily life",
            body: [
              "You notice you repeatedly get involved with the same 'type' of person or situation, even after swearing this time would be different.",
              "Relationships that end in similar ways, even in completely different contexts.",
              "A feeling of living out a story you've already seen happen to one of your parents or grandparents.",
              "Difficulty pinpointing the exact moment the pattern 'starts over.'",
            ],
          },
          {
            heading: "What Systemic Family Constellation reveals",
            body: [
              "Systemic Family Constellation work shows that repetition cycles tend to exist because, at some point in the family system, an experience was never fully lived through, acknowledged, or closed.",
              "By bringing this pattern into awareness — naming exactly what repeats and where it comes from — you stop repeating it automatically, and for the first time, you can consciously choose a different response.",
            ],
          },
          {
            heading: "Your 21-day plan to break the cycle",
            body: [
              "Week 1 — Map it out: write down the 2 or 3 most significant relationships or situations in your life, and identify what they have in common.",
              "Week 1 — Ask yourself: 'Have I seen this same story happen with one of my parents or grandparents?' Write down what you find.",
              "Week 2 — Daily, repeat: 'I see the pattern. I don't need to repeat it. I choose a new path.'",
              "Week 2 — The next time you notice the pattern starting, make a different conscious choice — even a small one.",
              "Week 3 — Write a 'new story' of how you want your relationships to be from now on.",
              "Week 3 — Share this new intention with someone you trust, to make it more real.",
            ],
          },
          {
            heading: "Affirmations for your process",
            body: [
              "I acknowledge my family's patterns with love, without needing to repeat them.",
              "I have the power to choose a different story for myself.",
              "Every conscious choice takes me one step further from the old cycle.",
              "I honor what came before me and move forward in freedom.",
              "A new path begins in me, now.",
            ],
          },
        ],
      },
      searchForBelonging: {
        title: "The Search for Belonging",
        shortSummary:
          "{name}, your dominant pattern is The Search for Belonging. Part of you is still looking for a place of full acceptance within your own family, which can lead you to try too hard to be loved or accepted in your relationships. This pattern is born from a bond that, at some point, didn't feel fully safe. Feeling like you truly belong again starts with understanding exactly where that emptiness comes from.",
        pdfSections: [
          {
            heading: "Where this pattern comes from",
            body: [
              "The Search for Belonging usually originates from an early family bond that didn't bring full safety — it could have been a birth that wasn't fully celebrated, constant comparison with a sibling, an adoption, an early separation from parents, or simply parents who, for their own reasons, couldn't be fully present.",
              "Since then, part of you keeps searching, in other places and relationships, for the certainty of belonging that was missing in that first bond.",
            ],
          },
          {
            heading: "How it shows up in your daily life",
            body: [
              "You tend to try too hard — pleasing, caretaking, or adapting — to make sure people stay by your side.",
              "Fear of being left out, forgotten, or replaced, even in stable relationships.",
              "Difficulty saying no, out of fear of losing the affection or place you've earned.",
              "A constant feeling of needing to 'prove your worth' to be accepted.",
            ],
          },
          {
            heading: "What Systemic Family Constellation reveals",
            body: [
              "Systemic Family Constellation work shows that belonging is a birthright, not something that needs to be earned or deserved — every member of a system has, by right, a place in it, regardless of what happened.",
              "The work here is to reconnect you to that deeper certainty: your place in your family (and in life) was never about how hard you try, and it was always yours by right.",
            ],
          },
          {
            heading: "Your 21-day plan to break the cycle",
            body: [
              "Week 1 — Observe: in which relationships do you feel you need to 'try hard' to be accepted? List at least 3 recent situations.",
              "Week 1 — Daily, repeat: 'I belong, even without needing to prove anything.'",
              "Week 2 — Practice saying no once, even about something small, without over-justifying yourself.",
              "Week 2 — Notice how your body reacts when you stop 'trying so hard' — write down the discomfort and let it pass.",
              "Week 3 — Write a letter to the child you once were, promising them they always had a place in the family.",
              "Week 3 — Choose one relationship where you can simply 'be', without caretaking or pleasing, and notice what happens.",
            ],
          },
          {
            heading: "Affirmations for your process",
            body: [
              "I belong by right, not by effort.",
              "I can be myself and still be loved.",
              "My place in my family and in my life was never at risk.",
              "I don't need to prove myself to deserve love.",
              "I embrace myself exactly as I am.",
            ],
          },
        ],
      },
    },
    thankYou: {
      metaTitle: "Payment confirmed — SoulWeave",
      verifying: "Confirming your payment...",
      successTitle: "Payment confirmed!",
      successSubtitle:
        "Your Complete Report is on its way to {email}. It may take a few minutes to arrive — don't forget to check your spam folder.",
      resendButton: "Didn't get it? Resend email",
      resendSuccess: "Email resent! Check your inbox.",
      resendError: "We couldn't resend it right now. Please try again in a moment.",
      continueApp: "Go to the app now",
      failedTitle: "We couldn't find that payment",
      failedSubtitle: "Check the link you used, or go back and try again.",
      backHome: "Back to home",
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
      success: "¡Listo! Vamos a tu cuestionario rápido...",
      redirecting: "Preparando tu cuestionario personalizado...",
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
    quiz: {
      metaTitle: "Descubre tu patrón familiar — Cuestionario",
      badge: "CUESTIONARIO GRATUITO",
      intro:
        "Responde 5 preguntas rápidas para descubrir qué patrón familiar está más presente en tu vida ahora.",
      progressLabel: "Pregunta {current} de {total}",
      next: "Siguiente",
      back: "Atrás",
      submit: "Ver mi resultado",
      questions: [
        {
          id: "q1",
          question: "¿Qué área de tu vida refleja más un patrón que parece 'más grande que tú'?",
          options: [
            { id: "a", label: "Relaciones amorosas — siempre termino repitiendo la misma historia" },
            { id: "b", label: "Dinero y éxito — siento que no puedo tener más de lo que tuvieron mis padres" },
            { id: "c", label: "Salud y cuerpo — síntomas o dolores que no parecen ser solo míos" },
            { id: "d", label: "Una sensación constante de no pertenecer a ningún lugar" },
          ],
        },
        {
          id: "q2",
          question: "¿Hay alguien en tu familia, vivo o fallecido, del que casi nadie habla?",
          options: [
            { id: "a", label: "Sí — alguien fue prácticamente borrado de la historia familiar" },
            { id: "b", label: "Sí — alguien tuvo un destino trágico (una pérdida muy temprana, una enfermedad grave, una tragedia)" },
            { id: "c", label: "No que yo sepa, pero siento que falta una parte en la historia de mi familia" },
            { id: "d", label: "No, en mi familia todos son recordados y mencionados" },
          ],
        },
        {
          id: "q3",
          question: "Cuando recibes un elogio o vives un logro importante, ¿qué sientes por dentro?",
          options: [
            { id: "a", label: "Una culpa extraña, como si no lo mereciera del todo" },
            { id: "b", label: "Ganas de esconderme — me da miedo destacar demasiado" },
            { id: "c", label: "Alivio, pero enseguida pienso en alguien de mi familia que no tuvo esa oportunidad" },
            { id: "d", label: "Puedo celebrar libremente, sin ningún peso" },
          ],
        },
        {
          id: "q4",
          question: "¿Qué frase describe mejor tus relaciones hoy?",
          options: [
            { id: "a", label: "Aunque intento cambiar, siempre acabo reviviendo la misma historia" },
            { id: "b", label: "Doy mucho más de lo que recibo, tratando de ser aceptado(a)" },
            { id: "c", label: "Me alejo antes de que me lastimen, incluso sin un motivo claro" },
            { id: "d", label: "Cargo con los problemas de los demás como si fueran míos" },
          ],
        },
        {
          id: "q5",
          question: "¿Qué es lo que más deseas resolver ahora?",
          options: [
            { id: "a", label: "Entender y romper un patrón que se repite en mi vida" },
            { id: "b", label: "Liberarme de una culpa o un peso que no es del todo mío" },
            { id: "c", label: "Reconectar con una parte perdida de la historia de mi familia" },
            { id: "d", label: "Finalmente sentirme en paz y perteneciendo a mi familia" },
          ],
        },
      ],
    },
    results: {
      metaTitle: "Tu resultado — SoulWeave",
      loading: "Cargando tu resultado...",
      missing: "No encontramos tus respuestas. ¿Quieres repetir el cuestionario rápidamente?",
      missingCta: "Responder el cuestionario",
      greeting: "Aquí está tu resultado, {name}:",
      archetypeLabel: "Tu patrón familiar dominante",
      ctaApp: "Continuar a la app gratuita",
      unlockTitle: "Desbloquea tu Informe Completo",
      unlockSubtitle:
        "Un PDF completo y personalizado, enviado directo a tu correo, con el origen de tu patrón, cómo afecta tu vida hoy y un plan práctico de 21 días para empezar a cambiarlo.",
      whatsIncluded: [
        "El origen exacto de tu patrón dentro de tu historia familiar",
        "Cómo aparece este patrón en tu día a día — amor, dinero, salud y trabajo",
        "Lo que la Constelación Familiar Sistémica revela sobre tu caso",
        "Un plan práctico de 21 días para empezar a romper el ciclo",
        "Afirmaciones personalizadas para tu proceso de sanación",
      ],
      priceLoading: "Calculando el mejor precio para ti...",
      priceNote:
        "Precio convertido a tu moneda. Incluye una tarifa de procesamiento y conversión de {feePercent} (transparente, sin costos ocultos).",
      ctaBuy: "Quiero mi Informe Completo",
      secure: "Pago 100% seguro, procesado por Stripe.",
      error: "No pudimos iniciar el pago. Inténtalo de nuevo en un momento.",
    },
    archetypes: {
      brokenLink: {
        title: "El Vínculo Interrumpido",
        shortSummary:
          "{name}, tu patrón dominante es El Vínculo Interrumpido. Esto suele aparecer cuando alguien de tu sistema familiar fue olvidado, excluido o silenciado, y, sin darte cuenta, tú cargas con el peso de ese vacío. Este vínculo perdido puede sentirse como una sensación difusa de que algo falta, incluso cuando tu vida parece estar bien. Reconectar ese hilo invisible es el primer paso para sentirte completo(a) de nuevo.",
        pdfSections: [
          {
            heading: "Origen del patrón",
            body: [
              "El Vínculo Interrumpido normalmente nace de una exclusión dentro del sistema familiar: un hijo que murió muy joven, un aborto nunca mencionado, un familiar expulsado de la familia, un secreto guardado por generaciones, o alguien que emigró y del que nunca más se volvió a hablar.",
              "Según la Constelación Familiar Sistémica, todo sistema busca inconscientemente incluir de nuevo a quien fue excluido. Cuando esto no ocurre, un miembro más joven de la familia —muchas veces sin saber por qué— comienza a 'representar' a esa persona olvidada, cargando sentimientos que originalmente no eran suyos.",
            ],
          },
          {
            heading: "Cómo aparece en tu día a día",
            body: [
              "Una sensación recurrente de vacío o de que 'falta algo', incluso cuando todo parece estar bien.",
              "Dificultad para sentirte plenamente parte de grupos, familias o relaciones, como si siempre estuvieras un paso afuera.",
              "Una fascinación o conexión inexplicable con temas de pérdida, exclusión o desaparición.",
              "Momentos de tristeza sin causa aparente, especialmente cerca de fechas o aniversarios familiares.",
            ],
          },
          {
            heading: "Lo que revela la Constelación Familiar",
            body: [
              "En la Constelación Familiar Sistémica, este patrón se aborda mediante el reconocimiento: dar un lugar simbólico a quien fue excluido, nombrarlo y reconocerlo como parte del sistema —aunque sea solo en pensamiento e intención— suele aliviar de inmediato ese peso en los miembros siguientes.",
              "El objetivo no es revivir el dolor del pasado, sino devolverle a la persona excluida su lugar de origen, para que tú puedas ocupar el tuyo, completo y libre.",
            ],
          },
          {
            heading: "Tu plan de 21 días para romper el ciclo",
            body: [
              "Semana 1 — Reconoce: escribe el nombre de todas las personas de tu familia que conozcas (hasta la generación de tus bisabuelos, si es posible) y observa si hay alguien de quien casi nadie habla.",
              "Semana 1 — A diario, repite en silencio: 'Te veo, te reconozco, tienes un lugar en nuestra familia.'",
              "Semana 2 — Escribe una carta (no hace falta enviarla) a esa persona olvidada, contándole que ya no será borrada.",
              "Semana 2 — Observa, sin juzgarte, los momentos en que sientes ese vacío familiar, y anota qué estaba pasando justo antes.",
              "Semana 3 — Practica permitirte pertenecer: acepta una invitación, únete a un grupo o fortalece un vínculo que sueles mantener a distancia.",
              "Semana 3 — Cierra el ciclo repitiendo: 'Elijo quedarme. Tengo mi lugar aquí.'",
            ],
          },
          {
            heading: "Afirmaciones para tu proceso",
            body: [
              "Reconozco a todos los que vinieron antes que yo, incluso a los que fueron olvidados.",
              "Tengo mi propio lugar en esta familia y en esta vida.",
              "Puedo pertenecer sin cargar con el peso de quien fue excluido.",
              "Honro el pasado y elijo vivir plenamente el presente.",
              "Soy parte de algo más grande, y eso me sostiene.",
            ],
          },
        ],
      },
      invisibleLoyalty: {
        title: "La Lealtad Invisible",
        shortSummary:
          "{name}, tu patrón dominante es La Lealtad Invisible. Una parte de ti cree, sin saberlo, que ser feliz o exitoso(a) mientras alguien de tu familia sufrió sería una forma de traición. Esta lealtad oculta suele sabotearte justo cuando la vida empieza a ir bien. Entender de dónde viene esa lealtad es el camino para finalmente permitirte prosperar.",
        pdfSections: [
          {
            heading: "Origen del patrón",
            body: [
              "La Lealtad Invisible surge cuando, en algún momento de la historia familiar, alguien sufrió profundamente: un padre que nunca cumplió sus sueños, una madre que vivió una gran pérdida, un abuelo que atravesó una guerra, la pobreza o una enfermedad grave.",
              "Sin darse cuenta, los miembros siguientes de la familia desarrollan una lealtad inconsciente: 'Si soy feliz mientras esta persona sufrió tanto, la estaría traicionando.' Esta lealtad oculta suele ser la explicación más común del autosabotaje justo cuando las cosas empiezan a salir bien.",
            ],
          },
          {
            heading: "Cómo aparece en tu día a día",
            body: [
              "Te saboteas justo cuando un proyecto, una relación o una meta financiera está a punto de lograrse.",
              "Sientes culpa al ganar más dinero, tener más éxito o más felicidad de la que tuvieron tus padres o abuelos.",
              "Te cuesta recibir —elogios, regalos, ayuda o amor— sin sentirte incómodo(a).",
              "Repites, de forma sutil, situaciones de sufrimiento parecidas a las que vivió un familiar.",
            ],
          },
          {
            heading: "Lo que revela la Constelación Familiar",
            body: [
              "La Constelación Familiar Sistémica trabaja este patrón trayendo a la conciencia la frase implícita detrás de la lealtad —generalmente algo como 'sufro para que no estés solo(a) en tu sufrimiento'— y reemplazándola por un reconocimiento consciente: 'Tomo en serio tu sufrimiento, y por respeto a ti, voy a vivir bien.'",
              "Este reconocimiento no borra el sufrimiento del familiar, pero le devuelve la responsabilidad de su propio destino, liberándote para seguir el tuyo.",
            ],
          },
          {
            heading: "Tu plan de 21 días para romper el ciclo",
            body: [
              "Semana 1 — Identifica: piensa en qué miembro de tu familia tuvo la vida más marcada por el sufrimiento, la pérdida o la limitación. Anota la historia que conoces de esa persona.",
              "Semana 1 — A diario, di en silencio: 'Veo tu sufrimiento y lo respeto profundamente. Es tuyo, y mi vida es mía.'",
              "Semana 2 — Observa al menos un momento esta semana en que te hayas saboteado o dudado cerca de un logro, y anota qué sentiste.",
              "Semana 2 — Practica recibir algo pequeño (un elogio, una ayuda) sin minimizarlo ni rechazarlo.",
              "Semana 3 — Escribe una frase de permiso para ti mismo(a): 'Tengo permiso para ser feliz, aunque [nombre del familiar] haya sufrido.'",
              "Semana 3 — Celebra un logro, por pequeño que sea, de forma consciente y sin culpa.",
            ],
          },
          {
            heading: "Afirmaciones para tu proceso",
            body: [
              "Honro el sufrimiento de quienes vinieron antes que yo sin necesidad de repetirlo.",
              "Mi felicidad no es una traición, es una continuación del amor de mi familia.",
              "Puedo prosperar y aun así pertenecer a mi familia.",
              "Devuelvo a cada quien su propio destino, y sigo el mío con ligereza.",
              "Merezco el bien que está llegando a mí.",
            ],
          },
        ],
      },
      inheritedWeight: {
        title: "El Peso Heredado",
        shortSummary:
          "{name}, tu patrón dominante es El Peso Heredado. Sueles cargar sentimientos —culpa, tristeza, miedo— que en realidad pertenecen a otra persona o a otra generación de tu familia. Ese peso prestado se siente en el cuerpo y en las decisiones, incluso sin una causa clara en tu propia vida. Devolver ese peso a quien le pertenece es lo que te traerá ligereza.",
        pdfSections: [
          {
            heading: "Origen del patrón",
            body: [
              "El Peso Heredado aparece cuando emociones fuertes —culpa, vergüenza, duelo no resuelto, ira— no fueron procesadas por quien las vivió originalmente, y terminan siendo 'transferidas', de forma invisible, a las generaciones siguientes.",
              "Puede que estés cargando un dolor, una culpa o incluso síntomas físicos que, en su origen, pertenecen a uno de tus padres, abuelos u otro miembro de tu sistema familiar.",
            ],
          },
          {
            heading: "Cómo aparece en tu día a día",
            body: [
              "Sensación de peso, cansancio o tristeza que parece 'más grande' de lo que tu propia vida justificaría.",
              "Síntomas físicos recurrentes sin una causa médica clara.",
              "Sentirte responsable de resolver o arreglar el sufrimiento de otros miembros de la familia.",
              "Dificultad para sentirte ligero(a) o en paz, incluso cuando no hay ningún problema real ocurriendo.",
            ],
          },
          {
            heading: "Lo que revela la Constelación Familiar",
            body: [
              "En la Constelación Familiar Sistémica, este es uno de los patrones más comunes: el llamado 'enredo', cuando un miembro carga, por amor ciego, algo que pertenece a otra persona del sistema.",
              "El movimiento de sanación aquí es simbólico y poderoso: 'Tomo lo que es mío, y te devuelvo lo que es tuyo, con respeto y amor.' Este simple reconocimiento suele traer un alivio físico y emocional perceptible.",
            ],
          },
          {
            heading: "Tu plan de 21 días para romper el ciclo",
            body: [
              "Semana 1 — Observa: cuando sientas ese peso familiar, pregúntate '¿Esto es realmente mío, o aprendí a cargarlo de alguien más?'",
              "Semana 1 — A diario, practica la frase: 'Esto es tuyo, te lo devuelvo con amor. Esto es mío, lo asumo con responsabilidad.'",
              "Semana 2 — Escribe una lista de 3 sentimientos o responsabilidades que notas que no son realmente tuyos, pero que cargas desde hace años.",
              "Semana 2 — Elige uno de ellos y, simbólicamente, 'devuélvelo' —puede ser mediante una carta, una visualización o una conversación interna.",
              "Semana 3 — Practica decir que no a intentar 'arreglar' el sufrimiento ajeno, sin culpa.",
              "Semana 3 — Termina la semana anotando cómo se sienten tu cuerpo y tu mente después de empezar a soltar ese peso.",
            ],
          },
          {
            heading: "Afirmaciones para tu proceso",
            body: [
              "Cargo solo con lo que es mío, con ligereza y claridad.",
              "Devuelvo con amor todo lo que no me pertenece.",
              "Puedo amar a mi familia sin necesidad de sufrir por ella.",
              "Mi cuerpo y mi mente tienen permiso para descansar.",
              "Elijo la ligereza como mi nuevo camino.",
            ],
          },
        ],
      },
      repetitionCycle: {
        title: "El Ciclo de Repetición",
        shortSummary:
          "{name}, tu patrón dominante es El Ciclo de Repetición. Sin quererlo, repites la misma dinámica en relaciones distintas, como si un guion familiar antiguo se repitiera a través de ti. Reconocer este ciclo es lo que te da el poder de elegir un final diferente esta vez. Este es exactamente el punto de partida del trabajo de Constelación Familiar Sistémica.",
        pdfSections: [
          {
            heading: "Origen del patrón",
            body: [
              "El Ciclo de Repetición ocurre cuando un patrón de relación, conflicto o elección se repite de generación en generación, muchas veces con el mismo tipo de parejas, los mismos conflictos o los mismos finales.",
              "Esto suele indicar una dinámica familiar no resuelta que sigue 'buscando' una solución a través de ti, hasta que alguien del sistema finalmente la comprenda y elija algo diferente.",
            ],
          },
          {
            heading: "Cómo aparece en tu día a día",
            body: [
              "Notas que te involucras repetidamente con el mismo 'tipo' de persona o situación, incluso jurando que esta vez sería diferente.",
              "Relaciones que terminan de formas parecidas, incluso en contextos completamente distintos.",
              "Sensación de estar viviendo una historia que ya viste ocurrir con uno de tus padres o abuelos.",
              "Dificultad para identificar el momento exacto en que el patrón 'comienza de nuevo.'",
            ],
          },
          {
            heading: "Lo que revela la Constelación Familiar",
            body: [
              "La Constelación Familiar Sistémica muestra que los ciclos de repetición suelen existir porque, en algún punto del sistema familiar, una experiencia no fue completamente vivida, reconocida o cerrada.",
              "Al traer este patrón a la conciencia —nombrando exactamente qué se repite y de dónde viene— dejas de repetirlo automáticamente y puedes elegir, por primera vez, una respuesta diferente.",
            ],
          },
          {
            heading: "Tu plan de 21 días para romper el ciclo",
            body: [
              "Semana 1 — Mapea: escribe las 2 o 3 relaciones o situaciones más marcantes de tu vida e identifica qué tienen en común.",
              "Semana 1 — Pregúntate: '¿Ya vi esta misma historia en alguno de mis padres o abuelos?' Anota lo que encuentres.",
              "Semana 2 — A diario, repite: 'Veo el patrón. No necesito repetirlo. Elijo un camino nuevo.'",
              "Semana 2 — La próxima vez que notes que el patrón comienza, toma una decisión consciente diferente, aunque sea pequeña.",
              "Semana 3 — Escribe una 'nueva historia' de cómo quieres que sean tus relaciones a partir de ahora.",
              "Semana 3 — Comparte esta nueva intención con alguien de confianza, para hacerla más real.",
            ],
          },
          {
            heading: "Afirmaciones para tu proceso",
            body: [
              "Reconozco los patrones de mi familia con amor, sin necesidad de repetirlos.",
              "Tengo el poder de elegir una historia diferente para mí.",
              "Cada elección consciente me aleja un paso más del ciclo antiguo.",
              "Honro lo que vino antes de mí y sigo adelante con libertad.",
              "Un nuevo camino comienza en mí, ahora.",
            ],
          },
        ],
      },
      searchForBelonging: {
        title: "La Búsqueda de Pertenencia",
        shortSummary:
          "{name}, tu patrón dominante es La Búsqueda de Pertenencia. Una parte de ti todavía busca un lugar de aceptación total dentro de tu propia familia, por lo que puedes esforzarte demasiado para ser amado(a) o aceptado(a) en tus relaciones. Este patrón nace de un vínculo que, en algún momento, no se sintió del todo seguro. Volver a sentirte perteneciente comienza por entender exactamente el origen de ese vacío.",
        pdfSections: [
          {
            heading: "Origen del patrón",
            body: [
              "La Búsqueda de Pertenencia normalmente nace de un vínculo familiar inicial que no trajo total seguridad: puede haber sido un nacimiento no del todo celebrado, una comparación constante con un hermano, una adopción, una separación temprana de los padres, o simplemente padres que, por sus propios motivos, no pudieron estar plenamente presentes.",
              "Desde entonces, una parte de ti sigue buscando, en otros lugares y relaciones, la certeza de pertenencia que faltó en ese primer vínculo.",
            ],
          },
          {
            heading: "Cómo aparece en tu día a día",
            body: [
              "Tiendes a esforzarte demasiado —complaciendo, cuidando o adaptándote— para asegurarte de que las personas permanezcan a tu lado.",
              "Miedo a ser dejado(a) de lado, olvidado(a) o reemplazado(a), incluso en relaciones estables.",
              "Dificultad para decir que no, por miedo a perder el afecto o el lugar que has ganado.",
              "Sensación de estar siempre 'demostrando tu valor' para ser aceptado(a).",
            ],
          },
          {
            heading: "Lo que revela la Constelación Familiar",
            body: [
              "La Constelación Familiar Sistémica muestra que la pertenencia es un derecho de nacimiento, no algo que deba ganarse o merecerse: todo miembro de un sistema tiene, por derecho, un lugar en él, sin importar lo que haya sucedido.",
              "El trabajo aquí es reconectarte con esa certeza más profunda: tu lugar en tu familia (y en la vida) nunca dependió de cuánto te esfuerces, y siempre fue tuyo por derecho.",
            ],
          },
          {
            heading: "Tu plan de 21 días para romper el ciclo",
            body: [
              "Semana 1 — Observa: ¿en qué relaciones sientes que necesitas 'esforzarte' para ser aceptado(a)? Enumera al menos 3 situaciones recientes.",
              "Semana 1 — A diario, repite: 'Pertenezco, incluso sin necesidad de demostrar nada.'",
              "Semana 2 — Practica decir que no una vez, aunque sea algo pequeño, sin justificarte en exceso.",
              "Semana 2 — Observa cómo reacciona tu cuerpo cuando dejas de 'esforzarte tanto': anota la incomodidad y deja que pase.",
              "Semana 3 — Escribe una carta a la niña o al niño que fuiste, asegurándole que siempre tuvo un lugar en la familia.",
              "Semana 3 — Elige una relación en la que puedas simplemente 'ser', sin cuidar ni complacer, y observa qué sucede.",
            ],
          },
          {
            heading: "Afirmaciones para tu proceso",
            body: [
              "Pertenezco por derecho, no por esfuerzo.",
              "Puedo ser yo mismo(a) y aun así ser amado(a).",
              "Mi lugar en mi familia y en mi vida nunca estuvo en riesgo.",
              "No necesito demostrarme para merecer amor.",
              "Me acepto exactamente como soy.",
            ],
          },
        ],
      },
    },
    thankYou: {
      metaTitle: "Pago confirmado — SoulWeave",
      verifying: "Confirmando tu pago...",
      successTitle: "¡Pago confirmado!",
      successSubtitle:
        "Tu Informe Completo va en camino a {email}. Puede tardar unos minutos en llegar — no olvides revisar tu carpeta de spam.",
      resendButton: "¿No lo recibiste? Reenviar correo",
      resendSuccess: "¡Correo reenviado! Revisa tu bandeja de entrada.",
      resendError: "No pudimos reenviarlo ahora. Inténtalo de nuevo en un momento.",
      continueApp: "Ir a la app ahora",
      failedTitle: "No encontramos ese pago",
      failedSubtitle: "Verifica el enlace que usaste o vuelve a intentarlo.",
      backHome: "Volver al inicio",
    },
  },
};
