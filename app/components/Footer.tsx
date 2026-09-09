"use client";

import React from "react";
import "./Footer.css";

/* ── Star constellation logo icon (Content Rewards) ─────────────── */
const ContentRewardsLogo = () => (
  <div className="cr-brand">
    <svg
      className="cr-brand__stars"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center 4-point star */}
      <path
        d="M12 6L13.8 11.5L19.5 13.3L13.8 15.1L12 20.6L10.2 15.1L4.5 13.3L10.2 11.5L12 6Z"
        fill="#111827"
      />
      {/* Top right star */}
      <path
        d="M23 8L24.2 10.8L27 12L24.2 13.2L23 16L21.8 13.2L19 12L21.8 10.8L23 8Z"
        fill="#111827"
      />
      {/* Bottom right star */}
      <path
        d="M24 20L24.8 22.2L27 23L24.8 23.8L24 26L23.2 23.8L21 23L23.2 22.2L24 20Z"
        fill="#111827"
      />
      {/* Bottom left star */}
      <path
        d="M11 22L11.8 23.8L13.6 24.6L11.8 25.4L11 27.2L10.2 25.4L8.4 24.6L10.2 23.8L11 22Z"
        fill="#111827"
      />
      {/* Tiny left star */}
      <path
        d="M5 18L5.5 19.2L6.7 19.7L5.5 20.2L5 21.4L4.5 20.2L3.3 19.7L4.5 19.2L5 18Z"
        fill="#111827"
      />
    </svg>
    <div className="cr-brand__text">
      <span className="cr-brand__line">Content</span>
      <span className="cr-brand__line">Rewards</span>
    </div>
  </div>
);

/* ── Social icons ────────────────────────────────────────────────── */
const TikTokIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
  </svg>
);

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

/* ── Chat FAB Icon ───────────────────────────────────────────────── */
const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V16C20 17.1046 19.1046 18 18 18H8L4 21V6Z" fill="#ffffff" />
    <circle cx="9.5" cy="10.5" r="1.5" fill="#111827" />
    <circle cx="14.5" cy="10.5" r="1.5" fill="#111827" />
    <path d="M9 14C10.5 15.5 13.5 15.5 15 14" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ── 3D Orange Curved Ribbon SVGs ────────────────────────────────── */

const ShapeTopLeft = () => (
  <svg
    className="cr-shape cr-shape--tl"
    width="260"
    height="260"
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tlGradMain" x1="20" y1="220" x2="240" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="35%" stopColor="#FFA633" />
        <stop offset="70%" stopColor="#FF8500" />
        <stop offset="100%" stopColor="#E65800" />
      </linearGradient>
      <linearGradient id="tlCapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFC87C" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <filter id="tlShadow" x="-30%" y="-30%" width="170%" height="170%">
        <feDropShadow dx="6" dy="16" stdDeviation="16" floodColor="#ea580c" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#tlShadow)">
      <path
        d="M 38 215 C 38 112 118 36 225 36 L 245 78 C 158 78 86 132 86 215 Z"
        fill="url(#tlGradMain)"
      />
      <ellipse
        cx="62" cy="215" rx="24" ry="10" transform="rotate(-16 62 215)" fill="url(#tlCapGrad)"
      />
      <ellipse
        cx="235" cy="57" rx="10" ry="21" transform="rotate(16 235 57)" fill="url(#tlCapGrad)"
      />
      <path
        d="M 54 200 C 54 122 120 52 218 52"
        stroke="rgba(255, 255, 255, 0.45)" strokeWidth="5" strokeLinecap="round" fill="none"
      />
    </g>
  </svg>
);

const ShapeTopRight = () => (
  <svg
    className="cr-shape cr-shape--tr"
    width="260"
    height="260"
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="trGradMain" x1="240" y1="20" x2="30" y2="210" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E65800" />
        <stop offset="35%" stopColor="#FF8500" />
        <stop offset="70%" stopColor="#FFA633" />
        <stop offset="100%" stopColor="#FF7A00" />
      </linearGradient>
      <linearGradient id="trCapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFC87C" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <filter id="trShadow" x="-30%" y="-30%" width="170%" height="170%">
        <feDropShadow dx="-6" dy="16" stdDeviation="16" floodColor="#ea580c" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#trShadow)">
      <path
        d="M 222 36 C 222 143 142 218 35 218 L 15 176 C 102 176 174 122 174 36 Z"
        fill="url(#trGradMain)"
      />
      <ellipse
        cx="25" cy="197" rx="10" ry="21" transform="rotate(-16 25 197)" fill="url(#trCapGrad)"
      />
      <ellipse
        cx="198" cy="36" rx="24" ry="10" transform="rotate(16 198 36)" fill="url(#trCapGrad)"
      />
      <path
        d="M 206 52 C 140 52 74 122 42 200"
        stroke="rgba(255, 255, 255, 0.45)" strokeWidth="5" strokeLinecap="round" fill="none"
      />
    </g>
  </svg>
);

