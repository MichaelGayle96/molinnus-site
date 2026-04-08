import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page-content";

export const metadata: Metadata = {
  title: "Commercial Plumbing",
  description:
    "Full-service commercial plumbing solutions for high-rise buildings, property management firms, and institutional facilities across Ontario. Backflow testing, re-piping, DHW distribution.",
};

export default function CommercialPlumbingPage() {
  return <ServicePageContent slug="commercial-plumbing" />;
}
