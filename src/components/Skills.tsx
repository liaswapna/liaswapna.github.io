import { Theme } from "../config/Theme";
import { skills } from "../data/skills";

export function Skills() {
  const c = Theme.colors;

  return (
    <section id="skills" className="py-24 px-6" style={{ background: c.bg }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.teal }}>
          Toolbox
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: c.accent }}>
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.name}
              className="rounded-xl p-5"
              style={{ background: c.white, border: `1px solid ${c.grayLight}` }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: c.accent }}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: c.bg, color: c.muted, border: `1px solid ${c.grayLight}` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
