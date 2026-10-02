import Icon from "./Icon";
import Button from "./Button";
import CopyEmail from "./CopyEmail";
import type { SiteContent } from "@/utils/content/types";

export default function ContactCard({
  content,
}: {
  content: SiteContent;
}) {
  const { contact, profile, actions } = content;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(contact.mailSubject)}`;

  return (
    <section className="relative overflow-hidden rounded-xl border border-panel-line bg-panel px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 size-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-alpha) 0%, transparent 70%)",
        }}
      />

      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h2 className="display text-[clamp(2rem,5vw,3.75rem)] text-panel-ink text-balance">
            {contact.title}
          </h2>
          <p className="measure mt-6 text-lg leading-relaxed text-panel-ink-2">
            {contact.subtitle}
          </p>

          <div className="mt-10">
            <p className="label text-accent">{contact.emailLabel}</p>
            <a
              href={mailto}
              className="mt-3 inline-block font-display text-[clamp(1.375rem,3.4vw,2.5rem)] font-semibold text-panel-ink underline decoration-accent decoration-2 underline-offset-[6px] transition-opacity duration-200 hover:opacity-85"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={mailto} external variant="panel" arrow="up">
              {actions.startConversation}
            </Button>
            <CopyEmail
              email={profile.email}
              copyLabel={actions.copyEmail}
              copiedLabel={actions.copied}
            />
          </div>

          <p className="mt-6 font-mono text-[0.8125rem] text-panel-ink-2">
            {contact.responseNote}
          </p>
        </div>

        <div className="rounded-lg border border-panel-line bg-panel-2 p-7 sm:p-9">
          <h3 className="label text-panel-ink-2">{contact.notesTitle}</h3>
          <ul className="mt-6 flex flex-col gap-5">
            {contact.notes.map((note) => (
              <li key={note} className="flex items-start gap-3.5">
                <Icon
                  name="check"
                  className="mt-0.5 size-4 shrink-0 text-accent"
                />
                <span className="text-[0.9375rem] leading-relaxed text-panel-ink">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
