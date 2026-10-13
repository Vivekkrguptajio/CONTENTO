"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./StickyCta.css";

interface Cta {
  primary: { label: string; href: string };
  formId: string;
}

/* Brand pages get the brand action, publishers and agencies get theirs. Other pages show no bar. */
function ctaFor(path: string): Cta | null {
  if (path === "/") {
    return {
      primary: { label: "Book a pilot", href: "#contact" },
      formId: "contact",
    };
  }
  if (path === "/clippercircle" || path.startsWith("/clippercircle/")) {
    return {
      primary: { label: "Join the founding cohort", href: "#join" },
      formId: "join",
    };
  }
  if (path === "/agencies" || path === "/agency" || path.startsWith("/agencies/") || path.startsWith("/agency/")) {
    return {
      primary: { label: "Talk to us about partnering", href: "#partner" },
      formId: "partner",
    };
  }
  return null;
}

export default function StickyCta() {
  const pathname = usePathname();
  const cta = ctaFor(pathname);
  const formId = cta?.formId;
  const [scrolled, setScrolled] = useState(false);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 560);
    window.addEventListener("scroll", on, { passive: true });
    const id = requestAnimationFrame(on);
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(id);
    };
  }, []);

  /* Hide while the form section or the footer is on screen: the actions are already right there */
  useEffect(() => {
    if (!formId) return;
    const targets = [document.getElementById(formId), document.querySelector("footer")].filter(Boolean) as Element[];
    if (targets.length === 0 || typeof IntersectionObserver === "undefined") return;
    const live = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) live.add(e.target);
        else live.delete(e.target);
      });
      setCovered(live.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [formId, pathname]);

  if (!cta) return null;
  const show = scrolled && !covered;

  return (
    <div className={`sticky-cta${show ? " is-on" : ""}`} aria-hidden={!show}>
      <a className="sticky-cta__btn sticky-cta__btn--primary" href={cta.primary.href} tabIndex={show ? 0 : -1}>
        {cta.primary.label}
      </a>
    </div>
  );
}
