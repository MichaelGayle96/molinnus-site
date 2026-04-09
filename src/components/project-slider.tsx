"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <div>
      {/* Header row */}
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3 block">
            Our Work
          </span>
          <h2 className="text-brand-950">Recent Projects</h2>
        </div>
        {canScroll && (
          <button
            onClick={scrollRight}
            className="flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-900 transition-colors whitespace-nowrap shrink-0"
          >
            Scroll to see more
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="group relative shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] aspect-[3/4] rounded-[10px] overflow-hidden snap-start"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Mobile-only dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 md:bg-transparent pointer-events-none" />

            {/* Default state: just category badge — hidden when tapped on mobile */}
            <div className={cn(
              "absolute top-4 left-4 transition-opacity duration-300 group-hover:opacity-0",
              activeIndex === i && "opacity-0"
            )}>
              <span className="inline-block bg-gold-500 text-brand-950 text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Overlay with details — shows on hover (desktop) or tap (mobile) */}
            <div className={cn(
              "absolute inset-0 bg-brand-950/85 flex flex-col justify-end p-6 transition-opacity duration-300",
              "opacity-0 group-hover:opacity-100",
              activeIndex === i && "!opacity-100"
            )}>
              <span className="inline-block bg-gold-500 text-brand-950 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white font-medium mb-1.5">
                <MapPin className="h-3 w-3" />
                {project.location}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-white leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
