import type { Metadata } from "next";
import { ApplyForm } from "@/components/pages/apply-form";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Apply for Free Counseling",
  description: "Submit a free Dream Gate Global Education MBBS abroad counseling application.",
  path: "/apply",
  keywords: ["free MBBS abroad counseling", "apply for MBBS abroad", "MBBS abroad application form"],
});

export default function ApplyPage() {
  return (
    <section className="bg-soft pt-36">
      <div className="container-site grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Apply</p>
          <h1 className="mt-4 font-heading text-5xl font-black leading-tight text-navy md:text-7xl">Free counseling application.</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Complete the 3-step form. We&apos;ll review your NEET status, academics, country preference, and budget before calling.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-charcoal/70">
            <span>Free counseling</span>
            <span>No commitment</span>
            <span>Parent-friendly process</span>
          </div>
        </div>
        <ApplyForm />
      </div>
    </section>
  );
}
