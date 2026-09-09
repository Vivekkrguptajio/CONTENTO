"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";

/* ── Content Rewards Star Cluster Logo ───────────────────────────── */
const ContentRewardsLogo = () => (
  <div className="nav-logo-brand">
    <svg
      className="nav-logo-stars"
      width="34"
      height="34"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center 4-point star */}
      <path
        d="M12 6L13.8 11.5L19.5 13.3L13.8 15.1L12 20.6L10.2 15.1L4.5 13.3L10.2 11.5L12 6Z"
        fill="#0f172a"
      />
      {/* Top right star */}
      <path
        d="M23 8L24.2 10.8L27 12L24.2 13.2L23 16L21.8 13.2L19 12L21.8 10.8L23 8Z"
        fill="#0f172a"
      />
      {/* Bottom right star */}
      <path
        d="M24 20L24.8 22.2L27 23L24.8 23.8L24 26L23.2 23.8L21 23L23.2 22.2L24 20Z"
        fill="#0f172a"
      />
      {/* Bottom left star */}
      <path
        d="M11 22L11.8 23.8L13.6 24.6L11.8 25.4L11 27.2L10.2 25.4L8.4 24.6L10.2 23.8L11 22Z"
        fill="#0f172a"
      />
      {/* Tiny left star */}
      <path
        d="M5 18L5.5 19.2L6.7 19.7L5.5 20.2L5 21.4L4.5 20.2L3.3 19.7L4.5 19.2L5 18Z"
        fill="#0f172a"
      />
    </svg>
    <div className="nav-logo-text">
      <span className="nav-logo-line">Content</span>
      <span className="nav-logo-line">Rewards</span>
    </div>
  </div>
);

export default function Navbar() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-sticky-wrapper ${isScrolled ? "is-scrolled" : ""}`}>
      {/* ── 1. Top Orange Announcement Bar ────────────────────────── */}
      {bannerVisible && (
        <aside className="nav-announcement" aria-label="Announcement">
          <div className="nav-announcement-content">
            <span className="nav-announcement-bold">Are you a creator?</span>
            <span className="nav-announcement-divider">|</span>
            <a href="#" className="nav-announcement-link">
              Click Here to Start Earning
            </a>
          </div>
          <button
            type="button"
            className="nav-announcement-close"
            onClick={() => setBannerVisible(false)}
            aria-label="Close announcement"
          >
            &times;
          </button>
        </aside>
      )}

      {/* ── 2. Sticky Navigation Header ───────────────────────────── */}
      <header className="nav-header">
        <div className="nav-container">
          {/* Left: Logo & Nav Links */}
          <div className="nav-left">
            <a href="/" className="nav-brand-link" aria-label="Content Rewards Home">
              <ContentRewardsLogo />
            </a>

            <nav className="nav-menu" aria-label="Main Navigation">
              <a href="#discover" className="nav-link">
                Discover
              </a>

              <div className="nav-dropdown">
                <button type="button" className="nav-link nav-btn-dropdown">
                  Solutions
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>

              <div className="nav-dropdown">
                <button type="button" className="nav-link nav-btn-dropdown">
                  Resources
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          {/* Right: Sign In & Action Buttons */}
          <div className="nav-right">
            <a href="#signin" className="nav-signin-link">
              Sign in
            </a>
            <button type="button" className="nav-btn nav-btn--primary">
              Launch a Campaign
            </button>
            <button type="button" className="nav-btn nav-btn--secondary">
              See a Demo
            </button>
          </div>
        </div>
      </header>
    </div>
    {/* Spacer so page content starts naturally below the fixed navbar */}
    <div
      className="nav-fixed-spacer"
      style={{ height: bannerVisible ? 104 : 68 }}
      aria-hidden="true"
    />
  </>
);
}
