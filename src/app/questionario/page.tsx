"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FunnelHeader } from "@/components/FunnelHeader";
import { Footer } from "@/components/Footer";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export default function QuestionarioPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.quiz.metaTitle;
  }, [t]);

  return (
    <div className="flex flex-1 flex-col">
      <FunnelHeader />
      <main className="flex-1 bg-gradient-divine px-6 py-16">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            {t.quiz.badge}
          </span>
          <p className="text-muted-foreground">{t.quiz.intro}</p>
        </div>
        <QuizFlow />
      </main>
      <Footer />
    </div>
  );
}
