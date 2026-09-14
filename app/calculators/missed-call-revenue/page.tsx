import type { Metadata } from "next";
import { RevenueCalculator } from "@/components/RevenueCalculator/RevenueCalculator";
import { seedFromSearchParams } from "@/data/estimatorHandoff";

export const metadata: Metadata = {
  title: "Missed-Call Revenue Calculator",
  description: "See what missed calls, slow replies, and a weak review profile could be costing your local business.",
};

/* Reading searchParams opts this route into dynamic rendering, which is what
   lets the hero widget's numbers be on screen in the first paint rather than
   popping in after hydration. */
export default async function MissedCallRevenueCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const seed = seedFromSearchParams(await searchParams);

  return (
    <main className="pt-8">
      <RevenueCalculator seed={seed} />
    </main>
  );
}
