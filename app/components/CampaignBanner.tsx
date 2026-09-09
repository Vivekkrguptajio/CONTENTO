"use client";

import React from "react";
import "./CampaignBanner.css";

/* ── Custom SVGs for Campaign Banner ─────────────────────────────── */
const MegaphoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 10.5V13.5C21 14.05 20.55 14.5 20 14.5H19V9.5H20C20.55 9.5 21 9.95 21 10.5ZM17 4H15V6.18C12.35 7.42 10 9 7 9H4C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H7C10 15 12.35 16.58 15 17.82V20H17V4ZM7 17H5V21H7V17Z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function CampaignBanner() {
  return (
    <section className="cb-section" aria-label="Campaign Overview">
      <div className="cb-container">
        <div className="cb-card">
          
          {/* Main Heading */}
          <h2 className="cb-heading">
            Run your next<br />
            campaign with the<br />
            best tech
          </h2>

          {/* Stats & Features (2x2 grid) */}
          <div className="cb-features">
            {/* 200 agencies */}
            <div className="cb-feature-item">
              <span className="cb-feature-item__icon">
                <MegaphoneIcon />
              </span>
              <span className="cb-feature-item__text">200 agencies</span>
            </div>

            {/* 1M+ creators */}
            <div className="cb-feature-item">
              <span className="cb-feature-item__icon">
                <UsersIcon />
              </span>
              <span className="cb-feature-item__text">1M+ creators</span>
            </div>

            {/* 24/7 support */}
            <div className="cb-feature-item">
              <span className="cb-feature-item__icon">
                <HeadsetIcon />
              </span>
              <span className="cb-feature-item__text">24/7 support</span>
            </div>

            {/* Real-time campaign analytics */}
            <div className="cb-feature-item">
              <span className="cb-feature-item__icon">
                <ChartIcon />
              </span>
              <span className="cb-feature-item__text">
                Real-time campaign<br />analytics
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="cb-actions">
            <button type="button" className="cb-btn cb-btn--primary">
              Launch a campaign
            </button>
            <button type="button" className="cb-btn cb-btn--secondary">
              See a demo
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
