import type { Metadata } from "next";
import { SystemPage } from "@/components/Systems/SystemPage";
export const metadata: Metadata = { title: "Expansion", description: "The full managed customer lifecycle system for growing local businesses. $495 per month, month-to-month." };
export default function ExpansionPage() { return <SystemPage system="expansion" />; }
