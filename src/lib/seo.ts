import type { Metadata } from "next";

export const siteConfig = {
  name: "Dream Gate Global Education",
  title: "Dream Gate Global Education | MBBS Abroad Guidance",
  description:
    "Transparent MBBS abroad guidance for Indian NEET-qualified students and parents exploring Kyrgyzstan and Uzbekistan.",
  url: "https://dreamgateglobal.education",
  email: "dreamgateglobaleducation@gmail.com",
  phone: "+91 6203485456",
  whatsapp: "https://wa.me/916203485456",
  instagram: "https://www.instagram.com/dreamgatembbs?igsh=dHNtYXY5OTAxNGhy",
  address: {
    streetAddress: "Madhubani, Jaynagar",
    addressLocality: "Jaynagar",
    addressRegion: "Bihar",
    postalCode: "847266",
    addressCountry: "IN",
  },
  keywords: [
    "MBBS abroad",
    "MBBS abroad consultancy India",
    "MBBS in Kyrgyzstan",
    "MBBS in Uzbekistan",
    "NEET qualified MBBS abroad",
    "NMC approved universities abroad",
    "MBBS abroad counseling",
    "medical admission abroad",
    "Dream Gate Global Education",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/opengraph-image",
  type = "website",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: "Dream Gate MBBS",
    url: siteConfig.url,
    logo: absoluteUrl("/brand/dream-gate-logo-transparent.png"),
    image: absoluteUrl("/brand/dream-gate-logo-transparent.png"),
    slogan: "Your Dream. Our Gateway.",
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Kyrgyzstan" },
      { "@type": "Country", name: "Uzbekistan" },
    ],
    sameAs: [siteConfig.instagram, siteConfig.whatsapp],
    knowsAbout: [
      "MBBS abroad counseling",
      "MBBS in Kyrgyzstan",
      "MBBS in Uzbekistan",
      "NEET eligibility guidance",
      "Student visa assistance",
      "International student recruitment",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "admissions counseling",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
