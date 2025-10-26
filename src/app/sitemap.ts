import { env } from "@/config/env";
import type { MetadataRoute } from "next";

// Cloudflare Pages対応設定
export const runtime = "edge";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
