import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { ArticleFaq } from "./ArticleFaq";
import { ForceLocale } from "./ForceLocale";

export const metadata: Metadata = {
  title: "What Is Family Constellation Therapy? A Beginner's Guide",
  description:
    "Learn what family constellation therapy is, who created it, how a session works, and how to start recognizing generational patterns in your own family — with a free interactive map.",
  alternates: {
    canonical: "/family-constellation-therapy",
  },
  openGraph: {
    title: "What Is Family Constellation Therapy? A Beginner's Guide",
    description:
      "Origins, how a session works, and how to apply systemic family constellation concepts in practice — with a free interactive map.",
    type: "article",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "What Is Family Constellation Therapy? A Beginner's Guide",
      description:
        "Learn what family constellation therapy is, who created it, how a session works, and how to start recognizing generational patterns in your own family.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "SoulWeave" },
      publisher: { "@type": "Organization", name: "SoulWeave" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does family constellation therapy replace regular therapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It's a complementary method within systemic psychology — it doesn't replace psychological, psychiatric, or medical care. Many therapists use it as an additional tool, not a sole treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to know Kabbalah to understand family constellations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. They're separate traditions. Family constellation therapy comes from systemic psychology; the Kabbalistic Tree of Life is an additional symbolic lens some approaches use to visualize those patterns.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try family constellation therapy without a group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — individual and digital formats exist that map your family visually. A live group session with a trained facilitator reveals dynamics solo reflection can't, but individual mapping is a real starting point.",
          },
        },
      ],
    },
  ],
};

export default function FamilyConstellationTherapyArticle() {
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
            href="#start"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Reveal my map
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Guide · Family Constellation Therapy
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            What is family constellation therapy?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A straight answer on the method that makes invisible, inherited family patterns
            visible — and how they get passed down between generations.
          </p>

          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-foreground/90">
            <p>
              Family constellation therapy is a systemic psychology method built on a simple
              premise: everyone unknowingly carries loyalties, roles, and emotional patterns
              inherited from earlier generations of their family. A child can repeat the fate of a
              grandparent they never met; a couple can re-enact a conflict that started two
              generations earlier. Constellation work makes those bonds visible — so they can be
              recognized, and often reorganized.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Where it comes from</h2>
            <p>
              The method was developed by German psychotherapist Bert Hellinger in the 1990s,
              after years of clinical observation into why certain patterns — illness, breakups,
              silence — kept repeating across entire families, generation after generation.
              Hellinger called the underlying principles the &ldquo;orders of love&rdquo;:
              belonging, hierarchy between generations, and balance between giving and receiving.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              How a session actually works
            </h2>
            <p>
              In the traditional group format, a person chooses participants to represent family
              members and places them in the room, following intuition rather than a script. The
              facilitator observes the tension, distance, and glances that surface between the
              &ldquo;representatives&rdquo; — who often report feeling emotions consistent with
              the real person they stand in for, even without being told who that is. Individual
              formats also exist, including digital ones that replace human representatives with
              an interactive family map.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Patterns that tend to show up
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-foreground/90">
              <li>
                <strong>Invisible loyalties</strong> — unconsciously repeating an ancestor&rsquo;s
                suffering or choices.
              </li>
              <li>
                <strong>Excluded members</strong> — someone the family preferred not to mention
                (a miscarriage, an exile, a secret) whose empty place keeps affecting those who
                came after.
              </li>
              <li>
                <strong>Birth order</strong> — the role each child takes on within the family
                system, and what happens when that role gets reversed.
              </li>
              <li>
                <strong>Imbalance between giving and receiving</strong> — relationships that carry
                guilt or resentment from being unable to repay in kind.
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Does it replace therapy?
            </h2>
            <p>
              No — and it&rsquo;s worth being direct about that. Family constellation therapy is
              recognized as a <em>complementary</em> method, not a clinically validated treatment
              for psychological or psychiatric disorders. Many therapists and systemic coaches use
              it as an additional tool within a wider process, not a replacement for professional
              care when that&rsquo;s needed.
            </p>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              A starting point for seeing your own map
            </h2>
            <p>
              You don&rsquo;t need an in-person group to take the first step. SoulWeave combines
              systemic family constellation principles with Kabbalistic numerology — the Tree of
              Life — into one interactive map: you place your family members, and the tool helps
              visualize roles, closeness, and imbalances within your own family system.
            </p>

            <div
              id="start"
              className="mt-4 scroll-mt-24 rounded-2xl border border-border bg-card/70 p-6 shadow-elevated"
            >
              <h3 className="font-display text-xl font-semibold">
                Want to see your own family&rsquo;s map?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Start free, no credit card required. Takes under 5 minutes.
              </p>
              <div className="mt-4">
                <LeadForm source="blog-family-constellation-therapy" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Frequently asked questions
            </h2>
            <ArticleFaq />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
