"use client";

import React from "react";
import "./SolutionSteps.css";

export default function SolutionSteps() {
  return (
    <section className="sol-section" aria-label="Solution Overview">
      <div className="sol-container">
        
        {/* Section Heading */}
        <h2 className="sol-main-heading">Introducing the new Solution</h2>

        {/* 3-Column Grid */}
        <div className="sol-grid">
          
          {/* ── CARD 1: Launch your campaign ─────────────────────────── */}
          <div className="sol-card">
            <div className="sol-card__visual sol-card__visual--launch">
              <div className="sol-platform-modal">
                <span className="sol-modal-title">Select platforms</span>
                <span className="sol-modal-sub">
                  Choose which platforms this campaign accepts content from.
                </span>

                <div className="sol-platform-input">
                  <span className="sol-pill-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#0f172a">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
                    </svg>
                    <span>TikTok</span>
                  </span>

                  <span className="sol-pill-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#dc2626">
                      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.62.14 3.23.42 4.81.33 1.24 1.3 2.21 2.54 2.54C6.52 19.77 12 19.77 12 19.77s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                    </svg>
                    <span>YouTube</span>
                  </span>

                  <span className="sol-pill-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="#e1306c" />
                    </svg>
                    <span>Instagram</span>
                  </span>

                  <span className="sol-pill-badge sol-pill-badge--mini">
                    <span className="sol-x-icon">𝕏</span>
                    <span className="sol-x-icon">𝕏</span>
                  </span>
                </div>

                {/* Mouse cursor pointer clicking on input */}
                <div className="sol-cursor-pointer" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f172a">
                    <path d="M4 2l16 9-7 2.5L10.5 21 4 2z" />
                  </svg>
                </div>

                <div className="sol-modal-actions">
                  <button type="button" className="sol-modal-cancel">Cancel</button>
                  <button type="button" className="sol-modal-continue">Continue</button>
                </div>
              </div>
            </div>

            <div className="sol-card__text">
              <h3 className="sol-card__title">Launch your campaign</h3>
              <p className="sol-card__desc">
                Set your budget, explain what content you want, and choose how creators get paid.
              </p>
            </div>
          </div>

          {/* ── CARD 2: Creators make the content ─────────────────────── */}
          <div className="sol-card">
            <div className="sol-card__visual sol-card__visual--creators">
              <div className="sol-reels-container">
                
                {/* Reel 1 (partial left) */}
                <div className="sol-reel sol-reel--left">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=350&fit=crop"
                    alt="Creator recording video"
                    className="sol-reel-img"
                  />
                </div>

                {/* Reel 2 (primary center-left) */}
                <div className="sol-reel sol-reel--center-1">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=220&h=380&fit=crop"
                    alt="Creator smiling on video"
                    className="sol-reel-img"
                  />
                </div>

                {/* Reel 3 (primary center-right) */}
                <div className="sol-reel sol-reel--center-2">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=220&h=380&fit=crop"
                    alt="Creator dancing in video"
                    className="sol-reel-img"
                  />
                </div>

                {/* Reel 4 (partial right) */}
                <div className="sol-reel sol-reel--right">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=350&fit=crop"
                    alt="Creator talking to camera"
                    className="sol-reel-img"
                  />
                </div>

                {/* Bottom smooth fade overlay */}
                <div className="sol-reels-fade" />
              </div>
            </div>

            <div className="sol-card__text">
              <h3 className="sol-card__title">Creators make the content</h3>
              <p className="sol-card__desc">
                Creators apply, post videos about your brand, and submit them to your campaign.
              </p>
            </div>
          </div>

          {/* ── CARD 3: We handle everything else ─────────────────────── */}
          <div className="sol-card">
            <div className="sol-card__visual sol-card__visual--analytics">
              <div className="sol-analytics-card">
                
                {/* Header */}
                <div className="sol-analytics-head">
                  <span className="sol-analytics-label">Campaign engagement</span>
                  <div className="sol-analytics-ctr-row">
                    <span className="sol-analytics-ctr">4.3% CTR</span>
                    <span className="sol-analytics-tag">+18.3%</span>
                  </div>
                </div>

                {/* Legend badges */}
                <div className="sol-analytics-legend">
                  <span className="sol-legend-pill sol-legend-pill--views">
                    <span className="sol-legend-check">✓</span>
                    <span>Views 1,2M</span>
                  </span>
                  <span className="sol-legend-pill sol-legend-pill--apps">
                    <span className="sol-legend-check">✓</span>
                    <span>Applications 18,2K</span>
                  </span>
                  <span className="sol-legend-pill sol-legend-pill--joined">
                    <span className="sol-legend-check">✓</span>
                    <span>Joined 4.8%</span>
                  </span>
                </div>

                {/* Multi-curve Graph SVG */}
                <div className="sol-analytics-chart">
                  <svg viewBox="0 0 280 140" className="sol-chart-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="solBlueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="solPinkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Area fills */}
                    <path
                      d="M0 120 Q 30 110, 60 90 T 120 70 T 180 85 T 240 50 L 280 40 L 280 140 L 0 140 Z"
                      fill="url(#solBlueGrad)"
                    />

                    {/* Green line (upper trajectory) */}
                    <path
                      d="M0 95 Q 25 90, 50 65 T 100 80 T 150 50 T 200 65 T 250 35 L 280 20"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    {/* Pink line (middle trajectory) */}
                    <path
                      d="M0 115 Q 35 110, 70 85 T 140 95 T 210 60 T 260 55 L 280 70"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    {/* Blue line (lower trajectory) */}
                    <path
                      d="M0 125 Q 40 120, 80 95 T 160 105 T 240 70 L 280 45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="sol-chart-dates">
                  <span>Jan 5</span>
                  <span>Jan 11</span>
                  <span>Jan 17</span>
                  <span>Jan 23</span>
                  <span>Jan 30</span>
                  <span>Feb 5</span>
                </div>

              </div>
            </div>

            <div className="sol-card__text">
              <h3 className="sol-card__title">We handle everything else</h3>
              <p className="sol-card__desc">
                Content Rewards tracks the views, calculates rewards, and pays creators automatically.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
