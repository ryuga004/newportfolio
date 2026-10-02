import type { MeshArtwork as MeshArtworkContent } from "@/utils/content/types";

const positions = [
  { x: 150, y: 62 },
  { x: 340, y: 62 },
  { x: 140, y: 236 },
  { x: 350, y: 236 },
];

export default function MeshArtwork({ art }: { art: MeshArtworkContent }) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-panel p-4 sm:p-5">
      <div className="border-b border-dashed border-panel-line pb-3">
        <span className="min-w-0 truncate font-mono text-[11px] text-panel-ink-2">
          {art.caption}
        </span>
      </div>

      <svg
        viewBox="0 0 600 320"
        className="mt-3 h-auto w-full flex-1"
        role="img"
        aria-label={art.caption}
      >
        <circle
          cx="300"
          cy="160"
          r="128"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="stroke-panel-line"
        />
        <circle
          cx="300"
          cy="160"
          r="66"
          fill="none"
          strokeWidth="1.5"
          className="stroke-accent"
          opacity="0.45"
        />

        {positions.map((position, index) => (
          <g key={art.nodes[index]}>
            <line
              x1={position.x + 55}
              y1={position.y + 21}
              x2="300"
              y2="160"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="stroke-panel-line"
            />
            <rect
              x={position.x}
              y={position.y}
              width="110"
              height="42"
              rx="6"
              className="fill-panel-3 stroke-panel-line"
              strokeWidth="1"
            />
            <text
              x={position.x + 14}
              y={position.y + 26}
              className="font-mono fill-panel-ink"
              fontSize="10"
            >
              {art.nodes[index]}
            </text>
          </g>
        ))}

        <circle cx="300" cy="160" r="34" className="fill-accent" />
        <text
          x="300"
          y="165"
          textAnchor="middle"
          className="font-mono fill-accent-contrast"
          fontSize="11"
          fontWeight="700"
        >
          {art.hub}
        </text>
      </svg>

      <p className="mt-3 min-w-0 truncate font-mono text-[10px] text-panel-ink-2">
        {art.footnote}
      </p>
    </div>
  );
}
