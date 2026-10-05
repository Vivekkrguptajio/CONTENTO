import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./dark.css";
import PageLoader from "./components/PageLoader";
import { THEME_INIT_SCRIPT } from "./lib/theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/logo/pomera-icon.svg",
    apple: "/assets/logo/apple-touch-icon.png",
  },
  title: "Pomera — Know your number before you spend.",
  description:
    "An ad platform that sells certainty. Fixed ₹CPM distribution across verified Instagram Reels and YouTube Shorts where every view is tracked, checked and billed only when verified.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
