import type { Metadata } from "next";
import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiFileText,
  FiGitBranch,
  FiLock,
  FiMessageSquare,
  FiPhone,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { HeroGlow } from "@/components/shared/HeroGlow";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "One team, one platform, one monthly price. See how KeyLime sets up and runs your marketing system.",
};

const steps = [
  {
    number: "01",
    title: "Pick a system.",
    body: "Foundation, Growth, or Expansion. Each one is a complete working system the day it goes live — not a stripped-down preview of the next one up.",
  },
  {
    number: "02",
    title: "We onboard you in 4 to 8 weeks.",
    body: "Discovery, a written gameplan, setup, workflows, and integrations — with one point of contact the whole way through.",
  },
  {
    number: "03",
    title: "The system runs. We run the system.",
    body: "Your phones get answered faster. Reviews come in steadier. No-shows drop. You use the helpful parts; we handle the rest.",
  },
];

const foundationItems = [
  { icon: FiPhone, title: "Dedicated business number", body: "For texts and call routing." },
  { icon: FiLock, title: "SMS carrier registration", body: "The required setup that keeps your texts deliverable." },
  { icon: FiUser, title: "Private workspace", body: "Your contacts, messages, and workflows stay yours." },
  { icon: FiSettings, title: "Baseline workflows", body: "Reviews, confirmations, and follow-up start running at launch." },
  { icon: FiGitBranch, title: "Written gameplan", body: "What we will do, in what order, and why." },
  { icon: FiCheckCircle, title: "One point of contact", body: "A human who knows your business from setup onward." },
];

const managedWork = [
  "Build and tune lead capture, review, and follow-up workflows.",
  "Connect your booking software, customer list, and phone number.",
  "Monitor automations and fix what breaks before you notice.",
  "Optimize reminders, review pacing, and follow-up based on what works.",
  "Send the monthly report in plain English.",
  "Handle carrier compliance, deliverability, and platform updates.",
];

function PillLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] no-underline transition-transform duration-200 hover:-translate-y-0.5 ${
        dark
          ? "bg-sand-950 text-sand-950 hover:bg-sand-800"
          : "bg-lime-500 text-sand-950 hover:bg-lime-600"
      }`}
    >
      {children} <FiArrowRight aria-hidden="true" />
    </Link>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-sand-50 text-sand-950">
      <section className="relative border-b-4 border-sand-950 py-20 md:py-28">
        <HeroGlow className="-right-36 top-4 h-[500px] w-[500px]" />
        <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">How it works</p>
            <h1 className="max-w-[680px] font-brand text-[clamp(3rem,6vw,5.75rem)] font-black uppercase leading-[0.91] tracking-[-0.055em]">
              One team. One platform. <span className="text-lime-600">One monthly price.</span>
            </h1>
            <p className="mt-7 max-w-[590px] font-brand text-[17px] leading-[1.65] text-sand-700">
              You run the business. We run the marketing. Here&apos;s exactly how that works.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <PillLink href="/pricing">See pricing</PillLink>
              <a href="#consult" className="inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-8 hover:text-clay-600">
                Book Free Consult <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute inset-5 rounded-[44px] bg-lime-500" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[36px] border-4 border-sand-950 bg-sand-50 p-3 shadow-[10px_10px_0_0_#1f1b16]">
              <div className="flex items-center justify-between border-b-2 border-sand-200 px-3 py-3 font-brand text-xs font-bold uppercase tracking-[0.09em]">
                <span>Customer inbox</span><span className="h-2.5 w-2.5 rounded-full bg-lime-500" />
              </div>
              <div className="space-y-4 p-5">
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-sand-100 p-4 text-sm leading-relaxed text-sand-700">Hi — I missed your call. Looking for an AC quote.</div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-lime-500 p-4 text-sm font-medium leading-relaxed text-sand-950">Thanks for reaching out. We&apos;ll get you on the schedule.</div>
                <div className="flex items-center gap-3 rounded-2xl border-2 border-sand-200 p-4">
                  <FiCalendar className="shrink-0 text-lime-600" size={22} aria-hidden="true" />
                  <span className="text-sm font-semibold leading-snug">Appointment confirmation sent automatically</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-sand-950 bg-sand-100 bg-grid-pattern py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-14 ml-auto max-w-[690px] text-right">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">The process</p>
            <h2 className="font-brand text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.055em]">A working system in <span className="text-lime-600">three steps.</span></h2>
          </div>
          <div className="grid grid-cols-1 border-t-4 border-sand-950 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.number} className={`bg-sand-50 px-8 py-10 md:px-10 md:py-12 ${index > 0 ? "border-t-2 border-sand-950 lg:border-t-0 lg:border-l-2" : ""}`}>
                <p className="font-brand text-6xl font-black leading-none tracking-[-0.06em] text-lime-600">{step.number}</p>
                <h3 className="mt-7 font-brand text-xl font-extrabold uppercase leading-tight tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 max-w-[330px] text-[15px] leading-[1.7] text-sand-700">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[720px]">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">The foundation</p>
            <h2 className="font-brand text-[clamp(2.4rem,4.6vw,4.25rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">Every account starts with the same foundation.</h2>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.65] text-sand-700">Some things you need regardless of which system you pick. We build them in so you never have to think about them.</p>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {foundationItems.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border-2 border-sand-200 bg-sand-50 p-6 transition-colors hover:border-lime-500">
                <Icon size={25} className="text-lime-600" aria-hidden="true" />
                <h3 className="mt-5 font-brand text-base font-extrabold uppercase tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-700">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 font-brand text-xl font-bold tracking-[-0.03em] text-sand-950">That&apos;s the floor. Each system adds to it.</p>
        </div>
      </section>

      <section className="bg-sand-100 py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-6 lg:grid-cols-[5fr_7fr] lg:gap-0">
          <div className="lg:border-r-2 lg:border-sand-300 lg:pr-12">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Your side</p>
            <h2 className="font-brand text-[clamp(2.25rem,4vw,3.75rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">What you actually log into.</h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-sand-700">Three things. The rest runs without you.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                [FiMessageSquare, "The inbox", "Every message in one place."],
                [FiUser, "The CRM", "A contact list with memory."],
                [FiFileText, "The monthly report", "What happened and what comes next."],
              ].map(([Icon, title, body]) => {
                const CardIcon = Icon as typeof FiMessageSquare;
                return <article key={title as string} className="rounded-2xl bg-sand-50 p-5 shadow-sm"><CardIcon size={22} className="text-lime-600" aria-hidden="true" /><h3 className="mt-4 font-brand text-sm font-extrabold uppercase">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-sand-700">{body as string}</p></article>;
              })}
            </div>
            <p className="mt-8 font-brand text-lg font-bold leading-snug tracking-[-0.03em]">No new platform to learn. No certifications to chase. No software to maintain.</p>
          </div>

          <div className="lg:pl-14">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">Our side</p>
            <h2 className="font-brand text-[clamp(2.25rem,4vw,3.75rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">What we run for you.</h2>
            <p className="mt-5 max-w-[570px] text-[17px] leading-[1.65] text-sand-700">This is the part most agencies sell you as a list of services. We treat it as the work.</p>
            <ul className="mt-9 space-y-4" aria-label="What KeyLime manages">
              {managedWork.map((item) => <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-sand-700"><FiActivity className="mt-1 shrink-0 text-lime-600" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <blockquote className="mt-10 border-l-4 border-lime-500 pl-5 font-brand text-xl font-bold leading-snug tracking-[-0.03em]">When something needs a human, you talk to a human. When it doesn&apos;t, the system handles it.</blockquote>
          </div>
        </div>
      </section>

      <section id="consult" className="bg-sand-900 py-24 text-sand-50 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[710px]">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">What next</p>
            <h2 className="font-brand text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.055em]">Pick a system. Or ask us which one fits.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-sand-50 p-8 text-sand-950 md:p-10"><h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">Ready to pick a system?</h3><p className="mt-4 max-w-[440px] leading-[1.65] text-sand-700">Three systems. Three prices. Month-to-month. Move up or down as the business changes.</p><div className="mt-8"><PillLink href="/pricing" dark>See pricing</PillLink></div></article>
            <article className="rounded-3xl border border-lime-500/50 bg-sand-800 p-8 md:p-10"><h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">Not sure which one fits?</h3><p className="mt-4 max-w-[440px] leading-[1.65] text-sand-50/70">Free 30-minute consult. No pitch deck. We&apos;ll tell you which system fits and what it would take to get there.</p><div className="mt-8"><a href="https://calendly.com/keylime-marketing/discovery-call" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-sand-950 no-underline transition-transform hover:-translate-y-0.5">Book Free Consult <FiArrowRight aria-hidden="true" /></a></div></article>
          </div>
          <p className="mt-9 text-center text-sm text-sand-50/65">Still scoping the problem? <Link href="/calculators/missed-call-revenue" className="font-bold text-sand-50 underline decoration-lime-500 decoration-2 underline-offset-4">Calculate my missed-call revenue →</Link></p>
        </div>
      </section>
    </main>
  );
}
