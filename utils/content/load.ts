import type { Locale, SiteContent } from "./types";

const sources: Record<Locale, () => Promise<SiteContent>> = {
  en: () => import("./en").then((module) => module.default),
  hi: () => import("./hi").then((module) => module.default),
  ja: () => import("./ja").then((module) => module.default),
  es: () => import("./es").then((module) => module.default),
  de: () => import("./de").then((module) => module.default),
};

export async function getContentFor(locale: Locale): Promise<SiteContent> {
  return sources[locale]();
}
