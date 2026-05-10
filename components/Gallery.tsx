import Image from "next/image";
import { gallery } from "@/data/gallery";
import type { Lang } from "@/data/i18n";
import SectionHeading from "./SectionHeading";

export default function Gallery({ lang }: { lang: Lang }) {
  return (
    <section id="gallery" className="border-y border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading
          lang={lang}
          eyebrow={{ en: "Gallery / Life", zh: "影像 / 生活" }}
          title={{ en: "Academic Life, Cultural Experience, and Human-Nature Connection", zh: "学术生活、文化经验与人与自然联结" }}
          intro={{
            en: "A small, curated gallery that supports the academic narrative without becoming a personal photo feed.",
            zh: "一个克制的影像区域，用于补充学术叙事，而非社交媒体式展示。"
          }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <figure key={item.src} className={`card overflow-hidden ${index === 0 ? "sm:col-span-2" : ""}`}>
              <Image
                src={item.src}
                alt={item.alt[lang]}
                width={900}
                height={1100}
                className="h-72 w-full object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{item.category[lang]}</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">{item.caption[lang]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
