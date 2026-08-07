import { NextResponse } from "next/server";
import { deliverReportForSession } from "@/lib/report-delivery";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { session_id: sessionId } = (body ?? {}) as Record<string, unknown>;
  if (typeof sessionId !== "string" || !sessionId) {
    return NextResponse.json({ error: "missing_session_id" }, { status: 400 });
  }

  try {
    const result = await deliverReportForSession(sessionId, { force: true });

    if (result.status === "not_paid") {
      return NextResponse.json({ status: "not_paid" }, { status: 402 });
    }
    if (result.status === "invalid_metadata") {
      return NextResponse.json({ status: "invalid_metadata" }, { status: 422 });
    }

    return NextResponse.json({ status: "sent", email: result.email });
  } catch (err) {
    console.error("[report/resend] failed:", err);
    return NextResponse.json({ error: "resend_failed" }, { status: 502 });
  }
}
