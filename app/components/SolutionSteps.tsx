"use client";

import { useEffect, useRef, useState } from "react";
import "./SolutionJourney.css";

const STEPS = [
  {
    step: "01",
    title: "Commit budget & fixed rate",
    desc: "You set the budget and agree on a fixed ₹CPM before the campaign runs. Minimum campaign is ₹10,000. No auction drift, no surprise bills.",
    badge: "Fixed ₹CPM",
    badgeType: "accent",
  },
  {
    step: "02",
    title: "Provide content & guidelines",
    desc: "Share your existing long-form videos, raw cuts, product footage, and creative brief. You set the guardrails and disclosure rules.",
    badge: "Brief & Assets",
    badgeType: "neutral",
  },
  {
    step: "03",
    title: "Publishers distribute",
    desc: "Independent video editors turn footage into short vertical posts and publish from their personal accounts across Instagram Reels and YouTube Shorts.",
    badge: "Real Accounts",
    badgeType: "neutral",
  },
  {
    step: "04",
    title: "Verification & spot-checks",
    desc: "Every post is tracked through its own link. We check the analytics the publisher submits and spot-check by hand. Suspicious traffic and bot activity are filtered out, and views are counted on day 7.",
    badge: "Spot-checked",
    badgeType: "warning",
  },
  {
    step: "05",
    title: "Verified delivery report",
    desc: "You receive a report showing every post link, verified view count, and achieved CPM. You are billed only for verified delivery.",
    badge: "Pay on Delivery",
    badgeType: "accent",
  },
];

export default function SolutionSteps() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  /*
   * The section is a tall "scroll runway" with a sticky 100vh stage inside it.
   * The page keeps scrolling, but the stage stays put and swaps steps as you go.
   */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const outer = outerRef.current;
      if (!outer) return;
      const rect = outer.getBoundingClientRect();
      const runway = outer.offsetHeight - (stickyRef.current?.offsetHeight ?? window.innerHeight);
      const p = runway > 0 ? Math.min(1, Math.max(0, -rect.top / runway)) : 0;
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Jump to a step by scrolling to the middle of its slice of the runway
  const goTo = (i: number) => {
    const outer = outerRef.current;
    if (!outer) return;
    const runway = outer.offsetHeight - (stickyRef.current?.offsetHeight ?? window.innerHeight);
    const top = outer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + runway * ((i + 0.5) / STEPS.length), behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="sp-section" aria-label="Campaign Execution">
      <div className="sp-outer" ref={outerRef} style={{ ["--sp-steps" as string]: STEPS.length }}>
        <div className="sp-sticky" ref={stickyRef}>
          <div className="sp-inner">
            {/* Eyebrow */}
            <div className="sp-eyebrow"></div>

            <h2 className="sp-heading">How a campaign runs.</h2>
            <p className="sp-lead">
              Five predictable steps from your video assets to verified reach. You know the rate before you spend, and you pay
              only for views that are verified.
            </p>

            {/* Stage: one step at a time, swapped by scroll */}
            <div className="sp-stage">
              {STEPS.map((item, i) => {
                // Where this card sits relative to the active one: centre, one to either side, or parked out of sight
                const offset = i - active;
                const pos =
                  offset === 0 ? "center" : offset === -1 ? "left" : offset === 1 ? "right" : offset < 0 ? "far-left" : "far-right";
                return (
                  <article
                    key={item.step}
                    className={`sp-step sp-step--${pos}`}
                    aria-hidden={offset !== 0}
                    onClick={() => offset !== 0 && goTo(i)}
                  >
                    <div className="sp-step__meta">
                      <span className="sp-step__phase">
                        Phase {item.step} / 0{STEPS.length}
                      </span>
                      <span className="sp-badge">{item.badge}</span>
                    </div>
                    <div className="sp-step__body">
                      <h3 className="sp-step__title">{item.title}</h3>
                      <p className="sp-step__desc">{item.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="sp-hint" aria-hidden="true">
              <span className={active === STEPS.length - 1 ? "is-hidden" : ""}>Keep scrolling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phones: plain vertical timeline instead of the scroll-pinned stage */}
      <div className="sp-mobile">
        <h2 className="sp-heading">How a campaign runs.</h2>
        <p className="sp-lead">
          Five predictable steps from your video assets to verified reach. You know the rate before you spend, and you pay
          only for views that are verified.
        </p>
        <ol className="sp-tl">
          {STEPS.map((item) => (
            <li key={item.step} className="sp-tl__item">
              <span className="sp-tl__n">{item.step}</span>
              <div className="sp-tl__card">
                <span className="sp-badge">{item.badge}</span>
                <h3 className="sp-tl__title">{item.title}</h3>
                <p className="sp-tl__desc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Supported Distribution Platforms Banner */}
      <div className="sp-channels-wrap">
        <div className="sp-channels">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-[#5B5B58]">
              Distribution Channels:
            </span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-white border border-[#E7E7E3] text-[13px] font-medium text-[#111210]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                Instagram Reels
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-white border border-[#E7E7E3] text-[13px] font-medium text-[#111210]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.62.14 3.23.42 4.81.33 1.24 1.3 2.21 2.54 2.54C6.52 19.77 12 19.77 12 19.77s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                </svg>
                YouTube Shorts
              </span>
            </div>
          </div>
          <span className="font-mono text-[12px] text-[#5B5B58]">ASCI compliant paid disclosure on every post</span>
        </div>
      </div>
    </section>
  );
}
