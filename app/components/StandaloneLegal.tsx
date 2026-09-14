"use client";

import React, { useState } from "react";
import "./TermsSection.css";
import termsData from "./termsData.json";

type DocKey = "privacy" | "ftc" | "terms" | "brands";

interface StandaloneLegalProps {
  docKey: DocKey;
}

const tabs: { key: DocKey; label: string }[] = [
  { key: "privacy", label: "Privacy Policy" },
  { key: "ftc", label: "FTC Compliance & Transparency Guide" },
  { key: "terms", label: "Creator Terms" },
  { key: "brands", label: "Organization Terms" },
];

export default function StandaloneLegal({ docKey }: StandaloneLegalProps) {
  const [activeDocKey, setActiveDocKey] = useState<DocKey>(docKey);
  const doc = termsData[activeDocKey] || termsData.ftc;

  return (
    <section className="cr-terms-section">
      {/* Top Ambient Glow Mesh Background */}
      <div className="cr-terms-ambient-bg" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 703"
          className="cr-terms-ambient-svg"
        >
          <g clipPath="url(#sa-terms-bg_clip)">
            <path fill="#F4F3F2" d="M0 0h1440v703H0z" />
            <g filter="url(#sa-terms-bg_f0)" opacity="0.75">
              <ellipse
                cx="591.5"
                cy="481.5"
                fill="#FF7707"
                fillOpacity="0.48"
                rx="591.5"
                ry="481.5"
                transform="matrix(1 0 0 -1 128 262)"
              />
            </g>
            <g filter="url(#sa-terms-bg_f1)" opacity="0.3" style={{ mixBlendMode: "plus-lighter" }}>
              <ellipse
                cx="377"
                cy="237.5"
                fill="#984D04"
                rx="377"
                ry="237.5"
                transform="matrix(1 0 0 -1 343 44)"
              />
            </g>
            <g filter="url(#sa-terms-bg_f2)" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
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
              id="sa-terms-bg_mask"
              width="1373"
              height="1078"
              x="34"
              y="-782"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
            >
              <path fill="url(#sa-terms-bg_pat)" d="M34-782h1373V295.8H34z" />
            </mask>
            <g filter="url(#sa-terms-bg_f3)" mask="url(#sa-terms-bg_mask)" opacity="0.2">
              <ellipse
                cx="221.402"
                cy="365.928"
                fill="url(#sa-terms-bg_grad)"
                rx="221.402"
                ry="365.928"
                transform="matrix(0 1 1 0 355.34 -403.771)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="sa-terms-bg_f0"
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
              id="sa-terms-bg_f1"
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
              id="sa-terms-bg_f2"
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
              id="sa-terms-bg_f3"
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
              id="sa-terms-bg_grad"
              x1="12.381"
              x2="697.544"
              y1="-92.686"
              y2="422.104"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8003" />
              <stop offset="1" stopColor="#EC3EFF" />
            </linearGradient>
            <clipPath id="sa-terms-bg_clip">
              <path fill="white" d="M0 0h1440v703H0z" />
            </clipPath>
            <pattern
              id="sa-terms-bg_pat"
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
          <div className="cr-terms-header">
            <h1 className="cr-terms-title">{doc.title}</h1>
            <p className="cr-terms-date">{doc.date}</p>

            <div className="cr-terms-pills">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveDocKey(tab.key)}
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

          <div
            className="cr-terms-content"
            dangerouslySetInnerHTML={{ __html: doc.sectionsHtml }}
          />
        </div>
      </div>
    </section>
  );
}
