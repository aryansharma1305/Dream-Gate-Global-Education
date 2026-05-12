import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UniversityDetail } from "@/components/pages/university-detail";
import { getUniversity, universities } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return universities.filter((university) => university.country === "kyrgyzstan").map((university) => ({ slug: university.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const university = getUniversity("kyrgyzstan", params.slug);
  if (!university) return {};
  return createMetadata({
    title: university.name,
    description: `${university.name} in ${university.city}, Kyrgyzstan: overview, fees, eligibility, hostel, and Dream Gate application support.`,
    path: `/kyrgyzstan/${university.slug}`,
    keywords: [university.name, `MBBS at ${university.name}`, `${university.city} medical university`, "MBBS in Kyrgyzstan"],
  });
}

export default function KyrgyzstanUniversityPage({ params }: { params: { slug: string } }) {
  const university = getUniversity("kyrgyzstan", params.slug);
  if (!university) notFound();
  return <UniversityDetail university={university} />;
}
