import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock, Award, Gauge, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

// Tiny dark blurred placeholder — blends with hero overlay during client-side nav
export interface HeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  mobileDescription?: string;
  image?: string;
  imagePosition?: string;
  cinematic?: boolean;
  compact?: boolean;
  stats?: HeroStat[];
  showCtas?: boolean;
  showBadges?: boolean;
  fullHeight?: boolean;
  ctaHref?: string;
}

const STAT_ICONS = [ShieldCheck, Clock, Award, Gauge, Star, CheckCircle2];

export function PageHero({
  label,
  title,
  description,
  mobileDescription,
  image,
  imagePosition = "top",
  cinematic = false,
  compact = false,
  stats,
  showCtas = true,
  showBadges = false,
  fullHeight = false,
  ctaHref = "/contact#quote-form",
}: PageHeroProps) {
  return (
    <>
      <section
        className={`relative flex flex-col justify-end overflow-hidden ${
          fullHeight ? "min-h-screen" : compact ? "min-h-[64vh] md:min-h-[75vh]" : "min-h-[75vh]"
        }`}
      >
        {/* Background image — full bleed */}
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
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
          {showBadges && (
            <div className="hidden sm:flex items-center gap-3 absolute bottom-10 md:bottom-14 right-6 lg:right-10 z-[5]">
              <div className="w-[4.5rem] h-[4.5rem] rounded-[10px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5" title="TSSA Licensed">
                <ShieldCheck className="h-6 w-6 text-gold-500" />
                <span className="text-[0.65rem] font-bold text-white/80 tracking-wide">TSSA</span>
              </div>
              <div className="w-[4.5rem] h-[4.5rem] rounded-[10px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5" title="Fulton Recommended Installer">
                <Award className="h-6 w-6 text-gold-500" />
                <span className="text-[0.65rem] font-bold text-white/80 tracking-wide">Fulton</span>
              </div>
            </div>
          )}
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
              mobileDescription ? (
                <>
                  <p className="mt-4 text-base text-white/60 leading-relaxed max-w-lg hidden sm:block">
                    {description}
                  </p>
                  <p className="mt-4 text-base text-white/60 leading-relaxed max-w-lg sm:hidden">
                    {mobileDescription}
                  </p>
                </>
              ) : (
                <p className="mt-4 text-base text-white/60 leading-relaxed max-w-lg">
                  {description}
                </p>
              )
            )}
            {showCtas && (
              <>
                <div className="mt-6 flex flex-row flex-wrap items-center gap-3">
                  <Link
                    href="/contact#quote-form"
                    className="inline-flex sm:hidden items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-5 py-3 rounded-full transition-colors"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={ctaHref}
                    className="hidden sm:inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm sm:px-6 py-3 rounded-full transition-colors sm:w-auto"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={SITE.phoneTel}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:gap-2 border border-white/25 text-white hover:bg-white/10 font-medium text-sm sm:px-6 sm:py-3 rounded-full transition-colors shrink-0"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="hidden sm:inline">{SITE.phone}</span>
                  </a>
                </div>
                {showBadges && (
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
                )}
              </>
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
