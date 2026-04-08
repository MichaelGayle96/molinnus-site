"use client";

import { Info } from "lucide-react";

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-1.5 mt-1.5 animate-[fieldError_0.3s_ease-out]">
      <Info className="h-3 w-3 text-red-500 shrink-0 animate-[fieldPing_0.4s_ease-out]" />
      <span className="text-xs text-red-500 font-medium">{message}</span>
    </div>
  );
}
