import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMessageCircle, FiMove, FiUserCheck } from "react-icons/fi";
import { HeroGlow } from "@/components/shared/HeroGlow";
import { LimeRow } from "@/components/Pricing/LimeRow";
import { CALENDLY_URL } from "@/data/booking";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three managed marketing systems for local service businesses. Foundation from $99/month, Growth from $195/month, and Expansion from $495/month. Month-to-month, live in 4 to 8 weeks.",
};


const systems = [
  {
    name: "Foundation",
    price: "$99",
    positioning: "A real working system for businesses getting their footing.",
    forCopy: "New businesses, lean operators, or anyone who needs the basics in one place before adding more.",
    features: [
      "One-page website",
      "CRM and lead pipeline",
      "Review requests and reputation management",
      "Unified customer inbox",
      "Dedicated business number and baseline follow-up workflows",
    ],
  },
  {
    name: "Growth",
    price: "$195",
    positioning: "The lead engine.",
    forCopy: "Established home-service and beauty businesses that need to catch more leads, book more appointments, and stop losing work to slow follow-up.",
    features: [
      "Everything in Foundation",
      "A 3–5 page website",
      "Missed-call text-back and fast lead response",
      "Online booking, chatbots, and appointment reminders",
      "Birthday outreach",
      "SEO Foundation for your local search presence",
    ],
    featured: true,
  },
  {
    name: "Expansion",
    price: "$495",
    positioning: "The full customer lifecycle.",
    forCopy: "Growing operators ready for a stronger web presence, steady local visibility, and a system that helps turn first-time customers into regulars.",
    features: [
      "Everything in Growth",
      "Custom 5–10 page website and monthly blog content",
      "Lead nurture sequences",
      "Rewards and referral support",
      "Ongoing Google Business Profile management",
      "Quarterly database reactivation campaigns",
    ],
  },
];

const comparisonRows = [
  ["Website", "One-page website", "3–5 page website", "Custom 5–10 page website + blog"],
  ["CRM and lead pipeline", "Included", "Included", "Included"],
  ["Review management", "Included", "Included", "Included"],
  ["Unified inbox", "Included", "Included", "Included"],
  ["Fast lead response", "—", "Included", "Included"],
  ["Online booking", "—", "Included", "Included"],
  ["Chatbots", "—", "Included", "Included"],
  ["Appointment reminders", "—", "Included", "Included"],
  ["Birthday outreach", "—", "Included", "Included"],
  ["SEO Foundation", "—", "Included", "Included"],
  ["Lead nurture", "—", "—", "Included"],
  ["Rewards and referrals", "—", "—", "Included"],
  ["Google Business Profile management", "—", "—", "Included"],
  ["Database reactivation", "—", "—", "Quarterly"],
  ["Monthly blog content", "—", "—", "One article/month"],
];

const faqs = [
  {
    question: "What does the $200 setup fee cover?",
    answer:
      "The setup covers discovery, the written gameplan, your system configuration, the required SMS registration, baseline workflows, and integration work. There are no separate setup charges for the standard buildout.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. The three systems are month-to-month. You can move up or down as the business changes.",
  },
  {
    question: "Can I change systems later?",
    answer:
      "Yes. Your contacts and configured workflows carry across, so changing systems does not mean starting over.",
  },
  {
    question: "What if I already use booking or field-service software?",
    answer:
      "Keep it. We build the marketing system around the tools you use for booking, dispatch, and payments. We integrate; we do not replace.",
  },
  {
    question: "Why are some services quoted instead of listed at a fixed price?",
    answer:
      "A full SEO program, ad budget, custom website, or large workflow build can vary widely by market and scope. We quote the real work before you commit instead of posting a number that will not fit your business.",
  },
];

function CalendlyButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      className={`inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-sand-950 no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-600 ${className}`}
    >
      {children} <FiArrowRight aria-hidden="true" />
    </a>
  );
}

