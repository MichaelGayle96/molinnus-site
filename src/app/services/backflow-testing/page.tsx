import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page-content";

export const metadata: Metadata = {
  title: "Backflow Testing & Prevention",
  description:
    "Certified commercial backflow testing and cross-connection control programs to keep your building compliant and your water supply safe across Ontario.",
};

export default function BackflowTestingPage() {
  return <ServicePageContent slug="backflow-testing" />;
}
