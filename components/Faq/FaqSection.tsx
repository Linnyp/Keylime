import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { FaqAccordion } from "./FaqAccordion";
import "./FaqSection.css";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-sand-50 py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[8fr_4fr]">
        <div className="text-center lg:order-2 lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <SectionLabel text="Questions" />
          </div>
          <h2
            id="faq-heading"
            className="faq-heading mb-6 font-brand font-black text-sand-950"
          >
            Questions we get asked a lot.
          </h2>
          <div className="hidden lg:block">
            <PrimaryButton href="/contact#contact-form">Still have questions?</PrimaryButton>
          </div>
        </div>

        <div className="rounded-3xl border border-sand-200 bg-white px-8 py-2 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] lg:order-1">
          <FaqAccordion />
        </div>

        <div className="flex justify-center lg:hidden">
          <PrimaryButton href="/contact#contact-form">Still have questions?</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
