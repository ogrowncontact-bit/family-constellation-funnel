"use client";

import { useState } from "react";

const items = [
  {
    q: "Les constellations familiales remplacent-elles la thérapie ?",
    a: "Non. C'est une méthode complémentaire en psychologie systémique, pas un traitement clinique validé pour les troubles psychologiques ou psychiatriques. De nombreux thérapeutes l'utilisent comme outil supplémentaire, pas comme traitement unique.",
  },
  {
    q: "Faut-il connaître la Kabbale pour comprendre les constellations familiales ?",
    a: "Non. Ce sont deux traditions distinctes. Les constellations familiales viennent de la psychologie systémique ; l'Arbre de Vie kabbalistique est un prisme symbolique supplémentaire que certaines approches, comme SoulWeave, utilisent pour organiser visuellement ces schémas.",
  },
  {
    q: "Peut-on le faire sans groupe en présentiel ?",
    a: "Oui — il existe des formats individuels, y compris numériques, qui cartographient la famille visuellement. Une séance de groupe avec un facilitateur formé révèle des dynamiques que la réflexion seule ne permet pas de voir, mais la cartographie individuelle aide déjà à repérer des schémas.",
  },
  {
    q: "Mes données familiales sont-elles protégées ?",
    a: "Sur SoulWeave, les données de votre constellation sont privées par défaut et utilisées uniquement pour générer votre propre carte — vous pouvez exporter ou supprimer vos informations à tout moment.",
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
