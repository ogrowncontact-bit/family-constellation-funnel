"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { saveLead } from "@/lib/quizStorage";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({ source }: { source: string }) {
  const { t, locale } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, locale, source }),
      });
      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      saveLead({ name, email, source });
      window.setTimeout(() => {
        window.location.href = "/questionario";
      }, 1200);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          required
          placeholder={t.leadForm.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "submitting" || status === "success"}
          className="w-full rounded-full border border-border bg-card px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60 sm:w-auto sm:flex-1"
        />
        <input
          type="email"
          required
          placeholder={t.leadForm.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting" || status === "success"}
          className="w-full rounded-full border border-border bg-card px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60 sm:w-auto sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="whitespace-nowrap rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "submitting"
            ? t.leadForm.submitting
            : status === "success"
              ? t.leadForm.redirecting
              : t.leadForm.submit}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`text-sm ${
          status === "error"
            ? "text-red-600"
            : status === "success"
              ? "text-secondary"
              : "text-muted-foreground"
        }`}
      >
        {status === "success"
          ? t.leadForm.success
          : status === "error"
            ? t.leadForm.error
            : t.leadForm.privacy}
      </p>
    </form>
  );
}
