"use client";

import { navItems, type Lang } from "@/data/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Header({ lang, setLang }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ivory/90 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#home" className="focus-ring rounded-sm font-serif text-lg font-semibold text-forest">
          Runze Gao
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-sm text-sm font-medium text-charcoal/75 hover:text-forest">
              {item.label[lang]}
            </a>
          ))}
        </div>
        <LanguageSwitcher lang={lang} onChange={setLang} />
      </nav>
    </header>
  );
}
