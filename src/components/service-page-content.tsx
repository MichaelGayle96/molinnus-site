"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  ChevronDown,
  X,
  Wrench,
  Flame,
  Gauge,
  ShieldCheck,
  MessageSquare,
  Clock,
  Award,
  FileCheck,
  Building2,
  Droplets,
  PipetteIcon,
  RefreshCw,
  Siren,
  Thermometer,
  Compass,
  Settings,
  Zap,
  BadgeCheck,
  Search,
  Users,
  PenTool,
  BarChart3,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { scaleIn } from "@/lib/animations";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  // Commercial Plumbing
  "Commercial Backflow Testing & Certification": ShieldCheck,
  "High-Rise DHW Distribution Solutions": Building2,
  "Building Re-Piping & Water Main Replacement": PipetteIcon,
  "Commercial Water Main Replacement": Droplets,
  "24/7 Emergency Plumbing Service": Siren,
  // Hydronic Heating
  "Boiler Replacements with Latest Technologies": RefreshCw,
  "Hydronic System Design & Engineering": Compass,
  "Commercial Boiler System Optimization": Settings,
  "Complete Pump & Piping Service": Wrench,
  "Energy Efficiency Upgrades": Zap,
  // Steam Boilers
  "High-Pressure Steam Boiler Installation": Thermometer,
  "Fulton Boiler Specialist": Award,
  "TSSA Approved & Inspected": BadgeCheck,
  "Steam System Diagnostics & Repair": Search,
  "Preventative Maintenance Programs": Clock,
  // Backflow Testing
  "Annual Backflow Testing & Certification": ClipboardCheck,
  "Cross-Connection Control Programs": ShieldCheck,
  "Backflow Prevention Device Installation": Wrench,
  "Compliance Reporting & Documentation": FileCheck,
  "Municipal Liaison & Filing": Building2,
  // Consultation
  "Troubleshooting Existing Systems": Search,
  "Expert Second Opinion on Ongoing Projects": Users,
  "Future Project Design Consultation": PenTool,
  "Energy Audit & Efficiency Review": BarChart3,
  "Code Compliance Assessment": ClipboardCheck,
};
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SERVICES, SITE, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useFormValidation } from "@/lib/use-form-validation";
import { FieldError } from "@/components/field-error";
import { FormSuccess } from "@/components/form-success";

const ICON_MAP = {
  Wrench,
  Flame,
  Gauge,
  ShieldCheck,
  MessageSquare,
} as const;

const SERVICE_IMAGES: Record<string, string> = {
  "commercial-plumbing": "/p2.webp",
  "hydronic-heating": "/p10.webp",
  "steam-boilers": "/project-gas-boiler-room.webp",
  "backflow-testing": "/p4.webp",
  consultation: "/p7.webp",
};

const SERVICE_GALLERY: Record<string, string[]> = {
  "commercial-plumbing": [
    "/p2.webp",
    "/p8.webp",
    "/p6.webp",
  ],
  "hydronic-heating": [
    "/p3.webp",
    "/p7.webp",
    "/p2.webp",
  ],
  "steam-boilers": [
    "/project-gas-boiler-room.webp",
    "/p5.webp",
    "/plumber-working.webp",
  ],
  "backflow-testing": [
    "/p4.webp",
    "/p2.webp",
    "/p7.webp",
  ],
  consultation: [
    "/p7.webp",
    "/p5.webp",
    "/p4.webp",
  ],
};

const SERVICE_CTA_COPY: Record<string, { headline: string; subline: string }> = {
  "commercial-plumbing": {
    headline: "Your building deserves a commercial plumbing contractor who shows up on time, solves problems the first time, and stands behind every installation",
    subline: "with TSSA-licensed professionals serving Durham, the GTA, and Peterborough around the clock.",
  },
  "hydronic-heating": {
    headline: "Stop overpaying for heating. Our hydronic system upgrades have cut energy costs by up to 30% for property managers across Ontario",
    subline: "with expert boiler installations, system optimization, and ongoing maintenance you can count on.",
  },
  "steam-boilers": {
    headline: "Every steam boiler we install passes TSSA inspection on the first attempt. That record is not an accident",
    subline: "it is the result of 20+ years as a Fulton recommended installer with zero safety compromises.",
  },
  "backflow-testing": {
    headline: "Stay compliant, avoid fines, and protect your water supply with certified backflow testing and prevention programs",
    subline: "delivered on schedule with full documentation and municipal filing handled for you.",
  },
  consultation: {
    headline: "Before you commit to a major mechanical project, get an honest second opinion from licensed experts who have seen it all",
    subline: "so you make the right decision the first time and avoid costly mistakes down the road.",
  },
};

