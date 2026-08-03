"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.benefits.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.benefits.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.benefits.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft"
            >
              <h3 className="font-display text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
