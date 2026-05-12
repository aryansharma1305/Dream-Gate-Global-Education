import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { SmartImage } from "@/components/ui/smart-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images, type University } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd, siteConfig } from "@/lib/seo";

export function UniversityDetail({ university }: { university: University }) {
  const feeRows = [
    ["Year 1", university.tuition, "$900", "$1,200"],
    ["Year 2", university.tuition, "$900", "$1,200"],
    ["Year 3", university.tuition, "$900", "$1,250"],
    ["Year 4", university.tuition, "$950", "$1,250"],
    ["Year 5", university.tuition, "$950", "$1,300"],
    ["Year 6", university.tuition, "$950", "$1,300"],
  ];

  const gallery = [university.image, `${images.university}?auto=format&fit=crop&w=900&q=80`, `${images.library}?auto=format&fit=crop&w=900&q=80`, `${images.classRoom}?auto=format&fit=crop&w=900&q=80`];
  const universityPath = `/${university.country}/${university.slug}`;
  const universityJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": absoluteUrl(`${universityPath}#university`),
    name: university.name,
    url: absoluteUrl(universityPath),
    image: university.image.startsWith("http") ? university.image : absoluteUrl(university.image),
    address: {
      "@type": "PostalAddress",
      addressLocality: university.city,
      addressCountry: university.countryLabel,
    },
    educationalCredentialAwarded: "MBBS",
    knowsAbout: ["Medicine", "MBBS", "International medical education"],
    provider: {
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          universityJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Universities", path: "/universities" },
            { name: university.countryLabel, path: `/${university.country}` },
            { name: university.name, path: universityPath },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-navy pt-36 text-white">
        <div className="absolute inset-0">
          <SmartImage src={university.image} alt={university.name} fill sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/25" />
        <div className="container-site relative z-10 py-24">
          <p className="font-bold uppercase tracking-[0.24em] text-gold">
            {university.flag} {university.city}, {university.countryLabel}
          </p>
          <h1 className="mt-5 max-w-5xl font-heading text-5xl font-black leading-tight md:text-7xl">{university.name}</h1>
          <ButtonLink href="/apply" className="mt-8">
            Apply to This University
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container-site grid gap-3 md:grid-cols-5">
          {[
            ["Established", university.established],
            ["Medium", university.medium],
            ["Duration", university.duration],
            ["Annual Tuition", university.tuition],
            ["Recognition", university.recognition],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-navy/10 bg-soft p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-charcoal/45">{label}</p>
              <p className="mt-2 font-heading text-lg font-extrabold text-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-soft py-20">
        <div className="container-site">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="fees">Fee Structure</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="hostel">Hostel</TabsTrigger>
              <TabsTrigger value="why">Why This University</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-5 rounded-2xl bg-white p-6 shadow-navy md:grid-cols-2">
                {university.overview.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-charcoal/75">{paragraph}</p>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fees">
              <div className="overflow-hidden rounded-2xl bg-white shadow-navy">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4">Year</th>
                      <th className="p-4">Tuition</th>
                      <th className="p-4">Hostel estimate</th>
                      <th className="p-4">Food estimate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/10">
                    {feeRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell} className="p-4 font-semibold text-charcoal/75">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="eligibility">
              <Checklist items={["NEET qualification required", "50% in Physics, Chemistry, Biology for general category", "Age 17+ by admission year", "Valid passport required for admission and visa filing"]} />
            </TabsContent>
            <TabsContent value="hostel">
              <div className="rounded-2xl bg-white p-6 leading-8 text-charcoal/75 shadow-navy">
                Hostel planning depends on university allocation, room type, food preference, and arrival date. Dream Gate shares a pre-departure checklist covering room essentials, local SIM, food planning, medical insurance, and parent communication.
              </div>
            </TabsContent>
            <TabsContent value="why">
              <Checklist items={university.why} />
            </TabsContent>
          </Tabs>
          <div className="mt-16">
            <h2 className="font-heading text-3xl font-black text-navy">Photo Gallery</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative h-52 overflow-hidden rounded-2xl shadow-navy">
                  <SmartImage src={image} alt={`${university.name} campus ${index + 1}`} fill sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 rounded-2xl bg-navy p-8 text-white shadow-navy">
            <h2 className="font-heading text-3xl font-black">Want a fitment check for {university.name}?</h2>
            <p className="mt-3 text-white/70">Share your NEET score, PCB percentage, preferred budget, and parent questions.</p>
            <ButtonLink href="/apply" className="mt-6">
              Apply to This University
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-navy md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-xl bg-soft p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
          <p className="font-semibold leading-7 text-charcoal/75">{item}</p>
        </div>
      ))}
    </div>
  );
}
