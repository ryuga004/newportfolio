import Icon from "./Icon";
import type { Capability } from "@/utils/content/types";

export default function CapabilityGrid({
  capabilities,
}: {
  capabilities: Capability[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
      {capabilities.map((capability) => (
        <article
          key={capability.index}
          className="flex min-h-[17rem] flex-col justify-between bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 sm:p-10"
        >
          <div>
            <p className="label text-accent">
              {`${capability.index} // ${capability.kind}`}
            </p>
            <span className="mt-6 flex size-11 items-center justify-center rounded-sm border border-line bg-surface-2 text-ink">
              <Icon name={capability.icon} className="size-5" />
            </span>
            <h3 className="display mt-6 text-2xl text-ink">
              {capability.title}
            </h3>
            <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-2">
              {capability.description}
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2 border-t border-dashed border-line pt-5">
            {capability.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-[4px] bg-surface-2 px-2 py-1 font-mono text-[11px] text-ink-2"
              >
                {badge}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
