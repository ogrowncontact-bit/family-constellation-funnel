import type { MetadataRoute } from "next";

const SITE_URL = "https://family-constellation-funnel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/o-que-e-constelacao-familiar`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/family-constellation-therapy`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/que-son-las-constelaciones-familiares`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/quest-ce-que-les-constellations-familiales`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
