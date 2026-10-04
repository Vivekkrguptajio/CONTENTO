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
            First campaigns free for selected pilot brands.
          </h2>

          <p className="tc-subheading">
            We run the distribution across verified publishers. You see the verified delivery report in your dashboard. You only commit if the numbers prove themselves.
          </p>

          {/* Key Pilot Guarantees */}
          <div className="tc-specs-grid">
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">₹10,000</span>
              <span className="tc-spec-lbl">Minimum test budget</span>
            </div>
            <div className="tc-spec-divider" />
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">100%</span>
              <span className="tc-spec-lbl">Make-good delivery guarantee</span>
            </div>
            <div className="tc-spec-divider" />
            <div className="tc-spec-item">
              <span className="tc-spec-val pm-num">₹0</span>
              <span className="tc-spec-lbl">Platform fees during pilot</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="tc-cta-wrap">
            <a href="#campaign-cta" className="tc-btn-primary">
              Apply for pilot campaign
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
