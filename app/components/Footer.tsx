"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./Footer.css";
import BrandLogo from "./BrandLogo";
import { useTheme } from "../lib/theme";
import { whatsappLink } from "../lib/contact";

/* ── Social icons (Instagram, YouTube, X, LinkedIn) ──────────────── */
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── WhatsApp Desk Floating Action Icon ──────────────────────────── */
const WhatsAppDeskIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.96 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.93C20.28 16.48 16.59 20.15 12.05 20.15Z" />
    <path d="M16.57 14.36C16.32 14.24 15.1 13.64 14.88 13.56C14.65 13.48 14.49 13.44 14.32 13.68C14.16 13.93 13.69 14.48 13.54 14.64C13.4 14.81 13.25 14.83 13.01 14.71C12.76 14.59 11.97 14.33 11.03 13.49C10.29 12.83 9.79 12.02 9.65 11.78C9.51 11.53 9.63 11.4 9.76 11.28C9.87 11.17 10.01 10.99 10.13 10.84C10.25 10.7 10.3 10.6 10.38 10.43C10.46 10.27 10.42 10.13 10.36 10.01C10.3 9.89 9.81 8.68 9.6 8.19C9.4 7.71 9.2 7.77 9.05 7.76H8.58C8.42 7.76 8.15 7.82 7.93 8.07C7.7 8.32 7.06 8.92 7.06 10.14C7.06 11.36 7.95 12.54 8.07 12.71C8.2 12.87 9.82 15.37 12.3 16.44C12.89 16.7 13.35 16.85 13.71 16.96C14.3 17.15 14.83 17.12 15.26 17.06C15.74 16.99 16.73 16.46 16.93 15.89C17.14 15.32 17.14 14.83 17.08 14.73C17.02 14.62 16.82 14.48 16.57 14.36Z" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname() || "/";
  const isDark = useTheme() === "dark";
  const isPublisherPage = pathname === "/clippercircle" || pathname.startsWith("/clippercircle/");
  const isAgencyPage = pathname === "/agencies" || pathname === "/agency" || pathname.startsWith("/agencies/");

  const cta = isPublisherPage
    ? { heading: "Ready to get paid per view?", sub: "Free to join. No follower minimum. Paid weekly by UPI.", label: "Join the founding cohort", href: "/clippercircle#join", wa: "Hi Pomera Team, I want to join as a publisher." }
    : isAgencyPage
    ? { heading: "Ready to partner with Pomera?", sub: "Your first client campaign is a free pilot.", label: "Become a partner", href: "/agencies#partner", wa: "Hi Pomera Team, we are an agency and want to partner." }
    : { heading: "Ready to buy certainty?", sub: "Agree your rate upfront. Pay only for verified views.", label: "Start a campaign", href: "/#contact", wa: "Hi Pomera Team, we want to discuss a campaign." };

  const navLinks: { label: string; href: string; desktopOnly?: boolean }[] = [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Verification", href: "/#verification", desktopOnly: true },
    { label: "Pillars", href: "/#pillars" },
    { label: "Report", href: "/#dashboard", desktopOnly: true },
    { label: "Founding Cohort", href: "/#founding-cohort" },
    { label: "For Agencies", href: "/agencies" },
    { label: "For Publishers", href: "/clippercircle" },
    { label: "Brand Guidelines", href: "/branding" },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
    { icon: <YouTubeIcon />, href: "https://youtube.com", label: "YouTube" },
    { icon: <XIcon />, href: "https://x.com", label: "X" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <>
      <footer className="cr-footer-section">
        <div className="cr-footer-container">

          {/* Floating White Card */}
          <div className="cr-footer-card">
            
            {/* Top CTA area */}
            <div className="cr-footer-card__cta">
              <h2 className="cr-footer-card__heading">
                {cta.heading}
              </h2>
              <p className="cr-footer-card__sub">
                {cta.sub}
              </p>

              <div className="cr-footer-card__actions">
                <a href={cta.href} className="cr-footer-btn cr-footer-btn--primary">
                  {cta.label}
                </a>
                <a
                  href={whatsappLink(cta.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cr-footer-btn cr-footer-btn--secondary"
                >
                  Talk to us on WhatsApp
                </a>
              </div>
            </div>

            {/* Middle Nav & Branding bar */}
            <div className="cr-footer-card__nav-bar">
              {/* Left side: Logo + Social icons */}
              <div className="cr-footer-card__nav-left">
                <a href="/" className="cr-footer-logo-link" aria-label="Pomera Home">
                  <BrandLogo isDark={isDark} />
                </a>

                <div className="cr-footer-socials">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="cr-footer-socials__item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right side: Navigation links */}
              <nav className="cr-footer-links" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className={`cr-footer-links__item${link.desktopOnly ? " cr-footer-links__item--desktop" : ""}`}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Copyright & Legal line */}
            <div className="cr-footer-card__bottom">
              <span className="cr-footer-copyright pm-num">
                © 2026 Pomera Technologies Pvt. Ltd. Bengaluru, India. All rights reserved.
              </span>
              <div className="cr-footer-legal">
                <a href="/privacy-policy" className="cr-footer-legal__link">Privacy policy</a>
                <span className="cr-footer-dot">·</span>
                <a href="/terms" className="cr-footer-legal__link">Terms of service</a>
                <span className="cr-footer-dot">·</span>
                <span className="cr-footer-sub-brand">
                  Supply powered by <strong>ClipperCircle by Pomera</strong>
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappLink("Hi Pomera Team, we have an inquiry regarding distribution.")}
        target="_blank"
        rel="noopener noreferrer"
        className="cr-fab-chat"
        aria-label="Open WhatsApp Desk"
      >
        <WhatsAppDeskIcon />
      </a>
    </>
  );
}
