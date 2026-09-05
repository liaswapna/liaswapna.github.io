import { Theme } from "../config/Theme";

const highlights = [
  "5+ years professional experience",
  "Go, Python, TypeScript",
  "FastAPI, Gin, Chi, React",
  "AWS, Docker, Kubernetes",
  "M.S. Software Engineering",
  "Published researcher",
] as const;

export function About() {
  const c = Theme.colors;

  return (
    <section id="about" className="py-24 px-6" style={{ background: c.bg }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.teal }}>
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: c.accent }}>
          My Story
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-5">
            <p className="leading-relaxed" style={{ color: c.muted }}>
              I'm a backend-focused software developer with over five years of experience,
              most recently building authentication, subscription, and internal tooling systems
              at Warner Bros. Discovery. I hold a Master's in Software Engineering from Karunya
              Institute of Technology and Sciences and a Bachelor's in Computer Science from the
              University of Kerala, along with a Full-Stack Web Development Bootcamp certification
              from the University of Washington.
            </p>
            <p className="leading-relaxed" style={{ color: c.muted }}>
              My career started as a contract developer on{" "}
              <strong style={{ color: c.text }}>AWS's network team</strong> through Collabera Inc.,
              where I built a capacity visualization dashboard for global network metrics. At{" "}
              <strong style={{ color: c.text }}>Warner Bros. Discovery</strong>, I maintained and
              enhanced authentication and authorization systems for the Max streaming platform,
              and I designed and built the Add-On subscription feature, using DynamoDB
              Transactions to keep multi-table writes atomic, along with the internal Product
              Management Orchestrator used to manage campaigns and promo codes.
            </p>
            <p className="leading-relaxed" style={{ color: c.muted }}>
              In May 2024, I began a planned parental leave. Rather than step away from
              engineering, I designed and built two full-stack projects from scratch, each with
              its own automated test suite, CI pipeline, and production-style infrastructure.
            </p>
            <p className="leading-relaxed" style={{ color: c.muted }}>
              I'm now looking for my next role, ideally one centered on backend architecture,
              data modeling, and system design. I also have a published paper on cloud security
              in the International Journal of Scientific and Research.
            </p>
          </div>
          <div className="md:col-span-2">
            <div
              className="rounded-xl p-6"
              style={{ background: c.white, border: `1px solid ${c.grayLight}` }}
            >
              <h3 className="font-bold text-sm tracking-wide uppercase mb-4" style={{ color: c.accent }}>
                At a Glance
              </h3>
              {highlights.map((item) => (
                <p key={item} className="text-sm py-1.5 flex items-start gap-2" style={{ color: c.muted }}>
                  <span style={{ color: c.teal }}>▪</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
