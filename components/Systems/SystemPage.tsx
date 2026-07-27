import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiMapPin, FiSettings } from "react-icons/fi";
import { HeroGlow } from "@/components/shared/HeroGlow";
import { ParallaxBackground } from "./ParallaxBackground";
import { WhoItFitsSection } from "./WhoItFitsSection";

export type SystemKey = "foundation" | "growth" | "expansion";

const CALENDLY_URL = "https://calendly.com/keylime-marketing/discovery-call";

const systemContent = {
  foundation: {
    name: "Foundation", price: "$99", eyebrow: "The basics, handled", heading: "The marketing basics, in one working system.",
    intro: "Foundation gives a new or lean local business a professional place to catch leads, reply to customers, and earn reviews — without a stack of subscriptions to manage.",
    personaTitle: "Built for the operator getting established.", persona: "You need to look credible, keep track of the people who reach out, and stop losing messages in a personal phone. A big agency plan does not make sense yet. A working system does.",
    included: ["One-page website", "CRM and lead pipeline", "Review management", "Unified customer inbox", "Dedicated business number", "Required SMS registration", "Private workspace", "Baseline follow-up workflows"],
    addOns: "Voice Agents, Lead Nurture, Rewards, Database Reactivation, Google Business Profile management, additional automations, and chatbots can be added when the need shows up.",
    faq: [["Is Foundation a stripped-down trial?", "No. It is a complete, lean working system: a place to catch leads, manage messages, and build reviews. You can add to it or move systems later."], ["Can I keep my current website?", "Yes. Foundation is a fit for businesses that already have a site and want the marketing system around it. We will cover the practical setup in the consult."], ["Can I move to Growth later?", "Yes. Your contacts and configured workflows carry across, so changing systems does not mean starting over."]],
  },
  growth: {
    name: "Growth", price: "$195", eyebrow: "Most operators start here", heading: "The lead engine for businesses ready for more work.",
    intro: "Growth catches the call you miss, gets the reply out fast, makes booking easier, and gives your local search presence a real foundation.",
    personaTitle: "Built for businesses losing leads to slow follow-up.", persona: "The phone rings while you are on a job. Or booking lives in one app, messages in another, and reviews in a third. Growth gives you a lead engine without another system to operate.",
    included: ["Everything in Foundation", "3–5 page website", "Missed-call text-back and fast lead response", "Online booking", "Chatbots", "Appointment reminders", "Birthday outreach", "SEO Foundation"],
    addOns: "Add Voice Agents, Lead Nurture, Rewards, Database Reactivation, Google Business Profile management, additional automations, or chatbots when needed. For ads, full SEO, or custom web work, we write a real scope first.",
    faq: [["Why is Growth the common starting point?", "It combines the basic system with the tools that help a busy operator capture, reply to, and book more leads."], ["Do I have to replace my booking or field-service software?", "No. Keep the tools you use for booking, dispatch, and payments. We build the marketing system around them."], ["What does SEO Foundation mean?", "It is the starter local-search build: keyword mapping, citations, technical fundamentals, and Google Business Profile setup and improvement."]],
  },
  expansion: {
    name: "Expansion", price: "$495", eyebrow: "For the next stage", heading: "The full customer lifecycle, run for you.",
    intro: "Expansion pairs the lead engine with the stronger web presence, local visibility, follow-up, and retention work a growing business needs next.",
    personaTitle: "Built for businesses ready to take more local share.", persona: "You have a reputation to protect, capacity to grow, and a business that needs more than a lead engine. Expansion turns the website, local search, follow-up, and repeat-customer work into one managed system.",
    included: ["Everything in Growth", "Custom 5–10 page website", "Monthly blog content", "Lead nurture sequences", "Rewards and referrals", "Google Business Profile management", "Quarterly database reactivation", "Ongoing platform management"],
    addOns: "Ads management, full SEO programs, larger web projects, and complex workflow builds are scoped around the actual business before a price is set.",
    faq: [["Is the website included?", "Yes. Expansion includes a custom 5–10 page website, plus a blog and one new article each month."], ["What if I have multiple locations?", "Talk to us about per-location Expansion and reporting that compares the work across locations."], ["Can I add ads or a larger SEO program?", "Yes. Those are custom-scoped because the real work depends on your market, goals, and budget."]],
  },
} as const;

const systemBanners: Record<SystemKey, string> = {
  foundation: "/keylimerow.png",
  growth: "/keylimehalfrow.png",
  expansion: "/keylimefullrow.png",
};

const systemCheckIcons: Record<SystemKey, string> = {
  foundation: "/keylimewedge.png",
  growth: "/keylimehalf.png",
  expansion: "/keylime.png",
};

