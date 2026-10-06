"use client";

import React, { useMemo, useState } from "react";
import "./dashboard.css";
import Shell, { Icon, NavItem } from "./Shell";
import { AreaChart } from "./charts";

/* All data below is SAMPLE data for a design preview. Pomera has no delivery data yet. */

const inr = (n: number) => n.toLocaleString("en-IN");
const RATE = 50; // sample agreed rate per 1,000 verified views (same example as the pillars card)
const BUDGET = 40000; // sample committed budget

const DAILY = [4200, 6100, 7800, 9400, 8800, 12300, 15100, 14200, 13800, 17200, 19800, 18400, 21100, 16000];
const DAYS = DAILY.map((_, i) => `Day ${i + 1}`);

type Status = "verified" | "counting" | "review";
const POSTS: { src: string; title: string; who: string; platform: string; posted: string; views: number; status: Status; day?: number }[] = [
  { src: "/videos/reel-bike.mp4", title: "Summer launch · Reel 1", who: "@sample.publisher1", platform: "Instagram", posted: "Day 2", views: 42300, status: "verified" },
  { src: "/videos/reel-dog.mp4", title: "Summer launch · Short 1", who: "@sample.publisher2", platform: "YouTube Shorts", posted: "Day 2", views: 38900, status: "verified" },
  { src: "/videos/reel-snow.mp4", title: "Summer launch · Reel 2", who: "@sample.publisher3", platform: "Instagram", posted: "Day 3", views: 29100, status: "verified" },
  { src: "/videos/reel-rafting.mp4", title: "Summer launch · Reel 3", who: "@sample.publisher4", platform: "Instagram", posted: "Day 4", views: 21700, status: "verified" },
  { src: "/videos/clip1.mp4", title: "Summer launch · Reel 4", who: "@sample.publisher5", platform: "Instagram", posted: "Day 9", views: 31400, status: "counting", day: 5 },
  { src: "/videos/reel-bike.mp4", title: "Summer launch · Short 2", who: "@sample.publisher6", platform: "YouTube Shorts", posted: "Day 12", views: 20800, status: "counting", day: 2 },
  { src: "/videos/reel-dog.mp4", title: "Summer launch · Reel 5", who: "@sample.publisher7", platform: "Instagram", posted: "Day 6", views: 0, status: "review" },
];

const NAV: NavItem[] = [
  { id: "overview", label: "Overview", icon: Icon.home },
  { id: "campaigns", label: "Campaigns", icon: Icon.campaigns, count: 2 },
  { id: "reports", label: "Reports", icon: Icon.reports },
  { id: "billing", label: "Billing", icon: Icon.billing },
  { id: "settings", label: "Settings", icon: Icon.settings },
];

function StatusPill({ s, day }: { s: Status; day?: number }) {
  if (s === "verified") return <span className="db-pill db-pill--ok"><i />Verified</span>;
  if (s === "counting") return <span className="db-pill db-pill--wait"><i />Counting · day {day} of 7</span>;
  return <span className="db-pill db-pill--info"><i />Under review</span>;
}

