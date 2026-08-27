import { NextResponse } from "next/server";
import { deliverReportForSession } from "@/lib/report-delivery";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "missing_session_id" }, { status: 400 });
  }

  try {
    const result = await deliverReportForSession(sessionId);

    if (result.status === "not_paid") {
      return NextResponse.json({ status: "not_paid" }, { status: 402 });
    }
    if (result.status === "invalid_metadata") {
      return NextResponse.json({ status: "invalid_metadata" }, { status: 422 });
    }

    return NextResponse.json({ status: result.status, email: result.email });
  } catch (err) {
    console.error("[checkout/verify] failed:", err);
    return NextResponse.json({ error: "verify_failed" }, { status: 502 });
  }
}
