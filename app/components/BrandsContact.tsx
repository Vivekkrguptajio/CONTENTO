"use client";

import React, { useState } from "react";
import { PomeraMark } from "./pomeraMark";
import "./PublishersSection.css";

/* Set this to your form-handler URL (Google Apps Script, Formspree, your API…). Empty = form shows a WhatsApp fallback. */
const FORM_ENDPOINT = "";

const PERKS = [
  "Your first campaign is a free pilot: we run it, you see the report, then you decide",
  "Fixed ₹ rate agreed before you spend anything",
  "After the pilot, you pay only for verified views. Minimum campaign ₹10,000",
  "A named Pomera contact on WhatsApp",
];

export default function BrandsContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus("unconnected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pb-page">
      <section className="pb-sec pb-sec--last" id="contact">
        <div className="pb-wrap">
          <div className="pb-join">
            <div className="pb-join__dark">
              <div className="pb-join__mark" aria-hidden="true"><PomeraMark size={300} fg="#C8F135" opacity={0.09} /></div>
              <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime"><span className="pb-ldot" />For brands</p>
              <h2 className="pb-join__h">Book your free pilot</h2>
              <p className="pb-join__s">We’re booking in founding brands now. First campaigns start in November 2026. Tell us about your brand and we’ll message you on WhatsApp to set up a short call.</p>

              <ul className="pb-earn__ticks">
                {PERKS.map((t) => (
                  <li key={t}><span className="pb-ldot" />{t}</li>
                ))}
              </ul>
            </div>

            <div className="pb-join__form">
              {status === "done" ? (
                <div className="pb-done">
                  <PomeraMark size={56} bg="#111210" radius={90} />
                  <h3>Thanks.</h3>
                  <p>We’ll message you on WhatsApp within one working day.</p>
                </div>
              ) : (
                <form className="pb-form" onSubmit={onSubmit} noValidate>
                  <div className="pb-fld"><label htmlFor="b-name">Your name</label><input className="pb-inp" id="b-name" name="name" type="text" required /></div>
                  <div className="pb-fld"><label htmlFor="b-brand">Brand name</label><input className="pb-inp" id="b-brand" name="brand" type="text" required /></div>
                  <div className="pb-fld pb-full"><label htmlFor="b-site">Website or Instagram</label><input className="pb-inp" id="b-site" name="website" type="text" placeholder="https:// or @" required /></div>
                  <div className="pb-fld">
                    <label htmlFor="b-cat">What do you sell?</label>
                    <select className="pb-inp" id="b-cat" name="category" required defaultValue="">
                      <option value="" disabled>Select</option><option>Beauty and skincare</option><option>Fashion</option><option>Food and beverage</option><option>Health and fitness</option><option>Tech and gadgets</option><option>Home and living</option><option>Other</option>
                    </select>
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-budget">Monthly marketing budget</label>
                    <select className="pb-inp" id="b-budget" name="budget" required defaultValue="">
                      <option value="" disabled>Select</option><option>Under ₹50,000</option><option>₹50,000 – ₹2,00,000</option><option>₹2,00,000 – ₹10,00,000</option><option>Over ₹10,00,000</option>
                    </select>
                  </div>
                  <div className="pb-fld"><label htmlFor="b-wa">WhatsApp number</label><input className="pb-inp" id="b-wa" name="whatsapp" type="tel" placeholder="+91" required /></div>
                  <div className="pb-fld"><label htmlFor="b-email">Work email</label><input className="pb-inp" id="b-email" name="email" type="email" required /></div>
                  <div className="pb-fld pb-full"><label htmlFor="b-agency">Referred by an agency? <span className="pb-fine">(optional)</span></label><input className="pb-inp" id="b-agency" name="agency" type="text" placeholder="Agency name, if one brought you to Pomera" /></div>

                  <label className="pb-consent pb-full" htmlFor="b-ok">
                    <input type="checkbox" id="b-ok" name="consent" required />
                    <span>I agree that Pomera can contact me on WhatsApp about this, and to the <a href="/privacy-policy">privacy policy</a>.</span>
                  </label>

                  <div className="pb-full">
                    <button className="pb-btn pb-btn--dark pb-btn--full" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Book a free pilot"}
                    </button>
                  </div>

                  {status === "unconnected" && (
                    <p className="pb-msg pb-full" role="status">This form is not connected yet. Message us on WhatsApp instead.</p>
                  )}
                  {status === "error" && (
                    <p className="pb-msg pb-full" role="status">That didn’t go through. Check your connection and try again, or message us on WhatsApp.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
