import Navbar from "../components/Navbar";
import LegalNotice from "../components/LegalNotice";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pomera",
  description: "How Pomera handles the details you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] font-sans flex flex-col justify-between text-[#ededed]">
      <Navbar />
      <main className="w-full flex-grow">
        <LegalNotice
          title="Privacy policy"
          intro="The full privacy policy is being finalised and will be published here. Until then: we use the details you submit in our forms only to contact you about Pomera, and we never ask for your Instagram password or login."
        />
      </main>
      <Footer />
    </div>
  );
}
