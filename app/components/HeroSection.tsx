"use client";

import React, { useEffect, useState } from "react";
import GlobePolaroids from "./GlobePolaroids";
import "./HeroSection.css";

const AUDIENCES = [
  "D2C brands",
  "beauty brands",
  "fashion brands",
  "food brands",
  "fitness brands",
  "tech brands",
];

/* The longest option reserves the height of the rotating line, so the page never jumps. */
const LONGEST = AUDIENCES.reduce((a, b) => (b.length > a.length ? b : a));

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1400;

/* Types each word, holds, deletes it, then moves to the next one (loops). */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && text === word) delay = HOLD_MS;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function HeroSection() {
  const typed = useTypewriter(AUDIENCES);

  return (
    <section className="relative overflow-x-clip bg-white hero-section" id="hero" aria-label="Hero Section">
      {/* Background radial glow and subtle texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(200,241,53,0.08) 0%, rgba(250,250,247,0.5) 45%, rgba(255,255,255,0) 75%)",
            height: "1800px",
            top: "-350px",
            width: "2600px",
          }}
        />
      </div>

      {/* ── Main Hero Content Wrapper ── */}
      <div className="hero-main-container relative flex flex-col items-center px-5 pt-[calc(var(--header-height)+3.25rem)] pb-12 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-16 w-full max-w-[1200px] mx-auto">
        
        {/* Headline: the locked brand-facing tagline */}
        <h1 className="hero-headline relative z-10 max-w-[960px] text-center font-medium text-[#111210] tracking-[-0.035em] !text-[40px] md:!text-[64px] leading-[1.05]">
          Know your number before you spend.
        </h1>

        {/* Rotating line: lime box on the rotating words only */}
        <p
          className="hero-rot relative z-10 mt-5 mx-auto max-w-[880px] text-center"
          aria-label={`Video ads for ${AUDIENCES.join(", ")}, billed only on verified views.`}
        >
          <span className="hero-rot__l1" aria-hidden="true">
            Video ads for{" "}
            <span className="hero-nw">
              <span className="hero-hl hero-slot">
                <span className="hero-slot__sizer">{LONGEST}</span>
                <span className="hero-slot__live">{typed}<span className="hero-caret" /></span>
              </span>
              ,
            </span>
          </span>
          <span className="hero-rot__l2" aria-hidden="true">billed only on verified views.</span>
        </p>

        {/* Paragraph */}
        <p className="hero-subheadline relative z-10 mt-4 max-w-[560px] text-center font-normal text-[#5B5B58] !text-[19px] !leading-[1.5] mx-auto">
          Set a budget and we fix your rate per 1,000 verified views, so you know what it buys before you spend. Independent publishers post your videos from their own accounts.
        </p>

        {/* CTA Buttons Row — 8px radius corners */}
        <div className="hero-cta-row relative z-10 flex w-full max-w-[420px] items-center justify-center gap-3 sm:w-auto mt-8 mx-auto">
          <a
            href="#contact"
            className="pomera-btn-primary inline-flex items-center justify-center h-[52px] px-6 text-center font-medium text-[16px] leading-none whitespace-nowrap transition-all"
            style={{ borderRadius: "8px", backgroundColor: "#111210", borderColor: "#111210", color: "#FFFFFF" }}
          >
            Book a pilot
          </a>
          <a
            href="#how-it-works"
            className="pomera-btn-secondary inline-flex items-center justify-center h-[52px] px-6 text-center font-medium text-[16px] leading-none whitespace-nowrap transition-all"
            style={{ borderRadius: "8px", backgroundColor: "rgba(17,18,16,0.06)", borderColor: "transparent", color: "#111210" }}
          >
            See how it works
          </a>
        </div>

        {/* Globe Visualization (Responsive vertical reels preview) */}
        <div className="hero-globe-wrapper relative z-[3] mt-10 sm:mt-12 flex h-[380px] w-full justify-center md:h-[620px]">
          <div className="relative h-full w-full max-w-[1040px] flex items-center justify-center">
            <GlobePolaroids className="w-full max-w-[380px] sm:max-w-[460px] md:max-w-[620px] lg:max-w-[680px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
