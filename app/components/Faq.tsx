"use client";

import React, { useState } from "react";
import "./Faq.css";
import { whatsappLink } from "../lib/contact";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "How is Pomera different from Meta or Google ads?",
    answer:
      "Meta and Google run auctions, so the price of your views changes with demand and can jump in peak seasons like Diwali. With Pomera, your rate per 1,000 verified views is fixed before the campaign starts. Independent publishers turn your footage into short videos and post them on Instagram Reels and YouTube Shorts from their own accounts, with the paid partnership label on, as ASCI requires. It reads like a regular post, not an ad slot.",
  },
  {
    id: 2,
    question: "Do I need to make the videos?",
    answer:
      "No. Send us what you already have: long-form videos, raw footage or product shots, plus a short brief with your claims and rules. Publishers edit it into short vertical videos.",
  },
  {
    id: 3,
    question: "How do you know the views are from real people?",
    answer:
      "Every post has its own tracking link. We pull each post’s platform data and review engagement ratios, how fast views come in, and the account’s history. We also spot-check posts by hand. Views are counted 7 days after each post goes live, and views that don’t hold up are not billed.",
  },
  {
    id: 4,
    question: "What if a post goes off-brief?",
    answer:
      "Pomera checks every post. You can also flag a post within 48 hours of it going live. A flagged post isn’t billed while we review it, and we ask the publisher to fix it or take it down.",
  },
  {
    id: 5,
    question: "What happens if a campaign doesn’t reach its target views?",
    answer:
      "You’re never billed for the shortfall. Say your budget covers up to 10,00,000 verified views and 8,00,000 are verified: you pay for 8,00,000, and the rest of your budget comes back to your balance. We guarantee the price and the billing. We don’t guarantee virality, because nobody honestly can.",
  },
  {
    id: 6,
    question: "What does my rate cover?",
    answer:
      "Everything: publisher payouts, verification, reporting and support. There are no other fees. Publishers are paid from your rate, and their pay is set separately for each campaign.",
  },
  {
    id: 7,
    question: "Why use Pomera instead of working with influencers directly?",
    answer:
      "Going direct means negotiating rates one by one, chasing deliverables, and carrying the risk if a video flops. With Pomera you pay one fixed rate. We find and brief the publishers, check every post and pay them, and you pay only for verified views.",
  },
  {
    id: 8,
    question: "What does it cost to start?",
    answer:
      "Your first campaign is a free pilot for founding brands. We run it, you see the report with every post link, then you decide. After that, the minimum campaign is ₹10,000, billed only for verified views at your fixed rate.",
  },
  {
    id: 9,
    question: "When do campaigns start?",
    answer:
      "We’re onboarding founding brands now. First campaigns start in November 2026, and pilot brands are booked in first.",
  },
  {
    id: 10,
    question: "I work with an agency. Can they run Pomera for me?",
    answer:
      "Yes. Mention your agency in the form and we’ll work through them. We never pitch an agency’s clients behind their back.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-container">
        {/* Top Badge */}
        <div className="faq-badge-wrapper">
          <span className="faq-badge pm-num">FAQ</span>
        </div>

        {/* Section Heading */}
        <h2 id="faq-heading" className="faq-heading">
          Frequently asked questions.
        </h2>

        {/* Accordion List */}
        <div className="faq-list">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-card ${isOpen ? "faq-card--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-card__trigger"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-card__question">{item.question}</span>
                  <span className={`faq-card__chevron ${isOpen ? "faq-card__chevron--rotated" : ""}`}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className="faq-card__content"
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                >
                  <p className="faq-card__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support Note */}
        <div className="faq-footer-note">
          <span>Have a question that is not here?</span>
          <a
            href={whatsappLink("Hi Pomera Team, we have questions about campaign distribution.")}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-support-pill"
          >
            Talk to brand operations
          </a>
        </div>
      </div>
    </section>
  );
}
