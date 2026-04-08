"use client";

import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useFormValidation } from "@/lib/use-form-validation";
import { FieldError } from "@/components/field-error";
import { FormSuccess } from "@/components/form-success";

export function ContactForm() {
  const { errors, validate, clearError, trackField, showButton, submitting, submitted, reset } = useFormValidation();

  if (submitted) {
    return <FormSuccess onReset={reset} />;
  }

  return (
    <form className="space-y-5" onSubmit={validate} noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            onChange={(e) => trackField("name", e.target.value)}
            className={cn("h-12 rounded-xl focus:border-gold-500 focus:ring-gold-500/20", errors.name ? "border-red-500" : "border-brand-200")}
          />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-1.5">
            Company / Building
          </label>
          <Input
            id="company"
            name="company"
            placeholder="ABC Property Management"
            className="h-12 rounded-xl border-brand-200"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            onChange={(e) => trackField("email", e.target.value)}
            className={cn("h-12 rounded-xl", errors.email ? "border-red-500" : "border-brand-200")}
          />
          <FieldError message={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            onChange={(e) => trackField("phone", e.target.value)}
            className={cn("h-12 rounded-xl", errors.phone ? "border-red-500" : "border-brand-200")}
          />
          <FieldError message={errors.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-700 mb-1.5">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="flex h-12 w-full rounded-xl border border-brand-200 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/20 focus-visible:border-gold-500"
          defaultValue=""
        >
          <option value="" disabled>Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="emergency">Emergency Service</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-brand-700 mb-1.5">
          Building Location
        </label>
        <Input
          id="location"
          name="location"
          placeholder="City or address"
          className="h-12 rounded-xl border-brand-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">
          Project Details <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your project, issue, or what you're looking to accomplish..."
          rows={5}
          onChange={(e) => trackField("message", e.target.value)}
          className={cn("rounded-xl", errors.message ? "border-red-500" : "border-brand-200")}
        />
        <FieldError message={errors.message} />
      </div>

      {showButton && (
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm h-12 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Request"}
        {!submitting && <ArrowUpRight className="h-4 w-4" />}
      </button>
      )}

      <p className="text-xs text-brand-400 text-center">
        We respect your privacy. Your information is never shared.
      </p>
    </form>
  );
}
