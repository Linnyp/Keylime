import * as React from "react";

export interface LogoItemImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogoItemNode {
  node: React.ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export type LogoItem = LogoItemImage | LogoItemNode;

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoLoop: React.MemoExoticComponent<
  (props: LogoLoopProps) => React.ReactElement
>;

export default LogoLoop;
