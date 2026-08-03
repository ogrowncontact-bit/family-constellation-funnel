"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales, localeNames } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 text-sm shadow-soft">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-current={locale === l}
          className={`rounded-full px-3 py-1 transition-colors ${
            locale === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
