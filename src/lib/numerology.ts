// Real numerology calculations used to personalize the questionnaire result:
// a Life Path Number from the visitor's birth date, a Name Number (Guematria)
// from their name using the traditional Chaldean letter-value system, and a
// mapping from both onto a Sephirah of the Kabbalistic Tree of Life. This is
// presented as spiritual/self-reflection content (like the rest of the
// site), not a scientific or clinical claim.

export type SephirahId =
  | "keter"
  | "chokmah"
  | "binah"
  | "chesed"
  | "gevurah"
  | "tiferet"
  | "netzach"
  | "hod"
  | "yesod";

export const SEPHIRAH_IDS: SephirahId[] = [
  "keter",
  "chokmah",
  "binah",
  "chesed",
  "gevurah",
  "tiferet",
  "netzach",
  "hod",
  "yesod",
];

export function isSephirahId(value: unknown): value is SephirahId {
  return typeof value === "string" && (SEPHIRAH_IDS as string[]).includes(value);
}

const MASTER_NUMBERS = [11, 22, 33];

export function isMasterNumber(n: number): boolean {
  return MASTER_NUMBERS.includes(n);
}

function sumDigits(value: string): number {
  return value
    .split("")
    .filter((ch) => ch >= "0" && ch <= "9")
    .reduce((total, ch) => total + Number(ch), 0);
}

// Reduces a number to a single digit (1-9), except it stops early on a
// master number (11, 22, 33) — standard numerology convention.
function reduceKeepingMasters(n: number): number {
  let value = n;
  while (value > 9 && !isMasterNumber(value)) {
    value = sumDigits(String(value));
  }
  return value;
}

const BIRTH_DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function isValidBirthDate(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const match = BIRTH_DATE_RE.exec(value);
  if (!match) return false;
  const [, yearStr, monthStr, dayStr] = match;
  const year = Number(yearStr);
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return false;
  if (date.getUTCFullYear() !== year) return false;
  if (date.getUTCMonth() + 1 !== Number(monthStr)) return false;
  if (date.getUTCDate() !== Number(dayStr)) return false;
  const now = new Date();
  return year >= 1900 && date.getTime() <= now.getTime();
}

/** Life Path Number: sum of every digit in the birth date (YYYY-MM-DD), reduced. */
export function calculateLifePathNumber(birthDate: string): number {
  return reduceKeepingMasters(sumDigits(birthDate));
}

// Traditional Chaldean numerology letter values (1-8; 9 is considered
// sacred and not assigned to any letter). This is the same system implied
// by the site's own FAQ ("atribui valores numéricos a letras e nomes").
const CHALDEAN_VALUES: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8,
};

/** Name Number (Guematria): Chaldean letter-value sum of a name, reduced. */
export function calculateNameNumber(name: string): number {
  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // strip accents so "João" ~ "joao"

  let total = 0;
  for (const ch of normalized) {
    total += CHALDEAN_VALUES[ch] ?? 0;
  }
  return reduceKeepingMasters(total);
}

// Master numbers keep their own display value but map onto the Sephirah of
// their reduced root (11->2, 22->4, 33->6) since the Tree of Life's
// personality Sephirot run 1-9.
export function sephirahForNumber(n: number): SephirahId {
  const root = isMasterNumber(n) ? reduceKeepingMasters(sumDigits(String(n))) : n;
  const byNumber: Record<number, SephirahId> = {
    1: "keter",
    2: "chokmah",
    3: "binah",
    4: "chesed",
    5: "gevurah",
    6: "tiferet",
    7: "netzach",
    8: "hod",
    9: "yesod",
  };
  return byNumber[root] ?? "tiferet";
}

export interface PersonalNumerology {
  birthDate: string;
  lifePathNumber: number;
  nameNumber: number;
  sephirahId: SephirahId;
}

export function calculatePersonalNumerology(name: string, birthDate: string): PersonalNumerology {
  const lifePathNumber = calculateLifePathNumber(birthDate);
  return {
    birthDate,
    lifePathNumber,
    nameNumber: calculateNameNumber(name),
    sephirahId: sephirahForNumber(lifePathNumber),
  };
}
