export type CountryKey = "kyrgyzstan" | "uzbekistan";

export type University = {
  slug: string;
  name: string;
  country: CountryKey;
  countryLabel: string;
  flag: string;
  city: string;
  tuition: string;
  established: string;
  medium: string;
  duration: string;
  recognition: string;
  image: string;
  overview: string[];
  why: string[];
};

export const images = {
  hero: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  kyrgyzstan: "https://images.unsplash.com/photo-1532602482641-8cede66ede47",
  uzbekistan: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
  university: "https://images.unsplash.com/photo-1562774053-701939374585",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  campusAlt: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
  library: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  classRoom: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
};

const baseOverview = (name: string, city: string, country: string) => [
  `${name} is positioned as a practical MBBS option for Indian students looking for English-medium medical education in ${country}. The campus environment in ${city} gives students access to academic blocks, clinical exposure, and a student community familiar with international admissions.`,
  "Dream Gate Global Education evaluates the university through recognition, total cost, city comfort, hostel availability, and parent-facing transparency before recommending it to a student.",
  "The program is suitable for NEET-qualified Indian students who want a structured six-year pathway with support for documentation, admission letter processing, visa filing, and pre-departure preparation.",
  "Families receive a realistic cost plan that separates tuition, hostel, food, travel, documentation, and arrival costs so the admission decision is made with clarity.",
];

