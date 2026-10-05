"use client";

import React from "react";
import "./TrustVerification.css";

/* ── SVG Icons matching Pomera Architectural Style ───────────────── */
const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="trust-icon-svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-2 14l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon-svg">
    <polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const BadgeCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="trust-icon-svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-2 14l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z" />
  </svg>
);

const GuaranteeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon-svg">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function TrustVerification() {
  return (
    <section className="trust-section" aria-label="Verification and Security">
      <div className="trust-container">
        
        {/* Item 1 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <ShieldCheckIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">Checked against platform data.</span>{" "}
            <span className="trust-desc">
              Every post is tracked through its own link and checked against the platform analytics the publisher submits, with manual spot-checks. Views are counted on day 7.
            </span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <LayersIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">Multi-signal fraud checks.</span>{" "}
            <span className="trust-desc">
              Like-to-view ratios, view velocity spikes, and account posting history are reviewed before views count.
            </span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <BadgeCheckIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">You pay only for verified views.</span>{" "}
            <span className="trust-desc">
              If a post gets 500 verified views, you pay for 500. If it gets none, you pay nothing for it. Your cost follows delivery.
            </span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <GuaranteeIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">If it under-delivers, it extends or isn’t billed.</span>{" "}
            <span className="trust-desc">
              If a campaign misses its agreed verified view target, we extend it at no extra charge, or the shortfall is not billed. We guarantee the price and the billing, not virality.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
