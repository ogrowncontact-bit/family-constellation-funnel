import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-sacred">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
