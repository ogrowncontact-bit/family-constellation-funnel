// Language-agnostic quiz structure: ids + scoring weights only.
// Human-readable question/option/archetype copy lives in `src/lib/i18n/translations.ts`,
// keyed by the same ids so text stays in one place with the rest of the site's i18n content.

export type ArchetypeId =
  | "brokenLink"
  | "invisibleLoyalty"
  | "inheritedWeight"
  | "repetitionCycle"
  | "searchForBelonging";

export const ARCHETYPE_IDS: ArchetypeId[] = [
  "brokenLink",
  "invisibleLoyalty",
  "inheritedWeight",
  "repetitionCycle",
  "searchForBelonging",
];

export function isArchetypeId(value: unknown): value is ArchetypeId {
  return typeof value === "string" && (ARCHETYPE_IDS as string[]).includes(value);
}

export interface QuizOption {
  id: string;
  scores: Partial<Record<ArchetypeId, number>>;
}

export interface QuizQuestionDef {
  id: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestionDef[] = [
  {
    id: "q1",
    options: [
      { id: "a", scores: { repetitionCycle: 2, searchForBelonging: 1 } },
      { id: "b", scores: { invisibleLoyalty: 2, inheritedWeight: 1 } },
      { id: "c", scores: { inheritedWeight: 2, brokenLink: 1 } },
      { id: "d", scores: { searchForBelonging: 2, brokenLink: 1 } },
    ],
  },
  {
    id: "q2",
    options: [
      { id: "a", scores: { brokenLink: 3 } },
      { id: "b", scores: { invisibleLoyalty: 2, inheritedWeight: 1 } },
      { id: "c", scores: { brokenLink: 2 } },
      { id: "d", scores: { repetitionCycle: 1 } },
    ],
  },
  {
    id: "q3",
    options: [
      { id: "a", scores: { invisibleLoyalty: 3 } },
      { id: "b", scores: { searchForBelonging: 2, invisibleLoyalty: 1 } },
      { id: "c", scores: { inheritedWeight: 3 } },
      { id: "d", scores: { repetitionCycle: 1 } },
    ],
  },
  {
    id: "q4",
    options: [
      { id: "a", scores: { repetitionCycle: 3 } },
      { id: "b", scores: { searchForBelonging: 3 } },
      { id: "c", scores: { brokenLink: 2, repetitionCycle: 1 } },
      { id: "d", scores: { inheritedWeight: 2, invisibleLoyalty: 1 } },
    ],
  },
  {
    id: "q5",
    options: [
      { id: "a", scores: { repetitionCycle: 2 } },
      { id: "b", scores: { inheritedWeight: 2, invisibleLoyalty: 1 } },
      { id: "c", scores: { brokenLink: 2 } },
      { id: "d", scores: { searchForBelonging: 2 } },
    ],
  },
];

export function scoreQuiz(answers: Record<string, string>): ArchetypeId {
  const totals = Object.fromEntries(ARCHETYPE_IDS.map((id) => [id, 0])) as Record<
    ArchetypeId,
    number
  >;

  for (const question of QUIZ_QUESTIONS) {
    const chosen = answers[question.id];
    const option = question.options.find((o) => o.id === chosen);
    if (!option) continue;
    for (const [archetypeId, points] of Object.entries(option.scores)) {
      totals[archetypeId as ArchetypeId] += points ?? 0;
    }
  }

  let best: ArchetypeId = ARCHETYPE_IDS[0];
  let bestScore = -Infinity;
  for (const id of ARCHETYPE_IDS) {
    if (totals[id] > bestScore) {
      bestScore = totals[id];
      best = id;
    }
  }
  return best;
}

export function validateAnswers(value: unknown): value is Record<string, string> {
  if (typeof value !== "object" || value === null) return false;
  const answers = value as Record<string, unknown>;
  return QUIZ_QUESTIONS.every((q) => {
    const chosen = answers[q.id];
    return typeof chosen === "string" && q.options.some((o) => o.id === chosen);
  });
}
