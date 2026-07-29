import type { Metadata } from "next";
import { RevenueCalculator } from "@/components/RevenueCalculator/RevenueCalculator";
import "./test-palette.css";

export const metadata: Metadata = {
  title: "Revenue Loss Calculator — KeyLime Demo",
  description:
    "Interactive demo of the KeyLime revenue-loss calculator. Three modules — missed calls, reputation, speed-to-lead — feeding one running total.",
};

export default function RevenueCalculatorTestPage() {
  return (
    <main className="pt-8 key-lime-theme">
      <RevenueCalculator />
    </main>
  );
}