function Overview() {
  const [metric, setMetric] = useState<"views" | "billed">("views");
  const [filter, setFilter] = useState<"all" | Status>("all");

  const series = useMemo(() => (metric === "views" ? DAILY : DAILY.map((v) => Math.round((v / 1000) * RATE))), [metric]);
  const total = DAILY.reduce((a, b) => a + b, 0);
  const billed = Math.round((total / 1000) * RATE);
  const target = 300000;
  const pct = Math.round((total / target) * 100);
  const rows = POSTS.filter((p) => filter === "all" || p.status === filter);

  return (
    <>
      <div className="db-kpis">
        <div className="db-card db-kpi">
          <span className="db-label">Verified views</span>
          <span className="db-kpi__val">{inr(total)}</span>
          <span className="db-kpi__note">Counted on day 7 after each post</span>
        </div>
        <div className="db-card db-kpi">
          <span className="db-label">Billed so far</span>
          <span className="db-kpi__val">₹{inr(billed)}</span>
          <span className="db-kpi__note">Verified views only</span>
        </div>
        <div className="db-card db-kpi">
          <span className="db-label">Achieved rate</span>
          <span className="db-kpi__val">₹{RATE}<span style={{ fontSize: 14, color: "var(--pm-c-text-2)" }}> / 1K</span></span>
          <span className="db-kpi__note">Fixed before launch</span>
        </div>
        <div className="db-card db-kpi">
          <span className="db-label">Budget left</span>
          <span className="db-kpi__val">₹{inr(BUDGET - billed)}</span>
          <div className="db-meter"><i style={{ width: `${Math.round((billed / BUDGET) * 100)}%` }} /></div>
          <span className="db-kpi__note">of ₹{inr(BUDGET)} committed</span>
        </div>
      </div>

      <div className="db-grid2">
        <div className="db-stack">
          <section className="db-card">
            <div className="db-card__head">
              <div>
                <h2 className="db-card__title">Verified views per day</h2>
                <p className="db-card__sub">Summer launch · sample brand</p>
              </div>
              <div className="db-seg" role="tablist" aria-label="Chart metric">
                <button type="button" className={metric === "views" ? "is-on" : ""} onClick={() => setMetric("views")}>Views</button>
                <button type="button" className={metric === "billed" ? "is-on" : ""} onClick={() => setMetric("billed")}>Billed ₹</button>
              </div>
            </div>
            <div className="db-card__body">
              <AreaChart values={series} labels={DAYS} />
            </div>
          </section>

          <section className="db-card">
            <div className="db-card__head">
              <div>
                <h2 className="db-card__title">Verification pipeline</h2>
                <p className="db-card__sub">Every post is checked before it is billed.</p>
              </div>
            </div>
            <div className="db-card__body">
              <div className="db-pipe" aria-hidden="true">
                <i className="p1" style={{ width: "61%" }} />
                <i className="p2" style={{ width: "33%" }} />
                <i className="p3" style={{ width: "6%" }} />
              </div>
              <div className="db-legend">
                <div><b>18</b><span style={{ ["--c" as string]: "var(--pm-c-line-strong)" }}>Posted</span></div>
                <div><b>11</b><span style={{ ["--c" as string]: "var(--pm-c-text)" }}>Verified</span></div>
                <div><b>6</b><span style={{ ["--c" as string]: "var(--pm-c-text-3)" }}>Counting to day 7</span></div>
                <div><b>1</b><span style={{ ["--c" as string]: "var(--pm-c-line-strong)" }}>Under review</span></div>
              </div>
            </div>
          </section>

          <section className="db-card">
            <div className="db-card__head">
              <div>
                <h2 className="db-card__title">Posts</h2>
                <p className="db-card__sub">Showing {rows.length} of 18 · every post link is in your report</p>
              </div>
              <div className="db-chips">
                {(["all", "verified", "counting", "review"] as const).map((f) => (
                  <button key={f} type="button" className={`db-chipbtn ${filter === f ? "is-on" : ""}`} onClick={() => setFilter(f)}>
                    {f === "all" ? "All" : f[0].toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="db-tablewrap">
              <table className="db-table">
                <thead>
                  <tr><th>Post</th><th>Platform</th><th>Posted</th><th className="num">Verified views</th><th>Status</th><th className="num">Billed</th></tr>
                </thead>
                <tbody>
                  {rows.map((p) => (
                    <tr key={p.title}>
                      <td>
                        <div className="db-post">
                          <span className="db-thumb"><video src={`${p.src}#t=0.8`} muted playsInline preload="metadata" aria-hidden="true" /></span>
                          <span><b>{p.title}</b><small>{p.who}</small></span>
                        </div>
                      </td>
                      <td>{p.platform}</td>
                      <td>{p.posted}</td>
                      <td className="num">{p.status === "review" ? "—" : inr(p.views)}{p.status === "counting" ? "*" : ""}</td>
                      <td><StatusPill s={p.status} day={p.day} /></td>
                      <td className="num">{p.status === "verified" ? `₹${inr(Math.round((p.views / 1000) * RATE))}` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="db-card__sub" style={{ padding: "0 20px 16px" }}>* Still counting. Views are final, and billed, on day 7.</p>
          </section>
        </div>

        <div className="db-stack">
          <section className="db-card">
            <div className="db-card__head">
              <div>
                <h2 className="db-card__title">Delivery target</h2>
                
              </div>
              <span className="db-pill db-pill--ok"><i />On track</span>
            </div>
            <div className="db-card__body" style={{ display: "grid", gap: 12 }}>
              <div className="db-row">
                <span className="db-kpi__val" style={{ fontSize: 28 }}>{pct}%</span>
                <span className="db-muted" style={{ fontSize: 13 }}>{inr(total)} of {inr(target)}</span>
              </div>
              <div className="db-meter"><i style={{ width: `${pct}%` }} /></div>
              <p className="db-card__sub">If the campaign under-delivers, we extend it or you aren&apos;t billed for the shortfall.</p>
            </div>
          </section>

          <section className="db-card">
            <div className="db-card__head">
              <div>
                <h2 className="db-card__title">Verification log</h2>
                <p className="db-card__sub">What we checked, in order</p>
              </div>
            </div>
            <div className="db-card__body">
              <ol className="db-log">
                <li className="is-done"><i /><div>Tracked link matched<small>@sample.publisher4 · Reel 3</small></div></li>
                <li className="is-done"><i /><div>Platform insights checked<small>@sample.publisher3 · Reel 2</small></div></li>
                <li className="is-done"><i /><div>Spot-check passed<small>@sample.publisher1 · Reel 1</small></div></li>
                <li className="is-done"><i /><div>Counted on day 7 and billed<small>@sample.publisher2 · Short 1</small></div></li>
                <li><i /><div>Analytics mismatch, under review<small>@sample.publisher7 · Reel 5</small></div></li>
              </ol>
            </div>
          </section>

          <section className="db-card">
            <div className="db-card__body" style={{ display: "grid", gap: 10 }}>
              <span className="db-label">Report</span>
              <b style={{ fontSize: 16, fontWeight: 600 }}>Delivery report, week 2</b>
              <p className="db-card__sub">Every post link, verified views and the achieved rate, ready to share.</p>
              <button type="button" className="db-btn db-btn--line" disabled>Download report</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Campaigns() {
  return (
    <section className="db-card">
      <div className="db-card__head">
        <div><h2 className="db-card__title">Campaigns</h2><p className="db-card__sub">Rate and budget are agreed before launch.</p></div>
      </div>
      <div className="db-tablewrap">
        <table className="db-table">
          <thead><tr><th>Campaign</th><th>Status</th><th className="num">Target views</th><th className="num">Verified</th><th className="num">Rate / 1K</th><th className="num">Budget</th></tr></thead>
          <tbody>
            <tr><td><b>Summer launch</b></td><td><span className="db-pill db-pill--ok"><i />Live</span></td><td className="num">3,00,000</td><td className="num">1,84,200</td><td className="num">₹{RATE}</td><td className="num">₹{inr(BUDGET)}</td></tr>
            <tr><td><b>Festive push</b></td><td><span className="db-pill db-pill--plain"><i />Draft</span></td><td className="num">—</td><td className="num">—</td><td className="num">—</td><td className="num">—</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Reports() {
  const items = [
    { t: "Delivery report · week 2", s: "Ready", ok: true },
    { t: "Delivery report · week 1", s: "Sent", ok: true },
    { t: "Final report · Summer launch", s: "After day 7 of the last post", ok: false },
  ];
  return (
    <section className="db-card">
      <div className="db-card__head"><div><h2 className="db-card__title">Reports</h2><p className="db-card__sub">Post links, verified views and achieved rate.</p></div></div>
      <div className="db-card__body" style={{ display: "grid", gap: 10 }}>
        {items.map((r) => (
          <div key={r.t} className="db-row" style={{ padding: "12px 14px", border: "1px solid var(--pm-c-line)", borderRadius: 10 }}>
            <b style={{ fontWeight: 500 }}>{r.t}</b>
            <span className={`db-pill ${r.ok ? "db-pill--ok" : "db-pill--plain"}`}><i />{r.s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Billing() {
  return (
    <section className="db-card">
      <div className="db-card__head"><div><h2 className="db-card__title">Billing</h2><p className="db-card__sub">INR, GST invoices, billed on verified views only.</p></div></div>
      <div className="db-tablewrap">
        <table className="db-table">
          <thead><tr><th>Invoice</th><th>Period</th><th className="num">Verified views</th><th className="num">Amount</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><b>SAMPLE-0001</b></td><td>Week 1</td><td className="num">1,12,400</td><td className="num">₹5,620</td><td><span className="db-pill db-pill--ok"><i />Paid</span></td></tr>
            <tr><td><b>SAMPLE-0002</b></td><td>Week 2</td><td className="num">71,800</td><td className="num">₹3,590</td><td><span className="db-pill db-pill--wait"><i />Due</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Settings() {
  return (
    <section className="db-card">
      <div className="db-card__head"><div><h2 className="db-card__title">Settings</h2><p className="db-card__sub">Brand and billing details.</p></div></div>
      <div className="db-card__body" style={{ display: "grid", gap: 14, maxWidth: 520 }}>
        {[["Brand name", "Sample brand"], ["Billing email", "accounts@sample-brand.example"], ["GSTIN", "Sample GSTIN"], ["WhatsApp for your campaign contact", "+91 00000 00000"]].map(([l, v]) => (
          <label key={l} style={{ display: "grid", gap: 6, fontSize: 13.5, fontWeight: 500 }}>{l}<input className="db-input" defaultValue={v} /></label>
        ))}
        <button type="button" className="db-btn db-btn--ink" style={{ justifySelf: "start" }} disabled>Save changes</button>
      </div>
    </section>
  );
}

const TITLES: Record<string, [string, string]> = {
  overview: ["Overview", "Sample brand · Summer launch"],
  campaigns: ["Campaigns", "Fixed rate, agreed before launch"],
  reports: ["Reports", "Delivery reports for your campaigns"],
  billing: ["Billing", "Billed on verified views only"],
  settings: ["Settings", "Brand and billing details"],
};

export function BrandDashboardView({ embedded = false, safe = false }: { embedded?: boolean; safe?: boolean }) {
  const [tab, setTab] = useState("overview");
  const [t, s] = TITLES[tab];
  const nav = safe ? NAV.filter((n) => ["overview", "campaigns", "reports"].includes(n.id)) : NAV;

  return (
    <Shell
      variant="brand"
      nav={nav}
      active={tab}
      onNav={setTab}
      embedded={embedded}
      title={t}
      subtitle={s}
      helpTitle="Your Pomera contact"
      helpText="Questions about a post or a bill? Message us on WhatsApp. A real person replies."
      actions={
        <button type="button" className="db-btn db-btn--ink">
          {Icon.plus}
          <span>New campaign</span>
        </button>
      }
    >
      {tab === "overview" && <Overview />}
      {tab === "campaigns" && <Campaigns />}
      {tab === "reports" && <Reports />}
      {tab === "billing" && <Billing />}
      {tab === "settings" && <Settings />}
    </Shell>
  );
}
