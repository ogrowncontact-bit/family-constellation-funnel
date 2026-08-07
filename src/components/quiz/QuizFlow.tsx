"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { QUIZ_QUESTIONS, scoreQuiz } from "@/lib/quiz";
import { loadLead, saveQuiz } from "@/lib/quizStorage";

export function QuizFlow() {
  const { t, locale } = useLanguage();
  const [hasLead, setHasLead] = useState<boolean | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    // One-time client hydration read (sessionStorage isn't available during SSR).
    const lead = loadLead();
    if (!lead) {
      window.location.href = "/#lead-form";
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasLead(true);
  }, []);

  if (hasLead !== true) return null;

  const totalSteps = QUIZ_QUESTIONS.length;
  const questionDef = QUIZ_QUESTIONS[step];
  const questionCopy = t.quiz.questions.find((q) => q.id === questionDef.id);
  if (!questionCopy) return null;

  const chosen = answers[questionDef.id];

  const selectOption = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionDef.id]: optionId }));
  };

  const goNext = () => {
    if (!chosen) return;

    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      return;
    }

    const archetypeId = scoreQuiz(answers);
    saveQuiz({ answers, archetypeId });

    const lead = loadLead();
    if (lead) {
      fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: lead.name, email: lead.email, locale, answers }),
      }).catch(() => {});
    }

    window.location.href = "/resultado";
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const progressLabel = t.quiz.progressLabel
    .replace("{current}", String(step + 1))
    .replace("{total}", String(totalSteps));

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-border bg-card/70 p-6 shadow-elevated sm:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>{progressLabel}</span>
          <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
        {questionCopy.question}
      </h2>

      <div className="mt-6 flex flex-col gap-3">
        {questionCopy.options.map((option) => {
          const isSelected = chosen === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => selectOption(option.id)}
              aria-pressed={isSelected}
              className={`rounded-xl border px-5 py-4 text-left transition-colors ${
                isSelected
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-0"
        >
          {t.quiz.back}
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!chosen}
          className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {step < totalSteps - 1 ? t.quiz.next : t.quiz.submit}
        </button>
      </div>
    </div>
  );
}
