import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/pages/page-hero";
import { UniversityCard } from "@/components/pages/university-card";
import { images, universities } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Partner Universities",
  description: "Explore Dream Gate Global Education partner universities in Kyrgyzstan and Uzbekistan.",
  path: "/universities",
  keywords: ["NMC approved universities abroad", "partner medical universities", "MBBS abroad university list"],
});

export default function UniversitiesPage() {
  const kyrgyzstan = universities.filter((university) => university.country === "kyrgyzstan");
  const uzbekistan = universities.filter((university) => university.country === "uzbekistan");
  const countryGroups = [
    {
      id: "kyrgyzstan",
      title: "Kyrgyzstan Partner Universities",
      flag: "🇰🇬",
      count: kyrgyzstan.length,
      universities: kyrgyzstan,
    },
    {
      id: "uzbekistan",
      title: "Uzbekistan Partner Universities",
      flag: "🇺🇿",
      count: uzbekistan.length,
      universities: uzbekistan,
    },
  ];

  return (
    <>
      <PageHero
        title="Partner Universities"
        eyebrow="10 MBBS options"
        description="Compare tuition, city, duration, and country fit across Dream Gate's Kyrgyzstan and Uzbekistan university network."
        image={`${images.university}?auto=format&fit=crop&w=1600&q=85`}
      />
      <section className="bg-white py-12">
        <div className="container-site">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-navy/10 bg-soft p-5">
              <p className="font-heading text-4xl font-black text-navy">{universities.length}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-gold">Total Universities</p>
            </div>
            <a href="#kyrgyzstan" className="gold-focus rounded-2xl border border-navy/10 bg-soft p-5 transition hover:border-gold">
              <p className="font-heading text-4xl font-black text-navy">🇰🇬 {kyrgyzstan.length}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-gold">Kyrgyzstan Universities</p>
            </a>
            <a href="#uzbekistan" className="gold-focus rounded-2xl border border-navy/10 bg-soft p-5 transition hover:border-gold">
              <p className="font-heading text-4xl font-black text-navy">🇺🇿 {uzbekistan.length}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-gold">Uzbekistan Universities</p>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-navy/10 bg-navy p-6 text-white">
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Quick University List</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {universities.map((university, index) => (
                <Link
                  key={university.slug}
                  href={`/${university.country}/${university.slug}`}
                  className="gold-focus flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-gold hover:text-gold"
                >
                  <span>
                    <span className="mr-3 text-gold">{String(index + 1).padStart(2, "0")}</span>
                    {university.flag} {university.name}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {countryGroups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-32 bg-soft py-20">
          <div className="container-site">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-bold uppercase tracking-[0.24em] text-gold">
                  {group.flag} {group.count} Universities
                </p>
                <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">{group.title}</h2>
              </div>
              <Link href={`/${group.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                View country guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.universities.map((university) => (
                <UniversityCard key={university.slug} university={university} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
