import { SectionLabel } from "../shared/SectionLabel";
import { FaqAccordion } from "./FaqAccordion";
import "./FaqSection.css";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t-4 border-sand-950 bg-sand-100 bg-grid-pattern py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[8fr_4fr]">
        <div className="text-center lg:order-2">
          <div className="flex justify-center">
            <SectionLabel text="Questions" />
          </div>
          <h2
            id="faq-heading"
            className="faq-heading mb-4 font-brand font-black uppercase text-sand-950"
          >
            Questions We Get Asked A Lot.
          </h2>
          <a
            href="#contact"
            className="hidden items-center gap-2 bg-clay-500 px-5 py-3 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700 lg:inline-flex"
          >
            Still have questions?
          </a>
        </div>

        <div className="border-2 border-sand-950 bg-sand-50 px-10 py-2 lg:order-1">
          <FaqAccordion />
        </div>

        <div className="flex justify-center lg:hidden">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-clay-500 px-5 py-3 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
          >
            Still have questions?
          </a>
        </div>
      </div>
    </section>
  );
}
