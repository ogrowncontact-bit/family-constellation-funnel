import { google } from "googleapis";

export interface LeadRow {
  name: string;
  email: string;
  locale: string;
  source: string;
}

function getCredentials() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) return null;
  return { email, key, sheetId };
}

export async function appendLead(lead: LeadRow) {
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
    range: "Leads!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date().toISOString(), lead.name, lead.email, lead.locale, lead.source]],
    },
  });
}
