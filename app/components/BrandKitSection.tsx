"use client";

import React, { useState } from "react";
import "./BrandKitSection.css";

interface TabItem {
  number: string;
  label: string;
}

const TABS: TabItem[] = [
  { number: "01", label: "Introduction" },
  { number: "02", label: "Tone of Voice" },
  { number: "03", label: "Our Logo" },
  { number: "04", label: "Typography" },
  { number: "05", label: "Colours" },
  { number: "06", label: "Visual Assets" },
  { number: "07", label: "Brand in Use" },
];

const TONE_ITEMS = [
  {
    label: "Proof Over Promise",
    description:
      "We don't inspire without evidence. Every claim we make is grounded in real numbers, real names, and real outcomes. If we can't back it up, we don't say it.",
  },
  {
    label: "Casually Confident",
    description:
      "We don't shout. We don't hedge either. Our voice is the kind of quiet confidence that comes from knowing the product works, so we let results do the heavy lifting while we keep it conversational.",
  },
  {
    label: "Relentlessly Clear",
    description:
      "Short sentences. Obvious next steps. If someone has to read it twice to understand it, we've already lost them. Every word either builds trust or moves them forward.",
  },
];

const INCORRECT_EXAMPLES = [
  { src: "/assets/branding/tab-3/incorrect-1.svg", alt: "Incorrect usage 1: Do not stretch or distort" },
  { src: "/assets/branding/tab-3/incorrect-2.svg", alt: "Incorrect usage 2: Do not rotate" },
  { src: "/assets/branding/tab-3/incorrect-3.svg", alt: "Incorrect usage 3: Do not alter colors" },
  { src: "/assets/branding/tab-3/incorrect-4.svg", alt: "Incorrect usage 4: Do not add drop shadow" },
  { src: "/assets/branding/tab-3/incorrect-5.svg", alt: "Incorrect usage 5: Do not rearrange lockup" },
  { src: "/assets/branding/tab-3/incorrect-6.svg", alt: "Incorrect usage 6: Do not place on low contrast background" },
];

