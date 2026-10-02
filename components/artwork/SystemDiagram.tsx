import type { HeroDiagram } from "@/utils/content/types";

export default function SystemDiagram({ diagram }: { diagram: HeroDiagram }) {
  return (
    <svg
      viewBox="0 0 540 300"
      className="h-auto w-full rounded-sm border border-line bg-surface-2"
      role="img"
      aria-label={diagram.caption}
    >
      <defs>
        <pattern
          id="diagram-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0v24"
            fill="none"
            strokeWidth="0.75"
            className="stroke-line"
          />
        </pattern>
      </defs>

      <rect width="540" height="300" fill="url(#diagram-grid)" opacity="0.7" />

      <g fill="none" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-line-strong">
        <path d="M142 75h28v77h26" />
        <path d="M142 225h28v-73" />
        <path d="M346 152h30v73h28" />
      </g>
      <path
        d="M346 152h30V75h28"
        fill="none"
        strokeWidth="2"
        className="stroke-accent"
      />

      <g className="fill-surface stroke-line" strokeWidth="1.5">
        <rect x="24" y="46" width="118" height="58" rx="8" />
        <rect x="24" y="196" width="118" height="58" rx="8" />
        <rect x="404" y="46" width="112" height="58" rx="8" />
        <rect x="404" y="196" width="112" height="58" rx="8" />
      </g>

      <g className="font-mono fill-ink-3" fontSize="9" fontWeight="500">
        <text x="38" y="70">{diagram.ingress.label}</text>
        <text x="38" y="220">{diagram.worker.label}</text>
        <text x="418" y="70">{diagram.store.label}</text>
        <text x="418" y="220">{diagram.cache.label}</text>
      </g>
      <g className="font-sans fill-ink" fontSize="12" fontWeight="600">
        <text x="38" y="89">{diagram.ingress.value}</text>
        <text x="38" y="239">{diagram.worker.value}</text>
        <text x="418" y="89">{diagram.store.value}</text>
        <text x="418" y="239">{diagram.cache.value}</text>
      </g>

      <rect
        x="196"
        y="110"
        width="150"
        height="84"
        rx="10"
        className="fill-surface stroke-accent"
        strokeWidth="1.5"
      />
      <path d="M196 120a10 10 0 0 1 10-10h130a10 10 0 0 1 10 10v2H196z" className="fill-accent" />
      <text x="212" y="140" className="font-mono fill-accent" fontSize="9" fontWeight="600">
        {diagram.core.label}
      </text>
      <text x="212" y="161" className="font-display fill-ink" fontSize="14" fontWeight="700">
        {diagram.core.value}
      </text>
      <circle cx="326" cy="156" r="4" className="fill-success" />
      <text x="212" y="180" className="font-mono fill-ink-2" fontSize="8">
        {diagram.coreNote}
      </text>
    </svg>
  );
}
