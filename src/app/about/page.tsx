import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/pages/page-hero";
import { images } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About Dream Gate Global Education, an international education consultancy and student recruitment organization.",
  path: "/about",
  keywords: ["about Dream Gate Global Education", "international education consultancy", "MBBS admission consultancy"],
});

const services = [
  "International student recruitment",
  "University promotion and branding",
  "Academic partnership development",
  "Student counseling and admissions",
  "Visa assistance and onboarding",
  "International educational marketing",
  "MBBS admission consultancy",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Your Dream. Our Gateway."
        eyebrow="About Dream Gate Global Education"
        description="An international education consultancy and student recruitment organization dedicated to promoting higher education opportunities globally."
        image={`${images.students}?auto=format&fit=crop&w=1600&q=85`}
      />
      <section className="bg-soft py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-4xl font-black text-navy">
              Connecting students with globally recognized universities.
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              Dream Gate Global Education is an international education consultancy and student recruitment organization dedicated to promoting higher education opportunities globally.
            </p>
            <p className="mt-4 leading-8 text-charcoal/70">
              Through our professional network and market expertise, we aim to connect students with globally recognized universities that provide quality education at affordable costs.
            </p>
            <ButtonLink href="/apply" className="mt-7">
              Book Free Counseling
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
            <h3 className="font-heading text-2xl font-black text-navy">Our organization specializes in</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex gap-3 rounded-xl bg-soft p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm font-semibold leading-6 text-charcoal/75">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Counseling Approach</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">
              Transparent guidance before admission pressure.
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              For MBBS admissions, our counseling process starts with NEET qualification, PCB eligibility, family budget, preferred city environment, and recognition concerns.
            </p>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl border border-navy/10 bg-soft p-6 shadow-navy">
            <AccordionItem value="mission">
              <AccordionTrigger>Our mission</AccordionTrigger>
              <AccordionContent>
                Make global higher education and MBBS abroad planning transparent, affordable, and parent-friendly for Indian students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="method">
              <AccordionTrigger>How we shortlist</AccordionTrigger>
              <AccordionContent>
                We compare recognition pathway, academic fit, annual tuition, hostel availability, city comfort, student support, and family budget before recommending universities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>What support continues after admission?</AccordionTrigger>
              <AccordionContent>
                Document preparation, admission letter coordination, visa checklist, onboarding, pre-departure briefing, and arrival support are part of the process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
