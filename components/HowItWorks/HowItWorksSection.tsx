import { steps } from "../../data/steps";
import { SectionLabel } from "../shared/SectionLabel";
import "./HowItWorksSection.css";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      className="border-y-4 border-sand-950 bg-sand-100 bg-grid-pattern py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-16 text-right">
          <div className="flex justify-end">
            <SectionLabel text="Method" />
          </div>
          <h2
            id="hiw-heading"
            className="hiw-heading font-brand font-black uppercase text-sand-950"
          >
            From Audit to Results
            <br />
            In <span className="text-clay-500">three stages.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative overflow-hidden border-t-4 border-sand-950 bg-sand-50 px-10 py-12 ${
                i > 0 ? "lg:border-l-2 lg:border-l-sand-950" : ""
              }`}
            >
              <img
                src={step.illustration}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 h-[100px] w-[100px] object-contain"
              />
              <h3 className="step-number m-0 font-brand font-black tracking-[-0.04em] text-clay-500">
                {step.number}
              </h3>
              <h3 className="mt-6 mb-4 font-brand text-[16px] font-extrabold uppercase tracking-[0.04em] leading-[1.3] text-sand-950">
                {step.title}
              </h3>
              <p className="m-0 font-brand text-[14px] leading-[1.75] text-sand-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
