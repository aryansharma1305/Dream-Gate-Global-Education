import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import type { University } from "@/lib/data";

export function UniversityCard({ university }: { university: University }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-navy transition hover:border-gold hover:shadow-gold">
      <div className="relative h-52 overflow-hidden">
        <SmartImage
          src={university.image}
          alt={university.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="transition duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-navy">
          {university.flag} {university.countryLabel}
        </span>
      </div>
      <div className="p-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-charcoal/60">
          <MapPin className="h-4 w-4 text-gold" />
          {university.city}
        </p>
        <h3 className="mt-3 min-h-14 font-heading text-xl font-extrabold leading-tight text-navy">{university.name}</h3>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-soft p-3">
            <p className="text-charcoal/50">Tuition</p>
            <p className="font-bold text-navy">{university.tuition}</p>
          </div>
          <div className="rounded-xl bg-soft p-3">
            <p className="text-charcoal/50">Duration</p>
            <p className="font-bold text-navy">{university.duration}</p>
          </div>
        </div>
        <Link href={`/${university.country}/${university.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
          Explore Campus
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
