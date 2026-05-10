"use client";

import { useState } from "react";
import type { Lang } from "@/data/i18n";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import ResearchAgenda from "./ResearchAgenda";
import FeaturedProjects from "./FeaturedProjects";
import Timeline from "./Timeline";
import Gallery from "./Gallery";
import AcademicProfiles from "./AcademicProfiles";
import FullPublicationList from "./FullPublicationList";
import Contact from "./Contact";

export default function HomeClient() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <ResearchAgenda lang={lang} />
        <FeaturedProjects lang={lang} />
        <Timeline lang={lang} />
        <Gallery lang={lang} />
        <AcademicProfiles lang={lang} />
        <FullPublicationList lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-line bg-ivory py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-charcoal/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Runze (Auen) Gao / 高润泽</p>
          <p>{lang === "en" ? "Tourism, recreation, and sustainable behavior." : "旅游、休闲与可持续行为。"}</p>
        </div>
      </footer>
    </>
  );
}
