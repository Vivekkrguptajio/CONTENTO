import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandLogos from "./components/BrandLogos";
import VerificationLayer from "./components/VerificationLayer";
import TrustVerification from "./components/TrustVerification";
import TraditionalMarketing from "./components/TraditionalMarketing";
import SolutionSteps from "./components/SolutionSteps";
import BentoFeatures from "./components/BentoFeatures";
import TestimonialCard from "./components/TestimonialCard";
import DashboardFeature from "./components/DashboardFeature";
import CampaignBanner from "./components/CampaignBanner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="w-full flex-grow bg-white">
        <HeroSection />
        <TraditionalMarketing />
        <SolutionSteps />
        <VerificationLayer />
        <TrustVerification />
        <BentoFeatures />
        <TestimonialCard />
        <DashboardFeature />
        <CampaignBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
