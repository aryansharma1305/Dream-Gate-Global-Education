import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
import { universities } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dreamgatembbs?igsh=dHNtYXY5OTAxNGhy",
    icon: Camera,
  },
  { label: "WhatsApp", href: "https://wa.me/916203485456", icon: MessageCircle },
];

export function Footer() {
  const kyrgyzstan = universities.filter((university) => university.country === "kyrgyzstan").slice(0, 4);
  const uzbekistan = universities.filter((university) => university.country === "uzbekistan");

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-16 lg:grid-cols-[1.25fr_2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Your Dream. Our Gateway. Transparent MBBS abroad guidance for Indian students and parents.
          </p>
          <div className="mt-6 flex gap-3 text-gold">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="gold-focus rounded-full border border-white/15 p-2 hover:bg-white/10"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Countries" links={[["Kyrgyzstan", "/kyrgyzstan"], ["Uzbekistan", "/uzbekistan"]]} />
          <FooterColumn
            title="Universities"
            links={[...kyrgyzstan.map((u) => [u.name, `/${u.country}/${u.slug}`]), ...uzbekistan.map((u) => [u.name, `/${u.country}/${u.slug}`])]}
          />
          <FooterColumn
            title="Quick Links"
            links={[["Universities", "/universities"], ["Team", "/team"], ["About", "/about"], ["Partnership", "/partnership"], ["Apply", "/apply"]]}
          />
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Phone: +91 6203485456</li>
              <li>Email: dreamgateglobaleducation@gmail.com</li>
              <li>Address: Madhubani, Jaynagar, Bihar-847266</li>
              <li>Hours: 10:00 AM - 7:00 PM IST</li>
            </ul>
            <form action="/contact" className="mt-5 flex gap-2">
              <input
                name="email"
                aria-label="Newsletter email"
                placeholder="Email"
                className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/45 focus:border-gold"
              />
              <Button type="submit" size="sm">
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <span>© 2026 Dream Gate Global Education. All rights reserved.</span>
          <span>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={`${title}-${href}`}>
            <Link href={href} className="text-sm text-white/70 transition hover:text-gold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
