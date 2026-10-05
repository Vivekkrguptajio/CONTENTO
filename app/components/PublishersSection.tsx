"use client";

import React, { useEffect, useRef, useState } from "react";
import { PomeraMark } from "./pomeraMark";
import "./PublishersSection.css";

/* Set this to your form-handler URL (Google Apps Script, Formspree, your API…). Empty = form shows a WhatsApp fallback. */
const FORM_ENDPOINT = "";

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

const REELS: { src: string; w: number; h: number; mt: number; text: React.ReactNode; cap: string; hideMobile?: boolean }[] = [
  { src: "/videos/reel-snow.mp4", w: 190, h: 330, mt: 44, text: <>Your edit of a <span>brand video</span></>, cap: "Posted from your account", hideMobile: true },
  { src: "/videos/reel-dog.mp4", w: 215, h: 372, mt: 20, text: <>Pet brand <span>unboxing</span></>, cap: "Your hook, your cut" },
  { src: "/videos/reel-bike.mp4", w: 240, h: 416, mt: 0, text: <>3 things I wish I knew <span>before</span> buying</>, cap: "Your caption" },
  { src: "/videos/reel-rafting.mp4", w: 215, h: 372, mt: 20, text: <>Weekend gear, <span>worth it?</span></>, cap: "Your style" },
  { src: "/videos/clip1.mp4", w: 190, h: 330, mt: 44, text: <>This gadget saves <span>20 minutes</span></>, cap: "Your audience", hideMobile: true },
];

const STEPS = [
  { n: "01", t: "Join in 2 minutes", d: "Fill in the form below. It’s free.", tag: "2 min" },
  { n: "02", t: "Get the brief on WhatsApp", d: "Brand, clips, rules and the rate, all before you start.", tag: "WhatsApp" },
  { n: "03", t: "Edit and post", d: "Your own edit, on your own account, with the paid partnership label on.", tag: "Instagram · YouTube" },
  { n: "04", t: "Get paid every week", d: "Verified views are counted on day 7 and paid by UPI.", tag: "Weekly · UPI" },
];

const TICKS = [
  "Every brief shows the rate and the maximum per post before you start",
  "Views are counted on day 7 after you post",
  "Paid every week by UPI, on time",
  "The first campaign rates go to the founding cohort first",
];

const PROMISES = [
  "Free to join. You never pay us anything.",
  "We never ask for your Instagram password or login.",
  "Your account, your content, your audience.",
  "You earn on every verified view your post gets, even if the campaign misses its overall target. Paid by UPI every week.",
  "Paid posts carry the paid partnership label, as Indian rules require.",
];

const FAQS = [
  { q: "What is a clipper?", a: "A video editor who posts brand videos on their own account and gets paid for every verified view. You edit and you publish; that’s what brands pay for." },
  { q: "Do I have to pay anything?", a: "No. Joining is free, always. Pomera will never ask you for money." },
  { q: "How many followers do I need?", a: "None. There is no follower minimum. What matters is whether people watch your edits." },
  { q: "Will you post from my account or ask for my password?", a: "Never. You post yourself. We only need your post link and a screenshot of your Insights." },
  { q: "When does the first campaign start?", a: "We’re onboarding the founding cohort now. First campaigns start in November 2026, and founding clippers get them first." },
  { q: "How and when do I get paid?", a: "Every week by UPI, for posts verified that week. Verified views are counted on day 7 after you post." },
  { q: "Why do posts need a paid label?", a: "Indian advertising rules (ASCI) require paid posts to be labelled. It protects you and your account, and it takes one tap. A post without the label is not counted and not paid until it is fixed." },
];

const NEXT_STEPS = [
  "We add you to the ClipperCircle by Pomera WhatsApp group within one working day.",
  "You get the first brief before campaigns start in November 2026.",
  "Founding clippers see every new campaign first.",
];

const inr = (n: number) => n.toLocaleString("en-IN");

