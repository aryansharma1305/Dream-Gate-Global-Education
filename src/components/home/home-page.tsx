"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { TeamCards } from "@/components/pages/team-cards";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { blogs, countries, images, processSteps, testimonials, universities } from "@/lib/data";
import { absoluteUrl, siteConfig } from "@/lib/seo";

gsap.registerPlugin(ScrollTrigger, Draggable);

const headline = "Open the Gate to Your Medical Dream Abroad.";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroVideo />
      <WhyDreamGate />
      <CountriesPinned />
      <UniversityHighlights />
      <AdmissionProcess />
      <TeamSection />
      <Testimonials />
      <BlogPreview />
      <FinalCta />
      <HomeStructuredData />
    </>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-word", {
        y: 0,
        opacity: 1,
        stagger: 0.055,
        duration: 0.85,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[calc(100vh-36px)] overflow-hidden bg-navy pt-28 text-white">
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <SmartImage
          src={`${images.hero}?auto=format&fit=crop&w=1800&q=85`}
          alt="Confident medical student in a white coat"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/20" />
      <div className="container-site relative z-10 grid min-h-[calc(100vh-120px)] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Transparent MBBS Abroad Guidance for Indian Students
          </div>
          <h1 className="max-w-4xl overflow-hidden font-heading text-5xl font-black leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
            {headline.split(" ").map((word, index) => (
              <span className="mr-3 inline-block overflow-hidden pb-1" key={`${word}-${index}`}>
                <span className="hero-word text-reveal-word">{word}</span>
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Transparent, parent-friendly MBBS guidance for Kyrgyzstan and Uzbekistan - zero hidden costs, zero confusion.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/universities" size="lg">
              Explore Universities
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="/apply" variant="outline" size="lg">
              Book Free Counseling
            </ButtonLink>
          </div>
          <StatsPills />
        </div>
        <div className="relative hidden min-h-[520px] lg:block">
          <FloatingBadge className="left-4 top-12" icon={<ShieldCheck />} label="NMC Approved Only" />
          <FloatingBadge className="right-0 top-52" icon={<BadgeCheck />} label="NEET Score Based Shortlisting" delay={0.35} />
          <FloatingBadge className="bottom-20 left-20" icon={<CircleDollarSign />} label="All-In Budget Planning" delay={0.7} />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ className, icon, label, delay = 0 }: { className: string; icon: React.ReactNode; label: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-sm font-bold text-white shadow-navy backdrop-blur-xl ${className}`}
    >
      <span className="text-gold [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      {label}
    </motion.div>
  );
}

function StatsPills() {
  const ref = useRef<HTMLDivElement>(null);
  const stats = [
    ["500", "+", "Students Placed"],
    ["10", "", "Partner Universities"],
    ["2", "", "Countries"],
    ["95", "%", "Visa Success"],
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((node) => {
        const target = Number(node.dataset.target || 0);
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
          onUpdate: () => {
            node.textContent = Math.round(state.value).toString();
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(([value, suffix, label]) => (
        <div key={label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur">
          <div className="font-heading text-3xl font-black text-gold">
            <span className="stat-number" data-target={value}>
              0
            </span>
            {suffix}
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{label}</p>
        </div>
      ))}
    </div>
  );
}

function IntroVideo() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Dream Gate Video</p>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight md:text-5xl">
            A 10-second intro ready for website and Instagram promotion.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            Built with HyperFrames using the same navy and gold identity, focused on MBBS abroad guidance for Indian students and parents.
          </p>
          <ButtonLink
            href="https://www.instagram.com/dreamgatembbs?igsh=dHNtYXY5OTAxNGhy"
            className="mt-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @dreamgatembbs
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-navy">
          <video
            className="aspect-video w-full rounded-xl object-cover"
            src="/videos/dream-gate-intro.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="overflow-hidden border-y border-navy/10 bg-white py-5">
      <div className="marquee-wrap">
        <div className="marquee-track flex w-max gap-3">
          {[...universities, ...universities].map((university, index) => (
            <a
              key={`${university.slug}-${index}`}
              href={`/${university.country}/${university.slug}`}
              className="gold-focus rounded-full border border-navy/10 bg-soft px-4 py-2 text-sm font-bold text-navy transition hover:border-gold hover:text-gold"
            >
              {university.flag} {university.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyDreamGate() {
  const features = [
    [ShieldCheck, "Recognition-First Shortlisting", "We filter options through recognition, eligibility, and long-term licensing clarity."],
    [CircleDollarSign, "Real All-In Cost Breakdown", "Tuition, hostel, food, travel, visa, and arrival costs are separated clearly."],
    [HeartHandshake, "Parent Counseling Included", "Parents get plain-language answers before any admission decision is made."],
    [Plane, "Post-Arrival Student Support", "Students get pre-departure and early-semester support after admission."],
  ] as const;

  return (
    <section className="bg-soft py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Why Dream Gate</p>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-navy md:text-5xl">
            Not just admission. A decision you won&apos;t regret.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/70">
            We help families compare countries and universities with the practical details that matter after the offer letter arrives.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {features.map(([Icon, title, desc]) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CountriesPinned() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - section.clientWidth + 32),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-navy py-24 text-white">
      <div className="container-site">
        <p className="font-bold uppercase tracking-[0.24em] text-gold">Country Fitment</p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight md:text-5xl">
          Compare the two destinations without losing the details.
        </h2>
      </div>
      <div ref={trackRef} className="mt-12 flex w-max gap-6 pl-[max(1rem,calc((100vw-80rem)/2+2rem))] pr-10">
        {countries.map((country) => (
          <motion.article
            whileHover={{ scale: 1.025 }}
            key={country.key}
            className="group grid w-[86vw] max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-white text-navy shadow-navy md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-80 overflow-hidden">
              <SmartImage src={country.image} alt={`${country.name} landscape`} fill sizes="(min-width: 768px) 50vw, 90vw" className="transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-7 md:p-10">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-bold text-gold">
                {country.flag} {country.label}
              </span>
              <h3 className="mt-5 font-heading text-4xl font-black">{country.name.toUpperCase()}</h3>
              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["Fees from", country.feesFrom],
                  ["Duration", country.duration],
                  ["Universities", country.partners],
                  ["FMGE Pass Range", country.fmge],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-soft p-4">
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-charcoal/45">{label}</dt>
                    <dd className="mt-2 font-heading text-xl font-extrabold text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
              <ButtonLink href={`/${country.key}`} className="mt-7">
                Explore {country.name}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function UniversityHighlights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;
    const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const draggables = Draggable.create(track, {
      type: "x",
      bounds: { minX: -max, maxX: 0 },
      edgeResistance: 0.85,
      cursor: "grab",
      activeCursor: "grabbing",
    });
    return () => draggables.forEach((item) => item.kill());
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">University Highlights</p>
            <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">
              10 Partner Universities. One Trusted Gateway.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-charcoal/65">Drag the campus cards horizontally to compare city, tuition, and country fit.</p>
        </div>
      </div>
      <div ref={viewportRef} className="mt-12 overflow-hidden" data-testid="university-strip-viewport">
        <div ref={trackRef} data-testid="university-strip-track" className="flex w-max gap-5 px-[max(1rem,calc((100vw-80rem)/2+2rem))]">
          {universities.map((university) => (
            <motion.article
              whileHover={{ scale: 1.03 }}
              key={university.slug}
              className="group w-80 overflow-hidden rounded-2xl border border-navy/10 bg-soft shadow-navy transition hover:border-gold hover:shadow-gold"
            >
              <div className="relative h-48 overflow-hidden">
                <SmartImage src={university.image} alt={university.name} fill sizes="320px" className="transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-navy">
                  {university.flag} {university.countryLabel}
                </span>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-charcoal/60">
                  <MapPin className="h-4 w-4 text-gold" />
                  {university.city}
                </p>
                <h3 className="mt-3 min-h-16 font-heading text-xl font-extrabold leading-tight text-navy">{university.name}</h3>
                <p className="mt-4 font-bold text-gold">Annual tuition: {university.tuition}</p>
                <a href={`/${university.country}/${university.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                  Explore Campus
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const descriptions = [
    "NEET score and budget assessment",
    "Country plus university fitment report",
    "10th, 12th, NEET scorecard, passport",
    "Official offer from university",
    "Student visa support with checklist",
    "Pre-departure briefing plus arrival support",
  ];

  return (
    <section ref={sectionRef} className="bg-soft py-24">
      <div className="container-site">
        <p className="text-center font-bold uppercase tracking-[0.24em] text-gold">Admission Process</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-heading text-4xl font-black text-navy md:text-5xl">
          Your Journey from NEET to MBBS in 6 Steps
        </h2>
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-6 h-[calc(100%-3rem)] w-1 origin-top rounded-full bg-navy/10 md:left-1/2 md:-ml-0.5" />
          <div ref={lineRef} className="absolute left-5 top-6 h-[calc(100%-3rem)] w-1 origin-top rounded-full bg-gold md:left-1/2 md:-ml-0.5" />
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step} className={`relative grid gap-5 pl-16 md:grid-cols-2 md:pl-0 ${index % 2 ? "" : "md:text-right"}`}>
                <div className={index % 2 ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                  <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
                    <p className="font-heading text-3xl font-black text-gold">0{index + 1}</p>
                    <h3 className="mt-2 font-heading text-xl font-extrabold text-navy">{step}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/65">{descriptions[index]}</p>
                  </div>
                </div>
                <span className="timeline-node absolute left-2 top-6 grid h-7 w-7 place-items-center rounded-full bg-gold text-navy md:left-1/2 md:-ml-3.5">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-navy-radial py-24 text-white">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-gold">Team</p>
            <h2 className="mt-4 font-heading text-4xl font-black md:text-5xl">The People Behind Your Dream</h2>
          </div>
          <ButtonLink href="/team" variant="outline">
            Meet the Team
          </ButtonLink>
        </div>
        <TeamCards compact />
      </div>
    </section>
  );
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;
    const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const draggables = Draggable.create(track, {
      type: "x",
      bounds: { minX: -max, maxX: 0 },
      edgeResistance: 0.8,
    });
    return () => draggables.forEach((item) => item.kill());
  }, []);

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container-site">
        <p className="font-bold uppercase tracking-[0.24em] text-gold">Testimonials</p>
        <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">Students Who Chose the Right Path</h2>
      </div>
      <div ref={viewportRef} className="overflow-hidden" data-testid="testimonial-strip-viewport">
        <div ref={trackRef} data-testid="testimonial-strip-track" className="mt-12 flex w-max gap-5 px-[max(1rem,calc((100vw-80rem)/2+2rem))]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article key={`${testimonial.name}-${index}`} className="w-[340px] rounded-2xl border border-navy/10 bg-soft p-6 shadow-navy md:w-[460px]">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-charcoal/75">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-navy/5">
                  <SmartImage src={testimonial.image} alt={testimonial.name} fill sizes="56px" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-navy">{testimonial.name}</h3>
                  <p className="text-sm text-charcoal/60">
                    {testimonial.city} · {testimonial.university}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="bg-soft py-24">
      <div className="container-site">
        <p className="font-bold uppercase tracking-[0.24em] text-gold">Insights</p>
        <h2 className="mt-4 font-heading text-4xl font-black text-navy md:text-5xl">MBBS Abroad Insights</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.title} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-navy">
              <div className="relative h-52">
                <SmartImage src={blog.image} alt={blog.title} fill sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">{blog.tag}</span>
                <h3 className="mt-4 font-heading text-xl font-extrabold leading-tight text-navy">{blog.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">{blog.excerpt}</p>
                <a href={blog.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Live Counseling CTA</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight md:text-5xl">
            Your medical career starts with one conversation.
          </h2>
          <p className="mt-4 text-white/70">Free counseling · No commitment · Parent-friendly process</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/apply">Apply Now</ButtonLink>
          <ButtonLink href="https://wa.me/916203485456" variant="outline">
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function HomeStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can apply for MBBS abroad counseling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dream Gate Global Education guides NEET-qualified Indian students and parents who want transparent MBBS abroad admission support for Kyrgyzstan and Uzbekistan.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries does Dream Gate focus on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The primary destination focus is Kyrgyzstan and Uzbekistan, with partner university shortlisting based on budget, recognition context, city fit, and student support.",
        },
      },
      {
        "@type": "Question",
        name: "Is the counseling free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students can start with a free counseling request through the website application form or WhatsApp.",
        },
      },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#partner-universities"),
    name: `${siteConfig.name} partner universities`,
    numberOfItems: universities.length,
    itemListElement: universities.map((university, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: university.name,
      url: absoluteUrl(`/${university.country}/${university.slug}`),
    })),
  };

  return <JsonLd data={[faqSchema, itemListSchema]} />;
}
