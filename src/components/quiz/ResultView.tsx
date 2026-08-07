"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { APP_URL } from "@/lib/constants";
import { loadLead, loadQuiz, type StoredLead, type StoredQuiz } from "@/lib/quizStorage";
import type { CheckoutAmount } from "@/lib/pricing";

const CURRENCY_LOCALE: Record<string, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" };

function formatMoney(cents: number, currency: string, locale: string) {
  return new Intl.NumberFormat(CURRENCY_LOCALE[locale] ?? "en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export function ResultView() {
  const { t, locale } = useLanguage();
  const [lead, setLead] = useState<StoredLead | null>(null);
  const [quiz, setQuiz] = useState<StoredQuiz | null>(null);
  const [ready, setReady] = useState(false);
  const [price, setPrice] = useState<CheckoutAmount | null>(null);
  const [buying, setBuying] = useState(false);
  const [buyError, setBuyError] = useState(false);

  useEffect(() => {
    // One-time client hydration read (sessionStorage isn't available during SSR).
    /* eslint-disable react-hooks/set-state-in-effect */
    setLead(loadLead());
    setQuiz(loadQuiz());
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!ready) return;
    fetch(`/api/pricing?locale=${locale}`)
      .then((res) => res.json())
      .then((data: CheckoutAmount) => setPrice(data))
      .catch(() => setPrice(null));
  }, [ready, locale]);

  if (!ready) return null;

  if (!lead || !quiz) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card/70 p-8 text-center shadow-elevated">
        <p className="text-muted-foreground">{t.results.missing}</p>
        <a
          href="/questionario"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
        >
          {t.results.missingCta}
        </a>
      </div>
    );
  }

  const archetype = t.archetypes[quiz.archetypeId];
  const appUrl = (() => {
    const target = new URL(APP_URL);
    target.searchParams.set("utm_source", "funnel");
    target.searchParams.set("utm_medium", "quiz_result");
    target.searchParams.set("lang", locale);
    return target.toString();
  })();

  const handleBuy = async () => {
    if (buying) return;
    setBuying(true);
    setBuyError(false);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: lead.name, email: lead.email, locale, answers: quiz.answers }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error("checkout_failed");
      window.location.href = data.url;
    } catch {
      setBuyError(true);
      setBuying(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-elevated sm:p-8">
        <p className="text-sm font-medium text-muted-foreground">
          {t.results.greeting.replace("{name}", lead.name)}
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {t.results.archetypeLabel}
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">{archetype.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {archetype.shortSummary.replace("{name}", lead.name)}
        </p>
        <a
          href={appUrl}
          className="mt-6 inline-block text-sm text-secondary underline underline-offset-4 hover:text-secondary/80"
        >
          {t.results.ctaApp}
        </a>
      </div>

      <div className="rounded-2xl border border-primary/40 bg-gradient-divine p-6 shadow-elevated sm:p-8">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.results.unlockTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.results.unlockSubtitle}</p>

        <ul className="mt-6 flex flex-col gap-2">
          {t.results.whatsIncluded.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 text-primary">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-border bg-card/80 p-5">
          {!price ? (
            <p className="text-sm text-muted-foreground">{t.results.priceLoading}</p>
          ) : (
            <>
              <p className="text-3xl font-semibold">
                {formatMoney(price.totalCents, price.currency, locale)}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {t.results.priceNote.replace(
                  "{feePercent}",
                  `${Math.round(price.feePercent * 100)}%`
                )}
              </p>
            </>
          )}

          <button
            type="button"
            onClick={handleBuy}
            disabled={!price || buying}
            className="mt-5 w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {buying ? t.results.priceLoading : t.results.ctaBuy}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">{t.results.secure}</p>
          {buyError && <p className="mt-2 text-center text-sm text-red-600">{t.results.error}</p>}
        </div>
      </div>
    </div>
  );
}
