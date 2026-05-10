import { links } from "@/data/links";
import { profile } from "@/data/profile";
import type { Lang } from "@/data/i18n";

export default function Contact({ lang }: { lang: Lang }) {
  const rows = [
    { label: { en: "Email", zh: "邮箱" }, value: links.email, href: links.emailHref },
    { label: { en: "ORCID", zh: "ORCID" }, value: "0000-0002-2245-6530", href: links.orcid },
    { label: { en: "Affiliation", zh: "机构" }, value: profile.affiliation[lang] },
    { label: { en: "Location", zh: "地点" }, value: profile.location[lang] }
  ];

  return (
    <section id="contact" className="bg-forest py-20 text-white">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">{lang === "en" ? "Contact" : "联系"}</p>
          <h2 className="font-serif text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            {lang === "en" ? "Open to Research Conversations and Collaboration" : "欢迎学术交流与合作"}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            {lang === "en"
              ? "For academic correspondence, conference follow-up, journal communication, and collaboration inquiries."
              : "适用于学术通信、会议后续联系、期刊沟通与合作咨询。"}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {rows.map((row) => (
            <div key={row.label.en} className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{row.label[lang]}</p>
              {row.href ? (
                <a className="focus-ring mt-2 inline-block rounded-sm text-lg font-semibold text-white hover:text-gold" href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {row.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-semibold text-white">{row.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
