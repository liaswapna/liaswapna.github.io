import { Theme } from "../config/Theme";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const c = Theme.colors;

  return (
    <section id="projects" className="py-24 px-6" style={{ background: c.white }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.teal }}>
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: c.accent }}>
          What I've Built
        </h2>
        <p className="mb-16 max-w-2xl" style={{ color: c.muted }}>
          Two projects built during my career break, each designed to demonstrate different
          engineering skills. Every line of code, every architectural decision, every test is my
          own work.
        </p>
        <div className="space-y-24">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
