import type { IExperienceEntry } from "../types";

export const experience: readonly IExperienceEntry[] = [
  {
    period: "May 2024 – Present",
    title: "Career Break — Parental Leave & Independent Development",
    company: "",
    points: [
      "Designed and built two full-stack applications end-to-end: a production-grade e-commerce platform and a weather app",
      "285 combined automated tests across both projects, with GitHub Actions CI/CD on each",
      "Applied layered architecture, async Python, and TypeScript strict mode throughout",
    ],
  },
  {
    period: "Jan 2020 – May 2024",
    title: "Software Developer",
    company: "Warner Bros. Discovery, Bellevue, WA",
    points: [
      "Maintained and enhanced authentication and authorization systems for the Max streaming platform, including OAuth 2.0 and OpenID Connect, and owned on-call support",
      "Designed and built the Add-On subscription feature, researching and implementing DynamoDB Transactions for atomic multi-table writes, contributing to a 43% subscriber conversion rate",
      "Designed and built the Product Management Orchestrator, an internal tool for managing campaigns, products, and SKUs behind 17MM+ promo codes, including its role-based access permissions",
      "Built an error notification system using AWS SQS, and maintained authorization policies in Go as security requirements evolved",
      "Partnered with cross-functional teams through agile processes, mentored peers, and led code reviews",
    ],
  },
  {
    period: "Apr 2019 – Oct 2019",
    title: "Software Developer",
    company: "Collabera Inc. (Client: Amazon Web Services), Seattle, WA",
    points: [
      "Built a network capacity visualization dashboard using Python Flask and Angular",
      "Integrated AWS Redshift and S3 to process global network metrics",
    ],
  },
] as const;
