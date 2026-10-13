"use client";

import React, { useState } from "react";
import { PomeraMark } from "./pomeraMark";
import CountUp from "./CountUp";
import "./PublishersSection.css";

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

const inr = (n: number) => n.toLocaleString("en-IN");

const TICKS = [
  "Your rate per 1,000 verified views is fixed before launch",
  "You are billed only for verified views",
  "Minimum campaign is ₹10,000",
  "Your first campaign is a free pilot",
];

const BUDGET_MIN = 10000;
const BUDGET_MAX = 500000;
const RATE_MIN = 30;
const RATE_MAX = 150;

/* Budget calculator for brands. The default budget and rate are placeholders until the real numbers are set. */
export default function BrandCalculator() {
  const [budget, setBudget] = useState(50000);
  const [rate, setRate] = useState(50);

  const views = Math.round((budget / rate) * 1000);

  return (
    <div className="pb-page">
      <section className="pb-sec" id="calculator">
        <div className="pb-wrap">
          <div className="pb-earn">
            <div className="pb-earn__copy">
              <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime">Your budget</p>
              <h2 className="pb-earn__h">Know what it buys.</h2>
              <p className="pb-earn__f">budget ÷ rate per 1,000 × 1,000 = verified views</p>
              <ul className="pb-earn__ticks">
                {TICKS.map((t) => (
                  <li key={t}><span className="pb-ldot" />{t}</li>
                ))}
              </ul>
              <p className="pb-earn__fine">An illustration, not a promise of results. We guarantee the price and the billing, not virality.</p>
            </div>

            <div className="pb-calc">
              <div className="pb-calc__top">
                <span>Try it</span>
                <span className="pb-calc__tag">Example only</span>
              </div>

              <div className="pb-calc__field">
                <label htmlFor="bcalc-budget"><span>Campaign budget</span><b>₹{inr(budget)}</b></label>
                <input
                  id="bcalc-budget"
                  type="range"
                  min={BUDGET_MIN}
                  max={BUDGET_MAX}
                  step={5000}
                  value={budget}
                  onChange={(e) => setBudget(+e.target.value)}
                  style={{ "--fill": `${((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100}%` } as CSSVars}
                />
              </div>

              <div className="pb-calc__field">
                <label htmlFor="bcalc-rate"><span>Rate per 1,000 verified views</span><b>₹{rate}</b></label>
                <input
                  id="bcalc-rate"
                  type="range"
                  min={RATE_MIN}
                  max={RATE_MAX}
                  step={5}
                  value={rate}
                  onChange={(e) => setRate(+e.target.value)}
                  style={{ "--fill": `${((rate - RATE_MIN) / (RATE_MAX - RATE_MIN)) * 100}%` } as CSSVars}
                />
              </div>

              <div className="pb-calc__out">
                <span>Verified views you can expect</span>
                <strong><CountUp value={views} duration={900} /></strong>
              </div>

              <div className="pb-calc__chat">
                <PomeraMark size={26} bg="#C8F135" fg="#111210" radius={90} />
                <p>Your report has every post link and the verified views.</p>
              </div>
              <p className="pb-calc__note">Your real rate is fixed before launch.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
