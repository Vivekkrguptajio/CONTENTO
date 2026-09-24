"use client"

import { useEffect, useRef, useCallback, useState, useMemo } from "react"
import createGlobe from "cobe"

export interface PolaroidMarker {
  id: string
  location: [number, number]
  image?: string
  video?: string // YouTube URL/ID or direct video file URL (.mp4/.webm)
  caption: string
  rotate: number
}

export interface GlobePolaroidsProps {
  markers?: PolaroidMarker[]
  className?: string
  speed?: number
}

// Support alternative name
export type GlobePolaoridsProps = GlobePolaroidsProps

function getYoutubeEmbedUrl(src: string): string | null {
  if (!src) return null
  // Match standard YouTube ID or URL patterns
  const match = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/)
  const id = match ? match[1] : (/^[a-zA-Z0-9_-]{11}$/.test(src) ? src : null)
  if (id) {
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`
  }
  return null
}

const defaultMarkers: PolaroidMarker[] = [
  { 
    id: "reel-sf", 
    location: [37.78, -122.44], 
    video: "/videos/reel-bike.mp4", 
    caption: "San Francisco", 
    rotate: -4 
  },
  { 
    id: "reel-nyc", 
    location: [40.71, -74.01], 
    video: "/videos/reel-dog.mp4", 
    caption: "New York", 
    rotate: 3 
  },
  { 
    id: "reel-la", 
    location: [34.05, -118.24], 
    video: "/videos/reel-snow.mp4", 
    caption: "Los Angeles", 
    rotate: 5 
  },
  { 
    id: "reel-miami", 
    location: [25.76, -80.19], 
    video: "/videos/reel-rafting.mp4", 
    caption: "Miami", 
    rotate: -3 
  },
  { 
    id: "reel-london", 
    location: [51.51, -0.13], 
    video: "/videos/clip1.mp4", 
    caption: "London", 
    rotate: 4 
  },
  { 
    id: "reel-paris", 
    location: [48.86, 2.35], 
    video: "/videos/reel-bike.mp4", 
    caption: "Paris", 
    rotate: -4 
  },
  { 
    id: "reel-berlin", 
    location: [52.52, 13.40], 
    video: "/videos/reel-snow.mp4", 
    caption: "Berlin", 
    rotate: 3 
  },
  { 
    id: "reel-dubai", 
    location: [25.204, 55.270], 
    video: "/videos/reel-dog.mp4", 
    caption: "Dubai", 
    rotate: -5 
  },
  { 
    id: "reel-mumbai", 
    location: [19.076, 72.877], 
    video: "/videos/reel-rafting.mp4", 
    caption: "Mumbai", 
    rotate: 4 
  },
  { 
    id: "reel-delhi", 
    location: [28.613, 77.209], 
    video: "/videos/clip1.mp4", 
    caption: "New Delhi", 
    rotate: -3 
  },
  { 
    id: "reel-singapore", 
    location: [1.352, 103.819], 
    video: "/videos/reel-bike.mp4", 
    caption: "Singapore", 
    rotate: 5 
  },
  { 
    id: "reel-tokyo", 
    location: [35.68, 139.65], 
    video: "/videos/reel-snow.mp4", 
    caption: "Tokyo", 
    rotate: -4 
  },
  { 
    id: "reel-seoul", 
    location: [37.566, 126.978], 
    video: "/videos/reel-dog.mp4", 
    caption: "Seoul", 
    rotate: 3 
  },
  { 
    id: "reel-sydney", 
    location: [-33.87, 151.21], 
    video: "/videos/reel-rafting.mp4", 
    caption: "Sydney", 
    rotate: 5 
  },
  { 
    id: "reel-rio", 
    location: [-22.906, -43.172], 
    video: "/videos/clip1.mp4", 
    caption: "Rio de Janeiro", 
    rotate: -4 
  },
  { 
    id: "reel-capetown", 
    location: [-33.924, 18.424], 
    video: "/videos/reel-bike.mp4", 
    caption: "Cape Town", 
    rotate: 4 
  },
]

export function GlobePolaroids({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePolaroidsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // On mobile view: show only 4 cards evenly distributed across the globe (SF, London, Mumbai, Tokyo)
  const activeMarkers = useMemo(() => {
    if (!isMobile || markers.length <= 4) return markers
    return [
      markers.find((m) => m.id === "reel-sf") || markers[0],
      markers.find((m) => m.id === "reel-london") || markers[1],
      markers.find((m) => m.id === "reel-mumbai") || markers[2],
      markers.find((m) => m.id === "reel-tokyo") || markers[3],
    ].filter(Boolean) as PolaroidMarker[]
  }, [isMobile, markers])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      try {
        globe = createGlobe(canvas, {
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
          width,
          height: width,
          phi: 0,
          theta: 0.2,
          dark: 0,
          diffuse: 1.5,
          mapSamples: 8000,
          mapBrightness: 9,
          baseColor: [1, 1, 1],
          markerColor: [0.4, 0.6, 0.9],
          glowColor: [0.94, 0.93, 0.91],
          markerElevation: 0,
          markers: activeMarkers.map((m) => ({ location: m.location, size: 0.02, id: m.id })),
          arcs: [],
          arcColor: [0.5, 0.7, 1],
          arcWidth: 0.5,
          arcHeight: 0.25,
          opacity: 0.7,
        })
        function animate() {
          if (!isPausedRef.current) phi += speed
          globe!.update({
            phi: phi + phiOffsetRef.current + dragOffset.current.phi,
            theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
          })
          animationId = requestAnimationFrame(animate)
        }
        animate()
        setTimeout(() => canvas && (canvas.style.opacity = "1"))
      } catch (error) {
        console.error("Globe failed to initialize:", error)
      }
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver((entries) => {
          if (entries[0]?.contentRect.width > 0) {
            ro.disconnect()
            init()
          }
        })
        ro.observe(canvas)
      } else {
        setTimeout(init, 500)
      }
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [activeMarkers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {activeMarkers.map((m) => {
        const ytEmbed = m.video ? getYoutubeEmbedUrl(m.video) : null
        return (
          <div
            key={m.id}
            style={{
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 10,
              pointerEvents: "none" as const,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.3s, filter 0.3s",
              transform: `rotate(${m.rotate}deg)`,
            }}
          >
            {/* Reels Phone-Style Vertical Card (9:16 Aspect Ratio) */}
            <div
              style={{
                width: isMobile ? 48 : 56,
                height: isMobile ? 84 : 96,
                position: "relative",
                borderRadius: isMobile ? "8px" : "10px",
                overflow: "hidden",
                background: "#050505",
                boxShadow:
                  "0 10px 24px -4px rgba(0,0,0,0.32), 0 3px 8px rgba(0,0,0,0.18), inset 0 0 0 1.5px rgba(255,255,255,0.75)",
              }}
            >
              {/* Pure Video - Zero Controls, Instant Autoplay */}
              {ytEmbed ? (
                <iframe
                  src={ytEmbed}
                  title={m.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "280%",
                    height: "100%",
                    transform: "translate(-50%, -50%)",
                    border: 0,
                    pointerEvents: "none",
                  }}
                />
              ) : m.video ? (
                <video
                  src={m.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controls={false}
                  // @ts-ignore
                  disablePictureInPicture
                  disableRemotePlayback
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              ) : (
                <img
                  src={m.image}
                  alt={m.caption}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* Bottom Gradient Overlay with Location Caption */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "12px 2px 4px" : "16px 4px 5px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 65%, transparent 100%)",
                  zIndex: 2,
                  textAlign: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: isMobile ? "6.5px" : "7.5px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                  }}
                >
                  {m.caption}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GlobePolaroids
