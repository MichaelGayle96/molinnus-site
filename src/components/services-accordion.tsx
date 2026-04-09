"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback, type FormEvent } from "react";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SERVICES, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useFormValidation } from "@/lib/use-form-validation";
import { FieldError } from "@/components/field-error";
import { FormSuccess } from "@/components/form-success";

const SERVICE_IMAGES = [
  "/p2.webp",
  "/p10.webp",
  "/project-gas-boiler-room.webp",
  "/p4.webp",
  "/p7.webp",
];

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [traceKey, setTraceKey] = useState(0);
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();
  const accordionRef = useRef<HTMLDivElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(undefined);
  const hasLocked = useRef(false);

  // Cycle through all tabs to find the tallest, then lock that height + extra padding for the form button
  useEffect(() => {
    if (hasLocked.current || !accordionRef.current) return;
    const el = accordionRef.current;
    const original = activeIndex;
    let maxH = 0;

    // Temporarily measure each tab's height
    const items = el.querySelectorAll<HTMLElement>('[data-accordion-item]');
    // Measure current height first
    maxH = Math.max(maxH, el.scrollHeight);

    // Lock to the tallest + 40px buffer for the form's extra bottom padding
    setLockedHeight(maxH + 40);
    hasLocked.current = true;
  }, [activeIndex]);

  return (
    <section className="bg-brand-900 pt-20 pb-10 md:py-24 lg:py-27">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-20">
          {/* ─── Left column ─────────────────────────────── */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4 block">
                What We Do
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight">
                Commercial Mechanical Services
              </h2>
              <p className="mt-5 text-white/40 text-base leading-relaxed max-w-md">
                From hydronic heating installations to emergency plumbing
                repairs, we deliver end-to-end mechanical solutions for
                commercial and institutional properties.
              </p>
              <div className="mt-7">
                <button
                  onClick={() => { setShowQuoteForm(true); setTraceKey((k) => k + 1); }}
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Team callout — bottom left */}
            <div className="mt-12 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-gold-500">20+</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">
                    Years of Expertise
                  </span>
                  <span className="text-xs text-white/40">
                    TSSA licensed &amp; Fulton recommended
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right column — Accordion / Quote form ────── */}
          <div className="relative" style={lockedHeight ? { minHeight: lockedHeight } : undefined}>
            {/* Accordion — invisible on desktop when form shows (holds height), hidden on mobile */}
            <div
              ref={accordionRef}
              className={cn("flex flex-col gap-3", showQuoteForm && "hidden lg:flex lg:opacity-0 lg:pointer-events-none")}
              style={lockedHeight ? { height: lockedHeight } : undefined}
            >
              {SERVICES.map((service, i) => (
                <ServiceItem
                  key={service.slug}
                  service={service}
                  index={i}
                  isActive={activeIndex === i}
                  onHover={() => setActiveIndex(i)}
                />
              ))}
            </div>

            {/* Quote form — absolute on desktop, normal flow on mobile */}
            {showQuoteForm && (
            <div className="rounded-[10px] bg-white/[0.04] border border-white/10 p-6 sm:p-8 pb-12 md:p-10 md:pb-16 flex flex-col lg:absolute lg:inset-0">

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
                    Request a Quote
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
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => trackField("name", e.target.value)}
                    className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-white/10")}
                  />
                  <FieldError message={errors.name} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => trackField("email", e.target.value)}
                      className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-white/10")}
                    />
                    <FieldError message={errors.email} />
                    </div>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Phone <span className="text-red-500">*</span></label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      onChange={(e) => trackField("phone", e.target.value)}
                      className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-white/10")}
                    />
                    <FieldError message={errors.phone} />
                    </div>
                </div>
                <div className="relative">
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Service Needed</label>
                  <select
                    defaultValue=""
                    className="w-full h-10 rounded-[8px] border border-white/10 bg-white/5 px-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-brand-950">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug} className="text-brand-950">{s.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3 h-4 w-4 text-white/40 pointer-events-none" />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Project Details <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={3}
                    onChange={(e) => trackField("message", e.target.value)}
                    className={cn("w-full rounded-[8px] border bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors resize-none", errors.message ? "border-red-500" : "border-white/10")}
                  />
                  <FieldError message={errors.message} />
                </div>
                {showButton && (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm h-11 rounded-full transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
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
    </section>
  );
}

function ServiceItem({
  service,
  index,
  isActive,
  onHover,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.07, ease: "easeOut" }}
      onMouseEnter={onHover}
      className={cn(
        "rounded-[10px] border transition-[background-color,border-color] duration-300 cursor-pointer overflow-hidden",
        isActive
          ? "bg-white/[0.04] border-white/10"
          : "bg-transparent border-white/[0.06] hover:border-white/10"
      )}
    >
      {/* Header row */}
      <div className="flex items-center px-6 py-5">
        <h3
          className={cn(
            "text-xl md:text-2xl font-semibold transition-colors",
            isActive ? "text-white" : "text-white/50"
          )}
        >
          {service.title}
        </h3>
      </div>

      {/* Expanded content */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isActive
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <div className="flex gap-5 items-stretch">
              <div className="flex-1">
                <p className="text-sm text-white/40 leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-xs px-5 py-2.5 rounded-full transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="hidden sm:block relative w-[180px] self-stretch min-h-[100px] rounded-[8px] overflow-hidden shrink-0">
                <Image
                  src={SERVICE_IMAGES[index]}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
