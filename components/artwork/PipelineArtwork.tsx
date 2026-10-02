import type { PipelineArtwork as PipelineArtworkContent } from "@/utils/content/types";

export default function PipelineArtwork({
  art,
}: {
  art: PipelineArtworkContent;
}) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-panel p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-dashed border-panel-line pb-3">
        <span className="min-w-0 truncate font-mono text-[11px] text-panel-ink-2">
          {art.caption}
        </span>
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-panel-line" />
          <span className="size-2 rounded-full bg-panel-line" />
          <span className="size-2 rounded-full bg-accent" />
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-md border border-panel-line bg-panel-2 px-4 py-3">
        <span className="min-w-0 truncate font-mono text-[11px] font-semibold text-accent">
          {art.ruleset}
        </span>
        <span className="shrink-0 rounded-sm bg-accent/15 px-2 py-1 font-mono text-[10px] text-accent">
          {art.badge}
        </span>
      </div>

      <div className="mt-3 grid flex-1 gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-panel-line bg-panel-2 p-4">
          <p className="font-display text-[13px] font-semibold text-panel-ink">
            {art.streamTitle}
          </p>
          <ul className="mt-3 space-y-2">
            {art.stages.map((stage, index) => (
              <li
                key={stage}
                className="flex items-center gap-3 rounded-sm bg-panel-3 px-3 py-2.5"
              >
                <span
                  className={`size-2 shrink-0 rounded-full ${index === 1 ? "bg-accent" : "bg-success"}`}
                />
                <span className="font-mono text-[11px] leading-tight text-panel-ink">
                  {stage}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-md border border-panel-line bg-panel-2 p-4">
          <p className="font-display text-[13px] font-semibold text-panel-ink">
            {art.metaTitle}
          </p>
          <ul className="mt-3 flex-1 space-y-2">
            {art.meta.map((entry) => (
              <li
                key={entry}
                className="font-mono text-[11px] leading-tight text-panel-ink-2"
              >
                {entry}
              </li>
            ))}
          </ul>
          <p className="mt-3 rounded-sm border border-panel-line bg-panel-3 px-3 py-2.5 font-mono text-[11px] leading-tight text-success">
            {art.footnote}
          </p>
        </div>
      </div>
    </div>
  );
}
