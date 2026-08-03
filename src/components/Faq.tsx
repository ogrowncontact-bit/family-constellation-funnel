"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.faq.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.faq.subtitle}</p>

        <div className="mt-10 flex flex-col gap-3 text-left">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-background">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
                >
                  {item.q}
                  <span className="shrink-0 text-primary">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
