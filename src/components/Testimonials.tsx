"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.testimonials.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.testimonials.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 text-left shadow-soft"
            >
              <blockquote className="font-display text-lg italic leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-muted-foreground"> · {item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
