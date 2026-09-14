import Navbar from "../components/Navbar";
import CreatorPageClient from "./CreatorPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Rewards | Creators, Agencies, Pricing, Brand Kit & Legal",
  description:
    "Simple pricing, no subscriptions. A 10% platform fee, 8% once verified, charged only on work you approve. Official brand kit and FTC compliance guides.",
};

export default function CreatorPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow">
        <CreatorPageClient />
      </main>
    </div>
  );
}
