"use client";

import React, { useState } from "react";
import "./dashboard.css";
import Shell, { Icon, NavItem } from "./Shell";
import { BarChart } from "./charts";

/* ClipperCircle by Pomera: the publisher's own dashboard. All data is SAMPLE data for a design preview. */

const inr = (n: number) => n.toLocaleString("en-IN");

const WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const WEEKLY = [1200, 1850, 1600, 2300, 2100, 3430, 3150, 1920]; // W1–W6 paid, W7 scheduled, W8 counting

const BRIEFS = [
  { t: "Skincare brand · Sunscreen reel", rate: 35, max: 4000, due: "Post by 14 Nov", plat: ["Instagram", "YouTube Shorts"], assets: "Raw footage + brief" },
  { t: "Luggage brand · Travel short", rate: 28, max: 3000, due: "Post by 20 Nov", plat: ["YouTube Shorts"], assets: "Long video + brief" },
  { t: "Snacks brand · Taste test reel", rate: 45, max: 5000, due: "Post by 28 Nov", plat: ["Instagram"], assets: "Product footage + brief" },
];

type PStatus = "paid" | "counting" | "fix";
const POSTS: { src: string; title: string; posted: string; views: number; rate: number; status: PStatus; day?: number }[] = [
  { src: "/videos/reel-bike.mp4", title: "Skincare · Sunscreen reel", posted: "2 Nov", views: 28400, rate: 35, status: "paid" },
  { src: "/videos/reel-dog.mp4", title: "Luggage · Travel short", posted: "3 Nov", views: 31200, rate: 28, status: "paid" },
  { src: "/videos/clip1.mp4", title: "Snacks · Taste test reel", posted: "9 Nov", views: 41000, rate: 45, status: "counting", day: 5 },
  { src: "/videos/reel-snow.mp4", title: "Skincare · Sunscreen reel 2", posted: "12 Nov", views: 15300, rate: 35, status: "counting", day: 2 },
  { src: "/videos/reel-rafting.mp4", title: "Luggage · Travel short 2", posted: "11 Nov", views: 0, rate: 28, status: "fix" },
];
const earned = (p: { views: number; rate: number }) => Math.round((p.views / 1000) * p.rate);

const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: Icon.home },
  { id: "campaigns", label: "Campaigns", icon: Icon.campaigns, count: 3 },
  { id: "posts", label: "My posts", icon: Icon.posts },
  { id: "payouts", label: "Payouts", icon: Icon.payouts },
  { id: "profile", label: "Profile", icon: Icon.profile },
];

function PostStatus({ s, day }: { s: PStatus; day?: number }) {
  if (s === "paid") return <span className="db-pill db-pill--ok"><i />Paid via UPI</span>;
  if (s === "counting") return <span className="db-pill db-pill--wait"><i />Counting · day {day} of 7</span>;
  return <span className="db-pill db-pill--bad"><i />Add paid label</span>;
}

function BriefCards({ limit }: { limit?: number }) {
  return (
    <div className="db-briefs">
      {BRIEFS.slice(0, limit).map((b) => (
        <article key={b.t} className="db-card db-brief">
          <div className="db-meta">{b.plat.map((p) => <span key={p} className="db-tag">{p}</span>)}</div>
          <h4>{b.t}</h4>
          <div className="db-brief__rate"><b>₹{b.rate}</b><span>per 1,000 verified views</span></div>
          <dl>
            <div><dt>Max per post</dt><dd>₹{inr(b.max)}</dd></div>
            <div><dt>Deadline</dt><dd>{b.due}</dd></div>
            <div><dt>You get</dt><dd>{b.assets}</dd></div>
          </dl>
          <span className="db-pill db-pill--info" style={{ justifySelf: "start" }}><i />Paid partnership label required</span>
          <button type="button" className="db-btn db-btn--ink">View brief</button>
        </article>
      ))}
    </div>
  );
}

