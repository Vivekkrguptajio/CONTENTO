"use client"

import { useEffect, useRef, useCallback, useState, useMemo } from "react"
import createGlobe from "cobe"
import { useTheme } from "../lib/theme"

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
    id: "reel-chile", 
    location: [-33.4489, -70.6693], 
    video: "/videos/reel-snow.mp4", 
    caption: "Chile", 
    rotate: -4 
  },
  { 
    id: "reel-sydney", 
    location: [-33.8688, 151.2093], 
    video: "/videos/reel-rafting.mp4", 
    caption: "Australia", 
    rotate: 5 
  },
  { 
    id: "reel-rio", 
    location: [-22.9068, -43.1729], 
    video: "/videos/clip1.mp4", 
    caption: "Rio de Janeiro", 
    rotate: -4 
  },
  { 
    id: "reel-capetown", 
    location: [-33.9249, 18.4241], 
    video: "/videos/reel-bike.mp4", 
    caption: "Cape Town", 
    rotate: 4 
  },
  { 
    id: "reel-buenosaires", 
    location: [-34.6037, -58.3816], 
    video: "/videos/reel-dog.mp4", 
    caption: "Buenos Aires", 
    rotate: -3 
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
  const isVisibleRef = useRef(true)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Balanced selection: includes northern creator hubs + prominent southern portion cards (Australia, Chile, Cape Town, Rio)
  const activeMarkers = useMemo(() => {
    if (!isMobile) {
      // Well-separated hubs only, so cards don't overlap each other
      const desktopIds = [
        "reel-sf",
        "reel-nyc",
        "reel-london",
        "reel-dubai",
        "reel-mumbai",
        "reel-singapore",
        "reel-tokyo",
        "reel-chile",
        "reel-rio",
        "reel-capetown",
        "reel-sydney",
      ]
      const picked = markers.filter((m) => desktopIds.includes(m.id))
      return picked.length > 0 ? picked : markers
    }
    const mobileIds = [
      // Northern portion
      "reel-sf",
      "reel-london",
      "reel-mumbai",
      "reel-tokyo",
      // Southern / bottom portion
      "reel-sydney",
      "reel-chile",
      "reel-capetown",
      "reel-rio",
    ]
    const filtered = markers.filter((m) => mobileIds.includes(m.id))
    return filtered.length > 0 ? filtered : markers.slice(0, 8)
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
    const el = wrapperRef.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting
      // Stop decoding the card videos too while off-screen
      el.querySelectorAll("video").forEach((v) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      })
    })
    io.observe(el)
    return () => io.disconnect()
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

  const theme = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const isDarkTheme = theme === "dark"
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      try {
        globe = createGlobe(canvas, {
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
          width,
          height: width,
          phi: 0,
          theta: 0.04, // Perfectly centered equator to show bottom portion (Chile, Australia, etc.)
          dark: isDarkTheme ? 1 : 0,
          diffuse: isDarkTheme ? 1.2 : 1.5,
          mapSamples: 6000,
          mapBrightness: isDarkTheme ? 8 : 9,
          baseColor: isDarkTheme ? [0.3, 0.32, 0.27] : [1, 1, 1],
          markerColor: [0.784, 0.945, 0.208],
          glowColor: isDarkTheme ? [0.16, 0.19, 0.08] : [0.94, 0.93, 0.91],
          markerElevation: 0,
          markers: activeMarkers.map((m) => ({ location: m.location, size: 0.02, id: m.id })),
          arcs: [],
          arcColor: [0.784, 0.945, 0.208],
          arcWidth: 0.5,
          arcHeight: 0.25,
          opacity: 0.7,
        })
        let last = performance.now()
        function animate(now: number) {
          animationId = requestAnimationFrame(animate)
          // Skip all work while the globe is off-screen or the tab is hidden
          if (!isVisibleRef.current || document.hidden) {
            last = now
            return
          }
          // Time-based rotation: same speed regardless of frame rate, no jumps after lag
          const dt = Math.min((now - last) / 16.67, 3)
          last = now
          if (!isPausedRef.current) phi += speed * dt
          globe!.update({
            phi: phi + phiOffsetRef.current + dragOffset.current.phi,
            theta: 0.04 + thetaOffsetRef.current + dragOffset.current.theta,
          })
        }
        animationId = requestAnimationFrame(animate)
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
  }, [activeMarkers, speed, theme])

  return (
    <div ref={wrapperRef} className={`relative aspect-square select-none ${className}`}>
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
              willChange: "opacity",
              // Slow fade-in as a card rotates into view, quick fade-out as it leaves.
              // The duration is read from the state being transitioned *to* (visible = 1 → slow).
              transitionProperty: "opacity",
              transitionTimingFunction: "ease-out",
              transitionDuration: `calc(0.15s + var(--cobe-visible-${m.id}, 0) * 0.95s)`,
              transform: `rotate(${m.rotate}deg)`,
            }}
          >
            {/* Reels Phone-Style Vertical Card (9:16 Aspect Ratio) */}
            <div
              style={{
                width: isMobile ? 48 : 55,
                height: isMobile ? 84 : 96,
                position: "relative",
                borderRadius: isMobile ? "10px" : "12px",
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
                  preload="metadata"
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
                  padding: isMobile ? "14px 2px 5px" : "19px 5px 6px",
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
                    fontSize: isMobile ? "7.8px" : "9px",
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
