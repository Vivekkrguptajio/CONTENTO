"use client";

import React, { useState } from "react";
import { PomeraMark } from "./pomeraMark";
import "./PublishersSection.css";
import { CONTACT_EMAIL } from "../lib/contact";
import "./BrandKitSection.css";

/* Set this to your form-handler URL (Google Apps Script, Formspree, your API…). Empty = form shows a WhatsApp fallback. */
const FORM_ENDPOINT = "";

const CONTACT_NEXT = [
  "We read every message ourselves. No bots.",
  "You get a reply by email within one working day.",
  "For press and partnerships, we set up a quick call.",
];

interface TabItem {
  number: string;
  label: string;
}

const TABS: TabItem[] = [
  { number: "01", label: "Introduction" },
  { number: "02", label: "Voice" },
  { number: "03", label: "Our Logo" },
  { number: "04", label: "Typography" },
  { number: "05", label: "Colours" },
];

const VOICE_ITEMS = [
  { label: "Numbers first", description: "Numbers and money first, adjectives last. A rate, a count or a date beats a big claim." },
  { label: "Short and active", description: "Short sentences. Active voice. Second person. Say what happens." },
  { label: "Plain over clever", description: "We sell accountability. Clever copy reads as marketing; plain copy reads as true." },
  { label: "Specific over general", description: "A named figure, a real step or a clear date stops the scroll. “Great potential” does not." },
  { label: "Calm, not loud", description: "Our buyer is anxious, not excited. Hype is what every ad vendor already sounds like." },
  { label: "CTAs say what happens", description: "“Launch your first campaign”, “Join the founding cohort”. Never “Submit” or “Learn more”." },
  { label: "Honest by default", description: "No invented numbers. If it isn’t real, it is clearly labelled an example or a projection, or it doesn’t ship." },
];

const AVOID_WORDS = ["guaranteed views", "go viral", "revolutionary", "game-changing", "disruptive", "seamless", "effortless", "unlock", "supercharge", "India’s first"];

const INCORRECT_LOGO: { cap: string; bg?: string; style: React.CSSProperties }[] = [
  { cap: "Don’t stretch or squash", style: { transform: "scaleX(1.45)" } },
  { cap: "Don’t rotate", style: { transform: "rotate(-14deg)" } },
  { cap: "Don’t recolour", style: { filter: "invert(42%) sepia(95%) saturate(3000%) hue-rotate(190deg)" } },
  { cap: "Don’t add shadows or effects", style: { filter: "drop-shadow(6px 8px 3px rgba(0,0,0,0.45))" } },
  { cap: "Don’t use low-contrast backgrounds", bg: "#3D3E39", style: {} },
  { cap: "Don’t crop or crowd it", style: { marginLeft: "-38%" } },
];

