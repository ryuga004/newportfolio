"use client";

import { useSyncExternalStore } from "react";
import Icon, { type IconName } from "./Icon";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";

const options: { value: Theme; icon: IconName }[] = [
  { value: "light", icon: "sun" },
  { value: "dark", icon: "moon" },
  { value: "system", icon: "monitor" },
];

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

function readServerTheme(): Theme {
  return "system";
}

function applyTheme(next: Theme) {
  try {
    if (next === "system") {
      localStorage.removeItem(STORAGE_KEY);
      document.documentElement.removeAttribute("data-theme");
    } else {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.setAttribute("data-theme", next);
    }
  } catch {
    document.documentElement.setAttribute("data-theme", next);
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function ThemeToggle({
  labels,
}: {
  labels: { theme: string; light: string; dark: string; system: string };
}) {
  const theme = useSyncExternalStore(subscribe, readTheme, readServerTheme);

  const text: Record<Theme, string> = {
    light: labels.light,
    dark: labels.dark,
    system: labels.system,
  };

  return (
    <div
      role="group"
      aria-label={labels.theme}
      className="flex items-center gap-0.5 rounded-sm border border-line bg-surface p-0.5"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => applyTheme(option.value)}
          aria-pressed={theme === option.value}
          title={text[option.value]}
          className={`flex size-8 items-center justify-center rounded-[4px] transition-colors duration-200 ${
            theme === option.value
              ? "bg-interactive text-ink"
              : "text-ink-3 hover:text-ink"
          }`}
        >
          <Icon name={option.icon} className="size-4" />
          <span className="sr-only">{text[option.value]}</span>
        </button>
      ))}
    </div>
  );
}
