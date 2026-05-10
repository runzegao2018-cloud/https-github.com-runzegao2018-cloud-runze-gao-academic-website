import Image from "next/image";
import { links } from "@/data/links";
import { profile } from "@/data/profile";
import type { Lang } from "@/data/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const actions = [
    { href: links.cv, label: lang === "en" ? "Download CV" : "下载简历" },
    { href: "#research", label: lang === "en" ? "Publications" : "论文成果" },
    { href: links.googleScholar, label: "Google Scholar" },
    { href: links.orcid, label: "ORCID" },
    { href: links.emailHref, label: lang === "en" ? "Email" : "邮件" }
  ];

  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
      <div>
        <p className="eyebrow mb-5">{lang === "en" ? "Academic Homepage" : "个人学术主页"}</p>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-forest sm:text-6xl lg:text-7xl">
          {profile.name[lang]}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-8 text-charcoal">{profile.position[lang]}</p>
        <p className="mt-2 text-base font-medium text-slateblue">{profile.affiliation[lang]}</p>
        <p className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-xl leading-9 text-charcoal/80">{profile.tagline[lang]}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          {actions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") || action.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={action.href.startsWith("http") || action.href.endsWith(".pdf") ? "noreferrer" : undefined}
              className={`focus-ring rounded-full px-5 py-3 text-sm font-semibold transition ${
                index === 0 ? "bg-forest text-white hover:bg-charcoal" : "border border-line bg-paper text-forest hover:border-forest"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-5 top-8 h-40 w-28 rounded-lg border border-gold/25 bg-gold/10" aria-hidden="true" />
        <figure className="card relative overflow-hidden">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt[lang]}
            width={1200}
            height={1500}
            priority
            className="h-[560px] w-full object-cover object-[50%_42%]"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
          <figcaption className="border-t border-line bg-paper/95 p-5 text-sm leading-6 text-charcoal/70">
            {profile.narrative[lang]}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
