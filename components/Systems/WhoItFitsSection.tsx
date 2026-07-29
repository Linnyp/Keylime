interface WhoItFitsSectionProps {
  personaTitle: string;
  persona: string;
  /** Banner source for the thin lime strip. */
  bannerImage?: string;
}

/** "Who it fits" section for the system pages. */
export function WhoItFitsSection({
  personaTitle,
  persona,
  bannerImage = "/keylimerow.webp",
}: WhoItFitsSectionProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="font-brand text-xs font-bold uppercase tracking-[.18em] text-lime-600">
            Who it fits
          </p>
          <h2 className="mt-4 font-brand text-[clamp(2.3rem,4vw,4rem)] font-black uppercase leading-[.93] tracking-[-.055em]">
            {personaTitle}
          </h2>
        </div>
        <div className="flex flex-col-reverse gap-4 lg:flex-col lg:justify-end">
          {/* Thin lime banner, center-cropped. On wide screens it grows to fill
              whatever height the heading column leaves above the paragraph. */}
          <div className="relative aspect-[421/79] w-full overflow-hidden lg:aspect-auto lg:min-h-[60px] lg:flex-1">
            <img
              src={bannerImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <p className="text-[17px] leading-[1.75] text-sand-700">
            {persona}
          </p>
        </div>
      </div>
    </section>
  );
}
