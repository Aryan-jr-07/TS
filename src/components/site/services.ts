import { Globe, Wrench, MapPin, CalendarClock, Instagram, BarChart3, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  emoji: string;
  title: string;
  description: string;
  sampleAnchor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website",
    icon: Globe,
    emoji: "🌐",
    title: "Website Design & Development",
    description:
      "Custom, mobile-friendly, fast-loading websites built from scratch. SEO-ready with menu/services, photos, contact form, and Google Maps.",
    sampleAnchor: "#website",
  },
  {
    slug: "fix",
    icon: Wrench,
    emoji: "🔧",
    title: "Website Fixing & Improvement",
    description:
      "Already have a site that looks outdated or broken? We fix speed issues, mobile layout, broken links, and outdated content.",
    sampleAnchor: "#website",
  },
  {
    slug: "gbp",
    icon: MapPin,
    emoji: "📍",
    title: "Google Business Profile",
    description:
      "Get found on Google Maps. We set up your listing with photos, hours, categories, and a review strategy that actually works.",
    sampleAnchor: "#gbp",
  },
  {
    slug: "booking",
    icon: CalendarClock,
    emoji: "📅",
    title: "Online Booking & WhatsApp",
    description:
      "Let customers book tables, rooms, or sessions online. We integrate simple booking forms or WhatsApp chat directly into your site.",
    sampleAnchor: "#booking",
  },
  {
    slug: "instagram",
    icon: Instagram,
    emoji: "📸",
    title: "Instagram Setup & Content",
    description:
      "Profile refresh, post templates, caption writing, and a simple content plan to grow your local audience.",
    sampleAnchor: "#instagram",
  },
  {
    slug: "analytics",
    icon: BarChart3,
    emoji: "📊",
    title: "Basic Analytics Setup",
    description:
      "Google Analytics integration so you can track visitors, see where they come from, and measure what's working.",
    sampleAnchor: "#analytics",
  },
];
