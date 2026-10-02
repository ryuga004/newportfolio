import type { GridArtwork as GridArtworkContent } from "@/utils/content/types";

const bars = [38, 62, 46, 78, 54, 88, 66, 94, 72, 58, 84, 48];

export default function GridArtwork({ art }: { art: GridArtworkContent }) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-line bg-surface p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <span className="label min-w-0 truncate text-ink-2">{art.caption}</span>
        <span className="shrink-0 font-mono text-[11px] text-ink-3">
          {art.series.join(" · ")}
        </span>
      </div>

      <div className="mt-5">
        <p className="font-display text-[13px] font-semibold text-ink">
          {art.title}
        </p>
        <div
          className="mt-4 flex h-28 items-end gap-1.5 sm:gap-2"
          aria-hidden="true"
        >
          {bars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-t-[2px] ${index % 4 === 3 ? "bg-accent" : "bg-line-strong"}`}
            />
          ))}
        </div>
      </div>

      <dl className="mt-5 flex-1 space-y-2 border-t border-line pt-4">
        {art.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3">
            <dt className="font-mono text-[11px] text-ink-3">{row.label}</dt>
            <dd className="font-mono text-[11px] font-medium text-ink">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 rounded-sm bg-surface-2 px-3 py-2.5 font-mono text-[11px] leading-tight text-ink-2">
        {art.footnote}
      </p>
    </div>
  );
}
