import type { Metadata } from "next";
import { CountryPage } from "@/components/pages/country-page";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "MBBS in Kyrgyzstan",
  description: "Explore MBBS in Kyrgyzstan with Dream Gate Global Education: fees, universities, student life, and admission support.",
  path: "/kyrgyzstan",
  keywords: ["MBBS in Kyrgyzstan", "Kyrgyzstan medical universities", "MBBS Kyrgyzstan fees"],
});

export default function KyrgyzstanPage() {
  return <CountryPage countryKey="kyrgyzstan" />;
}
