import type { Metadata } from "next";
import { SystemPage } from "@/components/Systems/SystemPage";
export const metadata: Metadata = { title: "Foundation", description: "A managed marketing system for local businesses getting their footing. $99 per month, month-to-month." };
export default function FoundationPage() { return <SystemPage system="foundation" />; }
