"use client";

import React from "react";
import "./TrustVerification.css";

/* ── SVG Icons matching screenshot ────────────────────────────────── */
const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9.01l-9-7-9 7 1.63 1.27L12 16z" />
  </svg>
);

const BadgeCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
  </svg>
);

const CircleCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function TrustVerification() {
  return (
    <section className="trust-section" aria-label="Verification and Security">
      <div className="trust-container">
        
        {/* Row 1 */}
        <div className="trust-row">
          
          {/* Feature 1 */}
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              <ShieldCheckIcon />
            </span>
            <p className="trust-text">
              <strong className="trust-title">Verified at the source.</strong>{" "}
              <span className="trust-desc">
                Performance data is verified through secure platform connections and cryptographic proofs.
              </span>
            </p>
          </div>

          {/* Feature 2 */}
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              <LayersIcon />
            </span>
            <p className="trust-text">
              <strong className="trust-title">Multi-layer fraud detection.</strong>{" "}
              <span className="trust-desc">
                Multiple signals are analyzed together. Not just one basic bot check.
              </span>
            </p>
          </div>

        </div>

        {/* Subtle Horizontal Divider */}
        <div className="trust-divider" />

        {/* Row 2 */}
        <div className="trust-row">
          
          {/* Feature 3 */}
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              <BadgeCheckIcon />
            </span>
            <p className="trust-text">
              <strong className="trust-title">Only verified performance counts.</strong>{" "}
              <span className="trust-desc">
                Suspicious activity can be flagged before it affects reporting, payouts, or spend.
              </span>
            </p>
          </div>

          {/* Feature 4 */}
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              <CircleCheckIcon />
            </span>
            <p className="trust-text">
              <strong className="trust-title">Verified by an independent third party.</strong>{" "}
              <span className="trust-desc">
                Checks performance using platform, behavioral, and cryptographic signals.
              </span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
