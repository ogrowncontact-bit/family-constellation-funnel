import { NextResponse } from "next/server";
import { logQuizResponse } from "@/lib/googleSheets";
import { locales } from "@/lib/i18n/translations";
import { scoreQuiz, validateAnswers } from "@/lib/quiz";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const archetypeId = scoreQuiz(answers);

  try {
    await logQuizResponse({
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      locale,
      archetypeId,
      answers,
    });
  } catch (err) {
    console.error("[questionnaire] failed to log response to Google Sheets:", err);
  }

  return NextResponse.json({ ok: true, archetypeId });
}
