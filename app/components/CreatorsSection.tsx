"use client";

import React, { useState, useEffect } from "react";
import "./CreatorsSection.css";

export default function CreatorsSection() {
  const [activeTab, setActiveTab] = useState<"discover" | "post" | "earn">("discover");
  const [statPeriod, setStatPeriod] = useState<"week" | "month" | "year">("month");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const tabs: ("discover" | "post" | "earn")[] = ["discover", "post", "earn"];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        return tabs[(currentIndex + 1) % tabs.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const statValues = {
    week: { amount: "$640K+", label: "last week" },
    month: { amount: "$2.4M+", label: "last month" },
    year: { amount: "$20M+", label: "last year" },
  };

  const faqs = [
    {
      q: "What is Content Rewards?",
      a: "Brands put up a budget, you make content that fits the brief, and you get paid on what the campaign pays for. Your accounts stay yours and you post from them as normal.",
    },
    {
      q: "How do I join my first campaign?",
      a: "Browse Discover and join anything that suits your style. Some campaigns take everyone, others ask you to apply first and say so on the page.",
    },
    {
      q: "How do I submit content?",
      a: "Post to the platform the campaign asks for, then submit the link within 30 minutes. What counts as a submission depends on the model: a clip on CPM, a single post on per post, or one of your agreed deliverables on retainer. Only approved posts get paid.",
    },
    {
      q: "Why was my submission rejected?",
      a: "Usually the brief: wrong platform, missing tags or disclosure, reused content, or the post being edited or deleted after you submitted. The rejection note says which.",
    },
    {
      q: "Does someone check my work before I get paid?",
      a: "Yes. Every submission is reviewed by the brand or their campaign manager, and nothing approves automatically.",
    },
    {
      q: "When do payouts happen?",
      a: "On CPM your clip earns for 7 days from approval, then the payout is held 3 days. Per post and retainer depend on how the brand set the campaign up, so check the terms on the campaign page before you join.",
    },
    {
      q: "How do I get my money out?",
      a: "Withdraw from your wallet whenever you have a balance. There is no minimum and we do not charge for it. From your wallet you can send money to a bank account, PayPal, a mobile wallet or crypto, in over 200 countries.",
    },
    {
      q: "How does a campaign decide what I earn?",
      a: "One of three models. CPM pays per 1,000 views, per post pays a flat amount for each approved post, and retainer pays a fixed sum per cycle for an agreed set of deliverables, either pro rata on what you deliver or only once you hit every target. The campaign page names which applies and the rate.",
    },
    {
      q: "Is there a limit on what one clip can earn?",
      a: "Yes. Each campaign sets a maximum payout per clip, shown on the campaign page. A clip stops earning once it reaches that ceiling.",
    },
    {
      q: "What fee does Content Rewards take?",
      a: "A flat 10% of what you earn, on every campaign model. No tiers, no thresholds. Per post and retainer campaigns with a budget of $5,000 or more are free.",
    },
  ];

  const videoTestimonials = [
    {
      name: "Kreatzen",
      title: "How Kreatzen earned $11,000",
      duration: "00:45s",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=380&fit=crop",
    },
    {
      name: "Otto",
      title: "How Otto earned $30,500",
      duration: "01:49s",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=380&fit=crop",
    },
    {
      name: "Halit",
      title: "How Halit earned $3,000",
      duration: "00:46s",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=380&fit=crop",
    },
    {
      name: "Jayden",
      title: "How Jayden earned thousands per month",
      duration: "00:35s",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=380&fit=crop",
    },
    {
      name: "AJ",
      title: "How AJ earned $21,000",
      duration: "04:10s",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=380&fit=crop",
    },
    {
      name: "Tristan",
      title: "How Tristan earned $10K/month",
      duration: "00:43s",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=380&fit=crop",
    },
    {
      name: "Emyl",
      title: "How Emyl earned $16,000",
      duration: "00:31s",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=380&fit=crop",
    },
  ];

  return (
    <div id="for-creators" className="cr-page-container">
      
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="cr-hero">
        <div className="cr-hero-glow" aria-hidden="true" />
        <div className="cr-hero-content">
          <h1 className="cr-hero-title">
            Get Paid for <br />
            Posting Content
          </h1>
          <p className="cr-hero-subtitle">
            Join live campaigns, submit your work, and get paid fast.
          </p>

          <div className="cr-hero-actions">
            <a href="https://contentrewards.com/signup" className="cr-btn cr-btn--orange">
              Create Account
            </a>
            <a href="/discover" className="cr-btn cr-btn--grey">
              Browse campaigns
            </a>
          </div>

          {/* Interactive 3-Tab Navigator */}
          <div className="relative z-[2] mt-10 flex w-full max-w-[440px] md:max-w-[700px] flex-col mx-auto justify-center items-center">
            
            {/* MOBILE TABS (Pill shape) */}
            <div className="flex h-[52px] w-full max-w-[440px] items-center justify-between rounded-full bg-[#261d18]/5 p-1.5 md:hidden">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "discover"}
                className={`flex flex-1 items-center justify-center h-full rounded-full text-[15px] font-medium transition-all duration-200 ${
                  activeTab === "discover"
                    ? "bg-white text-[#2D2518] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                    : "text-[#2d2518]/60 hover:text-[#2d2518]"
                }`}
                onClick={() => setActiveTab("discover")}
              >
                Discover
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "post"}
                className={`flex flex-1 items-center justify-center h-full rounded-full text-[15px] font-medium transition-all duration-200 ${
                  activeTab === "post"
                    ? "bg-white text-[#2D2518] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                    : "text-[#2d2518]/60 hover:text-[#2d2518]"
                }`}
                onClick={() => setActiveTab("post")}
              >
                Post
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "earn"}
                className={`flex flex-1 items-center justify-center h-full rounded-full text-[15px] font-medium transition-all duration-200 ${
                  activeTab === "earn"
                    ? "bg-white text-[#2D2518] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                    : "text-[#2d2518]/60 hover:text-[#2d2518]"
                }`}
                onClick={() => setActiveTab("earn")}
              >
                Earn
              </button>
            </div>

            {/* DESKTOP TABS (Text with Progress Bar) */}
            <div className="hidden md:flex w-full flex-col items-center mt-[78px]">
              <div className="flex items-center justify-center w-full">
                <button 
                  type="button" 
                  onClick={() => setActiveTab("discover")}
                  className={`px-[46px] py-[13px] text-[21px] font-medium transition-opacity ${activeTab === "discover" ? "opacity-100 text-[#2D2518]" : "opacity-40 text-[#2D2518]"}`}
                >
                  Discover
                </button>
                <div className="w-[1px] h-[25px] bg-[#2D2518]/10 rounded-full flex-shrink-0" />
                <button 
                  type="button" 
                  onClick={() => setActiveTab("post")}
                  className={`px-[46px] py-[13px] text-[21px] font-medium transition-opacity ${activeTab === "post" ? "opacity-100 text-[#2D2518]" : "opacity-40 text-[#2D2518]"}`}
                >
                  Post
                </button>
                <div className="w-[1px] h-[25px] bg-[#2D2518]/10 rounded-full flex-shrink-0" />
                <button 
                  type="button" 
                  onClick={() => setActiveTab("earn")}
                  className={`px-[46px] py-[13px] text-[21px] font-medium transition-opacity ${activeTab === "earn" ? "opacity-100 text-[#2D2518]" : "opacity-40 text-[#2D2518]"}`}
                >
                  Earn
                </button>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-1 bg-[#2D2518]/10 rounded-full mt-2 flex overflow-hidden">
                <div className="flex-1 h-full relative">
                  {activeTab === "discover" && <div className="absolute top-0 left-0 h-full bg-[#ff5500] rounded-full animate-tab-progress" />}
                </div>
                <div className="flex-1 h-full relative">
                  {activeTab === "post" && <div className="absolute top-0 left-0 h-full bg-[#ff5500] rounded-full animate-tab-progress" />}
                </div>
                <div className="flex-1 h-full relative">
                  {activeTab === "earn" && <div className="absolute top-0 left-0 h-full bg-[#ff5500] rounded-full animate-tab-progress" />}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. INTERACTIVE DEMO STAGE ───────────────────────────── */}
        <div className="cr-demo-stage">
          {activeTab === "discover" && (
            <div className="cr-carousel-wrap">
              <div className="cr-campaign-cards">
                
                {/* Card 1: Michael Sartain */}
                <div className="cr-card cr-card--side cr-card--side-left">
                  <div className="cr-card-img-wrap cr-card-gradient-purple">
                    <span className="cr-badge-budget">∞ budget</span>
                  </div>
                  <div className="cr-card-body">
                    <span className="cr-card-name">Michael Sartain's Clipping Army</span>
                    <div className="cr-card-meta">
                      <span>$18k/$50k</span>
                      <span>312 creators</span>
                      <span className="cr-card-rate">$1.50/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Yomi Denzel */}
                <div className="cr-card">
                  <div className="cr-card-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop"
                      alt="Yomi Denzel"
                      className="cr-card-img"
                    />
                    <span className="cr-badge-brand">YOMI DENZEL</span>
                  </div>
                  <div className="cr-card-body">
                    <div className="cr-card-author">
                      <div className="cr-card-avatar" />
                      <span className="cr-card-author-name">Yomi Denzel</span>
                      <span className="cr-card-verified">✓</span>
                      <span className="cr-card-time">9mo</span>
                    </div>
                    <h3 className="cr-card-name">FR Yomi Denzel Campagne Principale</h3>
                    <div className="cr-card-meta">
                      <span className="cr-meta-money">$220k/$238k</span>
                      <span>👥 264</span>
                      <span className="cr-card-rate">● $1/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: ForgeGUI (Centerpiece) */}
                <div className="cr-card cr-card--featured">
                  <div className="cr-card-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
                      alt="ForgeGUI Clipping"
                      className="cr-card-img"
                    />
                    <span className="cr-badge-brand">FORGEGUI</span>
                  </div>
                  <div className="cr-card-body">
                    <div className="cr-card-author">
                      <div className="cr-card-avatar" style={{ background: "#3B82F6" }} />
                      <span className="cr-card-author-name">BloxClips</span>
                      <span className="cr-card-verified">✓</span>
                      <span className="cr-card-time">4mo</span>
                    </div>
                    <h3 className="cr-card-name">ForgeGUI Clipping [Roblox]</h3>
                    <div className="cr-card-meta">
                      <span className="cr-meta-money">$137k/$156k</span>
                      <span>👥 2.7K</span>
                      <span className="cr-card-rate">● $1/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Goli NAD+ */}
                <div className="cr-card">
                  <div className="cr-card-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop"
                      alt="Goli NAD+"
                      className="cr-card-img"
                    />
                    <span className="cr-badge-brand">GOLI × TARGET</span>
                  </div>
                  <div className="cr-card-body">
                    <div className="cr-card-author">
                      <div className="cr-card-avatar" style={{ background: "#2563EB" }} />
                      <span className="cr-card-author-name">ClipFarm</span>
                      <span className="cr-card-verified">✓</span>
                      <span className="cr-card-time">2w</span>
                    </div>
                    <h3 className="cr-card-name">Goli NAD+ × Target Campaign - ClipFarm</h3>
                    <div className="cr-card-meta">
                      <span className="cr-meta-money">$94k/$120k</span>
                      <span>👥 840</span>
                      <span className="cr-card-rate">● $1.25/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 5: Lovable */}
                <div className="cr-card cr-card--side cr-card--side-right">
                  <div className="cr-card-img-wrap cr-card-gradient-gold">
                    <span className="cr-badge-brand">LOVABLE</span>
                  </div>
                  <div className="cr-card-body">
                    <span className="cr-card-name">Lovable Clipping</span>
                    <div className="cr-card-meta">
                      <span>$8k/$50k</span>
                      <span>243 creators</span>
                      <span className="cr-card-rate">$1/1k</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === "post" && (
            <div className="cr-post-demo">
              <div className="cr-post-box">
                <p className="cr-post-hint">Paste your video and see estimated earnings</p>
                <div className="cr-post-input-wrap">
                  <span className="cr-post-link-icon">🔗</span>
                  <input
                    type="text"
                    readOnly
                    value="https://www.tiktok.com/@creator/video/74128956041..."
                    className="cr-post-input"
                  />
                  <button type="button" className="cr-post-submit-btn">
                    Analyze Clip
                  </button>
                </div>
                <div className="cr-post-preview-card">
                  <div className="cr-post-preview-thumb" />
                  <div className="cr-post-preview-info">
                    <span className="cr-post-preview-title">Video approved for payout</span>
                    <span className="cr-post-preview-metric">Est. 420,000 views • $420.00 accrued</span>
                  </div>
                  <span className="cr-post-status-badge">Live Earning</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "earn" && (
            <div className="cr-earn-demo flex justify-center items-center py-[60px] relative w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFB] via-[#FFF5E6] to-[#FDE68A] opacity-70 z-0" />
              
              <div className="cr-receipt-card z-10">
                <span className="text-[#2D2518]/60 text-[15px] font-medium mb-3">Your submission in</span>
                
                <div className="flex items-center gap-2 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop" 
                    alt="ForgeGUI" 
                    className="w-[42px] h-[28px] object-cover rounded-[6px]"
                  />
                  <span className="text-[#2D2518] text-[17px] font-bold">ForgeGUI Clipping [Roblox]</span>
                </div>

                <div className="text-[#2D2518] text-[84px] leading-none font-[family-name:var(--font-suisse)] tracking-[-0.04em] mb-4">
                  $40.59
                </div>

                <span className="text-[#2D2518]/60 text-[15px] font-medium">Net payout</span>
              </div>
            </div>
          )}
        </div>

        {/* ── 3. BRANDS BAR ────────────────────────────────────────── */}
        <div className="cr-brands-section">
          <p className="cr-brands-title">
            Work with the biggest brands alongside 1M+ creators
          </p>
          <div className="cr-brands-logos">
            <span className="cr-brand-logo">DOORDASH</span>
            <span className="cr-brand-logo cr-brand-f1">F1</span>
            <span className="cr-brand-logo">ebay</span>
            <span className="cr-brand-logo cr-brand-capcut">CapCut</span>
          </div>
        </div>
      </section>

      {/* ── 4. STATS SECTION ($20M+) ──────────────────────────────── */}
      <section className="cr-stats-section">
        <div className="cr-stats-container">
          <h2 className="cr-stats-amount">{statValues[statPeriod].amount}</h2>
          <p className="cr-stats-label">Paid to creators {statValues[statPeriod].label}...</p>
          
          <div className="cr-stats-pills" role="group" aria-label="Stat Period">
            <button
              type="button"
              className={`cr-stats-pill ${statPeriod === "week" ? "is-active" : ""}`}
              onClick={() => setStatPeriod("week")}
            >
              Week
            </button>
            <button
              type="button"
              className={`cr-stats-pill ${statPeriod === "month" ? "is-active" : ""}`}
              onClick={() => setStatPeriod("month")}
            >
              Month
            </button>
            <button
              type="button"
              className={`cr-stats-pill ${statPeriod === "year" ? "is-active" : ""}`}
              onClick={() => setStatPeriod("year")}
            >
              Year
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. "SIMPLY THE BEST." BENTO GRID (6 CARDS) ─────────────── */}
      <section className="cr-bento-section">
        <div className="cr-bento-container">
          <h2 className="cr-section-heading">Simply the best.</h2>

          <div className="cr-bento-grid">
            
            {/* Card 1: Easy */}
            <div className="cr-bento-card cr-bento-card--easy">
              <div className="cr-bento-card__visual">
                <div className="cr-withdraw-widget">
                  <span className="cr-withdraw-val">$2,862</span>
                  <h4 className="cr-withdraw-title">Withdraw your earnings</h4>
                  <p className="cr-withdraw-desc">
                    You have $2,862 available. Withdraw it to your account anytime.
                  </p>
                  <button type="button" className="cr-btn cr-btn--orange cr-withdraw-btn">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="cr-bento-card__footer">
                <h3 className="cr-bento-title">Easy</h3>
                <p className="cr-bento-desc">
                  Choose a campaign, create content, and get paid.
                </p>
              </div>
            </div>

            {/* Card 2: Flexible */}
            <div className="cr-bento-card cr-bento-card--flexible">
              <div className="cr-bento-card__visual cr-visual--filters">
                <div className="cr-filter-mockup">
                  <div>
                    <span className="cr-filter-group-title">Sort by</span>
                    <div className="cr-filter-row">
                      <span className="cr-filter-item cr-filter-item--active">Featured</span>
                      <span className="cr-filter-item">Newest</span>
                      <span className="cr-filter-item">Budget (highest to lowest)</span>
                      <span className="cr-filter-item">CPM (highest to lowest)</span>
                      <span className="cr-filter-item">Paid out (highest to lowest)</span>
                      <span className="cr-filter-item">Creators (highest to lowest)</span>
                    </div>
                  </div>
                  <div>
                    <span className="cr-filter-group-title">Filter by</span>
                    <div className="cr-filter-row">
                      <span className="cr-filter-item">Content</span>
                      <span className="cr-filter-item">Category</span>
                      <span className="cr-filter-item">Type</span>
                      <span className="cr-filter-item">Budget</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cr-bento-card__footer">
                <h3 className="cr-bento-title">Flexible</h3>
                <p className="cr-bento-desc">
                  Create what you want, for brands you actually like.
                </p>
              </div>
            </div>

            {/* Card 3: Fast */}
            <div className="cr-bento-card cr-bento-card--fast">
              <div className="cr-bento-card__visual cr-visual--fast">
                <div className="cr-badge-100">
                  <span className="cr-badge-100-text">0%</span>
                </div>
              </div>
              <div className="cr-bento-card__footer">
                <h3 className="cr-bento-title">Fast</h3>
                <p className="cr-bento-desc">
                  Get paid after approval with no invoices or chasing payments.
                </p>
              </div>
            </div>

            {/* Card 4: Limitless */}
            <div className="cr-bento-card cr-bento-card--limitless">
              <div className="cr-bento-card__visual cr-visual--bars">
                <div className="cr-chart-bars">
                  <span className="cr-chart-bar cr-bar--1" />
                  <span className="cr-chart-bar cr-bar--2" />
                  <span className="cr-chart-bar cr-bar--3" />
                  <span className="cr-chart-bar cr-bar--4" />
                  <span className="cr-chart-bar cr-bar--5" />
                </div>
              </div>
              <div className="cr-bento-card__footer">
                <h3 className="cr-bento-title">Limitless</h3>
                <p className="cr-bento-desc">
                  The more great content you make, the more you can earn.
                </p>
              </div>
            </div>

            {/* Card 5: Transparent */}
            <div className="cr-bento-card cr-bento-card--transparent">
              <div className="cr-bento-card__visual cr-visual--metrics">
                <div className="cr-metric-pills">
                  {/* Payouts */}
                  <div className="cr-metric-pill cr-metric-pill--green">
                    <div className="cr-metric-pill__icon">
                      <img src="/assets/agencies/stat-icon-payouts.svg" alt="" width="18" height="18" />
                    </div>
                    <div className="cr-metric-pill__text">
                      <span className="cr-metric-pill__val">$56,675.75</span>
                      <span className="cr-metric-pill__lbl">Payouts</span>
                    </div>
                  </div>

                  {/* eCPM / CPM */}
                  <div className="cr-metric-pill cr-metric-pill--orange">
                    <div className="cr-metric-pill__icon">
                      <img src="/assets/agencies/stat-icon-ecpm.svg" alt="" width="18" height="18" />
                    </div>
                    <div className="cr-metric-pill__dual">
                      <div className="cr-metric-pill__text">
                        <span className="cr-metric-pill__val">$0.99</span>
                        <span className="cr-metric-pill__lbl">eCPM</span>
                      </div>
                      <div className="cr-metric-pill__sep" />
                      <div className="cr-metric-pill__text">
                        <span className="cr-metric-pill__val">$1.93</span>
                        <span className="cr-metric-pill__lbl">CPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Views */}
                  <div className="cr-metric-pill cr-metric-pill--blue">
                    <div className="cr-metric-pill__icon">
                      <img src="/assets/agencies/stat-icon-views.svg" alt="" width="18" height="18" />
                    </div>
                    <div className="cr-metric-pill__text">
                      <span className="cr-metric-pill__val">107.2M</span>
                      <span className="cr-metric-pill__lbl">Views</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cr-bento-card__footer">
                <h3 className="cr-bento-title">Transparent</h3>
                <p className="cr-bento-desc">
                  Track your views, earnings, and payouts in one place.
                </p>
              </div>
            </div>

          </div>

          <div className="cr-bento-action-center">
            <a href="https://contentrewards.com/signup" className="cr-btn cr-btn--dark">
              Join as a creator
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. CAMPAIGN FORMATS (Clipping, Music, Logo, UGC) ────────── */}
      <section className="cr-formats-section">
        <div className="cr-formats-container">
          
          {/* Format 1: Clipping */}
          <div className="cr-format-row">
            <div className="cr-format-copy">
              <div className="cr-format-icon-pill">✂️</div>
              <h3 className="cr-format-heading">
                <strong>Clipping campaigns.</strong> Clip and repost top content, then earn for every view.
              </h3>
            </div>
            <div className="cr-format-visual">
              <div className="cr-format-preview cr-preview--clipping">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop"
                  alt="Clipping campaign demo"
                  className="cr-format-img"
                />
                <div className="cr-format-badge-live">Earn $1.50 per 1k views</div>
              </div>
            </div>
          </div>

          {/* Format 2: Music */}
          <div className="cr-format-row cr-format-row--reverse">
            <div className="cr-format-copy">
              <div className="cr-format-icon-pill">🎵</div>
              <h3 className="cr-format-heading">
                <strong>Music campaigns.</strong> Use trending songs in your content and earn as it performs.
              </h3>
            </div>
            <div className="cr-format-visual">
              <div className="cr-format-preview cr-preview--music">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=300&fit=crop"
                  alt="Music campaign demo"
                  className="cr-format-img"
                />
                <div className="cr-format-badge-live">Trending Audio • $2.00 per 1k views</div>
              </div>
            </div>
          </div>

          {/* Format 3: Logo */}
          <div className="cr-format-row">
            <div className="cr-format-copy">
              <div className="cr-format-icon-pill">🎯</div>
              <h3 className="cr-format-heading">
                <strong>Logo campaigns.</strong> Place brand logos in your content and get paid for exposure.
              </h3>
            </div>
            <div className="cr-format-visual">
              <div className="cr-format-preview cr-preview--logo">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
                  alt="Logo campaign demo"
                  className="cr-format-img"
                />
                <div className="cr-format-badge-live">Logo Verified • $500 flat</div>
              </div>
            </div>
          </div>

          {/* Format 4: UGC */}
          <div className="cr-format-row cr-format-row--reverse">
            <div className="cr-format-copy">
              <div className="cr-format-icon-pill">📹</div>
              <h3 className="cr-format-heading">
                <strong>UGC campaigns.</strong> Film original content for brands and get paid per post or on retainer.
              </h3>
            </div>
            <div className="cr-format-visual">
              <div className="cr-format-preview cr-preview--ugc">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop"
                  alt="UGC campaign demo"
                  className="cr-format-img"
                />
                <div className="cr-format-badge-live">$2,500/mo Retainer</div>
              </div>
            </div>
          </div>

          {/* Format CTA actions */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a href="https://contentrewards.com/signup" className="cr-btn cr-btn--dark">
              Join as a creator
            </a>
          </div>

        </div>
      </section>

      {/* ── 7. TESTIMONIALS & CREATOR WIN WALL ─────────────────────── */}
      <section className="cr-testimonials-section">
        <div className="cr-testimonials-container">
          <span className="cr-eyebrow">TESTIMONIALS</span>
          <h2 className="cr-section-heading">See How Creators Are Winning</h2>

          {/* Video Cards Row (All 7 creators) */}
          <div className="cr-videos-row">
            {videoTestimonials.map((v) => (
              <div key={v.name} className="cr-video-card">
                <img
                  src={v.img}
                  alt={v.title}
                  className="cr-video-img"
                />
                <div className="cr-video-play-btn" aria-label="Play video">▶</div>
                <div className="cr-video-overlay">
                  <h4 className="cr-video-title">{v.title}</h4>
                  <span className="cr-video-duration">{v.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Written Testimonial Cards Grid (Exact 7 quotes from Content Rewards) */}
          <div className="cr-quotes-grid">
            
            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #FF6B2B, #FF8E53)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Otto</span>
                  <span className="cr-quote-earnings">$30,500 earned since Feb 2025</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “A 20-second video made me $4,000 — Whop Content Rewards is a complete game changer.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #3B82F6, #60A5FA)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">AJ</span>
                  <span className="cr-quote-earnings">$21,000 in first month</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “The easiest money I've made in five years, just from posting short videos online.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #10B981, #34D399)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Halit</span>
                  <span className="cr-quote-earnings">$3,000 earned in just a few months</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “Content Rewards made UGC simple. Just post and get paid.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #8B5CF6, #A78BFA)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Kreatzen</span>
                  <span className="cr-quote-earnings">$11,000 net profit in 30 days</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “In just 30 days, I earned $11,000 in profit without products or customer service.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Tristan</span>
                  <span className="cr-quote-earnings">Zero to $10K/month in 2 months</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “At 18, I went from zero to nearly $10K a month in just two months — life changing.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #EC4899, #F472B6)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Emyl</span>
                  <span className="cr-quote-earnings">$16,000 earned in less than 3 months</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “I started broke with zero in the bank, and Content Rewards gave me the blueprint.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" style={{ background: "linear-gradient(135deg, #14B8A6, #2DD4BF)" }} />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Jayden</span>
                  <span className="cr-quote-earnings">Thousands per month, 20–30 minutes a day</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “I'm able to make thousands per month through content.”
              </p>
            </div>

            {/* Next One Card */}
            <div className="cr-quote-card cr-quote-card--next">
              <p className="cr-next-title">You can be the next one</p>
              <div className="cr-next-actions">
                <a href="https://contentrewards.com/signup" className="cr-btn-pill-dark">
                  Join as a creator
                </a>
                <a href="/discover" className="cr-btn-pill-grey">
                  Browse campaigns
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. CREATE FOR THE TOP BRANDS TODAY ─────────────────────── */}
      <section className="relative z-10 py-[48px] md:py-[64px]">
        <div className="mx-auto max-w-[75rem] px-4 md:px-8">
          <div className="relative overflow-clip rounded-[28px] bg-white md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#2D2518]/6">
            <div
              aria-hidden="true"
              className="absolute -inset-x-[30%] top-[25%] bottom-[-15%] blur-[100px] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 1%, #FBC433 43%, #FF6C03 86%, #FF0303 100%)",
              }}
            />
            <div className="relative flex flex-col items-start gap-[36px] px-[24px] py-[48px] md:gap-[44px] md:px-[72px] md:py-[80px] max-w-[560px]">
              <div className="flex flex-col items-start gap-[18px] md:gap-[24px]">
                <h2 className="font-medium text-[#2D2518] text-[34px] leading-[1] tracking-[-0.03em] sm:text-[44px] md:text-[52px] text-left">
                  Create for the top brands today
                </h2>
                <p className="font-medium text-[#2D2518]/70 text-[15px] leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                  It only takes 12 clicks to make your first dollar on Content Rewards.
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-x-[16px] gap-y-[18px] md:gap-y-[24px] max-w-[420px]">
                <div className="flex items-center gap-[10px] opacity-80 md:gap-[12px]">
                  <svg className="size-[20px] shrink-0 md:size-[22px]" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#2D2518" strokeWidth="1.5" />
                    <text x="12" y="16" textAnchor="middle" fill="#2D2518" fontSize="11" fontWeight="bold" fontFamily="sans-serif">$</text>
                  </svg>
                  <span className="font-medium text-[#2D2518]/70 text-[15px] leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                    $20M paid out
                  </span>
                </div>
                <div className="flex items-center gap-[10px] opacity-80 md:gap-[12px]">
                  <svg className="size-[20px] shrink-0 md:size-[22px]" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#2D2518" />
                  </svg>
                  <span className="font-medium text-[#2D2518]/70 text-[15px] leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                    1M+ creators
                  </span>
                </div>
                <div className="flex items-center gap-[10px] opacity-80 md:gap-[12px]">
                  <svg className="size-[20px] shrink-0 md:size-[22px]" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" fill="#2D2518" />
                  </svg>
                  <span className="font-medium text-[#2D2518]/70 text-[15px] leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                    24/7 support
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-[12px]">
                <a
                  className="relative flex cursor-pointer items-center justify-center overflow-clip rounded-full border border-[#110D0C] bg-[#110D0C] px-[20px] py-[12px] transition-colors duration-150 hover:bg-[#2A211D] md:py-[14px]"
                  href="https://contentrewards.com/signup"
                >
                  <span className="relative z-10 font-medium text-[15px] text-white leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                    Join as a creator
                  </span>
                </a>
                <a
                  className="flex cursor-pointer items-center justify-center rounded-full bg-[#261D18]/5 px-[20px] py-[12px] font-medium text-[15px] text-[#2D2518] leading-[1.5] tracking-[-0.01em] transition-colors duration-150 hover:bg-[#261D18]/10 md:py-[14px] md:text-[16px]"
                  href="/discover"
                >
                  Browse campaigns
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ("Before you ask...") ───────────────────── */}
      <section className="relative z-10 py-16 md:py-24" id="faq">
        <div className="mx-auto max-w-[75rem] px-4 md:px-8">
          <div className="mx-auto flex w-full max-w-[700px] flex-col items-center gap-[36px] md:gap-[48px]">
            <div className="flex flex-col items-center gap-[18px] md:gap-[24px]">
              <div className="flex items-center justify-center rounded-full bg-[#261D18]/5 px-[16px] py-[9px] md:px-[18px] md:py-[10px]">
                <span className="font-mono font-normal text-[#261D18] text-[12px] uppercase leading-[0.9] tracking-[0.02em] md:text-[13px]">
                  FAQs
                </span>
              </div>
              <h2 className="text-center font-medium text-[#2D2518] text-[34px] leading-[1] tracking-[-0.03em] sm:text-[44px] md:text-[52px]">
                Before you ask...
              </h2>
            </div>

            <div className="flex w-full flex-col gap-[12px] md:gap-[18px]">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-[18px] border border-[#2D2518]/10 bg-white/40 transition-colors duration-200 md:rounded-[22px]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-[20px] py-[18px] text-left md:py-[24px] md:pr-[28px] md:pl-[34px] cursor-pointer"
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-medium font-sans text-[#2D2518] text-[16px] leading-[1.4] tracking-[-0.01em] md:text-[19px] md:leading-[1.5]">
                        {faq.q}
                      </h3>
                      <div
                        className={`shrink-0 text-[#2D2518] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          fill="none"
                          height="20"
                          viewBox="0 0 24 24"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2929 8.79289C17.6834 8.40237 18.3164 8.40237 18.707 8.79289C19.0975 9.18342 19.0975 9.81643 18.707 10.207L12.707 16.207C12.3164 16.5975 11.6834 16.5975 11.2929 16.207L5.29289 10.207C4.90237 9.81643 4.90237 9.18342 5.29289 8.79289C5.68342 8.40237 6.31643 8.40237 6.70696 8.79289L11.9999 14.0859L17.2929 8.79289Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-[20px] pb-[20px] md:pr-[28px] md:pl-[34px] md:pb-[26px]">
                        <p className="max-w-[36em] font-medium text-[#2D2518]/70 text-[15px] leading-[1.6] tracking-[-0.01em] md:text-[17px] md:leading-[1.65]">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