const SERVICE_HIGHLIGHTS: Record<string, { icon: typeof Clock; title: string; value: string }[]> = {
  "commercial-plumbing": [
    { icon: Clock, title: "Response Time", value: "24/7" },
    { icon: Award, title: "Years Experience", value: "20+" },
    { icon: ShieldCheck, title: "TSSA Licensed", value: "Yes" },
  ],
  "hydronic-heating": [
    { icon: Award, title: "Projects Completed", value: "200+" },
    { icon: Clock, title: "Avg Project Time", value: "2-4 wks" },
    { icon: ShieldCheck, title: "Warranty", value: "Full" },
  ],
  "steam-boilers": [
    { icon: ShieldCheck, title: "TSSA Approval Rate", value: "100%" },
    { icon: Award, title: "Fulton Certified", value: "Yes" },
    { icon: Clock, title: "Emergency Service", value: "24/7" },
  ],
  "backflow-testing": [
    { icon: ShieldCheck, title: "Certified Testing", value: "Yes" },
    { icon: Clock, title: "Turnaround", value: "Same Day" },
    { icon: Award, title: "Compliance Rate", value: "100%" },
  ],
  consultation: [
    { icon: Clock, title: "Booking Lead Time", value: "48hrs" },
    { icon: Award, title: "Years Expertise", value: "20+" },
    { icon: ShieldCheck, title: "Independent Advice", value: "Yes" },
  ],
};

interface ServicePageContentProps {
  slug: string;
}

