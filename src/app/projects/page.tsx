import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ProjectSlider } from "@/components/project-slider";
import { FeaturedProject } from "@/components/featured-project";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE, IMAGES, PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View our portfolio of commercial plumbing and heating projects across Ontario including boiler installations, hydronic systems, and re-piping.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects That Speak for Themselves"
        description="From high-rise boiler replacements to commercial re-piping, explore the work that has earned us the trust of property managers across Ontario."
        image="/steam-boiler-hero.webp"
        imagePosition="center right"
        stats={[
          { value: "500+", label: "Projects Completed" },
          { value: "4", label: "Regions Served" },
          { value: "20+", label: "Years Experience" },
        ]}
      />

      {/* ─── Statement block ─────────────────────────────── */}
      <section className="bg-brand-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ScrollReveal className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600 shrink-0 pt-2 md:pt-3">
              Our Work
            </span>
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.25] tracking-tight">
              <span className="text-brand-900">
                Over 500 commercial plumbing and heating projects completed
                across Ontario, from high-rise boiler replacements and hydronic
                system upgrades to
              </span>
              <span className="text-brand-300">
                {" "}emergency repairs, backflow testing programs, and full
                building re-pipes throughout Durham, the GTA, and Peterborough.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Featured Project ──────────────────────────────── */}
      <FeaturedProject />

      {/* ─── Projects Slider ─────────────────────────────── */}
      <Section>
        <ProjectSlider />
      </Section>

      {/* ─── By the Numbers ──────────────────────────────── */}
      <section className="border-y border-brand-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "TSSA Approval Rate" },
              { value: "20+", label: "Years in Business" },
              { value: "4", label: "Regions Served" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`py-12 md:py-16 text-center ${i < 3 ? "md:border-r md:border-brand-200" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-900 tracking-tighter">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-brand-400 font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="bg-brand-900 text-white border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 md:py-28 text-center">
          <ScrollReveal>
          <h2 className="text-white max-w-2xl mx-auto">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed max-w-lg mx-auto">
            Whether it&rsquo;s a boiler replacement, system upgrade, or
            emergency repair, we&rsquo;re ready to deliver the same quality
            you see in our portfolio.
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
