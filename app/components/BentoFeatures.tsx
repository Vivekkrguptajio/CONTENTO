"use client";

import React, { useState } from "react";
import "./BentoFeatures.css";

export default function BentoFeatures() {
  const [commentText] = useState(
    "Looks great, approving now. Payout is on the way."
  );
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <section className="bento-section" aria-label="Key Features">
      <div className="bento-container">
        {/* Main Heading */}
        <h2 className="bento-main-heading">The best by design.</h2>

        {/* ── TOP ROW ──────────────────────────────────────────────── */}
        <div className="bento-row bento-row--top">
          
          {/* Card 1: Review (Left, col-span-5) */}
          <div className="bento-card bento-card--review">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Review</h3>
              <p className="bento-card__desc">
                Leave timestamped feedback and approve work in seconds.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--review">
              <div className="bento-review-box">
                {/* Video thumbnail with close button */}
                <div className="bento-review-thumb-wrap">
                  <div className="bento-review-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=140&h=140&fit=crop"
                      alt="Thumbnail preview"
                      className="bento-review-img"
                    />
                    <button type="button" className="bento-thumb-close" aria-label="Remove thumbnail">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Comment input mockup */}
                <div className="bento-review-input-area">
                  <span className="bento-review-text">{commentText}</span>
                  <span className="bento-review-cursor" />
                </div>

                {/* Footer bar with paperclip & comment button */}
                <div className="bento-review-footer">
                  <span className="bento-review-clip" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9E9D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </span>
                  <button type="button" className="bento-review-btn">
                    Comment at 00:21
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Flexible (Right, col-span-7) */}
          <div className="bento-card bento-card--flexible">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Flexible</h3>
              <p className="bento-card__desc">
                Run CPM, retainer or per-post campaigns: public, application-only or private.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--flexible">
              <div className="bento-tri-cards">
                
                {/* 1. CPM Card (Royal Blue) */}
                <div className="bento-mini-card bento-mini-card--cpm">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">CPM</span>
                    <span className="bento-mini-sub">Paid per 1K views on a video</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--cpm">
                    <div className="bento-sheet-tabs">
                      <span className="bento-sheet-tab bento-sheet-tab--active">Views</span>
                      <span className="bento-sheet-tab">Submissions</span>
                      <span className="bento-sheet-tab">Pending</span>
                    </div>
                    <div className="bento-sheet-stat">
                      <span className="bento-sheet-number">1,2M</span>
                      <span className="bento-sheet-tag">+18.3%</span>
                    </div>
                    <div className="bento-sheet-curve">
                      <svg viewBox="0 0 100 30" className="bento-sheet-svg" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cpmGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 24 Q 25 22, 50 12 T 100 6 L 100 30 L 0 30 Z" fill="url(#cpmGrad)" />
                        <path d="M0 24 Q 25 22, 50 12 T 100 6" fill="none" stroke="#2563EB" strokeWidth="2.2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Retainer Card (Vibrant Orange) */}
                <div className="bento-mini-card bento-mini-card--retainer">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">Retainer</span>
                    <span className="bento-mini-sub">Fixed amount per month</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--retainer">
                    <span className="bento-sheet-cal-title">February 2026</span>
                    <div className="bento-sheet-cal-days">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                    <div className="bento-sheet-cal-grid">
                      <span className="bento-cal-dim">26</span><span className="bento-cal-dim">27</span><span className="bento-cal-dim">28</span><span className="bento-cal-dim">29</span><span className="bento-cal-dim">30</span><span className="bento-cal-dim">31</span><span>1</span>
                      <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                      <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                      <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
                      <span className="bento-cal-active">23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
                    </div>
                  </div>
                </div>

                {/* 3. Per Post Card (Emerald Green) */}
                <div className="bento-mini-card bento-mini-card--perpost">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">Per post</span>
                    <span className="bento-mini-sub">Flat fee for each video</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--perpost">
                    <div className="bento-perpost-mockup">
                      <div className="bento-perpost-badge">KIMBE</div>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=180&fit=crop"
                        alt="Per post video cover"
                        className="bento-perpost-img"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ROW ───────────────────────────────────────────── */}
        <div className="bento-row bento-row--bottom">
          
          {/* Card 3: Bot detection (Left, col-span-7) */}
          <div className="bento-card bento-card--bot">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Bot detection</h3>
              <p className="bento-card__desc">
                Every view is checked for bot traffic, so you only pay for real people.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--bot">
              <div className="bento-bot-wrapper">
                
                {/* Floating Dark Popup Menu */}
                {showTooltip && (
                  <div className="bento-bot-popover">
                    <div className="bento-bot-popover__header">
                      <span className="bento-bot-popover__shield">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </span>
                      <span>Independently bot-checked</span>
                    </div>

                    <div className="bento-bot-popover__list">
                      <div className="bento-bot-row">
                        <span>Fraud-Score</span>
                        <span className="bento-bot-box bento-bot-box--green" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Verified views</span>
                        <span className="bento-bot-box bento-bot-box--green" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Demographics</span>
                        <span className="bento-bot-box bento-bot-box--red" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Creator-Trust</span>
                        <span className="bento-bot-box bento-bot-box--gray" />
                      </div>
                    </div>

                    {/* Popover Arrow */}
                    <div className="bento-bot-popover__arrow" />
                  </div>
                )}

                {/* White Pill Button with Mouse Cursor */}
                <div className="bento-bot-trigger-wrap">
                  <button
                    type="button"
                    className="bento-bot-pill"
                    onClick={() => setShowTooltip(!showTooltip)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#110D0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Independently bot-checked</span>
                  </button>

                  {/* Realistic Pointer Hand Cursor */}
                  <div className="bento-bot-pointer" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 2v10l-2.5-2.5a2 2 0 0 0-2.83 2.83l6.33 6.33A5 5 0 0 0 14.54 20H18a4 4 0 0 0 4-4v-4a2 2 0 0 0-2-2h-1V9a2 2 0 0 0-2-2h-1V6a2 2 0 0 0-2-2h-1V2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2z"
                        fill="#ffffff"
                        stroke="#110D0C"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 4: Teams (Right, col-span-5) */}
          <div className="bento-card bento-card--teams">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Teams</h3>
              <p className="bento-card__desc">
                Manage multiple brands with role-based access.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--teams">
              <div className="bento-roles-cloud">
                
                {/* Pill 1: Member (Tilted top-left) */}
                <div className="bento-role-pill bento-role-pill--member bento-role-pill--tilted">
                  <span className="bento-role-icon">👤</span>
                  <span>Member</span>
                </div>

                {/* Row 1 */}
                <div className="bento-roles-row">
                  <div className="bento-role-pill bento-role-pill--admin">
                    <span className="bento-role-icon">👑</span>
                    <span>Admin</span>
                  </div>
                  <div className="bento-role-pill bento-role-pill--member">
                    <span className="bento-role-icon">👤</span>
                    <span>Member</span>
                  </div>
                  <div className="bento-role-pill bento-role-pill--member">
                    <span className="bento-role-icon">👤</span>
                    <span>Member</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bento-roles-row">
                  <div className="bento-role-pill bento-role-pill--mod">
                    <span className="bento-role-icon">🛡️</span>
                    <span>Moderator</span>
                  </div>
                  <div className="bento-role-pill bento-role-pill--member">
                    <span className="bento-role-icon">👤</span>
                    <span>Member</span>
                  </div>
                  <div className="bento-role-pill bento-role-pill--mod">
                    <span className="bento-role-icon">🛡️</span>
                    <span>Moderator</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
