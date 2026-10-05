import Navbar from "../components/Navbar";
import LegalNotice from "../components/LegalNotice";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Partnership Disclosure | Pomera",
  description: "How Pomera posts are disclosed as paid partnerships.",
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#1c1d1d] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <LegalNotice
          title="Paid partnership disclosure"
          intro="Every Pomera campaign post is published with the paid partnership label, as Indian advertising rules (ASCI) require. A fuller disclosure guide for publishers and brands will be published here."
        />
      </main>
      <Footer />
    </div>
  );
}
