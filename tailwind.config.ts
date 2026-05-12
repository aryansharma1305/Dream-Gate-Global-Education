import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F4A",
          900: "#071534",
          800: "#0B1F4A",
          700: "#12316F",
        },
        gold: {
          DEFAULT: "#F5A623",
          100: "#FFF4DA",
          600: "#D98A06",
        },
        soft: "#F8F9FA",
        charcoal: "#1A1A2E",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(245, 166, 35, 0.35), 0 18px 45px rgba(245, 166, 35, 0.18)",
        navy: "0 24px 80px rgba(11, 31, 74, 0.18)",
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(circle at 20% 20%, rgba(245,166,35,0.14), transparent 28%), linear-gradient(135deg, #071534 0%, #0B1F4A 55%, #12316F 100%)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
