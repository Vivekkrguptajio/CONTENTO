import Navbar from "../components/Navbar";
import StandaloneLegal from "../components/StandaloneLegal";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organization Terms of Service | Content Rewards",
  description:
    "Official Organization and Brand Terms of Service, campaign rules, and billing policies for Content Rewards.",
};

export default function BrandsTermsPage() {
  return (
    <div className="min-h-screen bg-[#1c1d1d] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <StandaloneLegal docKey="brands" />
      </main>
      <Footer />
    </div>
  );
}
