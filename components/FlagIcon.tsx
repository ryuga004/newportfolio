import type { ReactElement } from "react";
import type { Locale } from "@/utils/content/locale";

const flags: Record<Locale, ReactElement> = {
  en: (
    <>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
      <path
        d="M0 0l24 16M24 0L0 16"
        stroke="#C8102E"
        strokeWidth="1.9"
        clipPath="url(#flag-en-clip)"
      />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.3" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3.2" />
      <defs>
        <clipPath id="flag-en-clip">
          <path d="M12 8h12v8zM12 8V0h12zM12 8H0V0zM12 8v8H0z" />
        </clipPath>
      </defs>
    </>
  ),
  hi: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="10.67" width="24" height="5.33" fill="#138808" />
      <circle
        cx="12"
        cy="8"
        r="2.1"
        fill="none"
        stroke="#000080"
        strokeWidth="0.7"
      />
    </>
  ),
  ja: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <circle cx="12" cy="8" r="4.8" fill="#BC002D" />
    </>
  ),
  es: (
    <>
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="16" fill="#000" />
      <rect y="5.33" width="24" height="5.33" fill="#DD0000" />
      <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
    </>
  ),
};

export default function FlagIcon({
  locale,
  className = "h-3.5 w-5",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`shrink-0 rounded-[2px] ring-1 ring-black/10 ${className}`}
      aria-hidden="true"
    >
      {flags[locale]}
    </svg>
  );
}
