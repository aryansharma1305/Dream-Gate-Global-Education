import { SmartImage } from "@/components/ui/smart-image";

export function PageHero({
  title,
  eyebrow,
  description,
  image,
}: {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 text-white">
      <div className="absolute inset-0">
        <SmartImage src={image} alt={title} fill sizes="100vw" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="container-site relative z-10 py-24">
        <p className="font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
      </div>
    </section>
  );
}
