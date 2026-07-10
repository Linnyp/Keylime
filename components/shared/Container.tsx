import type { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Centered max-width wrapper used by every section. */
export function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
