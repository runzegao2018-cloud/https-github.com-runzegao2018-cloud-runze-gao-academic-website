import { publications } from "./publications";

export const researchStreams = [
  {
    id: "emotions-nature",
    title: {
      en: "Transformative Emotions, Nature-Based Experiences, and Sustainable Behavior",
      zh: "变革性情感、自然体验与可持续行为"
    },
    description: {
      en: "This stream examines how transformative emotions and nature-based experiences shape responsible behavior in tourism and environmental contexts.",
      zh: "该方向关注变革性情感与自然体验如何在旅游和环境情境中塑造负责任行为。"
    },
    keywords: [
      "Awe",
      "Self-transcendent emotions",
      "Nature-based tourism",
      "Pro-environmental behavior",
      "Biodiversity conservation",
      "Animal-friendly behavior",
      "Human-nature connection",
      "Sustainable marine tourism"
    ],
    progress: {
      en: "Most developed stream, including a meta-analysis, a published ecological disaster game study, and a Tourism Review manuscript under major revision.",
      zh: "目前最成熟的研究方向，包括一篇元分析、一篇生态灾难游戏实证研究，以及一篇 Tourism Review 重大修改稿。"
    },
    publicationIds: ["awe-meta", "threat-awe-games", "biological-awe"]
  },
  {
    id: "consumer-behavior",
    title: {
      en: "Tourism and Hospitality Consumer Behavior",
      zh: "旅游与酒店消费者行为"
    },
    description: {
      en: "This stream investigates how tourists, consumers, and volunteers form evaluations, intentions, loyalty, patronage behavior, and value co-creation.",
      zh: "该方向考察游客、消费者与志愿者如何形成评价、意向、忠诚、惠顾行为与价值共创。"
    },
    keywords: [
      "Tourism consumer behavior",
      "Sustainable hospitality",
      "Locally sourced restaurants",
      "Destination loyalty",
      "Mega-event tourism",
      "Value co-creation",
      "Moral values",
      "Place attachment"
    ],
    progress: {
      en: "Includes a published mega-sport event loyalty article, submitted restaurant and volunteer manuscripts, and an explainable machine learning research note.",
      zh: "包括一篇大型体育赛事目的地忠诚论文、关于本地食材餐厅与赛事志愿者的投稿稿件，以及一篇可解释机器学习研究札记。"
    },
    publicationIds: ["universiade-loyalty", "local-restaurants", "volunteer-cocreation", "atr-note"]
  },
  {
    id: "technology-governance",
    title: {
      en: "Technology, Governance, and Computational Tourism Research",
      zh: "技术治理与计算旅游研究"
    },
    description: {
      en: "This stream explores how emerging technologies and computational methods can be used to understand and govern tourism systems.",
      zh: "该方向探索新兴技术与计算方法如何用于理解和治理旅游系统。"
    },
    keywords: [
      "Generative AI",
      "Tourism governance",
      "Evolutionary game theory",
      "System dynamics",
      "Collaborative supervision",
      "Explainable machine learning",
      "XGBoost",
      "SHAP"
    ],
    progress: {
      en: "Includes a published article on generative AI risk governance and ongoing computational work in tourism and hospitality consumer research.",
      zh: "包括一篇生成式人工智能风险治理论文，以及旅游与酒店消费者研究中的持续计算方法探索。"
    },
    publicationIds: ["gai-governance", "manure-resource"]
  }
].map((stream) => ({
  ...stream,
  publications: stream.publicationIds.map((id) => publications.find((item) => item.id === id)!)
}));
