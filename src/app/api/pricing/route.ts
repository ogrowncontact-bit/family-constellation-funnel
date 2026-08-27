import { NextResponse } from "next/server";
import { locales, type Locale } from "@/lib/i18n/translations";
import { computeCheckoutAmount, currencyForLocale } from "@/lib/pricing";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale");
  const locale: Locale = (locales as string[]).includes(localeParam ?? "")
    ? (localeParam as Locale)
    : "en";

  const amount = await computeCheckoutAmount(currencyForLocale(locale));
  return NextResponse.json(amount);
}
