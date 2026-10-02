import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import ContactCard from "@/components/ContactCard";
import { getContent, getContentFor, getLocale } from "@/utils/content";
import { isLocale } from "@/utils/content/locale";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = await getContentFor(lang);

  return {
    title: content.pages.work.kicker,
    description: content.pages.work.description,
  };
}

export default async function WorkPage() {
  const locale = await getLocale();
  const content = await getContent();
  const { pages, projects, labels, actions } = content;

  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <p className="label text-accent">{pages.work.kicker}</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] text-ink text-balance">
            {pages.work.title}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-ink-2">
            {pages.work.description}
          </p>
          <p className="mt-10 border-t border-line pt-6 font-mono text-xs text-ink-3">
            {String(projects.length).padStart(2, "0")} {labels.project}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-10 md:gap-16">
            {projects.map((project, index) => (
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
          <ContactCard content={content} />
        </Container>
      </section>
    </>
  );
}
