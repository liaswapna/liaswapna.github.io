import { useState } from "react";
import { Theme } from "../config/Theme";
import type { IProject } from "../types";

type TabKey = "decisions" | "architecture" | "why";

const TABS: { key: TabKey; title: string }[] = [
  { key: "decisions", title: "Decisions" },
  { key: "architecture", title: "Architecture" },
  { key: "why", title: "Why" },
];

export function ProjectCard({ project }: { project: IProject }) {
  const [tab, setTab] = useState<TabKey>("decisions");
  const c = Theme.colors;

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.teal }}>
          {project.label}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: c.accent }}>
          {project.title}
        </h3>
        <p className="leading-relaxed mb-4" style={{ color: c.muted }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: c.bg, color: c.muted, border: `1px solid ${c.grayLight}` }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.stats.map((s) => (
            <div key={s.label} className="text-center p-3 rounded-lg" style={{ background: c.bg }}>
              <p className="text-lg font-bold" style={{ color: c.accent }}>{s.value}</p>
              <p className="text-xs mt-1" style={{ color: c.gray }}>{s.label}</p>
            </div>
          ))}
        </div>
          <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-2 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
          style={{ background: c.accent, color: c.white }}
        >
          GitHub
        </a>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${c.grayLight}` }}>
        <div className="flex border-b" style={{ borderColor: c.grayLight }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="flex-1 px-4 py-3 text-xs font-semibold tracking-wide uppercase transition-colors"
              style={{
                color: tab === t.key ? c.accent : c.gray,
                borderBottom: tab === t.key ? `2px solid ${c.teal}` : "2px solid transparent",
                background: tab === t.key ? c.bg : "transparent",
              }}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="p-5 text-sm leading-relaxed" style={{ color: c.muted }}>
          {tab === "why" && (
            <div className="space-y-3">
              {project.why.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {tab === "decisions" && (
            <div className="space-y-2">
              {project.decisions.map((d) => (
                <div key={d.title} className="p-3 rounded-lg" style={{ background: c.bg }}>
                  <span className="font-semibold" style={{ color: c.accent }}>{d.title}:</span> {d.description}
                </div>
              ))}
            </div>
          )}

          {tab === "architecture" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
                {project.architectureLayers.map((l, i) => (
                  <div key={l} className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 rounded-md font-semibold"
                      style={{
                        background: i === 0 || i === project.architectureLayers.length - 1 ? c.accent : c.bg,
                        color: i === 0 || i === project.architectureLayers.length - 1 ? c.white : c.accent,
                        border: `1px solid ${c.teal}`,
                      }}
                    >
                      {l}
                    </span>
                    {i < project.architectureLayers.length - 1 && <span style={{ color: c.teal }}>→</span>}
                  </div>
                ))}
              </div>
              <p>{project.architectureDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
