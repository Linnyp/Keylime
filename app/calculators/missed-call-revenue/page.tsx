import type { Metadata } from "next";
import { RevenueCalculator } from "@/components/RevenueCalculator/RevenueCalculator";

export const metadata: Metadata = {
  title: "Missed-Call Revenue Calculator",
  description: "See what missed calls, slow replies, and a weak review profile could be costing your local business.",
};

export default function MissedCallRevenueCalculatorPage() {
  return (
    <main>
      <RevenueCalculator />
    </main>
  );
}
