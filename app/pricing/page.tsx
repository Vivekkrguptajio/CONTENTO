import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Content Rewards",
  description: "Simple pricing, no subscriptions. A 10% platform fee, 8% once verified, charged only on work you approve. No setup fees, seat fees or listing fees.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fffdfb] font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow bg-[#fffdfb] pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
