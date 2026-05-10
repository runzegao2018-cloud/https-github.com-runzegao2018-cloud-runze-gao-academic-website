import { awards } from "@/data/awards";
import { biography } from "@/data/profile";
import type { Lang } from "@/data/i18n";
import SectionHeading from "./SectionHeading";

export default function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="border-y border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading
          lang={lang}
          eyebrow={{ en: "About", zh: "关于" }}
          title={{ en: "A Research Trajectory Across Places, Disciplines, and Questions", zh: "跨越地域、学科与问题意识的研究路径" }}
        />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6 text-base leading-8 text-charcoal/80">
            {biography.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[lang]}</p>
            ))}
          </div>
          <aside className="space-y-4">
            {biography.facts.map((fact) => (
              <div key={fact.label.en} className="rounded-lg border border-line bg-ivory p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{fact.label[lang]}</p>
                <p className="mt-2 text-sm leading-7 text-charcoal/80">{fact.value[lang]}</p>
              </div>
            ))}
            <div className="rounded-lg border border-forest/15 bg-forest p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{lang === "en" ? "Selected Recognition" : "部分荣誉"}</p>
              <div className="mt-4 space-y-3">
                {awards.map((award) => (
                  <div key={award.title.en}>
                    <p className="font-semibold">{award.title[lang]}</p>
                    <p className="text-sm leading-6 text-white/75">{award.description[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
