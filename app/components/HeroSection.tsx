"use client";

import React from "react";
import GlobePolaroids from "./GlobePolaroids";
import BrandLogos from "./BrandLogos";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="relative overflow-x-clip bg-[#fffdfb] hero-section" aria-label="Hero Section">
      {/* Background radial glow and texture matching ContentRewards */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.45) 45%, rgba(255,255,255,0) 75%)",
            height: "2000px",
            top: "-350px",
            width: "2900px",
          }}
        />
        <img
          alt=""
          className="absolute max-w-none opacity-60"
          src="/assets/creators/hero-v2/texture.svg"
          style={{ height: "787px", left: "calc(50% - 1379px)", top: "263px", width: "2758px" }}
        />
      </div>

      {/* ── Main Hero Content Wrapper (Matches ContentRewards DevTools 440.48 x 1041.23, padding 135px 20px 64px) ── */}
      <div className="hero-main-container relative flex flex-col items-center px-5 pt-[calc(var(--header-height)+6.5rem)] pb-16 sm:pt-[calc(var(--header-height)+8.5rem)] sm:pb-20 lg:pt-[calc(var(--header-height)+7.5rem)] lg:pb-24 w-full">
        {/* Headline */}
        <h1 className="hero-headline relative z-10 max-w-[980px] text-center font-medium text-[#2d2518] tracking-[-0.03em] text-[clamp(42px,8.4vw,60px)] lg:text-[84px] leading-[1.12]">
          <span className="hero-headline-line">The Operating System</span>
          <span className="hero-headline-line">for your Marketing Spend</span>
        </h1>

        {/* Subheadline (353.67 x 46.01 on mobile) */}
        <p className="hero-subheadline relative z-10 mt-4 max-w-[420px] text-center font-medium text-[#2d2518]/70 text-[16px] leading-[23px] tracking-[-0.18px] sm:mt-[18px] sm:max-w-[660px] sm:text-[17px] sm:leading-[24px] mx-auto">
          Businesses launch campaigns. Creators post. Payouts happen automatically.
        </p>

        {/* CTA Buttons Row (353.67 x 51.97 on mobile) */}
        <div className="hero-cta-row relative z-10 flex w-full max-w-[440px] items-center justify-center gap-[clamp(8px,2.2vw,16px)] sm:w-auto sm:max-w-none mt-7 sm:mt-[28px] mx-auto">
          <a
            href="/launch-a-campaign"
            className="cr-button-main relative min-w-0 flex-1 overflow-clip rounded-full px-[clamp(10px,3.4vw,20px)] py-3.5 text-center font-medium text-[clamp(12px,3.7vw,18px)] text-white leading-6 tracking-[-0.03em] transition-opacity hover:opacity-90 sm:flex-none sm:px-[38px] sm:py-[15px] sm:text-[17px]"
          >
            <span className="relative block truncate">Launch a campaign</span>
          </a>
          <a
            href="/book-a-demo"
            className="hero-btn-secondary min-w-0 flex-1 truncate rounded-full bg-[#261d18]/5 px-[clamp(10px,3.4vw,20px)] py-3.5 text-center font-medium text-[#261d18] text-[clamp(12px,3.7vw,18px)] leading-6 tracking-[-0.03em] transition-colors hover:bg-[#261d18]/10 sm:flex-none sm:px-[38px] sm:py-[15px] sm:text-[17px]"
          >
            See a demo
          </a>
        </div>

        {/* Globe Visualization (Responsive perfect circle) */}
        <div className="hero-globe-wrapper relative z-[3] mt-16 sm:mt-12 md:mt-4 flex h-[400px] w-full justify-center md:h-[720px]">
          <div className="relative h-full w-full max-w-[1100px] flex items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255,190,90,0.45) 0%, rgba(255,150,30,0.28) 34%, rgba(255,110,10,0.1) 58%, rgba(255,90,0,0) 74%)",
                height: "min(780px, 100vw)",
                width: "min(780px, 100vw)",
              }}
            />
            <GlobePolaroids className="w-full max-w-[380px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[700px]" />
          </div>
        </div>

        {/* Brand Wall Logos (Cleanly below the globe with comfortable breathing room) */}
        <div className="relative block z-10 mt-[10px] w-full max-w-[75rem] [&_img]:h-[24px] [&_img]:max-w-[100px] md:[&_img]:h-[32px] md:[&_img]:max-w-[152px]">
          <BrandLogos />
        </div>
      </div>
    </section>
  );
}
