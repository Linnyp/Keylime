"use client";

import type { ServiceItem } from "../../types";
import { ServiceIcon } from "../shared/icons";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group flex h-full cursor-default flex-col gap-6 border-2 border-sand-950 bg-sand-50 p-9 transition-colors duration-150 hover:bg-sand-950">
      {/* Top row: icon | title | number */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center">
          <ServiceIcon icon={service.icon} />
        </div>
        <span className="text-center font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
          {service.title}
        </span>
      </div>

      <h3 className="m-0 text-center font-brand text-[22px] font-extrabold leading-[1.25] tracking-[-0.01em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
        {service.hook}
      </h3>

      <p className="m-0 font-brand text-[14px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-sand-50/75">
        {service.description}
      </p>

      <a
        href="#contact"
        className="mt-auto self-start font-brand text-[14px] font-bold text-clay-500 underline underline-offset-4"
      >
        More about {service.title.toLowerCase()} →
      </a>
    </article>
  );
}
