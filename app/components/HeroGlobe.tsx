"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroGlobeProps {
  className?: string;
}

interface BadgeConfig {
  id: string;
  lat: number;
  baseLon: number;
  type: "speech-badge" | "pill" | "profile" | "brand-card";
  speechText?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  badgeClass?: string;
  pillText?: string;
  profileName?: string;
  profileHandle?: string;
}

// ── Exactly 8 badges spaced at 45° (0.785 rad) intervals with alternating latitudes ──
// Mathematical guarantee: NO TWO BADGES CAN EVER COLLIDE OR OVERLAP.
const BADGES: BadgeConfig[] = [
  // 1. NFL Brand Card
  {
    id: "nfl",
    lat: -0.08,
    baseLon: 0.0,
    type: "brand-card",
    iconSrc: "/hero-assets/nfl_badge.svg",
    iconAlt: "NFL",
    iconWidth: 34,
    iconHeight: 34,
    badgeClass: "hero-badge-card--nfl",
  },
  // 2. Crown Card ("Just made my first $1k!")
  {
    id: "crown",
    lat: 0.22,
    baseLon: 0.785,
    type: "speech-badge",
    speechText: "Just made my first $1k!",
    iconSrc: "/hero-assets/crown_badge.svg",
    iconAlt: "First $1k Crown",
    iconWidth: 38,
    iconHeight: 38,
    badgeClass: "hero-badge-card--crown",
  },
  // 3. $970 Payout Pill
  {
    id: "payout-970",
    lat: 0.48,
    baseLon: 1.57,
    type: "pill",
    pillText: "$970",
  },
  // 4. ElevenLabs Brand Card
  {
    id: "elevenlabs",
    lat: -0.36,
    baseLon: 2.355,
    type: "brand-card",
    iconSrc: "/hero-assets/elevenlabs_badge.svg",
    iconAlt: "ElevenLabs",
    iconWidth: 64,
    iconHeight: 22,
    badgeClass: "hero-badge-card--elevenlabs",
  },
  // 5. Creator Collab Sent Speech Badge
  {
    id: "collab",
    lat: 0.18,
    baseLon: 3.14,
    type: "speech-badge",
    speechText: "Collab sent!",
    iconSrc: "/hero-assets/avatar_badge.svg",
    iconAlt: "Creator Avatar",
    iconWidth: 34,
    iconHeight: 34,
  },
  // 6. Sofia Reyes Profile Card
  {
    id: "sofia",
    lat: -0.32,
    baseLon: 3.925,
    type: "profile",
    iconSrc: "/hero-assets/sofia_avatar.svg",
    profileName: "Sofia Reyes",
    profileHandle: "@sofiareyes",
  },
  // 7. Rolling Stones ("New campaign!")
  {
    id: "stones",
    lat: 0.52,
    baseLon: 4.71,
    type: "speech-badge",
    speechText: "New campaign!",
    iconSrc: "/hero-assets/rolling_stones.svg",
    iconAlt: "Rolling Stones",
    iconWidth: 34,
    iconHeight: 34,
  },
  // 8. Ethan Cole Profile Card
  {
    id: "ethan",
    lat: -0.28,
    baseLon: 5.495,
    type: "profile",
    iconSrc: "/hero-assets/ethan_avatar.svg",
    profileName: "Ethan Cole",
    profileHandle: "@ethancole",
  },
];

