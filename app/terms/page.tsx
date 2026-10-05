import Navbar from "../components/Navbar";
import LegalNotice from "../components/LegalNotice";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publisher Terms | Pomera",
  description: "Terms for publishers who post brand videos through Pomera.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <LegalNotice
          title="Publisher terms"
          intro="The publisher terms are being finalised and will be published here before the first campaigns start in November 2026."
          points={["You post from your own account. We never ask for your Instagram password or login.", "Paid posts carry the paid partnership label, as Indian advertising rules (ASCI) require.", "Verified views are counted on day 7 after you post, and payouts are made weekly by UPI."]}
        />
      </main>
      <Footer />
    </div>
  );
}
