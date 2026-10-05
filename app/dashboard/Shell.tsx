"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import { PomeraMark } from "../components/pomeraMark";
import { setTheme, useTheme } from "../lib/theme";

export type NavItem = { id: string; label: string; icon: React.ReactNode; count?: number };

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Icon = {
  home: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>,
  campaigns: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M8 14h4" /></svg>,
  reports: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
  billing: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20" /></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>,
  posts: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10 18h4" /></svg>,
  payouts: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M8 8h8M8 12h8M9 8c3 0 5 1 5 3.2S12 14 9 14l6 4" /></svg>,
  profile: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></svg>,
  plus: <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><path d="M12 5v14M5 12h14" /></svg>,
  moon: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>,
  sun: <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
};

export default function Shell({
  variant,
  nav,
  active,
  onNav,
  title,
  subtitle,
  actions,
  helpTitle,
  helpText,
  embedded = false,
  children,
}: {
  variant: "brand" | "publisher";
  nav: NavItem[];
  active: string;
  onNav: (id: string) => void;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  helpTitle: string;
  helpText: string;
  embedded?: boolean;
  children: React.ReactNode;
}) {
  const isDark = useTheme() === "dark";

  const brand =
    variant === "brand" ? (
      <Link href="/" aria-label="Pomera home"><BrandLogo isDark={isDark} /></Link>
    ) : (
      <div className="db-brandrow__who">
        <PomeraMark size={34} bg={isDark ? "#1C1C1A" : "#111210"} radius={40} />
        <span>
          ClipperCircle
          <small>by Pomera</small>
        </span>
      </div>
    );

  return (
    <div className={`db-app ${embedded ? "db-app--embed" : ""}`}>
      <div className="db-shell">
        <aside className="db-side" aria-label="Dashboard navigation">
          <div className="db-brandrow">{brand}</div>
          <nav className="db-nav">
            {nav.map((n) => (
              <button
                key={n.id}
                type="button"
                className={`db-nav__item ${active === n.id ? "is-active" : ""}`}
                onClick={() => onNav(n.id)}
              >
                {n.icon}
                {n.label}
                {n.count != null && <span className="db-nav__count">{n.count}</span>}
              </button>
            ))}
          </nav>
          <div className="db-side__foot">
            <div className="db-help"><b>{helpTitle}</b>{helpText}</div>
          </div>
        </aside>

        <div className="db-main">
          <header className="db-top">
            <div>
              <div className="db-mobilebrand">
                {variant === "brand" ? (
                  <><PomeraMark size={26} bg={isDark ? "#1C1C1A" : "#111210"} radius={40} /> Pomera</>
                ) : (
                  <><PomeraMark size={26} bg={isDark ? "#1C1C1A" : "#111210"} radius={40} /> ClipperCircle <span className="db-muted" style={{ fontWeight: 500 }}>by Pomera</span></>
                )}
              </div>
              <h1 className="db-top__title">{title}</h1>
              <p className="db-top__sub">{subtitle}</p>
            </div>
            <div className="db-top__actions">
              <button
                type="button"
                className="db-iconbtn"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? Icon.sun : Icon.moon}
              </button>
              {actions}
            </div>
          </header>

          {embedded && (
            <nav className="db-embedtabs" aria-label="Preview sections">
              {nav.map((n) => (
                <button key={n.id} type="button" className={active === n.id ? "is-active" : ""} onClick={() => onNav(n.id)}>{n.label}</button>
              ))}
            </nav>
          )}

          <div className="db-content">
            {!embedded && (
              <div className="db-ribbon" role="note">
                <span className="db-dot" aria-hidden="true" />
                <span><b>Design preview.</b> Every name and figure on this screen is sample data, not a real campaign, rate or payout.</span>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>

      {!embedded && <nav className="db-tabbar" aria-label="Dashboard navigation">
        {nav.slice(0, 5).map((n) => (
          <button key={n.id} type="button" className={active === n.id ? "is-active" : ""} onClick={() => onNav(n.id)}>
            {n.icon}
            {n.label}
          </button>
        ))}
      </nav>}
    </div>
  );
}
