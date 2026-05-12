import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Official MBBS Abroad Guidance for Indian Students",
  description:
    "Dream Gate Global Education offers transparent MBBS abroad counseling for Kyrgyzstan and Uzbekistan, built for NEET-qualified Indian students and parents.",
  path: "/",
  keywords: ["MBBS abroad for Indian students", "NEET qualified MBBS abroad", "MBBS abroad 2026 admissions"],
});

export default function Home() {
  return <HomePage />;
}
