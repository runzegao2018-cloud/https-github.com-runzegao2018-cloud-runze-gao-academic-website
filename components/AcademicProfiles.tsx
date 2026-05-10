import { links } from "@/data/links";
import type { Lang } from "@/data/i18n";

export default function AcademicProfiles({ lang }: { lang: Lang }) {
  const profiles = [
    { label: "Google Scholar", href: links.googleScholar },
    { label: "ORCID", href: links.orcid },
    ...(links.researchGate ? [{ label: "ResearchGate", href: links.researchGate }] : []),
    ...(links.linkedIn ? [{ label: "LinkedIn", href: links.linkedIn }] : [])
  ];

  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="card grid gap-6 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="eyebrow mb-3">{lang === "en" ? "Academic Profiles" : "学术主页"}</p>
            <h2 className="font-serif text-3xl font-semibold text-forest">{lang === "en" ? "Profiles and Identifiers" : "学术档案与身份标识"}</h2>
            <p className="mt-3 text-sm leading-7 text-charcoal/70">
              {lang === "en"
                ? "Citation metrics are intentionally not hard-coded because they change over time."
                : "由于引用数据会动态变化，网站不固定展示具体引用数字。"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {profiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-line bg-ivory px-5 py-3 text-sm font-semibold text-forest hover:border-forest"
              >
                {profile.label}
              </a>
            ))}
            <a className="focus-ring rounded-full border border-line bg-ivory px-5 py-3 text-sm font-semibold text-forest hover:border-forest" href={links.emailHref}>
              {links.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