export function SystemPage({ system }: { system: SystemKey }) {
  const content = systemContent[system];
  return <main className="overflow-hidden bg-sand-50 text-sand-950">
    <section className="relative isolate overflow-hidden border-b-4 border-sand-950 py-20 md:py-28"><ParallaxBackground image="/background/keylimeLong.jpg" /><HeroGlow className="-left-32 -top-28 h-[460px] w-[460px]" /><HeroGlow className="-right-24 -bottom-32 h-[560px] w-[560px]" /><div className="relative z-10 mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[7fr_5fr] lg:items-end"><div><p className=" font-brand text-xs font-bold uppercase tracking-[.18em] text-lime-600">{content.eyebrow}</p><h1 className="mt-4 font-brand text-[clamp(3rem,6vw,5.7rem)] font-black uppercase leading-[.9] tracking-[-.06em]">{content.heading}</h1><p className="mt-7 max-w-[650px] text-[17px] leading-[1.7] text-sand-700">{content.intro}</p></div><div className="rounded-3xl bg-sand-950 p-8 text-sand-50 shadow-[10px_10px_0_0_#c2552d]"><p className="font-brand text-sm font-bold uppercase tracking-[.12em] text-lime-600">{content.name}</p><p className="mt-3 font-brand text-6xl font-black tracking-[-.06em]">{content.price}<span className="text-xl text-sand-50/65">/mo</span></p><p className="mt-3 text-sm leading-relaxed text-sand-50/65">$200 one-time setup · Month-to-month</p><a href={CALENDLY_URL} className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-[.06em] text-sand-950 no-underline hover:bg-lime-600">Book Free Consult <FiArrowRight aria-hidden="true" /></a></div></div></section>
    <section className="bg-sand-100 py-7"><div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6"><p className="font-brand text-sm font-bold uppercase tracking-[-.02em]">Not sure if {content.name} is right?</p><Link href="/calculators/missed-call-revenue" className="font-brand text-sm font-bold uppercase tracking-[.04em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-4">See what missed calls are costing you →</Link></div></section>
    <WhoItFitsSection personaTitle={content.personaTitle} persona={content.persona} bannerImage={systemBanners[system]} />
    <section className="bg-sand-100 py-24 md:py-32"><div className="mx-auto max-w-[1200px] px-6"><p className="text-center font-brand text-xs font-bold uppercase tracking-[.18em] text-lime-600">The system</p><h2 className="m-auto text-center mt-4 max-w-[700px] font-brand text-[clamp(2.3rem,4vw,4rem)] font-black uppercase leading-[.93] tracking-[-.055em]">Everything included.</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{content.included.map(item => <div key={item} className="rounded-2xl bg-sand-50 p-6 flex items-center justify-center"><Image src={systemCheckIcons[system]} alt="" width={22} height={22} className="h-[22px] w-auto shrink-0" aria-hidden="true" /><p className="pl-2 font-brand text-sm font-extrabold uppercase leading-snug">{item}</p></div>)}</div></div></section>
    <section className="py-24"><div className="mx-auto grid max-w-[1200px] gap-7 px-6 lg:grid-cols-2"><div className="rounded-3xl border-2 border-sand-200 p-8"><FiSettings className="text-lime-600" size={28} aria-hidden="true" /><h2 className="mt-6 font-brand text-2xl font-black uppercase tracking-[-.04em]">What you can add later.</h2><p className="mt-4 leading-[1.7] text-sand-700">{content.addOns}</p>{system !== "foundation" ? <Link href="/contact" className="mt-7 inline-flex font-brand text-sm font-bold uppercase tracking-[.05em] underline decoration-lime-500 decoration-2 underline-offset-4">Talk to us about custom work →</Link> : null}</div><div className="rounded-3xl bg-sand-950 p-8 text-sand-50"><FiClock className="text-lime-600" size={28} aria-hidden="true" /><h2 className="mt-6 font-brand text-2xl font-black uppercase tracking-[-.04em]">Live in 4 to 8 weeks.</h2><p className="mt-4 leading-[1.7] text-sand-50/70">We start with discovery, create your written gameplan, set up the system, connect what needs connecting, and build the workflows. One point of contact through the whole process.</p></div></div></section>
    <section className="bg-sand-100 py-24"><div className="mx-auto max-w-[900px] px-6"><p className="font-brand text-xs font-bold uppercase tracking-[.18em] text-lime-600">Questions about {content.name}</p><h2 className="mt-4 font-brand text-[clamp(2.2rem,4vw,3.6rem)] font-black uppercase leading-[.94] tracking-[-.055em]">A few straight answers.</h2><div className="mt-10 border-y-2 border-sand-950">{content.faq.map(([question, answer]) => <details key={question} className="group border-b-2 border-sand-950 last:border-0"><summary className="flex cursor-pointer list-none justify-between gap-6 py-6 font-brand text-[15px] font-bold uppercase"><span>{question}</span><span className="text-2xl text-lime-600 group-open:rotate-45">+</span></summary><p className="max-w-[720px] pb-7 leading-[1.7] text-sand-700">{answer}</p></details>)}</div></div></section>
    <section className="bg-sand-900 py-24 text-sand-50"><div className="mx-auto max-w-[900px] px-6 text-center"><FiMapPin className="mx-auto text-lime-600" size={28} aria-hidden="true" /><h2 className="mt-5 font-brand text-[clamp(2.3rem,5vw,4.5rem)] font-black uppercase leading-[.93] tracking-[-.055em]">Ready to talk through {content.name}?</h2><p className="mx-auto mt-6 max-w-[600px] leading-[1.7] text-sand-50/70">Book a free 30-minute consult. We will tell you plainly whether this system fits.</p><div className="mt-9 flex flex-wrap justify-center gap-5"><a href={CALENDLY_URL} className="inline-flex min-h-[50px] items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-[.06em] text-sand-950 no-underline">Book Free Consult <FiArrowRight aria-hidden="true" /></a><Link href="/pricing" className="inline-flex min-h-[50px] items-center rounded-full border-2 border-sand-50/60 px-6 py-3 text-sm font-bold uppercase tracking-[.06em] text-sand-50 no-underline">View comparison</Link></div></div></section>
  </main>;
}