export function ServicePageContent({ slug }: ServicePageContentProps) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();
  const featuresRef = useRef<HTMLDivElement>(null);
  const Icon = ICON_MAP[service.icon];
  const heroImages: Record<string, string> = {
    "commercial-plumbing": "/hero6.webp",
    "hydronic-heating": "/hero9.webp",
    "steam-boilers": "/hero2.webp",
    "backflow-testing": "/hero4.webp",
    consultation: "/hero5.webp",
  };
  const heroImage = heroImages[slug] || "/plumbing-hero.webp";
  const heroPositions: Record<string, string> = {
    "hydronic-heating": "100% center",
  };
  const heroPosition = heroPositions[slug] || "center";
  const serviceImages: Record<string, string> = {
    "commercial-plumbing": "/p11.webp",
    "hydronic-heating": "/p10.webp",
    "steam-boilers": "/p5.webp",
    "backflow-testing": "/p4.webp",
    consultation: "/p7.webp",
  };
  const serviceImage = serviceImages[slug] || `/${slug}.png`;
  const gallery = SERVICE_GALLERY[slug] || IMAGES.projects.slice(0, 3);
  const highlights = SERVICE_HIGHLIGHTS[slug] || [];
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      {/* ─── Hero — Copy top-left, stats bottom-left, full bleed ── */}
      <PageHero
        label={`Service: ${service.shortTitle}`}
        title={service.title}
        description={service.description}
        image={heroImage}
        imagePosition={heroPosition}
        compact
        showBadges
        stats={highlights.map((h) => ({ value: h.value, label: h.title }))}
      />

      {/* ─── Features — Contained bento ────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="relative rounded-[10px] overflow-hidden min-h-[300px]">
            <Image
              src={serviceImage}
              alt={service.title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Content / Quote form */}
          <div className="relative lg:pl-6">
            {/* Features — always in DOM to hold height */}
            <div ref={featuresRef} className={showQuoteForm ? "hidden lg:block lg:invisible" : ""}>
              <div className="flex items-center gap-3 mb-8">
                <div className="rounded-[10px] bg-brand-900 w-12 h-12 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold-500" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                  What&rsquo;s Included
                </span>
              </div>

              <h2 className="text-brand-950 mb-6">
                What This Service Covers
              </h2>

              <ul className="space-y-3">
                {service.features.map((f) => {
                  const FeatureIcon = FEATURE_ICONS[f] || CheckCircle2;
                  return (
                    <li key={f} className="flex items-start gap-3 p-3 rounded-[10px] bg-brand-50 border border-brand-200 card-text-container">
                      <FeatureIcon className="h-4.5 w-4.5 text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-brand-800 font-medium text-auto-fit min-w-0">{f}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors cursor-pointer w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-brand-200 text-brand-700 hover:bg-brand-50 font-medium text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Quote form — absolutely positioned over features */}
            <div className={cn(
              "rounded-[10px] bg-white border border-brand-200 p-6 sm:p-8 md:p-10 flex flex-col lg:absolute lg:inset-0 transition-all duration-400",
              showQuoteForm ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0 pointer-events-none"
            )}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Image
                    src={IMAGES.logoBlack}
                    alt="Molinnus Plumbing & Heating"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 block mb-1">
                    Get in Touch
                  </span>
                </div>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="rounded-full bg-brand-50 hover:bg-brand-100 p-2 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4 text-brand-500" />
                </button>
              </div>

              {submitted ? (
                <FormSuccess onReset={reset} />
              ) : (
              <form className="space-y-3" onSubmit={validate} noValidate>
                <div>
                  <label className="block text-[0.65rem] font-medium text-brand-500 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input name="name" type="text" placeholder="Full Name" onChange={(e) => trackField("name", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-4 text-base md:text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-brand-200")} />
                  <FieldError message={errors.name} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] font-medium text-brand-500 mb-1">Email <span className="text-red-500">*</span></label>
                    <input name="email" type="email" placeholder="Email" onChange={(e) => trackField("email", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-4 text-base md:text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-brand-200")} />
                    <FieldError message={errors.email} />
                    </div>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-brand-500 mb-1">Phone <span className="text-red-500">*</span></label>
                    <input name="phone" type="tel" placeholder="Phone" onChange={(e) => trackField("phone", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-4 text-base md:text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-brand-200")} />
                    <FieldError message={errors.phone} />
                    </div>
                </div>
                <div className="relative">
                  <label className="block text-[0.65rem] font-medium text-brand-500 mb-1">Service Needed</label>
                  <select defaultValue={slug} className="w-full h-10 rounded-[8px] border border-brand-200 bg-brand-50 px-4 pr-12 text-base md:text-sm text-brand-900 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    {SERVICES.map((s) => (<option key={s.slug} value={s.slug}>{s.title}</option>))}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3 h-4 w-4 text-brand-400 pointer-events-none" />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-medium text-brand-500 mb-1">Project Details <span className="text-red-500">*</span></label>
                  <textarea name="message" placeholder="Tell us about your project..." rows={3} onChange={(e) => trackField("message", e.target.value)} className={cn("w-full rounded-[8px] border bg-brand-50 px-4 py-2 text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-gold-500 transition-colors resize-none", errors.message ? "border-red-500" : "border-brand-200")} />
                  <FieldError message={errors.message} />
                </div>
                {showButton && (
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm h-11 rounded-full transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Sending..." : "Send Request"}
                  {!submitting && <ArrowUpRight className="h-4 w-4" />}
                </button>
                )}
              </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Testimonials ──────────────────────────────────── */}
      <TestimonialsSection />

      {/* ─── Why Molinnus for this service ─────────────────── */}
      <section className="bg-brand-900 text-white border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4 block">
                Why Molinnus
              </span>
              <h2 className="text-white mb-6">
                The Right Contractor for {service.shortTitle}
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="space-y-3">
                {[
                  { text: "TSSA licensed with a spotless inspection record", icon: ShieldCheck },
                  { text: "20+ years of commercial-only experience", icon: Building2 },
                  { text: "Fulton recommended boiler installer", icon: Award },
                  { text: "24/7 emergency service available", icon: Clock },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 p-3.5 rounded-[10px] bg-white/[0.04] border border-white/[0.06] card-text-container">
                    <div className="rounded-[8px] bg-gold-500/10 w-8 h-8 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-gold-500" />
                    </div>
                    <span className="text-white text-auto-fit min-w-0">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal variants={scaleIn} className="relative rounded-[10px] overflow-hidden min-h-[300px] lg:min-h-0">
              <Image
                src="/plumber-working.webp"
                alt="Molinnus technician at work"
                fill
                className="object-cover"
                style={{ objectPosition: "center 60%" }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Conversion text block ─────────────────────────── */}
      <section className="bg-brand-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600 shrink-0 pt-2 md:pt-3">
              {service.shortTitle}
            </span>
            <div>
              <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.25] tracking-tight mb-8">
                <span className="text-brand-900">
                  {SERVICE_CTA_COPY[slug]?.headline || `Trusted ${service.shortTitle.toLowerCase()} services for commercial properties across Ontario`}
                </span>
                <span className="text-brand-300">
                  {" "}{SERVICE_CTA_COPY[slug]?.subline || "backed by 20+ years of hands-on expertise and a spotless safety record."}
                </span>
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 hover:shadow-[0_0_12px_rgba(255,215,3,0.3)] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all w-full sm:w-auto"
                >
                  Get a Free Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-brand-200 text-brand-700 hover:bg-brand-100 font-medium text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other services ───────────────────────────────── */}
      <Section>
        <SectionHeader
          label="Explore More"
          title="Other Services We Offer"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherServices.map((s) => {
            const SIcon = ICON_MAP[s.icon];
            const sImage = SERVICE_IMAGES[s.slug] || IMAGES.hero;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative aspect-[3/4] rounded-[10px] overflow-hidden block"
              >
                <Image
                  src={sImage}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="rounded-full bg-white/20 backdrop-blur-sm w-9 h-9 flex items-center justify-center mb-3">
                    <SIcon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {s.shortTitle}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-brand-950/90 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-gold-500 w-9 h-9 flex items-center justify-center mb-3">
                    <SIcon className="h-4 w-4 text-brand-950" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-3">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500">
                    Learn more
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

    </>
  );
}
