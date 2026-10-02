import { Fragment } from "react";
import type { SkillGroup } from "@/utils/content/types";

export default function SkillsBlock({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-7 shadow-e1 sm:p-10">
      <dl className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.title}>
            <dt className="label text-accent">{group.title}</dt>
            <dd className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-base leading-relaxed font-medium text-ink">
              {group.items.map((item, index) => (
                <Fragment key={item}>
                  {index > 0 && (
                    <span className="text-line-strong" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span>{item}</span>
                </Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
