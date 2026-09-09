"use client";

import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <section className="tc-section" aria-label="Client Testimonial">
      <div className="tc-container">
        <div className="tc-card">
          {/* Main Testimonial Quote */}
          <blockquote className="tc-quote">
            “The volume coming through Content Rewards holds quality in a way
            I don’t see in any other creator economy platform at scale.”
          </blockquote>

          {/* Author Meta */}
          <div className="tc-author">
            <div className="tc-avatar">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#1f2937" />
                {/* Stylized Avatar Silhouette */}
                <circle cx="20" cy="15" r="6" fill="#f3f4f6" />
                <path d="M9 33C9 26.9249 13.9249 22 20 22C26.0751 22 31 26.9249 31 33" fill="#f3f4f6" />
              </svg>
            </div>

            <div className="tc-author__info">
              <span className="tc-author__name">JingQi</span>
              <span className="tc-author__role">Head of Global Business at ByteDance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
