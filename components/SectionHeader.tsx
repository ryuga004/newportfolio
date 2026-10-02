import type { ReactNode } from "react";
import type { SectionMeta } from "@/utils/content/types";

export default function SectionHeader({
  meta,
  action,
  className = "",
}: {
  meta: SectionMeta;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span className="label text-accent">{meta.index}</span>
        <span className="label text-ink-2">{meta.label}</span>
        <span className="h-px w-full max-w-20 flex-1 bg-line" />
      </div>
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="display max-w-3xl text-[clamp(1.875rem,4vw,3.25rem)] text-balance">
          {meta.title}
        </h2>
        {action}
      </div>
    </div>
  );
}
