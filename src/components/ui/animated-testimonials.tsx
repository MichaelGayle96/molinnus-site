"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star, type LucideIcon } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: { label: string; icon: LucideIcon }[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-14 md:py-16 overflow-hidden bg-muted/30 ${className || ""}`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-10 w-full md:grid-cols-2 lg:gap-16"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-4">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{title}</h2>

              <p className="max-w-[600px] text-muted-foreground md:text-base/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full mr-10 min-h-[360px] sm:min-h-[300px] md:min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.97,
                }}
                transition={{ duration: 0.4, ease: "easeOut" as const }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-card border shadow-lg rounded-xl p-6 h-full flex flex-col">
                  <div className="mb-4 flex gap-1.5">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                  </div>

                  <div className="mb-4 flex-1">
                    <p className="text-sm sm:text-base font-medium leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  </div>

                  <Separator className="my-3" />

                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

        {/* Certifications marquee */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-14">
            <h3 className="text-base font-semibold text-muted-foreground mb-8 text-left">{trustedCompaniesTitle}</h3>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-muted/30 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-muted/30 to-transparent" />
              <div className="flex animate-marquee whitespace-nowrap">
                {[...trustedCompanies, ...trustedCompanies].map((company, i) => {
                  const Icon = company.icon;
                  return (
                    <div key={`${company.label}-${i}`} className="flex items-center gap-2.5 text-lg font-semibold text-muted-foreground/50 mx-8 shrink-0">
                      <Icon className="h-5 w-5 shrink-0" />
                      <span>{company.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
