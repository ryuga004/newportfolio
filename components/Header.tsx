"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Icon from "./Icon";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { localeHref, stripLocale, type Locale } from "@/utils/content/locale";
import type { NavItem, SiteContent } from "@/utils/content/types";

type HeaderProps = {
  locale: Locale;
  profile: Pick<
    SiteContent["profile"],
    "name" | "disciplines" | "availability"
  >;
  nav: NavItem[];
  actions: Pick<
    SiteContent["actions"],
    | "letsTalk"
    | "openMenu"
    | "closeMenu"
    | "theme"
    | "themeLight"
    | "themeDark"
    | "themeSystem"
    | "language"
  >;
};

export default function Header({
  locale,
  profile,
  nav,
  actions,
}: HeaderProps) {
  const pathname = usePathname();
  const current = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open]);

  function isActive(href: string) {
    return href === "/" ? current === "/" : current.startsWith(href);
  }

  const themeLabels = {
    theme: actions.theme,
    light: actions.themeLight,
    dark: actions.themeDark,
    system: actions.themeSystem,
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.75rem] items-center justify-between gap-4">
          <Link
            href={localeHref(locale, "/")}
            className="group flex shrink-0 items-center gap-3.5"
          >
            <BrandMark className="size-9.5 transition-transform duration-300 ease-out-expo group-hover:scale-110" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-ink">
                {profile.name}
              </span>
              <span className="font-mono text-[11px] text-ink-2">
                {profile.disciplines}
              </span>
            </span>
          </Link>

          <nav aria-label={profile.name} className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block py-2 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:ease-out-expo ${
                      isActive(item.href)
                        ? "text-ink after:scale-x-100"
                        : "text-ink-2 hover:text-ink after:scale-x-0"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink-2 xl:inline-flex">
              <span className="dot-pulse size-[7px] rounded-full bg-success" />
              {profile.availability}
            </span>

            <span className="hidden sm:block">
              <ThemeToggle labels={themeLabels} />
            </span>
            <span className="hidden sm:block">
              <LocaleSwitcher locale={locale} label={actions.language} />
            </span>

            <Link
              href={localeHref(locale, "/contact")}
              className="group hidden min-h-11 items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast shadow-e1 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-e2 lg:inline-flex"
            >
              {actions.letsTalk}
              <Icon
                name="arrow-up-right"
                className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex size-11 items-center justify-center rounded-sm border border-line bg-surface text-ink transition-colors duration-200 hover:border-line-strong lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
              <span className="sr-only">
                {open ? actions.closeMenu : actions.openMenu}
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-base lg:hidden"
        >
          <Container className="py-6">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={localeHref(locale, item.href)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between py-2 font-display text-xl font-semibold transition-colors duration-200 ${
                      isActive(item.href) ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow-right" className="size-5 text-ink-3" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:hidden">
              <ThemeToggle labels={themeLabels} />
              <LocaleSwitcher locale={locale} label={actions.language} />
            </div>

            <Link
              href={localeHref(locale, "/contact")}
              onClick={() => setOpen(false)}
              className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast"
            >
              {actions.letsTalk}
              <Icon name="arrow-up-right" className="size-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
