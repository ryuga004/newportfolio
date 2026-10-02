import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ContactCard from "@/components/ContactCard";
import Icon from "@/components/Icon";
import { getContent, getContentFor } from "@/utils/content";
import { isLocale } from "@/utils/content/locale";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = await getContentFor(lang);

  return {
    title: content.pages.contact.kicker,
    description: content.pages.contact.description,
  };
}

export default async function ContactPage() {
  const content = await getContent();
  const { pages, contact, socials, footer } = content;

  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <p className="label text-accent">{pages.contact.kicker}</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] text-ink text-balance">
            {pages.contact.title}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-ink-2">
            {pages.contact.description}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <ContactCard content={content} />
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <h2 className="label text-ink-3">{contact.helpsWithTitle}</h2>
              <ul className="mt-8 flex flex-col">
                {contact.helpsWith.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-line py-5 first:pt-0 last:border-0"
                  >
                    <Icon
                      name="arrow-right"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <span className="text-[1.0625rem] leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="label text-ink-3">{footer.connectTitle}</h2>
              <ul className="mt-8 flex flex-col">
                {socials.map((social) => (
                  <li
                    key={social.label}
                    className="border-b border-line last:border-0"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-14 items-center justify-between gap-4 py-4"
                    >
                      <span className="text-[1.0625rem] font-semibold text-ink">
                        {social.label}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-xs text-ink-3">
                        {social.handle}
                        <Icon
                          name="arrow-up-right"
                          className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
