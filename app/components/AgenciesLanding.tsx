"use client";

/* FOUNDER SIGN-OFF NEEDED: agencies are not covered by Brand Book v2.4 (audiences = brands, publishers, investors).
   Claims to confirm before launch: "named Pomera contact on WhatsApp", "partner pricing, agreed on the call",
   the 10–20% slice, and the free-pilot wording. */

import React, { useEffect, useRef, useState } from "react";
import { PomeraMark } from "./pomeraMark";
import { BeamMark } from "./beamMark";
import LazyVideo from "./LazyVideo";
import "./PublishersSection.css";
import "./AgenciesLanding.css";

/* Set this to your form-handler URL (Google Apps Script, Formspree, your API…). Empty = form shows a WhatsApp fallback. */
const FORM_ENDPOINT = "";

const NOS = ["No new team to hire.", "No auction guesswork.", "No monthly subscription."];

const WE_DO = ["Source the publishers", "Brief them", "Check every post", "Handle the payouts"];
const YOU_KEEP = ["The client", "The brief", "The strategy"];

const REPORT_ROWS = [
  { src: "/videos/reel-snow.mp4", link: 62 },
  { src: "/videos/reel-dog.mp4", link: 74 },
  { src: "/videos/reel-bike.mp4", link: 56 },
];

const PERKS = [
  "Your first client campaign runs as a free pilot",
  "A named Pomera contact on WhatsApp",
  "You own the client relationship. We never pitch your clients",
  "Partner pricing, agreed on the call",
];

const FAQS = [
  { q: "Does Pomera replace Meta or Google ads?", a: "No. It’s a separate line in the plan, usually 10–20% of the paid social budget, for the part your client wants to be predictable. The rest stays where it is." },
  { q: "Who owns the client relationship?", a: "You do. We work through you and never pitch your clients directly." },
  { q: "How are views verified?", a: "Every post is tracked through its link. We check the post and the analytics the publisher submits, spot-check by hand, and bill only the views that hold up. We’ll tell you exactly what we check on the call." },
  { q: "Another platform charges a flat 10%. How is this different?", a: "That one is self-serve software on top of a rate you set. Pomera is a managed service: we source the publishers, write the briefs, run the campaign and handle payouts in ₹ through UPI. Our rate is all-in." },
  { q: "What if the campaign under-delivers?", a: "The campaign extends, or the shortfall is not billed. Your risk is capped by the budget you set." },
  { q: "Where do the publishers come from?", a: "They’re independent video editors who post from their own accounts. They join through ClipperCircle, our publisher community." },
  { q: "What if a brand contacts Pomera directly?", a: "If a brand tells us an agency brought them, we work through that agency. We never pitch your clients behind your back." },
  { q: "What are the partner terms?", a: "We agree them with each founding partner on a short call: pricing, reporting and how we work together." },
];

const inr = (n: number) => n.toLocaleString("en-IN");

const Tick = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8" /></svg>
);

const IconBrief = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" /><path d="M10 13h6M10 17h6" />
  </svg>
);
const IconTag = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.3" />
  </svg>
);
const IconReport = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
  </svg>
);

