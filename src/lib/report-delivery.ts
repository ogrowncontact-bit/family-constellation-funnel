import { getStripe } from "@/lib/stripe";
import { generateReportPdf, type ReportNumerology } from "@/lib/pdf/generate";
import { sendReportEmail } from "@/lib/resend";
import { logPurchase } from "@/lib/googleSheets";
import { locales, type Locale } from "@/lib/i18n/translations";
import { isArchetypeId } from "@/lib/quiz";
import { isSephirahId } from "@/lib/numerology";
import type Stripe from "stripe";

function readNumerologyFromMetadata(metadata: Record<string, string | undefined>): ReportNumerology | undefined {
  const { lifePathNumber, nameNumber, sephirahId } = metadata;
  const lifePath = Number(lifePathNumber);
  const nameNum = Number(nameNumber);
  if (!Number.isFinite(lifePath) || !Number.isFinite(nameNum) || !isSephirahId(sephirahId)) {
    return undefined;
  }
  return { lifePathNumber: lifePath, nameNumber: nameNum, sephirahId };
}

export type DeliveryResult =
  | { status: "sent"; email: string }
  | { status: "already_sent"; email: string }
  | { status: "not_paid" }
  | { status: "invalid_metadata" };

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as string[]).includes(value);
}

async function deliverForPaymentIntent(
  paymentIntent: Stripe.PaymentIntent,
  force: boolean
): Promise<DeliveryResult> {
  const stripe = getStripe();
  const metadata = paymentIntent.metadata ?? {};
  const { name, email, locale, archetypeId } = metadata as Record<string, string | undefined>;

  if (!email || !isLocale(locale) || !isArchetypeId(archetypeId)) {
    console.error("[report-delivery] payment intent missing/invalid metadata:", paymentIntent.id);
    return { status: "invalid_metadata" };
  }

  if (metadata.report_sent === "true" && !force) {
    return { status: "already_sent", email };
  }

  const numerology = readNumerologyFromMetadata(metadata as Record<string, string | undefined>);
  const pdfBuffer = await generateReportPdf(name ?? "", locale, archetypeId, numerology);
  await sendReportEmail({ to: email, name: name ?? "", locale, pdfBuffer });

  await stripe.paymentIntents.update(paymentIntent.id, {
    metadata: { ...metadata, report_sent: "true" },
  });

  try {
    await logPurchase({
      name: name ?? "",
      email,
      locale,
      archetypeId,
      paymentIntentId: paymentIntent.id,
      lifePathNumber: numerology?.lifePathNumber,
      sephirahId: numerology?.sephirahId,
    });
  } catch (err) {
    console.warn("[report-delivery] failed to log purchase to Google Sheets:", err);
  }

  return { status: "sent", email };
}

export async function deliverReportForSession(
  sessionId: string,
  { force = false }: { force?: boolean } = {}
): Promise<DeliveryResult> {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });

  if (session.payment_status !== "paid") {
    return { status: "not_paid" };
  }

  const paymentIntent = session.payment_intent as Stripe.PaymentIntent | null;
  if (!paymentIntent) {
    return { status: "invalid_metadata" };
  }

  return deliverForPaymentIntent(paymentIntent, force);
}

export async function deliverReportForPaymentIntentId(
  paymentIntentId: string,
  { force = false }: { force?: boolean } = {}
): Promise<DeliveryResult> {
  const stripe = getStripe();
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  if (paymentIntent.status !== "succeeded") {
    return { status: "not_paid" };
  }
  return deliverForPaymentIntent(paymentIntent, force);
}
