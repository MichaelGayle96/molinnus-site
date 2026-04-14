import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE, NAV_LINKS, SERVICES, IMAGES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white border-t border-white/10">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to start your project?
            </h2>
            <p className="mt-2 text-white/40 text-lg">
              24-hour emergency service available. Call now or request a quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 text-brand-950 px-7 py-3.5 font-semibold text-sm hover:bg-gold-400 transition-colors w-full sm:w-auto"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src={IMAGES.logoWhite}
                alt="Molinnus Plumbing & Heating"
                width={125}
                height={125}
              />
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Family-owned commercial plumbing and heating experts serving Ontario
              for over 20 years. TSSA licensed. Fulton recommended installer.
            </p>
            <div className="mt-5">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Image src="/instagram.svg" alt="Instagram" width={16} height={16} className="invert opacity-40 group-hover:opacity-100 transition-opacity" />
                @molinnusplumbing
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/40 hover:text-gold-500 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneTel}
                  className="flex items-start gap-3 text-sm text-white/40 hover:text-gold-500 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-500/60" />
                  {SITE.phone}
                </a>
              </li>
              <li className="card-text-container">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-white/40 hover:text-gold-500 transition-colors text-auto-fit"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold-500/60" />
                  <span className="min-w-0">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-500/60" />
                <span>
                  Serving Durham, GTA,
                  <br />
                  Peterborough & the Kawarthas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Molinnus Plumbing and Heating. All
            rights reserved.
          </p>
          <p>TSSA Licensed &middot; Ontario College of Trades &middot; WSIB Covered</p>
        </div>
      </div>
    </footer>
  );
}
