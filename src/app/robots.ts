import type { MetadataRoute } from "next";

const SITE_URL = "https://family-constellation-funnel.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/questionario", "/resultado", "/obrigado", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
