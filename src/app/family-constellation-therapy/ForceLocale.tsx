"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** This route targets English searchers — pin the funnel's language to en. */
export function ForceLocale() {
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (locale !== "en") setLocale("en");
  }, [locale, setLocale]);

  return null;
}
