import type { Metadata } from "next";
import { SystemPage } from "@/components/Systems/SystemPage";
export const metadata: Metadata = { title: "Growth", description: "The managed lead engine for local service businesses. $195 per month, month-to-month." };
export default function GrowthPage() { return <SystemPage system="growth" />; }
