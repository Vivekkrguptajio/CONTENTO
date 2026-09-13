"use client";

import React, { useState } from "react";
import "./CreatorsSection.css";

export default function CreatorsSection() {
  const [activeTab, setActiveTab] = useState<"discover" | "post" | "earn">("discover");
  const [statPeriod, setStatPeriod] = useState<"week" | "month" | "year">("month");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      a: "One of three models. CPM pays per 1,000 views, per post pays a flat amount for each approved post, and retainer pays a fixed sum per cycle for an agreed set of deliverables, either pro rata on what you deliver or only once you hit every target.",
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
            <button type="button" className="cr-btn cr-btn--orange">
              Create Account
            </button>
            <button type="button" className="cr-btn cr-btn--grey">
              Browse campaigns
            </button>
          </div>

          {/* Interactive 3-Tab Navigator */}
          <div className="cr-tabs-bar" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "discover"}
              className={`cr-tab-btn ${activeTab === "discover" ? "is-active" : ""}`}
              onClick={() => setActiveTab("discover")}
            >
              Discover
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "post"}
              className={`cr-tab-btn ${activeTab === "post" ? "is-active" : ""}`}
              onClick={() => setActiveTab("post")}
            >
              Post
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "earn"}
              className={`cr-tab-btn ${activeTab === "earn" ? "is-active" : ""}`}
              onClick={() => setActiveTab("earn")}
            >
              Earn
            </button>
          </div>
        </div>

        {/* ── 2. INTERACTIVE DEMO STAGE ───────────────────────────── */}
        <div className="cr-demo-stage">
          {activeTab === "discover" && (
            <div className="cr-carousel-wrap">
              <div className="cr-campaign-cards">
                
                {/* Card 1: Lovable */}
                <div className="cr-card cr-card--side cr-card--side-left">
                  <div className="cr-card-img-wrap cr-card-gradient-purple">
                    <span className="cr-badge-budget">∞ budget</span>
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
                    <h3 className="cr-card-name">Yomi Denzel Clipping - 1$ par 1000 vues</h3>
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
                    <h3 className="cr-card-name">ForgeGUI Clipping</h3>
                    <div className="cr-card-meta">
                      <span className="cr-meta-money">$137k/$156k</span>
                      <span>👥 2.7K</span>
                      <span className="cr-card-rate">● $1/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Call of Duty */}
                <div className="cr-card">
                  <div className="cr-card-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop"
                      alt="Call of Duty"
                      className="cr-card-img"
                    />
                    <span className="cr-badge-brand">CALL OF DUTY</span>
                  </div>
                  <div className="cr-card-body">
                    <div className="cr-card-author">
                      <div className="cr-card-avatar" style={{ background: "#2563EB" }} />
                      <span className="cr-card-author-name">Clipping Cult...</span>
                      <span className="cr-card-verified">✓</span>
                      <span className="cr-card-time">3w</span>
                    </div>
                    <h3 className="cr-card-name">Call of Duty - Modern Warfare 4 Multiplayer Beta Gameplay...</h3>
                    <div className="cr-card-meta">
                      <span className="cr-meta-money">$63k/$105k</span>
                      <span>👥 1K</span>
                      <span className="cr-card-rate">● $1.75/1k</span>
                    </div>
                  </div>
                </div>

                {/* Card 5: Boxabl */}
                <div className="cr-card cr-card--side cr-card--side-right">
                  <div className="cr-card-img-wrap cr-card-gradient-gold">
                    <span className="cr-badge-brand">BOXABL</span>
                  </div>
                  <div className="cr-card-body">
                    <span className="cr-card-name">Boxabl Official Clipping</span>
                    <div className="cr-card-meta">
                      <span>$16k/$85k</span>
                      <span>730 creators</span>
                      <span className="cr-card-rate">$0.50/1k</span>
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
            <div className="cr-earn-demo">
              <div className="cr-earn-box">
                <span className="cr-earn-label">Available to Withdraw</span>
                <span className="cr-earn-amount">$2,862.40</span>
                <p className="cr-earn-desc">Withdraw anytime to Bank, PayPal, Mobile Wallet, or Crypto with 0 fees.</p>
                <button type="button" className="cr-btn cr-btn--orange cr-btn--wide">
                  Withdraw to Bank Account
                </button>
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
                  <div className="cr-filter-item cr-filter-item--active">Featured</div>
                  <div className="cr-filter-item">Newest</div>
                  <div className="cr-filter-item">Budget (highest to lowest)</div>
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
                  <span className="cr-badge-100-text">100%</span>
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
                <div className="cr-metric-strip">
                  <div className="cr-metric-item cr-metric--blue">
                    <span className="cr-metric-num">2M</span>
                    <span className="cr-metric-lbl">Views</span>
                  </div>
                  <div className="cr-metric-item cr-metric--orange">
                    <span className="cr-metric-num">$56,675.75</span>
                    <span className="cr-metric-lbl">Payouts</span>
                  </div>
                  <div className="cr-metric-item cr-metric--amber">
                    <span className="cr-metric-num">$0.99</span>
                    <span className="cr-metric-lbl">eCPM</span>
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
            <button type="button" className="cr-btn cr-btn--dark">
              Join as a creator
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. CAMPAIGN FORMATS (Clipping, Logo, UGC) ─────────────── */}
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

          {/* Format 2: Logo */}
          <div className="cr-format-row cr-format-row--reverse">
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

          {/* Format 3: UGC */}
          <div className="cr-format-row">
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

        </div>
      </section>

      {/* ── 7. TESTIMONIALS & CREATOR WIN WALL ─────────────────────── */}
      <section className="cr-testimonials-section">
        <div className="cr-testimonials-container">
          <span className="cr-eyebrow">TESTIMONIALS</span>
          <h2 className="cr-section-heading">See How Creators Are Winning</h2>

          {/* Video Cards Row */}
          <div className="cr-videos-row">
            <div className="cr-video-card">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=380&fit=crop"
                alt="Jayden testimonial video"
                className="cr-video-img"
              />
              <div className="cr-video-play-btn" aria-label="Play video">▶</div>
              <div className="cr-video-overlay">
                <h4 className="cr-video-title">How Jayden earned thousands per month</h4>
                <span className="cr-video-duration">00:35s</span>
              </div>
            </div>

            <div className="cr-video-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=380&fit=crop"
                alt="AJ testimonial video"
                className="cr-video-img"
              />
              <div className="cr-video-play-btn" aria-label="Play video">▶</div>
              <div className="cr-video-overlay">
                <h4 className="cr-video-title">How AJ earned $21,000</h4>
                <span className="cr-video-duration">04:10s</span>
              </div>
            </div>
          </div>

          {/* Written Testimonial Cards Grid */}
          <div className="cr-quotes-grid">
            
            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" />
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
                <div className="cr-quote-avatar" />
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
                <div className="cr-quote-avatar" />
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
                <div className="cr-quote-avatar" />
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
                <div className="cr-quote-avatar" />
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
                <div className="cr-quote-avatar" />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Jayden</span>
                  <span className="cr-quote-earnings">Thousands per month, 20–30 mins/day</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “I'm able to make thousands per month through content.”
              </p>
            </div>

            <div className="cr-quote-card">
              <div className="cr-quote-header">
                <div className="cr-quote-avatar" />
                <div className="cr-quote-meta">
                  <span className="cr-quote-name">Kreatzen</span>
                  <span className="cr-quote-earnings">$11,000 net profit in 30 days</span>
                </div>
              </div>
              <p className="cr-quote-body">
                “In just 30 days, I earned $11,000 in profit without products or customer service.”
              </p>
            </div>

            {/* Next One Card */}
            <div className="cr-quote-card cr-quote-card--cta">
              <h3 className="cr-next-title">You can be the next one</h3>
              <div className="cr-next-actions">
                <button type="button" className="cr-btn cr-btn--dark">
                  Join as a creator
                </button>
                <button type="button" className="cr-btn cr-btn--grey">
                  Browse campaigns
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. DISCORD COMMUNITY BANNER ────────────────────────────── */}
      <section className="cr-discord-section">
        <div className="cr-discord-banner">
          <div className="cr-discord-content">
            <span className="cr-discord-icon">💬</span>
            <div className="cr-discord-texts">
              <h3 className="cr-discord-heading">Join 25,000+ creators on Discord</h3>
              <p className="cr-discord-sub">
                Ask questions, share clips, get feedback, and hear about new campaigns first.
              </p>
            </div>
          </div>
          <button type="button" className="cr-btn cr-btn--white">
            Join Discord
          </button>
        </div>
      </section>

      {/* ── 9. CREATOR FAQ ACCORDION ───────────────────────────────── */}
      <section className="cr-faq-section">
        <div className="cr-faq-container">
          <h2 className="cr-section-heading">Frequently asked questions</h2>
          
          <div className="cr-faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`cr-faq-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="cr-faq-question-btn"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="cr-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="cr-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
