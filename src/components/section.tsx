import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "dark" | "brand";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        variant === "muted" && "bg-brand-50",
        variant === "dark" && "bg-brand-900 text-white",
        variant === "brand" && "bg-brand-900 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-18",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            dark ? "text-gold-500" : "text-gold-600"
          )}
        >
          {label}
        </span>
      )}
      <h2 className={cn(dark ? "text-white" : "text-brand-950")}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/60" : "text-brand-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
