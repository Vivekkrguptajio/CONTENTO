import React from "react";
import HeroGlobe from "./HeroGlobe";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* ── Hero Main Content (Title, Subtitle, CTAs) ────────────── */}
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="hero-headline-line">The Operating System for</span>
          <span className="hero-headline-line">your Marketing Spend</span>
        </h1>

        <p className="hero-subheadline">
          Businesses launch campaigns. Creators post.<br className="hero-subheadline-br" /> Payouts happen automatically.
        </p>

        <div className="hero-cta-row">
          <button type="button" className="hero-btn hero-btn--cta-primary">
            Launch a campaign
          </button>
          <button type="button" className="hero-btn hero-btn--cta-secondary">
            See a Demo
          </button>
        </div>
      </div>

      {/* ── 4. Glowing Globe Visualization with 3D Rotating Badges ── */}
      <div className="hero-globe-wrapper">
        <HeroGlobe />
      </div>
    </section>
  );
}
