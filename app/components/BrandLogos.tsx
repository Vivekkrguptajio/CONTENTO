"use client";

import React from "react";
import "./BrandLogos.css";

const ROW_1 = [
  {
    name: "CapCut",
    src: "/assets/brand-wall/capcut.svg",
    h: 42,
    w: 55,
  },
  {
    name: "Netflix",
    src: "/assets/brand-wall/netflix.svg",
    h: 41.67,
    w: 154.6,
  },
  {
    name: "Higgsfield",
    src: "/assets/brand-wall/higgsfield.svg",
    h: 43.16,
    w: 211,
  },
  {
    name: "Coinbase",
    src: "/assets/brand-wall/coinbase.svg",
    h: 40,
    w: 227,
  },
];

const ROW_2 = [
  {
    name: "M&M's",
    src: "/assets/brand-wall/mms.svg",
    h: 46,
    w: 127,
  },
  {
    name: "DoorDash",
    src: "/assets/brand-wall/doordash.svg",
    h: 32,
    w: 268,
  },
  {
    name: "F1",
    src: "/assets/brand-wall/f1.svg",
    h: 30.5,
    w: 122,
  },
  {
    name: "eBay",
    src: "/assets/brand-wall/ebay.svg",
    h: 54,
    w: 134.7,
  },
];

export default function BrandLogos() {
  return (
    <div className="brand-wall-wrapper">
      <div className="brand-wall-container">
        {/* Row 1: CapCut, Netflix, Higgsfield, Coinbase */}
        <div className="grid grid-cols-2 items-center gap-x-[24px] gap-y-[32px] sm:grid-cols-4 sm:gap-[24px]">
          {ROW_1.map((brand) => (
            <img
              key={brand.name}
              alt={brand.name}
              className="max-w-full justify-self-center object-contain opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              src={brand.src}
              style={{
                height: `calc(${brand.h} * var(--logo-scale) * 1px)`,
                width: `calc(${brand.w} * var(--logo-scale) * 1px)`,
              }}
            />
          ))}
        </div>

        {/* Row 2: M&M's, DoorDash, F1, eBay */}
        <div className="grid grid-cols-2 items-center gap-x-[24px] gap-y-[32px] sm:grid-cols-4 sm:gap-[24px]">
          {ROW_2.map((brand) => (
            <img
              key={brand.name}
              alt={brand.name}
              className="max-w-full justify-self-center object-contain opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              src={brand.src}
              style={{
                height: `calc(${brand.h} * var(--logo-scale) * 1px)`,
                width: `calc(${brand.w} * var(--logo-scale) * 1px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
