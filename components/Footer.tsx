const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#systems" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LOGO_SRC = "/keylimelogolite.webp";

export default function Footer() {
  return (
    <footer className="border-t border-sand-50/15 bg-sand-900 pt-16 pb-10">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="/"
              aria-label="KeyLime home"
              className="inline-block max-w-[110px]"
            >
              <img
                src={LOGO_SRC}
                alt="KeyLime"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </a>
            <p className="m-0 max-w-[320px] font-brand text-[13px] leading-[1.6] text-sand-50/80">
              Local expertise. Modern tools. Built by someone who does the work.
            </p>
            <p className="m-0 font-brand text-[11px] italic text-sand-50/60">
              [REPLACE: LinkedIn, Instagram — add handles when social profiles
              are live]
            </p>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link font-brand text-[11px] font-semibold uppercase tracking-[0.1em] text-sand-50/70 no-underline transition-colors duration-150 hover:text-lime-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sand-50/20 pt-6">
          <p className="m-0 font-brand text-[11px] uppercase tracking-[0.08em] text-sand-50/60">
            &copy; 2026 Linax Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="block h-0.5 w-2 bg-sand-50/40" />
            <span className="block h-0.5 w-4 bg-lime-500" />
            <span className="block h-0.5 w-2 bg-sand-50/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
