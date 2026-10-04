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
            <span className="trust-title">Verified against platform signals.</span>{" "}
            <span className="trust-desc">
              Delivery is verified through native platform insights, engagement ratios, and unique campaign link attribution.
            </span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <LayersIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">Multi-signal fraud detection.</span>{" "}
            <span className="trust-desc">
              Like-to-view ratios, view velocity spikes, and account posting history are cross-analyzed before views count.
            </span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <BadgeCheckIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">Zero risk on under-delivery.</span>{" "}
            <span className="trust-desc">
              If a post receives 500 views, you only pay for 500 views. If it gets zero, you pay zero. Your cost is pegged strictly to delivery.
            </span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <GuaranteeIcon />
          </span>
          <div className="trust-text">
            <span className="trust-title">Make-good delivery commitment.</span>{" "}
            <span className="trust-desc">
              If a campaign does not hit its agreed verified view target within the flight window, we extend distribution at no extra charge.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
