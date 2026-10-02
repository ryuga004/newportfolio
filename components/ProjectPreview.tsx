"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import type { ProjectMedia as Media } from "@/utils/content/types";

export default function ProjectPreview({ media }: { media: Media }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const source = media.video?.preview ?? media.video?.src;

  function start() {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  if (!source) {
    if (!media.image) return null;
    return (
      <Image
        src={media.image.src}
        alt={media.image.alt}
        width={media.image.width}
        height={media.image.height}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="h-full w-full rounded-md border border-line object-cover"
      />
    );
  }

  return (
    <div
      onPointerEnter={start}
      onPointerLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="relative h-full w-full overflow-hidden rounded-md border border-line bg-panel"
    >
      {media.image && (
        <Image
          src={media.image.src}
          alt={media.image.alt}
          width={media.image.width}
          height={media.image.height}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`h-full w-full object-cover transition-opacity duration-500 ease-out-expo ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      <video
        ref={videoRef}
        src={source}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out-expo ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        className={`absolute bottom-3 left-3 z-[2] inline-flex items-center gap-1.5 rounded-sm bg-panel/85 px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-panel-ink backdrop-blur-sm transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <Icon name="play" className="size-3" />
        DEMO
      </span>
    </div>
  );
}
