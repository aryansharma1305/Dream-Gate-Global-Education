import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/components/pages/contact-form";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact Dream Gate Global Education for MBBS abroad counseling in Kyrgyzstan and Uzbekistan.",
  path: "/contact",
  keywords: ["MBBS abroad counselor contact", "Dream Gate contact", "MBBS admission counseling Bihar"],
});

export default function ContactPage() {
  return (
    <section className="bg-soft pt-36">
      <div className="container-site py-20">
        <div className="mb-10">
          <p className="font-bold uppercase tracking-[0.24em] text-gold">Contact</p>
          <h1 className="mt-4 font-heading text-5xl font-black text-navy md:text-7xl">Talk to a counselor.</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-navy p-6 text-white shadow-navy">
            <h2 className="font-heading text-3xl font-black">Dream Gate Global Education</h2>
            <div className="mt-6 space-y-4 text-white/75">
              <p className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> +91 6203485456</p>
              <p className="flex gap-3"><Mail className="h-5 w-5 text-gold" /> dreamgateglobaleducation@gmail.com</p>
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> Madhubani, Jaynagar, Bihar-847266</p>
            </div>
            <ButtonLink href="https://wa.me/916203485456" variant="whatsapp" className="mt-6">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Direct
            </ButtonLink>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/15">
              <iframe
                title="Dream Gate Global Education map"
                src="https://www.google.com/maps?q=Jaynagar%20Madhubani%20Bihar%20847266&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
