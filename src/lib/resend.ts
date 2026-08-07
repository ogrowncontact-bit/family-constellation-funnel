import { Resend } from "resend";
import type { Locale } from "@/lib/i18n/translations";

let client: Resend | null = null;

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("Resend is not configured. Set RESEND_API_KEY.");
  }
  if (!client) {
    client = new Resend(key);
  }
  return client;
}

const EMAIL_COPY: Record<
  Locale,
  { subject: string; heading: string; intro: string; footer: string }
> = {
  pt: {
    subject: "Seu Relatório Completo — SoulWeave",
    heading: "Aqui está o seu Relatório Completo",
    intro:
      "Obrigado pela sua confiança! Em anexo está o seu relatório personalizado em PDF, com a origem do seu padrão familiar, como ele se manifesta no seu dia a dia e o seu plano prático de 21 dias.",
    footer: "Com carinho, equipe SoulWeave.",
  },
  en: {
    subject: "Your Complete Report — SoulWeave",
    heading: "Here's your Complete Report",
    intro:
      "Thank you for your trust! Attached is your personalized PDF report, covering the origin of your family pattern, how it shows up in your daily life, and your practical 21-day plan.",
    footer: "With care, the SoulWeave team.",
  },
  es: {
    subject: "Tu Informe Completo — SoulWeave",
    heading: "Aquí está tu Informe Completo",
    intro:
      "¡Gracias por tu confianza! Adjunto encontrarás tu informe personalizado en PDF, con el origen de tu patrón familiar, cómo se manifiesta en tu día a día y tu plan práctico de 21 días.",
    footer: "Con cariño, equipo SoulWeave.",
  },
};

const FROM_FALLBACK = "SoulWeave <onboarding@resend.dev>";

export interface SendReportEmailArgs {
  to: string;
  name: string;
  locale: Locale;
  pdfBuffer: Buffer;
}

export async function sendReportEmail({ to, name, locale, pdfBuffer }: SendReportEmailArgs) {
  const resend = getResend();
  const copy = EMAIL_COPY[locale] ?? EMAIL_COPY.en;
  const from = process.env.RESEND_FROM_EMAIL || FROM_FALLBACK;

  const { error } = await resend.emails.send({
    from,
    to,
    subject: copy.subject,
    html: `
      <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; color: #241f14;">
        <h1 style="font-size: 22px;">${copy.heading}</h1>
        <p>${name ? `${name}, ` : ""}${copy.intro}</p>
        <p style="color: #6b6355; font-size: 13px; margin-top: 32px;">${copy.footer}</p>
      </div>
    `,
    attachments: [
      {
        filename: "relatorio-soulweave.pdf",
        content: pdfBuffer,
      },
    ],
  });

  if (error) {
    throw new Error(`Resend failed to send report email: ${error.message}`);
  }
}
