import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../public/brand/dream-gate-mark-transparent.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="gold-focus inline-flex items-center gap-3 rounded-lg" aria-label="Dream Gate Global Education home">
      <span className={compact ? "relative block h-12 w-14" : "relative block h-14 w-16 md:h-16 md:w-[72px]"}>
        <Image
          src={logoImage}
          alt="Dream Gate Global Education"
          fill
          sizes={compact ? "56px" : "(min-width: 768px) 72px, 64px"}
          className="object-contain drop-shadow-[0_10px_22px_rgba(245,166,35,0.32)]"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-heading text-sm font-extrabold tracking-normal text-white md:text-base">
            Dream Gate
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Global Education
          </span>
        </span>
      )}
    </Link>
  );
}
