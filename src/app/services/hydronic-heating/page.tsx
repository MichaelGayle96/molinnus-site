import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page-content";

export const metadata: Metadata = {
  title: "Hydronic Heating Systems",
  description:
    "Expert design, installation, and servicing of commercial hydronic heating systems. Boiler replacements, system optimization, and energy efficiency upgrades across Ontario.",
};

export default function HydronicHeatingPage() {
  return <ServicePageContent slug="hydronic-heating" />;
}
