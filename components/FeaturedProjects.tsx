import { featuredProjects } from "@/data/projects";
import type { Lang } from "@/data/i18n";
import SectionHeading from "./SectionHeading";

export default function FeaturedProjects({ lang }: { lang: Lang }) {
  return (
    <section id="featured" className="border-y border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading
          lang={lang}
          eyebrow={{ en: "Featured Research", zh: "代表性研究" }}
          title={{ en: "Selected Projects With Theoretical and Methodological Range", zh: "兼具理论与方法广度的代表项目" }}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title.en} className="card p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-forest">{project.title[lang]}</h3>
                <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-[#7a5a21]">
                  {project.status}
                </span>
              </div>
              <dl className="space-y-4 text-sm leading-7 text-charcoal/75">
                <div>
                  <dt className="font-semibold text-forest">{lang === "en" ? "Research question" : "研究问题"}</dt>
                  <dd>{project.question[lang]}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest">{lang === "en" ? "Theoretical framework" : "理论框架"}</dt>
                  <dd>{project.framework[lang]}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest">{lang === "en" ? "Methods" : "方法"}</dt>
                  <dd>{project.methods}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest">{lang === "en" ? "Key contribution" : "核心贡献"}</dt>
                  <dd>{project.contribution[lang]}</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-slateblue">{project.related}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
