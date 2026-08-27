"use client";

import { useState } from "react";

const items = [
  {
    q: "Constelação familiar é a mesma coisa que terapia?",
    a: "Não. É um método complementar de psicologia sistêmica — não substitui acompanhamento psicológico, psiquiátrico ou médico. Muitos terapeutas a usam como ferramenta adicional dentro de um processo mais amplo.",
  },
  {
    q: "Preciso saber sobre Kabbalah para entender constelação familiar?",
    a: "Não. São duas tradições diferentes. A constelação familiar vem da psicologia sistêmica; a Árvore da Vida cabalística é uma lente simbólica adicional que algumas abordagens, como a do SoulWeave, usam para organizar visualmente esses padrões.",
  },
  {
    q: "Dá para fazer sozinho, sem grupo presencial?",
    a: "Sim — existem formatos individuais, incluindo versões digitais que mapeiam os membros da família visualmente. Uma sessão em grupo com facilitador treinado permite observar dinâmicas que a reflexão sozinha não revela, mas o mapeamento individual já ajuda a identificar padrões.",
  },
  {
    q: "Meus dados familiares ficam seguros?",
    a: "No SoulWeave, os dados da sua constelação são privados por padrão e usados apenas para gerar o seu próprio mapa — você pode exportar ou apagar suas informações a qualquer momento.",
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
