"use client";

import { useState, useCallback, useMemo, type FormEvent } from "react";
import { submitContactForm } from "@/lib/actions";

export type FieldErrors = Record<string, string>;

const REQUIRED_FIELDS = ["name", "email", "phone", "message"];

export function useFormValidation() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  const allRequiredFilled = useMemo(
    () => REQUIRED_FIELDS.every((f) => (fieldValues[f] || "").trim().length > 0),
    [fieldValues]
  );

  // Button visible when: user hasn't attempted yet, OR all errors are resolved
  const showButton = !hasAttempted || allRequiredFilled;

  const trackField = useCallback((field: string, value: string) => {
    setFieldValues((prev) => {
      if (prev[field] === value) return prev;
      return { ...prev, [field]: value };
    });
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validate = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasAttempted(true);
    const form = e.currentTarget;
    const newErrors: FieldErrors = {};

    for (const field of REQUIRED_FIELDS) {
      const el = form.elements.namedItem(field) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null;
      if (el && !el.value.trim()) {
        newErrors[field] = "This field is required";
      }
    }

    const emailEl = form.elements.namedItem("email") as HTMLInputElement | null;
    if (
      emailEl &&
      emailEl.value.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return false;

    // Submit to server
    setSubmitting(true);
    try {
      const formData = new FormData(form);
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitted(true);
        return true;
      } else {
        setErrors({ _form: result.error || "Something went wrong" });
        return false;
      }
    } catch {
      setErrors({ _form: "Something went wrong. Please try again." });
      return false;
    } finally {
      setSubmitting(false);
    }
  }, []);

  const clearError = useCallback((field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setErrors({});
    setSubmitting(false);
    setSubmitted(false);
    setHasAttempted(false);
    setFieldValues({});
  }, []);

  return { errors, validate, clearError, trackField, showButton, submitting, submitted, reset };
}
