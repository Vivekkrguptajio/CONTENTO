import Navbar from "../components/Navbar";
import ClipperCirclePageClient from "./ClipperCirclePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClipperCircle by Pomera | Paid per view, not per follower",
  description:
    "ClipperCircle by Pomera: post brand videos from your own account and get paid for every verified view. Weekly UPI payouts, no follower minimum.",
};

export default function ClipperCirclePage() {
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow">
        <ClipperCirclePageClient />
      </main>
    </div>
  );
}
