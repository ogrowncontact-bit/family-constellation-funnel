import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Dictionary } from "@/lib/i18n/translations";

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#241f14",
  },
  coverEyebrow: {
    fontSize: 10,
    letterSpacing: 2,
    color: "#b08d2b",
    marginBottom: 16,
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    marginBottom: 10,
    lineHeight: 1.3,
  },
  coverSubtitle: {
    fontSize: 13,
    color: "#4a4536",
    marginBottom: 40,
    lineHeight: 1.5,
  },
  coverMeta: {
    fontSize: 10,
    color: "#6b6355",
  },
  sectionHeading: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#241f14",
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.6,
    marginBottom: 8,
    color: "#302b1d",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 56,
    right: 56,
    fontSize: 8,
    color: "#9a927e",
    textAlign: "center",
  },
});

export interface ReportDocumentProps {
  name: string;
  archetypeTitle: string;
  archetypeSummary: string;
  pdfSections: Dictionary["archetypes"][keyof Dictionary["archetypes"]]["pdfSections"];
  generatedAtLabel: string;
  brandName: string;
}

export function ReportDocument({
  name,
  archetypeTitle,
  archetypeSummary,
  pdfSections,
  generatedAtLabel,
  brandName,
}: ReportDocumentProps) {
  return (
    <Document title={`${brandName} — ${archetypeTitle}`} author={brandName}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.coverEyebrow}>{brandName.toUpperCase()}</Text>
        <Text style={styles.coverTitle}>{archetypeTitle}</Text>
        <Text style={styles.coverSubtitle}>{archetypeSummary.replace("{name}", name)}</Text>
        <Text style={styles.coverMeta}>{name}</Text>
        <Text style={styles.coverMeta}>{generatedAtLabel}</Text>
        <Text style={styles.footer} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
      <Page size="A4" style={styles.page}>
        {pdfSections.map((section, index) => (
          <View key={index} wrap={false}>
            <Text style={styles.sectionHeading}>{section.heading}</Text>
            {section.body.map((paragraph, pIndex) => (
              <Text key={pIndex} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))}
          </View>
        ))}
        <Text style={styles.footer} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
}
