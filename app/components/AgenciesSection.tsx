"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./AgenciesSection.css";

export default function AgenciesSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // first open by default as on original

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const agencyCards = [
    {
      name: "Clipfarm",
      stats: "$2.64M across 178 campaigns",
      bgGradient: "linear-gradient(180deg, #004812 0%, #121613 100%)",
      logo: "/assets/agencies/trusted/clipfarm.webp",
      logoType: "contain",
      glowColor: "#00b259",
    },
    {
      name: "Clipping Culture",
      stats: "$1.61M across 158 campaigns",
      bgGradient: "linear-gradient(180deg, #003d9e 0%, #00163a 100%)",
      logo: "/assets/agencies/trusted/clipping-culture.webp",
      logoType: "avatar",
      borderColor: "rgba(0,99,254,0.5)",
      glowColor: "#0063fe",
    },
    {
      name: "Propaganda",
      stats: "$622.4K across 72 campaigns",
      bgGradient: "linear-gradient(180deg, #483a00 0%, #161412 100%)",
      logo: "/assets/agencies/trusted/propaganda.svg",
      logoType: "contain",
      glowColor: "#f9ac1e",
    },
    {
      name: "Virality",
      stats: "$594.9K across 80 campaigns",
      bgGradient: "linear-gradient(180deg, #414ab1 0%, #111540 100%)",
      logo: "/assets/agencies/trusted/ghost.webp",
      logoType: "avatar",
      borderColor: "#5865f2",
      glowColor: "#5865f2",
    },
    {
      name: "Clip Haus",
      stats: "$224.5K across 40 campaigns",
      bgGradient: "linear-gradient(180deg, #004148 0%, #121616 100%)",
      logo: "/assets/agencies/trusted/clip-haus.svg",
      logoType: "contain",
      glowColor: "#00b4d8",
    },
    {
      name: "The Clip Ship",
      stats: "$560.7K across 165 campaigns",
      bgGradient: "linear-gradient(180deg, #41a5b1 0%, #1c4f5b 100%)",
      logo: "/assets/agencies/trusted/cruise.webp",
      logoType: "avatar",
      borderColor: "#5ce1e6",
      glowColor: "#5ce1e6",
    },
  ];

  const creatorRows = [
    {
      name: "xKaizen",
      gradient: "linear-gradient(135deg, #4BFCEE 0%, #F57D55 100%)",
      platforms: ["tiktok", "instagram", "youtube"],
      views: "337.4K",
      payout: "$139.75",
    },
    {
      name: "ReelMas",
      gradient: "linear-gradient(135deg, #43B0E7 0%, #F8D215 100%)",
      platforms: ["youtube", "facebook", "instagram"],
      views: "2.25M",
      payout: "$600",
    },
    {
      name: "ClipBoss",
      gradient: "linear-gradient(135deg, #F1A151 0%, #E823E8 100%)",
      platforms: ["tiktok", "instagram"],
      views: "752.4K",
      payout: "$200.45",
    },
    {
      name: "ViralCut",
      gradient: "linear-gradient(135deg, #FC22BC 0%, #476CF5 100%)",
      platforms: ["youtube", "tiktok"],
      views: "4.1M",
      payout: "$1,250",
    },
    {
      name: "ByteFlow",
      gradient: "linear-gradient(135deg, #00FF87 0%, #60EFFF 100%)",
      platforms: ["instagram", "tiktok", "youtube"],
      views: "1.8M",
      payout: "$480",
    },
    {
      name: "NovaCast",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
      platforms: ["youtube", "facebook"],
      views: "890K",
      payout: "$310.20",
    },
  ];

  const faqs = [
    {
      q: "What does it cost to run campaigns for clients?",
      a: "A 10% platform fee on every campaign type, only charged on delivered work. On per post and retainer campaigns of $5,000 or more, creators pay no fee of their own. No monthly cost, no minimum term.",
    },
    {
      q: "Am I locked into a contract?",
      a: "No. No subscriptions, no minimum term and no monthly cost, so an account can sit idle between client campaigns at no charge. You pay the platform fee only on campaigns you actually run.",
    },
    {
      q: "What reporting do I get?",
      a: "Views, approved submissions, likes, comments and effective CPM, broken down by campaign, platform and day. You can export any of it to CSV and share a live analytics link with a client. There is far more than fits in this box, so come and talk to us and we will show you.",
    },
    {
      q: "Is there a minimum budget?",
      a: "Campaigns start at $1,000. There is no maximum, and you can top up a campaign while it is scheduled, active or paused.",
    },
    {
      q: "How do I know the views are real?",
      a: "Every submission carries a bot likelihood score before anyone approves it, and a flagged payout is held while it is reviewed. We are also rolling out independent view verification with an outside company that checks view counts separately from us, currently in beta with selected agencies.",
    },
    {
      q: "Who approves the content?",
      a: "You do, or whoever on your team you give review access to. Nothing approves automatically, and there is a seven day window to approve, reject or ask for changes. Rejections need to be based on what is written in the campaign brief, so put your requirements there rather than in a chat or a Discord message.",
    },
    {
      q: "When do creators get paid?",
      a: "On CPM a clip earns for 7 days from approval, then the payout is held 3 days. Per post pays after approval, and retainer pays at the end of each cycle.",
    },
    {
      q: "Can I get unspent budget back?",
      a: "Yes, by submitting a refund request. It is reviewed manually and takes 5 to 7 business days, and approved creator payouts are deducted first. Work creators have already delivered cannot be refunded.",
    },
    {
      q: "Can I run campaigns for more than one client?",
      a: "Yes. An agency account holds each client brand underneath it with its own campaigns, budget and settings, and you invite teammates as owner, admin, moderator or member.",
    },
  ];

  return (
    <div className="agencies-wrapper">
      
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="agencies-hero" id="agencies-hero">
        <div className="agencies-hero__bg-wrap">
          <div className="agencies-hero__map">
            <Image
              src="/assets/agencies/agency-world-map.webp"
              alt="Agencies world map"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="agencies-hero__fade"></div>
        </div>

        <div className="agencies-hero__content">
          <div className="agencies-hero__container">
            <div className="agencies-hero__grid">
              <div className="agencies-hero__left">
                <h1 className="agencies-hero__heading">
                  Built for agencies<br />that move content
                </h1>
                <div className="agencies-hero__cta-row">
                  <a href="/book-a-demo" className="agencies-hero__btn">
                    Join as an agency
                  </a>
                </div>
              </div>

              <div className="agencies-hero__right">
                <p className="agencies-hero__points">
                  No chasing cold leads.<br />
                  No messy campaign ops.<br />
                  No monthly subscription BS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATEMENT SECTION ──────────────────────────────────── */}
      <section className="agencies-statement">
        <div className="agencies-statement__container">
          <p className="agencies-statement__text">
            Content Rewards gives agencies more than a{" "}
            <span className="agencies-statement__relative">
              place
              <img
                src="/assets/agencies/statement-sparkle.svg"
                alt=""
                className="agencies-statement__sparkle"
              />
              <img
                src="/assets/agencies/statement-dot.svg"
                alt=""
                className="agencies-statement__dot"
              />
            </span>{" "}
            to run{" "}
            <span className="agencies-statement__relative">
              campaigns.
              <img
                src="/assets/agencies/statement-squiggle-grow.svg"
                alt=""
                className="agencies-statement__squiggle-campaigns"
              />
            </span>{" "}
            It gives them a way to grow inside the{" "}
            <span className="agencies-statement__relative">
              ecosystem.
              <img
                src="/assets/agencies/statement-squiggle-campaigns.svg"
                alt=""
                className="agencies-statement__squiggle-eco"
              />
            </span>
          </p>
        </div>
      </section>

      {/* ── 3. MEET THE NEW STANDARD ──────────────────────────────── */}
      <section className="agencies-standard">
        <div className="agencies-standard__container">
          <div className="agencies-standard__header">
            <h2 className="agencies-standard__heading">Meet the new standard</h2>
          </div>

          <div className="agencies-standard__grid">
            {/* Card 1: Better economics */}
            <div className="agencies-standard__card agencies-standard__card--gray agencies-standard__card--top-left">
              <div className="agencies-standard__card-inner">
                <img
                  src="/assets/agencies/icon-better-economics.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="agencies-standard__icon"
                />
                <h3 className="agencies-standard__card-title">Better economics</h3>
                <div className="agencies-standard__divider"></div>
                <p className="agencies-standard__card-desc">
                  Agencies get access to stronger opportunities and custom support.
                </p>
              </div>
            </div>

            {/* Card 2: Direct access */}
            <div className="agencies-standard__card agencies-standard__card--gray agencies-standard__card--top-right">
              <div className="agencies-standard__card-inner">
                <img
                  src="/assets/agencies/icon-direct-access.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="agencies-standard__icon"
                />
                <h3 className="agencies-standard__card-title">Direct access</h3>
                <div className="agencies-standard__divider"></div>
                <p className="agencies-standard__card-desc">
                  We connect trusted agencies with brands that need campaign execution.
                </p>
              </div>
            </div>

            {/* Card 3: Discover Page visibility (Orange) */}
            <div className="agencies-standard__card agencies-standard__card--orange agencies-standard__card--bottom-left">
              <div className="agencies-standard__card-inner">
                <img
                  src="/assets/agencies/icon-discover-page.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="agencies-standard__icon"
                />
                <h3 className="agencies-standard__card-title text-white">
                  Discover Page visibility
                </h3>
                <div className="agencies-standard__divider agencies-standard__divider--orange"></div>
                <p className="agencies-standard__card-desc text-white/80">
                  After getting onto CR and the Discover Page, Virality scaled from zero to 100,000 clips in 40 days.
                </p>
              </div>
            </div>

            {/* Card 4: Deal flow */}
            <div className="agencies-standard__card agencies-standard__card--gray agencies-standard__card--bottom-right">
              <div className="agencies-standard__card-inner">
                <img
                  src="/assets/agencies/icon-deal-flow.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="agencies-standard__icon"
                />
                <h3 className="agencies-standard__card-title">Deal flow</h3>
                <div className="agencies-standard__divider"></div>
                <p className="agencies-standard__card-desc">
                  We connect trusted agencies with brands that need campaign execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. GET VERIFIED GROW FAAASTER ─────────────────────────── */}
      <section className="agencies-verified">
        <div className="agencies-verified__container">
          <div className="agencies-verified__top">
            <h2 className="agencies-verified__heading">
              Get verified,<br />
              grow f<span className="font-extrabold text-[1.05em]">a</span>
              <span className="font-extrabold text-[1.1em]">a</span>
              <span className="font-extrabold text-[1.05em]">a</span>ster.
            </h2>

            <div className="agencies-verified__checks">
              <div className="agencies-verified__check-item">
                <img
                  src="/assets/agencies/icon-check-orange.svg"
                  alt=""
                  width="36"
                  height="36"
                  className="agencies-verified__check-icon"
                />
                <span className="agencies-verified__check-text">Lower fees</span>
              </div>
              <div className="agencies-verified__check-item">
                <img
                  src="/assets/agencies/icon-check-orange.svg"
                  alt=""
                  width="36"
                  height="36"
                  className="agencies-verified__check-icon"
                />
                <span className="agencies-verified__check-text">More deal flow</span>
              </div>
              <div className="agencies-verified__check-item">
                <img
                  src="/assets/agencies/icon-check-orange.svg"
                  alt=""
                  width="36"
                  height="36"
                  className="agencies-verified__check-icon"
                />
                <span className="agencies-verified__check-text">
                  Featured on discover page with 2M monthly visits
                </span>
              </div>
            </div>
          </div>

          {/* 8 Verified Logos */}
          <div className="agencies-verified__logos-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="agencies-verified__logo-box">
                <div className="agencies-verified__logo-img-wrap">
                  <Image
                    src={`/assets/agencies/verified-logos/${num}.webp`}
                    alt="Verified Agency"
                    fill
                    className="rounded-[12px] object-cover"
                  />
                  <div className="agencies-verified__badge">
                    <Image
                      src="/assets/agencies/icon-verified-badge.svg"
                      alt="Verified"
                      fill
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="agencies-verified__cta-wrap">
            <a href="/book-a-demo" className="agencies-verified__btn">
              <span className="agencies-verified__btn-text">
                Talk with us and get verified
              </span>
              <span className="agencies-verified__btn-glow"></span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. WORK WITH TRUSTED AGENCIES ─────────────────────────── */}
      <section className="agencies-trusted">
        <div className="agencies-trusted__container">
          <h2 className="agencies-trusted__heading">Work with trusted agencies</h2>

          <div className="agencies-trusted__grid">
            {agencyCards.map((agency) => (
              <div
                key={agency.name}
                className="agencies-trusted__card"
                style={{ background: agency.bgGradient }}
              >
                <div className="agencies-trusted__logo-container">
                  {agency.logoType === "contain" ? (
                    <div className="agencies-trusted__contain-logo">
                      <div
                        className="agencies-trusted__blur-bg"
                        style={{ backgroundColor: agency.glowColor }}
                      ></div>
                      <img
                        src={agency.logo}
                        alt={agency.name}
                        className="agencies-trusted__img-contain"
                      />
                    </div>
                  ) : (
                    <div className="agencies-trusted__avatar-logo">
                      <div
                        className="agencies-trusted__avatar-blur"
                        style={{ backgroundColor: agency.glowColor }}
                      ></div>
                      <div
                        className="agencies-trusted__avatar-frame"
                        style={{ borderColor: agency.borderColor }}
                      >
                        <img
                          src={agency.logo}
                          alt={agency.name}
                          className="agencies-trusted__img-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="agencies-trusted__card-meta">
                  <h3 className="agencies-trusted__agency-name">{agency.name}</h3>
                  <p className="agencies-trusted__agency-stats">{agency.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. THE PLATFORM FOR ALL YOUR CAMPAIGNS (BENTO) ────────── */}
      <section className="agencies-bento">
        <div className="agencies-bento__container">
          <h2 className="agencies-bento__heading">
            The platform for all your campaigns
          </h2>

          <div className="agencies-bento__stack">
            {/* Bento Banner: No monthly subscription */}
            <div className="agencies-bento__banner">
              <img
                src="/assets/agencies/no-monthly-subscription.svg"
                alt="No monthly subscription"
                className="agencies-bento__banner-img"
              />
            </div>

            {/* Row 1: Advanced Analytics + Scale without overhead */}
            <div className="agencies-bento__row-1">
              {/* Card 1: Advanced Analytics */}
              <div className="agencies-bento__card agencies-bento__card--analytics">
                <p className="agencies-bento__text">
                  <strong className="agencies-bento__strong">Advanced analytics.</strong>{" "}
                  <span className="agencies-bento__muted">
                    See what is working across creators, campaigns, spend, CPM, approvals, and performance.
                  </span>
                </p>

                {/* Floating Stats Badges */}
                <div className="agencies-bento__stat-pills">
                  {/* Payouts badge */}
                  <div className="agencies-stat-pill agencies-stat-pill--green">
                    <div className="agencies-stat-pill__icon-wrap">
                      <img
                        src="/assets/agencies/stat-icon-payouts.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="agencies-stat-pill__texts">
                      <span className="agencies-stat-pill__val">$56,675.75</span>
                      <span className="agencies-stat-pill__lbl">Payouts</span>
                    </div>
                  </div>

                  {/* eCPM / CPM badge */}
                  <div className="agencies-stat-pill agencies-stat-pill--orange">
                    <div className="agencies-stat-pill__icon-wrap">
                      <img
                        src="/assets/agencies/stat-icon-ecpm.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="agencies-stat-pill__dual">
                      <div className="agencies-stat-pill__texts">
                        <span className="agencies-stat-pill__val">$0.99</span>
                        <span className="agencies-stat-pill__lbl">eCPM</span>
                      </div>
                      <div className="agencies-stat-pill__sep"></div>
                      <div className="agencies-stat-pill__texts">
                        <span className="agencies-stat-pill__val">$1.93</span>
                        <span className="agencies-stat-pill__lbl">CPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Total subs / Approved badge */}
                  <div className="agencies-stat-pill agencies-stat-pill--pink">
                    <div className="agencies-stat-pill__icon-wrap">
                      <img
                        src="/assets/agencies/stat-icon-subs.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="agencies-stat-pill__dual">
                      <div className="agencies-stat-pill__texts">
                        <span className="agencies-stat-pill__val">49K</span>
                        <span className="agencies-stat-pill__lbl">Total subs</span>
                      </div>
                      <div className="agencies-stat-pill__sep"></div>
                      <div className="agencies-stat-pill__texts">
                        <span className="agencies-stat-pill__val">14.6K</span>
                        <span className="agencies-stat-pill__lbl">Approved</span>
                      </div>
                    </div>
                  </div>

                  {/* Views badge */}
                  <div className="agencies-stat-pill agencies-stat-pill--blue">
                    <div className="agencies-stat-pill__icon-wrap">
                      <img
                        src="/assets/agencies/stat-icon-views.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="agencies-stat-pill__texts">
                      <span className="agencies-stat-pill__val">107.2M</span>
                      <span className="agencies-stat-pill__lbl">Views</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Scale without overhead */}
              <div className="agencies-bento__card agencies-bento__card--scale">
                <p className="agencies-bento__text">
                  <strong className="agencies-bento__strong">Scale without overhead.</strong>{" "}
                  <span className="agencies-bento__muted">
                    Manage more creators and more campaigns without rebuilding your ops stack.
                  </span>
                </p>

                {/* Growth SVG Graph */}
                <div className="agencies-bento__graph-wrap">
                  <svg
                    className="agencies-bento__graph-svg"
                    viewBox="0 0 500 240"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="scale-fill-gradient" x1="250" y1="0" x2="250" y2="240" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9741E" stopOpacity="0.28" />
                        <stop offset="1" stopColor="#F9741E" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="scale-line-gradient" x1="0" y1="200" x2="500" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9741E" />
                        <stop offset="1" stopColor="#F9AC1E" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d="M 10,210 Q 70,200 110,185 T 190,165 T 260,110 T 340,120 T 410,50 T 490,20 L 490,240 L 10,240 Z"
                      fill="url(#scale-fill-gradient)"
                    />

                    {/* Stroke line */}
                    <path
                      d="M 10,210 Q 70,200 110,185 T 190,165 T 260,110 T 340,120 T 410,50 T 490,20"
                      stroke="url(#scale-line-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Data Points */}
                    {[
                      { cx: 35, cy: 206 },
                      { cx: 110, cy: 185 },
                      { cx: 190, cy: 165 },
                      { cx: 260, cy: 110 },
                      { cx: 340, cy: 120 },
                      { cx: 410, cy: 50 },
                      { cx: 475, cy: 26 },
                    ].map((pt, idx) => (
                      <g key={idx}>
                        <circle cx={pt.cx} cy={pt.cy} r="8" fill="#ffffff" stroke="#F9741E" strokeWidth="2.5" />
                        <circle cx={pt.cx} cy={pt.cy} r="3.5" fill="#F9741E" />
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 2: Full visibility + Flexible payouts */}
            <div className="agencies-bento__row-2">
              {/* Card 3: Full Visibility (Table) */}
              <div className="agencies-bento__card agencies-bento__card--visibility">
                <div className="agencies-table">
                  <div className="agencies-table__header">
                    <span className="agencies-table__col agencies-table__col--creator">Creator</span>
                    <span className="agencies-table__col agencies-table__col--plat">Platforms</span>
                    <span className="agencies-table__col agencies-table__col--views">Views</span>
                    <span className="agencies-table__col agencies-table__col--payout">Est. payout</span>
                  </div>

                  <div className="agencies-table__body">
                    {creatorRows.map((cr) => (
                      <div key={cr.name} className="agencies-table__row">
                        <div className="agencies-table__cell agencies-table__cell--creator">
                          <span
                            className="agencies-table__avatar"
                            style={{ background: cr.gradient }}
                          ></span>
                          <span className="agencies-table__name">{cr.name}</span>
                        </div>

                        <div className="agencies-table__cell agencies-table__cell--plat">
                          {cr.platforms.map((p) => (
                            <span key={p} className="agencies-table__platform-icon">
                              <img
                                src={`/assets/agencies/icon-${p}.svg`}
                                alt={p}
                                width="12"
                                height="12"
                              />
                            </span>
                          ))}
                        </div>

                        <div className="agencies-table__cell agencies-table__cell--views">
                          <span>{cr.views}</span>
                        </div>

                        <div className="agencies-table__cell agencies-table__cell--payout">
                          <span>{cr.payout}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="agencies-bento__visibility-footer">
                  <p className="agencies-bento__text">
                    <strong className="agencies-bento__strong">Full visibility.</strong>{" "}
                    <span className="agencies-bento__muted">
                      Track creators, submissions, and results without living inside spreadsheets.
                    </span>
                  </p>
                </div>
              </div>

              {/* Card 4: Flexible payouts */}
              <div className="agencies-bento__card agencies-bento__card--payouts">
                <p className="agencies-bento__text">
                  <strong className="agencies-bento__strong">Flexible payouts.</strong>{" "}
                  <span className="agencies-bento__muted">
                    Run CPM, per-post, retainer, or custom payout structures depending on the campaign.
                  </span>
                </p>

                <div className="agencies-payouts-grid">
                  {/* CPM Card */}
                  <div className="agencies-payout-box agencies-payout-box--cpm">
                    <div className="agencies-payout-box__top">
                      <div className="agencies-payout-box__icon-circle">
                        <img
                          src="/assets/agencies/stat-icon-views.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </div>
                      <h4 className="agencies-payout-box__title">CPM</h4>
                    </div>
                    <div className="agencies-payout-box__img-wrap">
                      <img
                        src="/assets/agencies/bento-grid-1.webp"
                        alt="CPM"
                        className="agencies-payout-box__img"
                      />
                    </div>
                  </div>

                  {/* Retainer Card */}
                  <div className="agencies-payout-box agencies-payout-box--retainer">
                    <div className="agencies-payout-box__top">
                      <div className="agencies-payout-box__icon-circle">
                        <img
                          src="/assets/agencies/stat-icon-payouts.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </div>
                      <h4 className="agencies-payout-box__title">Retainer</h4>
                    </div>
                    <div className="agencies-payout-box__img-wrap">
                      <img
                        src="/assets/agencies/bento-grid-2.webp"
                        alt="Retainer"
                        className="agencies-payout-box__img"
                      />
                    </div>
                  </div>

                  {/* Per post Card */}
                  <div className="agencies-payout-box agencies-payout-box--post">
                    <div className="agencies-payout-box__top">
                      <div className="agencies-payout-box__icon-circle">
                        <img
                          src="/assets/agencies/stat-icon-subs.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </div>
                      <h4 className="agencies-payout-box__title">Per post</h4>
                    </div>
                    <div className="agencies-payout-box__img-wrap">
                      <img
                        src="/assets/agencies/bento-grid-3.webp"
                        alt="Per post"
                        className="agencies-payout-box__img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. AGENCY FAQS SECTION ─────────────────────────────────── */}
      <section className="agencies-faq" id="faq">
        <div className="agencies-faq__container">
          <div className="agencies-faq__header">
            <div className="agencies-faq__badge">FAQS</div>
            <h2 className="agencies-faq__heading">Before you ask...</h2>
          </div>

          <div className="agencies-faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`agencies-faq__item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="agencies-faq__trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="agencies-faq__question">{faq.q}</span>
                    <span className="agencies-faq__chevron">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  <div
                    className="agencies-faq__collapse"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="agencies-faq__answer">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="agencies-faq__footer-help">
            <span>More questions? Talk to our</span>
            <button type="button" className="agencies-faq__support-btn">
              24/7 support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
