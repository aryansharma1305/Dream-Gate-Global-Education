import type { Metadata } from "next";
import { CountryPage } from "@/components/pages/country-page";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "MBBS in Uzbekistan",
  description: "Explore MBBS in Uzbekistan with Dream Gate Global Education: fees, universities, student life, and admission support.",
  path: "/uzbekistan",
  keywords: ["MBBS in Uzbekistan", "Uzbekistan medical universities", "MBBS Uzbekistan fees"],
});

export default function UzbekistanPage() {
  return <CountryPage countryKey="uzbekistan" />;
}
