import Navbar from "../components/Navbar";
import StandaloneLegal from "../components/StandaloneLegal";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Content Rewards",
  description:
    "Official Privacy Policy, data collection, and processing details for Content Rewards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1c1d1d] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <StandaloneLegal docKey="privacy" />
      </main>
      <Footer />
    </div>
  );
}
