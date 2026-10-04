"use client";

import React from "react";
import "./TraditionalMarketing.css";

export default function TraditionalMarketing() {
  return (
    <section className="tm-section py-20 px-5 bg-[#FAFAF7] border-y border-[#E7E7E3]" id="positioning" aria-label="Brand Positioning">
      <div className="tm-container max-w-[1200px] mx-auto">
        
        {/* Eyebrow */}
        <div className="mb-3 text-center font-mono text-[12px] font-medium tracking-[0.06em] text-[#5B5B58] uppercase">
          02 · Market Contrast
        </div>

        {/* Section Heading */}
        <h2 className="text-center font-medium text-[#111210] tracking-[-0.025em] text-[clamp(28px,4vw,40px)] leading-[1.15] max-w-[760px] mx-auto mb-4 text-balance">
          An ad platform that sells certainty.
        </h2>

        {/* Lead */}
        <p className="text-center font-normal text-[#5B5B58] text-[17px] leading-[1.55] max-w-[680px] mx-auto mb-12">
          A D2C brand spending on Meta commits budget without knowing what it will buy. Impressions are auction-priced, CPMs drift without warning, and the relationship between spend and outcome only becomes clear after the money is gone. Pomera sells the opposite: a fixed rate, a verified unit, and payment strictly on delivery.
        </p>

        {/* Two-Column Problem & Solution Cards (12px Radius, 1px Hairline Border, Zero Box Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[960px] mx-auto">
          
          {/* Box 1: The Brand Pain */}
          <div className="bg-white border border-[#E7E7E3] rounded-[12px] p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[12px] font-medium tracking-[0.06em] text-[#8A8A85] uppercase">
                  Demand Side
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-[4px] bg-[#FCEBEA] text-[#9A1F1F]">
                  The Uncertainty
                </span>
              </div>
              <h3 className="text-[20px] font-medium text-[#111210] tracking-[-0.015em] mb-3">
                Brands feel uncertainty
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#5B5B58]">
                The frustration of a D2C founder buying paid social is not the price. It is the uncertainty. You cannot forecast what a rupee buys, cannot explain outcomes to partners, and cannot repeat a good month reliably.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E7E3] font-mono text-[13px] text-[#111210]">
              Auction drift: <span className="text-[#9A1F1F]">Unpredictable CPMs</span>
            </div>
          </div>

          {/* Box 2: The Supply Reality */}
          <div className="bg-white border border-[#E7E7E3] rounded-[12px] p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[12px] font-medium tracking-[0.06em] text-[#8A8A85] uppercase">
                  Supply Side
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-[4px] bg-[#F2FBD6] text-[#111210]">
                  Unused Talent
                </span>
              </div>
              <h3 className="text-[20px] font-medium text-[#111210] tracking-[-0.015em] mb-3">
                Publishers feel shut out
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#5B5B58]">
                A large population of skilled video editors in India can produce content that performs, but influencer platforms gate access by follower count. Their editing skill has had no direct monetization route until now.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E7E3] font-mono text-[13px] text-[#111210]">
              Follower gatekeeping: <span className="text-[#146C34]">Zero minimum, ever</span>
            </div>
          </div>

        </div>

        {/* Mechanism callout */}
        <div className="mt-10 p-6 bg-white border border-[#E7E7E3] rounded-[12px] max-w-[960px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-[620px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#8A8A85] block mb-1">The Mechanism</span>
            <p className="text-[15px] text-[#111210] leading-[1.5] m-0">
              We connect the two: uncertainty on one side, unused editing capacity on the other. Not an all-or-nothing replacement for Meta, but the <strong>10–20% allocation in your media budget that buys absolute certainty</strong>.
            </p>
          </div>
          <a
            href="#campaign-cta"
            className="pomera-btn-primary shrink-0 h-[40px] px-5 text-[14px] font-medium"
            style={{ borderRadius: "8px" }}
          >
            Start a pilot
          </a>
        </div>

      </div>
    </section>
  );
}
