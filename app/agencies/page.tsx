import Navbar from "../components/Navbar";
import AgenciesSection from "../components/AgenciesSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For agencies | Content Rewards",
  description: "Run creator campaigns for your clients on Content Rewards: verified agencies launch, manage and scale pay-per-view campaigns from one workspace.",
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow bg-white pt-20">
        <AgenciesSection />
      </main>
      <Footer />
    </div>
  );
}
