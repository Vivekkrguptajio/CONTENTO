"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
      <path
        d="M12 6L13.8 11.5L19.5 13.3L13.8 15.1L12 20.6L10.2 15.1L4.5 13.3L10.2 11.5L12 6Z"
        fill="#110D0C"
      />
      <path
        d="M23 8L24.2 10.8L27 12L24.2 13.2L23 16L21.8 13.2L19 12L21.8 10.8L23 8Z"
        fill="#110D0C"
      />
      <path
        d="M24 20L24.8 22.2L27 23L24.8 23.8L24 26L23.2 23.8L21 23L23.2 22.2L24 20Z"
        fill="#110D0C"
      />
      <path
        d="M11 22L11.8 23.8L13.6 24.6L11.8 25.4L11 27.2L10.2 25.4L8.4 24.6L10.2 23.8L11 22Z"
        fill="#110D0C"
      />
      <path
        d="M5 18L5.5 19.2L6.7 19.7L5.5 20.2L5 21.4L4.5 20.2L3.3 19.7L4.5 19.2L5 18Z"
        fill="#110D0C"
      />
    </svg>
    <div className="nav-logo-text">
      <span className="nav-logo-line">Content</span>
      <span className="nav-logo-line">Rewards</span>
    </div>
  </div>
);

type ActiveMenu = "solutions" | "resources" | null;

