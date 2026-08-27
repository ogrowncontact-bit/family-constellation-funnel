"use client";

import { useState } from "react";

const items = [
  {
    q: "Does family constellation therapy replace regular therapy?",
    a: "No. It's recognized as a complementary method within systemic psychology — not a validated clinical treatment for psychiatric disorders. Many therapists and systemic coaches use it as an additional tool within a broader process, not a substitute for professional care when that's needed.",
  },
  {
    q: "Do I need to know anything about Kabbalah to understand family constellations?",
    a: "No. They're two different traditions. Family constellation therapy comes from systemic psychology; the Kabbalistic Tree of Life is an additional symbolic lens some approaches, like SoulWeave, use to organize and visualize those patterns.",
  },
  {
    q: "Can I do this without a group session?",
    a: "Yes — individual formats exist, including digital ones that map your family visually instead of using human representatives. A group session with a trained facilitator lets you observe dynamics that solo reflection can't reveal, but individual mapping already helps surface patterns.",
  },
  {
    q: "Is my family data kept private?",
    a: "In SoulWeave, your constellation data is private by default and used only to generate your own map — you can export or delete your information at any time.",
  },
];

export function ArticleFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-2 flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-xl border border-border bg-background"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
            >
              {item.q}
              <span className="shrink-0 text-primary">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
