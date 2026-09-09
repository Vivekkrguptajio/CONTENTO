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
  type: "speech-badge" | "pill" | "profile";
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

const BADGES: BadgeConfig[] = [
  // 1. Top Trophy Badge ("Just made my first $1k!") - visible at rotation 0
  {
    id: "trophy",
    lat: 0.80, // ~46° N
    baseLon: 0.12, // near 0° meridian
    type: "speech-badge",
    speechText: "Just made my first $1k!",
    iconSrc: "/hero-assets/trophy_badge.svg",
    iconAlt: "Trophy",
    iconWidth: 36,
    iconHeight: 36,
  },
  // 2. Center-Right Rolling Stones ("New campaign!") - visible at rotation 0
  {
    id: "stones",
    lat: 0.15, // ~9° N
    baseLon: 0.76, // ~44° E
    type: "speech-badge",
    speechText: "New campaign!",
    iconSrc: "/hero-assets/rolling_stones.svg",
    iconAlt: "Rolling Stones",
    iconWidth: 38,
    iconHeight: 38,
  },
  // 3. Center-Left Collab Sent ("Collab sent!") - visible at rotation 0
  {
    id: "collab",
    lat: -0.06, // ~3° S
    baseLon: -0.62, // ~35° W
    type: "speech-badge",
    speechText: "Collab sent!",
    iconSrc: "/hero-assets/avatar_badge.svg",
    iconAlt: "Creator Avatar",
    iconWidth: 36,
    iconHeight: 36,
  },

  // 5. Far-Right F1 Card - visible at rotation 0
  {
    id: "f1",
    lat: -0.16, // ~9° S
    baseLon: 1.65, // ~95° E
    type: "speech-badge",
    iconSrc: "/brand-logos/f1.png",
    iconAlt: "F1",
    iconWidth: 42,
    iconHeight: 16,
    badgeClass: "hero-badge-card--f1",
  },
  // 6. Far-Left Ethan Cole Profile - visible at rotation 0
  {
    id: "ethan",
    lat: -0.22, // ~13° S
    baseLon: -1.32, // ~76° W
    type: "profile",
    iconSrc: "/hero-assets/ethan_avatar.svg",
    profileName: "Ethan Cole",
    profileHandle: "@ethancole",
  },

  // 8. Back Hemisphere Creator Badge - smoothly rotates into view
  {
    id: "verified-collab",
    lat: -0.10, // ~6° S
    baseLon: 3.85, // ~220° (-140°)
    type: "speech-badge",
    speechText: "Payout sent!",
    iconSrc: "/hero-assets/avatar_badge.svg",
    iconAlt: "Verified Creator",
    iconWidth: 36,
    iconHeight: 36,
  },
];

// ── Arc Connection Lines (Cyber Attack Map Style) ────────────────────
interface ArcConnection {
  id: string;
  fromLat: number;
  fromLon: number;
  toLat: number;
  toLon: number;
  arcHeight: number; // How high the arc rises above the globe surface (0.1 to 0.5)
  speed: number; // Pulse travel speed (0.3 to 1.5)
  color: string; // Glow color
}

