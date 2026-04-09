"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ArrowUpRight, X, Mail, MapPin, Clock, ShieldCheck, Award, Building2, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE, IMAGES, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
import { useFormValidation } from "@/lib/use-form-validation";
import { FieldError } from "@/components/field-error";
import { FormSuccess } from "@/components/form-success";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "TSSA Approved" },
  { value: "24/7", label: "Emergency Service" },
  { value: "500+", label: "Projects" },
];

export function HomeHero() {
  const [contactOpen, setContactOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();

  // Listen for custom event from navbar
  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener("open-contact-panel", handler);
    return () => window.removeEventListener("open-contact-panel", handler);
  }, []);

  // Measure panel height when open
  useEffect(() => {
    if (contactOpen && panelRef.current) {
      const measure = () => setPanelHeight(panelRef.current?.offsetHeight ?? 0);
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(panelRef.current);
      return () => ro.disconnect();
    } else {
      setPanelHeight(0);
    }
  }, [contactOpen, submitted]);

  return (
    <>
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-end overflow-hidden transition-all duration-400 min-h-[70vh] sm:min-h-[85vh]"
      style={contactOpen && panelHeight > 0 ? { minHeight: `${panelHeight + 88 + 24}px` } : undefined}
    >
      <Image
        src="/hero4.webp"
        alt="Commercial boiler room installation by Molinnus Plumbing & Heating"
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "85% 100%" }}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        priority
      />
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Gold cinematic tint */}
      <div className="absolute inset-0 bg-amber-900/15 mix-blend-multiply" />
      {/* Directional gradients for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* 35mm film grain */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px 150px",
        }}
      />

      {/* Copy bottom-left */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 w-full pb-[50px] md:pb-[4.4rem]">
        <div className="hidden sm:flex items-center gap-3 absolute bottom-[50px] md:bottom-[4.4rem] right-6 lg:right-10 z-[5]">
          <div className="w-[4.5rem] h-[4.5rem] rounded-[10px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5" title="TSSA Licensed">
            <ShieldCheck className="h-6 w-6 text-gold-500" />
            <span className="text-[0.65rem] font-bold text-white/80 tracking-wide">TSSA</span>
          </div>
          <div className="w-[4.5rem] h-[4.5rem] rounded-[10px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5" title="Fulton Recommended Installer">
            <Award className="h-6 w-6 text-gold-500" />
            <span className="text-[0.65rem] font-bold text-white/80 tracking-wide">Fulton</span>
          </div>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-white text-[2.5rem] sm:text-[2.875rem] md:text-[3.08rem] lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight">
            Ontario&rsquo;s Commercial{" "}
            <span className="text-gold-500 sm:whitespace-nowrap">Plumbing & Heating Experts</span>
          </h1>
          <p className="mt-5 text-white/60 text-base sm:text-lg max-w-xl leading-relaxed hidden sm:block">
            Specializing in hydronic heating, steam boiler systems, and
            commercial plumbing solutions. Family-owned and trusted by
            property managers across Durham, the GTA, and Peterborough for
            over 20 years.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-row flex-wrap items-center gap-3">
            <button
              onClick={() => { if (window.innerWidth < 640) { window.location.href = "/contact#quote-form"; } else { setContactOpen(true); } }}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-5 sm:px-7 py-3.5 rounded-full transition-colors cursor-pointer sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:gap-2 border border-white/25 text-white hover:bg-white/10 font-medium text-sm sm:px-7 sm:py-3.5 rounded-full transition-colors shrink-0"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{SITE.phone}</span>
            </a>
          </div>
          {/* Trust badges — mobile only */}
          <div className="flex items-center gap-2 sm:hidden mt-5">
              <div className="h-9 px-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center gap-1.5" title="TSSA Licensed">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                <span className="text-[0.6rem] font-bold text-white/80 tracking-wide">TSSA</span>
              </div>
              <div className="h-9 px-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center gap-1.5" title="Fulton Recommended Installer">
                <Award className="h-3.5 w-3.5 text-gold-500" />
                <span className="text-[0.6rem] font-bold text-white/80 tracking-wide">Fulton</span>
              </div>
          </div>
        </div>
      </div>

      {/* Contact panel - overlays content, hero grows on mobile to fit */}
      <div
        className={cn(
          "absolute inset-x-0 top-[88px] z-20 transition-all duration-400 pointer-events-none",
          contactOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex justify-center lg:justify-end">
        <div ref={panelRef} className="relative w-full max-w-[calc(100%-24px)] sm:max-w-[440px] bg-white/95 backdrop-blur-sm rounded-[10px] shadow-2xl flex flex-col pointer-events-auto">
          {/* Close button — top right */}
          <button
            onClick={() => setContactOpen(false)}
            className="absolute top-4 right-4 z-10 rounded-[8px] bg-brand-50 hover:bg-brand-100 p-2 transition-colors"
          >
            <X className="h-4 w-4 text-brand-500" />
          </button>
          {/* Header */}
          <div className="px-7 pt-7 pb-2">
            <Image
              src={IMAGES.logoBlack}
              alt="Molinnus Plumbing & Heating"
              width={100}
              height={100}
              className="mb-4"
            />
          </div>
          <div className="px-7 pb-4">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
              Get in Touch
            </span>
            <h3 className="text-brand-950 text-xl font-bold mt-1">
              Contact Us
            </h3>
          </div>

          {/* Form */}
          <div className="flex-1 px-7 pb-7">
            {submitted ? (
              <FormSuccess onReset={reset} />
            ) : (
            <form className="space-y-4" onSubmit={validate} noValidate>
              <div>
                <label className="block text-xs font-medium text-brand-600 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => trackField("name", e.target.value)}
                  className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-3 text-sm focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-brand-200")}
                />
                <FieldError message={errors.name} />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-600 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  onChange={(e) => trackField("email", e.target.value)}
                  className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-3 text-sm focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-brand-200")}
                />
                <FieldError message={errors.email} />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-600 mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  onChange={(e) => trackField("phone", e.target.value)}
                  className={cn("w-full h-10 rounded-[8px] border bg-brand-50 px-3 text-sm focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-brand-200")}
                />
                <FieldError message={errors.phone} />
              </div>

              <div className="relative">
                <label className="block text-xs font-medium text-brand-600 mb-1.5">
                  Service Needed
                </label>
                <select
                  defaultValue=""
                  className="w-full h-10 rounded-[8px] border border-brand-200 bg-brand-50 px-3 pr-10 text-sm focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 bottom-3 h-4 w-4 text-brand-400 pointer-events-none" />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-600 mb-1.5">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={3}
                  onChange={(e) => trackField("message", e.target.value)}
                  className={cn("w-full rounded-[8px] border bg-brand-50 px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none", errors.message ? "border-red-500" : "border-brand-200")}
                />
                <FieldError message={errors.message} />
              </div>

              {showButton && (
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-950 hover:bg-brand-800 text-white font-semibold text-sm h-11 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Request"}
                {!submitting && <ArrowUpRight className="h-4 w-4" />}
              </button>
              )}
            </form>
            )}

          </div>
        </div>
        </div>
      </div>

      {/* Overlay when panel is open */}
      {contactOpen && (
        <div
          className="absolute inset-0 bg-black/30 z-10"
          onClick={() => setContactOpen(false)}
        />
      )}

    </section>

    {/* Stats bar below hero */}
    {(() => {
      const stats = [
        { value: "20+", label: "Years Experience", icon: Building2 },
        { value: "100%", label: "TSSA Approved", icon: ShieldCheck },
        { value: "24/7", label: "Emergency Service", icon: Clock },
        { value: "500+", label: "Projects", icon: Award },
      ];
      return (
        <div className="border-b border-brand-200 overflow-hidden">
          {/* Desktop — original static layout */}
          <div className="hidden sm:flex items-center justify-center gap-8 py-4 px-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                <span className="text-sm font-semibold text-brand-500">
                  {stat.value}
                </span>
                <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          {/* Mobile — marquee */}
          <div className="flex sm:hidden items-center gap-6 py-4 px-4 animate-marquee-mobile whitespace-nowrap">
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <div key={`${stat.label}-${i}`} className="flex items-center gap-1.5 shrink-0">
                <span className="text-xs font-semibold text-brand-500">
                  {stat.value}
                </span>
                <span className="text-[0.65rem] text-brand-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    })()}
    </>
  );
}
