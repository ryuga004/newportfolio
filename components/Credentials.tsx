import Icon from "./Icon";
import type { SiteContent } from "@/utils/content/types";

export default function Credentials({
  content,
}: {
  content: SiteContent;
}) {
  const { education, achievements, codingProfiles, labels } = content;

  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <div className="min-w-0">
        <h3 className="display text-2xl text-ink">{labels.education}</h3>
        <ol className="mt-6 flex flex-col">
          {education.map((item) => (
            <li
              key={item.degree}
              className="grid gap-3 border-b border-line py-6 first:pt-0 last:border-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
            >
              <p className="pt-1 font-mono text-[0.8125rem] text-ink-3">
                {item.period}
              </p>
              <div className="min-w-0">
                <h4 className="display text-lg text-ink">{item.degree}</h4>
                <p className="mt-1 text-[0.9375rem] font-semibold text-accent">
                  {item.org}
                </p>
                <p className="mt-2 font-mono text-xs text-ink-2">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="display mt-12 text-2xl text-ink">
          {labels.achievements}
        </h3>
        <ul className="mt-6 flex flex-col">
          {achievements.map((item) => (
            <li
              key={item.title}
              className="border-b border-line py-5 first:pt-0 last:border-0"
            >
              <div className="flex items-start gap-3.5">
                <Icon
                  name="check"
                  className="mt-1 size-4 shrink-0 text-accent"
                />
                <div className="min-w-0">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[1.0625rem] font-semibold text-ink"
                    >
                      {item.title}
                      <Icon
                        name="arrow-up-right"
                        className="size-3.5 text-ink-3 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-[1.0625rem] font-semibold text-ink">
                      {item.title}
                    </span>
                  )}
                  <p className="mt-1 text-[0.9375rem] text-ink-2">
                    {item.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0">
        <h3 className="display text-2xl text-ink">{labels.codingProfiles}</h3>
        <ul className="mt-6 overflow-hidden rounded-lg border border-line bg-surface shadow-e1">
          {codingProfiles.map((profile) => (
            <li
              key={profile.platform}
              className="border-b border-line last:border-0"
            >
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between gap-4 px-6 py-4 transition-colors duration-300 hover:bg-surface-2"
              >
                <span className="min-w-0">
                  <span className="block text-[0.9375rem] font-semibold text-ink">
                    {profile.platform}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-accent">
                    {profile.rating}
                  </span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="size-4 shrink-0 text-ink-3 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
