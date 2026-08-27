"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** This route only makes sense for Spanish searchers — pin the funnel's language to es. */
export function ForceLocale() {
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (locale !== "es") setLocale("es");
  }, [locale, setLocale]);

  return null;
}
