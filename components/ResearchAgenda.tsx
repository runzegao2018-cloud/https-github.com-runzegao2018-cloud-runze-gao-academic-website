import { researchStreams } from "@/data/researchAgenda";
import type { Lang } from "@/data/i18n";
import PublicationCard from "./PublicationCard";
import SectionHeading from "./SectionHeading";

export default function ResearchAgenda({ lang }: { lang: Lang }) {
  return (
    <section id="research" className="py-20">
      <div className="section-shell">
        <SectionHeading
          lang={lang}
          eyebrow={{ en: "Research Agenda & Publications", zh: "研究议程与论文成果" }}
          title={{ en: "Three Streams of Responsible Human Behavior Research", zh: "围绕负责任人类行为的三条研究主线" }}
          intro={{
            en: "Publications and manuscripts are organized as a research agenda. Published articles include DOI links; manuscripts under review and working papers are clearly marked without artificial links.",
            zh: "本部分以研究议程组织论文与项目。已发表论文提供 DOI 链接；在审稿件与工作论文均以状态标注，不添加不存在的链接。"
          }}
        />
        <div className="space-y-8">
          {researchStreams.map((stream, index) => (
            <article key={stream.id} className="card overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="border-b border-line bg-forest p-7 text-white lg:border-b-0 lg:border-r">
                  <p className="text-sm font-semibold text-gold">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight">{stream.title[lang]}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">{stream.description[lang]}</p>
                  <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{lang === "en" ? "Research Progress" : "研究进展"}</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">{stream.progress[lang]}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {stream.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-5 sm:p-7">
                  {stream.publications.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} lang={lang} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
