"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { APP_URL } from "@/lib/constants";

type ViewState = "verifying" | "success" | "failed";

export function ThankYou() {
  const { t, locale } = useLanguage();
  const [state, setState] = useState<ViewState>("verifying");
  const [email, setEmail] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSessionId(id);

    if (!id) {
      setState("failed");
      return;
    }

    fetch(`/api/checkout/verify?session_id=${encodeURIComponent(id)}`)
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && (data.status === "sent" || data.status === "already_sent")) {
          setEmail(data.email ?? "");
          setState("success");
        } else {
          setState("failed");
        }
      })
      .catch(() => setState("failed"));
  }, []);

  const handleResend = async () => {
    if (!sessionId || resendStatus === "sending") return;
    setResendStatus("sending");
    try {
      const res = await fetch("/api/report/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId }),
      });
      if (!res.ok) throw new Error("resend_failed");
      setResendStatus("sent");
    } catch {
      setResendStatus("error");
    }
  };

  const appUrl = (() => {
    const target = new URL(APP_URL);
    target.searchParams.set("utm_source", "funnel");
    target.searchParams.set("utm_medium", "thank_you");
    target.searchParams.set("lang", locale);
    return target.toString();
  })();

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card/70 p-8 text-center shadow-elevated">
      {state === "verifying" && <p className="text-muted-foreground">{t.thankYou.verifying}</p>}

      {state === "success" && (
        <>
          <h1 className="font-display text-3xl font-semibold">{t.thankYou.successTitle}</h1>
          <p className="mt-3 text-muted-foreground">
            {t.thankYou.successSubtitle.replace("{email}", email)}
          </p>

          <button
            type="button"
            onClick={handleResend}
            disabled={resendStatus === "sending"}
            className="mt-6 text-sm text-secondary underline underline-offset-4 hover:text-secondary/80 disabled:opacity-60"
          >
            {t.thankYou.resendButton}
          </button>
          {resendStatus === "sent" && (
            <p className="mt-2 text-sm text-secondary">{t.thankYou.resendSuccess}</p>
          )}
          {resendStatus === "error" && (
            <p className="mt-2 text-sm text-red-600">{t.thankYou.resendError}</p>
          )}

          <a
            href={appUrl}
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {t.thankYou.continueApp}
          </a>
        </>
      )}

      {state === "failed" && (
        <>
          <h1 className="font-display text-3xl font-semibold">{t.thankYou.failedTitle}</h1>
          <p className="mt-3 text-muted-foreground">{t.thankYou.failedSubtitle}</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {t.thankYou.backHome}
          </Link>
        </>
      )}
    </div>
  );
}
