import { CONTACT_EMAIL, whatsappLink } from "../lib/contact";

interface LegalNoticeProps {
  title: string;
  intro: string;
  points?: string[];
}

/* Placeholder for legal pages until Pomera's own documents are published. */
export default function LegalNotice({ title, intro, points }: LegalNoticeProps) {
  return (
    <section className="mx-auto w-full max-w-[760px] px-5 pt-16 pb-24 text-[#ededed]">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#9a9a95]">Pomera Technologies Pvt. Ltd.</p>
      <h1 className="mt-3 text-[clamp(30px,5vw,44px)] font-medium leading-[1.05] tracking-[-0.035em]">{title}</h1>
      <p className="mt-5 text-[18px] leading-[1.55] text-[#b8b8b2]">{intro}</p>

      {points && points.length > 0 && (
        <ul className="mt-8 grid gap-3">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-[16px] font-medium leading-[1.45]">
              <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#C8F135]" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 rounded-xl border border-[#2A2B27] bg-[#232422] p-5 text-[15px] leading-[1.5]">
        <p className="font-medium">Questions in the meantime?</p>
        <p className="mt-1 text-[#b8b8b2]">
          Email <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or{" "}
          <a className="underline" href={whatsappLink("Hi Pomera Team, I have a question about your terms.")} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.
          A real person replies.
        </p>
      </div>
    </section>
  );
}
