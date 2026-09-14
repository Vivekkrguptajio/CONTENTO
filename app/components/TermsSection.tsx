"use client";

import React, { useState, useEffect } from "react";
import "./TermsSection.css";
import termsData from "./termsData.json";

type DocKey = "privacy" | "ftc" | "terms" | "brands";

const tabs: { key: DocKey; label: string; hash: string }[] = [
  { key: "privacy", label: "Privacy Policy", hash: "#privacy" },
  { key: "ftc", label: "FTC Compliance & Transparency Guide", hash: "#ftc" },
  { key: "terms", label: "Creator Terms", hash: "#terms" },
  { key: "brands", label: "Organization Terms", hash: "#brands-terms" },
];

export default function TermsSection() {
  // Default to FTC Compliance as requested
  const [activeDocKey, setActiveDocKey] = useState<DocKey>("ftc");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("privacy")) {
        setActiveDocKey("privacy");
      } else if (hash.includes("ftc")) {
        setActiveDocKey("ftc");
      } else if (hash.includes("brand")) {
        setActiveDocKey("brands");
      } else if (hash.includes("terms") && !hash.includes("brand")) {
        setActiveDocKey("terms");
      } else if (hash.includes("term")) {
        // http://localhost:3000/creator#term shows FTC Compliance
        setActiveDocKey("ftc");
      } else {
        setActiveDocKey("ftc");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabClick = (tabKey: DocKey, tabHash: string) => {
    setActiveDocKey(tabKey);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", tabHash);
    }
  };

  const doc = termsData[activeDocKey] || termsData.ftc;

  return (
    <section id="term" className="cr-terms-section">
      <div id="ftc-compliance" className="cr-terms-anchor" />
      <div id="terms" className="cr-terms-anchor" />
      <div id="privacy-policy" className="cr-terms-anchor" />
      <div id="brands-terms" className="cr-terms-anchor" />

      {/* Top Ambient Glow Mesh Background (Identical to contentrewards.com/ftc-compliance) */}
      <div className="cr-terms-ambient-bg" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 703"
          className="cr-terms-ambient-svg"
        >
          <g clipPath="url(#terms-bg_clip)">
            <path fill="#1c1d1d" d="M0 0h1440v703H0z" />
            <g filter="url(#terms-bg_f0)" opacity="0.6">
              <ellipse
                cx="591.5"
                cy="481.5"
                fill="#FF7707"
                fillOpacity="0.32"
                rx="591.5"
                ry="481.5"
                transform="matrix(1 0 0 -1 128 262)"
              />
            </g>
            <g filter="url(#terms-bg_f1)" opacity="0.3" style={{ mixBlendMode: "plus-lighter" }}>
              <ellipse
                cx="377"
                cy="237.5"
                fill="#984D04"
                rx="377"
                ry="237.5"
                transform="matrix(1 0 0 -1 343 44)"
              />
            </g>
            <g filter="url(#terms-bg_f2)" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
              <ellipse
                cx="916"
                cy="48.5"
                fill="white"
                rx="916"
                ry="48.5"
                transform="matrix(1 0 0 -1 -195 -8)"
              />
            </g>
            <mask
              id="terms-bg_mask"
              width="1373"
              height="1078"
              x="34"
              y="-782"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
            >
              <path fill="url(#terms-bg_pat)" d="M34-782h1373V295.8H34z" />
            </mask>
            <g filter="url(#terms-bg_f3)" mask="url(#terms-bg_mask)" opacity="0.2">
              <ellipse
                cx="221.402"
                cy="365.928"
                fill="url(#terms-bg_grad)"
                rx="221.402"
                ry="365.928"
                transform="matrix(0 1 1 0 355.34 -403.771)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="terms-bg_f0"
              width="2071"
              height="1851"
              x="-316"
              y="-1145"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="222" />
            </filter>
            <filter
              id="terms-bg_f1"
              width="1420"
              height="1141"
              x="10"
              y="-764"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="166.5" />
            </filter>
            <filter
              id="terms-bg_f2"
              width="2276"
              height="541"
              x="-417"
              y="-327"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="111" />
            </filter>
            <filter
              id="terms-bg_f3"
              width="1043.86"
              height="754.804"
              x="199.34"
              y="-559.771"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="78" />
            </filter>
            <linearGradient
              id="terms-bg_grad"
              x1="12.381"
              x2="697.544"
              y1="-92.686"
              y2="422.104"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8003" />
              <stop offset="1" stopColor="#EC3EFF" />
            </linearGradient>
            <clipPath id="terms-bg_clip">
              <path fill="white" d="M0 0h1440v703H0z" />
            </clipPath>
            <pattern
              id="terms-bg_pat"
              width="1"
              height="1"
              patternTransform="matrix(3 0 0 3 34 -782)"
              patternUnits="userSpaceOnUse"
              preserveAspectRatio="none"
              viewBox="0 0 3 3"
            >
              <path fill="#D9D9D9" d="M0 0h2v2H0z" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="cr-terms-container">
        <div className="cr-terms-wrapper">
          {/* Header */}
          <div className="cr-terms-header">
            <h1 className="cr-terms-title">{doc.title}</h1>
            <p className="cr-terms-date">{doc.date}</p>

            {/* Pill Navigation */}
            <div className="cr-terms-pills">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabClick(tab.key, tab.hash)}
                  className={`cr-terms-pill ${
                    activeDocKey === tab.key
                      ? "cr-terms-pill--active"
                      : "cr-terms-pill--inactive"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {doc.introHtml && (
              <div
                className="cr-terms-intro"
                dangerouslySetInnerHTML={{ __html: doc.introHtml }}
              />
            )}
          </div>

          {/* Document Content */}
          <div
            className="cr-terms-content"
            dangerouslySetInnerHTML={{ __html: doc.sectionsHtml }}
          />
        </div>
      </div>
    </section>
  );
}
