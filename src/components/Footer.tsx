"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
      <p className="font-display text-lg font-semibold text-foreground">SoulWeave</p>
      <p className="mt-1">{t.footer.tagline}</p>
      <p className="mt-4">
        © {year} SoulWeave. {t.footer.rights}
      </p>
    </footer>
  );
}
