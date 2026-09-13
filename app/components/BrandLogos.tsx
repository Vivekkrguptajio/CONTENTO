"use client";

import React from "react";
import Image from "next/image";
import "./BrandLogos.css";

const BRAND_LOGOS = [
  // Row 1
  {
    name: "CapCut",
    src: "/brand-logos/capcut.png",
    width: 60,
    height: 48,
    className: "brand-logo-capcut",
  },
  {
    name: "Netflix",
    src: "/brand-logos/netflix.png",
    width: 160,
    height: 90,
    className: "brand-logo-netflix",
  },
  {
    name: "Higgsfield",
    src: "/brand-logos/higgsfield.png",
    width: 190,
    height: 50,
    className: "brand-logo-higgsfield",
  },
  {
    name: "Coinbase",
    src: "/brand-logos/coinbase.png",
    width: 180,
    height: 45,
    className: "brand-logo-coinbase",
  },
  // Row 2
  {
    name: "M&M's",
    src: "/brand-logos/mms.png",
    width: 130,
    height: 56,
    className: "brand-logo-mms",
  },
  {
    name: "DoorDash",
    src: "/brand-logos/doordash.png",
    width: 180,
    height: 60,
    className: "brand-logo-doordash",
  },
  {
    name: "Formula 1",
    src: "/brand-logos/f1.png",
    width: 175,
    height: 60,
    className: "brand-logo-f1",
  },
  {
    name: "eBay",
    src: "/brand-logos/ebay.png",
    width: 130,
    height: 58,
    className: "brand-logo-ebay",
  },
];

export default function BrandLogos() {
  return (
    <section className="brand-logos-section" aria-label="Trusted Brands">
      <div className="brand-logos-container">
        <div className="brand-logos-grid">
          {BRAND_LOGOS.map((brand) => (
            <div key={brand.name} className="brand-logo-item">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className={`brand-logo-img ${brand.className}`}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
