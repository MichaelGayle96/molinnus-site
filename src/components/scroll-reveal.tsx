"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  amount?: number;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  amount = 0.15,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  amount = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer(staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
