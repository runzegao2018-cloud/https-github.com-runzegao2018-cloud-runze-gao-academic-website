export type Lang = "en" | "zh";

export type LocalizedString = Record<Lang, string>;

export const navItems = [
  { href: "#about", label: { en: "About", zh: "关于" } },
  { href: "#research", label: { en: "Research", zh: "研究" } },
  { href: "#featured", label: { en: "Featured", zh: "代表项目" } },
  { href: "#timeline", label: { en: "Timeline", zh: "学术路径" } },
  { href: "#gallery", label: { en: "Gallery", zh: "影像" } },
  { href: "#contact", label: { en: "Contact", zh: "联系" } }
] as const;
