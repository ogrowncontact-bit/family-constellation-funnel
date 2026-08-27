import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { headers } from "next/headers";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { detectLocaleFromAcceptLanguage } from "@/lib/i18n/translations";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Family Constellation — Discover Your Family Dynamics",
  description:
    "Combine Kabbalistic wisdom with numerology and systemic constellations to discover the hidden patterns of your family system.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect the visitor's language from the browser's own Accept-Language
  // header so the page renders in the right language on the very first
  // paint, instead of flashing English before client-side JS corrects it.
  const headersList = await headers();
  const initialLocale = detectLocaleFromAcceptLanguage(headersList.get("accept-language"));

  return (
    <html
      lang={initialLocale}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-sacred">
        <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
