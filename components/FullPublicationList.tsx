import { publications } from "@/data/publications";
import type { Lang } from "@/data/i18n";
import PublicationCard from "./PublicationCard";

export default function FullPublicationList({ lang }: { lang: Lang }) {
  const groups = [
    { title: { en: "Published Articles", zh: "已发表论文" }, items: publications.filter((item) => item.status.includes("Published")) },
    { title: { en: "Manuscripts Under Review", zh: "在审与投稿稿件" }, items: publications.filter((item) => item.status.includes("Under Review") || item.status.includes("Submitted") || item.status.includes("Major Revision")) },
    { title: { en: "Working Papers / Research Notes", zh: "工作论文 / 研究札记" }, items: publications.filter((item) => item.status.includes("Working Paper") || item.status.includes("Research Note")) }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="section-shell">
        <details className="card p-6 md:p-8">
          <summary className="cursor-pointer font-serif text-3xl font-semibold text-forest">
            {lang === "en" ? "Full Publication List" : "完整论文列表"}
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/70">
            {lang === "en"
              ? "A traditional CV-style list for visitors who want to scan all outputs by status."
              : "为希望按状态浏览全部成果的访问者提供的传统简历式列表。"}
          </p>
          <div className="mt-8 space-y-9">
            {groups.map((group) => (
              <div key={group.title.en}>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-forest">{group.title[lang]}</h3>
                <div className="grid gap-4">
                  {group.items.map((item) => (
                    <PublicationCard key={item.id} publication={item} lang={lang} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
