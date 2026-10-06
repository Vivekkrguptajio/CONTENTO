import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VerificationLayer from "./components/VerificationLayer";
import ProblemSection from "./components/ProblemSection";
import SolutionSteps from "./components/SolutionSteps";
import BentoFeatures from "./components/BentoFeatures";
import QuoteSection from "./components/QuoteSection";
import TestimonialCard from "./components/TestimonialCard";
import DashboardPreviewSection from "./components/DashboardPreviewSection";
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
        <BentoFeatures />
        <DashboardPreviewSection />
        <QuoteSection />
        <TestimonialCard />
        <BrandsContact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
