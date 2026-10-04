import Navbar from "../components/Navbar";
import ChangelogSection from "../components/ChangelogSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Content Rewards",
  description:
    "See what gets shipped: the latest updates, features, and improvements across Content Rewards.",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow bg-white">
        <ChangelogSection />
      </main>
      <Footer />
    </div>
  );
}
