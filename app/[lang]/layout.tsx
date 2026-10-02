import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent, getContentFor, getLocale } from "@/utils/content";
import { isLocale, locales } from "@/utils/content/locale";
import { siteUrl } from "@/utils/site";

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

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = await getContentFor(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: content.meta.title,
      template: content.meta.template,
    },
    description: content.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((value) => [value, `/${value}`]),
      ),
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: content.profile.name,
      title: content.meta.title,
      description: content.meta.description,
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const content = await getContent();

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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-contrast"
        >
          {content.actions.skipToContent}
        </a>

        <Header
          locale={locale}
          profile={{
            name: content.profile.name,
            disciplines: content.profile.disciplines,
            availability: content.profile.availability,
          }}
          nav={content.nav}
          actions={{
            letsTalk: content.actions.letsTalk,
            openMenu: content.actions.openMenu,
            closeMenu: content.actions.closeMenu,
            theme: content.actions.theme,
            themeLight: content.actions.themeLight,
            themeDark: content.actions.themeDark,
            themeSystem: content.actions.themeSystem,
            language: content.actions.language,
          }}
        />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer locale={locale} content={content} />
      </body>
    </html>
  );
}
