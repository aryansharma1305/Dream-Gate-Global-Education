import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, Globe2, Handshake, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/pages/page-hero";
import { images } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "University Partnership Proposal",
  description:
    "Strategic collaboration proposal for medical faculty development and international MBBS student recruitment by Dream Gate Global Education.",
  path: "/partnership",
  keywords: ["university recruitment partner", "international student recruitment", "medical faculty partnership"],
});

const objectives = [
  {
    title: "Establish and strengthen the Medical Faculty",
    points: ["Support international promotion of the medical faculty", "Assist in attracting international medical aspirants", "Enhance global visibility of the university"],
  },
  {
    title: "International student recruitment",
    points: ["India", "Nepal", "Bangladesh", "Pakistan", "African countries", "Middle East countries"],
  },
  {
    title: "Increase university revenue",
    points: ["Generate sustainable tuition-based revenue through international admissions", "Create long-term financial growth opportunities for the university"],
  },
  {
    title: "Academic internationalization",
    points: ["Build the university's international reputation", "Develop multicultural academic environments"],
  },
  {
    title: "Long-term strategic growth",
    points: ["Expand yearly student intake", "Postgraduate medical programs"],
  },
];

const dreamGateResponsibilities = [
  {
    title: "Marketing & Promotion",
    points: ["Promote the university internationally", "Conduct seminars, webinars, and educational expos", "Develop digital marketing campaigns", "Promote MBBS programs through social media and educational platforms"],
  },
  {
    title: "Student Recruitment",
    points: ["Counsel eligible students", "Process applications and documentation", "Coordinate admission procedures"],
  },
  {
    title: "Student Support Services",
    points: ["Visa applications", "Travel arrangements", "Airport pickup coordination", "Hostel arrangements", "Pre-departure orientation"],
  },
  {
    title: "Brand Development",
    points: ["Build the university's international image in target markets", "Increase online and offline visibility"],
  },
];

const universityResponsibilities = [
  {
    title: "Academic Responsibilities",
    points: ["Provide quality medical education", "Maintain international academic standards", "Ensure proper clinical training facilities"],
  },
  {
    title: "Infrastructure",
    points: ["Classrooms", "Laboratories", "Libraries", "Hostel facilities", "Clinical training opportunities"],
  },
  {
    title: "Regulatory Compliance",
    points: ["Ministry of Education regulations", "Ministry of Health requirements", "International medical education standards"],
  },
  {
    title: "Student Welfare",
    points: ["Support international students during their studies", "Maintain safe and student-friendly campus environments"],
  },
];

const collaborationStructure = [
  "Official Recruitment Partnership Agreement",
  "International Promotion Rights",
  "Authorized Admission Representation",
  "Joint Marketing Activities",
  "Long-Term Strategic Cooperation",
  "Conducting Joint Teaching Environment",
];

const advantages = [
  {
    title: "Increased International Recognition",
    text: "The partnership will help establish the university as an emerging destination for MBBS education.",
  },
  {
    title: "Sustainable Revenue Growth",
    text: "International student admissions will contribute significantly to university revenue and infrastructure development.",
  },
  {
    title: "Global Student Diversity",
    text: "Students from multiple countries will enrich the university's academic environment.",
  },
  {
    title: "Strong International Marketing Presence",
    text: "Dream Gate Global Education will actively market the university in multiple countries.",
  },
  {
    title: "Long-Term Expansion Opportunities",
    text: "Future opportunities may include international exchange programs, joint academic conferences, research collaborations, and international affiliations.",
  },
];

const recommendations = [
  {
    title: "English-Medium MBBS Program",
    text: "A fully English-medium curriculum is highly important for international recruitment.",
  },
  {
    title: "Modern Website & Digital Presence",
    text: "A professional international website dedicated to the medical faculty should include admission information, fee structure, hostel details, faculty profiles, and clinical training information.",
  },
  {
    title: "International Student Office",
    text: "Establish a dedicated office for international admissions, visa support, and student welfare.",
  },
  {
    title: "Hospital Collaborations",
    text: "Develop partnerships with teaching hospitals for strong clinical exposure.",
  },
  {
    title: "Student Accommodation",
    text: "Provide safe and comfortable hostel facilities with international standards.",
  },
];

