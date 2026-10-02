import Image from "next/image";
import type { ProjectMedia as Media } from "@/utils/content/types";

export default function ProjectMedia({
  media,
  preload = false,
}: {
  media: Media;
  preload?: boolean;
}) {
  if (media.video) {
    return (
      <video
        src={media.video.src}
        poster={media.image?.src}
        controls
        playsInline
        preload="metadata"
        aria-label={media.video.alt}
        className="h-full w-full rounded-md border border-line bg-panel object-contain"
      />
    );
  }

  if (media.image) {
    return (
      <Image
        src={media.image.src}
        alt={media.image.alt}
        width={media.image.width}
        height={media.image.height}
        preload={preload}
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="h-full w-full rounded-md border border-line object-cover"
      />
    );
  }

  return null;
}