export const universities: University[] = [
  {
    slug: "jalalabad-international-university",
    name: "Jalalabad International University",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Jalalabad",
    tuition: "~$3,000/yr",
    established: "1993",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.university}?auto=format&fit=crop&w=1200&q=80`,
    overview: baseOverview("Jalalabad International University", "Jalalabad", "Kyrgyzstan"),
    why: ["Budget-friendly annual tuition", "Calmer city environment", "Parent-friendly cost planning", "Indian student support ecosystem"],
  },
  {
    slug: "jalalabad-state-university",
    name: "Jalalabad State University",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Jalalabad",
    tuition: "~$2,800/yr",
    established: "1993",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.campusAlt}?auto=format&fit=crop&w=1200&q=80`,
    overview: baseOverview("Jalalabad State University", "Jalalabad", "Kyrgyzstan"),
    why: ["Lowest listed tuition option", "Established public university profile", "Simple living-cost planning", "Good fit for budget-first families"],
  },
  {
    slug: "caimu",
    name: "Central Asian International Medical University",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Bishkek",
    tuition: "~$3,200/yr",
    established: "2016",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.classRoom}?auto=format&fit=crop&w=1200&q=80`,
    overview: baseOverview("Central Asian International Medical University", "Bishkek", "Kyrgyzstan"),
    why: ["Capital city access", "International student orientation", "Balanced fees", "English-medium academic focus"],
  },
  {
    slug: "osh-state-medical-university",
    name: "Osh State Medical University",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Osh",
    tuition: "~$3,500/yr",
    established: "1951",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.university}?auto=format&fit=crop&w=1200&q=80&sat=-15`,
    overview: baseOverview("Osh State Medical University", "Osh", "Kyrgyzstan"),
    why: ["Long institutional history", "Known medical education hub", "Clinical exposure orientation", "Large student community"],
  },
  {
    slug: "osh-international-medical-university",
    name: "Osh International Medical University",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Osh",
    tuition: "~$3,000/yr",
    established: "2015",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.library}?auto=format&fit=crop&w=1200&q=80`,
    overview: baseOverview("Osh International Medical University", "Osh", "Kyrgyzstan"),
    why: ["Affordable Osh option", "International admission flow", "Practical hostel planning", "Focused counseling fitment"],
  },
  {
    slug: "aiu-kant",
    name: "AIU Kant",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Bishkek",
    tuition: "~$3,800/yr",
    established: "1993",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.campusAlt}?auto=format&fit=crop&w=1200&q=80&sat=-30`,
    overview: baseOverview("AIU Kant", "Bishkek", "Kyrgyzstan"),
    why: ["Higher-support private profile", "Bishkek access", "Structured student services", "Good fit for support-first families"],
  },
  {
    slug: "ihsm-bishkek",
    name: "International Higher School of Medicine",
    country: "kyrgyzstan",
    countryLabel: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Bishkek",
    tuition: "~$3,400/yr",
    established: "2003",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.classRoom}?auto=format&fit=crop&w=1200&q=80&sat=-25`,
    overview: baseOverview("International Higher School of Medicine", "Bishkek", "Kyrgyzstan"),
    why: ["Popular Bishkek option", "International cohort", "Balanced tuition", "Recognized student pathway"],
  },
  {
    slug: "tashkent-medical-academy",
    name: "Tashkent Medical Academy",
    country: "uzbekistan",
    countryLabel: "Uzbekistan",
    flag: "🇺🇿",
    city: "Tashkent",
    tuition: "~$3,800/yr",
    established: "2005",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.uzbekistan}?auto=format&fit=crop&w=1200&q=80`,
    overview: baseOverview("Tashkent Medical Academy", "Tashkent", "Uzbekistan"),
    why: ["Capital city advantage", "Strong value perception", "Urban student life", "Balanced academics and access"],
  },
  {
    slug: "bukhara-state-medical-university",
    name: "Bukhara State Medical University",
    country: "uzbekistan",
    countryLabel: "Uzbekistan",
    flag: "🇺🇿",
    city: "Bukhara",
    tuition: "~$3,500/yr",
    established: "1990",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.campusAlt}?auto=format&fit=crop&w=1200&q=80&hue=20`,
    overview: baseOverview("Bukhara State Medical University", "Bukhara", "Uzbekistan"),
    why: ["Historic student city", "Balanced annual tuition", "Comfortable pace of life", "Good parent-facing value"],
  },
  {
    slug: "fergana-medical-institute",
    name: "Fergana Medical Institute of Public Health",
    country: "uzbekistan",
    countryLabel: "Uzbekistan",
    flag: "🇺🇿",
    city: "Fergana",
    tuition: "~$3,200/yr",
    established: "1991",
    medium: "English",
    duration: "6 years",
    recognition: "NMC pathway focused",
    image: `${images.library}?auto=format&fit=crop&w=1200&q=80&hue=30`,
    overview: baseOverview("Fergana Medical Institute of Public Health", "Fergana", "Uzbekistan"),
    why: ["Entry-level Uzbekistan tuition", "Focused public health profile", "Student-friendly city", "Good budget-value balance"],
  },
];

export const countries = [
  {
    key: "kyrgyzstan" as const,
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    image: `${images.kyrgyzstan}?auto=format&fit=crop&w=1400&q=80`,
    label: "Budget-First Planning",
    feesFrom: "USD 2,800/yr",
    duration: "6 years",
    partners: "7 partners",
    fmge: "22-30%",
    bullets: ["Lower annual tuition options", "Indian student communities in Bishkek and Osh", "Simple documentation pathway", "Good for budget-first NEET-qualified students"],
  },
  {
    key: "uzbekistan" as const,
    name: "Uzbekistan",
    flag: "🇺🇿",
    image: `${images.uzbekistan}?auto=format&fit=crop&w=1400&q=80`,
    label: "Balanced Value",
    feesFrom: "USD 3,200/yr",
    duration: "6 years",
    partners: "3 partners",
    fmge: "28-34%",
    bullets: ["Strong city infrastructure", "Balanced tuition and living cost", "Well-connected travel routes", "Good fit for value-conscious families"],
  },
];

export const teamMembers = [
  {
    id: "shivam",
    name: "Dr. Shivam",
    title: "Managing Director",
    image: "/team/shivam.jpeg",
    bio: "Leads Dream Gate's counseling vision, university coordination, and parent-first MBBS guidance.",
    tags: ["Leadership", "Counseling", "Strategy"],
    longBio:
      "Dr. Shivam leads Dream Gate Global Education as Managing Director, guiding the team across student counseling, university coordination, parent communication, and transparent MBBS abroad planning.",
  },
  {
    id: "dr-nabin",
    name: "Dr. Nabin Yadav",
    title: "Experienced Faculty & Academic Mentor",
    image: "/team/dr-nabin.jpeg",
    bio: "Provides academic guidance, student mentoring, and faculty-backed MBBS pathway support.",
    tags: ["Faculty", "Academic Planning", "Mentorship"],
    longBio:
      "Dr. Nabin brings faculty experience to the counseling process, helping students understand academic expectations, MBBS study structure, clinical learning, and the discipline required for medical education abroad.",
  },
  {
    id: "amod-kumar",
    name: "Dr. Amod Kumar",
    title: "Admissions & University Relations",
    image: "/team/amod-kumar.jpeg",
    bio: "Coordinates admissions, university communication, and application follow-ups.",
    tags: ["Admissions", "Documentation", "University Relations"],
    longBio:
      "Dr. Amod Kumar works across admissions and university relations, keeping intake details, application status, fee information, and student documentation aligned with partner university requirements.",
  },
  {
    id: "jashan",
    name: "Dr. Jashan",
    title: "Student Support Lead",
    image: "/team/jashan.jpeg",
    bio: "Supports pre-departure briefing, arrival coordination, and early semester guidance.",
    tags: ["Onboarding", "Student Support", "Travel Readiness"],
    longBio:
      "Dr. Jashan manages student support after admission, including pre-departure preparation, onboarding coordination, parent communication, and practical guidance during the transition abroad.",
  },
];

export const processSteps = [
  "Free Counseling Call",
  "University Shortlisting",
  "Document Preparation",
  "Admission Letter",
  "Visa Filing",
  "Departure & Onboarding",
];

export const testimonials = [
  {
    name: "Aarav Sharma",
    city: "Delhi",
    university: "Tashkent Medical Academy",
    quote: "Dream Gate explained the full cost clearly before we made any decision. My parents felt included through every call.",
    image: "https://api.dicebear.com/9.x/initials/png?seed=Aarav%20Sharma&backgroundColor=F5A623",
  },
  {
    name: "Nisha Patel",
    city: "Ahmedabad",
    university: "IHSM Bishkek",
    quote: "The shortlist was based on my NEET score and budget, not pressure. That made the process much easier.",
    image: "https://api.dicebear.com/9.x/initials/png?seed=Nisha%20Patel&backgroundColor=0B1F4A",
  },
  {
    name: "Karan Mehta",
    city: "Jaipur",
    university: "Osh State Medical University",
    quote: "From documents to departure briefing, the team kept the timeline simple and practical.",
    image: "https://api.dicebear.com/9.x/initials/png?seed=Karan%20Mehta&backgroundColor=F5A623",
  },
];

export const blogs = [
  {
    title: "MBBS in Kyrgyzstan 2026 - Complete Guide",
    tag: "Kyrgyzstan",
    excerpt: "A parent-friendly breakdown of fees, duration, eligibility, and student life.",
    image: `${images.kyrgyzstan}?auto=format&fit=crop&w=900&q=80`,
    href: "/kyrgyzstan",
  },
  {
    title: "MBBS in Uzbekistan 2026 - Complete Guide",
    tag: "Uzbekistan",
    excerpt: "Compare top cities, universities, costs, and expected admission timelines.",
    image: `${images.uzbekistan}?auto=format&fit=crop&w=900&q=80`,
    href: "/uzbekistan",
  },
  {
    title: "NEET Score to MBBS Abroad: What's the Minimum?",
    tag: "NEET",
    excerpt: "How NEET qualification, PCB percentage, age, and budget shape your shortlist.",
    image: `${images.students}?auto=format&fit=crop&w=900&q=80`,
    href: "/apply",
  },
];

export function getUniversity(country: CountryKey, slug: string) {
  return universities.find((university) => university.country === country && university.slug === slug);
}

export function getCountry(key: CountryKey) {
  return countries.find((country) => country.key === key);
}
