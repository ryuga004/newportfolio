import Link from "next/link";
import Container from "./Container";
import Icon from "./Icon";
import BrandMark from "./BrandMark";
import { localeHref, type Locale } from "@/utils/content/locale";
import type { SiteContent } from "@/utils/content/types";

export default function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: SiteContent;
}) {
  const { profile, footer, nav, socials } = content;

  return (
    <footer className="border-t border-line bg-base">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <BrandMark className="size-9.5" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold tracking-tight text-ink">
                  {profile.name}
                </span>
                <span className="font-mono text-[11px] text-ink-2">
                  {profile.role}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-2">
              {footer.description}
            </p>
          </div>

          <nav aria-label={footer.navTitle}>
            <h2 className="label text-ink-3">{footer.navTitle}</h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    className="text-[0.9375rem] text-ink-2 transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-ink-3">{footer.connectTitle}</h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-2 transition-colors duration-200 hover:text-ink"
                  >
                    {social.label}
                    <Icon
                      name="arrow-up-right"
                      className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[0.9375rem] text-ink-2 transition-colors duration-200 hover:text-ink"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-ink-3">
          <span>
            © {new Date().getFullYear()} {profile.name}. {footer.rights}
          </span>
          <span>{profile.disciplines}</span>
        </div>
      </Container>
    </footer>
  );
}
