import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Molinnus Plumbing & Heating | Commercial Plumbing & Heating Experts | Ontario",
    template: "%s | Molinnus Plumbing & Heating",
  },
  description:
    "Ontario's trusted commercial plumbing and heating contractor. Specializing in hydronic heating, steam boilers, backflow testing, and commercial plumbing. TSSA licensed. Serving Durham, GTA, Peterborough & the Kawarthas for over 20 years.",
  keywords: [
    "commercial plumbing Ontario",
    "hydronic heating contractor",
    "steam boiler installation",
    "commercial heating GTA",
    "backflow testing Ontario",
    "TSSA approved contractor",
    "Fulton boiler installer",
    "commercial plumbing Durham Region",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
