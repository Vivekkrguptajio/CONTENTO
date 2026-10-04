import Navbar from "../components/Navbar";
import AgenciesLanding from "../components/AgenciesLanding";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomera for Agencies | A fixed-price channel for every client plan",
  description: "Run Pomera campaigns for your D2C clients. You own the client and the brief; your client pays only for verified views at a fixed rate.",
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow">
        <AgenciesLanding />
      </main>
      <Footer />
    </div>
  );
}
