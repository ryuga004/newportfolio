import Link from "next/link";
import Icon from "./Icon";
import Tag from "./Tag";
import ProjectPreview from "./ProjectPreview";
import ProjectArtwork from "./artwork/ProjectArtwork";
import { localeHref, type Locale } from "@/utils/content/locale";
import type { Project, SiteContent } from "@/utils/content/types";

export default function ProjectCard({
  project,
  index,
  locale,
  labels,
  viewLabel,
  reversed = false,
}: {
  project: Project;
  index: number;
  locale: Locale;
  labels: SiteContent["labels"];
  viewLabel: string;
  reversed?: boolean;
}) {
  const position = String(index + 1).padStart(2, "0");
  const hasMedia = Boolean(project.media?.image ?? project.media?.video);

  return (
    <article className="stretch-target group overflow-hidden rounded-xl border border-line bg-surface shadow-e1 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift">
      <div
        className={
          reversed
            ? "grid lg:grid-cols-[0.95fr_1.25fr]"
            : "grid lg:grid-cols-[1.25fr_0.95fr]"
        }
      >
        <div
          className={`flex min-w-0 border-b border-line bg-surface-2 p-4 sm:p-7 lg:border-b-0 ${
            reversed ? "lg:order-2 lg:border-l" : "lg:border-r"
          }`}
        >
          <div className="flex min-h-[21rem] w-full min-w-0 sm:min-h-[24rem] lg:min-h-[26rem]">
            {hasMedia && project.media ? (
              <ProjectPreview media={project.media} />
            ) : (
              <ProjectArtwork artwork={project.artwork} />
            )}
          </div>
        </div>

        <div
          className={`flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-9 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-sm bg-accent-soft px-2.5 py-1 font-mono text-xs font-semibold text-accent">
                {labels.project} {position}
              </span>
              <span className="font-mono text-[0.8125rem] text-ink-3">
                {project.period}
              </span>
            </div>

            <h3 className="display mt-6 text-[clamp(1.625rem,2.4vw,2.125rem)] text-ink">
              {project.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-ink-2">
              {project.summary}
            </p>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-5 border-t border-line pt-6">
              <div className="min-w-0">
                <dt className="label text-ink-3">{labels.role}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-ink">
                  {project.role}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="label text-ink-3">{labels.architecture}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-ink">
                  {project.architecture}
                </dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href={localeHref(locale, `/work/${project.slug}`)}
                className="stretch-link relative inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-ink"
              >
                <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out-expo group-hover:after:scale-x-100">
                  {viewLabel}
                </span>
                <Icon
                  name="arrow-up-right"
                  className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {project.links.length > 0 && (
                <ul className="relative z-[2] flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-sm border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink-2 transition-colors duration-200 hover:border-line-strong hover:text-ink"
                      >
                        {link.label}
                        <Icon name="arrow-up-right" className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
