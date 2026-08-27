"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FunnelHeader } from "@/components/FunnelHeader";
import { Footer } from "@/components/Footer";
import { ResultView } from "@/components/quiz/ResultView";

export default function ResultadoPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.results.metaTitle;
  }, [t]);

  return (
    <div className="flex flex-1 flex-col">
      <FunnelHeader />
      <main className="flex-1 bg-gradient-sacred px-6 py-16">
        <ResultView />
      </main>
      <Footer />
    </div>
  );
}
