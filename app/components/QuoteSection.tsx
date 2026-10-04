import "./QuoteSection.css";
import { PomeraMark } from "./pomeraMark";

export default function QuoteSection() {
  return (
    <section className="qt-section" aria-label="Founder quote">
      <figure className="qt-container">
        <blockquote className="qt-quote">
          &ldquo;You should know what your ad money buys before you spend it.{" "}
          <span className="qt-quote__muted">Not after the month is over.&rdquo;</span>
        </blockquote>

        <figcaption className="qt-author">
          <PomeraMark size={48} bg="#121210" radius={90} />
          <span className="qt-author__meta">
            <span className="qt-author__name">Dhiraj</span>
            <span className="qt-author__role">Co-founder, Pomera</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