export default function BrandKitSection() {
  const [activeTab, setActiveTab] = useState<string>("01");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus("unconnected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
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
      {/* ── 1. BANNER ─────────────────────────────────────────── */}
      <div className="cr-bk-banner">
        <div className="cr-bk-banner__mark" aria-hidden="true"><PomeraMark size={340} fg="#C8F135" opacity={1} /></div>
        <div className="cr-bk-banner__inner">
          <p className="cr-bk-banner__kicker">Pomera · alternative ad platform</p>
          <h1 className="cr-bk-banner__title">Brand Guidelines</h1>
          <p className="cr-bk-banner__sub">How Pomera looks and sounds. Know your number before you spend.</p>
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
              onClick={() => handleDownload("/assets/logo/pomera_logo_light.png", "pomera-logo.png")}
            >
              <span>Download logo</span>
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
                  This guide keeps Pomera consistent everywhere it appears. Use it as the reference for how we look and sound.
                </p>

                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">The locked set</h3>
                  <div className="cr-bk-tone-list">
                    <div className="cr-bk-tone-row"><span className="cr-bk-pill-badge">Name</span><p className="cr-bk-tone-desc">Pomera. Capital P in text, never all-caps, never abbreviated.</p></div>
                    <div className="cr-bk-tone-row"><span className="cr-bk-pill-badge">Descriptor</span><p className="cr-bk-tone-desc">alternative ad platform</p></div>
                    <div className="cr-bk-tone-row"><span className="cr-bk-pill-badge">Tagline</span><p className="cr-bk-tone-desc">Know your number before you spend.</p></div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Pomera Technologies Pvt. Ltd. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Pomera Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 02: VOICE ────────────────────────────────────── */}
            {activeTab === "02" && (
              <div className="cr-bk-tab-pane cr-bk-tab-tone">
                <h2 className="cr-bk-page-heading">Voice</h2>

                <div className="cr-bk-tone-list">
                  {VOICE_ITEMS.map((item) => (
                    <div key={item.label} className="cr-bk-tone-row">
                      <span className="cr-bk-pill-badge">{item.label}</span>
                      <p className="cr-bk-tone-desc">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Words we avoid</h3>
                  <p className="cr-bk-sub-desc">
                    We guarantee price and billing, never outcome. These words promise more than we can keep, or sound like every other ad vendor.
                  </p>
                  <div className="cr-bk-avoid-list">
                    {AVOID_WORDS.map((w) => (
                      <span key={w} className="cr-bk-pill-outline">{w}</span>
                    ))}
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Pomera Technologies Pvt. Ltd. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Pomera Brand Guidelines</span>
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
                    onClick={() => handleDownload("/assets/logo/pomera_logo_light.png", "pomera-logo.png")}
                  >
                    <span>Download logo</span>
                  </button>
                </div>

                {/* Primary Logo */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Primary logo</h3>
                  <p className="cr-bk-sub-desc">
                    The Beam, the lowercase pomera wordmark and the descriptor, locked together. Use it wherever there is room. Always use the supplied files and never redraw it.
                  </p>
                  <div className="cr-bk-logo-pair">
                    <div className="cr-bk-card cr-bk-logo-card">
                      <button type="button" className="cr-bk-card-dl-btn" onClick={() => handleDownload("/assets/logo/pomera_logo_light.png", "pomera-logo-ink.png")} aria-label="Download logo for light backgrounds">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      </button>
                      <img src="/assets/logo/pomera_logo_light.png" alt="Pomera logo for light backgrounds" className="cr-bk-logo-art" />
                      <span className="cr-bk-logo-cap">On white and paper</span>
                    </div>
                    <div className="cr-bk-card cr-bk-logo-card" style={{ backgroundColor: "#111210" }}>
                      <button type="button" className="cr-bk-card-dl-btn" onClick={() => handleDownload("/assets/logo/pomera_logo_white.png", "pomera-logo-white.png")} aria-label="Download logo for dark backgrounds">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      </button>
                      <img src="/assets/logo/pomera_logo_white.png" alt="Pomera logo for dark backgrounds" className="cr-bk-logo-art" />
                      <span className="cr-bk-logo-cap cr-bk-logo-cap--light">On ink</span>
                    </div>
                  </div>
                </div>

                {/* Clear space */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Clear space</h3>
                  <div className="cr-bk-card cr-bk-clear-card">
                    <div className="cr-bk-clear-box">
                      <img src="/assets/logo/pomera_logo_light.png" alt="Pomera logo with clear space" className="cr-bk-clear-art" />
                    </div>
                  </div>
                  <p className="cr-bk-sub-desc mt-3">
                    Keep generous clear space on every side. Nothing enters the dashed area: no text, edges or other graphics.
                  </p>
                </div>

                {/* Symbol */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">The Beam</h3>
                  <p className="cr-bk-sub-desc">
                    The Beam on its own is for small spaces such as favicons, app icons and avatars. When the full logo is shown, the Beam does not appear separately.
                  </p>
                  <div className="cr-bk-symbols-grid">
                    {[["paper", "#FAFAF7"], ["white", "#ffffff"], ["dark", "#111210"]].map(([k, bg]) => (
                      <div key={k} className="cr-bk-card cr-bk-symbol-card" style={{ backgroundColor: bg }}>
                        <button type="button" className="cr-bk-card-dl-btn" onClick={() => handleDownload("/assets/logo/pomera-icon.svg", "pomera-beam.svg")} aria-label="Download the Beam">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </button>
                        <img src="/assets/logo/pomera-icon.svg" alt="Pomera Beam" style={{ width: 96, height: 96 }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scaling */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Scaling</h3>
                  <p className="cr-bk-sub-desc">Scale the logo proportionally. Never distort, stretch or modify its proportions.</p>
                  <div className="cr-bk-scaling-list">
                    {[["32px", "h-8"], ["64px", "h-16"], ["128px", "h-28"]].map(([label, h]) => (
                      <div key={label} className="cr-bk-scaling-row">
                        <span className="cr-bk-scaling-label">{label}</span>
                        <div className="cr-bk-scaling-box pt-4">
                          <img src="/assets/logo/pomera_logo_light.png" alt={`${label} logo`} className={`${h} w-auto`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backgrounds */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Backgrounds</h3>
                  <p className="cr-bk-sub-desc">Ink logo on white, paper and lime tint. White logo on ink.</p>
                  <div className="cr-bk-color-var-grid">
                    {[
                      ["#ffffff", "pomera_logo_light.png"],
                      ["#FAFAF7", "pomera_logo_light.png"],
                      ["#111210", "pomera_logo_white.png"],
                      ["#F2FBD6", "pomera_logo_light.png"],
                    ].map(([bg, src]) => (
                      <div key={bg} className="cr-bk-card cr-bk-color-var-card" style={{ backgroundColor: bg }}>
                        <img src={`/assets/logo/${src}`} alt="Logo on background" className="cr-bk-logo-art cr-bk-logo-art--sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Incorrect Usage */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Incorrect usage</h3>
                  <p className="cr-bk-sub-desc">
                    These applications weaken the logo and the brand. Avoid them.
                  </p>
                  <div className="cr-bk-incorrect-grid">
                    {INCORRECT_LOGO.map((item) => (
                      <div key={item.cap} className="cr-bk-card cr-bk-incorrect-card" style={item.bg ? { backgroundColor: item.bg } : undefined}>
                        <div className="cr-bk-incorrect-content" style={{ overflow: "hidden" }}>
                          <img src="/assets/logo/pomera_logo_light.png" alt={item.cap} className="cr-bk-logo-art cr-bk-logo-art--sm" style={item.style} />
                        </div>
                        <svg className="cr-bk-incorrect-cross" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <line x1="0" y1="0" x2="100" y2="100" stroke="#FF0000" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                        </svg>
                        <span className="cr-bk-incorrect-cap">{item.cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Pomera Technologies Pvt. Ltd. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Pomera Brand Guidelines</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 04: TYPOGRAPHY ───────────────────────────────── */}
            {activeTab === "04" && (
              <div className="cr-bk-tab-pane cr-bk-tab-type">
                <div className="cr-bk-tag-label">POMERA VISUAL SYSTEM · TYPOGRAPHY</div>
                <h2 className="cr-bk-page-heading">Geist · The Only Typeface</h2>
                <p className="cr-bk-sub-desc">
                  Geist is our single, uncompromising typeface across all brand and digital experiences.
                </p>

                {/* Display Type */}
                <div className="cr-bk-sub-section">
                  <div className="cr-bk-sub-header-row">
                    <h3 className="cr-bk-sub-heading">Display</h3>
                    <span className="cr-bk-spec-pill">56-72 · 500 · -3.5%</span>
                  </div>
                  <div className="cr-bk-card cr-bk-spec-card">
                    <div className="cr-bk-display-demo">Display</div>
                    <p className="cr-bk-spec-meta">Large hero statements and display headers. Weight 500 with tight negative tracking (-3.5%).</p>
                  </div>
                </div>

                {/* Heading */}
                <div className="cr-bk-sub-section">
                  <div className="cr-bk-sub-header-row">
                    <h3 className="cr-bk-sub-heading">Heading</h3>
                    <span className="cr-bk-spec-pill">28-40 · 500 · -2.5%</span>
                  </div>
                  <div className="cr-bk-card cr-bk-spec-card">
                    <div className="cr-bk-heading-demo">Heading</div>
                    <p className="cr-bk-spec-meta">Section and modal titles. Weight 500 with -2.5% letter spacing.</p>
                  </div>
                </div>

                {/* Body Text */}
                <div className="cr-bk-sub-section">
                  <div className="cr-bk-sub-header-row">
                    <h3 className="cr-bk-sub-heading">Body text</h3>
                    <span className="cr-bk-spec-pill">17 · 400 · 1.55</span>
                  </div>
                  <div className="cr-bk-card cr-bk-spec-card">
                    <p className="cr-bk-body-demo">
                      Body text sits at 17px with generous line height.
                    </p>
                    <p className="cr-bk-spec-meta">Designed for sustained reading and high legibility across desktop and mobile.</p>
                  </div>
                </div>

                {/* Section Label & Tabular Numbers */}
                <div className="cr-bk-sub-section">
                  <div className="cr-bk-two-col-grid">
                    <div className="cr-bk-card cr-bk-spec-card">
                      <div className="cr-bk-sub-header-row">
                        <span className="cr-bk-spec-title">SECTION LABEL</span>
                        <span className="cr-bk-spec-pill">Mono 12 · caps · +6%</span>
                      </div>
                      <div className="cr-bk-mono-label-demo">03 · COLOUR AND TYPE</div>
                    </div>
                    <div className="cr-bk-card cr-bk-spec-card">
                      <div className="cr-bk-sub-header-row">
                        <span className="cr-bk-spec-title">NUMBERS / CURRENCY</span>
                        <span className="cr-bk-spec-pill">Mono · tabular</span>
                      </div>
                      <div className="cr-bk-mono-num-demo">₹2,50,000</div>
                    </div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Pomera Technologies Pvt. Ltd. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Geist Typography System</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

            {/* ── TAB 05: COLOURS ──────────────────────────────────── */}
            {activeTab === "05" && (
              <div className="cr-bk-tab-pane cr-bk-tab-colours">
                <div className="cr-bk-tag-label">03 · COLOUR AND TYPE</div>
                <h2 className="cr-bk-page-heading">Six colours. One of them rationed.</h2>
                <p className="cr-bk-sub-desc">
                  POMERA VISUAL SYSTEM · COLOUR TEST 03 (UPDATED)
                </p>

                {/* Proportion bar */}
                <div className="cr-bk-ratio-bar-wrap">
                  <div className="cr-bk-ratio-bar">
                    <div className="cr-bk-ratio-seg cr-bk-ratio--white" style={{ width: "62%" }}>
                      <span>WHITE 62%</span>
                    </div>
                    <div className="cr-bk-ratio-seg cr-bk-ratio--paper" style={{ width: "18%" }}>
                      <span>PAPER 18%</span>
                    </div>
                    <div className="cr-bk-ratio-seg cr-bk-ratio--ink" style={{ width: "15%" }}>
                      <span>INK 15%</span>
                    </div>
                    <div className="cr-bk-ratio-seg cr-bk-ratio--lime" style={{ width: "5%" }} />
                  </div>
                  <div className="cr-bk-ratio-lime-tag">Lime 5%</div>
                </div>

                {/* 6 Colour Swatches Grid */}
                <div className="cr-bk-pomera-swatches">
                  {/* Ink */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#111210]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">Ink</div>
                      <div className="cr-bk-pom-meta">#111210 · text, buttons</div>
                    </div>
                  </div>

                  {/* White */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#ffffff] border border-[#e5e5e0]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">White</div>
                      <div className="cr-bk-pom-meta">#FFFFFF · canvas</div>
                    </div>
                  </div>

                  {/* Paper */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#FAFAF7] border border-[#e5e5e0]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">Paper</div>
                      <div className="cr-bk-pom-meta">#FAFAF7 · sections</div>
                    </div>
                  </div>

                  {/* Lime */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#C8F135]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">Lime</div>
                      <div className="cr-bk-pom-meta">#C8F135 · bands, markers</div>
                    </div>
                  </div>

                  {/* Lime tint */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#F2FBD6]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">Lime tint</div>
                      <div className="cr-bk-pom-meta">#F2FBD6 · chips, fills</div>
                    </div>
                  </div>

                  {/* Muted */}
                  <div className="cr-bk-pom-card">
                    <div className="cr-bk-pom-swatch bg-[#5B5B58]" />
                    <div className="cr-bk-pom-info">
                      <div className="cr-bk-pom-name">Muted</div>
                      <div className="cr-bk-pom-meta">#5B5B58 · secondary text</div>
                    </div>
                  </div>
                </div>

                {/* Anti-patterns Section */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Anti-Patterns</h3>
                  <div className="cr-bk-antipattern-grid">
                    {/* Lime text never */}
                    <div className="cr-bk-antipattern-card">
                      <div className="cr-bk-anti-visual text-[#C8F135] text-5xl font-medium">Aa</div>
                      <div className="cr-bk-anti-tag">LIME TEXT · NEVER</div>
                    </div>

                    {/* Lime button never */}
                    <div className="cr-bk-antipattern-card">
                      <div className="cr-bk-anti-visual">
                        <button type="button" className="px-5 py-2 rounded-lg bg-[#C8F135] text-[#111210] font-medium text-sm">
                          Button
                        </button>
                      </div>
                      <div className="cr-bk-anti-tag">LIME BUTTON · NEVER</div>
                    </div>

                    {/* Long lime text on black */}
                    <div className="cr-bk-antipattern-card bg-[#111210] text-[#C8F135]">
                      <div className="cr-bk-anti-visual font-mono text-sm text-[#C8F135]">
                        Long lime text on black
                      </div>
                      <div className="cr-bk-anti-tag text-white/60">GLARES · AVOID</div>
                    </div>
                  </div>
                </div>

                {/* Buttons and States */}
                <div className="cr-bk-sub-section">
                  <h3 className="cr-bk-sub-heading">Buttons and States</h3>
                  <div className="cr-bk-states-panel">
                    {/* Light buttons */}
                    <div className="cr-bk-states-row">
                      <button type="button" className="cr-bk-btn-pom-primary">
                        Start a campaign
                      </button>
                      <button type="button" className="cr-bk-btn-pom-secondary">
                        Talk to us
                      </button>
                      <button type="button" disabled className="cr-bk-btn-pom-disabled">
                        Disabled
                      </button>
                      <div className="cr-bk-chips-group">
                        <span className="cr-bk-status-pill cr-bk-status--verified">
                          <span className="cr-bk-dot bg-[#2e7d32]" /> Verified
                        </span>
                        <span className="cr-bk-status-pill cr-bk-status--reviewing">
                          <span className="cr-bk-dot bg-[#b45309]" /> Reviewing
                        </span>
                        <span className="cr-bk-status-pill cr-bk-status--flagged">
                          <span className="cr-bk-dot bg-[#dc2626]" /> Flagged
                        </span>
                      </div>
                    </div>

                    {/* Dark row: ON DARK: WHITE, NOT LIME */}
                    <div className="cr-bk-dark-states-row">
                      <button type="button" className="cr-bk-btn-dark-primary">
                        Start a campaign
                      </button>
                      <button type="button" className="cr-bk-btn-dark-secondary">
                        Talk to us
                      </button>
                      <span className="cr-bk-dark-rule-tag">ON DARK: WHITE, NOT LIME</span>
                    </div>
                  </div>
                </div>

                <div className="cr-bk-intro-footer">
                  <p className="cr-bk-intro-copy">
                    © 2026 Pomera Technologies Pvt. Ltd. All rights reserved.
                  </p>
                  <p className="cr-bk-intro-status">
                    <span>Pomera Visual System</span>
                    <span>—</span>
                    <span>Updated 2026</span>
                  </p>
                </div>
              </div>
            )}

                      </div>
        </div>
      </div>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <div className="pb-page cr-bk-contact">
        <section className="pb-sec pb-sec--last" id="contact">
          <div className="pb-wrap">
            <div className="pb-join">
              <div className="pb-join__dark">
                <div className="pb-join__mark" aria-hidden="true"><PomeraMark size={300} fg="#C8F135" opacity={0.09} /></div>
                <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime"><span className="pb-ldot" />Get in touch</p>
                <h2 className="pb-join__h">Talk to the Pomera team</h2>
                <p className="pb-join__s">Questions about the brand, press, or using these assets? Send a note and a real person replies.</p>

                <div className="pb-join__next">
                  <p>What happens next</p>
                  {CONTACT_NEXT.map((t, i) => (
                    <div key={t}>
                      <span>0{i + 1}</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <p className="pb-join__share">Prefer email? Write to us at {CONTACT_EMAIL}.</p>
              </div>

              <div className="pb-join__form">
                {status === "done" ? (
                  <div className="pb-done">
                    <PomeraMark size={56} bg="#111210" radius={90} />
                    <h3>Thanks.</h3>
                    <p>We’ve got your message and will reply by email within one working day.</p>
                  </div>
                ) : (
                  <form className="pb-form" onSubmit={onSubmit} noValidate>
                    <div className="pb-fld"><label htmlFor="c-name">Your name</label><input className="pb-inp" id="c-name" name="name" type="text" required /></div>
                    <div className="pb-fld"><label htmlFor="c-email">Work email</label><input className="pb-inp" id="c-email" name="email" type="email" required /></div>
                    <div className="pb-fld pb-full"><label htmlFor="c-org">Organisation</label><input className="pb-inp" id="c-org" name="organisation" type="text" placeholder="Company, agency or publication" /></div>
                    <div className="pb-fld pb-full">
                      <label htmlFor="c-topic">What’s this about?</label>
                      <select className="pb-inp" id="c-topic" name="topic" required defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>Press and media</option>
                        <option>Brand partnership</option>
                        <option>Asset and logo usage</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div className="pb-fld pb-full">
                      <label htmlFor="c-msg">Your message</label>
                      <textarea className="pb-inp cr-bk-contact__area" id="c-msg" name="message" rows={4} required />
                    </div>

                    <label className="pb-consent pb-full" htmlFor="c-ok">
                      <input type="checkbox" id="c-ok" name="consent" required />
                      <span>I agree that Pomera can contact me about this, and to the <a href="/privacy-policy">privacy policy</a>.</span>
                    </label>

                    <div className="pb-full">
                      <button className="pb-btn pb-btn--dark pb-btn--full" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Send message"}
                      </button>
                    </div>

                    {status === "unconnected" && (
                      <p className="pb-msg pb-full" role="status">This form is not connected yet. Email us at {CONTACT_EMAIL} instead.</p>
                    )}
                    {status === "error" && (
                      <p className="pb-msg pb-full" role="status">That didn’t go through. Check your connection and try again, or email us at {CONTACT_EMAIL}.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

          </section>
  );
}
