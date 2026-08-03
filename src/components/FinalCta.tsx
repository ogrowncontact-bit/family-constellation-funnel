"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LeadForm } from "./LeadForm";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-divine px-6 py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.finalCta.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.finalCta.subtitle}</p>

        <div className="mt-8 w-full rounded-2xl border border-border bg-card/70 p-4 shadow-elevated sm:p-6">
          <LeadForm source="final_cta" />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{t.finalCta.note}</p>
      </div>
    </section>
  );
}
