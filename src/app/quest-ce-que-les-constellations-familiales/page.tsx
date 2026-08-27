import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { ArticleFaq } from "./ArticleFaq";

export const metadata: Metadata = {
  title: "Qu'est-ce que les Constellations Familiales ? Guide Complet",
  description:
    "Constellations familiales : origine, déroulement d'une séance, et la question que beaucoup se posent — est-ce dangereux ? Un guide honnête, avec une carte interactive gratuite.",
  alternates: {
    canonical: "/quest-ce-que-les-constellations-familiales",
  },
  openGraph: {
    title: "Qu'est-ce que les Constellations Familiales ? Guide Complet",
    description:
      "Origine, déroulement d'une séance et point sur la controverse autour des constellations familiales — un guide honnête.",
    type: "article",
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Qu'est-ce que les Constellations Familiales ? Guide Complet",
      description:
        "Origine, déroulement d'une séance de constellations familiales et réponse honnête à la question : est-ce dangereux ?",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "SoulWeave" },
      publisher: { "@type": "Organization", name: "SoulWeave" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Les constellations familiales sont-elles dangereuses ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La pratique elle-même n'est pas dangereuse, mais la vigilance est nécessaire : en France, la Miviludes a alerté sur certains facilitateurs qui exploitent la vulnérabilité de leurs clients (isolement familial, promesses de guérison, sommes d'argent importantes). Une pratique sérieuse ne remplace jamais un suivi médical ou psychiatrique et ne demande jamais de couper les liens avec vos proches.",
          },
        },
        {
          "@type": "Question",
          name: "Les constellations familiales remplacent-elles la thérapie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. C'est une méthode complémentaire en psychologie systémique, pas un traitement clinique validé. De nombreux thérapeutes l'utilisent comme outil supplémentaire, pas comme traitement unique.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on essayer les constellations familiales sans groupe ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui — il existe des formats individuels et numériques qui cartographient la famille visuellement, sans représentants humains.",
          },
        },
      ],
    },
  ],
};

export default function ConstellationsFamilialesArticle() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-gradient-sacred">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-semibold tracking-wide">
            SoulWeave
          </Link>
          <a
            href="#commencer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Révéler ma carte
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Guide · Constellations Familiales
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Qu&rsquo;est-ce que les constellations familiales ?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Un guide direct sur la méthode qui rend visibles des schémas invisibles — et sur la
            question que beaucoup se posent avant de s&rsquo;y intéresser : est-ce fiable ?
          </p>

          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-foreground/90">
            <p>
              Les constellations familiales sont une méthode de psychologie systémique fondée sur
              une idée simple : chacun porte, sans s&rsquo;en rendre compte, des loyautés, des
              rôles et des schémas émotionnels hérités des générations précédentes de sa famille.
              Un enfant peut répéter le destin d&rsquo;un grand-parent qu&rsquo;il n&rsquo;a
              jamais connu ; un couple peut rejouer un conflit apparu deux générations plus tôt.
              La constellation rend ces liens visibles pour qu&rsquo;ils puissent être reconnus —
              et, souvent, réorganisés.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Les constellations familiales sont-elles dangereuses ?
            </h2>
            <p>
              C&rsquo;est une question légitime, et elle mérite une réponse honnête plutôt qu&rsquo;un
              argument commercial. En France, la Miviludes (la mission interministérielle de
              vigilance contre les dérives sectaires) a alerté sur certains facilitateurs qui
              profitent de la vulnérabilité de leurs clients — en les poussant à couper les liens
              avec leur famille ou leurs amis, en promettant des guérisons miraculeuses, ou en
              demandant des sommes d&rsquo;argent disproportionnées. Ce ne sont pas les principes
              des constellations familiales qui posent problème, mais la manière dont certaines
              personnes les détournent. Une pratique sérieuse reste un outil de réflexion parmi
              d&rsquo;autres : elle ne remplace jamais un suivi médical ou psychiatrique, et un
              facilitateur digne de confiance ne vous demandera jamais de vous isoler de vos
              proches.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              D&rsquo;où vient cette méthode
            </h2>
            <p>
              L&rsquo;approche a été développée par le psychothérapeute allemand Bert Hellinger
              dans les années 1990, après des années d&rsquo;observation clinique sur les raisons
              pour lesquelles certains schémas — maladies, ruptures, silences — se répétaient dans
              des familles entières, génération après génération. Hellinger a appelé les principes
              qui organisent ces dynamiques les &laquo; ordres de l&rsquo;amour &raquo; :
              l&rsquo;appartenance, la hiérarchie entre générations, et l&rsquo;équilibre entre
              donner et recevoir.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Comment se déroule une séance
            </h2>
            <p>
              Dans le format traditionnel en groupe, la personne choisit des participants pour
              représenter les membres de sa famille et les positionne dans l&rsquo;espace, en
              suivant son intuition. Le facilitateur observe les tensions, les distances et les
              regards qui apparaissent entre les &laquo; représentants &raquo; — qui rapportent
              souvent ressentir des émotions cohérentes avec la personne réelle qu&rsquo;ils
              représentent, sans même savoir qui elle est. Des formats individuels existent aussi,
              y compris numériques, remplaçant les représentants humains par une carte familiale
              visuelle.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Les constellations familiales remplacent-elles la thérapie ?
            </h2>
            <p>
              Non — et c&rsquo;est important de le dire clairement. Les constellations familiales
              sont reconnues comme une méthode <em>complémentaire</em>, pas comme un traitement
              clinique validé pour les troubles psychologiques ou psychiatriques. De nombreux
              thérapeutes les utilisent comme outil supplémentaire dans un accompagnement plus
              large — jamais comme substitut à un suivi professionnel quand celui-ci est
              nécessaire.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Une manière de commencer à voir sa propre carte
            </h2>
            <p>
              Pas besoin d&rsquo;un groupe en présentiel pour faire le premier pas. SoulWeave
              associe les principes des constellations familiales systémiques à la numérologie
              kabbalistique — l&rsquo;Arbre de Vie — dans une carte interactive : vous positionnez
              les membres de votre famille, et l&rsquo;outil vous aide à visualiser les rôles, les
              proximités et les déséquilibres au sein de votre propre système familial.
            </p>

            <div
              id="commencer"
              className="mt-4 scroll-mt-24 rounded-2xl border border-border bg-card/70 p-6 shadow-elevated"
            >
              <h3 className="font-display text-xl font-semibold">
                Envie de voir la carte de votre propre famille ?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Commencez gratuitement, sans carte bancaire. Moins de 5 minutes.
              </p>
              <div className="mt-4">
                <LeadForm source="blog-quest-ce-que-les-constellations-familiales" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Questions fréquentes
            </h2>
            <ArticleFaq />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
