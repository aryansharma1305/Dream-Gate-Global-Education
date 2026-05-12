import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Dream Gate Global Education - MBBS Abroad Guidance";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B1F4A 0%, #102B64 55%, #F5A623 160%)",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "26px" }}>
          <div
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "28px",
              border: "3px solid #F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5A623",
              fontSize: "46px",
              fontWeight: 900,
            }}
          >
            DG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 900 }}>{siteConfig.name}</span>
            <span style={{ marginTop: "8px", color: "#F5A623", fontSize: "24px", letterSpacing: "4px" }}>
              YOUR DREAM. OUR GATEWAY.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: "900px", fontSize: "70px", lineHeight: 1.05, fontWeight: 900 }}>
            Transparent MBBS Abroad Guidance
          </div>
          <div style={{ marginTop: "28px", maxWidth: "850px", color: "rgba(255,255,255,0.78)", fontSize: "30px", lineHeight: 1.35 }}>
            Kyrgyzstan and Uzbekistan admissions support for NEET-qualified Indian students and parents.
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", color: "#0B1F4A", fontSize: "24px", fontWeight: 800 }}>
          {["NMC Pathway Focused", "Zero Hidden Cost Guidance", "Free Counseling"].map((label) => (
            <div key={label} style={{ borderRadius: "999px", background: "#F5A623", padding: "14px 22px" }}>
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
