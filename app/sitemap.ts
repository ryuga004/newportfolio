import type { MetadataRoute } from "next";
import { locales } from "@/utils/content/locale";
import { getContentFor } from "@/utils/content/load";
import { siteUrl } from "@/utils/site";

const staticPaths = ["", "/work", "/about", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const entries = await Promise.all(
    locales.map(async (locale) => {
      const content = await getContentFor(locale);

      return [
        ...staticPaths.map((path) => ({
          url: `${siteUrl}/${locale}${path}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: path === "" ? 1 : 0.8,
        })),
        ...content.projects.map((project) => ({
          url: `${siteUrl}/${locale}/work/${project.slug}`,
          lastModified,
          changeFrequency: "yearly" as const,
          priority: 0.6,
        })),
      ];
    }),
  );

  return entries.flat();
}