function PostsTable({ compact }: { compact?: boolean }) {
  return (
    <div className="db-tablewrap">
      <table className="db-table">
        <thead>
          <tr><th>Post</th><th>Posted</th><th className="num">Verified views</th><th>Status</th><th className="num">{compact ? "Earned" : "Earned"}</th></tr>
        </thead>
        <tbody>
          {POSTS.map((p) => (
            <tr key={p.title}>
              <td>
                <div className="db-post">
                  <span className="db-thumb"><video src={`${p.src}#t=0.8`} muted playsInline preload="metadata" aria-hidden="true" /></span>
                  <span><b>{p.title}</b><small>₹{p.rate} per 1,000 views</small></span>
                </div>
              </td>
              <td>{p.posted}</td>
              <td className="num">{p.status === "fix" ? "—" : inr(p.views)}{p.status === "counting" ? "*" : ""}</td>
              <td><PostStatus s={p.status} day={p.day} /></td>
              <td className="num">{p.status === "fix" ? "—" : `${p.status === "counting" ? "~" : ""}₹${inr(earned(p))}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProofCard() {
  return (
    <section className="db-card">
      <div className="db-card__head">
        <div><h2 className="db-card__title">Submit your post</h2><p className="db-card__sub">So we can find your post and pay you.</p></div>
      </div>
      <div className="db-card__body" style={{ display: "grid", gap: 14 }}>
        <ol className="db-steps">
          <li>Post from your own account with the paid partnership label on.</li>
          <li>Paste your post link below.</li>
          <li>That is it. We pull your views from the platform and count them on day 7.</li>
        </ol>
        <input className="db-input" placeholder="https://instagram.com/reel/…" aria-label="Post link" />
        <button type="button" className="db-btn db-btn--ink" disabled>Submit post</button>
      </div>
    </section>
  );
}

function Home({ go }: { go: (id: string) => void }) {
  const paid = WEEKLY.slice(0, 6).reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="db-kpis">
        <div className="db-card db-kpi">
          <span className="db-label">Paid so far</span>
          <span className="db-kpi__val">₹{inr(paid)}</span>
          <span className="db-kpi__note">Sent to your UPI, week by week</span>
        </div>
        <div className="db-card db-kpi db-kpi--ink">
          <span className="db-label">This week&apos;s payout</span>
          <span className="db-kpi__val">₹{inr(WEEKLY[6])}</span>
          <span className="db-kpi__note">Scheduled by UPI</span>
        </div>
        <div className="db-card db-kpi">
          <span className="db-label">Counting to day 7</span>
          <span className="db-kpi__val">₹{inr(WEEKLY[7])}</span>
          <span className="db-kpi__note">Paid once the views are verified</span>
        </div>
        <div className="db-card db-kpi">
          <span className="db-label">Verified views · 30 days</span>
          <span className="db-kpi__val">{inr(59600)}</span>
          <span className="db-kpi__note">No follower minimum, ever</span>
        </div>
      </div>

      <div className="db-grid2">
        <div className="db-stack">
          <section className="db-card">
            <div className="db-card__head">
              <div><h2 className="db-card__title">Weekly earnings</h2><p className="db-card__sub">Paid every week by UPI, on verified views.</p></div>
              <span className="db-pill db-pill--plain"><i />Hatched = still counting</span>
            </div>
            <div className="db-card__body"><BarChart values={WEEKLY} labels={WEEKS} /></div>
          </section>

          <section>
            <div className="db-row" style={{ marginBottom: 12 }}>
              <h2 className="db-card__title">Open campaigns</h2>
              <button type="button" className="db-btn db-btn--line" onClick={() => go("campaigns")}>See all</button>
            </div>
            <BriefCards />
          </section>

          <section className="db-card">
            <div className="db-card__head">
              <div><h2 className="db-card__title">My posts</h2><p className="db-card__sub">* Still counting. Views are final on day 7.</p></div>
              <button type="button" className="db-btn db-btn--line" onClick={() => go("posts")}>Open</button>
            </div>
            <PostsTable />
          </section>
        </div>

        <div className="db-stack">
          <div className="db-warn" role="note">
            <span aria-hidden="true">!</span>
            <span><b>One post needs a fix.</b> A post without the paid partnership label is not counted and not paid until it is fixed.</span>
          </div>
          <ProofCard />
          <section className="db-card">
            <div className="db-card__body" style={{ display: "grid", gap: 10 }}>
              <span className="db-label">Next payout</span>
              <div className="db-row"><b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.03em" }}>₹{inr(WEEKLY[6])}</b><span className="db-pill db-pill--wait"><i />Scheduled</span></div>
              <p className="db-card__sub">Weekly by UPI to sample@upi. We never ask for your Instagram password.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Payouts() {
  const rows = [
    ...WEEKLY.slice(0, 6).map((v, i) => ({ w: `Week ${i + 1}`, v: Math.round(v * 28), a: v, s: "paid" as const })),
    { w: "Week 7", v: Math.round(WEEKLY[6] * 28), a: WEEKLY[6], s: "sched" as const },
    { w: "Week 8", v: Math.round(WEEKLY[7] * 28), a: WEEKLY[7], s: "count" as const },
  ].reverse();
  return (
    <section className="db-card">
      <div className="db-card__head"><div><h2 className="db-card__title">Payouts</h2><p className="db-card__sub">Weekly by UPI, for views verified that week.</p></div></div>
      <div className="db-tablewrap">
        <table className="db-table">
          <thead><tr><th>Week</th><th className="num">Verified views</th><th className="num">Amount</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.w}>
                <td><b>{r.w}</b></td>
                <td className="num">{inr(r.v)}</td>
                <td className="num">₹{inr(r.a)}</td>
                <td>
                  {r.s === "paid" && <span className="db-pill db-pill--ok"><i />Paid via UPI</span>}
                  {r.s === "sched" && <span className="db-pill db-pill--wait"><i />Scheduled</span>}
                  {r.s === "count" && <span className="db-pill db-pill--plain"><i />Counting</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="db-card">
      <div className="db-card__head"><div><h2 className="db-card__title">Profile</h2><p className="db-card__sub">Used only to match you to campaigns and pay you.</p></div></div>
      <div className="db-card__body" style={{ display: "grid", gap: 14, maxWidth: 520 }}>
        {[["Instagram handle", "@sample.publisher"], ["YouTube channel", "Sample editor"], ["UPI ID", "sample@upi"], ["What you post", "Beauty and skincare, Fashion"], ["Languages", "Hindi, English"]].map(([l, v]) => (
          <label key={l} style={{ display: "grid", gap: 6, fontSize: 13.5, fontWeight: 500 }}>{l}<input className="db-input" defaultValue={v} /></label>
        ))}
        <button type="button" className="db-btn db-btn--ink" style={{ justifySelf: "start" }} disabled>Save changes</button>
      </div>
    </section>
  );
}

const TITLES: Record<string, [string, string]> = {
  home: ["Hi, @sample.publisher", "Founding cohort · paid per view, not per follower"],
  campaigns: ["Campaigns", "Every brief shows the rate and the maximum per post"],
  posts: ["My posts", "Verified views are counted on day 7"],
  payouts: ["Payouts", "Weekly by UPI"],
  profile: ["Profile", "Your details"],
};

export function PublisherDashboardView({ embedded = false }: { embedded?: boolean }) {
  const [tab, setTab] = useState("home");
  const [t, s] = TITLES[tab];

  return (
    <Shell
      variant="publisher"
      nav={NAV}
      active={tab}
      onNav={setTab}
      embedded={embedded}
      title={t}
      subtitle={s}
      helpTitle="ClipperCircle WhatsApp group"
      helpText="New briefs and payout updates land here first. Founding clippers see every campaign first."
      actions={
        <button type="button" className="db-btn db-btn--ink" onClick={() => setTab("posts")}>
          {Icon.plus}
          <span className="db-hide-sm">Submit a post</span>
        </button>
      }
    >
      {tab === "home" && <Home go={setTab} />}
      {tab === "campaigns" && <BriefCards />}
      {tab === "posts" && (
        <div className="db-grid2">
          <section className="db-card">
            <div className="db-card__head"><div><h2 className="db-card__title">My posts</h2><p className="db-card__sub">* Still counting. Views are final on day 7.</p></div></div>
            <PostsTable />
          </section>
          <ProofCard />
        </div>
      )}
      {tab === "payouts" && <Payouts />}
      {tab === "profile" && <Profile />}
    </Shell>
  );
}
