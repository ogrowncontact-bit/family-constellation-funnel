import { google } from "googleapis";

export interface LeadRow {
  name: string;
  email: string;
  locale: string;
  source: string;
}

export interface QuizResponseRow {
  name: string;
  email: string;
  locale: string;
  archetypeId: string;
  answers: Record<string, string>;
  birthDate: string;
  lifePathNumber: number;
  sephirahId: string;
}

export interface PurchaseRow {
  name: string;
  email: string;
  locale: string;
  archetypeId: string;
  paymentIntentId: string;
  lifePathNumber?: number;
  sephirahId?: string;
}

function getCredentials() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) return null;
  return { email, key, sheetId };
}

async function appendRow(range: string, values: (string | number)[]) {
  const credentials = getCredentials();
  if (!credentials) {
    throw new Error(
      "Google Sheets is not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY and GOOGLE_SHEET_ID."
    );
  }

  const auth = new google.auth.JWT({
    email: credentials.email,
    key: credentials.key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: credentials.sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [values] },
  });
}

export async function appendLead(lead: LeadRow) {
  await appendRow("Leads!A:E", [new Date().toISOString(), lead.name, lead.email, lead.locale, lead.source]);
}

// Best-effort logging — the quiz and checkout flows must keep working even
// if these tabs don't exist yet or Sheets isn't configured, so callers
// should catch/ignore errors from these two.
export async function logQuizResponse(row: QuizResponseRow) {
  await appendRow("Respostas!A:I", [
    new Date().toISOString(),
    row.name,
    row.email,
    row.locale,
    row.archetypeId,
    JSON.stringify(row.answers),
    row.birthDate,
    row.lifePathNumber,
    row.sephirahId,
  ]);
}

export async function logPurchase(row: PurchaseRow) {
  await appendRow("Compras!A:H", [
    new Date().toISOString(),
    row.name,
    row.email,
    row.locale,
    row.archetypeId,
    row.paymentIntentId,
    row.lifePathNumber ?? "",
    row.sephirahId ?? "",
  ]);
}