export default function Navbar() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 100, width: 330, height: 265 });

  const navMenuRef = useRef<HTMLElement>(null);
  const solutionsBtnRef = useRef<HTMLButtonElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Measure and adjust dropdown position & dimensions
  const updateDropdownPos = useCallback((menu: "solutions" | "resources") => {
    if (menu === "solutions") {
      const left = solutionsBtnRef.current ? solutionsBtnRef.current.offsetLeft - 12 : 110;
      setDropdownPos({ left, width: 330, height: 265 });
    } else if (menu === "resources") {
      const left = resourcesBtnRef.current ? resourcesBtnRef.current.offsetLeft - 70 : 180;
      setDropdownPos({ left, width: 580, height: 220 });
    }
  }, []);

  const cancelCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = (menu: "solutions" | "resources") => {
    cancelCloseTimeout();
    updateDropdownPos(menu);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    cancelCloseTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleMenu = (menu: "solutions" | "resources") => {
    cancelCloseTimeout();
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      updateDropdownPos(menu);
      setActiveMenu(menu);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sticky header scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update positions on resize if open
  useEffect(() => {
    const handleResize = () => {
      if (activeMenu) updateDropdownPos(activeMenu);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMenu, updateDropdownPos]);

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
              <a href="/creator" className="nav-announcement-link">
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

              {/* ── MAIN NAV MENU WITH MORPHING DROPDOWN CONTAINER ──── */}
              <nav
                ref={navMenuRef}
                className="nav-menu"
                aria-label="Main Navigation"
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#discover"
                  className="nav-link"
                  onMouseEnter={() => {
                    cancelCloseTimeout();
                    setActiveMenu(null);
                  }}
                >
                  Discover
                </a>

                {/* Solutions Trigger */}
                <button
                  ref={solutionsBtnRef}
                  type="button"
                  className={`nav-link nav-btn-dropdown ${
                    activeMenu === "solutions" ? "is-active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onClick={() => toggleMenu("solutions")}
                  aria-expanded={activeMenu === "solutions"}
                  aria-haspopup="true"
                >
                  <span>Solutions</span>
                  <svg
                    className={`nav-chevron ${
                      activeMenu === "solutions" ? "is-open" : ""
                    }`}
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Resources Trigger */}
                <button
                  ref={resourcesBtnRef}
                  type="button"
                  className={`nav-link nav-btn-dropdown ${
                    activeMenu === "resources" ? "is-active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onClick={() => toggleMenu("resources")}
                  aria-expanded={activeMenu === "resources"}
                  aria-haspopup="true"
                >
                  <span>Resources</span>
                  <svg
                    className={`nav-chevron ${
                      activeMenu === "resources" ? "is-open" : ""
                    }`}
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* ── SEAMLESS MORPHING SHARED DROPDOWN CONTAINER ────── */}
                {/* The card adjusts width, height, and left position smoothly without unmounting */}
                <div
                  className={`nav-morph-dropdown ${activeMenu ? "is-visible" : ""}`}
                  style={{
                    left: `${dropdownPos.left}px`,
                    width: `${dropdownPos.width}px`,
                    minHeight: `${dropdownPos.height}px`,
                  }}
                  onMouseEnter={cancelCloseTimeout}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                >
                  <div className="nav-morph-viewport">
                    
                    {/* Pane 1: Solutions */}
                    <div
                      className={`nav-morph-pane ${
                        activeMenu === "solutions"
                          ? "is-active"
                          : activeMenu === "resources"
                          ? "is-inactive-left"
                          : "is-hidden"
                      }`}
                    >
                      <div className="nav-dropdown-section-label">By role</div>
                      <div className="nav-dropdown-list">
                        
                        <a
                          href="/creator"
                          className="nav-dropdown-item"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="nav-dropdown-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <rect x="2" y="4" width="20" height="16" rx="5" fill="#52504C" />
                              <polygon points="10 8 16 12 10 16" fill="#F3F2EE" />
                            </svg>
                          </div>
                          <div className="nav-dropdown-text">
                            <span className="nav-dropdown-title">For Creators</span>
                            <span className="nav-dropdown-desc">Get paid to post</span>
                          </div>
                        </a>

                        <a
                          href="#for-brands"
                          className="nav-dropdown-item"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="nav-dropdown-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 2.5L21.5 12L12 21.5L2.5 12L12 2.5Z"
                                fill="#52504C"
                              />
                            </svg>
                          </div>
                          <div className="nav-dropdown-text">
                            <span className="nav-dropdown-title">For Brands</span>
                            <span className="nav-dropdown-desc">
                              Run creator campaigns at scale
                            </span>
                          </div>
                        </a>

                        <a
                          href="#for-agencies"
                          className="nav-dropdown-item"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="nav-dropdown-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M9.5 5.5L15 11L13 13L7.5 7.5L9.5 5.5Z"
                                fill="#8C8A85"
                              />
                              <path
                                d="M14.5 10.5L20 16L14.5 21.5L9 16L14.5 10.5Z"
                                fill="#52504C"
                              />
                              <path
                                d="M8.5 4.5L14 10L8.5 15.5L3 10L8.5 4.5Z"
                                fill="#52504C"
                              />
                            </svg>
                          </div>
                          <div className="nav-dropdown-text">
                            <span className="nav-dropdown-title">For Agencies</span>
                            <span className="nav-dropdown-desc">
                              Manage campaigns for clients
                            </span>
                          </div>
                        </a>

                      </div>
                    </div>

                    {/* Pane 2: Resources */}
                    <div
                      className={`nav-morph-pane ${
                        activeMenu === "resources"
                          ? "is-active"
                          : activeMenu === "solutions"
                          ? "is-inactive-right"
                          : "is-hidden"
                      }`}
                    >
                      <div className="nav-dropdown-cols">
                        
                        {/* Col 1: Resources */}
                        <div className="nav-dropdown-col">
                          <div className="nav-dropdown-section-label">Resources</div>
                          <div className="nav-dropdown-list">
                            
                            <a
                              href="#pricing"
                              className="nav-dropdown-item"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="nav-dropdown-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path
                                    d="M12 4C10.5 4 10 5.5 10 6C8 6.5 6 9 6 13C6 17.5 8.5 20 12 20C15.5 20 18 17.5 18 13C18 9 16 6.5 14 6C14 5.5 13.5 4 12 4Z"
                                    fill="#52504C"
                                  />
                                  <circle cx="12" cy="13" r="2" fill="#F3F2EE" />
                                </svg>
                              </div>
                              <div className="nav-dropdown-text">
                                <span className="nav-dropdown-title">Pricing</span>
                                <span className="nav-dropdown-desc">
                                  Plans and payout rates
                                </span>
                              </div>
                            </a>

                            <a
                              href="#changelog"
                              className="nav-dropdown-item"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="nav-dropdown-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <rect x="5" y="5" width="14" height="4" rx="2" fill="#52504C" />
                                  <rect x="5" y="10" width="14" height="4" rx="2" fill="#52504C" />
                                  <rect x="5" y="15" width="14" height="4" rx="2" fill="#52504C" />
                                </svg>
                              </div>
                              <div className="nav-dropdown-text">
                                <span className="nav-dropdown-title">Changelog</span>
                                <span className="nav-dropdown-desc">
                                  See what gets shipped
                                </span>
                              </div>
                            </a>

                          </div>
                        </div>

                        {/* Col 2: Company */}
                        <div className="nav-dropdown-col">
                          <div className="nav-dropdown-section-label">Company</div>
                          <div className="nav-dropdown-list">
                            
                            <a
                              href="#brand-kit"
                              className="nav-dropdown-item"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="nav-dropdown-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <rect x="5" y="4" width="14" height="6" rx="2" fill="#52504C" />
                                  <path d="M12 10V15H10V19H14V15H12" fill="#52504C" />
                                </svg>
                              </div>
                              <div className="nav-dropdown-text">
                                <span className="nav-dropdown-title">Brand Kit</span>
                                <span className="nav-dropdown-desc">
                                  Logo, colours, and assets
                                </span>
                              </div>
                            </a>

                            <a
                              href="#terms"
                              className="nav-dropdown-item"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="nav-dropdown-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <rect x="6" y="3" width="12" height="18" rx="2" fill="#52504C" />
                                  <line x1="9" y1="8" x2="15" y2="8" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                                  <line x1="9" y1="12" x2="15" y2="12" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                                  <line x1="9" y1="16" x2="13" y2="16" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                              </div>
                              <div className="nav-dropdown-text">
                                <span className="nav-dropdown-title">Terms and Legal</span>
                                <span className="nav-dropdown-desc">
                                  Disclosure and policy info
                                </span>
                              </div>
                            </a>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
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
