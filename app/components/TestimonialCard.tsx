"use client";

import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <section className="tc-section" id="founding-cohort" aria-label="Founding Cohort Offer">
      <div className="tc-container">
        <div className="tc-card">
          
          {/* Top Pilot Badge */}
          <div className="tc-badge-wrap">
            <span className="tc-badge pm-num">FOUNDING COHORT · 2026</span>
          </div>

          {/* Main Statement */}
          <h2 className="tc-heading">
            Your first campaign is free.
          </h2>

          <p className="tc-subheading">
            We’re early: no campaign has run yet, so there is no case study to show. We’re booking in a small group of founding brands first. We run your first campaign, you see the report with every post link and verified view count, then you decide.
          </p>

          {/* Key Pilot Guarantees */}
          <div className="tc-specs-grid">
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">Free</span>
              <span className="tc-spec-lbl">Your first campaign</span>
            </div>
            <div className="tc-spec-divider" />
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">Fixed</span>
              <span className="tc-spec-lbl">₹CPM, agreed before launch</span>
            </div>
            <div className="tc-spec-divider" />
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">₹10,000</span>
              <span className="tc-spec-lbl">Minimum campaign after the pilot</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="tc-cta-wrap">
            <a href="#contact" className="tc-btn-primary">
              Book a free pilot
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
