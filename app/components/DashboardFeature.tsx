"use client";

import React, { useState } from "react";
import "./DashboardFeature.css";
import "./DashboardMockup.css";
import LazyVideo from "./LazyVideo";

/* This section shows what a brand actually gets today (a delivery report) and how views are
   verified. It deliberately contains no invented figures: Pomera has no delivery data yet, and the
   self-serve brand dashboard is roadmap, so it is labelled as such. */

const TabReportIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const TabVerifyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TabRoadmapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 9h20" />
  </svg>
);

const REPORT_ROWS = [
  { src: "/videos/reel-bike.mp4", link: 64 },
  { src: "/videos/reel-dog.mp4", link: 52 },
  { src: "/videos/reel-snow.mp4", link: 70 },
];

const VERIFY_STEPS = [
  { n: "01", t: "A tracked link on every post", d: "Each post gets its own link, so its views can be traced back to it." },
  { n: "02", t: "Analytics checked", d: "We check the platform analytics the publisher submits against the post and its link." },
  { n: "03", t: "Spot-checked by hand", d: "We review engagement ratios, view velocity and account history, and spot-check posts manually." },
  { n: "04", t: "Counted on day 7", d: "Views are counted 7 days after posting. Views that don’t hold up are not billed." },
];

export default function DashboardFeature() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: "Delivery report", icon: <TabReportIcon /> },
    { id: 1, label: "How we verify", icon: <TabVerifyIcon /> },
    { id: 2, label: "Brand dashboard", icon: <TabRoadmapIcon /> },
  ];

  return (
    <section className="df-section" id="dashboard" aria-label="Campaign report">
      <div className="df-container">
        <h2 className="df-heading">
          A report you can check.<br />
          Verified views before billing.
        </h2>
        <p className="dfx-sub" style={{ textAlign: "center", marginTop: 12 }}>
          A preview of the report format. No live campaigns yet, so no figures are shown.
        </p>

        <div className="df-tabs-wrapper">
          <div className="df-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`df-tab ${activeTab === tab.id ? "df-tab--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="df-tab__icon-bubble">{tab.icon}</span>
                <span className="df-tab__label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="df-tabs-track">
            <div
              className="df-tabs-indicator"
              style={{ left: `${(activeTab * 100) / 3}%`, width: `${100 / 3}%` }}
            />
          </div>
        </div>

        <div className="dfx-stage" key={activeTab}>
          {/* ── 1. Delivery report ─────────────────────────────────── */}
          {activeTab === 0 && (
            <div className="dfx-stack">
              <div className="dfx-bar">
                <div>
                  <h3 className="dfx-title">Campaign delivery report</h3>
                  <p className="dfx-sub">Every post link, the verified views per post and the achieved rate.</p>
                </div>
                <span className="dfx-chip dfx-chip--lime">Sample layout</span>
              </div>

              <div className="dfx-card dfr">
                <div className="dfr__head">
                  <span>Post</span>
                  <span>Post link</span>
                  <span>Verified views</span>
                  <span>Achieved rate</span>
                </div>
                {REPORT_ROWS.map((r) => (
                  <div key={r.src} className="dfr__row" aria-hidden="true">
                    <span className="dfr__thumb"><LazyVideo src={r.src} /></span>
                    <i className="dfr__sk" style={{ width: `${r.link}%` }} />
                    <i className="dfr__sk" />
                    <i className="dfr__sk dfr__sk--ink" />
                  </div>
                ))}
                <p className="dfr__note">Bars stand in for values. You are billed on verified views only.</p>
              </div>
            </div>
          )}

          {/* ── 2. How we verify ───────────────────────────────────── */}
          {activeTab === 1 && (
            <div className="dfx-stack">
              <div className="dfx-bar">
                <div>
                  <h3 className="dfx-title">How views are verified</h3>
                  <p className="dfx-sub">What we do today, exactly.</p>
                </div>
              </div>

              <div className="dfv-grid">
                {VERIFY_STEPS.map((s) => (
                  <div key={s.n} className="dfx-card dfv-card">
                    <span className="dfv-card__n pm-num">{s.n}</span>
                    <b>{s.t}</b>
                    <p>{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="dfx-sub dfv-roadmap">Automated verification is on the roadmap. It is not part of the service today.</p>
            </div>
          )}

          {/* ── 3. Brand dashboard (roadmap) ───────────────────────── */}
          {activeTab === 2 && (
            <div className="dfx-stack">
              <div className="dfx-bar">
                <div>
                  <h3 className="dfx-title">Self-serve brand dashboard</h3>
                  <p className="dfx-sub">Where we are headed, not where we are.</p>
                </div>
                <span className="dfx-chip">Roadmap</span>
              </div>

              <div className="dfx-card dfv-roadmap-card">
                <p>
                  Today Pomera runs campaigns as a managed service. We send you the delivery report, with every post link, verified views and achieved rate. A dashboard follows once it is clear the manual process works.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
