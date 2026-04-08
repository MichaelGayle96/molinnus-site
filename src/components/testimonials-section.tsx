"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ShieldCheck, GraduationCap, HardHat, Award, Flame, Wrench } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

const CERTIFICATION_ICONS = [
  { label: "TSSA Licensed & Approved", icon: ShieldCheck },
  { label: "Ontario College of Trades", icon: GraduationCap },
  { label: "WSIB Covered", icon: HardHat },
  { label: "Fulton Recommended Installer", icon: Award },
  { label: "Gas Fitter Certified", icon: Flame },
  { label: "Steamfitter Licensed", icon: Wrench },
];

const testimonials = [
  {
    id: 1,
    name: "R. Thompson",
    role: "Property Manager",
    company: "Durham Property Group",
    content:
      "Molinnus completely transformed our building's heating system. Their expertise with hydronic systems saved us thousands in energy costs and their team was professional from start to finish.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "S. Patel",
    role: "Facilities Director",
    company: "GTA Commercial Realty",
    content:
      "We've relied on Molinnus for over a decade for all our commercial plumbing needs. Their 24/7 emergency response has saved us from major water damage more than once.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "M. Chen",
    role: "Operations Manager",
    company: "Ontario Manufacturing Co.",
    content:
      "The steam boiler installation was flawless. TSSA approved on the first inspection. You can tell they take pride in their work. Every joint, every connection was perfect.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "J. Williams",
    role: "Building Superintendent",
    company: "Kawartha Towers Inc.",
    content:
      "Their consultation service alone was worth every penny. They identified issues our previous contractor missed and saved us from a costly mistake on our re-piping project.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Krista Munch",
    role: "Google Review",
    company: "Verified Customer",
    content:
      "Top-notch quality and professionalism every step of the way. The work was done right, on schedule, and at a fair price. Honest, reliable, and great value for the level of service you get.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedTestimonials
      title="Trusted by Property Managers Across Ontario"
      subtitle="Our work speaks through the trust of the clients who rely on us year after year."
      badgeText="Client Testimonials"
      testimonials={testimonials}
      autoRotateInterval={6000}
      trustedCompanies={CERTIFICATION_ICONS}
      trustedCompaniesTitle="Certifications & Licensing"
    />
  );
}
