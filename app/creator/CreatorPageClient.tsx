"use client";

import React, { useState, useEffect } from "react";
import CreatorsSection from "../components/CreatorsSection";
import AgenciesSection from "../components/AgenciesSection";
import PricingSection from "../components/PricingSection";
import BrandKitSection from "../components/BrandKitSection";
import TermsSection from "../components/TermsSection";
import ChangelogSection from "../components/ChangelogSection";
import Footer from "../components/Footer";

type ViewMode =
  | "all"
  | "term"
  | "brand-kit"
  | "pricing"
  | "for-agencies"
  | "changelog";

export default function CreatorPageClient() {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("all");

  useEffect(() => {
    const getModeFromHash = (): ViewMode => {
      const hash = (typeof window !== "undefined" ? window.location.hash : "").toLowerCase();
      if (
        hash.includes("term") ||
        hash.includes("ftc") ||
        hash.includes("privacy") ||
        hash.includes("brand-terms")
      ) {
        return "term";
      }
      if (hash.includes("brand-kit") || hash.includes("branding")) {
        return "brand-kit";
      }
      if (hash.includes("pricing")) {
        return "pricing";
      }
      if (hash.includes("agenc")) {
        return "for-agencies";
      }
      if (hash.includes("changelog")) {
        return "changelog";
      }
      return "all";
    };

    setViewMode(getModeFromHash());
    setMounted(true);

    const handleHashChange = () => {
      setViewMode(getModeFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (viewMode === "term") {
      document.body.style.backgroundColor = "#1c1d1d";
    } else {
      document.body.style.backgroundColor = "";
    }
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [viewMode]);

  if (!mounted) {
    return null;
  }

  // When #changelog hash → show ONLY Changelog section + Footer
  if (viewMode === "changelog") {
    return (
      <>
        <ChangelogSection />
        <Footer />
      </>
    );
  }

  // When #pricing hash → show ONLY Pricing section (with FAQ) + Footer
  if (viewMode === "pricing") {
    return (
      <>
        <section id="pricing" className="w-full bg-[#fffdfb]">
          <PricingSection />
        </section>
        <Footer />
      </>
    );
  }

  // When #for-agencies hash → show ONLY Agencies section + Footer
  if (viewMode === "for-agencies") {
    return (
      <>
        <section id="for-agencies" className="w-full bg-white">
          <AgenciesSection />
        </section>
        <Footer />
      </>
    );
  }

  // When #term hash → show Legal section + Footer in dark theme (#1c1d1d & #ededed)
  if (viewMode === "term") {
    return (
      <div className="w-full max-w-full overflow-x-hidden bg-[#1c1d1d] min-h-screen text-[#ededed]">
        <TermsSection />
        <Footer />
      </div>
    );
  }

  // When #brand-kit hash → show only Brand Kit section (NO FOOTER as requested)
  if (viewMode === "brand-kit") {
    return (
      <section id="brand-kit" className="w-full bg-white">
        <BrandKitSection />
      </section>
    );
  }

  // For Creators: show ONLY CreatorsSection + Footer
  return (
    <>
      <CreatorsSection />
      <Footer />
    </>
  );
}
