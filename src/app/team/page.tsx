import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, FileCheck2, GraduationCap, Handshake, Plane, ShieldCheck, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { TeamCards } from "@/components/pages/team-cards";
import { teamMembers } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Team",
  description: "Meet the Dream Gate Global Education counseling, academic, admissions, and student support team.",
  path: "/team",
  keywords: ["Dream Gate team", "MBBS abroad counselors", "MBBS academic mentor"],
});

const trustPillars = [
  {
    title: "Counseling that stays organized",
    text: "Shortlisting, documentation, parent communication, and admission timelines are handled in one coordinated flow.",
    icon: <FileCheck2 />,
  },
  {
    title: "Academic and faculty perspective",
    text: "Students get guidance shaped by MBBS study expectations, licensing awareness, and long-term academic readiness.",
    icon: <BookOpenCheck />,
  },
  {
    title: "Visa and travel readiness",
    text: "Checklist-led preparation for visa files, travel planning, hostel coordination, and pre-departure orientation.",
    icon: <Plane />,
  },
  {
    title: "Trust built through clarity",
    text: "Families receive practical conversations around fee structure, student lifestyle, recognition context, and trade-offs.",
    icon: <ShieldCheck />,
  },
];

const leadership = [
  {
    name: "Dr. Shivam",
    role: "Managing Director",
    text: "Leads Dream Gate's counseling vision, university coordination, family communication, and transparent country-university fitment.",
    tags: ["Leadership", "Counseling", "Partnerships"],
  },
  {
    name: "Dr. Nabin",
    role: "Experienced Faculty",
    text: "Adds an academic lens to MBBS planning, helping students understand the discipline and study structure of medical education abroad.",
    tags: ["Faculty", "Academics", "Mentorship"],
  },
  {
    name: "Dr. Amod Kumar",
    role: "Admissions Operations",
    text: "Coordinates applications, university communication, documentation follow-ups, and offer-letter readiness.",
    tags: ["Admissions", "Documentation", "Operations"],
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-radial pt-36 text-white">
        <div className="container-site grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Dream Gate Team</p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-tight md:text-7xl">
              Meet the people behind your medical dream.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Counselors, academic mentors, admissions coordinators, and student support leads work as one team so families get clear, trusted, end-to-end MBBS abroad guidance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/apply">
                Book Free Counseling
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Talk to Our Team
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-navy backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Admissions", "Shortlisting to offer letters"],
                ["Academic", "Faculty-backed guidance"],
                ["Support", "Departure to onboarding"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="font-heading text-2xl font-black text-gold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-6 text-navy">
              <p className="font-heading text-2xl font-black">Core Promise</p>
              <p className="mt-3 leading-7 text-charcoal/70">
                Every student gets fitment guidance built around academics, budget, recognition context, and family priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Why Families Trust the Team</p>
            <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-navy md:text-5xl">
              Expert guidance across admissions, academics, visa, and onboarding.
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              Our team works closely with both students and parents, so decisions are not rushed, documents are not guesswork, and the path from first consultation to medical campus arrival stays structured.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-navy/10 bg-soft p-6 shadow-navy">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold [&>svg]:h-6 [&>svg]:w-6">
                  {pillar.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.24em] text-gold">Featured Leadership</p>
              <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">Leadership for strategy, academics, and execution.</h2>
            </div>
            <p className="max-w-md leading-7 text-charcoal/65">
              Strategy, academic judgment, and operations support come together before every student application moves ahead.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {leadership.map((person) => (
              <article key={person.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    {person.name === "Dr. Nabin" ? <GraduationCap className="h-7 w-7" /> : <Handshake className="h-7 w-7" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-black text-navy">{person.name}</h3>
                    <p className="mt-1 font-bold text-gold">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-charcoal/70">{person.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.24em] text-gold">Our Core Team</p>
              <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">
                Day-to-day support for the MBBS abroad journey.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-soft px-5 py-4 text-sm font-semibold text-charcoal/70">
              <Users className="h-5 w-5 text-gold" />
              {teamMembers.length} active team profiles
            </div>
          </div>
          <TeamCards />
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-site flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Talk to Our Experts</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight md:text-5xl">
              Get a team that plans beyond admission.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Speak with Dream Gate for country fitment, university comparison, visa clarity, faculty-backed academic guidance, and a practical MBBS abroad roadmap.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/apply">Book Free Counseling</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Contact Team</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
