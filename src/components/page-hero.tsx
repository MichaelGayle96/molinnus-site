import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock, Award, Gauge, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

export interface HeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  image?: string;
  imagePosition?: string;
  cinematic?: boolean;
  compact?: boolean;
  stats?: HeroStat[];
  showCtas?: boolean;
  fullHeight?: boolean;
  ctaHref?: string;
}

const STAT_ICONS = [ShieldCheck, Clock, Award, Gauge, Star, CheckCircle2];

export function PageHero({
  label,
  title,
  description,
  image,
  imagePosition = "top",
  cinematic = false,
  compact = false,
  stats,
  showCtas = true,
  fullHeight = false,
  ctaHref = "/contact",
}: PageHeroProps) {
  return (
    <>
      <section
        className={`relative flex flex-col justify-end overflow-hidden ${
          fullHeight ? "min-h-screen" : compact ? "min-h-[65vh] md:min-h-[55vh]" : "min-h-[75vh]"
        }`}
      >
        {/* Background image — full bleed */}
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              priority
            />
            <div className="absolute inset-0 bg-black/[0.65] md:bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            {cinematic && (
              <>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-amber-900/25 mix-blend-multiply" />
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "150px 150px",
                  }}
                />
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-brand-900" />
        )}

        {/* Bottom — Copy + CTAs */}
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 w-full pb-10 md:pb-14">
          <div className="max-w-xl">
            {label && (
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
                {label}
              </span>
            )}
            <h1 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-base text-white/60 leading-relaxed max-w-lg">
                {description}
              </p>
            )}
            {showCtas && (
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 font-medium text-sm px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats bar — partner scroll style */}
      {stats && stats.length > 0 && (
        <div className="border-b border-brand-200 overflow-hidden">
          {/* Desktop — original static layout */}
          <div className="hidden sm:flex items-center justify-center gap-8 py-4 px-4">
            {stats.map((stat, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={stat.label} className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                  <span className="text-sm font-semibold text-brand-500">
                    {stat.value}
                  </span>
                  <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Mobile — marquee */}
          <div className="flex sm:hidden items-center gap-6 py-4 px-4 animate-marquee-mobile whitespace-nowrap">
            {[...stats, ...stats, ...stats].map((stat, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={`${stat.label}-${i}`} className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-semibold text-brand-500">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] text-brand-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
