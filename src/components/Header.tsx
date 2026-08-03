"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-wide">
          SoulWeave
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">
            {t.nav.features}
          </a>
          <a href="#testimonials" className="hover:text-foreground">
            {t.nav.testimonials}
          </a>
          <a href="#faq" className="hover:text-foreground">
            {t.nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#lead-form"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
