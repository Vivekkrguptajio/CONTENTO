import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VerificationLayer from "./components/VerificationLayer";
import TrustVerification from "./components/TrustVerification";
import ProblemSection from "./components/ProblemSection";
import SolutionSteps from "./components/SolutionSteps";
import BentoFeatures from "./components/BentoFeatures";
import QuoteSection from "./components/QuoteSection";
import TestimonialCard from "./components/TestimonialCard";
import DashboardFeature from "./components/DashboardFeature";
import CampaignBanner from "./components/CampaignBanner";
import BrandsContact from "./components/BrandsContact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow bg-white">
        <HeroSection />
        <ProblemSection />
        <SolutionSteps />
        <VerificationLayer />
        <TrustVerification />
        <BentoFeatures />
        <QuoteSection />
        <TestimonialCard />
        <DashboardFeature />
        <CampaignBanner />
        <BrandsContact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
