"use client";

import React, { useState, useEffect } from "react";
import "./BentoFeatures.css";

/* ── Role Icons (1:1 from ContentRewards) ────────────────────────── */
const RoleCrownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="bento-role-svg">
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V18H19V19Z" />
  </svg>
);

const RoleUserIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="bento-role-svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const RoleShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="bento-role-svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export default function BentoFeatures() {
  const [commentText] = useState(
    "Looks great, approving now. Payout is on the way."
  );
  const [showTooltip, setShowTooltip] = useState(true);

  interface PillPhysics {
    x: number;
    y: number;
    rot: number;
    vx: number;
    vy: number;
    vrot: number;
    mass: number;
    rotFactor: number;
    stiffness: number;
    damping: number;
    phase: number;
  }

  const pillStatesRef = React.useRef<PillPhysics[]>([]);

  // Jump impulse on hover / tap for individual pill
  const triggerPillImpulse = (index: number) => {
    const p = pillStatesRef.current[index];
    if (!p) return;
    p.vy = -(22 + Math.random() * 18); // Explosive upward spring pop
    p.vx = (Math.random() - 0.5) * 22;
    p.vrot = (Math.random() - 0.5) * 35;
  };

  // Chaotic anti-gravity shake for all pills (on card click or test)
  const triggerGlobalShake = () => {
    pillStatesRef.current.forEach((p) => {
      p.vy = -(26 + Math.random() * 32);
      p.vx = (Math.random() - 0.5) * 44;
      p.vrot = (Math.random() - 0.5) * 55;
    });
  };

  // Physics simulation for Scroll Gravity Lag & Phone Shake
  useEffect(() => {
    const cloud = document.querySelector(".bento-roles-cloud");
    if (!cloud) return;
    const pills = Array.from(cloud.querySelectorAll<HTMLElement>(".bento-role-pill"));
    if (!pills.length) return;

    // Distinct physical properties for each pill so they lag & float independently
    const pillConfigs = [
      { mass: 1.4, rotFactor: -1.3, stiffness: 0.13, damping: 0.81, phase: 0.0 }, // 0: Member (Tilted)
      { mass: 1.7, rotFactor: 1.2, stiffness: 0.15, damping: 0.84, phase: 1.1 },  // 1: Admin
      { mass: 0.9, rotFactor: -0.9, stiffness: 0.17, damping: 0.79, phase: 2.3 }, // 2: Member
      { mass: 1.2, rotFactor: 1.4, stiffness: 0.14, damping: 0.82, phase: 3.4 },  // 3: Member
      { mass: 1.5, rotFactor: -1.2, stiffness: 0.13, damping: 0.83, phase: 4.5 }, // 4: Moderator
      { mass: 0.8, rotFactor: 0.8, stiffness: 0.18, damping: 0.78, phase: 5.2 },  // 5: Member
      { mass: 1.6, rotFactor: 1.5, stiffness: 0.14, damping: 0.82, phase: 6.1 },  // 6: Moderator
    ];

    const pillStates: PillPhysics[] = pills.map((_, i) => ({
      x: 0,
      y: 0,
      rot: 0,
      vx: 0,
      vy: 0,
      vrot: 0,
      mass: pillConfigs[i]?.mass ?? 1.0,
      rotFactor: pillConfigs[i]?.rotFactor ?? 1.0,
      stiffness: pillConfigs[i]?.stiffness ?? 0.15,
      damping: pillConfigs[i]?.damping ?? 0.82,
      phase: pillConfigs[i]?.phase ?? i * 1.1,
    }));

    pillStatesRef.current = pillStates;

    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;
    let animFrameId: number;
    let tiltX = 0;
    let tiltY = 0;

    // 1. Scroll Inertia (Dynamic Gravity Lag)
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Clamped delta to prevent extreme jump on instant page jump
      const clampedDelta = Math.max(-65, Math.min(65, delta));
      scrollSpeed += clampedDelta * 0.75;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // 2. Phone Shake & Device Motion Sensors
    let lastAccelX = 0;
    let lastAccelY = 0;
    let lastAccelZ = 0;
    let lastShakeTime = 0;

    const onDeviceMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity || e.acceleration;
      if (!acc || acc.x === null || acc.y === null || acc.z === null) return;

      const dx = acc.x - lastAccelX;
      const dy = acc.y - lastAccelY;
      const dz = acc.z - lastAccelZ;
      lastAccelX = acc.x;
      lastAccelY = acc.y;
      lastAccelZ = acc.z;

      const deltaTotal = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const now = Date.now();

      // Continuous subtle wobble on device movement
      if (deltaTotal > 3.0) {
        pillStates.forEach((p) => {
          p.vx += (dx * 1.4 + (Math.random() - 0.5) * 5) * p.mass;
          p.vy += (-dy * 1.4 + (Math.random() - 0.5) * 5) * p.mass;
          p.vrot += (dx * 1.2 + (Math.random() - 0.5) * 7) * p.rotFactor;
        });
      }

      // High-energy chaotic anti-gravity pop when phone is shaken
      if (deltaTotal > 11 && now - lastShakeTime > 250) {
        lastShakeTime = now;
        pillStates.forEach((p) => {
          p.vx += (Math.random() - 0.5) * 45;
          p.vy += -(24 + Math.random() * 36);
          p.vrot += (Math.random() - 0.5) * 55;
        });
      }
    };

    const onDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        tiltX = Math.max(-25, Math.min(25, e.gamma)) * 0.45;
        tiltY = Math.max(-25, Math.min(25, e.beta - 45)) * 0.35;
      }
    };

    window.addEventListener("devicemotion", onDeviceMotion, { passive: true });
    window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

    // Request iOS Sensor Permissions on first user interaction anywhere
    const requestSensorAccess = () => {
      const win = window as unknown as {
        DeviceMotionEvent?: { requestPermission?: () => Promise<string> };
        DeviceOrientationEvent?: { requestPermission?: () => Promise<string> };
      };
      if (typeof win.DeviceMotionEvent?.requestPermission === "function") {
        win.DeviceMotionEvent.requestPermission().catch(() => {});
      }
      if (typeof win.DeviceOrientationEvent?.requestPermission === "function") {
        win.DeviceOrientationEvent.requestPermission().catch(() => {});
      }
    };

    window.addEventListener("touchstart", requestSensorAccess, { once: true, passive: true });
    window.addEventListener("click", requestSensorAccess, { once: true, passive: true });

    // 3. Physics Simulation Loop (60/120fps GPU driven)
    let time = 0;
    const updatePhysics = () => {
      time += 0.04;

      // Smoothly decay scroll speed (spring return)
      scrollSpeed *= 0.87;
      if (Math.abs(scrollSpeed) < 0.05) scrollSpeed = 0;

      pillStates.forEach((p, idx) => {
        const el = pills[idx];
        if (!el) return;

        // Anti-gravity scroll lag: scrolling down pulls pills up with inertia lag
        const targetScrollLagY = -scrollSpeed * p.mass * 1.5;
        const targetScrollLagRot = -scrollSpeed * p.rotFactor * 0.45;

        // Organic micro-floating drift (ambient zero-g breathing)
        const floatY = Math.sin(time + p.phase) * 2.8;
        const floatRot = Math.cos(time + p.phase * 1.2) * 1.6;

        // Target positions
        const targetX = tiltX * p.mass;
        const targetY = targetScrollLagY + tiltY * p.mass + floatY;
        const targetRot = targetScrollLagRot + floatRot;

        // Spring physics per pill
        p.vx = (p.vx + (targetX - p.x) * p.stiffness) * p.damping;
        p.vy = (p.vy + (targetY - p.y) * p.stiffness) * p.damping;
        p.vrot = (p.vrot + (targetRot - p.rot) * p.stiffness) * p.damping;

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        // Physical clamping to keep pills aesthetically within bounds
        p.x = Math.max(-45, Math.min(45, p.x));
        p.y = Math.max(-70, Math.min(45, p.y));
        p.rot = Math.max(-40, Math.min(40, p.rot));

        // Write directly to CSS variables for 120Hz GPU compositor speed
        el.style.setProperty("--grav-x", `${p.x.toFixed(2)}px`);
        el.style.setProperty("--grav-y", `${p.y.toFixed(2)}px`);
        el.style.setProperty("--grav-rot", `${p.rot.toFixed(2)}deg`);
      });

      animFrameId = requestAnimationFrame(updatePhysics);
    };

    animFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("devicemotion", onDeviceMotion);
      window.removeEventListener("deviceorientation", onDeviceOrientation);
      window.removeEventListener("touchstart", requestSensorAccess);
      window.removeEventListener("click", requestSensorAccess);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="bento-section" aria-label="Key Features">
      <div className="bento-container">
        {/* Main Heading */}
        <h2 className="bento-main-heading">The best by design.</h2>

        {/* ── TOP ROW ──────────────────────────────────────────────── */}
        <div className="bento-row bento-row--top">
          
          {/* Card 1: Review (Left, col-span-5) */}
          <div className="bento-card bento-card--review">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Review</h3>
              <p className="bento-card__desc">
                Leave timestamped feedback and approve work in seconds.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--review">
              <div className="bento-review-box">
                {/* Video thumbnail with close button */}
                <div className="bento-review-thumb-wrap">
                  <div className="bento-review-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=140&h=140&fit=crop"
                      alt="Thumbnail preview"
                      className="bento-review-img"
                    />
                    <button type="button" className="bento-thumb-close" aria-label="Remove thumbnail">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Comment input mockup */}
                <div className="bento-review-input-area">
                  <span className="bento-review-text">{commentText}</span>
                  <span className="bento-review-cursor" />
                </div>

                {/* Footer bar with paperclip & comment button */}
                <div className="bento-review-footer">
                  <span className="bento-review-clip" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9E9D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </span>
                  <button type="button" className="bento-review-btn">
                    Comment at 00:21
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Flexible (Right, col-span-7) */}
          <div className="bento-card bento-card--flexible">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Flexible</h3>
              <p className="bento-card__desc">
                Run CPM, retainer or per-post campaigns: public, application-only or private.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--flexible">
              <div className="bento-tri-cards">
                
                {/* 1. CPM Card (Royal Blue) */}
                <div className="bento-mini-card bento-mini-card--cpm">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" fill="#ffffff" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">CPM</span>
                    <span className="bento-mini-sub">Paid per 1K views on a video</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--cpm">
                    <div className="bento-sheet-tabs">
                      <span className="bento-sheet-tab bento-sheet-tab--active">Views</span>
                      <span className="bento-sheet-tab">Submissions</span>
                      <span className="bento-sheet-tab">Pending</span>
                    </div>
                    <div className="bento-sheet-stat">
                      <span className="bento-sheet-label">TOTAL VIEWS</span>
                      <div className="bento-sheet-row">
                        <span className="bento-sheet-number">1,2M</span>
                        <span className="bento-sheet-tag">+12.3%</span>
                      </div>
                    </div>
                    <div className="bento-sheet-curve">
                      <svg viewBox="0 0 100 32" className="bento-sheet-svg" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cpmGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 24 Q 25 22, 50 12 T 100 6 L 100 32 L 0 32 Z" fill="url(#cpmGrad)" />
                        <path d="M0 24 Q 25 22, 50 12 T 100 6" fill="none" stroke="#2563EB" strokeWidth="2.4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Retainer Card (Vibrant Orange) */}
                <div className="bento-mini-card bento-mini-card--retainer">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <polyline points="9 15 11 17 15 13" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">Retainer</span>
                    <span className="bento-mini-sub">Fixed amount per month</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--retainer">
                    {/* Binder Rings */}
                    <div className="bento-cal-rings">
                      <span className="bento-cal-ring" />
                      <span className="bento-cal-ring" />
                    </div>
                    <span className="bento-sheet-cal-title">February 2026</span>
                    <div className="bento-sheet-cal-grid">
                      <span className="bento-cal-dim">26</span><span className="bento-cal-dim">27</span><span className="bento-cal-dim">28</span><span className="bento-cal-dim">29</span><span className="bento-cal-dim">30</span><span className="bento-cal-dim">31</span><span>1</span>
                      <span>2</span><span>3</span><span>4</span><span>5</span><span className="bento-cal-coin">6</span><span>7</span><span>8</span>
                      <span>9</span><span className="bento-cal-coin">10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                      <span>16</span><span>17</span><span>18</span><span className="bento-cal-coin">19</span><span>20</span><span>21</span><span>22</span>
                      <span className="bento-cal-active">23</span><span>24</span><span>25</span><span>26</span><span className="bento-cal-coin">27</span><span>28</span>
                    </div>
                  </div>
                </div>

                {/* 3. Per Post Card (Emerald Green) */}
                <div className="bento-mini-card bento-mini-card--perpost">
                  <div className="bento-mini-card__top">
                    <div className="bento-mini-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="3" />
                        <path d="M2 9h20" />
                        <path d="M6 4l3 5" />
                        <path d="M11 4l3 5" />
                        <path d="M16 4l3 5" />
                      </svg>
                    </div>
                    <span className="bento-mini-title">Per post</span>
                    <span className="bento-mini-sub">Flat fee for each video</span>
                  </div>

                  <div className="bento-mini-sheet bento-mini-sheet--perpost">
                    <div className="bento-phone-frame">
                      <div className="bento-perpost-badge">KIMBE</div>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=200&fit=crop"
                        alt="Per post video cover"
                        className="bento-perpost-img"
                      />
                      <div className="bento-phone-overlay">
                        <div className="bento-phone-side">
                          <span className="bento-phone-heart">♥ 24.8k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ROW ───────────────────────────────────────────── */}
        <div className="bento-row bento-row--bottom">
          
          {/* Card 3: Bot detection (Left, col-span-7) */}
          <div className="bento-card bento-card--bot">
            <div className="bento-card__header">
              <h3 className="bento-card__title">Bot detection</h3>
              <p className="bento-card__desc">
                Every view is checked for bot traffic, so you only pay for real people.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--bot">
              <div className="bento-bot-wrapper">
                
                {/* Floating Dark Popup Menu */}
                {showTooltip && (
                  <div className="bento-bot-popover">
                    <div className="bento-bot-popover__header">
                      <span className="bento-bot-popover__shield">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </span>
                      <span>Independently bot-checked</span>
                    </div>

                    <div className="bento-bot-popover__list">
                      <div className="bento-bot-row">
                        <span>Fraud-Score</span>
                        <span className="bento-bot-box bento-bot-box--green" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Verified views</span>
                        <span className="bento-bot-box bento-bot-box--green" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Demographics</span>
                        <span className="bento-bot-box bento-bot-box--red" />
                      </div>
                      <div className="bento-bot-row">
                        <span>Creator-Trust</span>
                        <span className="bento-bot-box bento-bot-box--gray" />
                      </div>
                    </div>

                    {/* Popover Arrow */}
                    <div className="bento-bot-popover__arrow" />
                  </div>
                )}

                {/* White Pill Button with Mouse Cursor */}
                <div className="bento-bot-trigger-wrap">
                  <button
                    type="button"
                    className="bento-bot-pill"
                    onClick={() => setShowTooltip(!showTooltip)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#110D0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Independently bot-checked</span>
                  </button>

                  {/* Realistic Pointer Hand Cursor */}
                  <div className="bento-bot-pointer" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 2v10l-2.5-2.5a2 2 0 0 0-2.83 2.83l6.33 6.33A5 5 0 0 0 14.54 20H18a4 4 0 0 0 4-4v-4a2 2 0 0 0-2-2h-1V9a2 2 0 0 0-2-2h-1V6a2 2 0 0 0-2-2h-1V2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2z"
                        fill="#ffffff"
                        stroke="#110D0C"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 4: Teams (Right, col-span-5) */}
          <div
            className="bento-card bento-card--teams"
            onClick={triggerGlobalShake}
            title="Click or shake phone to bounce team badges!"
          >
            <div className="bento-card__header">
              <h3 className="bento-card__title">Teams</h3>
              <p className="bento-card__desc">
                Manage multiple brands with role-based access.
              </p>
            </div>

            <div className="bento-card__visual bento-card__visual--teams">
              <div className="bento-roles-cloud" onClick={(e) => e.stopPropagation()}>
                
                {/* Pill 0: Member (Tilted top-left) */}
                <div
                  className="bento-role-pill bento-role-pill--member bento-role-pill--tilted"
                  onMouseEnter={() => triggerPillImpulse(0)}
                  onTouchStart={() => triggerPillImpulse(0)}
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerPillImpulse(0);
                  }}
                >
                  <RoleUserIcon />
                  <span>Member</span>
                </div>

                {/* Row 1 */}
                <div className="bento-roles-row">
                  <div
                    className="bento-role-pill bento-role-pill--admin"
                    onMouseEnter={() => triggerPillImpulse(1)}
                    onTouchStart={() => triggerPillImpulse(1)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(1);
                    }}
                  >
                    <RoleCrownIcon />
                    <span>Admin</span>
                  </div>
                  <div
                    className="bento-role-pill bento-role-pill--member"
                    onMouseEnter={() => triggerPillImpulse(2)}
                    onTouchStart={() => triggerPillImpulse(2)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(2);
                    }}
                  >
                    <RoleUserIcon />
                    <span>Member</span>
                  </div>
                  <div
                    className="bento-role-pill bento-role-pill--member"
                    onMouseEnter={() => triggerPillImpulse(3)}
                    onTouchStart={() => triggerPillImpulse(3)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(3);
                    }}
                  >
                    <RoleUserIcon />
                    <span>Member</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bento-roles-row">
                  <div
                    className="bento-role-pill bento-role-pill--mod"
                    onMouseEnter={() => triggerPillImpulse(4)}
                    onTouchStart={() => triggerPillImpulse(4)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(4);
                    }}
                  >
                    <RoleShieldIcon />
                    <span>Moderator</span>
                  </div>
                  <div
                    className="bento-role-pill bento-role-pill--member"
                    onMouseEnter={() => triggerPillImpulse(5)}
                    onTouchStart={() => triggerPillImpulse(5)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(5);
                    }}
                  >
                    <RoleUserIcon />
                    <span>Member</span>
                  </div>
                  <div
                    className="bento-role-pill bento-role-pill--mod"
                    onMouseEnter={() => triggerPillImpulse(6)}
                    onTouchStart={() => triggerPillImpulse(6)}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPillImpulse(6);
                    }}
                  >
                    <RoleShieldIcon />
                    <span>Moderator</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
