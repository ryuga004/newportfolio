import type { ScannerArtwork as ScannerArtworkContent } from "@/utils/content/types";

export default function ScannerArtwork({
  art,
}: {
  art: ScannerArtworkContent;
}) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-line bg-surface p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <span className="label min-w-0 truncate text-ink-2">{art.caption}</span>
        <span className="shrink-0 font-mono text-[11px] text-ink-3">
          {art.source}
        </span>
      </div>

      <div className="mt-5 grid items-center gap-3 sm:grid-cols-[auto_1fr_auto]">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface-2 font-mono text-[10px] font-semibold text-accent">
          {art.format}
        </div>

        <div className="rounded-md border border-line bg-surface-2 px-4 py-3">
          <p className="font-display text-[13px] font-semibold text-ink">
            {art.processor.label}
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-2">
            {art.processor.value}
          </p>
        </div>

        <div className="rounded-md bg-panel px-4 py-3">
          <p className="font-mono text-[10px] font-semibold text-accent">
            {art.classifier.label}
          </p>
          <p className="mt-1 font-sans text-[12px] font-semibold text-panel-ink">
            {art.classifier.value}
          </p>
          <p className="mt-1 font-mono text-[10px] text-success">
            {art.classifierNote}
          </p>
        </div>
      </div>

      <div className="mt-5 flex-1 rounded-md border border-line bg-surface-2 p-4">
        <p className="font-mono text-[11px] font-semibold text-ink">
          {art.logTitle}
        </p>
        <ul className="mt-3 space-y-2">
          {art.logs.map((line, index) => (
            <li
              key={line}
              className={`font-mono text-[11px] leading-snug ${index === 2 ? "text-accent" : "text-ink-2"}`}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
