"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Dictionary, type Locale, dictionaries, locales } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "sw-locale";

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  // Check the visitor's full language preference list (not just the first
  // entry) so e.g. ["fr-FR", "pt-BR"] still matches "pt" instead of falling
  // straight through to English.
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of candidates) {
    const short = lang?.slice(0, 2).toLowerCase();
    if ((locales as string[]).includes(short)) return short as Locale;
  }
  return "en";
}

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    // One-time client hydration read (localStorage isn't available during SSR).
    // The server already picked the best locale from the Accept-Language header
    // (see layout.tsx), so this only needs to override it for a returning
    // visitor's explicitly saved preference.
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    const detected =
      stored && (locales as string[]).includes(stored) ? (stored as Locale) : detectBrowserLocale();
    if (detected !== initialLocale) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(detected);
    }
  }, [initialLocale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
