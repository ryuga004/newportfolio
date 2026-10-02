import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "panel";
type Arrow = "right" | "up" | "none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast shadow-e1 hover:bg-accent-hover hover:shadow-e2",
  secondary:
    "border border-line bg-surface text-ink shadow-e1 hover:border-line-strong hover:bg-surface-2 hover:shadow-e2",
  panel:
    "bg-panel-ink text-panel shadow-e1 hover:opacity-90 hover:shadow-e3",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = "right",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: Arrow;
  external?: boolean;
  className?: string;
}) {
  const classes = `group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[0.9375rem] font-semibold leading-tight transition-all duration-300 ease-out-expo hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;

  const body = (
    <>
      <span>{children}</span>
      {arrow !== "none" && (
        <Icon
          name={arrow === "up" ? "arrow-up-right" : "arrow-right"}
          className={
            arrow === "up"
              ? "size-4 shrink-0 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : "size-4 shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          }
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {body}
    </Link>
  );
}
