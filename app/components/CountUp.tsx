"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/* Counts up from 0 the first time it scrolls into view, then eases to any new value. */
export default function CountUp({ value, prefix = "", suffix = "", className, duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const current = useRef(value);
  const raf = useRef(0);
  const first = useRef(true);
  const [shown, setShown] = useState(value);
  const [seen, setSeen] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    let io: IntersectionObserver | undefined;
    const id = requestAnimationFrame(() => {
      if (noMotion) {
        setReduced(true);
        return;
      }
      current.current = 0;
      setShown(0);
      if (!el || typeof IntersectionObserver === "undefined") {
        setSeen(true);
        return;
      }
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeen(true);
            io?.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(el);
    });
    return () => {
      cancelAnimationFrame(id);
      io?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced || !seen) return;
    cancelAnimationFrame(raf.current);
    const from = current.current;
    const dur = first.current ? duration : 650;
    first.current = false;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(from + (value - from) * eased);
      current.current = v;
      setShown(v);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [seen, value, reduced, duration]);

  const out = reduced ? value : shown;

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {out.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
