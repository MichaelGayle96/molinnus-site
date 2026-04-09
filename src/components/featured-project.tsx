"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Phone,
  CheckCircle2,
  MapPin,
  X,
  ChevronDown,
} from "lucide-react";
import { SITE, IMAGES, PROJECTS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useFormValidation } from "@/lib/use-form-validation";
import { FieldError } from "@/components/field-error";
import { FormSuccess } from "@/components/form-success";

export function FeaturedProject() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();

  const featured = {
    title: "16-Valve Storage Tank Replacement",
    location: "Ontario",
    category: "Commercial Plumbing",
    description:
      "16 valves replaced over two weekend shutdowns on horizontally installed storage tanks where the man ways were inaccessible due to their top-mounted position. 16 of 18 original ball valves were seized from overheating during the original installation.",
    image: "/p12.webp",
  };

  return (
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
          {/* Left — Content */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4 block">
                Featured Project
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight mb-8">
                {featured.title}
              </h2>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="h-3.5 w-3.5 text-gold-500" />
                <span className="text-sm text-white/50">
                  {featured.location}
                </span>
                <span className="text-white/20 mx-1">|</span>
                <span className="text-sm text-gold-500 font-medium">
                  {featured.category}
                </span>
              </div>

              <p className="text-base text-white/50 leading-relaxed mb-7 max-w-lg">
                {featured.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "16 of 18 seized ball valves replaced across two weekend shutdowns",
                  "Horizontally installed tanks with inaccessible top-mounted man ways",
                  "Valve failure caused by overheating during original installation",
                  "New Kitz gate valves installed for long-term reliability",
                  "Tanks prepped for new man way welding on each unit",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-[0.9rem] text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white hover:bg-white/5 font-medium text-sm px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right — Image / Quote form */}
          <div className="relative rounded-[12px] overflow-hidden self-stretch min-h-[250px] lg:min-h-[300px]">
            {/* Project image — invisible on desktop when form shows, hidden on mobile */}
            <div className={cn("relative w-full h-full min-h-[250px] lg:min-h-[300px]", showQuoteForm && "hidden lg:block lg:invisible")}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Quote form — absolute on desktop, normal flow on mobile */}
            <div className={cn(
              "bg-white/[0.04] border border-white/10 rounded-[12px] p-6 sm:p-8 md:p-10 flex flex-col lg:absolute lg:inset-0 transition-all duration-400",
              showQuoteForm ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0 pointer-events-none"
            )}>
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
                  <input name="name" type="text" placeholder="Full Name" onChange={(e) => trackField("name", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-base md:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.name ? "border-red-500" : "border-white/10")} />
                  <FieldError message={errors.name} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Email <span className="text-red-500">*</span></label>
                    <input name="email" type="email" placeholder="Email" onChange={(e) => trackField("email", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-base md:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.email ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.email} />
                    </div>
                  <div>
                    <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Phone <span className="text-red-500">*</span></label>
                    <input name="phone" type="tel" placeholder="Phone" onChange={(e) => trackField("phone", e.target.value)} className={cn("w-full h-10 rounded-[8px] border bg-white/5 px-3 text-base md:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors", errors.phone ? "border-red-500" : "border-white/10")} />
                    <FieldError message={errors.phone} />
                    </div>
                </div>
                <div className="relative">
                  <label className="block text-[0.65rem] font-medium text-white/50 mb-1">Service Needed</label>
                  <select defaultValue="" className="w-full h-10 rounded-[8px] border border-white/10 bg-white/5 px-4 pr-12 text-base md:text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    <option value="" disabled className="text-brand-950">Select a service...</option>
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
          </div>
        </div>
      </div>
    </section>
  );
}
