import "./ProblemSection.css";

const POINTS = [
  {
    n: "01",
    t: "You can’t forecast it",
    d: "Impressions are auction-priced and costs move without warning, so you can’t say what a rupee will buy next month.",
    q: "₹ ?",
  },
  {
    n: "02",
    t: "You can’t explain it",
    d: "To an investor or a partner, the spend only makes sense after the money is gone.",
    q: "Why?",
  },
  {
    n: "03",
    t: "You can’t repeat it",
    d: "A good month is hard to repeat when you don’t know exactly why it was good.",
    q: "Again?",
  },
];

export default function ProblemSection() {
  return (
    <section className="pr-section" id="problem" aria-label="The problem with paid social">
      <div className="pr-container">
        <div className="pr-top">
          <div className="pr-top__head">
            <p className="pr-eyebrow">The problem</p>
            <h2 className="pr-heading">
              Paid social isn’t too expensive. It’s <span className="pr-strike">too uncertain.</span>
            </h2>
            <p className="pr-lead">
              Most founders can’t say what their ad spend bought until the money is gone. That uncertainty is the real cost.
            </p>
          </div>

          <ol className="pr-list">
            {POINTS.map((p) => (
              <li key={p.n} className="pr-row">
                <span className="pr-row__n pm-num">{p.n}</span>
                <div className="pr-row__body">
                  <h3 className="pr-row__t">{p.t}</h3>
                  <p className="pr-row__d">{p.d}</p>
                </div>
                <span className="pr-row__q pm-num" aria-hidden="true">{p.q}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pr-answer">
          <div className="pr-answer__copy">
            <p className="pr-answer__kicker">The opposite</p>
            <p className="pr-answer__main">
              Pomera sells the opposite: a fixed rate, a verified view, and a bill only for what was delivered.
            </p>
          </div>

          <div className="pr-answer__viz">
            <div className="pr-bar" aria-hidden="true">
              <span className="pr-bar__rest">Meta and Google</span>
              <span className="pr-bar__pom">Pomera</span>
            </div>
            <div className="pr-bar__scale" aria-hidden="true">
              <span>0</span>
              <span>Your paid social budget</span>
              <span>100%</span>
            </div>
            <p className="pr-answer__note">
              Pomera doesn’t replace your Meta or Google ads. We suggest starting with <span style={{ whiteSpace: "nowrap" }}>10–20%</span> of your paid social budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
