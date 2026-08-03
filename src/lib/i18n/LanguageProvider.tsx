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
  const nav = navigator.language?.slice(0, 2).toLowerCase();
  return (locales as string[]).includes(nav) ? (nav as Locale) : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // One-time client hydration read (localStorage/navigator aren't available during SSR),
    // intentionally setting state on mount rather than subscribing to an external store.
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    const detected =
      stored && (locales as string[]).includes(stored) ? (stored as Locale) : detectBrowserLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detected);
  }, []);

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
