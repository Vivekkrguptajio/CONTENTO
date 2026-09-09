"use client";

import React, { useState } from "react";
import "./DashboardFeature.css";

/* ── Top Tabs SVGs ────────────────────────────────────────────────── */
const TabReviewIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="4" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TabPayoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v12M15 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 1.5 5 4a2.5 2.5 0 0 1-5 0" />
  </svg>
);

const TabCreatorsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
    <polyline points="14 5 18 9 22 5" />
  </svg>
);

/* ── Sidebar Icons ────────────────────────────────────────────────── */
const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const CampaignsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
  </svg>
);

const SubmissionsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const CreatorsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const PayoutsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);

const InsightsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

const FinanceIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </svg>
);

const NotificationsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const HelpIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
  </svg>
);

/* ── Platform SVGs ────────────────────────────────────────────────── */
const TikTokIconMini = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#64748b">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
  </svg>
);

const InstagramIconMini = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="#64748b" />
  </svg>
);

const YouTubeIconMini = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polygon points="10 8 16 12 10 16 10 8" fill="#64748b" />
  </svg>
);

const XIconMini = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#64748b">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ── Creator Table Data ───────────────────── */
interface CreatorRow {
  id: number;
  name: string;
  joined: string;
  avatarBg: string;
  initials: string;
  avatarUrl?: string;
  platforms: ("tiktok" | "instagram" | "youtube")[];
  earned: string;
  views: string;
  match: number;
  engRate: string;
  engScore: number;
}

