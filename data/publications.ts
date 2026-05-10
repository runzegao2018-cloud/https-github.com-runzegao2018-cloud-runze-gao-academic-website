export type PublicationStatus =
  | "Published"
  | "Major Revision"
  | "Submitted"
  | "Under Review"
  | "Working Paper"
  | "Research Note";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  year?: string;
  venue: string;
  status: PublicationStatus[];
  doi?: string;
  citation: string;
  highlight: {
    en: string;
    zh: string;
  };
};

export const publications: Publication[] = [
  {
    id: "awe-meta",
    title: "From awe to pro-environmental behavior: A meta-analysis of the relationship between awe and pro-environmental behavior",
    authors: "Gao, R.",
    year: "2025",
    venue: "The Journal of Positive Psychology",
    status: ["Published"],
    doi: "https://doi.org/10.1080/17439760.2025.2569090",
    citation:
      "Gao, R. (2025). From awe to pro-environmental behavior: A meta-analysis of the relationship between awe and pro-environmental behavior. The Journal of Positive Psychology, 1-13.",
    highlight: {
      en: "Synthesizes evidence on the relationship between awe and pro-environmental behavior and identifies contextual factors that shape the strength of this relationship.",
      zh: "整合敬畏情绪与亲环境行为之间关系的研究证据，并识别影响该关系强度的情境因素。"
    }
  },
  {
    id: "threat-awe-games",
    title: "From Virtual Crisis to Real Intention: Exploring the Role of Threat-Awe in Biodiversity Conservation via Ecological Disaster Games",
    authors: "Gao, R., & Liu, G.",
    year: "2026",
    venue: "International Journal of Human-Computer Interaction",
    status: ["Published"],
    doi: "https://doi.org/10.1080/10447318.2026.2649924",
    citation:
      "Gao, R., & Liu, G. (2026). From Virtual Crisis to Real Intention: Exploring the Role of Threat-Awe in Biodiversity Conservation via Ecological Disaster Games. International Journal of Human-Computer Interaction, 1-22.",
    highlight: {
      en: "Examines how ecological disaster games stimulate biodiversity conservation intention through threat appraisal and threat awe, using PLS-SEM, ANN, and fsQCA.",
      zh: "运用 PLS-SEM、ANN 与 fsQCA，考察生态灾难游戏如何通过威胁评估与威胁性敬畏激发生物多样性保护意向。"
    }
  },
  {
    id: "biological-awe",
    title: "Manuscript on biological awe and animal-friendly behavior in marine tourism",
    authors: "Gao, R., & Dai, G.",
    venue: "Tourism Review",
    status: ["Major Revision", "Under Review"],
    citation:
      "Gao, R., & Dai, G. Manuscript on biological awe and animal-friendly behavior in marine tourism. Tourism Review. Major revision.",
    highlight: {
      en: "Investigates whether biological awe elicited by marine life encounters promotes animal-friendly behavior through small self and connectedness with nature, with anthropomorphism as a boundary condition.",
      zh: "探讨海洋生物接触引发的生物性敬畏是否通过渺小自我与自然联结促进动物友好行为，并考察拟人化的边界作用。"
    }
  },
  {
    id: "universiade-loyalty",
    title: "Understanding tourist destination loyalty in mega-sporting events: An extended expectation confirmation model study of the Chengdu Universiade",
    authors: "Gao, R., Wang, X., & Dai, G.",
    year: "2025",
    venue: "Journal of Quality Assurance in Hospitality & Tourism",
    status: ["Published"],
    doi: "https://doi.org/10.1080/1528008X.2025.2457946",
    citation:
      "Gao, R., Wang, X., & Dai, G. (2025). Understanding tourist destination loyalty in mega-sporting events: An extended expectation confirmation model study of the Chengdu Universiade. Journal of Quality Assurance in Hospitality & Tourism, 1-29.",
    highlight: {
      en: "Extends the expectation confirmation model to explain destination loyalty in the context of mega-sporting events.",
      zh: "拓展期望确认模型，以解释大型体育赛事情境下的旅游目的地忠诚形成机制。"
    }
  },
  {
    id: "local-restaurants",
    title: "Manuscript on locally sourced restaurants and consumer decision-making",
    authors: "Gao, R., & Xu, S.",
    venue: "Journal of Hospitality and Tourism Management",
    status: ["Submitted"],
    citation:
      "Gao, R., & Xu, S. Manuscript on locally sourced restaurants and consumer decision-making. Journal of Hospitality and Tourism Management. Submitted.",
    highlight: {
      en: "Integrates Value-Belief-Norm theory and the Theory of Planned Behavior to explain consumers' patronage intention toward locally sourced restaurants.",
      zh: "整合价值-信念-规范理论与计划行为理论，解释消费者对本地食材餐厅的惠顾意向。"
    }
  },
  {
    id: "volunteer-cocreation",
    title: "Manuscript on host-guest relationships and volunteer value co-creation in mega-event tourism",
    authors: "Dai, G., & Gao, R.",
    venue: "International Journal of Tourism Research",
    status: ["Submitted", "Under Review"],
    citation:
      "Dai, G., & Gao, R. Manuscript on host-guest relationships and volunteer value co-creation in mega-event tourism. International Journal of Tourism Research. Submitted.",
    highlight: {
      en: "Examines how host-guest interactions, emotional bonds, and place-based relationships shape volunteers' value co-creation intentions in mega-event tourism.",
      zh: "考察主客互动、情感纽带与地方关系如何影响大型事件旅游中志愿者的价值共创意向。"
    }
  },
  {
    id: "atr-note",
    title: "Research note on intention-behavior gaps in locally sourced restaurant patronage",
    authors: "Gao, R.",
    venue: "Research note / working paper",
    status: ["Working Paper", "Research Note"],
    citation:
      "Gao, R. Research note on intention-behavior gaps in locally sourced restaurant patronage. Working paper.",
    highlight: {
      en: "Uses XGBoost and SHAP to examine whether the drivers of satisfaction, revisit intention, and actual patronage differ across consumer response stages.",
      zh: "运用 XGBoost 与 SHAP，考察满意度、重访意向与实际惠顾在不同消费者反应阶段中的驱动因素是否发生重构。"
    }
  },
  {
    id: "gai-governance",
    title: "Collaborative supervision strategies for risk issues of generative artificial intelligence in the tourism industry",
    authors: "Gao, R., & Wang, Y.",
    year: "2025",
    venue: "Technology Analysis & Strategic Management",
    status: ["Published"],
    doi: "https://doi.org/10.1080/09537325.2024.2434479",
    citation:
      "Gao, R., & Wang, Y. (2025). Collaborative supervision strategies for risk issues of generative artificial intelligence in the tourism industry. Technology Analysis & Strategic Management, 37(13), 4032-4050.",
    highlight: {
      en: "Uses evolutionary game theory and system dynamics to examine collaborative supervision strategies among government, GAI companies, and tourists.",
      zh: "运用演化博弈与系统动力学，分析政府、生成式人工智能企业与游客之间的协同监管策略。"
    }
  },
  {
    id: "manure-resource",
    title: "The effect of perceived value on farmers' livestock manure resource utilization behavior: Evidence from Shandong, China",
    authors: "Gao, R., Liu, G., Fan, Y., Wang, X., & Ren, Z.",
    year: "2023",
    venue: "Frontiers in Psychology",
    status: ["Published"],
    doi: "https://doi.org/10.3389/fpsyg.2023.1098587",
    citation:
      "Gao, R., Liu, G., Fan, Y., Wang, X., & Ren, Z. (2023). The effect of perceived value on farmers' livestock manure resource utilization behavior: Evidence from Shandong, China. Frontiers in Psychology, 14, 1098587.",
    highlight: {
      en: "Examines how perceived value shapes farmers' environmental resource utilization behavior through a multi-group structural equation model.",
      zh: "通过多群组结构方程模型，考察感知价值如何影响农户畜禽粪污资源化利用行为。"
    }
  }
];
