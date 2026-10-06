"use client";

import React, { useState } from "react";
import { PomeraMark } from "./pomeraMark";
import "./PublishersSection.css";

/* Set this to your form-handler URL (Google Apps Script, Formspree, your API…). Empty = form shows a WhatsApp fallback. */
const FORM_ENDPOINT = "";

const PERKS = [
  "Your rate is fixed before you spend anything",
  "Billed on verified views only",
  "Your first campaign is free",
  "A report with every post link",
  "Support on WhatsApp",
];

const CATEGORIES = ["D2C", "Beauty", "Skincare", "Fashion", "Food", "Wellness", "Fitness", "Home", "Other"];
const BUDGETS = ["Under ₹50,000", "₹50,000–₹2,00,000", "₹2,00,000–₹10,00,000", "Above ₹10,00,000"];

const NEXT_STEPS = [
  "We message you on WhatsApp within one working day.",
  "A short call to agree your fixed rate and your brief.",
  "We run your free pilot. First campaigns start in November 2026.",
];

type Key = "name" | "brand" | "website" | "category" | "budget" | "whatsapp" | "email" | "consent";
type Errors = Partial<Record<Key, string>>;

const IDS: Record<Key, string> = {
  name: "b-name",
  brand: "b-brand",
  website: "b-site",
  category: "b-cat",
  budget: "b-budget",
  whatsapp: "b-wa",
  email: "b-email",
  consent: "b-ok",
};

/* Required fields are the default. Only the optional ones are marked "(optional)". */
function validate(f: FormData): Errors {
  const v = (k: string) => String(f.get(k) ?? "").trim();
  const e: Errors = {};
  if (!v("name")) e.name = "Enter your name.";
  if (!v("brand")) e.brand = "Enter your brand name.";
  if (!v("website")) e.website = "Add your website or Instagram handle.";
  if (!v("category")) e.category = "Choose what you sell.";
  if (!v("budget")) e.budget = "Choose a monthly budget range.";
  const digits = v("whatsapp").replace(/\D/g, "");
  if (!v("whatsapp")) e.whatsapp = "Enter your WhatsApp number.";
  else if (digits.length < 10 || digits.length > 13) e.whatsapp = "Enter a valid number, for example +91 98765 43210.";
  if (v("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) e.email = "That email doesn’t look right. You can also leave it empty.";
  if (!f.get("consent")) e.consent = "Please tick this so we can message you.";
  return e;
}

function Err({ id, text }: { id: string; text?: string }) {
  return text ? <span className="pb-err" id={`${id}-err`} role="alert">{text}</span> : null;
}

export default function BrandsContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [firstName, setFirstName] = useState("");

  const a11y = (k: Key) => ({
    id: IDS[k],
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `${IDS[k]}-err` : undefined,
    onChange: () => setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e)),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    const firstBad = (Object.keys(errs) as Key[]).find((k) => errs[k]);
    if (firstBad) {
      document.getElementById(IDS[firstBad])?.focus();
      return;
    }
    setFirstName(String(data.get("name")).trim().split(/\s+/)[0]);
    if (!FORM_ENDPOINT) {
      setStatus("unconnected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data });
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
                <div className="pb-done" role="status">
                  <PomeraMark size={56} bg="#111210" radius={90} />
                  <h3>Thanks{firstName ? `, ${firstName}` : ""}. You’re in.</h3>
                  <p>We’ll message you on WhatsApp within one working day.</p>
                  <ol className="pb-next">
                    {NEXT_STEPS.map((t, i) => (
                      <li key={t}><b className="pm-num">{i + 1}</b><span>{t}</span></li>
                    ))}
                  </ol>
                </div>
              ) : (
                <form className="pb-form" onSubmit={onSubmit} noValidate>
                  <div className="pb-fld">
                    <label htmlFor="b-name">Your name</label>
                    <input className="pb-inp" name="name" type="text" autoComplete="name" {...a11y("name")} />
                    <Err id="b-name" text={errors.name} />
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-brand">Brand name</label>
                    <input className="pb-inp" name="brand" type="text" autoComplete="organization" {...a11y("brand")} />
                    <Err id="b-brand" text={errors.brand} />
                  </div>
                  <div className="pb-fld pb-full">
                    <label htmlFor="b-site">Website or Instagram</label>
                    <input className="pb-inp" name="website" type="text" placeholder="https:// or @" {...a11y("website")} />
                    <Err id="b-site" text={errors.website} />
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-cat">What do you sell?</label>
                    <select className="pb-inp" name="category" defaultValue="" {...a11y("category")}>
                      <option value="" disabled>Select</option>
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <Err id="b-cat" text={errors.category} />
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-budget">Monthly marketing budget</label>
                    <select className="pb-inp" name="budget" defaultValue="" {...a11y("budget")}>
                      <option value="" disabled>Select</option>
                      {BUDGETS.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <Err id="b-budget" text={errors.budget} />
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-wa">WhatsApp number</label>
                    <input className="pb-inp" name="whatsapp" type="tel" placeholder="+91" autoComplete="tel" {...a11y("whatsapp")} />
                    <Err id="b-wa" text={errors.whatsapp} />
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="b-email">Email <span className="pb-fine">(optional)</span></label>
                    <input className="pb-inp" name="email" type="email" autoComplete="email" {...a11y("email")} />
                    <Err id="b-email" text={errors.email} />
                  </div>
                  <div className="pb-fld pb-full">
                    <label htmlFor="b-agency">Referred by an agency? <span className="pb-fine">(optional)</span></label>
                    <input className="pb-inp" id="b-agency" name="agency" type="text" placeholder="Agency name, if one brought you to Pomera" />
                  </div>

                  <div className="pb-full">
                    <label className="pb-consent" htmlFor="b-ok">
                      <input type="checkbox" name="consent" {...a11y("consent")} />
                      <span>I agree that Pomera can contact me on WhatsApp about this, and to the <a href="/privacy-policy">privacy policy</a>.</span>
                    </label>
                    <Err id="b-ok" text={errors.consent} />
                  </div>

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
