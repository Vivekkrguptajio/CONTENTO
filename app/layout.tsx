import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./dark.css";
import PageLoader from "./components/PageLoader";
import StickyCta from "./components/StickyCta";
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

/* On phones the page lays out 420px wide and the browser scales it down to fit, so everything looks a little zoomed out.
   React puts its own viewport tag back after hydration, so a head observer keeps ours. Landscape and tablets are left alone. */
const PHONE_ZOOM_OUT_SCRIPT = `(function(){var C="width=420, maximum-scale=5",D="width=device-width, initial-scale=1, maximum-scale=5";function phone(){return Math.min(screen.width,screen.height)<=480&&matchMedia("(orientation: portrait)").matches}function set(c){var h=document.head;if(!h)return;var ms=h.querySelectorAll('meta[name="viewport"]');for(var i=0;i<ms.length;i++)ms[i].parentNode.removeChild(ms[i]);var n=document.createElement("meta");n.name="viewport";n.content=c;h.appendChild(n)}function fix(){try{var ms=document.head.querySelectorAll('meta[name="viewport"]');var cur=ms.length===1?ms[0].getAttribute("content"):null;if(phone()){if(cur!==C)set(C)}else if(cur===C){set(D)}}catch(e){}}fix();new MutationObserver(fix).observe(document.head,{childList:true});addEventListener("orientationchange",fix);addEventListener("resize",fix);})();`;

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
        <script dangerouslySetInnerHTML={{ __html: PHONE_ZOOM_OUT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <PageLoader />
        {children}
        <StickyCta />
      </body>
    </html>
  );
}
