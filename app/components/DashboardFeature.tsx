"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./DashboardFeature.css";
import "./DashboardMockup.css";
import { PomeraMark } from "./pomeraMark";
import LazyVideo from "./LazyVideo";

/* ── Top Tabs SVGs ────────────────────────────────────────────────── */
const TabReviewIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TabPayoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4 4 0 0 0 0-8" />
  </svg>
);

const TabPublishersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
    <polyline points="14 5 18 9 22 5" />
  </svg>
);

/* ── Platform SVGs ────────────────────────────────────────────────── */
const InstagramIconMini = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="#64748b" />
  </svg>
);

const YouTubeIconMini = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" color="#64748b">
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.62.14 3.23.42 4.81.33 1.24 1.3 2.21 2.54 2.54C6.52 19.77 12 19.77 12 19.77s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
  </svg>
);

/* ── Publisher Table Data (India Native) ─────────────────────────── */
interface PublisherRow {
  id: number;
  name: string;
  joined: string;
  avatarBg: string;
  initials: string;
  platforms: ("instagram" | "youtube")[];
  disbursed: string;
  views: string;
  match: number;
  engRate: string;
  status: string;
}

const PUBLISHERS_LIST: PublisherRow[] = [
  { id: 1, name: "reels_velocity", joined: "Oct '25", avatarBg: "#111210", initials: "RV", platforms: ["instagram", "youtube"], disbursed: "₹48,200", views: "6,40,000", match: 94, engRate: "4.8%", status: "Verified" },
  { id: 2, name: "d2c_curator", joined: "Nov '25", avatarBg: "#1f2937", initials: "DC", platforms: ["instagram"], disbursed: "₹36,500", views: "5,20,000", match: 91, engRate: "4.2%", status: "Verified" },
  { id: 3, name: "urban_street_edits", joined: "Jan '26", avatarBg: "#374151", initials: "US", platforms: ["instagram", "youtube"], disbursed: "₹52,000", views: "7,50,000", match: 95, engRate: "5.1%", status: "Verified" },
  { id: 4, name: "tech_india_shorts", joined: "Feb '26", avatarBg: "#4b5563", initials: "TI", platforms: ["youtube"], disbursed: "₹28,400", views: "4,10,000", match: 88, engRate: "3.6%", status: "Verified" },
  { id: 5, name: "lifestyle_capsules", joined: "Mar '26", avatarBg: "#0f172a", initials: "LC", platforms: ["instagram", "youtube"], disbursed: "₹42,100", views: "5,80,000", match: 92, engRate: "4.4%", status: "Verified" },
];

/* ── Payout Table Data (UPI INR) ─────────────────────────────────── */
interface PayoutRow {
  id: number;
  name: string;
  platforms: ("instagram" | "youtube")[];
  campaign: string;
  views: string;
  rate: string;
  disbursed: string;
  status: "UPI Paid" | "In Review" | "Bot Flagged";
  isBlocked?: boolean;
}

const PAYOUTS_LIST: PayoutRow[] = [
  { id: 1, name: "reels_velocity", platforms: ["instagram", "youtube"], campaign: "Minimalist · Sunscreen Drop", views: "6,40,000", rate: "₹250 CPM", disbursed: "₹1,60,000", status: "UPI Paid" },
  { id: 2, name: "d2c_curator", platforms: ["instagram"], campaign: "Mokobara · Luggage Series", views: "3,80,000", rate: "₹250 CPM", disbursed: "₹95,000", status: "UPI Paid" },
  { id: 3, name: "urban_street_edits", platforms: ["instagram", "youtube"], campaign: "Snitch · Winter Fit Launch", views: "2,40,000", rate: "₹250 CPM", disbursed: "₹60,000", status: "In Review" },
  { id: 4, name: "suspicious_node_4", platforms: ["instagram"], campaign: "Plum · Green Tea Push", views: "18,312", rate: "₹0 CPM", disbursed: "₹0 (Blocked)", status: "Bot Flagged", isBlocked: true },
];

const PAYOUT_STATS = [
  { value: "₹2,50,000", label: "Committed Budget" },
  { value: "₹1,84,000", label: "UPI Disbursed" },
  { value: "₹46,000", label: "Pending Verification" },
  { value: "₹20,000", label: "Upcoming Flight" },
  { value: "₹0", label: "Bot Surcharges (Protected)" },
  { value: "18,312", label: "Bot Views Filtered" },
];

