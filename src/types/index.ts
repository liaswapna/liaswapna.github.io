export interface IStat {
  readonly value: string;
  readonly label: string;
}

export interface IDecision {
  readonly title: string;
  readonly description: string;
}

export interface IProject {
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly stats: readonly IStat[];
  readonly githubUrl: string;
  readonly why: readonly string[];
  readonly decisions: readonly IDecision[];
  readonly architectureLayers: readonly string[];
  readonly architectureDescription: string;
}

export interface IExperienceEntry {
  readonly period: string;
  readonly title: string;
  readonly company: string;
  readonly points: readonly string[];
}

export interface ISkillCategory {
  readonly name: string;
  readonly items: readonly string[];
}
