"use client";

import React, { useState } from "react";
import "./PricingSection.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "What does Content Rewards cost?",
    answer:
      "A 10% platform fee on every campaign type, only charged on delivered work. On per post and retainer campaigns of $5,000 or more, creators pay no fee of their own.",
  },
  {
    question: "Are there any other fees?",
    answer:
      "There is no monthly cost. You are never billed for having an account, only the 10% on campaigns you actually run, and that is the same across CPM, per post and retainer.",
  },
  {
    question: "Is there a minimum campaign budget?",
    answer:
      "Campaigns start at $1,000. There is no maximum, and you can top up a campaign while it is scheduled, active or paused.",
  },
  {
    question: "Do I need a subscription or contract?",
    answer:
      "No. There is no monthly cost and no minimum term. You pay the platform fee only on campaigns you actually run.",
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"businesses" | "creators">("businesses");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="cr-pricing-wrapper" id="pricing">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="cr-pricing-hero">
        {/* Background Gradients & Ambient Graphics */}
        <div aria-hidden="true" className="cr-pricing-bg-layer">
          <div className="cr-pricing-radial-glow" />
          <img
            src="/assets/creators/hero-v2/texture.svg"
            alt=""
            className="cr-pricing-texture"
          />
        </div>

        {/* Ambient Gradient Glows */}
        <div aria-hidden="true" className="cr-pricing-hero-glow cr-pricing-hero-glow--top">
          <img
            src="/assets/creators/hero-v2/hero-gradient.svg"
            alt=""
            width="1920"
            height="1287"
            className="cr-pricing-glow-img opacity-20"
          />
        </div>
        <div aria-hidden="true" className="cr-pricing-hero-glow cr-pricing-hero-glow--mid">
          <img
            src="/assets/creators/hero-v2/hero-gradient.svg"
            alt=""
            width="1920"
            height="1287"
            className="cr-pricing-glow-img opacity-90"
          />
        </div>
        <div aria-hidden="true" className="cr-pricing-bottom-radial" />
        <div aria-hidden="true" className="cr-pricing-bottom-fade">
          <img
            src="/assets/creators/hero-v2/hero-bottom-fade.svg"
            alt=""
            width="3375"
            height="1160"
            className="cr-pricing-fade-img"
          />
        </div>

        {/* Hero Content */}
        <div className="cr-pricing-hero-content">
          <h1 className="cr-pricing-heading">
            Simple pricing,<br />no subscriptions.
          </h1>
          <p className="cr-pricing-subtitle">
            No subscriptions, setup fees, seat fees or listing fees.
          </p>

          {/* Action Buttons Row */}
          <div className="cr-pricing-hero-actions">
            {activeTab === "businesses" ? (
              <a href="/launch-a-campaign" className="cr-pricing-btn-primary">
                <span className="cr-pricing-btn-highlight" aria-hidden="true" />
                <span className="cr-pricing-btn-text">Launch a campaign</span>
              </a>
            ) : (
              <>
                <a href="/signup" className="cr-pricing-btn-primary">
                  <span className="cr-pricing-btn-highlight" aria-hidden="true" />
                  <span className="cr-pricing-btn-text">Join as a creator</span>
                </a>
                <a href="/creator" className="cr-pricing-btn-secondary">
                  Browse campaigns
                </a>
              </>
            )}
          </div>

          {/* Segmented Tab Switcher */}
          <div className="cr-pricing-tabs-wrap">
            <div className="cr-pricing-tabs-row">
              <button
                type="button"
                className={`cr-pricing-tab-btn ${activeTab === "businesses" ? "is-active" : ""}`}
                onClick={() => setActiveTab("businesses")}
              >
                For Businesses
              </button>
              <div className="cr-pricing-tab-divider" />
              <button
                type="button"
                className={`cr-pricing-tab-btn ${activeTab === "creators" ? "is-active" : ""}`}
                onClick={() => setActiveTab("creators")}
              >
                For Creators
              </button>
            </div>
            <div className="cr-pricing-tabs-track">
              <div
                className="cr-pricing-tabs-thumb"
                style={{
                  transform: activeTab === "businesses" ? "translateX(0%)" : "translateX(100%)",
                }}
              />
            </div>
          </div>

          {/* Serrated Ticket Card */}
          <div className="cr-pricing-ticket-container">
            <div className="cr-pricing-ticket-box">
              <img
                src="/assets/creators/hero-v2/earn-ticket.svg"
                alt=""
                aria-hidden="true"
                className="cr-pricing-ticket-svg"
              />
              <div className="cr-pricing-ticket-body">
                {activeTab === "businesses" ? (
                  <>
                    <p className="cr-pricing-ticket-title">10% platform fee</p>
                    <p className="cr-pricing-ticket-desc">
                      Charged only on work you approve.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="cr-pricing-ticket-title">Keep up to 100%</p>
                    <p className="cr-pricing-ticket-desc">No withdrawal fees.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Trusted By Industry Leaders */}
          <div className="cr-pricing-trusted-section">
            <div aria-hidden="true" className="cr-pricing-trusted-mobile-bg" />
            <p className="cr-pricing-trusted-label">Trusted by industry leaders</p>
            <div className="cr-pricing-brands-row">
              <div className="cr-pricing-brand-item cr-pricing-brand--activision">
                <img
                  src="/assets/creators/hero-v2/brand-activision.svg"
                  alt="Activision"
                  width="108"
                  height="108"
                />
              </div>
              <div className="cr-pricing-brand-item cr-pricing-brand--capcut">
                <img
                  src="/assets/creators/hero-v2/brand-capcut.svg"
                  alt="CapCut"
                  width="55"
                  height="42"
                />
              </div>
              <div className="cr-pricing-brand-item cr-pricing-brand--f1">
                <img
                  src="/assets/creators/hero-v2/brand-f1.svg"
                  alt="F1"
                  width="80"
                  height="80"
                />
              </div>
              <div className="cr-pricing-brand-item cr-pricing-brand--netflix">
                <img
                  src="/assets/creators/hero-v2/brand-netflix.svg"
                  alt="Netflix"
                  width="124"
                  height="34"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Separator */}
      <div className="cr-pricing-hr-wrap">
        <div className="cr-pricing-hr" />
      </div>

      {/* ── 2. GET VERIFIED AND SAVE (COMPARISON TABLE) ───────────── */}
      <section className="cr-pricing-verified-section">
        <div className="cr-pricing-container">
          <div className="cr-pricing-verified-header">
            <h2 className="cr-pricing-section-title">Get verified and save</h2>
          </div>

          <div className="cr-pricing-table-wrapper">
            <div className="cr-pricing-table">
              {/* Glowing Background Pillar for Verified (Column 3) */}
              <div className="cr-pricing-verified-glow-col" aria-hidden="true">
                <div className="cr-pricing-verified-glow-border" />
                <div className="cr-pricing-verified-glow-inner" />
              </div>

              {/* Row 1: Header */}
              <div className="cr-pricing-cell cr-pricing-c1-r1" />
              <div className="cr-pricing-cell cr-pricing-c2-r1">
                <span className="cr-pricing-header-standard">Standard</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c3-r1">
                {/* Verified Golden Badge Icon */}
                <span className="cr-pricing-verified-badge" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <title>Verified</title>
                    <path
                      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                      fill="#fff"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="#F5820F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cr-pricing-header-verified">Verified</span>
              </div>

              {/* Row 2: Platform fee */}
              <div className="cr-pricing-cell cr-pricing-c1-r2">
                <span>Platform fee</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c2-r2">
                <span>10%</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c3-r2">
                <span>8%</span>
              </div>

              {/* Row 3: Minimum campaign budget */}
              <div className="cr-pricing-cell cr-pricing-c1-r3">
                <span>Minimum campaign budget</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c2-r3">
                <span>$1000</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c3-r3">
                <span>$1000</span>
              </div>

              {/* Row 4: Subscription */}
              <div className="cr-pricing-cell cr-pricing-c1-r4">
                <span>Subscription</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c2-r4">
                <span>None</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c3-r4">
                <span>None</span>
              </div>

              {/* Row 5: Any other fees for you */}
              <div className="cr-pricing-cell cr-pricing-c1-r5">
                <span>Any other fees for you</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c2-r5">
                <span>None</span>
              </div>
              <div className="cr-pricing-cell cr-pricing-c3-r5">
                <span>None</span>
              </div>
            </div>

            {/* Bottom Connector Bracket Lines & CTA */}
            <div className="cr-pricing-arrows-cta-wrap">
              <img
                src="/assets/pricing/arrow-left.svg"
                alt=""
                aria-hidden="true"
                className="cr-pricing-arrow-left"
              />
              <img
                src="/assets/pricing/arrow-right.svg"
                alt=""
                aria-hidden="true"
                className="cr-pricing-arrow-right"
              />
              <a href="/book-a-demo" className="cr-pricing-btn-primary cr-pricing-btn-verified">
                <span className="cr-pricing-btn-highlight" aria-hidden="true" />
                <span className="cr-pricing-btn-text">Get verified</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. READY TO LAUNCH YOUR NEXT CAMPAIGN? (BANNER & BRAND WALL) */}
      <section className="cr-pricing-cta-section">
        <div className="cr-pricing-container">
          <div className="cr-pricing-cta-card">
            {/* Ambient Multi-Stop Gradient Blur */}
            <div className="cr-pricing-cta-blur" aria-hidden="true" />

            <div className="cr-pricing-cta-inner">
              <h2 className="cr-pricing-cta-heading">
                Ready to launch your next campaign?
              </h2>

              <div className="cr-pricing-stats-grid">
                <div className="cr-pricing-stat-item">
                  <img
                    src="/assets/cta/icon-agencies.svg"
                    alt=""
                    width="22"
                    height="22"
                    className="cr-pricing-stat-icon"
                  />
                  <span>200 agencies</span>
                </div>
                <div className="cr-pricing-stat-item">
                  <img
                    src="/assets/cta/icon-creators.svg"
                    alt=""
                    width="22"
                    height="22"
                    className="cr-pricing-stat-icon"
                  />
                  <span>1M+ creators</span>
                </div>
                <div className="cr-pricing-stat-item">
                  <img
                    src="/assets/cta/icon-support.svg"
                    alt=""
                    width="22"
                    height="22"
                    className="cr-pricing-stat-icon"
                  />
                  <span>24/7 support</span>
                </div>
                <div className="cr-pricing-stat-item">
                  <img
                    src="/assets/cta/icon-analytics.svg"
                    alt=""
                    width="22"
                    height="22"
                    className="cr-pricing-stat-icon"
                  />
                  <span>Real-time campaign analytics</span>
                </div>
              </div>

              <div className="cr-pricing-cta-btn-wrap">
                <a href="/launch-a-campaign" className="cr-pricing-btn-primary cr-pricing-btn-cta">
                  <span className="cr-pricing-btn-highlight" aria-hidden="true" />
                  <span className="cr-pricing-btn-text">Launch a campaign</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FAQS ACCORDION SECTION ─────────────────────────────── */}
      <section className="cr-pricing-faq-section" id="faq">
        <div className="cr-pricing-container">
          <div className="cr-pricing-faq-wrapper">
            <div className="cr-pricing-faq-head">
              <div className="cr-pricing-faq-badge">
                <span>FAQS</span>
              </div>
              <h2 className="cr-pricing-section-title">Before you ask...</h2>
            </div>

            <div className="cr-pricing-faq-list">
              {FAQ_DATA.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`cr-pricing-faq-card ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="cr-pricing-faq-trigger"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-ans-${index}`}
                    >
                      <h3 className="cr-pricing-faq-question">{item.question}</h3>
                      <div className={`cr-pricing-faq-chevron ${isOpen ? "is-open" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M17.2929 8.79289C17.6834 8.40237 18.3164 8.40237 18.707 8.79289C19.0975 9.18342 19.0975 9.81643 18.707 10.207L12.707 16.207C12.3164 16.5975 11.6834 16.5975 11.2929 16.207L5.29289 10.207C4.90237 9.81643 4.90237 9.18342 5.29289 8.79289C5.68342 8.40237 6.31643 8.40237 6.70696 8.79289L11.9999 14.0859L17.2929 8.79289Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      id={`faq-ans-${index}`}
                      className="cr-pricing-faq-collapsible"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="cr-pricing-faq-collapsible-inner">
                        <div className="cr-pricing-faq-answer-wrap">
                          <p className="cr-pricing-faq-answer">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
