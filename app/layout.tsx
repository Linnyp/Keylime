import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // "optional" instead of "swap": the display headings are 900-weight with
  // heavy negative tracking, so the metric-matched fallback is still far enough
  // off that swapping reflowed whole sections (CLS 0.22 on /how-it-works). With
  // "optional" the browser never swaps mid-page, so those shifts disappear.
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Linax Digital — Digital Marketing Agency, Cape Coral FL",
    template: "%s | Linax Digital",
  },
  description:
    "Founder-led digital marketing agency in Southwest Florida. Websites, Local SEO, Google & Meta Ads, and Reputation Management for local service businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
