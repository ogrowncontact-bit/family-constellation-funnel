import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { createElement, type ReactElement } from "react";
import { ReportDocument } from "@/lib/pdf/ReportDocument";
import { dictionaries, type Locale } from "@/lib/i18n/translations";
import type { ArchetypeId } from "@/lib/quiz";

const DATE_LOCALE: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" };
const BRAND_NAME = "SoulWeave";

export async function generateReportPdf(
  name: string,
  locale: Locale,
  archetypeId: ArchetypeId
): Promise<Buffer> {
  const dict = dictionaries[locale] ?? dictionaries.en;
  const archetype = dict.archetypes[archetypeId];

  const generatedAtLabel = new Intl.DateTimeFormat(DATE_LOCALE[locale] ?? "en-US", {
    dateStyle: "long",
  }).format(new Date());

  const element = createElement(ReportDocument, {
    name: name || "—",
    archetypeTitle: archetype.title,
    archetypeSummary: archetype.shortSummary,
    pdfSections: archetype.pdfSections,
    generatedAtLabel,
    brandName: BRAND_NAME,
  });

  // ReportDocument's root element is a <Document>, but TS sees the wrapper
  // component's own prop type here — cast to the shape renderToBuffer expects.
  return renderToBuffer(element as ReactElement<DocumentProps>);
}
