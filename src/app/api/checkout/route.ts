import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { locales, type Locale } from "@/lib/i18n/translations";
import { scoreQuiz, validateAnswers } from "@/lib/quiz";
import { computeCheckoutAmount, currencyForLocale } from "@/lib/pricing";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PRODUCT_NAME: Record<Locale, string> = {
  pt: "Relatório Completo — Constelação Familiar",
  en: "Complete Report — Family Constellation",
  es: "Informe Completo — Constelación Familiar",
};

const FEE_LINE_NAME: Record<Locale, string> = {
  pt: "Taxa de processamento e conversão de moeda",
  en: "Processing & currency conversion fee",
  es: "Tarifa de procesamiento y conversión de moneda",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { name, email, locale, answers } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (typeof locale !== "string" || !(locales as string[]).includes(locale)) {
    return NextResponse.json({ error: "invalid_locale" }, { status: 400 });
  }
  if (!validateAnswers(answers)) {
    return NextResponse.json({ error: "invalid_answers" }, { status: 400 });
  }

  const safeLocale = locale as Locale;
  const archetypeId = scoreQuiz(answers);
  const trimmedName = name.trim().slice(0, 200);
  const trimmedEmail = email.trim().slice(0, 200);

  let stripe;
  try {
    stripe = getStripe();
  } catch (err) {
    console.error("[checkout] Stripe not configured:", err);
    return NextResponse.json({ error: "payments_not_configured" }, { status: 503 });
  }

  const currency = currencyForLocale(safeLocale);
  const amount = await computeCheckoutAmount(currency);
  const origin = new URL(request.url).origin;

  const metadata = {
    name: trimmedName,
    email: trimmedEmail,
    locale: safeLocale,
    archetypeId,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: trimmedEmail,
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: PRODUCT_NAME[safeLocale] },
            unit_amount: amount.netCents,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency,
            product_data: { name: FEE_LINE_NAME[safeLocale] },
            unit_amount: amount.feeCents,
          },
          quantity: 1,
        },
      ],
      metadata,
      payment_intent_data: { metadata },
      success_url: `${origin}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/resultado`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] failed to create Stripe session:", err);
    return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
  }
}