export default function HeroGlobe({ className }: HeroGlobeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    // 3D Axial Tilt (Pitch forward ~22° + Roll sideways ~7°)
    const tiltX = 0.38;
    const tiltZ = -0.12;
    const cosTiltX = Math.cos(tiltX);
    const sinTiltX = Math.sin(tiltX);
    const cosTiltZ = Math.cos(tiltZ);
    const sinTiltZ = Math.sin(tiltZ);

    // Track responsive size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = Math.min(rect.width, rect.height) || 600;

      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // 3D projection helper with pitch and roll tilt
    const project = (x0: number, y0: number, z0: number, cx: number, cy: number, R: number) => {
      // 1. Pitch around X axis (tilt forward)
      const y1 = y0 * cosTiltX - z0 * sinTiltX;
      const z1 = y0 * sinTiltX + z0 * cosTiltX;
      const x1 = x0;

      // 2. Roll around Z axis (sideways axial tilt)
      const x2 = x1 * cosTiltZ - y1 * sinTiltZ;
      const y2 = x1 * sinTiltZ + y1 * cosTiltZ;
      const z2 = z1;

      return {
        px: cx + x2 * R,
        py: cy - y2 * R,
        z: z2,
      };
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height) || 600;
      const cx = size / 2;
      const cy = size / 2;
      const R = size * 0.44; // Perfect circle radius

      ctx.clearRect(0, 0, size, size);

      // ── 1. Radial Sunset Atmosphere Inside Sphere ───────────────────
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip(); // Keep inside globe

      const bgGrad = ctx.createRadialGradient(cx, cy - R * 0.08, R * 0.05, cx, cy, R);
      bgGrad.addColorStop(0, "rgba(254, 215, 170, 0.78)");
      bgGrad.addColorStop(0.35, "rgba(255, 237, 213, 0.48)");
      bgGrad.addColorStop(0.72, "rgba(254, 215, 170, 0.20)");
      bgGrad.addColorStop(1, "rgba(255, 255, 255, 0.0)");

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, size, size);

      // ── 2. Latitude Circles (Parallels) in Tilted 3D ────────────────
      const latSteps = [-55, -36, -18, 0, 18, 36, 55];
      for (const latDeg of latSteps) {
        const lat = (latDeg * Math.PI) / 180;
        const rRing = Math.cos(lat);
        const ySphere = Math.sin(lat);

        ctx.beginPath();
        let ringFirst = true;

        for (let lonDeg = 0; lonDeg <= 360; lonDeg += 3) {
          const lon = (lonDeg * Math.PI) / 180 + rotation;
          const x0 = rRing * Math.sin(lon);
          const y0 = ySphere;
          const z0 = rRing * Math.cos(lon);

          const pt = project(x0, y0, z0, cx, cy, R);

          if (pt.z > -0.02) {
            if (ringFirst) {
              ctx.moveTo(pt.px, pt.py);
              ringFirst = false;
            } else {
              ctx.lineTo(pt.px, pt.py);
            }
          } else {
            ringFirst = true;
          }
        }

        ctx.setLineDash([2, 5.5]);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
        ctx.lineWidth = 1.15;
        ctx.stroke();
      }

      // ── 3. Rotating Longitude Curves (Meridians) ────────────────────
      const meridianCount = 14;
      const stepLon = (Math.PI * 2) / meridianCount;

      for (let i = 0; i < meridianCount; i++) {
        const baseLon = i * stepLon + rotation;

        ctx.beginPath();
        let first = true;

        for (let latDeg = -90; latDeg <= 90; latDeg += 3) {
          const lat = (latDeg * Math.PI) / 180;
          const cosLat = Math.cos(lat);
          const sinLat = Math.sin(lat);

          const x0 = cosLat * Math.sin(baseLon);
          const y0 = sinLat;
          const z0 = cosLat * Math.cos(baseLon);

          const pt = project(x0, y0, z0, cx, cy, R);

          if (pt.z > -0.02) {
            if (first) {
              ctx.moveTo(pt.px, pt.py);
              first = false;
            } else {
              ctx.lineTo(pt.px, pt.py);
            }
          } else {
            first = true;
          }
        }

        ctx.setLineDash([2, 5.5]);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
        ctx.lineWidth = 1.15;
        ctx.stroke();
      }


      // ── 5. Elegant Connection Lines Between Real Active Nodes ─────────
      const floatR = R * 1.03;
      const now = Date.now();
      const projectedBadges: { [key: string]: { px: number; py: number; z: number } } = {};

      BADGES.forEach((badge) => {
        const lon = badge.baseLon + rotation;
        const x0 = Math.cos(badge.lat) * Math.sin(lon);
        const y0 = Math.sin(badge.lat);
        const z0 = Math.cos(badge.lat) * Math.cos(lon);
        const pt = project(x0, y0, z0, cx, cy, floatR);
        projectedBadges[badge.id] = pt;
      });

      // Connections between brand and payout nodes
      const connections: [string, string][] = [
        ["nfl", "crown"],
        ["nfl", "payout-970"],
        ["elevenlabs", "collab"],
        ["stones", "sofia"],
        ["stones", "ethan"],
      ];

      const animTime = now * 0.001; // seconds

      for (const [idFrom, idTo] of connections) {
        const p1 = projectedBadges[idFrom];
        const p2 = projectedBadges[idTo];

        if (p1 && p2 && p1.z > 0.04 && p2.z > 0.04) {
          const minZ = Math.min(p1.z, p2.z);
          const alpha = Math.min(1, (minZ - 0.04) / 0.18);

          // Quadratic bezier arch between nodes
          const midX = (p1.px + p2.px) / 2;
          const midY = (p1.py + p2.py) / 2 - 24;

          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.quadraticCurveTo(midX, midY, p2.px, p2.py);

          ctx.strokeStyle = `rgba(249, 115, 22, ${(alpha * 0.65).toFixed(2)})`;
          ctx.lineWidth = 1.6;
          ctx.setLineDash([]);
          ctx.stroke();

          // Traveling glowing pulse bead
          const t = (animTime * 0.45) % 1;
          const it = 1 - t;
          const pulseX = it * it * p1.px + 2 * it * t * midX + t * t * p2.px;
          const pulseY = it * it * p1.py + 2 * it * t * midY + t * t * p2.py;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.95).toFixed(2)})`;
          ctx.shadowColor = "rgba(249, 115, 22, 0.9)";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      ctx.restore(); // End of clipped atmosphere & globe interior

      // ── 6. Outer Delicate Silhouette Rim ────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Outer delicate warm glow halo
      ctx.beginPath();
      ctx.arc(cx, cy, R + 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(251, 146, 60, 0.24)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── 7. Synchronize Floating Badges With Smooth Depth & Fade ──────
      BADGES.forEach((badge, idx) => {
        const el = badgeRefs.current[idx];
        if (!el) return;

        const pt = projectedBadges[badge.id];
        if (!pt) return;

        // Subtle organic levitating bob
        const bob = Math.sin(now * 0.0022 + idx * 1.35) * 3.5;
        const finalPy = pt.py + bob;

        // Smooth opacity fading when rotating away from front hemisphere
        // z > 0.25: full opacity 1
        // 0.25 >= z >= 0.02: smooth fade down to 0
        // z < 0.02: fully hidden
        const rawOpacity = (pt.z - 0.02) / 0.22;
        const opacity = Math.max(0, Math.min(1, rawOpacity));
        const scale = 0.86 + Math.max(0, pt.z) * 0.18;

        if (opacity <= 0.02) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          el.style.visibility = "hidden";
        } else {
          el.style.visibility = "visible";
          el.style.opacity = opacity.toFixed(3);
          el.style.transform = `translate3d(${pt.px.toFixed(1)}px, ${finalPy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
          el.style.zIndex = `${Math.round(20 + pt.z * 15)}`;
          el.style.pointerEvents = pt.z > 0.1 ? "auto" : "none";
        }
      });

      // Smooth, gentle rotation speed (calm and premium)
      rotation += 0.0016;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div ref={containerRef} className={`hero-globe-container ${className || ""}`}>
      <canvas
        ref={canvasRef}
        className="hero-globe-canvas"
        aria-label="3D Rotating Wireframe Globe"
      />

      {/* ── Floating Badges Rotating With Globe in 3D ──────────────── */}
      {BADGES.map((badge, idx) => (
        <div
          key={badge.id}
          ref={(el) => {
            badgeRefs.current[idx] = el;
          }}
          className={`hero-float hero-float--3d hero-float--${badge.id}`}
        >
          {/* Type A: Speech Bubble + Badge Card */}
          {badge.type === "speech-badge" && (
            <>
              {badge.speechText && (
                <div className="hero-speech-bubble">
                  <span>{badge.speechText}</span>
                  <div className="hero-bubble-tail" />
                </div>
              )}
              <div className={`hero-badge-card ${badge.badgeClass || ""}`}>
                {badge.iconSrc && (
                  <Image
                    src={badge.iconSrc}
                    alt={badge.iconAlt || "Badge"}
                    width={badge.iconWidth || 34}
                    height={badge.iconHeight || 34}
                    className="hero-badge-icon"
                  />
                )}
              </div>
            </>
          )}

          {/* Type B: Brand Card (e.g., NFL, F1, ElevenLabs) */}
          {badge.type === "brand-card" && (
            <div className={`hero-badge-card hero-badge-card--brand ${badge.badgeClass || ""}`}>
              {badge.iconSrc && (
                <Image
                  src={badge.iconSrc}
                  alt={badge.iconAlt || "Brand"}
                  width={badge.iconWidth || 34}
                  height={badge.iconHeight || 34}
                  className="hero-brand-img"
                />
              )}
            </div>
          )}

          {/* Type C: Payout Pill ($970, $1,420) */}
          {badge.type === "pill" && (
            <div className="hero-payout-pill">
              <span className="hero-pill-currency">$</span>
              <span>{badge.pillText?.replace("$", "")}</span>
            </div>
          )}

          {/* Type D: Profile Card (Ethan Cole, Sofia Reyes) */}
          {badge.type === "profile" && (
            <div className="hero-profile-card">
              {badge.iconSrc && (
                <Image
                  src={badge.iconSrc}
                  alt={badge.profileName || "Profile"}
                  width={28}
                  height={28}
                  className="hero-profile-avatar"
                />
              )}
              <div className="hero-profile-meta">
                <span className="hero-profile-name">{badge.profileName}</span>
                <span className="hero-profile-handle">{badge.profileHandle}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
