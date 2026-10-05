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
    question: "How is Pomera different from running Meta or Google ads?",
    answer:
      "Meta runs an auction, so your CPM moves with demand and can rise sharply in peak seasons like Diwali. Pomera sells a fixed CPM agreed before launch. Your video is edited and posted by an independent publisher from their own account, with the paid partnership label on, as Indian ad rules (ASCI) require. It reads like an editor's video, not an ad slot.",
  },
  {
    id: 2,
    question: "How do you verify that views are authentic human delivery?",
    answer:
      "Every post is tracked through its own link. We check the post and the platform analytics the publisher submits, review engagement ratios, view velocity and account history, and spot-check by hand. Views are counted on day 7 after posting, and views that don't hold up are not billed.",
  },
  {
    id: 3,
    question: "What happens if a campaign doesn't hit its target verified views?",
    answer:
      "The campaign extends, or the shortfall is not billed. If you commit to 10,00,000 views and 8,00,000 are verified, you are billed for 8,00,000 at most. We guarantee the price and the billing. We don't guarantee virality, because nobody honestly can.",
  },
  {
    id: 4,
    question: "Why work with Pomera instead of negotiating with influencers directly?",
    answer:
      "Direct outreach means negotiating individual rates, chasing deliverables, and carrying all the risk if a video flops. With Pomera you agree one rate with us, we source and brief the publishers, check every post and handle payouts, and you pay only for views that are verified.",
  },
  {
    id: 7,
    question: "What does my rate cover? Is it the same as what publishers earn?",
    answer:
      "No. Your fixed ₹CPM is all-in. It covers publisher payouts, verification, reporting and our support. Publishers see their own rate in each brief.",
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
      "Your first campaign is a free pilot for founding brands: we run it, you see the report, then you decide. After that, the minimum campaign is ₹10,000 and you are billed only for verified views at the fixed rate. You get a report with every post link, so you can inspect performance before scaling spend.",
  },
  {
    id: 8,
    question: "When do campaigns start?",
    answer:
      "We are onboarding the founding cohort now. First campaigns start in November 2026, and pilot brands are booked in first.",
  },
  {
    id: 9,
    question: "I work with an agency. Can I still contact Pomera directly?",
    answer:
      "Yes. If an agency already brought you to Pomera, mention it in the form and we will work through them. We never pitch an agency's clients behind their back.",
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
