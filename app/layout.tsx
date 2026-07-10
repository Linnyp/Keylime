import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
