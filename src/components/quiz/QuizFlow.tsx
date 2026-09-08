"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { QUIZ_QUESTIONS, scoreQuiz } from "@/lib/quiz";
import { calculatePersonalNumerology, isValidBirthDate } from "@/lib/numerology";
import { loadLead, saveQuiz } from "@/lib/quizStorage";

// Step 0 asks for the birth date (needed for the Life Path Number /
// Sephirah calculation); steps 1..N are the existing multiple-choice
// questions. Total steps shown to the visitor include the birth date step.
export function QuizFlow() {
  const { t, locale } = useLanguage();
  const [hasLead, setHasLead] = useState<boolean | null>(null);
  const [step, setStep] = useState(0);
  const [birthDate, setBirthDate] = useState("");
  const [birthDateTouched, setBirthDateTouched] = useState(false);
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

  const totalSteps = QUIZ_QUESTIONS.length + 1;
  const isBirthDateStep = step === 0;
  const questionDef = isBirthDateStep ? null : QUIZ_QUESTIONS[step - 1];
  const questionCopy = questionDef ? t.quiz.questions.find((q) => q.id === questionDef.id) : null;
  if (!isBirthDateStep && !questionCopy) return null;

  const chosen = questionDef ? answers[questionDef.id] : undefined;
  const birthDateValid = isValidBirthDate(birthDate);
  const canAdvance = isBirthDateStep ? birthDateValid : Boolean(chosen);

  const selectOption = (optionId: string) => {
    if (!questionDef) return;
    setAnswers((prev) => ({ ...prev, [questionDef.id]: optionId }));
  };

  const goNext = () => {
    if (!canAdvance) {
      if (isBirthDateStep) setBirthDateTouched(true);
      return;
    }

    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      return;
    }

    const archetypeId = scoreQuiz(answers);
    const lead = loadLead();
    const numerology = calculatePersonalNumerology(lead?.name ?? "", birthDate);
    saveQuiz({ answers, archetypeId, ...numerology });

    if (lead) {
      fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          locale,
          answers,
          birthDate,
        }),
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

      {isBirthDateStep ? (
        <>
          <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {t.quiz.birthDateStep.question}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.quiz.birthDateStep.helper}</p>
          <div className="mt-6">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              onBlur={() => setBirthDateTouched(true)}
              max={new Date().toISOString().slice(0, 10)}
              min="1900-01-01"
              aria-invalid={birthDateTouched && !birthDateValid}
              className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {birthDateTouched && !birthDateValid && (
              <p className="mt-2 text-sm text-red-600">{t.quiz.birthDateStep.invalid}</p>
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {questionCopy!.question}
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            {questionCopy!.options.map((option) => {
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
        </>
      )}

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
          disabled={!canAdvance}
          className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {step < totalSteps - 1 ? t.quiz.next : t.quiz.submit}
        </button>
      </div>
    </div>
  );
}