export default function DashboardFeature() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const TAB_ORDER = [0, 1, 2];
  const INTERVAL_MS = 5000;
  const PAUSE_MS = 10000;
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAutoRotation = useCallback(() => {
    isPausedRef.current = true;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, PAUSE_MS);
  }, []);

  const handleTabClick = useCallback((tabId: number) => {
    setActiveTab(tabId);
    pauseAutoRotation();
  }, [pauseAutoRotation]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      setActiveTab((prev) => {
        const currentIdx = TAB_ORDER.indexOf(prev);
        const nextIdx = (currentIdx + 1) % TAB_ORDER.length;
        return TAB_ORDER[nextIdx];
      });
    }, INTERVAL_MS);
    return () => {
      clearInterval(interval);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [payoutTime, setPayoutTime] = useState<string>("Current flight");
  const payoutTimeTabs = ["Current flight", "This month", "All campaigns"];

  const tabs = [
    { id: 0, label: "Live verification", icon: <TabReviewIcon /> },
    { id: 1, label: "Weekly UPI disbursements", icon: <TabPayoutIcon /> },
    { id: 2, label: "Publisher network", icon: <TabPublishersIcon /> },
  ];

  return (
    <section className="df-section" id="dashboard" aria-label="Brand Dashboard Overview">
      <div className="df-container">
        
        {/* Main Heading */}
        <h2 className="df-heading">
          Real-time visibility.<br />
          Verified numbers before payout.
        </h2>

        {/* 3 Navigation Tabs */}
        <div className="df-tabs-wrapper">
          <div className="df-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`df-tab ${activeTab === tab.id ? "df-tab--active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="df-tab__icon-bubble">{tab.icon}</span>
                <span className="df-tab__label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="df-tabs-track">
            <div
              className="df-tabs-indicator"
              style={{
                left: `${(activeTab * 100) / 3}%`,
                width: `${100 / 3}%`,
              }}
            />
          </div>
        </div>

        {/* Product mockup: lightweight feature cards, one scene per tab */}
        <div className="dfx-stage" key={activeTab}>
          {/* ── 1. Live verification ───────────────────────────────── */}
          {activeTab === 0 && (
            <div className="dfx-grid dfx-grid--verify">
              {/* Review card */}
              <div className="dfx-card dfx-review">
                <div className="dfx-card__head">
                  <span className="dfx-chip">Delivery review</span>
                  <span className="dfx-card__meta">
                    <InstagramIconMini /> reels_velocity · Minimalist Sunscreen
                  </span>
                </div>

                <div className="dfx-review__body">
                  <div className="dfx-video">
                    <LazyVideo src="/videos/reel-bike.mp4" />
                    <div className="dfx-video__shade" />
                    <div className="dfx-video__stat">
                      <span className="pm-num">6,40,000</span>
                      <small>Verified views</small>
                    </div>
                    <div className="dfx-video__scrub" aria-hidden="true">
                      <span className="dfx-video__bar"><i /></span>
                      <span className="dfx-video__marker" />
                    </div>
                  </div>

                  <div className="dfx-thread">
                    <div className="dfx-bubble">
                      <span className="dfx-bubble__time pm-num">00:21</span>
                      <p>Views match the attribution link. No bot spike on this post.</p>
                    </div>
                    <div className="dfx-bubble dfx-bubble--ok">
                      <span className="dfx-bubble__avatar">
                        <PomeraMark size={22} bg="#121210" radius={90} />
                      </span>
                      <p>Verified. Payout is queued for the next weekly UPI run.</p>
                    </div>
                    <div className="dfx-audit">
                      <div><span>Attribution link</span><b className="pm-num">pomera.link/min-sun-08</b></div>
                      <div><span>Billed</span><b className="pm-num">₹1,60,000 · ₹250 CPM</b></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot detection card */}
              <div className="dfx-card dfx-bots">
                <div className="dfx-card__head">
                  <span className="dfx-chip dfx-chip--lime">Bot detection</span>
                  <span className="dfx-card__meta">Updated live</span>
                </div>

                <div className="dfx-metrics">
                  <div className="dfx-metric">
                    <small>Fraud score</small>
                    <b className="pm-num dfx-good">0.0%</b>
                    <span className="dfx-meter"><i style={{ width: "4%" }} /></span>
                  </div>
                  <div className="dfx-metric">
                    <small>Verified views</small>
                    <b className="pm-num">6,40,000</b>
                    <span className="dfx-meter"><i style={{ width: "100%" }} /></span>
                  </div>
                  <div className="dfx-metric">
                    <small>Demographics</small>
                    <b className="pm-num">94% India</b>
                    <span className="dfx-meter"><i style={{ width: "94%" }} /></span>
                  </div>
                  <div className="dfx-metric">
                    <small>Publisher trust</small>
                    <b className="pm-num">94 / 100</b>
                    <span className="dfx-meter"><i style={{ width: "94%" }} /></span>
                  </div>
                </div>

                <div className="dfx-flag">
                  <span className="dfx-flag__icon" aria-hidden="true">⊗</span>
                  <div>
                    <b>18,312 bot views filtered</b>
                    <small>Excluded from billing · ₹0 charged</small>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── 2. Weekly UPI disbursements ────────────────────────── */}
          {activeTab === 1 && (
            <div className="dfx-stack">
              <div className="dfx-bar">
                <div>
                  <h3 className="dfx-title">Weekly UPI Disbursements</h3>
                  <p className="dfx-sub">Publishers paid strictly on confirmed delivery reports</p>
                </div>
                <div className="df-payouts-time-capsule">
                  {payoutTimeTabs.map((pt) => (
                    <button
                      key={pt}
                      type="button"
                      className={`df-payouts-time-btn ${payoutTime === pt ? "df-payouts-time-btn--active" : ""}`}
                      onClick={() => setPayoutTime(pt)}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="dfx-kpis">
                {PAYOUT_STATS.slice(0, 3).map((stat, i) => (
                  <div key={stat.label} className={`dfx-card dfx-kpi ${i === 1 ? "dfx-kpi--dark" : ""}`}>
                    <small>{stat.label}</small>
                    <b className="pm-num">{stat.value}</b>
                    <span className="dfx-meter"><i style={{ width: i === 0 ? "100%" : i === 1 ? "74%" : "18%" }} /></span>
                  </div>
                ))}
              </div>

              <div className="dfx-card dfx-list">
                {PAYOUTS_LIST.map((row) => (
                  <div key={row.id} className={`dfx-row ${row.isBlocked ? "dfx-row--blocked" : ""}`}>
                    <div className="dfx-row__who">
                      <span className="dfx-avatar">{row.name.slice(0, 2).toUpperCase()}</span>
                      <div>
                        <b>{row.name}</b>
                        <small>{row.campaign}</small>
                      </div>
                    </div>
                    <span className="dfx-row__plat">
                      {row.platforms.includes("instagram") && <InstagramIconMini />}
                      {row.platforms.includes("youtube") && <YouTubeIconMini />}
                    </span>
                    <span className="dfx-row__views pm-num">{row.views} views · {row.rate}</span>
                    <b className="dfx-row__amt pm-num">{row.disbursed}</b>
                    <span
                      className={`df-payout-badge ${
                        row.status === "UPI Paid"
                          ? "df-payout-badge--paid"
                          : row.status === "In Review"
                          ? "df-payout-badge--pending"
                          : "df-payout-badge--blocked"
                      }`}
                    >
                      {row.status === "UPI Paid" ? "✓ Paid via UPI" : row.status === "In Review" ? "○ In flight" : "⊗ Bot excluded"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 3. Publisher network ───────────────────────────────── */}
          {activeTab === 2 && (
            <div className="dfx-stack">
              <div className="dfx-bar">
                <div>
                  <h3 className="dfx-title">Publisher Distribution Network</h3>
                  <p className="dfx-sub">Verified Indian short-form accounts vetted for organic reach</p>
                </div>
                <span className="dfx-chip dfx-chip--lime">Active fleet · 48 accounts</span>
              </div>

              <div className="dfx-pubs">
                {PUBLISHERS_LIST.map((c) => (
                  <div key={c.id} className="dfx-card dfx-pub">
                    <div className="dfx-pub__top">
                      <span className="dfx-avatar" style={{ backgroundColor: c.avatarBg }}>{c.initials}</span>
                      <div>
                        <b>{c.name}</b>
                        <small>joined {c.joined}</small>
                      </div>
                      <span className="dfx-row__plat dfx-pub__plat">
                        {c.platforms.includes("instagram") && <InstagramIconMini />}
                        {c.platforms.includes("youtube") && <YouTubeIconMini />}
                      </span>
                    </div>
                    <div className="dfx-pub__stats">
                      <div><small>Delivered</small><b className="pm-num">{c.views}</b></div>
                      <div><small>Engagement</small><b className="pm-num">{c.engRate}</b></div>
                      <div><small>Trust</small><b className="pm-num">{c.match}</b></div>
                    </div>
                    <span className="dfx-meter"><i style={{ width: `${c.match}%` }} /></span>
                  </div>
                ))}
                <div className="dfx-card dfx-pub dfx-pub--more">
                  <b className="pm-num">+43</b>
                  <small>more verified publishers</small>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