export default function PricingPage() {
  return (
    <main className="pt-8 overflow-hidden bg-sand-50 text-sand-950">
      <section className="relative overflow-hidden pt-28 pb-40 md:pt-28 md:pb-48">
        <HeroGlow className="left-[4%] top-0 h-[440px] w-[440px]" />
        <HeroGlow className="right-[4%] top-16 h-[380px] w-[380px]" />

        {/* Sits on the section break: clipped by the section's overflow, and on
            desktop it sinks further as the page scrolls. */}
        <LimeRow />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Simple, published pricing</p>
          <h1 className="mx-auto mt-5 max-w-[930px] font-brand text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">Three systems. <span className="text-lime-600">One monthly price.</span></h1>
          <p className="mx-auto mt-7 max-w-[660px] text-[17px] leading-[1.65] text-sand-700">Pick the system that fits today. You can move up or down as the business changes — without rebuilding everything from scratch.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5"><CalendlyButton>Book Free Consult</CalendlyButton><Link href="/test-calculator" className="inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-8 hover:text-clay-600">Calculate my missed-call revenue <FiArrowRight aria-hidden="true" /></Link></div>
          <p className="mt-8 font-brand text-sm font-bold uppercase tracking-[0.04em] text-sand-700">$200 one-time setup <span className="px-1.5 text-lime-600">·</span> Month-to-month <span className="px-1.5 text-lime-600">·</span> Live in 4 to 8 weeks</p>
        </div>
      </section>

      <section className="bg-sand-100 py-24 md:py-32" aria-labelledby="systems-heading">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-16 max-w-[700px] text-center"><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Choose your system</p><h2 id="systems-heading" className="mt-4 font-brand text-[clamp(2.4rem,5vw,4.4rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">Built for where the business is now.</h2></div>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {systems.map((system) => (
              <article key={system.name} className={`relative flex flex-col rounded-3xl p-8 md:p-9 ${system.featured ? "border-4 border-sand-950 bg-sand-950 text-sand-50 shadow-[0_16px_0_0_#c2552d]" : "border-2 border-sand-200 bg-sand-50 text-sand-950"}`}>
                {system.featured ? <span className="absolute -top-4 left-7 rounded-full bg-lime-500 px-4 py-2 font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-950">Most operators start here</span> : null}
                <h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">{system.name}</h3>
                <p className={`mt-2 font-brand text-[42px] font-black leading-none tracking-[-0.06em] ${system.featured ? "text-lime-600" : "text-lime-600"}`}>{system.price}<span className={`ml-1 text-base font-semibold tracking-normal ${system.featured ? "text-sand-50/65" : "text-sand-700"}`}>/mo</span></p>
                <p className={`mt-7 border-t pt-6 font-brand text-xl font-bold leading-snug tracking-[-0.03em] ${system.featured ? "border-sand-50/20" : "border-sand-200"}`}>{system.positioning}</p>
                <p className={`mt-4 min-h-[98px] text-sm leading-[1.7] ${system.featured ? "text-sand-50/72" : "text-sand-700"}`}>{system.forCopy}</p>
                <ul className={`mt-7 space-y-3 border-t pt-7 text-sm leading-relaxed ${system.featured ? "border-sand-50/20" : "border-sand-200"}`}>
                  {system.features.map((feature) => <li key={feature} className="flex gap-3"><FiCheck className="mt-1 shrink-0 text-lime-600" aria-hidden="true" /><span>{feature}</span></li>)}
                </ul>
                <div className="mt-9"><CalendlyButton className={system.featured ? "w-full" : "w-full"}>Ask about {system.name}</CalendlyButton></div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-[800px] text-center text-[15px] leading-[1.65] text-sand-700">Every system includes the same $200 one-time setup, full onboarding, a written gameplan, and ongoing platform management.</p>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="terms-heading">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:items-end">
          <div><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Clear from the start</p><h2 id="terms-heading" className="mt-4 font-brand text-[clamp(2.4rem,4.5vw,4.25rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">Setup is $200. The rest is month-to-month.</h2></div>
          <p className="max-w-[590px] text-[17px] leading-[1.7] text-sand-700">The setup fee covers discovery, your written gameplan, system setup, workflows, and the practical pieces that make business texting work. We build around the tools you already use, then go live in 4 to 8 weeks.</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-6 px-6 md:grid-cols-3">
          {[ [FiMove, "No long-term lock-in.", "Move up, move down, or cancel as the business changes."], [FiCheck, "Your system carries across.", "Your contacts and configured workflows move with you when you change systems."], [FiUserCheck, "One point of contact.", "You work with the same team from kickoff through the work that follows."] ].map(([Icon, title, body]) => { const PointIcon = Icon as typeof FiMove; return <article key={title as string} className="rounded-3xl border-2 border-sand-200 p-7"><PointIcon size={27} className="text-lime-600" aria-hidden="true" /><h3 className="mt-6 font-brand text-lg font-extrabold uppercase tracking-[-0.03em]">{title as string}</h3><p className="mt-3 text-sm leading-[1.7] text-sand-700">{body as string}</p></article>; })}
        </div>
      </section>

      <section className="bg-sand-100 py-24 md:py-32" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-[1200px] px-6"><div className="max-w-[720px]"><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Full comparison</p><h2 id="comparison-heading" className="mt-4 font-brand text-[clamp(2.4rem,4.6vw,4.25rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">See what each system includes.</h2><p className="mt-6 text-[17px] leading-[1.65] text-sand-700">Start with the work your business needs now. Add more when it makes sense.</p></div>
          {/* Below lg the 820px table cannot fit, so each row becomes its own
              card with the three systems stacked as label/value pairs. Same
              data, no horizontal scrolling. */}
          <div className="mt-12 space-y-4 lg:hidden">
            {comparisonRows.map(([capability, foundation, growth, expansion]) => (
              <div key={capability} className="overflow-hidden rounded-2xl border-2 border-sand-200 bg-sand-50">
                <p className="border-b-2 border-sand-950 px-5 py-4 font-brand text-sm font-extrabold uppercase leading-snug tracking-[-0.02em]">
                  {capability}
                </p>
                <dl className="m-0 divide-y divide-sand-200">
                  {[
                    ["Foundation", foundation],
                    ["Growth", growth],
                    ["Expansion", expansion],
                  ].map(([tier, value]) => (
                    <div
                      key={tier}
                      className={`flex items-baseline justify-between gap-5 px-5 py-3.5 ${tier === "Growth" ? "bg-sand-950/5" : ""}`}
                    >
                      <dt className="font-brand text-xs font-bold uppercase tracking-[0.1em] text-sand-600">{tier}</dt>
                      <dd
                        className={`m-0 text-right text-sm leading-snug ${
                          value === "—" ? "text-sand-600/70" : "font-semibold text-sand-950"
                        }`}
                      >
                        {value === "—" ? "Not included" : value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-14 hidden overflow-x-auto rounded-3xl border-2 border-sand-200 bg-sand-50 lg:block"><table className="min-w-[820px] w-full border-collapse text-left"><thead className="border-b-2 border-sand-950"><tr><th className="p-5 font-brand text-sm font-extrabold uppercase">Capability</th><th className="p-5 font-brand text-sm font-extrabold uppercase">Foundation<br /><span className="text-lime-600">$99/mo</span></th><th className="bg-sand-950 p-5 font-brand text-sm font-extrabold uppercase text-sand-50">Growth<br /><span className="text-lime-600">$195/mo</span></th><th className="p-5 font-brand text-sm font-extrabold uppercase">Expansion<br /><span className="text-lime-600">$495/mo</span></th></tr></thead><tbody>{comparisonRows.map(([capability, foundation, growth, expansion], index) => <tr key={capability} className={index % 2 ? "bg-sand-100/70" : ""}><th scope="row" className="border-b border-sand-200 p-5 font-brand text-sm font-bold">{capability}</th><td className="border-b border-sand-200 p-5 text-sm leading-relaxed text-sand-700">{foundation}</td><td className="border-b border-sand-200 bg-sand-950/5 p-5 text-sm font-semibold leading-relaxed text-sand-950">{growth}</td><td className="border-b border-sand-200 p-5 text-sm leading-relaxed text-sand-700">{expansion}</td></tr>)}</tbody></table></div>
          <p className="mt-7 max-w-[960px] text-sm leading-[1.7] text-sand-700">Every system also includes a dedicated business number, the required SMS registration, a private workspace, baseline workflows, and a written gameplan.</p>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="custom-work-heading"><div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-[7fr_5fr]"><div><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">More when you need it</p><h2 id="custom-work-heading" className="mt-4 font-brand text-[clamp(2.4rem,4.6vw,4.25rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">Need something beyond your system?</h2><p className="mt-6 max-w-[650px] text-[17px] leading-[1.7] text-sand-700">Add-ons are for individual capabilities you need now but do not need to bundle into a higher system yet. Bigger work gets a real scope and a real quote before you commit.</p></div><div className="rounded-3xl bg-sand-100 p-8 md:p-10"><h3 className="font-brand text-lg font-extrabold uppercase">Published add-ons</h3><p className="mt-3 text-sm leading-[1.7] text-sand-700">Voice Agents · Lead Nurture · Rewards · Database Reactivation · Google Business Profile management on lower systems · additional automations and chatbots.</p><h3 className="mt-8 font-brand text-lg font-extrabold uppercase">Custom-scoped work</h3><p className="mt-3 text-sm leading-[1.7] text-sand-700">Full SEO programs · Google and Meta ads management · custom website projects · ongoing content · large workflow builds.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-8 hover:text-clay-600">Talk to us about custom work <FiArrowRight aria-hidden="true" /></Link></div></div></section>

      <section className="bg-sand-100 py-24 md:py-32" aria-labelledby="pricing-faq-heading"><div className="mx-auto max-w-[920px] px-6"><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Pricing FAQ</p><h2 id="pricing-faq-heading" className="mt-4 font-brand text-[clamp(2.4rem,4.6vw,4.25rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">The questions people ask before they pick.</h2><div className="mt-12 border-y-2 border-sand-950">{faqs.map((faq) => <details key={faq.question} className="group border-b-2 border-sand-950 last:border-b-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-brand text-[15px] font-bold uppercase leading-[1.4] tracking-[0.01em] marker:content-none"><span>{faq.question}</span><span className="text-2xl text-lime-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-[720px] pb-7 text-[15px] leading-[1.75] text-sand-700">{faq.answer}</p></details>)}</div></div></section>

      <section className="bg-sand-900 py-24 text-sand-50 md:py-32"><div className="mx-auto max-w-[960px] px-6 text-center"><p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">One clear next step</p><h2 className="mx-auto mt-4 max-w-[790px] font-brand text-[clamp(2.5rem,5.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.06em]">Not sure which system fits? We&apos;ll help you pick.</h2><p className="mx-auto mt-7 max-w-[640px] text-[17px] leading-[1.7] text-sand-50/70">Book a free 30-minute consult. No pitch deck. We&apos;ll look at where leads are falling through, what you already use, and the system that makes sense from there.</p><div className="mt-10 flex flex-wrap justify-center gap-5"><CalendlyButton>Book Free Consult</CalendlyButton><Link href="/test-calculator" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-sand-50/60 px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-sand-50 no-underline transition-colors hover:border-lime-500 hover:text-lime-600">Calculate my missed-call revenue <FiArrowRight aria-hidden="true" /></Link></div><p className="mt-7 text-sm text-sand-50/55"><FiMessageCircle className="mr-2 inline text-lime-600" aria-hidden="true" />No pressure. Just a clear answer on what fits.</p></div></section>
    </main>
  );
}
