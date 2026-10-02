import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsBlock from "@/components/SkillsBlock";
import PrincipleGrid from "@/components/PrincipleGrid";
import Credentials from "@/components/Credentials";
import ContactCard from "@/components/ContactCard";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { getContent, getContentFor } from "@/utils/content";
import { isLocale } from "@/utils/content/locale";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = await getContentFor(lang);

  return {
    title: content.pages.about.kicker,
    description: content.pages.about.description,
  };
}

export default async function AboutPage() {
  const content = await getContent();
  const { pages, about, profile, labels, sections } = content;

  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <p className="label text-accent">{pages.about.kicker}</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] text-ink text-balance">
            {pages.about.title}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-ink-2">
            {pages.about.description}
          </p>
          <div className="mt-9">
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              arrow="up"
              external
            >
              {content.actions.downloadResume}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="min-w-0">
              <p className="display text-[clamp(1.375rem,2.4vw,2.125rem)] leading-snug font-medium text-ink text-balance">
                {about.quote}
              </p>
              <div className="mt-9 flex flex-col gap-6 text-[1.0625rem] leading-[1.8] text-ink-2">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <ProfileCard about={about} profile={profile} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container>
          <SectionHeader meta={sections.principles} />
          <div className="mt-14">
            <PrincipleGrid principles={content.principles} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container>
          <SectionHeader meta={sections.credentials} />
          <div className="mt-14">
            <Credentials content={content} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
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
          <ContactCard content={content} />
        </Container>
      </section>
    </>
  );
}
