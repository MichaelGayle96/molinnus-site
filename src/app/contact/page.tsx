import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,

  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SITE, SERVICES, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote for commercial plumbing and heating services. 24-hour emergency service available. Serving Durham, GTA, Peterborough & the Kawarthas.",
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneTel,
    note: "24/7 Emergency Line",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Durham, GTA, Peterborough & Kawarthas",
    href: undefined,
    note: "Southern Ontario",
  },
  {
    icon: Clock,
    label: "Emergency Service",
    value: "Available 24/7",
    href: SITE.phoneTel,
    note: "Call anytime for urgent issues",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's Discuss Your Project"
        description="Whether you need an emergency repair, a quote on a new installation, or expert consultation, we're here to help."
        compact
        ctaHref="#quote-form"
        stats={[
          { value: "24/7", label: "Emergency Service" },
          { value: "<24hr", label: "Response Time" },
          { value: "Free", label: "Quotes" },
        ]}
      />

      <Section className="!pt-14 md:!pt-18 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ─── Form ──────────────────────────────────────── */}
          <div className="lg:col-span-3 min-w-0">
            <div id="quote-form" className="bg-white rounded-2xl border border-brand-200 p-5 sm:p-8 md:p-10 scroll-mt-24">
              <h2 className="text-2xl font-bold text-brand-950 mb-2">
                Request a Free Quote
              </h2>
              <p className="text-brand-500 mb-8">
                Fill out the form below and we&rsquo;ll get back to you within
                one business day.
              </p>

              <ContactForm />
            </div>
          </div>

          {/* ─── Contact Info Sidebar ──────────────────────── */}
          <div className="lg:col-span-2 space-y-5 min-w-0">
            {CONTACT_INFO.map((item) => {
              const inner = (
                <div className="flex gap-4">
                  <div className="rounded-full bg-brand-900 w-11 h-11 flex items-center justify-center shrink-0">
                    <item.icon className="h-4.5 w-4.5 text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="mt-1 font-semibold text-brand-900 text-auto-fit">
                      {item.value}
                    </div>
                    <div className="text-xs text-brand-400 mt-0.5">
                      {item.note}
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl border border-brand-200 bg-white p-5 hover:border-gold-400 transition-colors card-text-container"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="rounded-2xl border border-brand-200 bg-white p-5 card-text-container"
                >
                  {inner}
                </div>
              );
            })}

            {/* Emergency banner */}
            <div className="rounded-2xl bg-gold-50 border border-gold-300 p-6">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand-950" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">
                    24/7 Emergency Service
                  </h4>
                  <p className="text-sm text-brand-600 mt-1">
                    Burst pipe? Boiler failure? Call us immediately. We&rsquo;re
                    available around the clock.
                  </p>
                  <a
                    href={SITE.phoneTel}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-900 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider mb-3">
                Follow Us
              </div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 font-medium transition-colors"
              >
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                @molinnusplumbing
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Service Areas ───────────────────────────────── */}
      <section className="bg-brand-50 border-t border-brand-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3 block">
              Service Coverage
            </span>
            <h2 className="text-brand-950">Areas We Serve</h2>
            <p className="mt-3 text-brand-500">
              We provide commercial plumbing and heating services across these
              Ontario regions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {SITE.regions.map((region) => (
              <div
                key={region}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white border border-brand-200 py-4 px-5 text-sm font-medium text-brand-700 hover:border-gold-400 hover:bg-gold-50 transition-colors w-full sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)]"
              >
                <CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0" />
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
