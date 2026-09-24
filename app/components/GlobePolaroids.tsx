"use client"

import { useEffect, useRef, useCallback } from "react"
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
    id: "polaroid-sf", 
    location: [37.78, -122.44], 
    video: "M7lc1UVf-VE", // YouTube video
    image: "https://cdn.21st.dev/assets/mirror/c6/c6d80a573edd25cbf4156d5fa5ac1a92f3464d868610a66e42b6f2504ad20754.jpg", 
    caption: "San Francisco", 
    rotate: -5 
  },
  { 
    id: "polaroid-nyc", 
    location: [40.71, -74.01], 
    video: "jNQXAC9IVRw", // YouTube video ("Me at the zoo")
    image: "https://cdn.21st.dev/assets/mirror/df/dfb431480f9ad523c4d95d687e3ad9ab26527f92390df4e29f05e1d18d593915.jpg", 
    caption: "New York", 
    rotate: 4 
  },
  { 
    id: "polaroid-tokyo", 
    location: [35.68, 139.65], 
    video: "aqz-KE-bpKQ", // YouTube video (Big Buck Bunny)
    image: "https://cdn.21st.dev/assets/mirror/34/34ae66f2d60a75fff0dde6adb9e8bce7b7794c0013feec4db1bce28fb58aaacf.jpg", 
    caption: "Tokyo", 
    rotate: -3 
  },
  { 
    id: "polaroid-sydney", 
    location: [-33.87, 151.21], 
    video: "M7lc1UVf-VE", // YouTube video
    image: "https://cdn.21st.dev/assets/mirror/88/88b7dfb3a21786d682f68d5fea837cb3dc85344ade84f54c416b83353fabffce.jpg", 
    caption: "Sydney", 
    rotate: 6 
  },
  { 
    id: "polaroid-paris", 
    location: [48.86, 2.35], 
    video: "aqz-KE-bpKQ", // YouTube video
    image: "https://cdn.21st.dev/assets/mirror/70/7068d8f556e9c004940e37c9af3712a1bb2e2d659db000344d6b1d422dfaa994.jpg", 
    caption: "Paris", 
    rotate: -4 
  },
  { 
    id: "polaroid-london", 
    location: [51.51, -0.13], 
    video: "jNQXAC9IVRw", // YouTube video
    image: "https://cdn.21st.dev/assets/mirror/22/227d573eee27dd0ee533cf260d68c6269d9c232c1def19ce5213de8d32cee45f.jpg", 
    caption: "London", 
    rotate: 3 
  },
  { 
    id: "polaroid-mumbai", 
    location: [19.076, 72.877], 
    video: "M7lc1UVf-VE", // YouTube video
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&q=80", 
    caption: "Mumbai", 
    rotate: -5 
  },
  { 
    id: "polaroid-dubai", 
    location: [25.204, 55.270], 
    video: "aqz-KE-bpKQ", // YouTube video
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&q=80", 
    caption: "Dubai", 
    rotate: 4 
  },
  { 
    id: "polaroid-rio", 
    location: [-22.906, -43.172], 
    video: "jNQXAC9IVRw", // YouTube video
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80", 
    caption: "Rio de Janeiro", 
    rotate: -3 
  },
  { 
    id: "polaroid-singapore", 
    location: [1.352, 103.819], 
    video: "M7lc1UVf-VE", // YouTube video
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&q=80", 
    caption: "Singapore", 
    rotate: 5 
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
          markers: markers.map((m) => ({ location: m.location, size: 0.02, id: m.id })),
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
  }, [markers, speed])

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
      {markers.map((m) => {
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
              marginBottom: 8,
              background: "#fff",
              padding: "6px 6px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)",
              transform: `rotate(${m.rotate}deg)`,
              pointerEvents: "none" as const,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.3s, filter 0.3s",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                overflow: "hidden",
                position: "relative",
                background: "#000",
                borderRadius: "2px",
              }}
            >
              {ytEmbed ? (
                <iframe
                  src={ytEmbed}
                  title={m.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "178%",
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
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  src={m.image}
                  alt={m.caption}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <span
              style={{
                position: "absolute",
                bottom: 5,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.5rem",
                color: "#333",
                letterSpacing: "0.02em",
              }}
            >
              {m.caption}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default GlobePolaroids
