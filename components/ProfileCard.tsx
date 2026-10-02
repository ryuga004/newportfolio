import type { SiteContent } from "@/utils/content/types";

export default function ProfileCard({
  about,
  profile,
}: {
  about: SiteContent["about"];
  profile: SiteContent["profile"];
}) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6 shadow-e1 sm:p-8">
      <div className="flex aspect-[5/4] w-full flex-col items-center justify-center rounded-md border border-line bg-surface-2">
        <svg
          viewBox="0 0 120 120"
          className="w-40"
          role="img"
          aria-label={profile.name}
        >
          <rect
            x="20"
            y="20"
            width="80"
            height="80"
            rx="12"
            fill="none"
            strokeWidth="2"
            className="stroke-ink"
          />
          <path
            d="M20 60h80M60 20v80"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="stroke-accent"
          />
          <circle cx="60" cy="60" r="18" className="fill-ink" />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            className="font-mono fill-base"
            fontSize="13"
            fontWeight="700"
          >
            {profile.initials}
          </text>
        </svg>
        <span className="mt-4 font-mono text-[11px] font-semibold tracking-wider text-ink">
          {about.cardTitle}
        </span>
      </div>

      <dl className="mt-7 flex flex-col font-mono text-xs">
        {about.cardRows.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-center justify-between gap-4 py-3 ${
              index === about.cardRows.length - 1
                ? ""
                : "border-b border-line"
            }`}
          >
            <dt className="text-ink-2">{row.label}</dt>
            <dd
              className={`text-right font-semibold ${
                index === about.cardRows.length - 1 ? "text-accent" : "text-ink"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
