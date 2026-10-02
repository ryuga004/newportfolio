import Link from "next/link";
import Icon from "./Icon";

export default function TextLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.9375rem] font-semibold text-ink"
    >
      <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out-expo group-hover:after:scale-x-100">
        {children}
      </span>
      <Icon
        name="arrow-right"
        className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
      />
    </Link>
  );
}
