"use client";

import React from "react";
import "./VerificationLayer.css";

/* ── Platform SVGs (Instagram Reels, YouTube Shorts, Tracked Links) ── */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.62.14 3.23.42 4.81.33 1.24 1.3 2.21 2.54 2.54C6.52 19.77 12 19.77 12 19.77s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
  </svg>
);

const TrackedLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export default function VerificationLayer() {
  return (
    <section className="vl-section" id="verification" aria-label="Verification Layer">
      <div className="vl-container">
        
        {/* Luxury Ink Verification Surface */}
        <div className="vl-card">
          
          {/* Main Heading */}
          <h2 className="vl-main-heading">
            The verification layer that<br />
            protects every rupee.
          </h2>

          {/* Top Visual Interactive Flow */}
          <div className="vl-flow">
            {/* Background dashed connecting line */}
            <div className="vl-connector-line" />

            {/* Station I: Platform Data Card */}
            <div className="vl-station vl-station--1">
              <div className="vl-station-mobile-header">
                <span className="vl-station-mobile-num pm-num">I</span>
                <span className="vl-station-mobile-lbl">Platform data</span>
              </div>
              <div className="vl-modal-card">
                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><InstagramIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">Instagram Reels</span>
                    <span className="vl-platform-status">Insights checked</span>
                  </div>
                </div>

                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><YouTubeIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">YouTube Shorts</span>
                    <span className="vl-platform-status">Insights checked</span>
                  </div>
                </div>

                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><TrackedLinkIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">Tracked Links</span>
                    <span className="vl-platform-status">Unique link per post</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Station II: Concentric Radar Verification */}
            <div className="vl-station vl-station--2">
              <div className="vl-station-mobile-header">
                <span className="vl-station-mobile-num pm-num">II</span>
                <span className="vl-station-mobile-lbl vl-station-mobile-lbl--underlined">
                  Multi-signal verification
                  <span className="vl-station-mobile-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="vl-radar-wrap">
                <div className="vl-radar-ring-outer" />
                <div className="vl-radar-ring-mid" />
                <div className="vl-radar-ring-inner" />
                <div className="vl-radar-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Station III: Fraud Analysis Staggered Notes */}
            <div className="vl-station vl-station--3">
              <div className="vl-station-mobile-header">
                <span className="vl-station-mobile-num pm-num">III</span>
                <span className="vl-station-mobile-lbl">Fraud analysis</span>
              </div>
              <div className="vl-notes-stack">
                {/* Note 1 */}
                <div className="vl-note-card vl-note-card--1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                  </svg>
                  <span>Engagement patterns</span>
                </div>

                {/* Note 2 */}
                <div className="vl-note-card vl-note-card--2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <span>Account history check</span>
                </div>

                {/* Note 3 */}
                <div className="vl-note-card vl-note-card--3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>Velocity spike detection</span>
                </div>
              </div>
            </div>

            {/* Station IV: Verified Reporting Flag Card */}
            <div className="vl-station vl-station--4">
              <div className="vl-station-mobile-header">
                <span className="vl-station-mobile-num pm-num">IV</span>
                <span className="vl-station-mobile-lbl">Verified reporting</span>
              </div>
              <div className="vl-flag-card">
                <div className="vl-flag-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0v7" />
                  </svg>
                </div>
                <div className="vl-flag-meta">
                  <span className="vl-flag-val pm-num">18,312</span>
                  <span className="vl-flag-lbl">Bot views filtered &amp; not billed (example)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom 4 Columns Navigation (Desktop only) */}
          <div className="vl-columns-bar">
            
            <div className="vl-col">
              <span className="vl-col-num pm-num">I</span>
              <span className="vl-col-lbl">Platform data</span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num pm-num">II</span>
              <span className="vl-col-lbl vl-col-lbl--underlined">
                Multi-signal verification
                <span className="vl-col-info">ⓘ</span>
              </span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num pm-num">III</span>
              <span className="vl-col-lbl">Fraud analysis</span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num pm-num">IV</span>
              <span className="vl-col-lbl">Verified reporting</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
