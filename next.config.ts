import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "creator" is retired for the supply side; ClipperCircle by Pomera is the publisher front door
  async redirects() {
    return [
      { source: "/creator", destination: "/clippercircle", permanent: true },
      { source: "/creators", destination: "/clippercircle", permanent: true },
      { source: "/creator/:path*", destination: "/clippercircle/:path*", permanent: true },
      { source: "/creators/:path*", destination: "/clippercircle/:path*", permanent: true },
    ];
  },
  allowedDevOrigins: [
    "192.168.1.111",
    "192.168.1.111:3000",
    "localhost:3000",
    "*.loca.lt",
    "*.ngrok-free.app",
    "*.ngrok.io",
  ],
};

export default nextConfig;
