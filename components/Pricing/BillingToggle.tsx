"use client";

import type { BillingMode } from "../../types";

interface BillingToggleProps {
  mode: BillingMode;
  setMode: (m: BillingMode) => void;
}

const OPTIONS: { id: BillingMode; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "lumpSum", label: "Lump Sum" },
];

export function BillingToggle({ mode, setMode }: BillingToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Billing mode"
      className="inline-flex w-fit gap-1 self-end border-2 border-sand-950 bg-sand-50 p-1"
    >
      {OPTIONS.map((opt) => {
        const active = mode === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(opt.id)}
            className={`min-h-[40px] cursor-pointer border-none px-5 py-2.5 font-brand text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-150 ${
              active
                ? "bg-clay-500 text-sand-50"
                : "bg-transparent text-sand-950"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
