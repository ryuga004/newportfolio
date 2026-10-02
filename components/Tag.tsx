export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-sm border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-2">
      {children}
    </span>
  );
}