export default function BrandKitSection() {
  const [activeTab, setActiveTab] = useState<string>("01");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 1800);
  };

  const handleDownload = (filePath: string, fileName?: string) => {
    const a = document.createElement("a");
    a.href = filePath;
    a.download = fileName || filePath.split("/").pop() || "asset";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="cr-bk-section" id="brand-kit">
      {/* ── 1. ORANGE HERO BANNER (DESKTOP) ────────────────────────── */}
      <div className="cr-bk-hero-banner">
        <div className="cr-bk-hero-inner">
          <img
            src="/assets/branding/branding-banner.png"
            alt="Brand Guidelines"
            className="cr-bk-banner-img"
          />
          <img
            src="/assets/branding/banner-stars.png"
            alt=""
            aria-hidden="true"
            className="cr-bk-banner-stars"
          />
          <a href="/" className="cr-bk-banner-logo" aria-label="Content Rewards Home">
            <img src="/assets/branding/white-logo.svg" alt="Content Rewards" />
          </a>
        </div>
      </div>

      {/* ── 2. MOBILE HEADER & BANNER ──────────────────────────────── */}
      <div className="cr-bk-mobile-header">
        <div className="cr-bk-mobile-header-bar">
          <a href="/" className="cr-bk-mobile-brand">
            <img
              src="/assets/footer/stars-icon.svg"
              alt=""
              className="cr-bk-mobile-stars-icon"
            />
            <div className="cr-bk-mobile-brand-text">
              <span>Content</span>
              <span>Rewards</span>
            </div>
          </a>
          <button
            type="button"
            className="cr-bk-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle brand guidelines navigation"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="#FF8003"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="cr-bk-mobile-banner-wrap">
          <img
            src="/assets/branding/mobile-banner.png"
            alt="Brand Guidelines"
            className="cr-bk-mobile-banner-img"
          />
        </div>
      </div>

      {/* ── 3. MAIN WORKSPACE WITH 2-COLUMN LAYOUT ─────────────────── */}
      <div className="cr-bk-main-wrap">
        {/* Left Column: Sidebar Navigation */}
        <aside className="cr-bk-sidebar">
          <div className="cr-bk-nav-col">
            <nav className="cr-bk-nav-list" aria-label="Brand Guidelines Sections">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.number;
                return (
                  <button
                    key={tab.number}
                    type="button"
                    className={`cr-bk-nav-item ${isActive ? "is-active" : ""}`}
                    onClick={() => {
                      setActiveTab(tab.number);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="cr-bk-nav-num">{tab.number}</span>
                    <span className="cr-bk-nav-label">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="cr-bk-sidebar-cta">
            <button
              type="button"
              className="cr-bk-btn-primary"
              onClick={() => handleDownload("/assets/branding/logo.svg", "content-rewards-brand-kit.svg")}
            >
              <span>Download all assets</span>
            </button>
          </div>
        </aside>

        {/* Right Column: Tab Content Pane */}
        <div className="cr-bk-content-pane">
          <div className="cr-bk-content-inner">

            {/* ── TAB 01: INTRODUCTION ─────────────────────────────── */}
            {activeTab === "01" && (
              <div className="cr-bk-tab-pane cr-bk-tab-intro">
                <p className="cr-bk-intro-lead">
                  This brand guide is made to keep our brand feels unified across every
                  platform. Use them as a reference to design and communicate voice, look,
                  and feel of our brand.
                </p>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 02: TONE OF VOICE ────────────────────────────── */}
            {activeTab === "02" && (
              <div className="cr-bk-tab-pane cr-bk-tab-tone">
                <h2 className="cr-bk-page-heading">Tone of Voice</h2>

                <div className="cr-bk-tone-list">
                  {TONE_ITEMS.map((item, idx) => (
                    <div key={idx} className="cr-bk-tone-row">
                      <span className="cr-bk-pill-badge">{item.label}</span>
                      <p className="cr-bk-tone-desc">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 03: OUR LOGO ─────────────────────────────────── */}
            {activeTab === "03" && (
              <div className="cr-bk-tab-pane cr-bk-tab-logo">
                <div className="cr-bk-logo-head">
                  <h2 className="cr-bk-page-heading">Our Logo</h2>
                  <button
                    type="button"
                    className="cr-bk-btn-primary cr-bk-btn-compact"
                    onClick={() => handleDownload("/assets/branding/tab-3/primary-logo.svg", "content-rewards-logo.svg")}
                  >
                    <span>Download logo</span>
                  </button>
                </div>

                {/* Primary Logo */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Primary Logo</h3>
                  <p className="cr-bk-sub-desc">
                    The primary lockup is the official logo and should be used in most
                    brand applications. It combines the symbol and the logotype in a fixed
                    relationship.
                  </p>
                  <div className="cr-bk-card cr-bk-card--primary-logo">
                    <button
                      type="button"
                      className="cr-bk-card-dl-btn"
                      onClick={() => handleDownload("/assets/branding/tab-3/primary-logo.svg")}
                      aria-label="Download primary logo"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                    <img
                      src="/assets/branding/tab-3/primary-logo.svg"
                      alt="Content Rewards primary logo"
                      className="cr-bk-primary-logo-img"
                    />
                  </div>
                </div>

                {/* Safe Space */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Safe Space</h3>
                  <div className="cr-bk-safe-space-grid">
                    <div className="cr-bk-safe-col">
                      <span className="cr-bk-pill-outline">Logomark</span>
                      <div className="cr-bk-card cr-bk-card--safe">
                        <img
                          src="/assets/branding/tab-3/safe-space-1.svg"
                          alt="Safe space logomark"
                        />
                      </div>
                    </div>
                    <div className="cr-bk-safe-col">
                      <span className="cr-bk-pill-outline">Symbol</span>
                      <div className="cr-bk-card cr-bk-card--safe">
                        <img
                          src="/assets/branding/tab-3/safe-space-2.svg"
                          alt="Safe space symbol"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="cr-bk-sub-desc mt-3">
                    Maintain the clear space around all logo forms equal to the size of the
                    “X/2” in the logotype. This ensures visibility and prevents visual
                    crowding.
                  </p>
                </div>

                {/* Symbol */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Symbol</h3>
                  <p className="cr-bk-sub-desc">
                    The standalone symbol is reserved for spaces where the full lockup is
                    not practical (favicons, app icons, social avatars, watermarks). If the
                    lockup is being used, the symbol should not appear separately.
                  </p>
                  <div className="cr-bk-symbols-grid">
                    <div className="cr-bk-card cr-bk-symbol-card cr-bk-symbol--orange">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-3/symbol-1.svg")}
                        aria-label="Download symbol orange"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img src="/assets/branding/tab-3/symbol-1.svg" alt="Symbol on orange" />
                    </div>
                    <div className="cr-bk-card cr-bk-symbol-card cr-bk-symbol--white">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-3/symbol-2.svg")}
                        aria-label="Download symbol dark"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img src="/assets/branding/tab-3/symbol-2.svg" alt="Symbol dark" />
                    </div>
                    <div className="cr-bk-card cr-bk-symbol-card cr-bk-symbol--dark">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-3/symbol-3.svg")}
                        aria-label="Download symbol light"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img src="/assets/branding/tab-3/symbol-3.svg" alt="Symbol light" />
                    </div>
                  </div>
                </div>

                {/* Logo Scaling */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Logo Scaling</h3>
                  <p className="cr-bk-sub-desc">
                    Logo must scale proportionally and remain legible across all media.
                    Minimum size for digital is 32 px in height. Never distort, stretch, or
                    modify proportions.
                  </p>
                  <div className="cr-bk-scaling-list">
                    <div className="cr-bk-scaling-row">
                      <span className="cr-bk-scaling-label">32px</span>
                      <div className="cr-bk-scaling-box pt-4">
                        <img
                          src="/assets/branding/tab-3/primary-logo.svg"
                          alt="32px logo"
                          className="h-8 w-auto"
                        />
                      </div>
                    </div>
                    <div className="cr-bk-scaling-row">
                      <span className="cr-bk-scaling-label">64px</span>
                      <div className="cr-bk-scaling-box pt-6">
                        <img
                          src="/assets/branding/tab-3/primary-logo.svg"
                          alt="64px logo"
                          className="h-16 w-auto"
                        />
                      </div>
                    </div>
                    <div className="cr-bk-scaling-row">
                      <span className="cr-bk-scaling-label">128px</span>
                      <div className="cr-bk-scaling-box pt-8">
                        <img
                          src="/assets/branding/tab-3/primary-logo.svg"
                          alt="128px logo"
                          className="h-28 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colour Variations */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Colour Variations</h3>
                  <p className="cr-bk-sub-desc">
                    The two-color lockup variant is designed for situations where
                    background contrast requires more flexibility.
                  </p>
                  <div className="cr-bk-color-var-grid">
                    <div className="cr-bk-card cr-bk-color-var-card cr-bk-bg-dark">
                      <img src="/assets/branding/tab-3/color-var-1.svg" alt="Variation dark" />
                    </div>
                    <div className="cr-bk-card cr-bk-color-var-card cr-bk-bg-white">
                      <img src="/assets/branding/tab-3/color-var-2.svg" alt="Variation light" />
                    </div>
                    <div className="cr-bk-card cr-bk-color-var-card cr-bk-bg-orange">
                      <img src="/assets/branding/tab-3/color-var-3.svg" alt="Variation orange" />
                    </div>
                    <div className="cr-bk-card cr-bk-color-var-card cr-bk-bg-tint">
                      <img src="/assets/branding/tab-3/color-var-4.svg" alt="Variation tint" />
                    </div>
                  </div>
                </div>

                {/* Brand Partnership */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Brand Partnership</h3>
                  <div className="cr-bk-card cr-bk-partnership-card">
                    <img
                      src="/assets/branding/tab-3/brand-partnership.svg"
                      alt="Brand partnership logo lockup"
                      className="cr-bk-partnership-img"
                    />
                  </div>
                  <p className="cr-bk-highlight-note">
                    X = 1/2 height of lockup
                  </p>
                </div>

                {/* Incorrect Usage */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Incorrect Usage</h3>
                  <p className="cr-bk-sub-desc">
                    These examples represent incorrect applications of the logo. Such
                    variations reduce visual clarity and weaken brand consistency.
                  </p>
                  <div className="cr-bk-incorrect-grid">
                    {INCORRECT_EXAMPLES.map((item, idx) => (
                      <div key={idx} className="cr-bk-card cr-bk-incorrect-card">
                        <div className="cr-bk-incorrect-content">
                          <img src={item.src} alt={item.alt} />
                        </div>
                        {/* Red Diagonal Strike Through */}
                        <svg
                          className="cr-bk-incorrect-cross"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2="100"
                            y2="100"
                            stroke="#FF0000"
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 04: TYPOGRAPHY ───────────────────────────────── */}
            {activeTab === "04" && (
              <div className="cr-bk-tab-pane cr-bk-tab-type">
                <h2 className="cr-bk-page-heading">Typography</h2>

                {/* Typeface */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Typeface</h3>
                  <p className="cr-bk-sub-desc">
                    Inter is our primary typeface, used for body copy, UI, and long form
                    content. It ensures high readability and a contemporary feel across all
                    platforms.
                  </p>
                  <div className="cr-bk-card cr-bk-type-card">
                    <div className="cr-bk-type-left">
                      <span className="cr-bk-type-name">Inter</span>
                      <div className="cr-bk-type-glyphs">
                        <span className="cr-bk-type-sample-aa">Aa</span>
                        <div className="cr-bk-type-chars">
                          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                          <p>abcdefghijklmnopqrstuvwxyz</p>
                          <p>1234567890(.,:;?!$&*)</p>
                        </div>
                      </div>
                    </div>
                    <div className="cr-bk-type-right">
                      <div className="cr-bk-type-meta">
                        <span className="cr-bk-type-meta-lbl">Primary Weight:</span>
                        <span className="cr-bk-type-meta-val">Medium</span>
                      </div>
                      <a
                        href="https://fonts.google.com/specimen/Inter"
                        target="_blank"
                        rel="noreferrer"
                        className="cr-bk-type-link"
                      >
                        fonts.google.com/specimen/Inter
                      </a>
                    </div>
                  </div>
                </div>

                {/* Type Hierarchy - Web */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Type Hierarchy - Web</h3>
                  <p className="cr-bk-sub-desc">
                    Follow this hierarchy for most use cases with our primary font Inter.
                  </p>
                  <div className="cr-bk-card cr-bk-hierarchy-card">
                    <div className="cr-bk-hierarchy-left">
                      <h2 className="cr-bk-h2-demo">Get paid to post</h2>
                      <p className="cr-bk-p-demo">
                        Join live campaigns, submit your work, and get paid fast with
                        simple, transparent payouts.
                      </p>
                    </div>
                    <div className="cr-bk-hierarchy-right">
                      <div className="cr-bk-indicator-row">
                        <div className="cr-bk-indicator-line" />
                        <span className="cr-bk-indicator-tag">Semi Bold</span>
                      </div>
                      <div className="cr-bk-indicator-row">
                        <div className="cr-bk-indicator-line" />
                        <span className="cr-bk-indicator-tag">Medium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 05: COLOURS ──────────────────────────────────── */}
            {activeTab === "05" && (
              <div className="cr-bk-tab-pane cr-bk-tab-colours">
                <h2 className="cr-bk-page-heading">Colours</h2>

                {/* Primary Colour */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Primary Colour</h3>
                  <p className="cr-bk-sub-desc">
                    Our primary palette defines our core identity. These colors should be
                    used across all product experiences.
                  </p>
                  <div className="cr-bk-swatches-grid">
                    {/* Orange Swatch */}
                    <div className="cr-bk-swatch-card cr-bk-swatch--orange">
                      <button
                        type="button"
                        className="cr-bk-copy-btn"
                        onClick={() => copyToClipboard("FF8003")}
                        title="Copy hex code"
                      >
                        {copiedHex === "FF8003" ? "✓" : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                      <div className="cr-bk-swatch-details">
                        <div className="cr-bk-swatch-line">
                          <span>Hex</span>
                          <span>FF8003</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>HSL</span>
                          <span>hsla(30, 100%, 51%, 1)</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>RGB</span>
                          <span>rgba(255, 128, 3, 1)</span>
                        </div>
                      </div>
                    </div>

                    {/* White Swatch */}
                    <div className="cr-bk-swatch-card cr-bk-swatch--white">
                      <button
                        type="button"
                        className="cr-bk-copy-btn"
                        onClick={() => copyToClipboard("FFFFFF")}
                        title="Copy hex code"
                      >
                        {copiedHex === "FFFFFF" ? "✓" : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                      <div className="cr-bk-swatch-details text-[#252525]">
                        <div className="cr-bk-swatch-line">
                          <span>Hex</span>
                          <span>FFFFFF</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>HSL</span>
                          <span>hsla(0, 0%, 100%, 1)</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>RGB</span>
                          <span>rgba(255, 255, 255, 1)</span>
                        </div>
                      </div>
                    </div>

                    {/* Charcoal Swatch */}
                    <div className="cr-bk-swatch-card cr-bk-swatch--dark">
                      <button
                        type="button"
                        className="cr-bk-copy-btn"
                        onClick={() => copyToClipboard("252525")}
                        title="Copy hex code"
                      >
                        {copiedHex === "252525" ? "✓" : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                      <div className="cr-bk-swatch-details">
                        <div className="cr-bk-swatch-line">
                          <span>Hex</span>
                          <span>252525</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>HSL</span>
                          <span>hsla(0, 0%, 15%, 1)</span>
                        </div>
                        <div className="cr-bk-swatch-line">
                          <span>RGB</span>
                          <span>rgba(37, 37, 37, 1)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Gradient</h3>
                  <p className="cr-bk-sub-desc">
                    This gradient is the official primary gradient for the project. Apply it
                    as the default gradient in all designs, components, hero sections, cards,
                    backgrounds, etc. where a gradient is required.
                  </p>
                  <div className="cr-bk-card cr-bk-gradient-card">
                    <div className="cr-bk-grad-top">
                      <span className="cr-bk-grad-tag">Hex FDD0A9</span>
                    </div>
                    <div className="cr-bk-grad-bottom">
                      <span className="cr-bk-grad-tag">Hex FF8003</span>
                    </div>
                  </div>
                </div>

                {/* Primary Shades */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Primary Shades</h3>
                  <p className="cr-bk-sub-desc">
                    We have two different shades for the from our primary colours, which can
                    be used across different mediums. Use the specified value to ensure
                    consistency.
                  </p>
                  <div className="cr-bk-shades-grid">
                    {/* Orange Shades Column */}
                    <div className="cr-bk-shade-col">
                      <div className="cr-bk-shade-header bg-[#FF8003]">
                        <span>Hex</span>
                        <span>FF8003</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#FF8003] opacity-70">
                        <span>70%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#FF8003] opacity-50">
                        <span>50%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#FF8003] opacity-30">
                        <span>30%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#FF8003] opacity-10 text-[#252525]">
                        <span>10%</span>
                      </div>
                    </div>

                    {/* Charcoal Shades Column */}
                    <div className="cr-bk-shade-col">
                      <div className="cr-bk-shade-header bg-[#252525]">
                        <span>Hex</span>
                        <span>Medium</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#252525] opacity-70">
                        <span>70%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#252525] opacity-50">
                        <span>50%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#252525] opacity-30">
                        <span>30%</span>
                      </div>
                      <div className="cr-bk-shade-step bg-[#252525] opacity-10 text-[#252525]">
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 06: VISUAL ASSETS ────────────────────────────── */}
            {activeTab === "06" && (
              <div className="cr-bk-tab-pane cr-bk-tab-visuals">
                <h2 className="cr-bk-page-heading">Visual Assets</h2>

                {/* Illustrations - Lines */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Illustrations - Lines</h3>
                  <p className="cr-bk-sub-desc">
                    Structural illustrations are used to add depth and visual texture
                    without competing for attention. Precise, refined, and minimal, they
                    support content without overpowering it, working best in backgrounds.
                  </p>
                  <div className="cr-bk-lines-grid">
                    <div className="cr-bk-card cr-bk-line-card">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-6/ill-1.svg")}
                        aria-label="Download line illustration 1"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img
                        src="/assets/branding/tab-6/ill-1.svg"
                        alt="Line illustration 1"
                        className="cr-bk-line-img"
                      />
                    </div>
                    <div className="cr-bk-card cr-bk-line-card">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-6/ill-2.svg")}
                        aria-label="Download line illustration 2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img
                        src="/assets/branding/tab-6/ill-2.svg"
                        alt="Line illustration 2"
                        className="cr-bk-line-img"
                      />
                    </div>
                  </div>
                </div>

                {/* 3d & 2d Illustrations */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">3d & 2d Illustrations</h3>
                  <p className="cr-bk-sub-desc">
                    3d and 2d type illustrations bring the Content Rewards experience to
                    life visually. They're expressive, energetic, and rooted in the core
                    brand palette, used across campaigns, onboarding, and feature callouts
                    to make complex ideas feel immediate and human.
                  </p>
                  <div className="cr-bk-3d-grid">
                    {/* 2D Illustration */}
                    <div className="cr-bk-card cr-bk-3d-card cr-bk-3d-tall">
                      <button
                        type="button"
                        className="cr-bk-card-dl-btn"
                        onClick={() => handleDownload("/assets/branding/tab-6/2d-ill.webp")}
                        aria-label="Download 2D illustration"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      <img
                        src="/assets/branding/tab-6/2d-ill.webp"
                        alt="2D illustration"
                        className="cr-bk-2d-img"
                      />
                    </div>

                    <div className="cr-bk-3d-sub-col">
                      <div className="cr-bk-card cr-bk-3d-card cr-bk-3d-short">
                        <button
                          type="button"
                          className="cr-bk-card-dl-btn"
                          onClick={() => handleDownload("/assets/branding/tab-6/3d-1.png")}
                          aria-label="Download 3D ribbon 1"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                        <img
                          src="/assets/branding/tab-6/3d-1.png"
                          alt="3D ribbon 1"
                          className="cr-bk-3d-img"
                        />
                      </div>
                      <div className="cr-bk-card cr-bk-3d-card cr-bk-3d-short">
                        <button
                          type="button"
                          className="cr-bk-card-dl-btn"
                          onClick={() => handleDownload("/assets/branding/tab-6/3d-2.png")}
                          aria-label="Download 3D ribbon 2"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                        <img
                          src="/assets/branding/tab-6/3d-2.png"
                          alt="3D ribbon 2"
                          className="cr-bk-3d-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 07: BRAND IN USE ─────────────────────────────── */}
            {activeTab === "07" && (
              <div className="cr-bk-tab-pane cr-bk-tab-in-use">
                <h2 className="cr-bk-page-heading">Brand in Use</h2>
                <p className="cr-bk-sub-desc">Brand in use examples coming soon.</p>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Content Rewards Inc. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Ambient background watermark at bottom */}
      <div
        aria-hidden="true"
        className="cr-bk-bottom-watermark"
        style={{ backgroundImage: "url('/assets/branding/branding-bg.png')" }}
      />
    </section>
  );
}
