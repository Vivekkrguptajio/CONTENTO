"use client";

import React from "react";
import "./TrustVerification.css";

/* ── SVG Icons matching ContentRewards and screenshot ─────────────── */
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

const VerifiedThirdPartyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="trust-icon-svg">
    <path d="M4.93 4.93a10 10 0 0 0 0 14.14" strokeWidth="1.8" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
    <polyline points="10 12 11.5 13.5 14 10.5" strokeWidth="1.8" />
  </svg>
);

export default function TrustVerification() {
  return (
    <section className="trust-section w-full bg-white px-4 md:px-6 py-4 md:py-8" aria-label="Verification and Security">
      <div className="trust-container max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-2">
        
        {/* Item 1 */}
        <div className="trust-item flex justify-start items-start overflow-clip border-b md:border-r border-[#2d2518]/10 py-[24px] md:py-[30px] md:pr-9 gap-3 md:gap-4">
          <span className="trust-icon shrink-0 mt-0.5 text-[#2d2518]" aria-hidden="true">
            <ShieldCheckIcon />
          </span>
          <div className="trust-text text-[15px] leading-[21px] md:leading-[22px] text-[#2d2518]">
            <span className="trust-title font-semibold text-[#2d2518]">Verified at the source.</span>{" "}
            <span className="trust-desc font-medium text-[#2d2518]/60">
              Performance data is verified through secure platform connections and cryptographic proofs.
            </span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="trust-item flex justify-start items-start overflow-clip border-b border-[#2d2518]/10 py-[24px] md:py-[30px] md:pl-9 gap-3 md:gap-4">
          <span className="trust-icon shrink-0 mt-0.5 text-[#2d2518]" aria-hidden="true">
            <LayersIcon />
          </span>
          <div className="trust-text text-[15px] leading-[21px] md:leading-[22px] text-[#2d2518]">
            <span className="trust-title font-semibold text-[#2d2518]">Multi-layer fraud detection.</span>{" "}
            <span className="trust-desc font-medium text-[#2d2518]/60">
              Multiple signals are analyzed together. Not just one basic bot check.
            </span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="trust-item flex justify-start items-start overflow-clip border-b md:border-b-0 md:border-r border-[#2d2518]/10 py-[24px] md:py-[30px] md:pr-9 gap-3 md:gap-4">
          <span className="trust-icon shrink-0 mt-0.5 text-[#2d2518]" aria-hidden="true">
            <BadgeCheckIcon />
          </span>
          <div className="trust-text text-[15px] leading-[21px] md:leading-[22px] text-[#2d2518]">
            <span className="trust-title font-semibold text-[#2d2518]">Only verified performance counts.</span>{" "}
            <span className="trust-desc font-medium text-[#2d2518]/60">
              Suspicious activity can be flagged before it affects reporting, payouts, or spend.
            </span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="trust-item flex justify-start items-start overflow-clip py-[24px] md:py-[30px] md:pl-9 gap-3 md:gap-4">
          <span className="trust-icon shrink-0 mt-0.5 text-[#2d2518]" aria-hidden="true">
            <VerifiedThirdPartyIcon />
          </span>
          <div className="trust-text text-[15px] leading-[21px] md:leading-[22px] text-[#2d2518]">
            <span className="trust-title font-semibold text-[#2d2518]">Verified by an independent third party.</span>{" "}
            <span className="trust-desc font-medium text-[#2d2518]/60">
              Checks performance using platform, behavioral, and cryptographic signals.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
