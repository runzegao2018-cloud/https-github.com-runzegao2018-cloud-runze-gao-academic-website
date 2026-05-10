import type { LocalizedString } from "./i18n";

export const profile = {
  name: {
    en: "Runze (Auen) Gao",
    zh: "高润泽"
  },
  nameFull: "Runze (Auen) Gao / 高润泽",
  affiliation: {
    en: "School of Natural Resources, University of Missouri",
    zh: "密苏里大学自然资源学院"
  },
  location: {
    en: "Columbia, Missouri, USA",
    zh: "美国密苏里州哥伦比亚"
  },
  position: {
    en: "Graduate Researcher in Tourism, Recreation, and Sustainable Behavior",
    zh: "旅游、休闲与可持续行为方向研究者"
  },
  tagline: {
    en: "Examining how self-transformative emotions and emerging technology experiences shape responsible human behavior.",
    zh: "关注自我变革情感和新兴技术体验如何影响人类的责任行为。"
  },
  narrative: {
    en: "My research examines how self-transformative emotions, emerging technology experiences, tourism and recreation contexts, and decision environments shape responsible human behavior.",
    zh: "我的研究关注自我变革情感、新兴技术体验、旅游休闲情境与决策环境如何共同影响人类的责任行为。"
  },
  portrait: {
    src: "/images/profile/runze-gao-corridor-portrait.jpg",
    alt: {
      en: "Runze Gao standing in a university corridor",
      zh: "高润泽在大学走廊中的学术肖像"
    } satisfies LocalizedString
  }
};

export const biography = {
  paragraphs: [
    {
      en: "Runze (Auen) Gao is a graduate researcher in the School of Natural Resources at the University of Missouri, where he studies tourism, recreation, and sustainable behavior. His research examines how emotional experiences, nature-based encounters, emerging technologies, and decision environments shape responsible human behavior in tourism and hospitality contexts.",
      zh: "高润泽现为密苏里大学自然资源学院硕士研究生，研究方向聚焦于旅游、休闲与可持续行为。他的研究关注情绪体验、自然接触、新兴技术与决策环境如何在旅游和酒店情境中共同塑造负责任的人类行为。"
    },
    {
      en: "Born and raised in rural Yutai, Shandong, China, Runze began his academic training in Tourism Management at Shandong Normal University. During his undergraduate years, he developed interdisciplinary interests across tourism consumer behavior, environmental psychology, economics, and game theory. He later studied as an exchange student at Yonsei University in South Korea, where he further expanded his international academic perspective.",
      zh: "高润泽出生于中国山东鱼台的乡村，本科就读于山东师范大学旅游管理专业。在本科阶段，他逐渐形成了跨学科的研究兴趣，涉及旅游消费者行为、环境心理学、经济学与博弈论等方向。2023年至2024年，他赴韩国延世大学交流学习，进一步拓展了国际化的学术视野。"
    },
    {
      en: "His current research agenda focuses on three interconnected areas: transformative emotions and sustainable behavior, tourism and hospitality consumer behavior, and technology governance and computational tourism research. Through these streams, he seeks to understand how tourism and recreation experiences can promote more responsible, ethical, and sustainable forms of human behavior.",
      zh: "目前，他的研究主要围绕三个相互关联的方向展开：变革性情感与可持续行为、旅游与酒店消费者行为，以及旅游技术治理与计算方法研究。通过这些研究，他希望理解旅游与休闲体验如何促进更负责任、更具伦理性和更可持续的人类行为。"
    }
  ],
  facts: [
    { label: { en: "Current Program", zh: "当前项目" }, value: { en: "Master of Natural Resources, Park, Recreation, Sports & Tourism", zh: "自然资源硕士，公园、休闲、体育与旅游方向" } },
    { label: { en: "Training", zh: "研究训练" }, value: { en: "Tourism behavior, environmental psychology, economics, game theory, computational social science", zh: "旅游行为、环境心理学、经济学、博弈论与计算社会科学" } },
    { label: { en: "Research Experience", zh: "研究经历" }, value: { en: "Research assistant; USDA-funded research involvement", zh: "研究助理经历；参与 USDA 资助研究" } },
    { label: { en: "Awards", zh: "荣誉" }, value: { en: "IMPACT 2023 First Prize; Best Research Assistant Award", zh: "IMPACT 2023 一等奖；最佳研究助理奖" } }
  ]
};
