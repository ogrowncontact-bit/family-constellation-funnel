"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const guides = [
  { href: "/o-que-e-constelacao-familiar", label: "O que é Constelação Familiar" },
  { href: "/family-constellation-therapy", label: "What Is Family Constellation Therapy" },
  { href: "/que-son-las-constelaciones-familiares", label: "Qué Son las Constelaciones Familiares" },
  { href: "/quest-ce-que-les-constellations-familiales", label: "Qu'est-ce que les Constellations Familiales" },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
      <p className="font-display text-lg font-semibold text-foreground">SoulWeave</p>
      <p className="mt-1">{t.footer.tagline}</p>

      <nav aria-label="Guides" className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="hover:text-foreground">
            {guide.label}
          </Link>
        ))}
      </nav>

      <p className="mt-4">
        © {year} SoulWeave. {t.footer.rights}
      </p>
    </footer>
  );
}
