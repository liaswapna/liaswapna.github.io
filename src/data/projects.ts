import type { IProject } from "../types";

export const projects: readonly IProject[] = [
  {
    label: "Full-Stack E-Commerce",
    title: "E-Commerce Platform",
    description:
      "A production-grade e-commerce application built end-to-end during my career break. Covers the full shopping lifecycle with strict layered architecture, proving that backend design, testing, and DevOps skills are current.",
    stack: [
      "Python", "FastAPI", "PostgreSQL", "SQLAlchemy",
      "React", "TypeScript", "Tailwind", "Docker", "GitHub Actions",
    ],
    stats: [
      { value: "106", label: "Automated Tests" },
      { value: "20+", label: "API Endpoints" },
      { value: "5", label: "Data Models" },
    ],
    githubUrl: "https://github.com/liaswapna",
    why: [
      "I wanted to demonstrate that a career break doesn't mean skill erosion. Rather than a tutorial follow-along, I designed a system with real engineering tradeoffs, the kind of decisions you make on a team, applied solo.",
      "Every architectural choice (layered boundaries, composite keys, atomic transactions) was deliberate and documented.",
    ],
    decisions: [
      { title: "Atomic Checkout", description: "Stock check, decrement, create order, clear cart. Any failure triggers full SQLAlchemy rollback." },
      { title: "Composite PK on Cart", description: "Natural key (user_id + product_id) with JOIN queries for single-call retrieval." },
      { title: "price_at_purchase", description: "Snapshot on each OrderItem so order history stays accurate when prices change." },
      { title: "Soft Delete", description: "Products set is_active=False instead of DELETE, preserving historical order data integrity." },
      { title: "Anti-Enumeration Auth", description: "Same error for wrong email and wrong password, preventing probing of registered accounts." },
    ],
    architectureLayers: ["Request", "Route", "Service", "Repository", "DB"],
    architectureDescription:
      "OOP throughout with classes for every layer. Type hints on every function. Routes handle HTTP only. Services hold business logic. Repositories touch the database. Schemas validate with Pydantic.",
  },
  {
    label: "Full-Stack Weather App",
    title: "Weather Application",
    description:
      "A full-stack weather app demonstrating async Python, external API integration, in-memory caching, and frontend state management. Complementary skills to the e-commerce project.",
    stack: [
      "Python", "FastAPI (async)", "React", "TypeScript (strict)",
      "Tailwind", "Docker", "GitHub Actions", "Open-Meteo API",
    ],
    stats: [
      { value: "179", label: "Automated Tests" },
      { value: "~70%", label: "API Calls Saved" },
      { value: "2", label: "CI Pipelines" },
    ],
    githubUrl: "https://github.com/liaswapna",
    why: [
      "The e-commerce project proved database design and backend architecture. This project fills a different gap: async programming, external API integration, caching strategy, and race condition handling in React.",
      "Together, the two projects show I can build data-driven CRUD systems and real-time API integration apps.",
    ],
    decisions: [
      { title: "10-min TTL Cache", description: "In-memory cache on city coordinates reduces API calls by ~70%. Balances freshness vs. efficiency." },
      { title: "Race Condition Fix", description: "useWeather hook tracks the latest search and discards stale responses on rapid input." },
      { title: "Parallel API Calls", description: "Promise.all fetches weather + forecast simultaneously, cutting perceived load time." },
      { title: "Strict CORS", description: "Never allow_origins=['*']. Dev uses localhost, prod uses explicit FRONTEND_URL." },
      { title: "Path-Filtered CI", description: "Two pipelines so backend changes don't trigger frontend tests and vice versa." },
    ],
    architectureLayers: ["React App", "FastAPI", "Open-Meteo API"],
    architectureDescription:
      "6 React components with custom useWeather hook. ErrorBoundary for crash prevention. TypeScript strict mode with no implicit any. Multi-stage Docker builds with non-root user for security. 24 backend + 155 frontend tests.",
  },
] as const;
