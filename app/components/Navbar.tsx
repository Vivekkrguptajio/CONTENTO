"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

/* ── Content Rewards Official Vector Logo ───────────────────────────── */
const ContentRewardsLogo = ({
  isDark = false,
  className = "",
}: {
  isDark?: boolean;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 896 289"
    className={`h-auto w-[107.87px] dark:[&_path]:!fill-[#FCFBF8] ${className}`}
    style={{ width: "107.87px", height: "auto", display: "block" }}
  >
    <g fill={isDark ? "#FCFBF8" : "#252525"} clipPath="url(#logo_svg__clip0_2292_6072)">
      <path d="M360.465 126.128q-14.307 0-25.222-6.49-10.914-6.637-17.109-18.732-6.195-12.242-6.195-29.35 0-16.815 6.048-29.057 6.047-12.39 16.961-19.027 10.915-6.785 25.664-6.785 20.06 0 31.121 10.03 11.062 9.882 14.455 27.729l-20.059 1.032q-1.918-10.324-8.26-16.224t-17.257-5.9q-8.85 0-15.339 4.72t-10.03 13.275q-3.539 8.554-3.539 20.206 0 11.8 3.539 20.354 3.688 8.407 10.178 12.98 6.49 4.572 15.044 4.572 11.652 0 17.994-6.342 6.49-6.49 8.26-17.7l20.059 1.033q-2.066 12.242-7.965 21.239-5.9 8.85-15.634 13.717-9.588 4.72-22.714 4.72M452.625 125.538q-11.652 0-20.501-5.015-8.703-5.163-13.57-14.454-4.72-9.292-4.72-21.682 0-12.537 4.72-21.681 4.867-9.293 13.57-14.307 8.849-5.163 20.501-5.163t20.354 5.163q8.703 5.014 13.422 14.307 4.868 9.144 4.868 21.681 0 12.39-4.868 21.682-4.719 9.291-13.422 14.454-8.702 5.015-20.354 5.015m0-15.34q9.145 0 14.012-6.784 5.015-6.785 5.015-19.027 0-12.094-5.015-18.88-4.867-6.93-14.012-6.931-9.144 0-14.159 6.932-5.015 6.785-5.015 18.879 0 12.242 5.015 19.027 5.015 6.784 14.159 6.784M502.887 123.768V45.006h17.109l.738 22.124-2.213-.885q1.18-8.259 4.868-13.274 3.687-5.014 8.997-7.375t11.652-2.36q8.701 0 14.602 3.835 6.046 3.836 9.144 10.62 3.098 6.637 3.098 15.486v50.591h-18.88V79.225q0-6.638-1.327-11.21-1.328-4.572-4.425-6.932-2.95-2.507-7.964-2.507-7.523 0-12.095 5.31-4.425 5.31-4.425 15.339v44.543zM614.61 123.768q-11.8 0-17.404-5.457-5.457-5.458-5.458-17.11V26.57h18.88V99.43q0 5.458 2.359 7.67 2.36 2.065 7.375 2.065h11.062v14.602zm-35.251-64.16V45.006h52.065v14.602zM675.095 125.538q-11.799 0-20.502-5.015-8.702-5.163-13.422-14.454-4.719-9.292-4.719-21.682t4.719-21.534q4.72-9.293 13.275-14.454 8.702-5.163 20.206-5.163 11.21 0 19.617 5.015 8.555 5.014 13.127 14.455t4.572 22.713v4.278h-55.9q.59 10.324 5.605 15.634 5.163 5.162 13.569 5.162 6.343 0 10.472-2.802 4.278-2.95 5.9-8.112l19.322 1.18q-3.245 11.504-12.832 18.141-9.44 6.638-23.009 6.638m-19.027-48.526h36.431q-.59-9.586-5.457-14.159-4.867-4.72-12.39-4.72-7.521 0-12.536 4.868-4.868 4.867-6.048 14.011M723.776 123.768V45.006h17.109l.738 22.124-2.213-.885q1.18-8.259 4.867-13.274t8.998-7.375q5.308-2.36 11.652-2.36 8.702 0 14.601 3.835 6.048 3.836 9.145 10.62 3.097 6.637 3.097 15.486v50.591h-18.879V79.225q0-6.638-1.327-11.21t-4.425-6.932q-2.95-2.507-7.965-2.507-7.521 0-12.094 5.31-4.425 5.31-4.425 15.339v44.543zM835.499 123.768q-11.8 0-17.404-5.457-5.458-5.458-5.458-17.11V26.57h18.879V99.43q0 5.458 2.36 7.67 2.36 2.065 7.375 2.065h11.062v14.602zm-35.251-64.16V45.006h52.065v14.602zM317.397 269.572V164.851h43.805q11.357 0 19.617 3.835t12.832 10.915 4.572 16.666q0 7.228-3.097 12.832t-8.407 8.997q-5.163 3.393-11.505 4.13l-.737-1.475q10.176 0 15.634 4.573 5.606 4.571 6.342 14.012l2.655 30.236h-19.469l-2.212-27.434q-.443-6.195-3.983-9.145t-11.799-2.95h-25.074v39.529zm19.174-56.343h23.451q8.703 0 13.57-4.13t4.867-11.652q0-7.67-5.015-11.799-4.868-4.13-14.307-4.13h-22.566zM446.428 271.342q-11.8 0-20.501-5.015-8.703-5.163-13.422-14.455t-4.72-21.681 4.72-21.534q4.72-9.292 13.274-14.454 8.702-5.163 20.207-5.163 11.21 0 19.616 5.015 8.555 5.014 13.127 14.454t4.573 22.714v4.278h-55.9q.59 10.324 5.604 15.634 5.163 5.162 13.57 5.162 6.342 0 10.472-2.802 4.277-2.95 5.899-8.112l19.322 1.18q-3.244 11.504-12.832 18.141-9.44 6.638-23.009 6.638m-19.026-48.526h36.43q-.59-9.587-5.457-14.159-4.868-4.72-12.389-4.72-7.523 0-12.537 4.867-4.868 4.868-6.047 14.012M508.892 269.572l-23.747-78.762h19.322l15.339 57.375 15.782-57.375h16.519l15.93 57.375 15.339-57.375h19.322l-23.747 78.762h-19.469l-15.634-52.803-15.487 52.803zM631.978 271.342q-12.389 0-19.911-5.605-7.522-5.753-7.522-15.929 0-10.178 6.342-15.93t19.322-8.259l26.106-5.163q0-8.406-3.835-12.537-3.834-4.277-11.357-4.277-6.784 0-10.767 3.245-3.834 3.097-5.31 8.997l-19.174-.885q2.36-12.537 11.505-19.174 9.144-6.785 23.746-6.785 16.815 0 25.369 8.555 8.702 8.407 8.702 24.189v28.614q0 3.096 1.033 4.277 1.18 1.18 3.392 1.18h2.507v13.717q-.885.295-2.95.442a52 52 0 0 1-3.982.148q-4.868 0-8.702-1.475-3.835-1.623-5.9-5.458-2.065-3.981-2.065-10.767l1.623 1.18q-1.18 5.163-5.163 9.292-3.834 3.983-9.734 6.195t-13.275 2.213m3.835-13.717q6.342 0 10.915-2.508t7.079-6.932q2.508-4.424 2.508-10.472v-4.425l-20.354 4.13q-6.342 1.327-9.145 3.982-2.655 2.507-2.655 6.638 0 4.572 2.95 7.079 3.098 2.508 8.702 2.508M691.437 269.572V190.81h17.699l.737 21.829-1.622-.295q1.77-11.356 6.637-16.372 5.015-5.162 13.57-5.162h7.227v16.224h-7.375q-6.047 0-10.029 1.77t-6.048 5.605q-1.917 3.687-1.917 9.735v45.428zM770.957 271.342q-10.03 0-17.405-5.015-7.227-5.014-11.209-14.307-3.983-9.292-3.983-21.829t3.983-21.829 11.357-14.307 17.257-5.015q8.259 0 14.454 3.393 6.342 3.392 9.587 9.587v-37.169h18.879v104.721h-17.994l-.443-11.652q-3.245 6.342-9.734 9.882-6.49 3.54-14.749 3.54m5.752-15.34q5.9 0 9.882-2.95 4.13-2.95 6.195-8.702 2.211-5.9 2.212-14.159 0-8.408-2.212-14.159-2.066-5.753-6.195-8.703-3.982-2.949-9.882-2.949-8.555 0-13.717 6.932-5.015 6.784-5.015 18.879 0 11.799 5.015 18.879 5.162 6.933 13.717 6.932M862.156 271.342q-11.652 0-19.617-3.393-7.817-3.392-12.094-9.439-4.278-6.048-4.867-13.717l19.321-.885q1.032 6.194 5.162 9.587t12.242 3.392q6.638 0 10.325-2.065 3.835-2.212 3.835-6.784 0-2.655-1.328-4.425-1.327-1.77-5.014-3.098-3.688-1.326-10.915-2.654-12.094-2.066-19.027-5.015-6.932-3.098-9.882-7.67-2.802-4.572-2.802-11.357 0-11.062 8.407-17.847 8.555-6.932 24.926-6.932 10.62 0 17.847 3.54 7.227 3.392 11.21 9.44 4.13 5.9 5.162 13.569l-19.027.885q-.736-3.983-2.655-6.932-1.917-2.95-5.162-4.425-3.245-1.623-7.67-1.622-6.636 0-10.029 2.654t-3.392 7.08q0 3.098 1.474 5.162 1.623 2.066 5.163 3.393 3.54 1.18 9.439 2.212 12.39 1.917 19.469 5.015 7.228 2.95 10.178 7.67 3.097 4.572 3.097 11.062 0 7.521-4.277 12.832-4.13 5.308-11.8 8.112-7.522 2.655-17.699 2.655M124.658 0l16.441 36.934 40.209 4.225-30.045 27.051 8.407 39.54-35.012-20.213-35.012 20.213 8.408-39.54-30.046-27.05 40.21-4.226zM124.658 289l8.451-18.982 20.666-2.173-15.44-13.9 4.319-20.321-17.996 10.387-17.995-10.387 4.326 20.321-15.44 13.9 20.659 2.173zM48.012 72.428l6.313 29.678 28.857 9.38-26.28 15.166V157l-22.545-20.306-28.858 9.379 12.338-27.72L0 93.807l30.182 3.167zM56.902 177.723v27.173l23.538 13.583-25.849 8.393-5.643 26.583-15.973-21.983-27.022 2.843 15.966-21.983-11.05-24.826 25.842 8.4zM201.305 72.428l-6.306 29.678-28.865 9.38 26.281 15.166V157l22.552-20.306 28.857 9.379-12.345-27.72 17.837-24.546-30.174 3.167zM192.415 177.723v27.173l-23.531 13.583 25.841 8.393 5.651 26.583 15.966-21.983 27.029 2.843-15.973-21.983 11.056-24.826-25.848 8.4z" />
    </g>
    <defs>
      <clipPath id="logo_svg__clip0_2292_6072">
        <path fill="white" d="M0 0h896v289H0z" />
      </clipPath>
    </defs>
  </svg>
);

type ActiveMenu = "solutions" | "resources" | null;

export default function Navbar() {
  const pathname = usePathname();
  const isCreatorPage = pathname === "/creators" || pathname === "/creator" || pathname.startsWith("/creator/") || pathname.startsWith("/creators/");
  const isHomePage = pathname === "/";
  const [currentHash, setCurrentHash] = useState("");
  const isAgenciesPage =
    pathname === "/agencies" ||
    pathname === "/agency" ||
    pathname.startsWith("/agencies/") ||
    pathname.startsWith("/agency/") ||
    (isCreatorPage && currentHash.includes("agenc"));

  const [bannerVisible, setBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 100, width: 330, height: 265 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState<"brands" | "creators">(
    isCreatorPage ? "creators" : "brands"
  );
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const toggleMobileSolutions = () => {
    setMobileSolutionsOpen((prev) => {
      const next = !prev;
      if (next) setMobileResourcesOpen(false);
      return next;
    });
  };

  const toggleMobileResources = () => {
    setMobileResourcesOpen((prev) => {
      const next = !prev;
      if (next) setMobileSolutionsOpen(false);
      return next;
    });
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileSolutionsOpen(false);
      setMobileResourcesOpen(false);
    }
  }, [mobileMenuOpen]);

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

  const navMenuRef = useRef<HTMLElement>(null);
  const solutionsBtnRef = useRef<HTMLButtonElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Measure and adjust dropdown position & dimensions (Matches ContentRewards DevTools: 400x228.6 and 680x170)
  const updateDropdownPos = useCallback((menu: "solutions" | "resources") => {
    if (menu === "solutions") {
      const btnLeft = solutionsBtnRef.current ? solutionsBtnRef.current.offsetLeft : 120;
      const left = Math.max(0, btnLeft - 20);
      setDropdownPos({ left, width: 400, height: 228.6 });
    } else if (menu === "resources") {
      const btnLeft = resourcesBtnRef.current ? resourcesBtnRef.current.offsetLeft : 200;
      const left = Math.max(0, btnLeft - 180);
      setDropdownPos({ left, width: 680, height: 170 });
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

  const isAgencyTheme = isAgenciesPage && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <div className={`nav-sticky-wrapper ${isScrolled ? "is-scrolled" : ""} ${isLegalMode ? "nav-theme-dark" : ""} ${isAgencyTheme ? "nav-theme-agency" : ""} ${mobileMenuOpen ? "is-menu-open" : ""}`}>
        {/* ── 1. Top Orange Announcement Bar (hidden on creator & agencies pages) ── */}
        {bannerVisible && !isCreatorPage && !isAgenciesPage && (
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
          <div className="nav-container relative mx-auto flex max-w-global items-center justify-between gap-8">
            {/* Left: Logo & Nav Links */}
            <div className="nav-left flex items-center">
              <a href="/" className="nav-brand-link flex items-center gap-[7px]" aria-label="Content Rewards Home">
                <ContentRewardsLogo isDark={isLegalMode || isAgencyTheme} />
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
                          href="/agencies"
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
                              href="/pricing"
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
                              href="/changelog"
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
                              href="/branding"
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
                              href="/ftc-compliance"
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

            {/* Right: Sign In & Action Buttons & Mobile Hamburger Toggle */}
            <div className="nav-right">
              <a href="#signin" className="nav-signin-link">
                Sign in
              </a>
              {isCreatorPage && !isLegalMode ? (
                <a href="/signup" className="nav-btn nav-btn--primary">
                  Create Account
                </a>
              ) : (
                <>
                  <a href="/launch-a-campaign" className="nav-btn nav-btn--primary">
                    Launch a Campaign
                  </a>
                  <a href="/book-a-demo" className="nav-btn nav-btn--secondary">
                    See a Demo
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

            {/* Solutions Accordion */}
            <div className="nav-mobile-accordion">
              <button
                type="button"
                className="nav-mobile-accordion-header"
                onClick={toggleMobileSolutions}
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                <svg
                  className={`nav-mobile-chevron ${mobileSolutionsOpen ? "is-rotated" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div className="nav-mobile-submenu">
                  <a
                    href="/creator"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="4" width="20" height="16" rx="5" fill="#52504C" />
                        <polygon points="10 8 16 12 10 16" fill="#F3F2EE" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">For Creators</span>
                      <span className="nav-mobile-card-desc">Get paid to post</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/#for-brands"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.5L21.5 12L12 21.5L2.5 12L12 2.5Z" fill="#52504C" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">For Brands</span>
                      <span className="nav-mobile-card-desc">Run creator campaigns at scale</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/agencies"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9.5 5.5L15 11L13 13L7.5 7.5L9.5 5.5Z" fill="#8C8A85" />
                        <path d="M14.5 10.5L20 16L14.5 21.5L9 16L14.5 10.5Z" fill="#52504C" />
                        <path d="M8.5 4.5L14 10L8.5 15.5L3 10L8.5 4.5Z" fill="#52504C" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">For Agencies</span>
                      <span className="nav-mobile-card-desc">Manage campaigns for clients</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="nav-mobile-accordion">
              <button
                type="button"
                className="nav-mobile-accordion-header"
                onClick={toggleMobileResources}
                aria-expanded={mobileResourcesOpen}
              >
                <span>Resources</span>
                <svg
                  className={`nav-mobile-chevron ${mobileResourcesOpen ? "is-rotated" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileResourcesOpen && (
                <div className="nav-mobile-submenu">
                  <a
                    href="/creator#pricing"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 4C10.5 4 10 5.5 10 6C8 6.5 6 9 6 13C6 17.5 8.5 20 12 20C15.5 20 18 17.5 18 13C18 9 16 6.5 14 6C14 5.5 13.5 4 12 4Z"
                          fill="#52504C"
                        />
                        <circle cx="12" cy="13" r="2" fill="#F3F2EE" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">Pricing</span>
                      <span className="nav-mobile-card-desc">Plans and payout rates</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/book-a-demo"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" fill="#52504C" />
                        <polygon points="10 8.5 16 12 10 15.5" fill="#F3F2EE" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">See a Demo</span>
                      <span className="nav-mobile-card-desc">Watch how it works</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/creator#changelog"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="5" width="14" height="4" rx="2" fill="#52504C" />
                        <rect x="5" y="10" width="14" height="4" rx="2" fill="#52504C" />
                        <rect x="5" y="15" width="14" height="4" rx="2" fill="#52504C" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">Changelog</span>
                      <span className="nav-mobile-card-desc">See what gets shipped</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/creator#brand-kit"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="4" width="14" height="6" rx="2" fill="#52504C" />
                        <path d="M12 10V15H10V19H14V15H12" fill="#52504C" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">Brand Kit</span>
                      <span className="nav-mobile-card-desc">Logo, colours, and assets</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="/creator#term"
                    className="nav-mobile-card"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="nav-mobile-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="3" width="12" height="18" rx="2" fill="#52504C" />
                        <line x1="9" y1="8" x2="15" y2="8" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="9" y1="12" x2="15" y2="12" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="9" y1="16" x2="13" y2="16" stroke="#F3F2EE" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="nav-mobile-card-text">
                      <span className="nav-mobile-card-title">Terms and Legal</span>
                      <span className="nav-mobile-card-desc">Disclosure and policy info</span>
                    </div>
                    <div className="nav-mobile-card-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>
                </div>
              )}
            </div>
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
