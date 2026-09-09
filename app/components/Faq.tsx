"use client";

import React, { useState } from "react";
import "./Faq.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "How much can a creator earn from one clip?",
    answer:
      "Up to the maximum payout you set. On CPM, a clip earns its rate per 1,000 views and stops at that ceiling, so your per clip exposure is capped at a number you choose.",
  },
  {
    id: 2,
    question: "How do I know the views are real?",
    answer:
      "We employ rigorous algorithmic fraud prevention, real-time analytics verification, and native API validation to guarantee that only authentic, verified human views count towards payouts.",
  },
  {
    id: 3,
    question: "Is there a minimum budget?",
    answer:
      "There are no rigid minimum budget constraints. You can start campaigns tailored to your specific testing requirements and scale your budget fluidly as creators drive results.",
  },
  {
    id: 4,
    question: "How do I pay for a campaign?",
    answer:
      "We accept all major credit and debit cards, ACH direct transfers, and wire payments. For larger brands and agencies, we also provide structured monthly invoicing.",
  },
  {
    id: 5,
    question: "Which payout models can I use?",
    answer:
      "We support flexible payout structures including CPM (pay per 1,000 verified views), fixed flat-rate bounties per accepted submission, and tiered performance incentives.",
  },
  {
    id: 6,
    question: "What does it cost?",
    answer:
      "Creating an account and exploring the platform is completely free. We charge a transparent, low platform fee on top of your campaign payout budget with zero hidden surprises.",
  },
];

export default function Faq() {
  // First item open by default to match user reference image
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-container">
        {/* Top Badge */}
        <div className="faq-badge-wrapper">
          <span className="faq-badge">FAQS</span>
        </div>

        {/* Section Heading */}
        <h2 id="faq-heading" className="faq-heading">
          Before you ask...
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
          <span>More questions? Talk to our</span>
          <a href="#support" className="faq-support-pill">
            24/7 support
          </a>
        </div>
      </div>
    </section>
  );
}
