import type { Metadata } from "next";
import { TAGS, TOPICS, type Block } from "./data";
import "./bm.css";

/* Personal page: no nav link anywhere, hidden from search engines. Open it by typing /bm. */
export const metadata: Metadata = {
  title: "BM notes",
  robots: { index: false, follow: false, nocache: true },
};

function renderBlock(b: Block, i: number) {
  if (typeof b === "string") return <p key={i}>{b}</p>;
  if ("list" in b) {
    return (
      <ul key={i} className="bm-list">
        {b.list.map((t) => <li key={t}>{t}</li>)}
      </ul>
    );
  }
  return (
    <div key={i} className="bm-ex">
      {b.example.map((t, j) => <p key={j} className={j === 0 ? "bm-ex__h" : undefined}>{t}</p>)}
    </div>
  );
}

export default function BmPage() {
  const total = TOPICS.reduce((n, t) => n + t.qs.length, 0);
  return (
    <main className="bm">
      <header className="bm-head">
        <p className="bm-eyebrow">Personal notes · {TOPICS.length} topics · {total} sawal</p>
        <h1>Pomera ka business model</h1>
        <p className="bm-lede">
          Paisa kaise aata hai, kahan problem aati hai, aur uska solution. Topic chuno aur sawal kholo.
        </p>
        <div className="bm-legend">
          <span className="bm-tag bm-tag--site">{TAGS.site}</span>
          <span className="bm-tag bm-tag--idea">{TAGS.idea}</span>
          <span className="bm-tag bm-tag--todo">{TAGS.todo}</span>
        </div>
      </header>

      <div className="bm-grid">
        <nav className="bm-toc" aria-label="Syllabus">
          <p className="bm-toc__h">Syllabus</p>
          <ol>
            {TOPICS.map((t, i) => (
              <li key={t.id}>
                <a href={`#${t.id}`}><b>{String(i + 1).padStart(2, "0")}</b><span>{t.title}</span></a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="bm-body">
          {TOPICS.map((t, i) => (
            <section key={t.id} id={t.id} className="bm-topic">
              <p className="bm-topic__n">Topic {String(i + 1).padStart(2, "0")}</p>
              <h2>{t.title}</h2>
              <p className="bm-topic__b">{t.blurb}</p>
              {t.qs.map((qa) => (
                <details key={qa.q} className="bm-q">
                  <summary>
                    <span>{qa.q}</span>
                    {qa.tag ? <em className={`bm-tag bm-tag--${qa.tag}`}>{TAGS[qa.tag]}</em> : null}
                  </summary>
                  <div className="bm-a">{qa.a.map(renderBlock)}</div>
                </details>
              ))}
            </section>
          ))}
          <p className="bm-foot">
            Numbers jahan example hain wahan saaf likha hai. Asli rate, margin aur payout abhi tay hona baaki hai.
          </p>
        </div>
      </div>
    </main>
  );
}
