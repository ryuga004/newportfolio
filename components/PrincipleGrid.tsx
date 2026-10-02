import type { Principle } from "@/utils/content/types";

export default function PrincipleGrid({
  principles,
}: {
  principles: Principle[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {principles.map((principle, index) => (
        <article
          key={principle.title}
          className="flex min-h-[15rem] flex-col justify-between rounded-md border border-line bg-surface p-7 shadow-e1 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent hover:shadow-e2"
        >
          <p className="font-mono text-2xl font-bold text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="mt-8">
            <h3 className="display text-xl text-ink">{principle.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              {principle.detail}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
