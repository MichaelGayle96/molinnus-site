import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page-content";

export const metadata: Metadata = {
  title: "Mechanical Consultation",
  description:
    "Professional paid consultation services providing honest, expert guidance on commercial plumbing and heating projects before you commit.",
};

export default function ConsultationPage() {
  return <ServicePageContent slug="consultation" />;
}
