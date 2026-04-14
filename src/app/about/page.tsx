import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Users,
  Clock,
  GraduationCap,
  HardHat,
  Flame,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";
import { scaleIn, staggerItem } from "@/lib/animations";
import { SITE, CERTIFICATIONS, IMAGES } from "@/lib/constants";

const CERT_ICONS: Record<string, LucideIcon> = {
  "TSSA Licensed & Approved": ShieldCheck,
  "Ontario College of Trades": GraduationCap,
  "WSIB Covered": HardHat,
  "Fulton Recommended Installer": Award,
  "Gas Fitter Certified": Flame,
  "Steamfitter Licensed": Wrench,
};

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-owned commercial plumbing and heating company serving Ontario for over 20 years. TSSA licensed, Fulton recommended installer.",
};

const TIMELINE = [
  {
    year: "2003",
    title: "Founded",
    description:
      "Molinnus Plumbing & Heating is established as a family-owned commercial plumbing contractor in Ontario.",
  },
  {
    year: "2008",
    title: "Hydronic Heating Expansion",
    description:
      "Expanded into commercial hydronic heating systems, becoming a go-to contractor for property management firms.",
  },
  {
    year: "2012",
    title: "Fulton Partnership",
    description:
      "Became a directly recommended Fulton boiler installer, recognized for flawless installation quality across Southern Ontario.",
  },
  {
    year: "2016",
    title: "Steam Boiler Expertise",
    description:
      "Achieved a spotless TSSA approval record on all high-pressure steam boiler installations, a standard we maintain today.",
  },
  {
    year: "2020",
    title: "Regional Expansion",
    description:
      "Expanded service territory to cover Durham Region, the greater GTA, Peterborough, and the Kawarthas.",
  },
  {
    year: "Today",
    title: "20+ Years Strong",
    description:
      "Continuing to deliver commercial plumbing and heating excellence with the same family-owned values we started with.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Every installation meets or exceeds TSSA standards. Our spotless safety record is non-negotiable.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We stand behind our work with the highest standards: ours. Every joint, every connection, done right.",
  },
  {
    icon: Users,
    title: "Family Values",
    description:
      "As a family-owned business, we treat every client relationship as a long-term partnership, not a transaction.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "24/7 emergency service. When your building has a problem, we respond. Day, night, or weekend.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Family-Owned. Commercially Focused. Built on Trust."
        description="For over 20 years, Molinnus Plumbing & Heating has been the contractor that property managers across Ontario trust with their most critical mechanical systems."
        image="/hero3.webp"
        imagePosition="center"
        cinematic
        stats={[
          { value: "20+", label: "Years in Business" },
          { value: "500+", label: "Projects Completed" },
          { value: "100%", label: "TSSA Approval Rate" },
        ]}
      />

      {/* ─── Story — Contained bento ─────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <ScrollReveal variants={scaleIn} className="relative rounded-[10px] overflow-hidden min-h-[300px] lg:min-h-0">
            <Image
              src="/p8.webp"
              alt="Molinnus commercial project"
              fill
              className="object-cover"
            />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal className="lg:pl-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3 block">
              Our Story
            </span>
            <h2 className="text-brand-950">
              Two Decades of Commercial Excellence
            </h2>
            <div className="mt-6 space-y-4 text-brand-500 leading-relaxed text-[0.95rem]">
              <p>
                Molinnus Plumbing & Heating was founded with a clear mission: to
                bring the highest standard of commercial plumbing and heating
                service to Ontario&rsquo;s property managers and building owners.
              </p>
              <p>
                Over the past 20 years, we&rsquo;ve refined our expertise in
                commercial boilers and hydronic systems to perfection. Through
                hundreds of completed projects for property management firms
                across Ontario, we&rsquo;ve earned a reputation that speaks for
                itself.
              </p>
              <p>
                As a TSSA-approved contractor with a spotless inspection record,
                and as a directly recommended Fulton boiler installer, we bring a
                level of specialization that generalist contractors simply
                can&rsquo;t match.
              </p>
            </div>

            {/* Inline stats */}
            <div className="mt-10 flex gap-6">
              {[
                { value: "20+", label: "Years in Business" },
                { value: "500+", label: "Projects Completed" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-[10px] bg-brand-50 border border-brand-200">
                  <div className="text-3xl font-bold text-brand-900 tracking-tighter">
                    {s.value}
                  </div>
                  <div className="text-xs text-brand-400 font-medium uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ─── Values ──────────────────────────────────────── */}
      <Section variant="muted" className="bg-brand-50">
        <SectionHeader
          label="Our Values"
          title="What Drives Us Every Day"
          description="The principles that have kept property managers coming back to us for over two decades."
        />

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <ScrollReveal
              key={v.title}
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-brand-200 hover:border-gold-300 transition-colors"
            >
              <div className="rounded-full bg-brand-900 w-12 h-12 flex items-center justify-center mb-5">
                <v.icon className="h-5 w-5 text-gold-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-900">{v.title}</h3>
              <p className="mt-2 text-sm text-brand-500 leading-relaxed">
                {v.description}
              </p>
            </ScrollReveal>
          ))}
        </StaggerReveal>
      </Section>

      {/* ─── Timeline ────────────────────────────────────── */}
      <Section>
        <SectionHeader label="Our Journey" title="Milestones That Define Us" />

        <Timeline items={TIMELINE} />
      </Section>

      {/* ─── Certifications ──────────────────────────────── */}
      <section className="bg-brand-900 text-white border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 md:py-28">
          <SectionHeader
            label="Certifications & Licensing"
            title="Fully Licensed. Fully Insured."
            description="We hold every certification required for commercial plumbing, heating, and gas fitting work in Ontario."
            dark
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert) => {
              const Icon = CERT_ICONS[cert] || ShieldCheck;
              return (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors card-text-container"
                >
                  <Icon className="h-5 w-5 text-gold-500 shrink-0" />
                  <span className="text-white font-medium text-auto-fit min-w-0">{cert}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
