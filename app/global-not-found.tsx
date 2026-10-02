import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BrandMark from "@/components/BrandMark";
import { getContentFor } from "@/utils/content";
import { defaultLocale, isLocale, localeHref } from "@/utils/content/locale";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export const metadata: Metadata = {
  title: "404",
};

export default async function GlobalNotFound() {
  const header = (await headers()).get("x-locale");
  const locale = isLocale(header) ? header : defaultLocale;
  const content = await getContentFor(locale);
  const copy = content.pages.notFound;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <main className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1380px] px-5 py-24 sm:px-8 lg:px-14">
            <div className="flex items-center gap-3.5">
              <BrandMark className="size-9.5" />
              <span className="font-display text-base font-bold tracking-tight text-ink">
                {content.profile.name}
              </span>
            </div>

            <p className="label mt-16 text-accent">{copy.kicker}</p>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] text-ink text-balance">
              {copy.title}
            </h1>
            <p className="measure mt-6 text-lg leading-relaxed text-ink-2">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={localeHref(locale, "/work")}
                className="inline-flex min-h-11 items-center rounded-sm bg-accent px-6 py-3 text-[0.9375rem] font-semibold text-accent-contrast shadow-e1 transition-colors duration-300 hover:bg-accent-hover"
              >
                {content.actions.viewWork}
              </a>
              <a
                href={localeHref(locale, "/")}
                className="inline-flex min-h-11 items-center rounded-sm border border-line bg-surface px-6 py-3 text-[0.9375rem] font-semibold text-ink shadow-e1 transition-colors duration-300 hover:border-line-strong hover:bg-surface-2"
              >
                {content.nav[0].label}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
