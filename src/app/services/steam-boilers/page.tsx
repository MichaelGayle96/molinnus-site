import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page-content";

export const metadata: Metadata = {
  title: "Steam Boiler Systems",
  description:
    "TSSA-approved high-pressure steam boiler installations with a spotless safety record. Recommended Fulton boiler installer serving Southern Ontario.",
};

export default function SteamBoilersPage() {
  return <ServicePageContent slug="steam-boilers" />;
}
