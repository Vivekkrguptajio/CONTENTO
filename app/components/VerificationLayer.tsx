"use client";

import React from "react";
import "./VerificationLayer.css";

/* ── Platform SVGs ────────────────────────────────────────────────── */
const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0f172a">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="#0f172a" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0f172a">
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.62.14 3.23.42 4.81.33 1.24 1.3 2.21 2.54 2.54C6.52 19.77 12 19.77 12 19.77s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
  </svg>
);

export default function VerificationLayer() {
  return (
    <section className="vl-section" aria-label="Verification Layer">
      <div className="vl-container">
        
        {/* Main Heading */}
        <h2 className="vl-main-heading">
          The Verification Layer that<br />
          Protects every Campaign
        </h2>

        {/* Sunset Gradient Card */}
        <div className="vl-card">
          
          {/* Top Visual Interactive Flow */}
          <div className="vl-flow">
            {/* Background dashed connecting line */}
            <div className="vl-connector-line" />

            {/* Station I: Platform Data Card */}
            <div className="vl-station vl-station--1">
              <div className="vl-modal-card">
                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><TikTokIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">TikTok</span>
                    <span className="vl-platform-status">Connected</span>
                  </div>
                </div>

                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><InstagramIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">Instagram</span>
                    <span className="vl-platform-status">Connected</span>
                  </div>
                </div>

                <div className="vl-platform-row">
                  <span className="vl-platform-icon"><YouTubeIcon /></span>
                  <div className="vl-platform-meta">
                    <span className="vl-platform-name">Youtube</span>
                    <span className="vl-platform-status">Connected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Station II: Concentric Radar Verification */}
            <div className="vl-station vl-station--2">
              <div className="vl-radar-wrap">
                <div className="vl-radar-ring-outer" />
                <div className="vl-radar-ring-mid" />
                <div className="vl-radar-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Station III: Fraud Analysis Staggered Notes */}
            <div className="vl-station vl-station--3">
              <div className="vl-notes-stack">
                {/* Note 1 */}
                <div className="vl-note-card vl-note-card--1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2">
                    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                  </svg>
                  <span>Engagement patterns</span>
                </div>

                {/* Note 2 */}
                <div className="vl-note-card vl-note-card--2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <span>Account history</span>
                </div>

                {/* Note 3 */}
                <div className="vl-note-card vl-note-card--3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>Creator analytics</span>
                </div>
              </div>
            </div>

            {/* Station IV: Verified Reporting Pill Card */}
            <div className="vl-station vl-station--4">
              <div className="vl-flag-card">
                <div className="vl-flag-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0f172a">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0v7" />
                  </svg>
                </div>
                <div className="vl-flag-meta">
                  <span className="vl-flag-val">11,481</span>
                  <span className="vl-flag-lbl">Flagged for review</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom 4 Columns Navigation */}
          <div className="vl-columns-bar">
            
            <div className="vl-col">
              <span className="vl-col-num">I</span>
              <span className="vl-col-lbl">Platform data</span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num">II</span>
              <span className="vl-col-lbl">
                Independent verification
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num">III</span>
              <span className="vl-col-lbl">Fraud analysis</span>
            </div>

            <div className="vl-col">
              <span className="vl-col-num">IV</span>
              <span className="vl-col-lbl">Verified Reporting</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
