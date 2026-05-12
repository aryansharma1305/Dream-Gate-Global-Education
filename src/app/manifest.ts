import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Dream Gate",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B1F4A",
    theme_color: "#0B1F4A",
    categories: ["education", "medical"],
    icons: [
      {
        src: "/brand/dream-gate-logo-transparent.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
