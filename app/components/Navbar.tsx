"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

/* ── Assets Brand Logo (/assets/logo/pomera_logo_light.png - 108x24) ──── */
const BrandLogo = ({
  isDark = false,
  className = "",
}: {
  isDark?: boolean;
  className?: string;
}) => (
  <img
    src={isDark ? "/assets/logo/pomera_logo_white_nav.webp" : "/assets/logo/pomera_logo_light_nav.webp"}
    alt="Pomera"
    width={108}
    height={24}
    className={`nav-brand-img logo ${className}`}
  />
);

export default function Navbar() {
  const pathname = usePathname();
  const isCreatorPage = pathname === "/creators" || pathname === "/creator" || pathname.startsWith("/creator/") || pathname.startsWith("/creators/");
  const isHomePage = pathname === "/";
  const [currentHash, setCurrentHash] = useState("");
  // Home page is the Brand page by default (unless jumped to #discover)
  const isBrandActive = isHomePage && !currentHash.includes("discover");
  const isAgenciesPage =
    pathname === "/agencies" ||
    pathname === "/agency" ||
    pathname.startsWith("/agencies/") ||
    pathname.startsWith("/agency/") ||
    (isCreatorPage && currentHash.includes("agenc"));

  const [bannerVisible, setBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState<"brands" | "creators">(
    isCreatorPage ? "creators" : "brands"
  );

  useEffect(() => {
    setMobileActiveTab(isCreatorPage ? "creators" : "brands");
  }, [isCreatorPage]);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(typeof window !== "undefined" ? window.location.hash.toLowerCase() : "");
      setMobileMenuOpen(false);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Lock body scroll only when mobile menu is actually open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
    }
    return () => {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLegalMode =
    currentHash.includes("term") ||
    currentHash.includes("ftc") ||
    currentHash.includes("privacy") ||
    currentHash.includes("brand-terms") ||
    pathname.includes("terms") ||
    pathname.includes("ftc") ||
    pathname.includes("privacy");

  // Sticky header scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className={`nav-sticky-wrapper ${isScrolled ? "is-scrolled" : ""} ${isLegalMode ? "nav-theme-dark" : ""} ${isAgenciesPage && !isScrolled && !mobileMenuOpen ? "nav-over-hero" : ""} ${mobileMenuOpen ? "is-menu-open" : ""}`}>
        {/* ── 1. Top Announcement Bar (Explicit Publisher Routing) ── */}
        {bannerVisible && !isCreatorPage && !isAgenciesPage && (
          <aside className="nav-announcement" aria-label="Announcement">
            <div className="nav-announcement-content">
              <span className="nav-announcement-bold">Publishers join through ClipperCircle</span>
              <span className="nav-announcement-divider">·</span>
              <a href="/creator" className="nav-announcement-link">
                ClipperCircle by Pomera — Paid per view, not per follower &rarr;
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
          <div className="nav-container relative mx-auto flex max-w-global items-center justify-between gap-8">
            {/* Left: Logo & Nav Links */}
            <div className="nav-left flex items-center">
              <a href="/" className="nav-brand-link flex items-center gap-[7px]" aria-label="Home">
                <BrandLogo isDark={isLegalMode} />
              </a>

              {/* ── MAIN NAV MENU WITH DIRECT LINKS ──── */}
              <nav
                className="nav-menu"
                aria-label="Main Navigation"
              >
                <a
                  href="/#discover"
                  className="nav-link"
                >
                  Discover
                </a>
                <a
                  href="/#for-brands"
                  className={`nav-link ${isBrandActive ? "is-active" : ""}`}
                >
                  Brand
                </a>
                <a
                  href="/creator"
                  className={`nav-link ${isCreatorPage ? "is-active" : ""}`}
                >
                  Publisher
                </a>
                <a
                  href="/agencies"
                  className={`nav-link ${isAgenciesPage ? "is-active" : ""}`}
                >
                  Agencies
                </a>
              </nav>
            </div>

            {/* Right: Sign In & Action Buttons & Mobile Hamburger Toggle */}
            <div className="nav-right">
              <a href="#signin" className="nav-signin-link">
                Sign in
              </a>
              {isCreatorPage && !isLegalMode ? (
                <a href="/creator#join" className="nav-btn nav-btn--primary">
                  Join ClipperCircle
                </a>
              ) : (
                <>
                  <a href="#campaign-cta" className="nav-btn nav-btn--primary">
                    Start a campaign
                  </a>
                  <a href="#faq" className="nav-btn nav-btn--secondary">
                    Talk to us
                  </a>
                </>
              )}

              {/* Mobile Hamburger / Close Button */}
              <button
                type="button"
                id="nav-mobile-toggle-btn"
                className={`nav-mobile-toggle ${mobileMenuOpen ? "is-open" : ""}`}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span className="nav-mobile-bar" />
                <span className="nav-mobile-bar" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* ── 3. Modern Full Screen Mobile Navigation Drawer ────────────── */}
      <div
        className={`nav-mobile-drawer ${mobileMenuOpen ? "is-open" : ""} ${isLegalMode ? "is-dark" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="nav-mobile-content"
          style={{ paddingTop: bannerVisible && !isCreatorPage && !isAgenciesPage ? 110 : 68 }}
        >
          {/* Segmented Switcher: Brands | Creators */}
          <div className="nav-mobile-tab-switch" role="tablist" aria-label="Audience Switcher">
            <button
              type="button"
              role="tab"
              aria-selected={mobileActiveTab === "brands"}
              className={`nav-mobile-tab ${mobileActiveTab === "brands" ? "is-active" : ""}`}
              onClick={() => {
                setMobileActiveTab("brands");
                if (isCreatorPage) {
                  setMobileMenuOpen(false);
                  window.location.href = "/";
                }
              }}
            >
              Brands
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileActiveTab === "creators"}
              className={`nav-mobile-tab ${mobileActiveTab === "creators" ? "is-active" : ""}`}
              onClick={() => {
                setMobileActiveTab("creators");
                if (!isCreatorPage) {
                  setMobileMenuOpen(false);
                  window.location.href = "/creator";
                }
              }}
            >
              Creators
            </button>
          </div>

          {/* Large Clean Navigation Links */}
          <nav className="nav-mobile-links-list">
            <a
              href="/#discover"
              className="nav-mobile-large-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discover
            </a>
            <a
              href="/#for-brands"
              className={`nav-mobile-large-link ${isBrandActive ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Brand
            </a>
            <a
              href="/creator"
              className={`nav-mobile-large-link ${isCreatorPage ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Publisher
            </a>
            <a
              href="/agencies"
              className={`nav-mobile-large-link ${isAgenciesPage ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Agencies
            </a>
          </nav>

          {/* Bottom Action Buttons */}
          <div className="nav-mobile-bottom-actions">
            <a
              href="#signin"
              className="nav-mobile-btn-signin"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </a>

            <a
              href={mobileActiveTab === "creators" ? "/signup" : "/launch-a-campaign"}
              className="nav-mobile-btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{mobileActiveTab === "creators" ? "Create Account" : "Launch a Campaign"}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer so page content starts naturally below the fixed navbar (omitted on home page and agencies page where hero extends behind transparent navbar) */}
      {!isHomePage && !isAgenciesPage && (
        <div
          className={`nav-fixed-spacer ${isLegalMode ? "nav-fixed-spacer--dark" : ""}`}
          style={{ height: (bannerVisible && !isCreatorPage) ? 110 : 68 }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
