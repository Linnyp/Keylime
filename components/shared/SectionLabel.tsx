interface SectionLabelProps {
  text: string;
  /** Use on dark (charcoal) surfaces. */
  light?: boolean;
}

/** Editorial eyebrow — Inter uppercase micro-label with a short lime rule. */
export function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div className={`wf-eyebrow mb-6 ${light ? "wf-eyebrow-light" : ""}`}>
      <span>{text}</span>
    </div>
  );
}
