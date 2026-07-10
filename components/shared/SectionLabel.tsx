interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center gap-2.5 font-brand text-[11px] font-bold uppercase tracking-[0.15em]">
      <span className="text-sand-950">{text}</span>
    </div>
  );
}
