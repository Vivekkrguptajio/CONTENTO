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
    question: "How is Pomera different from running Meta or Google ads?",
    answer:
      "Meta runs an auction where your CPM changes daily and surges 2-3x during peak festive seasons like Diwali. Pomera sells a fixed CPM agreed upfront before launch. Plus, Pomera content appears organically on active theme and publisher pages without disruptive 'Sponsored' labels that users scroll past.",
  },
  {
    id: 2,
    question: "How do you verify that views are authentic human delivery?",
    answer:
      "Every view is audited against multi-signal platform insights, unique attribution links, and engagement ratios. Accounts with unnatural velocity spikes or low like-to-view ratios are automatically flagged and filtered out. You are never billed for bot views.",
  },
  {
    id: 3,
    question: "What happens if a campaign doesn't hit its target verified views?",
    answer:
      "You only pay for verified views delivered. If you commit to 10,00,000 views and 8,00,000 are delivered, you are only billed for 8,00,000, or we extend distribution to hit 100% fulfillment at no additional charge under our make-good guarantee.",
  },
  {
    id: 4,
    question: "Why work with Pomera instead of negotiating with creators directly?",
    answer:
      "Direct influencer outreach requires negotiating individual rates, chasing deliverables, and bearing 100% of the financial risk if their video flops. With Pomera, you negotiate one rate with us, we coordinate across dozens of verified publishers, and you only pay for the views that actually happen.",
  },
  {
    id: 5,
    question: "What platforms does Pomera distribute on?",
    answer:
      "We distribute short-form video primarily across Instagram Reels and YouTube Shorts, where user engagement and short-form consumption in India are highest.",
  },
  {
    id: 6,
    question: "What is the minimum budget to get started?",
    answer:
      "Founding pilot campaigns start at ₹10,000. This allows brands to run a controlled test, review verified reporting in the dashboard, and inspect performance before scaling spend.",
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
          <span>Need custom flight parameters?</span>
          <a
            href="https://wa.me/919999999999?text=Hi%20Pomera%20Team%2C%20we%20have%20questions%20about%20campaign%20distribution."
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
