"use client";

import "../dashboard/dashboard.css";
import { BrandDashboardView } from "../dashboard/BrandDashboard";
import { PublisherDashboardView } from "../dashboard/PublisherDashboard";

/* A dashboard shown inside a landing page, in an app-window frame.
   Everything in it is sample data and it is labelled as a preview. The brand version is
   "public safe": it shows no rate and no billed amounts. */
export default function DashboardPreview({ variant }: { variant: "brand" | "publisher" }) {
  return (
    <figure className="dp-frame" aria-label={variant === "brand" ? "Brand dashboard preview" : "ClipperCircle dashboard preview"}>
      <div className="dp-chrome">
        <span className="dp-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="dp-chrome__title">{variant === "brand" ? "Pomera · Brand dashboard" : "ClipperCircle by Pomera · Dashboard"}</span>
        <span className="dp-chrome__tag">Preview · sample data</span>
      </div>
      <div className="dp-body">
        {variant === "brand" ? <BrandDashboardView embedded safe /> : <PublisherDashboardView embedded />}
      </div>
    </figure>
  );
}
