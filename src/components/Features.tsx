"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="scroll-mt-24 bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.features.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.features.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.features.items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-2xl border border-border bg-background p-6 text-left shadow-soft"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-lg font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
