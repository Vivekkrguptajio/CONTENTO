import DashboardPreview from "./DashboardPreview";

/* Homepage section: the brand dashboard, shown as a labelled preview.
   The self-serve dashboard is roadmap, so the copy says what exists today (a delivery report). */
export default function DashboardPreviewSection() {
  return (
    <section className="dp-section" id="dashboard" aria-label="Brand dashboard preview">
      <div className="dp-container">
        <p className="dp-eyebrow">Your campaign</p>
        <h2 className="dp-heading">Every post and every verified view, in one place.</h2>
        <p className="dp-lead">
          See what was posted, what was verified and what is still counting. Nothing is billed until it is verified.
        </p>

        <DashboardPreview variant="brand" />

        <p className="dp-note">
          Preview with sample data. The self-serve dashboard is on the roadmap. Until it ships, we send you this report: every post link, the verified views and the achieved rate.
        </p>
      </div>
    </section>
  );
}
