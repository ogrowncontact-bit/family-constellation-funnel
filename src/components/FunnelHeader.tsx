"use client";

import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function FunnelHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide">
          SoulWeave
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
