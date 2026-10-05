"use client";

import { useEffect, useState } from "react";
import "./PageLoader.css";
import { MARK_ARMS, MARK_CENTER } from "./pomeraMark";

/* The five arms of the Pomera asterisk (shared geometry), drawn outward from the centre one after another */
const CENTER = MARK_CENTER;
const ARMS = MARK_ARMS;

const MIN_VISIBLE_MS = 2200; // long enough to see the asterisk build smoothly and spin once
const FADE_MS = 700;

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "gone">("loading");

  useEffect(() => {
    const started = performance.now();
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - started));
      t1 = setTimeout(() => {
        setPhase("leaving");
        t2 = setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`pl-overlay ${phase === "leaving" ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Pomera"
    >
      <svg className="pl-mark" viewBox="0 0 180 180" width="88" height="88" aria-hidden="true">
        <g className="pl-spin">
          {ARMS.map((arm, i) => (
            <line
              key={i}
              className={`pl-arm pl-arm--${i}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={arm.x}
              y2={arm.y}
              pathLength={1}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
