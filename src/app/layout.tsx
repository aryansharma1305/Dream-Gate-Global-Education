import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/seo/json-ld";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Ticker } from "@/components/layout/ticker";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Education Consultancy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} MBBS Abroad Guidance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/dream-gate-logo-transparent.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${inter.variable} bg-soft font-body antialiased`}>
        <LenisProvider>
          <Ticker />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          <Toaster richColors position="top-right" />
        </LenisProvider>
      </body>
    </html>
  );
}
