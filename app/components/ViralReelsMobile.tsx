"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ViralReelsMobile.css";

interface ViralReel {
  city: string;
  video: string;
  base: number;
}

const REELS: ViralReel[] = [
  { city: "Tokyo", video: "/videos/reel-snow.mp4", base: 184200 },
  { city: "San Francisco", video: "/videos/reel-bike.mp4", base: 96450 },
  { city: "London", video: "/videos/clip1.mp4", base: 128900 },
  { city: "Mumbai", video: "/videos/reel-rafting.mp4", base: 241300 },
  { city: "New York", video: "/videos/reel-dog.mp4", base: 77600 },
];

const ADVANCE_MS = 4200;
const SWIPE_PX = 40;

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function ViralReelsMobile({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [views, setViews] = useState<number[]>(() => REELS.map((r) => r.base));
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setActive((i) => (i + dir + REELS.length) % REELS.length);
  }, []);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduced || !visible) return;
    const t = setTimeout(() => go(1), ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduced, visible, go]);

  useEffect(() => {
    if (!visible || reduced) return;
    const t = setInterval(() => {
      setViews((v) => v.map((n, i) => (i === active ? n + 7 + Math.floor(Math.random() * 38) : n)));
    }, 600);
    return () => clearInterval(t);
  }, [active, visible, reduced]);

  useEffect(() => {
    const box = pillsRef.current;
    const pill = box?.children[active] as HTMLElement | undefined;
    if (!box || !pill) return;
    box.scrollTo({ left: pill.offsetLeft - (box.clientWidth - pill.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current !== null) {
      const dx = e.clientX - startX.current;
      if (Math.abs(dx) > SWIPE_PX) {
        go(dx < 0 ? 1 : -1);
      }
    }
    startX.current = null;
    setPaused(false);
  };

  const current = REELS[active];

  return (
    <div
      ref={rootRef}
      className={`vr ${className}`}
      aria-roledescription="carousel"
      aria-label="Reels going viral in different cities"
    >
      <div className="vr__chip" aria-live="polite">
        <span className="vr__chip-dot" aria-hidden="true" />
        <span key={current.city} className="vr__chip-text">
          Going viral in <strong>{current.city}</strong>
        </span>
      </div>

      <div
        className="vr__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null;
          setPaused(false);
        }}
      >
        <div className="vr__rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {REELS.map((r, i) => {
          const offset = (i - active + REELS.length) % REELS.length;
          const pos = offset === 0 ? "front" : offset === 1 ? "next" : offset === REELS.length - 1 ? "prev" : "hidden";
          const live = pos === "front" || pos === "next";
          return (
            <div key={r.city} className={`vr__card vr__card--${pos}`} aria-hidden={pos !== "front"}>
              {live && (
                <video
                  src={r.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  className="vr__video"
                />
              )}
              {pos === "front" && (
                <>
                  <span className="vr__progress" aria-hidden="true">
                    <span
                      key={active}
                      className="vr__progress-fill"
                      style={{ animationDuration: `${ADVANCE_MS}ms`, animationPlayState: paused || reduced ? "paused" : "running" }}
                    />
                  </span>
                  <span className="vr__live">
                    <i aria-hidden="true" /> Trending
                  </span>
                  <div className="vr__meta">
                    <span className="vr__city">
                      <PinIcon /> {r.city}
                    </span>
                    <span className="vr__views">
                      <b>{views[i].toLocaleString("en-IN")}</b> verified views
                    </span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div ref={pillsRef} className="vr__pills" role="tablist" aria-label="Choose a city">
        {REELS.map((r, i) => (
          <button
            key={r.city}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`vr__pill${i === active ? " is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {r.city}
          </button>
        ))}
      </div>
    </div>
  );
}
