"use client";

import { useEffect, useRef } from "react";

/* A muted looping video that only downloads and plays while it is near the viewport. */
export default function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "120px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} className={className} src={src} muted loop playsInline preload="none" aria-hidden="true" />;
}
