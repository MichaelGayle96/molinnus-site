"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Wrench,
  Flame,
  Gauge,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Phone,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SERVICES, SITE, IMAGES } from "@/lib/constants";
import { TestimonialsSection } from "@/components/testimonials-section";
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

const SERVICE_IMAGES = [
  "/p12.webp",
  "/p10.webp",
  "/project-gas-boiler-room.webp",
  "/p4.webp",
  "/p7.webp",
];

export function ServicesPageContent() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();
  const [glowActive, setGlowActive] = useState(false);
  const glowTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const switchTab = useCallback((i: number) => {
    setActiveTab(i);
    setShowQuoteForm(false);
    setGlowActive(true);
    if (glowTimeoutRef.current) clearTimeout(glowTimeoutRef.current);
    glowTimeoutRef.current = setTimeout(() => setGlowActive(false), 500);
  }, []);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const measureHeight = useCallback(() => {
    if (!contentRef.current) return;
    const panels = contentRef.current.children;
    let maxH = 0;
    for (let i = 0; i < panels.length; i++) {
      const el = panels[i] as HTMLElement;
      // Temporarily make visible to measure
      const prev = el.style.cssText;
      el.style.position = "relative";
      el.style.opacity = "1";
      el.style.visibility = "visible";
      maxH = Math.max(maxH, el.scrollHeight);
      el.style.cssText = prev;
    }
    setContentHeight(maxH);
  }, []);

  useEffect(() => {
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [measureHeight]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <PageHero
        label="Our Services"
        title="Commercial Plumbing & Heating Solutions"
        description="End-to-end mechanical services for high-rise, commercial, and institutional properties. Every project backed by 20+ years of expertise and a spotless safety record."
        image="/hero7.webp"
        imagePosition="center"
        stats={[
          { value: "5", label: "Core Services" },
          { value: "20+", label: "Years Experience" },
          { value: "24/7", label: "Emergency Support" },
        ]}
      />

      {/* ─── Statement block ─────────────────────────────── */}
      <section className="bg-brand-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600 shrink-0 pt-2 md:pt-3">
              Our Services
            </span>
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.25] tracking-tight">
              <span className="text-brand-900">
                TSSA-licensed commercial plumbing, hydronic heating, and
                steam boiler installations with 20+ years of expertise
              </span>
              <span className="text-brand-300">
                {" "}serving commercial and institutional properties across
                Durham, the GTA, Peterborough, and the Kawarthas.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services — Tabbed section ────────────────────── */}
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 items-stretch">
            {/* Left — Active content + tab list below (hidden on mobile when form shows) */}
            <div className={cn("flex flex-col justify-between", showQuoteForm && "invisible lg:visible")}>
              {/* Active service content — hidden on desktop when form shows */}
              <div
                ref={contentRef}
                className={cn("relative overflow-hidden", showQuoteForm && "lg:invisible")}
                style={{ height: contentHeight > 0 ? contentHeight : "auto" }}
              >
                {SERVICES.map((service, i) => {
                  const Icon = ICON_MAP[service.icon];
                  return (
                    <div
                      key={service.slug}
                      className={cn(
                        "transition-all duration-300 absolute inset-0",
                        activeTab === i
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      )}
                    >
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                        Our Services
                      </span>
                      <h2 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight mb-5">
                        {service.title}
                      </h2>

                      <p className="text-base text-white/50 leading-relaxed mb-7 max-w-lg">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                            <span className="text-[0.9rem] text-white/70">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => { setShowQuoteForm(true); setGlowActive(true); if (glowTimeoutRef.current) clearTimeout(glowTimeoutRef.current); glowTimeoutRef.current = setTimeout(() => setGlowActive(false), 500); }}
                          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer"
                        >
                          Request a Quote
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white hover:bg-white/5 font-medium text-sm px-6 py-3 rounded-full transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tab list — compact inline with arrows below */}
              <div className="mt-6 pt-6">
                <div className="w-[70%] border-t border-white/10 mb-6"></div>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((service, i) => {
                    const Icon = ICON_MAP[service.icon];
                    const isActive = activeTab === i;
                    return (
                      <button
                        key={service.slug}
                        id={service.slug}
                        onClick={() => switchTab(i)}
                        className={cn(
                          "scroll-mt-24 text-left px-2.5 py-1.5 rounded-[8px] transition-all duration-300 cursor-pointer border whitespace-nowrap",
                          isActive
                            ? "bg-white/[0.06] border-white/10"
                            : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/[0.06]"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={cn(
                            "h-3.5 w-3.5 shrink-0 transition-colors duration-300",
                            isActive ? "text-gold-500" : "text-white/30"
                          )} />
                          <span className={cn(
                            "text-sm font-medium transition-colors duration-300",
                            isActive ? "text-white" : "text-white/40"
                          )}>
                            {service.shortTitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 mt-[39px]">
                  <button
                    onClick={() => switchTab(activeTab === 0 ? SERVICES.length - 1 : activeTab - 1)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-white/[0.06] transition-all cursor-pointer"
                    aria-label="Previous service"
                  >
                    <ArrowRight className="h-4.5 w-4.5 text-white/50 rotate-180" />
                  </button>
                  <button
                    onClick={() => switchTab(activeTab === SERVICES.length - 1 ? 0 : activeTab + 1)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-white/[0.06] transition-all cursor-pointer"
                    aria-label="Next service"
                  >
                    <ArrowRight className="h-4.5 w-4.5 text-white/50" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile quote form — overlays the invisible content */}
            {showQuoteForm && (
            <div className="absolute inset-0 z-10 lg:hidden rounded-[10px] bg-brand-900 border border-white/10 p-6 sm:p-8 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Image
                    src={IMAGES.logoWhite}
                    alt="Molinnus Plumbing & Heating"
                    width={100}
                    height={100}
                    className="mb-5"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 block mb-1">
                    Get in Touch
                  </span>
                  <h4 className="text-white text-xl font-bold">
                    {SERVICES[activeTab].title}
                  </h4>
                </div>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>

              {submitted ? (
                <FormSuccess dark onReset={reset} />
              ) : (
              <form className="space-y-3" onSubmit={validate} noValidate>
                <div>
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input name="name" type="text" placeholder="Full Name" onChange={(e) => trackField("name", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-white/10")} />
                  <FieldError message={errors.name} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Email <span className="text-red-500">*</span></label>
                    <input name="email" type="email" placeholder="Email" onChange={(e) => trackField("email", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.email} />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Phone <span className="text-red-500">*</span></label>
                    <input name="phone" type="tel" placeholder="Phone" onChange={(e) => trackField("phone", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.phone} />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Service Needed</label>
                  <select defaultValue={SERVICES[activeTab].slug} className="w-full h-10 rounded-[8px] border border-white/10 bg-white/5 px-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    {SERVICES.map((s) => (<option key={s.slug} value={s.slug} className="text-brand-950">{s.title}</option>))}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3 h-4 w-4 text-white/40 pointer-events-none" />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Project Details <span className="text-red-500">*</span></label>
                  <textarea name="message" placeholder="Tell us about your project..." rows={3} onChange={(e) => trackField("message", e.target.value)} className={cn("w-full rounded-[8px] border bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors resize-none", errors.message ? "border-red-500" : "border-white/10")} />
                  <FieldError message={errors.message} />
                </div>
                {showButton && (
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm h-11 rounded-full transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Sending..." : "Send Request"}
                  {!submitting && <ArrowUpRight className="h-4 w-4" />}
                </button>
                )}
              </form>
              )}
            </div>
            )}

            {/* Right — Image / Quote form (desktop only) */}
            <div className="relative hidden lg:block rounded-[12px]">
            <div className="relative rounded-[12px] overflow-hidden bg-brand-900 h-full">
              {/* Image — invisible on desktop when form shows, hidden on mobile */}
              <div className={cn("relative h-full min-h-[400px]", showQuoteForm && "hidden lg:block lg:invisible")}>
              {SERVICE_IMAGES.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={SERVICES[i].title}
                  fill
                  className={cn(
                    "object-cover transition-opacity duration-400 ease-in-out",
                    activeTab === i
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              ))}
              </div>

              {/* Quote form — absolute on desktop, normal flow on mobile */}
              {showQuoteForm && (
              <div className="rounded-[10px] bg-white/[0.04] border border-white/10 p-6 sm:p-8 md:p-10 flex flex-col lg:absolute lg:inset-0">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Image
                      src={IMAGES.logoWhite}
                      alt="Molinnus Plumbing & Heating"
                      width={100}
                      height={100}
                      className="mb-5"
                    />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 block mb-1">
                      Get in Touch
                    </span>
                    <h4 className="text-white text-xl font-bold">
                      {SERVICES[activeTab].title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>

                {submitted ? (
                  <FormSuccess dark onReset={reset} />
                ) : (
                <form className="space-y-3" onSubmit={validate} noValidate>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input name="name" type="text" placeholder="Full Name" onChange={(e) => trackField("name", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.name} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Email <span className="text-red-500">*</span></label>
                      <input name="email" type="email" placeholder="Email" onChange={(e) => trackField("email", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-white/10")} />
                      <FieldError message={errors.email} />
                      </div>
                    <div>
                      <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Phone <span className="text-red-500">*</span></label>
                      <input name="phone" type="tel" placeholder="Phone" onChange={(e) => trackField("phone", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-white/10")} />
                      <FieldError message={errors.phone} />
                      </div>
                  </div>
                  <div className="relative">
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Service Needed</label>
                    <select defaultValue={SERVICES[activeTab].slug} className="w-full h-10 rounded-[8px] border border-white/10 bg-white/5 px-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                      {SERVICES.map((s) => (<option key={s.slug} value={s.slug} className="text-brand-950">{s.title}</option>))}
                    </select>
                    <ChevronDown className="absolute right-4 bottom-3 h-4 w-4 text-white/40 pointer-events-none" />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Project Details <span className="text-red-500">*</span></label>
                    <textarea name="message" placeholder="Tell us about your project..." rows={3} onChange={(e) => trackField("message", e.target.value)} className={cn("w-full rounded-[8px] border bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors resize-none", errors.message ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.message} />
                  </div>
                  {showButton && (
                  <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm h-11 rounded-full transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? "Sending..." : "Send Request"}
                    {!submitting && <ArrowUpRight className="h-4 w-4" />}
                  </button>
                  )}
                </form>
                )}
              </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fullscreen service modal ─────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-300",
          activeService !== null
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveService(null)}
        />

        {/* Card */}
        {activeService !== null && (() => {
          const service = SERVICES[activeService];
          const Icon = ICON_MAP[service.icon];
          const serviceIndex = SERVICES.findIndex((s) => s.slug === service.slug);
          return (
            <div
              className={cn(
                "absolute inset-4 md:inset-8 lg:inset-12 rounded-[14px] overflow-hidden transition-all duration-300 flex flex-col",
                "bg-brand-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40",
                activeService !== null ? "scale-100 opacity-100" : "scale-95 opacity-0"
              )}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-5 right-5 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Left — Text content */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="rounded-[10px] bg-gold-500/15 w-12 h-12 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-gold-500" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                        {service.shortTitle}
                      </span>
                    </div>

                    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-white/50 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 p-3 rounded-[10px] bg-white/[0.04] border border-white/[0.06]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-white/80 font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => setActiveService(null)}
                        className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
                      >
                        View Full Details
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setActiveService(null)}
                        className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-medium text-sm px-7 py-3.5 rounded-full transition-colors"
                      >
                        Request a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right — Image */}
                  <div className="relative hidden md:block">
                    <Image
                      src={SERVICE_IMAGES[serviceIndex]}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Bottom nav — service switcher */}
              <div className="border-t border-white/10 px-6 py-4 flex items-center justify-center gap-2">
                {SERVICES.map((s, i) => {
                  const SIcon = ICON_MAP[s.icon];
                  return (
                    <button
                      key={s.slug}
                      onClick={() => setActiveService(i)}
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        activeService === i
                          ? "bg-gold-500/15 text-gold-500 border border-gold-500/30"
                          : "text-white/40 hover:text-white/70 border border-transparent"
                      )}
                    >
                      <SIcon className="h-3.5 w-3.5 shrink-0" />
                      {s.shortTitle}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </div>

      {/* ─── Testimonials ────────────────────────────────── */}
      <TestimonialsSection />

      {/* ─── Bottom CTA ──────────────────────────────────── */}
      <section className="bg-brand-900 text-white border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 md:py-28 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
            Expert Guidance
          </span>
          <h2 className="text-white max-w-2xl mx-auto">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed max-w-lg mx-auto">
            Our paid consultation service gives you honest, expert guidance
            before you commit. We&rsquo;ll assess your system, identify issues,
            and recommend the right solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 font-medium text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
