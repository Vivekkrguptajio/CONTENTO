import Navbar from "../components/Navbar";
import LegalNotice from "../components/LegalNotice";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Terms | Pomera",
  description: "Terms for brands and agencies running campaigns with Pomera.",
};

export default function BrandsTermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <LegalNotice
          title="Brand terms"
          intro="Pomera’s brand and agency terms are being finalised and will be published here before the first campaigns start in November 2026. Pilot terms are agreed with you on a short call."
          points={["The rate per 1,000 verified views is agreed before the campaign starts.", "You are billed only for verified views. If a campaign under-delivers, it extends or the shortfall is not billed.", "Minimum campaign is ₹10,000."]}
        />
      </main>
      <Footer />
    </div>
  );
}
