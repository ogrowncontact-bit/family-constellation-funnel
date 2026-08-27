"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FunnelHeader } from "@/components/FunnelHeader";
import { Footer } from "@/components/Footer";
import { ThankYou } from "@/components/quiz/ThankYou";

export default function ObrigadoPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.thankYou.metaTitle;
  }, [t]);

  return (
    <div className="flex flex-1 flex-col">
      <FunnelHeader />
      <main className="flex-1 bg-gradient-divine px-6 py-16">
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}
