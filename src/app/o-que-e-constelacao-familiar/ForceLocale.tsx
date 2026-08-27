"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** This route only makes sense for Portuguese searchers — pin the funnel's language to pt. */
export function ForceLocale() {
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (locale !== "pt") setLocale("pt");
  }, [locale, setLocale]);

  return null;
}
