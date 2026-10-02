import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Tag from "@/components/Tag";
import CaseSection from "@/components/CaseSection";
import ContactCard from "@/components/ContactCard";
import ProjectPager from "@/components/ProjectPager";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectArtwork from "@/components/artwork/ProjectArtwork";
import { getContent, getContentFor, getLocale } from "@/utils/content";
import { isLocale, locales, localeHref } from "@/utils/content/locale";

export const dynamicParams = false;

export async function generateStaticParams() {
  const entries = await Promise.all(
    locales.map(async (lang) => {
      const content = await getContentFor(lang);
      return content.projects.map((project) => ({ lang, slug: project.slug }));
    }),
  );

  return entries.flat();
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const content = await getContentFor(lang);
  const project = content.projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${content.profile.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/[lang]/work/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const content = await getContent();

  const index = content.projects.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const project = content.projects[index];
  const { labels, actions } = content;
  const total = content.projects.length;
  const previous = content.projects[(index - 1 + total) % total];
  const next = content.projects[(index + 1) % total];

  const meta = [
    { label: labels.role, value: project.role },
    { label: labels.architecture, value: project.architecture },
    { label: labels.period, value: project.period },
    { label: labels.category, value: project.category },
  ];

  return (
    <>
      <section className="border-b border-line py-10 md:py-14">
        <Container>
          <Link
            href={localeHref(locale, "/work")}
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs text-ink-2 transition-colors duration-200 hover:text-ink"
          >
            <Icon
              name="arrow-left"
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-x-1"
            />
            {actions.backToWork}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-sm bg-accent-soft px-2.5 py-1 font-mono text-xs font-semibold text-accent">
              {project.category}
            </span>
            <span className="font-mono text-xs text-ink-3">
              {project.period}
            </span>
          </div>

          <h1 className="display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-ink">
            {project.title}
          </h1>

          <p className="measure mt-6 text-lg leading-relaxed text-ink-2">
            {project.summary}
          </p>

          {project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink shadow-e1 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-2"
                >
                  {link.label}
                  <Icon
                    name="arrow-up-right"
                    className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          )}

          <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((entry) => (
              <div key={entry.label} className="min-w-0">
                <dt className="label text-ink-3">{entry.label}</dt>
                <dd className="mt-2 text-[0.9375rem] font-semibold text-ink">
                  {entry.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="rounded-xl border border-line bg-surface-2 p-4 shadow-e1 sm:p-8">
            <div className="flex min-h-[22rem] min-w-0 sm:min-h-[28rem]">
              {project.media?.image ?? project.media?.video ? (
                <ProjectMedia media={project.media} preload />
              ) : (
                <ProjectArtwork artwork={project.artwork} />
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="flex flex-col gap-16">
            <CaseSection title={labels.context}>
              <p className="measure text-[1.0625rem] leading-[1.8] text-ink-2">
                {project.context}
              </p>
            </CaseSection>

            <CaseSection title={labels.approach}>
              <p className="measure text-[1.0625rem] leading-[1.8] text-ink-2">
                {project.approach}
              </p>
            </CaseSection>

            {(project.media?.image ?? project.media?.video) && (
              <CaseSection title={labels.architectureDiagram}>
                <div className="flex min-h-[20rem] min-w-0 rounded-lg border border-line bg-surface-2 p-4 sm:min-h-[24rem] sm:p-6">
                  <ProjectArtwork artwork={project.artwork} />
                </div>
              </CaseSection>
            )}

            <CaseSection title={labels.decisions}>
              <ol className="flex flex-col gap-8">
                {project.decisions.map((decision, position) => (
                  <li
                    key={decision.title}
                    className="border-l-2 border-line pl-6"
                  >
                    <span className="font-mono text-xs text-ink-3">
                      {String(position + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display mt-2 text-xl text-ink">
                      {decision.title}
                    </h3>
                    <p className="measure mt-3 text-[0.9375rem] leading-[1.75] text-ink-2">
                      {decision.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </CaseSection>

            <CaseSection title={labels.features}>
              <ul className="flex flex-col gap-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3.5">
                    <Icon
                      name="check"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <span className="text-[1.0625rem] leading-relaxed text-ink-2">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title={labels.technologies}>
              <ul className="flex flex-wrap gap-2.5">
                {project.tech.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </CaseSection>

            {project.outcomes.length > 0 && (
              <CaseSection title={labels.outcomes}>
                <ul className="flex flex-col gap-4">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3.5">
                      <Icon
                        name="check"
                        className="mt-1 size-4 shrink-0 text-accent"
                      />
                      <span className="text-[1.0625rem] leading-relaxed text-ink-2">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <ProjectPager
            previous={previous}
            next={next}
            locale={locale}
            previousLabel={actions.previousProject}
            nextLabel={actions.nextProject}
          />
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <ContactCard content={content} />
        </Container>
      </section>
    </>
  );
}
