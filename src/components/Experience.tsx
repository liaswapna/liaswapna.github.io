import { Theme } from "../config/Theme";
import { experience } from "../data/experience";

export function Experience() {
  const c = Theme.colors;

  return (
    <section id="experience" className="py-24 px-6" style={{ background: c.white }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.teal }}>
          Career
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: c.accent }}>
          Experience
        </h2>
        {experience.map((job, i) => (
          <div key={job.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                style={{ background: i === 0 ? c.teal : c.accent }}
              />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ background: c.grayLight }} />
              )}
            </div>
            <div className="pb-10">
              <p className="font-mono text-xs tracking-wide mb-1" style={{ color: c.teal }}>
                {job.period}
              </p>
              <h3 className="text-lg font-bold" style={{ color: c.text }}>
                {job.title}
              </h3>
              {job.company && (
                <p className="text-sm mb-2" style={{ color: c.gray }}>
                  {job.company}
                </p>
              )}
              <ul className="space-y-1.5 mt-2">
                {job.points.map((p, j) => (
                  <li key={j} className="text-sm flex gap-2" style={{ color: c.muted }}>
                    <span style={{ color: c.teal }}>▪</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
