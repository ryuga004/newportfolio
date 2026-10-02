"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
      className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-panel-line bg-panel-2 px-4 py-2.5 font-mono text-xs text-panel-ink transition-colors duration-200 hover:border-panel-ink-2"
    >
      <Icon name={copied ? "check" : "copy"} className="size-4 shrink-0" />
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
