import "./QuoteSection.css";
import { PomeraMark } from "./pomeraMark";

/* Founder note. To finish it, set the full name and add a real photo:
   put the file in public/assets/founder/ and set FOUNDER.photo, e.g. "/assets/founder/dhiraj.jpg". */
const FOUNDER = {
  name: "Dhiraj",          // TODO: add the surname, e.g. "Dhiraj Sharma"
  role: "Co-founder, Pomera",
  photo: "",               // TODO: real photo. Empty falls back to the Pomera mark.
};

export default function QuoteSection() {
  return (
    <section className="qt-section" aria-label="Founder note">
      <figure className="qt-container">
        <p className="qt-label">From the founder</p>

        <blockquote className="qt-quote">
          &ldquo;You should know what your ad money buys before you spend it.{" "}
          <span className="qt-quote__muted">Not after the month is over.&rdquo;</span>
        </blockquote>

        <figcaption className="qt-author">
          {FOUNDER.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="qt-author__photo" src={FOUNDER.photo} alt={FOUNDER.name} width={56} height={56} />
          ) : (
            <PomeraMark size={48} bg="#121210" radius={90} />
          )}
          <span className="qt-author__meta">
            <span className="qt-author__name">{FOUNDER.name}</span>
            <span className="qt-author__role">{FOUNDER.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