const CREATORS_LIST: CreatorRow[] = [
  { id: 1, name: "xKaizen", joined: "Oct '26", avatarBg: "#1e293b", initials: "xK", avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram", "youtube"], earned: "$24,815.67", views: "680.4K", match: 92, engRate: "4.8%", engScore: 85 },
  { id: 2, name: "Cryptoclipz", joined: "Nov '25", avatarBg: "#831843", initials: "Cr", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram"], earned: "$18,090.32", views: "520.1K", match: 88, engRate: "3.9%", engScore: 79 },
  { id: 3, name: "ViralVince", joined: "Jan '26", avatarBg: "#b45309", initials: "VV", avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram"], earned: "$25,450.67", views: "750.3K", match: 90, engRate: "4.1%", engScore: 85 },
  { id: 4, name: "TechnoTrade", joined: "Feb '26", avatarBg: "#334155", initials: "TT", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok"], earned: "$22,154.50", views: "610.3K", match: 85, engRate: "2.8%", engScore: 65 },
  { id: 5, name: "GamingGrace", joined: "Mar '26", avatarBg: "#065f46", initials: "GG", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram", "youtube"], earned: "$15,340.78", views: "450.2K", match: 90, engRate: "3.5%", engScore: 80 },
  { id: 6, name: "BetBoss", joined: "Apr '26", avatarBg: "#475569", initials: "BB", avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram", "youtube"], earned: "$28,432.12", views: "800.5K", match: 87, engRate: "3.1%", engScore: 70 },
  { id: 7, name: "ClipKingJr", joined: "May '26", avatarBg: "#0284c7", initials: "CK", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram"], earned: "$19,876.00", views: "530.7K", match: 92, engRate: "2.4%", engScore: 90 },
  { id: 8, name: "NeonEdits", joined: "Jun '26", avatarBg: "#6d28d9", initials: "NE", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram", "youtube"], earned: "$24,760.99", views: "670.9K", match: 89, engRate: "3.0%", engScore: 82 },
  { id: 9, name: "ReelMaster", joined: "Jul '26", avatarBg: "#2563eb", initials: "RM", avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok", "instagram"], earned: "$30,052.45", views: "900.4K", match: 86, engRate: "2.6%", engScore: 88 },
  { id: 10, name: "WealthWave", joined: "Aug '26", avatarBg: "#64748b", initials: "WW", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces", platforms: ["tiktok"], earned: "$26,485.33", views: "750.6K", match: 91, engRate: "3.3%", engScore: 77 },
];

/* ── Payout Table Data (Exact from user reference screenshot) ──────── */
interface PayoutRow {
  id: number;
  name: string;
  avatarGradient: string;
  platforms: ("tiktok" | "instagram" | "youtube" | "x")[];
  campaign: string;
  views: string;
  estPayout: string;
  net: string;
  status: "Pending" | "Paid" | "Blocked" | "Upcoming";
  isBlocked?: boolean;
}

const PAYOUTS_LIST: PayoutRow[] = [
  {
    id: 1,
    name: "xKaizen",
    avatarGradient: "linear-gradient(135deg, #a3e635 0%, #eab308 100%)",
    platforms: ["tiktok", "instagram", "youtube", "x"],
    campaign: "Whop",
    views: "337.4K",
    estPayout: "$139.75",
    net: "$129.32",
    status: "Pending",
  },
  {
    id: 2,
    name: "Crypto...",
    avatarGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)",
    platforms: ["tiktok", "instagram"],
    campaign: "Whop",
    views: "284.1K",
    estPayout: "$118.05",
    net: "$108.61",
    status: "Paid",
  },
  {
    id: 3,
    name: "ViralVi...",
    avatarGradient: "linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)",
    platforms: ["tiktok", "instagram"],
    campaign: "Whop",
    views: "451.8K",
    estPayout: "$178.46",
    net: "$164.18",
    status: "Pending",
  },
  {
    id: 4,
    name: "Techno...",
    avatarGradient: "linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)",
    platforms: ["tiktok"],
    campaign: "Whop",
    views: "92.6K",
    estPayout: "$41.20",
    net: "$37.90",
    status: "Blocked",
    isBlocked: true,
  },
  {
    id: 5,
    name: "Gamin...",
    avatarGradient: "linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #f43f5e 100%)",
    platforms: ["tiktok", "instagram", "youtube"],
    campaign: "Whop",
    views: "612.3K",
    estPayout: "$232.67",
    net: "$214.06",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "BetBoss",
    avatarGradient: "linear-gradient(135deg, #fde047 0%, #f43f5e 100%)",
    platforms: ["tiktok", "instagram", "youtube", "x"],
    campaign: "Whop",
    views: "389.5K",
    estPayout: "$154.93",
    net: "$142.54",
    status: "Paid",
  },
  {
    id: 7,
    name: "ClipKin...",
    avatarGradient: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    platforms: ["tiktok", "instagram"],
    campaign: "Whop",
    views: "218.7K",
    estPayout: "$94.38",
    net: "$86.83",
    status: "Pending",
  },
];

const PAYOUT_STATS = [
  { value: "$42,000", label: "Budget" },
  { value: "$18,420", label: "Paid" },
  { value: "$9,860", label: "Pending" },
  { value: "$7,240", label: "Upcoming" },
  { value: "$1,150", label: "Clawed back" },
  { value: "$640", label: "Flagged" },
];

export default function DashboardFeature() {
  // Tab 1 = Send payouts (active as requested by user)
  const [activeTab, setActiveTab] = useState<number>(1);

  // Payout view state
  const [payoutTime, setPayoutTime] = useState<string>("This week");
  const payoutTimeTabs = ["This week", "This month", "All Time"];

  const [payoutFilter, setPayoutFilter] = useState<string>("All (9)");
  const payoutFilters = ["All (9)", "Processing (4)", "In Review (3)", "Suspicious (1)"];

  // Submissions filters
  const [subFilter, setSubFilter] = useState<string>("All 21");
  const subFilterTabs = ["All 21", "Pending 8", "Approved 5", "Rejected 5", "Flagged 3"];

  // Creators view subtabs & filters
  const [creatorSubTab, setCreatorSubTab] = useState<string>("Creators");
  const creatorSubTabs = ["Creators", "Insights", "Applications", "Contracts", "Affiliates"];

  const [creatorFilter, setCreatorFilter] = useState<string>("All 18");
  const creatorFilters = ["All 18", "Top 5", "Rising 6", "Inactive 5", "Flagged 3", "Blocked 3"];

  const tabs = [
    { id: 0, label: "Review submissions", icon: <TabReviewIcon /> },
    { id: 1, label: "Send payouts", icon: <TabPayoutIcon /> },
    { id: 2, label: "Manage your creators", icon: <TabCreatorsIcon /> },
  ];

  return (
    <section className="df-section" aria-label="Feature Overview">
      <div className="df-container">
        
        {/* Main Heading */}
        <h2 className="df-heading">
          Launch & manage<br />
          campaigns with no sweat.
        </h2>

        {/* 3 Navigation Tabs */}
        <div className="df-tabs-wrapper">
          <div className="df-tabs">
            {tabs.map((tab, idx) => (
              <React.Fragment key={tab.id}>
                <button
                  type="button"
                  className={`df-tab ${activeTab === tab.id ? "df-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="df-tab__icon-bubble">{tab.icon}</span>
                  <span className="df-tab__label">{tab.label}</span>
                </button>
                {idx < tabs.length - 1 && <span className="df-tabs__divider" />}
              </React.Fragment>
            ))}
          </div>

          {/* Underline track with orange highlight */}
          <div className="df-tabs-track">
            <div
              className="df-tabs-indicator"
              style={{
                left: `${activeTab * 33.33}%`,
                width: "33.33%",
              }}
            />
          </div>
        </div>

        {/* Dashboard Mockup Card (1218px width equal to campaign card) */}
        <div className="df-dashboard">
          
          {/* Left Sidebar */}
          <aside className="df-sidebar">
            {/* Header / Brand */}
            <div className="df-sidebar__brand">
              <div className="df-sidebar__logo-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 3l1.8 5.5L19.5 10l-4.2 3.8 1.4 5.7L12 16.5 7.3 19.5l1.4-5.7L4.5 10l5.7-1.5L12 3z" />
                </svg>
              </div>
              <div className="df-sidebar__brand-meta">
                <span className="df-sidebar__brand-title">Content Rewards</span>
                <span className="df-sidebar__brand-sub">Pro account</span>
              </div>
            </div>

            {/* Menu List */}
            <nav className="df-sidebar__menu">
              <div className="df-menu-item" onClick={() => setActiveTab(0)}>
                <span className="df-menu-item__icon"><HomeIcon /></span>
                <span className="df-menu-item__label">Home</span>
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><CampaignsIcon /></span>
                <span className="df-menu-item__label">Campaigns</span>
              </div>

              <div
                className={`df-menu-item ${activeTab === 0 ? "df-menu-item--active" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                <span className="df-menu-item__icon"><SubmissionsIcon /></span>
                <span className="df-menu-item__label">Submissions</span>
                <span className="df-menu-item__badge">21</span>
              </div>

              <div
                className={`df-menu-item ${activeTab === 2 ? "df-menu-item--active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                <span className="df-menu-item__icon"><CreatorsIcon /></span>
                <span className="df-menu-item__label">Creators</span>
                <span className="df-menu-item__badge">38</span>
              </div>

              <div
                className={`df-menu-item ${activeTab === 1 ? "df-menu-item--active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                <span className="df-menu-item__icon"><PayoutsIcon /></span>
                <span className="df-menu-item__label">Payouts</span>
                <span className="df-menu-item__badge">14</span>
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><InsightsIcon /></span>
                <span className="df-menu-item__label">Insights</span>
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><FinanceIcon /></span>
                <span className="df-menu-item__label">Finance</span>
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><NotificationsIcon /></span>
                <span className="df-menu-item__label">Notifications</span>
                <span className="df-menu-item__dot" />
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><SettingsIcon /></span>
                <span className="df-menu-item__label">Settings</span>
              </div>

              <div className="df-menu-item">
                <span className="df-menu-item__icon"><HelpIcon /></span>
                <span className="df-menu-item__label">Help</span>
              </div>
            </nav>
          </aside>

          {/* ═════════════════════════════════════════════════════════
              VIEW 1: SUBMISSIONS VIEW (Active when activeTab === 0)
             ═════════════════════════════════════════════════════════ */}
          {activeTab === 0 && (
            <main className="df-submissions">
              
              {/* Top Toolbar */}
              <div className="df-sub-topbar">
                <h3 className="df-sub-title">Submissions</h3>

                <div className="df-sub-actions">
                  <button type="button" className="df-sub-link-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>Scores &amp; matches</span>
                  </button>

                  <button type="button" className="df-sub-pill-btn df-sub-pill-btn--dark">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                    </svg>
                    <span>Rules</span>
                  </button>

                  <button type="button" className="df-sub-pill-btn df-sub-pill-btn--outline">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Filter Pills + Search */}
              <div className="df-sub-filterbar">
                <div className="df-sub-filter-pills">
                  {subFilterTabs.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`df-filter-pill ${subFilter === filter ? "df-filter-pill--active" : ""}`}
                      onClick={() => setSubFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="df-sub-search-box">
                  <div className="df-search-input-wrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input type="text" placeholder="Search" className="df-search-input" readOnly />
                  </div>
                  <button type="button" className="df-filter-icon-btn" aria-label="Filter">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="1" y1="14" x2="7" y2="14" />
                      <line x1="9" y1="8" x2="15" y2="8" />
                      <line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Submissions Cards List */}
              <div className="df-sub-list">
                
                {/* ── Submission 1 (Expanded: xKaizen) ───────────────── */}
                <div className="df-sub-card df-sub-card--expanded">
                  <div className="df-sub-card__header">
                    <div className="df-creator-profile">
                      <div className="df-creator-avatar df-creator-avatar--kaizen">
                        <span className="df-avatar-label">xK</span>
                      </div>
                      <div className="df-creator-info">
                        <span className="df-creator-name">xKaizen</span>
                        <span className="df-creator-meta">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
                          </svg>
                          <span>· Whop · 25 Feb &apos;26</span>
                        </span>
                      </div>
                    </div>

                    <div className="df-sub-card__controls">
                      <span className="df-badge-pending">
                        <span className="df-badge-pending__dot" />
                        Pending
                      </span>
                      <button type="button" className="df-btn-dots" aria-label="Options">⋮</button>
                      <button type="button" className="df-btn-action df-btn-action--reject">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
                        </svg>
                        <span>Reject</span>
                      </button>
                      <button type="button" className="df-btn-action df-btn-action--approve">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Approve</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Details: Phone Mockup + Analytics */}
                  <div className="df-sub-card__body">
                    <div className="df-phone-mockup">
                      <div className="df-phone-inner">
                        <div className="df-phone-notch" />
                        <div className="df-phone-video-frame">
                          <div className="df-video-overlay">
                            <div className="df-video-spark">
                              <svg width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-2-12l6 4-6 4z" />
                              </svg>
                            </div>
                            <div className="df-video-title">
                              <span className="df-video-stat">534K</span>
                              <span className="df-video-label">VIEWS</span>
                              <span className="df-video-platform">Instagram</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="df-analytics">
                      <div className="df-stat-cards">
                        <div className="df-stat-card">
                          <span className="df-stat-card__val">1.2M</span>
                          <span className="df-stat-card__lbl">Views</span>
                        </div>
                        <div className="df-stat-card">
                          <span className="df-stat-card__val">48.2K</span>
                          <span className="df-stat-card__lbl">Likes</span>
                        </div>
                        <div className="df-stat-card">
                          <span className="df-stat-card__val df-stat-card__val--red">12/100</span>
                          <span className="df-stat-card__lbl">Bot score</span>
                        </div>
                      </div>

                      <div className="df-chart-legend">
                        <span className="df-legend-pill df-legend-pill--blue">
                          ✓ Views <strong>1.2M</strong>
                        </span>
                        <span className="df-legend-pill df-legend-pill--pink">
                          ✓ Likes <strong>48.2K</strong>
                        </span>
                        <span className="df-legend-pill df-legend-pill--orange">
                          ✓ Comments <strong>3.1K</strong>
                        </span>
                        <span className="df-legend-pill df-legend-pill--gray">
                          ○ Shares 1.3K
                        </span>
                      </div>

                      <div className="df-chart-wrapper">
                        <div className="df-chart-y">
                          <span>100k</span>
                          <span>75k</span>
                          <span>50k</span>
                          <span>25k</span>
                          <span>0</span>
                        </div>

                        <div className="df-chart-svg-wrap">
                          <svg className="df-chart-svg" viewBox="0 0 450 160" preserveAspectRatio="none">
                            <line x1="0" y1="10" x2="450" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="0" y1="45" x2="450" y2="45" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="0" y1="80" x2="450" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="0" y1="115" x2="450" y2="115" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="0" y1="150" x2="450" y2="150" stroke="#e2e8f0" strokeWidth="1" />

                            <path
                              d="M 10 145 C 50 142, 100 135, 140 100 C 180 65, 230 40, 270 32 C 310 40, 360 52, 400 62 C 425 68, 440 75, 445 78"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 10 148 C 50 145, 100 130, 140 108 C 180 82, 230 52, 270 42 C 310 55, 360 68, 400 75 C 425 82, 440 90, 445 94"
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 10 153 C 70 150, 140 142, 210 138 C 270 134, 340 135, 400 135 C 420 135, 435 136, 445 137"
                              fill="none"
                              stroke="#ec4899"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>

                          <div className="df-chart-x">
                            <span>Jan 5</span>
                            <span>Jan 11</span>
                            <span>Jan 17</span>
                            <span>Jan 23</span>
                            <span>Jan 30</span>
                            <span>Feb 5</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Submission 2 (Collapsed: Cryptoclipz) ───────────── */}
                <div className="df-sub-card df-sub-card--collapsed">
                  <div className="df-sub-card__header">
                    <div className="df-creator-profile">
                      <div className="df-creator-avatar df-creator-avatar--crypto">
                        <span className="df-avatar-label">Cr</span>
                      </div>
                      <div className="df-creator-info">
                        <span className="df-creator-name">Cryptoclipz</span>
                        <span className="df-creator-meta">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                          </svg>
                          <span>· Whop · 26 Feb &apos;26</span>
                        </span>
                      </div>
                    </div>

                    <div className="df-sub-card__controls">
                      <span className="df-badge-pending">
                        <span className="df-badge-pending__dot" />
                        Pending
                      </span>
                      <button type="button" className="df-btn-dots" aria-label="Options">⋮</button>
                      <button type="button" className="df-btn-action df-btn-action--reject">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
                        </svg>
                        <span>Reject</span>
                      </button>
                      <button type="button" className="df-btn-action df-btn-action--approve">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Approve</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </main>
          )}

          {/* ═════════════════════════════════════════════════════════
              VIEW 2: PAYOUTS VIEW (Active when activeTab === 1)
             ═════════════════════════════════════════════════════════ */}
          {activeTab === 1 && (
            <main className="df-payouts-view">
              
              {/* Top Header with Time Capsule */}
              <div className="df-payouts-topbar">
                <h3 className="df-payouts-title">Payouts</h3>
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

              {/* 6 Summary Stat Cards */}
              <div className="df-payouts-stats-grid">
                {PAYOUT_STATS.map((stat) => (
                  <div key={stat.label} className="df-payout-stat-card">
                    <span className="df-payout-stat-card__val">{stat.value}</span>
                    <span className="df-payout-stat-card__lbl">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Filter Pills Capsule */}
              <div className="df-payouts-filterbar">
                <div className="df-payouts-filter-pills">
                  {payoutFilters.map((pf) => (
                    <button
                      key={pf}
                      type="button"
                      className={`df-payout-pill ${payoutFilter === pf ? "df-payout-pill--active" : ""}`}
                      onClick={() => setPayoutFilter(pf)}
                    >
                      {pf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payouts Table */}
              <div className="df-table-container">
                <table className="df-payouts-table">
                  <thead>
                    <tr>
                      <th className="df-th df-th--check">
                        <span className="df-table-radio" />
                      </th>
                      <th className="df-th df-th--p-creator">Creator</th>
                      <th className="df-th df-th--p-platforms">Platforms</th>
                      <th className="df-th df-th--p-campaign">Campaign</th>
                      <th className="df-th df-th--p-views">Views</th>
                      <th className="df-th df-th--p-est">Est. payout</th>
                      <th className="df-th df-th--p-net">Net</th>
                      <th className="df-th df-th--p-status">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PAYOUTS_LIST.map((row) => (
                      <tr
                        key={row.id}
                        className={`df-payout-tr ${row.isBlocked ? "df-payout-tr--blocked" : ""}`}
                      >
                        <td className="df-td df-td--check">
                          <span className="df-table-radio" />
                        </td>
                        <td className="df-td df-td--p-creator">
                          <div className="df-table-profile">
                            <div
                              className="df-table-avatar df-table-avatar--gradient"
                              style={{ background: row.avatarGradient }}
                            />
                            <span className="df-table-name">{row.name}</span>
                          </div>
                        </td>
                        <td className="df-td df-td--p-platforms">
                          <div className="df-table-platforms">
                            {row.platforms.includes("tiktok") && (
                              <span className="df-platform-icon"><TikTokIconMini /></span>
                            )}
                            {row.platforms.includes("instagram") && (
                              <span className="df-platform-icon"><InstagramIconMini /></span>
                            )}
                            {row.platforms.includes("youtube") && (
                              <span className="df-platform-icon"><YouTubeIconMini /></span>
                            )}
                            {row.platforms.includes("x") && (
                              <span className="df-platform-icon"><XIconMini /></span>
                            )}
                          </div>
                        </td>
                        <td className="df-td df-td--p-campaign">{row.campaign}</td>
                        <td className={`df-td df-td--p-views ${row.isBlocked ? "df-td--blocked-val" : ""}`}>
                          {row.views}
                        </td>
                        <td className={`df-td df-td--p-est ${row.isBlocked ? "df-td--blocked-val" : "df-td--est-green"}`}>
                          {row.estPayout}
                        </td>
                        <td className={`df-td df-td--p-net ${row.isBlocked ? "df-td--blocked-val" : ""}`}>
                          {row.net}
                        </td>
                        <td className="df-td df-td--p-status">
                          {row.status === "Pending" && (
                            <span className="df-payout-badge df-payout-badge--pending">
                              <span className="df-payout-badge__dot df-payout-badge__dot--pending" />
                              Pending
                            </span>
                          )}
                          {row.status === "Paid" && (
                            <span className="df-payout-badge df-payout-badge--paid">
                              <span className="df-payout-badge__icon-paid">✓</span>
                              Paid
                            </span>
                          )}
                          {row.status === "Blocked" && (
                            <span className="df-payout-badge df-payout-badge--blocked">
                              <span className="df-payout-badge__icon-blocked">⊗</span>
                              Blocked
                            </span>
                          )}
                          {row.status === "Upcoming" && (
                            <span className="df-payout-badge df-payout-badge--upcoming">
                              <span className="df-payout-badge__dot df-payout-badge__dot--upcoming" />
                              Upcoming
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </main>
          )}

          {/* ═════════════════════════════════════════════════════════
              VIEW 3: CREATORS TABLE (Active when activeTab === 2)
             ═════════════════════════════════════════════════════════ */}
          {activeTab === 2 && (
            <main className="df-creators-view">
              
              {/* Top Sub-navigation Bar */}
              <div className="df-creators-topbar">
                <div className="df-creators-tabs">
                  {creatorSubTabs.map((st) => (
                    <button
                      key={st}
                      type="button"
                      className={`df-creators-tab ${creatorSubTab === st ? "df-creators-tab--active" : ""}`}
                      onClick={() => setCreatorSubTab(st)}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="df-creators-actions">
                  <button type="button" className="df-sub-link-btn">
                    <span>Scores &amp; matches</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </button>

                  <button type="button" className="df-sub-pill-btn df-sub-pill-btn--outline">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Sub Filter Pills Bar */}
              <div className="df-creators-filterbar">
                <div className="df-creators-filter-pills">
                  {creatorFilters.map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`df-creator-pill ${creatorFilter === f ? "df-creator-pill--active" : ""}`}
                      onClick={() => setCreatorFilter(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Creators Table */}
              <div className="df-table-container">
                <table className="df-creators-table">
                  <thead>
                    <tr>
                      <th className="df-th df-th--num">#</th>
                      <th className="df-th df-th--creator">Creator</th>
                      <th className="df-th df-th--platforms">Platforms</th>
                      <th className="df-th df-th--earned">Earned</th>
                      <th className="df-th df-th--views">Views</th>
                      <th className="df-th df-th--match">Match</th>
                      <th className="df-th df-th--eng-rate">Eng. rate</th>
                      <th className="df-th df-th--eng-score">Eng. score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CREATORS_LIST.map((c) => (
                      <tr key={c.id} className="df-tr">
                        <td className="df-td df-td--num">{c.id}</td>
                        <td className="df-td df-td--creator">
                          <div className="df-table-profile">
                            <div className="df-table-avatar" style={{ backgroundColor: c.avatarBg }}>
                              {c.avatarUrl ? (
                                <img src={c.avatarUrl} alt={c.name} className="df-table-avatar-img" />
                              ) : (
                                c.initials
                              )}
                            </div>
                            <div className="df-table-meta">
                              <span className="df-table-name">{c.name}</span>
                              <span className="df-table-joined">· joined {c.joined}</span>
                            </div>
                          </div>
                        </td>
                        <td className="df-td df-td--platforms">
                          <div className="df-table-platforms">
                            {c.platforms.includes("tiktok") && <span className="df-platform-icon"><TikTokIconMini /></span>}
                            {c.platforms.includes("instagram") && <span className="df-platform-icon"><InstagramIconMini /></span>}
                            {c.platforms.includes("youtube") && <span className="df-platform-icon"><YouTubeIconMini /></span>}
                          </div>
                        </td>
                        <td className="df-td df-td--earned">{c.earned}</td>
                        <td className="df-td df-td--views">{c.views}</td>
                        <td className="df-td df-td--match">
                          <span className="df-match-tag">
                            {c.match}%
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.8">
                              <circle cx="12" cy="12" r="9" />
                            </svg>
                          </span>
                        </td>
                        <td className="df-td df-td--eng-rate">{c.engRate}</td>
                        <td className="df-td df-td--eng-score">
                          <span className="df-score-tag">
                            {c.engScore}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.8">
                              <circle cx="12" cy="12" r="9" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </main>
          )}

        </div>

      </div>
    </section>
  );
}
