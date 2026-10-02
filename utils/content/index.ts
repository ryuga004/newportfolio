import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import type { Locale, SiteContent } from "./types";
import { isLocale } from "./locale";
import { getContentFor } from "./load";

export { getContentFor };

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

export async function getContent(): Promise<SiteContent> {
  return getContentFor(await getLocale());
}
