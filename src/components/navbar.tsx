"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Phone,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Flame,
  Gauge,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { SITE, NAV_LINKS, SERVICES, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = {
  Wrench,
  Flame,
  Gauge,
  ShieldCheck,
  MessageSquare,
} as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <nav className="flex items-center h-[72px]">
          {/* Left — Logo */}
          <Link href="/" className="relative shrink-0 mr-auto lg:mr-0">
            <Image
              src={IMAGES.logoBlack}
              alt="Molinnus Plumbing & Heating"
              width={125}
              height={125}
              className={cn(
                "transition-opacity duration-300",
                scrolled || mobileOpen ? "opacity-100" : "opacity-0"
              )}
            />
            <Image
              src={IMAGES.logoWhite}
              alt="Molinnus Plumbing & Heating"
              width={125}
              height={125}
              className={cn(
                "absolute top-0 left-0 transition-opacity duration-300",
                scrolled || mobileOpen ? "opacity-0" : "opacity-100"
              )}
            />
          </Link>

          {/* Center — Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-0.5 mx-auto">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="relative flex items-center h-[72px]"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1 px-4 py-2 text-[0.82rem] font-semibold tracking-wide transition-colors rounded-full",
                        scrolled
                          ? pathname.startsWith("/services")
                            ? "text-brand-900"
                            : "text-brand-500 hover:text-brand-900"
                          : pathname.startsWith("/services")
                            ? "text-white"
                            : "text-white/90 hover:text-white"
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 transition-all duration-200",
                        scrolled ? "top-full pt-0" : "top-full pt-3",
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      <div className={cn(
                        "bg-brand-950 border border-white/10 shadow-2xl shadow-black/30 p-2.5 w-[300px]",
                        scrolled ? "rounded-b-[10px] rounded-t-none border-t-0" : "rounded-[10px]"
                      )}>
                        {SERVICES.map((service) => {
                          const Icon = SERVICE_ICONS[service.icon];
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-white/5 transition-colors group"
                            >
                              <div className="rounded-lg bg-white/10 w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-500/20 transition-colors">
                                <Icon className="h-3.5 w-3.5 text-gold-500" />
                              </div>
                              <div>
                                <span className="text-[0.8rem] font-semibold text-white block leading-tight">
                                  {service.shortTitle}
                                </span>
                                <span className="text-[0.7rem] text-white/40 leading-snug mt-0.5 block">
                                  {service.navDesc}
                                </span>
                              </div>
                            </Link>
                          );
                        })}

                        <div className="border-t border-white/10 mt-2 pt-2">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 rounded-lg p-3.5 hover:bg-white/5 transition-colors text-[0.8rem] font-medium text-white/50 hover:text-white"
                          >
                            View all services
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-[0.82rem] font-semibold tracking-wide transition-colors rounded-full",
                    scrolled
                      ? pathname === link.href
                        ? "text-brand-900"
                        : "text-brand-500 hover:text-brand-900"
                      : pathname === link.href
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right — CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 ml-auto">
            {pathname === "/" ? (
              <button
                onClick={() => {
                  const heroHeight = window.innerHeight * 0.9;
                  if (window.scrollY < heroHeight) {
                    window.dispatchEvent(new CustomEvent("open-contact-panel"));
                  } else {
                    window.location.href = "/contact";
                  }
                }}
                className="inline-flex items-center gap-2 text-[0.8rem] font-semibold px-5 py-2 rounded-full bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors cursor-pointer"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : pathname === "/contact" ? (
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 text-[0.8rem] font-semibold px-5 py-2 rounded-full bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <Link
                href="/contact#quote-form"
                className="inline-flex items-center gap-2 text-[0.8rem] font-semibold px-5 py-2 rounded-full bg-gold-500 text-brand-950 hover:bg-gold-400 transition-colors"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
            <a
              href={SITE.phoneTel}
              className={cn(
                "inline-flex items-center gap-2 text-[0.8rem] font-medium px-5 py-2 rounded-full border transition-all",
                scrolled
                  ? "border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-brand-900"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phone}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || mobileOpen
                ? "text-brand-900 hover:bg-brand-100"
                : "text-white/90 hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border-t border-brand-100">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-[0.95rem] font-medium transition-colors",
                        pathname.startsWith("/services")
                          ? "bg-brand-50 text-brand-900"
                          : "text-brand-500 hover:bg-brand-50 hover:text-brand-900"
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        mobileServicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {SERVICES.map((service) => {
                          const Icon = SERVICE_ICONS[service.icon];
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-brand-500 hover:bg-brand-50 hover:text-brand-900 transition-colors"
                            >
                              <Icon className="h-4 w-4 text-gold-500 shrink-0" />
                              {service.shortTitle}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-brand-400 hover:text-brand-900 transition-colors"
                        >
                          View all services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-[0.95rem] font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brand-50 text-brand-900"
                      : "text-brand-500 hover:bg-brand-50 hover:text-brand-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="px-6 pb-6 pt-2 border-t border-brand-100 space-y-3">
            <Link
              href="/contact#quote-form"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-gold-500 text-brand-950 text-sm font-semibold h-11 hover:bg-gold-400 transition-colors"
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={SITE.phoneTel}
              className="flex items-center justify-center gap-2 w-full rounded-full border border-brand-200 text-brand-900 text-sm font-semibold h-11 hover:bg-brand-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
