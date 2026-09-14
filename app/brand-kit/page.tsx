import Navbar from "../components/Navbar";
import BrandKitSection from "../components/BrandKitSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Rewards | Brand Kit & Guidelines",
  description:
    "Official brand guidelines, logo assets, colour codes, typography, and illustrations for Content Rewards.",
};

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow pt-20">
        <BrandKitSection />
      </main>
    </div>
  );
}
