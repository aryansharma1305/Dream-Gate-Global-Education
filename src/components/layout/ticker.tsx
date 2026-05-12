const tickerText =
  "🎓 2026 Admissions Open · NMC Approved Universities · Zero Donation Seat Guidance · Free Counseling Available · NEET Qualified Students Welcome ·";

export function Ticker() {
  return (
    <div className="marquee-wrap relative z-50 overflow-hidden bg-gold py-2 text-navy">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-bold">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>{tickerText}</span>
        ))}
      </div>
    </div>
  );
}
