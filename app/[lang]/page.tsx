import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import TextLink from "@/components/TextLink";
import ProjectCard from "@/components/ProjectCard";
import CapabilityGrid from "@/components/CapabilityGrid";
import ProfileCard from "@/components/ProfileCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsBlock from "@/components/SkillsBlock";
import PrincipleGrid from "@/components/PrincipleGrid";
import Credentials from "@/components/Credentials";
import ContactCard from "@/components/ContactCard";
import SystemDiagram from "@/components/artwork/SystemDiagram";
import PersonSchema from "@/components/PersonSchema";
import { getContent, getLocale } from "@/utils/content";
import { localeHref } from "@/utils/content/locale";

export default async function HomePage() {
  const locale = await getLocale();
  const content = await getContent();
  const { hero, sections, actions, labels, profile } = content;
  const featured = content.projects.filter((project) => project.featured);

  return (
    <>
      <PersonSchema content={content} locale={locale} />

      <section className="pt-10 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-sm bg-accent-soft px-2.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent">
                  {hero.badge}
                </span>
                <span className="font-mono text-xs text-ink-3">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="display mt-6 text-[clamp(2.5rem,6.2vw,5.5rem)] text-ink text-balance">
                {hero.headline.lead}{" "}
                <span className="text-accent">{hero.headline.accent}</span>
                {hero.headline.trail}
              </h1>

              <p className="measure mt-7 text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-relaxed text-ink-2">
                {hero.lead}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={localeHref(locale, "/work")}>
                  {actions.viewWork}
                </Button>
                <Button
                  href={localeHref(locale, "/contact")}
                  variant="secondary"
                  arrow="up"
                >
                  {actions.letsTalk}
                </Button>
              </div>

              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8">
                {hero.meta.map((item) => (
                  <div key={item.label}>
                    <dt className="label text-ink-3">{item.label}</dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative min-w-0 overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-e2 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-accent-soft"
              />

              <div className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-3.5">
                <span className="min-w-0 truncate font-mono text-xs font-semibold text-ink">
                  {hero.diagram.caption}
                </span>
                <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-ink-3">
                  <span className="dot-pulse size-[7px] rounded-full bg-success" />
                  {hero.diagram.status}
                </span>
              </div>

              <div className="mt-5">
                <SystemDiagram diagram={hero.diagram} />
              </div>

              <dl className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="flex items-baseline justify-between gap-3 rounded-sm border border-line bg-surface-2 p-3.5 sm:block"
                  >
                    <dt className="display shrink-0 text-[1.0625rem] text-ink">
                      {stat.value}
                    </dt>
                    <dd className="text-right font-mono text-[11px] leading-tight text-ink-2 sm:mt-1 sm:text-left">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader
            meta={sections.work}
            action={
              <TextLink href={localeHref(locale, "/work")}>
                {actions.viewAllWork}
              </TextLink>
            }
          />

          <div className="mt-14 flex flex-col gap-10 md:gap-16">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                locale={locale}
                labels={labels}
                viewLabel={actions.viewCaseStudy}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader meta={sections.capabilities} />
          <div className="mt-14">
            <CapabilityGrid capabilities={content.capabilities} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader meta={sections.about} />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="min-w-0">
              <p className="display text-[clamp(1.375rem,2.4vw,2.125rem)] leading-snug font-medium text-ink text-balance">
                {content.about.quote}
              </p>

              <div className="mt-9 flex flex-col gap-6 text-[1.0625rem] leading-[1.75] text-ink-2">
                {content.about.paragraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-9">
                <TextLink href={localeHref(locale, "/about")}>
                  {actions.readMore}
                </TextLink>
              </div>
            </div>

            <ProfileCard about={content.about} profile={profile} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader meta={sections.experience} />

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="min-w-0">
              <h3 className="display mb-8 text-2xl text-ink">
                {labels.experience}
              </h3>
              <ExperienceTimeline items={content.experience} />
            </div>
            <div className="min-w-0">
              <h3 className="display mb-8 text-2xl text-ink">{labels.stack}</h3>
              <SkillsBlock groups={content.skills} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader meta={sections.credentials} />
          <div className="mt-14">
            <Credentials content={content} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeader meta={sections.principles} />
          <div className="mt-14">
            <PrincipleGrid principles={content.principles} />
          </div>
        </Container>
      </section>

      {content.testimonials.length > 0 && (
        <section className="border-t border-line py-20 md:py-28">
          <Container>
            <SectionHeader meta={sections.testimonials} />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-md border border-line bg-surface p-7 shadow-e1"
                >
                  <blockquote className="text-[1.0625rem] leading-relaxed text-ink">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <span className="block text-sm font-semibold text-ink">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block font-mono text-xs text-ink-2">
                      {testimonial.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <ContactCard content={content} />
        </Container>
      </section>
    </>
  );
}
