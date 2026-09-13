"use client";

import React from "react";
import Image from "next/image";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <section className="tc-section" aria-label="Client Testimonial">
      <div className="tc-container">
        <div className="tc-card">
          
          {/* Main Testimonial Quote */}
          <blockquote className="tc-quote">
            “The volume coming through Content Rewards holds quality in a way I don’t see in any other creator economy platform at scale.”
          </blockquote>

          {/* Author Meta */}
          <a
            href="https://www.linkedin.com/in/qi-jing-98a44482/"
            target="_blank"
            rel="noopener noreferrer"
            className="tc-author"
          >
            <div className="tc-avatar">
              <Image
                src="/testimonials/jingqi.png"
                alt="JingQI"
                width={48}
                height={48}
                className="tc-avatar-img"
              />
            </div>

            <div className="tc-author__info">
              <span className="tc-author__name">JingQI</span>
              <span className="tc-author__role">Head of Global Business at ByteDance</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