const nextSteps = [
  "Initial discussion meeting between both parties",
  "Review of university medical faculty infrastructure",
  "Finalization of partnership terms",
  "Signing of Memorandum of Understanding (MoU)",
  "Launch of international marketing campaigns",
  "Start of admissions process for the upcoming academic session",
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        title="Strategic University Collaboration Proposal"
        eyebrow="Medical Faculty + International MBBS Recruitment"
        description="A proposed academic and recruitment partnership between Dream Gate Global Education and Naryn State University named after S. Naamatov."
        image={`${images.university}?auto=format&fit=crop&w=1600&q=85`}
      />

      <section className="bg-soft py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-navy p-8 text-white shadow-navy">
            <p className="font-bold uppercase tracking-[0.22em] text-gold">Proposal for Strategic Collaboration</p>
            <h2 className="mt-4 font-heading text-4xl font-black leading-tight">
              Establishment of Medical Faculty & International MBBS Student Recruitment Partnership
            </h2>
            <dl className="mt-8 grid gap-4 text-sm">
              <InfoRow label="Submitted by" value="Dream Gate Global Education" />
              <InfoRow label="Submitted to" value="Naryn State University named after S. Naamatov" />
              <InfoRow label="Date" value="May 2026" />
              <InfoRow label="Authorized signatory" value="Dr. Shivam Kumar" />
            </dl>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-navy">
            <p className="font-bold uppercase tracking-[0.22em] text-gold">Subject</p>
            <h2 className="mt-4 font-heading text-3xl font-black text-navy">
              Proposal for Collaboration to Develop Medical Faculty and International MBBS Student Admissions
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              Dream Gate Global Education proposes strategic collaboration with Naryn State University named after S. Naamatov for the establishment, development, and international promotion of the Medical Faculty, especially for MBBS education targeting Indian and other international students.
            </p>
            <p className="mt-4 leading-8 text-charcoal/70">
              With experience in international student recruitment, educational marketing, and global academic partnerships, this collaboration can strengthen the university&apos;s international presence and create a sustainable pathway for high-quality medical education in Kyrgyzstan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Executive Summary</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">A long-term international medical education ecosystem.</h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              This proposal outlines a strategic academic and recruitment partnership between Naryn State University named after S. Naamatov and Dream Gate Global Education. Dream Gate proposes to act as an official international recruitment and promotional partner for the university.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <SummaryCard icon={<Building2 />} title="Medical Faculty Development" text="Support development and strengthening of the Medical Faculty." />
            <SummaryCard icon={<Users />} title="Student Recruitment" text="Recruit Indian and international students for MBBS and related medical programs." />
            <SummaryCard icon={<Globe2 />} title="Global Recognition" text="Position the university as a destination for affordable, quality medical education." />
            <SummaryCard icon={<Handshake />} title="Sustainable Growth" text="Build a long-term international education ecosystem with yearly growth." />
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-site">
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Objectives of the Partnership</p>
          <h2 className="mt-4 font-heading text-4xl font-black text-navy">Clear goals for academic and recruitment growth.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective) => (
              <ListCard key={objective.title} title={objective.title} points={objective.points} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Student Recruitment Plan</p>
            <h2 className="mt-4 font-heading text-4xl font-black">First intake and future growth plan.</h2>
            <p className="mt-5 leading-8 text-white/70">
              Dream Gate Global Education is prepared to actively promote the university across India and other countries. The proposal targets approximately 100 international MBBS students for the first academic intake, with growth based on capacity, approvals, hostel availability, medical council compliance, and academic infrastructure.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white text-navy shadow-navy">
            <table className="w-full text-left text-sm">
              <thead className="bg-gold text-navy">
                <tr>
                  <th className="p-4">Academic Year</th>
                  <th className="p-4">Expected Students</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {[
                  ["Year 1", "50"],
                  ["Year 2", "100-150"],
                  ["Year 3", "200+"],
                  ["Year 4 onwards", "Continuous annual growth"],
                ].map(([year, students]) => (
                  <tr key={year}>
                    <td className="p-4 font-bold">{year}</td>
                    <td className="p-4 font-semibold text-charcoal/70">{students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Dream Gate Responsibilities</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">Promotion, recruitment, support, and brand development.</h2>
            <div className="mt-8 grid gap-5">
              {dreamGateResponsibilities.map((item) => (
                <ListCard key={item.title} title={item.title} points={item.points} />
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">University Responsibilities</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">Academic standards, infrastructure, compliance, and welfare.</h2>
            <div className="mt-8 grid gap-5">
              {universityResponsibilities.map((item) => (
                <ListCard key={item.title} title={item.title} points={item.points} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Collaboration Structure</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">A formal partnership framework.</h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              The detailed financial structure, commission terms, operational procedures, and admission process may be finalized through mutual discussion and formal agreement.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {collaborationStructure.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Advantages for the University</p>
          <h2 className="mt-4 font-heading text-4xl font-black text-navy">Recognition, revenue, diversity, and expansion.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article key={advantage.title} className="rounded-2xl border border-navy/10 bg-soft p-6 shadow-navy">
                <h3 className="font-heading text-xl font-extrabold text-navy">{advantage.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{advantage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Market Potential</p>
            <h2 className="mt-4 font-heading text-4xl font-black">Why MBBS education in Kyrgyzstan has strong demand.</h2>
            <p className="mt-5 leading-8 text-white/70">
              India and many developing countries have continuously growing demand for affordable and internationally recognized medical education. Kyrgyzstan is preferred by many MBBS students because of affordable tuition fees, English-medium education, growing international recognition, cost-effective living, and a friendly environment for international students.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Affordable tuition fees", "English-medium education", "Growing international recognition", "Cost-effective living", "Friendly environment for international students", "Strong potential for Naryn State University"].map((item) => (
              <CheckItem key={item} dark>{item}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-site">
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Additional Recommendations</p>
          <h2 className="mt-4 font-heading text-4xl font-black text-navy">What strengthens international success.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((recommendation) => (
              <article key={recommendation.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
                <h3 className="font-heading text-xl font-extrabold text-navy">{recommendation.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{recommendation.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Proposed Next Steps</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy">From discussion to admissions launch.</h2>
          </div>
          <div className="grid gap-4">
            {nextSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-navy/10 bg-soft p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-heading font-black text-navy">{index + 1}</span>
                <p className="self-center font-semibold leading-7 text-charcoal/75">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Conclusion</p>
            <h2 className="mt-4 font-heading text-4xl font-black">A mutually beneficial long-term partnership.</h2>
            <p className="mt-5 leading-8 text-white/70">
              Dream Gate Global Education believes that collaboration with Naryn State University named after S. Naamatov can create a successful and sustainable international medical education partnership. With recruitment expertise and the university&apos;s academic vision, we are confident in building a strong medical faculty capable of attracting students from across the world.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="font-heading text-2xl font-black text-gold">Contact Information</h3>
            <dl className="mt-5 space-y-3 text-sm text-white/75">
              <InfoRow label="Organization" value="Dream Gate Global Education" />
              <InfoRow label="Department" value="Department of Medical Education" />
              <InfoRow label="Email" value="dreamgateglobaleducation@gmail.com" />
              <InfoRow label="Phone" value="+91-6203485456" />
              <InfoRow label="Address" value="Madhubani, Jaynagar, Bihar-847266" />
              <InfoRow label="Authorized Signatory" value="Dr. Shivam Kumar" />
              <InfoRow label="Date" value="10-05-2026" />
            </dl>
            <ButtonLink href="/contact" className="mt-6">
              Discuss Partnership
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function SummaryCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-soft p-6 shadow-navy">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
      <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{text}</p>
    </article>
  );
}

function ListCard({ title, points }: { title: string; points: string[] }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
      <h3 className="font-heading text-xl font-extrabold text-navy">{title}</h3>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-charcoal/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`flex gap-3 rounded-2xl p-5 ${dark ? "border border-white/15 bg-white/10 text-white" : "border border-navy/10 bg-white text-charcoal"}`}>
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
      <p className="font-semibold leading-7">{children}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 rounded-xl bg-white/10 p-4">
      <dt className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