export default function AgenciesLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("ag-reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const [budget, setBudget] = useState(500000);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  const low = Math.round(budget * 0.1);
  const high = Math.round(budget * 0.2);
  const restLow = budget - high;
  const restHigh = budget - low;

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
    <div className="pb-page ag-page" ref={rootRef}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="ag-hero">
        <div className="ag-hero__mark" aria-hidden="true"><BeamMark /></div>
        <div className="pb-wrap ag-hero__grid">
          <div className="ag-hero__copy">
            <p className="ag-kicker">For agencies</p>
            <h1 className="ag-h1">
              A <span className="pb-mk">fixed-price</span> channel for every client plan.
            </h1>
            <p className="ag-lead">
              Run Pomera campaigns for your D2C clients. You own the client and the brief. We run distribution through our publisher network, and your client pays only for verified views.
            </p>
            <div className="ag-ctas">
              <a className="pb-btn pb-btn--dark" href="#partner">Talk to us about partnering</a>
              <a className="pb-btn ag-btn-white" href="#how">How it works</a>
            </div>
            <ul className="ag-nos">
              {NOS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <figure className="ag-plan">
            <span className="ag-plan__sticker">First client campaign: free pilot</span>
            <figcaption>A client’s paid social plan, and where Pomera sits</figcaption>
            <table>
              <thead>
                <tr><th>Line</th><th>Share</th><th>How it’s priced</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Meta and Google ads</td>
                  <td>The rest</td>
                  <td>Auction. Costs move without warning.</td>
                </tr>
                <tr className="is-pomera">
                  <td>Pomera</td>
                  <td><span className="pb-mk">10–20%</span></td>
                  <td>Fixed ₹ per 1,000 verified views. The number is known before the spend.</td>
                </tr>
              </tbody>
            </table>
            <p>Typical split. Your client’s plan will differ.</p>
          </figure>
        </div>
      </section>

      {/* ── Why: three artefacts ─────────────────────────── */}
      <section className="pb-sec">
        <div className="pb-wrap">
          <h2 className="ag-h2 ag-h2--wide">Answer the question every client asks: what will this spend buy?</h2>

          <div className="ag-why">
            {/* A: quote ticket */}
            <article className="ag-card ag-card--tint ag-why__a" data-reveal>
              <div>
                <p className="ag-card__n">01</p>
                <h3>A number you can quote</h3>
                <p>A fixed rate per 1,000 verified views, agreed before the campaign. No auction drift between the pitch and the report.</p>
              </div>
              <div className="ag-ticket" aria-hidden="true">
                <div className="ag-ticket__top">
                  <small>Rate quote</small>
                  <div className="ag-ticket__rate"><em>₹</em><b className="ag-blank" /></div>
                  <span>per 1,000 verified views</span>
                </div>
                <div className="ag-ticket__bot">
                  <span><i><Tick /></i>Agreed before the campaign</span>
                  <span><i><Tick /></i>Billed on verified delivery only</span>
                </div>
              </div>
            </article>

            {/* B: report outline */}
            <article className="ag-card ag-why__b" data-reveal>
              <div className="ag-why__text">
                <p className="ag-card__n">02</p>
                <h3>Reports you can present</h3>
                <p>Every post link, the verified views per post and the achieved rate, ready for your client review.</p>
              </div>
              <div className="ag-rep" aria-hidden="true">
                <div className="ag-rep__head">
                  <span>Post</span><span>Verified views</span><span>Rate</span>
                </div>
                {REPORT_ROWS.map((r) => (
                  <div key={r.src} className="ag-rep__row">
                    <LazyVideo src={r.src} />
                    <i className="ag-sk" style={{ width: `${r.link}%` }} />
                    <i className="ag-sk" />
                    <i className="ag-sk ag-sk--lime" />
                  </div>
                ))}
              </div>
            </article>

            {/* C: who does what */}
            <article className="ag-card ag-card--ink ag-why__c" data-reveal>
              <div className="ag-why__text">
                <p className="ag-card__n">03</p>
                <h3>No new team to hire</h3>
                <p>We source the publishers, brief them, check every post and handle payouts. You keep the strategy.</p>
              </div>
              <div className="ag-split">
                <div>
                  <small>We do</small>
                  <ul>{WE_DO.map((t) => (<li key={t}><i><Tick /></i>{t}</li>))}</ul>
                </div>
                <div>
                  <small>You keep</small>
                  <ul>{YOU_KEEP.map((t) => (<li key={t}><i><Tick /></i>{t}</li>))}</ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── The slice ────────────────────────────────────── */}
      <section className="pb-sec">
        <div className="pb-wrap">
          <div className="ag-sum" data-reveal>
            <div className="ag-sum__copy">
              <h2 className="ag-h2">Work out the slice.</h2>
              <p>
                Most clients put 10–20% of paid social into Pomera, for the part they want to be predictable. Type in a client’s monthly budget and see the split.
              </p>
              <label htmlFor="ag-budget">Client’s monthly paid social</label>
              <div className="ag-sum__input">
                <span>₹</span>
                <input
                  id="ag-budget"
                  inputMode="numeric"
                  autoComplete="off"
                  value={budget ? inr(budget) : ""}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setBudget(digits ? parseInt(digits, 10) : 0);
                  }}
                  placeholder="5,00,000"
                />
              </div>
            </div>

            <div className="ag-sum__panel">
              <div className="ag-bar" aria-hidden="true">
                <span className="ag-bar__rest">Meta and Google</span>
                <span className="ag-bar__range" />
                <span className="ag-bar__pom">Pomera</span>
              </div>
              <dl className="ag-legend">
                <div>
                  <dt><i className="is-rest" />Meta and Google</dt>
                  <dd>{budget ? `₹${inr(restLow)} – ₹${inr(restHigh)}` : "—"}</dd>
                </div>
                <div className="is-pom">
                  <dt><i />Pomera</dt>
                  <dd>{budget ? `₹${inr(low)} – ₹${inr(high)}` : "—"}</dd>
                </div>
              </dl>
              <p className="ag-sum__note">
                {budget && high < 10000
                  ? "That is under the ₹10,000 minimum campaign."
                  : "Minimum campaign is ₹10,000. An illustration of the split, not a promise of results."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="pb-sec" id="how">
        <div className="pb-wrap">
          <h2 className="ag-h2 ag-h2--wide">You bring the client. We run the distribution.</h2>
          <ol className="ag-steps">
            <li data-reveal>
              <div className="ag-steps__top"><span className="ag-steps__ico"><IconBrief /></span><span className="ag-card__n">01</span></div>
              <h3>Tell us about the client</h3>
              <p>The brand, the product, the audience and the video they already have.</p>
            </li>
            <li data-reveal>
              <div className="ag-steps__top"><span className="ag-steps__ico"><IconTag /></span><span className="ag-card__n">02</span></div>
              <h3>Agree a fixed rate</h3>
              <p>One rate per 1,000 verified views for that client campaign. Campaigns start from ₹10,000.</p>
            </li>
            <li data-reveal>
              <div className="ag-steps__top"><span className="ag-steps__ico"><IconReport /></span><span className="ag-card__n">03</span></div>
              <h3>Present the report</h3>
              <p>We run it and verify every view. You get post links, verified views and the achieved rate to take to your client.</p>
            </li>
          </ol>

          <div className="ag-makegood" data-reveal>
            <span className="ag-makegood__ico"><IconShield /></span>
            <p>
              <b>If a campaign under-delivers, it extends, or the shortfall is not billed.</b> We guarantee the price and the billing. We don’t guarantee virality, because nobody honestly can.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner form ─────────────────────────────────── */}
      <section className="pb-sec" id="partner">
        <div className="pb-wrap">
          <div className="pb-join">
            <div className="pb-join__dark">
              <div className="pb-join__mark" aria-hidden="true"><PomeraMark size={300} fg="#C8F135" opacity={0.09} /></div>
              <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime"><span className="pb-ldot" />Founding partners</p>
              <h2 className="pb-join__h">Become a founding partner agency</h2>
              <p className="pb-join__s">We’re working with a small group of agencies first. Partner terms are agreed with you on a short call.</p>

              <div className="ag-early">
                <b>We’re early.</b> We haven’t run a campaign for an agency yet, so there’s no case study to show you. Your first client campaign is a free pilot: we run it, you see the report, then you decide.
              </div>

              <ul className="pb-earn__ticks ag-perks">
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
                  <p>We’ll message you on WhatsApp to set up a call.</p>
                </div>
              ) : (
                <form className="pb-form" onSubmit={onSubmit} noValidate>
                  <div className="pb-fld"><label htmlFor="a-name">Your name</label><input className="pb-inp" id="a-name" name="name" type="text" required /></div>
                  <div className="pb-fld"><label htmlFor="a-agency">Agency name</label><input className="pb-inp" id="a-agency" name="agency" type="text" required /></div>
                  <div className="pb-fld pb-full"><label htmlFor="a-site">Website</label><input className="pb-inp" id="a-site" name="website" type="url" placeholder="https://" required /></div>
                  <div className="pb-fld">
                    <label htmlFor="a-clients">Active D2C clients</label>
                    <select className="pb-inp" id="a-clients" name="clients" required defaultValue="">
                      <option value="" disabled>Select</option><option>1–5</option><option>6–15</option><option>16–40</option><option>Over 40</option>
                    </select>
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="a-spend">Paid social you manage per month</label>
                    <select className="pb-inp" id="a-spend" name="spend" required defaultValue="">
                      <option value="" disabled>Select</option><option>Under ₹5,00,000</option><option>₹5,00,000 – ₹25,00,000</option><option>₹25,00,000 – ₹1,00,00,000</option><option>Over ₹1,00,00,000</option>
                    </select>
                  </div>
                  <div className="pb-fld"><label htmlFor="a-wa">WhatsApp number</label><input className="pb-inp" id="a-wa" name="whatsapp" type="tel" placeholder="+91" required /></div>
                  <div className="pb-fld"><label htmlFor="a-email">Work email</label><input className="pb-inp" id="a-email" name="email" type="email" required /></div>

                  <label className="pb-consent pb-full" htmlFor="a-ok">
                    <input type="checkbox" id="a-ok" name="consent" required />
                    <span>I agree that Pomera can contact me on WhatsApp about this, and to the <a href="/privacy-policy">privacy policy</a>.</span>
                  </label>

                  <div className="pb-full">
                    <button className="pb-btn pb-btn--dark pb-btn--full" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Request a partner call"}
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

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="pb-sec pb-sec--last" id="faq">
        <div className="pb-wrap pb-split">
          <div className="pb-split__side">
            <h2 className="ag-h2">Before you ask.</h2>
            <p className="pb-lead pb-lead--left">Something else on your mind? Message us, a real person replies.</p>
            <div className="ag-faq-mark" aria-hidden="true"><BeamMark fill="#C8F135" /></div>
          </div>
          <div className="pb-faq ag-faq">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`pb-faq__item ${open ? "is-open" : ""}`}>
                  <button type="button" className="pb-faq__q" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                    <span>{f.q}</span>
                    <i aria-hidden="true" />
                  </button>
                  <div className="pb-faq__a"><div><p>{f.a}</p></div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
