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
            Everything a D2C or ecommerce brand needs to buy short-form distribution like media space.
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
                Agree your rate before launch. No auction drift, no festive spikes, no surprise bills. The rate is all-in: publisher payouts, verification and reporting are included.
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
                  <span className="bento-cpm-badge">Example rate</span>
                </div>

                <div className="bento-cpm-compare">
                  <div className="bento-cpm-bar bento-cpm-bar--pomera">
                    <span className="bento-cpm-bar-label">Pomera</span>
                    <span className="bento-cpm-bar-val pm-num">Fixed before launch</span>
                  </div>
                  <div className="bento-cpm-bar bento-cpm-bar--auction">
                    <span className="bento-cpm-bar-label">Ad auction</span>
                    <span className="bento-cpm-bar-val pm-num">Changes with demand</span>
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
                <span className="bento-card__status pm-num">PAY ON DELIVERY</span>
              </div>
              <h3 className="bento-card__title">Billed on verified views</h3>
              <p className="bento-card__desc">
                Under-performing posts don’t consume your budget. If a post gets 500 verified views, you pay for 500. If it gets none, you pay nothing for it.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--billing">
              <div className="bento-billing-grid">
                
                {/* 1. Target views */}
                <div className="bento-billing-card">
                  <span className="bento-billing-card__lbl">Target views</span>
                  <span className="bento-billing-card__val pm-num">10,00,000</span>
                  <span className="bento-billing-card__sub">Example campaign target</span>
                </div>

                {/* 2. Verified views */}
                <div className="bento-billing-card bento-billing-card--active">
                  <span className="bento-billing-card__lbl">Verified views</span>
                  <span className="bento-billing-card__val pm-num">9,64,300</span>
                  <span className="bento-billing-card__sub">Billed at the agreed rate</span>
                </div>

                {/* 3. Under-delivering */}
                <div className="bento-billing-card">
                  <span className="bento-billing-card__lbl">Shortfall</span>
                  <span className="bento-billing-card__val pm-num">35,700</span>
                  <span className="bento-billing-card__sub">Extends, or the shortfall isn’t charged</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ROW ───────────────────────────────────────────── */}
        <div className="bento-row bento-row--bottom">
          
          {/* Card 3: How views are verified (Left, col-span-7) */}
          <div className="bento-card bento-card--bot">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><ShieldCheckIcon /></span>
                <span className="bento-card__status pm-num">VERIFIED DELIVERY</span>
              </div>
              <h3 className="bento-card__title">Checked, then billed</h3>
              <p className="bento-card__desc">
                Every post is checked against its tracked link and the analytics the publisher submits, with manual spot-checks, before a view is billed.
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
                      <span>How a view gets verified</span>
                    </div>

                    <div className="bento-bot-popover__list">
                      <div className="bento-bot-row">
                        <span>Tracked link matched</span>
                        <span className="bento-bot-pass pm-num">Step 1</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Publisher analytics checked</span>
                        <span className="bento-bot-pass pm-num">Step 2</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Spot-checked by hand</span>
                        <span className="bento-bot-pass pm-num">Step 3</span>
                      </div>
                      <div className="bento-bot-row">
                        <span>Views that don’t hold up</span>
                        <span className="bento-bot-filtered pm-num">Not billed</span>
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
                    <span>How we check</span>
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
                Direct INR billing, GST invoicing, weekly UPI publisher payouts, and a WhatsApp desk.
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
                  <span>GST Invoicing</span>
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
