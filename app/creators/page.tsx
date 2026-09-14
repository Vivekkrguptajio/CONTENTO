import Navbar from "../components/Navbar";
import CreatorsSection from "../components/CreatorsSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Paid for Posting Content | Content Rewards Creators",
  description: "Join live campaigns, submit your work, and get paid fast. Work with the biggest brands alongside 1M+ creators.",
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between" style={{ backgroundColor: '#fffdfb' }}>
      <Navbar />
      <main className="w-full flex-grow" style={{ backgroundColor: '#fffdfb', paddingTop: '0' }}>
        <CreatorsSection />
      </main>
      <Footer />
    </div>
  );
}
