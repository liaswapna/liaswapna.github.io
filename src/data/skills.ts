import type { ISkillCategory } from "../types";

export const skills: readonly ISkillCategory[] = [
  {
    name: "Languages",
    items: ["Go", "Python", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    name: "Backend & Frameworks",
    items: ["Gin", "Chi", "FastAPI", "Flask", "Django", "Node.js", "React", "Angular", "Tailwind CSS"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "DynamoDB", "MongoDB", "Redshift", "Snowflake"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Kafka"],
  },
  {
    name: "Protocols",
    items: ["REST", "gRPC", "OAuth 2.0", "OpenID Connect", "JWT", "Microservices"],
  },
  {
    name: "Practices",
    items: ["Git", "TDD", "CI/CD", "Agile/Scrum", "Code Review"],
  },
  {
    name: "Monitoring",
    items: ["Grafana", "Splunk", "Kibana", "Databricks"],
  },
] as const;
