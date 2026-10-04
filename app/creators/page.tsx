import Navbar from "../components/Navbar";
import PublishersSection from "../components/PublishersSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomera for Publishers | Paid per view, not per follower",
  description: "Get paid per verified view for posting brand videos from your own account. Weekly UPI payouts, no follower minimum.",
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between" style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <main className="w-full flex-grow" style={{ backgroundColor: '#ffffff', paddingTop: '0' }}>
        <PublishersSection />
      </main>
      <Footer />
    </div>
  );
}
