import { NextResponse } from "next/server";
import { appendLead } from "@/lib/googleSheets";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { name, email, locale, source } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const lead = {
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    locale: typeof locale === "string" ? locale.slice(0, 5) : "unknown",
    source: typeof source === "string" ? source.slice(0, 50) : "unknown",
  };

  try {
    await appendLead(lead);
    return NextResponse.json({ ok: true, saved: true });
  } catch (err) {
    console.error("[lead] failed to save to Google Sheets:", err);
    return NextResponse.json({ ok: true, saved: false });
  }
}