const ShapeBottomLeft = () => (
  <svg
    className="cr-shape cr-shape--bl"
    width="260"
    height="260"
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blGradMain" x1="210" y1="210" x2="30" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E65800" />
        <stop offset="40%" stopColor="#FF7A00" />
        <stop offset="75%" stopColor="#FFA633" />
        <stop offset="100%" stopColor="#FF8500" />
      </linearGradient>
      <linearGradient id="blCapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFB85C" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <filter id="blShadow" x="-30%" y="-30%" width="170%" height="170%">
        <feDropShadow dx="6" dy="16" stdDeviation="16" floodColor="#ea580c" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#blShadow)">
      <path
        d="M 225 224 C 118 224 38 148 38 45 L 86 25 C 86 108 138 176 225 176 Z"
        fill="url(#blGradMain)"
      />
      <ellipse
        cx="62" cy="35" rx="24" ry="10" transform="rotate(16 62 35)" fill="url(#blCapGrad)"
      />
      <ellipse
        cx="225" cy="200" rx="10" ry="24" transform="rotate(-16 225 200)" fill="url(#blCapGrad)"
      />
      <path
        d="M 62 48 C 62 126 130 204 215 204"
        stroke="rgba(255, 255, 255, 0.45)" strokeWidth="5" strokeLinecap="round" fill="none"
      />
    </g>
  </svg>
);

const ShapeBottomRight = () => (
  <svg
    className="cr-shape cr-shape--br"
    width="260"
    height="260"
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="brGradMain" x1="40" y1="40" x2="230" y2="230" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFA633" />
        <stop offset="40%" stopColor="#FF7A00" />
        <stop offset="80%" stopColor="#E65800" />
        <stop offset="100%" stopColor="#C2410C" />
      </linearGradient>
      <linearGradient id="brCapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFB85C" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <filter id="brShadow" x="-30%" y="-30%" width="170%" height="170%">
        <feDropShadow dx="-6" dy="16" stdDeviation="16" floodColor="#ea580c" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#brShadow)">
      <path
        d="M 35 36 C 142 36 222 112 222 215 L 174 235 C 174 152 122 84 35 84 Z"
        fill="url(#brGradMain)"
      />
      <ellipse
        cx="35" cy="60" rx="10" ry="24" transform="rotate(16 35 60)" fill="url(#brCapGrad)"
      />
      <ellipse
        cx="198" cy="225" rx="24" ry="10" transform="rotate(-16 198 225)" fill="url(#brCapGrad)"
      />
      <path
        d="M 48 60 C 126 60 204 128 204 205"
        stroke="rgba(255, 255, 255, 0.45)" strokeWidth="5" strokeLinecap="round" fill="none"
      />
    </g>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════
   Main Footer Component
   ═══════════════════════════════════════════════════════════════════ */
export default function Footer() {
  const navLinks = [
    { label: "Creators", href: "#" },
    { label: "Agencies", href: "#" },
    { label: "Brand Kit", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  const socialLinks = [
    { icon: <TikTokIcon />, href: "#", label: "TikTok" },
    { icon: <XIcon />, href: "#", label: "X" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <YouTubeIcon />, href: "#", label: "YouTube" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <DiscordIcon />, href: "#", label: "Discord" },
  ];

  return (
    <>
      <footer className="cr-footer-section">
        {/* Outer ambient glow background container */}
        <div className="cr-footer-container">

          {/* ── The White Floating Card ────────────────────────── */}
          <div className="cr-card">
            
            {/* Top CTA area */}
            <div className="cr-card__cta">
              <h2 className="cr-card__heading">
                Ready to launch<br />your campaign?
              </h2>

              <div className="cr-card__actions">
                <button type="button" className="cr-btn cr-btn--primary">
                  Launch a campaign
                </button>
                <button type="button" className="cr-btn cr-btn--secondary">
                  See a Demo
                </button>
              </div>
            </div>

            {/* Middle Nav & Branding bar */}
            <div className="cr-card__nav-bar">
              {/* Left side: Logo + Social icons */}
              <div className="cr-card__nav-left">
                <a href="/" className="cr-logo-link" aria-label="Content Rewards Home">
                  <ContentRewardsLogo />
                </a>

                <div className="cr-socials">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="cr-socials__item"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right side: Navigation links */}
              <nav className="cr-links" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="cr-links__item">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Copyright & Legal line */}
            <div className="cr-card__bottom">
              <span className="cr-copyright">
                © 2026 Content Rewards Inc. All rights reserved.
              </span>
              <div className="cr-legal">
                <a href="#" className="cr-legal__link">Privacy policy</a>
                <a href="#" className="cr-legal__link">Terms of service</a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating Chat Icon (FAB) matches reference image */}
      <button className="cr-fab-chat" aria-label="Open chat">
        <ChatIcon />
      </button>
    </>
  );
}
