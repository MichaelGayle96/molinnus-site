import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ShieldCheck, Award, MessageSquare } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ServicesAccordion } from "@/components/services-accordion";
import { HomeHero } from "@/components/home-hero";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";
import { scaleIn, staggerItem } from "@/lib/animations";
import { SITE, IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* ─── WHO WE ARE — Statement section ─────────────────── */}
      <section className="bg-brand-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ScrollReveal className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600 shrink-0 pt-2 md:pt-3">
              Who We Are
            </span>
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.25] tracking-tight">
              <span className="text-brand-900">
                Molinnus Plumbing & Heating unites 20 years of commercial
                expertise, TSSA-approved craftsmanship, and Fulton-recommended
                installations to deliver
              </span>
              <span className="text-brand-300">
                {" "}reliable hydronic heating, steam boiler, and plumbing
                solutions for property managers across Ontario.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES — Accordion ─────────────────────────── */}
      <ServicesAccordion />

      {/* ─── TESTIMONIALS — Animated ──────────────────────── */}
      <TestimonialsSection />

      {/* ─── WHY MOLINNUS ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            {/* Left — Image */}
            <ScrollReveal variants={scaleIn} className="relative rounded-[10px] overflow-hidden aspect-[4/3]">
              <Image
                src="/plumber-working.webp"
                alt="Molinnus technician working on commercial boiler"
                fill
                className="object-cover"
                style={{ objectPosition: "center 60%" }}
              />
            </ScrollReveal>

            {/* Right — Content */}
            <ScrollReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-brand-950 text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                Commercial-Focused. 20 Years. Zero Compromises.
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center">
                    <ShieldCheck className="h-4.5 w-4.5 text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-brand-900 text-[0.95rem]">
                      100% TSSA Approval Rate
                    </h4>
                    <p className="mt-1 text-sm text-brand-400 leading-relaxed">
                      Every steam boiler we&apos;ve installed has passed TSSA inspection on the first attempt. That&apos;s not a goal, it&apos;s our track record.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center">
                    <Award className="h-4.5 w-4.5 text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-brand-900 text-[0.95rem]">
                      Fulton Recommended Installer
                    </h4>
                    <p className="mt-1 text-sm text-brand-400 leading-relaxed">
                      Fulton directly recommends us to install their boilers across Southern Ontario, a trust earned through years of flawless work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center">
                    <Building2 className="h-4.5 w-4.5 text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-brand-900 text-[0.95rem]">
                      500+ Commercial Projects Completed
                    </h4>
                    <p className="mt-1 text-sm text-brand-400 leading-relaxed">
                      High-rises, institutional buildings, and industrial facilities across Durham, the GTA, and Peterborough. No residential, ever.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─────────────────────────────────── */}
      <Section>
        <SectionHeader
          label="Service Areas"
          title="Serving Communities Across Ontario"
          description="From Durham Region to the Kawarthas, we provide reliable commercial plumbing and heating services wherever your building needs us."
        />

        <StaggerReveal className="flex flex-wrap justify-center gap-4">
          {SITE.regions.map((region) => (
            <ScrollReveal
              key={region}
              variants={staggerItem}
              className="flex items-center justify-center gap-2 rounded-2xl border border-brand-200 bg-white py-5 px-4 text-sm font-medium text-brand-700 hover:border-gold-400 hover:bg-gold-50 transition-colors w-full sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)]"
            >
              <MapPin className="h-4 w-4 text-gold-500 shrink-0" />
              {region}
            </ScrollReveal>
          ))}
        </StaggerReveal>
      </Section>
    </>
  );
}
