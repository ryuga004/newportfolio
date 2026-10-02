import type { ReactNode } from "react";

export default function CaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="grid gap-5 lg:grid-cols-[18rem_1fr] lg:gap-16">
      <h2 className="label pt-1.5 text-accent">{title}</h2>
      <div className="min-w-0">{children}</div>
    </article>
  );
}
