import type { ArchetypeId } from "@/lib/quiz";

const LEAD_KEY = "sw-lead";
const QUIZ_KEY = "sw-quiz";

export interface StoredLead {
  name: string;
  email: string;
  source: string;
}

export interface StoredQuiz {
  answers: Record<string, string>;
  archetypeId: ArchetypeId;
}

function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export const saveLead = (lead: StoredLead) => writeJson(LEAD_KEY, lead);
export const loadLead = () => readJson<StoredLead>(LEAD_KEY);
export const saveQuiz = (quiz: StoredQuiz) => writeJson(QUIZ_KEY, quiz);
export const loadQuiz = () => readJson<StoredQuiz>(QUIZ_KEY);
