"use client";

import { useState, type FormEvent } from "react";

/* Netlify Forms: submissions POST to the static skeleton in
   public/__forms.html, which is what Netlify detected at deploy time. Posting
   to /contact itself would hit the Next.js function and never be captured.
   Field names here must match that file. */
const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";

const inputClass = "mt-2 w-full rounded-xl border-2 border-sand-200 bg-sand-50 px-4 py-3 text-sand-950 outline-none focus:border-lime-500";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => body.append(key, String(value)));
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-sand-100 p-7 md:p-9">
        <h3 className="font-brand text-2xl font-black uppercase">Thanks, we got it.</h3>
        <p className="mt-4 leading-[1.7] text-sand-700">We respond within 1–2 business days with a written scope and price.</p>
      </div>
    );
  }

  return (
    <form name={FORM_NAME} method="POST" onSubmit={handleSubmit} className="rounded-3xl bg-sand-100 p-7 md:p-9">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot — hidden from people, filled in by bots. */}
      <p hidden>
        <label>Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold">Name<input required name="name" className={inputClass}/></label>
        <label className="text-sm font-bold">Business name<input required name="business" className={inputClass}/></label>
        <label className="text-sm font-bold">Industry<select name="industry" className={inputClass}><option>Home Services</option><option>Beauty & Personal Services</option><option>Other</option></select></label>
        <label className="text-sm font-bold">Phone<input name="phone" type="tel" className={inputClass}/></label>
        <label className="text-sm font-bold md:col-span-2">Email<input required name="email" type="email" className={inputClass}/></label>
        <label className="text-sm font-bold md:col-span-2">What are you looking for?<select name="projectType" className={inputClass}><option>Discovery call (general)</option><option>Custom SEO program</option><option>Custom Google/Meta Ads management</option><option>Custom Webflow website</option><option>Large workflow / automation build</option><option>Something else</option></select></label>
        <label className="text-sm font-bold md:col-span-2">A few details<textarea name="message" rows={5} className={inputClass}/></label>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-7 rounded-full bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-[.06em] text-sand-950 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send my details"}
      </button>
      {status === "error" && (
        <p role="alert" className="mt-4 text-sm leading-relaxed text-red-700">Something went wrong sending your details. Please try again, or book a time above.</p>
      )}
    </form>
  );
}
