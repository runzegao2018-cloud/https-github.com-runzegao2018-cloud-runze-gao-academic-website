import { timeline } from "@/data/timeline";
import type { Lang } from "@/data/i18n";
import SectionHeading from "./SectionHeading";

export default function Timeline({ lang }: { lang: Lang }) {
  return (
    <section id="timeline" className="py-20">
      <div className="section-shell">
        <SectionHeading
          lang={lang}
          eyebrow={{ en: "Academic Timeline", zh: "学术路径" }}
          title={{ en: "Growth Through Training, Publication, and International Experience", zh: "在训练、发表与国际经历中成长" }}
        />
        <div className="relative border-l border-line pl-6">
          {timeline.map((item) => (
            <article key={`${item.year}-${item.en}`} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ivory bg-gold" aria-hidden="true" />
              <p className="text-sm font-semibold text-gold">{item.year}</p>
              <p className="mt-1 max-w-3xl text-lg leading-8 text-charcoal/80">{item[lang]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
