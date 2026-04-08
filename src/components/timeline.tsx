"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

function TimelineEntry({
  item,
  index,
  isLast,
}: {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="flex gap-6 md:gap-10"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="w-14 h-14 rounded-full bg-brand-900 flex items-center justify-center shrink-0"
        >
          <span className="text-xs font-bold text-gold-500">{item.year}</span>
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-px flex-1 bg-brand-200 my-2 origin-top"
          />
        )}
      </div>

      <div className="pb-10 pt-3">
        <h4 className="font-bold text-brand-950 text-lg">{item.title}</h4>
        <p className="mt-1.5 text-brand-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, i) => (
        <TimelineEntry
          key={item.year}
          item={item}
          index={i}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  );
}
