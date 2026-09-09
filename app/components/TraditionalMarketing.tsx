"use client";

import React, { useState } from "react";
import "./TraditionalMarketing.css";

export default function TraditionalMarketing() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="tm-section" aria-label="Traditional Marketing">
      <div className="tm-container">
        
        {/* Main Section Heading */}
        <h2 className="tm-heading">Traditional Marketing is dying</h2>

        {/* Video Card */}
        <div 
          className="tm-video-card"
          onClick={() => setIsPlaying(!isPlaying)}
          role="button"
          tabIndex={0}
          aria-label="Play Content Rewards: Experiment #1 video"
        >
          {/* Background Image of Times Square billboard */}
          <img
            src="/traditional-marketing-video.png"
            alt="Content Rewards: Experiment #1 - Your best ad was posted by someone else."
            className="tm-video-img"
          />

          {/* Interactive Play Button overlay on hover */}
          <div className="tm-play-overlay">
            <button type="button" className="tm-play-btn" aria-label="Play video">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
