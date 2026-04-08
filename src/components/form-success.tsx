"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function FormSuccess({
  dark = false,
  onReset,
}: {
  dark?: boolean;
  onReset?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 animate-[fieldError_0.4s_ease-out]">
      <div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-5 animate-[fieldPing_0.5s_ease-out]",
          dark ? "bg-gold-500/20" : "bg-green-50"
        )}
      >
        <CheckCircle2
          className={cn(
            "h-8 w-8",
            dark ? "text-gold-500" : "text-green-500"
          )}
        />
      </div>
      <h4
        className={cn(
          "text-xl font-bold mb-2",
          dark ? "text-white" : "text-brand-900"
        )}
      >
        Thank You!
      </h4>
      <p
        className={cn(
          "text-sm leading-relaxed max-w-xs",
          dark ? "text-white/50" : "text-brand-500"
        )}
      >
        Your request has been submitted. We&rsquo;ll get back to you within one
        business day.
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className={cn(
            "mt-6 text-xs font-medium underline underline-offset-2 transition-colors",
            dark
              ? "text-white/40 hover:text-white/70"
              : "text-brand-400 hover:text-brand-600"
          )}
        >
          Submit another request
        </button>
      )}
    </div>
  );
}
