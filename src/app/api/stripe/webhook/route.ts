import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { deliverReportForSession } from "@/lib/report-delivery";

// Fallback delivery path — the /obrigado success page already triggers
// delivery synchronously when Stripe redirects the customer back. This
// webhook exists so the report still goes out if the customer closes the
// tab before that redirect completes. Configure it in the Stripe Dashboard
// (Developers → Webhooks) pointing at /api/stripe/webhook, subscribed to
// checkout.session.completed, and set STRIPE_WEBHOOK_SECRET accordingly.
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[stripe/webhook] STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "webhook_not_configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, signature ?? "", secret);
  } catch (err) {
    console.error("[stripe/webhook] signature verification failed:", err);
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as { id: string };
    try {
      await deliverReportForSession(session.id);
    } catch (err) {
      console.error("[stripe/webhook] failed to deliver report:", err);
      return NextResponse.json({ error: "delivery_failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
