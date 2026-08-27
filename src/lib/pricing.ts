import type { Locale } from "@/lib/i18n/translations";

export type SupportedCurrency = "brl" | "usd";

export const CURRENCY_BY_LOCALE: Record<Locale, SupportedCurrency> = {
  pt: "brl",
  en: "usd",
  es: "usd",
};

export function currencyForLocale(locale: Locale): SupportedCurrency {
  return CURRENCY_BY_LOCALE[locale] ?? "usd";
}

// The amount we always want to net for the full PDF report, before any
// payment-processing or currency-conversion fees are taken out.
export const NET_TARGET_BRL_CENTS = 2700; // R$27,00

// Approximate blended Stripe fee assumptions (percentage + fixed cents) per
// settlement currency. These cover card-processing plus the extra
// international/currency-conversion surcharge Stripe applies when the
// card's country differs from the account's country. They are estimates —
// override them with the STRIPE_FEE_PERCENT / STRIPE_FEE_FIXED_CENTS_<CUR>
// env vars once you know your account's real blended rate from
// https://dashboard.stripe.com/settings/billing so the gross-up below stays accurate.
const DEFAULT_FEE: Record<SupportedCurrency, { pct: number; fixedCents: number }> = {
  brl: { pct: 0.0399, fixedCents: 39 },
  usd: { pct: 0.049, fixedCents: 30 },
};

function getFeeConfig(currency: SupportedCurrency): { pct: number; fixedCents: number } {
  const pctEnv = process.env.STRIPE_FEE_PERCENT;
  const fixedEnv = process.env[`STRIPE_FEE_FIXED_CENTS_${currency.toUpperCase()}`];
  const fallback = DEFAULT_FEE[currency];
  const pct = pctEnv ? Number(pctEnv) : fallback.pct;
  const fixedCents = fixedEnv ? Number(fixedEnv) : fallback.fixedCents;
  return {
    pct: Number.isFinite(pct) && pct >= 0 && pct < 1 ? pct : fallback.pct,
    fixedCents: Number.isFinite(fixedCents) && fixedCents >= 0 ? fixedCents : fallback.fixedCents,
  };
}

// Static fallback used only if the live FX lookup fails (network error, rate
// limit, blocked outbound request, etc). Update occasionally; it only ever
// affects display/charge amounts when the live rate is unavailable.
const FALLBACK_BRL_TO_USD = 0.18;

let cachedRate: { value: number; at: number } | null = null;
const RATE_TTL_MS = 6 * 60 * 60 * 1000; // 6h

async function getBrlToUsdRate(): Promise<number> {
  if (cachedRate && Date.now() - cachedRate.at < RATE_TTL_MS) {
    return cachedRate.value;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch("https://open.er-api.com/v6/latest/BRL", {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error("fx_fetch_failed");

    const data = (await res.json()) as { rates?: Record<string, unknown> };
    const rate = data.rates?.USD;
    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error("fx_bad_payload");
    }

    cachedRate = { value: rate, at: Date.now() };
    return rate;
  } catch (err) {
    console.warn("[pricing] live FX lookup failed, using fallback rate:", err);
    return FALLBACK_BRL_TO_USD;
  }
}

export async function convertBrlCentsTo(
  currency: SupportedCurrency,
  brlCents: number
): Promise<number> {
  if (currency === "brl") return brlCents;
  const rate = await getBrlToUsdRate();
  return Math.round(brlCents * rate);
}

export interface CheckoutAmount {
  currency: SupportedCurrency;
  /** The report's price — what we're targeting to net after fees. */
  netCents: number;
  /** Processing + currency-conversion fee, shown to the customer as a separate line item. */
  feeCents: number;
  /** netCents + feeCents — what's actually charged. */
  totalCents: number;
  feePercent: number;
}

// Grosses up the net target so that after Stripe deducts its real
// percentage + fixed fee from the total charge, we still net at least
// NET_TARGET_BRL_CENTS (converted). The fee is broken out as its own line
// item so the customer sees exactly what they're paying for the report
// versus what covers processing/conversion.
export async function computeCheckoutAmount(currency: SupportedCurrency): Promise<CheckoutAmount> {
  const netCents = await convertBrlCentsTo(currency, NET_TARGET_BRL_CENTS);
  const fee = getFeeConfig(currency);
  const totalCents = Math.ceil((netCents + fee.fixedCents) / (1 - fee.pct));
  const feeCents = totalCents - netCents;
  return { currency, netCents, feeCents, totalCents, feePercent: fee.pct };
}
