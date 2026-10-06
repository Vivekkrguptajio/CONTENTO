"use client";

import React from "react";
import "./BentoFeatures.css";

/* ── Custom SVGs for Bento Cards ──────────────────────────────────── */
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
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

export default function BentoFeatures() {
  return (
    <section className="bento-section" id="pillars" aria-label="Key Product Features">
      <div className="bento-container">
        {/* Main Heading */}
        <div className="bento-header-center">
          <span className="bento-pill-tag">POMERA PILLARS</span>
          <h2 className="bento-main-heading">The platform built for certainty.</h2>
          <p className="bento-main-sub">
            Buy short-form video distribution the way you buy media: a fixed rate, a known unit, a clear bill.
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
              <h3 className="bento-card__title">A fixed rate</h3>
              <p className="bento-card__desc">
                Your rate per 1,000 verified views is fixed before launch. No auction, no festive spikes. It covers publisher payouts, verification and reporting.
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
              <div className="bento-billing-wrap">
              <span className="bento-example-tag">Example</span>
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

        </div>

        {/* ── BOTTOM ROW ───────────────────────────────────────────── */}
        <div className="bento-row bento-row--bottom">
          
          {/* Card 3: No follower minimum (Left, col-span-7) */}
          <div className="bento-card bento-card--bot">
            <div className="bento-card__header">
              <div className="bento-card__badge-row">
                <span className="bento-card__icon-box"><UsersIcon /></span>
                <span className="bento-card__status pm-num">NO GATEKEEPING</span>
              </div>
              <h3 className="bento-card__title">No follower minimum</h3>
              <p className="bento-card__desc">
                Publishers are picked for reach in your category, not follower count.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--bot">
              <div className="bento-cpm-widget bento-pick">
                <div className="bento-cpm-compare">
                  <div className="bento-cpm-bar bento-cpm-bar--pomera">
                    <span className="bento-cpm-bar-label">Picked for</span>
                    <span className="bento-cpm-bar-val pm-num">Reach in your category</span>
                  </div>
                  <div className="bento-cpm-bar bento-cpm-bar--auction">
                    <span className="bento-cpm-bar-label">Not picked on</span>
                    <span className="bento-cpm-bar-val pm-num">Follower count</span>
                  </div>
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
                <div className="bento-india-chip"><span>₹ billing</span></div>
                <div className="bento-india-chip"><span>GST invoices</span></div>
                <div className="bento-india-chip"><span>Weekly UPI payouts to publishers</span></div>
                <div className="bento-india-chip"><span>WhatsApp support</span></div>
                <div className="bento-india-chip"><span>Reels and Shorts</span></div>
                <div className="bento-india-chip"><span>Run from Bengaluru</span></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
