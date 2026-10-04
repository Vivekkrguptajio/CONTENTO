import Navbar from "../components/Navbar";
import CreatorPageClient from "./CreatorPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomera for Publishers | Paid per view, not per follower",
  description:
    "Get paid per verified view for posting brand videos from your own account. Weekly UPI payouts, no follower minimum.",
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