const ARC_CONNECTIONS: ArcConnection[] = [
  // USA → Europe (top-left arc)
  {
    id: "arc-1",
    fromLat: 0.70,
    fromLon: -1.4,
    toLat: 0.85,
    toLon: 0.25,
    arcHeight: 0.35,
    speed: 0.55,
    color: "rgba(249, 115, 22, 1)",
  },
  // Europe → Southeast Asia (right arc)
  {
    id: "arc-2",
    fromLat: 0.78,
    fromLon: 0.3,
    toLat: 0.10,
    toLon: 1.8,
    arcHeight: 0.40,
    speed: 0.42,
    color: "rgba(251, 146, 60, 1)",
  },
  // South America → Africa (bottom arc)
  {
    id: "arc-3",
    fromLat: -0.35,
    fromLon: -0.7,
    toLat: -0.05,
    toLon: 0.45,
    arcHeight: 0.28,
    speed: 0.65,
    color: "rgba(254, 215, 170, 1)",
  },
  // Asia → Oceania (far-right arc)
  {
    id: "arc-4",
    fromLat: 0.55,
    fromLon: 1.6,
    toLat: -0.40,
    toLon: 2.55,
    arcHeight: 0.32,
    speed: 0.50,
    color: "rgba(249, 115, 22, 1)",
  },
  // North Africa → India (mid arc)
  {
    id: "arc-5",
    fromLat: 0.50,
    fromLon: 0.20,
    toLat: 0.30,
    toLon: 1.30,
    arcHeight: 0.22,
    speed: 0.72,
    color: "rgba(251, 146, 60, 1)",
  },
  // Back hemisphere: Australia → Japan
  {
    id: "arc-6",
    fromLat: -0.42,
    fromLon: 2.55,
    toLat: 0.62,
    toLon: 2.40,
    arcHeight: 0.30,
    speed: 0.48,
    color: "rgba(254, 215, 170, 1)",
  },
  // Back hemisphere: Pacific crossing
  {
    id: "arc-7",
    fromLat: 0.35,
    fromLon: 3.0,
    toLat: -0.15,
    toLon: 4.2,
    arcHeight: 0.35,
    speed: 0.60,
    color: "rgba(249, 115, 22, 1)",
  },
  // Europe → North America (return arc, opposite direction)
  {
    id: "arc-8",
    fromLat: 0.88,
    fromLon: 0.10,
    toLat: 0.60,
    toLon: -1.05,
    arcHeight: 0.25,
    speed: 0.38,
    color: "rgba(251, 146, 60, 1)",
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

    // 3D Axial Tilt (Pitch forward ~27° + Roll sideways ~9°)
    const tiltX = 0.46;
    const tiltZ = -0.16;
    const cosTiltX = Math.cos(tiltX);
    const sinTiltX = Math.sin(tiltX);
    const cosTiltZ = Math.cos(tiltZ);
    const sinTiltZ = Math.sin(tiltZ);

    // Responsive size tracking
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const size = Math.min(rect.width, rect.height) || 520;

      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // 3D projection helper with pitch and roll tilt
    const project = (x0: number, y0: number, z0: number, cx: number, cy: number, R: number) => {
      // 1. Pitch around X axis (tilt towards viewer)
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
      const size = Math.min(rect.width, rect.height) || 520;
      const cx = size / 2;
      const cy = size / 2;
      const R = size * 0.46; // Radius ensuring perfect circle inside canvas

      ctx.clearRect(0, 0, size, size);

      // ── 1. Radial Sunset Atmosphere Inside Perfect Circle ───────────
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip(); // Keep atmosphere and coordinate lines strictly inside perfect circle

      const bgGrad = ctx.createRadialGradient(cx, cy - R * 0.12, R * 0.05, cx, cy, R);
      bgGrad.addColorStop(0, "rgba(254, 215, 170, 0.85)");
      bgGrad.addColorStop(0.4, "rgba(255, 237, 213, 0.55)");
      bgGrad.addColorStop(0.75, "rgba(254, 215, 170, 0.28)");
      bgGrad.addColorStop(1, "rgba(254, 215, 170, 0.05)");

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, size, size);

      // ── 2. Latitude Circles (Parallels) in Tilted 3D ────────────────
      const latSteps = [-60, -42, -22, 0, 22, 42, 60];
      for (const latDeg of latSteps) {
        const lat = (latDeg * Math.PI) / 180;
        const rRing = Math.cos(lat);
        const ySphere = Math.sin(lat);

        ctx.beginPath();
        let ringFirst = true;

        for (let lonDeg = 0; lonDeg <= 360; lonDeg += 4) {
          const lon = (lonDeg * Math.PI) / 180 + rotation;
          const x0 = rRing * Math.sin(lon);
          const y0 = ySphere;
          const z0 = rRing * Math.cos(lon);

          const pt = project(x0, y0, z0, cx, cy, R);

          if (pt.z > -0.05) {
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

        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
        ctx.lineWidth = 1.35;
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

          if (pt.z > -0.05) {
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

        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1.35;
        ctx.stroke();
      }

      // ── 4. Radiant Orange Orbit Arc ─────────────────────────────────
      ctx.beginPath();
      let orbitFirst = true;
      const orbitTilt = 0.62;
      const orbitCos = Math.cos(orbitTilt);
      const orbitSin = Math.sin(orbitTilt);
      const orbitPhase = rotation * 0.35;

      for (let aDeg = 140; aDeg <= 325; aDeg += 2) {
        const a = (aDeg * Math.PI) / 180 + orbitPhase;
        const ox0 = Math.cos(a) * 0.98;
        const oy0 = Math.sin(a) * 0.98;
        const oz0 = 0;

        const oy1 = oy0 * orbitCos - oz0 * orbitSin;
        const oz1 = oy0 * orbitSin + oz0 * orbitCos;
        const ox1 = ox0;

        const pt = project(ox1, oy1, oz1, cx, cy, R);

        if (pt.z > -0.15) {
          if (orbitFirst) {
            ctx.moveTo(pt.px, pt.py);
            orbitFirst = false;
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        } else {
          orbitFirst = true;
        }
      }

      const orbitGrad = ctx.createLinearGradient(cx - R * 0.7, cy + R * 0.4, cx + R * 0.3, cy - R * 0.7);
      orbitGrad.addColorStop(0, "rgba(234, 88, 12, 0.95)");
      orbitGrad.addColorStop(0.4, "rgba(249, 115, 22, 0.85)");
      orbitGrad.addColorStop(0.8, "rgba(254, 215, 170, 0.4)");
      orbitGrad.addColorStop(1, "rgba(254, 215, 170, 0)");

      ctx.setLineDash([]);
      ctx.strokeStyle = orbitGrad;
      ctx.lineWidth = 3.2;
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(234, 88, 12, 0.6)";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── 4b. Animated Arc Connection Lines (Cyber Attack Map) ────────
      const arcTime = Date.now() * 0.001; // seconds

      for (const arc of ARC_CONNECTIONS) {
        // Convert lat/lon to 3D Cartesian coordinates on unit sphere
        const fromLon = arc.fromLon + rotation;
        const toLon = arc.toLon + rotation;

        // From point
        const fx = Math.cos(arc.fromLat) * Math.sin(fromLon);
        const fy = Math.sin(arc.fromLat);
        const fz = Math.cos(arc.fromLat) * Math.cos(fromLon);

        // To point
        const tx = Math.cos(arc.toLat) * Math.sin(toLon);
        const ty = Math.sin(arc.toLat);
        const tz = Math.cos(arc.toLat) * Math.cos(toLon);

        // Build arc path: interpolate along great circle with height
        const arcSegments = 40;
        const arcPoints: { px: number; py: number; z: number }[] = [];

        for (let s = 0; s <= arcSegments; s++) {
          const t = s / arcSegments;

          // Linear interp on the sphere surface (SLERP approximation)
          let mx = fx + (tx - fx) * t;
          let my = fy + (ty - fy) * t;
          let mz = fz + (tz - fz) * t;

          // Normalize to sphere surface
          const len = Math.sqrt(mx * mx + my * my + mz * mz) || 1;
          mx /= len;
          my /= len;
          mz /= len;

          // Elevate above surface with a sine curve for arc height
          const elevation = 1 + arc.arcHeight * Math.sin(t * Math.PI);
          mx *= elevation;
          my *= elevation;
          mz *= elevation;

          const pt = project(mx, my, mz, cx, cy, R);
          arcPoints.push(pt);
        }

        // Check if most of the arc is on the visible hemisphere
        let visibleCount = 0;
        for (const p of arcPoints) {
          if (p.z > -0.08) visibleCount++;
        }
        if (visibleCount < arcSegments * 0.3) continue; // Skip mostly hidden arcs

        // Animated pulse position (loops 0→1→0→1...)
        const pulseT = (arcTime * arc.speed) % 1;
        const pulseIdx = Math.floor(pulseT * arcSegments);

        // Draw the arc trail (faded line behind the pulse)
        ctx.beginPath();
        let arcFirst = true;

        for (let s = 0; s <= arcSegments; s++) {
          const pt = arcPoints[s];
          if (pt.z > -0.08) {
            if (arcFirst) {
              ctx.moveTo(pt.px, pt.py);
              arcFirst = false;
            } else {
              ctx.lineTo(pt.px, pt.py);
            }
          } else {
            arcFirst = true;
          }
        }

        ctx.setLineDash([]);
        ctx.strokeStyle = arc.color.replace(", 1)", ", 0.18)");
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw the glowing pulse trail (bright portion near pulse head)
        const trailLen = 10; // segments behind pulse that glow
        ctx.beginPath();
        let trailFirst = true;

        for (let s = Math.max(0, pulseIdx - trailLen); s <= Math.min(arcSegments, pulseIdx); s++) {
          const pt = arcPoints[s];
          if (pt.z > -0.08) {
            if (trailFirst) {
              ctx.moveTo(pt.px, pt.py);
              trailFirst = false;
            } else {
              ctx.lineTo(pt.px, pt.py);
            }
          } else {
            trailFirst = true;
          }
        }

        ctx.strokeStyle = arc.color.replace(", 1)", ", 0.7)");
        ctx.lineWidth = 2.2;
        ctx.shadowColor = arc.color.replace(", 1)", ", 0.6)");
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw the pulse dot (bright head of the traveling pulse)
        if (pulseIdx >= 0 && pulseIdx < arcPoints.length) {
          const pulsePt = arcPoints[pulseIdx];
          if (pulsePt.z > -0.08) {
            ctx.beginPath();
            ctx.arc(pulsePt.px, pulsePt.py, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            ctx.shadowColor = arc.color;
            ctx.shadowBlur = 14;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Outer glow ring around pulse dot
            ctx.beginPath();
            ctx.arc(pulsePt.px, pulsePt.py, 7, 0, Math.PI * 2);
            ctx.fillStyle = arc.color.replace(", 1)", ", 0.2)");
            ctx.fill();
          }
        }

        // Draw endpoint dots (from & to)
        const fromPt = arcPoints[0];
        const toPt = arcPoints[arcPoints.length - 1];

        for (const ept of [fromPt, toPt]) {
          if (ept.z > -0.05) {
            ctx.beginPath();
            ctx.arc(ept.px, ept.py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = arc.color.replace(", 1)", ", 0.6)");
            ctx.fill();

            // Pulsing ring on endpoints
            const ringScale = 1 + Math.sin(arcTime * 2.5) * 0.3;
            ctx.beginPath();
            ctx.arc(ept.px, ept.py, 5 * ringScale, 0, Math.PI * 2);
            ctx.strokeStyle = arc.color.replace(", 1)", ", 0.25)");
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.restore(); // Restore clipping

      // ── 5. Perfect Circle Outer Silhouette Rim ──────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Outer delicate warm glow halo
      ctx.beginPath();
      ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(251, 146, 60, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // ── 6. Synchronize Floating Badges Rotating With Globe ───────────
      const floatR = R * 1.04; // Badges hover slightly above the globe surface
      const now = Date.now();

      BADGES.forEach((badge, idx) => {
        const el = badgeRefs.current[idx];
        if (!el) return;

        // Current rotated longitude
        const lon = badge.baseLon + rotation;
        const x0 = Math.cos(badge.lat) * Math.sin(lon);
        const y0 = Math.sin(badge.lat);
        const z0 = Math.cos(badge.lat) * Math.cos(lon);

        // Project through exact 3D tilt
        const pt = project(x0, y0, z0, cx, cy, floatR);

        // Subtle floating bob in 3D
        const bob = Math.sin(now * 0.0022 + idx * 1.3) * 4;
        const finalPy = pt.py + bob;

        // Visibility & depth handling
        // z2 > 0 is front hemisphere. Fades out smoothly when rotating to back.
        const opacity = Math.max(0, Math.min(1, (pt.z + 0.12) / 0.25));
        const scale = 0.82 + Math.max(0, pt.z) * 0.24;

        if (opacity <= 0.01) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
        } else {
          el.style.opacity = `${opacity}`;
          el.style.transform = `translate3d(${pt.px}px, ${finalPy}px, 0) translate(-50%, -50%) scale(${scale})`;
          el.style.zIndex = `${Math.round(15 + pt.z * 15)}`;
          el.style.pointerEvents = pt.z > 0.08 ? "auto" : "none";
        }
      });

      // Advance rotation (30% slowed down)
      rotation += 0.00245;
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
                    width={badge.iconWidth || 36}
                    height={badge.iconHeight || 36}
                    className={badge.badgeClass === "hero-badge-card--f1" ? "hero-f1-img" : "hero-badge-icon"}
                  />
                )}
              </div>
            </>
          )}

          {/* Type B: Payout Pill */}
          {badge.type === "pill" && (
            <div className="hero-payout-pill">
              <span>{badge.pillText}</span>
            </div>
          )}

          {/* Type C: Profile Card */}
          {badge.type === "profile" && (
            <div className="hero-profile-card">
              {badge.iconSrc && (
                <Image
                  src={badge.iconSrc}
                  alt={badge.profileName || "Profile"}
                  width={26}
                  height={26}
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
