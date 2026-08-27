import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { ArticleFaq } from "./ArticleFaq";
import { ForceLocale } from "./ForceLocale";

export const metadata: Metadata = {
  title: "¿Qué Son las Constelaciones Familiares? Guía para Principiantes",
  description:
    "Descubre qué son las constelaciones familiares, quién creó el método, cómo funciona una sesión y cómo reconocer patrones generacionales en tu propia familia — con un mapa interactivo gratuito.",
  alternates: {
    canonical: "/que-son-las-constelaciones-familiares",
  },
  openGraph: {
    title: "¿Qué Son las Constelaciones Familiares? Guía para Principiantes",
    description:
      "Origen, cómo funciona y cómo aplicar los conceptos de las constelaciones familiares sistémicas en la práctica — con un mapa interactivo gratuito.",
    type: "article",
    locale: "es_ES",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "¿Qué Son las Constelaciones Familiares? Guía para Principiantes",
      description:
        "Descubre qué son las constelaciones familiares, quién creó el método, cómo funciona una sesión y cómo reconocer patrones generacionales en tu propia familia.",
      inLanguage: "es-ES",
      author: { "@type": "Organization", name: "SoulWeave" },
      publisher: { "@type": "Organization", name: "SoulWeave" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Las constelaciones familiares sustituyen a la terapia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Es un método complementario dentro de la psicología sistémica, no un tratamiento clínico validado para trastornos psicológicos o psiquiátricos. Muchos terapeutas lo usan como herramienta adicional, no como tratamiento único.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito saber de Kábala para entender las constelaciones familiares?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Son dos tradiciones distintas. Las constelaciones familiares vienen de la psicología sistémica; el Árbol de la Vida cabalístico es una lente simbólica adicional que algunos enfoques, como el de SoulWeave, usan para organizar visualmente esos patrones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede hacer sin un grupo presencial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí — existen formatos individuales y digitales que mapean a la familia visualmente. Una sesión grupal con facilitador revela dinámicas que la reflexión individual no logra, pero el mapeo individual ya ayuda a identificar patrones.",
          },
        },
      ],
    },
  ],
};

export default function ConstelacionesFamiliaresArticle() {
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
            href="#comenzar"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Revelar mi mapa
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Guía · Constelaciones Familiares
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            ¿Qué son las constelaciones familiares?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Una guía directa sobre el método que revela patrones invisibles — y cómo se
            transmiten entre generaciones — dentro de una familia.
          </p>

          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-foreground/90">
            <p>
              Las constelaciones familiares son un método de psicología sistémica que parte de
              una idea simple: cada persona carga, sin darse cuenta, lealtades, roles y patrones
              emocionales heredados de generaciones anteriores de su propia familia. Un hijo
              puede repetir el destino de un abuelo que nunca conoció; una pareja puede reeditar
              un conflicto que empezó dos generaciones antes. La constelación hace visibles esos
              vínculos para que puedan ser reconocidos — y, muchas veces, reorganizados.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Quién creó el método
            </h2>
            <p>
              El enfoque fue desarrollado por el psicoterapeuta alemán Bert Hellinger en los años
              90, después de años de observación clínica sobre por qué ciertos patrones —
              enfermedades, separaciones, silencios — se repetían en familias enteras, generación
              tras generación. Hellinger llamó a los principios que organizan estas dinámicas
              &ldquo;órdenes del amor&rdquo;: pertenencia, jerarquía entre generaciones y
              equilibrio entre dar y recibir.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Cómo funciona una sesión
            </h2>
            <p>
              En el formato tradicional en grupo, la persona elige participantes para representar
              a miembros de su familia y los posiciona en el espacio, siguiendo su intuición. El
              facilitador observa las tensiones, distancias y miradas que surgen entre los
              &ldquo;representantes&rdquo; — que, curiosamente, suelen sentir emociones coherentes
              con la persona real que representan, incluso sin saber quién es. También existen
              formatos individuales, incluidas versiones digitales que sustituyen a los
              representantes humanos por un mapa visual de la familia.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Patrones que suelen aparecer
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-foreground/90">
              <li>
                <strong>Lealtades invisibles</strong> — repetir inconscientemente el sufrimiento
                o las decisiones de un antepasado.
              </li>
              <li>
                <strong>Miembros excluidos</strong> — alguien de quien la familia prefirió no
                hablar (un aborto, un exilio, un secreto) y cuyo lugar vacío sigue afectando a
                quienes vinieron después.
              </li>
              <li>
                <strong>Orden de nacimiento</strong> — el rol que asume cada hijo dentro del
                sistema familiar, y qué ocurre cuando ese rol se invierte.
              </li>
              <li>
                <strong>Desequilibrio entre dar y recibir</strong> — relaciones que cargan culpa
                o resentimiento por no poder retribuir en la misma medida.
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              ¿Las constelaciones familiares sustituyen a la terapia?
            </h2>
            <p>
              No. Es importante ser directos al respecto: las constelaciones familiares son
              reconocidas como un método <em>complementario</em>, no como un tratamiento clínico
              validado para trastornos psicológicos o psiquiátricos. Muchos terapeutas y coaches
              sistémicos lo usan como herramienta adicional dentro de un proceso más amplio — no
              como sustituto de un acompañamiento profesional cuando este es necesario.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Una forma de empezar a ver tu propio mapa
            </h2>
            <p>
              No necesitas un grupo presencial para dar el primer paso. SoulWeave organiza los
              principios de las constelaciones familiares sistémicas junto con la numerología
              cabalística — el Árbol de la Vida — en un mapa interactivo: tú colocas a los
              miembros de tu familia, y la herramienta te ayuda a visualizar roles, cercanías y
              desequilibrios dentro de tu propio sistema familiar.
            </p>

            <div
              id="comenzar"
              className="mt-4 scroll-mt-24 rounded-2xl border border-border bg-card/70 p-6 shadow-elevated"
            >
              <h3 className="font-display text-xl font-semibold">
                ¿Quieres ver el mapa de tu propia familia?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Empieza gratis, sin tarjeta de crédito. Toma menos de 5 minutos.
              </p>
              <div className="mt-4">
                <LeadForm source="blog-que-son-las-constelaciones-familiares" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <ArticleFaq />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
