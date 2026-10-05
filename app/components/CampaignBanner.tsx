"use client";

import { useEffect, useRef } from "react";
import "./CampaignBanner.css";

const guarantees = [
  "Fixed ₹ rate before you spend",
  "Billed on verified views only",
  "Your first campaign is free",
  "A report with every post link",
  "Support on WhatsApp",
];

type Reel = { src: string; verified?: boolean };

// Three columns of reels that drift in alternating directions
const columns: Reel[][] = [
  [{ src: "/videos/reel-bike.mp4", verified: true }, { src: "/videos/reel-snow.mp4" }, { src: "/videos/reel-dog.mp4" }],
  [{ src: "/videos/reel-rafting.mp4" }, { src: "/videos/clip1.mp4", verified: true }, { src: "/videos/reel-bike.mp4" }],
  [{ src: "/videos/reel-dog.mp4", verified: true }, { src: "/videos/reel-snow.mp4" }, { src: "/videos/reel-rafting.mp4" }],
];

function ReelCard({ reel }: { reel: Reel }) {
  return (
    <div className="cb-reel">
      <video
        className="cb-reel__video"
        src={reel.src}
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <span className="cb-reel__avatar" />
      {reel.verified && (
        <span className="cb-reel__badge">
          <i /> Verified
        </span>
      )}
      <span className="cb-reel__actions" aria-hidden="true">
        <b className="cb-reel__act cb-reel__act--sq" />
        <b className="cb-reel__act cb-reel__act--circle" />
        <b className="cb-reel__act cb-reel__act--sq" />
      </span>
    </div>
  );
}

export default function CampaignBanner() {
  const stageRef = useRef<HTMLDivElement>(null);

  // Pause the reels (and their decoding) while the card is off-screen
  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      el.classList.toggle("is-paused", !entry.isIntersecting);
      el.querySelectorAll("video").forEach((v) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cb-section" id="campaign-cta" aria-label="Run your first campaign free">
      <div className="cb-container">
        <div className="cb-card">
          <div className="cb-content">
            <h2 className="cb-heading">Run your first campaign free.</h2>

            <ul className="cb-features">
              {guarantees.map((text) => (
                <li key={text} className="cb-feature-item">
                  <span className="cb-feature-item__dot" />
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contact" className="cb-btn cb-btn--primary">
              Book a free pilot
            </a>
          </div>

          <div className="cb-stage" ref={stageRef} aria-hidden="true">
            <div className="cb-stage__tilt">
              {columns.map((col, i) => (
                <div key={i} className={`cb-col cb-col--${i % 2 === 0 ? "up" : "down"}`}>
                  <div className="cb-col__track">
                    {/* Doubled so the loop is seamless */}
                    {[...col, ...col].map((reel, j) => (
                      <ReelCard key={j} reel={reel} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