export default function PublishersSection() {
  const reelsRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [views, setViews] = useState(100000);
  const [rate, setRate] = useState(100);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const payout = Math.round((views / 1000) * rate);

  useEffect(() => {
    const root = reelsRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll("video"));
    const io = new IntersectionObserver(
      ([entry]) => {
        videos.forEach((v) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.15 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  /* Reels: left/right arrows, only shown when the row actually overflows */
  useEffect(() => {
    const el = reelsRef.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollReels = (dir: 1 | -1) => {
    reelsRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  /* Mouse drag-to-scroll (touch uses native swipe) */
  const onReelsDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = reelsRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.classList.add("is-dragging");
  };
  const onReelsMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = reelsRef.current;
    if (!d.active || !el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 3) d.moved = true;
    el.scrollLeft = d.startScroll - dx;
  };
  const onReelsUp = () => {
    drag.current.active = false;
    reelsRef.current?.classList.remove("is-dragging");
  };

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
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pb-hero">
        <div className="pb-wrap">
          <div className="pb-hero__copy">
            <p className="pb-eyebrow"><span className="pb-dot" />ClipperCircle by Pomera · Founding cohort · first campaigns start November 2026</p>
            <h1 className="pb-h1">Paid per view, <span className="pb-mk">not</span> per follower.</h1>
            <p className="pb-lead">
              Edit brand videos, post them from your own Instagram or YouTube account, and get paid for every verified view. Weekly, by UPI.
            </p>
            <div className="pb-ctas">
              <a className="pb-btn pb-btn--dark" href="#join">Join the founding cohort</a>
              <a className="pb-btn pb-btn--soft" href="#how">How it works</a>
            </div>
            <p className="pb-fine">Free to join. We never ask for money or your Instagram password.</p>
          </div>

          <div className="pb-reels-wrap">
            {canLeft && (
              <button type="button" className="pb-reels-arrow pb-reels-arrow--l" aria-label="Scroll reels left" onClick={() => scrollReels(-1)}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
            )}
            {canRight && (
              <button type="button" className="pb-reels-arrow pb-reels-arrow--r" aria-label="Scroll reels right" onClick={() => scrollReels(1)}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            )}
          <div
            className="pb-reels"
            ref={reelsRef}
            aria-hidden="true"
            onPointerDown={onReelsDown}
            onPointerMove={onReelsMove}
            onPointerUp={onReelsUp}
            onPointerLeave={onReelsUp}
            onPointerCancel={onReelsUp}
          >
            {REELS.map((r, i) => (
              <div key={r.src} style={{ marginTop: r.mt }} className="pb-reel-wrap">
                <div className={`pb-reel ${i % 2 ? "pb-reel--b" : ""}`} style={{ "--w": `${r.w}px`, "--h": `${r.h}px` } as CSSVars}>
                  <video className="pb-reel__video" src={r.src} autoPlay loop muted playsInline preload="metadata" />
                  <div className="pb-reel__shade" />
                  <div className="pb-reel__top">
                    <PomeraMark size={24} bg="#111210" radius={90} />
                    <div>@you<div className="pb-reel__pp">Paid partnership</div></div>
                    <span className="pb-reel__pp pb-reel__ex">Example</span>
                  </div>
                  <p className="pb-reel__ol">{r.text}</p>
                  <div className="pb-reel__bottom">
                    <span className="pb-reel__earn">
                      <span className="pb-ldot" />
                      <b>Paid per verified view</b>
                    </span>
                    <p className="pb-reel__cap">{r.cap}</p>
                  </div>
                  <span className="pb-reel__vf"><span className="pb-ldot" />Verified</span>
                  <div className="pb-reel__side"><i /><i style={{ borderRadius: 99 }} /><i /></div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── Zero followers: lime band ────────────────────── */}
      <section className="pb-sec pb-sec--tight">
        <div className="pb-wrap">
          <div className="pb-band">
            <div className="pb-band__mark" aria-hidden="true"><PomeraMark size={360} fg="#C8F135" opacity={0.08} /></div>
            <p className="pb-band__zero">0</p>
            <div className="pb-band__copy">
              <p className="pb-band__t">followers needed to join.</p>
              <p className="pb-band__s">What gets you paid is whether people watch your edit, not how many people follow you.</p>
              <div className="pb-band__pills">
                {["Free to join", "Paid weekly by UPI", "Your account stays yours", "Any niche"].map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works: timeline ───────────────────────── */}
      <section className="pb-sec" id="how">
        <div className="pb-wrap pb-split">
          <div className="pb-split__side">
            <p className="pb-eyebrow pb-eyebrow--left">How it works</p>
            <h2 className="pb-h2 pb-h2--left">What’s a clipper?</h2>
            <p className="pb-lead pb-lead--left">
              A video editor who posts brand videos on their own account and gets paid for the views. You don’t need a big following. You need edits people watch.
            </p>
          </div>
          <ol className="pb-tl">
            {STEPS.map((s) => (
              <li key={s.n} className="pb-tl__row">
                <span className="pb-tl__n">{s.n}</span>
                <div className="pb-tl__body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
                <span className="pb-tl__tag">{s.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Earnings: dark calculator ────────────────────── */}
      <section className="pb-sec">
        <div className="pb-wrap">
          <div className="pb-earn">
            <div className="pb-earn__copy">
              <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime">What you’ll earn</p>
              <h2 className="pb-earn__h">One simple sum.</h2>
              <p className="pb-earn__f">verified views ÷ 1,000 × campaign rate = your payout</p>
              <ul className="pb-earn__ticks">
                {TICKS.map((t) => (
                  <li key={t}><span className="pb-ldot" />{t}</li>
                ))}
              </ul>
              <p className="pb-earn__fine">We never promise how many views a post will get. You earn on every verified view it gets.</p>
            </div>

            <div className="pb-calc">
              <div className="pb-calc__top">
                <span>Try it</span>
                <span className="pb-calc__tag">Example only</span>
              </div>

              <div className="pb-calc__field">
                <label htmlFor="calc-views"><span>Verified views</span><b>{inr(views)}</b></label>
                <input
                  id="calc-views"
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={views}
                  onChange={(e) => setViews(+e.target.value)}
                  style={{ "--fill": `${((views - 5000) / (500000 - 5000)) * 100}%` } as CSSVars}
                />
              </div>

              <div className="pb-calc__field">
                <label htmlFor="calc-rate"><span>Campaign rate per 1,000 views</span><b>₹{rate}</b></label>
                <input
                  id="calc-rate"
                  type="range"
                  min={20}
                  max={400}
                  step={10}
                  value={rate}
                  onChange={(e) => setRate(+e.target.value)}
                  style={{ "--fill": `${((rate - 20) / (400 - 20)) * 100}%` } as CSSVars}
                />
              </div>

              <div className="pb-calc__out">
                <span>Your payout</span>
                <strong>₹{inr(payout)}</strong>
              </div>

              <div className="pb-calc__chat">
                <PomeraMark size={26} bg="#C8F135" fg="#111210" radius={90} />
                <p>Your views are verified. Payout sent to your UPI.</p>
              </div>
              <p className="pb-calc__note">The real rate is in every brief, before you start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder quote + promises ─────────────────────── */}
      <section className="pb-sec">
        <div className="pb-wrap pb-who">
          <div>
            <p className="pb-eyebrow pb-eyebrow--left">Who’s behind Pomera</p>
            <blockquote className="pb-quote">
              <span>“I’ve worked with D2C brands for years. Their best videos reach too few people, and great editors get turned away for having small followings.</span>{" "}
              <em>Pomera fixes both.”</em>
            </blockquote>
            <div className="pb-who__by">
              <PomeraMark size={48} bg="#111210" radius={90} />
              <div>
                <p>Dhiraj</p>
                <small>Co-founder, Pomera · Bengaluru</small>
              </div>
            </div>
          </div>

          <div className="pb-prom">
            <p className="pb-prom__t">Our promises to clippers</p>
            <ul>
              {PROMISES.map((t) => (
                <li key={t}>
                  <span className="pb-prom__ck" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.2 3.2L13 4.8" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Join: split card ─────────────────────────────── */}
      <section className="pb-sec" id="join">
        <div className="pb-wrap">
          <div className="pb-join">
            <div className="pb-join__dark">
              <div className="pb-join__mark" aria-hidden="true"><PomeraMark size={300} fg="#C8F135" opacity={0.09} /></div>
              <p className="pb-eyebrow pb-eyebrow--left pb-eyebrow--lime"><span className="pb-ldot" />Founding cohort open</p>
              <h2 className="pb-join__h">Join the founding cohort</h2>
              <p className="pb-join__s">Two minutes. Free. No follower minimum.</p>

              <div className="pb-join__next">
                <p>What happens next</p>
                {NEXT_STEPS.map((t, i) => (
                  <div key={t}>
                    <span>0{i + 1}</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <p className="pb-join__share">Know other editors? Share this page with them.</p>
            </div>

            <div className="pb-join__form">
              {status === "done" ? (
                <div className="pb-done">
                  <PomeraMark size={56} bg="#111210" radius={90} />
                  <h3>You’re in.</h3>
                  <p>Thanks. We’ll message you on WhatsApp within one working day.</p>
                </div>
              ) : (
                <form className="pb-form" onSubmit={onSubmit} noValidate>
                  <div className="pb-stepper pb-full">
                    <span className="is-on"><b>1</b> Your details</span>
                    <i />
                    <span><b>2</b> Quick questions (optional)</span>
                  </div>

                  <div className="pb-fld"><label htmlFor="p-name">Your name</label><input className="pb-inp" id="p-name" name="name" type="text" required /></div>
                  <div className="pb-fld"><label htmlFor="p-wa">WhatsApp number</label><input className="pb-inp" id="p-wa" name="whatsapp" type="tel" placeholder="+91" required /></div>
                  <div className="pb-fld"><label htmlFor="p-ig">Instagram handle</label><input className="pb-inp" id="p-ig" name="instagram" type="text" placeholder="@" required /></div>
                  <div className="pb-fld">
                    <label htmlFor="p-fol">Followers</label>
                    <select className="pb-inp" id="p-fol" name="followers" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Under 1,000</option><option>1,000 – 5,000</option><option>5,000 – 20,000</option><option>20,000 – 1,00,000</option><option>Over 1,00,000</option>
                    </select>
                    <span className="pb-fine">No minimum. Only for matching you to campaigns.</span>
                  </div>
                  <div className="pb-fld">
                    <label htmlFor="p-niche">What do you post?</label>
                    <select className="pb-inp" id="p-niche" name="niche" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Beauty and skincare</option><option>Fashion</option><option>Fitness and health</option><option>Food</option><option>Tech</option><option>Finance</option><option>Comedy and memes</option><option>Podcasts and talks</option><option>Other</option>
                    </select>
                  </div>
                  <div className="pb-fld"><label htmlFor="p-city">City</label><input className="pb-inp" id="p-city" name="city" type="text" required /></div>

                  <details className="pb-more pb-full">
                    <summary>Tell us a bit more <span>(optional, 1 minute)</span></summary>
                    <div className="pb-more__grid">
                      <div className="pb-fld">
                        <label htmlFor="p-app">Editing app you use</label>
                        <select className="pb-inp" id="p-app" name="editing_app" defaultValue="">
                          <option value="">Select</option><option>CapCut</option><option>VN</option><option>InShot</option><option>Premiere Pro</option><option>DaVinci Resolve</option><option>Other</option>
                        </select>
                      </div>
                      <div className="pb-fld">
                        <label htmlFor="p-views">Views on a typical reel</label>
                        <select className="pb-inp" id="p-views" name="typical_views" defaultValue="">
                          <option value="">Select</option><option>Under 1,000</option><option>1,000 – 10,000</option><option>10,000 – 50,000</option><option>Over 50,000</option>
                        </select>
                      </div>
                      <div className="pb-fld">
                        <label htmlFor="p-freq">Posts you can make per week</label>
                        <select className="pb-inp" id="p-freq" name="posts_per_week" defaultValue="">
                          <option value="">Select</option><option>1–2</option><option>3–5</option><option>6–10</option><option>More than 10</option>
                        </select>
                      </div>
                      <div className="pb-fld"><label htmlFor="p-lang">Languages you post in</label><input className="pb-inp" id="p-lang" name="languages" type="text" placeholder="Hindi, English…" /></div>
                      <div className="pb-fld">
                        <label htmlFor="p-exp">Done paid clips or brand posts before?</label>
                        <select className="pb-inp" id="p-exp" name="experience" defaultValue="">
                          <option value="">Select</option><option>Yes, paid clips</option><option>Yes, brand posts</option><option>No, this is new</option>
                        </select>
                      </div>
                    </div>
                  </details>

                  <label className="pb-consent pb-full" htmlFor="p-ok">
                    <input type="checkbox" id="p-ok" name="consent" required />
                    <span>I agree that Pomera can contact me on WhatsApp about this, and to the <a href="/privacy-policy">privacy policy</a>.</span>
                  </label>

                  <div className="pb-full">
                    <button className="pb-btn pb-btn--dark pb-btn--full" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Join the founding cohort"}
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
            <p className="pb-eyebrow pb-eyebrow--left">FAQs</p>
            <h2 className="pb-h2 pb-h2--left">Before you ask...</h2>
            <p className="pb-lead pb-lead--left">Still unsure about something? Message us, a real person replies.</p>
          </div>
          <div className="pb-faq">
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
