import type { ExperienceItem } from "@/utils/content/types";

export default function ExperienceTimeline({
  items,
}: {
  items: ExperienceItem[];
}) {
  return (
    <ol className="flex flex-col">
      {items.map((item) => (
        <li
          key={`${item.period}-${item.org}`}
          className="grid gap-3 border-b border-line py-8 first:pt-0 last:border-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
        >
          <p className="pt-1 font-mono text-[0.8125rem] text-ink-3">
            {item.period}
          </p>
          <div className="min-w-0">
            <h3 className="display text-xl text-ink">{item.role}</h3>
            <p className="mt-1 text-[0.9375rem] font-semibold text-accent">
              {item.org}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
              {item.description}
            </p>

            {item.highlights.length > 0 && (
              <ul className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-[0.9375rem] leading-relaxed text-ink-2">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
