import type { MetadataRoute } from "next";
import { universities } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-12");
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "universities", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "kyrgyzstan", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "uzbekistan", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "apply", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "team", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "partnership", priority: 0.55, changeFrequency: "monthly" as const },
  ];
  const universityRoutes = universities.map((university) => ({
    route: `${university.country}/${university.slug}`,
    priority: 0.82,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...universityRoutes].map((route) => ({
    url: `${siteConfig.url}/${route.route}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
