import type { Lang, LocalizedString } from "@/data/i18n";

type Props = {
  eyebrow?: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  lang: Lang;
};

export default function SectionHeading({ eyebrow, title, intro, lang }: Props) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow[lang]}</p> : null}
      <h2 className="section-title">{title[lang]}</h2>
      {intro ? <p className="mt-4 text-base leading-8 text-charcoal/75">{intro[lang]}</p> : null}
    </div>
  );
}
