"use client";

import React, { useState } from "react";
import "./BentoFeatures.css";

/* ── Custom SVGs for Bento Cards ──────────────────────────────────── */
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const RupeeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l8.5 8" />
    <path d="M6 13h3a4 4 0 0 0 0-8" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function BentoFeatures() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <section className="bento-section" id="pillars" aria-label="Key Product Features">
      <div className="bento-container">
        {/* Main Heading */}
        <div className="bento-header-center">
          <span className="bento-pill-tag">POMERA PILLARS</span>
          <h2 className="bento-main-heading">The platform built for certainty.</h2>
          <p className="bento-main-sub">
            Everything an enterprise or D2C brand needs to buy short-form distribution like media space.
          </p>
        </div>

        {/* ── TOP ROW ──────────────────────────────────────────────── */}
        <div className="bento-row bento-row--top">
          
          {/* Card 1: Fixed ₹CPM (Left, col-span-5) */}
          <div className="bento-card bento-card--cpm">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><LockIcon /></span>
                <span className="bento-card__status pm-num">NO AUCTION DRIFT</span>
              </div>
              <h3 className="bento-card__title">Fixed ₹CPM</h3>
              <p className="bento-card__desc">
                Lock your rate before launch. No auction drift, no festive spikes, no surprise bills.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--cpm">
              <div className="bento-cpm-widget">
                <div className="bento-cpm-stat-row">
                  <div className="bento-cpm-val-wrap">
                    <span className="bento-cpm-curr">₹</span>
                    <span className="bento-cpm-amount pm-num">50</span>
                    <span className="bento-cpm-unit">/ 1K views</span>
                  </div>
                  <span className="bento-cpm-badge">Guaranteed Rate</span>
                </div>

                <div className="bento-cpm-compare">
                  <div className="bento-cpm-bar bento-cpm-bar--pomera">
                    <span className="bento-cpm-bar-label">Pomera</span>
                    <span className="bento-cpm-bar-val pm-num">₹250 (Fixed)</span>
                  </div>
                  <div className="bento-cpm-bar bento-cpm-bar--auction">
                    <span className="bento-cpm-bar-label">Meta Auction</span>
                    <span className="bento-cpm-bar-val pm-num">₹380 - ₹620 (Volatile)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Performance-Pegged Billing (Right, col-span-7) */}
          <div className="bento-card bento-card--billing">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><RupeeIcon /></span>
                <span className="bento-card__status pm-num">ZERO RISK</span>
              </div>
              <h3 className="bento-card__title">Performance-pegged billing</h3>
              <p className="bento-card__desc">
                Under-performing posts don’t consume your budget. If a post delivers 500 views, you pay for 500. If it gets zero, you pay zero.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--billing">
              <div className="bento-billing-grid">
                
                {/* 1. Target views */}
                <div className="bento-billing-card">
                  <span className="bento-billing-card__lbl">Target views</span>
                  <span className="bento-billing-card__val pm-num">10,00,000</span>
                  <span className="bento-billing-card__sub">Committed campaign target</span>
                </div>

                {/* 2. Verified views */}
                <div className="bento-billing-card bento-billing-card--active">
                  <span className="bento-billing-card__lbl">Verified views</span>
                  <span className="bento-billing-card__val pm-num">10,00,000</span>
                  <span className="bento-billing-card__sub">100% human delivery</span>
                </div>

                {/* 3. Under-delivering */}
                <div className="bento-billing-card">
                  <span className="bento-billing-card__lbl">Flop protection</span>
                  <span className="bento-billing-card__val pm-num">₹0 Billed</span>
                  <span className="bento-billing-card__sub">Under-delivery not charged</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ROW ───────────────────────────────────────────── */}
        <div className="bento-row bento-row--bottom">
          
          {/* Card 3: Multi-Signal Fraud Defense (Left, col-span-7) */}
          <div className="bento-card bento-card--bot">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><ShieldCheckIcon /></span>
                <span className="bento-card__status pm-num">MULTI-SIGNAL CHECK</span>
              </div>
              <h3 className="bento-card__title">Multi-signal fraud filter</h3>
              <p className="bento-card__desc">
                Engagement ratios, view velocity spikes, and account history are checked before counting any view.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--bot">
              <div className="bento-bot-wrapper">
                
                {/* Floating Dark Popup Menu */}
                {showTooltip && (
                  <div className="bento-bot-popover">
                    <div className="bento-bot-popover__header">
                      <span className="bento-bot-popover__shield">
                        <ShieldCheckIcon />
                      </span>
                      <span>Delivery Verification Checks</span>
                    </div>

                    <div className="bento-bot-popover__list">
                      <div className="bento-bot-row">
                        <span>Like-to-view ratio (≥ 3%)</span>
                        <span className="bento-bot-pass pm-num">Passed</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Velocity ramp analysis</span>
                        <span className="bento-bot-pass pm-num">Natural</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Account history &amp; tenure</span>
                        <span className="bento-bot-pass pm-num">Verified</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Bot spikes (18,312 views)</span>
                        <span className="bento-bot-filtered pm-num">Filtered (₹0)</span>
                      </div>
                    </div>

                    <div className="bento-bot-popover__arrow" />
                  </div>
                )}

                {/* Pill Button with Pointer */}
                <div className="bento-bot-trigger-wrap">
                  <button
                    type="button"
                    className="bento-bot-pill"
                    onClick={() => setShowTooltip(!showTooltip)}
                  >
                    <CheckCircleIcon />
                    <span>Inspection Report Active</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Card 4: Built for Indian Brands (Right, col-span-5) */}
          <div className="bento-card bento-card--india">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><RupeeIcon /></span>
                <span className="bento-card__status pm-num">INDIA-NATIVE</span>
              </div>
              <h3 className="bento-card__title">Built for Indian brands</h3>
              <p className="bento-card__desc">
                Direct INR billing, GST-compliant invoicing, weekly UPI publisher payouts, and WhatsApp desk.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--india">
              <div className="bento-india-chips">
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>INR (₹) Direct Billing</span>
                </div>
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>GST Tax Compliant</span>
                </div>
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>Weekly UPI Payouts</span>
                </div>
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>WhatsApp Brand Desk</span>
                </div>
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>Reels &amp; YouTube Shorts</span>
                </div>
                <div className="bento-india-chip">
                  <span className="bento-india-chip__dot" />
                  <span>Bengaluru Operations</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
