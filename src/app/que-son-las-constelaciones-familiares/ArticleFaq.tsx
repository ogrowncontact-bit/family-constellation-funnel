"use client";

import { useState } from "react";

const items = [
  {
    q: "¿Las constelaciones familiares sustituyen a la terapia?",
    a: "No. Es un método complementario dentro de la psicología sistémica, no un tratamiento clínico validado para trastornos psicológicos o psiquiátricos. Muchos terapeutas y coaches sistémicos lo usan como herramienta adicional dentro de un proceso más amplio.",
  },
  {
    q: "¿Necesito saber de Kábala para entender las constelaciones familiares?",
    a: "No. Son dos tradiciones distintas. Las constelaciones familiares vienen de la psicología sistémica; el Árbol de la Vida cabalístico es una lente simbólica adicional que algunos enfoques, como el de SoulWeave, usan para organizar visualmente esos patrones.",
  },
  {
    q: "¿Se puede hacer sin un grupo presencial?",
    a: "Sí — existen formatos individuales, incluidas versiones digitales que mapean a los miembros de la familia visualmente. Una sesión grupal con un facilitador entrenado permite observar dinámicas que la reflexión individual no revela, pero el mapeo individual ya ayuda a identificar patrones.",
  },
  {
    q: "¿Mis datos familiares quedan protegidos?",
    a: "En SoulWeave, los datos de tu constelación son privados por defecto y se usan solo para generar tu propio mapa — puedes exportar o eliminar tu información en cualquier momento.",
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
