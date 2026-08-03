"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LeadForm } from "./LeadForm";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-divine px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 inline-block rounded-full border border-primary/40 bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
          {t.hero.badge}
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
          {t.hero.title1}{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.hero.subtitle}</p>

        <div id="lead-form" className="mt-10 w-full max-w-xl scroll-mt-24 rounded-2xl border border-border bg-card/70 p-4 shadow-elevated sm:p-6">
          <LeadForm source="hero" />
        </div>

        <a href="#features" className="mt-6 text-sm text-secondary underline underline-offset-4 hover:text-secondary/80">
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
