"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/pages/page-hero";
import { UniversityCard } from "@/components/pages/university-card";
import { CountryKey, getCountry, universities } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export function CountryPage({ countryKey }: { countryKey: CountryKey }) {
  const country = getCountry(countryKey)!;
  const schools = universities.filter((university) => university.country === countryKey);
  const countryPath = `/${country.key}`;
  const countryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl(`${countryPath}#webpage`),
    name: `MBBS in ${country.name}`,
    url: absoluteUrl(countryPath),
    description: `Explore ${schools.length} Dream Gate partner universities in ${country.name}.`,
    publisher: {
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: schools.length,
      itemListElement: schools.map((school, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/${school.country}/${school.slug}`),
        name: school.name,
      })),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          countryJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: `MBBS in ${country.name}`, path: countryPath },
          ]),
        ]}
      />
      <PageHero
        title={`MBBS in ${country.name}`}
        eyebrow={`${country.flag} ${country.label}`}
        description={`Explore ${schools.length} Dream Gate partner universities with transparent tuition, hostel, eligibility, and parent-friendly planning.`}
        image={country.image}
      />
      <section className="bg-soft py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Why Study Here</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">A practical destination for Indian medical aspirants.</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {country.bullets.map((bullet) => (
              <motion.div
                key={bullet}
                variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
                className="flex gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-navy"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p className="font-semibold leading-7 text-charcoal/75">{bullet}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.24em] text-gold">Partner Universities</p>
              <h2 className="mt-4 font-heading text-4xl font-black text-navy">All {country.name} options</h2>
            </div>
            <ButtonLink href="/apply">
              Apply for Shortlisting
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schools.map((university) => (
              <UniversityCard key={university.slug} university={university} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-soft py-20">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-white shadow-navy">
            <h2 className="font-heading text-3xl font-black">Cost comparison</h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/15">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr><th className="p-4 text-white/60">Fees from</th><td className="p-4 font-bold text-gold">{country.feesFrom}</td></tr>
                  <tr><th className="p-4 text-white/60">Course duration</th><td className="p-4 font-bold">{country.duration}</td></tr>
                  <tr><th className="p-4 text-white/60">Partner universities</th><td className="p-4 font-bold">{country.partners}</td></tr>
                  <tr><th className="p-4 text-white/60">FMGE pass range</th><td className="p-4 font-bold">{country.fmge}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-navy">
            <h2 className="font-heading text-3xl font-black text-navy">Student life</h2>
            <p className="mt-4 leading-8 text-charcoal/70">
              Dream Gate helps students prepare for climate, hostel life, local travel, academic expectations, food planning, and parent communication before departure. The goal is a smoother first semester, not just a completed admission file.
            </p>
            <ButtonLink href="/apply" className="mt-7">
              Start Counseling
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
