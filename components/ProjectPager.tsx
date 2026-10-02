import Link from "next/link";
import Icon from "./Icon";
import { localeHref, type Locale } from "@/utils/content/locale";
import type { Project } from "@/utils/content/types";

export default function ProjectPager({
  previous,
  next,
  locale,
  previousLabel,
  nextLabel,
}: {
  previous: Project;
  next: Project;
  locale: Locale;
  previousLabel: string;
  nextLabel: string;
}) {
  return (
    <nav
      aria-label={`${previousLabel} / ${nextLabel}`}
      className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2"
    >
      <Link
        href={localeHref(locale, `/work/${previous.slug}`)}
        className="group flex flex-col gap-2 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2 sm:p-8"
      >
        <span className="label flex items-center gap-2 text-ink-3">
          <Icon
            name="arrow-left"
            className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-x-1"
          />
          {previousLabel}
        </span>
        <span className="display text-xl text-ink">{previous.title}</span>
      </Link>

      <Link
        href={localeHref(locale, `/work/${next.slug}`)}
        className="group flex flex-col items-end gap-2 bg-surface p-6 text-right transition-colors duration-300 hover:bg-surface-2 sm:p-8"
      >
        <span className="label flex items-center gap-2 text-ink-3">
          {nextLabel}
          <Icon
            name="arrow-right"
            className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          />
        </span>
        <span className="display text-xl text-ink">{next.title}</span>
      </Link>
    </nav>
  );
}
