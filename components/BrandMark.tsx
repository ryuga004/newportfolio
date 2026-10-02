import Image from "next/image";

export default function BrandMark({
  className = "size-9.5",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={356}
      height={512}
      sizes="48px"
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}
