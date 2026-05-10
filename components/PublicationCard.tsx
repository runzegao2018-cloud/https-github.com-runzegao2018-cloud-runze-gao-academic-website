import type { Lang } from "@/data/i18n";
import type { Publication, PublicationStatus } from "@/data/publications";

const statusTone: Record<PublicationStatus, string> = {
  Published: "border-forest/20 bg-forest/10 text-forest",
  "Major Revision": "border-gold/30 bg-gold/10 text-[#7a5a21]",
  Submitted: "border-slateblue/30 bg-slateblue/10 text-slateblue",
  "Under Review": "border-slateblue/30 bg-slateblue/10 text-slateblue",
  "Working Paper": "border-charcoal/20 bg-charcoal/5 text-charcoal",
  "Research Note": "border-moss/20 bg-moss/10 text-moss"
};

function emphasizeAuthor(authors: string) {
  const parts = authors.split(/(Gao, R\.|Runze Gao)/g);
  return parts.map((part, index) =>
    part === "Gao, R." || part === "Runze Gao" ? (
      <strong key={`${part}-${index}`} className="font-semibold text-forest">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

export default function PublicationCard({ publication, lang }: { publication: Publication; lang: Lang }) {
  const isPublished = publication.status.includes("Published");

  return (
    <article className="rounded-lg border border-line bg-white/70 p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {publication.status.map((status) => (
          <span key={status} className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusTone[status]}`}>
            {status}
          </span>
        ))}
      </div>
      <h4 className="font-serif text-lg font-semibold leading-snug text-forest">{publication.title}</h4>
      <p className="mt-2 text-sm leading-6 text-charcoal/75">
        {emphasizeAuthor(publication.authors)} {publication.year ? `(${publication.year})` : ""}
      </p>
      <p className="text-sm font-medium text-slateblue">{publication.venue}</p>
      <p className="mt-3 text-sm leading-7 text-charcoal/75">{publication.highlight[lang]}</p>
      <p className="mt-4 border-l-2 border-gold/50 pl-3 text-sm leading-7 text-charcoal/80">{publication.citation}</p>
      {isPublished && publication.doi ? (
        <a
          className="focus-ring mt-4 inline-flex rounded-full border border-forest px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
          href={publication.doi}
          target="_blank"
          rel="noreferrer"
        >
          {lang === "en" ? "View Paper / DOI" : "查看论文 / DOI"}
        </a>
      ) : null}
    </article>
  );
}
