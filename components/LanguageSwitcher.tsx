"use client";

import type { Lang } from "@/data/i18n";

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export default function LanguageSwitcher({ lang, onChange }: Props) {
  return (
    <div className="inline-flex rounded-full border border-line bg-paper p-1" aria-label="Language switcher">
      {(["en", "zh"] as Lang[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition ${
            lang === item ? "bg-forest text-white" : "text-charcoal hover:bg-ivory"
          }`}
          aria-pressed={lang === item}
        >
          {item === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
