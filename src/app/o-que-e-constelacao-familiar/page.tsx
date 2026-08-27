import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { ArticleFaq } from "./ArticleFaq";
import { ForceLocale } from "./ForceLocale";

export const metadata: Metadata = {
  title: "O Que É Constelação Familiar? Guia Completo Para Iniciantes",
  description:
    "Entenda o que é constelação familiar, quem criou o método, como funciona uma sessão e como reconhecer padrões geracionais na sua própria família — com um mapa interativo gratuito.",
  alternates: {
    canonical: "/o-que-e-constelacao-familiar",
  },
  openGraph: {
    title: "O Que É Constelação Familiar? Guia Completo Para Iniciantes",
    description:
      "Origem, como funciona e como aplicar os conceitos da constelação familiar sistêmica na prática — com um mapa interativo gratuito.",
    type: "article",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "O Que É Constelação Familiar? Guia Completo Para Iniciantes",
      description:
        "Entenda o que é constelação familiar, quem criou o método, como funciona uma sessão e como reconhecer padrões geracionais na sua própria família.",
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: "SoulWeave" },
      publisher: { "@type": "Organization", name: "SoulWeave" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Constelação familiar é a mesma coisa que terapia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A constelação familiar é um método complementar de psicologia sistêmica. Ela não substitui acompanhamento psicológico, psiquiátrico ou médico — muitos terapeutas a usam como ferramenta adicional, não como tratamento único.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso saber sobre Kabbalah para entender constelação familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. São duas tradições diferentes. A constelação familiar vem da psicologia sistêmica; a Árvore da Vida cabalística é uma lente simbólica adicional que algumas abordagens, como a do SoulWeave, usam para organizar visualmente esses padrões.",
          },
        },
        {
          "@type": "Question",
          name: "Dá para fazer uma constelação familiar sozinho, sem grupo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, existem formatos individuais — inclusive digitais, mapeando os membros da família e observando as dinâmicas descritas pelo método — mas uma sessão em grupo com um facilitador treinado permite observar dinâmicas que a reflexão sozinha não revela.",
          },
        },
      ],
    },
  ],
};

export default function ConstelacaoFamiliarArticle() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-gradient-sacred">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForceLocale />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-semibold tracking-wide">
            SoulWeave
          </Link>
          <a
            href="#comecar"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Revelar meu mapa
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Guia · Constelação Familiar
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            O que é constelação familiar?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Um guia direto sobre o método que revela padrões invisíveis — e como transmitidos entre
            gerações — dentro de uma família.
          </p>

          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-foreground/90">
            <p>
              Constelação familiar é um método de psicologia sistêmica que parte de uma ideia
              simples: cada pessoa carrega, sem perceber, lealdades, papéis e padrões emocionais
              herdados de gerações anteriores da própria família. Um filho pode repetir o destino
              de um avô que nunca conheceu; um casal pode reencenar um conflito que começou duas
              gerações antes. A constelação torna esses vínculos visíveis para que possam ser
              reconhecidos — e, muitas vezes, reorganizados.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Quem criou o método</h2>
            <p>
              A abordagem foi desenvolvida pelo psicoterapeuta alemão Bert Hellinger, nos anos
              1990, a partir de anos de observação clínica sobre por que certos padrões — doenças,
              separações, silêncios — se repetiam em famílias inteiras, geração após geração.
              Hellinger chamou os princípios que organizam essas dinâmicas de &ldquo;ordens do
              amor&rdquo;: pertencimento, hierarquia entre gerações e equilíbrio entre dar e
              receber.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Como funciona uma sessão
            </h2>
            <p>
              No formato tradicional em grupo, a pessoa escolhe participantes para representar
              membros da sua família e os posiciona no espaço, conforme sua intuição. O
              facilitador observa as tensões, distâncias e olhares que surgem entre os
              &ldquo;representantes&rdquo; — que, curiosamente, relatam sentir emoções
              coerentes com a pessoa real que representam, mesmo sem saber quem é. Existem também
              formatos individuais, incluindo versões digitais que substituem representantes
              humanos por um mapa visual da família, como uma árvore genealógica interativa.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Padrões que costumam aparecer
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-foreground/90">
              <li>
                <strong>Lealdades invisíveis</strong> — repetir inconscientemente o sofrimento ou
                as escolhas de um antepassado.
              </li>
              <li>
                <strong>Membros excluídos</strong> — alguém que a família preferiu não mencionar
                (um aborto, um exílio, um segredo) e cujo lugar vazio continua afetando os que
                vieram depois.
              </li>
              <li>
                <strong>Ordem de nascimento</strong> — o papel que cada filho assume dentro do
                sistema familiar, e o que acontece quando esse papel é invertido.
              </li>
              <li>
                <strong>Desequilíbrio entre dar e receber</strong> — relações que carregam culpa
                ou ressentimento por não conseguirem retribuir na mesma medida.
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Constelação familiar substitui terapia?
            </h2>
            <p>
              Não. É importante ser direto sobre isso: a constelação familiar é reconhecida como
              um método <em>complementar</em>, não como tratamento clínico validado para
              transtornos psicológicos ou psiquiátricos. Muitos terapeutas e coaches sistêmicos a
              usam como ferramenta adicional dentro de um processo mais amplo — não como
              substituto de acompanhamento profissional quando ele é necessário.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Uma forma de começar a enxergar o seu próprio mapa
            </h2>
            <p>
              Você não precisa de um grupo presencial para dar o primeiro passo. O SoulWeave
              organiza os princípios da constelação familiar sistêmica junto com numerologia
              cabalística — a Árvore da Vida — num mapa interativo: você posiciona os membros da
              sua família, e a ferramenta ajuda a visualizar papéis, proximidades e desequilíbrios
              dentro do seu próprio sistema familiar.
            </p>

            <div
              id="comecar"
              className="mt-4 scroll-mt-24 rounded-2xl border border-border bg-card/70 p-6 shadow-elevated"
            >
              <h3 className="font-display text-xl font-semibold">
                Quer ver o mapa da sua própria família?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comece grátis, sem cartão de crédito. Leva menos de 5 minutos.
              </p>
              <div className="mt-4">
                <LeadForm source="blog-o-que-e-constelacao-familiar" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Perguntas frequentes</h2>
            <ArticleFaq />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
