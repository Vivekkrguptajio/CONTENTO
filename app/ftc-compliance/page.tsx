import Navbar from "../components/Navbar";
import StandaloneLegal from "../components/StandaloneLegal";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTC Compliance & Transparency Guide | Content Rewards",
  description:
    "Official FTC compliance guidelines, disclosure requirements, and best practices for Creators and Brands on Content Rewards.",
};

export default function FTCCompliancePage() {
  return (
    <div className="min-h-screen bg-[#1c1d1d] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <StandaloneLegal docKey="ftc" />
      </main>
      <Footer />
    </div>
  );
}
