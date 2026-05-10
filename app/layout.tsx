import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://runzegao.com"),
  title: {
    default: "Runze (Auen) Gao | Tourism, Recreation, and Sustainable Behavior",
    template: "%s | Runze (Auen) Gao"
  },
  description:
    "Bilingual academic homepage for Runze (Auen) Gao, a graduate researcher in tourism, recreation, environmental psychology, sustainable behavior, and hospitality/tourism management.",
  keywords: [
    "Runze Gao",
    "Auen Gao",
    "高润泽",
    "tourism research",
    "sustainable behavior",
    "environmental psychology",
    "hospitality management",
    "nature-based tourism",
    "generative AI governance",
    "University of Missouri"
  ],
  authors: [{ name: "Runze (Auen) Gao" }],
  openGraph: {
    title: "Runze (Auen) Gao | Academic Website",
    description:
      "Research on how emotion, nature, technology, and tourism experiences shape responsible human behavior.",
    type: "website",
    locale: "en_US",
    images: ["/images/profile/runze-gao-corridor-portrait.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
