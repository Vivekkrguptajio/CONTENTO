"use client";

import React, { useEffect } from "react";
import PublishersSection from "../components/PublishersSection";
import Footer from "../components/Footer";

export default function CreatorPageClient() {
  // Legacy links used /creator#agencies; the agencies page now lives on its own route
  useEffect(() => {
    if (window.location.hash.toLowerCase().includes("agenc")) {
      window.location.replace("/agencies");
    }
  }, []);

  return (
    <>
      <PublishersSection />
      <Footer />
    </>
  );
}
