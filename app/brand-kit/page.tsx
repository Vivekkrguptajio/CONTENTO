import Navbar from "../components/Navbar";
import BrandKitSection from "../components/BrandKitSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomera | Brand Guidelines & Visual System",
  description:
    "Official Pomera visual system, 6-colour palette, Geist typography, and brand assets.",
};

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow pt-0">
        <BrandKitSection />
      </main>
    </div>
  );
}
