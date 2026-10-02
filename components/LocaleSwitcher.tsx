"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  localeNames,
  locales,
  swapLocale,
  type Locale,
} from "@/utils/content/locale";
import FlagIcon from "./FlagIcon";
import Icon from "./Icon";

export default function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      if (rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  function choose(next: Locale) {
    setOpen(false);
    if (next !== locale) router.push(swapLocale(pathname, next));
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`${label}: ${localeNames[locale]}`}
        className="flex h-9 min-h-9 items-center gap-2 rounded-sm border border-line bg-surface px-2.5 text-ink transition-colors duration-200 hover:border-line-strong"
      >
        <FlagIcon locale={locale} />
        <span className="hidden font-mono text-xs xl:inline">
          {localeNames[locale]}
        </span>
        <Icon
          name="chevron-down"
          className={`size-3.5 text-ink-3 transition-transform duration-300 ease-out-expo ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={label}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 rounded-md border border-line bg-surface p-1 shadow-e3"
        >
          {locales.map((value) => (
            <button
              key={value}
              type="button"
              role="menuitem"
              onClick={() => choose(value)}
              className={`flex w-full min-h-11 items-center gap-3 rounded-[4px] px-3 py-2 text-left text-sm transition-colors duration-200 ${
                value === locale
                  ? "bg-interactive text-ink"
                  : "text-ink-2 hover:bg-surface-2 hover:text-ink"
              }`}
            >
              <FlagIcon locale={value} />
              <span className="flex-1 truncate">{localeNames[value]}</span>
              {value === locale && (
                <Icon name="check" className="size-4 shrink-0 text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
