import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services-page-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial plumbing, hydronic heating, steam boiler installation, backflow testing, and mechanical consultation services across Ontario.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
